import {builder, customComponents} from "../../../simplicity.js";

class MatCheckboxContainer extends HTMLElement {
    initialize(that) {

        let content;
        let placeholder;

        return class {

            get content() {
                return content
            }

            set content(value) {
                content = value;
            }

            get placeholder() {
                return placeholder;
            }

            set placeholder(value) {
                placeholder = value;
            }

            render() {
                builder(that, {
                    element : "div",
                    style : {
                        display : "flex"
                    },
                    children : [
                        {
                            element : "div",
                            initialize(element) {
                                element.appendChild(content);
                            }
                        },
                        {
                            element: "div",
                            style : {
                                lineHeight : "18px"
                            },
                            text() {
                                return placeholder;
                            }
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("mat-checkbox-container", MatCheckboxContainer);