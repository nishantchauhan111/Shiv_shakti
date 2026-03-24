import {d as y, s as _e, r as h, k as B, c as I, o as _, f as n, a as q, i as a, t as w, _ as Q, h as M, g as k, F as re, j as ue, n as T, D as me, N as ne, a5 as fe, a6 as ze, E as oe, L as be, u as de} from "./C5bBxmVo.js";
import {u as Z} from "./CuBH4DsP.js";
import {_ as ge} from "./DuVedMQ2.js";
import {C as ke} from "./DpMqWF5x.js";

const Ae = {class: "about-hero container"}
  , Ce = {class: "about-hero__wrapper"}
  , Le = {"data-title": "", class: "about-hero__main-title"}
  , Te = {class: "about-hero__text"}
  , Ie = {class: "about-hero__list"}
  , He = y({
    __name: "AboutHero",
    props: {content: {}},
    setup(c) {
        return (e, t) => {
            var o, s, p, l, m, i, d, u, f;
            const r = ge;
            return _(),
            I("section", Ae, [
                n("div", Ce, [
                    n("h1", Le, w((o = e.content) == null ? void 0 : o.title), 1),
                    (s = e.content) != null && s.asset ? (_(),
                    I("div", {key: 0, class: "about-hero__asset"}, [
                        q(r, {
                            src: (l = (p = e.content) == null ? void 0 : p.asset) == null ? void 0 : l.filename,
                            alt: (i = (m = e.content) == null ? void 0 : m.asset) == null ? void 0 : i.alt,
                            width: 1920,
                            class: "about-hero__img"
                        }, null, 8, ["src", "alt"])
                    ])) : M("", !0),
                    n("p", Te, w((d = e.content) == null ? void 0 : d.text), 1),
                    (u = e.content) != null && u.numbers ? (_(),
                    I("ul", Ie, [
                        (_(!0),
                        I(re, null, ue((f = e.content) == null ? void 0 : f.numbers, (C, z) => (_(),
                        I("li", {key: z, class: "about-hero__item"}, [
                            n("h3", {class: "about-hero__number-title"}, w(C == null ? void 0 : C.value), 1),
                            n("p", {class: "about-hero__number-text"}, w(C == null ? void 0 : C.label), 1),
                            n("span", {class: "about-hero__plus"})
                        ]))), 128))
                    ])) : M("", !0)
                ])
            ])
        }
    }
})
  , Pe = Q(He, [["__scopeId", "data-v-4276ea80"]])
  , Ge = {class: "ab-mission container"}
  , De = {class: "ab-mission__wrapper"}
  , je = {class: "ab-mission__subtitle"}
  , Ue = {class: "ab-mission__title-wrapper"}
  , We = {class: "ab-mission__title"}
  , Je = y({
    __name: "AboutMission",
    props: {content: {}},
    setup(c) {
        return (e, t) => {
            var o, s;
            return _(),
            I("section", Ge, [
                n("div", De, [
                    n("p", je, w((o = e.content) == null ? void 0 : o.subtitle), 1),
                    n("div", Ue, [
                        n("h2", We, w((s = e.content) == null ? void 0 : s.title), 1)
                    ])
                ])
            ])
        }
    }
})
  , Ze = Q(Je, [["__scopeId", "data-v-11dbc277"]])
  , Ye = {class: "ab-history container"}
  , Ke = {class: "ab-history__wrapper"}
  , Xe = {class: "ab-history__title"}
  , et = {class: "ab-history__content"}
  , tt = {class: "ab-history__text"}
  , nt = {class: "ab-history__list"}
  , ot = y({
    __name: "AboutHistory",
    props: {content: {}},
    setup(c) {
        const e = h(0);
        return (t, o) => {
            var s, p, l;
            const m = ge;
            return _(),
            I("section", Ye, [
                n("div", Ke, [
                    n("h2", Xe, w((s = t.content) == null ? void 0 : s.title), 1),
                    n("div", et, [
                        n("p", tt, w((p = t.content) == null ? void 0 : p.text), 1),
                        n("ul", nt, [
                            (_(!0),
                            I(re, null, ue((l = t.content) == null ? void 0 : l.items, (i, d) => {
                                var u, f, b, g;
                                return _(),
                                I("li", {
                                    key: d,
                                    class: T(["ab-history__item", {"ab-history__item--active": a(e) === d}]),
                                    onClick: j => { e.value = d; }
                                }, [
                                    n("div", {class: "ab-history__img-wrapper"}, [
                                        q(m, {
                                            src: (f = (u = i == null ? void 0 : i.asset) == null ? void 0 : u.filename) != null ? f : "",
                                            alt: (g = (b = i == null ? void 0 : i.asset) == null ? void 0 : b.alt) != null ? g : "",
                                            width: 900,
                                            class: "ab-history__img"
                                        }, null, 8, ["src", "alt"])
                                    ]),
                                    n("div", {class: "ab-history__about-wrapper"}, [
                                        n("div", {class: "ab-history__line"}),
                                        n("div", {class: "ab-history__about"}, [
                                            n("h3", {class: "ab-history__year"}, w(i == null ? void 0 : i.year), 1),
                                            n("p", {class: "ab-history__description"}, w(i == null ? void 0 : i.description), 1)
                                        ])
                                    ])
                                ], 10, ["onClick"])
                            }), 128))
                        ])
                    ])
                ])
            ])
        }
    }
})
  , st = Q(ot, [["__scopeId", "data-v-8d091ad5"]])
  , rt = {class: "ab-team container"}
  , lt = {class: "ab-team__wrapper"}
  , at = {class: "ab-team__title"}
  , _t = {class: "ab-team__list"}
  , ct = y({
    __name: "AboutTeam",
    props: {content: {}},
    setup(c) {
        return (e, t) => {
            var o, s;
            const p = ge;
            return _(),
            I("section", rt, [
                n("div", lt, [
                    n("h2", at, w((o = e.content) == null ? void 0 : o.title), 1),
                    n("ul", _t, [
                        (_(!0),
                        I(re, null, ue((s = e.content) == null ? void 0 : s.groups, (l, m) => {
                            var i, d;
                            return _(),
                            I("li", {key: m, class: "ab-team__group"}, [
                                n("h3", {class: "ab-team__group-title"}, w(l == null ? void 0 : l.title), 1),
                                (i = l == null ? void 0 : l.members) != null && i.length ? (_(),
                                I("ul", {key: 0, class: "ab-team__members"}, [
                                    (_(!0),
                                    I(re, null, ue((d = l == null ? void 0 : l.members) != null ? d : [], (f, b) => {
                                        var g, x, C, z;
                                        return _(),
                                        I("li", {key: b, class: "ab-team__member"}, [
                                            q(p, {
                                                src: (x = (g = f == null ? void 0 : f.photo) == null ? void 0 : g.filename) != null ? x : "",
                                                alt: (z = (C = f == null ? void 0 : f.photo) == null ? void 0 : C.alt) != null ? z : "",
                                                width: 400,
                                                class: "ab-team__photo"
                                            }, null, 8, ["src", "alt"]),
                                            n("h4", {class: "ab-team__name"}, w(f == null ? void 0 : f.name), 1),
                                            n("p", {class: "ab-team__role"}, w(f == null ? void 0 : f.role), 1)
                                        ])
                                    }), 128))
                                ])) : M("", !0)
                            ])
                        }), 128))
                    ])
                ])
            ])
        }
    }
})
  , mt = Q(ct, [["__scopeId", "data-v-fa64bfc6"]])
  , pt = async () => {
    const r = de("about", () => null);
    try {
        if (!r.value) {
            const {story: t} = await Z("about");
            r.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return {story: r}
}
  , ut = {key: 1}
  , ft = y({
    __name: "Content",
    async setup(c) {
        let e, t;
        const {story: s} = ([e, t] = _e(() => pt()),
        e = await e,
        t(),
        e)
          , o = B(() => {
            var i, d;
            return (d = (i = s == null ? void 0 : s.value) == null ? void 0 : i.content) == null ? void 0 : d.body
        })
          , r = i => ({
            about_hero: Pe,
            company_directions: ke,
            about_mission: Ze,
            about_history: st,
            about_team: mt
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
            const u = me("editable")
              , v = ne;
            return _(),
            I("div", null, [
                a(m) ? (_(),
                k(v, fe(ze({key: 0}, a(m))), null, 16)) : M("", !0),
                (_(!0),
                I(re, null, ue(a(o), b => (_(),
                I(re, {key: b._uid}, [
                    r(b.component) ? oe((_(),
                    k(be(r(b.component)), {
                        key: 0,
                        content: b,
                        arrow: a(l)
                    }, null, 8, ["content", "arrow"])), [[u, b]]) : (_(),
                    I("div", ut, [
                        n("p", null, "Unknown component: " + w(b.component), 1)
                    ]))
                ], 64))), 128))
            ])
        }
    }
});
export {ft as _};
