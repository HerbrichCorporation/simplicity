import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatMenu from "../../library/simplicity/components/navigation/mat-menu.js";
import MatMenuItem from "../../library/simplicity/components/navigation/mat-menu-item.js";

class Menu extends HTMLElement {
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
                                marginLeft : "20px",
                                marginRight : "20px"
                            },
                            children: [
                                {
                                    element: "h2",
                                    text: "Mat Menu"
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
                                    element: MatMenu,
                                    content : {
                                        element : "div",
                                        text : "Menu"
                                    },
                                    subMenu : [
                                        {
                                            element : MatMenuItem,
                                            content : {
                                                element : "div",
                                                text : "Menu1"
                                            }
                                        },
                                        {
                                            element : MatMenuItem,
                                            content : {
                                                element : "div",
                                                text : "Menu2"
                                            }
                                        }
                                    ]
                                },{
                                    element : "div",
                                    text : "Content"
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
                                        `class Menu extends HTMLElement {
    initialize(that) {
        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: MatMenu,
                            content : {
                                element : "div",
                                text : "Menu"
                            },
                            subMenu : [
                                {
                                    element : MatMenuItem,
                                    content : {
                                        element : "div",
                                        text : "Menu1"
                                    }
                                },
                                {
                                    element : MatMenuItem,
                                    content : {
                                        element : "div",
                                        text : "Menu2"
                                    }
                                }
                            ]
                        },{
                            element : "div",
                            text : "Content"
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
    name: "documentation-navigation-menu",
    class: Menu
})