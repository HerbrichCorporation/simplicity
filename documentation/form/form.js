import {builder, customViews} from "../../library/simplicity/simplicity.js";
import DomInput from "../../library/simplicity/directives/dom-input.js";
import DomForm from "../../library/simplicity/directives/dom-form.js";
import MatInputContainer from "../../library/simplicity/components/form/containers/mat-input-container.js";

class Form extends HTMLElement {
    initialize(that) {

        let material = {
            "position": 1,
            "name": "Hydrogen",
            "weight": 1.0079,
            "symbol": "H"
        }

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
                                    text: "Dom-Form"
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
                                    text: `A derived Form for validating all Fields in the Formular`
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
                                                    text : "DomForm"
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
                                                    element: DomForm,
                                                    value : {
                                                        input() {
                                                            return material;
                                                        },
                                                        output(value) {
                                                            material = value;
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            element: MatInputContainer,
                                                            placeholder: "Name",
                                                            content: {
                                                                element: DomInput,
                                                                type: "text",
                                                                name: "name"
                                                            }
                                                        },
                                                        {
                                                            element: MatInputContainer,
                                                            placeholder: "Weight",
                                                            content: {
                                                                element: DomInput,
                                                                type: "number",
                                                                name: "weight"
                                                            }
                                                        },
                                                        {
                                                            element: MatInputContainer,
                                                            placeholder: "Symbol",
                                                            content: {
                                                                element: DomInput,
                                                                type: "text",
                                                                name: "symbol"
                                                            }
                                                        }
                                                    ]
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

        let material = {
            "position": 1,
            "name": "Hydrogen",
            "weight": 1.0079,
            "symbol": "H"
        }

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: DomForm,
                            value : {
                                input() {
                                    return material;
                                },
                                output(value) {
                                    material = value;
                                }
                            },
                            children: [
                                {
                                    element: MatInputContainer,
                                    placeholder: "Name",
                                    content: {
                                        element: DomInput,
                                        type: "text",
                                        name: "name"
                                    }
                                },
                                {
                                    element: MatInputContainer,
                                    placeholder: "Weight",
                                    content: {
                                        element: DomInput,
                                        type: "number",
                                        name: "weight"
                                    }
                                },
                                {
                                    element: MatInputContainer,
                                    placeholder: "Symbol",
                                    content: {
                                        element: DomInput,
                                        type: "text",
                                        name: "symbol"
                                    }
                                }
                            ]
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
    name: "documentation-common-form",
    class: Form
})