import {builder, customComponents} from "../../simplicity.js";
import DomInput from "../../directives/dom-input.js";

class MatRating extends HTMLElement {
    initialize(that) {

        let name;

        that.addEventListener("click", () => {
            let inputs = Array.from(that.querySelectorAll("input"));
            let checked;

            for(let input of inputs) {
                if (input.checked) {
                    checked = input;
                }
            }

            for(let i = 0; i < inputs.length; i++) {
                if (i < inputs.indexOf(checked)) {
                    inputs[i].classList.add("selected");
                } else {
                    inputs[i].classList.remove("selected");
                }
            }
        })

        return class  {

            get name() {
                return name;
            }

            set name(value) {
                name = value
            }

            render() {
                builder(that, {
                    element : "div",
                    style : {
                        display : "flex"
                    },
                    children : [
                        {
                            element : DomInput,
                            type : "radio",
                            name : name,
                            value : "1"
                        },
                        {
                            element : DomInput,
                            type : "radio",
                            name : name,
                            value : "2"
                        },
                        {
                            element : DomInput,
                            type : "radio",
                            name : name,
                            value : "3"
                        },
                        {
                            element : DomInput,
                            type : "radio",
                            name : name,
                            value : "4"
                        },
                        {
                            element : DomInput,
                            type : "radio",
                            name : name,
                            value : "5"
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("mat-rating", MatRating)
