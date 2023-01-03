(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[31], {
    1545: function(e, t, o) {
        (e.exports = o(9)(!1)).push([e.i, '[class*="gui_tabs_"] {\n  /* overridden by other addons */\n  --sa-category-width: 60px;\n  --sa-flyout-width: 250px;\n}\n\n/* The default left-side border does not work properly when a block is being dragged, */\n/* which lets a 1 pixel column of the flyout be visible. */\n/* To fix this we use two elements that are only visible when a block is being dragged. */\n/* The first element is opaque to cover up the contents with the background color. */\n/* The other element is the transparent border color. */\n.sa-flyout-border-1,\n.sa-flyout-border-2 {\n  position: absolute;\n  /* Above flyout but below add extension button */\n  z-index: 40;\n  top: 0;\n  bottom: 8px;\n  left: -1px;\n}\n[dir="rtl"] .sa-flyout-border-1,\n[dir="rtl"] .sa-flyout-border-2 {\n  left: auto;\n  right: -1px;\n}\n.sa-flyout-border-1 {\n  border-left: 1px solid var(--ui-primary, hsla(215, 100%, 95%, 1));\n}\n.sa-flyout-border-2 {\n  border-left: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n}\n\n.blocklyFlyout,\n.blocklyFlyoutScrollbar {\n  transition-property: margin;\n}\n\n[dir="ltr"] .blocklyFlyout.sa-flyoutClose,\n[dir="ltr"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(0px - var(--sa-flyout-width) - 10px);\n}\n\n[dir="rtl"] .blocklyFlyout.sa-flyoutClose,\n[dir="rtl"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(var(--sa-flyout-width) + 10px);\n}\n\n.sa-flyout-placeHolder {\n  display: var(--hideFlyout-placeholderDisplay) !important;\n  position: absolute;\n  height: 100%;\n  width: calc(var(--sa-flyout-width) + 1px);\n  top: 0;\n}\n\n[dir="ltr"] .sa-flyout-placeHolder {\n  left: calc(var(--sa-category-width) + 1px);\n}\n\n[dir="rtl"] .sa-flyout-placeHolder {\n  right: calc(var(--sa-category-width) + 1px);\n}\n\n.sa-lock-object {\n  display: var(--hideFlyout-lockDisplay) !important;\n  transform: translate(calc(var(--sa-flyout-width) - 15px - 32px), 3px);\n  width: 32px;\n  height: 32px;\n}\n[dir="rtl"] .sa-lock-object {\n  transform: translate(15px, 3px);\n}\n\n.sa-lock-button {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--ui-primary, white);\n  border: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n}\n\n.sa-lock-object.locked .sa-lock-button {\n  background-color: #ff4c4c;\n  border-color: #cc4c4c;\n}\n\n.sa-lock-button img {\n  width: 20px;\n}\n\n[theme="dark"] .sa-lock-button img {\n  filter: brightness(200%);\n}\n\n.sa-hide-flyout-not-fullscreen [class*="gui_body-wrapper_" ] [class*="gui_stage-and-target-wrapper"] {\n  position: relative;\n  /* We need to be above these to hide the flyout while dragging blocks: */\n  /* .blocklyFlyout (z-index: 20) */\n  /* .blocklyFlyoutScrollbar (z-index: 30) */\n  /* and above these so that dragged sprites aren\'t obscured: */\n  /* .blocklyToolboxDiv (z-index: 40) */\n  /* .gui_extension-button-container_b4rCs (z-index: 42) */\n  z-index: 43;\n  padding-inline: 0.5rem;\n  background-color: var(--ui-primary, hsl(215, 100%, 95%));\n}\n\n[class*="gui_stage-and-target-wrapper_"] {\n  padding: 0;\n}\n\n/* https://github.com/ScratchAddons/ScratchAddons/issues/4896 */\n.Popover {\n  /* Above stage wrapper and target pane */\n  /* See editor-stage-left */\n  z-index: 51;\n}\n', ""])
    },
    1610: function(e, t, o) {
        "use strict";
        o.r(t),
        o.d(t, "resources", (function() {
            return s
        }));
        function n(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                o.push.apply(o, n)
            }
            return o
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(o), !0).forEach((function(t) {
                    r(e, t, o[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                }))
            }
            return e
        }
        function r(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        }
        var a = o(1545);
        const s = {
            "userscript.js": async function({addon: e, console: t, msg: o}) {
                let n = null,
                    r = null,
                    a = null,
                    s = null,
                    c = null,
                    i = null,
                    d = !1,
                    u = !1,
                    g = !1,
                    b = !0;
                const p = await e.tab.traps.getBlockly();
                function y() {
                    return {
                        none: "0",
                        short: "0.2",
                        default: "0.3",
                        long: "0.5"
                    }[e.settings.get("speed")]
                }
                function M() {
                    return e.settings.get("toggle")
                }
                function h(e) {
                    for (let t of [c, i])
                        t.style.transitionDuration = "".concat(e, "s")
                }
                function m() {
                    for (let e of [c, i])
                        e.style.removeProperty("transition-duration")
                }
                function f() {
                    r.classList.toggle("locked", u),
                    a.title = o(u ? "unlock" : "lock"),
                    s.src = (e => {
                        if ("/lock.svg" === e)
                            return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMHYtM2ExIDEgMCAwIDAtMS0xem01LTRWN0E1IDUgMCAwIDAgNyA3djJhMyAzIDAgMCAwLTMgM3Y3YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtN2EzIDMgMCAwIDAtMy0zek05IDdhMyAzIDAgMCAxIDYgMHYySDl6bTkgMTJhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LTdhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";
                        if ("/unlock.svg" === e)
                            return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExLjQ5IDEuNDkgMCAwIDAtMSAyLjYxVjE3YTEgMSAwIDAgMCAyIDB2LTEuMzlBMS40OSAxLjQ5IDAgMCAwIDEyIDEzem01LTRIOVY3YTMgMyAwIDAgMSA1LjEyLTIuMTMgMy4wOCAzLjA4IDAgMCAxIC43OCAxLjM4IDEgMSAwIDEgMCAxLjk0LS41IDUuMDkgNS4wOSAwIDAgMC0xLjMxLTIuMjlBNSA1IDAgMCAwIDcgN3YyYTMgMyAwIDAgMC0zIDN2N2EzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTdhMyAzIDAgMCAwLTMtM3ptMSAxMGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXYtN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjNTc1ZTc1Ii8+PC9zdmc+";
                        throw new Error("Unknown asset: ".concat(e))
                    })("/".concat(u ? "" : "un", "lock.svg"))
                }
                function A(e, t={}) {
                    e && 0 !== e.buttons && !document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete") || (h(t = "object" == typeof t ? y() : t), c.classList.remove("sa-flyoutClose"), i.classList.remove("sa-flyoutClose"), setTimeout(() => {
                        p.getMainWorkspace().recordCachedAreas(),
                        m()
                    }, 1e3 * t)),
                    g = !1
                }
                function I(e, t=y()) {
                    u || (e && e.buttons ? g = !0 : (h(t), c.classList.add("sa-flyoutClose"), i.classList.add("sa-flyoutClose"), setTimeout(() => {
                        p.getMainWorkspace().recordCachedAreas(),
                        m()
                    }, 1e3 * t)))
                }
                const v = () => {
                    const t = e.tab.redux.state.scratchGui.mode.isFullScreen;
                    document.documentElement.classList.toggle("sa-hide-flyout-not-fullscreen", !t)
                };
                v();
                let x = !1;
                function w() {
                    if (x)
                        return;
                    x = !0,
                    e.tab.redux.initialize(),
                    e.tab.redux.addEventListener("statechanged", t => {
                        switch (t.detail.action.type) {
                        case "scratch-gui/navigation/ACTIVATE_TAB":
                            {
                                const o = M();
                                0 !== t.detail.action.activeTabIndex || e.self.disabled || "hover" !== o && "cathover" !== o || (I(null, 0), d = !1);
                                break
                            }case "scratch-gui/mode/SET_FULL_SCREEN":
                            v()
                        }
                    }),
                    document.body.addEventListener("mouseup", () => {
                        g && (I(), g = !1)
                    }),
                    e.self.enabledLate && "category" === M() && p.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1),
                    e.self.addEventListener("disabled", () => {
                        p.getMainWorkspace().getToolbox().selectedItem_.setSelected(!0),
                        p.svgResize(p.getMainWorkspace())
                    }),
                    e.self.addEventListener("reenabled", () => {
                        "category" === M() && (p.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1), I(null, 0), d = !1),
                        p.svgResize(p.getMainWorkspace())
                    }),
                    e.settings.addEventListener("change", () => {
                        e.self.disabled || ("category" === M() ? u ? (d = !0, u = !1, f()) : (p.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1), I(null, 0), d = !1) : (I(), p.getMainWorkspace().getToolbox().selectedItem_.setSelected(!0)), p.svgResize(p.getMainWorkspace()))
                    });
                    const t = p.Toolbox.prototype.setSelectedItem;
                    p.Toolbox.prototype.setSelectedItem = function(o, n=!0) {
                        const l = this.selectedItem_;
                        t.call(this, o, n),
                        e.self.disabled || "category" !== M() || (n ? o === l ? (d = !d, d ? A() : (I(), o.setSelected(!1))) : d || (b = !1, d = !0, A()) : o.setSelected(!1))
                    };
                    const o = p.Toolbox.prototype.selectCategoryById;
                    p.Toolbox.prototype.selectCategoryById = function(...t) {
                        if (e.self.disabled || "category" !== M() || d)
                            return o.call(this, ...t)
                    };
                    const n = p.Flyout.prototype.stepScrollAnimation;
                    p.Flyout.prototype.stepScrollAnimation = function(...e) {
                        return b ? n.apply(this, e) : (this.scrollbar_.set(this.scrollTarget), this.scrollTarget = null, void (b = !0))
                    };
                    const r = p.WorkspaceSvg.getTopLevelWorkspaceMetrics_;
                    p.WorkspaceSvg.getTopLevelWorkspaceMetrics_ = function() {
                        var t,
                            o;
                        const n = r.call(this);
                        return e.self.disabled || "hover" === M() || this.RTL || 310 === (null === (t = this.getToolbox()) || void 0 === t || null === (o = t.flyout_) || void 0 === o ? void 0 : o.getWidth()) ? n : l(l({}, n), {}, {
                            absoluteLeft: n.absoluteLeft - 250,
                            viewWidth: n.viewWidth + 250
                        })
                    },
                    p.getMainWorkspace() && (p.getMainWorkspace().getMetrics = p.WorkspaceSvg.getTopLevelWorkspaceMetrics_)
                }
                for (;;) {
                    c = await e.tab.waitForElement(".blocklyFlyout", {
                        markAsSeen: !0,
                        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/locales/SELECT_LOCALE", "fontsLoaded/SET_FONTS_LOADED"],
                        reduxCondition: e => !e.scratchGui.mode.isPlayerOnly
                    }),
                    i = document.querySelector(".blocklyFlyoutScrollbar");
                    const t = document.querySelector('[class*="gui_blocks-wrapper_"]'),
                        o = document.querySelector(".injectionDiv"),
                        l = document.createElement("div");
                    l.className = "sa-flyout-border-1",
                    e.tab.displayNoneWhileDisabled(l),
                    o.appendChild(l);
                    const g = document.createElement("div");
                    g.className = "sa-flyout-border-2",
                    e.tab.displayNoneWhileDisabled(g),
                    o.appendChild(g),
                    n && n.remove(),
                    n = document.createElement("div"),
                    t.appendChild(n),
                    n.className = "sa-flyout-placeHolder",
                    n.style.display = "none",
                    r && r.remove(),
                    r = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"),
                    r.setAttribute("class", "sa-lock-object"),
                    r.style.display = "none",
                    a = document.createElement("button"),
                    a.className = "sa-lock-button",
                    s = document.createElement("img"),
                    s.alt = "",
                    f(),
                    a.onclick = () => {
                        u = !u,
                        f()
                    },
                    a.appendChild(s),
                    r.appendChild(a),
                    c.appendChild(r),
                    I(null, 0),
                    d = !1;
                    const b = document.querySelector(".blocklyToolboxDiv"),
                        y = document.querySelector("[class^=gui_extension-button-container_]");
                    for (let t of [b, y, c, i])
                        t.onmouseenter = t => {
                            const o = M();
                            e.self.disabled || "hover" !== o && "cathover" !== o || A(t)
                        },
                        t.onmouseleave = t => {
                            const o = M();
                            e.self.disabled || "hover" !== o && "cathover" !== o || I(t)
                        };
                    n.onmouseenter = t => {
                        e.self.disabled || "hover" !== M() || A(t)
                    },
                    n.onmouseleave = t => {
                        e.self.disabled || "hover" !== M() || I(t)
                    },
                    w(),
                    "hover" !== M() && p.svgResize(p.getMainWorkspace())
                }
            },
            "style.css": o.n(a).a
        }
    }
}]);
