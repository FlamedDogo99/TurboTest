(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[11], {
    1555: function(n, e, t) {
        var a = t(204);
        (n.exports = t(9)(!1)).push([n.i, '.clone-container-container {\n  display: none;\n  align-items: center;\n  padding: 0.25rem;\n  user-select: none;\n  color: #a065ff;\n}\n\n.clone-container {\n  font-size: 0.625rem;\n  font-weight: bold;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  white-space: nowrap;\n}\n\n.clone-icon {\n  margin: 0.25rem;\n  display: inline-block;\n  background-image: url(' + a(t(1556)) + ');\n  height: 16px;\n  width: 16px;\n}\n\n.clone-container-container[data-count="none"] {\n  display: none;\n}\n\n.clone-container-container[data-count="full"] {\n  color: #ff6680;\n}\n\n.clone-container-container[data-count="full"] .clone-icon {\n  background-image: url(' + a(t(1557)) + ");\n}\n\n.clone-count::after {\n  content: attr(data-str);\n}\n\n.sa-clones-small .clone-container-container {\n  display: none !important;\n}\n", ""])
    },
    1556: function(n, e, t) {
        n.exports = t.p + "static/assets/8a30520407ffdf5b0e7e06e490db9c1d.svg"
    },
    1557: function(n, e, t) {
        n.exports = t.p + "static/assets/60fb267c5ab0c6f4ed9ab4a891ca7dd5.svg"
    },
    1627: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, "resources", (function() {
            return o
        }));
        var a = t(1555);
        const o = {
            "userscript.js": async function({addon: n, console: e, msg: t}) {
                const a = n.tab.traps.vm;
                let o = n.settings.get("showicononly");
                n.tab.redux.state && "small" === n.tab.redux.state.scratchGui.stageSize.stageSize && document.body.classList.add("sa-clones-small"),
                document.addEventListener("click", n => {
                    n.target.closest("[class*='stage-header_stage-button-first']") ? document.body.classList.add("sa-clones-small") : n.target.closest("[class*='stage-header_stage-button-last']") && document.body.classList.remove("sa-clones-small")
                }, {
                    capture: !0
                });
                let s = document.createElement("div");
                n.tab.displayNoneWhileDisabled(s);
                let c = document.createElement("div"),
                    l = document.createElement("span"),
                    i = document.createElement("span");
                s.className = "clone-container-container",
                c.className = "clone-container",
                l.className = "clone-count",
                i.className = "clone-icon",
                s.appendChild(i),
                s.appendChild(c),
                c.appendChild(l);
                let r = 0;
                const d = Array(301).fill().map((n, e) => t("clones", {
                    cloneCount: e
                }));
                function u(n) {
                    const e = a.runtime._cloneCounter;
                    (e !== r || n) && (r = e, 0 === e ? s.dataset.count = "none" : e >= a.runtime.runtimeOptions.maxClones ? s.dataset.count = "full" : s.dataset.count = "", l.dataset.str = o ? e : d[e] || t("clones", {
                        cloneCount: e
                    }), s.style.display = 0 === e ? "none" : "flex")
                }
                n.settings.addEventListener("change", () => {
                    o = n.settings.get("showicononly"),
                    u(!0)
                });
                const m = a.runtime._step;
                for (a.runtime._step = function(...n) {
                    const e = m.call(this, ...n);
                    return u(), e
                };;)
                    await n.tab.waitForElement('[class*="controls_controls-container"]', {
                        markAsSeen: !0,
                        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
                    }),
                    "editor" === n.tab.editorMode && n.tab.appendToSharedSpace({
                        space: "afterStopButton",
                        element: s,
                        order: 2
                    })
            },
            "style.css": t.n(a).a
        }
    }
}]);
