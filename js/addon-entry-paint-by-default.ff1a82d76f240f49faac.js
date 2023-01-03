(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[40], {
    1645: function(e, t, o) {
        "use strict";
        o.r(t),
        o.d(t, "resources", (function() {
            return r
        }));
        const r = {
            "userscript.js": async function({addon: e, console: t}) {
                const o = Object.assign(Object.create(null), {
                        upload: {
                            index: 0,
                            tooltip: "gui.spriteSelector.addSpriteFromFile"
                        },
                        surprise: {
                            index: 1,
                            tooltip: "gui.spriteSelector.addSpriteFromSurprise"
                        },
                        paint: {
                            index: 2,
                            tooltip: "gui.spriteSelector.addSpriteFromPaint"
                        },
                        library: {
                            index: 3,
                            tooltip: "gui.spriteSelector.addSpriteFromLibrary"
                        }
                    }),
                    r = Object.assign(Object.create(null), {
                        upload: {
                            index: 0,
                            tooltip: "gui.stageSelector.addBackdropFromFile"
                        },
                        surprise: {
                            index: 1,
                            tooltip: "gui.stageSelector.addBackdropFromSurprise"
                        },
                        paint: {
                            index: 2,
                            tooltip: "gui.stageSelector.addBackdropFromPaint"
                        },
                        library: {
                            index: 3,
                            tooltip: "gui.spriteSelector.addBackdropFromLibrary"
                        }
                    }),
                    i = Object.assign(Object.create(null), {
                        upload: {
                            index: 0,
                            tooltip: "gui.costumeTab.addFileCostume"
                        },
                        surprise: {
                            index: 1,
                            tooltip: "gui.costumeTab.addSurpriseCostume"
                        },
                        paint: {
                            index: 2,
                            tooltip: "gui.costumeTab.addBlankCostume"
                        },
                        library: {
                            index: 3,
                            tooltip: "gui.costumeTab.addCostumeFromLibrary"
                        }
                    }),
                    s = Object.assign(Object.create(null), {
                        upload: {
                            index: 0,
                            tooltip: "gui.soundTab.fileUploadSound"
                        },
                        surprise: {
                            index: 1,
                            tooltip: "gui.soundTab.surpriseSound"
                        },
                        record: {
                            index: 2,
                            tooltip: "gui.soundTab.recordSound"
                        },
                        library: {
                            index: 3,
                            tooltip: "gui.soundTab.addSoundFromLibrary"
                        }
                    }),
                    a = t => e.self.disabled ? "library" : e.settings.get(t),
                    n = t => t.closest("[class*=asset-panel_wrapper_]") ? 2 === e.tab.redux.state.scratchGui.editorTab.activeTabIndex ? s[a("sound")] || s.library : i[a("costume")] || i.library : t.closest('[class*="target-pane_stage-selector-wrapper"]') ? r[a("backdrop")] || r.library : o[a("sprite")] || o.library;
                document.body.addEventListener("click", t => {
                    if (e.self.disabled)
                        return;
                    const o = t.target.closest('[class*="action-menu_main-button_"]');
                    if (!o)
                        return;
                    t.stopPropagation();
                    const r = o.parentElement.querySelector('[class*="action-menu_more-buttons_"]').children,
                        {index: i} = n(o);
                    r[r.length - (4 - i)].querySelector("button").click()
                }, {
                    bubble: !0
                }),
                document.body.addEventListener("mouseover", t => {
                    const o = t.target.closest('[class*="action-menu_main-button_"]');
                    if (!o)
                        return;
                    const r = o.parentElement.querySelector(".__react_component_tooltip"),
                        {tooltip: i} = n(o),
                        s = e.tab.redux.state.locales.messages[i];
                    s && r.textContent !== s && (r.textContent = s, setTimeout(() => {
                        r.textContent = s,
                        o.dispatchEvent(new Event("mouseenter"))
                    }))
                }, {
                    bubble: !0
                })
            }
        }
    }
}]);
