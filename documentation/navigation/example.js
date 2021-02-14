import {builder, customViews} from "../../library/simplicity/simplicity.js";

class Example extends HTMLElement {
    initialize(that) {
        return class {
            render() {
                builder(that, {
                    element : "div",
                    text : "It work's"
                })
            }
        }
    }
}

customViews.define({
    name : "documentation-navigation-example",
    class : Example
})