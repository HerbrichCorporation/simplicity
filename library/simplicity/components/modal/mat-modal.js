import {builder, customComponents} from "../../simplicity.js";

class MatModal extends HTMLElement {

    initialize(that) {

        let content;

        return class {
            get content() {
                return content;
            }

            set content(value) {
                content = value;
            }

            extension() {
                return {
                    content : "element"
                }
            }

            render() {
                builder(that, {
                    element : "div",
                    style : {
                        top : "0",
                        left : "0",
                        position : "absolute",
                        display : "flex",
                        width : "100%",
                        height : "100vh",
                        alignItems : "center",
                        justifyContent : "center",
                        backgroundColor : "rgba(1, 1, 1, 0.5)"
                    },
                    initialize(element) {
                        element.appendChild(content);
                    }
                })
            }
        }
    }

}

export default customComponents.define("mat-modal", MatModal)