(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[25], {
    1573: function(e, t, r) {
        (e.exports = r(9)(!1)).push([e.i, '[dir="ltr"] [class^="stage-header_stage-size-toggle-group"] [class^="stage-header_stage-button-icon"] {\n  transform: scaleX(-1);\n}\n[dir="rtl"] [class^="stage-header_stage-size-toggle-group"] [class^="stage-header_stage-button-icon"] {\n  transform: none;\n}\n[class^="target-pane_target-pane"] {\n  flex-direction: row-reverse;\n}\n[dir="ltr"] [class^="target-pane_stage-selector-wrapper"] {\n  margin-left: 0;\n  margin-right: calc(0.5rem / 2);\n}\n[dir="ltr"] [class^="sprite-selector_sprite-selector"] {\n  margin-left: calc(0.5rem / 2);\n  margin-right: 0;\n}\n[dir="rtl"] [class^="target-pane_stage-selector-wrapper"] {\n  margin-right: 0;\n  margin-left: calc(0.5rem / 2);\n}\n[dir="rtl"] [class^="sprite-selector_sprite-selector"] {\n  margin-right: calc(0.5rem / 2);\n  margin-left: 0;\n}\n[class^="gui_flex-wrapper"] {\n  flex-direction: row-reverse;\n  overflow-x: hidden;\n}\n\n[dir="ltr"] [class^="backpack_backpack-header"] {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0.5rem;\n}\n[dir="ltr"] [class^="blocks_blocks_C530M"] .injectionDiv,\n[dir="ltr"] [class^="asset-panel_wrapper"] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir="ltr"] [class^="gui_extension-button-container"] {\n  border-bottom-left-radius: 0.5rem;\n}\n\n[dir="rtl"] [class^="backpack_backpack-header"] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0.5rem;\n}\n[dir="rtl"] [class^="blocks_blocks_C530M"] .injectionDiv,\n[dir="rtl"] [class^="asset-panel_wrapper"] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir="rtl"] [class^="gui_extension-button-container"] {\n  border-bottom-right-radius: 0.5rem;\n}\n\n.Popover {\n  /* See hide-flyout */\n  z-index: 51;\n}\n\n/* hide-stage compatibility */\n\n.sa-stage-hidden [class*="stage-header_stage-size-row"] {\n  right: auto;\n  left: 0.5rem;\n  width: calc(240px + 0.125rem);\n  justify-content: flex-end;\n}\n\n[dir="rtl"] .sa-stage-hidden [class*="stage-header_stage-size-row"] {\n  left: auto;\n  right: 0.5rem;\n}\n\n.sa-stage-hidden [class*="gui_tab-list_"] {\n  padding-inline-start: calc(240px + 1.125rem);\n}\n', ""])
    },
    1638: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, "resources", (function() {
            return s
        }));
        var n = r(1573);
        const s = {
            "fix-share-the-love.js": async function({addon: e, console: t}) {
                const r = await e.tab.traps.getBlockly(),
                    n = () => {
                        Blockly.getMainWorkspace() && window.dispatchEvent(new Event("resize"))
                    };
                e.self.addEventListener("disabled", n),
                e.self.addEventListener("reenabled", n);
                const s = r.VerticalFlyout.prototype.getClientRect;
                r.VerticalFlyout.prototype.getClientRect = function() {
                    const t = s.call(this);
                    return !t || e.self.disabled || (this.toolboxPosition_ === r.TOOLBOX_AT_LEFT && (t.left += 1e9), t.width -= 1e9), t
                },
                n()
            },
            "stageleft.css": r.n(n).a
        }
    }
}]);
