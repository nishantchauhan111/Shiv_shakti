import {d as y, s as _e, r as h, k as B, c as I, o as _, f as n, a as q, i as a, t as w, _ as Q, h as M, g as k, F as re, j as ue, D as me, N as ne, a5 as fe, a6 as ze, E as oe, L as be, u as de} from "./C5bBxmVo.js";
import {_ as ee} from "./B0G1e5qc.js";
import {u as te} from "./CuBH4DsP.js";
import {u as ne2} from "./DY-wUTdT.js";
import {_ as ge} from "./DuVedMQ2.js";
import {_ as Fe} from "./DAIYkz3e.js";
import "./xvu5ibTZ.js";

const Ae = {class: "news-hero container"}
  , Ce = {class: "news-hero__wrapper"}
  , Le = {"data-full-image": "", class: "news-hero__bg-wrapper"}
  , Te = {class: "news-hero__layer"}
  , Ie = {class: "news-hero__content"}
  , He = {"data-title": "", class: "news-hero__title"}
  , Pe = {"data-t": "", class: "news-hero__description"}
  , Ge = y({
    __name: "NewsHero",
    props: {
        content: {},
        categories: {},
        onFilter: Function,
        onGetAll: Function
    },
    emits: ["filter", "getAll"],
    setup(c, {emit: De}) {
        const e = De;
        return (t, o) => {
            var s, p, l, m, i, d;
            const r = ge
              , u = Fe;
            return _(),
            I("section", Ae, [
                n("div", Ce, [
                    n("div", Le, [
                        q(r, {
                            src: (p = (s = t.content) == null ? void 0 : s.asset) == null ? void 0 : p.filename,
                            alt: (m = (l = t.content) == null ? void 0 : l.asset) == null ? void 0 : m.alt,
                            width: 1920,
                            loading: "eager",
                            class: "news-hero__bg"
                        }, null, 8, ["src", "alt"]),
                        n("div", Te)
                    ]),
                    n("div", Ie, [
                        n("h1", He, w((i = t.content) == null ? void 0 : i.title), 1),
                        n("p", Pe, w((d = t.content) == null ? void 0 : d.description), 1),
                        q(u, {
                            "data-t": "",
                            categories: t.categories,
                            "label-all": (d = t.content) == null ? void 0 : d.label_all,
                            onFilter: o[0] || (o[0] = f => e("filter", f)),
                            onGetAll: o[1] || (o[1] = f => e("getAll"))
                        }, null, 8, ["categories", "label-all"])
                    ])
                ])
            ])
        }
    }
})
  , Ze = Q(Ge, [["__scopeId", "data-v-582348f2"]])
  , Ye = {class: "news-list__plus"}
  , Ke = {class: "news-list__info"}
  , Xe = {class: "news-list__category"}
  , et = {class: "news-list__title"}
  , tt = {class: "news-list__date"}
  , nt = y({
    __name: "NewsSection",
    props: {
        news: {},
        content: {}
    },
    setup(c) {
        const e = h(null);
        return (t, o) => {
            var s;
            const r = ge;
            return _(),
            I("div", {"data-o": "", class: "news-list"}, [
                n("div", {class: "news-list__wrapper container"}, [
                    n("div", {class: "news-list__list-wrapper"}, [
                        n("ul", {class: "news-list__list"}, [
                            (_(!0),
                            I(re, null, ue((s = a(e)) != null ? s : t.news, (p, l) => {
                                var m, i, d, u, f, b, g, x;
                                return _(),
                                I("li", {
                                    key: l,
                                    class: "news-list__card"
                                }, [
                                    n("a", {
                                        href: `/${(m = p == null ? void 0 : p.full_slug) != null ? m : (i = p == null ? void 0 : p.slug) != null ? i : ""}`,
                                        class: "news-list__link"
                                    }, [
                                        n("div", {class: "news-list__link-wrapper"}, [
                                            q(r, {
                                                src: (u = (d = p == null ? void 0 : p.content) == null ? void 0 : d.cover) == null ? void 0 : u.filename,
                                                alt: (b = (f = p == null ? void 0 : p.content) == null ? void 0 : f.cover) == null ? void 0 : b.alt,
                                                width: 600,
                                                class: "news-list__img"
                                            }, null, 8, ["src", "alt"]),
                                            n("div", Ke, [
                                                n("p", Xe, w((g = p == null ? void 0 : p.content) == null ? void 0 : g.category), 1),
                                                n("h3", et, w((g = p == null ? void 0 : p.content) == null ? void 0 : g.title), 1),
                                                n("p", tt, w((x = p == null ? void 0 : p.content) == null ? void 0 : x.date), 1)
                                            ])
                                        ]),
                                        n("div", Ye)
                                    ], 8, ["href"])
                                ])
                            }), 128))
                        ]),
                        n("span")
                    ])
                ])
            ])
        }
    }
})
  , ot = async () => {
    const r = de("news", () => null);
    try {
        if (!r.value) {
            const {story: t} = await te("news");
            r.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return {story: r}
}
  , st = {key: 2}
  , rt = y({
    __name: "index",
    async setup(c) {
        let e, t;
        const {story: s} = ([e, t] = _e(() => ot()),
        e = await e,
        t(),
        e)
          , {news: p} = ([e, t] = _e(() => ne2("news")),
        e = await e,
        t(),
        e)
          , l = h(p.value)
          , F = B(() => p.value ? p.value.map(v => {
            var j, C, z;
            return (z = (C = (j = v == null ? void 0 : v.content) == null ? void 0 : j.category) == null ? void 0 : C.name) != null ? z : v?.content?.category
        }).filter((v, j, C) => C.indexOf(v) === j).filter(v => !!v) : [])
          , H = v => {
            l.value = p.value ? p.value.filter(j => {
                var C, z, X;
                return ((X = (z = (C = j == null ? void 0 : j.content) == null ? void 0 : C.category) == null ? void 0 : z.name) != null ? X : j?.content?.category) === v
            }) : []
        }
          , G = () => {
            l.value = p.value
        }
          , m = B(() => {
            var d, u, v;
            const i = (u = (d = s == null ? void 0 : s.value) == null ? void 0 : d.content) == null ? void 0 : u.meta[0];
            return i ? {
                title: i.title,
                description: i.description,
                ogImage: (v = i == null ? void 0 : i.image) == null ? void 0 : v.filename
            } : null
        });
        return (i, d) => {
            var f, b, g, x, C, z;
            const u = ne;
            return _(),
            I("div", null, [
                a(m) ? (_(),
                k(u, fe(ze({key: 0}, a(m))), null, 16)) : M("", !0),
                (f = a(s)) != null && f.content ? (_(),
                I(re, {key: 1}, [
                    q(Ze, {
                        content: (g = (b = a(s)) == null ? void 0 : b.content) == null ? void 0 : g.body[0],
                        categories: a(F),
                        onFilter: H,
                        onGetAll: G
                    }, null, 8, ["content", "categories"]),
                    q(nt, {
                        news: a(l),
                        content: (z = (C = (x = a(s)) == null ? void 0 : x.content) == null ? void 0 : C.body) == null ? void 0 : z[1]
                    }, null, 8, ["news", "content"])
                ], 64)) : (_(),
                I("div", st)),
                q(ee, {
                    cta: (j => {
                        var D, E;
                        return (E = (D = a(s)) == null ? void 0 : D.content) == null ? void 0 : E.cta
                    })(),
                    page: "News"
                }, null, 8, ["cta"])
            ])
        }
    }
});
export {rt as default};
