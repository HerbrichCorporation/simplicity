import {builder, customComponents} from "../../simplicity.js";
import MatSelect from "./mat-select.js";

class MatMultiSelect extends HTMLElement {
    initialize(that) {

        let isInitialized = false;

        let value = [];
        let defaultValue = [];

        let items;
        let selection;
        let placeholder

        let index;
        let limit = 20;

        let id = "id";

        let meta;

        let validation = {};
        let errors = [];

        that.addEventListener("change", () => {
            if (!isInitialized) {
                defaultValue = Array.from(value);
                isInitialized = true;
            }
        })

        return class {

            get value() {
                return value;
            }

            set value(v) {
                value = v
            }

            get items() {
                return items;
            }

            set items(value) {
                items = value
            }

            get selection() {
                return selection;
            }

            set selection(value) {
                selection = value;
            }

            get meta() {
                return meta;
            }

            set meta(value) {
                meta = value
            }

            get placeholder() {
                return placeholder;
            }

            set placeholder(value) {
                placeholder = value;
            }

            get id() {
                return id;
            }

            set id(value) {
                id = value;
            }

            get validators() {
                return validators;
            }

            get validation() {
                return validation;
            }

            set validation(value) {
                validation = value;
            }

            get errors() {
                return errors;
            }

            get pristine() {
                if (value.length !== defaultValue.length) {
                    return false;
                }

                let valueCore = value.map((v => v[id]));
                let defaultValueCore = defaultValue.map((v => v[id]));

                for (let i = 0; i < valueCore.length; i++) {
                    if (valueCore[i] !== defaultValueCore[i]) {
                        return false;
                    }
                }

                return true;
            }

            get dirty() {
                return ! that.pristine
            }

            get valid() {
                return errors.length === 0;
            }

            reset() {
                value = defaultValue;
                that.dispatchEvent(new Event("change"));
            }

            render() {
                builder(that, [
                    {
                        element : MatSelect,
                        placeholder: placeholder,
                        onChange(event) {
                            let item = value.find((item) => item[id] === event.target.value[id]);
                            if (! item) {
                                value = [...value, event.target.value];
                                that.dispatchEvent(new Event("change"))
                            }
                        },
                        items: {
                            direct(query, callback) {
                                that.items({index: query.index, limit: query.limit, value: query.value}, (_data, _size) => {
                                    callback(_data, _size)
                                });
                            },
                        },
                        meta: {
                            option: {
                                element(item) {
                                    return {
                                        element: "div",
                                        initialize(element) {
                                            let m = meta.option
                                            builder(element, m.element(item));
                                        }
                                    }
                                }
                            }
                        },
                    }, {
                        element : "div",
                        style : {
                            border() {
                                if (value.length === 0 && validation.notEmpty) {
                                    return "1px solid var(--main-error-color)";
                                } else {
                                    return "1px solid var(--main-normal-color)";
                                }
                            },
                            height : "100px",
                            padding : "5px"
                        },
                        children : [
                            {
                                element : "div",
                                children : [
                                    {
                                        element: "div",
                                        if () {
                                            return value.length === 0  && validation.notEmpty;
                                        },
                                        text : "not Emtpy"
                                    },
                                    {
                                        element : "div",
                                        children : {
                                            items() {
                                                return value;
                                            },
                                            item(item) {
                                                return {
                                                    element : "div",
                                                    style : {
                                                        display : "flex"
                                                    },
                                                    children : [
                                                        {
                                                            element : "div",
                                                            initialize(element) {
                                                                let m = meta.selection
                                                                builder(element, m.element(item));
                                                            }
                                                        },
                                                        {
                                                            element: "div",
                                                            style : {
                                                                flex : "1"
                                                            }
                                                        },
                                                        {
                                                            element : "button",
                                                            type : "button",
                                                            className : "icon",
                                                            text : "delete",
                                                            onClick() {
                                                                let indexOf = value.indexOf(item);
                                                                value.splice(indexOf, 1);
                                                                value = Array.from(value);
                                                                that.dispatchEvent(new Event("change"))
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        ]

                    }
                ])

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

export default customComponents.define("mat-multi-select", MatMultiSelect)