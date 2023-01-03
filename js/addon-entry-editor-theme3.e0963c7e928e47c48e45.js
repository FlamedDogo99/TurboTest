(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[27], {
    1565: function(o, t, e) {
        (o.exports = e(9)(!1)).push([o.i, ".blocklyEditableText > text {\n  fill: var(--editorTheme3-inputColor-text);\n}\n.blocklyHtmlInput {\n  background-color: var(--editorTheme3-inputColor);\n  color: var(--editorTheme3-inputColor-text);\n}\n\n.blocklyDropDownDiv .goog-menuitem-highlight,\n.blocklyDropDownDiv .goog-menuitem-hover,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem-highlight {\n  background-color: var(--editorTheme3-hoveredItem, rgba(0, 0, 0, 0.2));\n}\n\n.scratchCommentRect {\n  fill: var(--editorTheme3-commentColor);\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: var(--editorTheme3-commentColor);\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentBorder);\n}\n.scratchCommentTextarea::placeholder {\n  color: var(--editorTheme3-commentTextTransparent);\n}\n.scratchCommentText {\n  fill: var(--editorTheme3-commentText);\n  color: var(--editorTheme3-commentText);\n}\n", ""])
    },
    1566: function(o, t, e) {
        (o.exports = e(9)(!1)).push([o.i, ".scratchCategoryItemBubble::after {\n  /* block-palette-icons */\n  filter: brightness(0);\n  opacity: 0.6;\n}\n\n.blocklyDropDownDiv .goog-menuitem,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: #575e75;\n}\n.blocklyDropDownDiv .blocklyText {\n  fill: #575e75;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-text: #575e75;\n  --sa-block-gray-text: #575e75;\n  --sa-block-text-on-bright-background: #575e75;\n}\n", ""])
    },
    1567: function(o, t, e) {
        (o.exports = e(9)(!1)).push([o.i, ".scratchCategoryItemBubble::after {\n  /* block-palette-icons */\n  filter: brightness(0);\n  opacity: 0.6;\n}\n\n.u-dropdown-searchbar,\n.u-dropdown-searchbar:focus,\n.blocklyDropDownDiv .goog-menuitem,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: #575e75;\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n\n.blocklyAngleDragHandle {\n  stroke: black;\n  stroke-opacity: 0.15;\n  paint-order: stroke fill;\n}\n\n.scratchCommentRect {\n  fill: #feffff;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #ffffff;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n.scratchCommentText {\n  fill: #575e75;\n  color: #575e75;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary);\n  --sa-block-gray-text: #575e75;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: white;\n}\n", ""])
    },
    1568: function(o, t, e) {
        (o.exports = e(9)(!1)).push([o.i, ".u-dropdown-searchbar {\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n.blocklyDropDownDiv .goog-menuitem-checkbox {\n  filter: brightness(0) invert(1);\n}\n\n.scratchCommentRect {\n  fill: #282828;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #282828;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.scratchCommentText {\n  fill: #ffffff;\n  color: #ffffff;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary);\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: white;\n}\n", ""])
    },
    1636: function(o, t, e) {
        "use strict";
        e.r(t),
        e.d(t, "resources", (function() {
            return p
        }));
        var r = e(1484);
        const n = {
                id: null,
                settingId: "Pen-color",
                colorId: "pen"
            },
            l = {
                id: null,
                settingId: "tw-color",
                colorId: "tw"
            },
            c = {
                settingId: "sa-color",
                colorId: "sa"
            },
            i = [{
                id: "motion",
                settingId: "motion-color",
                colorId: "motion"
            }, {
                id: "looks",
                settingId: "looks-color",
                colorId: "looks"
            }, {
                id: "sound",
                settingId: "sounds-color",
                colorId: "sounds"
            }, {
                id: "events",
                settingId: "events-color",
                colorId: "event"
            }, {
                id: "control",
                settingId: "control-color",
                colorId: "control"
            }, {
                id: "sensing",
                settingId: "sensing-color",
                colorId: "sensing"
            }, {
                id: "operators",
                settingId: "operators-color",
                colorId: "operators"
            }, {
                id: "variables",
                settingId: "data-color",
                colorId: "data"
            }, {
                id: "lists",
                settingId: "data-lists-color",
                colorId: "data_lists"
            }, {
                id: "myBlocks",
                settingId: "custom-color",
                colorId: "more"
            }, n, l, c];
        var s = e(1565),
            a = e.n(s),
            d = e(1566),
            b = e.n(d),
            u = e(1567),
            h = e.n(u),
            g = e(1568),
            m = e.n(g);
        const p = {
            "theme3.js": async function({addon: o, console: t}) {
                const e = await o.tab.traps.getBlockly(),
                    s = JSON.parse(JSON.stringify(e.Colours));
                s.sa = {
                    primary: "#29beb8",
                    secondary: "#3aa8a4",
                    tertiary: "#3aa8a4"
                };
                let a = o.settings.get("text");
                const d = () => !o.self.disabled && ("colorOnWhite" === a || "colorOnBlack" === a),
                    b = t => o.self.disabled ? s[t.colorId].primary : "colorOnWhite" === a ? "#feffff" : "colorOnBlack" === a ? "#282828" : o.settings.get(t.settingId),
                    u = t => o.self.disabled ? s[t.colorId].secondary : d() ? Object(r.a)(b(t), Object(r.b)(o.settings.get(t.settingId), {
                        a: .15
                    })) : Object(r.b)(o.settings.get(t.settingId), {
                        r: .9,
                        g: .9,
                        b: .9
                    }),
                    h = t => o.self.disabled ? s[t.colorId].tertiary : d() ? o.settings.get(t.settingId) : Object(r.b)(o.settings.get(t.settingId), {
                        r: .8,
                        g: .8,
                        b: .8
                    }),
                    g = t => {
                        if (t instanceof e.Block || t instanceof e.Field) {
                            const o = t instanceof e.Block ? t : t.sourceBlock_;
                            if (d()) {
                                let t;
                                return t = o.isShadow() && o.getParent() ? o.getParent().getColour() : o.getColour(), Object(r.a)(t, Object(r.b)(o.getColourTertiary(), {
                                    a: .25
                                }))
                            }
                            return o.getColourTertiary()
                        }
                        return d() ? Object(r.a)(b(t), Object(r.b)(o.settings.get(t.settingId), {
                            a: .25
                        })) : h(t)
                    },
                    m = t => o.self.disabled || "white" === a ? "#ffffff" : "black" === a ? "#575e75" : t ? t.sourceBlock_.getColourTertiary() : "#000000",
                    p = () => o.self.disabled ? "#ffffff" : {
                        white: "#ffffff",
                        black: "#575e75",
                        colorOnWhite: "#575e75",
                        colorOnBlack: "#ffffff"
                    }[a],
                    f = e.Block.prototype.makeColour_;
                e.Block.prototype.makeColour_ = function(o) {
                    return "string" == typeof o && /^#(?:[0-9A-Za-z]{2}){3,4}$/.test(o) ? o : f(o)
                };
                const k = e.Toolbox.Category.prototype.createDom;
                e.Toolbox.Category.prototype.createDom = function() {
                    if (k.call(this), this.iconURI_)
                        return;
                    const o = i.find(o => o.id === this.id_);
                    o && (this.bubble_.style.backgroundColor = d() ? g(o) : b(o), this.bubble_.style.borderColor = h(o))
                };
                const y = e.Block.prototype.setColour;
                e.Block.prototype.setColour = function(o, t, e) {
                    return o.toLowerCase() === s.pen.primary.toLowerCase() && (o = b(n), t = u(n), e = h(n)), this.type.startsWith("tw_") && (o = b(l), t = u(l), e = h(l)), y.call(this, o, t, e)
                };
                const C = e.BlockSvg.prototype.updateColour;
                e.BlockSvg.prototype.updateColour = function() {
                    C.call(this);
                    for (const o of this.inputList)
                        o.outlinePath && o.outlinePath.setAttribute("fill", g(this))
                };
                const x = e.BlockSvg.prototype.showContextMenu_;
                e.BlockSvg.prototype.showContextMenu_ = function(o) {
                    return e.WidgetDiv.DIV.style.setProperty("--editorTheme3-hoveredItem", g(this)), x.call(this, o)
                };
                const v = e.FieldLabel.prototype.init;
                e.FieldLabel.prototype.init = function() {
                    v.call(this),
                    this.textElement_.style.fill = m(this)
                };
                const I = e.FieldTextInput.prototype.init;
                e.FieldTextInput.prototype.init = function() {
                    I.call(this),
                    this.sourceBlock_.isShadow() || this.box_.setAttribute("fill", g(this))
                };
                const w = e.FieldDropdown.prototype.init;
                e.FieldDropdown.prototype.init = function() {
                    w.call(this),
                    this.textElement_.style.setProperty("fill", m(this), "important"),
                    "#ffffff" !== m(this) && (this.arrow_.style.filter = Object(r.d)(m(this)))
                };
                const _ = e.FieldDropdown.prototype.showEditor_;
                e.FieldDropdown.prototype.showEditor_ = function() {
                    let o;
                    _.call(this),
                    this.disableColourChange_ || (this.sourceBlock_.isShadow() ? this.sourceBlock_.setShadowColour(g(this)) : this.box_ && this.box_.setAttribute("fill", g(this))),
                    o = this.sourceBlock_.isShadow() && this.sourceBlock_.getParent() ? this.sourceBlock_.getParent().getColour() : this.sourceBlock_.getColour(),
                    e.DropDownDiv.DIV_.style.backgroundColor = Object(r.e)(o),
                    d() ? e.DropDownDiv.getContentDiv().style.setProperty("--editorTheme3-hoveredItem", g(this)) : e.DropDownDiv.getContentDiv().style.removeProperty("--editorTheme3-hoveredItem")
                };
                const T = e.FieldVariable.prototype.init;
                e.FieldVariable.prototype.init = function() {
                    T.call(this),
                    this.textElement_.style.setProperty("fill", m(this), "important")
                };
                const D = e.FieldVariableGetter.prototype.init;
                e.FieldVariableGetter.prototype.init = function() {
                    D.call(this),
                    this.textElement_.style.fill = m(this)
                };
                const B = e.FieldMatrix.prototype.updateMatrix_;
                e.FieldMatrix.prototype.updateMatrix_ = function() {
                    B.call(this);
                    for (let o = 0; o < this.matrix_.length; o++)
                        "0" !== this.matrix_[o] && (this.fillMatrixNode_(this.ledButtons_, o, p()), this.fillMatrixNode_(this.ledThumbNodes_, o, p()))
                };
                const F = e.FieldMatrix.prototype.createButton_;
                e.FieldMatrix.prototype.createButton_ = function(o) {
                    return "#FFFFFF" === o && (o = p()), F.call(this, o)
                };
                const O = () => {
                    const t = o.tab.traps.vm;
                    a = o.settings.get("text");
                    for (const o of i) {
                        const t = "--editorTheme3-".concat(o.colorId);
                        for (const [e, r] of Object.entries({
                            primary: b(o),
                            secondary: u(o),
                            tertiary: h(o),
                            field: g(o)
                        }))
                            document.documentElement.style.setProperty("".concat(t, "-").concat(e), r);
                        e.Colours[o.colorId] && (e.Colours[o.colorId].primary = b(o), e.Colours[o.colorId].secondary = u(o), e.Colours[o.colorId].tertiary = h(o))
                    }
                    var r,
                        n;
                    o.tab.setCustomBlockColor({
                        color: b(c),
                        secondaryColor: u(c),
                        tertiaryColor: h(c)
                    }),
                    e.Colours.textField = (r = "input-color", n = "textField", o.self.disabled ? s[n] : o.settings.get(r)),
                    "#575e75" === p() ? e.Colours.fieldShadow = "rgba(0, 0, 0, 0.15)" : e.Colours.fieldShadow = s.fieldShadow;
                    const l = e.getMainWorkspace(),
                        d = l.getFlyout(),
                        m = l.getToolbox();
                    t.editingTarget && t.emitWorkspaceUpdate();
                    const f = d.getWorkspace();
                    e.Xml.clearWorkspaceAndLoadFromXml(e.Xml.workspaceToDom(f), f),
                    m.populate_(l.options.languageTree)
                };
                O(),
                o.settings.addEventListener("change", O),
                o.self.addEventListener("disabled", O),
                o.self.addEventListener("reenabled", O)
            },
            "theme3.css": a.a,
            "black_text.css": b.a,
            "color_on_white.css": h.a,
            "color_on_black.css": m.a
        }
    }
}]);
