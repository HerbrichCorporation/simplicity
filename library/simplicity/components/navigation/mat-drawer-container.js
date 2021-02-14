import {builder, customComponents} from "../../simplicity.js";

class MatDrawerContainer extends HTMLElement {
    initialize(that) {

        let drawer;
        let content;

        that.style.width = "100%"

        return class {
            get drawer() {
                return drawer;
            }

            set drawer(value) {
                drawer = value;
            }

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
                        display : "flex"
                    },
                    initialize(element) {
                        element.appendChild(drawer);
                        element.appendChild(content);
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-drawer-container", MatDrawerContainer)