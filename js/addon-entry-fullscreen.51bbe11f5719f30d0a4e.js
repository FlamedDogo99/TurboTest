(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[28], {
    1595: function(e, s, a) {
        (e.exports = a(9)(!1)).push([e.i, ".sa-fullscreen.sa-body-editor {\n  overflow: hidden !important;\n}\n", ""])
    },
    1596: function(e, s, a) {
        (e.exports = a(9)(!1)).push([e.i, '[class*="stage-wrapper_full-screen"] [class*="stage_full-screen"],\n[class*="stage-wrapper_full-screen"] [class*="stage_green-flag-overlay-wrapper"] {\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n\n[class*="stage_stage-overlays_"][class*="stage_full-screen_"] {\n  top: 0;\n  left: 0;\n}\n', ""])
    },
    1597: function(e, s, a) {
        (e.exports = a(9)(!1)).push([e.i, '[class*="stage-wrapper_full-screen"] [class*="stage-wrapper_stage-canvas-wrapper"],\n[class*="stage-wrapper_full-screen"] [class*="stage_stage"],\n[class*="stage-wrapper_full-screen"] [class*="stage-header_stage-menu-wrapper"],\n[class*="stage-wrapper_full-screen"] canvas {\n  width: min(calc((100vh - 44px) * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*="stage-wrapper_full-screen"] [class*="stage-wrapper_stage-canvas-wrapper"],\n[class*="stage-wrapper_full-screen"] [class*="stage_stage"],\n[class*="stage-wrapper_full-screen"] [class*="stage_green-flag-overlay-wrapper"],\n[class*="stage-wrapper_full-screen"] canvas {\n  height: min(calc(100vh - 44px), calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*="stage-wrapper_full-screen"] {\n  padding: 0rem !important;\n}\n\n[class*="stage-wrapper_full-screen"] [class*="monitor-list_monitor-list"] {\n  overflow: visible;\n}\n\n[class*="stage-wrapper_full-screen"] [class*="stage_question-wrapper"] {\n  width: auto !important;\n}\n', ""])
    },
    1598: function(e, s, a) {
        (e.exports = a(9)(!1)).push([e.i, '[class*="stage-wrapper_full-screen"] [class*="stage-wrapper_stage-canvas-wrapper"],\n[class*="stage-wrapper_full-screen"] [class*="stage_stage"],\n[class*="stage-wrapper_full-screen"] [class*="stage-header_stage-menu-wrapper"],\n[class*="stage-wrapper_full-screen"] canvas {\n  width: min(calc(100vh * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*="stage-wrapper_full-screen"] [class*="stage-wrapper_stage-canvas-wrapper"],\n[class*="stage-wrapper_full-screen"] [class*="stage_stage"],\n[class*="stage-wrapper_full-screen"] [class*="stage_green-flag-overlay-wrapper"],\n[class*="stage-wrapper_full-screen"] canvas {\n  height: min(100vh, calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*="stage-wrapper_full-screen"] {\n  padding: 0rem !important;\n}\n\n[class*="stage-wrapper_full-screen"] [class*="monitor-list_monitor-list"] {\n  overflow: visible;\n}\n\n[class*="stage-wrapper_full-screen"] [class*="stage_question-wrapper"] {\n  width: auto !important;\n}\n', ""])
    },
    1599: function(e, s, a) {
        (e.exports = a(9)(!1)).push([e.i, '[class*="stage-wrapper_full-screen"] [class*="stage-header_stage-header-wrapper-overlay"] {\n  display: none;\n}\n\n[class*="stage-wrapper_full-screen"] {\n  top: 0rem !important;\n}\n', ""])
    },
    1660: function(e, s, a) {
        "use strict";
        a.r(s),
        a.d(s, "resources", (function() {
            return g
        }));
        var n = a(1595),
            r = a.n(n),
            t = a(1596),
            l = a.n(t),
            c = a(1597),
            i = a.n(c),
            p = a(1598),
            o = a.n(p),
            u = a(1599),
            d = a.n(u);
        const g = {
            "userscript.js": async function({addon: e, console: s}) {
                const a = e.tab.traps.vm,
                    n = () => {
                        document.documentElement.style.setProperty("--sa-fullscreen-width", a.runtime.stageWidth),
                        document.documentElement.style.setProperty("--sa-fullscreen-height", a.runtime.stageHeight)
                    };
                function r() {
                    e.settings.get("browserFullscreen") && !e.self.disabled && (e.tab.redux.state.scratchGui.mode.isFullScreen && null === document.fullscreenElement ? document.documentElement.requestFullscreen() : e.tab.redux.state.scratchGui.mode.isFullScreen || null === document.fullscreenElement || document.exitFullscreen())
                }
                async function t() {
                    const s = await e.tab.waitForElement(".sa-body-editor");
                    e.tab.redux.state.scratchGui.mode.isFullScreen ? s.classList.add("sa-fullscreen") : s.classList.remove("sa-fullscreen")
                }
                let l,
                    c,
                    i;
                async function p() {
                    l = await e.tab.waitForElement("[class*=monitor-list_monitor-list-scaler]"),
                    i = await e.tab.waitForElement('[class*="stage-wrapper_full-screen"] [class*="stage_stage"]'),
                    c = new ResizeObserver(() => {
                        const s = i.getBoundingClientRect(),
                            n = e.tab.traps.vm.runtime.renderer;
                        n && n.resize(s.width, s.height);
                        const r = s.width / a.runtime.stageWidth;
                        l.style.transform = "scale(".concat(r, ", ").concat(r, ")")
                    }),
                    c.observe(i)
                }
                n(),
                a.on("STAGE_SIZE_CHANGED", n),
                p(),
                t(),
                r(),
                e.tab.redux.initialize(),
                e.tab.redux.addEventListener("statechanged", e => {
                    "scratch-gui/mode/SET_FULL_SCREEN" === e.detail.action.type && (p(), r(), t())
                }),
                window.addEventListener("resize", () => {
                    e.settings.get("browserFullscreen") && !e.self.disabled && null === document.fullscreenElement && e.tab.redux.state.scratchGui.mode.isFullScreen && e.tab.redux.dispatch({
                        type: "scratch-gui/mode/SET_FULL_SCREEN",
                        isFullScreen: !1
                    })
                }),
                document.addEventListener("fullscreenchange", () => {
                    null === document.fullscreenElement && e.tab.redux.state.scratchGui.mode.isFullScreen && e.tab.redux.dispatch({
                        type: "scratch-gui/mode/SET_FULL_SCREEN",
                        isFullScreen: !1
                    })
                }),
                e.settings.addEventListener("change", () => {
                    r()
                }),
                e.self.addEventListener("disabled", () => {
                    c.disconnect()
                }),
                e.self.addEventListener("reenabled", () => {
                    c.observe(i),
                    r()
                })
            },
            "hideOverflow.css": r.a,
            "removeBorder.css": l.a,
            "resizeWindow.css": i.a,
            "resizeWindow_noToolbar.css": o.a,
            "hideToolbar.css": d.a
        }
    }
}]);
