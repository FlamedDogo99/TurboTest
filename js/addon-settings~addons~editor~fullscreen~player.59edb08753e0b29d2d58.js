(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([[1], {
    119: function(e, t, s) {
        "use strict";
        var a = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Cat blocks",
            description: "Brings back editor cat hat blocks from April Fools 2020.",
            credits: [{
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber/"
            }, {
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            info: [{
                type: "notice",
                text: 'The "watch mouse cursor" setting may impact performance when the editor is open.',
                id: "watch"
            }],
            settings: [{
                id: "watch",
                name: "Watch mouse cursor",
                default: !1,
                type: "boolean"
            }],
            tags: ["theme"],
            enabledByDefault: !1
        };
        var o = {
            editorOnly: !0,
            name: "Developer tools",
            description: "Adds new menu options to the editor: copy/paste blocks, better clean up, and more!",
            credits: [{
                name: "griffpatch"
            }],
            settings: [{
                dynamic: !0,
                name: 'Enhance "Clean up Blocks"',
                id: "enableCleanUpPlus",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Paste blocks at mouse cursor",
                id: "enablePasteBlocksAtMouse",
                type: "boolean",
                default: !0
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            tags: ["recommended"],
            enabledByDefault: !0
        };
        var n = {
            editorOnly: !0,
            name: "Editor find bar",
            description: "Adds a find bar to find and jump to scripts, costumes and sounds next to the sounds tab. Use Ctrl+Left and Ctrl+Right in the code area to navigate to previous or next visited position after using the find bar.",
            info: [{
                text: 'This addon was previously part of the "developer tools" addon but has moved here.',
                id: "developer-tools"
            }],
            credits: [{
                name: "griffpatch"
            }, {
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/thecolaber/"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "userstyle.css"
            }],
            tags: ["recommended"],
            enabledByDefault: !0
        };
        var i = {
            editorOnly: !0,
            name: "Insert blocks by name",
            description: "Middle click on the code area, use Ctrl+Space or Shift+Space to bring up a floating input box where you can type the name of a block (or parts of it) and drag the block into the code area. Hold Shift while dragging to avoid closing the box when adding multiple blocks at once.",
            credits: [{
                name: "griffpatch"
            }, {
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber/"
            }],
            tags: ["recommended"],
            enabledByDefault: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "userstyle.css"
            }],
            info: [{
                text: 'This addon was previously part of the "developer tools" addon but has moved here.',
                id: "developer-tools"
            }]
        };
        var r = {
            name: "Jump to custom block definition",
            description: "Allows you to jump to a custom block's definition using the middle mouse button or Shift+Click on the block.",
            info: [{
                text: 'This addon was previously part of the "developer tools" addon but has moved here.',
                id: "developer-tools"
            }],
            credits: [{
                name: "griffpatch"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            tags: ["recommended"],
            enabledByDefault: !0,
            dynamicDisable: !0
        };
        const l = "undefined" != typeof window && "ontouchstart" in window,
            d = "undefined" != typeof navigator && navigator.clipboard && navigator.clipboard.write,
            c = "undefined" != typeof MediaRecorder && MediaRecorder.isTypeSupported("video/webm"),
            u = {
                editorOnly: !0,
                name: "Searchable dropdowns",
                description: "Allows you to search block dropdowns.",
                credits: [{
                    name: "GarboMuffin"
                }],
                dynamicDisable: !0,
                userscripts: [{
                    url: "userscript.js"
                }],
                userstyles: [{
                    url: "userscript.css"
                }],
                tags: ["recommended"],
                enabledByDefault: !0
            };
        l && (u.enabledByDefault = !1);
        var m = u;
        var p = {
            editorOnly: !0,
            name: "Data category tweaks",
            description: 'Provides tweaks for the Data ("Variables") block category.',
            credits: [{
                name: "GarboMuffin"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                name: "Separate List Category",
                id: "separateListCategory",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Separate Sprite-only Variables",
                id: "separateLocalVariables",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Move data blocks above variables list",
                id: "moveReportersDown",
                type: "boolean",
                default: !1
            }],
            tags: ["recommended"],
            enabledByDefault: !1
        };
        var y = {
            editorOnly: !0,
            name: "Block palette category icons",
            description: "Adds icons inside the colored circles that identify block categories.",
            tags: ["theme"],
            enabledByDefault: !1,
            dynamicDisable: !0,
            userstyles: [{
                url: "userstyle.css"
            }],
            credits: [{
                name: "--Explosion--",
                link: "https://scratch.mit.edu/users/--Explosion--/"
            }, {
                name: "RedGuy7",
                link: "https://scratch.mit.edu/users/RedGuy7/"
            }]
        };
        var h = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Auto-hiding block palette",
            description: 'Hides the block palette if not hovered. Click the lock icon to lock it in place temporarily. Alternatively, use "category click" mode.',
            credits: [{
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber/"
            }, {
                name: "Maximouse",
                link: "https://scratch.mit.edu/users/Maximouse/"
            }],
            info: [{
                text: '"Palette area hover" mode only extends the viewing area. If you want to be able to drag blocks into that area without them getting trashed, use one of the other modes.',
                id: "hoverExplanation"
            }],
            dynamicDisable: !0,
            customCssVariables: [{
                name: "lockDisplay",
                value: {
                    type: "map",
                    source: {
                        type: "settingValue",
                        settingId: "toggle"
                    },
                    options: {
                        hover: "flex",
                        cathover: "flex",
                        category: "none"
                    }
                }
            }, {
                name: "placeholderDisplay",
                value: {
                    type: "map",
                    source: {
                        type: "settingValue",
                        settingId: "toggle"
                    },
                    options: {
                        hover: "block",
                        cathover: "none",
                        category: "none"
                    }
                }
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            settings: [{
                dynamic: !0,
                name: "Toggle on...",
                id: "toggle",
                type: "select",
                potentialValues: [{
                    id: "hover",
                    name: "Palette area hover"
                }, {
                    id: "cathover",
                    name: "Category hover"
                }, {
                    id: "category",
                    name: "Category click"
                }],
                default: "cathover"
            }, {
                dynamic: !0,
                name: "Animation speed",
                id: "speed",
                type: "select",
                potentialValues: [{
                    id: "none",
                    name: "Instant"
                }, {
                    id: "short",
                    name: "Quick"
                }, {
                    id: "default",
                    name: "Default"
                }, {
                    id: "long",
                    name: "Slow"
                }],
                default: "default"
            }],
            tags: ["recommended"]
        };
        const f = {
            name: "Project video recorder",
            description: 'Adds a "start recording" button to the editor menu bar that allows you to record the project\'s stage.',
            tags: ["recommended"],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            enabledByDefault: !1
        };
        c || (f.unsupported = !0);
        var b = f;
        var g = {
            noTranslations: !0,
            name: "File drag and drop",
            description: 'Lets you drag images and sounds from your file manager into the sprite pane or costume/sound list. You can also drag text files into lists or "ask and wait" question inputs.',
            credits: [{
                name: "Sheep_maker"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "dragged-over.css"
            }],
            settings: [{
                dynamic: !0,
                id: "use-hd-upload",
                name: "Use HD uploads",
                type: "boolean",
                default: !1,
                if: {
                    addonEnabled: "better-img-uploads"
                }
            }],
            dynamicDisable: !0,
            tags: ["recommended"],
            enabledByDefault: !0
        };
        var k = {
            editorOnly: !0,
            name: "Debugger",
            description: 'Adds a new "debugger" window to the editor. Allows for logging into the "Logs" tab of the debugger window using the "log", "warn" and "error" blocks.',
            credits: [{
                name: "Tacodude7729",
                link: "https://scratch.mit.edu/users/Tacodude7729/"
            }, {
                name: "GarboMuffin"
            }, {
                name: "GrahamSH"
            }, {
                name: "TheColaber"
            }, {
                name: "retronbv"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            settings: [{
                dynamic: !0,
                name: "Clear logs on green flag",
                id: "log_clear_greenflag",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Log green flag clicks",
                id: "log_greenflag",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Log clone creation",
                id: "log_clone_create",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Log when max clones exceeded",
                id: "log_failed_clone_creation",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Log broadcasts",
                id: "log_broadcasts",
                type: "boolean",
                default: !1
            }],
            tags: ["beta"],
            enabledByDefault: !1
        };
        var v = {
            name: "Pause button",
            description: "Adds a pause button next to the green flag.",
            credits: [{
                name: "Jeffalo"
            }, {
                name: "GarboMuffin"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            tags: ["recommended"],
            enabledByDefault: !0
        };
        var w = {
            noTranslations: !0,
            name: "Muted project player mode",
            description: "Ctrl+Click the green flag to mute/unmute the project.",
            info: [{
                text: "On macOS, use the Cmd key instead of the Ctrl key.",
                id: "macOS"
            }],
            credits: [{
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber/"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0,
            enabledByDefault: !0,
            tags: ["recommended"]
        };
        var D = {
            noTranslations: !0,
            name: "Project volume slider",
            description: "Adds a volume slider next to the green flag controls.",
            credits: [{
                name: "samq64",
                link: "https://scratch.mit.edu/users/samq64/"
            }, {
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "userstyle.css"
            }],
            settings: [{
                name: "Default volume",
                id: "defVol",
                type: "integer",
                min: 0,
                max: 100,
                default: 100
            }],
            dynamicDisable: !0,
            tags: ["recommended", "new"]
        };
        var S = {
            editorOnly: !0,
            name: "Clone counter",
            description: "Adds a counter above the stage in the editor which shows the total amount of clones.",
            credits: [{
                name: "Jeffalo"
            }, {
                name: "OregSam",
                link: "https://scratch.mit.edu/users/simiagain/"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            settings: [{
                dynamic: !0,
                id: "showicononly",
                name: "Show icon only",
                default: !1,
                type: "boolean"
            }],
            tags: ["recommended"],
            enabledByDefault: !1
        };
        var x = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Mouse position",
            description: "Displays your mouse x/y position above the stage in the editor.",
            credits: [{
                name: "Jeffalo"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            tags: ["recommended"],
            enabledByDefault: !1
        };
        var C = {
            editorOnly: !0,
            name: "Hex color picker",
            description: "Adds hex code inputs to color pickers.",
            tags: ["recommended"],
            credits: [{
                name: "Richie Bendall"
            }, {
                name: "apple502j"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            dynamicDisable: !0,
            enabledByDefault: !0
        };
        var T = {
            editorOnly: !0,
            name: "Sprite deletion confirmation",
            description: "Asks if you're sure when deleting a sprite inside a project.",
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0,
            tags: ["recommended"],
            enabledByDefault: !1
        };
        var O = {
            editorOnly: !0,
            name: "Block count",
            description: 'Shows the total number of blocks in a project in the editor menu bar. Previously part of "sprite and script count".',
            tags: [],
            credits: [{
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber/"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "blockcount.js"
            }]
        };
        var j = {
            editorOnly: !0,
            name: "Onion skinning",
            description: "Shows transparent overlays of previous or next costumes when editing a costume. Controlled by buttons under the costume editor by the zoom buttons.",
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            settings: [{
                id: "default",
                name: "Enable by default",
                type: "boolean",
                default: !1
            }, {
                id: "previous",
                name: "Default previous costumes",
                type: "integer",
                default: 1,
                min: 0,
                max: 100
            }, {
                id: "next",
                name: "Default next costumes",
                type: "integer",
                default: 0,
                min: 0,
                max: 100
            }, {
                id: "opacity",
                name: "Opacity (%)",
                type: "integer",
                min: 0,
                max: 100,
                default: 25
            }, {
                id: "opacityStep",
                name: "Opacity Step (%)",
                type: "integer",
                min: 0,
                max: 100,
                default: 10
            }, {
                id: "layering",
                name: "Default layering",
                type: "select",
                default: "front",
                potentialValues: [{
                    id: "front",
                    name: "Front"
                }, {
                    id: "behind",
                    name: "Behind"
                }]
            }, {
                id: "mode",
                name: "Default mode",
                type: "select",
                default: "merge",
                potentialValues: [{
                    id: "merge",
                    name: "Merge images"
                }, {
                    id: "tint",
                    name: "Color tint"
                }]
            }, {
                name: "Previous costume tint",
                id: "beforeTint",
                type: "color",
                default: "#FF0000"
            }, {
                name: "Next costume tint",
                id: "afterTint",
                type: "color",
                default: "#0000FF"
            }],
            tags: ["recommended"],
            dynamicDisable: !0,
            enabledByDefault: !0
        };
        var A = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Customizable default costume editor colors",
            description: "Changes the default colors and outline size used by the costume editor.",
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                name: "Default fill color",
                id: "fill",
                type: "color",
                default: "#9966FF"
            }, {
                dynamic: !0,
                name: "Default outline color",
                id: "stroke",
                type: "color",
                default: "#000000"
            }, {
                dynamic: !0,
                name: "Default outline size",
                id: "strokeSize",
                type: "integer",
                min: 0,
                max: 100,
                default: 4
            }, {
                dynamic: !0,
                name: "Use previous color instead of resetting after switching tools",
                id: "persistence",
                type: "boolean",
                default: !0
            }],
            tags: [],
            dynamicDisable: !0,
            enabledByDefault: !1
        };
        const B = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Bitmap images copying",
            description: "Allows you to copy a bitmap image from the costume editor into the system clipboard, so that you can paste it in other websites or software.",
            info: [{
                type: "notice",
                text: '"Right click → copy" is not supported. You must press Ctrl+C while a bitmap image is selected.',
                id: "norightclick"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0,
            tags: [],
            enabledByDefault: !0
        };
        d || (B.unsupported = !0);
        var F = B;
        var E = {
            editorOnly: !0,
            name: "2D color picker",
            description: "Replaces saturation and brightness sliders in the costume editor with a 2D color picker. Hold Shift while dragging the cursor to change the values on a single axis.",
            tags: [],
            credits: [{
                name: "Ucrash"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            enabledByDefault: !1
        };
        var M = {
            editorOnly: !0,
            name: "HD image uploads",
            description: 'Adds a new button above the "upload costume" button that automatically converts uploaded bitmap images into SVG (vector) images to avoid losing quality.',
            tags: ["beta"],
            info: [{
                type: "notice",
                text: "Avoid using the HD upload button if you plan to edit the image after uploading.",
                id: "notSuitableEdit"
            }],
            credits: [{
                name: "ErrorGamer2000",
                link: "https://scratch.mit.edu/users/ErrorGamer2000/"
            }, {
                name: "GarboMuffin"
            }, {
                name: "World_Languages"
            }, {
                name: "SheepTester",
                link: "https://scratch.mit.edu/users/Sheep_maker/"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            settings: [{
                dynamic: !0,
                name: "Image sizing",
                id: "fitting",
                type: "select",
                potentialValues: [{
                    id: "full",
                    name: "Original size"
                }, {
                    id: "fill",
                    name: "Stretch to fill stage"
                }, {
                    id: "fit",
                    name: "Shrink to fit stage"
                }],
                default: "fit"
            }]
        };
        var G = {
            editorOnly: !0,
            noTranslations: !0,
            enabledByDefault: !0,
            name: "Select stage colors in the costume editor",
            description: "Allows the costume editor's eye dropper to also pick colors from the stage.",
            credits: [{
                name: "GarboMuffin"
            }],
            tags: [],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            dynamicDisable: !0
        };
        var z = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Customizable block shape",
            description: "Adjust the padding, corner radius, and notch height of blocks.",
            tags: ["theme"],
            credits: [{
                name: "SheepTester",
                link: "https://scratch.mit.edu/users/Sheep_maker/"
            }, {
                name: "lisa_wolfgang",
                link: "https://scratch.mit.edu/users/lisa_wolfgang/"
            }, {
                name: "GarboMuffin",
                link: "https://scratch.mit.edu/users/GarboMuffin/"
            }],
            enabledByDefault: !1,
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            info: [{
                type: "notice",
                text: "Decreasing the padding size is only visible to you, so when your projects are viewed by other users, your scripts may overlap.",
                id: "paddingWarning"
            }],
            settings: [{
                dynamic: !0,
                name: "Padding size (50-200%)",
                id: "paddingSize",
                type: "integer",
                min: 50,
                default: 100,
                max: 200
            }, {
                dynamic: !0,
                name: "Corner size (0-300%)",
                id: "cornerSize",
                type: "integer",
                min: 0,
                default: 100,
                max: 300
            }, {
                dynamic: !0,
                name: "Notch height (0-150%)",
                id: "notchSize",
                type: "integer",
                min: 0,
                default: 100,
                max: 150
            }],
            presets: [{
                name: "3.0 Blocks",
                id: "default3",
                description: "The regular appearance of Scratch 3.0 blocks",
                values: {
                    paddingSize: 100,
                    cornerSize: 100,
                    notchSize: 100
                }
            }, {
                name: "2.0 Blocks",
                id: "default2",
                description: "An appearance similar to Scratch 2.0 blocks",
                values: {
                    paddingSize: 70,
                    cornerSize: 150,
                    notchSize: 75
                }
            }, {
                name: "3.0 Flat",
                id: "flat3",
                description: "Scratch 3.0 blocks with notches and corners removed",
                values: {
                    paddingSize: 100,
                    cornerSize: 0,
                    notchSize: 0
                }
            }, {
                name: "2.0 Flat",
                id: "flat2",
                description: "Scratch 2.0 blocks with notches and corners removed",
                values: {
                    paddingSize: 70,
                    cornerSize: 0,
                    notchSize: 0
                }
            }]
        };
        var _ = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Alternating nested block colors",
            description: "Makes blocks of the same category alternate between lighter and darker shades when nested inside each other. This is also known as zebra striping.",
            credits: [{
                name: "CST1229",
                link: "https://scratch.mit.edu/users/CST1229/"
            }, {
                name: "GarboMuffin"
            }, {
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/thecolaber"
            }],
            tags: [],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "userstyle.css"
            }],
            settings: [{
                dynamic: !0,
                name: "Shade",
                id: "shade",
                type: "select",
                potentialValues: [{
                    name: "Lighter",
                    id: "lighter"
                }, {
                    name: "Darker",
                    id: "darker"
                }],
                default: "lighter"
            }, {
                dynamic: !0,
                name: "Intensity (0-100%)",
                id: "intensity",
                type: "integer",
                min: 0,
                default: 20,
                max: 100
            }],
            customCssVariables: [{
                name: "shadeNumber",
                value: {
                    type: "map",
                    source: {
                        type: "settingValue",
                        settingId: "shade"
                    },
                    options: {
                        lighter: "1",
                        darker: "-1"
                    }
                }
            }],
            dynamicDisable: !0
        };
        var P = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Customizable block colors",
            description: "Edit block colors for each category in the editor.",
            credits: [{
                name: "NitroCipher/ZenithRogue"
            }, {
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber/"
            }],
            customCssVariables: [{
                name: "inputColor-text",
                value: {
                    type: "alphaThreshold",
                    source: {
                        type: "settingValue",
                        settingId: "input-color"
                    },
                    opaque: {
                        type: "textColor",
                        source: {
                            type: "settingValue",
                            settingId: "input-color"
                        }
                    },
                    transparent: {
                        type: "map",
                        source: {
                            type: "settingValue",
                            settingId: "text"
                        },
                        options: {
                            white: "#ffffff",
                            black: "#575e75",
                            colorOnWhite: "#575e75",
                            colorOnBlack: "#ffffff"
                        }
                    }
                }
            }, {
                name: "inputColor-forumText",
                value: {
                    type: "alphaThreshold",
                    source: {
                        type: "settingValue",
                        settingId: "input-color"
                    },
                    opaque: {
                        type: "textColor",
                        black: "#000000",
                        source: {
                            type: "settingValue",
                            settingId: "input-color"
                        }
                    },
                    transparent: {
                        type: "map",
                        source: {
                            type: "settingValue",
                            settingId: "text"
                        },
                        options: {
                            white: "#ffffff",
                            black: "#000000",
                            colorOnWhite: "#000000",
                            colorOnBlack: "#ffffff"
                        }
                    }
                }
            }, {
                name: "commentText",
                value: {
                    type: "textColor",
                    source: {
                        type: "settingValue",
                        settingId: "comment-color"
                    }
                }
            }, {
                name: "commentTextTransparent",
                value: {
                    type: "textColor",
                    black: "rgba(0, 0, 0, 0.50)",
                    white: "rgba(255, 255, 255, 0.50)",
                    source: {
                        type: "settingValue",
                        settingId: "comment-color"
                    }
                }
            }, {
                name: "commentBorder",
                value: {
                    type: "multiply",
                    source: {
                        type: "settingValue",
                        settingId: "comment-color"
                    },
                    r: .7,
                    g: .7,
                    b: .7
                }
            }],
            dynamicDisable: !0,
            updateUserstylesOnSettingsChange: !0,
            userscripts: [{
                url: "theme3.js"
            }],
            userstyles: [{
                url: "theme3.css"
            }, {
                url: "black_text.css",
                if: {
                    settings: {
                        text: "black"
                    }
                }
            }, {
                url: "color_on_white.css",
                if: {
                    settings: {
                        text: "colorOnWhite"
                    }
                }
            }, {
                url: "color_on_black.css",
                if: {
                    settings: {
                        text: "colorOnBlack"
                    }
                }
            }],
            settings: [{
                dynamic: !0,
                name: "motion",
                id: "motion-color",
                type: "color",
                default: "#4C97FF",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "looks",
                id: "looks-color",
                type: "color",
                default: "#9966FF",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "sounds",
                id: "sounds-color",
                type: "color",
                default: "#CF63CF",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "events",
                id: "events-color",
                type: "color",
                default: "#FFBF00",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "control",
                id: "control-color",
                type: "color",
                default: "#FFAB19",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "sensing",
                id: "sensing-color",
                type: "color",
                default: "#5CB1D6",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "operators",
                id: "operators-color",
                type: "color",
                default: "#59C059",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "variables",
                id: "data-color",
                type: "color",
                default: "#FF8C1A",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "lists",
                id: "data-lists-color",
                type: "color",
                default: "#FF661A",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "custom",
                id: "custom-color",
                type: "color",
                default: "#FF6680",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "extensions",
                id: "Pen-color",
                type: "color",
                default: "#0FBD8C",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "TurboWarp",
                id: "tw-color",
                type: "color",
                default: "#ff4c4c",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "Addon blocks",
                id: "sa-color",
                type: "color",
                default: "#29BEB8",
                allowTransparency: !0,
                if: {
                    addonEnabled: ["debugger"]
                }
            }, {
                dynamic: !0,
                name: "Block inputs",
                id: "input-color",
                type: "color",
                default: "#FFFFFF",
                allowTransparency: !0
            }, {
                dynamic: !0,
                name: "Comments",
                id: "comment-color",
                type: "color",
                default: "#FEF49C"
            }, {
                name: "Text color",
                id: "text",
                type: "select",
                default: "white",
                potentialValues: [{
                    id: "white",
                    name: "White"
                }, {
                    id: "black",
                    name: "Black"
                }, {
                    id: "colorOnWhite",
                    name: "Colored on white background"
                }, {
                    id: "colorOnBlack",
                    name: "Colored on black background"
                }]
            }],
            tags: ["theme"],
            enabledByDefault: !1,
            presets: [{
                name: "3.0 Tweaks",
                id: "tweaks",
                description: "Events, Control, and Custom blocks with 2.0 inspired colors",
                values: {
                    "motion-color": "#4C97FF",
                    "looks-color": "#9966FF",
                    "sounds-color": "#CF63CF",
                    "events-color": "#DE9E2E",
                    "control-color": "#FFBF00",
                    "sensing-color": "#5CB1D6",
                    "operators-color": "#59C059",
                    "data-color": "#FF8C1A",
                    "data-lists-color": "#FF661A",
                    "custom-color": "#5f49d8",
                    "Pen-color": "#0FBD8C",
                    "sa-color": "#29BEB8",
                    "comment-color": "#FEF49C",
                    "input-color": "#FFFFFF",
                    text: "white"
                }
            }, {
                name: "2.0 Colors",
                id: "original",
                description: "The original block colors from Scratch 2.0",
                values: {
                    "motion-color": "#4a6cd4",
                    "looks-color": "#8a55d7",
                    "sounds-color": "#bb42c3",
                    "events-color": "#c88330",
                    "control-color": "#e1a91a",
                    "sensing-color": "#2ca5e2",
                    "operators-color": "#5cb712",
                    "data-color": "#ee7d16",
                    "data-lists-color": "#cc5b22",
                    "custom-color": "#632d99",
                    "Pen-color": "#0e9a6c",
                    "sa-color": "#29beb8",
                    "comment-color": "#FFFFD2",
                    "input-color": "#ffffff",
                    text: "white"
                }
            }, {
                name: "Dark",
                id: "dark",
                description: "Dark versions of the default colors",
                values: {
                    "motion-color": "#004099",
                    "looks-color": "#220066",
                    "sounds-color": "#752475",
                    "events-color": "#997300",
                    "control-color": "#664100",
                    "sensing-color": "#1f5f7a",
                    "operators-color": "#235c23",
                    "data-color": "#b35900",
                    "data-lists-color": "#993300",
                    "custom-color": "#99004d",
                    "Pen-color": "#064734",
                    "tw-color": "#660000",
                    "sa-color": "#166966",
                    "comment-color": "#423f24",
                    "input-color": "#202020",
                    text: "white"
                }
            }, {
                name: "Black",
                id: "black",
                description: "Makes block backgrounds black",
                values: {
                    "motion-color": "#4C97FF",
                    "looks-color": "#9966FF",
                    "sounds-color": "#CF63CF",
                    "events-color": "#FFBF00",
                    "control-color": "#FFAB19",
                    "sensing-color": "#5CB1D6",
                    "operators-color": "#59C059",
                    "data-color": "#FF8C1A",
                    "data-lists-color": "#FF661A",
                    "custom-color": "#FF6680",
                    "Pen-color": "#0FBD8C",
                    "sa-color": "#29BEB8",
                    "comment-color": "#FEF49C",
                    "input-color": "#202020",
                    text: "colorOnBlack"
                }
            }]
        };
        var V = {
            name: "Customizable block text style",
            description: "Changes the thickness of the text on blocks and optionally adds a text shadow.",
            tags: [],
            credits: [{
                name: "Secret-chest"
            }, {
                name: "_nix",
                link: "https://scratch.mit.edu/users/_nix"
            }],
            userstyles: [{
                url: "text-bold.css",
                if: {
                    settings: {
                        bold: !0
                    }
                }
            }, {
                url: "text-shadow.css",
                if: {
                    settings: {
                        shadow: !0
                    }
                }
            }],
            settings: [{
                name: "Bold text",
                id: "bold",
                type: "boolean",
                default: !1
            }, {
                name: "Shadow under text",
                id: "shadow",
                type: "boolean",
                default: !1
            }],
            dynamicDisable: !0,
            updateUserstylesOnSettingsChange: !0,
            enabledByDefault: !1
        };
        var I = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Colored context menus",
            description: "Makes block right click context menus colorful.",
            credits: [{
                name: "GarboMuffin"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "userscript.css"
            }],
            tags: ["theme"],
            enabledByDefault: !1
        };
        var R = {
            noTranslations: !0,
            name: "Display stage on left side",
            description: "Moves the stage to the left side of the editor, like in Scratch 2.0.",
            info: [{
                id: "reverseOrder",
                text: 'To change the position of buttons above the stage, use the "reverse order of project controls" addon.'
            }],
            credits: [{
                name: "NitroCipher/ZenithRogue"
            }],
            userscripts: [{
                url: "fix-share-the-love.js"
            }],
            dynamicDisable: !0,
            userstyles: [{
                url: "stageleft.css"
            }],
            tags: ["theme"],
            enabledByDefault: !1
        };
        var L = {
            name: "Reverse order of project controls",
            description: "Moves the green flag and stop buttons to the right and the full screen button to the left, like in Scratch 2.0.",
            tags: ["theme"],
            dynamicDisable: !0,
            userstyles: [{
                url: "userstyle.css"
            }]
        };
        var U = {
            editorOnly: !0,
            name: "Variable manager",
            description: 'Adds a tab next to "sounds" in the editor for easily updating variables and lists.',
            credits: [{
                name: "Jeffalo"
            }, {
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            dynamicDisable: !0,
            tags: [],
            enabledByDefault: !1
        };
        var H = {
            editorOnly: !0,
            name: "Search sprites by name",
            description: "Adds a search box to the sprite pane to search for sprites by name.",
            credits: [{
                name: "BarelySmooth",
                link: "https://scratch.mit.edu/users/BarelySmooth/"
            }, {
                name: "GarboMuffin"
            }],
            userstyles: [{
                url: "search-bar.css"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0,
            tags: [],
            enabledByDefault: !1
        };
        var W = {
            name: "Gamepad support",
            description: "Interact with projects using a USB or Bluetooth controller/gamepad.",
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }, {
                url: "gamepadlib.css"
            }],
            settings: [{
                dynamic: !0,
                name: "Hide settings button when no controllers detected",
                type: "boolean",
                default: !1,
                id: "hide"
            }],
            tags: [],
            enabledByDefault: !1,
            dynamicDisable: !0
        };
        var N = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Editor sound effects",
            description: "Plays sound effects when you connect or delete blocks.",
            credits: [{
                name: "GarboMuffin"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            tags: [],
            enabledByDefault: !1
        };
        var J = {
            editorOnly: !0,
            name: "Sprite folders",
            description: 'Adds folders to the sprite pane, as well as costume and sound lists. To create a folder, right click any sprite and click "create folder". Click a folder to open or close it. Right click a sprite to see what folders you can move it to, or alternatively drag and drop it into an open folder. This feature works by adding "[folderName]//" at the beginning of the names for your sprites.',
            info: [{
                type: "notice",
                text: "Users with this feature enabled will be able to see the folders in your project. Anyone else will see sprite lists normally (no folders).",
                id: "notice-folders-are-public"
            }],
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            tags: ["recommended"],
            enabledByDefault: !0
        };
        var q = {
            editorOnly: !0,
            name: "Block switching",
            description: "Right click on a block to switch it to a related block.",
            credits: [{
                name: "GarboMuffin"
            }, {
                name: "pufferfish101007",
                link: "https://scratch.mit.edu/users/pufferfish101007/"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            tags: ["recommended"],
            settings: [{
                dynamic: !0,
                name: "Motion blocks",
                id: "motion",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Looks blocks",
                id: "looks",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Sound blocks",
                id: "sound",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Event blocks",
                id: "event",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Control blocks",
                id: "control",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Operator blocks",
                id: "operator",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Sensing blocks",
                id: "sensing",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Data blocks",
                id: "data",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Extension blocks",
                id: "extension",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Addon blocks",
                id: "sa",
                type: "boolean",
                default: !0,
                if: {
                    addonEnabled: ["debugger"]
                }
            }, {
                dynamic: !0,
                name: "Custom block arguments",
                id: "customargs",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Shown custom block arguments options",
                id: "customargsmode",
                type: "select",
                default: "defOnly",
                potentialValues: [{
                    id: "defOnly",
                    name: "Arguments in own custom block"
                }, {
                    id: "all",
                    name: "Arguments in all custom blocks in sprite"
                }],
                if: {
                    settings: {
                        customargs: !0
                    }
                }
            }, {
                dynamic: !0,
                name: "Show option to change block to self",
                id: "noop",
                type: "boolean",
                default: !0
            }],
            enabledByDefault: !0
        };
        var Z = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Automatically add extensions",
            description: "Auto-shows music, pen, and other extensions in the block category menu in the editor.",
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                name: "Music",
                id: "music",
                type: "boolean",
                default: !0
            }, {
                name: "Pen",
                id: "pen",
                type: "boolean",
                default: !0
            }, {
                name: "Text to Speech",
                id: "text2speech",
                type: "boolean",
                default: !1
            }, {
                name: "Translate",
                id: "translate",
                type: "boolean",
                default: !1
            }],
            dynamicDisable: !0,
            tags: []
        };
        var K = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Customizable code area zoom",
            description: "Choose custom settings for the minimum, maximum, speed, and start size of the zoom of scripts in the code area, and autohide the controls.",
            tags: [],
            credits: [{
                name: "ErrorGamer2000",
                link: "https://scratch.mit.edu/users/ErrorGamer2000/"
            }],
            enabledByDefault: !1,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            settings: [{
                dynamic: !0,
                name: "Maximum Zoom (100-500%)",
                id: "maxZoom",
                type: "integer",
                min: 100,
                default: 300,
                max: 500
            }, {
                dynamic: !0,
                name: "Minimum Zoom (1-100%)",
                id: "minZoom",
                type: "integer",
                min: 1,
                default: 30,
                max: 100
            }, {
                dynamic: !0,
                name: "Start Zoom (50-500%)",
                id: "startZoom",
                type: "integer",
                min: 50,
                default: 68,
                max: 500
            }, {
                dynamic: !0,
                name: "Zoom Speed (50-200%)",
                id: "zoomSpeed",
                type: "integer",
                min: 50,
                default: 100,
                max: 200
            }, {
                name: "Autohide Zoom Controls",
                id: "autohide",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Autohide Animation Speed",
                id: "speed",
                type: "select",
                potentialValues: [{
                    id: "none",
                    name: "Instant"
                }, {
                    id: "short",
                    name: "Quick"
                }, {
                    id: "default",
                    name: "Default"
                }, {
                    id: "long",
                    name: "Slow"
                }],
                default: "default",
                if: {
                    settings: {
                        autohide: !0
                    }
                }
            }]
        };
        var Y = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Customizable new sprite position",
            description: "Change the default x/y position of new sprites.",
            credits: [{
                name: "pufferfish101007",
                link: "https://scratch.mit.edu/users/pufferfish101007/"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                id: "x",
                name: "X position",
                type: "integer",
                default: 0,
                min: -240,
                max: 240
            }, {
                dynamic: !0,
                id: "y",
                name: "Y position",
                type: "integer",
                default: 0,
                min: -180,
                max: 180
            }, {
                dynamic: !0,
                id: "library",
                name: "Randomize the position of library sprites",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                id: "duplicate",
                name: "Behavior when duplicating sprites",
                type: "select",
                default: "randomize",
                potentialValues: [{
                    id: "custom",
                    name: "Send to specified x/y values"
                }, {
                    id: "keep",
                    name: "Keep the same as the original sprite"
                }, {
                    id: "randomize",
                    name: "Randomize"
                }]
            }],
            tags: [],
            enabledByDefault: !1
        };
        var Q = {
            editorOnly: !0,
            name: "Save blocks as image",
            description: "Right click the code area to export blocks as SVG/PNG images.",
            tags: [],
            credits: [{
                name: "summerscar"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            enabledByDefault: !1
        };
        var X = {
            noTranslations: !0,
            name: "Remove curved stage border",
            description: "Removes the curved border around the stage, allowing you to see the corners.",
            tags: ["theme"],
            credits: [{
                name: "Tacodude7729",
                link: "https://scratch.mit.edu/users/Tacodude7729/"
            }],
            enabledByDefault: !1,
            dynamicDisable: !0,
            userstyles: [{
                url: "remove-borders.css"
            }]
        };
        var $ = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Block transparency",
            description: "Adjust the transparency for blocks in the editor, with separate options for orphaned blocks (those without a hat block at the top) and blocks that are being dragged.",
            tags: [],
            dynamicDisable: !0,
            credits: [{
                name: "ErrorGamer2000",
                link: "https://scratch.mit.edu/users/ErrorGamer2000/"
            }, {
                name: "GarboMuffin"
            }],
            settings: [{
                dynamic: !0,
                name: "Block transparency (%)",
                id: "block",
                type: "integer",
                min: 0,
                max: 100,
                default: 0
            }, {
                dynamic: !0,
                name: "Orphaned transparency (%)",
                id: "orphan",
                type: "integer",
                min: 0,
                max: 100,
                default: 25
            }, {
                dynamic: !0,
                name: "Dragged transparency (%)",
                id: "dragged",
                type: "integer",
                min: 0,
                max: 100,
                default: 25
            }],
            userstyles: [{
                url: "userstyle.css"
            }]
        };
        var ee = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Paint costume by default",
            description: 'Changes the default action of "Choose a Sprite/Costume/Backdrop/Sound" buttons, which open the library by default.',
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                id: "sprite",
                name: "Add sprite",
                type: "select",
                potentialValues: [{
                    id: "library",
                    name: "Library"
                }, {
                    id: "paint",
                    name: "Paint"
                }, {
                    id: "surprise",
                    name: "Surprise"
                }, {
                    id: "upload",
                    name: "Upload"
                }],
                default: "paint"
            }, {
                dynamic: !0,
                id: "costume",
                name: "Add costume",
                type: "select",
                potentialValues: [{
                    id: "library",
                    name: "Library"
                }, {
                    id: "paint",
                    name: "Paint"
                }, {
                    id: "surprise",
                    name: "Surprise"
                }, {
                    id: "upload",
                    name: "Upload"
                }],
                default: "paint"
            }, {
                dynamic: !0,
                id: "backdrop",
                name: "Add backdrop",
                type: "select",
                potentialValues: [{
                    id: "library",
                    name: "Library"
                }, {
                    id: "paint",
                    name: "Paint"
                }, {
                    id: "surprise",
                    name: "Surprise"
                }, {
                    id: "upload",
                    name: "Upload"
                }],
                default: "paint"
            }, {
                dynamic: !0,
                id: "sound",
                name: "Add sound",
                type: "select",
                potentialValues: [{
                    id: "library",
                    name: "Library"
                }, {
                    id: "record",
                    name: "Record"
                }, {
                    id: "surprise",
                    name: "Surprise"
                }, {
                    id: "upload",
                    name: "Upload"
                }],
                default: "library"
            }],
            dynamicDisable: !0,
            tags: ["recommended"],
            enabledByDefault: !1
        };
        var te = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Grab single block with Ctrl key",
            description: "Adds the ability to drag a single block out of the middle of a script (instead of the entire stack attached below it) while holding the Ctrl key.",
            info: [{
                text: "On macOS, use the Cmd key instead of the Ctrl key.",
                id: "macContextDisabled"
            }, {
                text: 'If "flip controls" is enabled, grabbing blocks individually will be the default behavior. Hold Ctrl to drag the entire stack.',
                id: "flipControls"
            }],
            credits: [{
                name: "lisa_wolfgang",
                link: "https://scratch.mit.edu/users/lisa_wolfgang/"
            }, {
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                name: "Flip controls",
                id: "invertDrag",
                type: "boolean",
                default: !1
            }],
            tags: [],
            dynamicDisable: !0,
            enabledByDefault: !0
        };
        var se = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Hide new variables",
            description: "Do not automatically create monitors for newly created variables or lists.",
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            tags: [],
            dynamicDisable: !0
        };
        var ae = {
            editorOnly: !0,
            name: "Extra key options",
            description: 'Adds more keys to the "key () pressed?" and "when () key pressed" block dropdowns, such as enter, dot, comma, and more. These keys will work even for users who do not have this addon.',
            tags: ["beta"],
            credits: [{
                name: "Tacodude7729",
                link: "https://scratch.mit.edu/users/Tacodude7729/"
            }],
            info: [{
                type: "notice",
                text: 'The "experimental keys" include equals, slash, semicolon and more. They may not work on all operating systems or keyboard layouts.',
                id: "experimentalKeysWarn"
            }, {
                type: "notice",
                text: 'The "Shift keys" include keys which typically require the Shift key and a number key, like hashtag, exclamation mark and more. These keys only work with the "when () key pressed" block and do not work on all operating systems or keyboard layouts.',
                id: "shiftKeysWarn"
            }, {
                type: "warning",
                text: 'The "TurboWarp keys" will only work in TurboWarp, not in Scratch.',
                id: "twKeysWarn"
            }],
            settings: [{
                dynamic: !0,
                name: "Show experimental keys",
                id: "experimentalKeys",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Show Shift keys",
                id: "shiftKeys",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Show TurboWarp keys",
                id: "twKeys",
                type: "boolean",
                default: !1
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0
        };
        var oe = {
            name: "Hide delete button",
            description: "Hides delete button (trash can icon) from sprites, costumes and sounds. They can still be deleted using the right click context menu.",
            tags: [],
            dynamicDisable: !0,
            updateUserstylesOnSettingsChange: !0,
            settings: [{
                name: "Sprites",
                id: "sprites",
                type: "boolean",
                default: !0
            }, {
                name: "Costumes and backdrops",
                id: "costumes",
                type: "boolean",
                default: !0
            }, {
                name: "Sounds",
                id: "sounds",
                type: "boolean",
                default: !0
            }],
            userstyles: [{
                url: "sprites.css",
                if: {
                    settings: {
                        sprites: !0
                    }
                }
            }, {
                url: "costumes.css",
                if: {
                    settings: {
                        costumes: !0
                    }
                }
            }, {
                url: "sounds.css",
                if: {
                    settings: {
                        sounds: !0
                    }
                }
            }]
        };
        var ne = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Do not automatically space overlapping scripts",
            description: "Allows scripts to be moved and modified without causing overlapping scripts to move around.",
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0,
            tags: [],
            enabledByDefault: !1
        };
        var ie = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Non-draggable sprites in editor",
            description: "Removes the ability to drag sprites around on the stage in the editor, except those explicitly set as draggable. Hold Shift while dragging a sprite to move it normally.",
            credits: [{
                name: "Chrome_Cat",
                link: "https://scratch.mit.edu/users/Chrome_Cat/"
            }, {
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            tags: [],
            enabledByDefault: !1,
            dynamicDisable: !0
        };
        var re = {
            enabledByDefault: !0,
            editorOnly: !0,
            name: "Move costume to top or bottom",
            description: "Adds options to the right click context menu for costumes and sounds to move them to the top or the bottom of the list.",
            info: [{
                text: 'This addon was previously part of the "developer tools" addon but has moved here.',
                id: "developer-tools"
            }],
            tags: [],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0
        };
        var le = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Do not shift pasted items",
            description: "Paste copied items at their original position instead of shifted slightly in the costume editor.",
            info: [{
                text: "This behavior can also be achieved without this addon by Alt+Clicking the item.",
                id: "vanilla"
            }],
            credits: [{
                name: "GarboMuffin"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            tags: [],
            enabledByDefault: !1
        };
        var de = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Duplicate script with Alt key",
            description: "Quickly duplicate a script by dragging it while holding the Alt key. Hold Ctrl as well to only duplicate a single block instead of the entire stack attached below it.",
            credits: [{
                name: "GarboMuffin"
            }],
            info: [{
                text: "On macOS, use the Option key instead of the Alt key and Command key instead of the Control key.",
                id: "mac"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0,
            tags: [],
            enabledByDefault: !0
        };
        var ce = {
            editorOnly: !0,
            enabledByDefault: !0,
            name: "Rename broadcasts",
            description: "Adds an option to rename broadcast messages in the broadcast blocks' dropdowns.",
            credits: [{
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber"
            }, {
                name: "GarboMuffin"
            }],
            tags: ["new"],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0
        };
        var ue = {
            editorOnly: !0,
            name: 'Switch variables between "For all sprites" and "For this sprite only"',
            description: 'Adds more options when renaming an existing variable or list: allows changing between "For all sprites" and "For this sprite only" and whether variables are stored in the cloud. Also adds a new option when right clicking a variable/list to quickly change its scope.',
            credits: [{
                name: "GarboMuffin"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            tags: [],
            dynamicDisable: !0,
            enabledByDefault: !1
        };
        var me = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Editor comment previews",
            description: "Allows you to preview the contents of comments by hovering over collapsed comments and blocks. You can use this to view comments that are off-screen, identify a loop block from the bottom by its preview, fit many long comments in a small space, and more.",
            tags: [],
            credits: [{
                name: "lisa_wolfgang",
                link: "https://scratch.mit.edu/users/lisa_wolfgang/"
            }, {
                name: "GarboMuffin"
            }],
            userstyles: [{
                url: "userstyle.css"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                name: "Hover collapsed comments to preview",
                id: "hover-view",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Hover blocks to preview attached comments",
                id: "hover-view-block",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Hover custom blocks to preview definition comments",
                id: "hover-view-procedure",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Delay duration",
                id: "delay",
                type: "select",
                potentialValues: [{
                    name: "None",
                    id: "none"
                }, {
                    name: "Short",
                    id: "short"
                }, {
                    name: "Long",
                    id: "long"
                }],
                default: "short"
            }, {
                dynamic: !0,
                name: "Follow mouse",
                id: "follow-mouse",
                type: "boolean",
                default: !0
            }, {
                dynamic: !0,
                name: "Reduce transparency",
                id: "reduce-transparency",
                type: "boolean",
                default: !1
            }, {
                dynamic: !0,
                name: "Reduce animation",
                id: "reduce-animation",
                type: "boolean",
                default: !1
            }],
            dynamicDisable: !0,
            enabledByDefault: !0
        };
        var pe = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Two-column category menu",
            description: "Splits the block category menu into two columns and moves it to the top of the block palette, like in Scratch 2.0.",
            credits: [{
                name: "TheColaber",
                link: "https://scratch.mit.edu/TheColaber"
            }],
            tags: [],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }]
        };
        var ye = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Always show number pad",
            description: "Show Scratch's number pad input when editing number fields on all devices, instead of only touchscreen devices.",
            credits: [{
                name: "GarboMuffin"
            }],
            info: [{
                text: 'A number pad will show when editing number inputs from certain blocks, such as "set x to".',
                id: "explanation"
            }],
            tags: ["new"],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0
        };
        var he = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Snap scripts to grid",
            description: "Drag a script to automatically align its position to the code area dots.",
            tags: [],
            credits: [{
                name: "CST1229",
                link: "https://scratch.mit.edu/users/CST1229/"
            }, {
                name: "TheColaber",
                link: "https://scratch.mit.edu/users/TheColaber/"
            }, {
                name: "lisa_wolfgang",
                link: "https://scratch.mit.edu/users/lisa_wolfgang/"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                name: "Grid size (px)",
                id: "grid",
                type: "integer",
                min: 1,
                default: 40
            }],
            presets: [{
                name: "Whole-block",
                id: "whole-block",
                values: {
                    grid: 48
                }
            }, {
                name: "Half-block",
                id: "half-block",
                values: {
                    grid: 24
                }
            }, {
                name: "Default",
                id: "default",
                values: {
                    grid: 40
                }
            }],
            dynamicDisable: !0,
            enabledByDefault: !1
        };
        var fe = {
            name: "Enhanced full screen",
            description: "Fixes some undesired effects in the project player's full screen mode, opens it in your browser's full screen mode, and hides the green flag toolbar.",
            credits: [{
                name: "lisa_wolfgang",
                link: "https://scratch.mit.edu/users/lisa_wolfgang/"
            }],
            info: [{
                type: "notice",
                text: "If you choose to hide the toolbar, remember that you can use the Esc key to exit the project player's full screen mode.",
                id: "hideToolbarNotice"
            }],
            settings: [{
                name: "Open full screen project player in full screen browser mode",
                id: "browserFullscreen",
                type: "boolean",
                default: !0
            }, {
                name: "Hide toolbar in full screen",
                id: "hideToolbar",
                type: "boolean",
                default: !1
            }],
            dynamicDisable: !0,
            updateUserstylesOnSettingsChange: !0,
            userstyles: [{
                url: "hideOverflow.css"
            }, {
                url: "removeBorder.css"
            }, {
                url: "resizeWindow.css",
                if: {
                    settings: {
                        hideToolbar: !1
                    }
                }
            }, {
                url: "resizeWindow_noToolbar.css",
                if: {
                    settings: {
                        hideToolbar: !0
                    }
                }
            }, {
                url: "hideToolbar.css",
                if: {
                    settings: {
                        hideToolbar: !0
                    }
                }
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            tags: ["beta"],
            enabledByDefault: !1
        };
        var be = {
            editorOnly: !0,
            name: "Hide stage and sprite pane",
            description: 'Adds a button next to the "small stage" and "large stage" buttons that hides the stage and the sprite pane, making the code area much larger.',
            credits: [{
                name: "Maximouse",
                link: "https://scratch.mit.edu/users/Maximouse/"
            }],
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            userstyles: [{
                url: "style.css"
            }],
            tags: []
        };
        var ge = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Keep block comment connections straight",
            description: "Forces block comments to always be connected to their source block by a horizontal straight line, not at an angle.",
            tags: [],
            credits: [{
                name: "lisa_wolfgang",
                link: "https://scratch.mit.edu/users/lisa_wolfgang/"
            }],
            userscripts: [{
                url: "userscript.js"
            }],
            dynamicDisable: !0,
            enabledByDefault: !1
        };
        var ke = {
            noTranslations: !0,
            name: "Hide backpack",
            description: "Removes the backpack feature from the editor.",
            userscripts: [{
                url: "remove-backpack.js"
            }],
            userstyles: [{
                url: "remove-backpack.css"
            }],
            tags: ["danger"],
            dynamicDisable: !0,
            enabledByDefault: !1
        };
        var ve = {
            noTranslations: !0,
            name: "Remove feedback button",
            description: "Removes the feedback button from the menu bar.",
            userstyles: [{
                url: "remove-feedback.css"
            }],
            tags: ["danger"],
            dynamicDisable: !0,
            enabledByDefault: !1
        };
        var we = {
            editorOnly: !0,
            noTranslations: !0,
            name: "Disable compiler in editor",
            description: 'Turns off the compiler by default in the script editor. It can still be manually enabled through the "Advanced" menu bar button.',
            userscripts: [{
                url: "userscript.js"
            }],
            tags: ["danger"],
            enabledByDefault: !1
        };
        var De = {
            editorOnly: !0,
            noTranslations: !0,
            noCompiler: !0,
            name: "Running block border",
            description: "Adds a colored highlight to the blocks that are currently being executed in a project.",
            dynamicDisable: !0,
            userscripts: [{
                url: "userscript.js"
            }],
            settings: [{
                dynamic: !0,
                name: "Highlight color",
                id: "highlight-color",
                type: "color",
                default: "#0000ff"
            }],
            tags: [],
            enabledByDefault: !1
        };
        t.a = {
            "cat-blocks": a,
            "editor-devtools": o,
            "find-bar": n,
            "middle-click-popup": i,
            "jump-to-def": r,
            "editor-searchable-dropdowns": m,
            "data-category-tweaks-v2": p,
            "block-palette-icons": y,
            "hide-flyout": h,
            mediarecorder: b,
            "drag-drop": g,
            debugger: k,
            pause: v,
            "mute-project": w,
            "vol-slider": D,
            clones: S,
            "mouse-pos": x,
            "color-picker": C,
            "remove-sprite-confirm": T,
            "block-count": O,
            "onion-skinning": j,
            "default-costume-editor-color": A,
            "bitmap-copy": F,
            "2d-color-picker": E,
            "better-img-uploads": M,
            "pick-colors-from-stage": G,
            "custom-block-shape": z,
            "zebra-striping": _,
            "editor-theme3": P,
            "custom-block-text": V,
            "editor-colored-context-menus": I,
            "editor-stage-left": R,
            "editor-buttons-reverse-order": L,
            "variable-manager": U,
            "search-sprites": H,
            gamepad: W,
            "editor-sounds": N,
            folders: J,
            "block-switching": q,
            "load-extensions": Z,
            "custom-zoom": K,
            "initialise-sprite-position": Y,
            blocks2image: Q,
            "remove-curved-stage-border": X,
            "transparent-orphans": $,
            "paint-by-default": ee,
            "block-cherry-picking": te,
            "hide-new-variables": se,
            "editor-extra-keys": ae,
            "hide-delete-button": oe,
            "no-script-bumping": ne,
            "disable-stage-drag-select": ie,
            "move-to-top-bottom": re,
            "disable-paste-offset": le,
            "block-duplicate": de,
            "rename-broadcasts": ce,
            "swap-local-global": ue,
            "editor-comment-previews": me,
            columns: pe,
            "number-pad": ye,
            "script-snap": he,
            fullscreen: fe,
            "hide-stage": be,
            "tw-straighten-comments": ge,
            "tw-remove-backpack": ke,
            "tw-remove-feedback": ve,
            "tw-disable-compiler": we,
            "editor-stepping": De
        }
    },
    193: function(e) {
        e.exports = JSON.parse('{"commit":"962bf9d"}')
    },
    448: function(e, t, s) {
        "use strict";
        t.a = class {
            constructor()
            {
                this._events = {}
            }
            addEventListener(e, t)
            {
                this._events[e] || (this._events[e] = []),
                this._events[e].push(t)
            }
            removeEventListener(e, t)
            {
                const s = this._events[e];
                s && (this._events[e] = s.filter(e => e !== t))
            }
            dispatchEvent(e)
            {
                const t = this._events[e.type];
                if (t)
                    for (const s of t)
                        s(e)
            }
        }
    },
    47: function(e, t, s) {
        "use strict";
        var a = s(119),
            o = s(193),
            n = s(448);
        function i(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                s.push.apply(s, a)
            }
            return s
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(s), !0).forEach((function(t) {
                    l(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : i(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        function l(e, t, s) {
            return t in e ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = s, e
        }
        class d extends n.a {
            constructor()
            {
                super(),
                this.store = this.createEmptyStore(),
                this.remote = !1
            }
            createEmptyStore()
            {
                const e = {};
                for (const t of Object.keys(a.a))
                    e[t] = {};
                return e
            }
            readLocalStorage()
            {
                const e = this.store;
                try {
                    const t = localStorage.getItem("tw:addons");
                    if (t) {
                        let s = JSON.parse(t);
                        if (s && "object" == typeof s) {
                            s = (e => {
                                const t = e._;
                                if (4 === t || !t)
                                    return e;
                                if (t < 2) {
                                    const t = e["tw-project-info"];
                                    t && t.enabled && (e["block-count"] = {
                                        enabled: !0
                                    });
                                    const s = e["tw-interface-customization"];
                                    s && s.enabled && (s.removeBackpack && (e["tw-remove-backpack"] = {
                                        enabled: !0
                                    }), s.removeFeedback && (e["tw-remove-feedback"] = {
                                        enabled: !0
                                    }))
                                }
                                if (t < 3) {
                                    const t = e["hide-flyout"];
                                    t && t.enabled && void 0 === t.toggled && (t.toggle = "hover")
                                }
                                if (t < 4) {
                                    const t = e["editor-devtools"];
                                    t && !1 === t.enabled && (e["find-bar"] = {
                                        enabled: !1
                                    }, e["middle-click-popup"] = {
                                        enabled: !1
                                    })
                                }
                                return e
                            })(s);
                            for (const t of Object.keys(s))
                                if (e.hasOwnProperty(t)) {
                                    const a = s[t];
                                    a && "object" == typeof a && (e[t] = a)
                                }
                        }
                    }
                } catch (e) {}
                this.store = e
            }
            saveToLocalStorage()
            {
                if (!this.remote)
                    try {
                        const e = {
                            _: 4
                        };
                        for (const t of Object.keys(a.a)) {
                            const s = this.getAddonStorage(t);
                            Object.keys(s).length > 0 && (e[t] = s)
                        }
                        localStorage.setItem("tw:addons", JSON.stringify(e))
                    } catch (e) {}
            }
            getAddonStorage(e)
            {
                if (this.store[e])
                    return this.store[e];
                throw new Error("Unknown addon store: ".concat(e))
            }
            getAddonManifest(e)
            {
                if (a.a[e])
                    return a.a[e];
                throw new Error("Unknown addon: ".concat(e))
            }
            getAddonSettingObject(e, t)
            {
                if (!e.settings)
                    return null;
                for (const s of e.settings)
                    if (s.id === t)
                        return s;
                return null
            }
            getAddonEnabled(e)
            {
                const t = this.getAddonManifest(e);
                if (t.unsupported)
                    return !1;
                const s = this.getAddonStorage(e);
                return s.hasOwnProperty("enabled") ? s.enabled : !!t.enabledByDefault
            }
            getAddonSetting(e, t)
            {
                const s = this.getAddonStorage(e),
                    a = this.getAddonManifest(e),
                    o = this.getAddonSettingObject(a, t);
                if (!o)
                    throw new Error("Unknown setting: ".concat(t));
                return s.hasOwnProperty(t) ? s[t] : o.default
            }
            getDefaultSettings(e)
            {
                const t = this.getAddonManifest(e),
                    s = {};
                for (const {id: e, default: a} of t.settings)
                    s[e] = a;
                return s
            }
            setAddonEnabled(e, t)
            {
                const s = this.getAddonStorage(e),
                    a = this.getAddonManifest(e),
                    o = this.getAddonEnabled(e);
                if (null === t)
                    t = !!a.enabledByDefault,
                    delete s.enabled;
                else {
                    if ("boolean" != typeof t)
                        throw new Error("Enabled value is invalid.");
                    s.enabled = t
                }
                if (this.saveToLocalStorage(), t !== o) {
                    const s = !!t || !!a.dynamicDisable;
                    this.dispatchEvent(new CustomEvent("setting-changed", {
                        detail: {
                            addonId: e,
                            settingId: "enabled",
                            reloadRequired: !s,
                            value: t
                        }
                    }))
                }
            }
            setAddonSetting(e, t, s)
            {
                const a = this.getAddonStorage(e),
                    o = this.getAddonManifest(e),
                    n = this.getAddonSettingObject(o, t),
                    i = this.getAddonSetting(e, t);
                if (null === s)
                    s = n.default,
                    delete a[t];
                else {
                    if ("boolean" === n.type) {
                        if ("boolean" != typeof s)
                            throw new Error("Setting value is invalid.")
                    } else if ("integer" === n.type) {
                        if ("number" != typeof s)
                            throw new Error("Setting value is invalid.")
                    } else if ("color" === n.type) {
                        if ("string" != typeof s)
                            throw new Error("Color value is not a string.");
                        if (9 === s.length && (s = s.substring(0, 7)), !/^#[0-9a-f]{6}$/i.test(s))
                            throw new Error("Color value is invalid format.")
                    } else {
                        if ("select" !== n.type)
                            throw new Error("Setting object is of unknown type");
                        if (!n.potentialValues.some(e => e.id === s))
                            throw new Error("Setting value is invalid.")
                    }
                    a[t] = s
                }
                this.saveToLocalStorage(),
                s !== i && this.dispatchEvent(new CustomEvent("setting-changed", {
                    detail: {
                        addonId: e,
                        settingId: t,
                        reloadRequired: !n.dynamic,
                        value: s
                    }
                }))
            }
            applyAddonPreset(e, t)
            {
                const s = this.getAddonManifest(e);
                for (const {id: a, values: o} of s.presets) {
                    if (a !== t)
                        continue;
                    const s = r(r({}, this.getDefaultSettings(e)), o);
                    for (const t of Object.keys(s))
                        this.setAddonSetting(e, t, s[t]);
                    return
                }
                throw new Error("Unknown preset: ".concat(t))
            }
            resetAllAddons()
            {
                for (const e of Object.keys(a.a))
                    this.resetAddon(e, !0);
                this.store = this.createEmptyStore(),
                this.saveToLocalStorage()
            }
            resetAddon(e, t)
            {
                const s = this.getAddonStorage(e);
                for (const a of Object.keys(s))
                    if ("enabled" !== a)
                        try {
                            this.setAddonSetting(e, a, null)
                        } catch (e) {}
                    else
                        t && this.setAddonEnabled(e, null)
            }
            parseUrlParameter(e)
            {
                this.remote = !0;
                const t = e.split(",");
                for (const e of Object.keys(a.a))
                    this.setAddonEnabled(e, t.includes(e))
            }
            export({theme: e})
            {
                const t = {
                    core: {
                        lightTheme: "light" === e,
                        version: "v1.0.0-tw-".concat(o.commit)
                    },
                    addons: {}
                };
                for (const [e, s] of Object.entries(a.a)) {
                    const a = this.getAddonEnabled(e),
                        o = {};
                    if (s.settings)
                        for (const {id: t} of s.settings)
                            o[t] = this.getAddonSetting(e, t);
                    t.addons[e] = {
                        enabled: a,
                        settings: o
                    }
                }
                return t
            }
            import(e)
            {
                for (const [t, s] of Object.entries(e.addons)) {
                    if (!a.a.hasOwnProperty(t))
                        continue;
                    const {enabled: e, settings: o} = s;
                    "boolean" == typeof e && this.setAddonEnabled(t, e);
                    for (const [e, s] of Object.entries(o))
                        try {
                            this.setAddonSetting(t, e, s)
                        } catch (e) {}
                }
            }
            setStoreWithVersionCheck({version: e, store: t})
            {
                e === o.commit && this.setStore(t)
            }
            setStore(e)
            {
                const t = this.store;
                for (const s of Object.keys(t)) {
                    const a = t[s],
                        o = e[s];
                    if (o && "object" == typeof o && JSON.stringify(a) !== JSON.stringify(o)) {
                        const e = this.getAddonManifest(s),
                            t = !a.enabled && o.enabled,
                            n = !!e.dynamicDisable && a.enabled && !o.enabled;
                        this.store[s] = JSON.parse(JSON.stringify(o)),
                        this.dispatchEvent(new CustomEvent("addon-changed", {
                            detail: {
                                addonId: s,
                                dynamicEnable: t,
                                dynamicDisable: n
                            }
                        }))
                    }
                }
            }
        }
        const c = new d,
            u = new URLSearchParams(location.search);
        u.has("addons") ? c.parseUrlParameter(u.get("addons")) : c.readLocalStorage();
        t.a = c
    }
}]);
