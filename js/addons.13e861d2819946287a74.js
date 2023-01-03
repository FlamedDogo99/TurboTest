(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[70], {
    1480: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            var t = n(173),
                o = n.n(t),
                s = n(47),
                r = n(555),
                a = n(448),
                i = n(188),
                c = n(119),
                l = n(1505),
                d = n(1506),
                u = n(1507),
                p = n(1510),
                g = n(1511),
                h = n(1484);
            n(842);
            const m = e => e.replace(/([<>'"&])/g, (e, t) => "&#".concat(t.charCodeAt(0), ";")),
                b = e => e.replace(/-([a-z])/g, e => e[1].toUpperCase()),
                f = e => {
                    const t = document.createElement("style");
                    return t.textContent = e, t
                };
            let y = null;
            let k,
                M = [];
            const w = e => {
                M = M.filter(t => t !== e)
            };
            class v extends a.a {
                constructor()
                {
                    super(),
                    this._isInReducer = !1,
                    this._initialized = !1,
                    this._nextState = null
                }
                initialize()
                {
                    this._initialized || (i.a.appStateReducer = (e, t, n) => {
                        this._isInReducer = !0,
                        this._nextState = n,
                        this.dispatchEvent(new CustomEvent("statechanged", {
                            detail: {
                                action: e,
                                prev: t,
                                next: n
                            }
                        })),
                        this._nextState = null,
                        this._isInReducer = !1
                    }, this._initialized = !0)
                }
                dispatch(e)
                {
                    this._isInReducer ? queueMicrotask(() => i.a.appStateStore.dispatch(e)) : i.a.appStateStore.dispatch(e)
                }
                get state()
                {
                    return this._nextState ? this._nextState : i.a.appStateStore.getState()
                }
            }
            const N = () => {
                    const e = E.state.scratchGui.mode;
                    return e.isEmbedded ? "embed" : e.isFullScreen ? "fullscreen" : e.isPlayerOnly ? "projectpage" : "editor"
                },
                E = new v,
                C = E.state.locales.locale.split("-")[0],
                I = (async () => {
                    if (d.a[C]) {
                        const e = await d.a[C]();
                        Object.assign(l, e)
                    }
                })(),
                x = e => "addons-display-none-".concat(e),
                D = e => e.split(/(?=[^\\]%[nbs])/g).map(e => e.trim()).filter(e => "%" === e.charAt(0)).map(e => e.substring(0, 2));
            let T = !1;
            const S = {
                    color: "#29beb8",
                    secondaryColor: "#3aa8a4",
                    tertiaryColor: "#3aa8a4"
                },
                j = [],
                _ = ["editor-devtools", "block-switching", "blocks2image", "swap-local-global"];
            let L = !1;
            const z = e => Object.keys(e).find(e => e.startsWith("__reactInternalInstance$")),
                O = document.createElement("div");
            document.body.insertBefore(O, document.body.firstChild);
            const A = e => {
                    const t = e.dataset.addonId;
                    return "columns" === t || "editor-stage-left" === t ? 1 : 0
                },
                B = e => {
                    const t = A(e);
                    for (const n of O.children)
                        if (A(n) >= t)
                            return void O.insertBefore(e, n);
                    O.appendChild(e)
                };
            class P extends a.a {
                constructor(e)
                {
                    super(),
                    this._id = e,
                    this._seenElements = new WeakSet,
                    this.traps = {
                        get vm() {
                            return E.state.scratchGui.vm
                        },
                        getBlockly: () => i.a.blockly ? Promise.resolve(i.a.blockly) : new Promise(e => {
                            i.a.blocklyCallbacks.push(() => e(i.a.blockly))
                        }),
                        getPaper: async () => {
                            const e = await this.waitForElement("[class*='paint-editor_mode-selector']", {
                                reduxCondition: e => 1 === e.scratchGui.editorTab.activeTabIndex && !e.scratchGui.mode.isPlayerOnly
                            });
                            let t,
                                n = e[Object.keys(e).find(e => e.startsWith("__reactInternalInstance$"))].child;
                            for (; n;) {
                                const e = n.child.stateNode;
                                if (e.tool) {
                                    t = e.tool;
                                    break
                                }
                                if (e.blob && e.blob.tool) {
                                    t = e.blob.tool;
                                    break
                                }
                                n = n.sibling
                            }
                            if (t) {
                                return t._scope
                            }
                            throw new Error("cannot find paper :(")
                        },
                        getInternalKey: z
                    }
                }
                get redux()
                {
                    return E
                }
                waitForElement(e, {markAsSeen: t=!1, condition: n, reduxCondition: o, reduxEvents: s}={})
                {
                    let r = !0;
                    const a = () => !!r && (!(n && !n()) && !(o && !o(E.state)));
                    if (a()) {
                        const n = document.querySelectorAll(e);
                        for (const e of n)
                            if (!this._seenElements.has(e))
                                return t && this._seenElements.add(e), Promise.resolve(e)
                    }
                    let i;
                    return s && (r = !1, i = ({detail: e}) => {
                        const t = e.action.type;
                        s.includes(t) && "fontsLoaded/SET_FONTS_LOADED" !== t && (r = !0)
                    }, this.redux.initialize(), this.redux.addEventListener("statechanged", i)), new Promise(n => {
                        const o = () => {
                            if (!a())
                                return;
                            const s = document.querySelectorAll(e);
                            for (const e of s)
                                if (!this._seenElements.has(e)) {
                                    n(e),
                                    w(o),
                                    t && this._seenElements.add(e),
                                    i && this.redux.removeEventListener("statechanged", i);
                                    break
                                }
                        };
                        var s;
                        s = o,
                        k || (k = new MutationObserver(() => {
                            for (const e of M)
                                e()
                        }), k.observe(document.documentElement, {
                            attributes: !1,
                            childList: !0,
                            subtree: !0
                        })),
                        M.push(s)
                    })
                }
                appendToSharedSpace({space: e, element: t, order: n, scope: o})
                {
                    const s = {
                            stageHeader: {
                                element: () => document.querySelector("[class^='stage-header_stage-size-row']"),
                                from: () => [],
                                until: () => [document.querySelector("[class^='stage-header_stage-size-toggle-group']"), document.querySelector("[class^='stage-header_stage-size-row']").lastChild]
                            },
                            fullscreenStageHeader: {
                                element: () => document.querySelector("[class^='stage-header_stage-menu-wrapper']"),
                                from: function() {
                                    let e = this.element().querySelector(".addon-spacer");
                                    return e || (e = document.createElement("div"), e.style.marginLeft = "auto", e.className = "addon-spacer", this.element().insertBefore(e, this.element().lastChild)), [e]
                                },
                                until: () => [document.querySelector("[class^='stage-header_stage-menu-wrapper']").lastChild]
                            },
                            afterGreenFlag: {
                                element: () => document.querySelector("[class^='controls_controls-container']"),
                                from: () => [],
                                until: () => [document.querySelector("[class^='stop-all_stop-all']")]
                            },
                            afterStopButton: {
                                element: () => document.querySelector("[class^='controls_controls-container']"),
                                from: () => [document.querySelector("[class^='stop-all_stop-all']")],
                                until: () => []
                            },
                            afterSoundTab: {
                                element: () => document.querySelector("[class^='react-tabs_react-tabs__tab-list']"),
                                from: () => [document.querySelector("[class^='react-tabs_react-tabs__tab-list']").children[2]],
                                until: () => [document.querySelector(".sa-find-bar")]
                            },
                            assetContextMenuAfterExport: {
                                element: () => o,
                                from: () => Array.prototype.filter.call(o.children, e => e.textContent === this.scratchMessage("gui.spriteSelectorItem.contextMenuExport")),
                                until: () => Array.prototype.filter.call(o.children, e => e.textContent === this.scratchMessage("gui.spriteSelectorItem.contextMenuDelete"))
                            },
                            assetContextMenuAfterDelete: {
                                element: () => o,
                                from: () => Array.prototype.filter.call(o.children, e => e.textContent === this.scratchMessage("gui.spriteSelectorItem.contextMenuDelete")),
                                until: () => []
                            },
                            paintEditorZoomControls: {
                                element: () => document.querySelector(".sa-paintEditorZoomControls-wrapper") || (() => {
                                    const e = Object.assign(document.createElement("div"), {
                                        className: "sa-paintEditorZoomControls-wrapper"
                                    });
                                    e.style.display = "flex",
                                    e.style.flexDirection = "row-reverse",
                                    e.style.height = "calc(1.95rem + 2px)";
                                    const t = document.querySelector("[class^='paint-editor_zoom-controls']");
                                    return t.replaceWith(e), e.appendChild(t), e
                                })(),
                                from: () => [],
                                until: () => []
                            }
                        }[e],
                        r = s.element();
                    if (!r)
                        return !1;
                    const a = s.from(),
                        i = s.until();
                    t.dataset.saSharedSpaceOrder = n;
                    let c = !1;
                    0 === a.length && (c = !0);
                    let l = null;
                    const d = Array.from(r.children);
                    for (const e of d.keys()) {
                        const t = d[e],
                            o = Number(e);
                        if (c) {
                            if (i.includes(t)) {
                                l = 0 === o ? -1 : d[o - 1];
                                break
                            }
                            if (t.dataset.saSharedSpaceOrder && Number(t.dataset.saSharedSpaceOrder) > n) {
                                l = 0 === o ? -1 : d[o - 1];
                                break
                            }
                        } else
                            a.includes(t) && (c = !0)
                    }
                    return !!c && (null === l ? r.appendChild(t) : -1 === l ? r.prepend(t) : r.insertBefore(t, l.nextSibling), !0)
                }
                addBlock(e, {args: t, displayName: n, callback: o})
                {
                    const s = D(e);
                    if (t.length !== s.length)
                        throw new Error("Procedure code and argument list do not match");
                    if (n) {
                        n = (e => e.replace(/([^\s])(%[nbs])/g, (e, t, n) => "".concat(t, " ").concat(n)))(n);
                        const t = D(n);
                        r = s,
                        a = t,
                        JSON.stringify(r) !== JSON.stringify(a) && (console.warn("displayName ".concat(n, " for ").concat(e, " has invalid arguments, ignoring it.")), n = e)
                    } else
                        n = e;
                    var r,
                        a;
                    const i = this.traps.vm;
                    i.addAddonBlock({
                        procedureCode: e,
                        arguments: t,
                        callback: (e, t) => o(e, t.thread),
                        displayName: n
                    }),
                    T || (T = !0, this.traps.getBlockly().then(e => {
                        const t = e.BlockSvg,
                            n = t.prototype.updateColour;
                        t.prototype.updateColour = function(...e) {
                            if ("procedures_call" === this.type) {
                                this.procCode_ && i.runtime.getAddonBlock(this.procCode_) && (this.colour_ = S.color, this.colourSecondary_ = S.secondaryColor, this.colourTertiary_ = S.tertiaryColor, this.customContextMenu = null)
                            }
                            return n.call(this, ...e)
                        };
                        const o = e.Blocks.procedures_call.createAllInputs_;
                        e.Blocks.procedures_call.createAllInputs_ = function(...e) {
                            const t = this.procCode_ && i.runtime.getAddonBlock(this.procCode_);
                            if (t && t.displayName) {
                                const n = this.procCode_;
                                this.procCode_ = t.displayName;
                                const s = o.call(this, ...e);
                                return this.procCode_ = n, s
                            }
                            return o.call(this, ...e)
                        },
                        i.editingTarget && i.emitWorkspaceUpdate()
                    }))
                }
                getCustomBlock(e)
                {
                    return this.traps.vm.getAddonBlock(e)
                }
                getCustomBlockColor()
                {
                    return S
                }
                setCustomBlockColor(e)
                {
                    Object.assign(S, e)
                }
                createBlockContextMenu(e, {workspace: t=!1, blocks: n=!1, flyout: o=!1, comments: s=!1}={})
                {
                    j.push({
                        addonId: this._id,
                        callback: e,
                        workspace: t,
                        blocks: n,
                        flyout: o,
                        comments: s
                    }),
                    j.sort((e, t) => _.indexOf(e.addonId) - _.indexOf(t.addonId)),
                    L || (L = !0, this.traps.getBlockly().then(e => {
                        const t = e.ContextMenu.show;
                        e.ContextMenu.show = function(n, o, s) {
                            const r = e.mainWorkspace.currentGesture_,
                                a = r.targetBlock_;
                            for (const {callback: e, workspace: t, blocks: n, flyout: s, comments: i} of j) {
                                if (t && !a && !r.flyout_ && !r.startBubble_ || n && a && !r.flyout_ || s && r.flyout_ || i && r.startBubble_)
                                    try {
                                        o = e(o, a)
                                    } catch (e) {
                                        console.error("Error while calling context menu callback: ", e)
                                    }
                            }
                            t.call(this, n, o, s);
                            const i = e.WidgetDiv.DIV.firstChild;
                            o.forEach((e, t) => {
                                if (0 !== t && e.separator) {
                                    const e = i.children[t];
                                    e.style.paddingTop = "2px",
                                    e.classList.add("sa-blockly-menu-item-border"),
                                    e.style.borderTop = "1px solid hsla(0, 0%, 0%, 0.15)"
                                }
                            })
                        }
                    }))
                }
                createEditorContextMenu(e, t)
                {
                    Object(p.a)(this, e, t)
                }
                copyImage(e)
                {
                    if (!navigator.clipboard.write)
                        return Promise.reject(new Error("Clipboard API not supported"));
                    const t = [new ClipboardItem({
                        "image/png": Object(r.a)(e)
                    })];
                    return navigator.clipboard.write(t)
                }
                scratchMessage(e)
                {
                    return E.state.locales.messages[e]
                }
                scratchClass(...e)
                {
                    const t = (() => {
                            if (y)
                                return y;
                            const e = Array.from(document.styleSheets).filter(e => !(e.ownerNode.textContent.startsWith("/* DO NOT EDIT\n@todo This file is copied from GUI and should be pulled out into a shared library.") && (e.ownerNode.textContent.includes("input_input-form") || e.ownerNode.textContent.includes("label_input-group_")))).map(e => {
                                try {
                                    return [...e.cssRules]
                                } catch (e) {
                                    return []
                                }
                            }).flat().map(e => e.selectorText).filter(e => e).map(e => e.match(/(([\w-]+?)_([\w-]+)_([\w\d-]+))/g)).filter(e => e).flat();
                            y = [...new Set(e)];
                            const t = new MutationObserver(e => {
                                for (const n of e)
                                    for (const e of n.addedNodes)
                                        if ("STYLE" === e.tagName)
                                            return y = null, void t.disconnect()
                            });
                            return t.observe(document.head, {
                                childList: !0
                            }), y
                        })(),
                        n = [];
                    for (const o of e)
                        if ("string" == typeof o)
                            for (const e of t)
                                if (e.startsWith("".concat(o, "_")) && e.length === o.length + 6) {
                                    n.push(e);
                                    break
                                }
                    const o = e[e.length - 1];
                    if ("object" == typeof o) {
                        const e = Array.isArray(o.others) ? o.others : [o.others];
                        for (const t of e)
                            n.push(t)
                    }
                    return n.join(" ")
                }
                get editorMode()
                {
                    return N()
                }
                displayNoneWhileDisabled(e)
                {
                    e.classList.add(x(this._id))
                }
                get direction()
                {
                    return this.redux.state.locales.isRtl ? "rtl" : "ltr"
                }
                createModal(e, {isOpen: t=!1}={})
                {
                    return g.b(this, e, {
                        isOpen: t
                    })
                }
                confirm(...e)
                {
                    return g.a(this, ...e)
                }
                prompt(...e)
                {
                    return g.c(this, ...e)
                }
            }
            class R extends a.a {
                constructor(e, t)
                {
                    super(),
                    this._addonId = e,
                    this._manifest = t
                }
                get(e)
                {
                    return s.a.getAddonSetting(this._addonId, e)
                }
            }
            class U extends a.a {
                constructor(e)
                {
                    super(),
                    this.id = e,
                    this.disabled = !1
                }
                get dir()
                {
                    throw new Error("Addon tried to access addon.self.dir")
                }
                get lib()
                {
                    throw new Error("Addon tried to access addon.self.lib")
                }
            }
            class Y {
                constructor(t)
                {
                    Y.instances.push(this);
                    const n = c.a[t];
                    this.id = t,
                    this.manifest = n,
                    this.messageCache = {},
                    this.stylesheets = [],
                    this.disabledStylesheet = null,
                    this.loading = !0,
                    this.publicAPI = {
                        global: e,
                        console: console,
                        addon: {
                            tab: new P(t),
                            settings: new R(t, n),
                            self: new U(t)
                        },
                        msg: this.msg.bind(this),
                        safeMsg: this.safeMsg.bind(this)
                    }
                }
                _msg(e, t, n)
                {
                    const s = "".concat(this.id, "/").concat(e);
                    if (this.messageCache[s])
                        return this.messageCache[s].format(t);
                    let r = l[s];
                    if (!r)
                        return s;
                    n && (r = n(r));
                    const a = new o.a(r, C);
                    return this.messageCache[s] = a, a.format(t)
                }
                msg(e, t)
                {
                    return this._msg(e, t, null)
                }
                safeMsg(e, t)
                {
                    return this._msg(e, t, m)
                }
                settingsChanged()
                {
                    this.publicAPI.addon.settings.dispatchEvent(new CustomEvent("change")),
                    this.updateCSSVariables()
                }
                updateCSSVariables()
                {
                    const e = b(this.id);
                    if (this.manifest.settings)
                        for (const t of this.manifest.settings) {
                            const n = t.id,
                                o = "--".concat(e, "-").concat(b(n)),
                                s = this.publicAPI.addon.settings.get(n);
                            document.documentElement.style.setProperty(o, s)
                        }
                    if (this.manifest.customCssVariables)
                        for (const t of this.manifest.customCssVariables) {
                            const n = t.name,
                                o = "--".concat(e, "-").concat(n),
                                s = t.value,
                                r = this.evaluateCustomCssVariable(s);
                            document.documentElement.style.setProperty(o, r)
                        }
                }
                evaluateCustomCssVariable(e)
                {
                    if ("object" != typeof e || null === e)
                        return e;
                    switch (e.type) {
                    case "alphaThreshold":
                        {
                            const t = this.evaluateCustomCssVariable(e.source);
                            return h.c(t).a >= (this.evaluateCustomCssVariable(e.threshold) || .5) ? this.evaluateCustomCssVariable(e.opaque) : this.evaluateCustomCssVariable(e.transparent)
                        }case "settingValue":
                        return this.publicAPI.addon.settings.get(e.settingId);
                    case "textColor":
                        {
                            const t = this.evaluateCustomCssVariable(e.source),
                                n = this.evaluateCustomCssVariable(e.black),
                                o = this.evaluateCustomCssVariable(e.white),
                                s = this.evaluateCustomCssVariable(e.threshold);
                            return h.f(t, n, o, s)
                        }case "multiply":
                        {
                            const t = this.evaluateCustomCssVariable(e.source);
                            return h.b(t, e)
                        }case "map":
                        return e.options[this.evaluateCustomCssVariable(e.source)]
                    }
                    return console.warn("Unknown customCssVariable", e), "#000000"
                }
                meetsCondition(e)
                {
                    if (!e)
                        return !0;
                    if (e.settings)
                        for (const [t, n] of Object.entries(e.settings))
                            if (this.publicAPI.addon.settings.get(t) !== n)
                                return !1;
                    return !0
                }
                dynamicEnable()
                {
                    this.loading || (this.appendStylesheets(), this.disabledStylesheet && (this.disabledStylesheet.remove(), this.disabledStylesheet = null), this.publicAPI.addon.self.disabled = !1, this.publicAPI.addon.self.dispatchEvent(new CustomEvent("reenabled")))
                }
                dynamicDisable()
                {
                    if (this.loading)
                        return;
                    this.removeStylesheets();
                    const e = ".".concat(x(this.id), "{display:none !important;}");
                    this.disabledStylesheet = f(e),
                    B(this.disabledStylesheet),
                    this.publicAPI.addon.self.disabled = !0,
                    this.publicAPI.addon.self.dispatchEvent(new CustomEvent("disabled"))
                }
                removeStylesheets()
                {
                    for (const e of this.stylesheets)
                        e.remove()
                }
                appendStylesheets()
                {
                    for (const e of this.stylesheets)
                        B(e)
                }
                async run()
                {
                    this.manifest.editorOnly && await (() => {
                        if (E.state.scratchGui.mode.isPlayerOnly)
                            return new Promise(e => {
                                const t = () => {
                                    E.state.scratchGui.mode.isPlayerOnly || (e(), E.removeEventListener("statechanged", t))
                                };
                                E.initialize(),
                                E.addEventListener("statechanged", t)
                            })
                    })();
                    const {resources: e} = await u.a[this.id]();
                    if (this.manifest.noTranslations || await I, this.updateCSSVariables(), this.manifest.userstyles)
                        for (const t of this.manifest.userstyles) {
                            if (!this.meetsCondition(t.if))
                                continue;
                            const n = e[t.url].map(e => e[1]).join("\n"),
                                o = f(n);
                            o.className = "scratch-addons-style",
                            o.dataset.addonId = this.id,
                            this.stylesheets.push(o)
                        }
                    if (this.appendStylesheets(), this.manifest.userscripts)
                        for (const t of this.manifest.userscripts) {
                            if (!this.meetsCondition(t.if))
                                continue;
                            (0, e[t.url])(this.publicAPI)
                        }
                    this.loading = !1
                }
            }
            Y.instances = [];
            const G = e => {
                new Y(e).run()
            };
            let Q = N();
            const Z = () => {
                    const e = N();
                    e !== Q && (Q = e, setTimeout(() => {
                        for (const e of Y.instances)
                            e.publicAPI.addon.tab.dispatchEvent(new CustomEvent("urlChange"))
                    }))
                },
                W = history.replaceState;
            history.replaceState = function(...e) {
                W.apply(this, e),
                Z()
            };
            const V = history.pushState;
            history.pushState = function(...e) {
                V.apply(this, e),
                Z()
            },
            s.a.addEventListener("addon-changed", e => {
                const t = e.detail.addonId,
                    n = Y.instances.find(e => e.id === t);
                n && n.settingsChanged(),
                e.detail.dynamicEnable ? n ? n.dynamicEnable() : G(t) : e.detail.dynamicDisable && n && n.dynamicDisable()
            });
            for (const e of Object.keys(c.a))
                s.a.getAddonEnabled(e) && G(e)
        }.call(this, n(42))
    },
    1481: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return u
        })),
        n.d(t, "e", (function() {
            return b
        })),
        n.d(t, "c", (function() {
            return f
        })),
        n.d(t, "d", (function() {
            return y
        })),
        n.d(t, "a", (function() {
            return k
        })),
        n.d(t, "g", (function() {
            return N
        })),
        n.d(t, "f", (function() {
            return E
        }));
        var o = n(448);
        let s,
            r = !1,
            a = new WeakMap,
            i = !1,
            c = null;
        const l = new o.a;
        let d = Promise.resolve();
        const u = () => r,
            p = e => {
                if (e.updateMonitor || a.has(e))
                    return;
                const t = {
                    time: s.runtime.currentMSecs,
                    status: e.status
                };
                a.set(e, t),
                e.status = 1
            },
            g = e => {
                if (4 === e.status)
                    return;
                const t = a.get(e);
                t && 1 !== e.status && (t.status = e.status, e.status = 1)
            },
            h = e => {
                c = e
            },
            m = (e, t) => {
                e.timer && (e.timer.startTime += s.runtime.currentMSecs - t.time);
                const n = e.peekStackFrame();
                n && n.executionContext && n.executionContext.timer && (n.executionContext.timer.startTime += s.runtime.currentMSecs - t.time)
            },
            b = e => {
                const t = r !== e;
                if (t && (r = e, l.dispatchEvent(new CustomEvent("change"))), r) {
                    d = d.then(() => s.runtime.audioEngine.audioContext.suspend()),
                    s.runtime.ioDevices.clock._paused || s.runtime.ioDevices.clock.pause(),
                    s.runtime.threads.forEach(p);
                    const e = s.runtime.sequencer.activeThread;
                    e && (h(e), l.dispatchEvent(new CustomEvent("step")))
                }
                if (!r && t) {
                    d = d.then(() => s.runtime.audioEngine.audioContext.resume()),
                    s.runtime.ioDevices.clock.resume();
                    for (const e of s.runtime.threads) {
                        const t = a.get(e);
                        t && (m(e, t), e.status = t.status)
                    }
                    a = new WeakMap;
                    (e => {
                        const t = s.runtime.threads,
                            n = w(e);
                        if (-1 !== n)
                            for (let e = n; e < t.length; e++) {
                                const n = t[e],
                                    o = n.status;
                                0 !== o && 2 !== o && 3 !== o || (s.runtime.sequencer.activeThread = n, s.runtime.sequencer.stepThread(n))
                            }
                    })(c),
                    c = null
                }
            },
            f = e => {
                l.addEventListener("change", () => e(r))
            },
            y = e => {
                l.addEventListener("step", e)
            },
            k = () => c,
            M = e => {
                const t = a.get(e);
                return t ? t.status : e.status
            },
            w = e => e ? s.runtime.threads.findIndex(t => t.target === e.target && t.topBlock === e.topBlock && t.stackClick === e.stackClick && t.updateMonitor === e.updateMonitor) : -1,
            v = e => {
                const t = s.runtime.threads;
                for (let n = e; n < t.length; n++) {
                    const e = t[n];
                    if (e.updateMonitor)
                        continue;
                    if (e.isCompiled)
                        continue;
                    const o = M(e);
                    if (0 === o || 2 === o || 3 === o)
                        return p(e), e
                }
                return null
            },
            N = () => {
                if (c) {
                    const e = a.get(c);
                    m(c, e),
                    e.time = s.runtime.currentMSecs;
                    (e => {
                        if (4 === e.status)
                            return !1;
                        if (e.isCompiled)
                            return !1;
                        const t = e.peekStack();
                        if (!t && (e.popStack(), 0 === e.stack.length))
                            return e.status = 4, !1;
                        i = !0,
                        s.runtime.sequencer.activeThread = e;
                        const n = ["special error used by Scratch Addons for implementing single-stepping"];
                        Object.defineProperty(e, "blockGlowInFrame", {
                            set(e) {
                                throw n
                            }
                        });
                        try {
                            e.status = 0,
                            e.warpTimer && e.warpTimer.start();
                            try {
                                s.runtime.sequencer.stepThread(e)
                            } catch (e) {
                                if (e !== n)
                                    throw e
                            }
                            if (0 !== e.status)
                                return !1;
                            for (e.peekStack() === t && e.goToNextBlock(); !e.peekStack();) {
                                if (e.popStack(), 0 === e.stack.length)
                                    return e.status = 4, !1;
                                const t = e.peekStackFrame();
                                if (t.isLoop) {
                                    if (e.peekStackFrame().warpMode)
                                        continue;
                                    return !1
                                }
                                if (t.waitingReporter)
                                    return !1;
                                e.goToNextBlock()
                            }
                            return !0
                        } finally {
                            i = !1,
                            s.runtime.sequencer.activeThread = null,
                            Object.defineProperty(e, "blockGlowInFrame", {
                                value: t,
                                configurable: !0,
                                enumerable: !0,
                                writable: !0
                            }),
                            4 !== e.status && (e.status = 1)
                        }
                    })(c) || (c = v(w(c) + 1))
                }
                if (!c) {
                    h(v(0)),
                    s.runtime.ioDevices.clock._pausedTime += s.runtime.currentStepTime;
                    const e = s.runtime.audioEngine.audioContext;
                    for (const t of s.runtime.targets)
                        for (const n of Object.keys(t.sprite.soundBank.soundPlayers)) {
                            const o = t.sprite.soundBank.soundPlayers[n];
                            o.outputNode && (o.outputNode.stop(e.currentTime), o._createSource(), o.outputNode.start(e.currentTime, e.currentTime - o.startingUntil + s.runtime.currentStepTime / 1e3), o.startingUntil -= s.runtime.currentStepTime / 1e3)
                        }
                    for (const e of s.runtime.threads)
                        a.has(e) && (a.get(e).time += s.runtime.currentStepTime);
                    i = !0;
                    const t = s.runtime._hats;
                    for (const e in t) {
                        if (!Object.prototype.hasOwnProperty.call(t, e))
                            continue;
                        t[e].edgeActivated && s.runtime.startHats(e)
                    }
                    i = !1
                }
                l.dispatchEvent(new CustomEvent("step"))
            },
            E = e => {
                if (s)
                    return;
                s = e;
                const t = s.runtime.sequencer.stepThreads;
                s.runtime.sequencer.stepThreads = function() {
                    if (u())
                        for (const e of this.runtime.threads)
                            g(e);
                    return t.call(this)
                };
                const n = s.runtime.greenFlag;
                s.runtime.greenFlag = function() {
                    return b(!1), n.call(this)
                };
                const o = s.runtime.startHats;
                s.runtime.startHats = function(...e) {
                    const t = e[0],
                        n = "event_whenbroadcastreceived" === t || "control_start_as_clone" === t;
                    if (i) {
                        if (!n && !this.getIsEdgeActivatedHat(t))
                            return [];
                        const s = o.apply(this, e);
                        for (const e of s)
                            p(e);
                        return s
                    }
                    return r && !n ? [] : o.apply(this, e)
                };
                const c = s.runtime._getMonitorThreadCount;
                s.runtime._getMonitorThreadCount = function(e) {
                    let t = c.call(this, e);
                    if (r)
                        for (const n of e)
                            a.has(n) && t++;
                    return t
                }
            }
    },
    1484: function(e, t, n) {
        "use strict";
        function o(e) {
            return {
                r: parseInt(e.substring(1, 3), 16),
                g: parseInt(e.substring(3, 5), 16),
                b: parseInt(e.substring(5, 7), 16),
                a: e.length >= 9 ? parseInt(e.substring(7, 9), 16) / 255 : 1
            }
        }
        function s(e) {
            return 1 === (e = Math.round(e).toString(16)).length ? "0".concat(e) : e
        }
        function r(e) {
            const t = s(e.r),
                n = s(e.g),
                o = s(e.b),
                r = void 0 !== e.a ? s(255 * e.a) : "";
            return "#".concat(t).concat(n).concat(o).concat(r)
        }
        function a(e) {
            const {r: t, g: n, b: s} = o(e);
            return .299 * t + .587 * n + .114 * s
        }
        function i(e, t, n, o) {
            return "number" != typeof (o = void 0 !== o ? o : 170) && (o = a(o)), a(e) > o ? void 0 !== t ? t : "#575e75" : void 0 !== n ? n : "#ffffff"
        }
        function c(e, t) {
            const {r: n, g: s, b: a, a: i} = o(e);
            return void 0 === t.r && (t.r = 1), void 0 === t.g && (t.g = 1), void 0 === t.b && (t.b = 1), void 0 === t.a && (t.a = 1), r({
                r: t.r * n,
                g: t.g * s,
                b: t.b * a,
                a: t.a * i
            })
        }
        function l(e, t) {
            const {r: n, g: s, b: a} = o(e),
                {r: i, g: c, b: l, a: d} = o(t);
            return r({
                r: (1 - d) * n + d * i,
                g: (1 - d) * s + d * c,
                b: (1 - d) * a + d * l
            })
        }
        function d(e) {
            return e.substring(0, 7)
        }
        function u(e) {
            const {r: t, g: n, b: s} = o(e);
            return "url(\"data:image/svg+xml,\n    <svg xmlns='http://www.w3.org/2000/svg'>\n      <filter id='recolor'>\n        <feColorMatrix color-interpolation-filters='sRGB' values='\n          0 0 0 0 ".concat(t / 255, "\n          0 0 0 0 ").concat(n / 255, "\n          0 0 0 0 ").concat(s / 255, "\n          0 0 0 1 0\n        '/>\n      </filter>\n    </svg>#recolor\n  \")").split("\n").join("")
        }
        n.d(t, "c", (function() {
            return o
        })),
        n.d(t, "f", (function() {
            return i
        })),
        n.d(t, "b", (function() {
            return c
        })),
        n.d(t, "a", (function() {
            return l
        })),
        n.d(t, "e", (function() {
            return d
        })),
        n.d(t, "d", (function() {
            return u
        }))
    },
    1490: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        var o = n(1492);
        const s = {
            block: null,
            timerID: null
        };
        let r = [],
            a = [];
        class i {
            constructor(e)
            {
                this.addon = e,
                this.addon.tab.traps.getBlockly().then(e => {
                    this.blockly = e
                }),
                this.vm = this.addon.tab.traps.vm,
                this.offsetX = 32,
                this.offsetY = 32,
                this.navigationHistory = new c,
                this._workspace = null
            }
            getEditingTarget()
            {
                return this.vm.runtime.getEditingTarget()
            }
            setEditingTarget(e)
            {
                this.getEditingTarget().id !== e && this.vm.setEditingTarget(e)
            }
            getWorkspace()
            {
                const e = Blockly.getMainWorkspace();
                return e.getToolbox() && (this._workspace = e), this._workspace
            }
            scrollBlockIntoView(e)
            {
                var t;
                let n,
                    r = this.getWorkspace();
                if (e instanceof o.a ? (this.setEditingTarget(e.targetId), n = r.getBlockById(e.id)) : n = e && e.id ? e : r.getBlockById(e), !n)
                    return;
                let a = n.getRootBlock(),
                    i = this.getTopOfStackFor(n).getRelativeToSurfaceXY(),
                    c = a.getRelativeToSurfaceXY(),
                    l = r.scale,
                    d = c.x * l,
                    u = i.y * l,
                    p = n.width + d,
                    g = n.height + u,
                    h = r.getMetrics();
                if (d < h.viewLeft + this.offsetX - 4 || p > h.viewLeft + h.viewWidth || u < h.viewTop + this.offsetY - 4 || g > h.viewTop + h.viewHeight) {
                    let e = d - h.contentLeft - this.offsetX,
                        t = u - h.contentTop - this.offsetY;
                    this.navigationHistory.storeView(this.navigationHistory.peek(), 64),
                    r.scrollbar.set(e, t),
                    this.navigationHistory.storeView({
                        left: e,
                        top: t
                    }, 64)
                }
                null === (t = this.blockly) || void 0 === t || t.hideChaff(),
                class {
                    static flash(e)
                    {
                        s.timerID > 0 && (clearTimeout(s.timerID), s.block.svgPath_ && (s.block.svgPath_.style.fill = ""));
                        let t = 4,
                            n = !0;
                        s.block = e,
                        function e() {
                            s.block.svgPath_ && (s.block.svgPath_.style.fill = n ? "#ffff80" : ""),
                            n = !n,
                            t--,
                            t > 0 ? s.timerID = setTimeout(e, 200) : (s.timerID = 0, s.block = null)
                        }()
                    }
                }
                .flash(n)
            }
            getTopOfStackFor(e)
            {
                let t = e;
                for (; t.getOutputShape() && t.getSurroundParent();)
                    t = t.getSurroundParent();
                return t
            }
        }
        class c {
            storeView(e, t)
            {
                a = [];
                let n = Blockly.getMainWorkspace().getMetrics(),
                    o = {
                        left: n.viewLeft,
                        top: n.viewTop
                    };
                (!e || l(o, e) > t) && r.push(o)
            }
            peek()
            {
                return r.length > 0 ? r[r.length - 1] : null
            }
            goBack()
            {
                const e = Blockly.getMainWorkspace(),
                    t = e.getMetrics();
                let n = {
                        left: t.viewLeft,
                        top: t.viewTop
                    },
                    o = this.peek();
                if (!o)
                    return;
                if (l(n, o) < 64 && r.length > 1 && (r.pop(), a.push(o)), o = this.peek(), !o)
                    return;
                let s = o.left - t.contentLeft,
                    i = o.top - t.contentTop;
                e.scrollbar.set(s, i)
            }
            goForward()
            {
                let e = a.pop();
                if (!e)
                    return;
                r.push(e);
                let t = Blockly.getMainWorkspace(),
                    n = t.getMetrics(),
                    o = e.left - n.contentLeft,
                    s = e.top - n.contentTop;
                t.scrollbar.set(o, s)
            }
        }
        function l(e, t) {
            return Math.sqrt(Math.pow(e.left - t.left, 2) + Math.pow(e.top - t.top, 2))
        }
    },
    1492: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        class o {
            constructor(e, t)
            {
                this.targetId = e.id,
                this.id = t.id
            }
        }
    },
    1493: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return c
        })),
        n.d(t, "a", (function() {
            return l
        })),
        n.d(t, "b", (function() {
            return d
        })),
        n.d(t, "e", (function() {
            return u
        })),
        n.d(t, "d", (function() {
            return p
        })),
        n.d(t, "c", (function() {
            return g
        })),
        n.d(t, "g", (function() {
            return m
        }));
        let o = !1,
            s = null,
            r = 1,
            a = 1;
        const i = [],
            c = e => {
                s ? s.value = e : a = e,
                i.forEach(e => e())
            },
            l = () => s ? s.value : a,
            d = () => 0 === l(),
            u = e => {
                r = e
            },
            p = e => {
                e ? (u(l()), c(0)) : c(r)
            },
            g = e => {
                i.push(e)
            },
            h = e => {
                s = e.inputNode.gain,
                s.value = a
            },
            m = e => {
                if (o)
                    return;
                o = !0;
                const t = e.runtime.audioEngine;
                t ? h(t) : e.runtime.once("PROJECT_LOADED", () => {
                    h(e.runtime.audioEngine)
                })
            }
    },
    1505: function(e) {
        e.exports = JSON.parse('{"editor-devtools/clean-plus":"Clean up Blocks +","editor-devtools/copy-all":"Copy All","editor-devtools/copy-block":"Copy Block","editor-devtools/cut-block":"Cut Block","editor-devtools/lists":"lists","editor-devtools/make-space":"Make Space","editor-devtools/orphaned":"{count, plural, one {Developer tools: Delete 1 orphaned reporter block?} other {Developer tools: Delete # orphaned reporter blocks?} }","editor-devtools/paste":"Paste","editor-devtools/replace":"Developer tools: Switch all {name} in this sprite for the variable named:","editor-devtools/swap":"Swap {var} in Sprite","editor-devtools/unused-list":"{count, plural, one {Developer tools: Delete 1 unused local list? Here it is:\\n} other {Developer tools: Delete # unused local lists? Here they are:\\n} }","editor-devtools/unused-var":"{count, plural, one {Developer tools: Delete 1 unused local variable? Here it is:\\n} other {Developer tools: Delete # unused local variables? Here they are:\\n} }","editor-devtools/var-not-exist":"That variable does not exist...","editor-devtools/variables":"variables","find-bar/complex-broadcast":"(expression)","find-bar/find":"Find","find-bar/find-placeholder":"Find (Ctrl+F)","middle-click-popup/start-typing":"Start Typing...","editor-searchable-dropdowns/createBroadcast":"Create message \\"{name}\\"","editor-searchable-dropdowns/createGlobalList":"Create list \\"{name}\\" for all sprites","editor-searchable-dropdowns/createGlobalVariable":"Create variable \\"{name}\\" for all sprites","editor-searchable-dropdowns/createLocalList":"Create list \\"{name}\\" for this sprite only","editor-searchable-dropdowns/createLocalVariable":"Create variable \\"{name}\\" for this sprite only","data-category-tweaks-v2/for-all-sprites":"For all sprites:","data-category-tweaks-v2/for-this-sprite-only":"For this sprite only:","data-category-tweaks-v2/list-category":"Lists","hide-flyout/lock":"Lock Palette","hide-flyout/unlock":"Unlock Palette","mediarecorder/cancel":"Cancel","mediarecorder/click-flag":"Waiting...","mediarecorder/click-flag-description":"Click the green flag to start recording. Click this button to stop.","mediarecorder/option-title":"Record Options","mediarecorder/record":"Start Recording","mediarecorder/record-after-flag":"Do not start recording until the Green Flag is clicked","mediarecorder/record-audio":"Include project sounds","mediarecorder/record-audio-description":"This does not include Text-to-Speech.","mediarecorder/record-description":"Record the stage as a WebM file. You can save it to your computer after the recording is finished.","mediarecorder/record-duration":"Record Duration (in seconds)","mediarecorder/record-mic":"Include sounds from microphone","mediarecorder/record-until-stop":"Stop recording after the project has stopped","mediarecorder/record-until-stop-disabled":"You need to enable \\"{afterFlagOption}\\" to use this option.","mediarecorder/start":"Start","mediarecorder/start-delay":"Start Delay (in seconds)","mediarecorder/starting-in":"Starting in {secs}...","mediarecorder/stop":"Stop Recording","debugger/block-breakpoint":"breakpoint","debugger/block-error":"error %s","debugger/block-log":"log %s","debugger/block-warn":"warn %s","debugger/cannot-pause-player":"Breakpoint block can only be used while on the editor.","debugger/clear":"Clear","debugger/clone-of":"Clone of {sprite}","debugger/close":"Close","debugger/console":"Logs","debugger/debug":"Debug","debugger/empty-string":"(empty string)","debugger/enter-format":"Enter export format:","debugger/export":"Export","debugger/export-desc":"Click while holding Shift to customize export format.","debugger/icon-error":"Error","debugger/icon-warn":"Warning","debugger/log-msg-broadcasted":"Broadcasted \'{broadcast}\'.","debugger/log-msg-clone-cap":"Failed to create clone of \'{sprite}\', cannot create over 300 clones.","debugger/log-msg-clone-created":"Created clone of \'{sprite}\'.","debugger/log-msg-flag-clicked":"Green flag clicked.","debugger/no-logs":"There are no logs to display.","debugger/no-threads-running":"No threads running.","debugger/step":"Step","debugger/step-desc":"Executes one block.","debugger/tab-logs":"Logs","debugger/tab-threads":"Threads","debugger/thread":"Thread {id}","debugger/unknown-sprite":"(unknown sprite)","debugger/unpause":"Resume","pause/pause":"Pause","clones/clones":"clones: {cloneCount}","color-picker/hex":"hex color","remove-sprite-confirm/confirm":"Do you want to delete the sprite?","block-count/blocks":"{num, plural, one {1 block} other {# blocks}}","onion-skinning/behind":"Behind","onion-skinning/front":"Front","onion-skinning/layering":"Layering","onion-skinning/merge":"Merge","onion-skinning/mode":"Mode","onion-skinning/next":"Next costumes","onion-skinning/opacity":"Opacity (%)","onion-skinning/opacityStep":"Opacity step (%)","onion-skinning/previous":"Previous costumes","onion-skinning/settings":"Onion Skinning Settings","onion-skinning/tint":"Tint","onion-skinning/toggle":"Toggle Onion Skinning","2d-color-picker/shade":"Shade","better-img-uploads/upload":"HD Upload","variable-manager/for-all-sprites":"Variables for all sprites","variable-manager/for-this-sprite":"Variables for this sprite","variable-manager/search":"Search","variable-manager/variables":"Variables","search-sprites/placeholder":"Search sprites...","gamepad/axes-a-b":"Axes {a} & {b}","gamepad/axis-arrows":"Arrow Keys","gamepad/axis-cursor":"Cursor","gamepad/axis-custom":"Custom","gamepad/axis-none":"None","gamepad/browser-support":"This browser and operating system have known bugs that may make this addon difficult to use. Try another browser if you encounter problems.","gamepad/button-n":"Button {n}","gamepad/clear":"Clear all controls","gamepad/config-header":"This comment contains configuration for gamepad support in third-party tools or websites such as https://turbowarp.org/\\nDo not edit by hand","gamepad/key-click":"Click","gamepad/key-down":"Down","gamepad/key-enter":"Enter","gamepad/key-left":"Left","gamepad/key-none":"(none)","gamepad/key-right":"Right","gamepad/key-space":"Space","gamepad/key-up":"Up","gamepad/keyinput-title":"Click and press a key or click to change button. Escape to cancel. Backspace or delete to clear.","gamepad/no-controllers":"No controllers detected. Try plugging one in and pressing a button on it.","gamepad/reset":"Reset all controls to project defaults","gamepad/settings":"Gamepad Settings","gamepad/store-in-project":"Store these settings in the project to override the default configuration (Experimental tool for project creators)","folders/add-to-folder":"add to folder: {folder}","folders/closed-folder":"Folder","folders/confirm-backpack-folder":"Save entire folder to backpack?","folders/create-folder":"create folder","folders/name-not-allowed":"Invalid folder name","folders/name-prompt":"Name of folder:","folders/name-prompt-title":"Create Folder","folders/open-folder":"Opened","folders/remove-folder":"remove folder","folders/remove-from-folder":"remove from folder","folders/rename-folder":"rename folder","folders/rename-folder-prompt":"Rename folder to:","folders/rename-folder-prompt-title":"Rename Folder","block-switching/control_forever":"forever","block-switching/control_if":"if","block-switching/control_if_else":"if... else","block-switching/control_repeat_until":"repeat until","block-switching/control_wait_until":"wait until","block-switching/data_changevariableby":"change variable","block-switching/data_hidelist":"hide list","block-switching/data_hidevariable":"hide variable","block-switching/data_insertatlist":"insert item","block-switching/data_replaceitemoflist":"replace item","block-switching/data_setvariableto":"set variable","block-switching/data_showlist":"show list","block-switching/data_showvariable":"show variable","block-switching/debugger_error":"error","block-switching/debugger_log":"log","block-switching/debugger_warn":"warn","block-switching/event_broadcast":"broadcast","block-switching/event_broadcastandwait":"broadcast and wait","block-switching/looks_backdropnumbername":"backdrop number or name","block-switching/looks_changeeffectby":"change effect","block-switching/looks_changesizeby":"change size","block-switching/looks_costumenumbername":"costume number or name","block-switching/looks_hide":"hide","block-switching/looks_nextbackdrop":"next backdrop","block-switching/looks_nextcostume":"next costume","block-switching/looks_say":"say","block-switching/looks_sayforsecs":"say for seconds","block-switching/looks_seteffectto":"set effect","block-switching/looks_setsizeto":"set size","block-switching/looks_show":"show","block-switching/looks_switchbackdropto":"switch backdrop","block-switching/looks_switchbackdroptoandwait":"switch backdrop and wait","block-switching/looks_think":"think","block-switching/looks_thinkforsecs":"think for seconds","block-switching/motion_changexby":"change x","block-switching/motion_changeyby":"change y","block-switching/motion_setx":"set x","block-switching/motion_sety":"set y","block-switching/motion_turnleft":"turn left","block-switching/motion_turnright":"turn right","block-switching/motion_xposition":"x position","block-switching/motion_yposition":"y position","block-switching/music_changeTempo":"change tempo","block-switching/music_setTempo":"set tempo","block-switching/operator_add":"+","block-switching/operator_and":"and","block-switching/operator_divide":"/","block-switching/operator_equals":"=","block-switching/operator_gt":">","block-switching/operator_lt":"<","block-switching/operator_mod":"mod","block-switching/operator_multiply":"*","block-switching/operator_or":"or","block-switching/operator_subtract":"-","block-switching/pen_changePenColorParamBy":"change parameter","block-switching/pen_changePenHueBy":"change hue","block-switching/pen_changePenShadeBy":"change shade","block-switching/pen_changePenSizeBy":"change size","block-switching/pen_penDown":"pen down","block-switching/pen_penUp":"pen up","block-switching/pen_setPenColorParamTo":"set parameter","block-switching/pen_setPenHueToNumber":"set hue","block-switching/pen_setPenShadeToNumber":"set shade","block-switching/pen_setPenSizeTo":"set size","block-switching/sensing_mousex":"mouse x","block-switching/sensing_mousey":"mouse y","block-switching/sound_changeeffectby":"change effect","block-switching/sound_changevolumeby":"change volume","block-switching/sound_play":"start","block-switching/sound_playuntildone":"play until done","block-switching/sound_seteffectto":"set effect","block-switching/sound_setvolumeto":"set volume","blocks2image/error_blocks_not_added":"Add blocks to workspace!","blocks2image/export_all_to_PNG":"Export all as PNG","blocks2image/export_all_to_SVG":"Export all as SVG","blocks2image/export_selected_to_PNG":"Export block as PNG","blocks2image/export_selected_to_SVG":"Export block as SVG","editor-extra-keys/enter-key":"enter","move-to-top-bottom/bottom":"move to bottom","move-to-top-bottom/top":"move to top","rename-broadcasts/RENAME_BROADCAST":"Rename message","rename-broadcasts/RENAME_BROADCAST_MODAL_TITLE":"Rename Message","rename-broadcasts/RENAME_BROADCAST_TITLE":"Rename all \\"{name}\\" messages to:","swap-local-global/cant-convert-cloud":"Cloud variables can\'t be converted to this sprite only.","swap-local-global/cant-convert-conflict":"Can\'t convert because it would conflict with variables in another sprite: {sprites}","swap-local-global/cant-convert-stage":"The stage can\'t have variables for this sprite only.","swap-local-global/cant-convert-to-local":"Can\'t convert because it\'s used by multiple sprites: {sprites}","swap-local-global/cant-convert-used-elsewhere":"Can\'t convert because it\'s used by another sprite: {sprite}","swap-local-global/edit":"Edit properties:","swap-local-global/edit-list-header":"Edit List","swap-local-global/edit-list-option":"Rename or edit list","swap-local-global/edit-variable-header":"Edit Variable","swap-local-global/edit-variable-option":"Rename or edit variable","swap-local-global/to-global":"Convert to \\"For all sprites\\"","swap-local-global/to-local":"Convert to \\"For this sprite only\\"","hide-stage/hide-stage":"Hide stage"}')
    },
    1506: function(e, t, n) {
        "use strict";
        t.a = {
            de: () => n.e(54).then(n.t.bind(null, 1514, 3)),
            es: () => n.e(55).then(n.t.bind(null, 1515, 3)),
            fr: () => n.e(56).then(n.t.bind(null, 1516, 3)),
            hu: () => n.e(57).then(n.t.bind(null, 1517, 3)),
            it: () => n.e(58).then(n.t.bind(null, 1518, 3)),
            ja: () => n.e(59).then(n.t.bind(null, 1519, 3)),
            ko: () => n.e(60).then(n.t.bind(null, 1520, 3)),
            nl: () => n.e(61).then(n.t.bind(null, 1521, 3)),
            pl: () => n.e(62).then(n.t.bind(null, 1522, 3)),
            pt: () => n.e(63).then(n.t.bind(null, 1523, 3)),
            ro: () => n.e(64).then(n.t.bind(null, 1524, 3)),
            ru: () => n.e(65).then(n.t.bind(null, 1525, 3)),
            sl: () => n.e(66).then(n.t.bind(null, 1526, 3)),
            tr: () => n.e(67).then(n.t.bind(null, 1527, 3)),
            "zh-tw": () => n.e(68).then(n.t.bind(null, 1528, 3))
        }
    },
    1507: function(e, t, n) {
        "use strict";
        t.a = {
            "cat-blocks": () => n.e(10).then(n.bind(null, 1621)),
            "editor-devtools": () => n.e(4).then(n.bind(null, 1607)),
            "find-bar": () => n.e(4).then(n.bind(null, 1613)),
            "middle-click-popup": () => n.e(4).then(n.bind(null, 1622)),
            "jump-to-def": () => n(1619),
            "editor-searchable-dropdowns": () => n.e(4).then(n.bind(null, 1623)),
            "data-category-tweaks-v2": () => n.e(16).then(n.bind(null, 1624)),
            "block-palette-icons": () => n.e(8).then(n.bind(null, 1532)),
            "hide-flyout": () => n.e(31).then(n.bind(null, 1610)),
            mediarecorder: () => n.e(36).then(n.bind(null, 1625)),
            "drag-drop": () => n(1620),
            debugger: () => n.e(17).then(n.bind(null, 1604)),
            pause: () => n(1608),
            "mute-project": () => n(1609),
            "vol-slider": () => n.e(52).then(n.bind(null, 1626)),
            clones: () => n.e(11).then(n.bind(null, 1627)),
            "mouse-pos": () => n.e(37).then(n.bind(null, 1628)),
            "color-picker": () => n.e(4).then(n.bind(null, 1614)),
            "remove-sprite-confirm": () => n.e(42).then(n.bind(null, 1629)),
            "block-count": () => n.e(7).then(n.bind(null, 1630)),
            "onion-skinning": () => n.e(4).then(n.bind(null, 1606)),
            "default-costume-editor-color": () => n.e(18).then(n.bind(null, 1631)),
            "bitmap-copy": () => n.e(4).then(n.bind(null, 1632)),
            "2d-color-picker": () => n.e(5).then(n.bind(null, 1611)),
            "better-img-uploads": () => n.e(6).then(n.bind(null, 1615)),
            "pick-colors-from-stage": () => n.e(4).then(n.bind(null, 1633)),
            "custom-block-shape": () => n.e(13).then(n.bind(null, 1634)),
            "zebra-striping": () => n.e(53).then(n.bind(null, 1635)),
            "editor-theme3": () => n.e(27).then(n.bind(null, 1636)),
            "custom-block-text": () => n.e(14).then(n.bind(null, 1569)),
            "editor-colored-context-menus": () => n.e(22).then(n.bind(null, 1637)),
            "editor-stage-left": () => n.e(25).then(n.bind(null, 1638)),
            "editor-buttons-reverse-order": () => n.e(21).then(n.bind(null, 1574)),
            "variable-manager": () => n.e(51).then(n.bind(null, 1612)),
            "search-sprites": () => n.e(44).then(n.bind(null, 1639)),
            gamepad: () => n.e(29).then(n.bind(null, 1605)),
            "editor-sounds": () => n.e(24).then(n.bind(null, 1640)),
            folders: () => n.e(4).then(n.bind(null, 1616)),
            "block-switching": () => n.e(4).then(n.bind(null, 1617)),
            "load-extensions": () => n.e(35).then(n.bind(null, 1641)),
            "custom-zoom": () => n.e(15).then(n.bind(null, 1642)),
            "initialise-sprite-position": () => n.e(34).then(n.bind(null, 1643)),
            blocks2image: () => n.e(9).then(n.bind(null, 1644)),
            "remove-curved-stage-border": () => n.e(41).then(n.bind(null, 1584)),
            "transparent-orphans": () => n.e(46).then(n.bind(null, 1586)),
            "paint-by-default": () => n.e(40).then(n.bind(null, 1645)),
            "block-cherry-picking": () => n.e(4).then(n.bind(null, 1646)),
            "hide-new-variables": () => n.e(32).then(n.bind(null, 1647)),
            "editor-extra-keys": () => n.e(23).then(n.bind(null, 1648)),
            "hide-delete-button": () => n.e(30).then(n.bind(null, 1588)),
            "no-script-bumping": () => n.e(38).then(n.bind(null, 1649)),
            "disable-stage-drag-select": () => n.e(20).then(n.bind(null, 1650)),
            "move-to-top-bottom": () => n.e(4).then(n.bind(null, 1651)),
            "disable-paste-offset": () => n.e(19).then(n.bind(null, 1652)),
            "block-duplicate": () => n.e(4).then(n.bind(null, 1653)),
            "rename-broadcasts": () => n.e(4).then(n.bind(null, 1654)),
            "swap-local-global": () => n.e(45).then(n.bind(null, 1655)),
            "editor-comment-previews": () => n.e(4).then(n.bind(null, 1656)),
            columns: () => n.e(12).then(n.bind(null, 1657)),
            "number-pad": () => n.e(39).then(n.bind(null, 1658)),
            "script-snap": () => n.e(43).then(n.bind(null, 1659)),
            fullscreen: () => n.e(28).then(n.bind(null, 1660)),
            "hide-stage": () => n.e(33).then(n.bind(null, 1618)),
            "tw-straighten-comments": () => n.e(50).then(n.bind(null, 1661)),
            "tw-remove-backpack": () => n.e(48).then(n.bind(null, 1662)),
            "tw-remove-feedback": () => n.e(49).then(n.bind(null, 1602)),
            "tw-disable-compiler": () => n.e(47).then(n.bind(null, 1663)),
            "editor-stepping": () => n.e(26).then(n.bind(null, 1664))
        }
    },
    1508: function(e, t, n) {
        (e.exports = n(9)(!1)).push([e.i, '/* Based on the `stage-selector_raised` class */\ndiv[class*="stage-selector_header_"],\ndiv[class*="sprite-selector_sprite-selector"],\ndiv[class*="sprite-info_sprite-info"],\ndiv[class*="monitor_list-body"] {\n  transition: background-color 0.25s ease;\n}\n.sa-dragged-over,\n.sa-dragged-over div[class*="stage-selector_header_"],\n.sa-dragged-over div[class*="sprite-info_sprite-info"],\n.sa-dragged-over div[class*="monitor_list-body"] {\n  background-color: hsla(0, 100%, 77%, 1) !important;\n}\n', ""])
    },
    1509: function(e, t, n) {
        (e.exports = n(9)(!1)).push([e.i, ".pause-btn {\n  width: 2rem;\n  height: 2rem;\n  padding: 0.375rem;\n  border-radius: 0.25rem;\n  user-select: none;\n  user-drag: none;\n  cursor: pointer;\n}\n\n.pause-btn:hover {\n  background-color: hsla(0, 100%, 65%, 0.15);\n}\n", ""])
    },
    1510: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, o)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    r(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, "a", (function() {
            return u
        }));
        let a = !1,
            i = !1,
            c = [];
        const l = function(e) {
                var t,
                    n,
                    o,
                    r,
                    a,
                    l;
                if (!e.target)
                    return;
                const d = e.target.closest(".react-contextmenu-wrapper");
                if (!d)
                    return;
                let u,
                    p = d.querySelector("nav.react-contextmenu");
                const g = {};
                if (null === (t = d[this.traps.getInternalKey(d)]) || void 0 === t || null === (n = t.return) || void 0 === n || null === (o = n.return) || void 0 === o || null === (r = o.return) || void 0 === r || null === (a = r.stateNode) || void 0 === a || null === (l = a.props) || void 0 === l || !l.dragType)
                    return;
                {
                    const e = d[this.traps.getInternalKey(d)].return.return.return.stateNode.props;
                    u = e.dragType.toLowerCase(),
                    g.name = e.name,
                    g.itemId = e.id,
                    g.index = e.index
                }
                const h = s({
                    menuItem: p,
                    target: d,
                    type: u
                }, g);
                Array.from(p.children).forEach(e => {
                    e.classList.contains("sa-ctx-menu") && e.remove()
                });
                for (const e of i ? c.flatMap(e => "function" == typeof e ? e(u, h) : e) : c) {
                    if (!e)
                        continue;
                    if (e.types && !e.types.some(e => u === e))
                        continue;
                    if (e.condition && !e.condition(h))
                        continue;
                    const t = document.createElement("div"),
                        n = ["context-menu_menu-item"];
                    e.border && n.push("context-menu_menu-item-bordered"),
                    e.dangerous && n.push("context-menu_menu-item-danger"),
                    t.className = this.scratchClass(...n, {
                        others: ["react-contextmenu-item", "sa-ctx-menu", e.className || ""]
                    });
                    const o = document.createElement("span");
                    o.textContent = e.label,
                    t.append(o),
                    this.displayNoneWhileDisabled(t, {
                        display: "block"
                    }),
                    t.addEventListener("click", t => {
                        t.stopPropagation(),
                        window.dispatchEvent(new CustomEvent("REACT_CONTEXTMENU_HIDE", {
                            detail: {
                                action: "REACT_CONTEXTMENU_HIDE"
                            }
                        })),
                        e.callback(h)
                    }),
                    this.appendToSharedSpace({
                        space: e.position,
                        order: e.order,
                        scope: p,
                        element: t
                    })
                }
            },
            d = e => {
                a || (a = !0, document.body.addEventListener("contextmenu", t => l.call(e, t), {
                    capture: !0
                }))
            },
            u = (e, t, n) => {
                void 0 === n ? (c.push(t), i = !0) : c.push(s(s({}, n), {}, {
                    callback: t
                })),
                d(e)
            }
    },
    1511: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        })),
        n.d(t, "a", (function() {
            return l
        })),
        n.d(t, "c", (function() {
            return d
        }));
        var o = n(163),
            s = n.n(o),
            r = n(1512),
            a = n.n(r);
        const i = (e, t, {isOpen: n=!1}={}) => {
                const o = Object.assign(document.createElement("div"), {
                    className: e.scratchClass("modal_modal-overlay"),
                    dir: e.direction
                });
                o.style.display = n ? "" : "none",
                document.body.appendChild(o);
                const r = Object.assign(document.createElement("div"), {
                    className: e.scratchClass("modal_modal-content")
                });
                r.addEventListener("click", e => e.stopPropagation()),
                o.appendChild(r);
                const i = Object.assign(document.createElement("div"), {
                    className: e.scratchClass("modal_header")
                });
                r.appendChild(i),
                i.appendChild(Object.assign(document.createElement("div"), {
                    className: e.scratchClass("modal_header-item", "modal_header-item-title"),
                    innerText: t
                }));
                const c = Object.assign(document.createElement("div"), {
                    className: e.scratchClass("modal_header-item", "modal_header-item-close")
                });
                i.appendChild(c);
                const l = Object.assign(document.createElement("div"), {
                    className: e.scratchClass("close-button_close-button", "close-button_large")
                });
                c.appendChild(l),
                l.appendChild(Object.assign(document.createElement("img"), {
                    className: e.scratchClass("close-button_close-icon"),
                    src: s.a
                }));
                const d = Object.assign(document.createElement("div"), {
                    className: a.a.modalContent
                });
                return r.appendChild(d), {
                    container: r,
                    content: d,
                    backdrop: o,
                    closeButton: l,
                    open: () => {
                        o.style.display = ""
                    },
                    close: () => {
                        o.style.display = "none"
                    },
                    remove: o.remove.bind(o)
                }
            },
            c = e => {
                const t = Object.assign(document.createElement("div"), {
                        className: e.scratchClass("prompt_button-row")
                    }),
                    n = Object.assign(document.createElement("button"), {
                        className: e.scratchClass("prompt_cancel-button"),
                        innerText: e.scratchMessage("gui.prompt.cancel")
                    });
                t.appendChild(n);
                const o = Object.assign(document.createElement("button"), {
                    className: e.scratchClass("prompt_ok-button"),
                    innerText: e.scratchMessage("gui.prompt.ok")
                });
                return t.appendChild(o), {
                    buttonRow: t,
                    cancelButton: n,
                    okButton: o
                }
            },
            l = (e, t, n, {useEditorClasses: o=!1}={}) => {
                const {remove: s, container: r, content: a, backdrop: i, closeButton: l} = e.createModal(t, {
                        isOpen: !0,
                        useEditorClasses: o,
                        useSizesClass: !0
                    }),
                    d = null !== e.editorMode && o ? "editor" : e.clientVersion;
                "editor" === d && (r.classList.add(e.scratchClass("prompt_modal-content")), a.classList.add(e.scratchClass("prompt_body"))),
                a.appendChild(Object.assign(document.createElement("div"), {
                    className: e.scratchClass("prompt_label"),
                    innerText: n
                }));
                const {buttonRow: u, cancelButton: p, okButton: g} = c(e);
                return a.appendChild(u), g.focus(), new Promise(e => {
                    const t = () => {
                            s(),
                            e(!1)
                        },
                        n = () => {
                            s(),
                            e(!0)
                        };
                    i.addEventListener("click", t),
                    l.addEventListener("click", t),
                    p.addEventListener("click", t),
                    g.addEventListener("click", n),
                    r.addEventListener("keydown", e => {
                        "Enter" === e.key && n(),
                        "Escape" === e.key && t()
                    })
                })
            },
            d = (e, t, n, o="", {useEditorClasses: s=!1}={}) => {
                const {remove: r, container: a, content: i, backdrop: l, closeButton: d} = e.createModal(t, {
                    isOpen: !0,
                    useEditorClasses: s,
                    useSizesClass: !0
                });
                a.classList.add(e.scratchClass("prompt_modal-content")),
                i.classList.add(e.scratchClass("prompt_body")),
                i.appendChild(Object.assign(document.createElement("div"), {
                    className: e.scratchClass("prompt_label"),
                    innerText: n
                }));
                const u = Object.assign(document.createElement("input"), {
                    className: e.scratchClass("prompt_variable-name-text-input"),
                    value: o
                });
                i.appendChild(u),
                u.focus(),
                u.select();
                const {buttonRow: p, cancelButton: g, okButton: h} = c(e);
                return i.appendChild(p), new Promise(e => {
                    const t = () => {
                            r(),
                            e(null)
                        },
                        n = () => {
                            r(),
                            e(u.value)
                        };
                    l.addEventListener("click", t),
                    d.addEventListener("click", t),
                    g.addEventListener("click", t),
                    h.addEventListener("click", n),
                    a.addEventListener("keydown", e => {
                        "Enter" === e.key && n(),
                        "Escape" === e.key && t()
                    })
                })
            }
    },
    1512: function(e, t, n) {
        var o = n(1513);
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var s = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(10)(o, s);
        o.locals && (e.exports = o.locals)
    },
    1513: function(e, t, n) {
        (t = e.exports = n(9)(!1)).push([e.i, '.modal_modal-content_fN1pD {\n  background-color: white;\n  color: #575e75;\n}\n[theme="dark"] .modal_modal-content_fN1pD {\n  background-color: var(--ui-primary);\n  color: var(--text-primary);\n}\n', ""]),
        t.locals = {
            "modal-content": "modal_modal-content_fN1pD",
            modalContent: "modal_modal-content_fN1pD"
        }
    },
    1608: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "resources", (function() {
            return r
        }));
        var o = n(1481);
        var s = n(1509);
        const r = {
            "userscript.js": async function({addon: e, console: t, msg: n}) {
                Object(o.f)(e.tab.traps.vm);
                const s = document.createElement("img");
                s.className = "pause-btn",
                s.draggable = !1,
                s.title = n("pause");
                const r = () => s.src = (e => {
                    if ("/pause.svg" === e)
                        return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCI+PHBhdGggZD0iTTIzMS40MjkgMTg4LjkyOVYxNzEuMDdoNC4yODV2MTcuODU4em0xMi4xNDIgMFYxNzEuMDdoNC4yODZ2MTcuODU4eiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzMwOSAwIDAgLjk1NDI3IC0yMzguNTczIC0xNjIuNzY5KSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSIjZmZhZTAwIiBzdHJva2U9IiNkODk0MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjwvc3ZnPg==";
                    if ("/play.svg" === e)
                        return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCI+PHBhdGggZD0ibTI0Ni4wNTUgMTgwLTEyLjExIDEyLjExdi0yNC4yMnoiIHRyYW5zZm9ybT0ibWF0cml4KDEuMTM5NDkgMCAwIC42Nzk0MyAtMjY0LjU5NSAtMTEzLjI5OCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZDg5NDAwIiBmaWxsPSIjZmZhZTAwIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iLz48L3N2Zz4=";
                    throw new Error("Unknown asset: ".concat(e))
                })(Object(o.b)() ? "/play.svg" : "/pause.svg");
                for (s.addEventListener("click", () => Object(o.e)(!Object(o.b)())), e.tab.displayNoneWhileDisabled(s), e.self.addEventListener("disabled", () => Object(o.e)(!1)), r(), Object(o.c)(r);;)
                    await e.tab.waitForElement("[class^='green-flag']", {
                        markAsSeen: !0,
                        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
                    }),
                    e.tab.appendToSharedSpace({
                        space: "afterGreenFlag",
                        element: s,
                        order: 0
                    })
            },
            "style.css": n.n(s).a
        }
    },
    1609: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "resources", (function() {
            return s
        }));
        var o = n(1493);
        const s = {
            "userscript.js": async function({addon: e, console: t}) {
                const n = e.tab.traps.vm;
                Object(o.g)(n);
                const s = document.createElement("img");
                s.loading = "lazy",
                s.src = (e => {
                    if ("/icon--mute.svg" === e)
                        return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0xMSy9zY3JhdGNoLWd1aS8gLS0+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU291bmQvRWZmZWN0cy9NdXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg==";
                    if ("/mute.svg" === e)
                        return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU291bmQvRWZmZWN0cy9NdXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg==";
                    throw new Error("Unknown asset: ".concat(e))
                })("/mute.svg"),
                s.className = "sa-mute-project-icon",
                s.style.userSelect = "none",
                e.tab.displayNoneWhileDisabled(s);
                const r = () => {
                    s.style.display = e.self.disabled || !Object(o.b)() ? "none" : ""
                };
                Object(o.c)(r),
                r();
                const a = t => {
                    e.self.disabled || !t.ctrlKey && !t.metaKey || (t.cancelBubble = !0, t.preventDefault(), Object(o.d)(!Object(o.b)()))
                };
                for (e.self.addEventListener("disabled", () => {
                    Object(o.b)() && Object(o.d)(!1)
                });;) {
                    let t = await e.tab.waitForElement("[class^='green-flag_green-flag']", {
                        markAsSeen: !0,
                        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
                    });
                    e.tab.appendToSharedSpace({
                        space: "afterStopButton",
                        element: s,
                        order: 0
                    }),
                    t.addEventListener("click", a),
                    t.addEventListener("contextmenu", a)
                }
            }
        }
    },
    1619: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "resources", (function() {
            return s
        }));
        var o = n(1490);
        const s = {
            "userscript.js": async function({addon: e, msg: t, console: n}) {
                const s = new o.a(e),
                    r = await e.tab.traps.getBlockly();
                Object.defineProperty(r.Gesture.prototype, "jumpToDef", {
                    get: () => !e.self.disabled
                });
                const a = r.Gesture.prototype.doBlockClick_;
                r.Gesture.prototype.doBlockClick_ = function() {
                    if (!e.self.disabled && (1 === this.mostRecentEvent_.button || this.mostRecentEvent_.shiftKey)) {
                        let e = this.startBlock_;
                        for (; e; e = e.getSurroundParent())
                            if ("procedures_call" === e.type) {
                                let t = e.getProcCode(),
                                    n = s.getWorkspace().getTopBlocks();
                                for (const e of n)
                                    if ("procedures_definition" === e.type) {
                                        let n = e.getChildren()[0].getProcCode();
                                        if (n && n === t)
                                            return void s.scrollBlockIntoView(e)
                                    }
                            }
                    }
                    a.call(this)
                }
            }
        }
    },
    1620: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "resources", (function() {
            return s
        }));
        var o = n(1508);
        const s = {
            "userscript.js": async function({addon: e, console: t}) {
                const n = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                document.addEventListener("dragover", o => {
                    if (e.self.disabled)
                        return;
                    if (!o.dataTransfer.types.includes("Files"))
                        return;
                    let s,
                        r;
                    if ((s = o.target.closest('div[class*="sprite-selector_sprite-selector"]')) || (s = o.target.closest('div[class*="stage-selector_stage-selector"]')) || (s = o.target.closest('div[class*="selector_wrapper"]')) ? r = t => {
                        const n = e.settings.get("use-hd-upload") ? "" : ":not(.sa-better-img-uploads-input)",
                            o = s.querySelector('input[class*="action-menu_file-input"]' + n);
                        o.files = t,
                        o.dispatchEvent(new Event("change", {
                            bubbles: !0
                        }))
                    } : (s = o.target.closest('div[class*="monitor_list-monitor"]')) ? r = e => {
                        const n = document.querySelector("body > .react-contextmenu.react-contextmenu--visible");
                        s.dispatchEvent(new MouseEvent("contextmenu", {
                            bubbles: !0
                        }));
                        const o = document.querySelector("body > .react-contextmenu.react-contextmenu--visible"),
                            r = null === o ? n : o;
                        r.style.display = "none";
                        const a = document.body.appendChild;
                        document.body.appendChild = n => {
                            if (document.body.appendChild = a, !(n instanceof HTMLInputElement))
                                return t.error('File input was not immediately given to appendChild upon clicking "Import"!'), a(n);
                            document.body.appendChild(n),
                            n.click = () => {},
                            n.files = e,
                            n.dispatchEvent(new Event("change")),
                            window.requestAnimationFrame(() => {
                                window.requestAnimationFrame(() => {
                                    r.style.display = null,
                                    r.style.opacity = 0,
                                    r.style.pointerEvents = "none"
                                })
                            })
                        },
                        r.children[0].click()
                    } : (s = o.target.closest('div[class*="question_question-input"] > input[class*="input_input-form_l9eYg"]')) && (r = async e => {
                        const t = (await Promise.all(Array.from(e, e => e.text()))).join("").replace(/[\r\n]+$/, "").replace(/\r?\n|\r/g, " "),
                            o = s.selectionStart;
                        ((e, t) => {
                            n.call(e, t),
                            e.dispatchEvent(new Event("change", {
                                bubbles: !0
                            }))
                        })(s, s.value.slice(0, o) + t + s.value.slice(s.selectionEnd)),
                        s.setSelectionRange(o, o + t.length)
                    }), !s)
                        return;
                    if (o.preventDefault(), s.classList.contains("sa-dragged-over"))
                        return;
                    s.classList.add("sa-dragged-over");
                    const a = e => {
                            e.preventDefault(),
                            l(),
                            e.dataTransfer.types.includes("Files") && e.dataTransfer.files.length > 0 && r(e.dataTransfer.files)
                        },
                        i = e => {
                            e.preventDefault(),
                            e.dataTransfer.dropEffect = "copy"
                        };
                    o.dataTransfer.dropEffect = "copy";
                    const c = e => {
                            e.preventDefault(),
                            l()
                        },
                        l = () => {
                            s.classList.remove("sa-dragged-over"),
                            s.removeEventListener("dragover", i),
                            s.removeEventListener("dragleave", c),
                            s.removeEventListener("drop", a)
                        };
                    s.addEventListener("dragover", i),
                    s.addEventListener("dragleave", c),
                    s.addEventListener("drop", a)
                }, {
                    useCapture: !0
                })
            },
            "dragged-over.css": n.n(o).a
        }
    },
    842: function(e, t) {
        Blob.prototype.text || (Blob.prototype.text = function() {
            return new Promise((e, t) => {
                const n = new FileReader;
                n.onload = () => e(n.result),
                n.onerror = () => t(new Error("Cannot read blob as text")),
                n.readAsText(this)
            })
        }),
        Array.prototype.flat || (Array.prototype.flat = function(e=1) {
            const t = [];
            for (const n of this)
                if (Array.isArray(n))
                    if (e < 1)
                        t.push(n);
                    else
                        for (const o of n.flat(e - 1))
                            t.push(o);
                else
                    t.push(n);
            return t
        }),
        "function" != typeof queueMicrotask && (window.queueMicrotask = e => {
            Promise.resolve().then(e)
        })
    }
}]);
