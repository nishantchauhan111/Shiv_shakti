import {_ as m, c as d, o as r, f as t, d as X, t as _, h as j, F as et, j as nt, g as ct, k as W, r as ot, Q as _t, a, i as o, l as w, a1 as at, m as rt, R as lt} from "./C5bBxmVo.js";
import {_ as Y} from "./DuVedMQ2.js";
import {_ as dt} from "./B_pKfgL8.js";
const it = {}
  , pt = {
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
function ut(f, c) {
    return r(),
    d("svg", pt, c[0] || (c[0] = [t("path", {
        d: "M11.8262 7L0.0870422 13.4952L0.0870428 0.504809L11.8262 7Z",
        fill: "white"
    }, null, -1)]))
}
const zt = m(it, [["render", ut]])
  , ft = {
    class: "cd container"
}
  , ht = {
    class: "cd__wrapper"
}
  , gt = {
    class: "cd__title-wrapper"
}
  , vt = {
    class: "cd__title"
}
  , mt = {
    class: "cd__block"
}
  , wt = {
    key: 0,
    class: "cd__list"
}
  , jt = {
    class: "cd-item__title"
}
  , xt = {
    class: "cd-item__text"
}
  , kt = X({
    __name: "CompanyDirections",
    props: {
        content: {}
    },
    setup(f) {
        return (c, x) => {
            var h, g, e, i;
            const n = Y;
            return r(),
            d("section", ft, [t("div", ht, [t("div", gt, [t("h2", vt, _((h = c.content) == null ? void 0 : h.title), 1)]), t("div", mt, [(e = (g = c.content) == null ? void 0 : g.directions) != null && e.length ? (r(),
            d("ul", wt, [(r(!0),
            d(et, null, nt((i = c.content) == null ? void 0 : i.directions, s => {
                var v, p, u;
                return r(),
                d("li", {
                    key: s == null ? void 0 : s._uid,
                    class: "cd__item cd-item"
                }, [t("h3", jt, _(s == null ? void 0 : s.title), 1), (v = s == null ? void 0 : s.asset) != null && v.filename ? (r(),
                ct(n, {
                    key: 0,
                    class: "cd-item__asset",
                    src: (p = s == null ? void 0 : s.asset) == null ? void 0 : p.filename,
                    alt: (u = s == null ? void 0 : s.asset) == null ? void 0 : u.alt,
                    width: 700
                }, null, 8, ["src", "alt"])) : j("", !0), t("p", xt, _(s == null ? void 0 : s.description), 1)])
            }
            ), 128))])) : j("", !0)])])])
        }
    }
})
  , Jt = m(kt, [["__scopeId", "data-v-b056a380"]])
  , $t = {}
  , yt = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
function Ct(f, c) {
    return r(),
    d("svg", yt, c[0] || (c[0] = [t("path", {
        d: "M11 13V23H13V13H23V11H13V1H11V11H1V13H11Z",
        fill: "url(#paint0_linear_1_2446)"
    }, null, -1), t("defs", null, [t("linearGradient", {
        id: "paint0_linear_1_2446",
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "23",
        gradientUnits: "userSpaceOnUse"
    }, [t("stop", {
        "stop-color": "#FFCE7E"
    }), t("stop", {
        offset: "1",
        "stop-color": "#997C4B"
    })])], -1)]))
}
const Vt = m($t, [["render", Ct]])
  , bt = {
    class: "featured-projects"
}
  , Bt = {
    class: "featured-projects__content"
}
  , Ft = {
    key: 0,
    class: "featured-projects__bg-wrapper"
}
  , Ht = {
    "data-t-assets": "",
    class: "fpc__assets"
}
  , It = {
    class: "fpc__image-item"
}
  , Lt = {
    class: "fpc__img-wrapper"
}
  , Pt = {
    class: "fpc__specs-wrapper"
}
  , Rt = {
    class: "fpc__text"
}
  , Dt = {
    class: "fpc__title",
    "data-f-title": ""
}
  , Nt = {
    "data-f-text": "",
    class: "fpc__specs"
}
  , Et = {
    class: "fpc__spec"
}
  , Gt = {
    class: "fpc__spec"
}
  , Mt = {
    class: "fpc__spec"
}
  , St = {
    "aria-hidden": "true",
    class: "fpc__icon",
    "aria-label": "View project"
}
  , Tt = {
    class: "featured-projects__text"
}
  , Ut = {
    class: "featured-projects__title"
}
  , Zt = {
    class: "featured-projects__desc"
}
  , At = X({
    __name: "FeaturedProjects",
    props: {
        content: {}
    },
    setup(f) {
        const c = W( () => {
            var e, i;
            return ((i = (e = f.content) == null ? void 0 : e.featured_projects) == null ? void 0 : i.filter(s => s.content)) || []
        }
        )
          , x = ot(null)
          , n = W( () => {
            var e;
            return (e = c.value) == null ? void 0 : e[0]
        }
        )
          , h = _t()
          , g = () => {
            h.meta.isProjectTransition = !0
        }
        ;
        return (e, i) => {
            var k, $, y, C, V, b, B, F, H, I, L, P, R, D, N;
            const s = Y
              , v = dt
              , p = at
              , u = rt
              , tt = Vt
              , st = lt;
            return r(),
            d("section", bt, [t("div", {
                ref_key: "contentRef",
                ref: x,
                class: "featured-projects__scroll-wrapper"
            }, [t("div", Bt, [(k = o(c)) != null && k.length ? (r(),
            d("div", Ft, [a(s, {
                "data-f-bg": "",
                src: (C = (y = ($ = o(n)) == null ? void 0 : $.content) == null ? void 0 : y.cover) == null ? void 0 : C.filename,
                alt: (B = (b = (V = o(n)) == null ? void 0 : V.content) == null ? void 0 : b.cover) == null ? void 0 : B.alt,
                class: "featured-projects__bg",
                width: 1920
            }, null, 8, ["src", "alt"])])) : j("", !0), a(v), a(u, {
                class: "featured-projects__link featured-projects__link--mob",
                tag: "nuxt-link",
                href: ((H = (F = e.content) == null ? void 0 : F.all_projects_link) == null ? void 0 : H.cached_url) || "/projects/"
            }, {
                default: w( () => {
                    var l;
                    return [t("span", null, _((l = e.content) == null ? void 0 : l.button_text), 1), a(p)]
                }
                ),
                _: 1
            }, 8, ["href"]), a(st, {
                to: `/${(I = o(n)) == null ? void 0 : I.full_slug}`,
                "data-t-card": "",
                "data-slug": (L = o(n)) == null ? void 0 : L.slug,
                class: "featured-projects__card fpc",
                onClick: g
            }, {
                default: w( () => {
                    var l, E, G, M, S, T, U, Z, A, O, Q, q, z, J, K;
                    return [t("div", Ht, [t("div", It, [t("div", Lt, [a(s, {
                        "data-t-img": "",
                        "data-f-img": "",
                        src: (G = (E = (l = o(n)) == null ? void 0 : l.content) == null ? void 0 : E.cover) == null ? void 0 : G.filename,
                        alt: (T = (S = (M = o(n)) == null ? void 0 : M.content) == null ? void 0 : S.cover) == null ? void 0 : T.alt,
                        class: "fpc__img",
                        "data-slug": (U = o(n)) == null ? void 0 : U.slug,
                        width: 1920
                    }, null, 8, ["src", "alt", "data-slug"])])])]), t("div", Pt, [t("div", Rt, [t("h2", Dt, _((A = (Z = o(n)) == null ? void 0 : Z.content) == null ? void 0 : A.name), 1), t("div", Nt, [t("div", Et, _((Q = (O = o(n)) == null ? void 0 : O.content) == null ? void 0 : Q.spec_1), 1), t("div", Gt, _((z = (q = o(n)) == null ? void 0 : q.content) == null ? void 0 : z.spec_2), 1), t("div", Mt, _((K = (J = o(n)) == null ? void 0 : J.content) == null ? void 0 : K.spec_3), 1)])])]), t("div", St, [a(tt)])]
                }
                ),
                _: 1
            }, 8, ["to", "data-slug"]), t("div", Tt, [t("h2", Ut, _((P = e.content) == null ? void 0 : P.title), 1), t("div", Zt, _((R = e.content) == null ? void 0 : R.text), 1), a(u, {
                class: "featured-projects__link",
                tag: "nuxt-link",
                href: ((N = (D = e.content) == null ? void 0 : D.all_projects_link) == null ? void 0 : N.cached_url) || "/projects/"
            }, {
                default: w( () => {
                    var l;
                    return [t("span", null, _((l = e.content) == null ? void 0 : l.button_text), 1), a(p)]
                }
                ),
                _: 1
            }, 8, ["href"])])])], 512)])
        }
    }
})
  , Kt = m(At, [["__scopeId", "data-v-90acafa8"]]);
export {Jt as C, Kt as F, zt as _};
