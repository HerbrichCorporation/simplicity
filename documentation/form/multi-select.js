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