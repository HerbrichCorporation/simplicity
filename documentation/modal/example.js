import {builder, customComponents} from "../../library/simplicity/simplicity.js";
import MatDialog from "../../library/simplicity/components/modal/mat-dialog.js";

class Example extends HTMLElement {
    initialize(that) {
        return class {
            render() {
                builder(that, {
                    element : MatDialog,
                    header : "Dialog",
                    content : {
                        element : "div",
                        text : "It work's"
                    }
                })
            }
        }
    }
}

export default customComponents.define("documentation-modal-example", Example)