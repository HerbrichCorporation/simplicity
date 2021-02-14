import {builder, customComponents} from "../../simplicity.js";
import DomInputFile from "../../directives/dom-input[file].js";

class MatImageUpload extends HTMLElement {
    initialize(that) {

        let isInitialized = false;

        let value = {
            data : ""
        };

        let defaultValue;

        that.addEventListener("change", () => {
            if (! isInitialized) {
                defaultValue = JSON.stringify(value);
                isInitialized = true;
            }
        })

        return class {

            get value() {
                return value;
            }

            set value(v) {
                value = v;
                that.dispatchEvent(new Event("change"));
            }

            get valid() {
                return true;
            }

            get pristine() {
                return defaultValue === JSON.stringify(value);
            }

            get dirty() {
                return ! that.pristine;
            }

            render() {

                that.style.display = "block";
                that.style.minWidth = "inherit";
                that.style.minHeight = "inherit"
                that.style.maxWidth = "inherit";
                that.style.maxHeight = "inherit"

                builder(that, {
                    element : "div",
                    style : {
                        minWidth : "inherit",
                        minHeight : "inherit",
                        maxWidth : "inherit",
                        maxHeight : "inherit"
                    },
                    children : [
                        {
                            element : "img",
                            style : {
                                border : "1px solid var(--main-normal-color)",
                                minWidth : "inherit",
                                minHeight : "inherit",
                                maxWidth : "inherit",
                                maxHeight : "inherit"
                            },
                            src() {
                                return value.data
                            }
                        },
                        {
                            element : DomInputFile,
                            style : {
                                display : "none"
                            },
                            onLoadend(event) {
                                value = event.detail.load;
                                that.dispatchEvent(new Event("change"));
                                that.dispatchEvent(new CustomEvent("load", {detail : event.detail}));
                            }
                        },{
                            element : "button",
                            type : "button",
                            text : "Upload",
                            className : "button",
                            style : {
                                display: "block"
                            },
                            onClick() {
                                let input = that.querySelector("input[type=file]");
                                input.click();
                            }
                        }
                    ]
                })

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

export default customComponents.define("mat-image-upload", MatImageUpload)