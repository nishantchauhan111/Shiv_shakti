import {aq as r, at as n, K as s, as as o} from "./C5bBxmVo.js";
const l = async a => {
    const e = r();
    const t = n();
    const {isInEditor: c} = s();
    const {selectedLang: f} = o();
    try {
        const {data: d} = await e.get("cdn/stories", {
            ...a,
            version: t.public.ENVIROMENT === "development" || c.value ? "draft" : "published",
            language: f.value
        });
        return {
            value: d.stories || []
        }
    } catch (err) {
        console.log(err);
        return {
            value: []
        }
    }
}
;
export {l as u};
