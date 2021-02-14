import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatCheckboxContainer from "../../library/simplicity/components/form/containers/mat-checkbox-container.js";
import DomInput from "../../library/simplicity/directives/dom-input.js";

class Checkbox extends HTMLElement {
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
                                    text: "Dom-Checkbox"
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
                                    text: `This Check Box is derived from the standard Check Box. Animation is missing in this Implementation. This
                                            Example we show that this Check Box if altered will reflect in a Text when clicked.`
                                },
                                {
                                    element: MatCheckboxContainer,
                                    placeholder: "Check Box",
                                    content: {
                                        element: DomInput,
                                        type: "checkbox",
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
                                    element: "div",
                                    if() {
                                        return selected
                                    },
                                    text: "Selected"
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
                            element: MatCheckboxContainer,
                            placeholder : "Check Box",
                            content : {
                                element : DomInput,
                                type : "checkbox",
                                value : {
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
                            element: "div",
                            if() {
                                return selected
                            },
                            text : "Selected"
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
    name : "documentation-form-checkbox",
    class : Checkbox
})