var GUI = function(e) {
    function t(t) {
        for (var r, i, s = t[0], c = t[1], d = t[2], u = 0, p = []; u < s.length; u++)
            i = s[u],
            Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]),
            o[i] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (l && l(t); p.length;)
            p.shift()();
        return a.push.apply(a, d || []), n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (r = !1)
            }
            r && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            72: 0
        },
        a = [];
    function i(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function(e) {
        var t = [],
            n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var r = new Promise((function(t, r) {
                    n = o[e] = [t, r]
                }));
                t.push(n[2] = r);
                var a,
                    s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                i.nc && s.setAttribute("nonce", i.nc),
                s.src = function(e) {
                    return i.p + "js/" + ({
                        4: "addon-default-entry",
                        5: "addon-entry-2d-color-picker",
                        6: "addon-entry-better-img-uploads",
                        7: "addon-entry-block-count",
                        8: "addon-entry-block-palette-icons",
                        9: "addon-entry-blocks2image",
                        10: "addon-entry-cat-blocks",
                        11: "addon-entry-clones",
                        12: "addon-entry-columns",
                        13: "addon-entry-custom-block-shape",
                        14: "addon-entry-custom-block-text",
                        15: "addon-entry-custom-zoom",
                        16: "addon-entry-data-category-tweaks-v2",
                        17: "addon-entry-debugger",
                        18: "addon-entry-default-costume-editor-color",
                        19: "addon-entry-disable-paste-offset",
                        20: "addon-entry-disable-stage-drag-select",
                        21: "addon-entry-editor-buttons-reverse-order",
                        22: "addon-entry-editor-colored-context-menus",
                        23: "addon-entry-editor-extra-keys",
                        24: "addon-entry-editor-sounds",
                        25: "addon-entry-editor-stage-left",
                        26: "addon-entry-editor-stepping",
                        27: "addon-entry-editor-theme3",
                        28: "addon-entry-fullscreen",
                        29: "addon-entry-gamepad",
                        30: "addon-entry-hide-delete-button",
                        31: "addon-entry-hide-flyout",
                        32: "addon-entry-hide-new-variables",
                        33: "addon-entry-hide-stage",
                        34: "addon-entry-initialise-sprite-position",
                        35: "addon-entry-load-extensions",
                        36: "addon-entry-mediarecorder",
                        37: "addon-entry-mouse-pos",
                        38: "addon-entry-no-script-bumping",
                        39: "addon-entry-number-pad",
                        40: "addon-entry-paint-by-default",
                        41: "addon-entry-remove-curved-stage-border",
                        42: "addon-entry-remove-sprite-confirm",
                        43: "addon-entry-script-snap",
                        44: "addon-entry-search-sprites",
                        45: "addon-entry-swap-local-global",
                        46: "addon-entry-transparent-orphans",
                        47: "addon-entry-tw-disable-compiler",
                        48: "addon-entry-tw-remove-backpack",
                        49: "addon-entry-tw-remove-feedback",
                        50: "addon-entry-tw-straighten-comments",
                        51: "addon-entry-variable-manager",
                        52: "addon-entry-vol-slider",
                        53: "addon-entry-zebra-striping",
                        54: "addon-l10n-de",
                        55: "addon-l10n-es",
                        56: "addon-l10n-fr",
                        57: "addon-l10n-hu",
                        58: "addon-l10n-it",
                        59: "addon-l10n-ja",
                        60: "addon-l10n-ko",
                        61: "addon-l10n-nl",
                        62: "addon-l10n-pl",
                        63: "addon-l10n-pt",
                        64: "addon-l10n-ro",
                        65: "addon-l10n-ru",
                        66: "addon-l10n-sl",
                        67: "addon-l10n-tr",
                        68: "addon-l10n-zh-tw",
                        70: "addons",
                        75: "iframe-extension-worker",
                        76: "library-backdrops",
                        77: "library-costumes",
                        78: "library-sounds",
                        79: "library-sprites",
                        81: "sb"
                    }[e] || e) + "." + {
                        4: "2bfd454efddbcb425535",
                        5: "2c10c74f178b652ddde9",
                        6: "720190e39172b72c6eaf",
                        7: "60869f0e716d0e4578d9",
                        8: "1816bf81673b2c0d3366",
                        9: "4977174a2ca924917625",
                        10: "027fef06459c6972e6ce",
                        11: "2d47b8a8b9625eab1d1e",
                        12: "5db2b2a338941a084a46",
                        13: "40cf70e509ac42c07526",
                        14: "82366492fdcd3910be5b",
                        15: "22193dc8e9224fb4ae48",
                        16: "9c87ada2e043439a8683",
                        17: "6150076775e217fb4719",
                        18: "48d6d59f9a6968324e79",
                        19: "cdc07f761bded03aa305",
                        20: "8a3bc98703ad8388f165",
                        21: "ede1a3477c64a457f2f0",
                        22: "015a4d8c8ecbf130a3f7",
                        23: "64e0082445da08dff7c1",
                        24: "15f953e8b01d350a8c84",
                        25: "401430c7fd8aa114b2ff",
                        26: "8f4714817c96f8135197",
                        27: "e0963c7e928e47c48e45",
                        28: "51bbe11f5719f30d0a4e",
                        29: "32c6b8b8f5daf7d148a1",
                        30: "b04d5bc89c9d9bc43d30",
                        31: "811ce95ad168808d15bf",
                        32: "a6090612bdf0f08d0b38",
                        33: "b75e342efa53f57c6377",
                        34: "93926c4ec72b3f8f8ec4",
                        35: "8a5a954962dd74c804c4",
                        36: "85dbe1ce8ef8d546c956",
                        37: "e34059159b4eb77738a7",
                        38: "15a8e3e988dd53cb2902",
                        39: "d149163851c787838c27",
                        40: "ff1a82d76f240f49faac",
                        41: "17572ec2859006756262",
                        42: "f7b24ecb7287f74087e7",
                        43: "6989b7e3f9c6b923c8c7",
                        44: "55e25884804d2d41dd39",
                        45: "f02ef601067e2e49a95d",
                        46: "8c86cded4035bdf538f0",
                        47: "6e2619a63040ee04dd63",
                        48: "18cfcf378741da047c9e",
                        49: "3a6c6ad26127d6df66da",
                        50: "2f5209b56a74f0fb34f0",
                        51: "6356fa982b5f65e9b245",
                        52: "dcd4de67d265769d05de",
                        53: "4626a06ecc063d1cdb0e",
                        54: "f5f6c1524d75fc48ac5b",
                        55: "82e17d4c8956eefcba74",
                        56: "88f608d791a1be889eba",
                        57: "b886c80f4d9db6d9734d",
                        58: "e9c8d695bf11689d38a9",
                        59: "00b7022f475207fee481",
                        60: "1dee0aec60363d597bc1",
                        61: "a6bc0e50ca468d9754f2",
                        62: "58cc6204edf2d4913802",
                        63: "144b2dc3864260b851e7",
                        64: "98aab41c0caef8837abb",
                        65: "150a39bc178d6b030324",
                        66: "985fbb297b218da41476",
                        67: "a86453b6a636547196ae",
                        68: "5e2536fd6260f5ba1144",
                        70: "13e861d2819946287a74",
                        75: "0042b1e928bbbd9214cb",
                        76: "18b9b331e01eaffb6400",
                        77: "c298e72fd144b2f0ce36",
                        78: "3dd48b69f014f11eaf98",
                        79: "e1b5ce777ff52773fe01",
                        81: "c7326f8158e99910ff3d"
                    }[e] + ".js"
                }(e);
                var c = new Error;
                a = function(t) {
                    s.onerror = s.onload = null,
                    clearTimeout(d);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")",
                            c.name = "ChunkLoadError",
                            c.type = r,
                            c.request = a,
                            n[1](c)
                        }
                        o[e] = void 0
                    }
                };
                var d = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = a,
                document.head.appendChild(s)
            }
        return Promise.all(t)
    },
    i.m = e,
    i.c = r,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
        return n
    },
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    },
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    i.p = "",
    i.oe = function(e) {
        throw console.error(e), e
    };
    var s = window.webpackJsonpGUI = window.webpackJsonpGUI || [],
        c = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var d = 0; d < s.length; d++)
        t(s[d]);
    var l = c;
    return a.push([843, 0, 3, 1, 2]), n()
}({
    111: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    115: function(e, t, n) {
        var r = n(245);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(10)(r, o);
        r.locals && (e.exports = r.locals)
    },
    151: function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(this, n(42))
    },
    153: function(e, t, n) {
        e.exports = n.p + "static/assets/33b737193edfe1730f38112ad35a84b4.svg"
    },
    154: function(e, t, n) {
        e.exports = n.p + "sw.js"
    },
    155: function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n.n(r),
            a = n(0),
            i = n.n(a),
            s = n(1),
            c = n.n(s),
            d = n(6),
            l = n(37),
            u = n(2),
            p = n(11),
            h = (n(156), n(157)),
            f = n(77),
            m = n(159),
            b = n(160),
            v = n(89),
            g = n(161),
            w = n(14);
        const y = ["canOpenPackager"];
        function _() {
            return (_ = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        function j(e, t) {
            if (null == e)
                return {};
            var n,
                r,
                o = function(e, t) {
                    if (null == e)
                        return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        const x = "https://packager.turbowarp.org",
            k = e => new Promise((t, n) => {
                const r = new FileReader;
                r.onload = () => t(r.result),
                r.onerror = () => n(new Error("Cannot read blob as array buffer")),
                r.readAsArrayBuffer(e)
            }),
            E = function(e) {
                class t extends c.a.Component {
                    constructor(e)
                    {
                        super(e),
                        this.handleClickPackager = this.handleClickPackager.bind(this),
                        this.handleMessage = this.handleMessage.bind(this)
                    }
                    componentDidMount()
                    {
                        window.addEventListener("message", this.handleMessage)
                    }
                    componentWillUnmount()
                    {
                        window.removeEventListener("message", this.handleMessage)
                    }
                    handleClickPackager()
                    {
                        this.props.canOpenPackager && window.open("".concat(x, "/?import_from=").concat(location.origin))
                    }
                    handleMessage(e)
                    {
                        e.origin === x && this.props.canOpenPackager && (e.source.postMessage({
                            p4: {
                                type: "start-import"
                            }
                        }, x), this.props.vm.saveProjectSb3().then(k).then(t => {
                            const n = "".concat(this.props.reduxProjectTitle, ".sb3");
                            e.source.postMessage({
                                p4: {
                                    type: "finish-import",
                                    data: t,
                                    name: n
                                }
                            }, x, [t])
                        }).catch(t => {
                            w.default.error(t),
                            e.source.postMessage({
                                p4: {
                                    type: "cancel-import"
                                }
                            }, x)
                        }))
                    }
                    render()
                    {
                        const t = this.props,
                            {canOpenPackager: n} = t,
                            r = j(t, y);
                        return c.a.createElement(e, _({
                            onClickPackager: this.handleClickPackager
                        }, r))
                    }
                }
                t.propTypes = {
                    canOpenPackager: i.a.bool,
                    reduxProjectTitle: i.a.string,
                    vm: i.a.shape({
                        saveProjectSb3: i.a.func
                    })
                };
                return Object(d.b)(e => ({
                    canOpenPackager: Object(p.r)(e.scratchGui.projectState.loadingState),
                    reduxProjectTitle: e.scratchGui.projectTitle,
                    vm: e.scratchGui.vm
                }), () => ({}))(t)
            };
        var O = n(22),
            P = n(5),
            C = n.n(P),
            S = n(12),
            T = n.n(S),
            I = n(162);
        const A = ["projectChanged", "onAutosavingStart", "onAutosavingFinish", "vm"];
        function N(e, t) {
            if (null == e)
                return {};
            var n,
                r,
                o = function(e, t) {
                    if (null == e)
                        return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        let R = !1;
        var M = n(47);
        const L = history.replaceState;
        history.replaceState = function(...e) {
            try {
                return L.call(this, ...e)
            } catch (e) {
                w.default.error(e)
            }
        };
        const F = history.pushState;
        history.pushState = function(...e) {
            try {
                return F.call(this, ...e)
            } catch (e) {
                w.default.error(e)
            }
        };
        var D = n(170),
            U = n(171),
            B = n(66),
            H = n.n(B),
            G = n(115),
            W = n.n(G),
            V = n(91);
        const K = Object(u.d)({
            tooltip: {
                id: "tw.input.tooltip",
                defaultMessage: "Copy and paste a Scratch project link here!"
            }
        });
        class z extends c.a.Component {
            constructor(e)
            {
                super(e),
                C()(this, ["handleKeyDown", "handleChange", "handleBlur", "handleFocus", "inputRef", "tooltipRef"]),
                this.state = {
                    projectId: this.props.projectId
                }
            }
            componentDidUpdate(e)
            {
                this.props.projectId !== e.projectId && (this.props.projectId === p.e ? (this.input.focus(), this.input.selectionStart = this.input.value.length) : this.input.blur(), this.setState({
                    projectId: this.props.projectId
                }))
            }
            extractProjectId(e)
            {
                const t = e.match(/\d+/);
                return t ? t[0] : null
            }
            readProjectId(e)
            {
                return this.extractProjectId(e.target.value) || p.e
            }
            handleKeyDown(e)
            {
                "Enter" === e.key && this.state.projectId && this.input.blur()
            }
            handleChange(e)
            {
                this.setState({
                    projectId: this.readProjectId(e) || p.e
                })
            }
            handleBlur()
            {
                this.state.projectId && this.state.projectId !== this.props.projectId && this.props.setProjectId(this.state.projectId),
                H.a.hide(this.tooltip)
            }
            handleFocus(e)
            {
                this.extractProjectId(e.target.value) && e.target.select(),
                H.a.show(this.tooltip)
            }
            inputRef(e)
            {
                this.input = e
            }
            tooltipRef(e)
            {
                this.tooltip = e
            }
            render()
            {
                const e = this.state.projectId === p.e ? "" : this.state.projectId || "";
                return c.a.createElement("div", {
                    ref: this.tooltipRef,
                    "data-tip": this.props.intl.formatMessage(K.tooltip)
                }, c.a.createElement(H.a, {
                    className: W.a.tooltip,
                    effect: "solid"
                }), c.a.createElement("input", {
                    ref: this.inputRef,
                    spellCheck: "false",
                    type: "text",
                    value: "".concat("https://scratch.mit.edu/projects/").concat(e),
                    className: W.a.input,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    onFocus: this.handleFocus
                }))
            }
        }
        z.propTypes = {
            intl: u.f,
            projectId: i.a.string,
            setProjectId: i.a.func
        };
        var J = Object(u.e)(Object(d.b)(e => ({
                projectId: e.scratchGui.projectState.projectId
            }), e => ({
                setProjectId: t => Object(V.a)(e, t)
            }))(z)),
            $ = n(25),
            q = n.n($),
            Q = function(e) {
                this.studioId = e,
                this.offset = 0,
                this.ended = !1,
                this.loadingPage = !1,
                this.unusedPlaceholders = [],
                this.root = document.createElement("div"),
                this.root.className = q.a.studioviewRoot,
                this.projectList = document.createElement("div"),
                this.projectList.className = q.a.studioviewList,
                this.root.appendChild(this.projectList),
                "IntersectionObserver" in window ? (this.intersectionObserver = new IntersectionObserver(this.handleIntersection.bind(this), {
                    root: this.projectList
                }), this.loadNextPageObserver = new IntersectionObserver(this.handleLoadNextPageIntersection.bind(this), {
                    root: this.projectList
                })) : (this.intersectionObserver = null, this.loadNextPageObserver = null),
                this.messages = {
                    AUTHOR_ATTRIBUTION: "",
                    PROJECT_HOVER_TEXT: "",
                    LOAD_ERROR: ""
                }
            };
        Q.prototype.addProject = function(e) {
            var t;
            this.unusedPlaceholders.length ? t = this.unusedPlaceholders.shift() : (t = this.createPlaceholder(), this.projectList.appendChild(t)),
            this.placeholderToProject(t, e.id, e.title, e.author)
        },
        Q.prototype.createLazyImage = function(e) {
            var t = document.createElement("img");
            return this.intersectionObserver ? (this.intersectionObserver.observe(t), t.dataset.src = e) : t.src = e, t
        },
        Q.prototype.createPlaceholder = function() {
            var e = document.createElement("a");
            e.className = o()(q.a.studioviewProject, q.a.studioviewPlaceholder);
            var t = document.createElement("div");
            t.className = q.a.studioviewThumbnail;
            var n = document.createElement("div");
            n.className = q.a.studioviewTitle;
            var r = document.createElement("div");
            return r.className = q.a.studioviewAuthor, e.thumbnailEl = t, e.titleEl = n, e.authorEl = r, e.appendChild(t), e.appendChild(n), e.appendChild(r), e
        },
        Q.prototype.placeholderToProject = function(e, t, n, r) {
            e.className = o()(q.a.studioviewProject, q.a.studioviewLoaded),
            e.dataset.id = t,
            e.dataset.title = n,
            e.dataset.author = r,
            e.title = this.messages.PROJECT_HOVER_TEXT.replace("$author", r).replace("$title", n),
            e.href = Q.PROJECT_PAGE.replace("$id", t);
            var a = Q.THUMBNAIL_SRC.replace("$id", t),
                i = this.createLazyImage(a);
            return e.thumbnailEl.appendChild(i), e.titleEl.innerText = n, e.authorEl.innerText = this.messages.AUTHOR_ATTRIBUTION.replace("$author", r), e.addEventListener("click", this.handleClick.bind(this), !0), e.addEventListener("keydown", this.handleKeyDown.bind(this), !0), e
        },
        Q.prototype.addErrorElement = function() {
            var e = document.createElement("div");
            e.innerText = this.messages.LOAD_ERROR,
            e.className = q.a.studioviewError,
            this.projectList.appendChild(e)
        },
        Q.prototype.handleLoadNextPageIntersection = function(e) {
            for (var t = 0; t < e.length; t++) {
                e[t].isIntersecting && this.canLoadNext() && this.loadNextPage()
            }
        },
        Q.prototype.clickProject = function(e) {
            for (; !e.classList.contains(q.a.studioviewProject);)
                e = e.parentNode;
            var t = e.dataset.id;
            this.onselect(t, e)
        },
        Q.prototype.handleClick = function(e) {
            e.preventDefault(),
            this.clickProject(e.target)
        },
        Q.prototype.handleKeyDown = function(e) {
            13 === e.keyCode && (e.preventDefault(), this.clickProject(e.target))
        },
        Q.prototype.handleIntersection = function(e, t) {
            e.forEach((function(e) {
                if (e.isIntersecting) {
                    var n = e.target;
                    n.src = n.dataset.src,
                    n.dataset.src = "",
                    n.className = "",
                    t.unobserve(n)
                }
            }))
        },
        Q.prototype.canLoadNext = function() {
            return !this.loadingPage && !this.ended
        },
        Q.prototype.cleanupPlaceholders = function() {
            for (; this.unusedPlaceholders.length;) {
                var e = this.unusedPlaceholders.pop();
                this.projectList.removeChild(e)
            }
        },
        Q.prototype.addPlaceholders = function() {
            for (var e = 0; e < Q.PLACEHOLDER_COUNT; e++) {
                var t = this.createPlaceholder();
                this.unusedPlaceholders.push(t),
                this.projectList.appendChild(t)
            }
        },
        Q.prototype.shuffler = function(e) {
            return e
        },
        Q.prototype.loadNextPage = function() {
            if (this.loadingPage)
                throw new Error("Already loading the next page");
            if (this.ended)
                throw new Error("There are no more pages to load");
            0 === this.unusedPlaceholders.length && this.addPlaceholders(),
            this.loadNextPageObserver && this.loadNextPageObserver.disconnect(),
            this.root.setAttribute("loading", ""),
            this.loadingPage = !0;
            var e = new XMLHttpRequest;
            e.responseType = "json",
            e.onload = function() {
                var t = e.response;
                if (Array.isArray(t)) {
                    for (var n = [], r = 0; r < t.length; r++) {
                        var o = t[r];
                        n.push({
                            id: o.id,
                            title: o.title,
                            author: o.username
                        })
                    }
                    n = this.shuffler(n);
                    for (r = 0; r < n.length; r++)
                        this.addProject(n[r]);
                    this.cleanupPlaceholders(),
                    40 === t.length ? this.loadNextPageObserver && this.loadNextPageObserver.observe(this.projectList.lastChild) : (this.ended = !0, this.onend()),
                    this.offset += n.length,
                    this.loadingPage = !1,
                    this.root.removeAttribute("loading"),
                    this.onpageload()
                } else
                    e.onerror()
            }.bind(this),
            e.onerror = function() {
                this.root.setAttribute("error", ""),
                this.cleanupPlaceholders(),
                this.addErrorElement(),
                this.ended = !0
            }.bind(this);
            var t = Q.STUDIO_API.replace("$id", this.studioId).replace("$offset", "" + this.offset);
            e.open("GET", t),
            e.send()
        },
        Q.prototype.getURL = function() {
            return Q.STUDIO_PAGE.replace("$id", this.studioId)
        },
        Q.prototype.onselect = function(e, t) {},
        Q.prototype.onpageload = function() {},
        Q.prototype.onend = function() {},
        Q.STUDIO_API = "https://trampoline.turbowarp.org/proxy/studios/$id/projects?offset=$offset",
        Q.THUMBNAIL_SRC = "https://trampoline.turbowarp.org/thumbnails/$id?width=144&height=108",
        Q.PROJECT_PAGE = "https://turbowarp.org/$id",
        Q.STUDIO_PAGE = "https://scratch.mit.edu/studios/$id/",
        Q.PLACEHOLDER_COUNT = 9;
        var X = Q;
        const Z = Object(u.d)({
            authorAttribution: {
                id: "tw.studioview.authorAttribution",
                defaultMessage: "by {author}"
            },
            hoverText: {
                id: "tw.studioview.hoverText",
                defaultMessage: "{title} by {author}"
            },
            error: {
                id: "tw.studioview.error",
                defaultMessage: "There was an error loading the next page of projects."
            }
        });
        class Y extends c.a.Component {
            constructor(e)
            {
                super(e),
                C()(this, ["handleSelect", "ref"])
            }
            componentDidMount()
            {
                this.studioView = new X(this.props.id),
                this.studioView.messages.AUTHOR_ATTRIBUTION = this.props.intl.formatMessage(Z.authorAttribution, {
                    author: "$author"
                }),
                this.studioView.messages.PROJECT_HOVER_TEXT = this.props.intl.formatMessage(Z.hoverText, {
                    author: "$author",
                    title: "$title"
                }),
                this.studioView.messages.LOAD_ERROR = this.props.intl.formatMessage(Z.error),
                this.props.placeholder ? this.studioView.addPlaceholders() : this.studioView.loadNextPage(),
                this.studioView.onselect = this.handleSelect,
                this.el.appendChild(this.studioView.root)
            }
            componentDidUpdate(e)
            {
                e.placeholder && !this.props.placeholder && this.studioView.loadNextPage()
            }
            handleSelect(e)
            {
                this.props.onSelect(e)
            }
            ref(e)
            {
                this.el = e
            }
            render()
            {
                return c.a.createElement("div", {
                    className: o()(q.a.wrapper),
                    ref: this.ref
                })
            }
        }
        Y.propTypes = {
            id: i.a.string.isRequired,
            intl: u.f.isRequired,
            placeholder: i.a.bool,
            onSelect: i.a.func.isRequired
        };
        var ee = Object(u.e)(Y),
            te = n(46),
            ne = n.n(te);
        class re extends c.a.Component {
            constructor(e)
            {
                super(e),
                C()(this, ["handleSelect", "handleOpenProjects"]),
                this.state = {
                    opened: !1,
                    transition: !0
                }
            }
            componentDidUpdate(e)
            {
                "0" === this.props.projectId && null === e.projectId && this.setState({
                    opened: !0,
                    transition: !1
                })
            }
            handleSelect(e)
            {
                this.props.setProjectId(e)
            }
            handleOpenProjects()
            {
                this.setState({
                    opened: !0
                })
            }
            render()
            {
                const e = this.state.opened;
                return c.a.createElement("div", {
                    className: ne.a.container
                }, c.a.createElement("div", {
                    className: o()(ne.a.projects, {
                        [ne.a.opened]: e,
                        [ne.a.transition]: this.state.transition
                    })
                }, c.a.createElement(ee, {
                    id: this.props.studio,
                    onSelect: this.handleSelect,
                    placeholder: !e
                }), e ? null : c.a.createElement("div", {
                    className: ne.a.openerContainer,
                    onClick: this.handleOpenProjects
                }, c.a.createElement("div", {
                    className: ne.a.openerContent
                }, c.a.createElement(u.a, {
                    defaultMessage: "Click to view featured projects.",
                    id: "tw.viewFeaturedProjects"
                })))), c.a.createElement("div", {
                    className: ne.a.footer
                }, c.a.createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://scratch.mit.edu/studios/".concat(this.props.studio, "/")
                }, c.a.createElement(u.a, {
                    defaultMessage: "View studio on Scratch.",
                    id: "tw.featuredProjectsStudio"
                }))))
            }
        }
        re.propTypes = {
            setProjectId: i.a.func,
            projectId: i.a.string,
            studio: i.a.string
        };
        var oe = Object(d.b)(e => ({
                projectId: e.scratchGui.projectState.projectId
            }), e => ({
                setProjectId: t => Object(V.a)(e, t)
            }))(re),
            ae = n(60),
            ie = n.n(ae),
            se = n(94),
            ce = n.n(se);
        const de = e => {
                e = ce()(e, /@([\w-]+)/, (e, t) => c.a.createElement("a", {
                    href: "https://scratch.mit.edu/users/".concat(e, "/"),
                    rel: "noreferrer",
                    key: e + t
                }, "@".concat(e)));
                return e = ce()(e, /(https?:\/\/[\w\d_\-.]{1,256}(?:\/(?:\S*[\w:/#[\]@$&'()*+=])?)?(?![^?!,:;\w\s]\S))/g, (e, t) => c.a.createElement("a", {
                    href: e,
                    rel: "noreferrer",
                    key: e + t
                }, e)), e = ce()(e, /#([\w-]+)/g, (e, t) => c.a.createElement("a", {
                    href: "https://scratch.mit.edu/search/projects?q=".concat(e),
                    key: e + t
                }, "#".concat(e)))
            },
            le = ({instructions: e, credits: t, projectId: n}) => "unshared" !== e && "unshared" !== t && c.a.createElement("div", {
                className: ie.a.description
            }, c.a.createElement("div", {
                className: ie.a.projectLink
            }, c.a.createElement("a", {
                href: "https://scratch.mit.edu/projects/".concat(n, "/"),
                target: "_blank",
                rel: "noreferrer"
            }, c.a.createElement(u.a, {
                defaultMessage: "View project on Scratch",
                id: "tw.viewOnScratch"
            }))), e ? c.a.createElement("div", null, c.a.createElement("h2", {
                className: ie.a.header
            }, c.a.createElement(u.a, {
                defaultMessage: "Instructions",
                id: "tw.home.instructions"
            })), de(e)) : null, e && t ? c.a.createElement("div", {
                className: ie.a.divider
            }) : null, t && c.a.createElement("div", null, c.a.createElement("h2", {
                className: ie.a.header
            }, c.a.createElement(u.a, {
                defaultMessage: "Notes and Credits",
                id: "tw.home.credit"
            })), de(t)));
        le.propTypes = {
            instructions: i.a.string,
            credits: i.a.string,
            projectId: i.a.string
        };
        var ue = le,
            pe = n(172),
            he = n(168),
            fe = n(153),
            me = n.n(fe),
            be = n(95),
            ve = n.n(be);
        var ge = () => c.a.createElement("div", {
                className: ve.a.badge
            }, c.a.createElement("div", {
                className: ve.a.icon
            }, c.a.createElement("img", {
                src: me.a,
                alt: "Cloud",
                width: "32",
                height: "32"
            })), c.a.createElement("div", {
                className: ve.a.text
            }, c.a.createElement(u.a, {
                defaultMessage: "This project uses cloud variables. TurboWarp uses its own cloud variable server independent of Scratch. Beware of impersonation as anyone can change their username to anything. {learnMore}",
                id: "tw.cloudVariableBadge",
                values: {
                    learnMore: c.a.createElement("a", {
                        href: "https://docs.turbowarp.org/cloud-variables",
                        target: "_blank",
                        rel: "noreferrer"
                    }, c.a.createElement(u.a, {
                        defaultMessage: "Learn more.",
                        id: "gui.alerts.cloudInfoLearnMore"
                    }))
                }
            }))),
            we = n(79),
            ye = n(49);
        n(154);
        var _e = n(169),
            je = n(17),
            xe = n.n(je);
        const ke = ["intl", "hasCloudVariables", "description", "isFullScreen", "isLoading", "isPlayerOnly", "isRtl", "onClickTheme", "projectId"];
        function Ee() {
            return (Ee = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        function Oe(e, t) {
            if (null == e)
                return {};
            var n,
                r,
                o = function(e, t) {
                    if (null == e)
                        return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        if (window.parent !== window)
            throw alert("This page is embedding TurboWarp in a way that is unsupported and will cease to function in the near future. Please read https://docs.turbowarp.org/embedding"), new Error("Invalid embed");
        const Pe = () => {
                window.open("".concat("").concat("addons.html"))
            },
            Ce = Object(u.d)({
                defaultTitle: {
                    id: "tw.guiDefaultTitle",
                    defaultMessage: "Run Scratch projects faster"
                }
            }),
            Se = Object(l.d)(g.a, E)(U.a);
        ye.a.reloadChannel && ye.a.reloadChannel.addEventListener("message", () => {
            location.reload()
        }),
        ye.a.changeChannel && ye.a.changeChannel.addEventListener("message", e => {
            M.a.setStoreWithVersionCheck(e.data)
        }),
        Object(_e.a)();
        const Te = () => c.a.createElement("footer", {
            className: xe.a.footer
        }, c.a.createElement("div", {
            className: xe.a.footerContent
        }, c.a.createElement("div", {
            className: xe.a.footerText
        }, c.a.createElement(u.a, {
            defaultMessage: "TurboWarp is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.",
            id: "tw.footer.disclaimer"
        })), c.a.createElement("div", {
            className: xe.a.footerColumns
        }, c.a.createElement("div", {
            className: xe.a.footerSection
        }, c.a.createElement("a", {
            href: "credits.html"
        }, c.a.createElement(u.a, {
            defaultMessage: "Credits",
            id: "tw.footer.credits"
        })), c.a.createElement("a", {
            href: "https://github.com/sponsors/GarboMuffin"
        }, c.a.createElement(u.a, {
            defaultMessage: "Donate",
            id: "tw.footer.donate"
        }))), c.a.createElement("div", {
            className: xe.a.footerSection
        }, c.a.createElement("a", {
            href: "https://desktop.turbowarp.org/"
        }, "TurboWarp Desktop"), c.a.createElement("a", {
            href: "https://packager.turbowarp.org/"
        }, "TurboWarp Packager"), c.a.createElement("a", {
            href: "https://docs.turbowarp.org/embedding"
        }, c.a.createElement(u.a, {
            defaultMessage: "Embedding",
            id: "tw.footer.embed"
        })), c.a.createElement("a", {
            href: "https://docs.turbowarp.org/url-parameters"
        }, c.a.createElement(u.a, {
            defaultMessage: "URL Parameters",
            id: "tw.footer.parameters"
        })), c.a.createElement("a", {
            href: "https://docs.turbowarp.org/translate"
        }, c.a.createElement(u.a, {
            defaultMessage: "Help Translate TurboWarp",
            id: "tw.footer.translate"
        }))), c.a.createElement("div", {
            className: xe.a.footerSection
        }, c.a.createElement("a", {
            href: "https://scratch.mit.edu/users/GarboMuffin/#comments"
        }, c.a.createElement(u.a, {
            defaultMessage: "Feedback & Bugs",
            id: "tw.feedback"
        })), c.a.createElement("a", {
            href: "https://github.com/TurboWarp/"
        }, c.a.createElement(u.a, {
            defaultMessage: "Source Code",
            id: "tw.code"
        })), c.a.createElement("a", {
            href: "privacy.html"
        }, c.a.createElement(u.a, {
            defaultMessage: "Privacy Policy",
            id: "tw.privacy"
        }))))));
        class Ie extends c.a.Component {
            constructor(e)
            {
                super(e),
                this.handleUpdateProjectTitle = this.handleUpdateProjectTitle.bind(this)
            }
            componentDidUpdate(e)
            {
                e.isLoading && this.props.isLoading
            }
            handleUpdateProjectTitle(e, t)
            {
                document.title = t || !e ? "TurboWarp - ".concat(this.props.intl.formatMessage(Ce.defaultTitle)) : "".concat(e, " - TurboWarp")
            }
            render()
            {
                const e = this.props,
                    {intl: t, hasCloudVariables: n, description: r, isFullScreen: a, isLoading: i, isPlayerOnly: s, isRtl: d, onClickTheme: l, projectId: p} = e,
                    h = Oe(e, ke),
                    f = s && !a,
                    m = !s;
                return c.a.createElement("div", {
                    className: o()(xe.a.container, {
                        [xe.a.playerOnly]: f,
                        [xe.a.editor]: m
                    })
                }, f ? c.a.createElement("div", {
                    className: xe.a.menu
                }, c.a.createElement(Se, {
                    canChangeLanguage: !0,
                    canManageFiles: !0,
                    enableSeeInside: !0,
                    onClickAddonSettings: Pe,
                    onClickTheme: l
                })) : null, c.a.createElement("div", {
                    className: xe.a.center,
                    style: s ? {
                        width: "".concat(Math.max(480, h.customStageSize.width) + 2, "px")
                    } : null
                }, null, c.a.createElement(D.a, Ee({
                    onClickAddonSettings: Pe,
                    onClickTheme: l,
                    onUpdateProjectTitle: this.handleUpdateProjectTitle,
                    backpackVisible: !0,
                    backpackHost: "_local_"
                }, h)), f ? c.a.createElement(c.a.Fragment, null, Object(we.c)() ? null : c.a.createElement(pe.a, {
                    isRtl: d
                }), Object(we.b)() ? null : c.a.createElement(he.a, {
                    isRtl: d
                }), c.a.createElement("div", {
                    className: xe.a.section
                }, c.a.createElement(J, null)), ("unshared" === r.instructions || "unshared" === r.credits) && c.a.createElement("div", {
                    className: xe.a.unsharedUpdate
                }, c.a.createElement("p", null, c.a.createElement(u.a, {
                    defaultMessage: "Unshared projects are no longer visible.",
                    id: "tw.unshared2.1"
                })), c.a.createElement("p", null, c.a.createElement(u.a, {
                    defaultMessage: "For more information, visit: {link}",
                    id: "tw.unshared.2",
                    values: {
                        link: c.a.createElement("a", {
                            href: "https://docs.turbowarp.org/unshared-projects",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "https://docs.turbowarp.org/unshared-projects")
                    }
                })), c.a.createElement("p", null, c.a.createElement(u.a, {
                    defaultMessage: "If the project was shared recently, this message may appear incorrectly for a few minutes.",
                    id: "tw.unshared.cache"
                })), c.a.createElement("p", null, c.a.createElement(u.a, {
                    defaultMessage: "If this project is actually shared, please report a bug.",
                    id: "tw.unshared.bug"
                }))), n && "0" !== p && c.a.createElement("div", {
                    className: xe.a.section
                }, c.a.createElement(ge, null)), r.instructions || r.credits ? c.a.createElement("div", {
                    className: xe.a.section
                }, c.a.createElement(ue, {
                    instructions: r.instructions,
                    credits: r.credits,
                    projectId: p
                })) : null, c.a.createElement("div", {
                    className: xe.a.section
                }, c.a.createElement("p", null, c.a.createElement(u.a, {
                    defaultMessage: "TurboWarp is a Scratch mod that compiles projects to JavaScript to make them run really fast. Try it out by inputting a project ID or URL above or choosing a featured project below.",
                    id: "tw.home.description"
                }))), c.a.createElement("div", {
                    className: xe.a.section
                }, c.a.createElement(oe, {
                    studio: "27205657"
                }))) : null), f && c.a.createElement(Te, null))
            }
        }
        Ie.propTypes = {
            intl: u.f,
            hasCloudVariables: i.a.bool,
            customStageSize: i.a.shape({
                width: i.a.number,
                height: i.a.number
            }),
            description: i.a.shape({
                credits: i.a.string,
                instructions: i.a.string
            }),
            isFullScreen: i.a.bool,
            isLoading: i.a.bool,
            isPlayerOnly: i.a.bool,
            isRtl: i.a.bool,
            onClickTheme: i.a.func,
            projectId: i.a.string
        };
        const Ae = Object(u.e)(Object(d.b)(e => ({
                hasCloudVariables: e.scratchGui.tw.hasCloudVariables,
                customStageSize: e.scratchGui.customStageSize,
                description: e.scratchGui.tw.description,
                isFullScreen: e.scratchGui.mode.isFullScreen,
                isLoading: Object(p.m)(e.scratchGui.projectState.loadingState),
                isPlayerOnly: e.scratchGui.mode.isPlayerOnly,
                isRtl: e.locales.isRtl,
                projectId: e.scratchGui.projectState.projectId
            }), () => ({}))(Ie)),
            Ne = Object(l.d)(h.a, Object(f.a)("TW Interface"), m.a, b.a, v.a, (function(e) {
                class t extends c.a.Component {
                    constructor(e)
                    {
                        super(e),
                        C()(this, ["createRestorePoint"]),
                        this.timeout = null
                    }
                    componentDidUpdate(e)
                    {
                        R || this.props.projectChanged === e.projectChanged && this.props.isShowingProject === e.isShowingProject || (this.props.projectChanged && this.props.isShowingProject ? this.timeout = setTimeout(this.createRestorePoint, 3e5) : (clearTimeout(this.timeout), this.timeout = null))
                    }
                    componentWillUnmount()
                    {
                        clearTimeout(this.timeout)
                    }
                    async createRestorePoint()
                    {
                        try {
                            this.props.onAutosavingStart(),
                            await I.a.save(this.props.vm)
                        } catch (e) {
                            R = !0
                        }
                        this.timeout = null,
                        setTimeout(() => {
                            this.props.onAutosavingFinish(),
                            null === this.timeout && !R && this.props.projectChanged && this.props.isShowingProject && (this.timeout = setTimeout(this.createRestorePoint, 3e5))
                        }, 250)
                    }
                    render()
                    {
                        const t = this.props,
                            {projectChanged: n, onAutosavingStart: r, onAutosavingFinish: o, vm: a} = t,
                            i = N(t, A);
                        return c.a.createElement(e, i)
                    }
                }
                t.propTypes = {
                    isShowingProject: i.a.bool,
                    projectChanged: i.a.bool,
                    onAutosavingStart: i.a.func,
                    onAutosavingFinish: i.a.func,
                    vm: i.a.instanceOf(T.a)
                };
                return Object(d.b)(e => ({
                    isShowingProject: Object(p.r)(e.scratchGui.projectState.loadingState),
                    projectChanged: e.scratchGui.projectChanged,
                    vm: e.scratchGui.vm
                }), e => ({
                    onAutosavingStart: () => e(Object(O.i)("twAutosaving")),
                    onAutosavingFinish: () => e(Object(O.c)("twAutosaving"))
                }))(t)
            }), E)(Ae);
        t.a = Ne
    },
    17: function(e, t, n) {
        var r = n(269);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(10)(r, o);
        r.locals && (e.exports = r.locals)
    },
    245: function(e, t, n) {
        (t = e.exports = n(9)(!1)).push([e.i, '/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ /*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are "inside" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/ /* Toolbox z-index: 40; set in scratch-blocks */ /* tooltips should go over add buttons if they overlap */ /* monitors go over add buttons */ /* "ask" block text input goes above monitors */ /* menu-bar should go over monitors, alerts and tutorials */ /* tw: show below menu bar normally */ /* Block drag z-index: 1000; default 50 is overriden in blocks.css */ /* so it is draggable into other panes */ /* in most interfaces, the context menu is always on top */ .project-input_input_1E6Af {\n    border: none;\n    width: 100%;\n    font-size: 23px;\n    line-height: 32px;\n    opacity: 0.5;\n    background-color: transparent;\n    color: inherit;\n} .project-input_input_1E6Af:focus {\n    opacity: 1;\n} .project-input_input_1E6Af:disabled {\n    opacity: 0.8;\n} .project-input_tooltip_3_EoA {\n    opacity: 1 !important;\n    background-color: hsla(10, 85%, 65%, 1) !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    box-shadow: 0 0 .5rem hsla(0, 0%, 0%, .25) !important;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    z-index: 491 !important;\n} .project-input_tooltip_3_EoA:after {\n    border-top-color: hsla(10, 85%, 65%, 1) !important;\n}\n', ""]),
        t.locals = {
            input: "project-input_input_1E6Af",
            tooltip: "project-input_tooltip_3_EoA"
        }
    },
    246: function(e, t, n) {
        (t = e.exports = n(9)(!1)).push([e.i, "/*\nImported from:\nhttps://github.com/forkphorus/forkphorus/tree/master/studioview\nWith changes to make it work properly in the scratch-gui environment.\n*/\n\n/* we wrap it in a <div> */\n\n.studioview_wrapper_1SFBd {\n  height: 100%;\n}\n\n/* fix some styles that can be messed up by scratch-gui */\n\n.studioview_studioview-root_1OP-i * {\n  box-sizing: content-box !important;\n}\n\n.studioview_studioview-root_1OP-i {\n  height: 100%;\n}\n\n.studioview_studioview-list_2hIxk {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-anchor: none;\n}\n\n.studioview_studioview-project_IDotv, .studioview_studioview-placeholder_KKHo9 {\n  display: inline-block;\n  width: 144px;\n  padding: 3px;\n  margin-bottom: 1px;\n  margin-right: 1px;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-project_IDotv {\n  color: inherit;\n  position: relative;\n  text-decoration: none;\n}\n\n.studioview_studioview-loaded_3UCil:hover::before, .studioview_studioview-loaded_3UCil:active::before {\n  content: '';\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-loaded_3UCil:active::before {\n  opacity: 0.2;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-title_2ROWB,\n.studioview_studioview-root_1OP-i .studioview_studioview-author_2P0Hj {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: inherit;\n  text-decoration: none;\n}\n\n.studioview_studioview-title_2ROWB {\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.studioview_studioview-author_2P0Hj {\n  font-size: 0.75em;\n}\n\n.studioview_studioview-error_3XWai {\n  width: 100%;\n}\n\n.studioview_studioview-thumbnail_1HYJO, .studioview_studioview-placeholder-thumbnail_TUdop {\n  position: relative;\n  width: 144px;\n  height: 108px;\n}\n\n.studioview_studioview-thumbnail_1HYJO::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-thumbnail_1HYJO img {\n  width: 100%;\n  height: 100%;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-thumbnail_1HYJO,\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-title_2ROWB,\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-author_2P0Hj {\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-title_2ROWB {\n  height: 20px;\n  margin-top: 2px;\n}\n\n.studioview_studioview-author_2P0Hj {\n  height: 18px;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-title_2ROWB {\n  border-radius: 2px 2px 2px 0;\n  width: 100%;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-author_2P0Hj {\n  border-radius: 0 0 2px 2px;\n  width: 50%;\n}\n", ""]),
        t.locals = {
            wrapper: "studioview_wrapper_1SFBd",
            "studioview-root": "studioview_studioview-root_1OP-i",
            studioviewRoot: "studioview_studioview-root_1OP-i",
            "studioview-list": "studioview_studioview-list_2hIxk",
            studioviewList: "studioview_studioview-list_2hIxk",
            "studioview-project": "studioview_studioview-project_IDotv",
            studioviewProject: "studioview_studioview-project_IDotv",
            "studioview-placeholder": "studioview_studioview-placeholder_KKHo9",
            studioviewPlaceholder: "studioview_studioview-placeholder_KKHo9",
            "studioview-loaded": "studioview_studioview-loaded_3UCil",
            studioviewLoaded: "studioview_studioview-loaded_3UCil",
            "studioview-title": "studioview_studioview-title_2ROWB",
            studioviewTitle: "studioview_studioview-title_2ROWB",
            "studioview-author": "studioview_studioview-author_2P0Hj",
            studioviewAuthor: "studioview_studioview-author_2P0Hj",
            "studioview-error": "studioview_studioview-error_3XWai",
            studioviewError: "studioview_studioview-error_3XWai",
            "studioview-thumbnail": "studioview_studioview-thumbnail_1HYJO",
            studioviewThumbnail: "studioview_studioview-thumbnail_1HYJO",
            "studioview-placeholder-thumbnail": "studioview_studioview-placeholder-thumbnail_TUdop",
            studioviewPlaceholderThumbnail: "studioview_studioview-placeholder-thumbnail_TUdop"
        }
    },
    247: function(e, t, n) {
        (t = e.exports = n(9)(!1)).push([e.i, ".featured-projects_container_1--ew {\n    margin-bottom: 8px;\n}\n\n.featured-projects_opener-container_1c9_H {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: 0.8;\n    color: #222;\n}\n\n.featured-projects_opener-container_1c9_H:hover {\n    opacity: 1;\n}\n\n.featured-projects_opener-content_1kqev {\n    background-color: white;\n    padding: 4px;\n    border: 1px solid black;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);\n}\n\n.featured-projects_projects_1piAv {\n    position: relative;\n    height: 155px;\n}\n\n.featured-projects_projects_1piAv.featured-projects_transition_3TsdC {\n    transition: .2s height;\n}\n\n.featured-projects_projects_1piAv.featured-projects_opened_eLMQu {\n    height: 310px;\n}\n\n.featured-projects_footer_2fw_5 {\n    \n}\n", ""]),
        t.locals = {
            container: "featured-projects_container_1--ew",
            "opener-container": "featured-projects_opener-container_1c9_H",
            openerContainer: "featured-projects_opener-container_1c9_H",
            "opener-content": "featured-projects_opener-content_1kqev",
            openerContent: "featured-projects_opener-content_1kqev",
            projects: "featured-projects_projects_1piAv",
            transition: "featured-projects_transition_3TsdC",
            opened: "featured-projects_opened_eLMQu",
            footer: "featured-projects_footer_2fw_5"
        }
    },
    248: function(e, t, n) {
        (t = e.exports = n(9)(!1)).push([e.i, '.description_description_1iyDJ {\n    max-height: 250px;\n    overflow: auto;\n    white-space: pre-line;\n    overflow-wrap: break-word;\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n}\n\n.description_description_1iyDJ a {\n    font-weight: bold;\n    text-decoration: none;\n}\n\n[theme="dark"] .description_description_1iyDJ {\n    border-color: #203652;\n    background-color: #16202c;\n}\n\n.description_header_27V8b {\n    font-weight: bold;\n    font-size: 1em;\n    margin: 0;\n    padding: 0;\n}\n\n.description_divider_3z5W7 {\n    margin-top: 8px;\n}\n\n.description_project-link_2-Z1r {\n    margin-bottom: 2px;\n}\n', ""]),
        t.locals = {
            description: "description_description_1iyDJ",
            header: "description_header_27V8b",
            divider: "description_divider_3z5W7",
            "project-link": "description_project-link_2-Z1r",
            projectLink: "description_project-link_2-Z1r"
        }
    },
    249: function(e, t, n) {
        var r = n(250),
            o = n(254),
            a = n(255),
            i = a && a.isRegExp,
            s = i ? o(i) : r;
        e.exports = s
    },
    25: function(e, t, n) {
        var r = n(246);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(10)(r, o);
        r.locals && (e.exports = r.locals)
    },
    250: function(e, t, n) {
        var r = n(87),
            o = n(70);
        e.exports = function(e) {
            return o(e) && "[object RegExp]" == r(e)
        }
    },
    251: function(e, t, n) {
        var r = n(151),
            o = "object" == typeof self && self && self.Object === Object && self,
            a = r || o || Function("return this")();
        e.exports = a
    },
    252: function(e, t, n) {
        var r = n(88),
            o = Object.prototype,
            a = o.hasOwnProperty,
            i = o.toString,
            s = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = a.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {}
            var o = i.call(e);
            return r && (t ? e[s] = n : delete e[s]), o
        }
    },
    253: function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
            return n.call(e)
        }
    },
    254: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return e(t)
            }
        }
    },
    255: function(e, t, n) {
        (function(e) {
            var r = n(151),
                o = t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                i = a && a.exports === o && r.process,
                s = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        return e || i && i.binding && i.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        }).call(this, n(210)(e))
    },
    256: function(e, t, n) {
        var r = n(257),
            o = /[\\^$.*+?()[\]{}|]/g,
            a = RegExp(o.source);
        e.exports = function(e) {
            return (e = r(e)) && a.test(e) ? e.replace(o, "\\$&") : e
        }
    },
    257: function(e, t, n) {
        var r = n(258);
        e.exports = function(e) {
            return null == e ? "" : r(e)
        }
    },
    258: function(e, t, n) {
        var r = n(88),
            o = n(259),
            a = n(111),
            i = n(260),
            s = r ? r.prototype : void 0,
            c = s ? s.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t)
                return t;
            if (a(t))
                return o(t, e) + "";
            if (i(t))
                return c ? c.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -1 / 0 ? "-0" : n
        }
    },
    259: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;)
                o[n] = t(e[n], n, e);
            return o
        }
    },
    260: function(e, t, n) {
        var r = n(87),
            o = n(70);
        e.exports = function(e) {
            return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
        }
    },
    261: function(e, t, n) {
        var r = n(87),
            o = n(111),
            a = n(70);
        e.exports = function(e) {
            return "string" == typeof e || !o(e) && a(e) && "[object String]" == r(e)
        }
    },
    262: function(e, t, n) {
        var r = n(263);
        e.exports = function(e) {
            return (null == e ? 0 : e.length) ? r(e, 1) : []
        }
    },
    263: function(e, t, n) {
        var r = n(264),
            o = n(265);
        e.exports = function e(t, n, a, i, s) {
            var c = -1,
                d = t.length;
            for (a || (a = o), s || (s = []); ++c < d;) {
                var l = t[c];
                n > 0 && a(l) ? n > 1 ? e(l, n - 1, a, i, s) : r(s, l) : i || (s[s.length] = l)
            }
            return s
        }
    },
    264: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = t.length, o = e.length; ++n < r;)
                e[o + n] = t[n];
            return e
        }
    },
    265: function(e, t, n) {
        var r = n(88),
            o = n(266),
            a = n(111),
            i = r ? r.isConcatSpreadable : void 0;
        e.exports = function(e) {
            return a(e) || o(e) || !!(i && e && e[i])
        }
    },
    266: function(e, t, n) {
        var r = n(267),
            o = n(70),
            a = Object.prototype,
            i = a.hasOwnProperty,
            s = a.propertyIsEnumerable,
            c = r(function() {
                return arguments
            }()) ? r : function(e) {
                return o(e) && i.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = c
    },
    267: function(e, t, n) {
        var r = n(87),
            o = n(70);
        e.exports = function(e) {
            return o(e) && "[object Arguments]" == r(e)
        }
    },
    268: function(e, t, n) {
        (t = e.exports = n(9)(!1)).push([e.i, '.cloud-variable-badge_badge_2kZVK {\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    display: flex;\n    align-items: center;\n    border-radius: 0.5rem;\n}\n[theme="dark"] .cloud-variable-badge_badge_2kZVK {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.cloud-variable-badge_icon_3PN9C {\n    margin-right: 0.25rem;\n}\n[theme="dark"] .cloud-variable-badge_icon_3PN9C {\n    filter: invert(100%);\n}\n.cloud-variable-badge_text_1V3lA {\n\n}\n', ""]),
        t.locals = {
            badge: "cloud-variable-badge_badge_2kZVK",
            icon: "cloud-variable-badge_icon_3PN9C",
            text: "cloud-variable-badge_text_1V3lA"
        }
    },
    269: function(e, t, n) {
        (t = e.exports = n(9)(!1)).push([e.i, '/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n    font-weight: bold;\n    line-height: 1.7em;\n}\nh1 {\n    font-weight: 2.5rem;\n}\nh2 {\n    font-weight: 2rem;\n}\nh3 {\n    font-size: 1.4rem;\n}\nh4 {\n    font-size: 1rem;\n}\na {\n    color: #25d;\n    cursor: pointer;\n    text-decoration: underline;\n}\n.interface_container_2nBns {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.interface_editor_3jGyG {\n    min-width: 1024px;\n    min-height: 640px;\n    height: 100%;\n}\n.interface_editor_3jGyG .interface_center_2d9_b {\n    height: 100%;\n}\n.interface_player-only_38SyA .interface_center_2d9_b {\n    margin: auto;\n}\n.interface_menu_3K-Q2 {\n    margin-bottom: 8px;\n}\n.interface_section_3pFkT {\n    margin: 8px 0 8px 0;\n}\n.interface_footer_3JeCN {\n    padding: 10px 0;\n    margin-top: 10px;\n    border-top: 2px solid #ddd;\n}\n.interface_footer_3JeCN a {\n    font-weight: bold;\n    text-decoration: none;\n}\n[theme="dark"] .interface_footer_3JeCN {\n    border-color: #1a1a1a;\n}\n.interface_footer-content_1aIC- {\n    max-width: 600px;\n    margin: auto;\n}\n.interface_footer-text_IgwDU {\n    text-align: center;\n    margin: 5px 0 10px 0;\n}\n.interface_footer-columns_1SUSg {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    flex-wrap: wrap;\n}\n.interface_footer-section_11lCO {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    margin-bottom: 10px;\n}\n.interface_footer-section_11lCO > * {\n    margin-bottom: 10px;\n}\n[theme="dark"] .interface_container_2nBns {\n    background-color: #111;\n}\n[theme="dark"] .interface_player-only_38SyA {\n    color: #ddd;\n}\n[theme="dark"] a {\n    color: #4af;\n}\n.interface_unshared-update_i7deb {\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #ffb9b9;\n    background-color: #ffdbdb;\n    border-radius: 0.5rem;\n}\n[theme="dark"] .interface_unshared-update_i7deb {\n    border-color: #6a2929;\n    background-color: #452222;\n}\n.interface_unshared-update_i7deb p {\n    margin: 4px 0;\n}\n.interface_unshared-update_i7deb a {\n    font-weight: bold;\n    text-decoration: none;\n}\n', ""]),
        t.locals = {
            container: "interface_container_2nBns",
            editor: "interface_editor_3jGyG",
            center: "interface_center_2d9_b",
            "player-only": "interface_player-only_38SyA",
            playerOnly: "interface_player-only_38SyA",
            menu: "interface_menu_3K-Q2",
            section: "interface_section_3pFkT",
            footer: "interface_footer_3JeCN",
            "footer-content": "interface_footer-content_1aIC-",
            footerContent: "interface_footer-content_1aIC-",
            "footer-text": "interface_footer-text_IgwDU",
            footerText: "interface_footer-text_IgwDU",
            "footer-columns": "interface_footer-columns_1SUSg",
            footerColumns: "interface_footer-columns_1SUSg",
            "footer-section": "interface_footer-section_11lCO",
            footerSection: "interface_footer-section_11lCO",
            "unshared-update": "interface_unshared-update_i7deb",
            unsharedUpdate: "interface_unshared-update_i7deb"
        }
    },
    46: function(e, t, n) {
        var r = n(247);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(10)(r, o);
        r.locals && (e.exports = r.locals)
    },
    49: function(e, t, n) {
        "use strict";
        let r,
            o;
        "undefined" != typeof BroadcastChannel && (r = new BroadcastChannel("addons-change"), o = new BroadcastChannel("addons-reload")),
        t.a = {
            changeChannel: r,
            reloadChannel: o
        }
    },
    60: function(e, t, n) {
        var r = n(248);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(10)(r, o);
        r.locals && (e.exports = r.locals)
    },
    70: function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    843: function(e, t, n) {
        "use strict";
        n.r(t);
        n(289);
        var r = n(51),
            o = n.n(r),
            a = n(1),
            i = n.n(a),
            s = n(65),
            c = n(155),
            d = n(68);
        Object(s.setAppElement)(d.a),
        o.a.render(i.a.createElement(c.a, null), d.a)
    },
    87: function(e, t, n) {
        var r = n(88),
            o = n(252),
            a = n(253),
            i = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
        }
    },
    88: function(e, t, n) {
        var r = n(251).Symbol;
        e.exports = r
    },
    89: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return d
        })),
        n.d(t, "a", (function() {
            return u
        }));
        var r = n(1),
            o = n.n(r),
            a = n(90),
            i = n.n(a);
        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        const c = window.matchMedia("(prefers-color-scheme: dark)"),
            d = () => {
                try {
                    const e = localStorage.getItem("tw:theme");
                    if (null !== e)
                        return "dark" === e
                } catch (e) {}
                return c.matches
            },
            l = document.createElement("style");
        l.textContent = i.a;
        const u = function(e) {
            class t extends o.a.Component {
                constructor(e)
                {
                    super(e),
                    this.handleQueryChange = this.handleQueryChange.bind(this),
                    this.handleClickTheme = this.handleClickTheme.bind(this),
                    this.state = {
                        dark: d()
                    }
                }
                componentDidMount()
                {
                    c.addEventListener && c.addEventListener("change", this.handleQueryChange),
                    this.updateDark()
                }
                componentDidUpdate()
                {
                    try {
                        localStorage.setItem("tw:theme", this.state.dark ? "dark" : "light")
                    } catch (e) {}
                    this.updateDark()
                }
                componentWillUnmount()
                {
                    c.removeEventListener && c.removeEventListener("change", this.handleQueryChange)
                }
                updateDark()
                {
                    const e = this.state.dark;
                    document.body.setAttribute("theme", e ? "dark" : "light"),
                    e && !l.parentNode ? document.body.insertBefore(l, document.body.firstChild) : !e && l.parentNode && l.parentNode.removeChild(l)
                }
                handleQueryChange()
                {
                    this.setState({
                        dark: c.matches
                    })
                }
                handleClickTheme()
                {
                    this.setState(e => ({
                        dark: !e.dark
                    }))
                }
                render()
                {
                    return o.a.createElement(e, s({
                        onClickTheme: this.handleClickTheme,
                        isDark: this.state.dark
                    }, this.props))
                }
            }
            return t
        }
    },
    90: function(e, t) {
        e.exports = '/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^="blocklyGridPattern"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n'
    },
    94: function(e, t, n) {
        var r = n(249),
            o = n(256),
            a = n(261),
            i = n(262);
        e.exports = function(e, t, n) {
            return Array.isArray(e) || (e = [e]), i(e.map((function(e) {
                return a(e) ? function(e, t, n) {
                    var i = 0,
                        s = 0;
                    if ("" === e)
                        return e;
                    if (!e || !a(e))
                        throw new TypeError("First argument to react-string-replace#replaceString must be a string");
                    var c = t;
                    r(c) || (c = new RegExp("(" + o(c) + ")", "gi"));
                    for (var d = e.split(c), l = 1, u = d.length; l < u; l += 2)
                        s = d[l].length,
                        i += d[l - 1].length,
                        d[l] = n(d[l], l, i),
                        i += s;
                    return d
                }(e, t, n) : e
            })))
        }
    },
    95: function(e, t, n) {
        var r = n(268);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(10)(r, o);
        r.locals && (e.exports = r.locals)
    }
});
