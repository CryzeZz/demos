function addTab(title, url) {
    if ($('#tabs').tabs('exists', title)) {
        $('#tabs').tabs('select', title);   //选中并刷新
        var currTab = $('#tabs').tabs('getSelected');
        var url = $(currTab.panel('options').content).attr('src');
        if (url != undefined && currTab.panel('options').title != '首页') {
            $('#tabs').tabs('update', {
                tab: currTab,
                options: {
                    content: createFrame(url)
                }
            })
        }
    } else {
        var content = createFrame(url);
        $('#tabs').tabs('add', {
            style: { overflow: 'hidden' },
            title: title,
            content: content,
            closable: true
        });
    }
}
function createFrame(url) {
    var s = '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>';
    return s;
}
//改为在jQuery加载完成调用 不再增加一个tab调用一次
function tabClose() {
    /*双击关闭TAB选项卡*/
    $('.tabs-header').on('dblclick', '.tabs-inner', function () {
        var subtitle = $(this).children(".tabs-closable").text();
        $('#tabs').tabs('close', subtitle);
    }).on('contextmenu', '.tabs-inner', function (e) {
        e.preventDefault();
        var subtitle = $(this).children(".tabs-title").text();    //不嫩用.tabs-closable
        //做一些右键菜单的禁用启用
        if (subtitle == "首页") {
            $('#mm').menu('disableItem', $('#mm-tabupdate')[0]);
            $('#mm').menu('disableItem', $('#mm-tabclose')[0]);

            $('#mm').menu('disableItem', $('#mm-tabcopylink')[0]);
            $('#mm').menu('disableItem', $('#mm-tabopenblank')[0]);
            $('#mm').menu('disableItem', $('#mm-tabqrshare')[0]);
        } else {
            $('#mm').menu('enableItem', $('#mm-tabupdate')[0]);
            $('#mm').menu('enableItem', $('#mm-tabclose')[0]);

            $('#mm').menu('enableItem', $('#mm-tabcopylink')[0]);
            $('#mm').menu('enableItem', $('#mm-tabopenblank')[0]);
            $('#mm').menu('enableItem', $('#mm-tabqrshare')[0]);
        }

        var leftnum = $('.tabs-selected').prevAll().length;
        if (leftnum > 1) {  //有个首页 要大于1
            $('#mm').menu('enableItem', $('#mm-tabcloseleft')[0]);
        } else {
            $('#mm').menu('disableItem', $('#mm-tabcloseleft')[0]);
        }
        var rightnum = $('.tabs-selected').nextAll().length;
        if (rightnum > 0) {
            $('#mm').menu('enableItem', $('#mm-tabcloseright')[0]);
        } else {
            $('#mm').menu('disableItem', $('#mm-tabcloseright')[0]);
        }

        if (leftnum > 1 || rightnum > 0) {
            $('#mm').menu('enableItem', $('#mm-tabcloseother')[0]);
        } else {
            $('#mm').menu('disableItem', $('#mm-tabcloseother')[0]);
        }
        $('#mm').menu('show', {
            left: e.pageX,
            top: e.pageY
        });
        $('#mm').data("currtab", subtitle);
        $('#tabs').tabs('select', subtitle);
        return false;
    });
}

//绑定右键菜单事件   
var tabCloseEven = {
    //刷新
    tabupdate: function () {
        var currTab = $('#tabs').tabs('getSelected');
        var url = $(currTab.panel('options').content).attr('src');
        if (url != undefined && currTab.panel('options').title != '首页') {
            $('#tabs').tabs('update', {
                tab: currTab,
                options: {
                    content: createFrame(url)
                }
            })
        }
    },
    //新窗口打开
    tabopenblank:function(){
        var currTab = $('#tabs').tabs('getSelected');
        var url = $(currTab.panel('options').content).attr('src');
        if (url != undefined && currTab.panel('options').title != '首页') {
            window.open(url,currTab.panel('options').title );
        }
    },
    //二维码分享
    tabqrshare:function(){
        var currTab = $('#tabs').tabs('getSelected');
        var url = $(currTab.panel('options').content).attr('src');
        var title=currTab.panel('options').title
        if (url != undefined &&  title!= '首页') {
            var a = document.createElement('a');
            a.href = url;
            showQR(a.href,title);

        }
    },
    //关闭当前
    tabclose: function () {
        var currtab_title = $('#mm').data("currtab");
        $('#tabs').tabs('close', currtab_title);
    },
    //全部关闭
    tabcloseall: function () {
        $('.tabs-inner span').each(function (i, n) {
            var t = $(n).text();
            if (t != '首页') {
                $('#tabs').tabs('close', t);
            }
        });
    },
    //关闭除当前之外的TAB
    tabcloseother: function () {
        var prevall = $('.tabs-selected').prevAll();
        var nextall = $('.tabs-selected').nextAll();
        if (prevall.length > 0) {
            prevall.each(function (i, n) {
                var t = $('a:eq(0) span', $(n)).text();
                if (t != '首页') {
                    $('#tabs').tabs('close', t);
                }
            });
        }
        if (nextall.length > 0) {
            nextall.each(function (i, n) {
                var t = $('a:eq(0) span', $(n)).text();
                if (t != '首页') {
                    $('#tabs').tabs('close', t);
                }
            });
        }
        //需要重新选中当前
        $('#tabs').tabs('select', $('#mm').data('currtab'));
        return false;
    },
    //关闭当前右侧的TAB
    tabcloseright: function () {
        var nextall = $('.tabs-selected').nextAll();
        if (nextall.length == 0) {
            //msgShow('系统提示','后边没有啦~~','error');
            alert('后边没有啦~~');
            return false;
        }
        nextall.each(function (i, n) {
            var t = $('a:eq(0) span', $(n)).text();
            $('#tabs').tabs('close', t);
        });
        //需要重新选中当前
        $('#tabs').tabs('select', $('#mm').data('currtab'));

        return false;
    },
    //关闭当前左侧的TAB
    tabcloseleft: function () {
        var prevall = $('.tabs-selected').prevAll();
        if (prevall.length == 0) {
            alert('到头了，前边没有啦~~');
            return false;
        }
        prevall.each(function (i, n) {
            var t = $('a:eq(0) span', $(n)).text();
            if (t != '首页') {
                $('#tabs').tabs('close', t);
            }
        });
        //需要重新选中当前
        $('#tabs').tabs('select', $('#mm').data('currtab'));
        return false;
    },

    //退出
    exit: function () {
        $('#mm').menu('hide');
    }
}

$(function () {
    var menuTree=$('#side-menus').addClass('accordiontree').tree({
        data:menus,
        animate:true,
        onClick: function (node) {
            //类手风琴 只开一个根节点操作
            if($(node.target).parent().parent().hasClass('accordiontree')&&node.state=="closed"){
                var roots=menuTree.tree('getRoots');
                $.each(roots,function(i,o){
                    menuTree.tree('collapse',o.target);
                })
            }
            menuTree.tree('toggle',node.target);

            if(node.attributes && typeof node.attributes.url=='string' && node.attributes.url!='') {
                if (node.attributes.target && node.attributes.target=='_blank'){
                    window.open(node.attributes.url);
                }else{
                    addTab(node.text, node.attributes.url);
                }
                
            }
        }
    })




    tabClose();
    if (location.href.indexOf("tab=") > 0) {
        var tabName = location.href.split("tab=")[1].split("&")[0].split("#")[0];
        tabName=decodeURIComponent(tabName);
        var menuid=indexMenuText[tabName]||'';
        if (menuid!=''){
            var node=menuTree.tree('find',menuid);
            if(node && node.target){
                menuTree.tree('expandTo',node.target);
                $(node.target).trigger('click');
            }
        }
        $('.api-navi-tab').each(function () {
            var title = $(this).text();
            if (title == tabName) {
                $(this).trigger('click');
            }
        })
    }


    $('#tabs').tabs("options").onSelect = function (title, index) {
        $(".api-navi-tab").each(function () {
            $(this).closest("li").removeClass('active');
            if ($(this).text() == title) {
                $(this).closest("li").addClass('active');
            }
        });
    }
    var clipboard = new ClipboardJS('#mm-tabcopylink', {
        text: function () {
            var title = $('#mm').data("currtab");
            var href = location.href;
            href = href.split("?")[0] + "?tab=" + title;
            console.log(href);
            $.messager.popover({ msg: '复制成功', type: 'success', timeout: 1000 });
            return href;
        }
    });

});	

function showQR(url,title){
    $('.my-modal-mask').show();
    $('#qr-modal').show();
    $('#qr-modal').find('.my-modal-header').text(title||'二维码');
    var height=$('#qr-container').height();
    $('#qr-container').empty().qrcode({    
        render: "canvas",
        width:height,
        height:height,
        text: url
    })

    $('.my-modal-mask').off('click').on('click',function(){
        $('.my-modal-container').hide();
        $('.my-modal-mask').hide();
    })


}