import {customComponents} from "../simplicity.js";
import {debounce} from "../services/tools.js";

class DomForm extends HTMLFormElement {
    initialize(that) {
        let value;
        let elements = [];
        let validators = [];
        let errors = [];

        return class {
            get value() {
                return value;
            }

            set value(v) {
                value = v;
            }

            get elements() {
                return elements;
            }

            get validators() {
                return validators;
            }

            addValidator(value) {
                validators.push(value);
            }

            get errors() {
                return errors;
            }

            get pristine() {
                return elements.every((input) => {
                    return input.pristine
                });
            }

            get valid() {
                let every = elements.every((input) => {
                    return input.valid
                });
                return every && errors.length === 0;
            }

            reset() {
                for (const element of elements) {
                    element.reset();
                }
            }

            get dirty() {
                return !that.pristine;
            }

            appendInput(element) {
                elements.push(element);

                function handler() {
                    let name = element.name;
                    value[name] = element.value;

                    for (const validator of validators) {
                        validator.validate(that)
                            .then((result) => {
                                let indexOf = errors.indexOf(result);
                                if (indexOf > -1) {
                                    errors.splice(indexOf, 1);
                                }
                            })
                            .catch((reason) => {
                                let indexOf = errors.indexOf(reason);
                                if (indexOf === -1) {
                                    errors.push(reason)
                                }
                            })
                    }
                }

                element.addEventListener("keyup", debounce(handler, 300));
                element.addEventListener("change", debounce(handler, 300));

                element.form = that;

                element.value = value[element.name];
                element.dispatchEvent(new Event("change"))
            }

        }
    }
}

export default customComponents.define("dom-form", DomForm, {extends: "form"})