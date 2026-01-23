import {u as s, b as a, e as u} from "./C5bBxmVo.js";
const r = async () => {
    var o;
    const e = s("components/menu", () => null);
    try {
        if (!e.value) {
            const t = await a("components/menu");
            e.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return u((o = e.value) == null ? void 0 : o.id, t => {
        e.value = t
    }
    ),
    {
        story: e
    }
}
;
export {r as u};
