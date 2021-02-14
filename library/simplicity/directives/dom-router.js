import {get} from "../services/router.js"
import {customComponents} from "../simplicity.js";
import {lifeCycle} from "../processors/lifecycle-processor.js";

class DomRouter extends HTMLElement {

    initialize(that) {
        let cache = new Map();

        window.addEventListener("hashchange", () => {
            that.onWindowHashchange();
        })

        return class {
            onWindowHashchange() {
                console.time("load")

                let hash = window.location.hash;
                let hashes = hash.split("?");
                let path = hashes[0].substring(1);

                let result = {};
                if (hashes[1]) {
                    let rawQueryParams = hashes[1].split("&");
                    for (const rawQueryParam of rawQueryParams) {
                        let queryParamRegex = /(\w+)=([\w\d\-/]*)/g;
                        let queryParameterRegexResult = queryParamRegex.exec(rawQueryParam);
                        result[queryParameterRegexResult[1]] = queryParameterRegexResult[2]
                    }
                }

                let newPath = "../../.." + path + ".js";
                import(newPath)
                    .then((module) => {

                        let view, guard;
                        if (cache.has(window.location.hash)) {
                            view = cache.get(window.location.hash);
                        } else {
                            view = new module.default();
                            view.queryParams = result;
                            cache.set(window.location.hash, view);
                        }

                        guard = get(view.localName);

                        if (guard) {
                            view.queryParams = result;

                            let target = guard(view);

                            let guardResult = Reflect.ownKeys(target);

                            let promises = [];
                            for (const property of guardResult) {
                                let guardResultElement = target[property];
                                promises.push(guardResultElement);
                            }

                            Promise.all(promises)
                                .then((results) => {
                                    guardResult.forEach((property, index) => {
                                        view[property] = results[index];
                                    });

                                    let firstElementChild = this.firstElementChild;
                                    if (firstElementChild) {
                                        firstElementChild.remove();
                                    }

                                    this.appendChild(view);

                                    console.timeEnd("load")
                                })
                        } else {
                            let firstElementChild = this.firstElementChild;
                            if (firstElementChild) {
                                firstElementChild.remove();
                            }

                            this.appendChild(view);

                            console.timeEnd("load")
                        }


                    })
            }

            render() {
                that.onWindowHashchange();
            }
        }
    }

}

export default customComponents.define("dom-router", DomRouter);