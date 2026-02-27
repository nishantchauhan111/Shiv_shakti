console.log("nishant chuahan")
const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./C4JpzQaQ.js", "./C5bBxmVo.js", "./entry.BGmKtkEX.css"]))) => i.map(i => d[i]);
import {d as M, r as C, H as q, I as st, c as E, o as k, n as N, i as p, F as V, j as Y, f as d, _ as D, as as ot, t as $, av as Ie, a as T, D as H, k as Ke, g as Q, R as nt, l as W, p as et, Z as ze, K as Re, V as He, aa as je, v as Be, a9 as Xe, A as Ue, a8 as Ge, ak as Je, s as Ve, W as Ze, u as Qe, b as ts, e as es, L as ss, aw as Ye, ax as os, ay as ns, m as is, a7 as rs, a1 as as, C as ls, az as cs, E as De, aA as J, $ as hs, a4 as We, a0 as us, ar as ds, aB as _s, aC as qe, aD as ps} from "./C5bBxmVo.js";
import {o as vs} from "./DsoqDRZR.js";
import {a as fs, _ as ms} from "./DuVedMQ2.js";
import {u as bs} from "./DdkQzejC.js";
import {u as gs} from "./CdJ2rVPI.js";
const ys = M({
    __name: "AppGrid",
    setup(e) {
        const t = C(!1)
          , n = i => {}
        ;
        return q( () => {
            document.addEventListener("keypress", n)
        }
        ),
        st( () => {
            document.removeEventListener("keypress", n)
        }
        ),
        (i, s) => (k(),
        E("div", {
            class: N(["app-grid container grid", {
                "app-grid--visible": p(t)
            }])
        }, [(k(),
        E(V, null, Y(24, f => d("div", {
            key: f,
            class: "app-grid__col"
        })), 64))], 2))
    }
})
  , ws = D(ys, [["__scopeId", "data-v-60fcb63a"]])
  , xs = ["onClick"]
  , Ss = {
    type: "button",
    class: "lang-switch__item-btn"
}
  , ks = M({
    __name: "LanguageSwitcher",
    setup(e) {
        const {selectedLang: t, languages: n, setLang: i} = ot()
          , s = C(!1)
          , f = C(null);
        vs(f, () => {
            s.value = !1
        }
        );
        const l = () => {
            s.value = !s.value
        }
          , c = async _ => {
            _ !== t.value && (s.value = !1,
            await i(_),
            window.location.reload())
        }
        ;
        return (_, r) => (k(),
        E("div", {
            ref_key: "langSwitcherRef",
            ref: f,
            class: "lang-switch"
        }, [d("button", {
            class: "lang-switch__btn underline-reverse",
            onClick: l
        }, $(p(t).toUpperCase()), 1), d("ul", {
            class: N(["lang-switch__list", p(s) && "lang-switch__list--opened"])
        }, [(k(!0),
        E(V, null, Y(p(n).filter(o => o !== p(t)), (o, u) => (k(),
        E("li", {
            key: u,
            class: "lang-switch__item",
            onClick: v => c(o)
        }, [d("button", Ss, $(o.toUpperCase()), 1)], 8, xs))), 128))], 2)], 512))
    }
})
  , Es = D(ks, [["__scopeId", "data-v-46dca344"]])
  , $s = M({
    __name: "HeaderLogo",
    setup(e) {
        const t = C(null)
          , {init: n} = Ie();
        return q( () => {
            n(t.value)
        }
        ),
        (i, s) => {
            const f = fs;
            return k(),
            E("div", {
                ref_key: "elRef",
                ref: t
            }, [T(f, {
                class: "header__logo"
            })], 512)
        }
    }
})
  , Ts = D($s, [["__scopeId", "data-v-e9e3dd97"]])
  , Ps = {
    class: "navigation"
}
  , Ls = M({
    __name: "Navigation",
    props: {
        links: {}
    },
    emits: ["close"],
    setup(e, {emit: t}) {
        const n = e
          , i = t
          , s = C(null)
          , f = (o, u) => {
            var m;
            const v = o.currentTarget
              , w = v.getBoundingClientRect()
              , S = v.offsetTop - w.height / 2
              , g = ((m = s.value) == null ? void 0 : m.querySelectorAll(".navigation__image-wrapper"))[u];
            g && (H.to(s.value, {
                duration: .5,
                y: S
            }),
            H.fromTo(g, {
                clipPath: "inset(100% 0 0 0)",
                scale: 1.2
            }, {
                clipPath: "inset(0% 0 0 0)",
                duration: .7,
                scale: 1,
                ease: "power2.out"
            }))
        }
          , l = o => {
            var w;
            const v = ((w = s.value) == null ? void 0 : w.querySelectorAll(".navigation__image-wrapper"))[o];
            v && H.to(v, {
                clipPath: "inset(100% 0 0 0)",
                duration: .7,
                scale: 1.2,
                ease: "power2.out"
            })
        }
        ;
        q( () => {
            var u;
            const o = (u = s.value) == null ? void 0 : u.querySelectorAll(".navigation__image-wrapper");
            o != null && o.length && o.forEach(v => {
                H.set(v, {
                    clipPath: "inset(100% 0 0 0)",
                    scale: 1.2
                })
            }
            )
        }
        );
        const {selectedLang: c, defaultLocale: _} = ot()
          , r = Ke( () => {
            var o;
            return (o = n.links) == null ? void 0 : o.map(u => {
                var v;
                return (v = u == null ? void 0 : u.link) != null && v.cached_url.includes("home") ? {
                    ...u,
                    link: {
                        ...u.link,
                        cached_url: c.value === _() ? "/" : "/" + c.value
                    }
                } : u
            }
            )
        }
        );
        return (o, u) => {
            const v = nt
              , w = ms;
            return k(),
            E("nav", Ps, [(k(!0),
            E(V, null, Y(p(r), (S, b) => {
                var g, m;
                return k(),
                Q(v, {
                    key: b,
                    to: `/${(m = (g = S == null ? void 0 : S.link) == null ? void 0 : g.cached_url) == null ? void 0 : m.replace(/^\/+/, "")}`,
                    class: "navigation__link",
                    onClick: u[0] || (u[0] = a => i("close")),
                    onMouseenter: a => f(a, b),
                    onMouseleave: a => l(b)
                }, {
                    default: W( () => [et($(S == null ? void 0 : S.label), 1)]),
                    _: 2
                }, 1032, ["to", "onMouseenter", "onMouseleave"])
            }
            ), 128)), d("div", {
                ref_key: "imagesRef",
                ref: s,
                class: "navigation__images"
            }, [(k(!0),
            E(V, null, Y(o.links, (S, b) => {
                var g, m;
                return k(),
                E("div", {
                    key: b,
                    class: "navigation__image-wrapper",
                    style: ze({
                        zIndex: b
                    })
                }, [T(w, {
                    src: (g = S == null ? void 0 : S.asset) == null ? void 0 : g.filename,
                    alt: (m = S == null ? void 0 : S.asset) == null ? void 0 : m.alt,
                    width: 320
                }, null, 8, ["src", "alt"])], 4)
            }
            ), 128))], 512)])
        }
    }
})
  , Ms = D(Ls, [["__scopeId", "data-v-cf916018"]])
  , Ds = {
    class: "socials"
}
  , Cs = ["href"]
  , As = M({
    __name: "Socials",
    props: {
        socials: {}
    },
    setup(e) {
        return (t, n) => (k(),
        E("ul", Ds, [(k(!0),
        E(V, null, Y(t.socials, (i, s) => {
            var f;
            return k(),
            E("li", {
                key: s,
                class: "socials__item"
            }, [d("a", {
                href: (f = i == null ? void 0 : i.link) == null ? void 0 : f.url,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "socials__link underline-reverse"
            }, $(i == null ? void 0 : i.label), 9, Cs)])
        }
        ), 128))]))
    }
})
  , Os = D(As, [["__scopeId", "data-v-b300a249"]])
  , Is = ["aria-expanded"]
  , Rs = {
    class: "burget-menu__text"
}
  , F = "inset(100% 0 0 0)"
  , j = "inset(0% 0 0 0)"
  , Hs = M({
    __name: "BurgerMenu",
    props: {
        content: {}
    },
    setup(e) {
        const {isMenuOpened: t, isFullPage: n} = Re()
          , i = () => {
            t.value = !t.value
        }
          , s = C(null);
        Ie();
        const f = {
            mode: "out-in",
            css: !1,
            appear: !0,
            onEnter(l, c) {
                const _ = l.querySelectorAll(".navigation__link")
                  , r = l.querySelectorAll(".socials__item")
                  , o = H.timeline({
                    onComplete: c
                });
                o.fromTo(l, {
                    clipPath: F
                }, {
                    clipPath: j,
                    duration: 1
                }),
                o.fromTo(_, {
                    yPercent: 100,
                    clipPath: F
                }, {
                    yPercent: 0,
                    clipPath: j,
                    duration: .7,
                    stagger: .1,
                    ease: "power2.out"
                }, .2),
                o.fromTo(r, {
                    yPercent: 100,
                    clipPath: F
                }, {
                    yPercent: 0,
                    clipPath: j,
                    duration: 1,
                    stagger: .1,
                    ease: "power2.out"
                }, .3)
            },
            onLeave(l, c) {
                const _ = l.querySelectorAll(".navigation__link")
                  , r = l.querySelectorAll(".socials__item")
                  , o = H.timeline({
                    onComplete: c
                });
                o.fromTo(r, {
                    yPercent: 0,
                    clipPath: j
                }, {
                    yPercent: 100,
                    clipPath: F,
                    duration: .3,
                    stagger: .03,
                    ease: "power2.in"
                }),
                o.fromTo(_, {
                    yPercent: 0,
                    clipPath: j
                }, {
                    yPercent: 100,
                    clipPath: F,
                    duration: .7,
                    stagger: .03,
                    ease: "power2.in"
                }, .1),
                o.to(l, {
                    clipPath: F,
                    duration: 1,
                    onComplete: c
                }, .2)
            }
        };
        return He(t, () => {
            if (t.value) {
                window.escroll.disabled = !0;
                return
            } else {
                if (n.value)
                    return;
                window.escroll.disabled = !1
            }
        }
        ),
        (l, c) => {
            var o;
            const _ = Ms
              , r = Os;
            return k(),
            E("div", {
                ref_key: "elRef",
                ref: s,
                class: "burger-menu"
            }, [d("button", {
                type: "button",
                class: "burger-menu__btn",
                "aria-label": "Toggle menu",
                "aria-expanded": p(t),
                onClick: i
            }, [d("span", Rs, $((o = l.content) == null ? void 0 : o.menu_button_text), 1), d("span", {
                class: N(["burger-menu__lines", p(t) && "burger-menu__lines--opened"])
            }, c[0] || (c[0] = [d("span", {
                class: "burger-menu__line"
            }, null, -1), d("span", {
                class: "burger-menu__line"
            }, null, -1)]), 2)], 8, Is), (k(),
            Q(Je, {
                to: "#teleports"
            }, [T(je, Be(Xe(f)), {
                default: W( () => {
                    var u, v;
                    return [Ue(d("div", {
                        class: N(["burger-menu__content", p(t) && "burger-menu__content--opened"])
                    }, [T(_, {
                        links: (u = l.content) == null ? void 0 : u.links,
                        onClose: i
                    }, null, 8, ["links"]), T(r, {
                        socials: (v = l.content) == null ? void 0 : v.socials
                    }, null, 8, ["socials"])], 2), [[Ge, p(t)]])]
                }
                ),
                _: 1
            }, 16)]))], 512)
        }
    }
})
  , Vs = D(Hs, [["__scopeId", "data-v-0e596994"]])
  , Ys = M({
    __name: "AppHeader",
    async setup(e) {
        let t, n;
        const {story: i} = ([t,n] = Ve( () => bs()),
        t = await t,
        n(),
        t)
          , {selectedLang: s, defaultLocale: f} = ot()
          , {isMenuOpened: l} = Re()
          , c = () => {
            l.value = !1
        }
          , _ = C(!0)
          , r = C(!1)
          , o = C(!0);
        He(_, a => {
            a ? document.body.classList.remove("nav-hidden") : document.body.classList.add("nav-hidden")
        }
        );
        const u = () => Ze().classList.contains("full-page") ? !1 : window.escroll ? window.escroll.disabled : !1
          , v = a => {
            _.value !== a && (_.value = a)
        }
          , w = a => {
            o.value !== a && (o.value = a)
        }
          , S = a => {
            if (r.value)
                return;
            const h = document.documentElement.classList.contains("header-disabled");
            a.direction === 1 && !u() && a.position > 0 || h ? (v(!1),
            w(!1)) : (w(!0),
            v(!0))
        }
          , b = a => {
            if (!u() && !o.value && !(window.innerWidth < 560)) {
                if (document.documentElement.classList.contains("header-disabled")) {
                    v(!1),
                    r.value = !1;
                    return
                }
                a.screenY <= 200 ? (v(!0),
                r.value = !0) : (v(!1),
                r.value = !1)
            }
        }
        ;
        q(async () => {
            window.escroll.on(S),
            document.addEventListener("mousemove", b)
        }
        ),
        st( () => {
            document.removeEventListener("mousemove", b)
        }
        );
        const {headerColor: g, $headerRef: m} = gs();
        return (a, h) => {
            var K;
            const y = Es
              , P = Ts
              , A = nt
              , U = Vs;
            return k(),
            E("header", {
                class: N(["header container", `header--${p(g)}`])
            }, [d("div", {
                ref_key: "$headerRef",
                ref: m,
                class: "header__wrapper container"
            }, [T(y), T(A, {
                to: p(s) === p(f)() ? "/" : "/" + p(s),
                class: "header__link",
                "aria-label": "Site logo",
                onClick: c
            }, {
                default: W( () => [T(P)]),
                _: 1
            }, 8, ["to"]), T(U, {
                content: (K = p(i)) == null ? void 0 : K.content
            }, null, 8, ["content"])], 512)], 2)
        }
    }
})
  , Ws = D(Ys, [["__scopeId", "data-v-2703eeef"]])
  , qs = {}
  , Fs = {
    class: "revealer"
};
function Ns(e, t) {
    return k(),
    E("div", Fs)
}
const Ks = D(qs, [["render", Ns], ["__scopeId", "data-v-7aa2fc07"]])
  , zs = async () => {
    var t;
    const e = Qe("components/footer", () => null);
    try {
        if (!e.value) {
            const n = await ts("components/footer");
            e.value = n.value
        }
    } catch (n) {
        console.log(n)
    }
    return es((t = e.value) == null ? void 0 : t.id, n => {
        e.value = n
    }
    ),
    {
        story: e
    }
}
  , js = {
    class: "footer container"
}
  , Bs = {
    class: "footer__wrapper"
}
  , Xs = {
    class: "footer__content"
}
  , Us = {
    class: "footer__list"
}
  , Gs = {
    class: "footer__item"
}
  , Js = {
    class: "footer__label"
}
  , Zs = {
    class: "footer__text"
}
  , Qs = {
    class: "footer__item"
}
  , to = {
    class: "footer__label"
}
  , eo = ["href"]
  , so = {
    class: "footer__list-wrapper"
}
  , oo = {
    class: "footer__list"
}
  , no = {
    class: "footer__item"
}
  , io = {
    class: "footer__label"
}
  , ro = ["href"]
  , ao = {
    class: "footer__item"
}
  , lo = {
    class: "footer__label"
}
  , co = ["href"]
  , ho = {
    class: "footer__socials"
}
  , uo = {
    class: "footer__label"
}
  , _o = ["href"]
  , po = {
    class: "footer__title"
}
  , vo = {
    key: 1
}
  , fo = {
    class: "footer__bottom"
}
  , mo = {
    class: "footer__small-text"
}
  , bo = ["href"]
  , go = M({
    __name: "AppFooter",
    async setup(e) {
        let t, n;
        const {story: i} = ([t,n] = Ve( () => zs()),
        t = await t,
        n(),
        t)
          , {submitHandler: s, isFetching: f} = ss("Footer")
          , l = C({
            email: {
                value: "",
                error: !1
            }
        })
          , c = async () => {
            l.value.email.error || !l.value.email.value || (await s(l.value),
            l.value.email.value = "")
        }
        ;
        return (_, r) => {
            var b, g, m, a, h, y, P, A, U, K, at, lt, ct, ht, ut, dt, _t, pt, vt, ft, mt, bt, gt, yt, wt, xt, St, kt, Et, $t, Tt, Pt, Lt, Mt, Dt, Ct, At, Ot, It, Rt, Ht, Vt, Yt, Wt, qt, Ft, Nt, Kt, zt, jt, Bt, Xt, Ut, Gt, Jt, Zt, Qt, te, ee, se, oe, ne, ie, re, ae, le, ce, he, ue, de, _e, pe, ve, fe, me, be, ge, ye, we, xe, Se, ke, Ee, $e, Te, Pe, Le, Me;
            const o = os
              , u = rs
              , v = as
              , w = is
              , S = nt;
            return k(),
            E("footer", js, [d("div", Bs, [d("div", Xs, [d("ul", Us, [d("li", Gs, [d("h3", Js, $((h = (a = (m = (g = (b = p(i)) == null ? void 0 : b.content) == null ? void 0 : g.contacts) == null ? void 0 : m.content) == null ? void 0 : a.items[0]) == null ? void 0 : h.title) + ": ", 1), d("p", Zs, $((at = (K = (U = (A = (P = (y = p(i)) == null ? void 0 : y.content) == null ? void 0 : P.contacts) == null ? void 0 : A.content) == null ? void 0 : U.items[0]) == null ? void 0 : K.item[0]) == null ? void 0 : at.label), 1)]), d("li", Qs, [d("h3", to, $((dt = (ut = (ht = (ct = (lt = p(i)) == null ? void 0 : lt.content) == null ? void 0 : ct.contacts) == null ? void 0 : ht.content) == null ? void 0 : ut.items[1]) == null ? void 0 : dt.title), 1), d("a", {
                href: (gt = (bt = (mt = (ft = (vt = (pt = (_t = p(i)) == null ? void 0 : _t.content) == null ? void 0 : pt.contacts) == null ? void 0 : vt.content) == null ? void 0 : ft.items[1]) == null ? void 0 : mt.item[0]) == null ? void 0 : bt.link) == null ? void 0 : gt.url,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "footer__text underline-reverse"
            }, $((Et = (kt = (St = (xt = (wt = (yt = p(i)) == null ? void 0 : yt.content) == null ? void 0 : wt.contacts) == null ? void 0 : xt.content) == null ? void 0 : St.items[1]) == null ? void 0 : kt.item[0]) == null ? void 0 : Et.label), 9, eo)])]), d("div", so, [d("ul", oo, [d("li", no, [d("h3", io, $((Mt = (Lt = (Pt = (Tt = ($t = p(i)) == null ? void 0 : $t.content) == null ? void 0 : Tt.contacts) == null ? void 0 : Pt.content) == null ? void 0 : Lt.items[2]) == null ? void 0 : Mt.title), 1), d("a", {
                href: "mailto:" + ((Ht = (Rt = (It = (Ot = (At = (Ct = (Dt = p(i)) == null ? void 0 : Dt.content) == null ? void 0 : Ct.contacts) == null ? void 0 : At.content) == null ? void 0 : Ot.items[2]) == null ? void 0 : It.item[0]) == null ? void 0 : Rt.link) == null ? void 0 : Ht.url),
                target: "_blank",
                class: "footer__text underline-reverse"
            }, $((Nt = (Ft = (qt = (Wt = (Yt = (Vt = p(i)) == null ? void 0 : Vt.content) == null ? void 0 : Yt.contacts) == null ? void 0 : Wt.content) == null ? void 0 : qt.items[2]) == null ? void 0 : Ft.item[0]) == null ? void 0 : Nt.label), 9, ro)]), d("li", ao, [d("h3", lo, $((Xt = (Bt = (jt = (zt = (Kt = p(i)) == null ? void 0 : Kt.content) == null ? void 0 : zt.contacts) == null ? void 0 : jt.content) == null ? void 0 : Bt.items[3]) == null ? void 0 : Xt.title), 1), d("a", {
                href: "tel:" + ((te = (Qt = (Zt = (Jt = (Gt = (Ut = p(i)) == null ? void 0 : Ut.content) == null ? void 0 : Gt.contacts) == null ? void 0 : Jt.content) == null ? void 0 : Zt.items[3]) == null ? void 0 : Qt.item[0]) == null ? void 0 : te.label),
                class: "footer__text underline-reverse"
            }, $((re = (ie = (ne = (oe = (se = (ee = p(i)) == null ? void 0 : ee.content) == null ? void 0 : se.contacts) == null ? void 0 : oe.content) == null ? void 0 : ne.items[3]) == null ? void 0 : ie.item[0]) == null ? void 0 : re.label), 9, co)])]), d("div", ho, [d("h3", uo, $((ue = (he = (ce = (le = (ae = p(i)) == null ? void 0 : ae.content) == null ? void 0 : le.contacts) == null ? void 0 : ce.content) == null ? void 0 : he.items[4]) == null ? void 0 : ue.title) + ": ", 1), (k(!0),
            E(V, null, Y((ve = (pe = (_e = (de = p(i)) == null ? void 0 : de.content) == null ? void 0 : _e.contacts) == null ? void 0 : pe.content) == null ? void 0 : ve.items[4].item, (L, I) => {
                var z;
                return k(),
                E("a", {
                    key: I,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: (z = L == null ? void 0 : L.link) == null ? void 0 : z.url,
                    class: "footer__text underline-reverse"
                }, $(L == null ? void 0 : L.label), 9, _o)
            }
            ), 128))])]), d("form", {
                class: "footer__form",
                novalidate: "",
                onSubmit: Ye(c, ["prevent"])
            }, [d("legend", po, $((me = (fe = p(i)) == null ? void 0 : fe.content) == null ? void 0 : me.newsletter_title), 1), T(o, {
                id: "subscribe-email",
                modelValue: p(l).email.value,
                "onUpdate:modelValue": r[0] || (r[0] = L => p(l).email.value = L),
                errors: p(l).email.error,
                "onUpdate:errors": r[1] || (r[1] = L => p(l).email.error = L),
                value: p(l).email.value,
                class: "footer__input",
                name: "email",
                type: "email",
                placeholder: "YOUR EMAIL",
                required: !0,
                error: !0,
                validators: [p(ns).email("Please enter a valid email address")]
            }, null, 8, ["modelValue", "errors", "value", "validators"]), T(w, {
                type: "submit",
                class: "footer__form-btn",
                disabled: p(f)
            }, {
                default: W( () => {
                    var L, I;
                    return [p(f) ? (k(),
                    Q(u, {
                        key: 0
                    })) : (k(),
                    E("span", vo, $((I = (L = p(i)) == null ? void 0 : L.content) == null ? void 0 : I.button), 1)), T(v)]
                }
                ),
                _: 1
            }, 8, ["disabled"])], 32)]), d("div", fo, [r[2] || (r[2] = d("p", {
                class: "footer__small-text"
            }, "SID Thailand", -1)), r[3] || (r[3] = d("p", {
                class: "footer__small-text"
            }, "ALL RIGHTS RESERVED", -1)), T(S, {
                to: `/${(we = (ye = (ge = (be = p(i)) == null ? void 0 : be.content) == null ? void 0 : ge.privacy_policy_link[0]) == null ? void 0 : ye.link) == null ? void 0 : we.cached_url}`,
                class: "footer__small-text footer__small-text--link underline-reverse"
            }, {
                default: W( () => {
                    var L, I, z;
                    return [et($((z = (I = (L = p(i)) == null ? void 0 : L.content) == null ? void 0 : I.privacy_policy_link[0]) == null ? void 0 : z.label), 1)]
                }
                ),
                _: 1
            }, 8, ["to"]), d("p", mo, [et($((Se = (xe = p(i)) == null ? void 0 : xe.content) == null ? void 0 : Se.made_by_text) + " ", 1), d("a", {
                href: (Te = ($e = (Ee = (ke = p(i)) == null ? void 0 : ke.content) == null ? void 0 : Ee.designer[0]) == null ? void 0 : $e.link) == null ? void 0 : Te.url,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "footer__small-text-link footer__small-text--link underline-reverse"
            }, $((Me = (Le = (Pe = p(i)) == null ? void 0 : Pe.content) == null ? void 0 : Le.designer[0]) == null ? void 0 : Me.label), 9, bo)])])])])
        }
    }
})
  , yo = D(go, [["__scopeId", "data-v-6c725200"]]);
var Z = {
    exports: {}
}, wo = Z.exports, Ce;
function xo() {
    return Ce || (Ce = 1,
    function(e, t) {
        (function(n, i) {
            e.exports = i()
        }
        )(wo, function() {
            var n = 0;
            function i(b) {
                return "__private_" + n++ + "_" + b
            }
            function s(b, g) {
                if (!Object.prototype.hasOwnProperty.call(b, g))
                    throw new TypeError("attempted to use private field on non-instance");
                return b
            }
            function f() {}
            f.prototype = {
                on: function(b, g, m) {
                    var a = this.e || (this.e = {});
                    return (a[b] || (a[b] = [])).push({
                        fn: g,
                        ctx: m
                    }),
                    this
                },
                once: function(b, g, m) {
                    var a = this;
                    function h() {
                        a.off(b, h),
                        g.apply(m, arguments)
                    }
                    return h._ = g,
                    this.on(b, h, m)
                },
                emit: function(b) {
                    for (var g = [].slice.call(arguments, 1), m = ((this.e || (this.e = {}))[b] || []).slice(), a = 0, h = m.length; a < h; a++)
                        m[a].fn.apply(m[a].ctx, g);
                    return this
                },
                off: function(b, g) {
                    var m = this.e || (this.e = {})
                      , a = m[b]
                      , h = [];
                    if (a && g)
                        for (var y = 0, P = a.length; y < P; y++)
                            a[y].fn !== g && a[y].fn._ !== g && h.push(a[y]);
                    return h.length ? m[b] = h : delete m[b],
                    this
                }
            };
            var l = f;
            l.TinyEmitter = f;
            var c, _ = "virtualscroll", r = i("options"), o = i("el"), u = i("emitter"), v = i("event"), w = i("touchStart"), S = i("bodyTouchAction");
            return function() {
                function b(m) {
                    var a = this;
                    Object.defineProperty(this, r, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, o, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, u, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, v, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, w, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, S, {
                        writable: !0,
                        value: void 0
                    }),
                    this._onWheel = function(h) {
                        var y = s(a, r)[r]
                          , P = s(a, v)[v];
                        P.deltaX = h.wheelDeltaX || -1 * h.deltaX,
                        P.deltaY = h.wheelDeltaY || -1 * h.deltaY,
                        c.isFirefox && h.deltaMode === 1 && (P.deltaX *= y.firefoxMultiplier,
                        P.deltaY *= y.firefoxMultiplier),
                        P.deltaX *= y.mouseMultiplier,
                        P.deltaY *= y.mouseMultiplier,
                        a._notify(h)
                    }
                    ,
                    this._onMouseWheel = function(h) {
                        var y = s(a, v)[v];
                        y.deltaX = h.wheelDeltaX ? h.wheelDeltaX : 0,
                        y.deltaY = h.wheelDeltaY ? h.wheelDeltaY : h.wheelDelta,
                        a._notify(h)
                    }
                    ,
                    this._onTouchStart = function(h) {
                        var y = h.targetTouches ? h.targetTouches[0] : h;
                        s(a, w)[w].x = y.pageX,
                        s(a, w)[w].y = y.pageY
                    }
                    ,
                    this._onTouchMove = function(h) {
                        var y = s(a, r)[r];
                        y.preventTouch && !h.target.classList.contains(y.unpreventTouchClass) && h.preventDefault();
                        var P = s(a, v)[v]
                          , A = h.targetTouches ? h.targetTouches[0] : h;
                        P.deltaX = (A.pageX - s(a, w)[w].x) * y.touchMultiplier,
                        P.deltaY = (A.pageY - s(a, w)[w].y) * y.touchMultiplier,
                        s(a, w)[w].x = A.pageX,
                        s(a, w)[w].y = A.pageY,
                        a._notify(h)
                    }
                    ,
                    this._onKeyDown = function(h) {
                        var y = s(a, v)[v];
                        y.deltaX = y.deltaY = 0;
                        var P = window.innerHeight - 40;
                        switch (h.keyCode) {
                        case 37:
                        case 38:
                            y.deltaY = s(a, r)[r].keyStep;
                            break;
                        case 39:
                        case 40:
                            y.deltaY = -s(a, r)[r].keyStep;
                            break;
                        case 32:
                            y.deltaY = P * (h.shiftKey ? 1 : -1);
                            break;
                        default:
                            return
                        }
                        a._notify(h)
                    }
                    ,
                    s(this, o)[o] = window,
                    m && m.el && (s(this, o)[o] = m.el,
                    delete m.el),
                    c || (c = {
                        hasWheelEvent: "onwheel"in document,
                        hasMouseWheelEvent: "onmousewheel"in document,
                        hasTouch: "ontouchstart"in document,
                        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                        hasPointer: !!window.navigator.msPointerEnabled,
                        hasKeyDown: "onkeydown"in document,
                        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                    }),
                    s(this, r)[r] = Object.assign({
                        mouseMultiplier: 1,
                        touchMultiplier: 2,
                        firefoxMultiplier: 15,
                        keyStep: 120,
                        preventTouch: !1,
                        unpreventTouchClass: "vs-touchmove-allowed",
                        useKeyboard: !0,
                        useTouch: !0
                    }, m),
                    s(this, u)[u] = new l,
                    s(this, v)[v] = {
                        y: 0,
                        x: 0,
                        deltaX: 0,
                        deltaY: 0
                    },
                    s(this, w)[w] = {
                        x: null,
                        y: null
                    },
                    s(this, S)[S] = null,
                    s(this, r)[r].passive !== void 0 && (this.listenerOptions = {
                        passive: s(this, r)[r].passive
                    })
                }
                var g = b.prototype;
                return g._notify = function(m) {
                    var a = s(this, v)[v];
                    a.x += a.deltaX,
                    a.y += a.deltaY,
                    s(this, u)[u].emit(_, {
                        x: a.x,
                        y: a.y,
                        deltaX: a.deltaX,
                        deltaY: a.deltaY,
                        originalEvent: m
                    })
                }
                ,
                g._bind = function() {
                    c.hasWheelEvent && s(this, o)[o].addEventListener("wheel", this._onWheel, this.listenerOptions),
                    c.hasMouseWheelEvent && s(this, o)[o].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                    c.hasTouch && s(this, r)[r].useTouch && (s(this, o)[o].addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
                    s(this, o)[o].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                    c.hasPointer && c.hasTouchWin && (s(this, S)[S] = document.body.style.msTouchAction,
                    document.body.style.msTouchAction = "none",
                    s(this, o)[o].addEventListener("MSPointerDown", this._onTouchStart, !0),
                    s(this, o)[o].addEventListener("MSPointerMove", this._onTouchMove, !0)),
                    c.hasKeyDown && s(this, r)[r].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
                }
                ,
                g._unbind = function() {
                    c.hasWheelEvent && s(this, o)[o].removeEventListener("wheel", this._onWheel),
                    c.hasMouseWheelEvent && s(this, o)[o].removeEventListener("mousewheel", this._onMouseWheel),
                    c.hasTouch && (s(this, o)[o].removeEventListener("touchstart", this._onTouchStart),
                    s(this, o)[o].removeEventListener("touchmove", this._onTouchMove)),
                    c.hasPointer && c.hasTouchWin && (document.body.style.msTouchAction = s(this, S)[S],
                    s(this, o)[o].removeEventListener("MSPointerDown", this._onTouchStart, !0),
                    s(this, o)[o].removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                    c.hasKeyDown && s(this, r)[r].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
                }
                ,
                g.on = function(m, a) {
                    s(this, u)[u].on(_, m, a);
                    var h = s(this, u)[u].e;
                    h && h[_] && h[_].length === 1 && this._bind()
                }
                ,
                g.off = function(m, a) {
                    s(this, u)[u].off(_, m, a);
                    var h = s(this, u)[u].e;
                    (!h[_] || h[_].length <= 0) && this._unbind()
                }
                ,
                g.destroy = function() {
                    s(this, u)[u].off(),
                    this._unbind()
                }
                ,
                b
            }()
        })
    }(Z)),
    Z.exports
}
var So = xo();
const ko = ls(So);
var Eo = Object.defineProperty
  , $o = (e, t, n) => t in e ? Eo(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , x = (e, t, n) => $o(e, typeof t != "symbol" ? t + "" : t, n);
function Ae(e) {
    return e !== null && typeof e == "object" && "constructor"in e && e.constructor === Object
}
function it(e={}, t={}) {
    Object.keys(t).forEach(n => {
        typeof e[n] > "u" ? e[n] = t[n] : Ae(t[n]) && Ae(e[n]) && Object.keys(t[n]).length > 0 && it(e[n], t[n])
    }
    )
}
const Fe = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function X() {
    const e = typeof document < "u" ? document : {};
    return it(e, Fe),
    e
}
const To = {
    document: Fe,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
        null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function rt() {
    const e = typeof window < "u" ? window : {};
    return it(e, To),
    e
}
function Po(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function G(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Ne = {
    exports: {}
};
(function(e, t) {
    (function(n) {
        e.exports = n()
    }
    )(function() {
        return function n(i, s, f) {
            function l(r, o) {
                if (!s[r]) {
                    if (!i[r]) {
                        var u = typeof G == "function" && G;
                        if (!o && u)
                            return u(r, !0);
                        if (c)
                            return c(r, !0);
                        var v = new Error("Cannot find module '" + r + "'");
                        throw v.code = "MODULE_NOT_FOUND",
                        v
                    }
                    var w = s[r] = {
                        exports: {}
                    };
                    i[r][0].call(w.exports, function(S) {
                        var b = i[r][1][S];
                        return l(b || S)
                    }, w, w.exports, n, i, s, f)
                }
                return s[r].exports
            }
            for (var c = typeof G == "function" && G, _ = 0; _ < f.length; _++)
                l(f[_]);
            return l
        }({
            1: [function(n, i, s) {
                function f() {}
                f.prototype = {
                    on: function(l, c, _) {
                        var r = this.e || (this.e = {});
                        return (r[l] || (r[l] = [])).push({
                            fn: c,
                            ctx: _
                        }),
                        this
                    },
                    once: function(l, c, _) {
                        var r = this;
                        function o() {
                            r.off(l, o),
                            c.apply(_, arguments)
                        }
                        return o._ = c,
                        this.on(l, o, _)
                    },
                    emit: function(l) {
                        var c = [].slice.call(arguments, 1)
                          , _ = ((this.e || (this.e = {}))[l] || []).slice()
                          , r = 0
                          , o = _.length;
                        for (r; r < o; r++)
                            _[r].fn.apply(_[r].ctx, c);
                        return this
                    },
                    off: function(l, c) {
                        var _ = this.e || (this.e = {})
                          , r = _[l]
                          , o = [];
                        if (r && c)
                            for (var u = 0, v = r.length; u < v; u++)
                                r[u].fn !== c && r[u].fn._ !== c && o.push(r[u]);
                        return o.length ? _[l] = o : delete _[l],
                        this
                    }
                },
                i.exports = f,
                i.exports.TinyEmitter = f
            }
            , {}]
        }, {}, [1])(1)
    })
}
)(Ne);
var Lo = Ne.exports;
const Mo = Po(Lo)
  , Do = X()
  , Co = e => ({
    el: (e == null ? void 0 : e.el) ?? Do.documentElement,
    touchMultiplier: (e == null ? void 0 : e.touchMultiplier) ?? 3.8,
    firefoxMultiplier: (e == null ? void 0 : e.firefoxMultiplier) ?? 40,
    preventTouch: (e == null ? void 0 : e.preventTouch) ?? !0,
    scrollbar: (e == null ? void 0 : e.scrollbar) ?? !0,
    friction: (e == null ? void 0 : e.friction) ?? .08,
    stepSize: (e == null ? void 0 : e.stepSize) ?? 1,
    breakpoint: (e == null ? void 0 : e.breakpoint) ?? null,
    passive: (e == null ? void 0 : e.passive) ?? !1,
    useKeyboard: (e == null ? void 0 : e.useKeyboard) ?? !0,
    disabled: (e == null ? void 0 : e.disabled) ?? !1,
    raf: (e == null ? void 0 : e.raf) ?? null,
    maxScrollDelta: (e == null ? void 0 : e.maxScrollDelta) ?? 120,
    saveScrollPosition: (e == null ? void 0 : e.saveScrollPosition) ?? !1,
    autoRaf: (e == null ? void 0 : e.autoRaf) ?? !0
})
  , R = {
    UP: "ArrowUp",
    DOWN: "ArrowDown",
    TAB: "Tab",
    PAGEUP: "PageUp",
    PAGEDOWN: "PageDown",
    HOME: "Home",
    END: "End"
};
class Ao {
    constructor() {
        x(this, "isScrolling"),
        x(this, "vsPosition"),
        x(this, "isScrollbarVisible"),
        x(this, "position"),
        x(this, "disabled"),
        x(this, "velocity"),
        this.isScrolling = !1,
        this.vsPosition = 0,
        this.isScrollbarVisible = !1,
        this.position = 0,
        this.disabled = !1,
        this.velocity = 0
    }
}
const tt = X();
class Oo {
    constructor() {
        x(this, "scrollbar")
    }
    create() {
        return this.scrollbar = tt.createElement("div"),
        this.scrollbar.innerHTML = '<span class="scrollbar__thumb"></span>',
        tt.querySelector(".scrollbar") ? (this.scrollbar.classList.add("scrollbar", "block-scrollbar"),
        this.scrollbar) : (this.scrollbar.classList.add("scrollbar"),
        this.scrollbar)
    }
    append(t) {
        if (t) {
            if (!t.parentElement) {
                tt.body.appendChild(this.scrollbar);
                return
            }
            t.appendChild(this.scrollbar)
        }
    }
    destroy() {
        this.scrollbar.parentElement.removeChild(this.scrollbar)
    }
}
class Io {
    constructor(t) {
        x(this, "inactiveDelay", 1),
        x(this, "timer", 0),
        x(this, "ticker"),
        x(this, "interval"),
        this.cb = t,
        this.detect = this.detect.bind(this),
        this.intervals()
    }
    get compare() {
        return !(this.timer >= this.inactiveDelay)
    }
    detect() {
        this.cb(this.compare)
    }
    intervals() {
        this.ticker = setInterval( () => {
            this.timer++
        }
        , 1e3),
        this.interval = setInterval(this.detect, 120)
    }
    reset() {
        this.timer = 0
    }
    destroy() {
        clearInterval(this.ticker),
        clearInterval(this.interval)
    }
}
const Ro = rt()
  , B = X();
class Ho {
    constructor(t, n) {
        x(this, "events", {
            start: ["mousedown", "touchstart"],
            move: ["mousemove", "touchmove"],
            end: ["mouseup", "touchend"]
        }),
        this.options = t,
        this.state = n,
        this.bounds(),
        this.init()
    }
    bounds() {
        ["start", "update", "end"].forEach(t => this[t] = this[t].bind(this))
    }
    init() {
        this.events.start.forEach(t => {
            this.options.$scrollbar.addEventListener(t, this.start, {
                passive: !1
            })
        }
        ),
        this.events.end.forEach(t => {
            B.documentElement.addEventListener(t, this.end)
        }
        ),
        screen.width > 960 && this.options.$scrollbar.addEventListener("click", this.update)
    }
    get sizes() {
        const t = this.options.$el.scrollHeight
          , n = Ro.innerHeight
          , i = t - n;
        return {
            height: t,
            max: i
        }
    }
    compute(t) {
        const n = this.options.$scrollbar.offsetHeight;
        this.state.isScrollbarVisible = !0;
        const i = J(this.sizes.height * (t / n), 0, this.sizes.max);
        this.state.vsPosition = i,
        setTimeout( () => this.state.isScrollbarVisible = !1, 0)
    }
    update(t) {
        var n;
        if (!this.state.disabled) {
            const i = t.clientY || ((n = t.targetTouches[0]) == null ? void 0 : n.clientY);
            this.compute(i)
        }
    }
    start() {
        this.events.move.forEach(t => {
            B.documentElement.addEventListener(t, this.update)
        }
        ),
        this.options.$thumb.classList.add("active")
    }
    end() {
        this.state.isScrollbarVisible = !1,
        this.options.$thumb.classList.remove("active"),
        this.events.move.forEach(t => {
            B.documentElement.removeEventListener(t, this.update)
        }
        )
    }
    destroy() {
        this.events.start.forEach(t => {
            this.options.$scrollbar.removeEventListener(t, this.start)
        }
        ),
        this.events.end.forEach(t => {
            B.documentElement.removeEventListener(t, this.end)
        }
        ),
        this.events.move.forEach(t => {
            B.documentElement.removeEventListener(t, this.update)
        }
        ),
        this.options.$scrollbar.removeEventListener("click", this.update)
    }
}
const Vo = rt()
  , Oe = X();
class Yo {
    constructor(t, n, i) {
        x(this, "$scrollbar"),
        x(this, "$thumb"),
        x(this, "height"),
        x(this, "max"),
        x(this, "createScrollbar"),
        x(this, "inactivity"),
        x(this, "onDrag"),
        x(this, "disconnect"),
        this.$el = t,
        this.state = n,
        this.raf = i,
        this.$el = t || Oe.querySelector("#scroll-container"),
        this.bounds(),
        this.createScrollbar = new Oo,
        this.inactivity = new Io(this.setVisibility),
        this.init()
    }
    bounds() {
        ["setHeight", "move", "setVisibility"].forEach(t => this[t] = this[t].bind(this))
    }
    init() {
        this.$scrollbar = this.createScrollbar.create(),
        this.$thumb = this.$scrollbar.querySelector(".scrollbar__thumb"),
        this.createScrollbar.append(this.$el),
        this.$scrollbar.addEventListener("mouseenter", this.inactivity.reset),
        this.raf.on(this.move),
        this.drag()
    }
    setHeight() {
        this.height = this.$el.scrollHeight;
        const t = Vo.innerHeight;
        let n = t * (t / this.height);
        this.max = this.height - t,
        this.height === t && (n = 0),
        this.$thumb.style.height = n + "px"
    }
    setVisibility(t) {
        if (!t) {
            this.$thumb.classList.remove("scrolling");
            return
        }
        this.$thumb.classList.add("scrolling")
    }
    move() {
        if (this.state.disabled ? this.$scrollbar.classList.add("hidden") : this.$scrollbar.classList.remove("hidden"),
        this.state.isScrolling) {
            const t = Oe.documentElement.clientHeight;
            this.$thumb.classList.add("scrolling");
            const n = 100 * this.state.position / (this.height - t);
            this.$thumb.style.top = n.toFixed(2) + "%",
            this.$thumb.style.transform = `translateY(-${n.toFixed(2)}%)`
        }
        this.setHeight()
    }
    reset() {
        this.setHeight(),
        this.$thumb.style.top = "0%",
        this.$thumb.style.transform = "translateY(0%)"
    }
    drag() {
        this.onDrag = new Ho({
            $el: this.$el,
            $thumb: this.$thumb,
            $scrollbar: this.$scrollbar
        },this.state)
    }
    destroy() {
        this.onDrag && this.onDrag.destroy(),
        this.$scrollbar && this.$scrollbar.removeEventListener("mouseenter", this.inactivity.reset),
        this.createScrollbar && this.createScrollbar.destroy(),
        this.inactivity && this.inactivity.destroy()
    }
}
const O = rt()
  , Wo = X();
function qo(e) {
    for (; e; ) {
        if (e.dataset.scrollIgnore)
            return !0;
        e = e.parentElement
    }
    return !1
}
class Fo {
    constructor(t) {
        x(this, "vs"),
        x(this, "scrollbar"),
        x(this, "emitter"),
        x(this, "opts"),
        x(this, "state"),
        x(this, "_disabled", !1),
        x(this, "isMobile", !1),
        x(this, "scrollTop", 0),
        x(this, "_raf"),
        x(this, "max", 0),
        x(this, "min", 0),
        this.opts = Co(t),
        this.state = new Ao,
        this._raf = this.opts.raf || cs,
        this.emitter = new Mo,
        this.init()
    }
    bounds() {
        this.update = this.update.bind(this),
        this.onKeyDown = this.onKeyDown.bind(this),
        this.onResize = this.onResize.bind(this)
    }
    init() {
        this.bounds(),
        this.opts.saveScrollPosition && (this.disabled = !0,
        this.opts.el.scrollTop = +O.localStorage.getItem("ess") || 0,
        this.scrollTop = this.opts.el.scrollTop,
        this.state.vsPosition = this.opts.el.scrollTop,
        this.state.position = this.opts.el.scrollTop),
        this.disabled = this.opts.disabled,
        this.opts.useKeyboard && O.addEventListener("keydown", this.onKeyDown, !1),
        De.on(this.onResize),
        this.opts.autoRaf && this._raf.on(this.update)
    }
    onResize() {
        this.opts.breakpoint && (this.isMobile = O.innerWidth < this.opts.breakpoint),
        this.isMobile && (this.vs && this.vs.destroy(),
        this.vs = null,
        this.scrollbar && this.scrollbar.destroy(),
        this.scrollbar = null),
        !this.isMobile && !this.vs && this.setupVirtualScroll(),
        !this.isMobile && !this.scrollbar && this.opts.scrollbar && (this.scrollbar = new Yo(this.opts.el,this.state,this._raf))
    }
    detectScrolling() {
        Math.abs(Math.round(this.state.vsPosition) - Math.round(this.state.position)) >= 1 || this.state.isScrollbarVisible ? this.state.isScrolling = !0 : this.state.isScrolling = !1
    }
    get disabled() {
        return this._disabled
    }
    set disabled(t) {
        this._disabled = t,
        this.state.disabled = t,
        t ? (this.opts.el.classList.add("e-fixed"),
        this.state.vsPosition = this.scrollTop,
        this.state.position = this.scrollTop,
        this.state.velocity = 0) : this.opts.el.classList.remove("e-fixed")
    }
    get maxValue() {
        return this.opts.el.scrollHeight - O.innerHeight
    }
    get canScroll() {
        return !this.disabled && this.opts.el.scrollHeight > O.innerHeight
    }
    setupVirtualScroll() {
        this.vs = new ko({
            ...this.opts,
            useKeyboard: !1
        }),
        this.vs.on(t => {
            if (this.disabled || qo(t.originalEvent.target))
                return;
            const n = J(t.deltaY, -this.opts.maxScrollDelta, this.opts.maxScrollDelta);
            this.state.vsPosition -= n * this.opts.stepSize,
            this.state.vsPosition = J(this.state.vsPosition, this.min, this.max),
            this.opts.saveScrollPosition && localStorage.setItem("ess", String(this.state.vsPosition))
        }
        )
    }
    on(t) {
        this.emitter.on("update", n => {
            t(n)
        }
        )
    }
    update() {
        if (this.detectScrolling(),
        this.max = this.maxValue,
        !this.disabled) {
            if (this.state.position = hs(this.state.position, this.state.vsPosition, this.opts.friction),
            this.state.position = Math.round(this.state.position * 100) / 100,
            this.state.velocity = this.state.vsPosition - this.state.position,
            this.state.isScrolling && this.emitter.emit("update", {
                position: this.state.position,
                direction: this.state.vsPosition > this.state.position ? 1 : -1,
                velocity: this.state.velocity,
                progress: this.state.position / this.max
            }),
            this.scrollTop !== this.opts.el.scrollTop) {
                this.state.vsPosition = this.opts.el.scrollTop,
                this.scrollTop = this.opts.el.scrollTop,
                this.opts.saveScrollPosition && localStorage.setItem("ess", String(this.state.vsPosition));
                return
            }
            if (this.isMobile) {
                this.state.vsPosition = this.opts.el.scrollTop;
                return
            }
            this.opts.el.scrollTop = this.state.position,
            this.scrollTop = this.opts.el.scrollTop
        }
    }
    onKeyDown(t) {
        if (this.canScroll)
            switch (t.key) {
            case R.TAB:
                this.state.vsPosition = Wo.activeElement.getBoundingClientRect().y;
                break;
            case R.UP:
                this.state.vsPosition -= 240;
                break;
            case R.DOWN:
                this.state.vsPosition += 240;
                break;
            case R.PAGEUP:
                this.state.vsPosition -= O.innerHeight;
                break;
            case R.PAGEDOWN:
                this.state.vsPosition += O.innerHeight;
                break;
            case R.HOME:
                this.state.vsPosition = this.min;
                break;
            case R.END:
                this.state.vsPosition = this.max;
                break;
            default:
                return
            }
        this.state.vsPosition = J(this.state.vsPosition, this.min, this.max)
    }
    reset() {
        var t;
        this.state.vsPosition = 0,
        this.state.position = 0,
        this.opts.el.scrollTop = 0,
        this.scrollTop = this.opts.el.scrollTop,
        (t = this.scrollbar) == null || t.reset()
    }
    destroy() {
        this._raf.off(this.update),
        this.vs && this.vs.destroy(),
        De.off(this.onResize),
        this.scrollbar && this.scrollbar.destroy(),
        O.removeEventListener("keydown", this.onKeyDown)
    }
}
const No = {
    id: "scroll-container"
}
  , Ko = 860
  , zo = M({
    __name: "SmoothScroll",
    setup(e) {
        const t = () => {
            window.escroll = new Fo({
                el: document.querySelector("#scroll-container"),
                passive: !1,
                friction: .06,
                preventTouch: !1,
                stepSize: .6,
                scrollbar: !0,
                autoRaf: !1,
                breakpoint: Ko
            }),
            window.escroll.on(us.update)
        }
        ;
        return q( () => {
            document.querySelector("#scroll-container").scrollTop = 0,
            t()
        }
        ),
        st( () => {
            window.escroll && window.escroll.destroy()
        }
        ),
        (n, i) => (k(),
        E("div", No, [We(n.$slots, "default")]))
    }
})
  , jo = {
    class: "toast__text"
}
  , Bo = M({
    __name: "Item",
    props: {
        toast: {}
    },
    emits: ["close"],
    setup(e, {emit: t}) {
        const n = e
          , i = t
          , s = C(null)
          , f = l => {
            i("close", l)
        }
        ;
        return q( () => {
            setTimeout( () => {
                H.to(s.value, {
                    duration: 5,
                    width: "100%",
                    ease: "linear",
                    onComplete: () => {
                        f(n.toast.id)
                    }
                })
            }
            , 0)
        }
        ),
        (l, c) => (k(),
        E("div", {
            class: N(["toast", `toast--${l.toast.color}`])
        }, [d("div", {
            ref_key: "$progress",
            ref: s,
            class: "toast__progress"
        }, null, 512), d("p", jo, $(l.toast.text), 1), d("button", {
            class: "toast__close-btn",
            onClick: c[0] || (c[0] = Ye(_ => f(l.toast.id), ["prevent"]))
        }, c[1] || (c[1] = [d("span", {
            class: "toast__close-line"
        }, null, -1), d("span", {
            class: "toast__close-line"
        }, null, -1)]))], 2))
    }
})
  , Xo = D(Bo, [["__scopeId", "data-v-95be5926"]])
  , Uo = {
    class: "container toast-container"
}
  , Go = M({
    __name: "Group",
    setup(e) {
        const {toasts: t, updateToasts: n} = ds()
          , i = s => {
            const f = t.value.filter(l => l.id !== s);
            n(f)
        }
        ;
        return (s, f) => {
            const l = Xo;
            return k(),
            E("div", Uo, [T(_s, {
                name: "fade"
            }, {
                default: W( () => [(k(!0),
                E(V, null, Y(p(t), c => (k(),
                Q(l, {
                    key: c.id,
                    toast: c,
                    onClose: i
                }, null, 8, ["toast"]))), 128))]),
                _: 1
            })])
        }
    }
})
  , Jo = D(Go, [["__scopeId", "data-v-e9358f90"]])
  , Zo = []
  , Qo = () => {
    qe({
        link: [...Zo]
    })
}
  , tn = {
    id: "app"
}
  , en = {
    class: "app"
}
  , sn = {
    class: "main-content"
}
  , on = M({
    __name: "default",
    setup(e) {
        return Qo(),
        q(async () => {
            const {detectOrientationChanges: t} = await ps(async () => {
                const {detectOrientationChanges: n} = await import("./C4JpzQaQ.js");
                return {
                    detectOrientationChanges: n
                }
            }
            , __vite__mapDeps([0, 1, 2]), import.meta.url);
            t()
        }
        ),
        qe({
            htmlAttrs: {
                translate: "no"
            }
        }),
        (t, n) => {
            const i = ws
              , s = Ws
              , f = Ks
              , l = yo
              , c = zo
              , _ = Jo;
            return k(),
            E("div", tn, [T(i), T(c, null, {
                default: W( () => [d("div", en, [T(s), d("main", sn, [We(t.$slots, "default", {}, void 0, !0)]), T(f), T(l)])]),
                _: 3
            }), T(_)])
        }
    }
})
  , hn = D(on, [["__scopeId", "data-v-e34b4c09"]]);
export {hn as default};
