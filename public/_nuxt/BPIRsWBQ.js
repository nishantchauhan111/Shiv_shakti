import {d as P, L as j, r as z, s as A, c as a, f as n, a as V, t as u, N as E, i as h, O as G, P as O, o, _ as D, F as L, j as N, u as R, b as T, e as U, k as q, g as J, h as K, v as Q, x as W, y as X} from "./C5bBxmVo.js";
import {_ as Y} from "./B0G1e5qc.js";
import {_ as M} from "./DuVedMQ2.js";
const Z = {
    class: "contacts-form container"
}
  , k = {
    class: "contacts-form__wrapper"
}
  , ee = {
    class: "contacts-form__bg-wrapper"
}
  , te = {
    class: "contacts-form__title"
}
  , se = {
    class: "contacts-form__description"
}
  , oe = P({
    __name: "FormSection",
    props: {
        content: {}
    },
    async setup(f) {
        let r, _;
        const {submitHandler: i, isFetching: S} = j("Contacts")
          , l = async c => {
            await i(c),
            t.value.name.value = "",
            t.value.phone.value = "",
            t.value.email.value = ""
        }
          , t = z({
            name: {
                value: "",
                error: !1
            },
            phone: {
                value: "",
                error: !1
            },
            email: {
                value: "",
                error: !1
            }
        })
          , {story: m} = ([r,_] = A( () => O()),
        r = await r,
        _(),
        r);
        return (c, d) => {
            var p, B, I, s, F, e, x, v, y, b, w, H;
            const C = M
              , $ = E;
            return o(),
            a("section", Z, [n("div", k, [n("div", ee, [V(C, {
                class: "contacts-form__bg",
                src: (B = (p = c.content) == null ? void 0 : p.form_bg) == null ? void 0 : B.filename,
                alt: (s = (I = c.content) == null ? void 0 : I.form_bg) == null ? void 0 : s.alt
            }, null, 8, ["src", "alt"]), d[1] || (d[1] = n("div", {
                class: "contacts-form__layer"
            }, null, -1))]), n("h2", te, u((F = c.content) == null ? void 0 : F.form_title), 1), n("p", se, u((e = c.content) == null ? void 0 : e.form_text), 1), V($, {
                modelValue: h(t),
                "onUpdate:modelValue": d[0] || (d[0] = g => G(t) ? t.value = g : null),
                "form-id": "global-form",
                class: "contacts-form__form",
                title: (v = (x = h(m)) == null ? void 0 : x.content) == null ? void 0 : v.form_popup_title,
                description: (b = (y = h(m)) == null ? void 0 : y.content) == null ? void 0 : b.form_popup_text,
                "btn-text": (H = (w = h(m)) == null ? void 0 : w.content) == null ? void 0 : H.form_popup_button,
                "show-button": !0,
                "is-loading": h(S),
                onSubmit: l
            }, null, 8, ["modelValue", "title", "description", "btn-text", "is-loading"])])])
        }
    }
})
  , ne = D(oe, [["__scopeId", "data-v-cfebacef"]])
  , ae = {
    class: "hero container"
}
  , re = {
    class: "hero__title-wrapper"
}
  , _e = {
    "data-title": "",
    class: "hero__title"
}
  , ce = {
    "data-t": "",
    class: "hero__wrapper"
}
  , le = {
    class: "hero__contacts"
}
  , ie = {
    class: "hero__block"
}
  , me = {
    class: "hero__content"
}
  , de = {
    class: "hero__column"
}
  , ue = {
    class: "hero__contact-title"
}
  , he = {
    class: "hero__column"
}
  , fe = {
    class: "hero__group-title"
}
  , pe = ["href"]
  , ve = {
    key: 1,
    class: "hero__link"
}
  , ye = {
    class: "hero__column"
}
  , be = {
    class: "hero__group-title"
}
  , we = ["href"]
  , Se = {
    key: 1,
    class: "hero__link"
}
  , Ce = P({
    __name: "HeroSection",
    props: {
        content: {}
    },
    setup(f) {
        return (r, _) => {
            var S, l;
            const i = M;
            return o(),
            a("section", ae, [n("div", re, [n("h1", _e, u((S = r.content) == null ? void 0 : S.title), 1)]), n("div", ce, [n("ul", le, [(o(!0),
            a(L, null, N((l = r.content) == null ? void 0 : l.contacts, (t, m) => {
                var c, d, C, $, p, B, I;
                return o(),
                a("li", {
                    key: m,
                    class: "hero__contact"
                }, [V(i, {
                    class: "hero__img",
                    src: (d = (c = t == null ? void 0 : t.content) == null ? void 0 : c.asset) == null ? void 0 : d.filename,
                    alt: ($ = (C = t == null ? void 0 : t.content) == null ? void 0 : C.asset) == null ? void 0 : $.alt
                }, null, 8, ["src", "alt"]), n("div", ie, [_[0] || (_[0] = n("div", {
                    class: "hero__line"
                }, null, -1)), n("div", me, [n("div", de, [n("h2", ue, u((p = t == null ? void 0 : t.content) == null ? void 0 : p.title), 1)]), n("div", he, [(o(!0),
                a(L, null, N((B = t == null ? void 0 : t.content) == null ? void 0 : B.items.slice(0, 3), (s, F) => (o(),
                a("div", {
                    key: "left-" + F,
                    class: "hero__contact-group"
                }, [n("p", fe, u(s == null ? void 0 : s.title), 1), (o(!0),
                a(L, null, N(s == null ? void 0 : s.item, (e, x) => {
                    var v, y, b, w;
                    return o(),
                    a("div", {
                        key: x
                    }, [(v = e == null ? void 0 : e.link) != null && v.url ? (o(),
                    a("a", {
                        key: 0,
                        href: ((y = s == null ? void 0 : s.title) == null ? void 0 : y.toLowerCase()) === "email" ? "mailto:" + ((b = e == null ? void 0 : e.link) == null ? void 0 : b.url) : (w = e == null ? void 0 : e.link) == null ? void 0 : w.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "hero__link underline-reverse"
                    }, u(e == null ? void 0 : e.label), 9, pe)) : (o(),
                    a("p", ve, u(e == null ? void 0 : e.label), 1))])
                }
                ), 128))]))), 128))]), n("div", ye, [(o(!0),
                a(L, null, N((I = t == null ? void 0 : t.content) == null ? void 0 : I.items.slice(3), (s, F) => (o(),
                a("div", {
                    key: "right-" + F,
                    class: "hero__contact-group"
                }, [n("p", be, u(s == null ? void 0 : s.title), 1), (o(!0),
                a(L, null, N(s == null ? void 0 : s.item, (e, x) => {
                    var v, y, b, w;
                    return o(),
                    a("div", {
                        key: x,
                        class: "hero__link-wrapper"
                    }, [(v = e == null ? void 0 : e.link) != null && v.url ? (o(),
                    a("a", {
                        key: 0,
                        href: ((y = s == null ? void 0 : s.title) == null ? void 0 : y.toLowerCase()) === "email" ? "mailto:" + ((b = e == null ? void 0 : e.link) == null ? void 0 : b.url) : (w = e == null ? void 0 : e.link) == null ? void 0 : w.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "hero__link underline-reverse"
                    }, u(e == null ? void 0 : e.label), 9, we)) : (o(),
                    a("p", Se, u(e == null ? void 0 : e.label), 1))])
                }
                ), 128))]))), 128))])])])])
            }
            ), 128))])])])
        }
    }
})
  , $e = D(Ce, [["__scopeId", "data-v-5cc0d632"]])
  , Fe = async () => {
    var r;
    const f = R("contact", () => null);
    try {
        if (!f.value) {
            const _ = await T("contact");
            f.value = _.value
        }
    } catch (_) {
        console.log(_)
    }
    return U((r = f.value) == null ? void 0 : r.id, _ => {
        f.value = _
    }
    ),
    {
        story: f
    }
}
  , Ie = P({
    __name: "contact",
    async setup(f) {
        let r, _;
        const {story: i} = ([r,_] = A( () => Fe()),
        r = await r,
        _(),
        r)
          , S = q( () => {
            var t, m, c;
            const l = (m = (t = i == null ? void 0 : i.value) == null ? void 0 : t.content) == null ? void 0 : m.meta[0];
            return l ? {
                title: l.title,
                description: l.description,
                ogImage: (c = l == null ? void 0 : l.image) == null ? void 0 : c.filename
            } : null
        }
        );
        return (l, t) => {
            var d, C, $, p;
            const m = X
              , c = Y;
            return o(),
            a("div", null, [h(S) ? (o(),
            J(m, Q(W({
                key: 0
            }, h(S))), null, 16)) : K("", !0), V($e, {
                content: (d = h(i)) == null ? void 0 : d.content
            }, null, 8, ["content"]), V(ne, {
                content: (C = h(i)) == null ? void 0 : C.content
            }, null, 8, ["content"]), V(c, {
                cta: (p = ($ = h(i)) == null ? void 0 : $.content) == null ? void 0 : p.cta,
                page: "Contact"
            }, null, 8, ["cta"])])
        }
    }
});
export {Ie as default};
