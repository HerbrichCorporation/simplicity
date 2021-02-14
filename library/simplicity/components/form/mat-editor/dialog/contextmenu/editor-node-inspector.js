import {builder, customComponents} from "../../../../../simplicity.js";
import DomInput from "../../../../../directives/dom-input.js";
import DomSelect from "../../../../../directives/dom-select.js";
import MatInputContainer from "../../../containers/mat-input-container.js";
import MatCheckboxContainer from "../../../containers/mat-checkbox-container.js";

class EditorNodeInspector extends HTMLElement {
    initialize(that) {

        let node;

        let sizeX, sizeY, keep = true, ratio, float;

        let marginLeft, marginRight, marginTop, marginBottom;
        let paddingLeft, paddingRight, paddingTop, paddingBottom;

        return class {

            get node() {
                return node;
            }

            set node(value) {
                node = value;
            }

            render() {

                let computedStyle = window.getComputedStyle(node);

                let regex = /(\d+).*/

                marginLeft = Number.parseInt(regex.exec(computedStyle.marginLeft)[1]);
                marginRight = Number.parseInt(regex.exec(computedStyle.marginRight)[1]);
                marginTop = Number.parseInt(regex.exec(computedStyle.marginTop)[1]);
                marginBottom = Number.parseInt(regex.exec(computedStyle.marginBottom)[1]);

                paddingLeft = Number.parseInt(regex.exec(computedStyle.paddingLeft)[1]);
                paddingRight = Number.parseInt(regex.exec(computedStyle.paddingRight)[1]);
                paddingTop = Number.parseInt(regex.exec(computedStyle.paddingTop)[1]);
                paddingBottom = Number.parseInt(regex.exec(computedStyle.paddingBottom)[1]);

                float = computedStyle.float || "none";

                sizeX = Number.parseInt(regex.exec(computedStyle.width)[1]);
                sizeY = Number.parseInt(regex.exec(computedStyle.height)[1]);

                ratio = sizeX / sizeY;

                builder(that, {
                    element: "div",
                    children: [
                        {
                            element: "div",
                            children: [
                                {
                                    element: "div",
                                    children: [
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Float",
                                            content: {
                                                element: DomSelect,
                                                value: {
                                                    input() {
                                                        return float;
                                                    },
                                                    output(value) {
                                                        float = value;
                                                    }
                                                },
                                                onChange() {
                                                    if (float === "none") {
                                                        node.style.float = ""
                                                    } else {
                                                        node.style.float = float;
                                                    }
                                                },
                                                children: [
                                                    {
                                                        element: "option",
                                                        value: "none",
                                                        text: "Choose"
                                                    },
                                                    {
                                                        element: "option",
                                                        value: "right",
                                                        text: "Right"
                                                    },
                                                    {
                                                        element: "option",
                                                        value: "left",
                                                        text: "Left"
                                                    }
                                                ]
                                            },
                                        },
                                        {
                                            element: "div",
                                            style: {
                                                display: "flex",
                                                alignItems : "center"
                                            },
                                            children: [
                                                {
                                                    element: MatInputContainer,
                                                    placeholder: "Width",
                                                    style : {
                                                        marginRight : "5px"
                                                    },
                                                    content: {
                                                        element: DomInput,
                                                        type: "number",
                                                        value: {
                                                            input() {
                                                                return sizeX;
                                                            },
                                                            output(value) {
                                                                sizeX = value;
                                                            }
                                                        },
                                                        onChange() {
                                                            if (keep) {
                                                                sizeY = Math.round(sizeX / ratio);
                                                            }
                                                            node.style.width = sizeX + "px"
                                                            node.style.height = sizeY + "px"
                                                        }
                                                    },
                                                },
                                                {
                                                    element: MatCheckboxContainer,
                                                    placeholder: "Link",
                                                    style : {
                                                        marginRight : "5px"
                                                    },
                                                    content: {
                                                        element: DomInput,
                                                        type: "checkbox",
                                                        style: {
                                                            width: "32px"
                                                        },
                                                        value: {
                                                            input() {
                                                                return keep;
                                                            },
                                                            output(value) {
                                                                keep = value;
                                                            }
                                                        }
                                                    },
                                                },
                                                {
                                                    element: MatInputContainer,
                                                    placeholder: "Height",
                                                    content: {
                                                        element: DomInput,
                                                        type: "number",
                                                        value: {
                                                            input() {
                                                                return sizeY;
                                                            },
                                                            output(value) {
                                                                sizeY = value;
                                                            }
                                                        },
                                                        onChange() {
                                                            if (keep) {
                                                                sizeX = Math.round(sizeX * ratio);
                                                            }
                                                            node.style.width = sizeX + "px"
                                                            node.style.height = sizeY + "px"
                                                        }
                                                    }

                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    element: "div",
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Margin Left",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return marginLeft;
                                                    },
                                                    output(value) {
                                                        marginLeft = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.marginLeft = marginLeft + "px";
                                                }
                                            }
                                        },
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Margin Right",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return marginRight;
                                                    },
                                                    output(value) {
                                                        marginRight = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.marginRight = marginRight + "px";
                                                }
                                            }
                                        },
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Margin Top",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return marginTop;
                                                    },
                                                    output(value) {
                                                        marginTop = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.marginTop = marginTop + "px";
                                                }
                                            }
                                        },
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Margin Bottom",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return marginBottom;
                                                    },
                                                    output(value) {
                                                        marginBottom = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.marginBottom = marginBottom + "px";
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    element: "div",
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Padding Left",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return paddingLeft;
                                                    },
                                                    output(value) {
                                                        paddingLeft = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.paddingLeft = paddingLeft + "px";
                                                }
                                            }
                                        },
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Padding Right",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return paddingRight;
                                                    },
                                                    output(value) {
                                                        paddingRight = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.paddingRight = paddingRight + "px";
                                                }
                                            }
                                        },
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Padding Top",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return paddingTop;
                                                    },
                                                    output(value) {
                                                        paddingTop = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.paddingTop = paddingTop + "px";
                                                }
                                            }
                                        },
                                        {
                                            element: MatInputContainer,
                                            placeholder: "Padding Bottom",
                                            style : {
                                                marginRight : "5px"
                                            },
                                            content: {
                                                element: DomInput,
                                                type: "number",
                                                value: {
                                                    input() {
                                                        return paddingBottom;
                                                    },
                                                    output(value) {
                                                        paddingBottom = value;
                                                    }
                                                },
                                                onChange() {
                                                    node.style.paddingBottom = paddingBottom + "px";
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("editor-node-inspector", EditorNodeInspector);