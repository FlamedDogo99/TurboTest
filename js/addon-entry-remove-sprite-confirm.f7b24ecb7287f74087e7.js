(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[42], {
    1629: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "resources", (function() {
            return r
        }));
        const r = {
            "userscript.js": async ({addon: e, console: t, msg: s}) => {
                if (!e.tab.redux.state)
                    return t.warn("Redux is not available!");
                const r = e.tab.traps.vm;
                if (!r)
                    return;
                const n = r.deleteSprite;
                r.deleteSprite = function(...t) {
                    if (e.self.disabled)
                        return n.apply(this, t);
                    if (confirm(s("confirm")))
                        return n.apply(this, t);
                    const r = Object.assign({}, e.tab.redux.state.scratchGui.restoreDeletion);
                    return setTimeout(() => e.tab.redux.dispatch({
                        type: "scratch-gui/restore-deletion/RESTORE_UPDATE",
                        state: r
                    }), 100), Promise.resolve()
                }
            }
        }
    }
}]);
