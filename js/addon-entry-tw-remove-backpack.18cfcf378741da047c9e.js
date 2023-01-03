(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[48], {
    1601: function(n, e, s) {
        (n.exports = s(9)(!1)).push([n.i, '[class^="backpack_backpack-container"] {\n  display: none;\n}\n', ""])
    },
    1662: function(n, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "resources", (function() {
            return a
        }));
        var c = s(1601);
        const a = {
            "remove-backpack.js": async function({addon: n}) {
                const e = () => window.dispatchEvent(new Event("resize"));
                n.self.addEventListener("disabled", e),
                n.self.addEventListener("reenabled", e),
                e()
            },
            "remove-backpack.css": s.n(c).a
        }
    }
}]);
