import {builder, customComponents} from "../../simplicity.js";
import EditorToolbar from "./mat-editor/editor-toolbar.js";
import EditorContextmenuDialog from "./mat-editor/dialog/editor-contextmenu-dialog.js";

class MatEditor extends HTMLElement {
    initialize(that) {

        let value = "";

        let imageDialog;
        let linkDialog;

        return class {

            get value() {
                return value;
            }

            set value(v) {
                value = v;
            }

            get imageDialog() {
                return imageDialog;
            }

            set imageDialog(value) {
                imageDialog = value;
            }

            get linkDialog() {
                return linkDialog;
            }

            set linkDialog(value) {
                linkDialog = value;
            }

            render() {

                that.style.display = "block"

                builder(that, [
                    {
                        element: EditorToolbar,
                        editor: {
                            input() {
                                return that;
                            }
                        }
                    }, {
                        element: "div",
                        style : {
                            outline: "0 solid transparent",
                            height : "calc(100% - 70px)",
                            border : "var(--main-normal-color) solid 1px",
                            margin : "2px"
                        },
                        attributes : {
                            contentEditable : "true"
                        },
                        initialize(element) {
                            element.innerHTML = value;
                        },
                        onContextmenu(event) {
                            if (! event.ctrlKey) {
                                let dialog = new EditorContextmenuDialog();

                                let content = that.querySelector("div[contenteditable=true]");

                                let path = Array.from(event.path);
                                let indexOf = path.indexOf(content);
                                path = path.slice(0, indexOf)


                                dialog.path = path
                                document.body.appendChild(dialog);
                                event.preventDefault();
                            }
                        }
                    }
                ])

                let content = that.querySelector("div[contenteditable=true]");

                let observer = new MutationObserver(() => {
                    value = content.innerHTML;
                    that.dispatchEvent(new Event("change"));
                })

                observer.observe(content, {subtree : true, childList  : true, characterData : true, attributes : true})
            }
        }
    }
}

export default customComponents.define("mat-editor", MatEditor)