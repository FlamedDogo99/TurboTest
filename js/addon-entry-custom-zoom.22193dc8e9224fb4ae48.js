(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[15], {
    1583: function(t, o, e) {
        (t.exports = e(9)(!1)).push([t.i, ".sa-custom-zoom-area {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 60px;\n  height: 148px;\n  pointer-events: none;\n}\n.blocklyZoom > * {\n  transition: transform var(--sa-custom-zoom-speed, 0) ease-in-out;\n}\n.sa-custom-zoom-hidden > * {\n  transform: translateX(80px);\n}\n", ""])
    },
    1642: function(t, o, e) {
        "use strict";
        e.r(o),
        e.d(o, "resources", (function() {
            return s
        }));
        var n = e(1583);
        const s = {
            "userscript.js": async function({addon: t, console: o}) {
                let e;
                await t.tab.traps.getBlockly();
                let n = !1;
                const s = {
                        none: "0s",
                        short: "0.2s",
                        default: "0.3s",
                        long: "0.5s"
                    },
                    i = document.createElement("div");
                function a() {
                    if (document.removeEventListener("mousemove", r), "editor" !== t.tab.editorMode)
                        return;
                    Blockly.getMainWorkspace().options.zoomOptions.maxScale = t.settings.get("maxZoom") / 100,
                    Blockly.getMainWorkspace().options.zoomOptions.minScale = t.settings.get("minZoom") / 100,
                    Blockly.getMainWorkspace().options.zoomOptions.startScale = t.settings.get("startZoom") / 100,
                    Blockly.getMainWorkspace().options.zoomOptions.scaleSpeed = 1 + t.settings.get("zoomSpeed") / 100 * .2;
                    const o = c(),
                        e = t.settings.get("autohide");
                    if (o && o.classList.toggle("sa-custom-zoom-hidden", e), e) {
                        document.querySelector(".injectionDiv").appendChild(i),
                        m(),
                        document.addEventListener("mousemove", r)
                    }
                }
                function c() {
                    const t = Blockly.getMainWorkspace().zoomControls_;
                    return t ? t.svgGroup_ : null
                }
                function r(o) {
                    const i = o.x > e.left && o.x < e.right && o.y > e.top && o.y < e.bottom;
                    if (i !== n) {
                        n = i;
                        const o = c();
                        o && (o.style.setProperty("--sa-custom-zoom-speed", s[t.settings.get("speed")]), o.classList.toggle("sa-custom-zoom-hidden", !i))
                    }
                }
                function m() {
                    e = i.getBoundingClientRect()
                }
                i.className = "sa-custom-zoom-area",
                await t.tab.waitForElement(".blocklyZoom"),
                a(),
                t.tab.addEventListener("urlChange", a),
                t.settings.addEventListener("change", a),
                window.addEventListener("resize", (function() {
                    "editor" === t.tab.editorMode && t.settings.get("autohide") && m()
                }))
            },
            "style.css": e.n(n).a
        }
    }
}]);
