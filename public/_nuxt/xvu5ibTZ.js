import {r as g, aq as d, K as p, ar as v, as as f, at as y, au as m} from "./C5bBxmVo.js";
const h = async r => {
    const e = g(null)
      , s = y()
      , n = d()
      , {isInEditor: c} = p()
      , {addToast: i} = v()
      , u = 3
      , {selectedLang: l} = f()
      , o = async t => {
        if (!e.value)
            try {
                const {data: a} = await n.get("cdn/stories/", {
                    sort_by: "name:asc",
                    language: l.value,
                    version: s.public.ENVIROMENT === "development" || c.value ? "draft" : "published",
                    cv: s.public.ENVIROMENT === "production" ? Date.now() : void 0,
                    ...r,
                    resolve_relations: ["project.category", "project.cta", "page.cta", "page.category"]
                });
                e.value = a.stories
            } catch (a) {
                if (console.error(`Story fetch failed (attempt ${t + 1}):`, a.message),
                t + 1 >= u) {
                    i({
                        color: m.danger,
                        id: Date.now().toString(),
                        text: "An error with our server occurred. Please try reloading the page."
                    });
                    return
                }
                await o(t + 1)
            }
    }
    ;
    return await o(),
    e
}
;
export {h as u};
