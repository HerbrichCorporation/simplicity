import {builder, customComponents} from "../../../../simplicity.js";

class ToolbarJustify extends HTMLElement {
    initialize(that) {

        let editor;

        let justify;
        let justifyLeft;
        let justifyRight;
        let justifyCenter;

        let indent;
        let outdent;
        let floatLeft;
        let floatRight;

        function justifyFullClick() {
            document.execCommand("justifyFull");

            justify.classList.add("active")
            justifyLeft.classList.remove("active")
            justifyRight.classList.remove("active")
            justifyCenter.classList.remove("active")
        }

        function justifyLeftClick() {
            document.execCommand("justifyLeft")

            justify.classList.remove("active")
            justifyLeft.classList.add("active")
            justifyRight.classList.remove("active")
            justifyCenter.classList.remove("active")
        }

        function justifyRightClick() {
            document.execCommand("justifyRight");

            justify.classList.remove("active")
            justifyLeft.classList.remove("active")
            justifyRight.classList.add("active")
            justifyCenter.classList.remove("active")
        }

        function justifyCenterClick() {
            document.execCommand("justifyCenter");

            justify.classList.remove("active")
            justifyLeft.classList.remove("active")
            justifyRight.classList.remove("active")
            justifyCenter.classList.add("active")
        }

        function indentClick() {
            document.execCommand("indent");
        }

        function outdentClick() {
            document.execCommand("outdent");
        }

        function floatLeftClick() {
            let selection = window.getSelection();
            let parentElement = selection.anchorNode;
            if (parentElement.nodeType === 3) {
                parentElement = parentElement.parentElement;
            }

            let computedStyle = window.getComputedStyle(parentElement);

            if (computedStyle.float === "left") {
                parentElement.style.float = "";
            } else {
                parentElement.style.float = "left";
            }



            let float = computedStyle.float
            switch (float) {
                case "left" : {
                    floatLeft.classList.add("active")
                    floatRight.classList.remove("active")
                } break
                case "right" : {
                    floatLeft.classList.remove("active")
                    floatRight.classList.add("active")
                } break;
                default : {
                    floatLeft.classList.remove("active")
                    floatRight.classList.remove("active")
                }
            }
        }

        function floatRightClick() {
            let selection = window.getSelection();
            let parentElement = selection.anchorNode;
            if (parentElement.nodeType === 3) {
                parentElement = parentElement.parentElement;
            }

            let computedStyle = window.getComputedStyle(parentElement);

            if (computedStyle.float === "right") {
                parentElement.style.float = "";
            } else {
                parentElement.style.float = "right";
            }


            let float = computedStyle.float
            switch (float) {
                case "left" : {
                    floatLeft.classList.add("active")
                    floatRight.classList.remove("active")
                } break
                case "right" : {
                    floatLeft.classList.remove("active")
                    floatRight.classList.add("active")
                } break;
                default : {
                    floatLeft.classList.remove("active")
                    floatRight.classList.remove("active")
                }
            }
        }


        return class {

            get editor() {
                return editor;
            }

            set editor(value) {
                editor = value;
            }

            render() {

                let content = editor.querySelector("div[contenteditable]")

                content.addEventListener("click", (event) => {
                    let computedStyle = window.getComputedStyle(event.target);

                    let textAlign = computedStyle.textAlign;
                    if (textAlign === "justify") {
                        justify.classList.add("active");
                    } else {
                        justify.classList.remove("active");
                    }

                    if (textAlign === "left") {
                        justifyLeft.classList.add("active");
                    } else {
                        justifyLeft.classList.remove("active");
                    }

                    if (textAlign === "right") {
                        justifyRight.classList.add("active");
                    } else {
                        justifyRight.classList.remove("active");
                    }

                    if (textAlign === "center") {
                        justifyCenter.classList.add("active");
                    } else {
                        justifyCenter.classList.remove("active");
                    }

                    let float = computedStyle.float
                    switch (float) {
                        case "left" : {
                            floatLeft.classList.add("active")
                            floatRight.classList.remove("active")
                        } break
                        case "right" : {
                            floatLeft.classList.remove("active")
                            floatRight.classList.add("active")
                        } break;
                        default : {
                            floatLeft.classList.remove("active")
                            floatRight.classList.remove("active")
                        }
                    }

                })


                builder(that, [
                    {
                        element : "div",
                        style : {
                            display : "flex"
                        },
                        children : [
                            {
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Justify Full",
                                text : "format_align_justify",
                                onClick() {
                                    justifyFullClick();
                                },
                                initialize(element) {
                                    justify = element;
                                }
                            },
                            {
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Justify Left",
                                text : "format_align_left",
                                onClick() {
                                    justifyLeftClick();
                                },
                                initialize(element) {
                                    justifyLeft = element;
                                }
                            },
                            {
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Justify Full",
                                text : "format_align_right",
                                onClick() {
                                    justifyRightClick();
                                },
                                initialize(element) {
                                    justifyRight = element;
                                }
                            },
                            {
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Justify Center",
                                text : "format_align_center",
                                onClick() {
                                    justifyCenterClick();
                                },
                                initialize(element) {
                                    justifyCenter = element;
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
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Indent",
                                text : "format_indent_increase",
                                onClick() {
                                    indentClick();
                                },
                                initialize(element) {
                                    indent = element;
                                }
                            },
                            {
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Outdent",
                                text : "format_indent_decrease",
                                onClick() {
                                    outdentClick();
                                },
                                initialize(element) {
                                    outdent = element;
                                }
                            },
                            {
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Float Left",
                                text : "view_sidebar",
                                onClick() {
                                    floatLeftClick();
                                },
                                initialize(element) {
                                    floatLeft = element;
                                }
                            },
                            {
                                element : "button",
                                type : "button",
                                className : "iconBig",
                                title : "Float Right",
                                text : "vertical_split",
                                onClick() {
                                    floatRightClick();
                                },
                                initialize(element) {
                                    floatRight = element;
                                }
                            }
                        ]
                    }
                ])
            }
        }
    }
}

export default customComponents.define("toolbar-justify", ToolbarJustify)