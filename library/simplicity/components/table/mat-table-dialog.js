import {builder, customComponents} from "../../simplicity.js";
import MatDialog from "../modal/mat-dialog.js";
import MatCheckboxContainer from "../form/containers/mat-checkbox-container.js";
import DomInput from "../../directives/dom-input.js";

class MatTableDialog extends HTMLElement {
    initialize(that) {

        let table;

        return class {

            get table() {
                return table;
            }

            set table(value) {
                table = value;
            }

            render() {
                builder(that, {
                    element : MatDialog,
                    header : "Table Setup",
                    content : {
                        element : "table",
                        children : {
                            items() {
                                return table.columns;
                            },
                            item(tr, index, array) {
                                return {
                                   element: "tr",
                                   children: [
                                       {
                                           element: "td",
                                           children: [
                                               {
                                                   element: "div",
                                                   initialize(element) {
                                                       let meta = table.meta.header[tr.index];
                                                       builder(element, meta.element());
                                                   }
                                               }
                                           ]
                                       },
                                       {
                                           element: "td",
                                           children: [
                                               {
                                                   element: MatCheckboxContainer,
                                                   placeholder : "Visible",
                                                   content : {
                                                       element: DomInput,
                                                       type : "checkbox",
                                                       value : {
                                                           input() {
                                                               return tr.visible;
                                                           },
                                                           output(value) {
                                                               tr.visible = value;
                                                           }
                                                       }
                                                   }
                                               }
                                           ]
                                       }, {
                                           element: "td",
                                           children: [
                                               {
                                                   element: "button",
                                                   type : "button",
                                                   onClick() {
                                                       table.left(index);
                                                   },
                                                   disabled() {
                                                       return index === 0;
                                                   },
                                                   className : "material-icons button",
                                                   text : "arrow_drop_up"
                                               },
                                               {
                                                   element: "button",
                                                   type : "button",
                                                   onClick() {
                                                       table.right(index);
                                                   },
                                                   disabled() {
                                                       return index === array.length - 1;
                                                   },
                                                   className : "material-icons button",
                                                   text : "arrow_drop_down"
                                               }
                                           ]
                                       }
                                   ]
                                }
                            }
                        }
                    }
                })
            }
        }
    }
}

export default customComponents.define("mat-table-dialog", MatTableDialog)