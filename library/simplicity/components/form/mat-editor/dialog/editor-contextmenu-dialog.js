import {builder, customComponents} from "../../../../simplicity.js";
import MatDialog from "../../../modal/mat-dialog.js";
import EditorNodeInspector from "./contextmenu/editor-node-inspector.js";
import MatTabs from "../../../navigation/mat-tabs.js";
import MatTab from "../../../navigation/mat-tab.js";
import MatPages from "../../../navigation/mat-pages.js";
import MatPage from "../../../navigation/mat-page.js";

class EditorContextmenuDialog extends HTMLElement {
    initialize(that) {

        let path;
        let page = 0;

        return class {

            get path() {
                return path;
            }

            set path(value) {
                path = value;
            }

            render() {
                builder(that, {
                    element : MatDialog,
                    header : "Inspector",
                    content : {
                        element : "div",
                        children : [
                            {
                                element: MatTabs,
                                contents : path.map((segment) => {
                                    return {
                                        element : MatTab,
                                        content : {
                                            element : "div",
                                            text : segment.localName
                                        }
                                    }
                                }),
                                onPage(event) {
                                    page = event.detail.page;
                                }
                            },
                            {
                                element : MatPages,
                                page : {
                                    input() {
                                        return page;
                                    }
                                },
                                contents : path.map((segment) => {
                                    return {
                                        element : MatPage,
                                        contents : [{
                                            element : "div",
                                            initialize(element) {
                                                let inspector = new EditorNodeInspector();
                                                inspector.node = segment;
                                                element.appendChild(inspector);
                                            }
                                        }]
                                    }
                                })
                            }
                        ]
                    }
                })
            }
        }
    }
}

export default customComponents.define("editor-contextmenu-dialog", EditorContextmenuDialog)