import {builder, customComponents} from "../../simplicity.js";
import MatInputContainer from "./containers/mat-input-container.js";
import DomInput from "../../directives/dom-input.js";
import {debounce} from "../../services/tools.js";

class MatSelect extends HTMLElement {
    initialize(that) {

        let placeholder = "";
        let open = false;
        let value;
        let items;

        let size = 0;
        let limit = 5;

        let index = 0;
        let window = [];

        let id = "id";
        let label = "name"

        let meta;

        function up() {
            index -= 5
            load();
        }

        function down() {
            index += 5;
            load();
        }

        function load() {
            let input = that.querySelector("input");

            that.items({index: index, limit: limit, value: input.value}, (_data, _size) => {
                size = _size;
                window = _data;
            });
        }

        return class  {

            get placeholder() {
                return placeholder;
            }

            set placeholder(value) {
                placeholder = value;
            }

            get value() {
                return value;
            }

            set value(v) {
                value = v;
            }

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

            get label() {
                return label;
            }

            set label(value) {
                label = value;
            }

            get id() {
                return id;
            }

            set id(value) {
                id = value;
            }

            render() {

                builder(that, {
                    element : "div",
                    style : {
                        position : "relative"
                    },
                    children : [
                        {
                            element : MatInputContainer,
                            placeholder : placeholder,
                            content : {
                                element : DomInput,
                                type : "text",
                                onClick() {
                                    open = true;
                                    load();
                                },
                                initialize(element) {
                                    element.addEventListener("keyup", debounce(() => {
                                        load();
                                    }))
                                }
                            }
                        }, {
                            element: "div",
                            if() {
                                return open;
                            },
                            style : {
                                position: "absolute",
                                top: "34px",
                                backgroundColor: "var(--main-background-color)",
                                width: "100%",
                                textAlign : "center",
                                boxShadow: `0 3px 1px -2px rgba(255, 255, 255, .2),
                                            0 2px 2px 0 rgba(255, 255, 255, .14),
                                            0 1px 5px 0 rgba(255, 255, 255, .12)`
                            },
                            onMouseLeave() {
                                open = false;
                            },
                            children : [
                                {
                                    element: "button",
                                    type : "button",
                                    className : "material-icons",
                                    style : {
                                        width : "100%",
                                        display() {
                                            return index > 0 ? "inline" : "none"
                                        }
                                    },
                                    onClick() {
                                        up();
                                    },
                                    text : "arrow_drop_up"
                                }, {
                                    element: "div",
                                    style : {
                                        textAlign : "left",
                                    },
                                    children : {
                                        items() {
                                            return window;
                                        },
                                        item(item) {
                                            return {
                                                element: "div",
                                                className : "hover",
                                                style : {
                                                    fontSize : "small",
                                                    padding : "2px",
                                                    lineHeight : "32px"
                                                },
                                                onClick() {
                                                    let input = that.querySelector("input");
                                                    input.value = item[label]
                                                    value = item;
                                                    open = false;
                                                    that.dispatchEvent(new Event("change"));
                                                },
                                                initialize(element) {
                                                    let m = meta.option
                                                    builder(element, m.element(item));
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    element: "button",
                                    type : "button",
                                    className : "material-icons",
                                    style : {
                                        width : "100%",
                                        display() {
                                            return index + limit < size ? "inline" : "none"
                                        }
                                    },
                                    onClick() {
                                        down();
                                    },
                                    text : "arrow_drop_down"
                                }
                            ]
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("mat-select", MatSelect)