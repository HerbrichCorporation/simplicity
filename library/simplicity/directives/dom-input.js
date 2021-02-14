import {customComponents} from "../simplicity.js";

class DomInput extends HTMLInputElement {

    initialize(that) {
        let isInitialized;
        let defaultValue;
        let errors = [];
        let form;
        let use;
        let validation = {};

        let validators = [
            {
                empty(element) {
                    if (validation.notEmpty) {
                        return String(element.value).length > 0;
                    }
                    return true;
                }
            }
        ];

        let formatter = (value) => {
            return value;
        };

        return class {

            isInput() {
                return true;
            }

            get errors() {
                return errors;
            }

            set errors(value) {
                errors = value;
            }

            get isInitialized() {
                return isInitialized;
            }

            set isInitialized(value) {
                isInitialized = value;
            }

            get defaultValue() {
                return defaultValue;
            }

            set defaultValue(value) {
                defaultValue = value;
            }

            get form() {
                return form;
            }

            set form(value) {
                form = value;
            }

            get use() {
                return use;
            }

            set use(value) {
                use = value;
            }

            get validation() {
                return validation;
            }

            set validation(value) {
                validation = value;
            }

            reset() {
                this.value = defaultValue;
                this.dispatchEvent(new Event("change"));
            }

            get dirty() {
                return !this.pristine;
            }

            get pristine() {
                return defaultValue === this.value;
            }

            get valid() {
                return errors.length === 0;
            }

            get validators() {
                return validators;
            }

            get formatter() {
                return formatter;
            }

            set formatter(value) {
                formatter = value;
            }

            render() {
                let handler = (event) => {
                    if (!isInitialized) {
                        defaultValue = that.value;
                        isInitialized = true;
                    }

                    for (const validator of validators) {
                        let name = Object.keys(validator)[0];
                        let result = validator[name](that);
                        let indexOf = errors.indexOf(name);
                        if (result) {
                            if (indexOf > -1) {
                                errors.splice(indexOf, 1);
                            }
                        } else {
                            if (indexOf === -1) {
                                errors.push(name)
                            }
                        }
                    }

                    event.stopPropagation();
                    return false;
                }

                that.addEventListener("focus", handler);
                that.addEventListener("blur", handler);
                that.addEventListener("keyup", handler);
                that.addEventListener("change", handler);

                if (that.name) {
                    let form = that.queryUpwards("form");
                    if (form) {
                        form.appendInput(that);
                    }
                }
            }

        }
    }

}

export default customComponents.define("dom-input", DomInput, {extends : "input"})