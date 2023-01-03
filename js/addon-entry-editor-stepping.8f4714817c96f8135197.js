(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[26], {
    1486: function(t, e, s) {
        "use strict";
        const o = "http://www.w3.org/2000/svg",
            i = document.createElementNS(o, "svg");
        i.style.position = "fixed",
        i.style.top = "-999999px",
        i.style.width = "0",
        i.style.height = "0",
        document.body.appendChild(i);
        let n = 0;
        const r = new WeakMap,
            l = t => (r.get(t) || r.set(t, new Set), r.get(t)),
            c = (t, e) => {
                let s;
                for (const t of e)
                    (!s || t.priority > s.priority) && (s = t);
                t.style.filter = s ? s.filter : ""
            },
            u = (t, e) => {
                const s = l(t);
                s.add(e),
                c(t, s)
            },
            a = (t, e) => {
                const s = l(t);
                s.delete(e),
                c(t, s)
            };
        e.a = class {
            constructor(t, e)
            {
                this.priority = t;
                const s = "sa_glower_filter".concat(n++);
                this.filter = 'url("#'.concat(s, '")'),
                this.previousElements = new Set;
                const r = document.createElementNS(o, "filter");
                r.id = s,
                r.setAttribute("width", "180%"),
                r.setAttribute("height", "160%"),
                r.setAttribute("x", "-40%"),
                r.setAttribute("y", "-30%");
                const l = document.createElementNS(o, "feGaussianBlur");
                l.setAttribute("in", "SourceGraphic"),
                l.setAttribute("stdDeviation", "4"),
                r.appendChild(l);
                const c = document.createElementNS(o, "feComponentTransfer");
                c.setAttribute("result", "outBlur"),
                r.appendChild(c);
                const u = document.createElementNS(o, "feFuncA");
                u.setAttribute("type", "table"),
                u.setAttribute("tableValues", "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"),
                c.appendChild(u);
                const a = document.createElementNS(o, "feFlood");
                a.setAttribute("flood-opacity", "1"),
                a.setAttribute("result", "outColor"),
                r.appendChild(a),
                this.filterFlood = a;
                const d = document.createElementNS(o, "feComposite");
                d.setAttribute("in", "outColor"),
                d.setAttribute("in2", "outBlur"),
                d.setAttribute("operator", "in"),
                d.setAttribute("result", "outGlow"),
                r.appendChild(d);
                const h = document.createElementNS(o, "feComposite");
                h.setAttribute("in", "SourceGraphic"),
                h.setAttribute("in2", "outGlow"),
                h.setAttribute("operator", "over"),
                r.appendChild(h),
                i.appendChild(r),
                this.setColor(e)
            }
            setColor(t)
            {
                this.filterFlood.setAttribute("flood-color", t)
            }
            setGlowingThreads(t)
            {
                const e = new Set,
                    s = Blockly.getMainWorkspace();
                if (s)
                    for (const o of t)
                        o.stack.forEach(t => {
                            const i = s.getBlockById(t);
                            if (!i)
                                return;
                            if (!o.stack.find(t => {
                                let e = i;
                                for (; e.childBlocks_.length;)
                                    if (e = e.childBlocks_[e.childBlocks_.length - 1], t === e.id)
                                        return !0;
                                return !1
                            }) && i.svgPath_) {
                                const t = i.svgPath_;
                                e.add(t)
                            }
                        });
                for (const t of this.previousElements)
                    e.has(t) || a(t, this);
                for (const t of e)
                    this.previousElements.has(t) || u(t, this);
                this.previousElements = e
            }
        }
    },
    1664: function(t, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "resources", (function() {
            return n
        }));
        var o = s(1481),
            i = s(1486);
        const n = {
            "userscript.js": async function({addon: t, console: e}) {
                const s = t.tab.traps.vm,
                    n = new i.a(0, t.settings.get("highlight-color"));
                t.settings.addEventListener("change", () => {
                    n.setColor(t.settings.get("highlight-color"))
                }),
                t.self.addEventListener("disabled", () => {
                    n.setGlowingThreads([])
                });
                const r = s.runtime._step;
                s.runtime._step = function(...e) {
                    if (r.call(this, ...e), !t.self.disabled) {
                        const t = Object(o.a)(),
                            e = s.runtime.threads.filter(e => e !== t && !e.target.blocks.forceNoGlow && !e.isCompiled);
                        n.setGlowingThreads(e)
                    }
                }
            }
        }
    }
}]);
