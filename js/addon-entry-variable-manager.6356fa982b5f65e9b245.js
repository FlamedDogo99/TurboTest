(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[51], {
    1576: function(e, t, a) {
        var n = a(204);
        (e.exports = a(9)(!1)).push([e.i, '/* Change z-indexes to allow more than 3 tabs */\n[class*="gui_tab_"][class*="gui_is-selected_"] {\n  z-index: 10 !important;\n}\n[class*="gui_tab_"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*="gui_tab_"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*="gui_tab_"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*="gui_tab_"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url(' + n(a(1577)) + ');\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n[theme="dark"] .sa-var-manager-searchbox {\n  border-color: #333;\n}\n\n[dir="rtl"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager input:disabled, .sa-var-manager textarea:disabled {\n  font-style: italic;\n  opacity: 0.8;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  text-align: left;\n}\n[theme="dark"] .sa-var-manager td {\n  border-color: #333;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n', ""])
    },
    1577: function(e, t, a) {
        e.exports = a.p + "static/assets/1821649bb254ff5d93bb397ad646a23f.svg"
    },
    1612: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "resources", (function() {
            return i
        }));
        var n = a(1576);
        const i = {
            "userscript.js": async function({addon: e, console: t, msg: a}) {
                const n = e.tab.traps.vm;
                let i = [],
                    s = [],
                    r = !1;
                const c = document.createElement("div");
                c.classList.add(e.tab.scratchClass("asset-panel_wrapper"), "sa-var-manager");
                const l = document.createElement("input");
                l.placeholder = a("search"),
                l.className = e.tab.scratchClass("input_input-form", {
                    others: "sa-var-manager-searchbox"
                }),
                l.addEventListener("input", e => {
                    for (const e of i)
                        e.handleSearch(l.value);
                    for (const e of s)
                        e.handleSearch(l.value);
                    v()
                }),
                c.appendChild(l);
                const o = document.createElement("div"),
                    d = document.createElement("span"),
                    u = document.createElement("table");
                d.className = "sa-var-manager-heading",
                d.innerText = a("for-this-sprite"),
                o.appendChild(d),
                o.appendChild(u);
                const g = document.createElement("div"),
                    h = document.createElement("span"),
                    p = document.createElement("table");
                h.className = "sa-var-manager-heading",
                h.innerText = a("for-all-sprites"),
                g.appendChild(h),
                g.appendChild(p),
                c.appendChild(o),
                c.appendChild(g);
                const b = document.createElement("li");
                e.tab.displayNoneWhileDisabled(b, {
                    display: "flex"
                }),
                b.classList.add(e.tab.scratchClass("react-tabs_react-tabs__tab"), e.tab.scratchClass("gui_tab")),
                b.id = "react-tabs-sa-variable-manager";
                const m = document.createElement("img");
                m.draggable = !1,
                m.src = (e => {
                    if ("/icon.svg" === e)
                        return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iI2ZmNGM0YyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";
                    if ("/search.svg" === e)
                        return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";
                    throw new Error("Unknown asset: ".concat(e))
                })("/icon.svg");
                const M = document.createElement("span");
                function v() {
                    let e = i.filter(e => "none" !== e.row.style.display),
                        t = s.filter(e => "none" !== e.row.style.display);
                    d.style.display = 0 === e.length ? "none" : "",
                    h.style.display = 0 === t.length ? "none" : ""
                }
                M.innerText = a("variables"),
                b.appendChild(m),
                b.appendChild(M);
                const I = new WeakMap,
                    x = new IntersectionObserver(e => {
                        for (const t of e) {
                            I.get(t.target).setVisible(t.isIntersecting)
                        }
                    }, {
                        rootMargin: "100px"
                    });
                class E {
                    constructor(e, t)
                    {
                        this.scratchVariable = e,
                        this.target = t,
                        this.visible = !1,
                        this.tooBig = !1,
                        this.buildDOM()
                    }
                    updateValue(e)
                    {
                        if (!this.visible && !e)
                            return;
                        if (this.tooBig)
                            return;
                        let t;
                        if ("list" === this.scratchVariable.type ? (t = this.scratchVariable.value.join("\n"), t.length > 12e6 && (this.tooBig = !0)) : (t = this.scratchVariable.value, t.length > 1e6 && (this.tooBig = !0)), this.tooBig)
                            return this.input.value = "Too big to safely display. If this limit is too low, use the feedback button at the top of the screen.", void (this.input.disabled = !0);
                        t !== this.input.value && (this.input.value = t)
                    }
                    handleSearch(e)
                    {
                        this.scratchVariable.name.toLowerCase().includes(e.toLowerCase()) || !e ? (this.row.style.display = "", this.updateValue(!0)) : this.row.style.display = "none"
                    }
                    resizeInputIfList()
                    {
                        if ("list" === this.scratchVariable.type) {
                            this.input.style.height = "auto";
                            const e = Math.min(1e3, this.input.scrollHeight);
                            e > 0 && (this.input.style.height = e + "px")
                        }
                    }
                    setVisible(e)
                    {
                        this.visible !== e && (this.visible = e, e && this.updateValue())
                    }
                    buildDOM()
                    {
                        const e = "sa-variable-manager-".concat(this.scratchVariable.id),
                            t = document.createElement("tr");
                        this.row = t;
                        const a = document.createElement("td");
                        a.className = "sa-var-manager-name";
                        const i = document.createElement("input");
                        i.value = this.scratchVariable.name,
                        i.htmlFor = e;
                        i.addEventListener("keydown", e => {
                            "Enter" === e.key && e.target.blur()
                        }),
                        i.addEventListener("focusout", e => {
                            e.preventDefault();
                            const t = Blockly.getMainWorkspace();
                            let a = i.value;
                            if (a === this.scratchVariable.name)
                                return;
                            this.scratchVariable.isCloud && (a.startsWith("☁") ? a.startsWith("☁ ") || (a = a.substring(0, 1) + " " + a.substring(1)) : a = "☁ " + a);
                            const n = !a.trim(),
                                s = !!t.getVariable(a, this.scratchVariable.type);
                            n || s ? i.value = this.scratchVariable.name : (t.renameVariableById(this.scratchVariable.id, a), i.value !== a && (i.value = a))
                        }),
                        i.addEventListener("focus", e => {
                            r = !0,
                            c.classList.add("freeze")
                        }),
                        i.addEventListener("blur", e => {
                            r = !1,
                            c.classList.remove("freeze")
                        }),
                        a.appendChild(i),
                        I.set(t, this),
                        x.observe(t);
                        const s = document.createElement("td");
                        let o;
                        s.className = "sa-var-manager-value",
                        o = "list" === this.scratchVariable.type ? document.createElement("textarea") : document.createElement("input"),
                        o.id = e,
                        this.input = o,
                        this.updateValue(!0),
                        "list" === this.scratchVariable.type && this.input.addEventListener("input", () => this.resizeInputIfList(), !1);
                        o.addEventListener("keydown", e => {
                            "INPUT" === e.target.nodeName && "Enter" === e.key && e.target.blur()
                        }),
                        o.addEventListener("focusout", e => {
                            e.preventDefault(),
                            "list" === this.scratchVariable.type ? n.setVariableValue(this.target.id, this.scratchVariable.id, o.value.split("\n")) : n.setVariableValue(this.target.id, this.scratchVariable.id, o.value),
                            o.blur()
                        }),
                        o.addEventListener("focus", e => {
                            r = !0,
                            c.classList.add("freeze")
                        }),
                        o.addEventListener("blur", e => {
                            r = !1,
                            c.classList.remove("freeze")
                        }),
                        s.appendChild(o),
                        t.appendChild(a),
                        t.appendChild(s),
                        this.handleSearch(l.value)
                    }
                }
                function A() {
                    var t,
                        a,
                        c;
                    if (3 !== (null === (t = e.tab.redux.state) || void 0 === t || null === (a = t.scratchGui) || void 0 === a || null === (c = a.editorTab) || void 0 === c ? void 0 : c.activeTabIndex) || r)
                        return;
                    const l = n.runtime.getEditingTarget(),
                        o = n.runtime.getTargetForStage();
                    for (i = l.isStage ? [] : Object.values(l.variables).filter(e => "" === e.type || "list" === e.type).map(e => new E(e, l)), s = Object.values(o.variables).filter(e => "" === e.type || "list" === e.type).map(e => new E(e, o)), v(); u.firstChild;)
                        u.removeChild(u.firstChild);
                    for (; p.firstChild;)
                        p.removeChild(p.firstChild);
                    for (const e of i)
                        u.appendChild(e.row),
                        e.resizeInputIfList();
                    for (const e of s)
                        p.appendChild(e.row),
                        e.resizeInputIfList()
                }
                function y(t) {
                    if (t) {
                        b.classList.add(e.tab.scratchClass("react-tabs_react-tabs__tab--selected"), e.tab.scratchClass("gui_is-selected"));
                        document.querySelector("[class^=gui_tabs]").insertAdjacentElement("beforeend", c),
                        A()
                    } else
                        b.classList.remove(e.tab.scratchClass("react-tabs_react-tabs__tab--selected"), e.tab.scratchClass("gui_is-selected")),
                        c.remove(),
                        i = [],
                        s = []
                }
                b.addEventListener("click", t => {
                    e.tab.redux.dispatch({
                        type: "scratch-gui/navigation/ACTIVATE_TAB",
                        activeTabIndex: 3
                    })
                }),
                e.tab.redux.initialize(),
                e.tab.redux.addEventListener("statechanged", ({detail: t}) => {
                    "scratch-gui/navigation/ACTIVATE_TAB" === t.action.type ? y(3 === t.action.activeTabIndex) : "scratch-gui/mode/SET_PLAYER" === t.action.type && (t.action.isPlayerOnly || 3 !== e.tab.redux.state.scratchGui.editorTab.activeTabIndex || queueMicrotask(() => y(!0)))
                }),
                n.runtime.on("PROJECT_LOADED", () => {
                    try {
                        A()
                    } catch (e) {
                        t.error(e)
                    }
                }),
                n.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE", () => {
                    try {
                        A()
                    } catch (e) {
                        t.error(e)
                    }
                });
                const f = n.runtime._step;
                for (n.runtime._step = function(...a) {
                    const n = f.call(this, ...a);
                    try {
                        !function() {
                            var t,
                                a,
                                n;
                            if (3 === (null === (t = e.tab.redux.state) || void 0 === t || null === (a = t.scratchGui) || void 0 === a || null === (n = a.editorTab) || void 0 === n ? void 0 : n.activeTabIndex) && !r) {
                                for (const e of i)
                                    e.updateValue();
                                for (const e of s)
                                    e.updateValue()
                            }
                        }()
                    } catch (e) {
                        t.error(e)
                    }
                    return n
                }, e.self.addEventListener("disabled", () => {
                    3 === e.tab.redux.state.scratchGui.editorTab.activeTabIndex && e.tab.redux.dispatch({
                        type: "scratch-gui/navigation/ACTIVATE_TAB",
                        activeTabIndex: 2
                    })
                });;)
                    await e.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']", {
                        markAsSeen: !0,
                        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
                        reduxCondition: e => !e.scratchGui.mode.isPlayerOnly
                    }),
                    e.tab.appendToSharedSpace({
                        space: "afterSoundTab",
                        element: b,
                        order: 3
                    })
            },
            "style.css": a.n(n).a
        }
    }
}]);
