import {builder, customComponents} from "../library/simplicity/simplicity.js";

class Introduction extends HTMLElement {
    initialize(that) {
        that.style.width = "100%"

        return class {
            render() {
                builder(that, {
                    element : "div",
                    style : {
                        width : "800px",
                        margin : "auto"
                    },
                    children : [
                        {
                            element : "div",
                            children : [
                                {
                                    element : "h2",
                                    text : "Introduction"
                                },
                                {
                                    element: "hr"
                                },
                                {
                                    element: "h3",
                                    text : "About Simplicity"
                                },
                                {
                                    element: "span",
                                    text : `This is a dirty checking based Framework, where most listeners are not needed. The Framework listens
                                            for changes and propagates them to the whole App. With this technique real magic is build with less code.
                                            Vanilla Javascript is supposed to be used to have that great integration of javascript structures.`
                                },
                                {
                                    element: "h3",
                                    text : "Dirty Checking"
                                },
                                {
                                    element: "span",
                                    text : `The dirty checking technique enables four modes of integration with HTML markup. Two way interaction
                                            with attribute ([value]), one way input mode [value] and a listener (click). There is also the variable
                                            Attribute #value`
                                },
                                {
                                    element: "h3",
                                    text : "Component orientated Design"
                                },
                                {
                                    element: "span",
                                    text : `With Web Components technique all that fun stuff comes back again, think about Component orientated
                                            Design and what it might be. Everything is a Component and each Component communicates with the given
                                            Attributes to another Component. When you approach Component orientated Design all responsibilities
                                            of the Component must be clarified.`
                                },
                                {
                                    element: "h3",
                                    text : "Component Lazy loading"
                                },
                                {
                                    element: "span",
                                    text : `All views or components are loaded async lazy. With this benefit huge amount of performance is kept.
                                            Every view is per default async lazy loaded with a web worker.`
                                }
                            ]
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("app-introduction", Introduction)