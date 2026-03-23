import {d as G, s as E, r as N, k as V, V as I, c as A, g as u, h as L, A as R, a as O, i as o, v as T, x as U, z as W, B as q, f as J, t as K, l as Q, a9 as X, aa as Y, y as Z, o as r, D as z} from "./C5bBxmVo.js";
import {_ as ee} from "./B0G1e5qc.js";
import {H as te, u as oe, _ as ne} from "./B4cQH2UB.js";
import {u as ae} from "./CuBH4DsP.js";
import "./DuVedMQ2.js";
import "./DAIYkz3e.js";
import "./B_pKfgL8.js";
import "./DYM-f5Yb.js";
import "./Br4VmKNV.js";
import "./DsoqDRZR.js";
import "./xvu5ibTZ.js";
const se = {
    key: 2
}
  , ge = G({
    __name: "index",
    async setup(ce) {
        let c, i;
        const {story: a} = ([c,i] = E( () => ae("projects")),
        c = await c,
        i(),
        c)
          , {projects: m} = ([c,i] = E( () => oe("projects")),
        c = await c,
        i(),
        c)
          , l = N(m.value)
          , F = V( () => m.value.map(e => {
            var t, n, s;
            return (s = (n = (t = e == null ? void 0 : e.content) == null ? void 0 : t.category) == null ? void 0 : n.content) == null ? void 0 : s.name
        }
        ).filter( (e, t, n) => n.indexOf(e) === t).filter(e => !!e))
          , H = e => {
            l.value = m.value.filter(t => {
                var n, s, p;
                return ((p = (s = (n = t == null ? void 0 : t.content) == null ? void 0 : n.category) == null ? void 0 : s.content) == null ? void 0 : p.name) === e
            }
            )
        }
          , M = () => {
            l.value = m.value
        }
          , _ = e => ({
            project_home: te
        })[e]
          , d = V( () => {
            var t, n, s;
            const e = (n = (t = a == null ? void 0 : a.value) == null ? void 0 : t.content) == null ? void 0 : n.meta[0];
            return e ? {
                title: e.title,
                description: e.description,
                ogImage: (s = e == null ? void 0 : e.image) == null ? void 0 : s.filename
            } : null
        }
        )
          , f = N(0);
        I(l, () => {
            f.value++
        }
        );
        const $ = {
            mode: "out-in",
            onEnter(e, t) {
                e.style.opacity = "0",
                z.to(e, {
                    opacity: 1,
                    delay: .5,
                    duration: .5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        document.documentElement.style.cursor = "auto",
                        t()
                    }
                })
            },
            onLeave(e, t) {
                document.documentElement.style.cursor = "wait",
                z.to(e, {
                    opacity: 0,
                    duration: .5,
                    ease: "power2.inOut",
                    onComplete: t
                })
            }
        };
        return (e, t) => {
            var v, y, g, k, w, h, j, b, x, C;
            const n = Z
              , s = ee
              , p = W("editable");
            return r(),
            A("div", null, [o(d) ? (r(),
            u(n, T(U({
                key: 0
            }, o(d))), null, 16)) : L("", !0), _((y = (v = o(a)) == null ? void 0 : v.content) == null ? void 0 : y.component) ? R((r(),
            u(q(_((k = (g = o(a)) == null ? void 0 : g.content) == null ? void 0 : k.component)), {
                key: 1,
                content: (w = o(a)) == null ? void 0 : w.content,
                categories: o(F),
                onFilter: H,
                onGetAll: M
            }, null, 40, ["content", "categories"])), [[p, (h = o(a)) == null ? void 0 : h.content]]) : (r(),
            A("div", se, [J("p", null, "Unknown component: " + K((b = (j = o(a)) == null ? void 0 : j.content) == null ? void 0 : b.component), 1)])), O(Y, T(X($)), {
                default: Q( () => {
                    var P, B, S, D;
                    return [(r(),
                    u(ne, {
                        key: o(f),
                        projects: o(l),
                        "project-btn": (B = (P = o(a)) == null ? void 0 : P.content) == null ? void 0 : B.view_project_btn,
                        "more-projects-btn": (D = (S = o(a)) == null ? void 0 : S.content) == null ? void 0 : D.more_projects_btn
                    }, null, 8, ["projects", "project-btn", "more-projects-btn"]))]
                }
                ),
                _: 1
            }, 16), O(s, {
                cta: (C = (x = o(a)) == null ? void 0 : x.content) == null ? void 0 : C.cta,
                page: "Projects"
            }, null, 8, ["cta"])])
        }
    }
});
export {ge as default};
