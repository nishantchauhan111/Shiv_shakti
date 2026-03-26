import {_ as Z} from "./DuVedMQ2.js";
import {d as G, k as ie, Q as nt, c as $, f as g, g as H, h as Q, t as A, F as D, j as K, i as L, o as P, _ as te, s as it, r as O, H as ce, T as Xe, I as we, l as F, a as B, n as ne, m as Be, Y as ke, Z as Ct, p as Pt, ac as It, q as rt, ad as ot, V as Me, J as X, ae as Mt, af as at, ag as le, ah as Ot, ai as $t, aj as Lt, D as de, R as At, L as jt, O as lt, N as zt, a2 as Oe, a3 as dt, ak as Bt, aa as $e, al as kt, am as Vt, an as Gt, K as Nt, W as Ye, a5 as Dt, u as Rt, b as Ft, e as Ht} from "./C5bBxmVo.js";
import {_ as Ve, a as Wt, u as Se} from "./COL7POeB.js";
import {u as qt} from "./DdkQzejC.js";
import {_ as Xt} from "./BZ6ROOaS.js";
import {_ as Yt} from "./Dt8wSEj9.js";
import {i as Ut, a as Kt} from "./CiqAVqVC.js";
import {b as ct, u as ut, a as Qt} from "./DsoqDRZR.js";
import {_ as Zt} from "./3NLjUwEP.js";
import {a as Jt, b as es} from "./DYM-f5Yb.js";
import {u as ts} from "./CuBH4DsP.js";
const ss = {
    class: "project-hero"
}
  , ns = {
    class: "project-hero__wrapper container"
}
  , is = {
    class: "project-hero__img-wrapper"
}
  , rs = {
    class: "project-hero__content"
}
  , os = {
    class: "project-hero__title-wrapper"
}
  , as = {
    "data-title": "",
    class: "project-hero__title"
}
  , ls = {
    class: "project-hero__list"
}
  , ds = {
    class: "project-hero__text"
}
  , cs = {
    key: 0
}
  , us = G({
    __name: "HeroSection",
    props: {
        content: {}
    },
    setup(s) {
        const t = s
          , {spec_1: e, spec_2: n, spec_3: i} = t.content
          , r = ie( () => [e, n, i].filter(Boolean))
          , l = nt().meta.pageTransition.name !== "project";
        return (d, c) => {
            var f, p, m, v, _;
            const u = Z;
            return P(),
            $("section", ss, [g("div", ns, [g("div", is, [l ? (P(),
            H(u, {
                key: 0,
                "data-full-image": "",
                width: 1920,
                preload: "",
                src: (p = (f = d.content) == null ? void 0 : f.cover) == null ? void 0 : p.filename,
                alt: (v = (m = d.content) == null ? void 0 : m.cover) == null ? void 0 : v.alt,
                class: "project-hero__img"
            }, null, 8, ["src", "alt"])) : Q("", !0)]), g("div", rs, [g("div", os, [g("h1", as, A((_ = d.content) == null ? void 0 : _.name), 1)]), g("ul", ls, [(P(!0),
            $(D, null, K(L(r), (h, S) => {
                var w;
                return P(),
                $("li", {
                    key: S,
                    "data-t": "",
                    class: "project-hero__item"
                }, [g("p", ds, A(h), 1), ((w = L(r)) == null ? void 0 : w.length) - 1 !== S ? (P(),
                $("span", cs, "|")) : Q("", !0)])
            }
            ), 128))])])])])
        }
    }
})
  , lo = te(us, [["__scopeId", "data-v-0a568e73"]])
  , ps = G({
    __name: "ProjectButton",
    async setup(s) {
        let t, e;
        const {story: n} = ([t,e] = it( () => qt()),
        t = await t,
        e(),
        t)
          , i = ie( () => {
            var d, c, u;
            return (u = (c = (d = n.value) == null ? void 0 : d.content) == null ? void 0 : c.socials) == null ? void 0 : u.find(f => (f == null ? void 0 : f.label) === "Whatsapp")
        }
        )
          , r = O(!1)
          , o = O(!1)
          , a = () => {
            var d, c;
            (c = (d = window.escroll) == null ? void 0 : d.on) == null || c.call(d, async u => {
                !r.value && await Xe(500),
                r.value = u.direction === -1
            }
            )
        }
          , l = O(null);
        return ce(async () => {
            a(),
            await Xe(500),
            l.value = new IntersectionObserver(c => {
                c.forEach(u => {
                    o.value = u.isIntersecting
                }
                )
            }
            );
            const d = document.querySelector("[data-interior-apparts]");
            l.value.observe(d)
        }
        ),
        we( () => {
            var d;
            (d = l.value) == null || d.disconnect()
        }
        ),
        (d, c) => {
            var p, m;
            const u = Ve
              , f = Be;
            return L(i) ? (P(),
            H(f, {
                key: 0,
                href: (m = (p = L(i)) == null ? void 0 : p.link) == null ? void 0 : m.cached_url,
                tag: "a",
                class: ne(["project-w-btn", {
                    "project-w-btn--visible": L(r) && !L(o)
                }])
            }, {
                default: F( () => {
                    var v;
                    return [g("span", null, A((v = L(i)) == null ? void 0 : v.label), 1), B(u)]
                }
                ),
                _: 1
            }, 8, ["href", "class"])) : Q("", !0)
        }
    }
})
  , co = te(ps, [["__scopeId", "data-v-3f36a1e6"]]);
function fs(s) {
    return new Promise( (t, e) => {
        const n = new Image;
        n.onload = function() {
            const i = n.naturalHeight
              , r = n.naturalWidth;
            t({
                height: i,
                width: r
            })
        }
        ,
        n.onerror = function() {
            e(new Error("Failed to load image"))
        }
        ,
        n.src = s
    }
    )
}
const ms = G({
    __name: "InlineImg.client",
    props: {
        src: {},
        alt: {}
    },
    setup(s) {
        const t = O()
          , e = O(1)
          , n = async () => {
            const i = t.value.querySelector("img")
              , r = i == null ? void 0 : i.src
              , {width: o, height: a} = await fs(r);
            !o || !a || (e.value = o / a)
        }
        ;
        return ce(async () => {
            await ke(),
            n()
        }
        ),
        (i, r) => {
            const o = Wt;
            return P(),
            $("span", {
                ref_key: "$el",
                ref: t,
                class: "inline-img",
                style: Ct({
                    "--aspect": L(e)
                })
            }, [B(o, {
                class: "inline-img__img",
                src: i.src,
                alt: i.alt || "",
                width: 500
            }, null, 8, ["src", "alt"])], 4)
        }
    }
})
  , hs = It(ms)
  , vs = {
    class: "project-about__wrapper container"
}
  , gs = {
    class: "project-about__text-flow"
}
  , _s = G({
    __name: "AboutSection",
    props: {
        content: {}
    },
    setup(s) {
        const t = s
          , e = ie( () => {
            var i, r, o;
            return (o = (r = (i = t.content) == null ? void 0 : i.content) == null ? void 0 : r.content) == null ? void 0 : o.flatMap(a => a.content)
        }
        )
          , n = O(null);
        return Se(n),
        (i, r) => {
            const o = hs
              , a = rt;
            return P(),
            $("section", {
                ref_key: "$el",
                ref: n,
                class: "project-about"
            }, [B(a, null, {
                default: F( () => [g("div", vs, [g("p", gs, [(P(!0),
                $(D, null, K(L(e), (l, d) => {
                    var c, u;
                    return P(),
                    $(D, {
                        key: d
                    }, [(l == null ? void 0 : l.type) === "text" ? (P(),
                    $(D, {
                        key: 0
                    }, [Pt(A(l.text), 1)], 64)) : (l == null ? void 0 : l.type) === "image" ? (P(),
                    H(o, {
                        key: 1,
                        src: (c = l == null ? void 0 : l.attrs) == null ? void 0 : c.src,
                        alt: ((u = l == null ? void 0 : l.attrs) == null ? void 0 : u.alt) || ""
                    }, null, 8, ["src", "alt"])) : Q("", !0)], 64)
                }
                ), 128))])])]),
                _: 1
            })], 512)
        }
    }
})
  , uo = te(_s, [["__scopeId", "data-v-6fc2b8d0"]])
  , ws = {
    class: "project-concept__wrapper container"
}
  , Ss = {
    class: "project-concept__top"
}
  , bs = {
    class: "project-concept__subtitle"
}
  , ys = {
    class: "project-concept__text-content"
}
  , Ts = {
    class: "project-concept__title"
}
  , xs = {
    class: "project-concept__text"
}
  , Es = {
    class: "project-concept__bottom"
}
  , Cs = {
    class: "project-concept__small-block"
}
  , Ps = {
    class: "project-concept__description project-concept__description--small"
}
  , Is = {
    class: "project-concept__big-block"
}
  , Ms = {
    class: "project-concept__description project-concept__description--big"
}
  , Os = G({
    __name: "ConceptSection",
    props: {
        content: {}
    },
    setup(s) {
        const t = O(null);
        return Se(t),
        (e, n) => {
            var a, l, d, c, u, f, p, m, v, _, h, S, w, E, b, I, C, x, y, T, M, z, k, Y, U, j, V, N, q, ue, pe, fe, De, Re, Fe, He, We, qe;
            const i = Z
              , r = Xt
              , o = Yt;
            return P(),
            $("section", {
                ref_key: "$el",
                ref: t,
                class: "project-concept"
            }, [g("div", ws, [g("div", Ss, [g("p", bs, A((a = e.content) == null ? void 0 : a.subtitle), 1), g("div", ys, [g("h2", Ts, A((l = e.content) == null ? void 0 : l.title), 1), g("p", xs, A((d = e.content) == null ? void 0 : d.text), 1)])]), g("div", Es, [g("div", Cs, [B(i, {
                class: "project-concept__img project-concept__img--small",
                src: (u = (c = e.content) == null ? void 0 : c.small_asset) == null ? void 0 : u.filename,
                alt: (p = (f = e.content) == null ? void 0 : f.small_asset) == null ? void 0 : p.alt,
                width: 700
            }, null, 8, ["src", "alt"]), g("p", Ps, A((m = e.content) == null ? void 0 : m.small_asset_description), 1)]), g("div", Is, [(h = (_ = (v = e.content) == null ? void 0 : v.big_asset) == null ? void 0 : _[0]) != null && h.embed_link ? (P(),
            H(r, {
                key: 0,
                width: (E = (w = (S = e.content) == null ? void 0 : S.big_asset) == null ? void 0 : w[0]) == null ? void 0 : E.embed_width,
                height: (C = (I = (b = e.content) == null ? void 0 : b.big_asset) == null ? void 0 : I[0]) == null ? void 0 : C.embed_height,
                url: (T = (y = (x = e.content) == null ? void 0 : x.big_asset) == null ? void 0 : y[0]) == null ? void 0 : T.embed_link,
                class: "project-concept__img project-concept__img--big"
            }, null, 8, ["width", "height", "url"])) : (P(),
            $(D, {
                key: 1
            }, [("isPicture"in e ? e.isPicture : L(Ut))((Y = (k = (z = (M = e.content) == null ? void 0 : M.big_asset) == null ? void 0 : z[0]) == null ? void 0 : k.asset) == null ? void 0 : Y.filename) ? (P(),
            H(i, {
                key: 0,
                "data-full-image": "",
                src: (V = (j = (U = e.content) == null ? void 0 : U.big_asset) == null ? void 0 : j[0].asset) == null ? void 0 : V.filename,
                alt: (ue = (q = (N = e.content) == null ? void 0 : N.big_asset) == null ? void 0 : q[0].asset) == null ? void 0 : ue.alt,
                width: 1200,
                class: "project-concept__img project-concept__img--big"
            }, null, 8, ["src", "alt"])) : Q("", !0), ("isVideo"in e ? e.isVideo : L(Kt))((Re = (De = (fe = (pe = e.content) == null ? void 0 : pe.big_asset) == null ? void 0 : fe[0]) == null ? void 0 : De.asset) == null ? void 0 : Re.filename) ? (P(),
            H(o, {
                key: 1,
                url: (We = (He = (Fe = e.content) == null ? void 0 : Fe.big_asset) == null ? void 0 : He[0].asset) == null ? void 0 : We.filename,
                class: "project-concept__img project-concept__img--big",
                "is-playing": !0
            }, null, 8, ["url"])) : Q("", !0)], 64)), g("p", Ms, A((qe = e.content) == null ? void 0 : qe.big_asset_description), 1)])])])], 512)
        }
    }
})
  , po = te(Os, [["__scopeId", "data-v-93797b80"]]);
function Ue(s) {
    return s !== null && typeof s == "object" && "constructor"in s && s.constructor === Object
}
function Ge(s, t) {
    s === void 0 && (s = {}),
    t === void 0 && (t = {});
    const e = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(n => e.indexOf(n) < 0).forEach(n => {
        typeof s[n] > "u" ? s[n] = t[n] : Ue(t[n]) && Ue(s[n]) && Object.keys(t[n]).length > 0 && Ge(s[n], t[n])
    }
    )
}
const pt = {
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
function oe() {
    const s = typeof document < "u" ? document : {};
    return Ge(s, pt),
    s
}
const $s = {
    document: pt,
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
    requestAnimationFrame(s) {
        return typeof setTimeout > "u" ? (s(),
        null) : setTimeout(s, 0)
    },
    cancelAnimationFrame(s) {
        typeof setTimeout > "u" || clearTimeout(s)
    }
};
function R() {
    const s = typeof window < "u" ? window : {};
    return Ge(s, $s),
    s
}
function Ls(s) {
    return s === void 0 && (s = ""),
    s.trim().split(" ").filter(t => !!t.trim())
}
function As(s) {
    const t = s;
    Object.keys(t).forEach(e => {
        try {
            t[e] = null
        } catch {}
        try {
            delete t[e]
        } catch {}
    }
    )
}
function Le(s, t) {
    return t === void 0 && (t = 0),
    setTimeout(s, t)
}
function ge() {
    return Date.now()
}
function js(s) {
    const t = R();
    let e;
    return t.getComputedStyle && (e = t.getComputedStyle(s, null)),
    !e && s.currentStyle && (e = s.currentStyle),
    e || (e = s.style),
    e
}
function zs(s, t) {
    t === void 0 && (t = "x");
    const e = R();
    let n, i, r;
    const o = js(s);
    return e.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform,
    i.split(",").length > 6 && (i = i.split(", ").map(a => a.replace(",", ".")).join(", ")),
    r = new e.WebKitCSSMatrix(i === "none" ? "" : i)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    n = r.toString().split(",")),
    t === "x" && (e.WebKitCSSMatrix ? i = r.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])),
    t === "y" && (e.WebKitCSSMatrix ? i = r.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])),
    i || 0
}
function me(s) {
    return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object"
}
function Bs(s) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? s instanceof HTMLElement : s && (s.nodeType === 1 || s.nodeType === 11)
}
function W() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , t = ["__proto__", "constructor", "prototype"];
    for (let e = 1; e < arguments.length; e += 1) {
        const n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
        if (n != null && !Bs(n)) {
            const i = Object.keys(Object(n)).filter(r => t.indexOf(r) < 0);
            for (let r = 0, o = i.length; r < o; r += 1) {
                const a = i[r]
                  , l = Object.getOwnPropertyDescriptor(n, a);
                l !== void 0 && l.enumerable && (me(s[a]) && me(n[a]) ? n[a].__swiper__ ? s[a] = n[a] : W(s[a], n[a]) : !me(s[a]) && me(n[a]) ? (s[a] = {},
                n[a].__swiper__ ? s[a] = n[a] : W(s[a], n[a])) : s[a] = n[a])
            }
        }
    }
    return s
}
function he(s, t, e) {
    s.style.setProperty(t, e)
}
function ft(s) {
    let {swiper: t, targetPosition: e, side: n} = s;
    const i = R()
      , r = -t.translate;
    let o = null, a;
    const l = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none",
    i.cancelAnimationFrame(t.cssModeFrameID);
    const d = e > r ? "next" : "prev"
      , c = (f, p) => d === "next" && f >= p || d === "prev" && f <= p
      , u = () => {
        a = new Date().getTime(),
        o === null && (o = a);
        const f = Math.max(Math.min((a - o) / l, 1), 0)
          , p = .5 - Math.cos(f * Math.PI) / 2;
        let m = r + p * (e - r);
        if (c(m, e) && (m = e),
        t.wrapperEl.scrollTo({
            [n]: m
        }),
        c(m, e)) {
            t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                t.wrapperEl.style.overflow = "",
                t.wrapperEl.scrollTo({
                    [n]: m
                })
            }
            ),
            i.cancelAnimationFrame(t.cssModeFrameID);
            return
        }
        t.cssModeFrameID = i.requestAnimationFrame(u)
    }
    ;
    u()
}
function ee(s, t) {
    t === void 0 && (t = "");
    const e = R()
      , n = [...s.children];
    return e.HTMLSlotElement && s instanceof HTMLSlotElement && n.push(...s.assignedElements()),
    t ? n.filter(i => i.matches(t)) : n
}
function ks(s, t) {
    const e = [t];
    for (; e.length > 0; ) {
        const n = e.shift();
        if (s === n)
            return !0;
        e.push(...n.children, ...n.shadowRoot ? n.shadowRoot.children : [], ...n.assignedElements ? n.assignedElements() : [])
    }
}
function Vs(s, t) {
    const e = R();
    let n = t.contains(s);
    return !n && e.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(s),
    n || (n = ks(s, t))),
    n
}
function _e(s) {
    try {
        console.warn(s);
        return
    } catch {}
}
function Ae(s, t) {
    t === void 0 && (t = []);
    const e = document.createElement(s);
    return e.classList.add(...Array.isArray(t) ? t : Ls(t)),
    e
}
function Gs(s, t) {
    const e = [];
    for (; s.previousElementSibling; ) {
        const n = s.previousElementSibling;
        t ? n.matches(t) && e.push(n) : e.push(n),
        s = n
    }
    return e
}
function Ns(s, t) {
    const e = [];
    for (; s.nextElementSibling; ) {
        const n = s.nextElementSibling;
        t ? n.matches(t) && e.push(n) : e.push(n),
        s = n
    }
    return e
}
function se(s, t) {
    return R().getComputedStyle(s, null).getPropertyValue(t)
}
function Ke(s) {
    let t = s, e;
    if (t) {
        for (e = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (e += 1);
        return e
    }
}
function Ds(s, t) {
    const e = [];
    let n = s.parentElement;
    for (; n; )
        e.push(n),
        n = n.parentElement;
    return e
}
function Qe(s, t, e) {
    const n = R();
    return s[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(s, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(s, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"))
}
let be;
function Rs() {
    const s = R()
      , t = oe();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
        touch: !!("ontouchstart"in s || s.DocumentTouch && t instanceof s.DocumentTouch)
    }
}
function mt() {
    return be || (be = Rs()),
    be
}
let ye;
function Fs(s) {
    let {userAgent: t} = s === void 0 ? {} : s;
    const e = mt()
      , n = R()
      , i = n.navigator.platform
      , r = t || n.navigator.userAgent
      , o = {
        ios: !1,
        android: !1
    }
      , a = n.screen.width
      , l = n.screen.height
      , d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = r.match(/(iPad).*OS\s([\d_]+)/);
    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , f = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , p = i === "Win32";
    let m = i === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && m && e.touch && v.indexOf(`${a}x${l}`) >= 0 && (c = r.match(/(Version)\/([\d.]+)/),
    c || (c = [0, 1, "13_0_0"]),
    m = !1),
    d && !p && (o.os = "android",
    o.android = !0),
    (c || f || u) && (o.os = "ios",
    o.ios = !0),
    o
}
function ht(s) {
    return s === void 0 && (s = {}),
    ye || (ye = Fs(s)),
    ye
}
let Te;
function Hs() {
    const s = R()
      , t = ht();
    let e = !1;
    function n() {
        const a = s.navigator.userAgent.toLowerCase();
        return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
    }
    if (n()) {
        const a = String(s.navigator.userAgent);
        if (a.includes("Version/")) {
            const [l,d] = a.split("Version/")[1].split(" ")[0].split(".").map(c => Number(c));
            e = l < 16 || l === 16 && d < 2
        }
    }
    const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
      , r = n()
      , o = r || i && t.ios;
    return {
        isSafari: e || r,
        needPerspectiveFix: e,
        need3dFix: o,
        isWebView: i
    }
}
function vt() {
    return Te || (Te = Hs()),
    Te
}
function Ws(s) {
    let {swiper: t, on: e, emit: n} = s;
    const i = R();
    let r = null
      , o = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (n("beforeResize"),
        n("resize"))
    }
      , l = () => {
        !t || t.destroyed || !t.initialized || (r = new ResizeObserver(u => {
            o = i.requestAnimationFrame( () => {
                const {width: f, height: p} = t;
                let m = f
                  , v = p;
                u.forEach(_ => {
                    let {contentBoxSize: h, contentRect: S, target: w} = _;
                    w && w !== t.el || (m = S ? S.width : (h[0] || h).inlineSize,
                    v = S ? S.height : (h[0] || h).blockSize)
                }
                ),
                (m !== f || v !== p) && a()
            }
            )
        }
        ),
        r.observe(t.el))
    }
      , d = () => {
        o && i.cancelAnimationFrame(o),
        r && r.unobserve && t.el && (r.unobserve(t.el),
        r = null)
    }
      , c = () => {
        !t || t.destroyed || !t.initialized || n("orientationchange")
    }
    ;
    e("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            l();
            return
        }
        i.addEventListener("resize", a),
        i.addEventListener("orientationchange", c)
    }
    ),
    e("destroy", () => {
        d(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", c)
    }
    )
}
function qs(s) {
    let {swiper: t, extendParams: e, on: n, emit: i} = s;
    const r = []
      , o = R()
      , a = function(c, u) {
        u === void 0 && (u = {});
        const f = o.MutationObserver || o.WebkitMutationObserver
          , p = new f(m => {
            if (t.__preventObserver__)
                return;
            if (m.length === 1) {
                i("observerUpdate", m[0]);
                return
            }
            const v = function() {
                i("observerUpdate", m[0])
            };
            o.requestAnimationFrame ? o.requestAnimationFrame(v) : o.setTimeout(v, 0)
        }
        );
        p.observe(c, {
            attributes: typeof u.attributes > "u" ? !0 : u.attributes,
            childList: t.isElement || (typeof u.childList > "u" ? !0 : u).childList,
            characterData: typeof u.characterData > "u" ? !0 : u.characterData
        }),
        r.push(p)
    }
      , l = () => {
        if (t.params.observer) {
            if (t.params.observeParents) {
                const c = Ds(t.hostEl);
                for (let u = 0; u < c.length; u += 1)
                    a(c[u])
            }
            a(t.hostEl, {
                childList: t.params.observeSlideChildren
            }),
            a(t.wrapperEl, {
                attributes: !1
            })
        }
    }
      , d = () => {
        r.forEach(c => {
            c.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    e({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    n("init", l),
    n("destroy", d)
}
var Xs = {
    on(s, t, e) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof t != "function")
            return n;
        const i = e ? "unshift" : "push";
        return s.split(" ").forEach(r => {
            n.eventsListeners[r] || (n.eventsListeners[r] = []),
            n.eventsListeners[r][i](t)
        }
        ),
        n
    },
    once(s, t, e) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof t != "function")
            return n;
        function i() {
            n.off(s, i),
            i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                o[a] = arguments[a];
            t.apply(n, o)
        }
        return i.__emitterProxy = t,
        n.on(s, i, e)
    },
    onAny(s, t) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || typeof s != "function")
            return e;
        const n = t ? "unshift" : "push";
        return e.eventsAnyListeners.indexOf(s) < 0 && e.eventsAnyListeners[n](s),
        e
    },
    offAny(s) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const e = t.eventsAnyListeners.indexOf(s);
        return e >= 0 && t.eventsAnyListeners.splice(e, 1),
        t
    },
    off(s, t) {
        const e = this;
        return !e.eventsListeners || e.destroyed || !e.eventsListeners || s.split(" ").forEach(n => {
            typeof t > "u" ? e.eventsListeners[n] = [] : e.eventsListeners[n] && e.eventsListeners[n].forEach( (i, r) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && e.eventsListeners[n].splice(r, 1)
            }
            )
        }
        ),
        e
    },
    emit() {
        const s = this;
        if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
            return s;
        let t, e, n;
        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
            r[o] = arguments[o];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (t = r[0],
        e = r.slice(1, r.length),
        n = s) : (t = r[0].events,
        e = r[0].data,
        n = r[0].context || s),
        e.unshift(n),
        (Array.isArray(t) ? t : t.split(" ")).forEach(l => {
            s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(d => {
                d.apply(n, [l, ...e])
            }
            ),
            s.eventsListeners && s.eventsListeners[l] && s.eventsListeners[l].forEach(d => {
                d.apply(n, e)
            }
            )
        }
        ),
        s
    }
};
function Ys() {
    const s = this;
    let t, e;
    const n = s.el;
    typeof s.params.width < "u" && s.params.width !== null ? t = s.params.width : t = n.clientWidth,
    typeof s.params.height < "u" && s.params.height !== null ? e = s.params.height : e = n.clientHeight,
    !(t === 0 && s.isHorizontal() || e === 0 && s.isVertical()) && (t = t - parseInt(se(n, "padding-left") || 0, 10) - parseInt(se(n, "padding-right") || 0, 10),
    e = e - parseInt(se(n, "padding-top") || 0, 10) - parseInt(se(n, "padding-bottom") || 0, 10),
    Number.isNaN(t) && (t = 0),
    Number.isNaN(e) && (e = 0),
    Object.assign(s, {
        width: t,
        height: e,
        size: s.isHorizontal() ? t : e
    }))
}
function Us() {
    const s = this;
    function t(T, M) {
        return parseFloat(T.getPropertyValue(s.getDirectionLabel(M)) || 0)
    }
    const e = s.params
      , {wrapperEl: n, slidesEl: i, size: r, rtlTranslate: o, wrongRTL: a} = s
      , l = s.virtual && e.virtual.enabled
      , d = l ? s.virtual.slides.length : s.slides.length
      , c = ee(i, `.${s.params.slideClass}, swiper-slide`)
      , u = l ? s.virtual.slides.length : c.length;
    let f = [];
    const p = []
      , m = [];
    let v = e.slidesOffsetBefore;
    typeof v == "function" && (v = e.slidesOffsetBefore.call(s));
    let _ = e.slidesOffsetAfter;
    typeof _ == "function" && (_ = e.slidesOffsetAfter.call(s));
    const h = s.snapGrid.length
      , S = s.slidesGrid.length;
    let w = e.spaceBetween
      , E = -v
      , b = 0
      , I = 0;
    if (typeof r > "u")
        return;
    typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * r : typeof w == "string" && (w = parseFloat(w)),
    s.virtualSize = -w,
    c.forEach(T => {
        o ? T.style.marginLeft = "" : T.style.marginRight = "",
        T.style.marginBottom = "",
        T.style.marginTop = ""
    }
    ),
    e.centeredSlides && e.cssMode && (he(n, "--swiper-centered-offset-before", ""),
    he(n, "--swiper-centered-offset-after", ""));
    const C = e.grid && e.grid.rows > 1 && s.grid;
    C ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
    let x;
    const y = e.slidesPerView === "auto" && e.breakpoints && Object.keys(e.breakpoints).filter(T => typeof e.breakpoints[T].slidesPerView < "u").length > 0;
    for (let T = 0; T < u; T += 1) {
        x = 0;
        let M;
        if (c[T] && (M = c[T]),
        C && s.grid.updateSlide(T, M, c),
        !(c[T] && se(M, "display") === "none")) {
            if (e.slidesPerView === "auto") {
                y && (c[T].style[s.getDirectionLabel("width")] = "");
                const z = getComputedStyle(M)
                  , k = M.style.transform
                  , Y = M.style.webkitTransform;
                if (k && (M.style.transform = "none"),
                Y && (M.style.webkitTransform = "none"),
                e.roundLengths)
                    x = s.isHorizontal() ? Qe(M, "width") : Qe(M, "height");
                else {
                    const U = t(z, "width")
                      , j = t(z, "padding-left")
                      , V = t(z, "padding-right")
                      , N = t(z, "margin-left")
                      , q = t(z, "margin-right")
                      , ue = z.getPropertyValue("box-sizing");
                    if (ue && ue === "border-box")
                        x = U + N + q;
                    else {
                        const {clientWidth: pe, offsetWidth: fe} = M;
                        x = U + j + V + N + q + (fe - pe)
                    }
                }
                k && (M.style.transform = k),
                Y && (M.style.webkitTransform = Y),
                e.roundLengths && (x = Math.floor(x))
            } else
                x = (r - (e.slidesPerView - 1) * w) / e.slidesPerView,
                e.roundLengths && (x = Math.floor(x)),
                c[T] && (c[T].style[s.getDirectionLabel("width")] = `${x}px`);
            c[T] && (c[T].swiperSlideSize = x),
            m.push(x),
            e.centeredSlides ? (E = E + x / 2 + b / 2 + w,
            b === 0 && T !== 0 && (E = E - r / 2 - w),
            T === 0 && (E = E - r / 2 - w),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            e.roundLengths && (E = Math.floor(E)),
            I % e.slidesPerGroup === 0 && f.push(E),
            p.push(E)) : (e.roundLengths && (E = Math.floor(E)),
            (I - Math.min(s.params.slidesPerGroupSkip, I)) % s.params.slidesPerGroup === 0 && f.push(E),
            p.push(E),
            E = E + x + w),
            s.virtualSize += x + w,
            b = x,
            I += 1
        }
    }
    if (s.virtualSize = Math.max(s.virtualSize, r) + _,
    o && a && (e.effect === "slide" || e.effect === "coverflow") && (n.style.width = `${s.virtualSize + w}px`),
    e.setWrapperSize && (n.style[s.getDirectionLabel("width")] = `${s.virtualSize + w}px`),
    C && s.grid.updateWrapperSize(x, f),
    !e.centeredSlides) {
        const T = [];
        for (let M = 0; M < f.length; M += 1) {
            let z = f[M];
            e.roundLengths && (z = Math.floor(z)),
            f[M] <= s.virtualSize - r && T.push(z)
        }
        f = T,
        Math.floor(s.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 && f.push(s.virtualSize - r)
    }
    if (l && e.loop) {
        const T = m[0] + w;
        if (e.slidesPerGroup > 1) {
            const M = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / e.slidesPerGroup)
              , z = T * e.slidesPerGroup;
            for (let k = 0; k < M; k += 1)
                f.push(f[f.length - 1] + z)
        }
        for (let M = 0; M < s.virtual.slidesBefore + s.virtual.slidesAfter; M += 1)
            e.slidesPerGroup === 1 && f.push(f[f.length - 1] + T),
            p.push(p[p.length - 1] + T),
            s.virtualSize += T
    }
    if (f.length === 0 && (f = [0]),
    w !== 0) {
        const T = s.isHorizontal() && o ? "marginLeft" : s.getDirectionLabel("marginRight");
        c.filter( (M, z) => !e.cssMode || e.loop ? !0 : z !== c.length - 1).forEach(M => {
            M.style[T] = `${w}px`
        }
        )
    }
    if (e.centeredSlides && e.centeredSlidesBounds) {
        let T = 0;
        m.forEach(z => {
            T += z + (w || 0)
        }
        ),
        T -= w;
        const M = T > r ? T - r : 0;
        f = f.map(z => z <= 0 ? -v : z > M ? M + _ : z)
    }
    if (e.centerInsufficientSlides) {
        let T = 0;
        m.forEach(z => {
            T += z + (w || 0)
        }
        ),
        T -= w;
        const M = (e.slidesOffsetBefore || 0) + (e.slidesOffsetAfter || 0);
        if (T + M < r) {
            const z = (r - T - M) / 2;
            f.forEach( (k, Y) => {
                f[Y] = k - z
            }
            ),
            p.forEach( (k, Y) => {
                p[Y] = k + z
            }
            )
        }
    }
    if (Object.assign(s, {
        slides: c,
        snapGrid: f,
        slidesGrid: p,
        slidesSizesGrid: m
    }),
    e.centeredSlides && e.cssMode && !e.centeredSlidesBounds) {
        he(n, "--swiper-centered-offset-before", `${-f[0]}px`),
        he(n, "--swiper-centered-offset-after", `${s.size / 2 - m[m.length - 1] / 2}px`);
        const T = -s.snapGrid[0]
          , M = -s.slidesGrid[0];
        s.snapGrid = s.snapGrid.map(z => z + T),
        s.slidesGrid = s.slidesGrid.map(z => z + M)
    }
    if (u !== d && s.emit("slidesLengthChange"),
    f.length !== h && (s.params.watchOverflow && s.checkOverflow(),
    s.emit("snapGridLengthChange")),
    p.length !== S && s.emit("slidesGridLengthChange"),
    e.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !l && !e.cssMode && (e.effect === "slide" || e.effect === "fade")) {
        const T = `${e.containerModifierClass}backface-hidden`
          , M = s.el.classList.contains(T);
        u <= e.maxBackfaceHiddenSlides ? M || s.el.classList.add(T) : M && s.el.classList.remove(T)
    }
}
function Ks(s) {
    const t = this
      , e = []
      , n = t.virtual && t.params.virtual.enabled;
    let i = 0, r;
    typeof s == "number" ? t.setTransition(s) : s === !0 && t.setTransition(t.params.speed);
    const o = a => n ? t.slides[t.getSlideIndexByData(a)] : t.slides[a];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(a => {
                e.push(a)
            }
            );
        else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const a = t.activeIndex + r;
                if (a > t.slides.length && !n)
                    break;
                e.push(o(a))
            }
    else
        e.push(o(t.activeIndex));
    for (r = 0; r < e.length; r += 1)
        if (typeof e[r] < "u") {
            const a = e[r].offsetHeight;
            i = a > i ? a : i
        }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function Qs() {
    const s = this
      , t = s.slides
      , e = s.isElement ? s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop : 0;
    for (let n = 0; n < t.length; n += 1)
        t[n].swiperSlideOffset = (s.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - e - s.cssOverflowAdjustment()
}
const Ze = (s, t, e) => {
    t && !s.classList.contains(e) ? s.classList.add(e) : !t && s.classList.contains(e) && s.classList.remove(e)
}
;
function Zs(s) {
    s === void 0 && (s = this && this.translate || 0);
    const t = this
      , e = t.params
      , {slides: n, rtlTranslate: i, snapGrid: r} = t;
    if (n.length === 0)
        return;
    typeof n[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let o = -s;
    i && (o = s),
    t.visibleSlidesIndexes = [],
    t.visibleSlides = [];
    let a = e.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * t.size : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < n.length; l += 1) {
        const d = n[l];
        let c = d.swiperSlideOffset;
        e.cssMode && e.centeredSlides && (c -= n[0].swiperSlideOffset);
        const u = (o + (e.centeredSlides ? t.minTranslate() : 0) - c) / (d.swiperSlideSize + a)
          , f = (o - r[0] + (e.centeredSlides ? t.minTranslate() : 0) - c) / (d.swiperSlideSize + a)
          , p = -(o - c)
          , m = p + t.slidesSizesGrid[l]
          , v = p >= 0 && p <= t.size - t.slidesSizesGrid[l]
          , _ = p >= 0 && p < t.size - 1 || m > 1 && m <= t.size || p <= 0 && m >= t.size;
        _ && (t.visibleSlides.push(d),
        t.visibleSlidesIndexes.push(l)),
        Ze(d, _, e.slideVisibleClass),
        Ze(d, v, e.slideFullyVisibleClass),
        d.progress = i ? -u : u,
        d.originalProgress = i ? -f : f
    }
}
function Js(s) {
    const t = this;
    if (typeof s > "u") {
        const c = t.rtlTranslate ? -1 : 1;
        s = t && t.translate && t.translate * c || 0
    }
    const e = t.params
      , n = t.maxTranslate() - t.minTranslate();
    let {progress: i, isBeginning: r, isEnd: o, progressLoop: a} = t;
    const l = r
      , d = o;
    if (n === 0)
        i = 0,
        r = !0,
        o = !0;
    else {
        i = (s - t.minTranslate()) / n;
        const c = Math.abs(s - t.minTranslate()) < 1
          , u = Math.abs(s - t.maxTranslate()) < 1;
        r = c || i <= 0,
        o = u || i >= 1,
        c && (i = 0),
        u && (i = 1)
    }
    if (e.loop) {
        const c = t.getSlideIndexByData(0)
          , u = t.getSlideIndexByData(t.slides.length - 1)
          , f = t.slidesGrid[c]
          , p = t.slidesGrid[u]
          , m = t.slidesGrid[t.slidesGrid.length - 1]
          , v = Math.abs(s);
        v >= f ? a = (v - f) / m : a = (v + m - p) / m,
        a > 1 && (a -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: a,
        isBeginning: r,
        isEnd: o
    }),
    (e.watchSlidesProgress || e.centeredSlides && e.autoHeight) && t.updateSlidesProgress(s),
    r && !l && t.emit("reachBeginning toEdge"),
    o && !d && t.emit("reachEnd toEdge"),
    (l && !r || d && !o) && t.emit("fromEdge"),
    t.emit("progress", i)
}
const xe = (s, t, e) => {
    t && !s.classList.contains(e) ? s.classList.add(e) : !t && s.classList.contains(e) && s.classList.remove(e)
}
;
function en() {
    const s = this
      , {slides: t, params: e, slidesEl: n, activeIndex: i} = s
      , r = s.virtual && e.virtual.enabled
      , o = s.grid && e.grid && e.grid.rows > 1
      , a = u => ee(n, `.${e.slideClass}${u}, swiper-slide${u}`)[0];
    let l, d, c;
    if (r)
        if (e.loop) {
            let u = i - s.virtual.slidesBefore;
            u < 0 && (u = s.virtual.slides.length + u),
            u >= s.virtual.slides.length && (u -= s.virtual.slides.length),
            l = a(`[data-swiper-slide-index="${u}"]`)
        } else
            l = a(`[data-swiper-slide-index="${i}"]`);
    else
        o ? (l = t.find(u => u.column === i),
        c = t.find(u => u.column === i + 1),
        d = t.find(u => u.column === i - 1)) : l = t[i];
    l && (o || (c = Ns(l, `.${e.slideClass}, swiper-slide`)[0],
    e.loop && !c && (c = t[0]),
    d = Gs(l, `.${e.slideClass}, swiper-slide`)[0],
    e.loop && !d === 0 && (d = t[t.length - 1]))),
    t.forEach(u => {
        xe(u, u === l, e.slideActiveClass),
        xe(u, u === c, e.slideNextClass),
        xe(u, u === d, e.slidePrevClass)
    }
    ),
    s.emitSlidesClasses()
}
const ve = (s, t) => {
    if (!s || s.destroyed || !s.params)
        return;
    const e = () => s.isElement ? "swiper-slide" : `.${s.params.slideClass}`
      , n = t.closest(e());
    if (n) {
        let i = n.querySelector(`.${s.params.lazyPreloaderClass}`);
        !i && s.isElement && (n.shadowRoot ? i = n.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            n.shadowRoot && (i = n.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),
            i && i.remove())
        }
        )),
        i && i.remove()
    }
}
  , Ee = (s, t) => {
    if (!s.slides[t])
        return;
    const e = s.slides[t].querySelector('[loading="lazy"]');
    e && e.removeAttribute("loading")
}
  , je = s => {
    if (!s || s.destroyed || !s.params)
        return;
    let t = s.params.lazyPreloadPrevNext;
    const e = s.slides.length;
    if (!e || !t || t < 0)
        return;
    t = Math.min(t, e);
    const n = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView)
      , i = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
        const o = i
          , a = [o - t];
        a.push(...Array.from({
            length: t
        }).map( (l, d) => o + n + d)),
        s.slides.forEach( (l, d) => {
            a.includes(l.column) && Ee(s, d)
        }
        );
        return
    }
    const r = i + n - 1;
    if (s.params.rewind || s.params.loop)
        for (let o = i - t; o <= r + t; o += 1) {
            const a = (o % e + e) % e;
            (a < i || a > r) && Ee(s, a)
        }
    else
        for (let o = Math.max(i - t, 0); o <= Math.min(r + t, e - 1); o += 1)
            o !== i && (o > r || o < i) && Ee(s, o)
}
;
function tn(s) {
    const {slidesGrid: t, params: e} = s
      , n = s.rtlTranslate ? s.translate : -s.translate;
    let i;
    for (let r = 0; r < t.length; r += 1)
        typeof t[r + 1] < "u" ? n >= t[r] && n < t[r + 1] - (t[r + 1] - t[r]) / 2 ? i = r : n >= t[r] && n < t[r + 1] && (i = r + 1) : n >= t[r] && (i = r);
    return e.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0),
    i
}
function sn(s) {
    const t = this
      , e = t.rtlTranslate ? t.translate : -t.translate
      , {snapGrid: n, params: i, activeIndex: r, realIndex: o, snapIndex: a} = t;
    let l = s, d;
    const c = p => {
        let m = p - t.virtual.slidesBefore;
        return m < 0 && (m = t.virtual.slides.length + m),
        m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
        m
    }
    ;
    if (typeof l > "u" && (l = tn(t)),
    n.indexOf(e) >= 0)
        d = n.indexOf(e);
    else {
        const p = Math.min(i.slidesPerGroupSkip, l);
        d = p + Math.floor((l - p) / i.slidesPerGroup)
    }
    if (d >= n.length && (d = n.length - 1),
    l === r && !t.params.loop) {
        d !== a && (t.snapIndex = d,
        t.emit("snapIndexChange"));
        return
    }
    if (l === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = c(l);
        return
    }
    const u = t.grid && i.grid && i.grid.rows > 1;
    let f;
    if (t.virtual && i.virtual.enabled && i.loop)
        f = c(l);
    else if (u) {
        const p = t.slides.find(v => v.column === l);
        let m = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(m) && (m = Math.max(t.slides.indexOf(p), 0)),
        f = Math.floor(m / i.grid.rows)
    } else if (t.slides[l]) {
        const p = t.slides[l].getAttribute("data-swiper-slide-index");
        p ? f = parseInt(p, 10) : f = l
    } else
        f = l;
    Object.assign(t, {
        previousSnapIndex: a,
        snapIndex: d,
        previousRealIndex: o,
        realIndex: f,
        previousIndex: r,
        activeIndex: l
    }),
    t.initialized && je(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && (o !== f && t.emit("realIndexChange"),
    t.emit("slideChange"))
}
function nn(s, t) {
    const e = this
      , n = e.params;
    let i = s.closest(`.${n.slideClass}, swiper-slide`);
    !i && e.isElement && t && t.length > 1 && t.includes(s) && [...t.slice(t.indexOf(s) + 1, t.length)].forEach(a => {
        !i && a.matches && a.matches(`.${n.slideClass}, swiper-slide`) && (i = a)
    }
    );
    let r = !1, o;
    if (i) {
        for (let a = 0; a < e.slides.length; a += 1)
            if (e.slides[a] === i) {
                r = !0,
                o = a;
                break
            }
    }
    if (i && r)
        e.clickedSlide = i,
        e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = o;
    else {
        e.clickedSlide = void 0,
        e.clickedIndex = void 0;
        return
    }
    n.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
}
var rn = {
    updateSize: Ys,
    updateSlides: Us,
    updateAutoHeight: Ks,
    updateSlidesOffset: Qs,
    updateSlidesProgress: Zs,
    updateProgress: Js,
    updateSlidesClasses: en,
    updateActiveIndex: sn,
    updateClickedSlide: nn
};
function on(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const t = this
      , {params: e, rtlTranslate: n, translate: i, wrapperEl: r} = t;
    if (e.virtualTranslate)
        return n ? -i : i;
    if (e.cssMode)
        return i;
    let o = zs(r, s);
    return o += t.cssOverflowAdjustment(),
    n && (o = -o),
    o || 0
}
function an(s, t) {
    const e = this
      , {rtlTranslate: n, params: i, wrapperEl: r, progress: o} = e;
    let a = 0
      , l = 0;
    const d = 0;
    e.isHorizontal() ? a = n ? -s : s : l = s,
    i.roundLengths && (a = Math.floor(a),
    l = Math.floor(l)),
    e.previousTranslate = e.translate,
    e.translate = e.isHorizontal() ? a : l,
    i.cssMode ? r[e.isHorizontal() ? "scrollLeft" : "scrollTop"] = e.isHorizontal() ? -a : -l : i.virtualTranslate || (e.isHorizontal() ? a -= e.cssOverflowAdjustment() : l -= e.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${a}px, ${l}px, ${d}px)`);
    let c;
    const u = e.maxTranslate() - e.minTranslate();
    u === 0 ? c = 0 : c = (s - e.minTranslate()) / u,
    c !== o && e.updateProgress(s),
    e.emit("setTranslate", e.translate, t)
}
function ln() {
    return -this.snapGrid[0]
}
function dn() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function cn(s, t, e, n, i) {
    s === void 0 && (s = 0),
    t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    n === void 0 && (n = !0);
    const r = this
      , {params: o, wrapperEl: a} = r;
    if (r.animating && o.preventInteractionOnTransition)
        return !1;
    const l = r.minTranslate()
      , d = r.maxTranslate();
    let c;
    if (n && s > l ? c = l : n && s < d ? c = d : c = s,
    r.updateProgress(c),
    o.cssMode) {
        const u = r.isHorizontal();
        if (t === 0)
            a[u ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!r.support.smoothScroll)
                return ft({
                    swiper: r,
                    targetPosition: -c,
                    side: u ? "left" : "top"
                }),
                !0;
            a.scrollTo({
                [u ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (r.setTransition(0),
    r.setTranslate(c),
    e && (r.emit("beforeTransitionStart", t, i),
    r.emit("transitionEnd"))) : (r.setTransition(t),
    r.setTranslate(c),
    e && (r.emit("beforeTransitionStart", t, i),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(f) {
        !r || r.destroyed || f.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        r.animating = !1,
        e && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var un = {
    getTranslate: on,
    setTranslate: an,
    minTranslate: ln,
    maxTranslate: dn,
    translateTo: cn
};
function pn(s, t) {
    const e = this;
    e.params.cssMode || (e.wrapperEl.style.transitionDuration = `${s}ms`,
    e.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : ""),
    e.emit("setTransition", s, t)
}
function gt(s) {
    let {swiper: t, runCallbacks: e, direction: n, step: i} = s;
    const {activeIndex: r, previousIndex: o} = t;
    let a = n;
    if (a || (r > o ? a = "next" : r < o ? a = "prev" : a = "reset"),
    t.emit(`transition${i}`),
    e && r !== o) {
        if (a === "reset") {
            t.emit(`slideResetTransition${i}`);
            return
        }
        t.emit(`slideChangeTransition${i}`),
        a === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
    }
}
function fn(s, t) {
    s === void 0 && (s = !0);
    const e = this
      , {params: n} = e;
    n.cssMode || (n.autoHeight && e.updateAutoHeight(),
    gt({
        swiper: e,
        runCallbacks: s,
        direction: t,
        step: "Start"
    }))
}
function mn(s, t) {
    s === void 0 && (s = !0);
    const e = this
      , {params: n} = e;
    e.animating = !1,
    !n.cssMode && (e.setTransition(0),
    gt({
        swiper: e,
        runCallbacks: s,
        direction: t,
        step: "End"
    }))
}
var hn = {
    setTransition: pn,
    transitionStart: fn,
    transitionEnd: mn
};
function vn(s, t, e, n, i) {
    s === void 0 && (s = 0),
    e === void 0 && (e = !0),
    typeof s == "string" && (s = parseInt(s, 10));
    const r = this;
    let o = s;
    o < 0 && (o = 0);
    const {params: a, snapGrid: l, slidesGrid: d, previousIndex: c, activeIndex: u, rtlTranslate: f, wrapperEl: p, enabled: m} = r;
    if (!m && !n && !i || r.destroyed || r.animating && a.preventInteractionOnTransition)
        return !1;
    typeof t > "u" && (t = r.params.speed);
    const v = Math.min(r.params.slidesPerGroupSkip, o);
    let _ = v + Math.floor((o - v) / r.params.slidesPerGroup);
    _ >= l.length && (_ = l.length - 1);
    const h = -l[_];
    if (a.normalizeSlideIndex)
        for (let C = 0; C < d.length; C += 1) {
            const x = -Math.floor(h * 100)
              , y = Math.floor(d[C] * 100)
              , T = Math.floor(d[C + 1] * 100);
            typeof d[C + 1] < "u" ? x >= y && x < T - (T - y) / 2 ? o = C : x >= y && x < T && (o = C + 1) : x >= y && (o = C)
        }
    if (r.initialized && o !== u && (!r.allowSlideNext && (f ? h > r.translate && h > r.minTranslate() : h < r.translate && h < r.minTranslate()) || !r.allowSlidePrev && h > r.translate && h > r.maxTranslate() && (u || 0) !== o))
        return !1;
    o !== (c || 0) && e && r.emit("beforeSlideChangeStart"),
    r.updateProgress(h);
    let S;
    o > u ? S = "next" : o < u ? S = "prev" : S = "reset";
    const w = r.virtual && r.params.virtual.enabled;
    if (!(w && i) && (f && -h === r.translate || !f && h === r.translate))
        return r.updateActiveIndex(o),
        a.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        a.effect !== "slide" && r.setTranslate(h),
        S !== "reset" && (r.transitionStart(e, S),
        r.transitionEnd(e, S)),
        !1;
    if (a.cssMode) {
        const C = r.isHorizontal()
          , x = f ? h : -h;
        if (t === 0)
            w && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            w && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                p[C ? "scrollLeft" : "scrollTop"] = x
            }
            )) : p[C ? "scrollLeft" : "scrollTop"] = x,
            w && requestAnimationFrame( () => {
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            );
        else {
            if (!r.support.smoothScroll)
                return ft({
                    swiper: r,
                    targetPosition: x,
                    side: C ? "left" : "top"
                }),
                !0;
            p.scrollTo({
                [C ? "left" : "top"]: x,
                behavior: "smooth"
            })
        }
        return !0
    }
    const I = vt().isSafari;
    return w && !i && I && r.isElement && r.virtual.update(!1, !1, o),
    r.setTransition(t),
    r.setTranslate(h),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, n),
    r.transitionStart(e, S),
    t === 0 ? r.transitionEnd(e, S) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(x) {
        !r || r.destroyed || x.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(e, S))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function gn(s, t, e, n) {
    s === void 0 && (s = 0),
    e === void 0 && (e = !0),
    typeof s == "string" && (s = parseInt(s, 10));
    const i = this;
    if (i.destroyed)
        return;
    typeof t > "u" && (t = i.params.speed);
    const r = i.grid && i.params.grid && i.params.grid.rows > 1;
    let o = s;
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled)
            o = o + i.virtual.slidesBefore;
        else {
            let a;
            if (r) {
                const f = o * i.params.grid.rows;
                a = i.slides.find(p => p.getAttribute("data-swiper-slide-index") * 1 === f).column
            } else
                a = i.getSlideIndexByData(o);
            const l = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length
              , {centeredSlides: d} = i.params;
            let c = i.params.slidesPerView;
            c === "auto" ? c = i.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(i.params.slidesPerView, 10)),
            d && c % 2 === 0 && (c = c + 1));
            let u = l - a < c;
            if (d && (u = u || a < Math.ceil(c / 2)),
            n && d && i.params.slidesPerView !== "auto" && !r && (u = !1),
            u) {
                const f = d ? a < i.activeIndex ? "prev" : "next" : a - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                i.loopFix({
                    direction: f,
                    slideTo: !0,
                    activeSlideIndex: f === "next" ? a + 1 : a - l + 1,
                    slideRealIndex: f === "next" ? i.realIndex : void 0
                })
            }
            if (r) {
                const f = o * i.params.grid.rows;
                o = i.slides.find(p => p.getAttribute("data-swiper-slide-index") * 1 === f).column
            } else
                o = i.getSlideIndexByData(o)
        }
    return requestAnimationFrame( () => {
        i.slideTo(o, t, e, n)
    }
    ),
    i
}
function _n(s, t, e) {
    t === void 0 && (t = !0);
    const n = this
      , {enabled: i, params: r, animating: o} = n;
    if (!i || n.destroyed)
        return n;
    typeof s > "u" && (s = n.params.speed);
    let a = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
    const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a
      , d = n.virtual && r.virtual.enabled;
    if (r.loop) {
        if (o && !d && r.loopPreventsSliding)
            return !1;
        if (n.loopFix({
            direction: "next"
        }),
        n._clientLeft = n.wrapperEl.clientLeft,
        n.activeIndex === n.slides.length - 1 && r.cssMode)
            return requestAnimationFrame( () => {
                n.slideTo(n.activeIndex + l, s, t, e)
            }
            ),
            !0
    }
    return r.rewind && n.isEnd ? n.slideTo(0, s, t, e) : n.slideTo(n.activeIndex + l, s, t, e)
}
function wn(s, t, e) {
    t === void 0 && (t = !0);
    const n = this
      , {params: i, snapGrid: r, slidesGrid: o, rtlTranslate: a, enabled: l, animating: d} = n;
    if (!l || n.destroyed)
        return n;
    typeof s > "u" && (s = n.params.speed);
    const c = n.virtual && i.virtual.enabled;
    if (i.loop) {
        if (d && !c && i.loopPreventsSliding)
            return !1;
        n.loopFix({
            direction: "prev"
        }),
        n._clientLeft = n.wrapperEl.clientLeft
    }
    const u = a ? n.translate : -n.translate;
    function f(S) {
        return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S)
    }
    const p = f(u)
      , m = r.map(S => f(S))
      , v = i.freeMode && i.freeMode.enabled;
    let _ = r[m.indexOf(p) - 1];
    if (typeof _ > "u" && (i.cssMode || v)) {
        let S;
        r.forEach( (w, E) => {
            p >= w && (S = E)
        }
        ),
        typeof S < "u" && (_ = v ? r[S] : r[S > 0 ? S - 1 : S])
    }
    let h = 0;
    if (typeof _ < "u" && (h = o.indexOf(_),
    h < 0 && (h = n.activeIndex - 1),
    i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1,
    h = Math.max(h, 0))),
    i.rewind && n.isBeginning) {
        const S = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
        return n.slideTo(S, s, t, e)
    } else if (i.loop && n.activeIndex === 0 && i.cssMode)
        return requestAnimationFrame( () => {
            n.slideTo(h, s, t, e)
        }
        ),
        !0;
    return n.slideTo(h, s, t, e)
}
function Sn(s, t, e) {
    t === void 0 && (t = !0);
    const n = this;
    if (!n.destroyed)
        return typeof s > "u" && (s = n.params.speed),
        n.slideTo(n.activeIndex, s, t, e)
}
function bn(s, t, e, n) {
    t === void 0 && (t = !0),
    n === void 0 && (n = .5);
    const i = this;
    if (i.destroyed)
        return;
    typeof s > "u" && (s = i.params.speed);
    let r = i.activeIndex;
    const o = Math.min(i.params.slidesPerGroupSkip, r)
      , a = o + Math.floor((r - o) / i.params.slidesPerGroup)
      , l = i.rtlTranslate ? i.translate : -i.translate;
    if (l >= i.snapGrid[a]) {
        const d = i.snapGrid[a]
          , c = i.snapGrid[a + 1];
        l - d > (c - d) * n && (r += i.params.slidesPerGroup)
    } else {
        const d = i.snapGrid[a - 1]
          , c = i.snapGrid[a];
        l - d <= (c - d) * n && (r -= i.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, i.slidesGrid.length - 1),
    i.slideTo(r, s, t, e)
}
function yn() {
    const s = this;
    if (s.destroyed)
        return;
    const {params: t, slidesEl: e} = s
      , n = t.slidesPerView === "auto" ? s.slidesPerViewDynamic() : t.slidesPerView;
    let i = s.clickedIndex, r;
    const o = s.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (s.animating)
            return;
        r = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        t.centeredSlides ? i < s.loopedSlides - n / 2 || i > s.slides.length - s.loopedSlides + n / 2 ? (s.loopFix(),
        i = s.getSlideIndex(ee(e, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        Le( () => {
            s.slideTo(i)
        }
        )) : s.slideTo(i) : i > s.slides.length - n ? (s.loopFix(),
        i = s.getSlideIndex(ee(e, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        Le( () => {
            s.slideTo(i)
        }
        )) : s.slideTo(i)
    } else
        s.slideTo(i)
}
var Tn = {
    slideTo: vn,
    slideToLoop: gn,
    slideNext: _n,
    slidePrev: wn,
    slideReset: Sn,
    slideToClosest: bn,
    slideToClickedSlide: yn
};
function xn(s, t) {
    const e = this
      , {params: n, slidesEl: i} = e;
    if (!n.loop || e.virtual && e.params.virtual.enabled)
        return;
    const r = () => {
        ee(i, `.${n.slideClass}, swiper-slide`).forEach( (f, p) => {
            f.setAttribute("data-swiper-slide-index", p)
        }
        )
    }
      , o = e.grid && n.grid && n.grid.rows > 1
      , a = n.slidesPerGroup * (o ? n.grid.rows : 1)
      , l = e.slides.length % a !== 0
      , d = o && e.slides.length % n.grid.rows !== 0
      , c = u => {
        for (let f = 0; f < u; f += 1) {
            const p = e.isElement ? Ae("swiper-slide", [n.slideBlankClass]) : Ae("div", [n.slideClass, n.slideBlankClass]);
            e.slidesEl.append(p)
        }
    }
    ;
    if (l) {
        if (n.loopAddBlankSlides) {
            const u = a - e.slides.length % a;
            c(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            _e("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (d) {
        if (n.loopAddBlankSlides) {
            const u = n.grid.rows - e.slides.length % n.grid.rows;
            c(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            _e("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else
        r();
    e.loopFix({
        slideRealIndex: s,
        direction: n.centeredSlides ? void 0 : "next",
        initial: t
    })
}
function En(s) {
    let {slideRealIndex: t, slideTo: e=!0, direction: n, setTranslate: i, activeSlideIndex: r, initial: o, byController: a, byMousewheel: l} = s === void 0 ? {} : s;
    const d = this;
    if (!d.params.loop)
        return;
    d.emit("beforeLoopFix");
    const {slides: c, allowSlidePrev: u, allowSlideNext: f, slidesEl: p, params: m} = d
      , {centeredSlides: v, initialSlide: _} = m;
    if (d.allowSlidePrev = !0,
    d.allowSlideNext = !0,
    d.virtual && m.virtual.enabled) {
        e && (!m.centeredSlides && d.snapIndex === 0 ? d.slideTo(d.virtual.slides.length, 0, !1, !0) : m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0)),
        d.allowSlidePrev = u,
        d.allowSlideNext = f,
        d.emit("loopFix");
        return
    }
    let h = m.slidesPerView;
    h === "auto" ? h = d.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(m.slidesPerView, 10)),
    v && h % 2 === 0 && (h = h + 1));
    const S = m.slidesPerGroupAuto ? h : m.slidesPerGroup;
    let w = S;
    w % S !== 0 && (w += S - w % S),
    w += m.loopAdditionalSlides,
    d.loopedSlides = w;
    const E = d.grid && m.grid && m.grid.rows > 1;
    c.length < h + w || d.params.effect === "cards" && c.length < h + w * 2 ? _e("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : E && m.grid.fill === "row" && _e("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const b = []
      , I = []
      , C = E ? Math.ceil(c.length / m.grid.rows) : c.length
      , x = o && C - _ < h && !v;
    let y = x ? _ : d.activeIndex;
    typeof r > "u" ? r = d.getSlideIndex(c.find(j => j.classList.contains(m.slideActiveClass))) : y = r;
    const T = n === "next" || !n
      , M = n === "prev" || !n;
    let z = 0
      , k = 0;
    const U = (E ? c[r].column : r) + (v && typeof i > "u" ? -h / 2 + .5 : 0);
    if (U < w) {
        z = Math.max(w - U, S);
        for (let j = 0; j < w - U; j += 1) {
            const V = j - Math.floor(j / C) * C;
            if (E) {
                const N = C - V - 1;
                for (let q = c.length - 1; q >= 0; q -= 1)
                    c[q].column === N && b.push(q)
            } else
                b.push(C - V - 1)
        }
    } else if (U + h > C - w) {
        k = Math.max(U - (C - w * 2), S),
        x && (k = Math.max(k, h - C + _ + 1));
        for (let j = 0; j < k; j += 1) {
            const V = j - Math.floor(j / C) * C;
            E ? c.forEach( (N, q) => {
                N.column === V && I.push(q)
            }
            ) : I.push(V)
        }
    }
    if (d.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        d.__preventObserver__ = !1
    }
    ),
    d.params.effect === "cards" && c.length < h + w * 2 && (I.includes(r) && I.splice(I.indexOf(r), 1),
    b.includes(r) && b.splice(b.indexOf(r), 1)),
    M && b.forEach(j => {
        c[j].swiperLoopMoveDOM = !0,
        p.prepend(c[j]),
        c[j].swiperLoopMoveDOM = !1
    }
    ),
    T && I.forEach(j => {
        c[j].swiperLoopMoveDOM = !0,
        p.append(c[j]),
        c[j].swiperLoopMoveDOM = !1
    }
    ),
    d.recalcSlides(),
    m.slidesPerView === "auto" ? d.updateSlides() : E && (b.length > 0 && M || I.length > 0 && T) && d.slides.forEach( (j, V) => {
        d.grid.updateSlide(V, j, d.slides)
    }
    ),
    m.watchSlidesProgress && d.updateSlidesOffset(),
    e) {
        if (b.length > 0 && M) {
            if (typeof t > "u") {
                const j = d.slidesGrid[y]
                  , N = d.slidesGrid[y + z] - j;
                l ? d.setTranslate(d.translate - N) : (d.slideTo(y + Math.ceil(z), 0, !1, !0),
                i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - N,
                d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - N))
            } else if (i) {
                const j = E ? b.length / m.grid.rows : b.length;
                d.slideTo(d.activeIndex + j, 0, !1, !0),
                d.touchEventsData.currentTranslate = d.translate
            }
        } else if (I.length > 0 && T)
            if (typeof t > "u") {
                const j = d.slidesGrid[y]
                  , N = d.slidesGrid[y - k] - j;
                l ? d.setTranslate(d.translate - N) : (d.slideTo(y - k, 0, !1, !0),
                i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - N,
                d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - N))
            } else {
                const j = E ? I.length / m.grid.rows : I.length;
                d.slideTo(d.activeIndex - j, 0, !1, !0)
            }
    }
    if (d.allowSlidePrev = u,
    d.allowSlideNext = f,
    d.controller && d.controller.control && !a) {
        const j = {
            slideRealIndex: t,
            direction: n,
            setTranslate: i,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(d.controller.control) ? d.controller.control.forEach(V => {
            !V.destroyed && V.params.loop && V.loopFix({
                ...j,
                slideTo: V.params.slidesPerView === m.slidesPerView ? e : !1
            })
        }
        ) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
            ...j,
            slideTo: d.controller.control.params.slidesPerView === m.slidesPerView ? e : !1
        })
    }
    d.emit("loopFix")
}
function Cn() {
    const s = this
      , {params: t, slidesEl: e} = s;
    if (!t.loop || !e || s.virtual && s.params.virtual.enabled)
        return;
    s.recalcSlides();
    const n = [];
    s.slides.forEach(i => {
        const r = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        n[r] = i
    }
    ),
    s.slides.forEach(i => {
        i.removeAttribute("data-swiper-slide-index")
    }
    ),
    n.forEach(i => {
        e.append(i)
    }
    ),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0)
}
var Pn = {
    loopCreate: xn,
    loopFix: En,
    loopDestroy: Cn
};
function In(s) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const e = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
    e.style.cursor = "move",
    e.style.cursor = s ? "grabbing" : "grab",
    t.isElement && requestAnimationFrame( () => {
        t.__preventObserver__ = !1
    }
    )
}
function Mn() {
    const s = this;
    s.params.watchOverflow && s.isLocked || s.params.cssMode || (s.isElement && (s.__preventObserver__ = !0),
    s[s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    s.isElement && requestAnimationFrame( () => {
        s.__preventObserver__ = !1
    }
    ))
}
var On = {
    setGrabCursor: In,
    unsetGrabCursor: Mn
};
function $n(s, t) {
    t === void 0 && (t = this);
    function e(n) {
        if (!n || n === oe() || n === R())
            return null;
        n.assignedSlot && (n = n.assignedSlot);
        const i = n.closest(s);
        return !i && !n.getRootNode ? null : i || e(n.getRootNode().host)
    }
    return e(t)
}
function Je(s, t, e) {
    const n = R()
      , {params: i} = s
      , r = i.edgeSwipeDetection
      , o = i.edgeSwipeThreshold;
    return r && (e <= o || e >= n.innerWidth - o) ? r === "prevent" ? (t.preventDefault(),
    !0) : !1 : !0
}
function Ln(s) {
    const t = this
      , e = oe();
    let n = s;
    n.originalEvent && (n = n.originalEvent);
    const i = t.touchEventsData;
    if (n.type === "pointerdown") {
        if (i.pointerId !== null && i.pointerId !== n.pointerId)
            return;
        i.pointerId = n.pointerId
    } else
        n.type === "touchstart" && n.targetTouches.length === 1 && (i.touchId = n.targetTouches[0].identifier);
    if (n.type === "touchstart") {
        Je(t, n, n.targetTouches[0].pageX);
        return
    }
    const {params: r, touches: o, enabled: a} = t;
    if (!a || !r.simulateTouch && n.pointerType === "mouse" || t.animating && r.preventInteractionOnTransition)
        return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let l = n.target;
    if (r.touchEventsTarget === "wrapper" && !Vs(l, t.wrapperEl) || "which"in n && n.which === 3 || "button"in n && n.button > 0 || i.isTouched && i.isMoved)
        return;
    const d = !!r.noSwipingClass && r.noSwipingClass !== ""
      , c = n.composedPath ? n.composedPath() : n.path;
    d && n.target && n.target.shadowRoot && c && (l = c[0]);
    const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , f = !!(n.target && n.target.shadowRoot);
    if (r.noSwiping && (f ? $n(u, l) : l.closest(u))) {
        t.allowClick = !0;
        return
    }
    if (r.swipeHandler && !l.closest(r.swipeHandler))
        return;
    o.currentX = n.pageX,
    o.currentY = n.pageY;
    const p = o.currentX
      , m = o.currentY;
    if (!Je(t, n, p))
        return;
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    o.startX = p,
    o.startY = m,
    i.touchStartTime = ge(),
    t.allowClick = !0,
    t.updateSize(),
    t.swipeDirection = void 0,
    r.threshold > 0 && (i.allowThresholdMove = !1);
    let v = !0;
    l.matches(i.focusableElements) && (v = !1,
    l.nodeName === "SELECT" && (i.isTouched = !1)),
    e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== l && (n.pointerType === "mouse" || n.pointerType !== "mouse" && !l.matches(i.focusableElements)) && e.activeElement.blur();
    const _ = v && t.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || _) && !l.isContentEditable && n.preventDefault(),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", n)
}
function An(s) {
    const t = oe()
      , e = this
      , n = e.touchEventsData
      , {params: i, touches: r, rtlTranslate: o, enabled: a} = e;
    if (!a || !i.simulateTouch && s.pointerType === "mouse")
        return;
    let l = s;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (n.touchId !== null || l.pointerId !== n.pointerId))
        return;
    let d;
    if (l.type === "touchmove") {
        if (d = [...l.changedTouches].find(b => b.identifier === n.touchId),
        !d || d.identifier !== n.touchId)
            return
    } else
        d = l;
    if (!n.isTouched) {
        n.startMoving && n.isScrolling && e.emit("touchMoveOpposite", l);
        return
    }
    const c = d.pageX
      , u = d.pageY;
    if (l.preventedByNestedSwiper) {
        r.startX = c,
        r.startY = u;
        return
    }
    if (!e.allowTouchMove) {
        l.target.matches(n.focusableElements) || (e.allowClick = !1),
        n.isTouched && (Object.assign(r, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u
        }),
        n.touchStartTime = ge());
        return
    }
    if (i.touchReleaseOnEdges && !i.loop)
        if (e.isVertical()) {
            if (u < r.startY && e.translate <= e.maxTranslate() || u > r.startY && e.translate >= e.minTranslate()) {
                n.isTouched = !1,
                n.isMoved = !1;
                return
            }
        } else {
            if (o && (c > r.startX && -e.translate <= e.maxTranslate() || c < r.startX && -e.translate >= e.minTranslate()))
                return;
            if (!o && (c < r.startX && e.translate <= e.maxTranslate() || c > r.startX && e.translate >= e.minTranslate()))
                return
        }
    if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== l.target && l.pointerType !== "mouse" && t.activeElement.blur(),
    t.activeElement && l.target === t.activeElement && l.target.matches(n.focusableElements)) {
        n.isMoved = !0,
        e.allowClick = !1;
        return
    }
    n.allowTouchCallbacks && e.emit("touchMove", l),
    r.previousX = r.currentX,
    r.previousY = r.currentY,
    r.currentX = c,
    r.currentY = u;
    const f = r.currentX - r.startX
      , p = r.currentY - r.startY;
    if (e.params.threshold && Math.sqrt(f ** 2 + p ** 2) < e.params.threshold)
        return;
    if (typeof n.isScrolling > "u") {
        let b;
        e.isHorizontal() && r.currentY === r.startY || e.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : f * f + p * p >= 25 && (b = Math.atan2(Math.abs(p), Math.abs(f)) * 180 / Math.PI,
        n.isScrolling = e.isHorizontal() ? b > i.touchAngle : 90 - b > i.touchAngle)
    }
    if (n.isScrolling && e.emit("touchMoveOpposite", l),
    typeof n.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (n.startMoving = !0),
    n.isScrolling || l.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
        n.isTouched = !1;
        return
    }
    if (!n.startMoving)
        return;
    e.allowClick = !1,
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
    let m = e.isHorizontal() ? f : p
      , v = e.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    i.oneWayMovement && (m = Math.abs(m) * (o ? 1 : -1),
    v = Math.abs(v) * (o ? 1 : -1)),
    r.diff = m,
    m *= i.touchRatio,
    o && (m = -m,
    v = -v);
    const _ = e.touchesDirection;
    e.swipeDirection = m > 0 ? "prev" : "next",
    e.touchesDirection = v > 0 ? "prev" : "next";
    const h = e.params.loop && !i.cssMode
      , S = e.touchesDirection === "next" && e.allowSlideNext || e.touchesDirection === "prev" && e.allowSlidePrev;
    if (!n.isMoved) {
        if (h && S && e.loopFix({
            direction: e.swipeDirection
        }),
        n.startTranslate = e.getTranslate(),
        e.setTransition(0),
        e.animating) {
            const b = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            e.wrapperEl.dispatchEvent(b)
        }
        n.allowMomentumBounce = !1,
        i.grabCursor && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!0),
        e.emit("sliderFirstMove", l)
    }
    if (new Date().getTime(),
    i._loopSwapReset !== !1 && n.isMoved && n.allowThresholdMove && _ !== e.touchesDirection && h && S && Math.abs(m) >= 1) {
        Object.assign(r, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u,
            startTranslate: n.currentTranslate
        }),
        n.loopSwapReset = !0,
        n.startTranslate = n.currentTranslate;
        return
    }
    e.emit("sliderMove", l),
    n.isMoved = !0,
    n.currentTranslate = m + n.startTranslate;
    let w = !0
      , E = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (E = 0),
    m > 0 ? (h && S && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? e.minTranslate() - e.slidesSizesGrid[e.activeIndex + 1] - (i.slidesPerView !== "auto" && e.slides.length - i.slidesPerView >= 2 ? e.slidesSizesGrid[e.activeIndex + 1] + e.params.spaceBetween : 0) - e.params.spaceBetween : e.minTranslate()) && e.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    n.currentTranslate > e.minTranslate() && (w = !1,
    i.resistance && (n.currentTranslate = e.minTranslate() - 1 + (-e.minTranslate() + n.startTranslate + m) ** E))) : m < 0 && (h && S && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? e.maxTranslate() + e.slidesSizesGrid[e.slidesSizesGrid.length - 1] + e.params.spaceBetween + (i.slidesPerView !== "auto" && e.slides.length - i.slidesPerView >= 2 ? e.slidesSizesGrid[e.slidesSizesGrid.length - 1] + e.params.spaceBetween : 0) : e.maxTranslate()) && e.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: e.slides.length - (i.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
    }),
    n.currentTranslate < e.maxTranslate() && (w = !1,
    i.resistance && (n.currentTranslate = e.maxTranslate() + 1 - (e.maxTranslate() - n.startTranslate - m) ** E))),
    w && (l.preventedByNestedSwiper = !0),
    !e.allowSlideNext && e.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
    !e.allowSlidePrev && e.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
    !e.allowSlidePrev && !e.allowSlideNext && (n.currentTranslate = n.startTranslate),
    i.threshold > 0)
        if (Math.abs(m) > i.threshold || n.allowThresholdMove) {
            if (!n.allowThresholdMove) {
                n.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                n.currentTranslate = n.startTranslate,
                r.diff = e.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            n.currentTranslate = n.startTranslate;
            return
        }
    !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && e.freeMode || i.watchSlidesProgress) && (e.updateActiveIndex(),
    e.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && e.freeMode && e.freeMode.onTouchMove(),
    e.updateProgress(n.currentTranslate),
    e.setTranslate(n.currentTranslate))
}
function jn(s) {
    const t = this
      , e = t.touchEventsData;
    let n = s;
    n.originalEvent && (n = n.originalEvent);
    let i;
    if (n.type === "touchend" || n.type === "touchcancel") {
        if (i = [...n.changedTouches].find(b => b.identifier === e.touchId),
        !i || i.identifier !== e.touchId)
            return
    } else {
        if (e.touchId !== null || n.pointerId !== e.pointerId)
            return;
        i = n
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (t.browser.isSafari || t.browser.isWebView)))
        return;
    e.pointerId = null,
    e.touchId = null;
    const {params: o, touches: a, rtlTranslate: l, slidesGrid: d, enabled: c} = t;
    if (!c || !o.simulateTouch && n.pointerType === "mouse")
        return;
    if (e.allowTouchCallbacks && t.emit("touchEnd", n),
    e.allowTouchCallbacks = !1,
    !e.isTouched) {
        e.isMoved && o.grabCursor && t.setGrabCursor(!1),
        e.isMoved = !1,
        e.startMoving = !1;
        return
    }
    o.grabCursor && e.isMoved && e.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const u = ge()
      , f = u - e.touchStartTime;
    if (t.allowClick) {
        const b = n.path || n.composedPath && n.composedPath();
        t.updateClickedSlide(b && b[0] || n.target, b),
        t.emit("tap click", n),
        f < 300 && u - e.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
    }
    if (e.lastClickTime = ge(),
    Le( () => {
        t.destroyed || (t.allowClick = !0)
    }
    ),
    !e.isTouched || !e.isMoved || !t.swipeDirection || a.diff === 0 && !e.loopSwapReset || e.currentTranslate === e.startTranslate && !e.loopSwapReset) {
        e.isTouched = !1,
        e.isMoved = !1,
        e.startMoving = !1;
        return
    }
    e.isTouched = !1,
    e.isMoved = !1,
    e.startMoving = !1;
    let p;
    if (o.followFinger ? p = l ? t.translate : -t.translate : p = -e.currentTranslate,
    o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: p
        });
        return
    }
    const m = p >= -t.maxTranslate() && !t.params.loop;
    let v = 0
      , _ = t.slidesSizesGrid[0];
    for (let b = 0; b < d.length; b += b < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const I = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof d[b + I] < "u" ? (m || p >= d[b] && p < d[b + I]) && (v = b,
        _ = d[b + I] - d[b]) : (m || p >= d[b]) && (v = b,
        _ = d[d.length - 1] - d[d.length - 2])
    }
    let h = null
      , S = null;
    o.rewind && (t.isBeginning ? S = o.virtual && o.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
    const w = (p - d[v]) / _
      , E = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (f > o.longSwipesMs) {
        if (!o.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (w >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? h : v + E) : t.slideTo(v)),
        t.swipeDirection === "prev" && (w > 1 - o.longSwipesRatio ? t.slideTo(v + E) : S !== null && w < 0 && Math.abs(w) > o.longSwipesRatio ? t.slideTo(S) : t.slideTo(v))
    } else {
        if (!o.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl) ? n.target === t.navigation.nextEl ? t.slideTo(v + E) : t.slideTo(v) : (t.swipeDirection === "next" && t.slideTo(h !== null ? h : v + E),
        t.swipeDirection === "prev" && t.slideTo(S !== null ? S : v))
    }
}
function et() {
    const s = this
      , {params: t, el: e} = s;
    if (e && e.offsetWidth === 0)
        return;
    t.breakpoints && s.setBreakpoint();
    const {allowSlideNext: n, allowSlidePrev: i, snapGrid: r} = s
      , o = s.virtual && s.params.virtual.enabled;
    s.allowSlideNext = !0,
    s.allowSlidePrev = !0,
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
    const a = o && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !a ? s.slideTo(s.slides.length - 1, 0, !1, !0) : s.params.loop && !o ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout),
    s.autoplay.resizeTimeout = setTimeout( () => {
        s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume()
    }
    , 500)),
    s.allowSlidePrev = i,
    s.allowSlideNext = n,
    s.params.watchOverflow && r !== s.snapGrid && s.checkOverflow()
}
function zn(s) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && s.preventDefault(),
    t.params.preventClicksPropagation && t.animating && (s.stopPropagation(),
    s.stopImmediatePropagation())))
}
function Bn() {
    const s = this
      , {wrapperEl: t, rtlTranslate: e, enabled: n} = s;
    if (!n)
        return;
    s.previousTranslate = s.translate,
    s.isHorizontal() ? s.translate = -t.scrollLeft : s.translate = -t.scrollTop,
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
    let i;
    const r = s.maxTranslate() - s.minTranslate();
    r === 0 ? i = 0 : i = (s.translate - s.minTranslate()) / r,
    i !== s.progress && s.updateProgress(e ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1)
}
function kn(s) {
    const t = this;
    ve(t, s.target),
    !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
function Vn() {
    const s = this;
    s.documentTouchHandlerProceeded || (s.documentTouchHandlerProceeded = !0,
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"))
}
const _t = (s, t) => {
    const e = oe()
      , {params: n, el: i, wrapperEl: r, device: o} = s
      , a = !!n.nested
      , l = t === "on" ? "addEventListener" : "removeEventListener"
      , d = t;
    !i || typeof i == "string" || (e[l]("touchstart", s.onDocumentTouchStart, {
        passive: !1,
        capture: a
    }),
    i[l]("touchstart", s.onTouchStart, {
        passive: !1
    }),
    i[l]("pointerdown", s.onTouchStart, {
        passive: !1
    }),
    e[l]("touchmove", s.onTouchMove, {
        passive: !1,
        capture: a
    }),
    e[l]("pointermove", s.onTouchMove, {
        passive: !1,
        capture: a
    }),
    e[l]("touchend", s.onTouchEnd, {
        passive: !0
    }),
    e[l]("pointerup", s.onTouchEnd, {
        passive: !0
    }),
    e[l]("pointercancel", s.onTouchEnd, {
        passive: !0
    }),
    e[l]("touchcancel", s.onTouchEnd, {
        passive: !0
    }),
    e[l]("pointerout", s.onTouchEnd, {
        passive: !0
    }),
    e[l]("pointerleave", s.onTouchEnd, {
        passive: !0
    }),
    e[l]("contextmenu", s.onTouchEnd, {
        passive: !0
    }),
    (n.preventClicks || n.preventClicksPropagation) && i[l]("click", s.onClick, !0),
    n.cssMode && r[l]("scroll", s.onScroll),
    n.updateOnWindowResize ? s[d](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", et, !0) : s[d]("observerUpdate", et, !0),
    i[l]("load", s.onLoad, {
        capture: !0
    }))
}
;
function Gn() {
    const s = this
      , {params: t} = s;
    s.onTouchStart = Ln.bind(s),
    s.onTouchMove = An.bind(s),
    s.onTouchEnd = jn.bind(s),
    s.onDocumentTouchStart = Vn.bind(s),
    t.cssMode && (s.onScroll = Bn.bind(s)),
    s.onClick = zn.bind(s),
    s.onLoad = kn.bind(s),
    _t(s, "on")
}
function Nn() {
    _t(this, "off")
}
var Dn = {
    attachEvents: Gn,
    detachEvents: Nn
};
const tt = (s, t) => s.grid && t.grid && t.grid.rows > 1;
function Rn() {
    const s = this
      , {realIndex: t, initialized: e, params: n, el: i} = s
      , r = n.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const o = oe()
      , a = n.breakpointsBase === "window" || !n.breakpointsBase ? n.breakpointsBase : "container"
      , l = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? s.el : o.querySelector(n.breakpointsBase)
      , d = s.getBreakpoint(r, a, l);
    if (!d || s.currentBreakpoint === d)
        return;
    const u = (d in r ? r[d] : void 0) || s.originalParams
      , f = tt(s, n)
      , p = tt(s, u)
      , m = s.params.grabCursor
      , v = u.grabCursor
      , _ = n.enabled;
    f && !p ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`),
    s.emitContainerClasses()) : !f && p && (i.classList.add(`${n.containerModifierClass}grid`),
    (u.grid.fill && u.grid.fill === "column" || !u.grid.fill && n.grid.fill === "column") && i.classList.add(`${n.containerModifierClass}grid-column`),
    s.emitContainerClasses()),
    m && !v ? s.unsetGrabCursor() : !m && v && s.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(I => {
        if (typeof u[I] > "u")
            return;
        const C = n[I] && n[I].enabled
          , x = u[I] && u[I].enabled;
        C && !x && s[I].disable(),
        !C && x && s[I].enable()
    }
    );
    const h = u.direction && u.direction !== n.direction
      , S = n.loop && (u.slidesPerView !== n.slidesPerView || h)
      , w = n.loop;
    h && e && s.changeDirection(),
    W(s.params, u);
    const E = s.params.enabled
      , b = s.params.loop;
    Object.assign(s, {
        allowTouchMove: s.params.allowTouchMove,
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev
    }),
    _ && !E ? s.disable() : !_ && E && s.enable(),
    s.currentBreakpoint = d,
    s.emit("_beforeBreakpoint", u),
    e && (S ? (s.loopDestroy(),
    s.loopCreate(t),
    s.updateSlides()) : !w && b ? (s.loopCreate(t),
    s.updateSlides()) : w && !b && s.loopDestroy()),
    s.emit("breakpoint", u)
}
function Fn(s, t, e) {
    if (t === void 0 && (t = "window"),
    !s || t === "container" && !e)
        return;
    let n = !1;
    const i = R()
      , r = t === "window" ? i.innerHeight : e.clientHeight
      , o = Object.keys(s).map(a => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
            const l = parseFloat(a.substr(1));
            return {
                value: r * l,
                point: a
            }
        }
        return {
            value: a,
            point: a
        }
    }
    );
    o.sort( (a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
        const {point: l, value: d} = o[a];
        t === "window" ? i.matchMedia(`(min-width: ${d}px)`).matches && (n = l) : d <= e.clientWidth && (n = l)
    }
    return n || "max"
}
var Hn = {
    setBreakpoint: Rn,
    getBreakpoint: Fn
};
function Wn(s, t) {
    const e = [];
    return s.forEach(n => {
        typeof n == "object" ? Object.keys(n).forEach(i => {
            n[i] && e.push(t + i)
        }
        ) : typeof n == "string" && e.push(t + n)
    }
    ),
    e
}
function qn() {
    const s = this
      , {classNames: t, params: e, rtl: n, el: i, device: r} = s
      , o = Wn(["initialized", e.direction, {
        "free-mode": s.params.freeMode && e.freeMode.enabled
    }, {
        autoheight: e.autoHeight
    }, {
        rtl: n
    }, {
        grid: e.grid && e.grid.rows > 1
    }, {
        "grid-column": e.grid && e.grid.rows > 1 && e.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": e.cssMode
    }, {
        centered: e.cssMode && e.centeredSlides
    }, {
        "watch-progress": e.watchSlidesProgress
    }], e.containerModifierClass);
    t.push(...o),
    i.classList.add(...t),
    s.emitContainerClasses()
}
function Xn() {
    const s = this
      , {el: t, classNames: e} = s;
    !t || typeof t == "string" || (t.classList.remove(...e),
    s.emitContainerClasses())
}
var Yn = {
    addClasses: qn,
    removeClasses: Xn
};
function Un() {
    const s = this
      , {isLocked: t, params: e} = s
      , {slidesOffsetBefore: n} = e;
    if (n) {
        const i = s.slides.length - 1
          , r = s.slidesGrid[i] + s.slidesSizesGrid[i] + n * 2;
        s.isLocked = s.size > r
    } else
        s.isLocked = s.snapGrid.length === 1;
    e.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    e.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    t && t !== s.isLocked && (s.isEnd = !1),
    t !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock")
}
var Kn = {
    checkOverflow: Un
}
  , ze = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Qn(s, t) {
    return function(n) {
        n === void 0 && (n = {});
        const i = Object.keys(n)[0]
          , r = n[i];
        if (typeof r != "object" || r === null) {
            W(t, n);
            return
        }
        if (s[i] === !0 && (s[i] = {
            enabled: !0
        }),
        i === "navigation" && s[i] && s[i].enabled && !s[i].prevEl && !s[i].nextEl && (s[i].auto = !0),
        ["pagination", "scrollbar"].indexOf(i) >= 0 && s[i] && s[i].enabled && !s[i].el && (s[i].auto = !0),
        !(i in s && "enabled"in r)) {
            W(t, n);
            return
        }
        typeof s[i] == "object" && !("enabled"in s[i]) && (s[i].enabled = !0),
        s[i] || (s[i] = {
            enabled: !1
        }),
        W(t, n)
    }
}
const Ce = {
    eventsEmitter: Xs,
    update: rn,
    translate: un,
    transition: hn,
    slide: Tn,
    loop: Pn,
    grabCursor: On,
    events: Dn,
    breakpoints: Hn,
    checkOverflow: Kn,
    classes: Yn
}
  , Pe = {};
let Ne = class J {
    constructor() {
        let t, e;
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? e = i[0] : [t,e] = i,
        e || (e = {}),
        e = W({}, e),
        t && !e.el && (e.el = t);
        const o = oe();
        if (e.el && typeof e.el == "string" && o.querySelectorAll(e.el).length > 1) {
            const c = [];
            return o.querySelectorAll(e.el).forEach(u => {
                const f = W({}, e, {
                    el: u
                });
                c.push(new J(f))
            }
            ),
            c
        }
        const a = this;
        a.__swiper__ = !0,
        a.support = mt(),
        a.device = ht({
            userAgent: e.userAgent
        }),
        a.browser = vt(),
        a.eventsListeners = {},
        a.eventsAnyListeners = [],
        a.modules = [...a.__modules__],
        e.modules && Array.isArray(e.modules) && a.modules.push(...e.modules);
        const l = {};
        a.modules.forEach(c => {
            c({
                params: e,
                swiper: a,
                extendParams: Qn(e, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const d = W({}, ze, l);
        return a.params = W({}, d, Pe, e),
        a.originalParams = W({}, a.params),
        a.passedParams = W({}, e),
        a.params && a.params.on && Object.keys(a.params.on).forEach(c => {
            a.on(c, a.params.on[c])
        }
        ),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
            enabled: a.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
    }
    getDirectionLabel(t) {
        return this.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[t]
    }
    getSlideIndex(t) {
        const {slidesEl: e, params: n} = this
          , i = ee(e, `.${n.slideClass}, swiper-slide`)
          , r = Ke(i[0]);
        return Ke(t) - r
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.find(e => e.getAttribute("data-swiper-slide-index") * 1 === t))
    }
    recalcSlides() {
        const t = this
          , {slidesEl: e, params: n} = t;
        t.slides = ee(e, `.${n.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"))
    }
    setProgress(t, e) {
        const n = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = n.minTranslate()
          , o = (n.maxTranslate() - i) * t + i;
        n.translateTo(o, typeof e > "u" ? 0 : e),
        n.updateActiveIndex(),
        n.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const e = t.el.className.split(" ").filter(n => n.indexOf("swiper") === 0 || n.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", e.join(" "))
    }
    getSlideClasses(t) {
        const e = this;
        return e.destroyed ? "" : t.className.split(" ").filter(n => n.indexOf("swiper-slide") === 0 || n.indexOf(e.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const e = [];
        t.slides.forEach(n => {
            const i = t.getSlideClasses(n);
            e.push({
                slideEl: n,
                classNames: i
            }),
            t.emit("_slideClass", n, i)
        }
        ),
        t.emit("_slideClasses", e)
    }
    slidesPerViewDynamic(t, e) {
        t === void 0 && (t = "current"),
        e === void 0 && (e = !1);
        const n = this
          , {params: i, slides: r, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: d} = n;
        let c = 1;
        if (typeof i.slidesPerView == "number")
            return i.slidesPerView;
        if (i.centeredSlides) {
            let u = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0, f;
            for (let p = d + 1; p < r.length; p += 1)
                r[p] && !f && (u += Math.ceil(r[p].swiperSlideSize),
                c += 1,
                u > l && (f = !0));
            for (let p = d - 1; p >= 0; p -= 1)
                r[p] && !f && (u += r[p].swiperSlideSize,
                c += 1,
                u > l && (f = !0))
        } else if (t === "current")
            for (let u = d + 1; u < r.length; u += 1)
                (e ? o[u] + a[u] - o[d] < l : o[u] - o[d] < l) && (c += 1);
        else
            for (let u = d - 1; u >= 0; u -= 1)
                o[d] - o[u] < l && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const {snapGrid: e, params: n} = t;
        n.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && ve(t, o)
        }
        ),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
        function i() {
            const o = t.rtlTranslate ? t.translate * -1 : t.translate
              , a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
            t.setTranslate(a),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        let r;
        if (n.freeMode && n.freeMode.enabled && !n.cssMode)
            i(),
            n.autoHeight && t.updateAutoHeight();
        else {
            if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && t.isEnd && !n.centeredSlides) {
                const o = t.virtual && n.virtual.enabled ? t.virtual.slides : t.slides;
                r = t.slideTo(o.length - 1, 0, !1, !0)
            } else
                r = t.slideTo(t.activeIndex, 0, !1, !0);
            r || i()
        }
        n.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
        t.emit("update")
    }
    changeDirection(t, e) {
        e === void 0 && (e = !0);
        const n = this
          , i = n.params.direction;
        return t || (t = i === "horizontal" ? "vertical" : "horizontal"),
        t === i || t !== "horizontal" && t !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${i}`),
        n.el.classList.add(`${n.params.containerModifierClass}${t}`),
        n.emitContainerClasses(),
        n.params.direction = t,
        n.slides.forEach(r => {
            t === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        n.emit("changeDirection"),
        e && n.update()),
        n
    }
    changeLanguageDirection(t) {
        const e = this;
        e.rtl && t === "rtl" || !e.rtl && t === "ltr" || (e.rtl = t === "rtl",
        e.rtlTranslate = e.params.direction === "horizontal" && e.rtl,
        e.rtl ? (e.el.classList.add(`${e.params.containerModifierClass}rtl`),
        e.el.dir = "rtl") : (e.el.classList.remove(`${e.params.containerModifierClass}rtl`),
        e.el.dir = "ltr"),
        e.update())
    }
    mount(t) {
        const e = this;
        if (e.mounted)
            return !0;
        let n = t || e.params.el;
        if (typeof n == "string" && (n = document.querySelector(n)),
        !n)
            return !1;
        n.swiper = e,
        n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === e.params.swiperElementNodeName.toUpperCase() && (e.isElement = !0);
        const i = () => `.${(e.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(i()) : ee(n, i())[0];
        return !o && e.params.createElements && (o = Ae("div", e.params.wrapperClass),
        n.append(o),
        ee(n, `.${e.params.slideClass}`).forEach(a => {
            o.append(a)
        }
        )),
        Object.assign(e, {
            el: n,
            wrapperEl: o,
            slidesEl: e.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : o,
            hostEl: e.isElement ? n.parentNode.host : n,
            mounted: !0,
            rtl: n.dir.toLowerCase() === "rtl" || se(n, "direction") === "rtl",
            rtlTranslate: e.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || se(n, "direction") === "rtl"),
            wrongRTL: se(o, "display") === "-webkit-box"
        }),
        !0
    }
    init(t) {
        const e = this;
        if (e.initialized || e.mount(t) === !1)
            return e;
        e.emit("beforeInit"),
        e.params.breakpoints && e.setBreakpoint(),
        e.addClasses(),
        e.updateSize(),
        e.updateSlides(),
        e.params.watchOverflow && e.checkOverflow(),
        e.params.grabCursor && e.enabled && e.setGrabCursor(),
        e.params.loop && e.virtual && e.params.virtual.enabled ? e.slideTo(e.params.initialSlide + e.virtual.slidesBefore, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0),
        e.params.loop && e.loopCreate(void 0, !0),
        e.attachEvents();
        const i = [...e.el.querySelectorAll('[loading="lazy"]')];
        return e.isElement && i.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),
        i.forEach(r => {
            r.complete ? ve(e, r) : r.addEventListener("load", o => {
                ve(e, o.target)
            }
            )
        }
        ),
        je(e),
        e.initialized = !0,
        je(e),
        e.emit("init"),
        e.emit("afterInit"),
        e
    }
    destroy(t, e) {
        t === void 0 && (t = !0),
        e === void 0 && (e = !0);
        const n = this
          , {params: i, el: r, wrapperEl: o, slides: a} = n;
        return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"),
        n.initialized = !1,
        n.detachEvents(),
        i.loop && n.loopDestroy(),
        e && (n.removeClasses(),
        r && typeof r != "string" && r.removeAttribute("style"),
        o && o.removeAttribute("style"),
        a && a.length && a.forEach(l => {
            l.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        n.emit("destroy"),
        Object.keys(n.eventsListeners).forEach(l => {
            n.off(l)
        }
        ),
        t !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null),
        As(n)),
        n.destroyed = !0),
        null
    }
    static extendDefaults(t) {
        W(Pe, t)
    }
    static get extendedDefaults() {
        return Pe
    }
    static get defaults() {
        return ze
    }
    static installModule(t) {
        J.prototype.__modules__ || (J.prototype.__modules__ = []);
        const e = J.prototype.__modules__;
        typeof t == "function" && e.indexOf(t) < 0 && e.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(e => J.installModule(e)),
        J) : (J.installModule(t),
        J)
    }
}
;
Object.keys(Ce).forEach(s => {
    Object.keys(Ce[s]).forEach(t => {
        Ne.prototype[t] = Ce[s][t]
    }
    )
}
);
Ne.use([Ws, qs]);
const wt = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function re(s) {
    return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object" && !s.__swiper__
}
function ae(s, t) {
    const e = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(n => e.indexOf(n) < 0).forEach(n => {
        typeof s[n] > "u" ? s[n] = t[n] : re(t[n]) && re(s[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? s[n] = t[n] : ae(s[n], t[n]) : s[n] = t[n]
    }
    )
}
function St(s) {
    return s === void 0 && (s = {}),
    s.navigation && typeof s.navigation.nextEl > "u" && typeof s.navigation.prevEl > "u"
}
function bt(s) {
    return s === void 0 && (s = {}),
    s.pagination && typeof s.pagination.el > "u"
}
function yt(s) {
    return s === void 0 && (s = {}),
    s.scrollbar && typeof s.scrollbar.el > "u"
}
function Tt(s) {
    s === void 0 && (s = "");
    const t = s.split(" ").map(n => n.trim()).filter(n => !!n)
      , e = [];
    return t.forEach(n => {
        e.indexOf(n) < 0 && e.push(n)
    }
    ),
    e.join(" ")
}
function Zn(s) {
    return s === void 0 && (s = ""),
    s ? s.includes("swiper-wrapper") ? s : `swiper-wrapper ${s}` : "swiper-wrapper"
}
function Jn(s) {
    let {swiper: t, slides: e, passedParams: n, changedParams: i, nextEl: r, prevEl: o, scrollbarEl: a, paginationEl: l} = s;
    const d = i.filter(y => y !== "children" && y !== "direction" && y !== "wrapperClass")
      , {params: c, pagination: u, navigation: f, scrollbar: p, virtual: m, thumbs: v} = t;
    let _, h, S, w, E, b, I, C;
    i.includes("thumbs") && n.thumbs && n.thumbs.swiper && !n.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (_ = !0),
    i.includes("controller") && n.controller && n.controller.control && c.controller && !c.controller.control && (h = !0),
    i.includes("pagination") && n.pagination && (n.pagination.el || l) && (c.pagination || c.pagination === !1) && u && !u.el && (S = !0),
    i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || a) && (c.scrollbar || c.scrollbar === !1) && p && !p.el && (w = !0),
    i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || r) && (c.navigation || c.navigation === !1) && f && !f.prevEl && !f.nextEl && (E = !0);
    const x = y => {
        t[y] && (t[y].destroy(),
        y === "navigation" ? (t.isElement && (t[y].prevEl.remove(),
        t[y].nextEl.remove()),
        c[y].prevEl = void 0,
        c[y].nextEl = void 0,
        t[y].prevEl = void 0,
        t[y].nextEl = void 0) : (t.isElement && t[y].el.remove(),
        c[y].el = void 0,
        t[y].el = void 0))
    }
    ;
    i.includes("loop") && t.isElement && (c.loop && !n.loop ? b = !0 : !c.loop && n.loop ? I = !0 : C = !0),
    d.forEach(y => {
        if (re(c[y]) && re(n[y]))
            Object.assign(c[y], n[y]),
            (y === "navigation" || y === "pagination" || y === "scrollbar") && "enabled"in n[y] && !n[y].enabled && x(y);
        else {
            const T = n[y];
            (T === !0 || T === !1) && (y === "navigation" || y === "pagination" || y === "scrollbar") ? T === !1 && x(y) : c[y] = n[y]
        }
    }
    ),
    d.includes("controller") && !h && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control),
    i.includes("children") && e && m && c.virtual.enabled ? (m.slides = e,
    m.update(!0)) : i.includes("virtual") && m && c.virtual.enabled && (e && (m.slides = e),
    m.update(!0)),
    i.includes("children") && e && c.loop && (C = !0),
    _ && v.init() && v.update(!0),
    h && (t.controller.control = c.controller.control),
    S && (t.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
    l.classList.add("swiper-pagination"),
    l.part.add("pagination"),
    t.el.appendChild(l)),
    l && (c.pagination.el = l),
    u.init(),
    u.render(),
    u.update()),
    w && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"),
    a.classList.add("swiper-scrollbar"),
    a.part.add("scrollbar"),
    t.el.appendChild(a)),
    a && (c.scrollbar.el = a),
    p.init(),
    p.updateSize(),
    p.setTranslate()),
    E && (t.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"),
    r.classList.add("swiper-button-next"),
    r.innerHTML = t.hostEl.constructor.nextButtonSvg,
    r.part.add("button-next"),
    t.el.appendChild(r)),
    (!o || typeof o == "string") && (o = document.createElement("div"),
    o.classList.add("swiper-button-prev"),
    o.innerHTML = t.hostEl.constructor.prevButtonSvg,
    o.part.add("button-prev"),
    t.el.appendChild(o))),
    r && (c.navigation.nextEl = r),
    o && (c.navigation.prevEl = o),
    f.init(),
    f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev),
    i.includes("direction") && t.changeDirection(n.direction, !1),
    (b || C) && t.loopDestroy(),
    (I || C) && t.loopCreate(),
    t.update()
}
function st(s, t) {
    s === void 0 && (s = {});
    const e = {
        on: {}
    }
      , n = {}
      , i = {};
    ae(e, ze),
    e._emitClasses = !0,
    e.init = !1;
    const r = {}
      , o = wt.map(l => l.replace(/_/, ""))
      , a = Object.assign({}, s);
    return Object.keys(a).forEach(l => {
        typeof s[l] > "u" || (o.indexOf(l) >= 0 ? re(s[l]) ? (e[l] = {},
        i[l] = {},
        ae(e[l], s[l]),
        ae(i[l], s[l])) : (e[l] = s[l],
        i[l] = s[l]) : l.search(/on[A-Z]/) === 0 && typeof s[l] == "function" ? e.on[`${l[2].toLowerCase()}${l.substr(3)}`] = s[l] : r[l] = s[l])
    }
    ),
    ["navigation", "pagination", "scrollbar"].forEach(l => {
        e[l] === !0 && (e[l] = {}),
        e[l] === !1 && delete e[l]
    }
    ),
    {
        params: e,
        passedParams: i,
        rest: r,
        events: n
    }
}
function ei(s, t) {
    let {el: e, nextEl: n, prevEl: i, paginationEl: r, scrollbarEl: o, swiper: a} = s;
    St(t) && n && i && (a.params.navigation.nextEl = n,
    a.originalParams.navigation.nextEl = n,
    a.params.navigation.prevEl = i,
    a.originalParams.navigation.prevEl = i),
    bt(t) && r && (a.params.pagination.el = r,
    a.originalParams.pagination.el = r),
    yt(t) && o && (a.params.scrollbar.el = o,
    a.originalParams.scrollbar.el = o),
    a.init(e)
}
function ti(s, t, e, n, i) {
    const r = [];
    if (!t)
        return r;
    const o = l => {
        r.indexOf(l) < 0 && r.push(l)
    }
    ;
    if (e && n) {
        const l = n.map(i)
          , d = e.map(i);
        l.join("") !== d.join("") && o("children"),
        n.length !== e.length && o("children")
    }
    return wt.filter(l => l[0] === "_").map(l => l.replace(/_/, "")).forEach(l => {
        if (l in s && l in t)
            if (re(s[l]) && re(t[l])) {
                const d = Object.keys(s[l])
                  , c = Object.keys(t[l]);
                d.length !== c.length ? o(l) : (d.forEach(u => {
                    s[l][u] !== t[l][u] && o(l)
                }
                ),
                c.forEach(u => {
                    s[l][u] !== t[l][u] && o(l)
                }
                ))
            } else
                s[l] !== t[l] && o(l)
    }
    ),
    r
}
const si = s => {
    !s || s.destroyed || !s.params.virtual || s.params.virtual && !s.params.virtual.enabled || (s.updateSlides(),
    s.updateProgress(),
    s.updateSlidesClasses(),
    s.parallax && s.params.parallax && s.params.parallax.enabled && s.parallax.setTranslate())
}
;
function Ie(s, t, e) {
    s === void 0 && (s = {});
    const n = []
      , i = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    }
      , r = (o, a) => {
        Array.isArray(o) && o.forEach(l => {
            const d = typeof l.type == "symbol";
            a === "default" && (a = "container-end"),
            d && l.children ? r(l.children, a) : l.type && (l.type.name === "SwiperSlide" || l.type.name === "AsyncComponentWrapper") || l.componentOptions && l.componentOptions.tag === "SwiperSlide" ? n.push(l) : i[a] && i[a].push(l)
        }
        )
    }
    ;
    return Object.keys(s).forEach(o => {
        if (typeof s[o] != "function")
            return;
        const a = s[o]();
        r(a, o)
    }
    ),
    e.value = t.value,
    t.value = n,
    {
        slides: n,
        slots: i
    }
}
function ni(s, t, e) {
    if (!e)
        return null;
    const n = c => {
        let u = c;
        return c < 0 ? u = t.length + c : u >= t.length && (u = u - t.length),
        u
    }
      , i = s.value.isHorizontal() ? {
        [s.value.rtlTranslate ? "right" : "left"]: `${e.offset}px`
    } : {
        top: `${e.offset}px`
    }
      , {from: r, to: o} = e
      , a = s.value.params.loop ? -t.length : 0
      , l = s.value.params.loop ? t.length * 2 : t.length
      , d = [];
    for (let c = a; c < l; c += 1)
        c >= r && c <= o && d.length < t.length && d.push(t[n(c)]);
    return d.map(c => {
        if (c.props || (c.props = {}),
        c.props.style || (c.props.style = {}),
        c.props.swiperRef = s,
        c.props.style = i,
        c.type)
            return X(c.type, {
                ...c.props
            }, c.children);
        if (c.componentOptions)
            return X(c.componentOptions.Ctor, {
                ...c.props
            }, c.componentOptions.children)
    }
    )
}
const ii = {
    name: "Swiper",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        wrapperTag: {
            type: String,
            default: "div"
        },
        modules: {
            type: Array,
            default: void 0
        },
        init: {
            type: Boolean,
            default: void 0
        },
        direction: {
            type: String,
            default: void 0
        },
        oneWayMovement: {
            type: Boolean,
            default: void 0
        },
        swiperElementNodeName: {
            type: String,
            default: "SWIPER-CONTAINER"
        },
        touchEventsTarget: {
            type: String,
            default: void 0
        },
        initialSlide: {
            type: Number,
            default: void 0
        },
        speed: {
            type: Number,
            default: void 0
        },
        cssMode: {
            type: Boolean,
            default: void 0
        },
        updateOnWindowResize: {
            type: Boolean,
            default: void 0
        },
        resizeObserver: {
            type: Boolean,
            default: void 0
        },
        nested: {
            type: Boolean,
            default: void 0
        },
        focusableElements: {
            type: String,
            default: void 0
        },
        width: {
            type: Number,
            default: void 0
        },
        height: {
            type: Number,
            default: void 0
        },
        preventInteractionOnTransition: {
            type: Boolean,
            default: void 0
        },
        userAgent: {
            type: String,
            default: void 0
        },
        url: {
            type: String,
            default: void 0
        },
        edgeSwipeDetection: {
            type: [Boolean, String],
            default: void 0
        },
        edgeSwipeThreshold: {
            type: Number,
            default: void 0
        },
        autoHeight: {
            type: Boolean,
            default: void 0
        },
        setWrapperSize: {
            type: Boolean,
            default: void 0
        },
        virtualTranslate: {
            type: Boolean,
            default: void 0
        },
        effect: {
            type: String,
            default: void 0
        },
        breakpoints: {
            type: Object,
            default: void 0
        },
        breakpointsBase: {
            type: String,
            default: void 0
        },
        spaceBetween: {
            type: [Number, String],
            default: void 0
        },
        slidesPerView: {
            type: [Number, String],
            default: void 0
        },
        maxBackfaceHiddenSlides: {
            type: Number,
            default: void 0
        },
        slidesPerGroup: {
            type: Number,
            default: void 0
        },
        slidesPerGroupSkip: {
            type: Number,
            default: void 0
        },
        slidesPerGroupAuto: {
            type: Boolean,
            default: void 0
        },
        centeredSlides: {
            type: Boolean,
            default: void 0
        },
        centeredSlidesBounds: {
            type: Boolean,
            default: void 0
        },
        slidesOffsetBefore: {
            type: Number,
            default: void 0
        },
        slidesOffsetAfter: {
            type: Number,
            default: void 0
        },
        normalizeSlideIndex: {
            type: Boolean,
            default: void 0
        },
        centerInsufficientSlides: {
            type: Boolean,
            default: void 0
        },
        watchOverflow: {
            type: Boolean,
            default: void 0
        },
        roundLengths: {
            type: Boolean,
            default: void 0
        },
        touchRatio: {
            type: Number,
            default: void 0
        },
        touchAngle: {
            type: Number,
            default: void 0
        },
        simulateTouch: {
            type: Boolean,
            default: void 0
        },
        shortSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipesRatio: {
            type: Number,
            default: void 0
        },
        longSwipesMs: {
            type: Number,
            default: void 0
        },
        followFinger: {
            type: Boolean,
            default: void 0
        },
        allowTouchMove: {
            type: Boolean,
            default: void 0
        },
        threshold: {
            type: Number,
            default: void 0
        },
        touchMoveStopPropagation: {
            type: Boolean,
            default: void 0
        },
        touchStartPreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchStartForcePreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchReleaseOnEdges: {
            type: Boolean,
            default: void 0
        },
        uniqueNavElements: {
            type: Boolean,
            default: void 0
        },
        resistance: {
            type: Boolean,
            default: void 0
        },
        resistanceRatio: {
            type: Number,
            default: void 0
        },
        watchSlidesProgress: {
            type: Boolean,
            default: void 0
        },
        grabCursor: {
            type: Boolean,
            default: void 0
        },
        preventClicks: {
            type: Boolean,
            default: void 0
        },
        preventClicksPropagation: {
            type: Boolean,
            default: void 0
        },
        slideToClickedSlide: {
            type: Boolean,
            default: void 0
        },
        loop: {
            type: Boolean,
            default: void 0
        },
        loopedSlides: {
            type: Number,
            default: void 0
        },
        loopPreventsSliding: {
            type: Boolean,
            default: void 0
        },
        rewind: {
            type: Boolean,
            default: void 0
        },
        allowSlidePrev: {
            type: Boolean,
            default: void 0
        },
        allowSlideNext: {
            type: Boolean,
            default: void 0
        },
        swipeHandler: {
            type: Boolean,
            default: void 0
        },
        noSwiping: {
            type: Boolean,
            default: void 0
        },
        noSwipingClass: {
            type: String,
            default: void 0
        },
        noSwipingSelector: {
            type: String,
            default: void 0
        },
        passiveListeners: {
            type: Boolean,
            default: void 0
        },
        containerModifierClass: {
            type: String,
            default: void 0
        },
        slideClass: {
            type: String,
            default: void 0
        },
        slideActiveClass: {
            type: String,
            default: void 0
        },
        slideVisibleClass: {
            type: String,
            default: void 0
        },
        slideFullyVisibleClass: {
            type: String,
            default: void 0
        },
        slideBlankClass: {
            type: String,
            default: void 0
        },
        slideNextClass: {
            type: String,
            default: void 0
        },
        slidePrevClass: {
            type: String,
            default: void 0
        },
        wrapperClass: {
            type: String,
            default: void 0
        },
        lazyPreloaderClass: {
            type: String,
            default: void 0
        },
        lazyPreloadPrevNext: {
            type: Number,
            default: void 0
        },
        runCallbacksOnInit: {
            type: Boolean,
            default: void 0
        },
        observer: {
            type: Boolean,
            default: void 0
        },
        observeParents: {
            type: Boolean,
            default: void 0
        },
        observeSlideChildren: {
            type: Boolean,
            default: void 0
        },
        a11y: {
            type: [Boolean, Object],
            default: void 0
        },
        autoplay: {
            type: [Boolean, Object],
            default: void 0
        },
        controller: {
            type: Object,
            default: void 0
        },
        coverflowEffect: {
            type: Object,
            default: void 0
        },
        cubeEffect: {
            type: Object,
            default: void 0
        },
        fadeEffect: {
            type: Object,
            default: void 0
        },
        flipEffect: {
            type: Object,
            default: void 0
        },
        creativeEffect: {
            type: Object,
            default: void 0
        },
        cardsEffect: {
            type: Object,
            default: void 0
        },
        hashNavigation: {
            type: [Boolean, Object],
            default: void 0
        },
        history: {
            type: [Boolean, Object],
            default: void 0
        },
        keyboard: {
            type: [Boolean, Object],
            default: void 0
        },
        mousewheel: {
            type: [Boolean, Object],
            default: void 0
        },
        navigation: {
            type: [Boolean, Object],
            default: void 0
        },
        pagination: {
            type: [Boolean, Object],
            default: void 0
        },
        parallax: {
            type: [Boolean, Object],
            default: void 0
        },
        scrollbar: {
            type: [Boolean, Object],
            default: void 0
        },
        thumbs: {
            type: Object,
            default: void 0
        },
        virtual: {
            type: [Boolean, Object],
            default: void 0
        },
        zoom: {
            type: [Boolean, Object],
            default: void 0
        },
        grid: {
            type: [Object],
            default: void 0
        },
        freeMode: {
            type: [Boolean, Object],
            default: void 0
        },
        enabled: {
            type: Boolean,
            default: void 0
        }
    },
    emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
    setup(s, t) {
        let {slots: e, emit: n} = t;
        const {tag: i, wrapperTag: r} = s
          , o = O("swiper")
          , a = O(null)
          , l = O(!1)
          , d = O(!1)
          , c = O(null)
          , u = O(null)
          , f = O(null)
          , p = {
            value: []
        }
          , m = {
            value: []
        }
          , v = O(null)
          , _ = O(null)
          , h = O(null)
          , S = O(null)
          , {params: w, passedParams: E} = st(s);
        Ie(e, p, m),
        f.value = E,
        m.value = p.value;
        const b = () => {
            Ie(e, p, m),
            l.value = !0
        }
        ;
        w.onAny = function(x) {
            for (var y = arguments.length, T = new Array(y > 1 ? y - 1 : 0), M = 1; M < y; M++)
                T[M - 1] = arguments[M];
            n(x, ...T)
        }
        ,
        Object.assign(w.on, {
            _beforeBreakpoint: b,
            _containerClasses(x, y) {
                o.value = y
            }
        });
        const I = {
            ...w
        };
        if (delete I.wrapperClass,
        u.value = new Ne(I),
        u.value.virtual && u.value.params.virtual.enabled) {
            u.value.virtual.slides = p.value;
            const x = {
                cache: !1,
                slides: p.value,
                renderExternal: y => {
                    a.value = y
                }
                ,
                renderExternalUpdate: !1
            };
            ae(u.value.params.virtual, x),
            ae(u.value.originalParams.virtual, x)
        }
        ot( () => {
            !d.value && u.value && (u.value.emitSlidesClasses(),
            d.value = !0);
            const {passedParams: x} = st(s)
              , y = ti(x, f.value, p.value, m.value, T => T.props && T.props.key);
            f.value = x,
            (y.length || l.value) && u.value && !u.value.destroyed && Jn({
                swiper: u.value,
                slides: p.value,
                passedParams: x,
                changedParams: y,
                nextEl: v.value,
                prevEl: _.value,
                scrollbarEl: S.value,
                paginationEl: h.value
            }),
            l.value = !1
        }
        ),
        at("swiper", u),
        Me(a, () => {
            ke( () => {
                si(u.value)
            }
            )
        }
        ),
        ce( () => {
            c.value && (ei({
                el: c.value,
                nextEl: v.value,
                prevEl: _.value,
                paginationEl: h.value,
                scrollbarEl: S.value,
                swiper: u.value
            }, w),
            n("swiper", u.value))
        }
        ),
        we( () => {
            u.value && !u.value.destroyed && u.value.destroy(!0, !1)
        }
        );
        function C(x) {
            return w.virtual ? ni(u, x, a.value) : (x.forEach( (y, T) => {
                y.props || (y.props = {}),
                y.props.swiperRef = u,
                y.props.swiperSlideIndex = T
            }
            ),
            x)
        }
        return () => {
            const {slides: x, slots: y} = Ie(e, p, m);
            return X(i, {
                ref: c,
                class: Tt(o.value)
            }, [y["container-start"], X(r, {
                class: Zn(w.wrapperClass)
            }, [y["wrapper-start"], C(x), y["wrapper-end"]]), St(s) && [X("div", {
                ref: _,
                class: "swiper-button-prev"
            }), X("div", {
                ref: v,
                class: "swiper-button-next"
            })], yt(s) && X("div", {
                ref: S,
                class: "swiper-scrollbar"
            }), bt(s) && X("div", {
                ref: h,
                class: "swiper-pagination"
            }), y["container-end"]])
        }
    }
}
  , ri = {
    name: "SwiperSlide",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        swiperRef: {
            type: Object,
            required: !1
        },
        swiperSlideIndex: {
            type: Number,
            default: void 0,
            required: !1
        },
        zoom: {
            type: Boolean,
            default: void 0,
            required: !1
        },
        lazy: {
            type: Boolean,
            default: !1,
            required: !1
        },
        virtualIndex: {
            type: [String, Number],
            default: void 0
        }
    },
    setup(s, t) {
        let {slots: e} = t
          , n = !1;
        const {swiperRef: i} = s
          , r = O(null)
          , o = O("swiper-slide")
          , a = O(!1);
        function l(u, f, p) {
            f === r.value && (o.value = p)
        }
        ce( () => {
            !i || !i.value || (i.value.on("_slideClass", l),
            n = !0)
        }
        ),
        Mt( () => {
            n || !i || !i.value || (i.value.on("_slideClass", l),
            n = !0)
        }
        ),
        ot( () => {
            !r.value || !i || !i.value || (typeof s.swiperSlideIndex < "u" && (r.value.swiperSlideIndex = s.swiperSlideIndex),
            i.value.destroyed && o.value !== "swiper-slide" && (o.value = "swiper-slide"))
        }
        ),
        we( () => {
            !i || !i.value || i.value.off("_slideClass", l)
        }
        );
        const d = ie( () => ({
            isActive: o.value.indexOf("swiper-slide-active") >= 0,
            isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
            isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
            isNext: o.value.indexOf("swiper-slide-next") >= 0
        }));
        at("swiperSlide", d);
        const c = () => {
            a.value = !0
        }
        ;
        return () => X(s.tag, {
            class: Tt(`${o.value}`),
            ref: r,
            "data-swiper-slide-index": typeof s.virtualIndex > "u" && i && i.value && i.value.params.loop ? s.swiperSlideIndex : s.virtualIndex,
            onLoadCapture: c
        }, s.zoom ? X("div", {
            class: "swiper-zoom-container",
            "data-swiper-zoom": typeof s.zoom == "number" ? s.zoom : void 0
        }, [e.default && e.default(d.value), s.lazy && !a.value && X("div", {
            class: "swiper-lazy-preloader"
        })]) : [e.default && e.default(d.value), s.lazy && !a.value && X("div", {
            class: "swiper-lazy-preloader"
        })])
    }
}
  , oi = {
    ref: "el",
    class: "pmc"
}
  , xt = G({
    __name: "MobileCarousel",
    props: {
        assets: {}
    },
    emits: ["choose"],
    setup(s, {emit: t}) {
        const e = t
          , n = O("down")
          , i = le("el");
        ct(i, {
            threshold: 20,
            onSwipe: () => {
                (n.value === "left" || n.value === "right") && (window.escroll.disabled = !0)
            }
            ,
            onSwipeEnd: (o, a) => {
                n.value = a,
                window.escroll.disabled = !1
            }
        });
        const r = (o, a, l) => {
            e("choose", o, a, l)
        }
        ;
        return (o, a) => {
            const l = Z;
            return P(),
            $("div", oi, [B(L(ii), {
                "slides-per-view": 1.1,
                "space-between": 16,
                loop: !0,
                speed: 700,
                threshold: 20
            }, {
                default: F( () => [(P(!0),
                $(D, null, K(o.assets, (d, c) => (P(),
                H(L(ri), {
                    key: c,
                    class: "pmc__item",
                    onClick: u => r(u, d, c)
                }, {
                    default: F( () => [B(l, {
                        src: d == null ? void 0 : d.filename,
                        alt: d == null ? void 0 : d.alt,
                        class: "pmc__img"
                    }, null, 8, ["src", "alt"])]),
                    _: 2
                }, 1032, ["onClick"]))), 128))]),
                _: 1
            })], 512)
        }
    }
})
  , ai = {
    class: "slider-modal"
}
  , li = {
    class: "slider-modal__list"
}
  , di = {
    class: "slider-modal__btns"
}
  , ci = {
    class: "slider-modal__pagination"
}
  , Et = G({
    __name: "ImageSliderModal",
    props: {
        images: {},
        isOpen: {
            type: Boolean
        },
        selectedImage: {}
    },
    emits: ["close"],
    setup(s, {emit: t}) {
        const e = s
          , n = t
          , i = O(0)
          , r = O(null)
          , o = O(1)
          , a = O(!1)
          , l = O([])
          , d = O(0)
          , u = Ot(_ => {
            r.value = i.value;
            const h = l.value.length;
            i.value = (i.value + _ + h) % h,
            o.value = _
        }
        , 700)
          , f = _ => {
            d.value = _.touches[0].clientX
        }
          , p = _ => {
            const h = d.value - _.changedTouches[0].clientX;
            Math.abs(h) > 50 && u(h > 0 ? 1 : -1)
        }
          , m = async () => {
            const _ = l.value[i.value]
              , h = l.value[r.value]
              , S = _ == null ? void 0 : _.querySelector("img")
              , w = h == null ? void 0 : h.querySelector("img")
              , E = o.value
              , b = de.timeline({
                overwrite: !0
            })
              , I = "inset(0 0 0 100%)"
              , C = "inset(0 100% 0 0)";
            b.set(_, {
                clipPath: E === 1 ? I : C
            }),
            b.set(S, {
                scale: 1.3,
                opacity: 1
            }),
            h && (b.to(h, {
                clipPath: E === 1 ? C : I,
                duration: 1.5,
                ease: "power2.out"
            }, 0),
            b.to(w, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            }, 0)),
            b.to(_, {
                clipPath: "inset(0 0% 0 0%)",
                duration: 1.5,
                ease: "power2.out"
            }, 0),
            b.to(S, {
                scale: 1,
                duration: 1.5,
                ease: "power2.out"
            }, 0)
        }
          , v = _ => {
            _.key === "ArrowLeft" ? u(-1) : _.key === "ArrowRight" && u(1)
        }
        ;
        return Me(i, m),
        Me( () => e.isOpen, _ => {
            if (!_ || !e.selectedImage)
                return;
            const h = e.images.findIndex(S => S.filename === e.selectedImage.filename);
            h !== -1 && (i.value = h,
            r.value = (h - 1 + e.images.length) % e.images.length)
        }
        , {
            immediate: !0
        }),
        ce( () => {
            r.value = l.value.length - 1,
            window.addEventListener("keydown", v)
        }
        ),
        $t( () => {
            window.removeEventListener("keydown", v)
        }
        ),
        (_, h) => {
            const S = Z
              , w = Jt
              , E = es
              , b = Lt;
            return P(),
            H(b, {
                "is-open": _.isOpen,
                "modal-window-class": "slider-modal-window",
                onClose: h[10] || (h[10] = I => n("close"))
            }, {
                default: F( () => {
                    var I;
                    return [g("div", ai, [g("div", {
                        class: "slider-modal__wrapper",
                        onTouchstart: f,
                        onTouchend: p
                    }, [g("ul", li, [(P(!0),
                    $(D, null, K(_.images, (C, x) => (P(),
                    $("li", {
                        key: x,
                        ref_for: !0,
                        ref_key: "$items",
                        ref: l,
                        class: ne(["slider-modal__item", {
                            active: x === L(i),
                            prev: x === L(r)
                        }])
                    }, [B(S, {
                        src: C == null ? void 0 : C.filename,
                        alt: C == null ? void 0 : C.alt,
                        class: "slider-modal__img"
                    }, null, 8, ["src", "alt"])], 2))), 128))]), g("div", di, [g("button", {
                        type: "button",
                        class: ne(["slider-modal__btn", {
                            active: L(a)
                        }]),
                        onClick: h[0] || (h[0] = () => L(u)(-1)),
                        onMousedown: h[1] || (h[1] = C => a.value = !0),
                        onMouseup: h[2] || (h[2] = C => a.value = !1),
                        onTouchstart: h[3] || (h[3] = () => {
                            a.value = !0
                        }
                        ),
                        onTouchend: h[4] || (h[4] = C => a.value = !1)
                    }, [B(w)], 34), g("button", {
                        type: "button",
                        class: ne(["slider-modal__btn", {
                            active: L(a)
                        }]),
                        onClick: h[5] || (h[5] = () => L(u)(1)),
                        onMousedown: h[6] || (h[6] = C => a.value = !0),
                        onMouseup: h[7] || (h[7] = C => a.value = !1),
                        onTouchstart: h[8] || (h[8] = () => {
                            a.value = !0
                        }
                        ),
                        onTouchend: h[9] || (h[9] = C => a.value = !1)
                    }, [B(E)], 34)]), g("div", ci, [(P(!0),
                    $(D, null, K((I = _.images) == null ? void 0 : I.length, (C, x) => (P(),
                    $("span", {
                        key: x,
                        class: ne(["slider-modal__pag-item", {
                            "slider-modal__pag-item--active": L(i) === x
                        }])
                    }, null, 2))), 128))])], 32)])]
                }
                ),
                _: 1
            }, 8, ["is-open"])
        }
    }
})
  , ui = {
    class: "project-exterior"
}
  , pi = {
    class: "project-exterior__wrapper container"
}
  , fi = {
    class: "project-exterior__title"
}
  , mi = {
    class: "project-exterior__content"
}
  , hi = {
    class: "project-exterior__text"
}
  , vi = ["onClick"]
  , fo = G({
    __name: "ExteriorSection",
    props: {
        content: {}
    },
    setup(s) {
        const t = O(0)
          , e = O(null)
          , n = O(null)
          , i = O(!1)
          , r = O(null)
          , o = d => {
            if (!e.value)
                return;
            const c = de.timeline()
              , u = e.value.children[d];
            if (!u)
                return;
            const f = parseFloat(getComputedStyle(e.value).gap) || 0
              , p = u.getBoundingClientRect().width + f;
            c.to(e.value, {
                duration: 1,
                x: -p * d,
                ease: "power2.out"
            }, .01),
            t.value = d
        }
          , a = (d, c, u) => {
            if (r.value = c,
            u === t.value) {
                i.value = !0;
                return
            }
            o(u)
        }
          , l = () => {
            i.value = !1,
            r.value = null
        }
        ;
        return (d, c) => {
            var m, v, _, h, S;
            const u = Z
              , f = xt
              , p = Et;
            return P(),
            $("section", ui, [g("div", pi, [g("h2", fi, A((m = d.content) == null ? void 0 : m.title), 1), g("div", mi, [g("p", hi, A((v = d.content) == null ? void 0 : v.text), 1), g("div", {
                ref_key: "sliderContainerRef",
                ref: n,
                class: "project-exterior__slider"
            }, [g("ul", {
                ref_key: "sliderRef",
                ref: e,
                class: "project-exterior__list"
            }, [(P(!0),
            $(D, null, K((_ = d.content) == null ? void 0 : _.assets, (w, E) => (P(),
            $("li", {
                key: E,
                class: ne(["project-exterior__item", {
                    "project-exterior__item--active": E === L(t)
                }]),
                onClick: b => a(b, w, E)
            }, [B(u, {
                src: w == null ? void 0 : w.filename,
                alt: w == null ? void 0 : w.alt,
                width: 1920,
                class: "project-exterior__img"
            }, null, 8, ["src", "alt"])], 10, vi))), 128))], 512), B(f, {
                assets: (h = d.content) == null ? void 0 : h.assets,
                onChoose: a
            }, null, 8, ["assets"])], 512)])]), B(p, {
                "is-open": L(i),
                images: (S = d.content) == null ? void 0 : S.assets,
                "selected-image": L(r),
                onClose: l
            }, null, 8, ["is-open", "images", "selected-image"])])
        }
    }
})
  , gi = {
    class: "project-facilities__wrapper container"
}
  , _i = {
    class: "project-facilities__top"
}
  , wi = {
    class: "project-facilities__subtitle"
}
  , Si = {
    class: "project-facilities__title"
}
  , bi = {
    class: "project-facilities__block-wrapper"
}
  , yi = {
    class: "project-facilities__assets"
}
  , Ti = {
    class: "project-facilities__content-c"
}
  , xi = {
    class: "project-facilities__content"
}
  , Ei = ["onMouseenter"]
  , Ci = {
    class: "project-facilities__item"
}
  , Pi = {
    class: "project-facilities__item-wrapper"
}
  , Ii = {
    class: "project-facilities__info"
}
  , Mi = {
    class: "project-facilities__item-title"
}
  , Oi = {
    class: "project-facilities__item-text"
}
  , mo = G({
    __name: "FacilitiesSection",
    props: {
        content: {}
    },
    setup(s) {
        const t = O(null);
        Se(t);
        const e = O(null)
          , n = O(null)
          , i = O(null)
          , r = O(!1)
          , o = () => {
            var l;
            n.value = (l = e.value) == null ? void 0 : l.querySelectorAll("[data-f-asset]"),
            n.value && n.value.forEach( (d, c) => {
                c > 0 && de.set(d, {
                    scale: 1.3,
                    clipPath: "inset(100% 0 0 0)"
                })
            }
            )
        }
          , a = l => {
            if (window.innerWidth < 860 || r.value && i.value === l)
                return;
            const d = i.value;
            if (i.value = l,
            d === null)
                return;
            const c = n.value[l]
              , u = d !== null ? n.value[d] : null;
            if (!c || l === d)
                return;
            const f = d > l ? -1 : 1
              , p = n.value.length
              , m = de.timeline({
                defaults: {
                    duration: 1.5
                }
            });
            n.value.forEach( (v, _) => {
                if (_ === l) {
                    m.set(v.parentElement, {
                        zIndex: p + 1
                    });
                    return
                }
                if (_ === d) {
                    m.set(v.parentElement, {
                        zIndex: p
                    });
                    return
                }
                m.set(v.parentElement, {
                    zIndex: f === 1 ? _ : p - _
                })
            }
            ),
            m.set(c, {
                scale: 1.3,
                clipPath: "inset(100% 0 0 0)"
            }),
            u && m.to(u, {
                scale: 1.3,
                clipPath: "inset(0 0 0 0)"
            }, 0),
            m.to(c, {
                display: "block",
                scale: 1,
                clipPath: "inset(0% 0 0 0)",
                onComplete: () => {
                    r.value = !1
                }
            }, 0),
            r.value = !0
        }
        ;
        return ce(async () => {
            await ke(),
            e.value && o()
        }
        ),
        (l, d) => {
            var u, f, p, m;
            const c = Z;
            return P(),
            $("section", {
                ref_key: "$el",
                ref: t,
                class: "project-facilities"
            }, [g("div", gi, [g("div", _i, [g("p", wi, A((u = l.content) == null ? void 0 : u.subtitle), 1), g("h2", Si, A((f = l.content) == null ? void 0 : f.title), 1)]), g("div", {
                ref_key: "contentRef",
                ref: e,
                class: "project-facilities__block"
            }, [g("div", bi, [g("div", yi, [(P(!0),
            $(D, null, K((p = l.content) == null ? void 0 : p.slider, (v, _) => {
                var h, S;
                return P(),
                $("div", {
                    key: _,
                    class: "project-facilities__image-item"
                }, [B(c, {
                    "data-f-asset": "",
                    src: (h = v == null ? void 0 : v.asset) == null ? void 0 : h.filename,
                    alt: (S = v == null ? void 0 : v.asset) == null ? void 0 : S.alt,
                    width: 900,
                    class: "project-facilities__img"
                }, null, 8, ["src", "alt"])])
            }
            ), 128))]), g("div", Ti, [g("div", xi, [(P(!0),
            $(D, null, K((m = l.content) == null ? void 0 : m.slider, (v, _) => {
                var h, S;
                return P(),
                $("div", {
                    key: _,
                    "data-f-text": "",
                    class: "project-facilities__content-wrapper",
                    onMouseenter: w => a(_)
                }, [d[1] || (d[1] = g("div", {
                    "aria-hidden": "true",
                    class: "project-facilities__overlay"
                }, null, -1)), g("div", Ci, [B(c, {
                    src: (h = v == null ? void 0 : v.asset) == null ? void 0 : h.filename,
                    alt: (S = v == null ? void 0 : v.asset) == null ? void 0 : S.alt,
                    width: 900,
                    class: "project-facilities__img project-facilities__img--mob"
                }, null, 8, ["src", "alt"]), d[0] || (d[0] = g("div", {
                    class: "project-facilities__line"
                }, null, -1)), g("div", Pi, [g("div", Ii, [g("h3", Mi, A(v == null ? void 0 : v.title), 1), g("p", Oi, A(v == null ? void 0 : v.description), 1)])])])], 40, Ei)
            }
            ), 128))])])])], 512)])], 512)
        }
    }
})
  , $i = {
    class: "app-projects"
}
  , Li = {
    class: "app-projects__wrapper container"
}
  , Ai = {
    key: 0,
    class: "app-projects__title"
}
  , ji = {
    key: 1,
    class: "app-projects__text"
}
  , zi = {
    class: "app-projects__list-wrapper"
}
  , Bi = {
    class: "app-projects__list"
}
  , ki = {
    class: "app-projects__info"
}
  , Vi = {
    class: "app-projects__name"
}
  , Gi = {
    class: "app-prjects__info-content"
}
  , Ni = {
    class: "app-projects__specs"
}
  , Di = {
    class: "app-projects__spec"
}
  , Ri = {
    class: "app-projects__spec"
}
  , Fi = {
    class: "app-projects__spec"
}
  , Hi = G({
    __name: "AppFeaturedProjects",
    props: {
        title: {},
        text: {},
        projects: {}
    },
    setup(s) {
        const t = s
          , e = ut("(max-width: 860px)")
          , n = O(!1)
          , i = ie( () => t.projects ?? [])
          , r = ie( () => e.value || n.value ? i.value : i.value.slice(0, 8))
          , o = nt()
          , a = () => {
            o.meta.isProjectTransition = !0
        }
        ;
        return (l, d) => {
            const c = Z
              , u = At
              , f = Be;
            return P(),
            $("div", $i, [g("div", Li, [l.title ? (P(),
            $("h2", Ai, A(l.title), 1)) : Q("", !0), l.text ? (P(),
            $("p", ji, A(l.text), 1)) : Q("", !0), g("div", zi, [g("ul", Bi, [(P(!0),
            $(D, null, K(L(r), (p, m) => (P(),
            $("li", {
                key: m,
                class: "app-projects__card"
            }, [B(u, {
                "data-t-card": "",
                to: `/${p == null ? void 0 : p.full_slug}`,
                "data-slug": p == null ? void 0 : p.slug,
                class: "app-projects__link",
                onClick: a
            }, {
                default: F( () => {
                    var v, _, h, S, w, E, b, I;
                    return [B(c, {
                        src: (_ = (v = p == null ? void 0 : p.content) == null ? void 0 : v.cover) == null ? void 0 : _.filename,
                        alt: (S = (h = p == null ? void 0 : p.content) == null ? void 0 : h.cover) == null ? void 0 : S.alt,
                        class: "app-projects__img",
                        "data-t-img": "",
                        width: 1920,
                        "data-slug": p == null ? void 0 : p.slug
                    }, null, 8, ["src", "alt", "data-slug"]), g("div", ki, [g("h3", Vi, A((w = p == null ? void 0 : p.content) == null ? void 0 : w.name), 1), g("div", Gi, [g("div", Ni, [g("p", Di, A((E = p == null ? void 0 : p.content) == null ? void 0 : E.spec_1), 1), g("p", Ri, A((b = p == null ? void 0 : p.content) == null ? void 0 : b.spec_2), 1), g("p", Fi, A((I = p == null ? void 0 : p.content) == null ? void 0 : I.spec_3), 1)]), d[1] || (d[1] = g("div", {
                        class: "app-projects__plus"
                    }, [g("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, [g("path", {
                        d: "M11 13V23H13V13H23V11H13V1H11V11H1V13H11Z",
                        fill: "url(#paint0_linear_1_2446)"
                    }), g("defs", null, [g("linearGradient", {
                        id: "paint0_linear_1_2446",
                        x1: "12",
                        y1: "1",
                        x2: "12",
                        y2: "23",
                        gradientUnits: "userSpaceOnUse"
                    }, [g("stop", {
                        "stop-color": "#FFCE7E"
                    }), g("stop", {
                        offset: "1",
                        "stop-color": "#997C4B"
                    })])])])], -1))])])]
                }
                ),
                _: 2
            }, 1032, ["to", "data-slug"])]))), 128))]), L(i).length > 8 ? (P(),
            H(f, {
                key: 0,
                class: "app-projects__btn",
                type: "button",
                onClick: d[0] || (d[0] = p => n.value = !L(n))
            }, {
                default: F( () => [g("span", null, A(L(n) ? "LESS" : "MORE"), 1)]),
                _: 1
            })) : Q("", !0)])])])
        }
    }
})
  , Wi = te(Hi, [["__scopeId", "data-v-62b77afe"]])
  , qi = {
    class: "project-feat-pr"
}
  , ho = G({
    __name: "FeaturedProjectsSection",
    props: {
        content: {}
    },
    setup(s) {
        return (t, e) => {
            var i, r, o;
            const n = Wi;
            return P(),
            $("section", qi, [B(n, {
                projects: (i = t.content) == null ? void 0 : i.featured_projects,
                title: (r = t.content) == null ? void 0 : r.title,
                text: (o = t.content) == null ? void 0 : o.text
            }, null, 8, ["projects", "title", "text"])])
        }
    }
})
  , Xi = {
    class: "project-form"
}
  , Yi = {
    class: "project-form__wrapper container"
}
  , Ui = {
    class: "project-form__img-wrapper"
}
  , Ki = {
    class: "project-form__text-wrapper project-form__text-wrapper--mob"
}
  , Qi = {
    class: "project-form__title"
}
  , Zi = {
    class: "project-form__text"
}
  , Ji = {
    class: "project-form__content"
}
  , er = {
    class: "project-form__text-wrapper"
}
  , tr = {
    class: "project-form__title"
}
  , sr = {
    class: "project-form__text"
}
  , vo = G({
    __name: "FormSection",
    props: {
        content: {},
        projectName: {}
    },
    setup(s) {
        const t = s
          , {submitHandler: e, isFetching: n} = jt("Project: " + t.projectName)
          , i = async o => {
            await e(o),
            r.value.name.value = "",
            r.value.phone.value = "",
            r.value.email.value = ""
        }
          , r = O({
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
        });
        return (o, a) => {
            var c, u, f, p, m, v, _, h;
            const l = Z
              , d = zt;
            return P(),
            $("section", Xi, [g("div", Yi, [g("div", Ui, [g("div", Ki, [g("h2", Qi, A((c = o.content) == null ? void 0 : c.title), 1), g("p", Zi, A((u = o.content) == null ? void 0 : u.text), 1)]), B(l, {
                src: (p = (f = o.content) == null ? void 0 : f.asset) == null ? void 0 : p.filename,
                alt: (v = (m = o.content) == null ? void 0 : m.asset) == null ? void 0 : v.alt,
                class: "project-form__img"
            }, null, 8, ["src", "alt"])]), g("div", Ji, [g("div", er, [g("h2", tr, A((_ = o.content) == null ? void 0 : _.title), 1), g("p", sr, A((h = o.content) == null ? void 0 : h.text), 1)]), B(d, {
                modelValue: L(r),
                "onUpdate:modelValue": a[0] || (a[0] = S => lt(r) ? r.value = S : null),
                "form-id": "project-form",
                class: "project__form",
                "show-button": !0,
                "is-loading": L(n),
                "btn-text": o.content.button_text,
                "btn-position": "left",
                onSubmit: i
            }, null, 8, ["modelValue", "is-loading", "btn-text"])])])])
        }
    }
})
  , nr = {
    class: "project-gallery"
}
  , go = G({
    __name: "GallerySection",
    props: {
        content: {}
    },
    setup(s) {
        return (t, e) => {
            var i;
            const n = Zt;
            return P(),
            $("section", nr, [B(n, {
                images: ((i = t.content) == null ? void 0 : i.images) || []
            }, null, 8, ["images"])])
        }
    }
})
  , ir = {
    class: "interior-apart__img-item"
}
  , rr = G({
    __name: "InteriorApartmentImg",
    props: {
        img: {},
        idx: {}
    },
    emits: ["open"],
    setup(s, {emit: t}) {
        const e = t;
        return (n, i) => {
            var o, a;
            const r = Z;
            return P(),
            $("li", ir, [B(r, {
                src: (o = n.img) == null ? void 0 : o.filename,
                alt: (a = n.img) == null ? void 0 : a.alt,
                class: "interior-apart__img",
                onClick: i[0] || (i[0] = l => e("open"))
            }, null, 8, ["src", "alt"])])
        }
    }
})
  , or = te(rr, [["__scopeId", "data-v-f5c08a9f"]])
  , ar = {
    class: "interior-apart"
}
  , lr = {
    class: "interior-apart__name interior-apart__name--mob"
}
  , dr = {
    class: "interior-apart__desc interior-apart__desc--mob"
}
  , cr = G({
    __name: "InteriorApartment",
    props: {
        apartment: {}
    },
    setup(s) {
        const t = O(0)
          , e = le("sliderRef")
          , n = le("sliderContainerRef")
          , i = O(!1)
          , r = O(null)
          , o = ut("(max-width: 860px)")
          , a = u => {
            if (!e.value || !n.value || !o.value)
                return;
            const f = e.value.children[u];
            if (!f)
                return;
            const p = parseFloat(getComputedStyle(e.value).gap) || 0
              , m = f.getBoundingClientRect().width + p;
            de.to(e.value, {
                duration: 1,
                x: -m * u,
                ease: "power2.out"
            }),
            t.value = u
        }
          , l = (u, f, p) => {
            if (r.value = f,
            p === t.value || !o.value) {
                i.value = !0;
                return
            }
            a(p)
        }
          , d = () => {
            i.value = !1,
            r.value = null
        }
          , c = O("down");
        return ct(n, {
            threshold: 20,
            onSwipe: () => {
                (c.value === "left" || c.value === "right") && (window.escroll.disabled = !0)
            }
            ,
            onSwipeEnd: (u, f) => {
                c.value = f,
                window.escroll.disabled = !1
            }
        }),
        (u, f) => {
            var _, h, S, w, E, b;
            const p = or
              , m = xt
              , v = Et;
            return P(),
            $("div", ar, [g("h3", lr, A((_ = u.apartment) == null ? void 0 : _.name), 1), g("p", dr, A((h = u.apartment) == null ? void 0 : h.price), 1), g("div", {
                ref_key: "sliderContainerRef",
                ref: n,
                class: "interior-apart__img-list-wrapper"
            }, [(S = u.apartment) != null && S.assets ? (P(),
            $("ul", {
                key: 0,
                ref_key: "sliderRef",
                ref: e,
                class: "interior-apart__img-list"
            }, [(P(!0),
            $(D, null, K((w = u.apartment) == null ? void 0 : w.assets, (I, C) => (P(),
            H(p, {
                key: I._uid,
                img: I,
                idx: C,
                onOpen: x => l(x, I, C)
            }, null, 8, ["img", "idx", "onOpen"]))), 128))], 512)) : Q("", !0), B(m, {
                assets: (E = u.apartment) == null ? void 0 : E.assets,
                onChoose: l
            }, null, 8, ["assets"])], 512), B(v, {
                "is-open": L(i),
                images: (b = u.apartment) == null ? void 0 : b.assets,
                "selected-image": L(r),
                onClose: d
            }, null, 8, ["is-open", "images", "selected-image"])])
        }
    }
})
  , ur = {
    class: "i-modal__content"
}
  , pr = {
    class: "i-modal__list"
}
  , fr = ["onClick"]
  , mr = {
    class: "i-modal-item__info-wrapper"
}
  , hr = {
    class: "i-modal-item__info"
}
  , vr = {
    class: "i-modal-item__title"
}
  , gr = {
    class: "i-modal-item__text"
}
  , _r = G({
    __name: "InteriorModal",
    props: Oe({
        apartmentsList: {},
        selectedApartment: {},
        buttonText: {}
    }, {
        open: {
            type: Boolean
        },
        openModifiers: {}
    }),
    emits: Oe(["select"], ["update:open"]),
    setup(s, {emit: t}) {
        const e = t
          , n = dt(s, "open")
          , i = r => {
            e("select", r),
            n.value = !1
        }
        ;
        return (r, o) => {
            const a = Vt
              , l = Ve
              , d = Gt
              , c = kt
              , u = rt;
            return P(),
            H(u, null, {
                default: F( () => [(P(),
                H(Bt, {
                    to: "#teleports"
                }, [B($e, {
                    name: "dialog",
                    duration: 600
                }, {
                    default: F( () => [B(c, {
                        "is-open": n.value,
                        class: "i-modal",
                        onClose: o[1] || (o[1] = f => n.value = !1)
                    }, {
                        default: F( () => [B(a, {
                            class: "i-modal__backdrop",
                            onClick: o[0] || (o[0] = f => n.value = !1)
                        }), B(d, {
                            class: "i-modal__wrapper"
                        }, {
                            default: F( () => [g("div", ur, [g("ul", pr, [(P(!0),
                            $(D, null, K(r.apartmentsList, (f, p) => {
                                var m;
                                return P(),
                                $("li", {
                                    key: p,
                                    class: ne(["i-modal__item i-modal-item", {
                                        "i-modal-item--active": ((m = r.selectedApartment) == null ? void 0 : m._uid) === (f == null ? void 0 : f._uid)
                                    }]),
                                    onClick: v => i(f)
                                }, [g("div", mr, [B(l, {
                                    class: "i-modal-item__plus"
                                }), g("div", hr, [g("h3", vr, A(f == null ? void 0 : f.name), 1), g("p", gr, A(f == null ? void 0 : f.price), 1)])])], 10, fr)
                            }
                            ), 128))])])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["is-open"])]),
                    _: 1
                })]))]),
                _: 1
            })
        }
    }
})
  , wr = te(_r, [["__scopeId", "data-v-99a5402b"]])
  , Sr = {
    class: "interior-apart__content"
}
  , br = {
    class: "interior-apart__name"
}
  , yr = {
    class: "interior-apart__desc"
}
  , Tr = {
    class: "interior-apart__about"
}
  , xr = {
    class: "interior-apart__about-wrapper"
}
  , Er = {
    class: "interior-apart__about-content"
}
  , Cr = {
    class: "interior-apart__title"
}
  , Pr = {
    class: "interior-apart__text"
}
  , Ir = {
    class: "interior-apart__about-wrapper"
}
  , Mr = {
    class: "interior-apart__about-content"
}
  , Or = {
    class: "interior-apart__title"
}
  , $r = {
    class: "interior-apart__text"
}
  , Lr = {
    class: "interior-apart__about-wrapper"
}
  , Ar = {
    class: "interior-apart__about-content"
}
  , jr = {
    class: "interior-apart__title"
}
  , zr = G({
    __name: "InteriorAppartmentSpecs",
    props: {
        apartment: {},
        spec1Name: {},
        spec2Name: {},
        spec3Name: {},
        formButton: {},
        projectName: {}
    },
    setup(s) {
        const {openFormModal: t} = Nt();
        return (e, n) => {
            var i, r, o, a;
            return P(),
            $("div", Sr, [g("h3", br, A((i = e.apartment) == null ? void 0 : i.name), 1), g("p", yr, A((r = e.apartment) == null ? void 0 : r.price), 1), g("div", Tr, [g("div", xr, [n[1] || (n[1] = g("div", {
                class: "interior-apart__line"
            }, null, -1)), g("div", Er, [g("p", Cr, A(e.spec1Name), 1), g("p", Pr, A((o = e.apartment) == null ? void 0 : o.area), 1)])]), g("div", Ir, [n[2] || (n[2] = g("div", {
                class: "interior-apart__line"
            }, null, -1)), g("div", Mr, [g("p", Or, A(e.spec2Name), 1), g("p", $r, A((a = e.apartment) == null ? void 0 : a.info), 1)])]), g("div", Lr, [n[3] || (n[3] = g("div", {
                class: "interior-apart__line"
            }, null, -1)), g("div", Ar, [g("p", jr, A(e.spec3Name), 1), g("button", {
                class: "interior-apart__text underline-reverse uppercase",
                onClick: n[0] || (n[0] = l => {
                    var d;
                    return L(t)(e.projectName + " Appartment: " + ((d = e.apartment) == null ? void 0 : d.name))
                }
                )
            }, A(e.formButton), 1)])])])])
        }
    }
})
  , Br = (s, t=!1, e= () => {}
) => {
    const n = Ye().scrollTop + s;
    window.escroll.disabled = !0,
    de.to(Ye(), {
        duration: t ? 0 : .8,
        scrollTo: {
            y: n,
            autoKill: !0
        },
        onComplete: () => {
            window.escroll.state.position = n,
            window.escroll.state.vsPosition = n,
            window.escroll.disabled = !1,
            e && e()
        }
    })
}
  , kr = {
    ref: "el",
    class: "interior-aparts",
    "data-interior-apparts": ""
}
  , Vr = {
    class: "interior-aparts__text-wrapper"
}
  , Gr = {
    class: "interior-aparts__choose-button-wrapper"
}
  , Nr = G({
    __name: "InteriorApartments",
    props: Oe({
        apartments: {},
        projectName: {}
    }, {
        modelValue: {},
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    async setup(s) {
        let t, e;
        const n = le("el")
          , i = dt(s, "modelValue")
          , r = l => {
            var c;
            i.value = l;
            const d = (c = n.value) == null ? void 0 : c.getBoundingClientRect().top;
            Br(d - 20)
        }
          , {story: o} = ([t,e] = it( () => ts("projects")),
        t = await t,
        e(),
        t)
          , a = O(!1);
        return (l, d) => {
            var m, v;
            const c = cr
              , u = wr
              , f = Ve
              , p = Be;
            return P(),
            $(D, null, [g("div", kr, [B($e, {
                name: "fade",
                mode: "out-in"
            }, {
                default: F( () => {
                    var _;
                    return [(P(),
                    H(c, {
                        key: (_ = i.value) == null ? void 0 : _._uid,
                        apartment: i.value
                    }, null, 8, ["apartment"]))]
                }
                ),
                _: 1
            }), g("div", Vr, [B(u, {
                open: L(a),
                "onUpdate:open": d[0] || (d[0] = _ => lt(a) ? a.value = _ : null),
                "apartments-list": l.apartments,
                "selected-apartment": i.value,
                "button-text": (v = (m = L(o)) == null ? void 0 : m.content) == null ? void 0 : v.project_interior_menu_text,
                onSelect: r
            }, null, 8, ["open", "apartments-list", "selected-apartment", "button-text"]), B($e, {
                name: "fade",
                mode: "out-in"
            }, {
                default: F( () => {
                    var _, h, S, w, E, b, I, C, x;
                    return [(P(),
                    H(zr, {
                        key: (_ = i.value) == null ? void 0 : _._uid,
                        apartment: i.value,
                        "spec1-name": (S = (h = L(o)) == null ? void 0 : h.content) == null ? void 0 : S.project_template_spec_1,
                        "spec2-name": (E = (w = L(o)) == null ? void 0 : w.content) == null ? void 0 : E.project_template_spec_2,
                        "spec3-name": (I = (b = L(o)) == null ? void 0 : b.content) == null ? void 0 : I.project_template_spec_3,
                        "form-button": (x = (C = L(o)) == null ? void 0 : C.content) == null ? void 0 : x.project_interior_form_button,
                        "project-name": l.projectName
                    }, null, 8, ["apartment", "spec1-name", "spec2-name", "spec3-name", "form-button", "project-name"]))]
                }
                ),
                _: 1
            })])], 512), g("div", Gr, [B(p, {
                class: "interior-aparts__choose-button",
                onClick: d[1] || (d[1] = _ => a.value = !0)
            }, {
                default: F( () => [d[2] || (d[2] = g("span", null, " choose APARTMENT ", -1)), B(f, {
                    class: "interior-aparts__choose-button-icon"
                })]),
                _: 1
            })])], 64)
        }
    }
})
  , Dr = te(Nr, [["__scopeId", "data-v-91dec6ae"]])
  , Rr = {
    ref: "el",
    class: "project-interior"
}
  , Fr = {
    class: "project-interior__wrapper container"
}
  , Hr = {
    class: "project-interior__content"
}
  , Wr = {
    class: "project-interior__title"
}
  , qr = {
    class: "project-interior__text"
}
  , Xr = {
    class: "project-interior__img-wrapper"
}
  , Yr = {
    ref: "appartments",
    class: "project-interior__apartments-wrapper"
}
  , Ur = {
    class: "project-interior__apartments"
}
  , Kr = G({
    __name: "InteriorSection",
    props: {
        content: {},
        projectName: {}
    },
    setup(s) {
        const t = s
          , e = le("el")
          , n = le("appartments");
        Se(e);
        const i = ie( () => {
            var o;
            return (o = t.content) == null ? void 0 : o.apartments
        }
        )
          , r = Dt( () => {
            var o;
            return {
                value: (o = i == null ? void 0 : i.value) == null ? void 0 : o[0]
            }
        }
        );
        return Qt(n, ([o]) => {
            (o == null ? void 0 : o.isIntersecting) || !1 ? document.documentElement.classList.add("header-disabled") : document.documentElement.classList.remove("header-disabled")
        }
        ),
        we( () => {
            document.documentElement.classList.remove("header-disabled")
        }
        ),
        (o, a) => {
            var c, u, f, p, m, v;
            const l = Z
              , d = Dr;
            return P(),
            $("section", Rr, [g("div", Fr, [g("div", Hr, [g("h2", Wr, A((c = o.content) == null ? void 0 : c.title), 1), g("p", qr, A((u = o.content) == null ? void 0 : u.text), 1), g("div", Xr, [B(l, {
                class: "project-interior__img",
                src: (p = (f = o.content) == null ? void 0 : f.asset) == null ? void 0 : p.filename,
                alt: (v = (m = o.content) == null ? void 0 : m.asset) == null ? void 0 : v.alt,
                width: 1920
            }, null, 8, ["src", "alt"])])]), g("div", Yr, [g("div", Ur, [B(d, {
                modelValue: L(r).value,
                "onUpdate:modelValue": a[0] || (a[0] = _ => L(r).value = _),
                "project-name": o.projectName,
                apartments: L(i)
            }, null, 8, ["modelValue", "project-name", "apartments"])])], 512)])], 512)
        }
    }
})
  , _o = te(Kr, [["__scopeId", "data-v-3d48b7e1"]])
  , wo = async (s, t) => {
    var n;
    const e = Rt(`${t}/${s}`, () => null);
    try {
        if (!e.value) {
            const i = await Ft(`${t}/${s}`);
            e.value = i.value
        }
    } catch (i) {
        console.log(i)
    }
    return Ht((n = e.value) == null ? void 0 : n.id, i => {
        e.value = i
    }
    ),
    {
        story: e
    }
}
;
export {uo as A, po as C, _o as I, lo as _, co as a, ho as b, vo as c, fo as d, mo as e, go as f, wo as u};
