function aesecb7(data,key,outType){
    
    key = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.AES.encrypt(data, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    if (outType=='HEX') {
        return encrypted.ciphertext.toString(CryptoJS.enc.Hex).toUpperCase();
    }else{
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }
}
function hmacSHA256(data,key){
    
    key = CryptoJS.enc.Utf8.parse(key);
    data=CryptoJS.enc.Utf8.parse(data)
    var encrypted = CryptoJS.HmacSHA256(data , key).toString()


    return encrypted.toUpperCase();
   
}



$(function(){
    var editingIndex=-1
    $('#OtherArgs').datagrid({
        fit:true,
        fitColumns:true,
        striped:true,
        rownumbers:true,
        border:true,
        singleSelect:true,
        columns:[[
            {field:'key',title:'参数名',width:100,editor:'text'},
            {field:'value',title:'参数值',width:200,editor:'text'}
        ]],data:(function(){
            var data=[];
            for(var i=1;i<=10;i++){
                data.push({key:'',value:''})
            }
            return data;
        })()
        ,onDblClickRow:function(rowIndex,rowData){
            if(editingIndex==rowIndex) {
                return;
            }
            if(editingIndex>-1 ) {
                $('#OtherArgs').datagrid('endEdit', editingIndex);
                editingIndex=-1;
            }
            $('#OtherArgs').datagrid('beginEdit', rowIndex);
            editingIndex=rowIndex;
            var editor=$('#OtherArgs').datagrid('getEditor',{index:rowIndex,field:'key'});
            $(editor.target).focus();
        }
    })

    try{
        var stroageObj=$.parseJSON(localStorage.getItem('tps-aes-logon'))
        $('#URL').val(stroageObj.url||'');
        $('#AESKey').val(stroageObj.aesKey||'');
        $('#TPSID').val(stroageObj.TPSID||'');
        $('#USERNAME').val(stroageObj.USERNAME||'');
        $('#DEPARTMENTCODE').val(stroageObj.DEPARTMENTCODE||'');
        var OtherArgs=stroageObj.OtherArgs||[];
        var dgData=$('#OtherArgs').datagrid('getData');
        for(var i=0;i<OtherArgs.length;i++){
            dgData.rows[i]=OtherArgs[i];
        }
        $('#OtherArgs').datagrid('loadData',dgData);

        
    }catch(e){}



    var log=function(msg,isHtml){
        var item=$('<div class="log-item"><div>').appendTo('#log');
        if(isHtml) {
            item.html(msg)
        }else{
            item.text(msg)
        }
       
    }

    $('#gen').click(function(){

        $('#log').empty();

        var cacheObj={};

        if(editingIndex>-1 ) {
            $('#OtherArgs').datagrid('endEdit', editingIndex);
            editingIndex=-1;
        }

        var url=$('#URL').val();
        if(url=='' && url.indexOf('form.htm')==-1) {
            $.messager.popover({msg:'URL不正确',type:'alert'});
            return;
        }
        cacheObj.url=url;
        url=url.split('?')[0];


        var aesKey=$('#AESKey').val();
        if(aesKey=='') {
            $.messager.popover({msg:'AESKey不正确',type:'alert'});
            return;
        }
        cacheObj.aesKey=aesKey;

        var TPSID=$('#TPSID').val();
        if(TPSID=='') {
            $.messager.popover({msg:'TPSID不正确',type:'alert'});
            return;
        }
        cacheObj.TPSID=TPSID;

        var USERNAME=$('#USERNAME').val();
        if(USERNAME=='') {
            $.messager.popover({msg:'USERNAME不正确',type:'alert'});
            return;
        }
        cacheObj.USERNAME=USERNAME;

       



        var timeStamp=Math.floor(Date.now()/1000)  //获取时间戳
        log('timeStamp时间戳(距格林尼治时间1970-01-01 0:0:0的秒数)：'+timeStamp)

        var AES7UserCodeSrc=USERNAME+','+timeStamp;
        log('AES7UserCode加密前（USERNAME+","+timeStamp）：'+AES7UserCodeSrc);

        var AES7UserCode=aesecb7(AES7UserCodeSrc,aesKey,'HEX');
        log('AES-ECB-PKCS7Padding 输出16进制：'+AES7UserCode);

        var DEPARTMENTCODE=$('#DEPARTMENTCODE').val()

        var argArr=[],argMap={};
        argArr.push('TPSID='+TPSID);
        argArr.push('AES7UserCode='+AES7UserCode);
        argArr.push('USERNAME='+USERNAME);
        argMap['TPSID']=TPSID;
        argMap['AES7UserCode']=AES7UserCode;
        argMap['USERNAME']=USERNAME;

        if(DEPARTMENTCODE) {
            argArr.push('DEPARTMENTCODE='+DEPARTMENTCODE);
            argMap['DEPARTMENTCODE']=DEPARTMENTCODE;
            
        }

        cacheObj.DEPARTMENTCODE=DEPARTMENTCODE;

        

        cacheObj.OtherArgs=[];


        


        var rows=$('#OtherArgs').datagrid('getRows');
        $.each(rows,function(){
            if(this.key && this.value && this.key!='a') {
                argArr.push(this.key+'='+this.value);

                argMap[this.key]=this.value;

                cacheObj.OtherArgs.push(this)
                

            }
        })

        try{
            localStorage.setItem('tps-aes-logon', JSON.stringify(cacheObj))
            log('已将数据缓存至localStorage');
        }catch(e){}



        url=url+'?'+argArr.join('&');
        log('未签名链接：'+url);

        argArr=[];
        var argNameArr=Object.keys(argMap);  //获取所有参数名
        argNameArr.sort();  //参数名排序

        for(var i=0;i<argNameArr.length;i++){  //参数
            argArr.push(argNameArr[i]+'='+argMap[argNameArr[i]]);
        }

        var sortArgStr=argArr.join('&');
        log('将参数按参数名排序后字符串：'+sortArgStr);
    
        var signStr=sortArgStr+timeStamp+aesKey;
        log('再拼接上timeStamp和AESKey：'+signStr);

        var signature=hmacSHA256(signStr,aesKey);
        log('上字符串进行HMACSHA256后：'+signature);
        
        url=url+'&timeStamp='+timeStamp+'&signature='+signature;
        log('链接再拼接上timeStamp和signature参数，最终为：'+url);


        log('将上链接放到浏览器中访问测试');
        
        
        


    })

    $('#clear').click(function(){
        
        $('#URL').val('');
        $('#AESKey').val('');
        $('#TPSID').val('');
        $('#USERNAME').val('');
        $('#DEPARTMENTCODE').val('');
        var dgData=$('#OtherArgs').datagrid('getData');
        for(var i=0;i<dgData.rows.length;i++){
            dgData.rows[i].key='';
            dgData.rows[i].value='';
        }
        $('#OtherArgs').datagrid('loadData',dgData);

        $('#log').empty();

    })
    $('#clear-storage').click(function(){
        localStorage.setItem('tps-aes-logon','')
        

    })



})