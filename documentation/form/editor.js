import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatEditor from "../../library/simplicity/components/form/mat-editor.js";
import EditorImageDialog from "./editor/editor-image-dialog.js";
import EditorLinkDialog from "./editor/editor-link-dialog.js";

class Editor extends HTMLElement {
    initialize(that) {

        let text = "It work's"

        return class {
            render() {
                builder(that, {
                    element: "div",
                    style: {
                        width: "100%",
                        margin: "auto",
                        flexWrap: "wrap",
                        display: "flex"
                    },
                    children: [
                        {
                            element: "div",
                            style: {
                                flex: "1",
                                marginLeft : "20px",
                                marginRight : "20px"
                            },
                            children: [
                                {
                                    element: "h2",
                                    text: "Mat-Editor"
                                },
                                {
                                    element: "hr"
                                },
                                {
                                    element: "h3",
                                    text: "Introduction"
                                },
                                {
                                    element: "p",
                                    text: `An HTML Editor`
                                },
                                {
                                    element: MatEditor,
                                    style : {
                                        height : "calc(100vh - 560px)"
                                    },
                                    imageDialog : {
                                        direct() {
                                            return new EditorImageDialog();
                                        }
                                    },
                                    linkDialog : {
                                        direct() {
                                            return new EditorLinkDialog();
                                        }
                                    },
                                    value : {
                                        input() {
                                            return text;
                                        },
                                        output(value) {
                                            text = value;
                                        }
                                    }
                                },
                                {
                                    element: "div",
                                    innerHTML() {
                                        return text;
                                    }
                                }
                            ]
                        },
                        {
                            element: "div",
                            style: {
                                flex : "1",
                                marginLeft : "20px",
                                marginRight : "20px"
                            },
                            children: [
                                {
                                    element: "h2",
                                    text: "Source Code"
                                },
                                {
                                    element: "hr"
                                },
                                {
                                    element: "h3",
                                    text: "JavaScript"
                                },
                                {
                                    element: "code",
                                    style: {
                                        fontFamily: "monospace",
                                        whiteSpace: "pre"
                                    },
                                    text:
`class If extends HTMLElement {
    initialize(that) {

        let selected = true;

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: MatEditor,
                            style : {
                                height : "calc(100vh - 560px)"
                            },
                            imageDialog : {
                                direct() {
                                    return new EditorImageDialog();
                                }
                            },
                            linkDialog : {
                                direct() {
                                    return new EditorLinkDialog();
                                }
                            },
                            value : {
                                input() {
                                    return text;
                                },
                                output(value) {
                                    text = value;
                                }
                            }
                        },
                        {
                            element: "div",
                            innerHTML() {
                                return text;
                            }
                        }
                    ]
                })
            }
        }
    }
}`
                                }
                            ]
                        }
                    ]
                })
            }
        }
    }
}

export default customViews.define({
    name: "documentation-form-editor",
    class: Editor
})