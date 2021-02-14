import {builder, customViews} from "../../library/simplicity/simplicity.js";
import {jsonClient} from "../../library/simplicity/services/client.js";
import Example from "./example.js";

class meta extends HTMLElement {
    initialize(that) {

        let materials;

        return class {

            get materials() {
                return materials;
            }

            set materials(value) {
                materials = value;
            }

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
                                    text: "Dom-Implicit"
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
                                    text: `A meta Templating for HTML. There are 2 keywords, one is select and the other is content. Select
                                            selects an HTML Element with the localName and content simply inserts the content Children.`
                                },
                                {
                                    element: Example,
                                    items : {
                                        input() {
                                            return materials;
                                        }
                                    },
                                    meta : {
                                        content : [
                                            {
                                                element(material) {
                                                    return {
                                                        element : "span",
                                                        text() {
                                                            return material.position
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                element(material) {
                                                    return {
                                                        element : "span",
                                                        text() {
                                                            return material.name
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                element(material) {
                                                    return {
                                                        element : "span",
                                                        text() {
                                                            return material.weight
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                element(material) {
                                                    return {
                                                        element : "span",
                                                        text() {
                                                            return material.symbol
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }

                                },
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
`class Repeat extends HTMLElement {
    initialize(that) {
        let materials;

        return class {
        
            get materials() {
                return materials;
            }

            set materials(value) {
                materials = value;
            }

            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: Example,
                            items : {
                                input() {
                                    return materials;
                                }
                            },
                            meta : {
                                content : [
                                    {
                                        element(material) {
                                            return {
                                                element : "span",
                                                text() {
                                                    return material.position
                                                }
                                            }
                                        }
                                    },
                                    {
                                        element(material) {
                                            return {
                                                element : "span",
                                                text() {
                                                    return material.name
                                                }
                                            }
                                        }
                                    },
                                    {
                                        element(material) {
                                            return {
                                                element : "span",
                                                text() {
                                                    return material.weight
                                                }
                                            }
                                        }
                                    },
                                    {
                                        element(material) {
                                            return {
                                                element : "span",
                                                text() {
                                                    return material.symbol
                                                }
                                            }
                                        }
                                    }
                                ]
                            }

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
    name: "documentation-common-implicit",
    class: meta,
    guard() {
        return {
            materials: jsonClient.get("materials.json")
        }
    }
})