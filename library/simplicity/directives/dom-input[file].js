import {customComponents} from "../simplicity.js";

class DomInputFile extends HTMLInputElement {
    initialize(that) {

        that.type = "file";

        function onChange(event) {
            let files = event.target.files;

            for (let i = 0, f; f = files[i]; i++) {

                if (!f.type.match('image.*')) {
                    continue;
                }

                let reader = new FileReader();

                reader.onload = (function (theFile) {
                    return function (e) {
                        that.dispatchEvent(new CustomEvent("loadend", {
                            detail: {
                                load: {
                                    data: e.target.result,
                                    name: theFile.name,
                                    lastModified: theFile.lastModified
                                }
                            }
                        }))
                    };
                })(f);

                reader.readAsDataURL(f);
            }

        }

        that.addEventListener("change", onChange);

    }
}

export default customComponents.define("dom-input-file", DomInputFile, {extends : "input"})