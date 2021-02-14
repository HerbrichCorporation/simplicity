import {builder, customComponents} from "../../simplicity.js";
import MatTableDialog from "./mat-table-dialog.js";
import {lifeCycle} from "../../processors/lifecycle-processor.js";

class MatTable extends HTMLTableElement {

    initialize(that) {

        let meta;
        let items;

        let columns = [];

        let index = 0;
        let limit = 5;

        let data = [];
        let size;
        let links;

        function open() {
            let dialog = new MatTableDialog();

            dialog.table = that;

            document.body.appendChild(dialog);
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

        function load() {
            items({index: index, limit: limit}, (_items, _size, _links) => {
                size = _size;
                data = _items;
                links = _links;
            });
        }


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

            static extension() {
                return {
                    meta : "meta",
                    items : "function",
                }
            }

            get columns() {
                return columns;
            }

            set columns(value) {
                columns = value;
            }

            left(index) {
                let element = columns[index];
                let other = columns[index - 1];

                columns[index] = other;
                columns[index - 1] = element;

                columns = Array.from(columns);

                load();
            }

            right(index) {
                let element = columns[index];
                let other = columns[index + 1];

                columns[index] = other;
                columns[index + 1] = element;

                columns = Array.from(columns);

                load();
            }

            render() {

                for (let i = 0; i < meta.header.length; i++) {
                    columns.push({
                        index: i,
                        visible: true,
                        sort: undefined
                    });
                }

                load();

                builder(that, [
                        {
                            element: "thead",
                            children: [
                                {
                                    element: "tr",
                                    children: {
                                        items() {
                                            return columns.filter((column) => column.visible);
                                        },
                                        item(item) {
                                            return {
                                                element: "td",
                                                children: [
                                                    {
                                                        element: "div",
                                                        onClick() {
                                                            open();
                                                        },
                                                        initialize(element) {
                                                            let m = meta.header[item.index];
                                                            builder(element, m.element());
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            element: "tbody",
                            children: {
                                items() {
                                    return data;
                                },
                                item(tr) {
                                    return {
                                        element: "tr",
                                        onClick() {
                                            that.dispatchEvent(new CustomEvent("rowclick", {detail : tr}))
                                        },
                                        children: {
                                            items() {
                                                return columns.filter((column) => column.visible);
                                            },
                                            item(td) {
                                                return {
                                                    element: "td",
                                                    children: [
                                                        {
                                                            element: "div",
                                                            initialize(element) {
                                                                let m = meta.body[td.index];
                                                                builder(element, m.element(tr));
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        },
                        {
                            element:  "tfoot",
                            children: [
                                {
                                    element: "tr",
                                    children: [
                                        {
                                            element : "td",
                                            colSpan : String(meta.header.length - 1),
                                            children : [
                                                {
                                                    element: "div",
                                                    style : {
                                                        display : "flex"
                                                    },
                                                    children: [
                                                        {
                                                            element : "div",
                                                            style : {
                                                                lineHeight: "42px"
                                                            },
                                                            text() {
                                                                return `${index} - ${index + limit} of ${size}`
                                                            }
                                                        },
                                                        {
                                                            element: "button",
                                                            type : "button",
                                                            className : "material-icons",
                                                            onClick() {
                                                                skipPrevious();
                                                            },
                                                            text : "skip_previous"
                                                        },
                                                        {
                                                            element: "button",
                                                            type : "button",
                                                            className : "material-icons",
                                                            onClick() {
                                                                arrowLeft();
                                                            },
                                                            disabled() {
                                                                return ! canArrowLeft();
                                                            },
                                                            text : "keyboard_arrow_left"
                                                        },
                                                        {
                                                            element: "button",
                                                            type : "button",
                                                            className : "material-icons",
                                                            onClick() {
                                                                arrowRight();
                                                            },
                                                            disabled() {
                                                                return ! canArrowRight();
                                                            },
                                                            text : "keyboard_arrow_right"
                                                        },
                                                        {
                                                            element: "button",
                                                            type : "button",
                                                            className : "material-icons",
                                                            onClick() {
                                                                skipNext();
                                                            },
                                                            text : "skip_next"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                )

            }
        }

    }

}

export default customComponents.define("mat-table", MatTable, {extends: "table"})