
;(function(){
    var _META={
        Class:{
            Name:{

            },
            Abstract:{
                type:'boolean',
                on:'Abstract',
                off:'Not Abstract'
            },
            ClassType:{
                type:'string'
            },
            ClientDataType:{
                type:'string'
            },
            ClientName:{
                type:'string'
            },
            CompileAfter:{
                type:'string',
                multiple:true
            },
            ConstraintClass:{
                type:'string',
                multiple:true
            },
            Copyright:{

            },
            DdlAllowed:{
                type:'boolean',
                on:'DdlAllowed',
                off:'Not DdlAllowed'
            },
            DependsOn:{
                type:'string',
                multiple:true
            },
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:'Not Deprecated'
            },
            Description:{

            },
            EmbeddedClass:{
                type:'string',
                multiple:true
            },
            Final:{
                type:'boolean',
                on:'Final',
                off:'Not Final'
            },
            GeneratedBy:{
                type:'string'
            },
            Hidden:{
                type:'boolean',
                on:'Hidden',
                off:'Not Hidden'
            },
            Import:{},
            IncludeCode:{},
            IncludeGenerator:{},
            IndexClass:{
                type:'string',
                multiple:true
            },
            Inheritance:{
                type:'string'
            },
            language:{
                type:'string'
            },
            LegacyInstanceContext:{
                type:'boolean',
                on:'LegacyInstanceContext',
                off:'Not LegacyInstanceContext'
            },
            MemberSuper:{
                type:'string',
                multiple:true
            },
            NoContext:{
                type:'boolean',
                on:'NoContext',
                off:'Not NoContext'
            },
            NoExtent:{
                type:'boolean',
                on:'NoExtent',
                off:'Not NoExtent'
            },
            OdbcType:{
                type:'string'
            },
            Owner:{
                type:'block'
            },
            ProcedureBlock:{
                type:'boolean',
                on:'ProcedureBlock',
                off:'Not ProcedureBlock'
            },
            ProjectionClass:{
                type:'string',
                multiple:true
            },
            PropertyClass:{
                type:'string',
                multiple:true
            },
            QueryClass:{
                type:'string',
                multiple:true
            },
            ServerOnly:{
                type:'string'
            },
            Sharded:{
                type:'string'
            },
            SoapBindingStyle:{
                type:'string'
            },
            SoapBodyUse:{
                type:'string'
            },
            SqlCategory:{
                type:'string'
            },
            SqlRowIdName:{
                type:'string'
            },
            SqlRowIdPrivate:{
                type:'boolean',
                on:'SqlRowIdPrivate',
                off:'Not SqlRowIdPrivate'
            },
            SqlTableName:{
                type:'string'
            },
            StorageStrategy:{
                type:'string'
            },
            System:{
                type:'string'
            },
            TriggerClass:{
                type:'string',
                multiple:true
            },
            ViewQuery:{
                type:'block'
            }
            
        },
        Parameter:{
            Name:{},
            Abstract:{
                type:'boolean',
                on:'Abstract',
                off:''
            },
            Constraint:{
                type:'string'
            },
            Default:{},
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{},
            Encoded:{
                type:'boolean',
                on:'Encoded',
                off:''
            },
            Expression:{},
            Final:{
                type:'boolean',
                on:'Final',
                off:''
            },
            Flags:{
                type:'string'
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            Type:{}
        },
        Property:{
            Name:{},
            Aliases:{
                type:'block'
            },
            Calculated:{
                type:'boolean',
                on:'Calculated',
                off:''
            },
            Cardinality:{
                type:'string'
            },
            ClientName:{
                type:'string'
            },
            Collection:{
            },
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{
            },
            Final:{
                type:'boolean',
                on:'Final',
                off:''
            },
            Identity:{
                type:'boolean',
                on:'Identity',
                off:''
            },
            InitialExpression:{
                type:'string'
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            Inverse:{
                type:'string'
            },
            MultiDimensional:{
                type:'boolean',
                on:'MultiDimensional',
                off:''
            },
            NoModBit:{
                type:'boolean',
                on:'NoModBit',
                off:''
            },
            NotInheritable:{
                type:'boolean',
                on:'NotInheritable',
                off:''
            },
            OnDelete:{
                type:'string'
            },
            Parameters:{
            },
            Private:{
                type:'boolean',
                on:'Private',
                off:''
            },
            ReadOnly:{
                type:'boolean',
                on:'ReadOnly',
                off:''
            },
            Relationship:{
            },
            Required:{
                type:'boolean',
                on:'Required',
                off:''
            },
            SequenceNumber:{
            },
            ServerOnly:{
                type:'string'
            },
            SqlCollation:{
                type:'string'
            },
            SqlColumnNumber:{
                type:'string'
            },
            SqlComputeCode:{
                type:'block'
            },
            SqlComputed:{
                type:'boolean',
                on:'SqlComputed',
                off:''
            },
            SqlComputeOnChange:{
                type:'string',
                multiple:true
            },
            SqlFieldName:{
                type:'string'
            },
            SqlListDelimiter:{
                type:'string'
            },
            SqlListType:{
                type:'string'
            },
            Transient:{
                type:'boolean',
                on:'Transient',
                off:''
            },
            Type:{
            }
        },
        Index:{
            Name:{},
            Abstract:{
                type:'boolean',
                on:'Abstract',
                off:''
            },
            Condition:{
                type:'block'
            },
            CoshardWith:{
                type:'string'
            },
            Data:{
                type:'string',
                multiple:true,
            },
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{
            },
            Extent:{
                type:'boolean',
                on:'Extent',
                off:''
            },
            IdKey:{
                type:'boolean',
                on:'IdKey',
                off:''
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            Parameters:{
            },
            PrimaryKey:{
                type:'boolean',
                on:'PrimaryKey',
                off:''
            },
            Properties:{
            },
            SequenceNumber:{
            },
            ShardKey:{
                type:'boolean',
                on:'ShardKey',
                off:''
            },
            SqlName:{
                type:'string'
            },
            Type:{
                type:'string'
            },
            TypeClass:{
            },
            Unique:{
                type:'boolean',
                on:'Unique',
                off:''
            }
        },
        Method:{
            Name:{},
            Abstract:{
                type:'boolean',
                on:'Abstract',
                off:''
            },
            ClassMethod:{
            },
            ClientMethod:{
        
            },
            ClientName:{
                type:'string'
            },
            CodeMode:{
                type:'string'
            },
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{
            },
            ExternalProcName:{
                type:'string'
            },
            Final:{
                type:'boolean',
                on:'Final',
                off:''
            },
            ForceGenerate:{
                type:'boolean',
                on:'ForceGenerate',
                off:''
            },
            FormalSpec:{
            },
            GenerateAfter:{
                type:'string',
                multiple:true
            },
            Hash:{
            },
            Implementation:{
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            Language:{
                type:'string'
            },
            NoContext:{
                type:'boolean',
                on:'NoContext',
                off:''
            },
            NotForProperty:{
                type:'boolean',
                on:'NotForProperty',
                off:''
            },
            NotInheritable:{
                type:'boolean',
                on:'NotInheritable',
                off:''
            },
            PlaceAfter:{
                type:'string',
                multiple:true
            },
            Private:{
                type:'boolean',
                on:'Private',
                off:''
            },
            ProcedureBlock:{
                type:'string'
            },
            PublicList:{
                type:'string',
                multiple:true
            },
            Requires:{
                type:'string'
            },
            ReturnResultsets:{
                type:'boolean',
                on:'ReturnResultsets',
                off:''
            },
            ReturnType:{
            },
            ReturnTypeParams:{
            },
            SequenceNumber:{
            },
            ServerOnly:{
                type:'string'
            },
            SoapAction:{
                type:'string'
            },
            SoapBindingStyle:{
                type:'string'
            },
            SoapBodyUse:{
                type:'string'
            },
            SoapMessageName:{
                type:'string'
            },
            SoapNameSpace:{
                type:'string'
            },
            SoapRequestMessage:{
                type:'string'
            },
            SoapTypeNameSpace:{
                type:'string'
            },
            SqlName:{
                type:'string'
            },
            SqlProc:{
                type:'boolean',
                on:'SqlProc',
                off:''
            },
            SqlRoutine:{
                type:'string'
            },
            WebMethod:{
                type:'boolean',
                on:'WebMethod',
                off:''
            },
            ZenMethod:{
                type:'boolean',
                on:'ZenMethod',
                off:''
            }
        },Query:{
            Name:{},
            ClientName:{
                type:'string'
            },
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{
            },
            ExternalProcName:{
                type:'string'
            },
            Final:{
                type:'boolean',
                on:'Final',
                off:''
            },
            FormalSpec:{
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            NotInheritable:{
                type:'boolean',
                on:'NotInheritable',
                off:''
            },
            Parameters:{
        
            },
            Private:{
                type:'boolean',
                on:'Private',
                off:''
            },
            SequenceNumber:{
            },
            ServerOnly:{
                type:'string'
            },
            SoapBindingStyle:{
                type:'string'
            },
            SoapBodyUse:{
                type:'string'
            },
            SoapNameSpace:{
                type:'string'
            },
            SqlName:{
                type:'string'
            },
            SqlProc:{
                type:'boolean',
                on:'SqlProc',
                off:''
            },
            SqlQuery:{
            },
            SqlView:{
                type:'boolean',
                on:'SqlView',
                off:''
            },
            SqlViewName:{
                type:'string'
            },
            Type:{
        
            },
            WebMethod:{
                type:'boolean',
                on:'WebMethod',
                off:''
            }
        },
        Trigger:{
            Name:{},
            Code:{
            },
            CodeMode:{
                type:'string'
            },
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{
            },
            Event:{
                type:'string'
            },
            Final:{
                type:'boolean',
                on:'Final',
                off:''
            },
            Foreach:{
                type:'string'
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            Language:{
                type:'string'
            },
            NewTable:{
                type:'string'
            },
            OldTable:{
                type:'string'
            },
            Order:{
                type:'string'
            },
            SequenceNumber:{
            },
            SqlName:{
                type:'string'
            },
            Time:{
                type:'string'
            },
            UpdateColumnList:{
                type:'string',
                multiple:true
            }
        },
        Storage:{
            Name:{}
        },
        ForeignKey:{
            Name:{},
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            NoCheck:{
                type:'boolean',
                on:'NoCheck',
                off:''
            },
            OnDelete:{
                type:'string',
                nullValues:['noaction']
            },
            OnUpdate:{
                type:'string',
                nullValues:['noaction']
            },
            Properties:{
            },
            ReferencedClass:{
            },
            ReferencedKey:{
            },
            SequenceNumber:{
            },
            SqlName:{
                type:'string'
            }
        },
        XData:{
            Name:{},
            Data:{
        
            },
            Deprecated:{
                type:'boolean',
                on:'Deprecated',
                off:''
            },
            Description:{
            },
            Internal:{
                type:'boolean',
                on:'Internal',
                off:''
            },
            MimeType:{
                type:'string',
                nullValues:['text/xml']

            },
            SchemaSpec:{
                type:'string'
            },
            SequenceNumber:{
                type:'integer'
            },
            XMLNamespace:{
                type:'string',
                quotePatten:/[:=,"]/
            }
        },
        UDLText:{
            Name:{}
        }
    }

    var LINE_FEED='\n';


    ///可多选字符串 单个不用括号  多个要加括号
    var multipleString2Text=function(str){
        if (str.indexOf(',')>-1) {
            return '('+str.split(',').join(', ')+')';
        }else{
            return str;
        }
    }
    var block2Text=function(str){
        return '{'+str+'}';
    }
    var boolean2Text=function(str,o){
        return str=='1'?o.on:o.off;
    }

    var isValidNumber=function(str){
        return /^(-?[1-9]\d*(\.\d+)?|0(\.0+)?|\.\d+)$/.test(str);
    }
    var paramValue2Text=function(str){
        if(str===null){
            return '""';
        }else if(isValidNumber(str)) {
            return str;
        }else{
            return '"'+str+'"';
        }
    }



    var getOoDefPropertyText=function(def,type){
        var meta=_META[type];
        if(!meta){
            return '';
        }
        var textArr=[];
        for(var key in meta) {
            var o=meta[key];
            if (o.type && def[key]){
                var value=def[key],text='';
                if(o.type=='string'){
                    if(o.nullValues && o.nullValues.indexOf(value)>-1){
                        text='';
                    }else if(o.multiple){
                        text=key+' = '+multipleString2Text(value);
                    }else if (o.quotePatten){
                        if(o.quotePatten.test(value)) {  //用引号引起来  将内部引号转成两个
                            text=key+' = '+'"'+value.replaceAll('"','""')+'"';
                        }else{
                            text=key+' = '+value;
                        }
                    }else{
                        text=key+' = '+value;
                    }
                }else if(o.type=='boolean'){
                    text=boolean2Text(value,o);
                }else if(o.type=='block'){
                    text=key+' = '+block2Text(value);
                }
                if(text){
                    textArr.push(text);
                }
            }

        }

        if(textArr.length>0){
            return ' [ '+textArr.join(', ')+' ]';
        }else{
            return '';
        }

    }




    function root2Udl(o){
        var attrs=o.attributes;
        var arr=[];
        for (var i=0,len=attrs.length;i<len;i++) {
            var name=attrs[i].name,
                value=attrs[i].value;
            arr.push(name+'="'+value+'"');
        }
        debugger;
        return {
            title:o.tagName,
            text:arr.join(LINE_FEED)
        }
    }
    function getValueByTagName(o,tagName){
        tagName=tagName.toLowerCase();
        for (var i=0,len=o.children.length;i<len;i++) {
            var item=o.children[i];
            if (item.tagName.toLowerCase()==tagName ){
                return item.textContent;
            }
        }
        return null;
    }
    
    function description2Udl(o){
        var desc=o.textContent;
        if(desc.startsWith(LINE_FEED)){desc=desc.slice(1);}
        var text=desc.split(LINE_FEED).join(LINE_FEED+'/// ');
        text='/// '+text;
        return {
            title:o.tagName,
            text:text
        }
    }
    function property2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        if(ooDef.Relationship=='1'){
            text+='Relationship '+name;
        }else{
            text+='Property '+name;
        }
        if(ooDef.Type) {
            if (ooDef.Collection) {
                text+=' As '+ooDef.Collection+' Of '+ooDef.Type;
            }else{
                text+=' As '+ooDef.Type;
            }
        }
        if(paramArr.length>0) {
            text+='('+paramArr.join(', ')+')';
        }

        text+=getOoDefPropertyText(ooDef,'Property');
        
        text+=';'+LINE_FEED;


        return {
            title:o.tagName+' '+name,
            text:text
        }
    }

    function parameter2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        
        text+='Parameter '+name;
        
        if(ooDef.Type) {
            text+=' As '+ooDef.Type;
        }
        if(paramArr.length>0) {
            text+='('+paramArr.join(', ')+')';
        }

        text+=getOoDefPropertyText(ooDef,'Parameter');
        

        if (ooDef.Expression){
            text+=' = '+block2Text(ooDef.Expression);
        }else if (ooDef.Default){
            text+=' = '+paramValue2Text(ooDef.Default);
        }

        text+=';'+LINE_FEED;
        return {
            title:o.tagName+' '+name,
            text:text
        }
    }
    function foreignKey2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        
        text+='ForeignKey '+name;
        
        
        text+='('+ooDef.Properties+')';
        
        text+=' References '+ooDef.ReferencedClass+'('+ooDef.ReferencedKey+')';

        text+=getOoDefPropertyText(ooDef,'ForeignKey');
        


        text+=';'+LINE_FEED
        return {
            title:o.tagName+' '+name,
            text:text
        }
    }

    function index2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        text+='Index '+name;

        var indexFields=[];
        if(ooDef.Properties){
            var props=ooDef.Properties.split(',');
            for(var ii=0;ii<props.length;ii++){
                var filedName=props[ii].split(':')[0];
                var filedType=props[ii].split(':')[1];
                if (filedType){
                    indexFields.push(filedName+' As '+filedType);
                }else{
                    indexFields.push(filedName);
                }
            }

            if(indexFields.length>1) { //多个需要加括号
                text+=' On ('+indexFields.join(', ')+')';
            }else if(ooDef.TypeClass){ //当有TypeClass 需要加括号
                text+=' On ('+indexFields[0]+')';
            }else{ //否则不需要加
                text+=' On '+indexFields[0]+'';
            }
        }

        if(ooDef.TypeClass) {
            text+=' As '+ooDef.TypeClass;
            if(paramArr.length>0 ){
                text+='('+paramArr.join(', ')+')';
            }
        }
        
        text+=getOoDefPropertyText(ooDef,'Index');

        text+=';'+LINE_FEED


        return {
            title:o.tagName+' '+name,
            text:text
        }
    }

    var parseFormalSpec=function(str){
        var len=str.length;
        
        var arr=[];

        var state=0,token='',isByRef=false,isOutput=false,argName='',argType='',argDefault='';
        for(var i=0;i<len;i++){
            var ch=str.charAt(i);
            if (state==0){ //初始状态
                if (ch=='&'){
                    isByRef=true;
                    state=1;
                }else if(ch=='*'){
                    isOutput=true;
                }else if(ch==' '){ //空格不用处理

                }else{
                    state=1;
                    token+=ch;
                }
            }else if (state==1){ //找参数名状态
                if (ch==':'){ //进入找类型状态
                    state=2;
                    argName=token;
                    token='';
                }else if(ch=='='){ //进入找默认值状态
                    state=3;
                    argName=token;
                    token='';
                }else if(ch==','){ //进入找参数状态
                    state=0;
                    argName=token;
                    token='';
                    arr.push({
                        name:argName,
                        type:argType,
                        default:argDefault,
                        byRef:isByRef,
                        output:isOutput
                    });
                    isByRef=false,isOutput=false,argName='',argType='',argDefault='';
                }else{  //继续找参数名
                    token+=ch;
                }
            }else if (state==2){ //参数类型与类型参数状态 %String(MAXLEN=10,TRUNCATE=1,DISPLAYLIST = ",Yes,No")
                if (ch=='='){ //进入找默认值状态
                    state=3;
                    argType=token;
                    token='';
                }else if(ch==','){
                    state=0;
                    argType=token;
                    token='';
                    arr.push({
                        name:argName,
                        type:argType,
                        default:argDefault,
                        byRef:isByRef,
                        output:isOutput
                    });
                    isByRef=false,isOutput=false,argName='',argType='',argDefault='';
                }else if (ch=="("){ //进入找类型参数状态  此状态为2状态下的一个子状态
                    state=21; 
                    token+=ch;
                }else{
                    token+=ch;
                }
            }else if (state==21){ // 进入找类型参数状态 找到下一个括号
                if (ch==')'){ //结束找类型参数状态
                    state=2;
                    token+=ch;
                }else if(ch=='"'){ //进入引号状态 找到下一个引号
                    state=211; 
                    token+=ch;                   
                }else{ //继续
                    token+=ch;
                }
            }else if (state==211){ // 进入引号状态 找到下一个引号
                if (ch=='"'){ //结束找类型参数状态
                    if(i<len-1 && str.charAt(i+1)=='"') { //下一个参数还是引号 表示这是引号中的引号转义
                        i=i+1;
                        token+=ch+ch;
                    }else{ //结束引号
                        state=21;
                        token+=ch;
                    }
                }else{ //继续
                    token+=ch;
                }
            }else if (state==3){ //参数默认值状态
                if (ch==','){ 
                    state=0;
                    argDefault=token;
                    token='';
                    arr.push({
                        name:argName,
                        type:argType,
                        default:argDefault,
                        byRef:isByRef,
                        output:isOutput
                    });
                    isByRef=false,isOutput=false,argName='',argType='',argDefault='';
                }else if(ch=='{') { //进入默认值表达式状态
                    state=31;
                    token+=ch;
                }else if(ch=='"') { //进入默认值引号状态
                    state=32;
                    token+=ch;
                }else{
                    token+=ch;
                }
            }else if (state==31){
                if (ch=='}'){ //结束找默认值表达式状态
                    state=3;
                    token+=ch;
                }else if(ch=='"') { //进入默认值表达式引号状态
                    state=311;
                    token+=ch;
                }else{ //继续
                    token+=ch;
                }
            }else if (state==311){
                if (ch=='"'){ //结束找默认值引号状态
                    if(i<len-1 && str.charAt(i+1)=='"') { //下一个参数还是引号 表示这是引号中的引号转义
                        i=i+1;
                        token+=ch+ch;
                    }else{ //结束引号 回到31
                        state=31;
                        token+=ch;
                    }
                }else{ //继续
                    token+=ch;
                }

            }else if (state==32){
                if (ch=='"'){ //结束找默认值引号状态
                    if(i<len-1 && str.charAt(i+1)=='"') { //下一个参数还是引号 表示这是引号中的引号转义
                        i=i+1;
                        token+=ch+ch;
                    }else{ //结束引号 回到3
                        state=3;
                        token+=ch;
                    }
                }else{ //继续
                    token+=ch;
                }
            }

            if(i==len-1 && token!=''){
                var mainstate=(state+'').charAt(0);
                if(mainstate=='1'){
                    argName=token;
                }else if(mainstate=='2'){
                    argType=token;
                }else if(mainstate=='3'){
                    argDefault=token;
                }
                if(mainstate>0){
                    arr.push({
                        name:argName,
                        type:argType,
                        default:argDefault,
                        byRef:isByRef,
                        output:isOutput
                    });
                }

            }


        }
        return arr;

    }

    var formalSpec2Text=function(str){
        var arr=parseFormalSpec(str);
        return arr.map(function(item){
            var itemText='';
            if(item.byRef) {
                itemText+='ByRef ';
            }else if(item.output) {
                itemText+='Output ';
            }
            itemText+=item.name;

            if(item.type) {
                itemText+=' As '+item.type;
            }
            if(item.default) {
                var ch=item.default.charAt(0);
                if( ch!='{' && ch!='"' && !isValidNumber(item.default) ) {  //默认值不是"开头 不是{开头 且不是纯数字  增加{}
                    itemText+=' = {'+item.default+'}';
                }else{
                    itemText+=' = '+item.default;
                }
            }

            return itemText;
        }).join(', ');
    }


    function method2Udl(o){
        
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        var methodType='Method'
        if(ooDef.ClassMethod=='1'){
            methodType='Class'+methodType;
        }
        if(ooDef.ClientMethod=='1'){
            methodType='Client'+methodType;
        }
        text+=methodType+' '+name;

        
        text+='('+formalSpec2Text(ooDef.FormalSpec||'')+')'
        
        if(ooDef.ReturnType){
            text+=' As '+ooDef.ReturnType;
        }
        if(ooDef.ReturnTypeParams) {
            text+='('+ooDef.ReturnTypeParams+')';
        }

        text+=getOoDefPropertyText(ooDef,'Method');

        text+=LINE_FEED+'{'+LINE_FEED

        text+=ooDef.Implementation||'';

        text+='}'+LINE_FEED


        return {
            title:o.tagName+' '+name,
            text:text
        }
    }
    function projection2Udl(o){
        var name=o.getAttribute('name');
        var text='';
        return {
            title:o.tagName+' '+name,
            text:text
        }
    }
    
    function query2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        text+='Query '+name;

        text+='('+formalSpec2Text(ooDef.FormalSpec||'')+')'
        
        if(ooDef.Type){
            text+=' As '+ooDef.Type;
        }
        if(paramArr.length>0 ){
            text+='('+paramArr.join(', ')+')';
        }

        text+=getOoDefPropertyText(ooDef,'Query');

        text+=LINE_FEED+'{'+LINE_FEED

        if(ooDef.SqlQuery){
            text+=ooDef.SqlQuery+LINE_FEED;
        }

        text+='}'+LINE_FEED


        return {
            title:o.tagName+' '+name,
            text:text
        }
    }
    function storage2Udl(o){
        var name=o.getAttribute('name');
        var text=LINE_FEED;

        text+='Storage '+name+LINE_FEED+'{';
        
        text+=o.innerHTML;

        text+='}'+LINE_FEED

        return {
            title:o.tagName+' '+name,
            text:text
        }
    }
    function trigger2Udl(o){
        
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        text+='Trigger '+name;

        text+=getOoDefPropertyText(ooDef,'Trigger');

        text+=LINE_FEED+'{'+LINE_FEED

        if(ooDef.Code){
            text+=ooDef.Code+LINE_FEED;
        }

        text+='}'+LINE_FEED


        return {
            title:o.tagName+' '+name,
            text:text
        }
    }
    function udlText2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text='';

        if(ooDef.Content){
            if(ooDef.Content.endsWith(LINE_FEED)) {
                text+=ooDef.Content.substring(0,ooDef.Content.length-LINE_FEED.length);
            }else{
                text+=ooDef.Content;
            }
        }
        return {
            title:o.tagName+' '+name,
            text:text
        }
    }
    function xData2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={},paramArr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Description'){
                ooDef[tagName]=description2Udl(item).text;
            }else if(tagName=='Parameter') {
                var paramName=item.getAttribute('name');
                var paramValue=item.getAttribute('value');
                paramArr.push(paramName+'='+paramValue2Text(paramValue));
                
            }else{
                ooDef[tagName]=item.textContent;
            }
        }

        var text=LINE_FEED;
        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        text+='XData '+name;

        text+=getOoDefPropertyText(ooDef,'XData');

        text+=LINE_FEED+'{'+LINE_FEED

        if(ooDef.Data){
            text+=ooDef.Data+LINE_FEED;
        }

        text+='}'+LINE_FEED


        return {
            title:o.tagName+' '+name,
            text:text
        }
    }


    function cls2Udl(o){
        var name=o.getAttribute('name');

        var ooDef={};
        var arr=[];
        for (var i=0,len=o.children.length;i<len;i++) {
            var udl;
            var item=o.children[i];
            var tagName=item.tagName;
            if(tagName=='Property') {
                udl=property2Udl(item)
            }else if(tagName=='Parameter') {
                udl=parameter2Udl(item)
            }else if(tagName=='ForeignKey') {
                udl=foreignKey2Udl(item);
            }else if(tagName=='Index') {
                udl=index2Udl(item);
            }else if(tagName=='Method') {
                udl=method2Udl(item);
            }else if(tagName=='Projection') {
                udl=projection2Udl(item);
            }else if(tagName=='Query') {
                udl=query2Udl(item);
            }else if(tagName=='Storage') {
                udl=storage2Udl(item);
            }else if(tagName=='Trigger') {
                udl=trigger2Udl(item);
            }else if(tagName=='UDLText') {
                udl=udlText2Udl(item);
            }else if(tagName=='XData') {
                udl=xData2Udl(item);
            }else if(tagName=='Description') {
                ooDef[tagName]=description2Udl(item).text;
            }else{
                ooDef[tagName]=item.textContent;
            }
            
            if (udl){
                arr.push(udl.text)
            }

        }

        var text='';
        if(ooDef.Copyright){
            text+=ooDef.Copyright+LINE_FEED+LINE_FEED;
        }
        if(ooDef.Import){
            text+='Import '+multipleString2Text(ooDef.Import);
            text+=LINE_FEED+LINE_FEED;
        }
        if(ooDef.IncludeCode){
            text+='Include '+multipleString2Text(ooDef.IncludeCode);
            text+=LINE_FEED+LINE_FEED;
        }
        if(ooDef.IncludeGenerator){
            text+='IncludeGenerator '+multipleString2Text(ooDef.IncludeGenerator);
            text+=LINE_FEED+LINE_FEED;
        }

        if(ooDef.Description){text+=ooDef.Description+LINE_FEED;}
        text+='Class '+name;
        if(ooDef.Super) {
            text+=' Extends '+multipleString2Text(ooDef.Super);
        }

        
        text+=getOoDefPropertyText(ooDef,'Class');
        


        text=text+LINE_FEED+'{'+LINE_FEED;

        var allText=text+arr.join('')+LINE_FEED+'}';


        return {
            title:o.tagName+' '+name,
            language:'cos',
            text:allText
        }
    }
    function routine2Udl(o){
        var name=o.getAttribute('name');
        return {
            title:o.tagName+ ' '+name,
            language:'cos',
            text:o.textContent
        }
    }
    function csp2Udl(o){
        var name=o.getAttribute('name');
        return {
            title:o.tagName+ ' '+name,
            language:name.endsWith('.js')?'javascript':'html',
            text:o.textContent
        }
    }
    function cspbase642Udl(o){
        var name=o.getAttribute('name');
        return {
            title:o.tagName+ ' '+name,
            language:'',
            text:o.textContent
        }
    }
    function prj2Udl(o){
        var name=o.getAttribute('name');
        return {
            title:o.tagName+ ' '+name,
            language:'xml',
            text:o.innerHTML
        }
    }
    function unknown2Udl(o){
        var name=o.getAttribute('name');
        return {
            title:o.tagName+ ' '+name,
            language:'',
            text:o.textContent
        }
    }


    function xml2Udl(o) {
    
        var tagName=o.tagName.toLowerCase();

        if(tagName=='project') {
            return prj2Udl(o)
        }else if(tagName=='class') {
            return cls2Udl(o)
        }else if(tagName=='csp') {
            return csp2Udl(o)
        }else if(tagName=='routine') {
            return routine2Udl(o)
        }else if(tagName=='cspbase64') {
            return cspbase642Udl(o)
        }else{
            return unknown2Udl(o)
        }

    }
    window.xml2Udl=xml2Udl;
})();



function readAsText(files, callback) {
    var ret = [], mylen = files.length;;
    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        reader.onload = (function (file) {
            return function () {
                ret.push({ name: file.name, result: this.result });
                mylen--;
                if (mylen == 0) callback(ret);
            }
        })(f);;
        reader.readAsText(f);
    }

}

function readAsDataURL(files) {
    var p = document.getElementById('container');
    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();

        reader.onload = (function (file) {
            return function (e) {
                var span = document.createElement('span');
                span.innerHTML = '<img style="padding: 0 10px;" width="100" src="' + this.result + '" alt="' + file.name + '" />';

                p.insertBefore(span, null);
            };
        })(f);
        //读取文件内容
        reader.readAsDataURL(f);
    }

}


$(function () {
    var srcXml=[],srcXmlName=[],srcXmlHighlight='';
    $('#win').dialog({
        width: Math.min(1600, $(window).width() - 100),
        height: Math.min(800, $(window).width() - 50),
        modal: true,
        closed:true,
        title: '原文',
        buttons: [
            {
                text:'确定',
                handler:function(){
                    showFileTree(srcXml);
                    $('#win').dialog('close');
                }
            },{
                text:'取消',
                handler:function(){
                    $('#win').dialog('close');
                }
            }
        ],onClose:function(){
            $('#src').empty();
            if(srcXml.length>0){
                $('#show-src').show();
            }else{
                $('#show-src').hide();
            }
        }
    })

    $('#tree').tree({
        data:[],
        animate:true,
        lines:true,
        onClick:function(node){
            var xo=node.xo;
            if(xo){
                console.log(xo);

                var highlightCode=hljs.highlight(xo.outerHTML,{language:'xml'});
                $('#item-xml').html(hljs.lineNumbersValue(highlightCode.value));
                var udl=node.udl
                if(!udl){
                    udl=xml2Udl(xo);
                    node.udl=udl;
                }
                if(udl){
                    if(udl.language) {
                        var highlightCode=hljs.highlight(udl.text,{language:udl.language});
                        $('#item-udl').html(hljs.lineNumbersValue(highlightCode.value));
                        $('#item-udl-nln').html(highlightCode.value);
                    }else{
                        $('#item-udl').html(udl.text);
                        $('#item-udl-nln').html(udl.text);
                    }
                    
                }

            }
        }
    })

    function showFileTree(srcXml){
        var parser=new DOMParser();

        var rootData=[];
        for (var jj=0;jj<srcXml.length;jj++){
            var itemSrcXml=srcXml[jj];

            
            var doc=parser.parseFromString(itemSrcXml,"text/xml");
        
            var root=doc.getElementsByTagName('Export')[0];
            
            var o={};
            if (root){
                for (var i=0,len=root.children.length;i<len;i++) {
                    var item=root.children[i];
                    var tagName=item.tagName.toLowerCase();
                    if(tagName=='csp' && item.getAttribute('name') && item.getAttribute('name').endsWith('.js')){
                        tagName='javascript';
                    }

                    if(!o[tagName]) {
                        o[tagName]={
                            id:'file'+jj+tagName,
                            text:tagName,
                            children:[]
                        };
                    }
                    o[tagName].children.push({
                        id:tagName+'-'+o[tagName].children.length,
                        text:item.getAttribute('name'),
                        xo:item
                    })
                }
            }
            var data=[]
            for(var i in o){
                data.push(o[i]);
            }

            rootData.push({
                id:'file'+jj,
                text:srcXmlName[jj],
                children:data
            })

        }
        $('#tree').tree('loadData',rootData);
        $('#item-xml,#item-udl').html('');

    }


    

    $('#kw').keywords({
        singleSelect:true,
        onClick:function(v){
            if(v.text=='xml'){
                $('#item-udl-c').hide();
                $('#item-udl-nln-c').hide();
                $('#item-xml-c').show();
            }else if(v.text=='udl'){
                $('#item-xml-c').hide();
                $('#item-udl-nln-c').hide();
                $('#item-udl-c').show();
            }else if(v.text=='udl-nln'){
                $('#item-udl-nln-c').show();
                $('#item-xml-c').hide();
                $('#item-udl-c').hide();
            }
        },
        items:[
            {text:'udl',id:'btn-item-udl',selected:true},
            {text:'xml',id:'btn-item-xml'},
            {text:'udl-nln',id:'btn-item-udl-nln'}
            
        ]
    });




    $('#show-src').click(function(){
        $('#win').dialog('open');
        $('#src').html(srcXmlHighlight);
    })

    function show(files) {
        readAsText(files, function (ret) {
            console.log(ret);

            srcXml=[],srcXmlName=[],srcXmlHighlight='';
            $('#tree').tree('loadData',[]);
            $('#item-xml,#item-udl').html('');



            for (var i = 0, len = ret.length; i < len; i++){
                srcXml.push(ret[i].result);
                srcXmlName.push(ret[i].name);
            }


            var highlightCode=hljs.highlight(srcXml.join('\n\n'),{language:'xml'});

            srcXmlHighlight=hljs.lineNumbersValue(highlightCode.value)


            $('#win').dialog('open').dialog('setTitle',srcXmlName.join('+')+' - 原文');
            $('#src').html(srcXmlHighlight);

            //$('#src').val(ret[0].result);
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
    $('#file-sel').click(function(){
        $('#file').trigger('click');

    })
    $('body').on('drop', dropHandler);
    $('body').on('dragover', dragOverHandler);
})

