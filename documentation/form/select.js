import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatInputContainer from "../../library/simplicity/components/form/containers/mat-input-container.js";
import DomSelect from "../../library/simplicity/directives/dom-select.js";

class Select extends HTMLElement {
    initialize(that) {

        let selected = "fiat";

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
                                    text: "Dom-Select"
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
                                    text: `This Select is derived from the standard Check Box. Animation is missing in this Implementation. This
                                            Example we show that this Select if altered will reflect in a Text when clicked.`
                                },
                                {
                                    element: MatInputContainer,
                                    placeholder: "Select",
                                    content: {
                                        element: DomSelect,
                                        value: {
                                            input() {
                                                return selected;
                                            },
                                            output(value) {
                                                selected = value;
                                            }
                                        },
                                        children : [
                                            {
                                                element: "option",
                                                value : "volvo",
                                                text : "Volvo"
                                            },
                                            {
                                                element: "option",
                                                value : "saab",
                                                text : "Saab"
                                            },
                                            {
                                                element: "option",
                                                value : "fiat",
                                                text : "Fiat"
                                            },
                                            {
                                                element: "option",
                                                value : "audi",
                                                text : "Audi"
                                            }
                                        ]
                                    }
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

        let selected = "fiat";

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                    {
                        element: MatInputContainer,
                        placeholder: "Select",
                        content: {
                            element: DomSelect,
                            value: {
                                input() {
                                    return selected;
                                },
                                output(value) {
                                    selected = value;
                                }
                            },
                            children : [
                                {
                                    element: "option",
                                    value : "volvo",
                                    text : "Volvo"
                                },
                                {
                                    element: "option",
                                    value : "saab",
                                    text : "Saab"
                                },
                                {
                                    element: "option",
                                    value : "fiat",
                                    text : "Fiat"
                                },
                                {
                                    element: "option",
                                    value : "audi",
                                    text : "Audi"
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
    name : "documentation-form-select",
    class : Select
})