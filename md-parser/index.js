$(function(){
    function show(files){
        readAsText(files,function(ret){
            console.log(ret);
            $('#container').html( marked(ret[0].result) );
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        });
    }
    function dropHandler(e) {
        e.stopPropagation();
        e.preventDefault();
        var dataTransfer=e.dataTransfer||e.originalEvent.dataTransfer;
        var files = dataTransfer.files;
        show(files);

    }
    function dragOverHandler(e) {
        e.stopPropagation();
        e.preventDefault();
        var dataTransfer=e.dataTransfer||e.originalEvent.dataTransfer;
        dataTransfer.dragEffect = 'copy';
    }
    $('#container').height($(window).height());

    $('body').on('drop',dropHandler);
    $('body').on('dragover',dragOverHandler);
    $('#file').change(function(){
        console.log(this.files);
        show(this.files);
    });
    var click5=function(){
        console.log("click5");
        $('#file').trigger('click');
    }
    var debounce_click5=_.debounce(click5, 300);

    var repeat=function(fn,wait,times){
        var timer,result,currtimes=0,flag=false;
        var repeated=function(){
            var context=this;
            var args=arguments;
            if (!flag){
                currtimes=0;
            }
            currtimes++;
            if(currtimes>=times) {
                result =fn.apply(context,args);
            }
            flag=true;
            if (timer) clearTimeout(timer);
            timer=setTimeout(function(){
                flag=false;
            },wait);
        };
        repeated.reset = function() {
            clearTimeout(timer);
            timer = null;
            flag=false;
            currtimes=0;
        };
        return repeated;
    }

    var repeat_debounce_click5=repeat(debounce_click5,200,5);
    $('body').click(repeat_debounce_click5);

})

function readAsText(files,callback){
    var ret=[],mylen=files.length;;
    for(var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(){
                ret.push({name:file.name,result:this.result});
                mylen--;
                if (mylen==0) callback(ret);
            }
        })(f);;
        reader.readAsText(f);
    }

}

function readAsDataURL(files){
    var p=document.getElementById('container');
    for(var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        
        reader.onload = (function(file) {
            return function(e) {
                var span = document.createElement('span');
                span.innerHTML = '<img style="padding: 0 10px;" width="100" src="'+ this.result +'" alt="'+ file.name +'" />';

                p.insertBefore(span, null);
            };
        })(f);
        //读取文件内容
        reader.readAsDataURL(f);
    }

}