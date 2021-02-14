import {builder, customComponents} from "../../../library/simplicity/simplicity.js";
import MatDialog from "../../../library/simplicity/components/modal/mat-dialog.js";
import DomInput from "../../../library/simplicity/directives/dom-input.js";

class EditorLinkDialog extends HTMLElement {
    initialize(that) {

        let table;
        let callback;
        let value = ""

        return class {

            get table() {
                return table;
            }

            set table(value) {
                table = value;
            }

            get callback() {
                return callback;
            }

            set callback(value) {
                callback = value;
            }

            get value() {
                return value;
            }

            set value(v) {
                value = v
            }

            render() {
                builder(that, {
                    element : MatDialog,
                    header : "Table Setup",
                    content : {
                        element : "div",
                        children : [
                            {
                                element : DomInput,
                                type : "text",
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
                    footer : {
                        element: "button",
                        type : "button",
                        text : "Ok",
                        onClick() {
                            callback(value);
                        }
                    }
                })
            }
        }
    }
}

export default customComponents.define("editor-link-dialog", EditorLinkDialog)