
Array.prototype.trimpush = function (value) {
    return this.push($.trim(value))

}
function parsePrjout(src) {
    var webApp = '/imedical/web';
    if (src.indexOf('/imedical83/web') > -1) webApp = '/imedical83/web';
    if (src.indexOf('/dthealth/web') > -1) webApp = '/dthealth/web';


    var arr = src.split('\n'), clsArr = [], jsArr = [], cspArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        if (item.indexOf('正在导出类:') > -1) {
            clsArr.trimpush(item.split('正在导出类:')[1])
        } else if (item.indexOf('Exporting class:') > -1) {
            clsArr.trimpush(item.split('Exporting class:')[1])
        } else if (item.indexOf('正在导出CSP/CSR或文件:') > -1) {
            if (item.indexOf(webApp + '/csp/') > -1) {
                cspArr.trimpush(item.split(webApp + '/csp/')[1])
            } else if (item.indexOf(webApp + '/scripts/')>-1) {
                jsArr.trimpush(item.split(webApp + '/scripts/')[1])
            }
        } else if (item.indexOf('Exporting CSP/CSR or file: ') > -1) {
            if (item.indexOf(webApp + '/csp/') > -1) {
                cspArr.trimpush(item.split(webApp + '/csp/')[1])
            } else if (item.indexOf(webApp + '/scripts/')>-1) {
                jsArr.trimpush(item.split(webApp + '/scripts/')[1])
            }
        }
    }

    return formatDest(clsArr,jsArr,cspArr);

}

function formatDest(clsArr,jsArr,cspArr){
    var dest = '';
    dest = dest + '类文件：\n' + clsArr.join('\n');
    dest = dest + '\n----------------分割线---------------------\n'
    dest = dest + 'js文件：\n' + jsArr.join('\n');
    dest = dest + '\n----------------分割线---------------------\n'
    dest = dest + 'csp文件：\n' + cspArr.join('\n');
    return dest;
}

function parsePrjxml(src) {
    var webApp = '',prefix='';


    var clsArr = [], jsArr = [], cspArr = [];
    var parser=new DOMParser();
    var doc=parser.parseFromString(src,"text/xml");
    var prj=doc.getElementsByTagName('Project')[0];
    if (prj){
        var items=prj.getElementsByTagName('ProjectItem'); //获取到元素
        for (var i=0,len=items.length;i<len;i++) {
            var type=items[i].getAttribute('type');
            var name=items[i].getAttribute('name');
            if (!type || !name) continue;
            type=type.toLowerCase();

            if (type=='cls') {
                clsArr.push(name);
            }else if(type=='csp'){ //csp js 
                if(webApp=='') { //第一个csp或js 根据name前半部分 解析出webapp来
                    webApp='/imedical/web';
                    if (name.indexOf('imedical83/web') > -1) webApp = '/imedical83/web';
                    if (name.indexOf('dthealth/web') > -1) webApp = '/dthealth/web';
                    prefix=webApp.slice(1);
                }


                if (name.indexOf(prefix + '/csp/') > -1) {
                    cspArr.trimpush(name.split(prefix + '/csp/')[1])
                } else if (name.indexOf(prefix + '/scripts/')>-1) {
                    jsArr.trimpush(name.split(prefix + '/scripts/')[1])
                }

            }

        }
    }
    return formatDest(clsArr,jsArr,cspArr);

   
}

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
    $('#format').click(function () {
        var src = $('#src').val();
        if (src.indexOf('</Project>')>-1){ // 工程xml文件
            var dest = parsePrjxml(src);
        }else{ //工程导出Output信息
            var dest = parsePrjout(src);
        }

        
        $('#dest').val(dest);
    })
    function show(files) {
        readAsText(files, function (ret) {
            console.log(ret);
            $('#src').val(ret[0].result);
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

