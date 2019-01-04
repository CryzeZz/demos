function flashChecker() {
    var hasFlash = 0;　　　　 //是否安装了flash  
    var flashVersion = 0;　　 //flash版本  

    if (document.all) {
        var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (swf) {
            hasFlash = 1;
            VSwf = swf.GetVariable("$version");
            flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
        }
    } else {
        if (navigator.plugins && navigator.plugins.length > 0) {
            var swf = navigator.plugins["Shockwave Flash"];
            if (swf) {
                hasFlash = 1;
                var words = swf.description.split(" ");
                for (var i = 0; i < words.length; ++i) {
                    if (isNaN(parseInt(words[i]))) continue;
                    flashVersion = parseInt(words[i]);
                }
            }
        }
    }
    return { f: hasFlash, v: flashVersion };
}
$(function () {
    var fls = flashChecker()
    if (!fls.f) {
        $('#flash-tip').show();
        //alert("您尚未启用或安装flash!");
    }
    var GV = { uploader: $('#uploader').val() };
    $('#changeUploader').click(function () {
        //$("#uploadify").uploadifySettings('uploader',$('#uploader').val());
        if (GV.uploader != $('#uploader').val()) {
            GV.uploader = $('#uploader').val();
            initUploadify();
        }

    })
    function initUploadify() {
        $("#uploadify").uploadify({
            buttonClass: "uploadify-button-a",
            buttonText: "上传附件",
            fileObjName: "file1",
            formData: {},
            removeCompleted: false,
            'swf': './uploadify3.2.1/uploadify.swf',  //此路径不能和此页面跨域
            'uploader': GV.uploader,    //提交路径 可以跨域，但是需要crossdomain.xml
            height: 30,
            width: 100,
            auto: true,
            method: 'Post',
            'onUploadComplete': function (file) {
            },
            'onUploadSuccess': function (file, data, res) {
                var o = $.parseJSON(data);
                console.log(o);
                $('ul').append('<li><a target="_blank" href="' + GV.uploader.replace('upload', 'download') + '?id=' + o[0].id + '">' + o[0].filename + '</a></li>');
            },
            'onUploadStart': function (file) {

            },
            'multi': true
        });
    }
    initUploadify();

})
