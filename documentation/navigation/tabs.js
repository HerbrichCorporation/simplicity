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