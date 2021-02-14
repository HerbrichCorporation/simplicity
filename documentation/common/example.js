import {builder, customComponents} from "../../library/simplicity/simplicity.js";

class Example extends HTMLElement {
    initialize(that) {

        let meta;
        let items;

        return class {

            get meta() {
                return meta;
            }

            set meta(value) {
                meta = value;
            }

            get items() {
                return items;
            }

            set items(value) {
                items = value;
            }

            render() {
                builder(that, {
                    element : "div",
                    children : {
                        items() {
                            return items;
                        },
                        item(item) {
                            return {
                                element : "div",
                                children : [
                                    {
                                        element : "span",
                                        initialize(element) {
                                            let contentElement = meta.content[0];
                                            let m = contentElement.element(item)
                                            builder(element, m);
                                        }
                                    },
                                    {
                                        element : "span",
                                        initialize(element) {
                                            let contentElement = meta.content[1];
                                            let m = contentElement.element(item)
                                            builder(element, m);
                                        }
                                    },
                                    {
                                        element : "span",
                                        initialize(element) {
                                            let contentElement = meta.content[2];
                                            let m = contentElement.element(item)
                                            builder(element, m);
                                        }
                                    },
                                    {
                                        element : "span",
                                        initialize(element) {
                                            let contentElement = meta.content[3];
                                            let m = contentElement.element(item)
                                            builder(element, m);
                                        }
                                    }
                                ]
                            }
                        }
                    }
                })
            }
        }
    }
}

export default customComponents.define("documentation-common-example", Example)