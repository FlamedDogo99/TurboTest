(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[20], {
    1650: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "resources", (function() {
            return s
        }));
        const s = {
            "userscript.js": async ({addon: t, console: e}) => {
                const n = t.tab.traps.vm;
                let s = !1;
                document.addEventListener("mousedown", (function(t) {
                    s = t.shiftKey
                }), {
                    capture: !0
                });
                const r = n.stopDrag;
                n.stopDrag = function(...e) {
                    if (s || t.self.disabled)
                        return r.call(this, ...e);
                    const n = this.setEditingTarget;
                    this.setEditingTarget = () => {};
                    const i = r.call(this, ...e);
                    return this.setEditingTarget = n, i
                };
                const i = n.getTargetIdForDrawableId;
                n.getTargetIdForDrawableId = function(...e) {
                    const n = i.call(this, ...e);
                    if (s || t.self.disabled)
                        return n;
                    if (null !== n) {
                        const t = this.runtime.getTargetById(n);
                        if (t && !t.draggable)
                            return null
                    }
                    return n
                }
            }
        }
    }
}]);
