(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[39], {
    1658: function(o, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "resources", (function() {
            return n
        }));
        const n = {
            "userscript.js": async function({addon: o, msg: t, console: s}) {
                const n = await o.tab.traps.getBlockly(),
                    e = n.FieldNumber.prototype.showEditor_;
                n.FieldNumber.prototype.showEditor_ = function(...t) {
                    return o.self.disabled || (this.useTouchInteraction_ = !0), e.apply(this, t)
                }
            }
        }
    }
}]);
