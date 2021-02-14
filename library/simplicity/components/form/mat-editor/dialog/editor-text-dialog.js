import {builder, customComponents} from "../../../../simplicity.js";
import MatDialog from "../../../modal/mat-dialog.js";

class EditorTextDialog extends HTMLElement {

    initialize(that) {

        let value = "";

        let callback;

        return class {

            get callback() {
                return callback
            }

            set callback(value) {
                callback = value;
            }

            render() {
                builder(that, {
                    element : MatDialog,
                    header : "Table Setup",
                    content : {
                        element : "div",
                        children : [
                            {
                                element : "textarea",
                                rows : "10",
                                cols : "20",
                                style : {
                                    width : "400px",
                                    height : "200px"
                                },
                                value : {
                                    input() {
                                        return value;
                                    },
                                    output(v) {
                                        value = v;
                                    }
                                }
                            }
                        ]
                    },
                    footer :  {
                        element: "button",
                        type : "button",
                        text : "Ok",
                        style : {
                            display : "block"
                        },
                        onClick() {
                            callback(value);
                        }
                    }
                })
            }
        }
    }

}

export default customComponents.define("editor-text-dialog", EditorTextDialog)