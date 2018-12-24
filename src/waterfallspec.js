/*!
 * sense-client@5.61.7
 *
 * Copyright(C) 2018 Qlik International AB
 * All Rights Reserved
 *
 */
(window["qJsonp"] = window["qJsonp"] || []).push([[74], {
    1108: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(104), r(109)],
        o = function(e, t) {
            var r = -2;
            var a = -3;
            var o = 200;
            var i = 50;
            return {
                getLegendData: d,
                getCategoricalLegendPanGesture: m,
                onMouseWheel: h
            };
            function n(e) {
                return e.label ? e.label : e.min && e.max ? e.min + " - " + (e.isMax ? "" : "<") + e.max : e.max ? "<" + e.max : ">" + e.min
            }
            function s(t) {
                var n = t.colorItems;
                var s = t.selectionSettings;
                var l = t.colorMap;
                var u = t.colorDataInfo;
                var c = l.getLegendDataProvider() ? l.getLegendDataProvider().getLegendMarker() : "rect";
                var p = n.map(function(e) {
                    return Array.isArray(e.id) ? e.id[0] : e.id
                });
                var d = n.map(function(e) {
                    return e.color.toRGBA()
                });
                var m = function e(t) {
                    return l.getColorFromPreScaledValue(t.qElemNo)
                };
                var h = function e(t) {
                    return m(t).toHex()
                };
                var f = function e(t) {
                    var a = m(t);
                    return t.qElemNo !== r && !a.isInvalid()
                };
                var v = {
                    extract: {
                        source: t.source,
                        field: "qDimensionInfo/" + (t.dimIndex || 0),
                        props: {
                            label: function e(t) {
                                return t.qText
                            }
                        }
                    }
                };
                if (u.hasOthers) {
                    var g = e.get("properties.dimensionLimits.others");
                    var b = l.getColorFromPreScaledValue([a], g);
                    v.amend = [{
                        value: a,
                        label: {
                            value: g
                        },
                        color: {
                            value: b
                        },
                        source: {}
                    }];
                    p.push(a);
                    d.push(b)
                }
                var y = function e(t) {
                    return t.datum.color.value
                };
                var q = function e(t) {
                    return {
                        data: t.data,
                        context: t.context,
                        style: {
                            inactive: t.style.inactive
                        }
                    }
                };
                var x = {
                    displayOrder: o,
                    minimumLayoutMode: "MEDIUM",
                    prioOrder: i,
                    renderer: "svg",
                    scale: {
                        type: "categorical-color",
                        data: v,
                        label: function e(t) {
                            return t.datum.label.value
                        },
                        trackBy: "id"
                    },
                    settings: {
                        title: t.title,
                        item: {
                            shape: {
                                type: c
                            }
                        }
                    },
                    brush: {
                        trigger: s && s.trigger || [],
                        consume: (s && s.consume || []).map(q)
                    }
                };
                if (u.altMode) {
                    x.scale.domain = p;
                    x.scale.range = d
                } else {
                    x.scale.data.extract.props.color = h;
                    x.scale.data.extract.filter = f;
                    x.settings.item.shape.fill = y
                }
                return x
            }
            function l(e) {
                var t = e.colorItems;
                var r = e.colorMap;
                var a = r.getLegendDataProvider() ? r.getLegendDataProvider().getLegendMarker() : "rect";
                var s = t.map(n);
                var l = t.map(function(e) {
                    return e.color.toRGBA()
                });
                return {
                    displayOrder: o,
                    minimumLayoutMode: "MEDIUM",
                    prioOrder: i,
                    scale: {
                        type: "categorical-color",
                        domain: s,
                        range: l
                    },
                    settings: {
                        title: e.title,
                        item: {
                            shape: {
                                type: a
                            }
                        }
                    }
                }
            }
            function u(e) {
                var t = e.colorItems;
                var r = [];
                var a = [];
                var n = t[t.length - 1].id[1];
                var s = t[0].id[0];
                var l = t[t.length - 1].min;
                var u = t[0].max;
                var c = (s - n) / 1e6;
                t.forEach(function(e) {
                    r.push(e.id[0] - c);
                    r.push(e.id[1] + c)
                });
                t.forEach(function(e) {
                    a.push(e.grad[0].toRGBA());
                    a.push(e.grad[1].toRGBA())
                });
                return {
                    displayOrder: o,
                    prioOrder: i,
                    settings: {
                        fill: {
                            type: "color",
                            range: a,
                            domain: r,
                            min: n,
                            max: s
                        },
                        major: {
                            type: "linear",
                            min: n,
                            max: s
                        },
                        tick: {
                            label: function e(t) {
                                return 0 === t ? l : u
                            }
                        },
                        title: e.title
                    }
                }
            }
            function c(e, t, r) {
                var a;
                if (r && "dimension" === t.colorMode) {
                    a = r.map(function(t, r) {
                        var a = t[1].qNum;
                        var o = t[0].qText;
                        var i = e.getColorFromPreScaledValue(a, o);
                        return {
                            id: t[0].qElemNumber,
                            index: r,
                            label: o,
                            color: i
                        }
                    });
                    a = a.filter(function(e) {
                        return !e.color.isInvalid()
                    }).slice(0, 100)
                } else {
                    a = e.getColorMapping().concat();
                    a = a.filter(function(e) {
                        return !e.color.isInvalid()
                    })
                }
                return a
            }
            function p(e, t) {
                return {
                    show: t.showTitle,
                    text: e.getLegendTitle()
                }
            }
            function d(e) {
                var t = e.colorMap;
                var r = t.getColorDataInfo();
                var a = r.legendMode || {};
                if (!r.valid)
                    return;
                var o = c(t, a, e.legendData);
                if (0 === o.length)
                    return;
                var i = {
                    colorMap: t,
                    selectionSettings: e.selectionSettings,
                    source: e.source,
                    dimIndex: e.dimIndex,
                    colorDataInfo: r,
                    colorItems: o,
                    title: p(t, a)
                };
                return a.discrete ? {
                    type: "categorical-legend",
                    settings: "dimension" === a.colorMode ? s(i) : l(i)
                } : {
                    type: "sequential-legend",
                    settings: u(i)
                }
            }
            function m(e) {
                var r;
                function a(t, r) {
                    if (!r)
                        return false;
                    var a = {
                        x: r.center.x - r.deltaX,
                        y: r.center.y - r.deltaY
                    };
                    var o = this.chart.componentsFromPoint(a);
                    return o.some(function(t) {
                        return t.settings.key === e
                    })
                }
                function o() {
                    if (r) {
                        clearInterval(r);
                        r = null
                    }
                }
                return [{
                    type: "Pan",
                    options: {
                        event: "catlegendpan",
                        threshold: 1,
                        enable: a
                    },
                    events: {
                        catlegendpanstart: function t() {
                            o();
                            var r = this.chart.component(e);
                            r.emit("panstart")
                        },
                        catlegendpanmove: function t(r) {
                            var a = this.chart.component(e);
                            a.emit("panmove", r)
                        },
                        catlegendpanend: function t() {
                            var r = this.chart.component(e);
                            r.emit("panend")
                        },
                        catlegendpancancel: function t() {
                            var r = this.chart.component(e);
                            r.emit("panend")
                        }
                    }
                }, {
                    type: "Press",
                    options: {
                        enable: a
                    },
                    events: {
                        press: function a(i) {
                            var n = this.chart.component(e);
                            var s = i.target;
                            var l = s ? s.getAttribute("data-action") : "";
                            if (l) {
                                o();
                                r = setInterval(function() {
                                    n.emit(l)
                                }, 100);
                                t.preventGestures()
                            }
                        },
                        pressup: function e() {
                            o()
                        }
                    }
                }]
            }
            function h(e, t, r) {
                if (!!r && t.componentsFromPoint(e).some(function(e) {
                    return e.settings.key === r
                })) {
                    var a = t.component(r);
                    a.emit(e.delta > 0 ? "prev" : "next");
                    return true
                }
            }
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    },
    1335: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(184), r(1108)],
        o = function(e, t) {
            var r = ".scrollHandler";
            a.prototype.getScrollApi = o;
            a.prototype.setDisabled = i;
            a.prototype.getDisabled = n;
            a.prototype.setItemSize = s;
            a.prototype.getItemSize = l;
            a.prototype.getScrollViewSizeInItem = u;
            a.prototype.on = c;
            a.prototype.off = p;
            a.prototype.updateViewState = d;
            a.prototype.onResize = m;
            a.prototype.isDataSizeChanged = h;
            a.prototype.resetScroll = f;
            a.prototype.getViewData = v;
            a.prototype.setOptions = y;
            a.prototype.getScrollState = g;
            a.prototype.setScrollState = b;
            return a;
            function a(e, t, r, a, o, i, n) {
                if (!e || !t || !r || !a)
                    throw Error("Scroll-handler: Missing input");
                this._chartInstance = e;
                this._$chartElement = t;
                this._getSlicedDataFn = a;
                this._tooltipApi = o;
                this._on = false;
                this._itemSize = 30;
                this.options = {
                    direction: "vertical"
                };
                this._onScrollCallback = i;
                this._legendKey = n
            }
            function o() {
                this._scrollApi || (this._scrollApi = this._chartInstance.scroll("dimension"));
                return this._scrollApi
            }
            function i(e) {
                this._disabled = e
            }
            function n() {
                return this._disabled
            }
            function s(e) {
                if (this._itemSize !== e) {
                    this._itemSize = e;
                    q.call(this)
                }
            }
            function l() {
                return this._itemSize
            }
            function u() {
                this._scrollViewSizeInItem || q.call(this);
                return this._scrollViewSizeInItem
            }
            function c() {
                if (this._on)
                    return;
                if (this.getScrollApi()) {
                    this._scrollApi.removeAllListeners();
                    this._scrollApi.on("update", S.bind(this))
                }
                this._$chartElement.on("mousewheel" + r + " DOMMouseScroll" + r, x.bind(this));
                this._$chartElement.on("touchstart" + r, function(e) {
                    e.preventDefault()
                });
                this._on = true
            }
            function p() {
                if (!this._on)
                    return;
                this.getScrollApi() && this._scrollApi.removeAllListeners();
                this._$chartElement.off(r);
                this._on = false
            }
            function d(e) {
                q.call(this);
                this.getScrollApi() && this._scrollApi.update({
                    viewSize: this._scrollViewSizeInItem,
                    max: e
                })
            }
            function m() {
                this._sizeChanged = true;
                q.call(this);
                this.getScrollApi() && this._scrollApi.update({
                    viewSize: this._scrollViewSizeInItem
                })
            }
            function h(e, t) {
                return Math.min(this.getScrollViewSizeInItem(), t) !== e
            }
            function f() {
                this.getScrollApi() && this._scrollApi.moveTo(0)
            }
            function v() {
                var e = 0
                  , t = 0;
                if (this.getScrollApi()) {
                    var r = this._scrollApi.getState();
                    e = Math.round(r.start);
                    t = r.viewSize
                }
                return this._getSlicedDataFn(e, t)
            }
            function g() {
                return this.getScrollApi().getState().start
            }
            function b(e) {
                this.getScrollApi().moveTo(e)
            }
            function y(e) {
                this.options.direction !== e.direction && (this._scrollViewSizeInItem = void 0);
                this.options = e
            }
            function q() {
                var e = ("horizontal" === this.options.direction ? this._$chartElement.width() : this._$chartElement.height()) || 0;
                var t = Math.floor(e / this.getItemSize());
                this._scrollViewSizeInItem = Math.max(t, 1)
            }
            function x(r) {
                var a = e.getMouseWheelData(r.originalEvent);
                if (t.onMouseWheel(a, this._chartInstance, this._legendKey) || this._disabled || !this.getScrollApi())
                    return;
                r.preventDefault();
                if (!a.delta)
                    return;
                var o = 3;
                var i = a.delta < 0 ? o : -o;
                this._scrollApi.move(i)
            }
            function S() {
                if (this._disabled || this._sizeChanged) {
                    this._sizeChanged = false;
                    return
                }
                this._tooltipApi && this._tooltipApi.cancel();
                var e = this;
                this.getViewData().then(function(t) {
                    e._on && !e._disabled && e._onScrollCallback && e._onScrollCallback(t, void 0, true)
                }).catch(function() {})
            }
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    },
    1595: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(271)],
        o = function(e) {
            function t(t, r) {
                var a = t.color || t.qDef.color;
                if (a && !a.auto && a[r])
                    return a[r].paletteColor;
                var o = e.getStyle(i.chartID, "shape." + r, "fill");
                var n = e.Theme.currentPalette.indexOf(o);
                return {
                    index: n,
                    color: o
                }
            }
            function r(r) {
                return e.Theme.resolveColor(t(r, "positiveValue"))
            }
            function a(r) {
                return e.Theme.resolveColor(t(r, "negativeValue"))
            }
            function o(r) {
                return e.Theme.resolveColor(t(r, "subtotal"))
            }
            var i = {
                valueTypes: {
                    NORMAL: "NORMAL",
                    INVERSE: "INVERSE",
                    SUBTOTAL: "SUBTOTAL"
                },
                chartID: "waterfallChart",
                getColorForPositiveValue: r,
                getColorForNegativeValue: a,
                getColorForSubtotal: o
            };
            Object.freeze(i.valueTypes);
            Object.freeze(i);
            return i
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    },
    1596: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(104)],
        o = function(e) {
            var t = {
                measures: {
                    min: 1,
                    max: 15,
                    description: function t() {
                        return e.get("Visualizations.Descriptions.Bar")
                    },
                    add: function e() {},
                    move: function e() {},
                    remove: function e() {}
                }
            };
            return t
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    },
    2373: function(e, t) {
        e.exports = '<div class="picasso-chart" style="width:100%; height:100%; position:absolute;" aria-hidden="true"></div>\n<span class="qv-viz-center-disclaimer" ng-if="dataAttributes.noDataExist  && dataAttributes.layoutMode > 2" q-translation="Object.Disclaimer.NoDataExist" q-title-translation="Object.Disclaimer.NoDataExist" dir="ltr"></span>\n<div qva-chart-disclaimer attributes="dataAttributes" visible="!dataAttributes.noDataExist" direction="options.direction"></div>'
    },
    2374: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(1375), r(2375), r(1149), r(1595), r(102), r(104), r(271), r(1335), r(1378), r(1379), r(1504), r(140)],
        o = function(e, t, r, a, o, i, n, s, l, u, c, p) {
            var d = a.chartID;
            var m = 20;
            var h = .7;
            var f = e.extend("WaterfallChart", {
                namespace: ".waterfallchart",
                chartID: d,
                defaultOptions: {
                    navigation: false,
                    selections: false,
                    tooltips: true
                },
                init: v,
                on: x,
                off: S,
                createChartSettings: F,
                updateData: H,
                resize: L,
                paint: N,
                getSlicedData: g,
                setSnapshotData: b,
                getViewState: y
            });
            return f;
            function v(e, t, r, a, o, i) {
                this._super(e, t, r, a, o, i);
                this.hasOption("tooltips") && (this._tooltipHandler = u.create(this.chartInstance, i, t));
                this._scrollHandler = new s(this.chartInstance,t,t[0],this.getSlicedData.bind(this),i,this.updateChart.bind(this));
                this._scrollHandler.setOptions({
                    direction: "horizontal"
                });
                this.setDataPaths(["generated/qHyperCube"])
            }
            function g(e, r) {
                t.generateSlicedHyperCube(this.layout, e, r);
                return o.resolve(this.layout)
            }
            function b(e) {
                this._super(e);
                e.generated = this.layout.generated;
                e.generatedMatrix = this.layout.generatedMatrix
            }
            function y() {
                return {
                    scroll: this._scrollHandler.getScrollState()
                }
            }
            function q(e) {
                this._scrollHandler.setDisabled(!this.hasOption("navigation") || !!e)
            }
            function x() {
                this._super();
                this.hasOption("tooltips") && this._tooltipHandler.on();
                this.hasOption("navigation") && this._scrollHandler.on()
            }
            function S() {
                this._super();
                this.hasOption("tooltips") && this._tooltipHandler.off();
                this.hasOption("navigation") && this._scrollHandler.off()
            }
            function A(e) {
                var t = -Number.MAX_VALUE;
                e.qHyperCube.qMeasureInfo.forEach(function(e) {
                    t = Math.max(t, e.qFallbackTitle.length);
                    e.valueType !== a.valueTypes.SUBTOTAL && e.subtotal && e.subtotal.enable && (t = Math.max(t, e.subtotal.label ? e.subtotal.label.length : 0))
                });
                return Math.min(m, Math.max(0, t))
            }
            function C(e) {
                return {
                    settings: {
                        labels: {
                            mode: e.dimensionAxis.label,
                            maxGlyphCount: Math.ceil(p.stringWidthOverMWidth(A(e))),
                            maxLengthPx: this.picassoElement.getBoundingClientRect().height / 4
                        }
                    }
                }
            }
            function w(e, r) {
                var a = e ? [e.box.trigger] : [];
                var o = e ? e.box.consume : [];
                return {
                    data: {
                        extract: {
                            key: "qHyperCube",
                            field: t.getGeneratedDimensionPath(0),
                            props: {
                                start: {
                                    field: t.getGeneratedMeasurePath(0)
                                },
                                end: {
                                    field: t.getGeneratedMeasurePath(1)
                                },
                                measure: {
                                    field: t.getGeneratedMeasurePath(2),
                                    reduce: "first",
                                    value: function e(t) {
                                        return t
                                    }
                                },
                                boxColor: {
                                    field: t.getGeneratedDimensionPath(1),
                                    value: function e(t) {
                                        return t.qText
                                    }
                                },
                                isCustomFormatted: !!r.qDef.isCustomFormatted,
                                tooltip: {
                                    value: function e(t) {
                                        return t
                                    }
                                }
                            }
                        }
                    },
                    settings: {
                        major: {
                            scale: "dimension"
                        },
                        minor: {
                            scale: "measure"
                        },
                        orientation: "",
                        box: {
                            width: h,
                            maxWidthPx: 4e3,
                            fill: function e(t) {
                                return t.datum.boxColor.value
                            },
                            strokeWidth: 0
                        }
                    },
                    brush: {
                        trigger: a,
                        consume: o
                    }
                }
            }
            function D(e, t, r) {
                return n.getBestContrast(e, t, r)
            }
            function M(e) {
                var t = e.data.measure;
                var r = e.dataset(t.source.key).field(t.source.field);
                return c.formatMeasureValue(r, t)
            }
            function _() {
                var e = n.getStyle(d, "value.color", "default");
                var t = n.getStyle(d, "value.color", "dark");
                var r = n.getStyle(d, "value.color", "light");
                return {
                    settings: {
                        sources: [{
                            strategy: {
                                settings: {
                                    direction: function e(t) {
                                        return t.data && t.data.end.value > t.data.start.value ? "up" : "down"
                                    },
                                    labels: [{
                                        placements: [{
                                            fill: e
                                        }, {
                                            fill: function e(a) {
                                                return D(a.data.boxColor.value, t, r)
                                            }
                                        }, {
                                            position: "opposite",
                                            fill: e,
                                            justify: 0
                                        }],
                                        label: M
                                    }]
                                }
                            }
                        }]
                    }
                }
            }
            function T(e, t) {
                return {
                    viewSize: t,
                    max: e.generatedMatrix.length
                }
            }
            function I(e) {
                var r = n.getStyle(d, "shape.bridge", "stroke");
                return {
                    data: {
                        extract: {
                            key: "qHyperCube",
                            field: t.getGeneratedDimensionPath(0),
                            props: {
                                x: {},
                                y: {
                                    field: t.getGeneratedMeasurePath(1)
                                }
                            }
                        }
                    },
                    settings: {
                        x: {
                            scale: "dimension",
                            ref: "x",
                            fn: function t(r) {
                                return e ? r.scale(r.datum.value) : r.scale(r.datum.value) + r.scale.bandwidth()
                            }
                        },
                        y: {
                            scale: "measure"
                        },
                        sizeLimits: {
                            maxPx: 2e4,
                            maxRelExtent: 1e4,
                            minRelDiscrete: 0,
                            maxRelDiscrete: 1
                        },
                        shape: "line",
                        stroke: r,
                        size: 1 - h,
                        strokeDasharray: "4 4",
                        fill: "none",
                        strokeWidth: function e(t, r) {
                            return r === t.data.items.length - 1 ? 0 : 2
                        }
                    }
                }
            }
            function V(e) {
                var t = a.getColorForPositiveValue(e);
                var r = a.getColorForNegativeValue(e);
                var o = a.getColorForSubtotal(e);
                var n = i.get("waterfall.legend.positiveValue.label");
                var s = i.get("waterfall.legend.negativeValue.label");
                var l = i.get("waterfall.legend.subtotal.label");
                return {
                    displayOrder: 200,
                    minimumLayoutMode: "MEDIUM",
                    prioOrder: 0,
                    scale: {
                        type: "categorical-color",
                        data: [n, s, l],
                        range: [t, r, o]
                    },
                    style: {
                        title: {
                            show: false
                        }
                    }
                }
            }
            function F(e) {
                var a = this.options && "rtl" === this.options.direction;
                var o = r.create({
                    chartID: d,
                    layoutMode: this.getLayoutMode(e)
                });
                var i;
                var n = this.picassoElement.clientWidth;
                var s = this.picassoElement.clientHeight;
                if (this.hasOption("tooltips")) {
                    i = {
                        box: {}
                    };
                    i.box = this._tooltipHandler.setUp({
                        data: [""],
                        contexts: ["boxTip"],
                        componentKey: "box-marker",
                        direction: this.options.direction,
                        headerResolver: function e() {
                            return
                        },
                        rowResolver: function e(t, r, a) {
                            var o = a.boxColor.value;
                            var i = c.formatMeasureValue(t, r);
                            return {
                                value: i,
                                label: a.tooltip.value.qText,
                                template: '<div class="color-template-wrapper"><div class="color-dot" style="background:' + o + '"></div><span dir="ltr">' + i + "</span></div>"
                            }
                        },
                        labelData: ["tooltip"],
                        measureRows: ["measure"]
                    })
                }
                var u = {
                    scrollHandler: this.hasOption("navigation") && this._scrollHandler,
                    selectionHandler: null
                };
                var p = {
                    componentKey: "box-marker"
                };
                this._dependentActions && this._dependentActions.destroy();
                this._dependentActions = l.create(u, this.isOn.bind(this), "vertical", a, p);
                o.addPreset("dimension-measure-chart", {
                    isRtl: a,
                    orientation: "vertical",
                    gridlines: e.gridlines,
                    includeDimensionAxis: true,
                    dimensionAxisProperties: e.dimensionAxis,
                    dimensionAxisSettings: C.call(this, e),
                    dimensionSource: t.getGeneratedDimensionPath(0),
                    dimensionScaleSettings: {
                        component: {
                            maxPxStep: function e() {
                                return s / 4
                            }
                        }
                    },
                    includeMeasureAxis: true,
                    measureAxisProperties: e.measureAxis,
                    measureSource: [t.getGeneratedMeasurePath(0), t.getGeneratedMeasurePath(1)],
                    measureScaleSettings: {
                        component: {
                            expand: 0,
                            include: [0]
                        }
                    },
                    hasNavigation: this.hasOption("navigation"),
                    isNavigationEnabledFn: this.isOn.bind(this),
                    scrollSettings: this.hasOption("navigation") && T(e, this._scrollHandler.getScrollViewSizeInItem()),
                    refLines: e.refLine && e.refLine.refLines,
                    brushActions: this._dependentActions.gestures
                });
                o.addComponent("box-marker", w(i, e));
                o.addComponent("point-marker", I(a));
                e.legend && !e.legend.show || o.addComponent("categorical-legend", V(e), {
                    dock: e.legend ? e.legend.dock : "auto",
                    isRtl: a,
                    chartWidth: n,
                    chartHeight: s
                });
                e.dataPoint.showLabels && o.addComponent("labels", _());
                var m = o.getSettings();
                this.addSnapshotChartSettings(m, e);
                return m
            }
            function H(e) {
                var r = this;
                return this._super(e).then(function() {
                    if (r._destroyed)
                        return o.reject();
                    var e, a;
                    if (r.backendApi.isSnapshot) {
                        var i = r.layout.generated.qHyperCube.qDataPages[0].qArea;
                        e = i.qTop;
                        a = i.qHeight;
                        t.generateHyperCube(r.layout)
                    } else {
                        t.generateHyperCube(r.layout);
                        q.call(r, true);
                        if (r.options.viewState) {
                            r._scrollHandler.updateViewState(r.layout.generatedMatrix.length);
                            r._scrollHandler.setScrollState(r.options.viewState.scroll);
                            e = r.options.viewState.scroll
                        } else {
                            r._scrollHandler.resetScroll();
                            e = 0
                        }
                        a = r._scrollHandler.getScrollViewSizeInItem()
                    }
                    t.generateSlicedHyperCube(r.layout, e, a)
                })
            }
            function L(e, t) {
                O(this);
                this._super(e, t)
            }
            function N(e) {
                this.backendApi.isSnapshot || this.options.viewState || q.call(this, false);
                this.hasOption("tooltips") && this._tooltipHandler.closeTooltip();
                var t = this.layout.generated.qHyperCube.qDataPages[0].qMatrix.length;
                var r = this.layout.generatedMatrix.length;
                if (!this.backendApi.isSnapshot && this._scrollHandler.isDataSizeChanged(t, r)) {
                    var a = this._super;
                    var o = this;
                    return this._scrollHandler.getViewData().finally(function() {
                        return a.call(o, e)
                    })
                }
                return this._super(e)
            }
            function O(e) {
                e._scrollHandler.onResize()
            }
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    },
    2375: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(1595), r(738)],
        o = function(e, t) {
            return {
                generateHyperCube: i,
                generateSlicedHyperCube: n,
                getGeneratedDimensionPath: r,
                getGeneratedMeasurePath: a
            };
            function r(e) {
                return "qDimensionInfo/" + e
            }
            function a(e) {
                return "qMeasureInfo/" + e
            }
            function o(e) {
                return e.qHyperCube.qMeasureInfo[0].qNumFormat
            }
            function i(r) {
                var a = r.qHyperCube.qMeasureInfo;
                var i = r.qHyperCube.qDataPages[0].qMatrix;
                var n = a.length;
                if (!n)
                    return;
                var s = e.getColorForPositiveValue(r);
                var l = e.getColorForNegativeValue(r);
                var u = e.getColorForSubtotal(r);
                var c = new t;
                c.prepare("#.#A");
                var p = [];
                var d = 0
                  , m = 0
                  , h = -Number.MAX_VALUE
                  , f = Number.MAX_VALUE
                  , v = -Number.MAX_VALUE
                  , g = Number.MAX_VALUE;
                var b = 0, y;
                var q;
                for (var x = 0; x < n; x++) {
                    q = isNaN(i[0][x].qNum) ? 0 : i[0][x].qNum;
                    if (a[x].valueType !== e.valueTypes.SUBTOTAL) {
                        d = m;
                        m += q * (a[x].valueType === e.valueTypes.INVERSE ? -1 : 1);
                        y = d < m ? s : l;
                        p.push([{
                            qText: a[x].qFallbackTitle,
                            qElemNumber: b++
                        }, {
                            qText: y
                        }, {
                            qNum: d
                        }, {
                            qNum: m
                        }, {
                            qNum: m - d,
                            qText: i[0][x].qText
                        }]);
                        a[x].subtotal && a[x].subtotal.enable && p.push([{
                            qText: a[x].subtotal.label || "",
                            qElemNumber: b++
                        }, {
                            qText: u
                        }, {
                            qNum: 0
                        }, {
                            qNum: m
                        }, {
                            qNum: m,
                            qText: c.formatValue(m)
                        }])
                    } else {
                        d = 0;
                        m = q;
                        p.push([{
                            qText: a[x].qFallbackTitle,
                            qElemNumber: b++
                        }, {
                            qText: u
                        }, {
                            qNum: d
                        }, {
                            qNum: m
                        }, {
                            qNum: m - d,
                            qText: i[0][x].qText
                        }])
                    }
                    h = Math.max(h, d);
                    f = Math.min(f, d);
                    v = Math.max(v, m);
                    g = Math.min(g, m)
                }
                var S = o(r);
                var A = r.qHyperCube.qMeasureInfo[0].qIsAutoFormat;
                var C = r.qDef.isCustomFormatted;
                var w = {
                    qHyperCube: {
                        qMode: "S",
                        qDataPages: [{
                            qArea: {
                                qTop: 0,
                                qLeft: 0,
                                qWidth: 5,
                                qHeight: p.length
                            },
                            qMatrix: p
                        }],
                        qDimensionInfo: [{
                            qStateCounts: {}
                        }, {
                            qStateCounts: {}
                        }],
                        qMeasureInfo: [{
                            qMin: f,
                            qMax: h,
                            qNumFormat: S,
                            qIsAutoFormat: A,
                            isCustomFormatted: C
                        }, {
                            qMin: g,
                            qMax: v,
                            qNumFormat: S,
                            qIsAutoFormat: A,
                            isCustomFormatted: C
                        }, {
                            qMin: g,
                            qMax: v,
                            qNumFormat: S,
                            qIsAutoFormat: A,
                            isCustomFormatted: C
                        }]
                    }
                };
                r.generatedMatrix = p;
                r.generated = w
            }
            function n(e, t, r) {
                e.generated.qHyperCube.qDataPages = [{
                    qArea: {
                        qTop: t,
                        qLeft: 0,
                        qWidth: 5,
                        qHeight: r
                    },
                    qMatrix: e.generatedMatrix.slice(t, t + r)
                }]
            }
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    },
    2376: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(104), r(1595), r(338), r(112), r(103)],
        o = function(e, t, r, a, o) {
            function i(e) {
                return !e.color.auto
            }
            var n = {
                uses: "data",
                addTranslation: "Properties.AddData",
                items: {
                    measures: {
                        disabledRef: "",
                        items: {
                            numberFormatting: {
                                show: false
                            },
                            valueType: {
                                type: "string",
                                component: "dropdown",
                                ref: "qDef.valueType",
                                translation: "properties.waterfall.measureOperation",
                                options: [{
                                    value: t.valueTypes.NORMAL,
                                    translation: "properties.waterfall.measureOperation.add"
                                }, {
                                    value: t.valueTypes.INVERSE,
                                    translation: "properties.waterfall.measureOperation.subtract"
                                }, {
                                    value: t.valueTypes.SUBTOTAL,
                                    translation: "properties.waterfall.measureOperation.subtotal"
                                }],
                                defaultValue: t.valueTypes.NORMAL
                            },
                            subTotal: {
                                ref: "qDef.subtotal.enable",
                                type: "boolean",
                                defaultValue: false,
                                translation: "properties.waterfall.measureOperation.subtotal",
                                show: function e(r) {
                                    return r.qDef.valueType !== t.valueTypes.SUBTOTAL
                                }
                            },
                            subTotalLabel: {
                                translation: "properties.waterfall.subtotalLabel",
                                component: "string",
                                expression: "optional",
                                ref: "qDef.subtotal.label",
                                defaultValue: function t() {
                                    return e.get("properties.waterfall.measureOperation.subtotal")
                                },
                                show: function e(r) {
                                    return r.qDef.valueType !== t.valueTypes.SUBTOTAL && r.qDef.subtotal && r.qDef.subtotal.enable
                                }
                            }
                        }
                    }
                }
            };
            var s = {
                type: "items",
                translation: "properties.presentation",
                grouped: true,
                items: {
                    gridLines: {
                        type: "items",
                        snapshot: {
                            tid: "property-gridLines"
                        },
                        items: {
                            showGridLines: {
                                ref: "gridlines.auto",
                                type: "boolean",
                                translation: "properties.gridLine.spacing",
                                component: "switch",
                                defaultValue: true,
                                options: [{
                                    value: true,
                                    translation: "Common.Auto"
                                }, {
                                    value: false,
                                    translation: "Common.Custom"
                                }]
                            },
                            gridSpacing: {
                                ref: "gridlines.spacing",
                                type: "number",
                                component: "dropdown",
                                defaultValue: 2,
                                options: [{
                                    value: 0,
                                    translation: "properties.gridLine.noLines"
                                }, {
                                    value: 2,
                                    translation: "properties.gridLine.medium"
                                }, {
                                    value: 3,
                                    translation: "properties.gridLine.narrow"
                                }],
                                show: function e(t) {
                                    return t.gridlines && !t.gridlines.auto
                                }
                            }
                        }
                    },
                    showLabels: {
                        ref: "dataPoint.showLabels",
                        type: "boolean",
                        translation: "properties.dataPoints.labelmode",
                        component: "switch",
                        defaultValue: true,
                        options: [{
                            value: true,
                            translation: "Common.Auto"
                        }, {
                            value: false,
                            translation: "properties.off"
                        }],
                        snapshot: {
                            tid: "property-dataPoints"
                        }
                    }
                }
            };
            var l = {
                translation: "properties.colorsAndLegend",
                type: "items",
                grouped: true,
                items: {
                    colors: {
                        type: "items",
                        items: {
                            autoColor: {
                                ref: "color.auto",
                                type: "boolean",
                                translation: "properties.colors",
                                component: "switch",
                                defaultValue: true,
                                options: [{
                                    value: true,
                                    translation: "Common.Auto"
                                }, {
                                    value: false,
                                    translation: "Common.Custom"
                                }]
                            },
                            positiveValueColor: {
                                ref: "color.positiveValue.paletteColor",
                                translation: "properties.waterfall.color.positiveValueColor",
                                type: "object",
                                component: "color-picker",
                                dualOutput: true,
                                defaultValue: {
                                    index: 6,
                                    color: null
                                },
                                show: i
                            },
                            negativeValueColor: {
                                ref: "color.negativeValue.paletteColor",
                                translation: "properties.waterfall.color.negativeValueColor",
                                type: "object",
                                component: "color-picker",
                                dualOutput: true,
                                defaultValue: {
                                    index: -1,
                                    color: "#cc6677"
                                },
                                show: i
                            },
                            subtotalColor: {
                                ref: "color.subtotal.paletteColor",
                                translation: "properties.waterfall.color.subtotalColor",
                                type: "object",
                                component: "color-picker",
                                dualOutput: true,
                                defaultValue: {
                                    index: -1,
                                    color: "#c3c3c3"
                                },
                                show: i
                            }
                        }
                    },
                    legend: {
                        type: "items",
                        items: {
                            show: {
                                ref: "legend.show",
                                type: "boolean",
                                translation: "properties.legend.show",
                                component: "switch",
                                defaultValue: true,
                                options: [{
                                    value: true,
                                    translation: "Common.Auto"
                                }, {
                                    value: false,
                                    translation: "properties.off"
                                }]
                            },
                            dock: {
                                type: "string",
                                component: "dropdown",
                                ref: "legend.dock",
                                translation: "properties.legend.position",
                                options: [{
                                    value: "auto",
                                    translation: "Common.Auto"
                                }, {
                                    value: "right",
                                    translation: "properties.dock.right"
                                }, {
                                    value: "bottom",
                                    translation: "Common.Bottom"
                                }, {
                                    value: "left",
                                    translation: "properties.dock.left"
                                }, {
                                    value: "top",
                                    translation: "Common.Top"
                                }],
                                defaultValue: "auto",
                                show: function e(t) {
                                    return a.getValue(t, "legend.show", true)
                                }
                            }
                        }
                    }
                }
            };
            var u = {
                uses: "axis.picasso.measureAxis",
                label: e.get("properties.yAxis"),
                items: {
                    axis: {
                        items: {
                            show: {
                                translation: "properties.labels",
                                defaultValue: "labels",
                                options: [{
                                    value: "labels",
                                    translation: "properties.labels"
                                }, {
                                    value: "none",
                                    translation: "Common.None"
                                }, null, null]
                            }
                        }
                    }
                }
            };
            var c = {
                uses: "axis.picasso.dimensionAxis",
                items: {
                    othersGroup: {
                        items: {
                            show: {
                                translation: "properties.labels",
                                defaultValue: "labels",
                                options: [{
                                    value: "labels",
                                    translation: "properties.labels"
                                }, {
                                    value: "none",
                                    translation: "Common.None"
                                }, null, null]
                            }
                        }
                    }
                }
            };
            var p = {
                uses: "settings",
                items: {
                    presentation: s,
                    colors: l,
                    measureAxis: u,
                    dimensionAxis: c
                }
            };
            var d = {
                type: "items",
                component: "expandable-items",
                translation: "properties.addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling",
                        items: {
                            suppressZero: null,
                            calcCond: {
                                uses: "calcCond"
                            }
                        }
                    },
                    refLines: {
                        uses: "reflines"
                    }
                }
            };
            var m = {
                translation: "properties.numberFormatting",
                type: "items",
                globalChange: function e(t) {
                    t.qHyperCubeDef.qMeasures.forEach(function(e) {
                        e.qDef.numFormatFromTemplate = t.qDef.numFormatFromTemplate;
                        e.qDef.qNumFormat = o.extend(true, {}, t.qDef.qNumFormat)
                    })
                },
                items: {
                    numberFormatting: o.extend(true, {}, r.measures.items.numberFormatting, {
                        items: {
                            numberFormattingType: {
                                schemaIgnore: false
                            }
                        }
                    })
                }
            };
            return {
                type: "items",
                component: "accordion",
                items: {
                    data: n,
                    numberFormatting: m,
                    addons: d,
                    settings: p
                }
            }
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    },
    988: function(e, t, r) {
        "use strict";
        var a, o;
        !(a = [r(103), r(400), r(2373), r(2374), r(2376), r(1596), r(211)],
        o = function(e, t, r, a, o, i, n) {
            var s = {
                type: "waterfallchart",
                BackendApi: t,
                template: r,
                View: a,
                definition: o,
                initialProperties: {
                    qHyperCubeDef: {
                        qDimensions: [],
                        qMeasures: [],
                        qInitialDataFetch: [{
                            qWidth: 15,
                            qHeight: 100
                        }],
                        qSuppressMissing: true
                    }
                },
                support: {
                    cssScaling: false,
                    snapshot: true,
                    export: true,
                    exportData: true,
                    sharing: true,
                    viewData: true
                },
                data: i,
                importProperties: function t(r, a, o) {
                    var i = n.hypercube.importProperties.apply(n, [r, a, o])
                      , s = i.qProperty;
                    "all" === s.dimensionAxis.show ? s.dimensionAxis.show = "labels" : "title" === s.dimensionAxis.show && (s.dimensionAxis.show = "none");
                    "all" === s.measureAxis.show ? s.measureAxis.show = "labels" : "title" === s.measureAxis.show && (s.measureAxis.show = "none");
                    if (s.qHyperCubeDef.qMeasures.length > 0) {
                        s.qDef.numFormatFromTemplate = s.qHyperCubeDef.qMeasures[0].qDef.numFormatFromTemplate;
                        s.qDef.qNumFormat = s.qHyperCubeDef.qMeasures[0].qDef.qNumFormat;
                        s.qHyperCubeDef.qMeasures.forEach(function(t) {
                            t.qDef.numFormatFromTemplate = s.qDef.numFormatFromTemplate;
                            t.qDef.qNumFormat = e.extend(true, {}, s.qDef.qNumFormat)
                        })
                    }
                    return i
                },
                exportProperties: n.hypercube.exportProperties
            };
            return s
        }
        .apply(t, a),
        void 0 !== o && (e.exports = o))
    }
}]);
//# sourceMappingURL=https://qliktech.jfrog.io/qliktech/qlik-dev-local/com.qlik/client/5.61.7/zips/client-sourcemaps-5.61.7.zip!/sourcemaps/chunks/waterfallchart.38611652b5a4a854e83b.js.map
