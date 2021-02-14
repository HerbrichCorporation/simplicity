import {builder, customViews} from "../../library/simplicity/simplicity.js";
import MatGrid from "../../library/simplicity/components/table/mat-grid.js";

class Grid extends HTMLElement {
    initialize(that) {

        let items = (query, callback) => {
            callback(
                [
                    {
                        name: 1,
                        url: "images/a5WZLLq_700bwp.webp"
                    },
                    {
                        name: 2,
                        url: "images/a7W7Z4m_700bwp.webp"
                    },
                    {
                        name: 3,
                        url: "images/a9nPQDj_700bwp.webp"
                    },
                    {
                        name: 4,
                        url: "images/aBme7LD_460swp.webp"
                    }]
                , 4)
        }

        return class {
            render() {
                builder(that, {
                        element: MatGrid,
                        items: {
                            direct: items
                        },
                        meta: {
                            item: {
                                element(item) {
                                    return {
                                        element: "img",
                                        src: item.url,
                                        style: {
                                            height: "200px"
                                        }
                                    }
                                }
                            }
                        }
                    },
                )
            }
        }
    }
}

export default customViews.define({
    name: "documentation-table-grid",
    class: Grid
})