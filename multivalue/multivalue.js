;
(function ($) {
    function init(ele){
        var state=$.data(ele, "multivalue");
        var $ele=$(ele).empty();
        var opts=state.options;
        $ele.append('<div class="multivalue-wrapper" style="position:relative;"><canvas></canvas></div>');
        show(opts.data, ele );
    }
    function getStrEnCharLen(str){
        var strLen=str.length;
        var tempLen=0,subLen=0;
        for (var i = 0; i < strLen; i++) {
           var code = str.charCodeAt(i);
           if(code>=0&&code<=128) {
               tempLen+=1;
           }else{
               tempLen+=2;
           }
        }
        return tempLen;
    }
  
    function show(data,ele){
        var opts=$.data(ele,'multivalue').options;

        var stepW=opts.stepW,
            stepH=opts.stepH,
            padding=opts.padding,
            fontSize=opts.fontSize;

        var $ele=$(ele);
        var $wrapper=$ele.find('.multivalue-wrapper');
        var canvas=$ele.find('canvas')[0];
        
        var widthArr=[];
        var currH=0;
        function parse(data,level){
            var textWidth=getStrEnCharLen(data.key+'')*fontSize/2
            widthArr[level]=Math.max(widthArr[level]||0,  textWidth+fontSize*2);
            data.width=textWidth;
            data.level=level;
            if (data.items && data.items.length>0){
                var H=0;
                for (var i=0;i<data.items.length;i++){
                    var item=data.items[i];
                    H+=parse(item,level+1);
                }
                data.top= (data.items[0].top+item.top)/2;
                return H;
            }else{
                data.top=++currH;
                return 1;
            }
        }
        parse(data,0);
        //console.log(data);
       // console.log(widthArr);

        var leftArr=[];
       
        var totalW=0;
        for (var i=0;i<widthArr.length;i++){
            totalW+=widthArr[i];
            if (i==0) leftArr[i]=padding+widthArr[i]/2;
            else  leftArr[i]=leftArr[i-1]+widthArr[i-1]/2+stepW+widthArr[i]/2;
        }
        totalW+=stepW*(widthArr.length-1)+padding*2;
        

        var totalH=(currH)*stepH+padding*2;
        canvas.width=totalW;
        canvas.height=totalH;
        

        var ctx=canvas.getContext("2d");

        
        function draw(data){
            var x=leftArr[data.level];
            var y=data.top*stepH+padding-stepH/2;

            if (data.items && data.items.length>0){
                for (var i=0;i<data.items.length;i++){
                    var item=data.items[i];
                    var x2=leftArr[item.level];
                    var y2=item.top*stepH+padding-stepH/2;
                    drawLine(ctx,x,y,x2,y2,"#f00",1,0);
                    draw(item);
                }
            }

            if(ctx.ellipse){
                ctx.beginPath();
                ctx.ellipse(x,y,widthArr[data.level]/2,(fontSize+10)/2,0,0,Math.PI*2);
                ctx.fillStyle="#fff";
                ctx.strokeStyle="#000";
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle="#000";
                ctx.font = fontSize+'px 宋体';
                ctx.fillText(data.key,x-data.width/2 , y+fontSize/2 );
            }
            var value='';
            if (typeof data.value=="undefined") {
                value="无节点值";
            }else if(data.value==""){
                value="空值";
            }else{
                value=data.value;
            }
            var $trigger=$('<div class="multivalue-node-value-trigger" style="cursor:pointer;position:absolute;left:'+(x-widthArr[data.level]/2)+'px;top:'+(y-(fontSize+10)/2)+'px;width:'+widthArr[data.level]+'px;height:'+(fontSize+10)+'px;"></div>').appendTo($wrapper);
            $trigger.attr('title',value);
        }
        draw(data);

        if ($.fn.popover) {
            $('.multivalue-node-value-trigger').each(function(){
                var title=$(this).attr('title');
                $(this).removeAttr('title');
                $(this).popover({
                    //title:'节点数据',
                    content:'<div style="max-width:400px;word-break: break-all;">'+title+'</div>',
                    trigger:'hover'
                })
            })
        }
    }

    function drawLine(ctx,sx,sy,tx,ty,color,lineWidth,dashLen){
        if (typeof dashLen !="undefined" && dashLen>0 ){
            return drawDashedLine(ctx,sx,sy,tx,ty,color,lineWidth,dashLen)
        }else{
            ctx.beginPath();
            ctx.moveTo(sx,sy);
            ctx.lineTo(tx,ty);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
    function drawDashedLine(ctx,sx,sy,tx,ty,color,lineWidth,dashLen){
        var len = cacuDis(sx,sy,tx,ty),
            lineWidth = lineWidth || 1,
            dashLen = dashLen || 5,
            num = ~~(len / dashLen);
        ctx.beginPath();
        for(var i=0;i<num;i++){
            var x = sx + (tx - sx) / num * i,
                y = sy + (ty - sy) / num * i;
            ctx[i & 1 ? "lineTo" : "moveTo"](x,y);
        }
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
        function cacuDis(sx,sy,tx,ty){
            return Math.sqrt(Math.pow(tx-sx,2)+Math.pow(ty-sy,2));
        }
    }
    $.fn.multivalue = function (optsOrMethod, params) {
        if (typeof optsOrMethod == "string") {
            var method = $.fn.multivalue.methods[optsOrMethod];
            return method(this, params);
            
        }
        optsOrMethod = optsOrMethod || {};
        return this.each(function () {
            var state = $.data(this, "multivalue");
            if (state) {
                $.extend(state.options, optsOrMethod);
            } else {
                $.data(this, "multivalue", {
                    options: $.extend({}, $.fn.multivalue.defaults, $.fn.multivalue.parseOptions(this), optsOrMethod)
                });
            }
            init(this);
        });
    };
    $.fn.multivalue.methods = {
        clear: function (jq) {
            return jq.each(function () {
                $(this).empty();
            });
        }
    };
    $.fn.multivalue.parseOptions = function (ele) {
        var t = $(ele);
        return $.extend({},{});
    };
    $.fn.multivalue.defaults = $.extend({}, {
        stepW:100,
        stepH:50,
        padding:20,
        fontSize:12,
        onChange:function(){}
    });
})(jQuery);