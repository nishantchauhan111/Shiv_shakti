import {d as E, k as V, r as P, c as g, f as e, h as A, t as r, a as h, F as R, j, i as l, l as M, q, o as m, A as U, a8 as Q, R as T, g as D, m as Z, _ as J, s as G, v as K, x as W, z as X, B as Y, y as N} from "./C5bBxmVo.js";
import {_ as z} from "./DuVedMQ2.js";
import {f as tt, a as et, u as nt} from "./DY-wUTdT.js";
import {u as ot} from "./DsoqDRZR.js";
import {_ as st} from "./B0G1e5qc.js";
import {_ as at} from "./DAIYkz3e.js";
import "./xvu5ibTZ.js";
const lt = {
    "data-o": "",
    class: "news-list"
}
  , it = {
    class: "news-list__wrapper container"
}
  , _t = {
    key: 0,
    class: "news-list__main-title"
}
  , ct = {
    class: "news-list__list-wrapper"
}
  , pt = {
    class: "news-list__list"
}
  , mt = {
    class: "news-list__link-wrapper"
}
  , dt = {
    class: "news-list__info"
}
  , rt = {
    class: "news-list__category"
}
  , ut = {
    class: "news-list__title"
}
  , ft = {
    class: "news-list__date"
}
  , gt = E({
    __name: "NewsList",
    props: {
        news: {},
        title: {}
    },
    setup(F) {
        const _ = F
          , d = ot("(max-width: 860px)")
          , o = V( () => d.value ? 4 : 8)
          , i = P(0)
          , c = V( () => _.news ?? [])
          , v = V( () => c.value.slice(0, o.value + i.value))
          , y = () => {
            i.value += o.value
        }
        ;
        return (u, p) => {
            const f = z
              , n = T
              , s = Z
              , a = q;
            return m(),
            g("div", lt, [e("div", it, [u.title ? (m(),
            g("h2", _t, r(u.title), 1)) : A("", !0), e("div", ct, [e("ul", pt, [(m(!0),
            g(R, null, j(l(c), (t, w) => U((m(),
            g("li", {
                key: w,
                class: "news-list__card"
            }, [h(n, {
                to: `/${t == null ? void 0 : t.full_slug}`,
                class: "news-list__link"
            }, {
                default: M( () => {
                    var S, k, x, $, C, b, B, H;
                    return [e("div", mt, [h(f, {
                        src: (k = (S = t == null ? void 0 : t.content) == null ? void 0 : S.asset) == null ? void 0 : k.filename,
                        alt: ($ = (x = t == null ? void 0 : t.content) == null ? void 0 : x.asset) == null ? void 0 : $.alt,
                        width: 600,
                        class: "news-list__img"
                    }, null, 8, ["src", "alt"]), e("div", dt, [e("p", rt, r((B = (b = (C = t == null ? void 0 : t.content) == null ? void 0 : C.category) == null ? void 0 : b.content) == null ? void 0 : B.name), 1), e("h3", ut, r((H = t == null ? void 0 : t.content) == null ? void 0 : H.title), 1), e("p", ft, r(l(tt)(t == null ? void 0 : t.first_published_at)), 1)])]), p[0] || (p[0] = e("div", {
                        class: "news-list__plus"
                    }, [e("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, [e("path", {
                        d: "M11 13V23H13V13H23V11H13V1H11V11H1V13H11Z",
                        fill: "url(#paint0_linear_1_2446)"
                    }), e("defs", null, [e("linearGradient", {
                        id: "paint0_linear_1_2446",
                        x1: "12",
                        y1: "1",
                        x2: "12",
                        y2: "23",
                        gradientUnits: "userSpaceOnUse"
                    }, [e("stop", {
                        "stop-color": "#FFCE7E"
                    }), e("stop", {
                        offset: "1",
                        "stop-color": "#997C4B"
                    })])])])], -1))]
                }
                ),
                _: 2
            }, 1032, ["to"])])), [[Q, l(v).includes(t)]])), 128))]), h(a, null, {
                default: M( () => [l(c).length > l(o) && l(c).length > l(v).length ? (m(),
                D(s, {
                    key: 0,
                    class: "news-list__btn",
                    type: "button",
                    onClick: y
                }, {
                    default: M( () => p[1] || (p[1] = [e("span", null, r("MORE"), -1)])),
                    _: 1
                })) : A("", !0)]),
                _: 1
            })])])])
        }
    }
})
  , ht = {
    class: "news-hero container"
}
  , vt = {
    class: "news-hero__wrapper"
}
  , yt = {
    "data-full-image": "",
    class: "news-hero__bg-wrapper"
}
  , wt = {
    class: "news-hero__content"
}
  , kt = {
    "data-title": "",
    class: "news-hero__title"
}
  , xt = {
    "data-t": "",
    class: "news-hero__description"
}
  , $t = E({
    __name: "HeroSection",
    props: {
        content: {},
        categories: {}
    },
    emits: ["filter", "getAll"],
    setup(F, {emit: _}) {
        const d = _;
        return (o, i) => {
            var y, u, p, f, n, s, a;
            const c = z
              , v = at;
            return m(),
            g("section", ht, [e("div", vt, [e("div", yt, [h(c, {
                src: (u = (y = o.content) == null ? void 0 : y.background) == null ? void 0 : u.filename,
                alt: (f = (p = o.content) == null ? void 0 : p.background) == null ? void 0 : f.alt,
                width: 1920,
                preload: "",
                class: "news-hero__bg"
            }, null, 8, ["src", "alt"]), i[2] || (i[2] = e("div", {
                class: "news-hero__layer"
            }, null, -1))]), e("div", wt, [e("h1", kt, r((n = o.content) == null ? void 0 : n.title), 1), e("p", xt, r((s = o.content) == null ? void 0 : s.hero_text), 1), h(v, {
                "data-t": "",
                categories: o.categories,
                "label-all": (a = o.content) == null ? void 0 : a.categories_all,
                onFilter: i[0] || (i[0] = t => d("filter", t)),
                onGetAll: i[1] || (i[1] = t => d("getAll"))
            }, null, 8, ["categories", "label-all"])])])])
        }
    }
})
  , Ct = J($t, [["__scopeId", "data-v-582348f2"]])
  , bt = {
    key: 2
}
  , Dt = E({
    __name: "index",
    async setup(F) {
        let _, d;
        const {story: o} = ([_,d] = G( () => et()),
        _ = await _,
        d(),
        _)
          , {news: i} = ([_,d] = G( () => nt()),
        _ = await _,
        d(),
        _)
          , c = P(i.value)
          , v = V( () => i.value.map(n => {
            var s, a, t;
            return (t = (a = (s = n == null ? void 0 : n.content) == null ? void 0 : s.category) == null ? void 0 : a.content) == null ? void 0 : t.name
        }
        ).filter( (n, s, a) => a.indexOf(n) === s))
          , y = n => {
            c.value = i.value.filter(s => {
                var a, t, w;
                return ((w = (t = (a = s == null ? void 0 : s.content) == null ? void 0 : a.category) == null ? void 0 : t.content) == null ? void 0 : w.name) === n
            }
            )
        }
          , u = () => {
            c.value = i.value
        }
          , p = n => ({
            news_home: Ct
        })[n]
          , f = V( () => {
            var s, a, t;
            const n = (a = (s = o == null ? void 0 : o.value) == null ? void 0 : s.content) == null ? void 0 : a.meta[0];
            return n ? {
                title: n.title,
                description: n.description,
                ogImage: (t = n == null ? void 0 : n.image) == null ? void 0 : t.filename
            } : null
        }
        );
        return (n, s) => {
            var k, x, $, C, b, B, H, I, L, O;
            const a = N
              , t = gt
              , w = st
              , S = X("editable");
            return m(),
            g("div", null, [l(f) ? (m(),
            D(a, K(W({
                key: 0
            }, l(f))), null, 16)) : A("", !0), p((x = (k = l(o)) == null ? void 0 : k.content) == null ? void 0 : x.component) ? U((m(),
            D(Y(p((C = ($ = l(o)) == null ? void 0 : $.content) == null ? void 0 : C.component)), {
                key: 1,
                content: (b = l(o)) == null ? void 0 : b.content,
                categories: l(v),
                onFilter: y,
                onGetAll: u
            }, null, 40, ["content", "categories"])), [[S, (B = l(o)) == null ? void 0 : B.content]]) : (m(),
            g("div", bt, [e("p", null, "Unknown component: " + r((I = (H = l(o)) == null ? void 0 : H.content) == null ? void 0 : I.component), 1)])), h(t, {
                news: l(c)
            }, null, 8, ["news"]), h(w, {
                cta: (O = (L = l(o)) == null ? void 0 : L.content) == null ? void 0 : O.cta,
                page: "News"
            }, null, 8, ["cta"])])
        }
    }
});
export {Dt as default};
