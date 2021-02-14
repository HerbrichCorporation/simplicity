import {builder, customComponents} from "../../simplicity.js";

class MatTabs extends HTMLElement {
    initialize(that) {
        let contents = [];

        function deSelectAll() {
            for (const content of contents) {
                content.selected = false;
            }
        }

        return class  {

            get contents() {
                return contents;
            }

            set contents(value) {
                contents = value;
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
                            style : {
                                display : "flex"
                            },
                            initialize(element) {
                                for (const content of contents) {
                                    element.appendChild(content);
                                    content.addEventListener("click", () => {
                                        deSelectAll();

                                        content.selected = true;

                                        let indexOf = contents.indexOf(content);
                                        that.dispatchEvent(new CustomEvent("page", {detail : {page : indexOf}}))
                                    })
                                }
                                contents[0].selected = true;
                            }
                        }, {
                            element: "div",
                            style: {
                                flex : "1",
                                borderBottom: "1px solid var(--main-grey-color)"
                            }
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("mat-tabs", MatTabs);