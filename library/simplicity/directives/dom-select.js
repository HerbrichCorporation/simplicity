import {customComponents} from "../simplicity.js";



class DomSelect extends HTMLSelectElement {
    initialize(that) {
        let isInitialized = false;
        let defaultValue;

        let errors = [];

        return class {
            isInput() {
                return true;
            }

            get pristine() {
                return that.defaultSelected === that.value;
            }

            reset() {
                that.value = that.defaultSelected;
                that.dispatchEvent(new Event("change"));
            }

            get valid() {
                return true;
            }

            get errors() {
                return errors;
            }

            render() {
                that.addEventListener("change", () => {
                    if (! isInitialized) {
                        defaultValue = that.value;
                        isInitialized = true;
                    }
                })

                let options = Array.from(that.options);

                let option = options.find(option => option.value === that.value);

                let number = options.indexOf(option);

                that.selectedIndex = number;
            }

        }
    }
}

export default customComponents.define("dom-select", DomSelect, {extends : "select"})