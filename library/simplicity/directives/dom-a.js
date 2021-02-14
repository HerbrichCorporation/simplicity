import {customComponents} from "../simplicity.js";

class DomA extends HTMLAnchorElement {

    initialize(that) {
        let hateoas;
        let action;

        that.addEventListener("click", () => {
            document.dispatchEvent(new CustomEvent("page", {detail : {hateoas : hateoas, action : action}}));
        })

        return class {

            get hateoas() {
                return hateoas;
            }

            set hateoas(value) {
                hateoas = value;
            }

            get action() {
                return action;
            }

            set action(value) {
                action = value;
            }

            static extension() {
                return {
                    hateoas: "object",
                    action: "string"
                }
            }

        }
    }

}

export default customComponents.define("dom-a", DomA, {extends : "a"})