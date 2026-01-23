import {aN as j, aO as E, aP as V, aQ as $, aR as N, aS as U, aT as C, aU as B, at as H, k as v, d as I, aV as Z, r as x, H as D, c as z, a4 as F, o as k, x as M, i as b, v as T, g as J, _ as G, F as Q, j as Y, f as K} from "./C5bBxmVo.js";
async function X(e, t) {
    return await ee(t).catch(r => (console.error("Failed to get image meta for " + t, r + ""),
    {
        width: 0,
        height: 0,
        ratio: 0
    }))
}
async function ee(e) {
    if (typeof Image > "u")
        throw new TypeError("Image not supported");
    return new Promise( (t, i) => {
        const r = new Image;
        r.onload = () => {
            const s = {
                width: r.width,
                height: r.height,
                ratio: r.width / r.height
            };
            t(s)
        }
        ,
        r.onerror = s => i(s),
        r.src = e
    }
    )
}
function y(e="") {
    if (typeof e == "number")
        return e;
    if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g))
        return Number.parseInt(e, 10)
}
function te(e="") {
    if (e === void 0 || !e.length)
        return [];
    const t = new Set;
    for (const i of e.split(" ")) {
        const r = Number.parseInt(i.replace("x", ""));
        r && t.add(r)
    }
    return Array.from(t)
}
function re(e) {
    if (e.length === 0)
        throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")
}
function ie(e) {
    const t = {};
    if (typeof e == "string")
        for (const i of e.split(/[\s,]+/).filter(r => r)) {
            const r = i.split(":");
            r.length !== 2 ? t["1px"] = r[0].trim() : t[r[0].trim()] = r[1].trim()
        }
    else
        Object.assign(t, e);
    return t
}
function se(e) {
    const t = {
        options: e
    }
      , i = (s, a={}) => R(t, s, a)
      , r = (s, a={}, o={}) => i(s, {
        ...o,
        modifiers: j(a, o.modifiers || {})
    }).url;
    for (const s in e.presets)
        r[s] = (a, o, l) => r(a, o, {
            ...e.presets[s],
            ...l
        });
    return r.options = e,
    r.getImage = i,
    r.getMeta = (s, a) => oe(t, s, a),
    r.getSizes = (s, a) => le(t, s, a),
    t.$img = r,
    r
}
async function oe(e, t, i) {
    const r = R(e, t, {
        ...i
    });
    return typeof r.getMeta == "function" ? await r.getMeta() : await X(e, r.url)
}
function R(e, t, i) {
    var c, u;
    if (t && typeof t != "string")
        throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
    if (!t || t.startsWith("data:"))
        return {
            url: t
        };
    const {provider: r, defaults: s} = ne(e, i.provider || e.options.provider)
      , a = ae(e, i.preset);
    if (t = V(t) ? t : E(t),
    !r.supportsAlias) {
        for (const g in e.options.alias)
            if (t.startsWith(g)) {
                const f = e.options.alias[g];
                f && (t = $(f, t.slice(g.length)))
            }
    }
    if (r.validateDomains && V(t)) {
        const g = N(t).host;
        if (!e.options.domains.find(f => f === g))
            return {
                url: t
            }
    }
    const o = j(i, a, s);
    o.modifiers = {
        ...o.modifiers
    };
    const l = o.modifiers.format;
    (c = o.modifiers) != null && c.width && (o.modifiers.width = y(o.modifiers.width)),
    (u = o.modifiers) != null && u.height && (o.modifiers.height = y(o.modifiers.height));
    const d = r.getImage(t, o, e);
    return d.format = d.format || l || "",
    d
}
function ne(e, t) {
    const i = e.options.providers[t];
    if (!i)
        throw new Error("Unknown provider: " + t);
    return i
}
function ae(e, t) {
    if (!t)
        return {};
    if (!e.options.presets[t])
        throw new Error("Unknown preset: " + t);
    return e.options.presets[t]
}
function le(e, t, i) {
    var _, L, q, n, m;
    const r = y((_ = i.modifiers) == null ? void 0 : _.width)
      , s = y((L = i.modifiers) == null ? void 0 : L.height)
      , a = ie(i.sizes)
      , o = (q = i.densities) != null && q.trim() ? te(i.densities.trim()) : e.options.densities;
    re(o);
    const l = r && s ? s / r : 0
      , d = []
      , c = [];
    if (Object.keys(a).length >= 1) {
        for (const h in a) {
            const p = W(h, String(a[h]), s, l, e);
            if (p !== void 0) {
                d.push({
                    size: p.size,
                    screenMaxWidth: p.screenMaxWidth,
                    media: `(max-width: ${p.screenMaxWidth}px)`
                });
                for (const S of o)
                    c.push({
                        width: p._cWidth * S,
                        src: A(e, t, i, p, S)
                    })
            }
        }
        de(d)
    } else
        for (const h of o) {
            const p = Object.keys(a)[0];
            let S = p ? W(p, String(a[p]), s, l, e) : void 0;
            S === void 0 && (S = {
                size: "",
                screenMaxWidth: 0,
                _cWidth: (n = i.modifiers) == null ? void 0 : n.width,
                _cHeight: (m = i.modifiers) == null ? void 0 : m.height
            }),
            c.push({
                width: h,
                src: A(e, t, i, S, h)
            })
        }
    ce(c);
    const u = c[c.length - 1]
      , g = d.length ? d.map(h => `${h.media ? h.media + " " : ""}${h.size}`).join(", ") : void 0
      , f = g ? "w" : "x"
      , w = c.map(h => `${h.src} ${h.width}${f}`).join(", ");
    return {
        sizes: g,
        srcset: w,
        src: u == null ? void 0 : u.src
    }
}
function W(e, t, i, r, s) {
    const a = s.options.screens && s.options.screens[e] || Number.parseInt(e)
      , o = t.endsWith("vw");
    if (!o && /^\d+$/.test(t) && (t = t + "px"),
    !o && !t.endsWith("px"))
        return;
    let l = Number.parseInt(t);
    if (!a || !l)
        return;
    o && (l = Math.round(l / 100 * a));
    const d = r ? Math.round(l * r) : i;
    return {
        size: t,
        screenMaxWidth: a,
        _cWidth: l,
        _cHeight: d
    }
}
function A(e, t, i, r, s) {
    return e.$img(t, {
        ...i.modifiers,
        width: r._cWidth ? r._cWidth * s : void 0,
        height: r._cHeight ? r._cHeight * s : void 0
    }, i)
}
function de(e) {
    var i;
    e.sort( (r, s) => r.screenMaxWidth - s.screenMaxWidth);
    let t = null;
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        s.media === t && e.splice(r, 1),
        t = s.media
    }
    for (let r = 0; r < e.length; r++)
        e[r].media = ((i = e[r + 1]) == null ? void 0 : i.media) || ""
}
function ce(e) {
    e.sort( (i, r) => i.width - r.width);
    let t = null;
    for (let i = e.length - 1; i >= 0; i--) {
        const r = e[i];
        r.width === t && e.splice(i, 1),
        t = r.width
    }
}
const ue = "https://a.storyblok.com"
  , fe = (e, {modifiers: t={}, baseURL: i=ue}={}) => {
    const {fit: r, smart: s, width: a="0", height: o="0", filters: l={}, format: d, quality: c} = t
      , u = e.endsWith(".svg")
      , g = !u && (a !== "0" || o !== "0");
    u || (d && (l.format = d + ""),
    c && (l.quality = c + ""));
    const f = Object.entries(l || {}).map(n => `${n[0]}(${n[1]})`).join(":")
      , w = $(r ? `fit-${r}` : "", g ? `${a}x${o}` : "", s ? "smart" : "", f ? "filters:" + f : "")
      , {pathname: _} = N(e);
    return {
        url: U($(_, w ? "/m/" : "", w), i)
    }
}
  , ge = Object.freeze(Object.defineProperty({
    __proto__: null,
    getImage: fe
}, Symbol.toStringTag, {
    value: "Module"
}))
  , me = (e, {modifiers: t, baseURL: i="/_vercel/image"}={}, r) => {
    const s = Object.values(r.options.screens || {}).sort( (l, d) => l - d)
      , a = s[s.length - 1] || 0;
    let o = Number((t == null ? void 0 : t.width) || 0);
    return o ? s.includes(o) || (o = s.find(l => l > o) || a) : o = a,
    {
        url: i + "?" + C({
            url: e,
            w: String(o),
            q: String((t == null ? void 0 : t.quality) || "100")
        })
    }
}
  , he = !0
  , pe = Object.freeze(Object.defineProperty({
    __proto__: null,
    getImage: me,
    validateDomains: he
}, Symbol.toStringTag, {
    value: "Module"
}))
  , O = {
    screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        "2xl": 1536
    },
    presets: {},
    provider: "vercel",
    domains: [],
    alias: {},
    densities: [1, 2],
    format: ["webp"]
};
O.providers = {
    storyblok: {
        provider: ge,
        defaults: {
            baseURL: "https://a2.storyblok.com"
        }
    },
    vercel: {
        provider: pe,
        defaults: {}
    }
};
const P = () => {
    const e = H()
      , t = B();
    return t.$img || t._img || (t._img = se({
        ...O,
        nuxt: {
            baseURL: e.app.baseURL
        },
        runtimeConfig: e
    }))
}
;
function ye(e) {
    var t;
    (t = performance == null ? void 0 : performance.mark) == null || t.call(performance, "mark_feature_usage", {
        detail: {
            feature: e
        }
    })
}
const ve = {
    src: {
        type: String,
        required: !1
    },
    format: {
        type: String,
        required: !1
    },
    quality: {
        type: [Number, String],
        required: !1
    },
    background: {
        type: String,
        required: !1
    },
    fit: {
        type: String,
        required: !1
    },
    modifiers: {
        type: Object,
        required: !1
    },
    preset: {
        type: String,
        required: !1
    },
    provider: {
        type: String,
        required: !1
    },
    sizes: {
        type: [Object, String],
        required: !1
    },
    densities: {
        type: String,
        required: !1
    },
    preload: {
        type: [Boolean, Object],
        required: !1
    },
    width: {
        type: [String, Number],
        required: !1
    },
    height: {
        type: [String, Number],
        required: !1
    },
    alt: {
        type: String,
        required: !1
    },
    referrerpolicy: {
        type: String,
        required: !1
    },
    usemap: {
        type: String,
        required: !1
    },
    longdesc: {
        type: String,
        required: !1
    },
    ismap: {
        type: Boolean,
        required: !1
    },
    loading: {
        type: String,
        required: !1,
        validator: e => ["lazy", "eager"].includes(e)
    },
    crossorigin: {
        type: [Boolean, String],
        required: !1,
        validator: e => ["anonymous", "use-credentials", "", !0, !1].includes(e)
    },
    decoding: {
        type: String,
        required: !1,
        validator: e => ["async", "auto", "sync"].includes(e)
    },
    nonce: {
        type: [String],
        required: !1
    }
}
  , we = e => {
    const t = v( () => ({
        provider: e.provider,
        preset: e.preset
    }))
      , i = v( () => ({
        width: y(e.width),
        height: y(e.height),
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        usemap: e.usemap,
        longdesc: e.longdesc,
        ismap: e.ismap,
        crossorigin: e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
        loading: e.loading,
        decoding: e.decoding,
        nonce: e.nonce
    }))
      , r = P()
      , s = v( () => ({
        ...e.modifiers,
        width: y(e.width),
        height: y(e.height),
        format: e.format,
        quality: e.quality || r.options.quality,
        background: e.background,
        fit: e.fit
    }));
    return {
        options: t,
        attrs: i,
        modifiers: s
    }
}
  , _e = {
    ...ve,
    placeholder: {
        type: [Boolean, String, Number, Array],
        required: !1
    },
    placeholderClass: {
        type: String,
        required: !1
    },
    custom: {
        type: Boolean,
        required: !1
    }
}
  , be = ["src"]
  , Se = I({
    __name: "NuxtImg",
    props: _e,
    emits: ["load", "error"],
    setup(e, {emit: t}) {
        const i = e
          , r = Z()
          , s = t
          , a = !1
          , o = P()
          , l = we(i)
          , d = x(!1)
          , c = x()
          , u = v( () => o.getSizes(i.src, {
            ...l.options.value,
            sizes: i.sizes,
            densities: i.densities,
            modifiers: {
                ...l.modifiers.value,
                width: y(i.width),
                height: y(i.height)
            }
        }))
          , g = v( () => {
            const n = {
                ...l.attrs.value,
                "data-nuxt-img": ""
            };
            return (!i.placeholder || d.value) && (n.sizes = u.value.sizes,
            n.srcset = u.value.srcset),
            n
        }
        )
          , f = v( () => {
            let n = i.placeholder;
            if (n === "" && (n = !0),
            !n || d.value)
                return !1;
            if (typeof n == "string")
                return n;
            const m = Array.isArray(n) ? n : typeof n == "number" ? [n, n] : [10, 10];
            return o(i.src, {
                ...l.modifiers.value,
                width: m[0],
                height: m[1],
                quality: m[2] || 50,
                blur: m[3] || 3
            }, l.options.value)
        }
        )
          , w = v( () => i.sizes ? u.value.src : o(i.src, l.modifiers.value, l.options.value))
          , _ = v( () => f.value ? f.value : w.value)
          , q = B().isHydrating;
        return D( () => {
            if (f.value || i.custom) {
                const n = new Image;
                w.value && (n.src = w.value),
                i.sizes && (n.sizes = u.value.sizes || "",
                n.srcset = u.value.srcset),
                n.onload = m => {
                    d.value = !0,
                    s("load", m)
                }
                ,
                n.onerror = m => {
                    s("error", m)
                }
                ,
                ye("nuxt-image");
                return
            }
            c.value && (c.value.complete && q && (c.value.getAttribute("data-error") ? s("error", new Event("error")) : s("load", new Event("load"))),
            c.value.onload = n => {
                s("load", n)
            }
            ,
            c.value.onerror = n => {
                s("error", n)
            }
            )
        }
        ),
        (n, m) => n.custom ? F(n.$slots, "default", T(M({
            key: 1
        }, {
            ...b(a) ? {
                onerror: "this.setAttribute('data-error', 1)"
            } : {},
            imgAttrs: {
                ...g.value,
                ...b(r)
            },
            isLoaded: d.value,
            src: _.value
        }))) : (k(),
        z("img", M({
            key: 0,
            ref_key: "imgEl",
            ref: c,
            class: f.value && !d.value ? n.placeholderClass : void 0
        }, {
            ...b(a) ? {
                onerror: "this.setAttribute('data-error', 1)"
            } : {},
            ...g.value,
            ...b(r)
        }, {
            src: _.value
        }), null, 16, be))
    }
})
  , qe = I({
    __name: "CustomImage",
    props: {
        src: {},
        alt: {
            default: ""
        },
        quality: {
            default: 70
        },
        width: {
            default: 0
        },
        height: {
            default: 0
        },
        imgAttributes: {},
        preload: {
            type: Boolean,
            default: !1
        }
    },
    setup(e, {expose: t}) {
        const i = e
          , r = x(null);
        t({
            imgRef: r
        });
        const s = x(!1)
          , a = v( () => {
            const o = {
                src: i.src,
                alt: i.alt,
                placeholder: !0,
                quality: i.quality,
                preload: i.preload,
                format: "webp",
                provider: "storyblok",
                loading: i.preload ? "eager" : void 0,
                densities: "1x",
                sizes: `sm:100vw md:${i.width || 1920}px`,
                onLoad: () => {
                    s.value = !0
                }
            };
            return i.width && (o.width = i.width),
            i.height && (o.height = i.height),
            o
        }
        );
        return (o, l) => {
            const d = Se;
            return k(),
            J(d, M({
                ref_key: "imgRef",
                ref: r,
                class: ["custom-image", {
                    "custom-image--loading": !b(s),
                    "custom-image--loaded": b(s)
                }],
                "img-attrs": o.imgAttributes
            }, b(a)), null, 16, ["class", "img-attrs"])
        }
    }
})
  , $e = G(qe, [["__scopeId", "data-v-565e5924"]])
  , Le = {
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}
  , xe = ["d"]
  , ze = I({
    __name: "Logo",
    setup(e) {
        const t = [{
            d: "M5.33868 19.027L5.06665 18.8716V45.0727L5.33868 45.228V19.027Z"
        }, {
            d: "M31.7657 31.3892L32.0377 31.5446V5.47833L31.7657 5.63371V31.3892Z"
        }, {
            d: "M5.06665 18.3714L30.4774 32.8838V59.9417L5.06665 45.4292V47.2624L32.0377 62.6667V31.9416L6.84515 17.554L32.0377 3.16647V1.33333L5.06665 16.7367V18.3714Z"
        }, {
            d: "M35.2033 7.0501L33.6429 6.15913V57.8714L35.2033 56.9804V7.0501Z"
        }, {
            d: "M35.6925 30.0977L56.8253 18.0292V17.7211L35.6925 29.7905V30.0977Z"
        }, {
            d: "M35.6925 34.2634L56.8253 46.3328V46.0256L35.6925 33.9562V34.2634Z"
        }, {
            d: "M29.9925 33.0455L7.00046 46.1774L7.2698 46.331L29.9925 33.3526V33.0455Z"
        }, {
            d: "M33.6429 2.29436V4.1266L57.373 17.6798V46.3489L33.6429 59.9012L33.6294 61.7425L58.9333 47.2839V16.7376L33.6429 2.29436Z"
        }];
        return (i, r) => (k(),
        z("svg", Le, [(k(),
        z(Q, null, Y(t, s => K("path", {
            key: s.d,
            d: s.d,
            "stroke-width": "1",
            fill: "currentColor"
        }, null, 8, xe)), 64))]))
    }
});
export {$e as _, ze as a};
