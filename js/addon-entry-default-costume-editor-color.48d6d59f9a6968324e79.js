(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[18], {
    1631: function(t, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "resources", (function() {
            return r
        }));
        const r = {
            "userscript.js": async function({addon: t, console: e, msg: s}) {
                await t.tab.traps.getPaper();
                const r = t => Math.round(+t).toString(16).toUpperCase().padStart(2, "0"),
                    i = t => {
                        if (null === t)
                            return null;
                        if ("string" == typeof t) {
                            if (t.startsWith("#"))
                                return t.substring(0, 9).toUpperCase();
                            const e = t.match(/^rgb\((\d+)\s*,(\d+)\s*,(\d+)\)$/);
                            if (e) {
                                const [t, s, i, n] = e;
                                return "#".concat(r(s)).concat(r(i)).concat(r(n))
                            }
                            const s = t.match(/^rgba\((\d+)\s*,(\d+)\s*,(\d+),([\d.]+)\)$/);
                            if (s) {
                                const [t, e, i, n, a] = s;
                                return "#".concat(r(e)).concat(r(i)).concat(r(n)).concat(r(255 * a))
                            }
                        }
                        return e.log("Could not normalize color", t), null
                    },
                    n = t => t === a ? a : i(t),
                    a = "scratch-paint/style-path/mixed",
                    o = i("#9966FF"),
                    c = i("#000000"),
                    p = Object.assign(Object.create(null), {
                        BRUSH: {
                            resetsFill: !0
                        },
                        ERASER: {},
                        LINE: {
                            resetsStroke: !0,
                            requiresNonZeroStrokeWidth: !0,
                            supportsGradient: !0
                        },
                        FILL: {
                            resetsFill: !0,
                            supportsGradient: !0
                        },
                        SELECT: {
                            supportsGradient: !0
                        },
                        RESHAPE: {
                            supportsGradient: !0
                        },
                        OVAL: {
                            resetsFill: !0,
                            resetsStroke: !0,
                            supportsGradient: !0
                        },
                        RECT: {
                            resetsFill: !0,
                            resetsStroke: !0,
                            supportsGradient: !0
                        },
                        TEXT: {
                            resetsFill: !0,
                            resetsStroke: !0
                        },
                        BIT_BRUSH: {
                            resetsFill: !0
                        },
                        BIT_LINE: {
                            resetsFill: !0,
                            requiresNonZeroStrokeWidth: !0
                        },
                        BIT_OVAL: {
                            resetsFill: !0,
                            resetsStroke: !0,
                            supportsGradient: !0
                        },
                        BIT_RECT: {
                            resetsFill: !0,
                            resetsStroke: !0,
                            supportsGradient: !0
                        },
                        BIT_TEXT: {
                            resetsFill: !0,
                            resetsStroke: !0
                        },
                        BIT_FILL: {
                            resetsFill: !0,
                            supportsGradient: !0
                        },
                        BIT_ERASER: {},
                        BIT_SELECT: {
                            supportsGradient: !0
                        }
                    }),
                    l = () => p[t.tab.redux.state.scratchPaint.mode];
                class d {
                    constructor(t, e, s, r)
                    {
                        this.reduxPropertyName = t,
                        this.primaryAction = e,
                        this.secondaryAction = s,
                        this.gradientTypeAction = r
                    }
                    get(e=t.tab.redux.state)
                    {
                        return e.scratchPaint.color[this.reduxPropertyName]
                    }
                    set(e)
                    {
                        const s = this.get(),
                            r = n(e.primary);
                        s.primary !== r && t.tab.redux.dispatch({
                            type: this.primaryAction,
                            color: r
                        });
                        const i = l();
                        if (i && i.supportsGradient) {
                            const r = n(e.secondary);
                            s.secondary !== r && t.tab.redux.dispatch({
                                type: this.secondaryAction,
                                color: r
                            }),
                            s.gradientType !== e.gradientType && t.tab.redux.dispatch({
                                type: this.gradientTypeAction,
                                gradientType: e.gradientType
                            })
                        }
                    }
                }
                const u = new d("fillColor", "scratch-paint/fill-style/CHANGE_FILL_COLOR", "scratch-paint/fill-style/CHANGE_FILL_COLOR_2", "scratch-paint/fill-style/CHANGE_FILL_GRADIENT_TYPE"),
                    h = new d("strokeColor", "scratch-paint/stroke-style/CHANGE_STROKE_COLOR", "scratch-paint/stroke-style/CHANGE_STROKE_COLOR_2", "scratch-paint/stroke-style/CHANGE_STROKE_GRADIENT_TYPE"),
                    y = t => ({
                        primary: t,
                        secondary: null,
                        gradientType: "SOLID"
                    });
                let g,
                    E,
                    T;
                const _ = () => {
                    g = y(i(t.settings.get("fill"))),
                    E = y(i(t.settings.get("stroke"))),
                    T = t.settings.get("strokeSize")
                };
                _();
                const S = () => {
                        u.set(g)
                    },
                    k = () => {
                        h.set(E)
                    },
                    f = e => {
                        let s = T;
                        0 === s && e && (s = 1),
                        t.tab.redux.state.scratchPaint.color.strokeWidth !== s && t.tab.redux.dispatch({
                            type: "scratch-paint/stroke-width/CHANGE_STROKE_WIDTH",
                            strokeWidth: s
                        })
                    };
                t.self.disabled || (S(), k(), f(!1)),
                t.settings.addEventListener("change", () => {
                    t.settings.get("persistence") || _()
                });
                const m = t => null !== t.primary && t.primary !== a;
                let G = !1;
                t.tab.redux.initialize(),
                t.tab.redux.addEventListener("statechanged", ({detail: s}) => {
                    if (t.self.disabled)
                        return;
                    const r = s.action;
                    if (!G && t.settings.get("persistence")) {
                        const t = u.get();
                        u.get(s.prev) !== t && m(t) && (g = t);
                        const e = h.get();
                        h.get(s.prev) !== e && m(e) && (E = e);
                        const r = s.next.scratchPaint.color.strokeWidth;
                        "number" == typeof r && (T = r)
                    }
                    "scratch-paint/modes/CHANGE_MODE" === r.type && (G = !0, queueMicrotask(() => {
                        if (G = !1, t.settings.get("persistence")) {
                            const s = l();
                            if (!s)
                                return void e.warn("unknown tool", t.tab.redux.state.scratchPaint.mode);
                            s.resetsFill && S(),
                            s.resetsStroke && (f(!!s.requiresNonZeroStrokeWidth), k())
                        } else {
                            const t = u.get(s.prev);
                            if (null === t.primary || t.primary === a) {
                                u.get().primary === o && S()
                            }
                            const e = h.get(s.prev);
                            if (null === e.primary || e.primary === a) {
                                h.get().primary === c && (f(!0), k())
                            }
                        }
                    }))
                })
            }
        }
    }
}]);
