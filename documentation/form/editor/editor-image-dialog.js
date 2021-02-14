import {builder, customComponents} from "../../../library/simplicity/simplicity.js";
import MatDialog from "../../../library/simplicity/components/modal/mat-dialog.js";
import MatGrid from "../../../library/simplicity/components/table/mat-grid.js";

class EditorImageDialog extends HTMLElement {
    initialize(that) {

        let callback;
        let value;

        let items = (query, callback) => {
            callback(
                [
                    {
                        name: 1,
                        url: "images/a5WZLLq_700bwp.webp"
                    },
                    {
                        name: 2,
                        url: "images/a7W7Z4m_700bwp.webp"
                    },
                    {
                        name: 3,
                        url: "images/a9nPQDj_700bwp.webp"
                    },
                    {
                        name: 4,
                        url: "images/aBme7LD_460swp.webp"
                    }]
                , 4)
        }

        return class {

            get callback() {
                return callback;
            }

            set callback(value) {
                callback = value;
            }

            get items() {
                return items;
            }

            set items(value) {
                items = value
            }

            render() {
                builder(that, {
                    element: MatDialog,
                    header: "Table Setup",
                    content: {
                        element: "div",
                        children: [
                            {
                                element: MatGrid,
                                items: {
                                    direct: items
                                },
                                meta: {
                                    item: {
                                        element(item) {
                                            return {
                                                element: "img",
                                                src: item.url,
                                                style: {
                                                    height: "200px"
                                                },
                                                onClick() {
                                                    callback(item.url);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    footer: {
                        element: "button",
                        type: "button",
                        text: "Ok",
                        onClick() {
                            callback(value);
                        }
                    }
                })
            }
        }
    }
}

export default customComponents.define("editor-image-dialog", EditorImageDialog)