import {_ as G} from "./DuVedMQ2.js";
import {_ as X} from "./DAIYkz3e.js";
import {d as E, c as d, f as e, a as i, t as y, o as l, _ as z, Q, r as V, k as D, h as O, F as N, j as H, A as Y, a8 as tt, i as p, l as R, a1 as K, m as U, g as q, p as st, q as et, H as ot, n as Z, Z as J, u as nt, e as ct} from "./C5bBxmVo.js";
import {_ as W} from "./B_pKfgL8.js";
import {_ as rt} from "./DYM-f5Yb.js";
import {u as at, a as lt} from "./Br4VmKNV.js";
import {u as _t} from "./xvu5ibTZ.js";
const pt = {
    class: "projects-hero container"
}
  , ut = {
    class: "projects-hero__wrapper"
}
  , it = {
    "data-full-image": "",
    class: "projects-hero__bg-wrapper"
}
  , dt = {
    class: "projects-hero__content"
}
  , jt = {
    "data-title": "",
    class: "projects-hero__title"
}
  , gt = {
    "data-t": "",
    class: "projects-hero__description"
}
  , vt = E({
    __name: "HeroSection",
    props: {
        content: {},
        categories: {}
    },
    emits: ["filter", "getAll"],
    setup(b, {emit: o}) {
        const n = o;
        return (r, c) => {
            var k, h, S, w, L, $, P;
            const _ = G
              , v = X;
            return l(),
            d("section", pt, [e("div", ut, [e("div", it, [i(_, {
                src: (h = (k = r.content) == null ? void 0 : k.background) == null ? void 0 : h.filename,
                alt: (w = (S = r.content) == null ? void 0 : S.background) == null ? void 0 : w.alt,
                class: "projects-hero__bg",
                width: 1920,
                preload: ""
            }, null, 8, ["src", "alt"]), c[2] || (c[2] = e("div", {
                class: "projects-hero__layer"
            }, null, -1))]), e("div", dt, [e("h1", jt, y((L = r.content) == null ? void 0 : L.title), 1), e("p", gt, y(($ = r.content) == null ? void 0 : $.description), 1), i(v, {
                "data-t": "",
                categories: r.categories,
                "label-all": (P = r.content) == null ? void 0 : P.categories_all,
                onFilter: c[0] || (c[0] = a => n("filter", a)),
                onGetAll: c[1] || (c[1] = a => n("getAll"))
            }, null, 8, ["categories", "label-all"])])])])
        }
    }
})
  , Ot = z(vt, [["__scopeId", "data-v-f3356013"]])
  , ht = {
    "data-o": "",
    class: "projects-m"
}
  , ft = {
    class: "projects-m__container"
}
  , mt = {
    key: 0,
    class: "projects-m__list"
}
  , bt = {
    class: "project-m__bg"
}
  , kt = ["data-slug"]
  , $t = {
    class: "project-m__img-wrapper",
    "data-f-img-i": ""
}
  , yt = {
    class: "project-m__content"
}
  , wt = {
    class: "project-m__title"
}
  , Pt = {
    class: "project-m__text"
}
  , F = 10
  , Bt = E({
    __name: "ProjectsListMobile",
    props: {
        projects: {},
        projectBtn: {},
        moreProjectsBtn: {}
    },
    setup(b) {
        const o = b
          , n = Q()
          , r = () => {
            n.meta.isProjectTransition = !0
        }
          , c = V(0)
          , _ = D( () => o.projects ?? [])
          , v = D( () => _.value.slice(0, F + c.value))
          , k = () => {
            c.value += F
        }
        ;
        return (h, S) => {
            var C;
            const w = G
              , L = W
              , $ = K
              , P = U
              , a = et;
            return l(),
            d("section", ht, [e("div", ft, [(C = h.projects) != null && C.length ? (l(),
            d("ul", mt, [(l(!0),
            d(N, null, H(p(_), t => {
                var f, m, B, T, I, x, s, u, j, g;
                return Y((l(),
                d("li", {
                    key: t == null ? void 0 : t._uid,
                    class: "projects-m__item project-m"
                }, [e("div", bt, [i(w, {
                    src: (m = (f = t == null ? void 0 : t.content) == null ? void 0 : f.cover) == null ? void 0 : m.filename,
                    alt: (T = (B = t == null ? void 0 : t.content) == null ? void 0 : B.cover) == null ? void 0 : T.alt,
                    class: "project-m__bg",
                    width: 800
                }, null, 8, ["src", "alt"]), i(L)]), e("div", {
                    class: "project-m__card",
                    "data-t-card": "",
                    "data-slug": t == null ? void 0 : t.slug
                }, [e("div", $t, [i(w, {
                    "data-t-img": "",
                    src: (x = (I = t == null ? void 0 : t.content) == null ? void 0 : I.cover) == null ? void 0 : x.filename,
                    alt: (u = (s = t == null ? void 0 : t.content) == null ? void 0 : s.cover) == null ? void 0 : u.alt,
                    class: "project-m__card-img",
                    "data-slug": t == null ? void 0 : t.slug,
                    width: 800
                }, null, 8, ["src", "alt", "data-slug"])]), e("div", yt, [e("h2", wt, y((j = t == null ? void 0 : t.content) == null ? void 0 : j.name), 1), e("p", Pt, y((g = t == null ? void 0 : t.content) == null ? void 0 : g.description), 1), i(P, {
                    tag: "nuxt-link",
                    href: `/${t == null ? void 0 : t.full_slug}`,
                    class: "m-project__link",
                    onClick: r
                }, {
                    default: R( () => [e("span", null, y(h.projectBtn), 1), i($)]),
                    _: 2
                }, 1032, ["href"])])], 8, kt)])), [[tt, p(v).includes(t)]])
            }
            ), 128))])) : O("", !0), i(a, null, {
                default: R( () => {
                    var t, f, m;
                    return [((t = p(_)) == null ? void 0 : t.length) > F && ((f = p(_)) == null ? void 0 : f.length) > ((m = p(v)) == null ? void 0 : m.length) ? (l(),
                    q(P, {
                        key: 0,
                        class: "projects-m__more-btn",
                        onClick: k
                    }, {
                        default: R( () => [st(y(h.moreProjectsBtn || "More"), 1)]),
                        _: 1
                    })) : O("", !0)]
                }
                ),
                _: 1
            })])])
        }
    }
})
  , Lt = z(Bt, [["__scopeId", "data-v-03285327"]])
  , Ct = {
    "data-o": "",
    class: "projects"
}
  , St = {
    class: "projects__slider container"
}
  , It = {
    class: "projects__bgs"
}
  , xt = ["data-slug"]
  , At = {
    "data-t-assets": "",
    class: "projects__assets"
}
  , Mt = {
    class: "projects__img-wrapper",
    "data-f-img-i": ""
}
  , Tt = {
    class: "projects__text-wrapper"
}
  , Nt = ["innerHTML"]
  , Ht = {
    "data-f-text": "",
    class: "projects__desc"
}
  , Rt = E({
    __name: "ProjectsListDesktop",
    props: {
        projects: {},
        projectBtn: {}
    },
    setup(b) {
        const o = b
          , n = V(null)
          , r = D( () => {
            var a;
            return ((a = o == null ? void 0 : o.projects) == null ? void 0 : a.length) || 0
        }
        )
          , {current: c, prev: _, throttledNavigate: v, onInit: k} = at(n, r)
          , h = D( () => o.projects[c.value])
          , S = Q()
          , w = () => {
            S.meta.isProjectTransition = !0
        }
          , L = a => a.replace(/\n/g, "<br>")
          , $ = V(0)
          , P = () => {
            if (!n.value)
                return 0;
            const a = [...n.value.querySelectorAll(".projects__text")];
            let C = 0
              , t = 0;
            return a.forEach( (f, m) => {
                const B = f.querySelectorAll(".e-line").length;
                B > C && (C = B,
                t = m)
            }
            ),
            t
        }
        ;
        return ot( () => {
            k( () => {
                $.value = P()
            }
            )
        }
        ),
        (a, C) => {
            var I, x;
            const t = G
              , f = W
              , m = K
              , B = U
              , T = rt;
            return l(),
            d("section", Ct, [e("div", {
                ref_key: "contentRef",
                ref: n,
                class: "projects__wrapper"
            }, [e("div", St, [e("div", It, [(l(!0),
            d(N, null, H(a.projects, (s, u) => {
                var j, g, A, M;
                return l(),
                d("div", {
                    key: u,
                    "data-f-bg": "",
                    class: Z(["projects__bg-wrapper", {
                        active: u === p(c),
                        prev: u === p(_)
                    }])
                }, [i(t, {
                    "data-f-bg-i": "",
                    src: (g = (j = s == null ? void 0 : s.content) == null ? void 0 : j.cover) == null ? void 0 : g.filename,
                    alt: (M = (A = s == null ? void 0 : s.content) == null ? void 0 : A.cover) == null ? void 0 : M.alt,
                    width: 1920,
                    class: "projects__bg"
                }, null, 8, ["src", "alt"])], 2)
            }
            ), 128))]), i(f), e("div", {
                class: "projects__card",
                "data-t-card": "",
                "data-slug": (I = p(h)) == null ? void 0 : I.slug
            }, [e("div", At, [(l(!0),
            d(N, null, H(a.projects, (s, u) => {
                var j, g, A, M;
                return l(),
                d("div", {
                    key: u,
                    "data-f-img": "",
                    class: Z(["projects__image-item", {
                        active: u === p(c),
                        prev: u === p(_)
                    }]),
                    style: J({
                        position: p($) === u ? "relative" : "absolute"
                    })
                }, [e("div", Mt, [i(t, {
                    "data-t-img": "",
                    src: (g = (j = s == null ? void 0 : s.content) == null ? void 0 : j.cover) == null ? void 0 : g.filename,
                    alt: (M = (A = s == null ? void 0 : s.content) == null ? void 0 : A.cover) == null ? void 0 : M.alt,
                    class: "projects__img",
                    "data-slug": s == null ? void 0 : s.slug,
                    width: 1920
                }, null, 8, ["src", "alt", "data-slug"])])], 6)
            }
            ), 128))]), e("div", Tt, [(l(!0),
            d(N, null, H(a.projects, (s, u) => {
                var j, g;
                return l(),
                d("div", {
                    key: u,
                    class: "projects__text",
                    style: J({
                        position: p($) === u ? "relative" : "absolute"
                    })
                }, [e("h2", {
                    "data-f-title": "",
                    class: "projects__title",
                    innerHTML: L((j = s == null ? void 0 : s.content) == null ? void 0 : j.name)
                }, null, 8, Nt), e("p", Ht, y((g = s == null ? void 0 : s.content) == null ? void 0 : g.description), 1)], 4)
            }
            ), 128))]), i(B, {
                tag: "nuxt-link",
                href: `/${(x = p(h)) == null ? void 0 : x.full_slug}`,
                class: "projects__link",
                onClick: w
            }, {
                default: R( () => [e("span", null, y(a.projectBtn), 1), i(m)]),
                _: 1
            }, 8, ["href"])], 8, xt)]), i(T, {
                onNavigate: p(v)
            }, null, 8, ["onNavigate"])], 512)])
        }
    }
})
  , Dt = z(Rt, [["__scopeId", "data-v-00c1618f"]])
  , Zt = E({
    __name: "ProjectsList",
    props: {
        projects: {},
        projectBtn: {},
        moreProjectsBtn: {}
    },
    setup(b) {
        const o = lt("(max-width: 860px)");
        return (n, r) => {
            const c = Lt
              , _ = Dt;
            return l(),
            d("div", null, [p(o) ? (l(),
            q(c, {
                key: 0,
                projects: n.projects,
                "project-btn": n.projectBtn,
                "more-projects-btn": n.moreProjectsBtn
            }, null, 8, ["projects", "project-btn", "more-projects-btn"])) : (l(),
            q(_, {
                key: 1,
                projects: n.projects,
                "project-btn": n.projectBtn
            }, null, 8, ["projects", "project-btn"]))])
        }
    }
})
  , Jt = async b => {
    var n;
    const o = nt(b, () => []);
    try {
        if (!((n = o.value) != null && n.length)) {
            const r = await _t({
                by_slugs: `${b}/*`,
                content_type: "project",
                sort_by: "position:asc"
            });
            o.value = r.value
        }
    } catch (r) {
        console.log(r)
    }
    {
        const c = Q().params.project
          , _ = o.value.find(v => v.slug === c);
        ct(_ == null ? void 0 : _.id, v => {
            o.value = o.value.filter(k => k.slug !== c),
            o.value = [...o.value, v]
        }
        )
    }
    return {
        projects: o
    }
}
;
export {Ot as H, Zt as _, Jt as u};
