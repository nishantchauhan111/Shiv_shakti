import {d as y, s as _e, k as B, c as I, o as _, f as n, a as q, i as a, t as w, _ as Q, h as M, g as k, F as re, j as ue, D as me, N as ne, a5 as fe, a6 as ze, E as oe, L as be, u as de, K as Ve} from "./C5bBxmVo.js";
import {_ as ee} from "./B0G1e5qc.js";
import {u as te} from "./CuBH4DsP.js";
import {C as ke, F as ye} from "./DpMqWF5x.js";
import {_ as pe} from "./B_pKfgL8.js";
import {_ as Se} from "./DYM-f5Yb.js";
import {u as Re, a as Ce} from "./Br4VmKNV.js";
import {a as he} from "./COL7POeB.js";
import {_ as ge} from "./DuVedMQ2.js";
import {_ as We} from "./BZ6ROOaS.js";
import {Q as Qe} from "./DqJe5UJ_.js";
import "./Dt8wSEj9.js";

const Ae = {class: "cons-hero container"}
  , Le = {class: "cons-hero__wrapper"}
  , Te = {"data-title": "", class: "cons-hero__title"}
  , Ie = {
    "data-full-image": "",
    class: "p-img-wrapper cons-hero__bg"
}
  , He = y({
    __name: "ConsultingHero",
    props: {content: {}},
    setup(c) {
        return (e, t) => {
            var o, s, p, l;
            const r = he;
            return _(),
            I("section", Ae, [
                n("div", Le, [
                    n("h1", Te, w((o = e.content) == null ? void 0 : o.title), 1),
                    n("div", Ie, [
                        q(r, {
                            src: (s = e.content) == null ? void 0 : s.asset ? (p = e.content.asset) == null ? void 0 : p.filename : "",
                            alt: (l = e.content) == null ? void 0 : l.asset ? e.content.asset.alt : "",
                            width: 1920,
                            preload: !0
                        }, null, 8, ["src", "alt", "preload"])
                    ])
                ])
            ])
        }
    }
})
  , Pe = Q(He, [["__scopeId", "data-v-8a096bc2"]])
  , Ge = {class: "cons-expertise container"}
  , De = {class: "cons-expertise__wrapper"}
  , je = {class: "cons-expertise__top"}
  , Ue = {class: "cons-expertise__expert"}
  , Ne = {class: "cons-expertise__title"}
  , Ee = {class: "cons-expertise__description"}
  , Fe = {class: "cons-expertise__bottom"}
  , Be = {class: "cons-expertise__bottom-content"}
  , Ke = {class: "cons-expertise__subtitle"}
  , Xe = {class: "cons-expertise__list"}
  , Oe = y({
    __name: "ConsultingExpertise",
    props: {content: {}},
    setup(c) {
        const {openFormModal: e} = Ve();
        return (t, o) => {
            var s, p, l, m, i, d;
            const r = ge
              , u = We;
            return _(),
            I("section", Ge, [
                n("div", De, [
                    n("div", je, [
                        n("div", Ue, [
                            n("h2", Ne, w((s = t.content) == null ? void 0 : s.title), 1),
                            n("p", Ee, w((p = t.content) == null ? void 0 : p.description), 1),
                            q(u, {
                                type: "button",
                                class: "cons-expertise__btn",
                                onClick: o[0] || (o[0] = f => a(e)(t.content ? t.content.button_text || "Book the EXPERT" : "Book the EXPERT"))
                            }, {
                                default: () => {
                                    var f;
                                    return [n("span", null, w((f = t.content) == null ? void 0 : f.button_text), 1)]
                                },
                                _: 1
                            })
                        ]),
                        q(r, {
                            src: (m = (l = t.content) == null ? void 0 : l.asset) == null ? void 0 : m.filename,
                            alt: (d = (i = t.content) == null ? void 0 : i.asset) == null ? void 0 : d.alt,
                            width: 700,
                            class: "cons-expertise__img"
                        }, null, 8, ["src", "alt"])
                    ]),
                    n("div", Fe, [
                        n("div", Be, [
                            n("p", Ke, w((s = t.content) == null ? void 0 : s.numbers_title), 1),
                            n("ul", Xe, [
                                (_(!0),
                                I(re, null, ue((s = t.content) == null ? void 0 : s.numbers, (f, b) => (_(),
                                I("li", {key: b, class: "cons-expertise__item"}, [
                                    n("h3", {class: "cons-expertise__number-title"}, w(f == null ? void 0 : f.value), 1),
                                    n("p", {class: "cons-expertise__number-text"}, w(f == null ? void 0 : f.label), 1),
                                    n("span", {class: "cons-expertise__plus"})
                                ]))), 128))
                            ])
                        ])
                    ])
                ])
            ])
        }
    }
})
  , Ze = Q(Oe, [["__scopeId", "data-v-56a7997c"]])
  , Ye = {class: "cons-diff"}
  , Je = {class: "cons-diff__wrapper"}
  , et = {class: "cons-diff__title-wrapper container"}
  , tt = {class: "cons-diff__title"}
  , nt = y({
    __name: "ConsultingDifference",
    props: {content: {}},
    setup(c) {
        const e = Re("cons-diff-ref", 0);
        return (t, o) => {
            var s, p, l, m, i;
            const r = ge
              , u = pe
              , f = Se;
            return _(),
            I("section", Ye, [
                n("div", Je, [
                    n("div", et, [
                        n("h2", tt, w((s = t.content) == null ? void 0 : s.title), 1)
                    ])
                ]),
                n("div", {
                    class: "cons-diff__slider container",
                    "data-v-12ead964": ""
                }, [
                    n("div", {class: "cons-diff__bgs"}, [
                        (_(!0),
                        I(re, null, ue((p = t.content) == null ? void 0 : p.items, (b, g) => (_(),
                        I("div", {
                            key: g,
                            "data-f-bg": "",
                            class: "cons-diff__bg-wrapper"
                        }, [
                            q(r, {
                                "data-f-bg-i": "",
                                src: (x => {
                                    var C, z;
                                    return (z = (C = b == null ? void 0 : b.asset) == null ? void 0 : C.filename) != null ? z : ""
                                })(),
                                alt: (x => {
                                    var C, z;
                                    return (z = (C = b == null ? void 0 : b.asset) == null ? void 0 : C.alt) != null ? z : ""
                                })(),
                                width: 1920,
                                class: "cons-diff__bg"
                            }, null, 8, ["src", "alt"])
                        ]))), 128)),
                        q(u)
                    ]),
                    n("div", {class: "cons-diff__content"}, [
                        n("div", {class: "cons-diff__texts"}, [
                            n("ul", {class: "cons-diff__items"}, [
                                (_(!0),
                                I(re, null, ue((l = t.content) == null ? void 0 : l.items, (b, g) => (_(),
                                I("li", {key: g, class: "cons-diff__item"}, [
                                    n("h3", {"data-f-title": "", class: "cons-diff__t"}, w(b == null ? void 0 : b.title), 1),
                                    n("p", {"data-f-text": "", class: "cons-diff__text"}, w(b == null ? void 0 : b.description), 1)
                                ]))), 128))
                            ])
                        ]),
                        n("div", {class: "cons-diff__assets"}, [
                            (_(!0),
                            I(re, null, ue((m = t.content) == null ? void 0 : m.items, (b, g) => (_(),
                            I("div", {
                                key: g,
                                "data-f-img": "",
                                class: "cons-diff__img-wrapper"
                            }, [
                                q(r, {
                                    "data-f-img-i": "",
                                    src: (x => {
                                        var C, z;
                                        return (z = (C = b == null ? void 0 : b.asset_small) == null ? void 0 : C.filename) != null ? z : ""
                                    })(),
                                    alt: (x => {
                                        var C, z;
                                        return (z = (C = b == null ? void 0 : b.asset_small) == null ? void 0 : C.alt) != null ? z : ""
                                    })(),
                                    width: 700,
                                    class: "cons-diff__img"
                                }, null, 8, ["src", "alt"])
                            ]))), 128))
                        ])
                    ]),
                    q(f, {
                        onNavigate: (i = a(e)) == null ? void 0 : i.throttledNavigate
                    }, null, 8, ["onNavigate"])
                ])
            ])
        }
    }
})
  , ot = Q(nt, [["__scopeId", "data-v-f55c96aa"]])
  , st = {class: "cons-experts container"}
  , rt = {class: "cons-experts__wrapper"}
  , lt = {class: "cons-experts__title"}
  , at = {class: "cons-experts__content"}
  , _t = {class: "cons-experts__subtitle"}
  , ct = {class: "cons-experts__list"}
  , mt = ["href"]
  , pt = y({
    __name: "ConsultingExperts",
    props: {content: {}},
    setup(c) {
        return (e, t) => {
            var o, s;
            const r = ge;
            return _(),
            I("section", st, [
                n("div", rt, [
                    n("h2", lt, w((o = e.content) == null ? void 0 : o.title), 1),
                    n("div", at, [
                        n("p", _t, w((s = e.content) == null ? void 0 : s.subtitle), 1),
                        n("ul", ct, [
                            (_(!0),
                            I(re, null, ue((o = e.content) == null ? void 0 : o.experts, (p, l) => (_(),
                            I("li", {key: l, class: "cons-experts__item"}, [
                                n("div", {class: "cons-experts__item-wrapper"}, [
                                    q(r, {
                                        src: (x => {
                                            var m, i;
                                            return (i = (m = p == null ? void 0 : p.photo) == null ? void 0 : m.filename) != null ? i : ""
                                        })(),
                                        alt: (x => {
                                            var m, i;
                                            return (i = (m = p == null ? void 0 : p.photo) == null ? void 0 : m.alt) != null ? i : ""
                                        })(),
                                        width: 650,
                                        class: "cons-experts__img"
                                    }, null, 8, ["src", "alt"]),
                                    n("div", {class: "cons-experts__info"}, [
                                        n("p", {class: "cons-experts__name"}, w(p == null ? void 0 : p.name), 1),
                                        n("p", {class: "cons-experts__position"}, w(p == null ? void 0 : p.position), 1)
                                    ])
                                ]),
                                n("div", {class: "cons-experts__links"}, [
                                    (_(!0),
                                    I(re, null, ue(p == null ? void 0 : p.links, (d, u) => (_(),
                                    I("a", {
                                        key: u,
                                        class: "ab-team__link underline-reverse",
                                        href: d == null ? void 0 : d.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, w(d == null ? void 0 : d.label), 9, mt))), 128))
                                ])
                            ]))), 128))
                        ])
                    ])
                ])
            ])
        }
    }
})
  , ut = Q(pt, [["__scopeId", "data-v-02cb5fe0"]])
  , ft = async () => {
    const r = de("consulting", () => null);
    try {
        if (!r.value) {
            const {story: t} = await te("consulting");
            r.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return {story: r}
}
  , dt = {key: 1}
  , gt = y({
    __name: "index",
    async setup(c) {
        let e, t;
        const {story: s} = ([e, t] = _e(() => ft()),
        e = await e,
        t(),
        e)
          , o = B(() => {
            var i, d;
            return (d = (i = s == null ? void 0 : s.value) == null ? void 0 : i.content) == null ? void 0 : d.body
        })
          , r = i => ({
            consulting_hero: Pe,
            consultancy_featured_projects: ye,
            consulting_expertise: Ze,
            consulting_difference: ot,
            consulting_experts: ut,
            quiz_block: Qe
        })[i]
          , l = B(() => {
            var i, d;
            return (d = (i = s == null ? void 0 : s.value) == null ? void 0 : i.content) == null ? void 0 : d.scroll_down_text
        })
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
            var f, b;
            const u = me("editable")
              , v = ne;
            return _(),
            I("div", null, [
                a(m) ? (_(),
                k(v, fe(ze({key: 0}, a(m))), null, 16)) : M("", !0),
                (_(!0),
                I(re, null, ue(a(o), g => (_(),
                I(re, {key: g._uid}, [
                    r(g.component) ? oe((_(),
                    k(be(r(g.component)), {
                        key: 0,
                        content: g,
                        arrow: a(l)
                    }, null, 8, ["content", "arrow"])), [[u, g]]) : (_(),
                    I("div", dt, [
                        n("p", null, "Unknown component: " + w(g.component), 1)
                    ]))
                ], 64))), 128)),
                q(ee, {
                    cta: (b = (f = a(s)) == null ? void 0 : f.content) == null ? void 0 : b.cta,
                    page: "Consulting"
                }, null, 8, ["cta"])
            ])
        }
    }
});
export {gt as default};
