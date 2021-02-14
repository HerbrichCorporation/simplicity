import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatCheckboxContainer from "../../library/simplicity/components/form/containers/mat-checkbox-container.js";
import DomInput from "../../library/simplicity/directives/dom-input.js";

class Radio extends HTMLElement {
    initialize(that) {

        let selected = "male";

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
                                    text: "Dom Radio"
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
                                    text: `This Radio is derived from the standard Check Box. Animation is missing in this Implementation. This
                                           Example we show that this Radio if altered will reflect in a Text when clicked.`
                                },
                                {
                                    element: "h3",
                                    text: "API"
                                },
                                {
                                    element: "table",
                                    children: [
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatCheckboxContainer"
                                                },
                                                {
                                                    element: "td",
                                                    text: "placeholder"
                                                },
                                                {
                                                    element: "td",
                                                    text: "function or string"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatCheckboxContainer"
                                                },
                                                {
                                                    element: "td",
                                                    text: "content"
                                                },
                                                {
                                                    element: "td",
                                                    text: "element for DomInput"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "DomInput"
                                                },
                                                {
                                                    element: "td",
                                                    text: "type"
                                                },
                                                {
                                                    element: "td",
                                                    text: "function or string"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "DomInput"
                                                },
                                                {
                                                    element: "td",
                                                    text: "use"
                                                },
                                                {
                                                    element: "td",
                                                    text: "function or string"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "DomInput"
                                                },
                                                {
                                                    element: "td",
                                                    text: "value"
                                                },
                                                {
                                                    element: "td",
                                                    text: "object of input and output"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    element: "h3",
                                    text: "Example"
                                },
                                {
                                    element: "div",
                                    style: {
                                        position: "relative",
                                        height: "200px",
                                        border: "1px solid var(--main-normal-color)"
                                    },
                                    children: [
                                        {
                                            element: "div",
                                            style: {
                                                display: "block",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)"
                                            },
                                            children: [
                                                {
                                                    element: "form",
                                                    children: [
                                                        {
                                                            element: MatCheckboxContainer,
                                                            placeholder: "Male",
                                                            content: {
                                                                element: DomInput,
                                                                type: "radio",
                                                                name: "gender",
                                                                use: "male",
                                                                value: {
                                                                    input() {
                                                                        return selected;
                                                                    },
                                                                    output(value) {
                                                                        selected = value;
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            element: MatCheckboxContainer,
                                                            placeholder: "Female",
                                                            content: {
                                                                element: DomInput,
                                                                type: "radio",
                                                                name: "gender",
                                                                use: "female",
                                                                value: {
                                                                    input() {
                                                                        return selected;
                                                                    },
                                                                    output(value) {
                                                                        selected = value;
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            element: MatCheckboxContainer,
                                                            placeholder: "Other",
                                                            content: {
                                                                element: DomInput,
                                                                type: "radio",
                                                                name: "gender",
                                                                use: "other",
                                                                value: {
                                                                    input() {
                                                                        return selected;
                                                                    },
                                                                    output(value) {
                                                                        selected = value;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    element: "div",
                                                    text() {
                                                        return selected;
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

        let selected = "male";

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: "form",
                            children : [
                                {
                                    element: MatCheckboxContainer,
                                    placeholder: "Male",
                                    content: {
                                        element: DomInput,
                                        type: "radio",
                                        name : "gender",
                                        use : "male",
                                        value: {
                                            input() {
                                                return selected;
                                            },
                                            output(value) {
                                                selected = value;
                                            }
                                        }
                                    }
                                },
                                {
                                    element: MatCheckboxContainer,
                                    placeholder: "Female",
                                    content: {
                                        element: DomInput,
                                        type: "radio",
                                        name : "gender",
                                        use : "female",
                                        value: {
                                            input() {
                                                return selected;
                                            },
                                            output(value) {
                                                selected = value;
                                            }
                                        }
                                    }
                                },
                                {
                                    element: MatCheckboxContainer,
                                    placeholder: "Other",
                                    content: {
                                        element: DomInput,
                                        type: "radio",
                                        name : "gender",
                                        use : "other",
                                        value: {
                                            input() {
                                                return selected;
                                            },
                                            output(value) {
                                                selected = value;
                                            }
                                        }
                                    }
                                }
                            ]
                        },
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
    name: "documentation-common-if",
    class: Radio
})