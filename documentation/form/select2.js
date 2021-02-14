import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatSelect from "../../library/simplicity/components/form/mat-select.js";
import {jsonClient} from "../../library/simplicity/services/client.js";

class Select2 extends HTMLElement {
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
                                marginLeft: "20px",
                                marginRight: "20px"
                            },
                            children: [
                                {
                                    element: "h2",
                                    text: "Mat Select"
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
                                    text: `Mat Select for displaying Options with a json request`
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
                                                    text : "MatSelect"
                                                },
                                                {
                                                    element : "td",
                                                    text : "placeholder"
                                                },
                                                {
                                                    element : "td",
                                                    text : "function or string"
                                                }
                                            ]
                                        },
                                        {
                                            element : "tr",
                                            children : [
                                                {
                                                    element : "td",
                                                    text : "MatSelect"
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
                                                    text : "MatSelect"
                                                },
                                                {
                                                    element : "td",
                                                    text : "meta"
                                                },
                                                {
                                                    element : "td",
                                                    text : "Meta for rendering List"
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
                                                    element: MatSelect,
                                                    placeholder: "Select",
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
                                                        option: {
                                                            element(material) {
                                                                return {
                                                                    element: "div",
                                                                    text: material.name
                                                                }
                                                            }
                                                        }
                                                    }
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
        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                    {
                        element: MatSelect,
                        placeholder: "Select",
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
                            option : {
                                element(material) {
                                    return {
                                        element : "div",
                                        text : material.name
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
    name: "documentation-form-select2",
    class: Select2
})