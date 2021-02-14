import {builder, customViews} from "../../library/simplicity/simplicity.js";
import {jsonClient} from "../../library/simplicity/services/client.js";

class Repeat extends HTMLElement {
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
                                    text: "Dom-Repeat"
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
                                    text: `This repeat is derived from the standard Template. There is one attribute called items for the array with
                                           the given items. The other attribute item is for the variable in the called repeat-loop.`
                                },
                                {
                                    element: "div",
                                    children: {
                                        items() {
                                            return materials;
                                        },
                                        item(material) {
                                            return {
                                                element: "div",
                                                children: [
                                                    {
                                                        element: "span",
                                                        text() {
                                                            return material.position;
                                                        }
                                                    },
                                                    {
                                                        element: "span",
                                                        text() {
                                                            return material.name;
                                                        }
                                                    },
                                                    {
                                                        element: "span",
                                                        text() {
                                                            return material.weight;
                                                        }
                                                    },
                                                    {
                                                        element: "span",
                                                        text() {
                                                            return material.symbol;
                                                        }
                                                    }
                                                ]
                                            }
                                        }
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
                            element: "div",
                            children: {
                                items() {
                                    return materials;
                                },
                                item(material) {
                                    return {
                                        element: "div",
                                        children: [
                                            {
                                                element: "span",
                                                text() {
                                                    return material.position;
                                                }
                                            },
                                            {
                                                element: "span",
                                                text() {
                                                    return material.name;
                                                }
                                            },
                                            {
                                                element: "span",
                                                text() {
                                                    return material.weight;
                                                }
                                            },
                                            {
                                                element: "span",
                                                text() {
                                                    return material.symbol;
                                                }
                                            }
                                        ]
                                    }
                                }
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
    name: "documentation-common-repeat",
    class: Repeat,
    guard() {
        return {
            materials: jsonClient.get("materials.json")
        }
    }
})