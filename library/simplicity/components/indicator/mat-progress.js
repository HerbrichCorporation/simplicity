import {builder, customComponents} from "../../simplicity.js";

class MatProgress extends HTMLElement {
    initialize(that) {
        return class  {
            render() {
                builder(that, {
                    element : "div",
                    className : "progress",
                    children : [
                        {
                            element : "div",
                            className : "indeterminate"
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("mat-progress", MatProgress)