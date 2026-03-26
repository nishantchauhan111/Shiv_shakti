import {d as M, s as b, r as D, k as E, V as $, c as N, g as p, h as G, A as I, a as V, i as n, v as A, x as L, z as R, B as U, f as W, t as q, l as J, a9 as K, aa as Q, y as X, o as r, D as O} from "./C5bBxmVo.js";
import {_ as Y} from "./B0G1e5qc.js";
import {H as Z, u as ee, _ as te} from "./B4cQH2UB.js";
import {u as oe} from "./CuBH4DsP.js";
import "./DuVedMQ2.js";
import "./DAIYkz3e.js";
import "./B_pKfgL8.js";
import "./DYM-f5Yb.js";
import "./Br4VmKNV.js";
import "./DsoqDRZR.js";
import "./xvu5ibTZ.js";
const ne = {
    key: 2
}
  , fe = M({
    __name: "index",
    async setup(ae) {
        let c, i;
        const {story: a} = ([c,i] = b( () => oe("consultancy-projects")),
        c = await c,
        i(),
        c)
          , {projects: l} = ([c,i] = b( () => ee("consultancy-projects")),
        c = await c,
        i(),
        c)
          , m = D(l.value)
          , T = E( () => l.value.map(e => {
            var t, o, s;
            return (s = (o = (t = e == null ? void 0 : e.content) == null ? void 0 : t.category) == null ? void 0 : o.content) == null ? void 0 : s.name
        }
        ).filter( (e, t, o) => o.indexOf(e) === t).filter(e => !!e))
          , z = e => {
            m.value = l.value.filter(t => {
                var o, s, u;
                return ((u = (s = (o = t == null ? void 0 : t.content) == null ? void 0 : o.category) == null ? void 0 : s.content) == null ? void 0 : u.name) === e
            }
            )
        }
          , F = () => {
            m.value = l.value
        }
          , _ = e => ({
            project_home: Z
        })[e]
          , d = E( () => {
            var t, o, s;
            const e = (o = (t = a == null ? void 0 : a.value) == null ? void 0 : t.content) == null ? void 0 : o.meta[0];
            return e ? {
                title: e.title,
                description: e.description,
                ogImage: (s = e == null ? void 0 : e.image) == null ? void 0 : s.filename
            } : null
        }
        )
          , y = D(0);
        $(m, () => {
            y.value++
        }
        );
        const H = {
            mode: "out-in",
            onEnter(e, t) {
                e.style.opacity = "0",
                O.to(e, {
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
                O.to(e, {
                    opacity: 0,
                    duration: .5,
                    ease: "power2.inOut",
                    onComplete: t
                })
            }
        };
        return (e, t) => {
            var f, v, g, k, w, h, C, x, P, B;
            const o = X
              , s = Y
              , u = R("editable");
            return r(),
            N("div", null, [n(d) ? (r(),
            p(o, A(L({
                key: 0
            }, n(d))), null, 16)) : G("", !0), _((v = (f = n(a)) == null ? void 0 : f.content) == null ? void 0 : v.component) ? I((r(),
            p(U(_((k = (g = n(a)) == null ? void 0 : g.content) == null ? void 0 : k.component)), {
                key: 1,
                content: (w = n(a)) == null ? void 0 : w.content,
                categories: n(T),
                onFilter: z,
                onGetAll: F
            }, null, 40, ["content", "categories"])), [[u, (h = n(a)) == null ? void 0 : h.content]]) : (r(),
            N("div", ne, [W("p", null, "Unknown component: " + q((x = (C = n(a)) == null ? void 0 : C.content) == null ? void 0 : x.component), 1)])), V(Q, A(K(H)), {
                default: J( () => {
                    var S, j;
                    return [(r(),
                    p(te, {
                        key: n(y),
                        projects: n(m),
                        "project-btn": (j = (S = n(a)) == null ? void 0 : S.content) == null ? void 0 : j.view_project_btn
                    }, null, 8, ["projects", "project-btn"]))]
                }
                ),
                _: 1
            }, 16), V(s, {
                cta: (B = (P = n(a)) == null ? void 0 : P.content) == null ? void 0 : B.cta,
                page: "Consultancy Projects"
            }, null, 8, ["cta"])])
        }
    }
});
export {fe as default};
