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
                                marginLeft : "20px",
                                marginRight : "20px"
                            },
                            children: [
                                {
                                    element: "h2",
                                    text: "Dom-If"
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
                                {
                                    element: "div",
                                    text() {
                                        return selected;
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