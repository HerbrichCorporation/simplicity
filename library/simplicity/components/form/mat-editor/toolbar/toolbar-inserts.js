import {builder, customComponents} from "../../../../simplicity.js";
import EditorTextDialog from "../dialog/editor-text-dialog.js";
import EditorTableDialog from "../dialog/editor-table-dialog.js";
import EditorTableElement from "../components/editor-table.js";

class ToolbarInserts extends HTMLElement {
    initialize(that) {
        let editor;

        return class {
            get editor() {
                return editor;
            }

            set editor(value) {
                editor = value;
            }

            render() {
                builder(that, [
                    {
                        element: "div",
                        style: {
                            display: "flex"
                        },
                        children: [
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Link",
                                text: "insert_link",
                                onClick() {
                                    let dialog = editor.linkDialog();

                                    document.body.appendChild(dialog);

                                    let selection = document.getSelection();
                                    let rangeAt = selection.getRangeAt(0);

                                    dialog.callback = function (value) {
                                        document.getSelection().removeAllRanges();
                                        document.getSelection().addRange(rangeAt);
                                        let link = dialog.page.links.find((link) => link.rel === "read");
                                        document.execCommand("createLink", false, `#/anjunar/pages/page?id=${value.id}&link=${link.url}`);
                                    }
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "unLink",
                                text: "link_off",
                                onClick() {
                                    document.execCommand("unlink")
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Image",
                                text: "image",
                                onClick() {
                                    let dialog = editor.imageDialog();

                                    document.body.appendChild(dialog);

                                    let selection = document.getSelection();
                                    let rangeAt = selection.getRangeAt(0);

                                    dialog.callback = function (value) {
                                        document.getSelection().removeAllRanges();
                                        document.getSelection().addRange(rangeAt);
                                        document.execCommand("insertImage", false, value);
                                    }
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Insert Hr",
                                text: "code",
                                onClick() {
                                    document.execCommand("insertHorizontalRule")
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Insert Text",
                                text: "short_text",
                                onClick() {
                                    let dialog = new EditorTextDialog();

                                    document.body.appendChild(dialog);

                                    let selection = document.getSelection();
                                    let rangeAt = selection.getRangeAt(0);

                                    dialog.callback = function (value) {
                                        document.getSelection().removeAllRanges();
                                        document.getSelection().addRange(rangeAt);
                                        document.execCommand("insertText", false, value);
                                        dialog.close();
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
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Table",
                                text: "table_view",
                                onClick() {
                                    let dialog = new EditorTableDialog();

                                    document.body.appendChild(dialog);

                                    let selection = document.getSelection();
                                    let rangeAt = selection.getRangeAt(0);

                                    dialog.callback = function (columnsSize) {
                                        document.getSelection().removeAllRanges();
                                        document.getSelection().addRange(rangeAt);

                                        let table = new EditorTableElement();
                                        let row = document.createElement("tr");
                                        table.appendChild(row)

                                        for (let i = 0; i <= columnsSize; i++) {
                                            let td = document.createElement("td");
                                            row.appendChild(td);
                                        }


                                        document.execCommand("insertHTML", false, table.outerHTML)
                                    }
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Insert ordered List",
                                text: "format_list_numbered",
                                onClick() {
                                    document.execCommand("insertOrderedList")
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Insert Unordered List",
                                text: "format_list_bulleted",
                                onClick() {
                                    document.execCommand("insertUnorderedList")
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Div FlexBox",
                                text: "table_chart",
                                onClick() {
                                    let html = `<div is="editor-flexbox" style="display: flex">
                                                    <div style="flex: 1">Insert here...</div>
                                                </div>`;

                                    document.execCommand("insertHTML", false, html)
                                }
                            },
                            {
                                element: "button",
                                type: "button",
                                className: "iconBig",
                                title: "Paragraph",
                                text: "notes",
                                onClick() {
                                    document.execCommand("insertParagraph")
                                }
                            }
                        ]
                    }
                ])
            }
        }
    }
}

export default customComponents.define("toolbar-inserts", ToolbarInserts)
