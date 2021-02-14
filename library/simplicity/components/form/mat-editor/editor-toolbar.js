import {builder, customComponents} from "../../../simplicity.js";
import ToolbarColors from "./toolbar/toolbar-colors.js";
import ToolbarFont from "./toolbar/toolbar-font.js";
import ToolbarJustify from "./toolbar/toolbar-justify.js";
import ToolbarTools from "./toolbar/toolbar-tools.js";
import ToolbarInserts from "./toolbar/toolbar-inserts.js";

class EditorToolbar extends HTMLElement {
    initialize(that) {

        let editor;

        return class {

            get editor() {
                return editor;
            }

            set editor(value) {
                editor = value;
            }

            render() {

                that.style.display = "block";

                builder(that, {
                    element : "div",
                    style : {
                        display : "flex",
                        alignItems : "stretch"
                    },
                    children : [
                        {
                            element: "div",
                            className: "row",
                            children: [
                                {
                                    element: ToolbarFont,
                                    editor : {
                                        input() {
                                            return editor;
                                        }
                                    }
                                },
                            ]
                        },
                        {
                            element : "div",
                            className : "row",
                            children : [
                                {
                                    element : ToolbarColors,
                                    editor : {
                                        input() {
                                            return editor;
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            element : "div",
                            className : "row",
                            children : [
                                {
                                    element : ToolbarJustify,
                                    editor : {
                                        input() {
                                            return editor;
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            element : "div",
                            className : "row",
                            children : [
                                {
                                    element : ToolbarTools,
                                    editor : {
                                        input() {
                                            return editor;
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            element : "div",
                            className : "row",
                            children : [
                                {
                                    element : ToolbarInserts,
                                    editor : {
                                        input() {
                                            return editor;
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("editor-toolbar", EditorToolbar)