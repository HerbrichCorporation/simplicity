import {builder, customComponents} from "../../simplicity.js";

class MatMenuItem extends HTMLElement {
    initialize(that) {

        let content;

        return class {

            get content() {
                return content;
            }

            set content(value) {
                content = value;
            }

            render() {
                builder(that, {
                    element : "div",
                    style : {
                        padding : "5px"
                    },
                    initialize(element) {
                        element.appendChild(content);
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-menu-item", MatMenuItem)