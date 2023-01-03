(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[45], {
    1592: function(e, t, a) {
        (e.exports = a(9)(!1)).push([e.i, ".sa-swap-local-global-hint {\n  padding-bottom: 1rem;\n}\n.sa-swap-local-global-stage {\n  /* resolves scratch class style conflict */\n  display: block;\n}\n", ""])
    },
    1655: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "resources", (function() {
            return n
        }));
        var s = a(1592);
        const n = {
            "userscript.js": async function({addon: e, msg: t, console: a}) {
                const s = await e.tab.traps.getBlockly(),
                    n = e.tab.traps.vm,
                    i = e => e.isStage ? s.ScratchMsgs.translate("SENSING_OF_STAGE", "Stage") : e.getName(),
                    l = e => n.editingTarget.lookupVariableById(e),
                    o = () => n.editingTarget.isStage,
                    r = (e, t) => {
                        "string" == typeof t && (t = e.getVariableById(t)),
                        e.variableMap_.deleteVariable(t)
                    };
                let c = null;
                const d = () => {
                        c && (c(), c = null)
                    },
                    p = function(e) {
                        const t = this.getEventWorkspace_();
                        e ? (c = b(t, this.varId), r(t, this.varId)) : (t.createVariable(this.varName, this.varType, this.varId, this.isLocal, this.isCloud), d())
                    },
                    u = function(e) {
                        const t = this.getEventWorkspace_();
                        e ? (t.createVariable(this.varName, this.varType, this.varId, this.isLocal, this.isCloud), d()) : (c = b(t, this.varId), r(t, this.varId))
                    },
                    g = () => s.Events.fireNow_(),
                    b = (e, t) => {
                        const a = n.runtime._monitorState.get(t),
                            s = l(t);
                        return () => {
                            g();
                            const i = l(t);
                            if (i && (i.value = s.value), a) {
                                a.visible && n.runtime.monitorBlocks.changeBlock({
                                    id: t,
                                    element: "checkbox",
                                    value: !0
                                });
                                const e = !n.runtime.getTargetForStage().variables[t];
                                let l = a;
                                if (e) {
                                    const e = n.editingTarget;
                                    l = l.set("targetId", e.id),
                                    l = l.set("spriteName", e.getName())
                                } else
                                    l = l.set("targetId", null),
                                    l = l.set("spriteName", null);
                                if (i.name !== s.name) {
                                    const e = n.runtime.monitorBlocks,
                                        a = e.getBlock(t);
                                    a && (l = l.set("params", e._getBlockParams(a)))
                                }
                                n.runtime.requestAddMonitor(l)
                            }
                            i.name !== s.name && ((e, t) => {
                                const a = e.getVariableById(t);
                                for (const t of e.getAllBlocks())
                                    t.updateVarName(a)
                            })(e, t)
                        }
                    },
                    m = (e, a, l) => {
                        const c = e.name,
                            d = e.getId(),
                            m = e.type,
                            h = e.isLocal,
                            v = e.isCloud;
                        if (h === a && v === l)
                            return;
                        if (l && a)
                            return void alert(t("cant-convert-cloud"));
                        const f = n.editingTarget;
                        if (h !== a)
                            if (a) {
                                if (o())
                                    return void alert(t("cant-convert-stage"));
                                const e = (e => n.runtime.targets.filter(e => e.isOriginal).filter(t => Object.values(t.blocks._blocks).find(t => t.fields.LIST && t.fields.LIST.id === e || t.fields.VARIABLE && t.fields.VARIABLE.id === e)))(d);
                                if (!e.every(e => e === f))
                                    return void (e.length > 1 ? alert(t("cant-convert-to-local", {
                                        sprites: e.map(i).join(", ")
                                    })) : alert(t("cant-convert-used-elsewhere", {
                                        sprite: i(e[0])
                                    })))
                            } else {
                                const e = ((e, t) => n.runtime.targets.filter(a => a.isOriginal && a.lookupVariableByNameAndType(e, t, !0)))(c, m).filter(e => e !== f);
                                if (e.length > 0)
                                    return void alert(t("cant-convert-conflict", {
                                        sprites: e.map(i).join(", ")
                                    }))
                            }
                        let k = c;
                        v !== l && (l ? k = "☁ " + c : c.startsWith("☁ ") && (k = c.replace("☁ ", "")));
                        const y = e.workspace,
                            C = b(y, d);
                        s.Events.setGroup(!0);
                        try {
                            r(y, e),
                            y.createVariable(k, m, d, a, l)
                        } finally {
                            s.Events.setGroup(!1)
                        }
                        g();
                        const E = y.undoStack_,
                            S = E[E.length - 1],
                            _ = E[E.length - 2];
                        S instanceof s.Events.VarCreate && _ instanceof s.Events.VarDelete && (S.run = u, _.run = p),
                        C()
                    },
                    h = a => {
                        if (e.self.disabled)
                            return;
                        const s = document.querySelector('[class^="prompt_body_"]');
                        if (!s)
                            return;
                        const i = s.parentElement.querySelector('[class^="modal_header-item_"]');
                        i && ("" === a.type ? i.textContent = t("edit-variable-header") : i.textContent = t("edit-list-header"));
                        const l = document.createElement("div");
                        e.tab.displayNoneWhileDisabled(l);
                        const r = (e, t) => {
                                const a = document.createElement("label"),
                                    s = document.createElement("input");
                                "checkbox" === t ? s.type = "checkbox" : (s.name = "variableScopeOption", s.type = "radio", s.value = t),
                                a.appendChild(s);
                                const n = document.createElement("span");
                                return n.textContent = e, a.appendChild(n), {
                                    outer: a,
                                    label: n,
                                    input: s
                                }
                            },
                            c = e.tab.scratchClass("prompt_disabled-label"),
                            d = document.createElement("div");
                        d.className = e.tab.scratchClass("prompt_info-message", "prompt_cloud-option", {
                            others: "sa-swap-local-global-stage"
                        }),
                        d.appendChild(Object.assign(document.createElement("span"), {
                            textContent: e.tab.scratchMessage("gui.gui.variablePromptAllSpritesMessage")
                        }));
                        const p = document.createElement("div");
                        p.className = e.tab.scratchClass("prompt_options-row", "prompt_cloud-option");
                        const u = r(e.tab.scratchMessage("gui.gui.variableScopeOptionAllSprites"), "global"),
                            g = r(e.tab.scratchMessage("gui.gui.variableScopeOptionSpriteOnly"), "local");
                        u.input.checked = !a.isLocal,
                        g.input.checked = a.isLocal,
                        p.appendChild(u.outer),
                        p.appendChild(g.outer);
                        const b = document.createElement("div");
                        b.className = e.tab.scratchClass("prompt_cloud-option");
                        const m = r(e.tab.scratchMessage("gui.gui.cloudVariableOption"), "checkbox");
                        m.input.checked = a.isCloud,
                        n.runtime.canAddCloudVariable() || a.isCloud || (m.input.disabled = !0, b.classList.add(c)),
                        b.appendChild(m.outer);
                        const h = () => {
                            const e = m.input.checked;
                            g.input.disabled = e,
                            g.label.classList.toggle(c, e),
                            e && u.input.click()
                        };
                        m.input.addEventListener("change", h),
                        h();
                        let v = !1;
                        return o() ? l.appendChild(d) : (v = !0, l.appendChild(p)), "" === a.type && (() => {
                            const t = document.querySelector('[class^="gui_blocks-wrapper_"]');
                            let a = t[e.tab.traps.getInternalKey(t)];
                            for (;;) {
                                var s,
                                    n;
                                if (!a)
                                    return !1;
                                const e = null === (s = a.stateNode) || void 0 === s || null === (n = s.props) || void 0 === n ? void 0 : n.canUseCloud;
                                if ("boolean" == typeof e)
                                    return e;
                                a = a.child
                            }
                        })() && (v = !0, l.appendChild(b)), v && l.prepend(Object.assign(document.createElement("div"), {
                            textContent: t("edit"),
                            className: "sa-swap-local-global-hint"
                        })), s.insertBefore(l, s.lastChild), {
                            isLocal: () => g.input.checked,
                            isCloud: () => m.input.checked
                        }
                    },
                    v = s.Variables.renameVariable;
                s.Variables.renameVariable = function(t, a, s) {
                    const n = v.call(this, t, a, (...t) => {
                            s && s(...t),
                            !e.self.disabled && i && m(a, i.isLocal(), i.isCloud())
                        }),
                        i = h(a);
                    return n
                },
                e.tab.createBlockContextMenu((a, n) => {
                    if (!e.self.disabled && ("data" === n.getCategory() || "data-lists" === n.getCategory())) {
                        const e = n.workspace.getVariableById(n.getVars()[0]);
                        e && (a.length > 0 && (a[0].text === s.ScratchMsgs.translate("RENAME_VARIABLE") ? a[0].text = t("edit-variable-option") : a[0].text === s.ScratchMsgs.translate("RENAME_LIST") && (a[0].text = t("edit-list-option"))), a.push({
                            enabled: !0,
                            separator: !0,
                            text: t("to-".concat(e.isLocal ? "global" : "local")),
                            callback: () => m(e, !e.isLocal, e.isCloud)
                        }))
                    }
                    return a
                }, {
                    flyout: !0,
                    blocks: !0
                })
            },
            "style.css": a.n(s).a
        }
    }
}]);
