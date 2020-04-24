/*!
 * fa2png v0.1.0 | Copyright (c) 2017 Stephan Groß | https://www.fa2png.io
 */
function getCookie(e) {
    "use strict";
    var t = null;
    if (document.cookie && "" !== document.cookie) for (var o = document.cookie.split(";"), n = 0; n < o.length; n++) {
        var i = jQuery.trim(o[n]);
        if (i.substring(0, e.length + 1) === e + "=") {
            t = decodeURIComponent(i.substring(e.length + 1));
            break
        }
    }
    return t
}
function csrfSafeMethod(e) {
    "use strict";
    return /^(GET|HEAD|OPTIONS|TRACE)$/.test(e)
}
function PM() {
    "use strict";
    function e(e) {
        for (var t = window.location.search.substring(1), o = t.split("&"), n = 0; n < o.length; n++) {
            var i = o[n].split("=");
            if (i[0] === e) return i[1]
        }
    }

    function t() {
        return getCookie("icon_color") || "#007dff"
    }

    function o() {
        return getCookie("icon_background") || "transparent"
    }

    function n() {
        return parseInt(getCookie("icon_size")) || 256
    }

    function i() {
        return parseInt(getCookie("icon_margin")) || 0
    }

    function a(size,bg) {
        var e = h.children().first();
        if (void 0 !== e) {
            e.css({
                position: "absolute",
                width:size+'px',
                height:size+'px',
                lineHeight:size+'px',
                backgroundColor:bg
            });
            var t = h.height(),
                o = h.width(),
                n = e.height(),
                i = e.width(),
                a = (t - n) / 2,
                r = (o - i) / 2;
            e.css({
                top: a,
                left: r
            })
        }
    }

    function r() {
        var e = h.data("icon-css"),
            i = h.data("icon-color"),
            r = h.data("icon-background"),
            s = h.data("icon-size");
        if (void 0 !== e) {
            h.html(e),
                S.addClass("hidden"),
                z.addClass("hidden"),
                H.addClass("hidden"),
                h.css(void 0 !== i ? {
                    color: i
                } : {
                    color: t()
                });
            var c = 8,
                d = 1024,
                l = void 0 !== s ? parseInt(s) : n();
            l = c > l ? c : l,
                l = l > d ? d : l,
                h.css({
                    "font-size": l + "px"
                }),
                a(l,r)
        }
        var u = void 0 !== r ? r : o();
        //h.css("background", u)
    }
    function setIcon(icon){
        h.data('icon-css','<div style="text-align:center;"><i class="fa '+icon+'" aria-hidden="true"></i></div>');
        r();
    }
    window.setIcon=setIcon;

    function s() {
        h = $("#icon-preview"),
            b = $("#icon-name-input"),
            v = $("#js-icon-color-colorpicker"),
            k = $("#js-icon-background-colorpicker"),
            x = $("#js-icon-background-clear"),
            w = $("#icon-disable-background-input"),
            y = $("#js-icon-size-slider"),
            C = $("#icon-size-input"),
            j = $("#js-icon-margin-slider"),
            _ = $("#icon-margin-input"),
            T = $("#js-icon-form"),
            D = $("#js-icon-generation-modal"),
            S = $("#js-icon-download-btn"),
            P = $("#js-icon-download-size"),
            z = $("#js-icon-base64"),
            L = z.find("input"),
            H = $("#js-icon-permalink"),
            A = H.find("input")
    }

    function c() {
        $('[data-toggle="popover"]').popover({
            trigger: "hover"
        })
    }

    function d() {
        $('#icon-cls-name').on('keyup',function(e){
            if(e.keyCode==13){
                setIcon($(this).val());
            }
        })
        return;
        b.length && b.select2({
            ajax: {
                url: "../toolsapi/geticon/",
                dataType: "json",
                delay: 250,
                data: function (e) {
                    return {
                        q: e.term,
                        page: e.page
                    }
                },
                processResults: function (e, t) {
                    t.page = t.page || 1;
                    for (var o = 0; o < e.results.length; o++) e.results[o].hasOwnProperty("font") && md.addFont(e.results[o].font);
                    return {
                        results: e.results,
                        pagination: {
                            more: 20 * t.page < e.count
                        }
                    }
                },
                cache: !0
            },
            minimumInputLength: 1,
            escapeMarkup: function (e) {
                return e
            },
            templateResult: function (e) {
                return e.loading ? e.text : '<div class="container-fluid"><div class="row"><div class="col-xs-2">' + e.css + '</div><div class="col-xs-10">' + e.label + "</div></div></div>"
            },
            templateSelection: function (e) {
                return e.label || e.text
            }
        }).on("select2:select",
            function (e) {
                h.data("icon-css", e.params.data.css),
                    r()
            })
    }

    function l() {
        if (w.length && w.change(function () {
                createCookie("icon_background_disabled", w.is(":checked"), N)
            }), v.length) {
            v.on("create",
                function () {
                    r()
                }),
                v.on("changeColor",
                    function (e) {
                        h.data("icon-color", e.color.toHex()),
                            createCookie("icon_color", e.color.toHex(), N),
                            r()
                    });
            var n = e("color");
            if (void 0 !== n) {
                var i = n.match(O);
                n = null === i || n !== i[0] ? t() : "#" + n
            } else n = t();
            h.data("icon-color", n),
                createCookie("icon_color", n, N),
                v.colorpicker($.extend(I, {
                    color: n
                }))
        }
        if (k.length) {
            k.on("create",
                function () {
                    r()
                }),
                k.on("changeColor",
                    function (e) {
                        w.closest("div").removeClass("hidden"),
                            h.data("icon-background", e.color.toHex()),
                            createCookie("icon_background", e.color.toHex(), N),
                            r()
                    }),
                x.on("click",
                    function () {
                        k.colorpicker("setValue", "transparent"),
                            k.colorpicker("update", !0),
                            w.prop("checked", !1),
                            w.closest("div").addClass("hidden"),
                            h.data("icon-background", "transparent"),
                            createCookie("icon_background_disabled", !1, N),
                            r()
                    });
            var a = e("background");
            if (void 0 !== a) {
                var s = a.match(O);
                a = null === s || a !== s[0] ? o() : "#" + a
            } else a = o();
            h.data("icon-background", a),
                createCookie("icon_background", a, N),
                "transparent" !== a ? (w.closest("div").removeClass("hidden"), w.prop("checked", "true" === getCookie("icon_background_disabled"))) : createCookie("icon_background_disabled", !1, N),
                k.colorpicker($.extend(I, {
                    color: a
                }))
        }
    }

    function u() {
        if (y.length) {
            var t = parseInt(e("size")) || n();
            8 > t && (t = 8),
            t > 256 && (t = 256),
                y.noUiSlider({
                    start: [t],
                    step: 1,
                    range: {
                        min: [8],
                        max: [256]
                    }
                }),
                y.Link("lower").to(C, null, wNumb({
                    decimals: 0
                })),
                y.on("slide change",
                    function () {
                        h.data("icon-size", C.val()),
                            createCookie("icon_size", C.val(), N),
                            r()
                    }),
                C.on("keyup change",
                    function () {
                        h.data("icon-size", C.val()),
                            createCookie("icon_size", C.val(), N),
                            r()
                    }),
                h.data("icon-size", C.val()),
                createCookie("icon_size", C.val(), N);
            var o = parseInt(e("margin")) || i();
            0 > o && (o = 0),
            o > 256 && (o = 256),
                j.noUiSlider({
                    start: [o],
                    step: 1,
                    range: {
                        min: [0],
                        max: [256]
                    }
                }),
                j.Link("lower").to(_, null, wNumb({
                    decimals: 0
                })),
                j.on("slide change",
                    function () {
                        h.data("icon-margin", _.val()),
                            createCookie("icon_margin", _.val(), N),
                            r()
                    }),
                _.on("keyup change",
                    function () {
                        h.data("icon-margin", _.val()),
                            createCookie("icon_margin", _.val(), N),
                            r()
                    }),
                h.data("icon-margin", _.val()),
                createCookie("icon_margin", _.val(), N)
        }
    }

    function p() {
        window.PNotify.prototype.options.stack = {
            dir1: "down",
            dir2: "left",
            push: "bottom",
            spacing1: 10,
            spacing2: 20,
            context: $("body")
        }
    }

    function f() {
        T.length && T.submit(function (e) {
            e.preventDefault();
            var t = $(this),
                o = t.serializeObject();
            D.modal("show"),
                $.ajax({
                    method: "POST",
                    url: t.attr("action"),
                    data: JSON.stringify(o),
                    processData: !1,
                    contentType: "application/json",
                    dataType: "json",
                    form: t
                }).done(function (e) {
                    P.html(e.imageSize),
                        S.attr("href", e.imageUrl),
                        S.attr("download", e.imageName),
                        S.removeClass("hidden"),
                        S.pulsate({
                            color: "rgb(0,255,0)",
                            reach: 15,
                            speed: 800,
                            pause: 0,
                            glow: !1,
                            repeat: 3,
                            onHover: !1
                        }),
                        L.val(e.imageBase64),
                        z.removeClass("hidden"),
                        A.val(e.imagePermalink),
                        H.removeClass("hidden")
                }).fail(function (e, t) {
                    if ("error" === t) if (400 === e.status) $.each(e.responseJSON,
                        function (e, t) {
                            var o = {
                                    title: '<span class="fa fa-warning"></span> Error: ' + e,
                                    text: t[0],
                                    type: "error",
                                    buttons: {
                                        sticker: !1
                                    }
                                },
                                n = new window.PNotify(o);
                            n.get().click(function () {
                                n.remove()
                            })
                        });
                    else if (403 === e.status) {
                        var o = {
                                title: '<span class="fa fa-warning"></span> Error',
                                text: e.responseJSON.detail,
                                type: "error",
                                buttons: {
                                    sticker: !1
                                }
                            },
                            n = new window.PNotify(o);
                        n.get().click(function () {
                            n.remove()
                        })
                    }
                }).always(function () {
                    D.modal("hide")
                })
        })
    }

    function m() {
        ZeroClipboard.config({
            swfPath: "static/ZeroClipboard.swf"
        });
        var e = new ZeroClipboard($("#js-icon-base64-btn"));
        e.on("ready",
            function () {
                e.on("copy",
                    function (e) {
                        var t = $("#js-icon-base64").find("input").val();
                        e.clipboardData.setData("text/plain", t)
                    })
            }),
            e.on("aftercopy",
                function (e) {
                    var t = {
                            title: '<span class="fa fa-check"></span> Copied base64 data string',
                            text: e.data["text/plain"],
                            type: "info",
                            buttons: {
                                sticker: !1
                            }
                        },
                        o = new window.PNotify(t);
                    o.get().click(function () {
                        o.remove()
                    })
                }),
            e.on("error",
                function () {
                    ZeroClipboard.destroy()
                })
    }

    function g() {
        ZeroClipboard.config({
            swfPath: "static/ZeroClipboard.swf"
        });
        var e = new ZeroClipboard($("#js-icon-permalink-btn"));
        e.on("ready",
            function () {
                e.on("copy",
                    function (e) {
                        var t = $("#js-icon-permalink").find("input").val();
                        e.clipboardData.setData("text/plain", t)
                    })
            }),
            e.on("aftercopy",
                function (e) {
                    var t = {
                            title: '<span class="fa fa-check"></span> Copied permalink',
                            text: e.data["text/plain"],
                            type: "info",
                            buttons: {
                                sticker: !1
                            }
                        },
                        o = new window.PNotify(t);
                    o.get().click(function () {
                        o.remove()
                    })
                }),
            e.on("error",
                function () {
                    ZeroClipboard.destroy()
                })
    }

    var h, b, v, k, x, w, y, C, j, _, T, D, S, P, z, L, H, A, N = 365,
        O = /^[0-9a-f]{6}$/i,
        I = {
            component: ".input-group-addon:last",
            format: "hex",
            colorSelectors: {
                "#1abc9c": "#1abc9c",
                "#2ecc71": "#2ecc71",
                "#3498db": "#3498db",
                "#9b59b6": "#9b59b6",
                "#f1c40f": "#f1c40f",
                "#e67e22": "#e67e22",
                "#e74c3c": "#e74c3c",
                "#ecf0f1": "#ecf0f1",
                "#95a5a6": "#95a5a6",
                "#34495e": "#34495e",
                "#16a085": "#16a085",
                "#27ae60": "#27ae60",
                "#2980b9": "#2980b9",
                "#8e44ad": "#8e44ad",
                "#f39c12": "#f39c12",
                "#d35400": "#d35400",
                "#c0392b": "#c0392b",
                "#bdc3c7": "#bdc3c7",
                "#7f8c8d": "#7f8c8d",
                "#2c3e50": "#2c3e50"
            },
            sliders: {
                saturation: {
                    maxLeft: 200,
                    maxTop: 200,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 200,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 200,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-selectors"></div></div>'
        };
    this.init = function () {
        s(),
            c(),
            d(),
            l(),
            u(),
            p(),
            f(),
            m(),
            g()
    },
        this.refreshPosition = function () {
            a()
        },
        this.refresh = function () {
            s(),
                r()
        }
}
var csrftoken = getCookie("csrftoken");
$.ajaxSetup({
    beforeSend: function (e, t) {
        "use strict";
        csrfSafeMethod(t.type) || this.crossDomain || e.setRequestHeader("X-CSRFToken", csrftoken)
    }
}),
    window.pm = new PM,
    $(document).on("ready pjaxr:done",
        function () {
            "use strict";
            window.pm.init()
        }),
    $(window).on("resize",
        function () {
            "use strict";
            window.pm.refreshPosition()
        }),
    $(document).on("ready pjaxr:done",
        function () {
            "use strict";
            $("#js-cookielaw-alert").on("closed.bs.alert",
                function () {
                    createCookie("cookie_law_accepted", "1", 3650)
                }),
                $("#js-brand-alert").on("closed.bs.alert",
                    function () {
                        createCookie("brand_note_agreed", "1", 3650)
                    })
        }),
    $(document).on("ready pjaxr:done",
        function () {
            "use strict";
            var e = $("#js-icon-list-form");
            if (e.length) {
                var n = e.find("#id_tag");
                    n.parent().find(".input-group-addon").click(function () {

                    });
            }
        }),
    $(document).on("ready pjaxr:done",
        function () {
            "use strict";
            var e = $("#js-statistics-chart-images-generated");
            if (e.length) {
                var t, o, n = new Date,
                    i = new Date,
                    a = new Date;
                n.setHours(0, 0, 0, 0),
                    i.setHours(0, 0, 0, 0),
                    a.setHours(0, 0, 0, 0),
                    i.setDate(n.getDate() - 90 + 1),
                    a.setDate(n.getDate() - 30 + 1),
                    n = n.getTime(),
                    i = i.getTime(),
                    a = a.getTime();
                var r = {
                        chart: {
                            renderTo: "js-statistics-chart-images-generated-detail-container",
                            marginBottom: 120,
                            marginLeft: 50,
                            marginRight: 20,
                            style: {
                                position: "absolute"
                            }
                        },
                        credits: {
                            enabled: !1
                        },
                        title: {
                            text: "Generated Images Timeline"
                        },
                        xAxis: {
                            type: "datetime"
                        },
                        yAxis: {
                            title: {
                                text: null
                            },
                            maxZoom: 1,
                            allowDecimals: !1,
                            min: 0
                        },
                        tooltip: {
                            formatter: function () {
                                return Highcharts.dateFormat("%Y-%m-%d", this.x) + ": <strong>" + this.points[0].y + "</strong>"
                            },
                            shared: !0
                        },
                        legend: {
                            enabled: !1
                        },
                        plotOptions: {
                            series: {
                                marker: {
                                    enabled: !1,
                                    states: {
                                        hover: {
                                            enabled: !0,
                                            radius: 3
                                        }
                                    }
                                }
                            }
                        },
                        series: [{
                            name: "",
                            pointStart: a,
                            pointInterval: 864e5
                        }],
                        exporting: {
                            enabled: !1
                        }
                    },
                    s = {
                        chart: {
                            renderTo: "js-statistics-chart-images-generated-master-container",
                            borderWidth: 0,
                            backgroundColor: null,
                            marginLeft: 50,
                            marginRight: 20,
                            zoomType: "x",
                            events: {
                                selection: function (e) {
                                    var o = e.xAxis[0],
                                        a = o.min,
                                        r = o.max,
                                        s = [],
                                        c = this.xAxis[0];
                                    return $.each(this.series[0].data,
                                        function () {
                                            this.x > a && this.x < r && s.push([this.x, this.y])
                                        }),
                                        c.removePlotBand("mask-before"),
                                        c.addPlotBand({
                                            id: "mask-before",
                                            from: i,
                                            to: a,
                                            color: "rgba(0, 0, 0, 0.2)"
                                        }),
                                        c.removePlotBand("mask-after"),
                                        c.addPlotBand({
                                            id: "mask-after",
                                            from: r,
                                            to: n,
                                            color: "rgba(0, 0, 0, 0.2)"
                                        }),
                                        t.series[0].setData(s),
                                        !1
                                }
                            }
                        },
                        title: {
                            text: null
                        },
                        xAxis: {
                            type: "datetime",
                            showLastTickLabel: !0,
                            minRange: 12096e5,
                            plotBands: [{
                                id: "mask-before",
                                from: i,
                                to: a,
                                color: "rgba(0, 0, 0, 0.2)"
                            }],
                            title: {
                                text: null
                            }
                        },
                        yAxis: {
                            gridLineWidth: 0,
                            labels: {
                                enabled: !1
                            },
                            title: {
                                text: null
                            },
                            min: 0,
                            showFirstLabel: !1
                        },
                        tooltip: {
                            formatter: function () {
                                return !1
                            }
                        },
                        legend: {
                            enabled: !1
                        },
                        credits: {
                            enabled: !1
                        },
                        plotOptions: {
                            series: {
                                fillColor: {
                                    linearGradient: [0, 0, 0, 70],
                                    stops: [[0, Highcharts.getOptions().colors[0]], [1, "rgba(255,255,255,0)"]]
                                },
                                lineWidth: 1,
                                marker: {
                                    enabled: !1
                                },
                                shadow: !1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                enableMouseTracking: !1
                            }
                        },
                        series: [{
                            type: "area",
                            name: "",
                            pointInterval: 864e5,
                            pointStart: i
                        }],
                        exporting: {
                            enabled: !1
                        }
                    };
                $.getJSON("/api/stats-generated-images/",
                    function (n) {
                        e.css({
                            position: "relative",
                            width: "100%",
                            height: "400px",
                            margin: "0 auto"
                        }),
                            $('<div id="js-statistics-chart-images-generated-detail-container">').css({
                                position: "absolute",
                                top: "0",
                                height: "100%",
                                width: "100%"
                            }).appendTo(e),
                            $('<div id="js-statistics-chart-images-generated-master-container">').css({
                                position: "absolute",
                                top: "300px",
                                height: "100px",
                                width: "100%"
                            }).appendTo(e),
                            s.series[0].data = n,
                            o = new Highcharts.Chart(s,
                                function () {
                                    var e = [];
                                    $.each(this.series[0].data,
                                        function () {
                                            this.x >= a && e.push(this.y)
                                        }),
                                        r.series[0].data = e,
                                        t = new Highcharts.Chart(r)
                                })
                    })
            }
        }),
    $(document).on("ready pjaxr:done",
        function () {
            "use strict";
            var e = $("#js-costs-relative"),
                t = $("#js-costs-absolute"),
                o = {
                    chart: {
                        type: "line",
                        marginLeft: 55,
                        marginRight: 20
                    },
                    credits: {
                        enabled: !1
                    },
                    colors: ["#e67e22", "#2ecc71"],
                    title: {},
                    xAxis: {
                        type: "datetime",
                        dateTimeLabelFormats: {
                            month: "%b '%y"
                        },
                        title: {
                            text: "Date"
                        }
                    },
                    yAxis: {
                        title: {
                            text: "Expenses (€)"
                        },
                        allowDecimals: !0,
                        min: 0
                    },
                    tooltip: {
                        headerFormat: "<b>{series.name}</b><br>",
                        pointFormat: "{point.x:%b '%y}: {point.y:.2f}€"
                    },
                    legend: {
                        enabled: !0
                    },
                    plotOptions: {
                        line: {
                            marker: {
                                enabled: !0,
                                states: {
                                    hover: {
                                        enabled: !0,
                                        radius: 3
                                    }
                                }
                            }
                        },
                        area: {
                            lineColor: "#666666",
                            lineWidth: 1,
                            marker: {
                                enabled: !1,
                                lineWidth: 1,
                                lineColor: "#666666"
                            }
                        }
                    },
                    exporting: {
                        enabled: !1
                    }
                };
            (e.length || t.length) && $.getJSON("/api/costs/",
                function (n) {
                    if (e.length) {
                        var i = o;
                        i.title = {
                            text: "Monthly costs"
                        },
                            i.series = [{
                                name: "Invoices",
                                data: n.dates.map(function (e, t) {
                                    return [Date.parse(e), n.invoices[t]]
                                })
                            },
                                {
                                    name: "Donations",
                                    data: n.dates.map(function (e, t) {
                                        return [Date.parse(e), n.donations[t]]
                                    })
                                }],
                            e.css({
                                position: "relative",
                                width: "100%",
                                height: "400px",
                                margin: "0 auto"
                            }),
                            e.highcharts(i)
                    }
                    if (t.length) {
                        var a = o;
                        a.chart.type = "area",
                            a.title = {
                                text: "Total costs"
                            },
                            a.series = [{
                                name: "Invoices",
                                data: n.dates.map(function (e, t) {
                                    return [Date.parse(e), n.invoicesAbsolute[t]]
                                })
                            },
                                {
                                    name: "Donations",
                                    data: n.dates.map(function (e, t) {
                                        return [Date.parse(e), n.donationsAbsolute[t]]
                                    })
                                }],
                            t.css({
                                position: "relative",
                                width: "100%",
                                height: "400px",
                                margin: "0 auto"
                            }),
                            t.highcharts(a)
                    }
                })
        }),
    function (e) {
        "use strict";
        e.fonts = [],
            e.addFont = function (t) {
                "string" == typeof t && -1 === $.inArray(t, e.fonts) && (e.fonts.push(t), $("head").append('<link rel="stylesheet" href="async-font/css/' + t + '.css">'))
            }
    }(window.md = window.md || {}),
    $(document).ready(function () {
        "use strict";
        $.support.pjaxr && $(document).pjaxr("a[data-pjaxr]"),
            md.addFont("font-awesome")
    });
