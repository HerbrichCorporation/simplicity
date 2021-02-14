import {builder, metaCache, traverseMeta} from "../simplicity.js";

const renderedItems = new WeakMap();

export function lifeCycle(element = document.body) {

    console.time("lifeCycle")

    for (const meta of metaCache) {
        if (meta[0].element.isConnected) {
            traverseMeta(meta, (leaf) => {
                for (const property of Object.keys(leaf)) {
                    switch (property) {
                        case "if" : {
                            let state = leaf.if();
                            let elementChild = leaf.template.content.firstElementChild;

                            if (state) {
                                if (elementChild) {
                                    leaf.template.insertAdjacentElement("afterend", elementChild);
                                }
                            } else {
                                if (!elementChild) {
                                    leaf.template.content.appendChild(leaf.element);
                                }
                            }
                        }
                            break;
                        case "style" : {
                            for (const style of Object.keys(leaf.style)) {
                                let currentStyle = leaf.style[style];
                                if (currentStyle instanceof Function) {
                                    leaf.element.style[style] = currentStyle();
                                }
                            }
                        }
                            break;
                        case "value" : {
                            if (leaf.element.type === "radio") {
                                let valueElement = leaf.value;
                                let value = valueElement.input();
                                leaf.element.value = leaf.element.use
                                if (value === leaf.element.value) {
                                    leaf.element.checked = true;
                                }
                            } else {
                                if (leaf.element.type === "checkbox") {
                                    let valueElement = leaf.value;
                                    let checked = valueElement.input();
                                    leaf.element.checked = checked;
                                } else {
                                    let valueElement = leaf.value;
                                    if (valueElement.input instanceof Function) {
                                        let value = valueElement.input();
                                        leaf.element.value = value;
                                    } else {
                                        leaf.element.value = valueElement;
                                    }
                                }
                            }
                        }
                            break;
                        case "text" : {
                            if (leaf.text instanceof Function) {
                                leaf.element.textContent = leaf.text();
                            }
                        } break;
                        case "src" : {
                            if (leaf.src instanceof Function) {
                                leaf.element.src = leaf.src();
                            }
                        } break;
                        case "href" : {
                            if (leaf.href instanceof Function) {
                                leaf.element.href = leaf.href();
                            }
                        } break;
                        case "innerHTML" : {
                            let element = leaf[property];
                            if (element instanceof Function) {
                                leaf.element[property] = element();
                            } else {
                                leaf.element[property] = element;
                            }
                        } break
                        case "disabled" : {
                            leaf.element.disabled = leaf[property]();
                        } break;
                        case "update" : {
                            let update = leaf.update;
                            update(leaf.element);
                        }
                            break;
                        default : {
                            if (leaf.items && leaf.item) {
                                let items = leaf.items();
                                let newVar = renderedItems.get(leaf.parent.leaf.element);
                                if (newVar !== items) {
                                    for (const child of Array.from(leaf.parent.leaf.element.children)) {
                                        child.remove();
                                    }
                                    items.forEach((item, index, array) => {
                                        let tree = leaf.item(item, index, array);
                                        builder(leaf.parent.leaf.element, tree);
                                    })
                                    renderedItems.set(leaf.parent.leaf.element, items);
                                }
                            }

                            if (leaf[property].input) {
                                leaf.element[property] = leaf[property].input();
                            }
                        }
                    }
                }
            })
        }
    }

    console.timeEnd("lifeCycle")

}