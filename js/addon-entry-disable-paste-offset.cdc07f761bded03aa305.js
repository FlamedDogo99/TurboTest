(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[19], {
    1652: function(t, a, e) {
        "use strict";
        e.r(a),
        e.d(a, "resources", (function() {
            return c
        }));
        const c = {
            "userscript.js": async function({addon: t, console: a}) {
                t.tab.redux.initialize(),
                t.tab.redux.addEventListener("statechanged", ({detail: a}) => {
                    t.self.disabled || "scratch-paint/clipboard/SET" !== a.action.type && "scratch-paint/clipboard/INCREMENT_PASTE_OFFSET" !== a.action.type || t.tab.redux.dispatch({
                        type: "scratch-paint/clipboard/CLEAR_PASTE_OFFSET"
                    })
                }),
                t.self.addEventListener("disabled", () => {
                    t.tab.redux.dispatch({
                        type: "scratch-paint/clipboard/CLEAR_PASTE_OFFSET"
                    }),
                    t.tab.redux.dispatch({
                        type: "scratch-paint/clipboard/INCREMENT_PASTE_OFFSET"
                    })
                }),
                t.self.addEventListener("reenabled", () => {
                    t.tab.redux.dispatch({
                        type: "scratch-paint/clipboard/CLEAR_PASTE_OFFSET"
                    })
                }),
                t.self.enabledLate && t.tab.redux.dispatch({
                    type: "scratch-paint/clipboard/CLEAR_PASTE_OFFSET"
                })
            }
        }
    }
}]);
