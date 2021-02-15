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
                                    text: "Mat Table"
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
                                                    text : "MatTable"
                                                },
                                                {
                                                    element : "td",
                                                    text : "items"
                                                },
                                                {
                                                    element : "td",
                                                    text : "function for json request"
                                                }
                                            ]
                                        },
                                        {
                                            element : "tr",
                                            children : [
                                                {
                                                    element : "td",
                                                    text : "MatTable"
                                                },
                                                {
                                                    element : "td",
                                                    text : "meta"
                                                },
                                                {
                                                    element : "td",
                                                    text : "meta for rendering header and body"
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