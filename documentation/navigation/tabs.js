import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatTabs from "../../library/simplicity/components/navigation/mat-tabs.js";
import MatTab from "../../library/simplicity/components/navigation/mat-tab.js";
import MatPages from "../../library/simplicity/components/navigation/mat-pages.js";
import MatPage from "../../library/simplicity/components/navigation/mat-page.js";

class Tabs extends HTMLElement {
    initialize(that) {

        let page = 0;

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
                                    text: "Mat Tab"
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
                                    element: "h3",
                                    text: "API"
                                },
                                {
                                    element: "table",
                                    children: [
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatTabs"
                                                },
                                                {
                                                    element: "td",
                                                    text: "onPage"
                                                },
                                                {
                                                    element: "td",
                                                    text: "function"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatTabs"
                                                },
                                                {
                                                    element: "td",
                                                    text: "contents"
                                                },
                                                {
                                                    element: "td",
                                                    text: "content for elements"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatTab"
                                                },
                                                {
                                                    element: "td",
                                                    text: "content"
                                                },
                                                {
                                                    element: "td",
                                                    text: "content for element"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatPages"
                                                },
                                                {
                                                    element: "td",
                                                    text: "page"
                                                },
                                                {
                                                    element: "td",
                                                    text: "function for page selection"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatPages"
                                                },
                                                {
                                                    element: "td",
                                                    text: "contents"
                                                },
                                                {
                                                    element: "td",
                                                    text: "contents for MatPage array"
                                                }
                                            ]
                                        },
                                        {
                                            element: "tr",
                                            children: [
                                                {
                                                    element: "td",
                                                    text: "MatPage"
                                                },
                                                {
                                                    element: "td",
                                                    text: "contents"
                                                },
                                                {
                                                    element: "td",
                                                    text: "contents for element array"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    element: "h3",
                                    text: "Example"
                                },
                                {
                                    element: "div",
                                    style: {
                                        position: "relative",
                                        height: "200px",
                                        border: "1px solid var(--main-normal-color)"
                                    },
                                    children: [
                                        {
                                            element: "div",
                                            style: {
                                                display: "block",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)"
                                            },
                                            children: [
                                                {
                                                    element: MatTabs,
                                                    onPage(event) {
                                                        page = event.detail.page;
                                                    },
                                                    contents: [
                                                        {
                                                            element: MatTab,
                                                            content: {
                                                                element: "div",
                                                                text: "Home"
                                                            }
                                                        },
                                                        {
                                                            element: MatTab,
                                                            content: {
                                                                element: "div",
                                                                text: "User"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    element: MatPages,
                                                    page: {
                                                        input() {
                                                            return page;
                                                        }
                                                    },
                                                    contents: [
                                                        {
                                                            element: MatPage,
                                                            contents: [
                                                                {
                                                                    element: "div",
                                                                    text: "Home"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            element: MatPage,
                                                            contents: [
                                                                {
                                                                    element: "div",
                                                                    text: "User"
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

        let page = 0;

        return class {
            render() {
                builder(that, {
                    element : "div",
                    children : [
                        {
                            element: MatTabs,
                            onPage(event) {
                                page = event.detail.page;
                            },
                            contents : [
                                {
                                    element : MatTab,
                                    content : {
                                        element : "div",
                                        text : "Home"
                                    }
                                },
                                {
                                    element : MatTab,
                                    content : {
                                        element : "div",
                                        text : "User"
                                    }
                                }
                            ]
                        },
                        {
                            element: MatPages,
                            page : {
                                input() {
                                    return page;
                                }
                            },
                            contents : [
                                {
                                    element : MatPage,
                                    contents : [
                                        {
                                            element : "div",
                                            text : "Home"
                                        }
                                    ]
                                },
                                {
                                    element : MatPage,
                                    contents : [
                                        {
                                            element : "div",
                                            text : "User"
                                        }
                                    ]
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
    name: "documentation-navigation-tabs",
    class: Tabs
})