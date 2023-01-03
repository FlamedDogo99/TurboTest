(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[5], {
    1487: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })),
        n.d(t, "b", (function() {
            return a
        }));
        const r = () => /^#?[0-9a-fA-F]{3,8}$/,
            a = e => {
                let t = String(e);
                if (!r().test(t))
                    return "#000000";
                if (t.startsWith("#") || (t = "#".concat(t)), 4 === t.length) {
                    const [e, n, r, a] = t;
                    t = "#".concat(n).concat(n).concat(r).concat(r).concat(a).concat(a)
                }
                return t.toLowerCase()
            }
    },
    1488: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        class r {
            constructor(e)
            {
                this.timeout = null,
                this.callback = null,
                this.wait = e
            }
            abort(e=!0)
            {
                this.timeout && (clearTimeout(this.timeout), e && this.callback(), this.timeout = this.callback = null)
            }
            limit(e)
            {
                this.abort(!1),
                this.callback = e,
                this.timeout = setTimeout(() => {
                    this.timeout = this.callback = null,
                    e()
                }, this.wait)
            }
        }
    },
    1489: function(e, t, n) {
        "use strict";
        const r = function(e) {
            var t = /^\s+/,
                n = /\s+$/,
                r = 0,
                a = e.round,
                s = e.min,
                i = e.max,
                o = e.random;
            function f(o, c) {
                if (c = c || {}, (o = o || "") instanceof f)
                    return o;
                if (!(this instanceof f))
                    return new f(o, c);
                var l = function(r) {
                    var a = {
                            r: 0,
                            g: 0,
                            b: 0
                        },
                        o = 1,
                        f = null,
                        c = null,
                        l = null,
                        h = !1,
                        A = !1;
                    "string" == typeof r && (r = function(e) {
                        e = e.replace(t, "").replace(n, "").toLowerCase();
                        var r,
                            a = !1;
                        if (y[e])
                            e = y[e],
                            a = !0;
                        else if ("transparent" == e)
                            return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                        if (r = I.rgb.exec(e))
                            return {
                                r: r[1],
                                g: r[2],
                                b: r[3]
                            };
                        if (r = I.rgba.exec(e))
                            return {
                                r: r[1],
                                g: r[2],
                                b: r[3],
                                a: r[4]
                            };
                        if (r = I.hsl.exec(e))
                            return {
                                h: r[1],
                                s: r[2],
                                l: r[3]
                            };
                        if (r = I.hsla.exec(e))
                            return {
                                h: r[1],
                                s: r[2],
                                l: r[3],
                                a: r[4]
                            };
                        if (r = I.hsv.exec(e))
                            return {
                                h: r[1],
                                s: r[2],
                                v: r[3]
                            };
                        if (r = I.hsva.exec(e))
                            return {
                                h: r[1],
                                s: r[2],
                                v: r[3],
                                a: r[4]
                            };
                        if (r = I.hex8.exec(e))
                            return {
                                r: Q(r[1]),
                                g: Q(r[2]),
                                b: Q(r[3]),
                                a: M(r[4]),
                                format: a ? "name" : "hex8"
                            };
                        if (r = I.hex6.exec(e))
                            return {
                                r: Q(r[1]),
                                g: Q(r[2]),
                                b: Q(r[3]),
                                format: a ? "name" : "hex"
                            };
                        if (r = I.hex4.exec(e))
                            return {
                                r: Q(r[1] + "" + r[1]),
                                g: Q(r[2] + "" + r[2]),
                                b: Q(r[3] + "" + r[3]),
                                a: M(r[4] + "" + r[4]),
                                format: a ? "name" : "hex8"
                            };
                        if (r = I.hex3.exec(e))
                            return {
                                r: Q(r[1] + "" + r[1]),
                                g: Q(r[2] + "" + r[2]),
                                b: Q(r[3] + "" + r[3]),
                                format: a ? "name" : "hex"
                            };
                        return !1
                    }(r));
                    "object" == typeof r && (z(r.r) && z(r.g) && z(r.b) ? (g = r.r, u = r.g, d = r.b, a = {
                        r: 255 * E(g, 255),
                        g: 255 * E(u, 255),
                        b: 255 * E(d, 255)
                    }, h = !0, A = "%" === String(r.r).substr(-1) ? "prgb" : "rgb") : z(r.h) && z(r.s) && z(r.v) ? (f = j(r.s), c = j(r.v), a = function(t, n, r) {
                        t = 6 * E(t, 360),
                        n = E(n, 100),
                        r = E(r, 100);
                        var a = e.floor(t),
                            s = t - a,
                            i = r * (1 - n),
                            o = r * (1 - s * n),
                            f = r * (1 - (1 - s) * n),
                            c = a % 6;
                        return {
                            r: 255 * [r, o, i, i, f, r][c],
                            g: 255 * [f, r, r, o, i, i][c],
                            b: 255 * [i, i, f, r, r, o][c]
                        }
                    }(r.h, f, c), h = !0, A = "hsv") : z(r.h) && z(r.s) && z(r.l) && (f = j(r.s), l = j(r.l), a = function(e, t, n) {
                        var r,
                            a,
                            s;
                        function i(e, t, n) {
                            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                        }
                        if (e = E(e, 360), t = E(t, 100), n = E(n, 100), 0 === t)
                            r = a = s = n;
                        else {
                            var o = n < .5 ? n * (1 + t) : n + t - n * t,
                                f = 2 * n - o;
                            r = i(f, o, e + 1 / 3),
                            a = i(f, o, e),
                            s = i(f, o, e - 1 / 3)
                        }
                        return {
                            r: 255 * r,
                            g: 255 * a,
                            b: 255 * s
                        }
                    }(r.h, f, l), h = !0, A = "hsl"), r.hasOwnProperty("a") && (o = r.a));
                    var g,
                        u,
                        d;
                    return o = k(o), {
                        ok: h,
                        format: r.format || A,
                        r: s(255, i(a.r, 0)),
                        g: s(255, i(a.g, 0)),
                        b: s(255, i(a.b, 0)),
                        a: o
                    }
                }(o);
                this._originalInput = o,
                this._r = l.r,
                this._g = l.g,
                this._b = l.b,
                this._a = l.a,
                this._roundA = a(100 * this._a) / 100,
                this._format = c.format || l.format,
                this._gradientType = c.gradientType,
                this._r < 1 && (this._r = a(this._r)),
                this._g < 1 && (this._g = a(this._g)),
                this._b < 1 && (this._b = a(this._b)),
                this._ok = l.ok,
                this._tc_id = r++
            }
            function c(e, t, n) {
                e = E(e, 255),
                t = E(t, 255),
                n = E(n, 255);
                var r,
                    a,
                    o = i(e, t, n),
                    f = s(e, t, n),
                    c = (o + f) / 2;
                if (o == f)
                    r = a = 0;
                else {
                    var l = o - f;
                    switch (a = c > .5 ? l / (2 - o - f) : l / (o + f), o) {
                    case e:
                        r = (t - n) / l + (t < n ? 6 : 0);
                        break;
                    case t:
                        r = (n - e) / l + 2;
                        break;
                    case n:
                        r = (e - t) / l + 4
                    }
                    r /= 6
                }
                return {
                    h: r,
                    s: a,
                    l: c
                }
            }
            function l(e, t, n) {
                e = E(e, 255),
                t = E(t, 255),
                n = E(n, 255);
                var r,
                    a,
                    o = i(e, t, n),
                    f = s(e, t, n),
                    c = o,
                    l = o - f;
                if (a = 0 === o ? 0 : l / o, o == f)
                    r = 0;
                else {
                    switch (o) {
                    case e:
                        r = (t - n) / l + (t < n ? 6 : 0);
                        break;
                    case t:
                        r = (n - e) / l + 2;
                        break;
                    case n:
                        r = (e - t) / l + 4
                    }
                    r /= 6
                }
                return {
                    h: r,
                    s: a,
                    v: c
                }
            }
            function h(e, t, n, r) {
                var s = [T(a(e).toString(16)), T(a(t).toString(16)), T(a(n).toString(16))];
                return r && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("")
            }
            function A(e, t, n, r) {
                return [T(O(r)), T(a(e).toString(16)), T(a(t).toString(16)), T(a(n).toString(16))].join("")
            }
            function g(e, t) {
                t = 0 === t ? 0 : t || 10;
                var n = f(e).toHsl();
                return n.s -= t / 100, n.s = F(n.s), f(n)
            }
            function u(e, t) {
                t = 0 === t ? 0 : t || 10;
                var n = f(e).toHsl();
                return n.s += t / 100, n.s = F(n.s), f(n)
            }
            function d(e) {
                return f(e).desaturate(100)
            }
            function b(e, t) {
                t = 0 === t ? 0 : t || 10;
                var n = f(e).toHsl();
                return n.l += t / 100, n.l = F(n.l), f(n)
            }
            function v(e, t) {
                t = 0 === t ? 0 : t || 10;
                var n = f(e).toRgb();
                return n.r = i(0, s(255, n.r - a(-t / 100 * 255))), n.g = i(0, s(255, n.g - a(-t / 100 * 255))), n.b = i(0, s(255, n.b - a(-t / 100 * 255))), f(n)
            }
            function w(e, t) {
                t = 0 === t ? 0 : t || 10;
                var n = f(e).toHsl();
                return n.l -= t / 100, n.l = F(n.l), f(n)
            }
            function P(e, t) {
                var n = f(e).toHsl(),
                    r = (n.h + t) % 360;
                return n.h = r < 0 ? 360 + r : r, f(n)
            }
            function B(e) {
                var t = f(e).toHsl();
                return t.h = (t.h + 180) % 360, f(t)
            }
            function D(e) {
                var t = f(e).toHsl(),
                    n = t.h;
                return [f(e), f({
                    h: (n + 120) % 360,
                    s: t.s,
                    l: t.l
                }), f({
                    h: (n + 240) % 360,
                    s: t.s,
                    l: t.l
                })]
            }
            function H(e) {
                var t = f(e).toHsl(),
                    n = t.h;
                return [f(e), f({
                    h: (n + 90) % 360,
                    s: t.s,
                    l: t.l
                }), f({
                    h: (n + 180) % 360,
                    s: t.s,
                    l: t.l
                }), f({
                    h: (n + 270) % 360,
                    s: t.s,
                    l: t.l
                })]
            }
            function p(e) {
                var t = f(e).toHsl(),
                    n = t.h;
                return [f(e), f({
                    h: (n + 72) % 360,
                    s: t.s,
                    l: t.l
                }), f({
                    h: (n + 216) % 360,
                    s: t.s,
                    l: t.l
                })]
            }
            function m(e, t, n) {
                t = t || 6,
                n = n || 30;
                var r = f(e).toHsl(),
                    a = 360 / n,
                    s = [f(e)];
                for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t;)
                    r.h = (r.h + a) % 360,
                    s.push(f(r));
                return s
            }
            function C(e, t) {
                t = t || 6;
                for (var n = f(e).toHsv(), r = n.h, a = n.s, s = n.v, i = [], o = 1 / t; t--;)
                    i.push(f({
                        h: r,
                        s: a,
                        v: s
                    })),
                    s = (s + o) % 1;
                return i
            }
            f.prototype = {
                isDark: function() {
                    return this.getBrightness() < 128
                },
                isLight: function() {
                    return !this.isDark()
                },
                isValid: function() {
                    return this._ok
                },
                getOriginalInput: function() {
                    return this._originalInput
                },
                getFormat: function() {
                    return this._format
                },
                getAlpha: function() {
                    return this._a
                },
                getBrightness: function() {
                    var e = this.toRgb();
                    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
                },
                getLuminance: function() {
                    var t,
                        n,
                        r,
                        a = this.toRgb();
                    return t = a.r / 255, n = a.g / 255, r = a.b / 255, .2126 * (t <= .03928 ? t / 12.92 : e.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : e.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : e.pow((r + .055) / 1.055, 2.4))
                },
                setAlpha: function(e) {
                    return this._a = k(e), this._roundA = a(100 * this._a) / 100, this
                },
                toHsv: function() {
                    var e = l(this._r, this._g, this._b);
                    return {
                        h: 360 * e.h,
                        s: e.s,
                        v: e.v,
                        a: this._a
                    }
                },
                toHsvString: function() {
                    var e = l(this._r, this._g, this._b),
                        t = a(360 * e.h),
                        n = a(100 * e.s),
                        r = a(100 * e.v);
                    return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                },
                toHsl: function() {
                    var e = c(this._r, this._g, this._b);
                    return {
                        h: 360 * e.h,
                        s: e.s,
                        l: e.l,
                        a: this._a
                    }
                },
                toHslString: function() {
                    var e = c(this._r, this._g, this._b),
                        t = a(360 * e.h),
                        n = a(100 * e.s),
                        r = a(100 * e.l);
                    return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                },
                toHex: function(e) {
                    return h(this._r, this._g, this._b, e)
                },
                toHexString: function(e) {
                    return "#" + this.toHex(e)
                },
                toHex8: function(e) {
                    return function(e, t, n, r, s) {
                        var i = [T(a(e).toString(16)), T(a(t).toString(16)), T(a(n).toString(16)), T(O(r))];
                        if (s && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1))
                            return i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0);
                        return i.join("")
                    }(this._r, this._g, this._b, this._a, e)
                },
                toHex8String: function(e) {
                    return "#" + this.toHex8(e)
                },
                toRgb: function() {
                    return {
                        r: a(this._r),
                        g: a(this._g),
                        b: a(this._b),
                        a: this._a
                    }
                },
                toRgbString: function() {
                    return 1 == this._a ? "rgb(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ")" : "rgba(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ", " + this._roundA + ")"
                },
                toPercentageRgb: function() {
                    return {
                        r: a(100 * E(this._r, 255)) + "%",
                        g: a(100 * E(this._g, 255)) + "%",
                        b: a(100 * E(this._b, 255)) + "%",
                        a: this._a
                    }
                },
                toPercentageRgbString: function() {
                    return 1 == this._a ? "rgb(" + a(100 * E(this._r, 255)) + "%, " + a(100 * E(this._g, 255)) + "%, " + a(100 * E(this._b, 255)) + "%)" : "rgba(" + a(100 * E(this._r, 255)) + "%, " + a(100 * E(this._g, 255)) + "%, " + a(100 * E(this._b, 255)) + "%, " + this._roundA + ")"
                },
                toName: function() {
                    return 0 === this._a ? "transparent" : !(this._a < 1) && (x[h(this._r, this._g, this._b, !0)] || !1)
                },
                toFilter: function(e) {
                    var t = "#" + A(this._r, this._g, this._b, this._a),
                        n = t,
                        r = this._gradientType ? "GradientType = 1, " : "";
                    if (e) {
                        var a = f(e);
                        n = "#" + A(a._r, a._g, a._b, a._a)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
                },
                toString: function(e) {
                    var t = !!e;
                    e = e || this._format;
                    var n = !1,
                        r = this._a < 1 && this._a >= 0;
                    return t || !r || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
                },
                clone: function() {
                    return f(this.toString())
                },
                _applyModification: function(e, t) {
                    var n = e.apply(null, [this].concat([].slice.call(t)));
                    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
                },
                lighten: function() {
                    return this._applyModification(b, arguments)
                },
                brighten: function() {
                    return this._applyModification(v, arguments)
                },
                darken: function() {
                    return this._applyModification(w, arguments)
                },
                desaturate: function() {
                    return this._applyModification(g, arguments)
                },
                saturate: function() {
                    return this._applyModification(u, arguments)
                },
                greyscale: function() {
                    return this._applyModification(d, arguments)
                },
                spin: function() {
                    return this._applyModification(P, arguments)
                },
                _applyCombination: function(e, t) {
                    return e.apply(null, [this].concat([].slice.call(t)))
                },
                analogous: function() {
                    return this._applyCombination(m, arguments)
                },
                complement: function() {
                    return this._applyCombination(B, arguments)
                },
                monochromatic: function() {
                    return this._applyCombination(C, arguments)
                },
                splitcomplement: function() {
                    return this._applyCombination(p, arguments)
                },
                triad: function() {
                    return this._applyCombination(D, arguments)
                },
                tetrad: function() {
                    return this._applyCombination(H, arguments)
                }
            },
            f.fromRatio = function(e, t) {
                if ("object" == typeof e) {
                    var n = {};
                    for (var r in e)
                        e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : j(e[r]));
                    e = n
                }
                return f(e, t)
            },
            f.equals = function(e, t) {
                return !(!e || !t) && f(e).toRgbString() == f(t).toRgbString()
            },
            f.random = function() {
                return f.fromRatio({
                    r: o(),
                    g: o(),
                    b: o()
                })
            },
            f.mix = function(e, t, n) {
                n = 0 === n ? 0 : n || 50;
                var r = f(e).toRgb(),
                    a = f(t).toRgb(),
                    s = n / 100;
                return f({
                    r: (a.r - r.r) * s + r.r,
                    g: (a.g - r.g) * s + r.g,
                    b: (a.b - r.b) * s + r.b,
                    a: (a.a - r.a) * s + r.a
                })
            },
            f.readability = function(t, n) {
                var r = f(t),
                    a = f(n);
                return (e.max(r.getLuminance(), a.getLuminance()) + .05) / (e.min(r.getLuminance(), a.getLuminance()) + .05)
            },
            f.isReadable = function(e, t, n) {
                var r,
                    a,
                    s = f.readability(e, t);
                switch (a = !1, (r = function(e) {
                    var t,
                        n;
                    t = ((e = e || {
                        level: "AA",
                        size: "small"
                    }).level || "AA").toUpperCase(),
                    n = (e.size || "small").toLowerCase(),
                    "AA" !== t && "AAA" !== t && (t = "AA");
                    "small" !== n && "large" !== n && (n = "small");
                    return {
                        level: t,
                        size: n
                    }
                }(n)).level + r.size) {
                case "AAsmall":
                case "AAAlarge":
                    a = s >= 4.5;
                    break;
                case "AAlarge":
                    a = s >= 3;
                    break;
                case "AAAsmall":
                    a = s >= 7
                }
                return a
            },
            f.mostReadable = function(e, t, n) {
                var r,
                    a,
                    s,
                    i,
                    o = null,
                    c = 0;
                a = (n = n || {}).includeFallbackColors,
                s = n.level,
                i = n.size;
                for (var l = 0; l < t.length; l++)
                    (r = f.readability(e, t[l])) > c && (c = r, o = f(t[l]));
                return f.isReadable(e, o, {
                    level: s,
                    size: i
                }) || !a ? o : (n.includeFallbackColors = !1, f.mostReadable(e, ["#fff", "#000"], n))
            };
            var y = f.names = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "0ff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000",
                    blanchedalmond: "ffebcd",
                    blue: "00f",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    burntsienna: "ea7e5d",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "0ff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkgrey: "a9a9a9",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkslategrey: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dimgrey: "696969",
                    dodgerblue: "1e90ff",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "f0f",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    grey: "808080",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgray: "d3d3d3",
                    lightgreen: "90ee90",
                    lightgrey: "d3d3d3",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslategray: "789",
                    lightslategrey: "789",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "0f0",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "f0f",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370db",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "db7093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    rebeccapurple: "663399",
                    red: "f00",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    slategrey: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    wheat: "f5deb3",
                    white: "fff",
                    whitesmoke: "f5f5f5",
                    yellow: "ff0",
                    yellowgreen: "9acd32"
                },
                x = f.hexNames = function(e) {
                    var t = {};
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[e[n]] = n);
                    return t
                }(y);
            function k(e) {
                return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
            }
            function E(t, n) {
                (function(e) {
                    return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
                })(t) && (t = "100%");
                var r = function(e) {
                    return "string" == typeof e && -1 != e.indexOf("%")
                }(t);
                return t = s(n, i(0, parseFloat(t))), r && (t = parseInt(t * n, 10) / 100), e.abs(t - n) < 1e-6 ? 1 : t % n / parseFloat(n)
            }
            function F(e) {
                return s(1, i(0, e))
            }
            function Q(e) {
                return parseInt(e, 16)
            }
            function T(e) {
                return 1 == e.length ? "0" + e : "" + e
            }
            function j(e) {
                return e <= 1 && (e = 100 * e + "%"), e
            }
            function O(t) {
                return e.round(255 * parseFloat(t)).toString(16)
            }
            function M(e) {
                return Q(e) / 255
            }
            var J,
                L,
                N,
                I = (L = "[\\s|\\(]+(" + (J = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + J + ")[,|\\s]+(" + J + ")\\s*\\)?", N = "[\\s|\\(]+(" + J + ")[,|\\s]+(" + J + ")[,|\\s]+(" + J + ")[,|\\s]+(" + J + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(J),
                    rgb: new RegExp("rgb" + L),
                    rgba: new RegExp("rgba" + N),
                    hsl: new RegExp("hsl" + L),
                    hsla: new RegExp("hsla" + N),
                    hsv: new RegExp("hsv" + L),
                    hsva: new RegExp("hsva" + N),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });
            function z(e) {
                return !!I.CSS_UNIT.exec(e)
            }
            return f
        }(Math);
        t.a = r
    },
    1561: function(e, t, n) {
        (e.exports = n(9)(!1)).push([e.i, ".sa-2dcolor-picker {\n  width: 150px;\n  height: 150px;\n  border-radius: 8px;\n  margin: 8px;\n  position: relative;\n  user-select: none;\n}\n\n.sa-2dcolor-picker-image {\n  border-radius: 8px;\n  width: 150px;\n  height: 150px;\n  user-select: none;\n}\n", ""])
    },
    1611: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "resources", (function() {
            return f
        }));
        var r = n(1487),
            a = n(1488),
            s = n(1489);
        const i = e => {
            if ("/assets/sv-gr.png" === e)
                return "data:image/png;base64,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";
            throw new Error("Unknown asset: ".concat(e))
        };
        var o = n(1561);
        const f = {
            "userscript.js": async e => {
                (async ({addon: e, console: t, msg: n}) => {
                    let o;
                    const f = new a.a(250),
                        c = t => {
                            let n;
                            const r = e.tab.redux.state;
                            if (r.scratchPaint.modals.fillColor)
                                n = "fill";
                            else {
                                if (!r.scratchPaint.modals.strokeColor)
                                    return;
                                n = "stroke"
                            }
                            const a = ["primary", "secondary"][r.scratchPaint.fillMode.colorIndex],
                                i = r.scratchPaint.color["".concat(n, "Color")][a];
                            if (null !== i && "scratch-paint/style-path/mixed" !== i)
                                return Object(s.a)(i).toHex8()
                        },
                        l = (t, n) => {
                            if (t = Object(r.b)(t), !e.tab.redux.state || !e.tab.redux.state.scratchPaint)
                                return;
                            const a = ({detail: n}) => {
                                "scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER" === n.action.type && (e.tab.redux.removeEventListener("statechanged", a), setTimeout(() => {
                                    const n = e.tab.redux.state.scratchPaint.color.eyeDropper.previousTool;
                                    n && n.activate(),
                                    e.tab.redux.state.scratchPaint.color.eyeDropper.callback(t),
                                    e.tab.redux.dispatch({
                                        type: "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER"
                                    })
                                }, 50))
                            };
                            e.tab.redux.addEventListener("statechanged", a),
                            n.children[1].children[0].click()
                        },
                        h = e => {
                            let t = Object(s.a)(e).toHsv();
                            return t.s = 1, t.v = 1, Object(s.a)(t).toHex()
                        };
                    for (;;) {
                        const r = await e.tab.waitForElement('div[class*="color-picker_swatch-row"]', {
                            markAsSeen: !0,
                            reduxCondition: e => 1 === e.scratchGui.editorTab.activeTabIndex && !e.scratchGui.mode.isPlayerOnly
                        });
                        if (f.abort(!1), !("colorIndex" in e.tab.redux.state.scratchPaint.fillMode))
                            return void t.error("Detected new paint editor; this will be supported in future versions.");
                        function A() {
                            f.limit(() => {
                                let e = c(),
                                    t = Object(s.a)(e).toHsv();
                                u(t.s, t.v),
                                b.style.background = "#" + h(c())
                            })
                        }
                        if (e.tab.redux.initialize(), e.tab.redux.addEventListener("statechanged", e => "scratch-paint/fill-style/CHANGE_FILL_COLOR" === e.detail.action.type || "scratch-paint/fill-style/CHANGE_FILL_COLOR_2" === e.detail.action.type || "scratch-paint/stroke-style/CHANGE_STROKE_COLOR" === e.detail.action.type || "scratch-paint/stroke-style/CHANGE_STROKE_COLOR_2" === e.detail.action.type ? A() : 0), e.tab.redux && "function" == typeof o && (e.tab.redux.removeEventListener("statechanged", o), o = null), "editor" !== e.tab.editorMode)
                            continue;
                        let a = c();
                        const b = document.createElement("div");
                        b.className = "sa-2dcolor-picker",
                        b.style.background = "#" + h(a || "ff0000");
                        const v = Object.assign(document.createElement("img"), {
                                className: "sa-2dcolor-picker-image",
                                src: i("/assets/sv-gr.png"),
                                draggable: !1
                            }),
                            w = Object.assign(document.createElement("div"), {
                                className: e.tab.scratchClass("slider_handle")
                            });
                        w.style.pointerEvents = "none";
                        const P = document.createElement("div");
                        P.className = e.tab.scratchClass("color-picker_row-header", {
                            others: "sa-2dcolor-label"
                        });
                        const B = document.createElement("span");
                        B.className = e.tab.scratchClass("color-picker_label-name", {
                            others: "sa-2dcolor-label-name"
                        }),
                        B.innerText = n("shade");
                        const D = document.createElement("span");
                        D.className = e.tab.scratchClass("color-picker_label-readout", {
                            others: "sa-2dcolor-label-val"
                        }),
                        P.appendChild(B),
                        P.appendChild(D);
                        let H = -1,
                            p = {
                                x: 0,
                                y: 0
                            };
                        window.addEventListener("keydown", e => H = e.keyCode),
                        window.addEventListener("keyup", () => H = -1);
                        let m = 0,
                            C = null,
                            y = function(e) {
                                return g(e, H, p), !1
                            },
                            x = function(e) {
                                d(e, H, p)
                            };
                        function g(t, n, r) {
                            let a = Math.min(Math.max(t.clientX - b.getBoundingClientRect().x, 0), 150),
                                i = Math.min(Math.max(t.clientY - b.getBoundingClientRect().y, 0), 150);
                            if (16 === n && (Math.abs(a - r.x) > Math.abs(i - r.y) ? i = r.y : a = r.x), w.style.left = a - 8 + "px", w.style.top = i - 8 + "px", D.innerText = "".concat(Math.round(a / 150 * 100), ", ").concat(100 - Math.round(i / 150 * 100)), (!e.tab.redux.state.scratchPaint.fillMode.gradientType || "SOLID" === e.tab.redux.state.scratchPaint.fillMode.gradientType) && C) {
                                let e = Object(s.a)({
                                    h: m,
                                    s: a / 150,
                                    v: 1 - i / 150
                                }).toHex();
                                e.startsWith("#") ? C.style.background = e : C.style.background = "#" + e
                            }
                        }
                        function u(e, t) {
                            w.style.left = 150 * e - 8 + "px",
                            w.style.top = 150 * (1 - t) - 8 + "px",
                            D.innerText = "".concat(Math.round(100 * e), ", ").concat(Math.round(100 * t))
                        }
                        function d(e, t, n) {
                            f.limit(() => {
                                let a = Math.min(Math.max(e.clientX - b.getBoundingClientRect().x, 0), 150),
                                    i = Math.min(Math.max(e.clientY - b.getBoundingClientRect().y, 0), 150);
                                16 === t && (Math.abs(a - n.x) > Math.abs(i - n.y) ? i = n.y : a = n.x);
                                let o = Object(s.a)(c()).toHsv(),
                                    f = a / 150,
                                    h = 1 - i / 150,
                                    A = Object(s.a)({
                                        h: o.h,
                                        s: f,
                                        v: h,
                                        a: o.a
                                    }).toHex8();
                                l(A, r),
                                u(f, h)
                            }),
                            window.removeEventListener("pointermove", y),
                            window.removeEventListener("pointerup", x)
                        }
                        if (a) {
                            let e = Object(s.a)(a).toHsv();
                            u(e.s, e.v)
                        } else
                            u(1, 1);
                        b.addEventListener("pointerdown", t => {
                            let n;
                            t.preventDefault(),
                            p = {
                                x: parseFloat(w.style.left) + 8,
                                y: parseFloat(w.style.top) + 8
                            };
                            const r = e.tab.redux.state;
                            n = r.scratchPaint.modals.fillColor ? "fill" : r.scratchPaint.modals.strokeColor ? "stroke" : "wh",
                            C = null,
                            "fill" === n ? C = document.getElementsByClassName(e.tab.scratchClass("color-button_color-button-swatch"))[0] : "stroke" === n && (C = document.getElementsByClassName(e.tab.scratchClass("color-button_color-button-swatch"))[1]),
                            C && (m = Object(s.a)(C.style.background).toHsv().h),
                            g(t),
                            window.addEventListener("pointermove", y),
                            window.addEventListener("pointerup", x)
                        }),
                        o = ({detail: e}) => {
                            "scratch-paint/color-index/CHANGE_COLOR_INDEX" === e.action.type && setTimeout(() => {
                                A()
                            }, 100)
                        },
                        e.tab.redux.addEventListener("statechanged", o),
                        b.appendChild(v),
                        b.appendChild(w);
                        const [k, E, F] = [...r.parentElement.querySelectorAll('[class^="color-picker_row-header"]')].map(e => e.parentElement);
                        E.style.display = "none",
                        F.style.display = "none",
                        k.insertAdjacentElement("afterend", b),
                        k.insertAdjacentElement("afterend", P)
                    }
                })(e)
            },
            "style.css": n.n(o).a
        }
    }
}]);
