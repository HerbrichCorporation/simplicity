import {builder, customComponents} from "../../simplicity.js";

class MatTab extends HTMLElement {
    initialize(that) {

        let content;
        let selected = false;

        return class  {

            get content() {
                return content;
            }

            set content(value) {
                content = value;
            }

            get selected() {
                return selected;
            }

            set selected(value) {
                selected = value;
            }

            render() {
                builder(that, {
                    element : "div",
                    style : {
                        height : "24px",
                        width : "100px",
                        textAlign : "center",
                        borderBottom() {
                          if (selected) {
                              return "1px solid var(--main-selected-color)"
                          } else {
                              return "1px solid var(--main-grey-color)"
                          }
                        }
                    },
                    initialize(element) {
                        element.appendChild(content);
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-tab", MatTab);