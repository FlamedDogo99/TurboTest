(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[43], {
    1659: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, "resources", (function() {
            return s
        }));
        const s = {
            "userscript.js": async function({addon: n, console: e}) {
                const t = await n.tab.traps.getBlockly();
                let s = t.getMainWorkspace();
                const i = t.init_;
                function a(e) {
                    s.grid_.snapToGrid_ = e,
                    s.grid_.spacing_ = e ? n.settings.get("grid") : 40,
                    s.grid_.update(s.scale)
                }
                t.init_ = function(...e) {
                    return s = e[0], n.self.disabled || a(!0), i.call(this, ...e)
                },
                a(!0),
                n.settings.addEventListener("change", () => a(!0)),
                n.self.addEventListener("disabled", () => a(!1)),
                n.self.addEventListener("reenabled", () => a(!0))
            }
        }
    }
}]);
