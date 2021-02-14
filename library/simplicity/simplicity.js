import {register} from "./services/router.js"
import {lifeCycle} from "./processors/lifecycle-processor.js";

Node.prototype.queryUpwards = function (query) {
    if (this.localName && this.localName === query) {
        return this;
    } else {
        if (this.parentElement === null) {
            return null;
        }
        return this.parentElement.queryUpwards(query);
    }
}

const blackList = ["mousemove", "mouseover"]

EventTarget.prototype.addEventListener = (function (_super) {
    return function (name, callback) {
        _super.apply(this, [name, (event) => {
            callback(event)
            if (blackList.indexOf(name) === -1) {
                lifeCycle();
            }
        }])
    }
})(EventTarget.prototype.addEventListener);

Node.prototype.appendChild = (function (_super) {
    return function (child) {
        _super.apply(this, [child])
        if (child.isConnected) {
            lifeCycle();
        }
    }
})(Node.prototype.appendChild);

HTMLElement.prototype.insertAdjacentElement = (function (_super) {
    return function (position, element) {
        _super.apply(this, [position, element]);
        if (element.isConnected) {
            lifeCycle();
        }
    }
})(HTMLElement.prototype.insertAdjacentElement);

HTMLElement.prototype.insertBefore = (function (_super) {
    return function (newChild, refChild) {
        _super.apply(this, [newChild, refChild])
        if (newChild.isConnected) {
            lifeCycle();
        }
    }
})(HTMLElement.prototype.insertBefore);

export function traverseMeta(tree, callback) {
    function internal(tree, callback) {

        callback(tree);

        for (const property of Object.keys(tree)) {
            let treeElement = tree[property];

            if (treeElement.items && treeElement.item) {
                treeElement.parent = {
                    leaf : tree,
                    property : property
                }
                internal(treeElement, callback);
            }

            if (treeElement instanceof Array) {
                for (const child of treeElement) {
                    if (child.element) {
                        child.parent = {
                            leaf : tree,
                            property : property
                        }
                        internal(child, callback);
                    }
                }
            }

            if (treeElement.element) {
                treeElement.parent = {
                    leaf : tree,
                    property : property
                }
                internal(treeElement, callback);
            }
        }

    }

    internal(tree, callback);
}

const htmlTags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote",
    "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details",
    "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4",
    "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link",
    "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param",
    "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source",
    "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time",
    "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

export const metaCache = new Set;

export function builder(scope, tree) {

    if (!(tree instanceof Array)) {
        tree = [tree];
    }

    metaCache.add(tree);

    let container = document.createDocumentFragment();

    for (const treeElement of tree) {
        traverseMeta(treeElement, (leaf) => {
            if (leaf.parent) {
                leaf.parent.leaf.invalid = leaf.parent.leaf.invalid || [];
                leaf.parent.leaf.invalid.push(leaf.parent.property);
            }
        })
    }

    for (const treeElement of tree) {
        traverseMeta(treeElement, (leaf) => {
            for (const property of Object.keys(leaf)) {
                switch (property) {
                    case "element" : {
                        let element = leaf.element;
                        if (element instanceof Function) {
                            leaf.element = new element();
                        } else {
                            if (htmlTags.indexOf(leaf.element) === -1) {
                                leaf.element = document.createElementNS("http://www.w3.org/2000/svg", element);
                            } else {
                                leaf.element = document.createElement(element);
                            }
                        }
                        if (leaf.parent) {
                            if (leaf.parent.property === "children") {
                                leaf.parent.leaf.element.appendChild(leaf.element);
                            } else {
                                let parentLeaf = leaf.parent.leaf.element[leaf.parent.property];
                                if (parentLeaf instanceof Array) {
                                    parentLeaf.push(leaf.element);
                                } else {
                                    leaf.parent.leaf.element[leaf.parent.property] = leaf.element;
                                }
                            }
                        }

                        container.appendChild(treeElement.element);
                    }
                        break;
                    case "if" : {
                        let templateElement = document.createElement("template");
                        leaf.element.insertAdjacentElement("beforebegin", templateElement)
                        templateElement.content.appendChild(leaf.element);
                        leaf.template = templateElement;
                    }
                        break;
                    case "value" : {
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

                        if (leaf.element.type === "checkbox") {
                            let valueElement = leaf[property];

                            let handler = () => {
                                valueElement.output(leaf.element.checked);
                            }

                            leaf.element.addEventListener("click", handler)
                        } else {
                            let valueElement = leaf[property];

                            let handler = () => {
                                valueElement.output(leaf.element.value);
                            }

                            leaf.element.addEventListener("change", handler)
                            leaf.element.addEventListener("keyup", handler)
                        }
                    }
                        break;
                    case "update" : {
                        leaf[property](leaf.element);
                    }
                        break;
                    case "initialize" : {
                        leaf[property](leaf.element);
                    }
                        break;
                    case "text" : {
                        if (leaf.text instanceof Function) {
                            leaf.element.textContent = leaf.text();
                        } else {
                            leaf.element.textContent = leaf.text;
                        }
                    }
                        break;
                    case "style" : {
                        for (const style of Object.keys(leaf.style)) {
                            let currentStyle = leaf.style[style];
                            if (currentStyle instanceof Function) {
                                leaf.element.style[style] = currentStyle();
                            } else {
                                leaf.element.style[style] = currentStyle;
                            }
                        }
                    }
                        break;
                    case "attributes" : {
                        let leafElement = leaf[property];
                        for (const name of Object.keys(leafElement)) {
                            leaf.element.setAttribute(name, leafElement[name])
                        }
                    }
                        break;
                    default : {
                        if (leaf.invalid && leaf.invalid.indexOf(property) > -1) {
                            // No Op
                        } else {
                            if (property.startsWith("on")) {
                                let eventName = property.substring(2).toLowerCase();
                                let leafElement = leaf[property];
                                leaf.element.addEventListener(eventName, (event) => {
                                    leafElement(event);
                                });
                            } else {
                                if (leaf.element) {
                                    if (leaf[property].direct) {
                                        leaf.element[property] = leaf[property].direct;
                                    } else {
                                        if (leaf[property] instanceof Function) {
                                            leaf.element[property] = leaf[property]();
                                        } else {
                                            leaf.element[property] = leaf[property];
                                        }
                                    }
                                    if (leaf[property].input) {
                                        leaf.element[property] = leaf[property].input();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }

    scope.appendChild(container);

}

function componentHelper(clazz) {
    return eval(`(function (clazz) {
        return class ${clazz.constructor.name}Helper extends clazz {

            #isRendered = false;

            constructor() {
                super();
                let Model = this.initialize(this);
                if (Model) {
                    let model = new Model();

                    let descriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(model));
                    Object.defineProperties(this, descriptors);
                }
            }

            connectedCallback() {
                if (this.render && !this.#isRendered) {
                    this.render();
                    this.#isRendered = true;
                }
            }
        }
    })(clazz)`);
}

export const customComponents = new class CustomComponents {
    define(name, clazz, options) {

        const Component = componentHelper(clazz);

        customElements.define(name, Component, options);
        return Component;
    }
}

export const customViews = new class CustomViews {
    define(configure) {

        let View = componentHelper(configure.class);

        if (configure.guard) {
            register(configure.name, configure.guard)
        }
        customElements.define(configure.name, View)

        return View
    }
}