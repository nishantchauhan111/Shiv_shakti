import {u as r, b as s, e as u} from "./C5bBxmVo.js";
const l = async a => {
    var o;
    const e = r(`${a}Index`, () => null);
    try {
        if (!e.value) {
            const t = await s(a);
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
export {l as u};
