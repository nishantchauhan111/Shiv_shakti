import {u as c} from "./xvu5ibTZ.js";
import {u as n, Q as i, e as u, b as g} from "./C5bBxmVo.js";
const y = e => {
    if (typeof e != "string")
        return "";
    const s = new Date(e);
    if (isNaN(s.getTime()))
        return "";
    const t = s.getDate().toString().padStart(2, "0")
      , o = (s.getMonth() + 1).toString().padStart(2, "0")
      , a = s.getFullYear();
    return `${t}.${o}.${a}`
}
  , p = async () => {
    var s;
    const e = n("news", () => []);
    try {
        if (!((s = e.value) != null && s.length)) {
            const t = await c({
                by_slugs: "news/*",
                content_type: "page",
                sort_by: "first_published_at:desc"
            });
            e.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    {
        const o = i().params.project
          , a = e.value.find(r => r.slug === o);
        u(a == null ? void 0 : a.id, r => {
            e.value = e.value.filter(l => l.slug !== o),
            e.value = [...e.value, r]
        }
        )
    }
    return {
        news: e
    }
}
  , w = async () => {
    var s;
    const e = n("newsIndex", () => null);
    try {
        if (!e.value) {
            const t = await g("news");
            e.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return u((s = e.value) == null ? void 0 : s.id, t => {
        e.value = t
    }
    ),
    {
        story: e
    }
}
;
export {w as a, y as f, p as u};
