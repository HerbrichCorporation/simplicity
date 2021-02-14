import {builder, customComponents} from "../../simplicity.js";

class MatPanel extends HTMLElement {

    initialize(that) {

        let header = ""
        let open = true;
        let content;

        return class {

            get header() {
                return header;
            }

            set header(value) {
                header = value;
            }

            get open() {
                return open;
            }

            set open(value) {
                open = value;
            }

            get content() {
                return content;
            }

            set content(value) {
                content = value;
            }

            extension() {
                return {
                    header : "string",
                    open : "boolean",
                    content : "element"
                }
            }

            toggle() {
                open = ! open;
            }

            render() {
                builder(that, [{
                    element : "div",
                    style : {
                        display : "flex",
                        backgroundColor : "var(--main-grey-color)"
                    },
                    children : [
                        {
                            element : "div",
                            style : {
                                fontSize : "12px",
                                padding : "5px",
                                color : "var(--main-background-color)",
                                lineHeight : "24px"
                            },
                            text() {
                                return header;
                            }
                        },
                        {
                            element : "div",
                            style : {
                                flex : "1"
                            }
                        },
                        {
                            element : "button",
                            type : "button",
                            className : "material-icons",
                            onClick() {
                                that.toggle();
                            },
                            style : {
                                display() {
                                    return ! open ? "block" : "none";
                                }
                            },
                            text : "keyboard_arrow_up"
                        },
                        {
                            element : "button",
                            type : "button",
                            className : "material-icons",
                            onClick() {
                                that.toggle();
                            },
                            style : {
                                display() {
                                    return open ? "block" : "none";
                                }
                            },
                            text : "keyboard_arrow_down"
                        }
                    ]
                }, {
                    element: "div",
                    style : {
                        backgroundColor : "var(--main-background-color)",
                        padding : "5px",
                        display() {
                            return open ? "block" : "none";
                        }
                    },
                    initialize(element) {
                        element.appendChild(content)
                    }
                }])
            }
        }
    }

}

export default customComponents.define("mat-panel", MatPanel)