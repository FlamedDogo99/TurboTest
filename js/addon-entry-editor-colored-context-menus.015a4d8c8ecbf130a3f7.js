(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[22], {
    1572: function(t, e, o) {
        (t.exports = o(9)(!1)).push([t.i, '.sa-contextmenu-colored .blocklyContextMenu {\n  background-color: var(--sa-contextmenu-bg) !important;\n  border-color: var(--sa-contextmenu-border) !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem-highlight,\n.sa-contextmenu-colored .s3dev-mi:hover {\n  background-color: #0001;\n  border-color: transparent !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem[style*="border-top"] {\n  border-top-color: var(--sa-contextmenu-border) !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: white;\n}\n', ""])
    },
    1637: function(t, e, o) {
        "use strict";
        o.r(e),
        o.d(e, "resources", (function() {
            return c
        }));
        var n = o(1484),
            r = o(1572);
        const c = {
            "userscript.js": async function({addon: t, console: e}) {
                const o = await t.tab.traps.getBlockly(),
                    r = o.Gesture.prototype.handleRightClick;
                o.Gesture.prototype.handleRightClick = function(...t) {
                    const e = this.targetBlock_,
                        c = r.call(this, ...t);
                    return e && (t => {
                        const e = o.WidgetDiv.DIV;
                        if (!e)
                            return;
                        const r = t.svgPath_;
                        if (!r)
                            return;
                        const c = Object(n.e)(r.getAttribute("fill")),
                            s = r.getAttribute("stroke") || "#0003";
                        e.classList.add("sa-contextmenu-colored"),
                        e.style.setProperty("--sa-contextmenu-bg", c),
                        e.style.setProperty("--sa-contextmenu-border", s)
                    })(e), c
                };
                const c = o.WidgetDiv.hide;
                o.WidgetDiv.hide = function(...t) {
                    return o.WidgetDiv.DIV && o.WidgetDiv.DIV.classList.remove("sa-contextmenu-colored"), c.call(this, ...t)
                }
            },
            "userscript.css": o.n(r).a
        }
    }
}]);
