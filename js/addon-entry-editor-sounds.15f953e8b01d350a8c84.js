(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[24], {
    1640: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, "resources", (function() {
            return o
        }));
        const o = {
            "userscript.js": async function({addon: e, console: n}) {
                const t = await e.tab.traps.getBlockly(),
                    o = () => {
                        const e = Blockly.getMainWorkspace(),
                            n = e.options.pathToMedia;
                        t.inject.loadSounds_(n, e)
                    };
                o();
                const s = t.init_;
                t.init_ = function(...e) {
                    return e[0].options.hasSounds = !0, s.call(this, ...e)
                },
                e.self.addEventListener("disabled", () => {
                    const e = Blockly.getMainWorkspace().getAudioManager();
                    delete e.SOUNDS_.click,
                    delete e.SOUNDS_.delete
                }),
                e.self.addEventListener("reenabled", o)
            }
        }
    }
}]);
