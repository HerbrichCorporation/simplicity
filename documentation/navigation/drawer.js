import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatDrawerContainer from "../../library/simplicity/components/navigation/mat-drawer-container.js";
import MatDrawer from "../../library/simplicity/components/navigation/mat-drawer.js";
import MatDrawerContent from "../../library/simplicity/components/navigation/mat-drawer-content.js";
import MatToolbar from "../../library/simplicity/components/navigation/mat-toolbar.js";

class Drawer extends HTMLElement {
    initialize(that) {

        let open = true;

        function toggle() {
            open = ! open;
        }

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
                                    text: "Mat Drawer"
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
                                    text: `The Material Drawer is for side navigation and works perfectly with responsive UI Design.`
                                },
                                {
                                    element: "div",
                                    children : [
                                        {
                                            element: MatToolbar,
                                            left : [
                                                {
                                                    element: "button",
                                                    type: "button",
                                                    className: "icon",
                                                    onClick() {
                                                        toggle();
                                                    },
                                                    style : {
                                                        backgroundColor : "var(--main-normal-color)",
                                                        fontSize : "x-large"
                                                    },
                                                    text: "menu"
                                                }
                                            ]
                                        },
                                        {
                                            element: MatDrawerContainer,
                                            drawer : {
                                                element : MatDrawer,
                                                open : {
                                                    input() {
                                                        return open;
                                                    }
                                                },
                                                content : [
                                                    {
                                                        element : "ul",
                                                        children : [
                                                            {
                                                                element : "li",
                                                                text : "Link to Resource 1"
                                                            },
                                                            {
                                                                element : "li",
                                                                text : "Link to Resource 2"
                                                            },
                                                            {
                                                                element : "li",
                                                                text : "Link to Resource 3"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            content : {
                                                element: MatDrawerContent,
                                                content : {
                                                    element : "div",
                                                    text : "it Work's !"
                                                }
                                            }
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

        let selected = true;

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: "div",
                            children : [
                                {
                                    element: MatToolbar,
                                    left : [
                                        {
                                            element: "button",
                                            type: "button",
                                            className: "icon",
                                            onClick() {
                                                toggle();
                                            },
                                            style : {
                                                backgroundColor : "var(--main-normal-color)",
                                                fontSize : "x-large"
                                            },
                                            text: "menu"
                                        }
                                    ]
                                },
                                {
                                    element: MatDrawerContainer,
                                    drawer : {
                                        element : MatDrawer,
                                        open : {
                                            input() {
                                                return open;
                                            }
                                        },
                                        content : [
                                            {
                                                element : "ul",
                                                children : [
                                                    {
                                                        element : "li",
                                                        text : "Link to Resource 1"
                                                    },
                                                    {
                                                        element : "li",
                                                        text : "Link to Resource 2"
                                                    },
                                                    {
                                                        element : "li",
                                                        text : "Link to Resource 3"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    content : {
                                        element: MatDrawerContent,
                                        content : {
                                            element : "div",
                                            text : "it Work's !"
                                        }
                                    }
                                }
                            ]
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
    name: "documentation-navigation-drawer",
    class: Drawer
})