(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[16], {
    1624: function(t, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "resources", (function() {
            return o
        }));
        const o = {
            "userscript.js": async function({addon: t, console: e, msg: s, safeMsg: o}) {
                const n = await t.tab.traps.getBlockly(),
                    a = t.tab.traps.vm;
                let r = !1;
                const i = t => {
                        const e = t.findIndex(t => "CREATE_LIST" === t.getAttribute("callbackkey") || "data_addtolist" === t.getAttribute("type"));
                        return {
                            variables: t.slice(0, e),
                            lists: t.slice(e, t.length)
                        }
                    },
                    l = n.DataCategory;
                let c,
                    g;
                const u = e => {
                        let o = l(e);
                        if (!t.self.disabled && t.settings.get("moveReportersDown") && (o = (t => {
                            const {variables: e, lists: s} = i(t),
                                o = t => {
                                    const e = [],
                                        s = [];
                                    for (const o of t)
                                        o.hasAttribute("id") || "BUTTON" === o.tagName ? e.push(o) : s.push(o);
                                    return s.length && s[s.length - 1].setAttribute("gap", 24), s.concat(e)
                                };
                            return o(e).concat(o(s))
                        })(o)), !t.self.disabled && t.settings.get("separateLocalVariables") && (o = ((t, e) => {
                            const {variables: o, lists: n} = i(e),
                                a = t => {
                                    const e = document.createElement("label");
                                    return e.setAttribute("text", s(t)), e
                                },
                                r = t => {
                                    if (t.length > 0) {
                                        for (var e = 0; e < t.length - 1; e++)
                                            t[e].setAttribute("gap", 8);
                                        t[e].setAttribute("gap", 24)
                                    }
                                },
                                l = e => {
                                    const s = [],
                                        o = [],
                                        n = [],
                                        i = [];
                                    for (const a of e)
                                        if (a.hasAttribute("id")) {
                                            const e = a.getAttribute("id"),
                                                s = t.getVariableById(e);
                                            s && s.isLocal ? n.push(a) : o.push(a)
                                        } else
                                            o.length || n.length ? i.push(a) : s.push(a);
                                    const l = s;
                                    return o.length && (l.push(a("for-all-sprites")), r(o), l.push(...o)), n.length && (l.push(a("for-this-sprite-only")), r(n), l.push(...n)), l.concat(i)
                                };
                            return l(o).concat(l(n))
                        })(e, o)), t.self.disabled || !r)
                            return o;
                        const {variables: n, lists: a} = i(o);
                        return c = n, g = a, c
                    },
                    p = () => g,
                    d = n.Flyout.prototype.show;
                n.Flyout.prototype.show = function(t) {
                    return this.workspace_.registerToolboxCategoryCallback("VARIABLE", u), this.workspace_.registerToolboxCategoryCallback("LIST", p), d.call(this, t)
                };
                const b = a.runtime.getBlocksXML;
                a.runtime.getBlocksXML = function(e) {
                    const s = b.call(this, e);
                    return r = t.settings.get("separateListCategory"), !t.self.disabled && r && s.push({
                        id: "data",
                        xml: '\n        <category\n          name="%{BKY_CATEGORY_VARIABLES}"\n          id="variables"\n          colour="#FF8C1A"\n          secondaryColour="#DB6E00"\n          custom="VARIABLE">\n        </category>\n        <category\n          name="'.concat(o("list-category"), '"\n          id="lists"\n          colour="#FF661A"\n          secondaryColour="#FF5500"\n          custom="LIST">\n        </category>')
                    }), s
                },
                a.editingTarget && a.emitWorkspaceUpdate(),
                t.settings.addEventListener("change", e => {
                    if (t.settings.get("separateListCategory") !== r)
                        a.editingTarget && a.emitWorkspaceUpdate();
                    else {
                        const t = Blockly.getMainWorkspace();
                        t && t.refreshToolboxSelection_()
                    }
                });
                const h = () => {
                    if (t.settings.get("separateListCategory") && a.editingTarget && a.emitWorkspaceUpdate(), t.settings.get("separateLocalVariables") || t.settings.get("moveReportersDown")) {
                        const t = Blockly.getMainWorkspace();
                        t && t.refreshToolboxSelection_()
                    }
                };
                t.self.addEventListener("disabled", () => {
                    h()
                }),
                t.self.addEventListener("reenabled", () => {
                    h()
                })
            }
        }
    }
}]);
