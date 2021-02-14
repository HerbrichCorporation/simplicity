import {builder, customComponents} from "../../simplicity.js";

class MatDrawer extends HTMLElement {
    initialize(that) {

        let open = true;
        let content = [];

        return class {

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
                    open : "boolean",
                    content : "array"
                }
            }

            render() {
                builder(that, {
                    element : "div",
                    style : {
                        padding : "1px",
                        display() {
                            return open ? "block" : "none"
                        },
                        top : "0",
                        backgroundColor : "var(--main-normal-color)",
                        borderRight : "1px var(--main-normal-color) solid",
                        width : "300px",
                        zIndex : "2"
                    },
                    initialize(element) {
                        for (const contentElement of content) {
                            element.appendChild(contentElement);
                        }
                    }
                })
            }

        }
    }
}

export default customComponents.define("mat-drawer", MatDrawer)