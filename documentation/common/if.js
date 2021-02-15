import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatCheckboxContainer from "../../library/simplicity/components/form/containers/mat-checkbox-container.js";
import DomInput from "../../library/simplicity/directives/dom-input.js";

class If extends HTMLElement {
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
                                    text: `A Dom-If for displaying only HTML in an If Statement. Better than
                                            display:none because it is really
                                            rendered with an If Statement. This checkbox comes with an
                                            dom-checkbox-container to display the
                                            placeholder like material design.`
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
    name: "documentation-common-if",
    class: If
})