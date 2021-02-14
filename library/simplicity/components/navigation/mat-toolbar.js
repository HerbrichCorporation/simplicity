import {builder, customComponents} from "../../simplicity.js"

class MatToolbar extends HTMLElement {

    initialize(that) {
        let left = [];
        let middle = [];
        let right = [];

        return class {
            get left() {
                return left;
            }

            set left(value) {
                left = value;
            }

            get middle() {
                return middle;
            }

            set middle(value) {
                middle = value;
            }

            get right() {
                return right;
            }

            set right(value) {
                right = value;
            }

            render() {

                this.style.display = "block";
                this.style.position = "sticky";
                this.style.top = "0";
                this.style.left = "0"

                builder(that, {
                    element : "table",
                    style : {
                        backgroundColor : "var(--main-normal-color)"
                    },
                    children : [
                        {
                            element : "tr",
                            children : [
                                {
                                    element : "td",
                                    style : {
                                        width : "33%"
                                    },
                                    initialize(element) {
                                        for (const item of left) {
                                            element.appendChild(item);
                                        }
                                    }
                                },
                                {
                                    element : "td",
                                    style : {
                                        width : "33%",
                                        textAlign : "center"
                                    },
                                    initialize(element) {
                                        for (const item of middle) {
                                            element.appendChild(item);
                                        }
                                    }
                                },
                                {
                                    element : "td",
                                    style : {
                                        width : "33%",
                                        textAlign : "right"
                                    },
                                    initialize(element) {
                                        for (const item of right) {
                                            element.appendChild(item);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                })

            }
        }
    }


}

export default customComponents.define("mat-toolbar", MatToolbar);