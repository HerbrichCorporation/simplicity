import {builder, customViews} from "../../library/simplicity/simplicity.js";
import DomRouter from "../../library/simplicity/directives/dom-router.js";

class Router extends HTMLElement {
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
                                    text: "Dom Router"
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
                                    text: ``
                                },
                                {
                                    element: DomRouter,
                                    level : 1
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
                            element: DomRouter,
                            level : 1
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
    name: "documentation-navigation-router",
    class: Router
})