(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[13], {
    1634: function(_, R, E) {
        "use strict";
        E.r(R),
        E.d(R, "resources", (function() {
            return I
        }));
        const I = {
            "userscript.js": async function({addon: _, console: R}) {
                var E = await _.tab.traps.getBlockly();
                !function(R) {
                    const I = E.BlockSvg;
                    var N = _.tab.traps.vm;
                    const {GRID_UNIT: T} = I;
                    function A(...A) {
                        !function(R=_.settings.get("paddingSize"), N=_.settings.get("cornerSize"), A=_.settings.get("notchSize")) {
                            let D = R / 100;
                            N /= 100,
                            A /= 100,
                            I.SEP_SPACE_Y = 2 * T * D,
                            I.MIN_BLOCK_X = 16 * T * D,
                            I.MIN_BLOCK_X_OUTPUT = 12 * T * D,
                            I.MIN_BLOCK_X_SHADOW_OUTPUT = 10 * T * D,
                            I.MIN_BLOCK_Y = 12 * T * D,
                            I.EXTRA_STATEMENT_ROW_Y = 8 * T * D,
                            I.MIN_BLOCK_X_WITH_STATEMENT = 40 * T * D,
                            I.MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT = 8 * T * D,
                            I.MIN_BLOCK_Y_REPORTER = 10 * T * D,
                            I.MIN_STATEMENT_INPUT_HEIGHT = 6 * T * D,
                            I.NOTCH_WIDTH = 8 * T * D,
                            I.NOTCH_HEIGHT = 2 * T * D * A,
                            I.NOTCH_START_PADDING = 3 * T,
                            I.ICON_SEPARATOR_HEIGHT = 10 * T * D,
                            I.NOTCH_PATH_LEFT = "c 2,0 3," + 1 * A + " 4," + 2 * A + " l " + 4 * D * A + "," + 4 * D * A + " c 1," + 1 * A + " 2," + 2 * A + " 4," + 2 * A + " h " + 24 * (D - .5) + " c 2,0 3,-" + 1 * A + " 4,-" + 2 * A + " l " + 4 * D * A + "," + -4 * D * A + "c 1,-" + 1 * A + " 2,-" + 2 * A + " 4,-" + 2 * A,
                            I.NOTCH_PATH_RIGHT = "h " + (-4 * (N - 1) - 5 * (1 - A)) + "c -2,0 -3," + 1 * A + " -4," + 2 * A + " l " + -4 * D * A + "," + 4 * D * A + " c -1," + 1 * A + " -2," + 2 * A + " -4," + 2 * A + " h " + -24 * (D - .5) + " c -2,0 -3,-" + 1 * A + " -4,-" + 2 * A + " l " + -4 * D * A + "," + -4 * D * A + "c -1,-" + 1 * A + " -2,-" + 2 * A + " -4,-" + 2 * A,
                            I.INPUT_SHAPE_HEXAGONAL = "M " + 4 * T * D + ",0  h " + 4 * T + " l " + 4 * T * D + "," + 4 * T * D + " l " + -4 * T * D + "," + 4 * T * D + " h " + -4 * T + " l " + -4 * T * D + "," + -4 * T * D + " l " + 4 * T * D + "," + -4 * T * D + " z",
                            I.INPUT_SHAPE_HEXAGONAL_WIDTH = 12 * T * D,
                            I.INPUT_SHAPE_ROUND = "M " + 4 * T + ",0 h " + 4 * T + " a " + 4 * T + " " + 4 * T + " 0 0 1 0 " + 8 * T + " h " + -4 * T + " a " + 4 * T + " " + 4 * T + " 0 0 1 0 -" + 8 * T + " z",
                            I.INPUT_SHAPE_ROUND_WIDTH = 12 * T * D,
                            I.INPUT_SHAPE_HEIGHT = 8 * T * D,
                            I.FIELD_HEIGHT = 8 * T * D,
                            I.FIELD_WIDTH = 6 * T * Math.min(D, 1) + 10 * T * Math.max(D - 1, 0),
                            I.FIELD_DEFAULT_CORNER_RADIUS = 4 * T * D,
                            I.EDITABLE_FIELD_PADDING = 1.5 * T * D,
                            I.BOX_FIELD_PADDING = 2 * T * D,
                            I.DROPDOWN_ARROW_PADDING = 2 * T * D,
                            I.FIELD_WIDTH_MIN_EDIT = 8 * T * D,
                            I.INPUT_AND_FIELD_MIN_X = 12 * T * D,
                            I.INLINE_PADDING_Y = 1 * T * D,
                            I.SHAPE_IN_SHAPE_PADDING[1][0] = 5 * T * D,
                            I.SHAPE_IN_SHAPE_PADDING[1][2] = 5 * T * D,
                            I.SHAPE_IN_SHAPE_PADDING[1][3] = 5 * T * D;
                            var O = E.FieldDropdown.prototype.positionArrow;
                            E.FieldDropdown.prototype.positionArrow = function(_) {
                                return this.arrowY_ = 11 * D, O.call(this, _)
                            },
                            I.CORNER_RADIUS = 1 * T * N * 100 / 100,
                            I.TOP_LEFT_CORNER_START = "m 0," + I.CORNER_RADIUS,
                            I.TOP_LEFT_CORNER = "A " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS + " 0 0,1 " + I.CORNER_RADIUS + ",0",
                            I.TOP_RIGHT_CORNER = "a " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS + " 0 0,1 " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS,
                            I.BOTTOM_RIGHT_CORNER = " a " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS + " 0 0,1 -" + I.CORNER_RADIUS + "," + I.CORNER_RADIUS,
                            I.BOTTOM_LEFT_CORNER = "a " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS + " 0 0,1 -" + I.CORNER_RADIUS + ",-" + I.CORNER_RADIUS,
                            I.INNER_TOP_LEFT_CORNER = " a " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS + " 0 0,0 -" + I.CORNER_RADIUS + "," + I.CORNER_RADIUS,
                            I.INNER_BOTTOM_LEFT_CORNER = "a " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS + " 0 0,0 " + I.CORNER_RADIUS + "," + I.CORNER_RADIUS,
                            I.TOP_RIGHT_CORNER_DEFINE_HAT = "a " + I.DEFINE_HAT_CORNER_RADIUS + "," + I.DEFINE_HAT_CORNER_RADIUS + " 0 0,1 " + I.DEFINE_HAT_CORNER_RADIUS + "," + I.DEFINE_HAT_CORNER_RADIUS + " v " + (1 * T - I.CORNER_RADIUS),
                            I.STATEMENT_INPUT_INNER_SPACE = 2.8 * T - .9 * T * N
                        }(...A),
                        function() {
                            const _ = R.getMainWorkspace();
                            if (_) {
                                N.editingTarget && N.emitWorkspaceUpdate();
                                const E = _.getFlyout();
                                if (E) {
                                    const I = E.getWorkspace();
                                    R.Xml.clearWorkspaceAndLoadFromXml(R.Xml.workspaceToDom(I), I),
                                    _.getToolbox().refreshSelection(),
                                    _.toolboxRefreshEnabled_ = !0
                                }
                            }
                        }()
                    }
                    _.settings.addEventListener("change", () => A()),
                    _.self.addEventListener("disabled", () => {
                        A(100, 100, 100)
                    }),
                    _.self.addEventListener("reenabled", () => A()),
                    A()
                }(window.Blockly)
            }
        }
    }
}]);
