import {builder, customComponents} from "../../simplicity.js";
import MatModal from "./mat-modal.js";
import MatPanel from "./mat-panel.js";

class MatDialog extends HTMLElement {
    initialize(that) {

        let content;
        let header;
        let footer;

        return class {

            get content() {
                return content;
            }

            set content(value) {
                content = value;
            }

            get header() {
                return header;
            }

            set header(value) {
                header = value;
            }

            get footer() {
                return footer;
            }

            set footer(value) {
                footer = value;
            }

            close() {
                let matDialog = document.querySelector("mat-dialog");
                if (matDialog) {
                    matDialog.remove();
                }
            }

            render() {
                builder(that, {
                    element: MatModal,
                    content: {
                        element: MatPanel,
                        header: header,
                        content: {
                            element: "div",
                            children : [
                                {
                                    element : "div",
                                    initialize(element) {
                                        element.appendChild(content);
                                    }

                                },
                                {
                                    element: "div",
                                    style : {
                                        display : "flex"
                                    },
                                    children : [
                                        {
                                            element: "button",
                                            type : "button",
                                            text : "Close",
                                            onClick() {
                                                that.close();
                                            }
                                        }
                                    ],
                                    initialize(element) {
                                        if (footer) {
                                            element.appendChild(footer);
                                        }
                                    }
                                }
                            ]
                        }
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-dialog", MatDialog)