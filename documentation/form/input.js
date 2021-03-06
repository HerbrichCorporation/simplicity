import {builder, customViews} from "../../library/simplicity/simplicity.js";
import DomInput from "../../library/simplicity/directives/dom-input.js";
import MatInputContainer from "../../library/simplicity/components/form/containers/mat-input-container.js";

class Input extends HTMLElement {
    initialize(that) {

        let text = "Maik";

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
                                marginLeft: "20px",
                                marginRight: "20px"
                            },
                            children: [
                                {
                                    element: "h2",
                                    text: "Dom-Input"
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
                                    text: `This Input is derived from the standard Check Box. Animation is missing in this Implementation. This
                                           Example we show that this Input if altered will reflect in a Text when clicked.`
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
                                                    text : "MatInputContainer"
                                                },
                                                {
                                                    element : "td",
                                                    text : "placeholder"
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
                                                    text : "MatInputContainer"
                                                },
                                                {
                                                    element : "td",
                                                    text : "content"
                                                },
                                                {
                                                    element : "td",
                                                    text : "element for DomInput"
                                                }
                                            ]
                                        },
                                        {
                                            element : "tr",
                                            children : [
                                                {
                                                    element : "td",
                                                    text : "DomInput"
                                                },
                                                {
                                                    element : "td",
                                                    text : "type"
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
                                                    text : "DomInput"
                                                },
                                                {
                                                    element : "td",
                                                    text : "value"
                                                },
                                                {
                                                    element : "td",
                                                    text : "object of input and output"
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
                                                    element: MatInputContainer,
                                                    placeholder: "Input",
                                                    content: {
                                                        element: DomInput,
                                                        type: "text",
                                                        value: {
                                                            input() {
                                                                return text;
                                                            },
                                                            output(value) {
                                                                text = value;
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    element: "div",
                                                    text() {
                                                        return text;
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
                                flex: "1",
                                marginLeft: "20px",
                                marginRight: "20px"
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

        let text = "Maik"

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: MatInputContainer,
                            placeholder: "Input",
                            content: {
                                element: DomInput,
                                type: "text",
                                value: {
                                    input() {
                                        return text;
                                    },
                                    output(value) {
                                        text = value;
                                    }
                                }
                            }
                        },
                        {
                            element: "div",
                            text() {
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
    name: "documentation-form-input",
    class: Input
})