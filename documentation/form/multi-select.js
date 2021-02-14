import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatMultiSelect from "../../library/simplicity/components/form/mat-multi-select.js";

class If extends HTMLElement {
    initialize(that) {

        let value = [
            {
                id : 1,
                name : "First"
            },            {
                id : 2,
                name : "Second"
            }
        ]

        let selected = [
            {
                id : 1,
                name : "First"
            },            {
                id : 2,
                name : "Second"
            }
        ]

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
                                    text: "Mat Multi Select"
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
                                                    text : "MatMultiSelect"
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
                                                    text : "MatMultiSelect"
                                                },
                                                {
                                                    element : "td",
                                                    text : "value"
                                                },
                                                {
                                                    element : "td",
                                                    text : "opject for input and output"
                                                }
                                            ]
                                        },
                                        {
                                            element : "tr",
                                            children : [
                                                {
                                                    element : "td",
                                                    text : "MatMultiSelect"
                                                },
                                                {
                                                    element : "td",
                                                    text : "items"
                                                },
                                                {
                                                    element : "td",
                                                    text : "function for rendering option with json request"
                                                }
                                            ]
                                        },
                                        {
                                            element : "tr",
                                            children : [
                                                {
                                                    element : "td",
                                                    text : "MatMultiSelect"
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
                                                    element : MatMultiSelect,
                                                    placeholder : "Multi Select",
                                                    value : {
                                                        input() {
                                                            return selected;
                                                        },
                                                        output(v) {
                                                            selected = v;
                                                        }
                                                    },
                                                    items : {
                                                        direct(query, callback) {
                                                            let values;
                                                            if (query.value) {
                                                                values = value
                                                                    .filter(item => item.name.toLowerCase().startsWith(query.value.toLowerCase()))
                                                                    .slice(query.index, query.index + query.limit);
                                                            } else {
                                                                values = value.slice(query.index, query.index + query.limit);
                                                            }
                                                            callback(values, value.length);
                                                        }
                                                    },
                                                    meta : {
                                                        option : {
                                                            element(item) {
                                                                return {
                                                                    element : "div",
                                                                    text : item.name
                                                                }
                                                            }
                                                        },
                                                        selection : {
                                                            element(item) {
                                                                return {
                                                                    element : "div",
                                                                    text : item.name
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

        let value = [
            {
                id : 1,
                name : "First"
            },            {
                id : 2,
                name : "Second"
            }
        ]

        let selected = [
            {
                id : 1,
                name : "First"
            },            {
                id : 2,
                name : "Second"
            }
        ]

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element : MatMultiSelect,
                            placeholder : "Multi Select",
                            value : {
                                input() {
                                    return selected;
                                },
                                output(v) {
                                    selected = v;
                                }
                            },
                            items : {
                                direct(query, callback) {
                                    let values;
                                    if (query.value) {
                                        values = value
                                            .filter(item => item.name.toLowerCase().startsWith(query.value.toLowerCase()))
                                            .slice(query.index, query.index + query.limit);
                                    } else {
                                        values = value.slice(query.index, query.index + query.limit);
                                    }
                                    callback(values, value.length);
                                }
                            },
                            meta : {
                                option : {
                                    element(item) {
                                        return {
                                            element : "div",
                                            text : item.name
                                        }
                                    }
                                },
                                selection : {
                                    element(item) {
                                        return {
                                            element : "div",
                                            text : item.name
                                        }
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
    name: "documentation-common-if",
    class: If
})