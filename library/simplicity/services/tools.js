
let parser = new DOMParser();

export function distinct(items, extractor) {
    let distinctArray = [];
    for (let item of items) {
        let extracted = extractor(item);
        let find = distinctArray.find((element) => extractor(element) === extracted);
        if (!find) {
            distinctArray.push(item);
        }
    }
    return distinctArray;
}

export function create(html) {
    return parser.parseFromString(html, "text/html").querySelector("body").firstChild
}

export function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
