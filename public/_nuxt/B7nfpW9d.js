import {u as bt, b as vt, e as ft, d as G, r as z, c as _, o as n, f as s, g as S, a as V, t as u, F as C, h as E, i as g, j as I, _ as Q, n as yt, k as x, w as $t, l as ht, m as kt, p as wt, q as gt, s as Ct, v as St, x as It, y as Mt, z as Vt, A as Bt, B as Pt} from "./C5bBxmVo.js";
import {_ as Tt} from "./B0G1e5qc.js";
import {_ as Dt} from "./BZ6ROOaS.js";
import {u as R, _ as Ht, a as Nt} from "./COL7POeB.js";
import {_ as jt} from "./Dt8wSEj9.js";
import {_ as At} from "./C_jxTAov.js";
import {i as Ft, a as zt} from "./CiqAVqVC.js";
import {_ as U} from "./DuVedMQ2.js";
import {u as Et} from "./DsoqDRZR.js";
import {F as Gt, C as Lt} from "./DpMqWF5x.js";
import "./CdJ2rVPI.js";
import "./B_pKfgL8.js";
const Ot = async () => {
    var c;
    const y = bt("about", () => null);
    try {
        if (!y.value) {
            const t = await vt("about");
            y.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return ft((c = y.value) == null ? void 0 : c.id, t => {
        y.value = t
    }
    ),
    {
        story: y
    }
}
  , qt = {
    class: "about-hero__wrapper"
}
  , xt = {
    "data-title": "",
    class: "about-hero__main-title"
}
  , Qt = {
    class: "about-hero__text"
}
  , Rt = {
    class: "about-hero__list"
}
  , Ut = {
    class: "about-hero__number-title"
}
  , Jt = {
    class: "about-hero__number-text"
}
  , Kt = {
    class: "about-hero__plus"
}
  , Wt = G({
    __name: "HeroSection",
    props: {
        content: {}
    },
    setup(y) {
        const c = z(null);
        return R(c),
        (t, p) => {
            var h, l, m, b, f, r, $, k, L, a, O, B, P, T, D, H, N, j, A, w, q, F, J, K, W, X, Y, Z, tt, et, st, nt, ot, at, _t, ct, lt, it, rt, ut, pt, dt;
            const d = Dt
              , i = Nt
              , v = jt
              , e = Ht
              , o = At;
            return n(),
            _("section", {
                ref_key: "$el",
                ref: c,
                class: "about-hero container"
            }, [s("div", qt, [s("h1", xt, u((h = t.content) == null ? void 0 : h.title), 1), (b = (m = (l = t.content) == null ? void 0 : l.asset) == null ? void 0 : m[0]) != null && b.embed_link ? (n(),
            S(d, {
                key: 0,
                "data-full-image": "",
                width: ($ = (r = (f = t.content) == null ? void 0 : f.asset) == null ? void 0 : r[0]) == null ? void 0 : $.embed_width,
                height: (a = (L = (k = t.content) == null ? void 0 : k.asset) == null ? void 0 : L[0]) == null ? void 0 : a.embed_height,
                url: (P = (B = (O = t.content) == null ? void 0 : O.asset) == null ? void 0 : B[0]) == null ? void 0 : P.embed_link,
                controls: "0",
                class: "about-hero__main-img about-hero__main-img--embed"
            }, null, 8, ["width", "height", "url"])) : (n(),
            _(C, {
                key: 1
            }, [("isPicture"in t ? t.isPicture : g(Ft))((N = (H = (D = (T = t.content) == null ? void 0 : T.asset) == null ? void 0 : D[0]) == null ? void 0 : H.asset) == null ? void 0 : N.filename) ? (n(),
            S(i, {
                key: 0,
                "data-full-image": "",
                src: (w = (A = (j = t.content) == null ? void 0 : j.asset) == null ? void 0 : A[0].asset) == null ? void 0 : w.filename,
                alt: (J = (F = (q = t.content) == null ? void 0 : q.asset) == null ? void 0 : F[0].asset) == null ? void 0 : J.alt,
                class: "about-hero__main-img",
                width: 1920
            }, null, 8, ["src", "alt"])) : E("", !0), ("isVideo"in t ? t.isVideo : g(zt))((Y = (X = (W = (K = t.content) == null ? void 0 : K.asset) == null ? void 0 : W[0]) == null ? void 0 : X.asset) == null ? void 0 : Y.filename) ? (n(),
            S(v, {
                key: 1,
                url: (et = (tt = (Z = t.content) == null ? void 0 : Z.asset) == null ? void 0 : tt[0].asset) == null ? void 0 : et.filename,
                class: "about-hero__main-img",
                "data-full-image": "",
                "is-playing": !0
            }, null, 8, ["url"])) : E("", !0)], 64)), s("div", Qt, u((st = t.content) == null ? void 0 : st.text), 1), s("ul", Rt, [(n(!0),
            _(C, null, I((nt = t.content) == null ? void 0 : nt.numbers, (M, mt) => (n(),
            _("li", {
                key: mt,
                class: "about-hero__item"
            }, [s("h3", Ut, u(M == null ? void 0 : M.number), 1), s("p", Jt, u(M == null ? void 0 : M.text), 1), s("span", Kt, [V(e)])]))), 128))]), V(o, {
                asset: (ct = (_t = (at = (ot = t.content) == null ? void 0 : ot.interview) == null ? void 0 : at.content) == null ? void 0 : _t.interview) == null ? void 0 : ct[0],
                title: (rt = (it = (lt = t.content) == null ? void 0 : lt.interview) == null ? void 0 : it.content) == null ? void 0 : rt.interview_title,
                description: (dt = (pt = (ut = t.content) == null ? void 0 : ut.interview) == null ? void 0 : pt.content) == null ? void 0 : dt.interview_position
            }, null, 8, ["asset", "title", "description"])])], 512)
        }
    }
})
  , Xt = Q(Wt, [["__scopeId", "data-v-4276ea80"]])
  , Yt = {
    class: "ab-mission__wrapper"
}
  , Zt = {
    class: "ab-mission__subtitle"
}
  , te = {
    class: "ab-mission__title-wrapper"
}
  , ee = {
    class: "ab-mission__title"
}
  , se = G({
    __name: "MissionSection",
    props: {
        content: {}
    },
    setup(y) {
        const c = z(null);
        return R(c),
        (t, p) => {
            var i, v, e;
            const d = U;
            return n(),
            _("section", {
                ref_key: "$el",
                ref: c,
                class: "ab-mission container"
            }, [s("div", Yt, [s("p", Zt, u((i = t.content) == null ? void 0 : i.subtitle), 1), s("div", te, [(n(!0),
            _(C, null, I((v = t.content) == null ? void 0 : v.assets, (o, h) => (n(),
            S(d, {
                key: h,
                src: o == null ? void 0 : o.filename,
                alt: o == null ? void 0 : o.alt,
                class: "app-projects__img"
            }, null, 8, ["src", "alt"]))), 128)), s("h2", ee, u((e = t.content) == null ? void 0 : e.title), 1)])])], 512)
        }
    }
})
  , ne = Q(se, [["__scopeId", "data-v-11dbc277"]])
  , oe = {
    class: "ab-history container"
}
  , ae = {
    class: "ab-history__wrapper"
}
  , _e = {
    class: "ab-history__title"
}
  , ce = {
    class: "ab-history__content"
}
  , le = {
    class: "ab-history__text"
}
  , ie = {
    class: "ab-history__list"
}
  , re = {
    class: "ab-history__img-wrapper"
}
  , ue = {
    class: "ab-history__about-wrapper"
}
  , pe = {
    class: "ab-history__about"
}
  , de = {
    class: "ab-history__year"
}
  , he = {
    class: "ab-history__description"
}
  , me = G({
    __name: "HistorySection",
    props: {
        content: {}
    },
    setup(y) {
        return (c, t) => {
            var d, i, v;
            const p = U;
            return n(),
            _("section", oe, [s("div", ae, [s("h2", _e, u((d = c.content) == null ? void 0 : d.title), 1), s("div", ce, [s("p", le, u((i = c.content) == null ? void 0 : i.text), 1), s("ul", ie, [(n(!0),
            _(C, null, I((v = c.content) == null ? void 0 : v.items, (e, o) => {
                var h, l;
                return n(),
                _("li", {
                    key: o,
                    class: yt(["ab-history__item", {
                        "ab-history__item--active": o == 0
                    }])
                }, [s("div", re, [V(p, {
                    src: (h = e == null ? void 0 : e.asset) == null ? void 0 : h.filename,
                    alt: (l = e == null ? void 0 : e.asset) == null ? void 0 : l.alt,
                    class: "ab-history__img",
                    width: 900
                }, null, 8, ["src", "alt"])]), s("div", ue, [t[0] || (t[0] = s("div", {
                    class: "ab-history__line"
                }, null, -1)), s("div", pe, [s("h3", de, u(e == null ? void 0 : e.year), 1), s("p", he, u(e == null ? void 0 : e.description), 1)])])], 2)
            }
            ), 128))])])])])
        }
    }
})
  , be = Q(me, [["__scopeId", "data-v-8d091ad5"]])
  , ve = {
    class: "ab-team__wrapper"
}
  , fe = {
    class: "ab-team__title"
}
  , ye = {
    class: "ab-team__group-list"
}
  , $e = {
    class: "ab-team__group-name"
}
  , ke = {
    class: "ab-team__members"
}
  , we = {
    class: "ab-team__member-wrapper"
}
  , ge = {
    class: "ab-team__info"
}
  , Ce = {
    class: "ab-team__name"
}
  , Se = {
    class: "ab-team__pos"
}
  , Ie = {
    key: 0,
    class: "ab-team__links"
}
  , Me = ["href"]
  , Ve = G({
    __name: "TeamSection",
    props: {
        content: {}
    },
    setup(y) {
        const c = y
          , t = z(null);
        R(t);
        const p = x( () => {
            var m;
            const l = (m = c.content) == null ? void 0 : m.team_groups;
            return l == null ? void 0 : l.reduce( (b, f) => {
                var r;
                return b + ((r = f.members) == null ? void 0 : r.length) || 0
            }
            , 0)
        }
        )
          , d = z(24)
          , i = z(d.value);
        function v(l, m) {
            let b = m;
            const f = [];
            for (const r of l) {
                if (b <= 0)
                    break;
                const $ = r.members.slice(0, b);
                $.length > 0 && (f.push({
                    ...r,
                    members: $
                }),
                b -= $.length)
            }
            return f
        }
        const e = x( () => {
            var m;
            const l = (m = c.content) == null ? void 0 : m.team_groups;
            return v(l, i.value)
        }
        )
          , o = () => {
            if (i.value >= p.value) {
                i.value = p.value;
                return
            }
            i.value += d.value
        }
          , h = Et("(max-width: 860px)");
        return $t(h, () => {
            h.value ? (d.value = 8,
            i.value = d.value) : (d.value = 24,
            i.value = d.value)
        }
        ),
        (l, m) => {
            var $;
            const b = U
              , f = kt
              , r = gt;
            return n(),
            _("section", {
                ref_key: "$el",
                ref: t,
                class: "ab-team container"
            }, [s("div", ve, [s("h2", fe, u(($ = l.content) == null ? void 0 : $.title), 1), V(r, null, {
                default: ht( () => [s("ul", ye, [(n(!0),
                _(C, null, I(g(e), (k, L) => (n(),
                _("li", {
                    key: L,
                    class: "ab-team__group"
                }, [s("p", $e, u(k == null ? void 0 : k.group_name), 1), s("div", ke, [(n(!0),
                _(C, null, I(k == null ? void 0 : k.members, (a, O) => {
                    var B, P, T, D, H, N, j, A;
                    return n(),
                    _("div", {
                        key: O,
                        class: "ab-team__member"
                    }, [s("div", we, [V(b, {
                        src: (P = (B = a == null ? void 0 : a.content) == null ? void 0 : B.photo) == null ? void 0 : P.filename,
                        alt: (D = (T = a == null ? void 0 : a.content) == null ? void 0 : T.photo) == null ? void 0 : D.alt,
                        width: 700,
                        class: "ab-team__img"
                    }, null, 8, ["src", "alt"]), s("div", ge, [s("h4", Ce, u((H = a == null ? void 0 : a.content) == null ? void 0 : H.name), 1), s("p", Se, u((N = a == null ? void 0 : a.content) == null ? void 0 : N.position), 1)])]), ((j = a == null ? void 0 : a.content) == null ? void 0 : j.links.length) > 0 ? (n(),
                    _("div", Ie, [(n(!0),
                    _(C, null, I((A = a == null ? void 0 : a.content) == null ? void 0 : A.links, (w, q) => {
                        var F;
                        return n(),
                        _("a", {
                            key: q,
                            class: "ab-team__link underline-reverse",
                            href: (F = w == null ? void 0 : w.link) == null ? void 0 : F.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, u(w == null ? void 0 : w.label), 9, Me)
                    }
                    ), 128))])) : E("", !0)])
                }
                ), 128))])]))), 128))]), g(i) < g(p) ? (n(),
                S(f, {
                    key: 0,
                    type: "button",
                    class: "ab-team__btn",
                    onClick: o
                }, {
                    default: ht( () => m[0] || (m[0] = [wt(" MORE ")])),
                    _: 1
                })) : E("", !0)]),
                _: 1
            })])], 512)
        }
    }
})
  , Be = Q(Ve, [["__scopeId", "data-v-fa64bfc6"]])
  , Pe = {
    key: 1
}
  , qe = G({
    __name: "about",
    async setup(y) {
        let c, t;
        const {story: p} = ([c,t] = Ct( () => Ot()),
        c = await c,
        t(),
        c)
          , d = x( () => {
            var e, o;
            return (o = (e = p == null ? void 0 : p.value) == null ? void 0 : e.content) == null ? void 0 : o.body
        }
        )
          , i = e => ({
            about_hero: Xt,
            company_directions: Lt,
            featured_projects: Gt,
            about_mission: ne,
            about_history: be,
            about_team: Be
        })[e]
          , v = x( () => {
            var o, h, l;
            const e = (h = (o = p == null ? void 0 : p.value) == null ? void 0 : o.content) == null ? void 0 : h.meta[0];
            return e ? {
                title: e.title,
                description: e.description,
                ogImage: (l = e == null ? void 0 : e.image) == null ? void 0 : l.filename
            } : null
        }
        );
        return (e, o) => {
            var b, f;
            const h = Mt
              , l = Tt
              , m = Vt("editable");
            return n(),
            _("div", null, [g(v) ? (n(),
            S(h, St(It({
                key: 0
            }, g(v))), null, 16)) : E("", !0), (n(!0),
            _(C, null, I(g(d), r => (n(),
            _(C, {
                key: r._uid
            }, [i(r.component) ? Bt((n(),
            S(Pt(i(r.component)), {
                key: 0,
                content: r
            }, null, 8, ["content"])), [[m, r]]) : (n(),
            _("div", Pe, [s("p", null, "Unknown component: " + u(r.component), 1)]))], 64))), 128)), V(l, {
                cta: (f = (b = g(p)) == null ? void 0 : b.content) == null ? void 0 : f.cta,
                page: "About"
            }, null, 8, ["cta"])])
        }
    }
});
export {qe as default};
