(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[23], {
    1648: function(e, n, s) {
        "use strict";
        s.r(n),
        s.d(n, "resources", (function() {
            return t
        }));
        const t = {
            "userscript.js": async function({addon: e, msg: n}) {
                const s = await e.tab.traps.getBlockly();
                let t = null;
                function o(s, o) {
                    return t || (t = [...s]), e.self.disabled || (s.push(["-", "-"], [",", ","], [".", "."]), s.splice(5, 0, [n("enter-key"), "enter"]), e.settings.get("experimentalKeys") && s.push(["`", "`"], ["=", "="], ["[", "["], ["]", "]"], ["\\", "\\"], [";", ";"], ["'", "'"], ["/", "/"]), o && e.settings.get("shiftKeys") && s.push(["!", "!"], ["@", "@"], ["#", "#"], ["$", "$"], ["%", "%"], ["^", "^"], ["&", "&"], ["*", "*"], ["(", "("], [")", ")"], ["_", "_"], ["+", "+"], ["{", "{"], ["}", "}"], ["|", "|"], [":", ":"], ['"', '"'], ["?", "?"], ["<", "<"], [">", ">"], ["~", "~"]), e.settings.get("twKeys") && s.push(["backspace", "backspace"], ["delete", "delete"], ["shift", "shift"], ["caps lock", "caps lock"], ["scroll lock", "scroll lock"], ["control", "control"], ["escape", "escape"], ["insert", "insert"], ["home", "home"], ["end", "end"], ["page up", "page up"], ["page down", "page down"])), s
                }
                for (const e of ["sensing_keyoptions", "event_whenkeypressed"]) {
                    const n = s.Blocks[e],
                        t = n.init;
                    n.init = function(...n) {
                        const s = this.jsonInit;
                        return this.jsonInit = function(n) {
                            return o(n.args0[0].options, "event_whenkeypressed" === e), s.call(this, n)
                        }, t.call(this, ...n)
                    }
                }
                const i = () => {
                    const e = Blockly.getMainWorkspace(),
                        n = e && e.getFlyout();
                    if (e && n) {
                        const s = [...e.getAllBlocks(), ...n.getWorkspace().getAllBlocks()];
                        for (const e of s) {
                            if ("event_whenkeypressed" !== e.type && "sensing_keyoptions" !== e.type)
                                continue;
                            const n = e.inputList[0];
                            if (!n)
                                continue;
                            const s = n.fieldRow.find(e => e && Array.isArray(e.menuGenerator_));
                            s && (s.menuGenerator_ = o(t ? [...t] : s.menuGenerator_, "event_whenkeypressed" === e.type))
                        }
                    }
                };
                i(),
                e.settings.addEventListener("change", i),
                e.self.addEventListener("disabled", i),
                e.self.addEventListener("reenabled", i)
            }
        }
    }
}]);
