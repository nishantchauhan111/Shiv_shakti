import {d as y, s as _e, k as B, c as I, o as _, f as n, a as q, i as a, t as w, _ as Q, h as M, g as k, F as re, j as ue, D as me, N as ne, a5 as fe, a6 as ze, E as oe, L as be, u as de} from "./C5bBxmVo.js";
import {_ as ee} from "./B0G1e5qc.js";
import {u as te} from "./CuBH4DsP.js";
import {_ as ge} from "./DuVedMQ2.js";

const Ae = {class: "hero container"}
  , Ce = {class: "hero__title-wrapper"}
  , Le = {"data-title": "", class: "hero__title"}
  , Te = {"data-t": "", class: "hero__wrapper"}
  , Ie = {class: "hero__contacts"}
  , He = ["href"]
  , Pe = y({
    __name: "ContactHero",
    props: {content: {}},
    setup(c) {
        return (e, t) => {
            var o, s;
            const r = ge;
            return _(),
            I("section", Ae, [
                n("div", Ce, [
                    n("h1", Le, w((o = e.content) == null ? void 0 : o.title), 1)
                ]),
                n("div", Te, [
                    n("ul", Ie, [
                        (_(!0),
                        I(re, null, ue((s = e.content) == null ? void 0 : s.contacts, (p, l) => (_(),
                        I("li", {key: l, class: "hero__contact"}, [
                            q(r, {
                                src: (x => {
                                    var m, i;
                                    return (i = (m = p == null ? void 0 : p.asset) == null ? void 0 : m.filename) != null ? i : ""
                                })(),
                                alt: (x => {
                                    var m, i;
                                    return (i = (m = p == null ? void 0 : p.asset) == null ? void 0 : m.alt) != null ? i : ""
                                })(),
                                class: "hero__img",
                                width: 1920
                            }, null, 8, ["src", "alt"]),
                            n("div", {class: "hero__block"}, [
                                n("div", {class: "hero__line"}),
                                n("div", {class: "hero__content"}, [
                                    n("div", {class: "hero__column"}, [
                                        n("h2", {class: "hero__contact-title"}, w(p == null ? void 0 : p.title), 1)
                                    ]),
                                    (_(!0),
                                    I(re, null, ue(p == null ? void 0 : p.columns, (d, u) => (_(),
                                    I("div", {key: u, class: "hero__column"}, [
                                        (_(!0),
                                        I(re, null, ue(d == null ? void 0 : d.groups, (f, b) => (_(),
                                        I("div", {key: b, class: "hero__contact-group"}, [
                                            n("p", {class: "hero__group-title"}, w(f == null ? void 0 : f.title), 1),
                                            (_(!0),
                                            I(re, null, ue(f == null ? void 0 : f.links, (g, z) => {
                                                var C, X;
                                                return _(),
                                                I("div", {
                                                    key: z,
                                                    class: (C = f == null ? void 0 : f.links) != null && C.length > 1 ? "hero__link-wrapper" : ""
                                                }, [
                                                    g != null && g.url ? (_(),
                                                    I("a", {
                                                        key: 0,
                                                        href: g == null ? void 0 : g.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        class: "hero__link underline-reverse"
                                                    }, w(g == null ? void 0 : g.label), 9, He)) : (_(),
                                                    I("p", {key: 1, class: "hero__link"}, w(g == null ? void 0 : g.label), 1))
                                                ], 2)
                                            }), 128))
                                        ]))), 128))
                                    ]))), 128))
                                ])
                            ])
                        ]))), 128))
                    ])
                ])
            ])
        }
    }
})
  , Ge = Q(Pe, [["__scopeId", "data-v-5cc0d632"]])
  , De = {class: "contacts-form container"}
  , je = {class: "contacts-form__wrapper"}
  , Ue = {class: "contacts-form__bg-wrapper"}
  , We = {class: "contacts-form__layer"}
  , Je = {class: "contacts-form__title"}
  , Ze = {class: "contacts-form__description"}
  , Ye = y({
    __name: "ContactsForm",
    props: {content: {}},
    setup(c) {
        return (e, t) => {
            var o, s, p, l, m;
            const r = ge;
            return _(),
            I("section", De, [
                n("div", je, [
                    n("div", Ue, [
                        q(r, {
                            src: (s = (o = e.content) == null ? void 0 : o.asset) == null ? void 0 : s.filename,
                            alt: (l = (p = e.content) == null ? void 0 : p.asset) == null ? void 0 : l.alt,
                            class: "contacts-form__bg",
                            width: 1920
                        }, null, 8, ["src", "alt"]),
                        n("div", We)
                    ]),
                    n("h2", Je, w((m = e.content) == null ? void 0 : m.title), 1),
                    n("p", Ze, w((m = e.content) == null ? void 0 : m.description), 1)
                ])
            ])
        }
    }
})
  , Ke = Q(Ye, [["__scopeId", "data-v-cfebacef"]])
  , Xe = async () => {
    const r = de("contact", () => null);
    try {
        if (!r.value) {
            const {story: t} = await te("contact");
            r.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return {story: r}
}
  , et = y({
    __name: "index",
    async setup(c) {
        let e, t;
        const {story: s} = ([e, t] = _e(() => Xe()),
        e = await e,
        t(),
        e)
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
            var f, b, g, x;
            const v = ne;
            return _(),
            I("div", null, [
                a(m) ? (_(),
                k(v, fe(ze({key: 0}, a(m))), null, 16)) : M("", !0),
                q(Ge, {
                    content: (b = (f = a(s)) == null ? void 0 : f.content) == null ? void 0 : b.contacts
                }, null, 8, ["content"]),
                q(Ke, {
                    content: (x = (g = a(s)) == null ? void 0 : g.content) == null ? void 0 : x.form
                }, null, 8, ["content"]),
                q(ee, {
                    cta: (d2 => {
                        var C, z;
                        return (z = (C = a(s)) == null ? void 0 : C.content) == null ? void 0 : z.cta
                    })(),
                    page: "Contact"
                }, null, 8, ["cta"])
            ])
        }
    }
});
export {et as default};
