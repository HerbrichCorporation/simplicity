import {builder, customComponents} from "../../../simplicity.js";

class MatInputContainer extends HTMLElement {

    initialize(that) {
        let placeholder = "";

        let prefix;
        let content;
        let suffix;

        let errors = [];


        return class {

            get placeholder() {
                return placeholder;
            }

            set placeholder(value) {
                placeholder = value;
            }

            get prefix() {
                return prefix;
            }

            set prefix(value) {
                prefix = value;
            }

            get content() {
                return content;
            }

            set content(value) {
                content = value;
            }

            get suffix() {
                return suffix;
            }

            set suffix(value) {
                suffix = value;
            }

            get errors() {
                return errors;
            }

            set errors(value) {
                errors = value;
            }

            addError(error) {
                error.style.display = "none";
                let errorContainer = that.querySelector("div.errorContainer");
                errorContainer.appendChild(error);
            }

            render() {

                content.placeholder = placeholder;

                builder(that, {
                    element : "div",
                    children : [
                        {
                            element : "div",
                            style : {
                                height : "14px"
                            },
                            children : [
                                {
                                    element : "span",
                                    if() {
                                        if (content.type === "date") {
                                            return true;
                                        } else {
                                            return content.value.length > 0;
                                        }
                                    },
                                    text : () => {
                                        return placeholder;
                                    },
                                    style : {
                                        fontSize : "x-small",
                                        color : ()=>{
                                            if (document.activeElement === content) {
                                                if (content.errors.length) {
                                                    return "var(--main-error-color)";
                                                } else {
                                                    return "var(--main-selected-color)";
                                                }
                                            } else {
                                                return "var(--main-grey-color)";
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            element : "div",
                            style : {
                                display : "flex"
                            },
                            children: [
                                {
                                    element: "div",
                                    initialize(element) {
                                        if (prefix) {
                                            element.appendChild(prefix);
                                        }
                                    }
                                },
                                {
                                    element: "div",
                                    style: {
                                        flex : 1
                                    },
                                    initialize(element) {
                                        if (content) {
                                            element.appendChild(content);
                                        }
                                    }
                                },
                                {
                                    element: "div",
                                    initialize(element) {
                                        if (suffix) {
                                            element.appendChild(suffix);
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            element: "hr",
                            style : {
                                backgroundColor : () => {
                                    if (document.activeElement === content) {
                                        if (content.errors.length) {
                                            return "var(--main-error-color)";
                                        } else {
                                            return "var(--main-selected-color)";
                                        }
                                    } else {
                                        return "var(--main-normal-color)";
                                    }
                                }
                            }
                        },
                        {
                            element : "div",
                            style: {
                                fontSize : "x-small",
                                height : "12px",
                                color : "var(--main-error-color)",
                                display : "flex"
                            },
                            className : "errorContainer",
                            initialize(element) {
                                for (const error of errors) {
                                    element.appendChild(error);
                                    error.style.display = "none";
                                }
                            },
                            update(element) {
                                for (const errorElement of element.children) {
                                    errorElement.style.display = "none";
                                }

                                for (const error of content.errors) {
                                    let errorElement = element.querySelector(`div[name=${error}]`);
                                    errorElement.style.display = "inline"
                                }

                                let input = that.querySelector("input");

                                if (input?.form) {
                                    for (const error of input.form.errors) {
                                        let div = that.querySelector(`div[name=${error}]`);
                                        if (div) {
                                            if (input.form.errors.length > 0) {
                                                div.style.display = "block";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                })
            }
        }
    }



}

export default customComponents.define("mat-input-container", MatInputContainer);