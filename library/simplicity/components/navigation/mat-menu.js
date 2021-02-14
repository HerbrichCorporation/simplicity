import {builder, customComponents} from "../../simplicity.js";

class MatMenu extends HTMLElement {
    initialize(that) {

        let open = false;

        let content;
        let subMenu = [];

        return class {

            get content() {
                return content;
            }

            set content(value) {
                content = value;
            }

            get subMenu() {
                return subMenu;
            }

            set subMenu(value) {
                subMenu = value;
            }

            render() {
                builder(that, {
                    element: "div",
                    style : {
                        position: "relative"
                    },
                    onMouseenter() {
                        open = true;
                    },
                    onMouseleave() {
                        open = false;
                    },
                    children: [
                        {
                            element: "div",
                            className: "item",
                            style: {
                                padding: "5px"
                            },
                            initialize(element) {
                                element.appendChild(content);
                            }
                        },
                        {
                            element: "div",
                            style: {
                                position: "absolute",
                                width: "100%",
                                top: "36px",
                                left: "0",
                                backgroundColor: "var(--main-normal-color)"
                            },
                            if() {
                                return open
                            },
                            initialize(element) {
                                for (const sub of subMenu) {
                                    element.appendChild(sub);
                                }
                            }
                        }
                    ]
                })
            }
        }
    }
}

export default customComponents.define("mat-menu", MatMenu)