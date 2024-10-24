
$(function () {

    var zvData={
        "2016":{
            text:"Caché 2016",
            generator:"Cache",
            version:"25",
            zv:"Cache for Windows (x86-64) 2016.2 (Build 736U)",
            value:"2016"
        },
        "iris":{
            text:"IRIS",
            generator:"IRIS",
            version:"26",
            zv:"IRIS for UNIX (Red Hat Enterprise Linux 8 for x86-64) 2023.1.1 (Build 380U)",
            value:"iris"
        }
    }
    var filesData=[];
    $('#zv').combobox({
        data:[zvData['2016'],zvData['iris']],
        valueField:'value',
        textField:'text',
        panelHeight:'auto',
        onSelect:function(rec){
            console.log(rec);
        }
    })


    try{
        var stroageObj=$.parseJSON(localStorage.getItem('file-to-xml'));
        $('#zv').combobox('setValue',stroageObj.zv);
        $('#application').val(stroageObj.application);
        $('#def-path').val(stroageObj.defPath);
    }catch(e){}

    $('#file-table').datagrid({
        fit:true,
        fitColumns:true,
        bodyCls:'panel-header-gray',
        singleSelect:false,
        //pagination:true,
        rownumbers:true,
        pageSize:1000,
        pageList:[1000],
        columns:[[
            {field:'ck',checkbox:true},
            {field:'name',title:'文件名',width:300},
            {field:'type',title:'类型',width:100},
            {field:'size',title:'大小',width:100},
            {field:'iFilePath',title:'相对web应用程序的路径',width:300,formatter:function(val,row,ind){
                var defPath=$('#def-path').val();
                return '<input type="text" class="textbox iFilePath" data-id="'+row.id+'" value="'+defPath+'" style="content-box: border-box;width:100%;"/>'
            }},
            {field:'iFileName',title:'新文件名',width:300,formatter:function(val,row,ind){
                return '<input type="text" class="textbox iFileName" data-id="'+row.id+'" value="'+row.name+'" style="content-box: border-box;width:100%;"/>'
            }}
        ]],
        idField:'id',
        checkOnSelect:false,
        url:"",
        data:[],
        toolbar:[{
            text:'选择文件',iconCls:'icon-file',handler:function(){
                $('#file').trigger('click');
            }
        },{
            text:'清除文件',iconCls:'icon-clear',handler:function(){
                $('#file').val('');
                filesData = [];
                $('#file-table').datagrid('clearSelections');
                $('#file-table').datagrid('loadData',filesData);
                
            }
        },{
            text:'转换',iconCls:'icon-transfer',handler:function(){
                var rows=$('#file-table').datagrid('getChecked');
                var toTrans=[];
                if(rows.length>0){
                    $.each(rows,function(){
                        var row=this;
                        var iFilePath=$('.iFilePath[data-id="'+row.id+'"]').val();
                        var iFileName=$('.iFileName[data-id="'+row.id+'"]').val();
                        if(iFilePath!='' && iFileName!=''){
                            row.iFilePath=iFilePath;
                            row.iFileName=iFileName;
                            toTrans.push(row);
                        }
                    })

                    if(toTrans.length>0){
                        
                        var zv=$('#zv').combobox('getValue');
                        if(!zvData[zv]){
                            $.messager.popover({msg:'请选择数据库版本',type:'error'});
                            return;
                        }
                        var o=$.extend({},zvData[zv]);
                        o.application=$('#application').val(); 
                        if(!o.application){
                            $.messager.popover({msg:'请填写Web应用程序',type:'error'});
                            return;
                        }
                        
                        var defPath=$('#def-path').val();
                        var cacheObj={
                            zv:zv,
                            application:o.application,
                            defPath:defPath
                        }

                        try{
                            localStorage.setItem('file-to-xml', JSON.stringify(cacheObj))
                            log('已将数据缓存至localStorage');
                        }catch(e){}

                        
                        o.ts=formatDate(new Date(),'yyyy-MM-dd HH:mm:ss');                   

                        var headerTmpl='<?xml version="1.0" encoding="UTF-8"?>\r\n<Export generator="${generator}" version="${version}" zv="${zv}" ts="${ts}">';
                        var itemTmpl='<CSPBase64 name="${name}" application="${application}" default="1">';
                        
                        var headerXml=parseTmpl(headerTmpl,o);
                        
                        var xml=headerXml+'\r\n';
                        $.each(toTrans,function(){
                            var row=this;

                            xml+=parseTmpl(itemTmpl,{name:row.iFilePath+(row.iFilePath.endsWith('/')?'':'/')+row.iFileName,application:o.application})+'\r\n';
                            xml+=(row.result.indexOf(',')>-1?row.result.split(',')[1]:row.result)+'\r\n';
                            xml+='</CSPBase64>\r\n';
                        })
                        xml+='</Export>';

                        $.messager.prompt('确定','请输入文件名',function(fileName){
                            if(fileName){
                                downloadText(xml,'text/xml',fileName.endsWith('.xml')?fileName:(fileName+'.xml'));
                            }else{
                                $.messager.popover({msg:'请输入文件名',type:'error'});
                            }
                        })
                        $('.messager-body .messager-input').val('export-'+formatDate(new Date(),'yyyyMMdd-HHmmss')+'.xml')
                    }else{
                        $.messager.popover({msg:'请填写iFilePath和iFileName',type:'error'});
                    }
                    
                }else{
                    $.messager.popover({msg:'请勾选要导出的文件',type:'error'});
                }
                
                
            }
        },{
            text:'说明',iconCls:'icon-help',handler:function(){
                $('#tip-win').dialog('open');
            }
        },]
    })


    function show(files) {
        readAsDataURL(files, function (ret) {
            console.log(ret);
            
            var newCnt=0;

            $.each(ret,function(){
                var ind=$.easyui.indexOfArray(filesData,'id',this.id);
                if(ind>-1){
                    filesData[ind]=this;
                }else{
                    filesData.push(this);
                    newCnt++;
                }
            })
            $.messager.popover({msg:'您选择了'+ret.length+'个文件，有'+newCnt+'个新文件',type:'info'})
            $('#file-table').datagrid('loadData',filesData);

        });
    }
    function dropHandler(e) {
        e.stopPropagation();
        e.preventDefault();
        var dataTransfer = e.dataTransfer || e.originalEvent.dataTransfer;
        var files = dataTransfer.files;
        show(files);

    }
    function dragOverHandler(e) {
        e.stopPropagation();
        e.preventDefault();
        var dataTransfer = e.dataTransfer || e.originalEvent.dataTransfer;
        dataTransfer.dragEffect = 'copy';
    }

    $('#file').change(function(){
        console.log(this.files);
        show(this.files);
    });

    $('body').on('drop', dropHandler);
    $('body').on('dragover', dragOverHandler);
})

