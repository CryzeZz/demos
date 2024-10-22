/* 使用示例
var now = new Date();
console.log(formatDate(now, 'Y-MM-DD hh:mm:ss')); // 输出类似 "2024-10-22 09:34:00"
console.log(formatDate(now, 'Y-M-D h:m:s'));     // 输出类似 "2024-10-22 9:34:0"
*/
function formatDate(date, fmt) {
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'H+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds(), // 毫秒
        'W': ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()], //星期
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    // 处理年份 正则 y+ 匹配一个或多个y
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}


function parseTmpl(template, data) {
    if (typeof data == 'object') {
        data = data || {};
    } else {
        data = {};
    }
    return template.replace(/\$\{(.+?)\}/ig, function (m, i, d) {
        return data[i] || '';
    });

}

function downloadText(textString, type, fileName) {
    // 创建Blob对象
    var blob = new Blob([textString], {
        type: type
    });

    // 创建URL
    var url = URL.createObjectURL(blob);

    // 创建隐藏的可下载链接
    var a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;

    // 设置文件名
    a.download = fileName;

    // 触发点击事件
    document.body.appendChild(a);
    a.click();

    // 清理工作
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

function readAsDataURL(files,callback) {
    var ret = [], mylen = files.length;;
    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();

        reader.onload = (function (file) {
            return function (e) {
                ret.push({ 
                    name: file.name,
                    size:file.size,
                    type:file.type, 
                    result: this.result 
                    ,id:CryptoJS.MD5(this.result).toString()
                });
                mylen--;
                if (mylen == 0) callback(ret);
            };
        })(f);
        //读取文件内容
        reader.readAsDataURL(f);
    }

}