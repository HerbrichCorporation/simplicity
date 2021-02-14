import {builder, customComponents} from "../../simplicity.js";

class MatPage extends HTMLElement {
    initialize(that) {

        let page = 0;
        let contents = [];

        return class  {

            get page() {
                return page;
            }

            set page(value) {
                page = value;
            }

            get contents() {
                return contents;
            }

            set contents(value) {
                contents = value;
            }

            render() {
                builder(that, {
                    element : "div",
                    initialize(element) {
                        for (const content of contents) {
                            element.appendChild(content);
                        }
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-page", MatPage);