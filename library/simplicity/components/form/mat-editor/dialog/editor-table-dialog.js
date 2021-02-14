import {builder, customComponents} from "../../../../simplicity.js";
import MatDialog from "../../../modal/mat-dialog.js";
import DomInput from "../../../../directives/dom-input.js";
import MatInputContainer from "../../containers/mat-input-container.js";

class EditorTableDialog extends HTMLElement {
    initialize(that) {

        let value;

        let callback;

        return class {

            get callback() {
                return callback;
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
                        style : {
                            display : "flex"
                        },
                        children : [
                            {
                                element: MatInputContainer,
                                placeholder : "Columns",
                                content :                             {
                                    element : DomInput,
                                    type : "number",
                                    value : {
                                        input() {
                                            return value;
                                        },
                                        output(v) {
                                            value = v;
                                        }
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

export default customComponents.define("editor-table-dialog", EditorTableDialog)