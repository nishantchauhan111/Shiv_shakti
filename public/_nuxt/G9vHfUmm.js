import {_ as b, u as N, a as P, b as w, c as $, I as A, d as D, e as F, f as V, A as E, C as I} from "./C0H5Ao26.js";
import {_ as M} from "./B0G1e5qc.js";
import {d as z, Q as H, s as L, S as Q, k as v, c as a, h as R, i as n, a as i, F as g, j as T, z as U, o as c, A as q, g as G, x as J, B as K, f as O, t as W} from "./C5bBxmVo.js";
import "./DuVedMQ2.js";
import "./COL7POeB.js";
import "./CdJ2rVPI.js";
import "./DdkQzejC.js";
import "./BZ6ROOaS.js";
import "./Dt8wSEj9.js";
import "./DsoqDRZR.js";
import "./CiqAVqVC.js";
import "./3NLjUwEP.js";
import "./DYM-f5Yb.js";
import "./CuBH4DsP.js";
const X = {
    key: 0
}
  , Y = {
    key: 1
}
  , dt = z({
    __name: "[id]",
    async setup(Z) {
        let r, p;
        const {params: _} = H()
          , {story: t} = ([r,p] = L( () => N(_ == null ? void 0 : _.id, "consultancy-projects")),
        r = await r,
        p(),
        r);
        t.value || Q({
            statusCode: 404,
            statusMessage: "Page Not Found"
        });
        const k = v( () => {
            var e;
            return (e = t == null ? void 0 : t.value) == null ? void 0 : e.content
        }
        )
          , h = v( () => {
            var e, s;
            return (s = (e = t == null ? void 0 : t.value) == null ? void 0 : e.content) == null ? void 0 : s.body
        }
        )
          , m = e => ({
            project_concept: I,
            project_about: E,
            gallery: V,
            project_facilities: F,
            project_exterior: D,
            project_interior: A,
            form: $,
            consultancy_featured_projects: w
        })[e];
        return (e, s) => {
            var u, l, d, f;
            const C = b
              , x = M
              , B = P
              , S = U("editable");
            return n(t) ? (c(),
            a("div", X, [i(C, {
                content: n(k)
            }, null, 8, ["content"]), (c(!0),
            a(g, null, T(n(h), o => {
                var j, y;
                return c(),
                a(g, {
                    key: o._uid
                }, [m(o.component) ? q((c(),
                G(K(m(o.component)), J({
                    key: 0,
                    ref_for: !0
                }, (o.component,
                {
                    projectName: (y = (j = n(t)) == null ? void 0 : j.content) == null ? void 0 : y.name
                }), {
                    content: o
                }), null, 16, ["content"])), [[S, o]]) : (c(),
                a("div", Y, [O("p", null, "Unknown component: " + W(o.component), 1)]))], 64)
            }
            ), 128)), i(x, {
                cta: (l = (u = n(t)) == null ? void 0 : u.content) == null ? void 0 : l.cta,
                page: "Consultancy Project" + ((f = (d = n(t)) == null ? void 0 : d.content) == null ? void 0 : f.name)
            }, null, 8, ["cta", "page"]), i(B)])) : R("", !0)
        }
    }
});
export {dt as default};
