# 常用cdn及本地回退方案

#### jquery
```
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    if(!window.jQuery){
        document.write('<script src="../lib/jquery-easyui-1.7.0/jquery.min.js"><\/script>');
    }
</script>
```


```
	<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script>
		if(!window.jQuery){
			document.write('<script src="../lib/jquery-3.3.1/jquery.min.js"><\/script>');
		}
	</script>
```

#### bootstrap
```
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>
        if(typeof $.fn.modal === 'undefined'){
            document.write('<link href="../lib/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">');
            document.write('<script src="../lib/bootstrap-3.3.7/js/bootstrap.min.js"><\/script>');
        }
    </script>
```

#### bootstrap-fileinput

```
    <link href="https://cdn.bootcdn.net/ajax/libs/bootstrap-fileinput/4.5.2/css/fileinput.min.css" rel="stylesheet">
    <script src="https://cdn.bootcdn.net/ajax/libs/bootstrap-fileinput/4.5.2/js/fileinput.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/bootstrap-fileinput/4.5.2/js/locales/zh.js"></script>
    <script>
        if(typeof $.fn.fileinput === 'undefined'){
            document.write('<link href="../lib/bootstrap-fileinput-v4.5.2/css/fileinput.min.css" rel="stylesheet">');
            document.write('<script src="../lib/bootstrap-fileinput-v4.5.2/js/fileinput.min.js"><\/script>');
            document.write('<script src="../lib/bootstrap-fileinput-v4.5.2/js/locales/zh.js"><\/script>');
        }
    </script>
```

#### toastr

```
    <link href="https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.css" rel="stylesheet">
    <script src="https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
    <script>
       (function(){
         if (typeof window.toastr === 'undefined') {
          document.write('<link rel="stylesheet" href="../lib/toastr-master/build/toastr.min.css">');
          document.write('<script src="../lib/toastr-master/build/toastr.min.js"><\/script>');
         }
       })();
     </script>
```

#### crypto-js

```
    <script src="https://cdn.bootcdn.net/ajax/libs/crypto-js/4.1.1/crypto-js.min.js" type="text/javascript"></script>
    <script>
      (function(){
        if (typeof window.CryptoJS === 'undefined') {
          document.write('<script src="../lib/crypto-js-4.1.1/crypto-js.min.js"><\/script>');
        }
      })();
    </script>
```

#### highlight.js

```
    <link href="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.3.1/styles/base16/darcula.min.css" rel="stylesheet">
    <script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.3.1//languages/xml.min.js" type="text/javascript"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.3.1//languages/javascript.min.js" type="text/javascript"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.3.1//languages/cos.min.js" type="text/javascript"></script>
    
    <script>
        (function(){
            if (typeof hljs === 'undefined') {
                document.write('<link href="../lib/highlight/styles/base16/darcula.min.css" type="text/css" rel="stylesheet" />');
                document.write('<script src="../lib/highlight/highlight.min.js" type="text/javascript"><\/script>');
                document.write('<script src="../lib/highlight/languages/xml.min.js" type="text/javascript"><\/script>');
                document.write('<script src="../lib/highlight/languages/javascript.min.js" type="text/javascript"><\/script>');
                document.write('<script src="../lib/highlight/languages/cos.min.js" type="text/javascript"><\/script>');
            }
        })();
    </script>
```


### underscore.js


```
    <script src="https://cdn.bootcdn.net/ajax/libs/underscore.js/1.13.2/underscore-min.js"></script>
    <script>
        // 如果 CDN 加载失败，使用 document.write 引入本地 underscore
        if (typeof window._ === 'undefined') {
            document.write('<script src="../lib/underscore-1.13.2/underscore-min.js" type="text/javascript"><\/script>');
        }
    </script>
```

### js-polyfills

```
    <script src="https://cdn.bootcdn.net/ajax/libs/js-polyfills/0.1.43/polyfill.min.js"></script>
    <script>
        if (typeof window.Promise === 'undefined') {
            document.write('<script src="../lib/polyfill-0.1.43/polyfill.min.js" type="text/javascript"><\/script>');
        }
    </script>
```


### html2canvas 及 font-awesome 字体图标

```
    <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" rel="stylesheet" />
    <script src="https://cdn.bootcdn.net/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script>
        if (typeof window.html2canvas === 'undefined') {
            document.write('<script src="../lib/html2canvas-1.4.1/html2canvas.min.js" type="text/javascript"><\/script>');
            document.write('<link href="../lib/font-awesome-4.7.0/css/font-awesome.min.css" type="text/css" rel="stylesheet" />');
        }
    </script>
```

### marked.js

```
    <script src="https://cdn.bootcdn.net/ajax/libs/marked/16.3.0/lib/marked.umd.min.js"></script>
    <script>
        if (typeof window.marked === 'undefined') {
            document.write('<script src="../lib/marked-16.3.0/marked.umd.min.js" type="text/javascript"><\/script>');
        }
    </script>
```