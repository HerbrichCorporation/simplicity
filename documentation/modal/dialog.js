import {builder, customViews} from "../../library/simplicity/simplicity.js";
import Example from "./example.js";

class Dialog extends HTMLElement {
    initialize(that) {

        let selected = true;

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
                                    text: "Mat Dialog"
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
                                    text: `This Dialog has 3 states of displaying the Dialog in the UI. The modes are named Top, Center and Bottom`
                                },
                                {
                                    element : "h3",
                                    text : "API"
                                },
                                {
                                    element : "table",
                                    children : [
                                        {
                                            element : "tr",
                                            children : [
                                                {
                                                    element : "td",
                                                    text : "MatDialog"
                                                },
                                                {
                                                    element : "td",
                                                    text : "header"
                                                },
                                                {
                                                    element : "td",
                                                    text : "function or string"
                                                }
                                            ]
                                        },
                                        {
                                            element : "tr",
                                            children : [
                                                {
                                                    element : "td",
                                                    text : "MatDialog"
                                                },
                                                {
                                                    element : "td",
                                                    text : "content"
                                                },
                                                {
                                                    element : "td",
                                                    text : "element for Content"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    element : "h3",
                                    text : "Example"
                                },
                                {
                                    element : "div",
                                    style : {
                                        position : "relative",
                                        height : "200px",
                                        border : "1px solid var(--main-normal-color)"
                                    },
                                    children : [
                                        {
                                            element : "div",
                                            style: {
                                                display: "block",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)"
                                            },
                                            children : [
                                                {
                                                    element: "button",
                                                    type : "button",
                                                    text : "Click",
                                                    onClick() {
                                                        let example = new Example();

                                                        document.body.appendChild(example);
                                                    }
                                                }

                                            ]
                                        }
                                    ]
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
                                        `class Example extends HTMLElement {
    initialize(that) {
        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element : MatDialog,
                            header : "Dialog",
                            content : {
                                element : "div",
                                text : "It work's"
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
    name: "documentation-modal-dialog",
    class: Dialog
})