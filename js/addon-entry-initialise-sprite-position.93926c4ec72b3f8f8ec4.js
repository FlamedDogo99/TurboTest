(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[34], {
    1643: function(t, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "resources", (function() {
            return n
        }));
        const n = {
            "userscript.js": async function({addon: t}) {
                const e = t.tab.traps.vm,
                    s = e.constructor.prototype.addSprite;
                e.constructor.prototype.addSprite = function(e) {
                    var n,
                        r;
                    let c,
                        i = !0;
                    "object" == typeof e ? [c, i] = [e, !1] : c = JSON.parse(e);
                    const o = "cd21514d0531fdffb22204e0ec5ed84a.svg" === (null === (n = c.costumes) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.baseLayerMD5);
                    return t.self.disabled || !o && c.tags && t.settings.get("library") || (c.scratchX && (c.scratchX = t.settings.get("x"), c.scratchY = t.settings.get("y")), c.x && (c.x = t.settings.get("x"), c.y = t.settings.get("y"))), s.call(this, i ? JSON.stringify(c) : c)
                };
                const n = () => {
                    const s = e.runtime.getTargetForStage().constructor.prototype,
                        n = s.duplicate;
                    s.duplicate = function() {
                        return n.call(this).then(e => {
                            if (!t.self.disabled)
                                switch (t.settings.get("duplicate")) {
                                case "custom":
                                    e.setXY(t.settings.get("x"), t.settings.get("y"));
                                    break;
                                case "keep":
                                    e.setXY(this.x, this.y)
                                }
                            return e
                        })
                    }
                };
                e.runtime.getTargetForStage() ? n() : e.runtime.once("PROJECT_LOADED", n)
            }
        }
    }
}]);
