(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[52], {
    1551: function(e, n, t) {
        var a = t(204);
        (e.exports = t(9)(!1)).push([e.i, '.sa-vol-slider {\n  /* Same lateral padding as .clone-container-container */\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  display: flex;\n  align-items: center;\n}\n\n.sa-vol-slider-icon {\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n}\n.sa-vol-slider-icon[data-icon="mute"] {\n  background-image: url(' + a(t(1552)) + ');\n}\n.sa-vol-slider-icon[data-icon="quiet"] {\n  background-image: url(' + a(t(1553)) + ');\n}\n.sa-vol-slider-icon[data-icon="loud"] {\n  background-image: url(' + a(t(1554)) + ');\n}\n\n.sa-vol-slider-small .sa-vol-slider-input,\n.sa-vol-slider-small .sa-vol-slider-icon:not([data-icon="mute"]) {\n  display: none;\n}\n\n.sa-vol-slider-input {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 50px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #de91de;\n  margin-left: 3px;\n}\n\n.sa-vol-slider-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #cf63cf;\n}\n\n.sa-vol-slider-input::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border: none;\n  border-radius: 50%;\n  background-color: #cf63cf;\n}\n\n/* TW: Hide mute-project icon. Upstream this is a conditional stylesheet in mute-project but we don\'t support those yet. */\n.sa-mute-project-icon {\n  display: none !important;\n}\n', ""])
    },
    1552: function(e, n, t) {
        e.exports = t.p + "static/assets/e21225ab4b675bc61eed30cfb510c288.svg"
    },
    1553: function(e, n, t) {
        e.exports = t.p + "static/assets/3547fa1f2678a483a19f46852f36b426.svg"
    },
    1554: function(e, n, t) {
        e.exports = t.p + "static/assets/b2c44c738c9cbc1a99cd6edfd0c2b85b.svg"
    },
    1626: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, "resources", (function() {
            return o
        }));
        var a = t(1493),
            s = t(1551);
        const o = {
            "userscript.js": async function({addon: e, console: n}) {
                const t = e.tab.traps.vm;
                Object(a.g)(t),
                Object(a.f)(e.settings.get("defVol") / 100);
                const s = document.createElement("div");
                s.className = "sa-vol-slider-icon",
                s.addEventListener("click", () => {
                    Object(a.d)(!Object(a.b)())
                });
                const o = () => {
                    const e = Object(a.a)();
                    s.dataset.icon = 0 == e ? "mute" : e < .5 ? "quiet" : "loud"
                };
                Object(a.c)(o),
                o();
                const c = document.createElement("input");
                c.className = "sa-vol-slider-input",
                c.type = "range",
                c.min = 0,
                c.max = 1,
                c.step = .02,
                c.addEventListener("input", e => {
                    Object(a.f)(+e.target.value)
                }),
                c.addEventListener("change", e => {
                    Object(a.b)() || Object(a.e)(Object(a.a)())
                }),
                Object(a.c)(() => {
                    const e = Object(a.a)();
                    e !== +c.value && (c.value = e)
                });
                const i = document.createElement("div");
                for (i.className = "sa-vol-slider", i.appendChild(s), i.appendChild(c), e.tab.displayNoneWhileDisabled(i, {
                    display: "flex"
                }), e.tab.redux.state && "small" === e.tab.redux.state.scratchGui.stageSize.stageSize && document.body.classList.add("sa-vol-slider-small"), document.addEventListener("click", e => {
                    e.target.closest("[class*='stage-header_stage-button-first']") ? document.body.classList.add("sa-vol-slider-small") : e.target.closest("[class*='stage-header_stage-button-last']") && document.body.classList.remove("sa-vol-slider-small")
                }, {
                    capture: !0
                }), e.self.addEventListener("disabled", () => {
                    Object(a.f)(1)
                }), e.self.addEventListener("reenabled", () => {
                    Object(a.f)(e.settings.get("defVol") / 100)
                });;)
                    await e.tab.waitForElement("[class^='green-flag_green-flag']", {
                        markAsSeen: !0,
                        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
                    }),
                    e.tab.displayNoneWhileDisabled(i, {
                        display: "flex"
                    }),
                    e.tab.appendToSharedSpace({
                        space: "afterStopButton",
                        element: i,
                        order: 0
                    })
            },
            "userstyle.css": t.n(s).a
        }
    }
}]);
