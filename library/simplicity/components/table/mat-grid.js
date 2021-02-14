import {builder, customComponents} from "../../simplicity.js";

class MatGrid extends HTMLElement {

    initialize(that) {

        let window = []
        let meta;
        let items;
        let emptyItem;

        let index = 0;
        let limit = 20;
        let size = 0;

        let links;

        function load() {
            items({index: index, limit: limit}, (_items, _size, _links) => {
                size = _size;
                window = _items;

                if (emptyItem) {
                    for (let i = window.length; i < limit; i++) {
                        window.push(emptyItem)
                    }
                }
                links = _links;
            });
        }

        function skipPrevious() {
            index = 0;
            load();
        }

        function arrowLeft() {
            index -= limit;
            load();
        }

        function canArrowLeft() {
            return index > 0;
        }

        function arrowRight() {
            index += limit;
            load();
        }

        function canArrowRight() {
            return index + limit < size;
        }

        function skipNext() {
            let number = Math.round(size / limit);
            index = (number - 1) * limit;
            load();
        }

        return class {

            get emptyItem() {
                return emptyItem;
            }

            set emptyItem(value) {
                emptyItem = value;
            }

            get meta() {
                return meta;
            }

            set meta(value) {
                meta = value
            }

            get items() {
                return items;
            }

            set items(value) {
                items = value;
            }

            get limit() {
                return limit;
            }

            set limit(value) {
                limit = value
            }

            reload() {
                load();
            }

            render() {

                load();

                builder(that, [{
                    element: "div",
                    style: {
                        display: "flex",
                        flexWrap: "wrap"
                    },
                    children:
                        {
                            items() {
                                return window;
                            },
                            item(item) {
                                return {
                                    element: "div",
                                    onClick() {
                                        that.dispatchEvent(new CustomEvent("itemclick", {detail : {item : item}}))
                                    },
                                    initialize(element) {
                                        let m = meta.item;
                                        builder(element, m.element(item));
                                    }
                                }
                            }
                        }


                },
                    {
                        element: "div",
                        style: {
                            display: "flex"
                        },
                        children: [
                            {
                                element: "div",
                                style: {
                                    lineHeight: "42px"
                                },
                                text() {
                                    return `${index} - ${index + limit} of ${size}`
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "material-icons",
                                onClick() {
                                    skipPrevious();
                                },
                                text: "skip_previous"
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "material-icons",
                                onClick() {
                                    arrowLeft();
                                },
                                disabled() {
                                    return !canArrowLeft();
                                },
                                text: "keyboard_arrow_left"
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "material-icons",
                                onClick() {
                                    arrowRight();
                                },
                                disabled() {
                                    return !canArrowRight();
                                },
                                text: "keyboard_arrow_right"
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "material-icons",
                                onClick() {
                                    skipNext();
                                },
                                text: "skip_next"
                            },
                            {
                                element : "div",
                                style : {
                                    flex : "1"
                                }
                            },
                            {
                                element : "button",
                                type: "button",
                                text : "Create",
                                onClick() {
                                    let link = links.find((link) => link.rel === "create")
                                    that.dispatchEvent(new CustomEvent("create", {detail : link}))
                                }
                            }
                        ]
                    }
                ])
            }
        }
    }
}

export default customComponents.define("mat-grid", MatGrid);