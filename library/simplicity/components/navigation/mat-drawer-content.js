import {builder, customComponents} from "../../simplicity.js";

class MatDrawerContent extends HTMLElement {
    initialize(that) {

        let content;

        that.style.width = "100%"

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
                    initialize(element) {
                        element.appendChild(content);
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-drawer-content", MatDrawerContent)