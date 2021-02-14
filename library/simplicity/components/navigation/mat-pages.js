import {builder, customComponents} from "../../simplicity.js";

class MatPages extends HTMLElement {
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
                    update(element) {
                        let temp = Array.from(contents);
                        let newChild = temp.splice(page, 1);
                        for (const tempElement of temp) {
                            tempElement.remove();
                        }

                        if (newChild[0].parentElement === null) {
                            element.appendChild(newChild[0]);
                        }
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-pages", MatPages);