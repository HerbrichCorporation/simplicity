import {builder, customComponents} from "../library/simplicity/simplicity.js";
import MatToolbar from "../library/simplicity/components/navigation/mat-toolbar.js";
import MatDrawerContainer from "../library/simplicity/components/navigation/mat-drawer-container.js";
import MatDrawer from "../library/simplicity/components/navigation/mat-drawer.js";
import DomA from "../library/simplicity/directives/dom-a.js";
import MatDrawerContent from "../library/simplicity/components/navigation/mat-drawer-content.js";
import DomRouter from "../library/simplicity/directives/dom-router.js";
import DomLi from "../library/simplicity/directives/dom-li.js";

class App extends HTMLElement {

    initialize(that) {
        let open = true

        return class {

            get open() {
                return open;
            }

            set open(value) {
                open = value;
            }

            toggle() {
                open = !open;
            }

            render() {
                builder(that, {
                    element: "div",
                    style: {
                        height: "100vh"
                    },
                    children: [
                        {
                            element: MatToolbar,
                            left: [
                                {
                                    element: "button",
                                    type: "button",
                                    className: "icon",
                                    onClick() {
                                        that.toggle();
                                    },
                                    style : {
                                        backgroundColor : "var(--main-normal-color)",
                                        fontSize : "x-large"
                                    },
                                    text: "menu"
                                }
                            ],
                            right: [
                                {
                                    element: "a",
                                    href: "https://www.google.de/chrome",
                                    children: [
                                        {
                                            element: "img",
                                            src: "images/chrome_logo.png",
                                            style: {
                                                height: "32px",
                                                width: "32px",
                                                marginRight: "5px"
                                            }
                                        }
                                    ]
                                },
                                {
                                    element: "a",
                                    href: "https://www.microsoft.com/de-de/edge",
                                    children: [
                                        {
                                            element: "img",
                                            src: "images/edge.png",
                                            style: {
                                                height: "32px",
                                                width: "32px",
                                                marginRight: "5px"
                                            }
                                        }
                                    ]
                                },
                                {
                                    element: "a",
                                    href: "https://www.mozilla.org",
                                    children: [
                                        {
                                            element: "img",
                                            src: "images/firefox_logo.png",
                                            style: {
                                                height: "32px",
                                                width: "32px",
                                                marginRight: "5px"
                                            }
                                        }
                                    ]
                                }

                            ]
                        },
                        {
                            element: MatDrawerContainer,
                            drawer: {
                                element: MatDrawer,
                                open: {
                                    input() {
                                        return open;
                                    }
                                },
                                content: [
                                    {
                                        element: "div",
                                        children: [
                                            {
                                                element: "h2",
                                                text: "Content"
                                            }
                                        ]
                                    },
                                    {
                                        element: "hr"
                                    },
                                    {
                                        element: "nav",
                                        children: [
                                            {
                                                element: "ul",
                                                children: [
                                                    {
                                                        element: DomLi,
                                                        children: [
                                                            {
                                                                element: DomA,
                                                                href: "#/documentation/introduction",
                                                                children: [
                                                                    {
                                                                        element: "h4",
                                                                        text: "Introduction"
                                                                    },
                                                                    {
                                                                        element: "p",
                                                                        text: "About this Framework and how to use it. Best Practices and more."
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        element: DomLi,
                                                        children: [
                                                            {
                                                                element: "div",
                                                                children: [
                                                                    {
                                                                        element: "h4",
                                                                        text: "Common"
                                                                    }, {
                                                                        element: "p",
                                                                        text: "All kinds of Common Elements. If, Repeat and meta Templating."
                                                                    }
                                                                ]
                                                            }, {
                                                                element: "ul",
                                                                children: [
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/common/if",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Dom-If"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "If implementation for HTML Elements"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/common/repeat",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Dom-Repeat"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "For loop for HTML Elements"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/common/implicit",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Dom-Implicit"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "Implicit Templating"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        element: DomLi,
                                                        children: [
                                                            {
                                                                element: "div",
                                                                children: [
                                                                    {
                                                                        element: "h4",
                                                                        text: "Form"
                                                                    }, {
                                                                        element: "p",
                                                                        text: "All kinds of Form Elements. Checkbox, Select, Radio and Input"
                                                                    }
                                                                ]
                                                            }, {
                                                                element: "ul",
                                                                children: [
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/checkbox",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Checkbox"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about derived Checkbox from native Checkbox."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/editor",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Editor"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "HTML Editor"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/select",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Select"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about derived Select from native Select."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/select2",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Select"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about Material Design Select with lazy loading."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/multi-select",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Multi Select"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about Material Design MultiSelect with lazy loading."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/input",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Text Input"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about derived Text Input from native Text Input."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/radio",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Radio"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about derived Radio from native Radio."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/rating",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Mat Rating"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "A Mat Rating like in Material Design"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/form/form",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Dom Form"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about derived Form from native Form."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        element: DomLi,
                                                        children: [
                                                            {
                                                                element: "div",
                                                                children: [
                                                                    {
                                                                        element: "h4",
                                                                        text: "Modals"
                                                                    }, {
                                                                        element: "p",
                                                                        text: "All kinds of Modal Elements. Dialog, Bottom Sheet and Snackbar."
                                                                    }
                                                                ]
                                                            }, {
                                                                element: "ul",
                                                                children: [
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/modal/dialog",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Dialog"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "An Dialog Implementation without Animations"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/modal/tooltip",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Tooltip"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "A Tooltip implementation without Animations"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        element: DomLi,
                                                        children: [
                                                            {
                                                                element: "div",
                                                                children: [
                                                                    {
                                                                        element: "h4",
                                                                        text: "Indicators"
                                                                    }, {
                                                                        element: "p",
                                                                        text: "Spinner and Progress Bar in Material Design."
                                                                    }
                                                                ]
                                                            }, {
                                                                element: "ul",
                                                                children: [
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/indicator/spinner",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Mat Spinner"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "A Mat Spinner like in Material Design"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/indicator/progress",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Mat Progress"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "A Mat Progress Bar like in Material Design"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        element: DomLi,
                                                        children: [
                                                            {
                                                                element: "div",
                                                                children: [
                                                                    {
                                                                        element: "h4",
                                                                        text: "Navigation"
                                                                    }, {
                                                                        element: "p",
                                                                        text: "All kinds of Navigation Elements. Drawer, Menu and Router."
                                                                    }
                                                                ]
                                                            }, {
                                                                element: "ul",
                                                                children: [
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/navigation/drawer",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Drawer"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "An Drawer Implementation without Animations"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/navigation/second",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Dom Router"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "All about the Simplicity Router"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/navigation/tabs",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Tabs"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "A Tabs implementation without Animations"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/navigation/menu",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Menu"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "A Menu implementation without Animations"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/navigation/carousel",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Material Carousel"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "A Carousel implementation"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        element: DomLi,
                                                        children: [
                                                            {
                                                                element: "div",
                                                                children: [
                                                                    {
                                                                        element: "h4",
                                                                        text: "Table"
                                                                    }, {
                                                                        element: "p",
                                                                        text: "All kinds of Table Elements."
                                                                    }
                                                                ]
                                                            }, {
                                                                element: "ul",
                                                                children: [
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/table/table",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Table"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "About Tables in HTML and how to use them."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        element: DomLi,
                                                                        children: [
                                                                            {
                                                                                element: DomA,
                                                                                href: "#/documentation/table/grid",
                                                                                children: [
                                                                                    {
                                                                                        element: "h4",
                                                                                        text: "Grid"
                                                                                    },
                                                                                    {
                                                                                        element: "p",
                                                                                        text: "About Grid in HTML and how to use it."
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            content: {
                                element: MatDrawerContent,
                                content: {
                                    element: DomRouter,
                                    level : 0
                                }
                            }
                        }
                    ]
                })

            }
        }
    }

}

customComponents.define("documentation-app", App)