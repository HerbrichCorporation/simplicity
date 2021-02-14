import {customComponents} from "../simplicity.js";

class DomLi extends HTMLElement {
    initialize(that) {
        let open = false;

        that.addEventListener("click", () => {
            open = ! open;

            let el = that.querySelector("ul")

            if (el) {
                if (open) {
                    el.style.display = "block";
                } else {
                    el.style.display = "none";
                }
            }

        })

        return class {

            get open() {
                return open;
            }

            set open(value) {
                open = value;
            }

            render() {
                let el = that.querySelector("ul");

                if (el) {
                    el.style.display = "none";
                }

            }
        }
    }
}

export default customComponents.define("dom-li", DomLi)