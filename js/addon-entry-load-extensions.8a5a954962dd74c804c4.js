(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[35], {
    1641: function(n, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "resources", (function() {
            return t
        }));
        const t = {
            "userscript.js": async function({addon: n, console: e}) {
                const s = n.tab.traps.vm,
                    t = () => {
                        if (n.self.disabled)
                            return;
                        const e = ["music", "pen", "text2speech", "translate"];
                        for (let t of e)
                            n.settings.get(t) && !s.extensionManager.isExtensionLoaded(t) && s.extensionManager.loadExtensionIdSync(t)
                    };
                s.editingTarget ? t() : s.runtime.once("PROJECT_LOADED", t)
            }
        }
    }
}]);
