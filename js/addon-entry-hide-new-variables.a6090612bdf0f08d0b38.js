(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[32], {
    1647: function(t, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "resources", (function() {
            return a
        }));
        const a = {
            "userscript.js": async function({addon: t, msg: e, console: s}) {
                const a = await t.tab.traps.getBlockly(),
                    c = a.Variables.createVariable;
                a.Variables.createVariable = function(e, s, a) {
                    if (!t.self.disabled) {
                        const t = s;
                        s = s => {
                            if (s) {
                                const t = e.isFlyout ? e : e.getFlyout();
                                t.setCheckboxState && t.setCheckboxState(s, !1)
                            }
                            t && t(s)
                        }
                    }
                    return c.call(this, e, s, a)
                }
            }
        }
    }
}]);
