import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatTable from "../../library/simplicity/components/table/mat-table.js";
import {jsonClient} from "../../library/simplicity/services/client.js";

class Table extends HTMLElement {
    initialize(that) {
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
                                    element: MatTable,
                                    items: {
                                        direct(query, callback) {
                                            jsonClient.get("materials.json")
                                                .then((items) => {
                                                    let materials;
                                                    if (query.value) {
                                                        materials = items
                                                            .filter(item => item.name.toLowerCase().startsWith(query.value.toLowerCase()))
                                                            .slice(query.index, query.index + query.limit);
                                                    } else {
                                                        materials = items.slice(query.index, query.index + query.limit);
                                                    }
                                                    callback(materials, items.length);
                                                })
                                        },
                                    },
                                    meta: {
                                        header: [
                                            {
                                                element() {
                                                    return {
                                                        element: "div",
                                                        text: "Position"
                                                    }
                                                }
                                            },
                                            {
                                                element() {
                                                    return {
                                                        element: "div",
                                                        text: "Name"
                                                    }
                                                }
                                            },
                                            {
                                                element() {
                                                    return {
                                                        element: "div",
                                                        text: "Weight"
                                                    }
                                                }
                                            },
                                            {
                                                element() {
                                                    return {
                                                        element: "div",
                                                        text: "Symbol"
                                                    }
                                                }
                                            }
                                        ],
                                        body:   [
                                            {
                                                element(material) {
                                                    return {
                                                        element: "div",
                                                        text: material.position
                                                    }
                                                }
                                            },
                                            {
                                                element(material) {
                                                    return {
                                                        element: "div",
                                                        text: material.name
                                                    }
                                                }
                                            },
                                            {
                                                element(material) {
                                                    return {
                                                        element: "div",
                                                        text: material.weight
                                                    }
                                                }
                                            },
                                            {
                                                element(material) {
                                                    return {
                                                        element: "div",
                                                        text: material.symbol
                                                    }
                                                }
                                            }
                                        ]
                                    }
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
                                        `class Table extends HTMLElement {
    initialize(that) {
        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: MatTable,
                            items(query, callback) {
                                jsonClient.get("materials.json")
                                    .then((items) => {
                                        let materials;
                                        if (query.value) {
                                            materials = items
                                                .filter(item => item.name.toLowerCase().startsWith(query.value.toLowerCase()))
                                                .slice(query.index, query.index + query.limit);
                                        } else {
                                            materials = items.slice(query.index, query.index + query.limit);
                                        }
                                        callback(materials, items.length);
                                    })
                            },
                            meta : {
                                header : [
                                    {
                                        element() {
                                            return {
                                                element : "div",
                                                text : "Position"
                                            }
                                        }
                                    },
                                    {
                                        element() {
                                            return {
                                                element : "div",
                                                text : "Name"
                                            }
                                        }
                                    },
                                    {
                                        element() {
                                            return {
                                                element : "div",
                                                text : "Weight"
                                            }
                                        }
                                    },
                                    {
                                        element() {
                                            return {
                                                element : "div",
                                                text : "Symbol"
                                            }
                                        }
                                    }
                                ],
                                body : [
                                    {
                                        element(material) {
                                            return {
                                                element : "div",
                                                text : material.position
                                            }
                                        }
                                    },
                                    {
                                        element(material) {
                                            return {
                                                element : "div",
                                                text : material.name
                                            }
                                        }
                                    },
                                    {
                                        element(material) {
                                            return {
                                                element : "div",
                                                text : material.weight
                                            }
                                        }
                                    },
                                    {
                                        element(material) {
                                            return {
                                                element : "div",
                                                text : material.symbol
                                            }
                                        }
                                    }
                                ]
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
    name: "documentation-table-table",
    class: Table
})