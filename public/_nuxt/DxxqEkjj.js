import {d as F, c as p, o as i, f as s, F as D, j as T, a as I, t as b, _ as B, r as C, k as M, H, n as U, i as P, h as j, g as V, K as X, l as ne, m as oe, U as O, V as Z, I as ce, W as R, D as q, X as Y, Y as ae, Z as le, u as re, b as ie, e as _e, s as ue, v as de, x as pe, y as fe, z as ve, A as he, B as me} from "./C5bBxmVo.js";
import {_ as we} from "./B0G1e5qc.js";
import {F as ge, C as be} from "./DpMqWF5x.js";
import {_ as z} from "./DuVedMQ2.js";
import {_ as J} from "./B_pKfgL8.js";
import {_ as $e} from "./DYM-f5Yb.js";
import {u as ye, a as ke} from "./Br4VmKNV.js";
import {u as ee, _ as se, a as Se} from "./COL7POeB.js";
import {_ as Ie} from "./C_jxTAov.js";
import {a as Ce, Q as Pe} from "./DqJe5UJ_.js";
import "./DsoqDRZR.js";
import "./CdJ2rVPI.js";
import "./BZ6ROOaS.js";
import "./Dt8wSEj9.js";
const De = {
    class: "cons-diff__mob cons-diff-mob"
}
  , xe = {
    class: "cons-diff-mob__items"
}
  , Ee = {
    class: "cons-diff-mob__item-bg"
}
  , Le = {
    class: "cons-diff-mob__item-title"
}
  , Te = {
    class: "cons-diff-mob__item-text"
}
  , Fe = F({
    __name: "DifferenceSectionMobile",
    props: {
        content: {}
    },
    setup(v) {
        return (o, r) => {
            var d;
            const c = z
              , u = J;
            return i(),
            p("div", De, [s("ul", xe, [(i(!0),
            p(D, null, T((d = o.content) == null ? void 0 : d.difference_gallery, (e, n) => {
                var t, f, h, w;
                return i(),
                p("li", {
                    key: n,
                    class: "cons-diff-mob__item"
                }, [s("div", Ee, [I(c, {
                    src: (t = e == null ? void 0 : e.background_asset) == null ? void 0 : t.filename,
                    alt: (f = e == null ? void 0 : e.background_asset) == null ? void 0 : f.alt,
                    width: 1920,
                    class: "cons-diff-mob__bg"
                }, null, 8, ["src", "alt"]), I(u)]), I(c, {
                    src: (h = e == null ? void 0 : e.asset) == null ? void 0 : h.filename,
                    alt: (w = e == null ? void 0 : e.asset) == null ? void 0 : w.alt,
                    width: 860,
                    class: "cons-diff-mob__img"
                }, null, 8, ["src", "alt"]), s("h3", Le, b(e == null ? void 0 : e.title), 1), s("p", Te, b(e == null ? void 0 : e.text), 1)])
            }
            ), 128))])])
        }
    }
})
  , Ae = B(Fe, [["__scopeId", "data-v-d3be3ce4"]])
  , Me = {
    class: "cons-diff__bgs"
}
  , Be = {
    class: "cons-diff__content"
}
  , Re = {
    class: "cons-diff__texts"
}
  , ze = {
    key: 0,
    class: "cons-diff__items"
}
  , Ne = {
    "data-f-title": "",
    class: "cons-diff__t"
}
  , Ve = {
    "data-f-text": "",
    class: "cons-diff__text"
}
  , We = {
    class: "cons-diff__assets"
}
  , Ye = F({
    __name: "DifferenceSectionDesktop",
    props: {
        content: {}
    },
    setup(v) {
        const o = v
          , r = C(null)
          , c = M( () => {
            var n, t;
            return ((t = (n = o.content) == null ? void 0 : n.difference_gallery) == null ? void 0 : t.length) || 0
        }
        )
          , {throttledNavigate: u, current: d, prev: e} = ye(r, c);
        return H( () => {
            e.value = c.value - 1
        }
        ),
        (n, t) => {
            var y, k, l, m;
            const f = z
              , h = J
              , w = $e;
            return i(),
            p("div", {
                ref_key: "contentRef",
                ref: r,
                class: "cons-diff__slider container"
            }, [s("div", Me, [(i(!0),
            p(D, null, T((y = n.content) == null ? void 0 : y.difference_gallery, (a, $) => {
                var g, _;
                return i(),
                p("div", {
                    key: $,
                    "data-f-bg": "",
                    class: U(["cons-diff__bg-wrapper", {
                        active: $ === P(d),
                        prev: $ === P(e)
                    }])
                }, [I(f, {
                    "data-f-bg-i": "",
                    src: (g = a == null ? void 0 : a.background_asset) == null ? void 0 : g.filename,
                    alt: (_ = a == null ? void 0 : a.background_asset) == null ? void 0 : _.alt,
                    class: "cons-diff__bg",
                    width: 1920
                }, null, 8, ["src", "alt"])], 2)
            }
            ), 128)), I(h, {
                style: {
                    "z-index": "3"
                }
            })]), s("div", Be, [s("div", Re, [(k = n.content) != null && k.difference_gallery ? (i(),
            p("ul", ze, [(i(!0),
            p(D, null, T((l = n.content) == null ? void 0 : l.difference_gallery, a => (i(),
            p("li", {
                key: a._uid,
                class: "cons-diff__item"
            }, [s("h3", Ne, b(a == null ? void 0 : a.title), 1), s("p", Ve, b(a == null ? void 0 : a.text), 1)]))), 128))])) : j("", !0)]), s("div", We, [(i(!0),
            p(D, null, T((m = n.content) == null ? void 0 : m.difference_gallery, (a, $) => {
                var g, _;
                return i(),
                p("div", {
                    key: a._uid,
                    "data-f-img": "",
                    class: U(["cons-diff__img-wrapper", {
                        active: $ === P(d),
                        prev: $ === P(e)
                    }])
                }, [I(f, {
                    "data-f-img-i": "",
                    src: (g = a == null ? void 0 : a.asset) == null ? void 0 : g.filename,
                    alt: (_ = a == null ? void 0 : a.asset) == null ? void 0 : _.alt,
                    class: "cons-diff__img",
                    width: 700
                }, null, 8, ["src", "alt"])], 2)
            }
            ), 128))])]), I(w, {
                onNavigate: P(u)
            }, null, 8, ["onNavigate"])], 512)
        }
    }
})
  , Ue = B(Ye, [["__scopeId", "data-v-12ead964"]])
  , qe = {
    class: "cons-diff"
}
  , He = {
    class: "cons-diff__wrapper"
}
  , je = {
    class: "cons-diff__title-wrapper container"
}
  , Ke = {
    class: "cons-diff__title"
}
  , Oe = F({
    __name: "DifferenceSection",
    props: {
        content: {}
    },
    setup(v) {
        const o = ke("(max-width: 860px)");
        return (r, c) => {
            var e;
            const u = Ae
              , d = Ue;
            return i(),
            p("section", qe, [s("div", He, [s("div", je, [s("h2", Ke, b((e = r.content) == null ? void 0 : e.title), 1)])]), P(o) ? (i(),
            V(u, {
                key: 0,
                content: r.content
            }, null, 8, ["content"])) : (i(),
            V(d, {
                key: 1,
                content: r.content
            }, null, 8, ["content"]))])
        }
    }
})
  , Qe = B(Oe, [["__scopeId", "data-v-f55c96aa"]])
  , Ge = {
    class: "cons-expertise__wrapper"
}
  , Xe = {
    class: "cons-expertise__top"
}
  , Ze = {
    class: "cons-expertise__expert"
}
  , Je = {
    class: "cons-expertise__title"
}
  , es = {
    class: "cons-expertise__description"
}
  , ss = {
    class: "cons-expertise__bottom"
}
  , ts = {
    class: "cons-expertise__bottom-content"
}
  , ns = {
    class: "cons-expertise__subtitle"
}
  , os = {
    class: "cons-expertise__list"
}
  , cs = {
    class: "cons-expertise__number-title"
}
  , as = {
    class: "cons-expertise__number-text"
}
  , ls = {
    class: "cons-expertise__plus"
}
  , rs = F({
    __name: "ExpertiseSection",
    props: {
        content: {}
    },
    setup(v) {
        const o = C(null);
        ee(o);
        const {openFormModal: r} = X();
        return (c, u) => {
            var f, h, w, y, k, l, m, a, $, g, _, S, x, A, N, E, W, K;
            const d = se
              , e = oe
              , n = z
              , t = Ie;
            return i(),
            p("section", {
                ref_key: "$el",
                ref: o,
                class: "cons-expertise container"
            }, [s("div", Ge, [s("div", Xe, [s("div", Ze, [s("h2", Je, b((f = c.content) == null ? void 0 : f.title), 1), s("p", es, b((h = c.content) == null ? void 0 : h.text), 1), I(e, {
                class: "cons-expertise__btn",
                type: "button",
                onClick: u[0] || (u[0] = L => P(r)("Consulting Page"))
            }, {
                default: ne( () => {
                    var L;
                    return [s("span", null, b((L = c.content) == null ? void 0 : L.button_text), 1), I(d)]
                }
                ),
                _: 1
            })]), I(n, {
                class: "cons-expertise__img",
                src: (y = (w = c.content) == null ? void 0 : w.asset) == null ? void 0 : y.filename,
                alt: (l = (k = c.content) == null ? void 0 : k.asset) == null ? void 0 : l.alt,
                width: 700
            }, null, 8, ["src", "alt"])]), s("div", ss, [s("div", ts, [s("p", ns, b((m = c.content) == null ? void 0 : m.numbers_title), 1), s("ul", os, [(i(!0),
            p(D, null, T((a = c.content) == null ? void 0 : a.numbers, (L, te) => (i(),
            p("li", {
                key: te,
                class: "cons-expertise__item"
            }, [s("h3", cs, b(L == null ? void 0 : L.number), 1), s("p", as, b(L == null ? void 0 : L.text), 1), s("span", ls, [I(d)])]))), 128))])]), I(t, {
                asset: (S = (_ = (g = ($ = c.content) == null ? void 0 : $.interview) == null ? void 0 : g.content) == null ? void 0 : _.interview) == null ? void 0 : S[0],
                title: (N = (A = (x = c.content) == null ? void 0 : x.interview) == null ? void 0 : A.content) == null ? void 0 : N.interview_title,
                description: (K = (W = (E = c.content) == null ? void 0 : E.interview) == null ? void 0 : W.content) == null ? void 0 : K.interview_position
            }, null, 8, ["asset", "title", "description"])])])], 512)
        }
    }
})
  , is = B(rs, [["__scopeId", "data-v-56a7997c"]])
  , _s = {
    class: "cons-experts__wrapper"
}
  , us = {
    class: "cons-experts__title"
}
  , ds = {
    class: "cons-experts__content"
}
  , ps = {
    class: "cons-experts__subtitle"
}
  , fs = {
    class: "cons-experts__list"
}
  , vs = {
    class: "cons-experts__item-wrapper"
}
  , hs = {
    class: "cons-experts__info"
}
  , ms = {
    class: "cons-experts__name"
}
  , ws = {
    class: "cons-experts__position"
}
  , gs = {
    key: 0,
    class: "cons-experts__links"
}
  , bs = ["href"]
  , $s = F({
    __name: "ExpertsSection",
    props: {
        content: {}
    },
    setup(v) {
        const o = C(null);
        return ee(o),
        (r, c) => {
            var d, e, n;
            const u = z;
            return i(),
            p("section", {
                ref_key: "$el",
                ref: o,
                class: "cons-experts container"
            }, [s("div", _s, [s("h2", us, b((d = r.content) == null ? void 0 : d.title), 1), s("div", ds, [s("p", ps, b((e = r.content) == null ? void 0 : e.subtitle), 1), s("ul", fs, [(i(!0),
            p(D, null, T((n = r.content) == null ? void 0 : n.experts, (t, f) => {
                var h, w, y, k, l, m, a, $;
                return i(),
                p("li", {
                    key: f,
                    class: "cons-experts__item"
                }, [s("div", vs, [I(u, {
                    class: "cons-experts__img",
                    src: (w = (h = t == null ? void 0 : t.content) == null ? void 0 : h.photo) == null ? void 0 : w.filename,
                    alt: (k = (y = t == null ? void 0 : t.content) == null ? void 0 : y.photo) == null ? void 0 : k.alt,
                    width: 650
                }, null, 8, ["src", "alt"]), s("div", hs, [s("p", ms, b((l = t == null ? void 0 : t.content) == null ? void 0 : l.name), 1), s("p", ws, b((m = t == null ? void 0 : t.content) == null ? void 0 : m.position), 1)])]), ((a = t == null ? void 0 : t.content) == null ? void 0 : a.links.length) > 0 ? (i(),
                p("div", gs, [(i(!0),
                p(D, null, T(($ = t == null ? void 0 : t.content) == null ? void 0 : $.links, (g, _) => {
                    var S;
                    return i(),
                    p("a", {
                        key: _,
                        class: "ab-team__link underline-reverse",
                        href: (S = g == null ? void 0 : g.link) == null ? void 0 : S.url,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, b(g == null ? void 0 : g.label), 9, bs)
                }
                ), 128))])) : j("", !0)])
            }
            ), 128))])])])], 512)
        }
    }
})
  , ys = B($s, [["__scopeId", "data-v-02cb5fe0"]])
  , ks = {
    class: "cons-hero container"
}
  , Ss = {
    class: "cons-hero__wrapper"
}
  , Is = {
    "data-title": "",
    class: "cons-hero__title"
}
  , Cs = F({
    __name: "HeroSection",
    props: {
        content: {}
    },
    setup(v) {
        return (o, r) => {
            var u, d, e, n, t;
            const c = Se;
            return i(),
            p("section", ks, [s("div", Ss, [s("h1", Is, b((u = o.content) == null ? void 0 : u.title), 1), I(c, {
                "data-full-image": "",
                class: "cons-hero__bg",
                alt: (e = (d = o.content) == null ? void 0 : d.asset) == null ? void 0 : e.alt,
                src: (t = (n = o.content) == null ? void 0 : n.asset) == null ? void 0 : t.filename,
                width: 1920,
                preload: ""
            }, null, 8, ["alt", "src"])])])
        }
    }
})
  , Ps = B(Cs, [["__scopeId", "data-v-8a096bc2"]])
  , Ds = (v, o, r=1e3) => {
    const {isFullPage: c} = X()
      , u = C(!1)
      , d = C(1)
      , e = C(1)
      , n = C(!1)
      , t = C(1)
      , f = M( () => O(o));
    let h = null
      , w = null;
    const y = _ => {
        w = _.touches[0].clientY
    }
      , k = () => {
        window.escroll.disabled = !0,
        R().classList.add("full-page"),
        n.value = !0,
        setTimeout( () => {
            n.value = !1
        }
        , 300)
    }
      , l = () => {
        window.escroll.disabled = !1,
        R().classList.remove("full-page")
    }
      , m = () => {
        const _ = d.value + t.value;
        if (_ < 1 || _ > f.value) {
            u.value = !1;
            return
        }
        n.value = !0,
        e.value = d.value,
        d.value = _,
        setTimeout( () => {
            n.value = !1
        }
        , r)
    }
      , a = _ => {
        if (!(n.value || !u.value)) {
            if (_.preventDefault(),
            _ instanceof WheelEvent)
                t.value = _.deltaY > 0 ? 1 : -1;
            else {
                const S = _.touches[0].clientY;
                w - S > 0 ? t.value = 1 : t.value = -1,
                w = null
            }
            m()
        }
    }
      , $ = _ => {
        if (!(n.value || !u.value) && (_.key === "ArrowUp" ? (t.value = -1,
        m()) : _.key === "ArrowDown" && (t.value = 1,
        m()),
        _.key === "Escape")) {
            const S = t.value === 1 ? f.value - 1 : 2
              , x = t.value === 1 ? f.value : 1;
            e.value = S,
            d.value = x,
            u.value = !1,
            n.value = !1
        }
    }
    ;
    Z(u, _ => {
        c.value = _,
        _ ? k() : l()
    }
    );
    const g = () => {
        const _ = O(v);
        if (!_)
            return;
        let S, x;
        h = new IntersectionObserver( ([A]) => {
            A.isIntersecting && A.intersectionRatio > .95 ? (u.value = !0,
            x = A.boundingClientRect.top,
            S = R().scrollTop + x,
            q.to(R(), {
                scrollTo: {
                    y: S,
                    autoKill: !0
                },
                onComplete: () => {
                    window.escroll.state.position = S,
                    window.escroll.state.vsPosition = S
                }
                ,
                duration: .25
            })) : u.value = !1
        }
        ,{
            root: null,
            threshold: [.95]
        }),
        h.observe(_)
    }
    ;
    return H( () => {
        f.value < 2 || (g(),
        window.addEventListener("wheel", a, {
            passive: !1
        }),
        window.addEventListener("keydown", $),
        window.addEventListener("touchstart", y, !1),
        window.addEventListener("touchmove", a, {
            passive: !1
        }))
    }
    ),
    ce( () => {
        u.value = !1,
        h && h.disconnect(),
        window.removeEventListener("wheel", a),
        window.removeEventListener("touchstart", y, !1),
        window.removeEventListener("touchmove", a),
        window.removeEventListener("keydown", $),
        R().classList.remove("full-page")
    }
    ),
    {
        isFullPage: u,
        activePage: d,
        prevPage: e,
        direction: t
    }
}
  , Q = ({tl: v, el: o, offset: r=0}) => v.to(o, {
    scale: 1,
    clipPath: "inset(0% 0 0 0)"
}, r)
  , G = ({tl: v, el: o, inset: r, offset: c=0}) => v.to(o, {
    scale: 1.3,
    clipPath: `inset(${r})`
}, c)
  , xs = ({tl: v, el: o, offset: r=0}) => {
    o && v.to(o, {
        opacity: 1,
        duration: .2,
        overwrite: !0
    }, r)
}
  , Es = ({tl: v, el: o, offset: r=0}) => {
    o && v.to(o, {
        opacity: 0,
        duration: .2
    }, r)
}
  , Ls = (v, o, r) => {
    const c = Y(v)
      , u = Y(r)
      , d = Y(o)
      , {activePage: e, prevPage: n, direction: t} = Ds(c, d)
      , f = C(null)
      , h = C(null)
      , w = C(null)
      , y = () => {
        f.value && f.value.forEach( (l, m) => {
            m > 0 && q.set(l, {
                scale: 1.3,
                clipPath: "inset(100% 0 0 0)"
            })
        }
        )
    }
    ;
    H(async () => {
        var l, m, a;
        await ae(),
        c && (f.value = (l = c.value) == null ? void 0 : l.querySelectorAll("[data-f-asset]"),
        h.value = (m = c.value) == null ? void 0 : m.querySelectorAll("[data-f-text]"),
        w.value = (a = c.value) == null ? void 0 : a.querySelector("[data-f-scroller]"),
        y())
    }
    );
    const k = () => {
        if (!f.value)
            return;
        const l = e.value - 1
          , m = n.value - 1
          , a = h.value
          , $ = f.value[l]
          , g = f.value[m]
          , _ = a[l]
          , S = a[l - 1]
          , x = w.value
          , A = _.offsetTop
          , E = q.timeline({
            defaults: {
                duration: 1.5,
                ease: "power2.out"
            }
        });
        u.value && (E.to(x, {
            y: -A
        }, 0),
        S && Es({
            tl: E,
            el: S,
            offset: .5
        }),
        xs({
            tl: E,
            el: _
        })),
        l > m ? (g && G({
            tl: E,
            el: g,
            inset: "0 0 0 0"
        }),
        Q({
            tl: E,
            el: $
        })) : (Q({
            tl: E,
            el: $
        }),
        g && G({
            tl: E,
            el: g,
            inset: "100% 0 0 0"
        }))
    }
    ;
    return Z(e, () => {
        k()
    }
    ),
    {
        activePage: e,
        prevPage: n,
        direction: t,
        $assets: f,
        $texts: h,
        $scroller: w
    }
}
  , Ts = {
    class: "cons-service"
}
  , Fs = {
    class: "cons-service__wrapper container"
}
  , As = {
    class: "cons-service__top"
}
  , Ms = {
    class: "cons-service__subtitle"
}
  , Bs = {
    class: "cons-service__title"
}
  , Rs = {
    class: "cons-service__block-wrapper"
}
  , zs = {
    ref: "assetsRef",
    class: "cons-service__assets"
}
  , Ns = {
    class: "cons-service__img-wrapper"
}
  , Vs = {
    class: "cons-service__content-mask"
}
  , Ws = {
    "data-f-scroller": "",
    class: "cons-service__content"
}
  , Ys = {
    class: "cons-service__item"
}
  , Us = {
    class: "cons-service__item-wrapper"
}
  , qs = {
    class: "cons-service__info"
}
  , Hs = {
    class: "cons-service__item-title"
}
  , js = {
    class: "cons-service__item-desc"
}
  , Ks = F({
    __name: "ServiceSection",
    props: {
        content: {}
    },
    setup(v) {
        const o = v
          , r = C(null)
          , c = M( () => {
            var e, n;
            return ((n = (e = o == null ? void 0 : o.content) == null ? void 0 : e.service) == null ? void 0 : n.length) || 0
        }
        )
          , u = M( () => window.innerWidth <= 768)
          , {activePage: d} = Ls(r, c, u);
        return (e, n) => {
            var h, w, y, k;
            const t = z
              , f = se;
            return i(),
            p("section", Ts, [s("div", Fs, [s("div", As, [s("p", Ms, b((h = e.content) == null ? void 0 : h.subtitle), 1), s("h2", Bs, b((w = e.content) == null ? void 0 : w.title), 1)]), s("div", {
                ref_key: "contentRef",
                ref: r,
                class: "cons-service__block"
            }, [s("div", Rs, [s("div", zs, [(i(!0),
            p(D, null, T((y = e.content) == null ? void 0 : y.service, (l, m) => {
                var a, $;
                return i(),
                p("div", {
                    key: m,
                    class: "cons-service__image-item"
                }, [s("div", Ns, [I(t, {
                    "data-f-asset": "",
                    src: (a = l == null ? void 0 : l.asset) == null ? void 0 : a.filename,
                    alt: ($ = l == null ? void 0 : l.asset) == null ? void 0 : $.alt,
                    width: 900,
                    class: "cons-service__img"
                }, null, 8, ["src", "alt"])])])
            }
            ), 128))], 512), s("div", Vs, [s("div", Ws, [(i(!0),
            p(D, null, T((k = e.content) == null ? void 0 : k.service, (l, m) => (i(),
            p("div", {
                key: m,
                "data-f-text": "",
                class: U(["cons-service__content-wrapper", m === P(d) - 1 && "cons-service__content-wrapper--active"]),
                style: le({
                    zIndex: m + 1
                })
            }, [s("div", Ys, [n[0] || (n[0] = s("div", {
                class: "cons-service__line"
            }, null, -1)), s("div", Us, [I(f, {
                class: "cons-service__plus"
            }), s("div", qs, [s("h3", Hs, b(l == null ? void 0 : l.text), 1), s("p", js, b(l == null ? void 0 : l.description), 1)])])])], 6))), 128))])])])], 512)])])
        }
    }
})
  , Os = {
    class: "cons-youtube container"
}
  , Qs = {
    class: "cons-youtube__wrapper"
}
  , Gs = F({
    __name: "YoutubeSection",
    props: {
        content: {}
    },
    setup(v) {
        return (o, r) => {
            var u, d, e;
            const c = Ce;
            return i(),
            p("section", Os, [s("div", Qs, [I(c, {
                title: (u = o.content) == null ? void 0 : u.title,
                asset: (d = o.content) == null ? void 0 : d.asset,
                "is-youtube": !0,
                button: (e = o.content) == null ? void 0 : e.subscribe_button[0],
                class: "cons-youtube__videos"
            }, null, 8, ["title", "asset", "button"])])])
        }
    }
})
  , Xs = async () => {
    var o;
    const v = re("consulting", () => null);
    try {
        if (!v.value) {
            const r = await ie("consulting");
            v.value = r.value
        }
    } catch (r) {
        console.log(r)
    }
    return _e((o = v.value) == null ? void 0 : o.id, r => {
        v.value = r
    }
    ),
    {
        story: v
    }
}
  , Zs = {
    key: 1
}
  , pt = F({
    __name: "consulting",
    async setup(v) {
        let o, r;
        const {story: c} = ([o,r] = ue( () => Xs()),
        o = await o,
        r(),
        o)
          , u = M( () => {
            var n, t;
            return (t = (n = c == null ? void 0 : c.value) == null ? void 0 : n.content) == null ? void 0 : t.body
        }
        )
          , d = n => ({
            consulting_hero: Ps,
            consulting_expertise: is,
            consulting_difference: Qe,
            consulting_experts: ys,
            consulting_service: Ks,
            company_directions: be,
            consulting_youtube: Gs,
            consultancy_featured_projects: ge,
            quiz_block: Pe
        })[n]
          , e = M( () => {
            var t, f, h;
            const n = (f = (t = c == null ? void 0 : c.value) == null ? void 0 : t.content) == null ? void 0 : f.meta[0];
            return n ? {
                title: n.title,
                description: n.description,
                ogImage: (h = n == null ? void 0 : n.image) == null ? void 0 : h.filename
            } : null
        }
        );
        return (n, t) => {
            var y, k;
            const f = fe
              , h = we
              , w = ve("editable");
            return i(),
            p("div", null, [P(e) ? (i(),
            V(f, de(pe({
                key: 0
            }, P(e))), null, 16)) : j("", !0), (i(!0),
            p(D, null, T(P(u), l => (i(),
            p(D, {
                key: l._uid
            }, [d(l.component) ? he((i(),
            V(me(d(l.component)), {
                key: 0,
                content: l
            }, null, 8, ["content"])), [[w, l]]) : (i(),
            p("div", Zs, [s("p", null, "Unknown component: " + b(l.component), 1)]))], 64))), 128)), I(h, {
                cta: (k = (y = P(c)) == null ? void 0 : y.content) == null ? void 0 : k.cta,
                page: "Consulting"
            }, null, 8, ["cta"])])
        }
    }
});
export {pt as default};
