(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[37], {
    1558: function(e, t, s) {
        (e.exports = s(9)(!1)).push([e.i, '.pos-container-container {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  user-select: none;\n  width: 45px;\n  justify-content: center;\n}\n\n.pos-container {\n  font-size: 0.6rem;\n  font-weight: bold;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: #5cb1d6;\n  white-space: nowrap;\n}\n\n/* Use pseudo elements to avoid firing mutation observers by just moving the cursor */\n.pos-container > span::after {\n  content: attr(data-content);\n}\n\n.sa-mouse-pos-small .pos-container-container {\n  display: none !important;\n}\n', ""])
    },
    1628: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "resources", (function() {
            return a
        }));
        var n = s(1558);
        const a = {
            "userscript.js": async function({addon: e, console: t}) {
                var s = document.createElement("div");
                e.tab.displayNoneWhileDisabled(s, {
                    display: "flex"
                });
                var n = document.createElement("div"),
                    a = document.createElement("span");
                s.className = "pos-container-container",
                n.className = "pos-container",
                s.appendChild(n),
                n.appendChild(a);
                const o = e.tab.traps.vm;
                o.runtime.ioDevices.mouse.__scratchX = o.runtime.ioDevices.mouse._scratchX,
                o.runtime.ioDevices.mouse.__scratchY = o.runtime.ioDevices.mouse._scratchY;
                var c = o.runtime.ioDevices.mouse.__scratchX ? o.runtime.ioDevices.mouse.__scratchX : 0,
                    i = o.runtime.ioDevices.mouse.__scratchY ? o.runtime.ioDevices.mouse.__scratchY : 0;
                const r = () => a.setAttribute("data-content", "".concat(Math.round(c), ", ").concat(Math.round(i)));
                for (Object.defineProperty(o.runtime.ioDevices.mouse, "_scratchX", {
                    get: function() {
                        return this.__scratchX
                    },
                    set: function(e) {
                        c = e,
                        r(),
                        this.__scratchX = e
                    }
                }), Object.defineProperty(o.runtime.ioDevices.mouse, "_scratchY", {
                    get: function() {
                        return this.__scratchY
                    },
                    set: function(e) {
                        i = e,
                        r(),
                        this.__scratchY = e
                    }
                }), e.tab.redux.state && "small" === e.tab.redux.state.scratchGui.stageSize.stageSize && document.body.classList.add("sa-mouse-pos-small"), document.addEventListener("click", e => {
                    e.target.closest("[class*='stage-header_stage-button-first']") ? document.body.classList.add("sa-mouse-pos-small") : e.target.closest("[class*='stage-header_stage-button-last']") && document.body.classList.remove("sa-mouse-pos-small")
                }, {
                    capture: !0
                });;)
                    await e.tab.waitForElement('[class*="controls_controls-container"]', {
                        markAsSeen: !0,
                        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
                    }),
                    "editor" === e.tab.editorMode && e.tab.appendToSharedSpace({
                        space: "afterStopButton",
                        element: s,
                        order: 1
                    })
            },
            "style.css": s.n(n).a
        }
    }
}]);
