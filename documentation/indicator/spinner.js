import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatSpinner from "../../library/simplicity/components/indicator/mat-spinner.js";

class Spinner extends HTMLElement {
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
                                    element: MatSpinner,
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
                                        `class Progress extends HTMLElement {
    initialize(that) {
        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: MatSpinner,
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
    name: "documentation-indicator-spinner",
    class: Spinner
})