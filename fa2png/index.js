$(function(){
	var saveFile = function (data,filename) {
		//alert('zz'+data)
		if (window.navigator.msSaveOrOpenBlob) {
		    var bstr = atob(data.split(",")[1])
		    var n = bstr.length
		    var u8arr = new Uint8Array(n)
		    while (n--) {
		      u8arr[n] = bstr.charCodeAt(n)
		    }
		    var blob = new Blob([u8arr])
		    window.navigator.msSaveOrOpenBlob(blob, filename)
		} else {
		    var save_link=document.createElementNS('http://www.w3.org/1999/xhtml','a');  //a元素或则可以放图片地址的元素

		    save_link.href=data;              //a元素中图片的引入用href等等
		    save_link.download=filename;    // 下载的名称
		    var event = document.createEvent('MouseEvents');//创建event事件
		    console.log(event);
		    //initMouseEvent 方法用于初始化通过 DocumentEvent 接口创建的 MouseEvent 的值, 详见下文：
		    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		    save_link.dispatchEvent(event);
		}
	}


    $('#font-class').combobox({
        url:'./data/fa-v470.json',
        method:'get',
        valueField:'cls',
        textField:'cls',
        onChange:function(nv){
            debounced_preview()
        },defaultFilter:4,
        formatter:function(row){
            return '<div style="font-size:16px;line-height:28px;">'+'<i class="fa '+row.cls+'"></i><span style="padding-left:5px">'+row.cls+'</span></div>'
        }
    });

    $('#font-size,#font-color,#font-bg,#font-padding').on('keyup',function(e){
        if(e.keyCode==13){
            debounced_preview();
        }
    })


    var preview=function(){

        
        $('#prev').empty();
        var icon=$('#font-class').combobox('getValue');
        if(!icon) {
            return;
        }

        var color=$('#font-color').val();
        var backgroundColor=$('#font-bg').val();
        
        if(color=='') color='transparent';
        if (backgroundColor=='') backgroundColor='transparent';
        
        var fontSize=$('#font-size').val();
        fontSize=parseInt(fontSize)||16;
        

        var padding=$('#font-padding').val();

        padding=parseInt(padding)||0;

        



        $('#prev').append('<i class="fa '+icon+'"></i>');

        $('#prev').css({
            color:color,
            backgroundColor:backgroundColor,
            width:fontSize+'px',
            height:fontSize+'px',
            lineHeight:fontSize+'px',
            fontSize:fontSize+'px',
            padding:padding+'px'
        })

        var picSize=fontSize+padding*2;

        var mainWidth=$('#right').width(),mainHeight=$('#right').height();
        var top=(mainHeight-picSize-2)/2,left=(mainWidth-picSize-2)/2;
        $('#prev-wrapper').css({
            width:picSize+'px',
            height:picSize+'px',
            top:top+'px',
            left:left+'px'

        })
    }
    debounced_preview=$.hisui.debounce(preview,200);


    $('#preview').click(function(){
        preview();
    })

    $('#download').click(function(){
        var icon=$('#font-class').combobox('getValue');
        if(!icon) {
            $.messager.popover({msg:'请选择图标类',type:'alert'})
            return;
        }
        var color=$('#font-color').val();
        var backgroundColor=$('#font-bg').val();
        if(color=='') color='transparent';
        if (backgroundColor=='') backgroundColor='transparent';
        var fontSize=$('#font-size').val();
        fontSize=parseInt(fontSize)||16;
        var padding=$('#font-padding').val();
        var filename=icon+'_'+color.replace('#','')+'_'+backgroundColor.replace('#','')+'_'+fontSize;
        if (padding && padding>0) {
            filename=filename+'_'+padding
        }
        filename=filename+'.png';

        $.messager.prompt('确认','请输入文件名',function(r){
            if(r) {
				html2canvas($('#prev')[0], {useCORS:true}).then(function(canvas){
					
				    var url = canvas.toDataURL('image/png');//图片地址
				    saveFile(url,filename);
				});



            }
        })
        $('.messager-window:visible').find('.messager-input').val(filename);




    })








})