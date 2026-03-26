import {_ as f} from "./C7TFlp1a.js";
import {_ as k} from "./B0G1e5qc.js";
import {u as w, b as x, e as g, d as B, s as b, c as P, f as e, a as m, t as v, i as a, o as S, _ as C} from "./C5bBxmVo.js";
import "./BZ6ROOaS.js";
import "./Dt8wSEj9.js";
import "./DsoqDRZR.js";
import "./3NLjUwEP.js";
import "./DuVedMQ2.js";
import "./DYM-f5Yb.js";
const D = async () => {
    var o;
    const c = w("policy", () => null);
    try {
        if (!c.value) {
            const t = await x("legal/privacy-policy");
            c.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return g((o = c.value) == null ? void 0 : o.id, t => {
        c.value = t
    }
    ),
    {
        story: c
    }
}
  , N = {
    class: "privacy-policy"
}
  , V = {
    class: "privacy-policy__wrapper"
}
  , A = {
    class: "privacy-policy__title"
}
  , E = {
    class: "privacy-policy__description"
}
  , G = {
    class: "privacy-policy__wrapper privacy-policy__wrapper--content"
}
  , I = {
    class: "privacy-policy__content"
}
  , M = B({
    __name: "privacy-policy",
    async setup(c) {
        let o, t;
        const {story: s} = ([o,t] = b( () => D()),
        o = await o,
        t(),
        o);
        return (R, T) => {
            var i, n, r, _, p, l, y, d;
            const u = f
              , h = k;
            return S(),
            P("div", null, [e("section", N, [e("div", V, [e("h1", A, v((n = (i = a(s)) == null ? void 0 : i.content) == null ? void 0 : n.title), 1), e("p", E, v((_ = (r = a(s)) == null ? void 0 : r.content) == null ? void 0 : _.description), 1)]), e("div", G, [e("div", I, [m(u, {
                blocks: (l = (p = a(s)) == null ? void 0 : p.content) == null ? void 0 : l.body,
                "is-privacy": ""
            }, null, 8, ["blocks"])])])]), m(h, {
                cta: (d = (y = a(s)) == null ? void 0 : y.content) == null ? void 0 : d.cta,
                page: "Privacy Policy"
            }, null, 8, ["cta"])])
        }
    }
})
  , Q = C(M, [["__scopeId", "data-v-15c42586"]]);
export {Q as default};
