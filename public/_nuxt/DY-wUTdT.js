import {u as r, a1 as s, e as u} from "./C5bBxmVo.js";
import {u as fetchStories} from "./xvu5ibTZ.js";

const l = async a => {
    var o;
    const e = r(`${a}Index`, () => []);
    try {
        if (!((o = e.value) != null && o.length)) {
            if (typeof fetchStories === "function") {
                const t = await fetchStories({
                    by_slugs: `${a}/*`,
                    content_type: "news",
                    sort_by: "first_published_at:desc"
                });
                e.value = t.value
            }
        }
    } catch (t) {
        console.log(t)
    }
    return {
        news: e
    }
}
;
export {l as u};
