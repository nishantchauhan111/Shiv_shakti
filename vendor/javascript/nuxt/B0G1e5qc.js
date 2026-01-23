import {_ as j, a as q} from "./DuVedMQ2.js";
import {d as x, K as z, r as E, H as G, I as J, T as O, c as P, f as e, a as n, t as a, l as Q, i as X, D as Y, a0 as Z, m as tt, o as et, a1 as nt, _ as ot} from "./C5bBxmVo.js";
const st = {
    class: "meetings container"
}
  , at = {
    class: "meetings__wrapper"
}
  , _t = {
    class: "mettings__manager-wrapper"
}
  , ct = {
    class: "meetings__content"
}
  , it = {
    class: "meetings__title"
}
  , mt = {
    class: "meetings__about"
}
  , rt = {
    class: "meetings__name"
}
  , lt = {
    class: "meetings__position"
}
  , pt = x({
    __name: "BookTheMeetings",
    props: {
        cta: {},
        page: {}
    },
    setup(gt) {
        const {openFormModal: F} = z()
          , o = E(null)
          , _ = E(null)
          , K = () => {
            if (!o.value)
                return;
            const t = Y.timeline();
            t.fromTo(o.value, {
                y: "-5%"
            }, {
                y: "5%",
                ease: "none"
            }),
            _.value = Z.create({
                trigger: o.value,
                animation: t,
                start: () => "top bottom",
                end: () => `bottom+=${window.innerHeight} bottom`,
                scrub: !0
            })
        }
        ;
        return G( () => {
            K()
        }
        ),
        J(async () => {
            _.value && (await O(1500),
            _.value.kill())
        }
        ),
        (t, s) => {
            var m, r, l, p, g, d, u, f, h, v, b, k, w, B, y, C, S, T, I, $, M, R, A, D, H, N;
            const i = j
              , L = q
              , U = nt
              , W = tt;
            return et(),
            P("div", st, [e("div", at, [s[1] || (s[1] = e("div", {
                class: "meetings__bar"
            }, [e("span")], -1)), n(i, {
                src: (l = (r = (m = t.cta) == null ? void 0 : m.content) == null ? void 0 : r.backdrop_asset) == null ? void 0 : l.filename,
                alt: (d = (g = (p = t.cta) == null ? void 0 : p.content) == null ? void 0 : g.backdrop_asset) == null ? void 0 : d.alt,
                class: "meetings__bg",
                width: 1920
            }, null, 8, ["src", "alt"]), e("div", _t, [e("div", {
                ref_key: "imgRef",
                ref: o,
                class: "meetings__manager"
            }, [n(i, {
                src: (b = (v = (h = (f = (u = t.cta) == null ? void 0 : u.content) == null ? void 0 : f.manager) == null ? void 0 : h.content) == null ? void 0 : v.masked_photo) == null ? void 0 : b.filename,
                alt: (C = (y = (B = (w = (k = t.cta) == null ? void 0 : k.content) == null ? void 0 : w.manager) == null ? void 0 : B.content) == null ? void 0 : y.masked_photo) == null ? void 0 : C.alt,
                width: 536,
                height: 793
            }, null, 8, ["src", "alt"])], 512)]), e("div", ct, [n(L, {
                class: "meetings__logo"
            }), e("h2", it, a((T = (S = t.cta) == null ? void 0 : S.content) == null ? void 0 : T.title), 1), e("div", mt, [e("h3", rt, a((R = (M = ($ = (I = t.cta) == null ? void 0 : I.content) == null ? void 0 : $.manager) == null ? void 0 : M.content) == null ? void 0 : R.name), 1), e("p", lt, a((N = (H = (D = (A = t.cta) == null ? void 0 : A.content) == null ? void 0 : D.manager) == null ? void 0 : H.content) == null ? void 0 : N.position), 1)]), n(W, {
                type: "button",
                class: "meetings__btn",
                onClick: s[0] || (s[0] = c => X(F)(t.page + " Book the meetings"))
            }, {
                default: Q( () => {
                    var c, V;
                    return [e("span", null, a((V = (c = t.cta) == null ? void 0 : c.content) == null ? void 0 : V.button_text), 1), n(U)]
                }
                ),
                _: 1
            })])])])
        }
    }
})
  , ft = ot(pt, [["__scopeId", "data-v-df56d27b"]]);
export {ft as _};
