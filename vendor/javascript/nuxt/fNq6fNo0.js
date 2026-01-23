var ee = Object.defineProperty;
var te = (r, e, t) => e in r ? ee(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var I = (r, e, t) => te(r, typeof e != "symbol" ? e + "" : e, t);
import {_ as se} from "./B0G1e5qc.js";
import {d as y, c as b, o as p, a as v, _ as M, C as ne, D as A, E as N, $ as F, G as oe, r as E, H as re, T as ie, I as ae, f as c, i as w, F as S, j as D, g as x, n as ce, J as K, K as Q, t as g, l as P, m as z, u as le, b as de, e as ue, h as T, s as _e, k as B, z as me, v as pe, x as he, y as ve, A as fe, B as be} from "./C5bBxmVo.js";
import {_ as j, u as Z, a as J} from "./COL7POeB.js";
import {_ as W} from "./DuVedMQ2.js";
import {a as ge} from "./DsoqDRZR.js";
import {_ as U, a as we, Q as $e} from "./DqJe5UJ_.js";
import {F as ye, C as ke} from "./DpMqWF5x.js";
const Ie = ["data-slide"]
  , Ee = y({
    __name: "AutoScrollingSliderItem",
    props: {
        item: {},
        index: {}
    },
    setup(r) {
        return (e, t) => {
            var o, a;
            const s = W;
            return p(),
            b("div", {
                "data-slide": e.index,
                class: "scrolling-slider__item"
            }, [v(s, {
                src: (o = e.item) == null ? void 0 : o.filename,
                alt: (a = e.item) == null ? void 0 : a.alt,
                width: 510
            }, null, 8, ["src", "alt"])], 8, Ie)
        }
    }
})
  , Me = M(Ee, [["__scopeId", "data-v-97be2c38"]]);
var X = {
    exports: {}
}, O;
function xe() {
    if (O)
        return X.exports;
    O = 1;
    function r() {}
    return r.prototype = {
        on: function(e, t, s) {
            var o = this.e || (this.e = {});
            return (o[e] || (o[e] = [])).push({
                fn: t,
                ctx: s
            }),
            this
        },
        once: function(e, t, s) {
            var o = this;
            function a() {
                o.off(e, a),
                t.apply(s, arguments)
            }
            return a._ = t,
            this.on(e, a, s)
        },
        emit: function(e) {
            var t = [].slice.call(arguments, 1)
              , s = ((this.e || (this.e = {}))[e] || []).slice()
              , o = 0
              , a = s.length;
            for (o; o < a; o++)
                s[o].fn.apply(s[o].ctx, t);
            return this
        },
        off: function(e, t) {
            var s = this.e || (this.e = {})
              , o = s[e]
              , a = [];
            if (o && t)
                for (var l = 0, m = o.length; l < m; l++)
                    o[l].fn !== t && o[l].fn._ !== t && a.push(o[l]);
            return a.length ? s[e] = a : delete s[e],
            this
        }
    },
    X.exports = r,
    X.exports.TinyEmitter = r,
    X.exports
}
var V, R;
function Ce() {
    if (R)
        return V;
    R = 1;
    var r = xe();
    return V = new r,
    V
}
var Se = Ce();
const H = ne(Se)
  , n = {
    min: 0,
    max: 0,
    posX: 0,
    targetX: 0,
    velocity: 0,
    smoothVelocity: 0,
    isMoving: !1,
    activeSlide: 0,
    disabled: !1
}
  , Xe = () => {
    n.min = 0,
    n.max = 0,
    n.posX = 0,
    n.targetX = 0,
    n.velocity = 0,
    n.smoothVelocity = 0,
    n.isMoving = !1,
    n.activeSlide = 0,
    n.disabled = !1
}
;
class Le {
    constructor(e) {
        I(this, "$slider");
        I(this, "startX", 0);
        this.$slider = e
    }
    onMousemove(e) {
        if (e.preventDefault(),
        n.disabled)
            return;
        const t = e.clientX ?? e.targetTouches[0].clientX
          , s = t - this.startX;
        this.startX = t,
        n.targetX -= s
    }
    onMousedown(e) {
        e.preventDefault(),
        !n.disabled && (document.documentElement.addEventListener("mousemove", this.onMousemove),
        document.documentElement.addEventListener("touchmove", this.onMousemove, {
            passive: !1
        }),
        this.startX = e.clientX ?? e.targetTouches[0].clientX,
        this.$slider.classList.add("is-grabbing"),
        H.emit("slider:grab"))
    }
    onMouseup() {
        n.disabled || (document.documentElement.removeEventListener("mousemove", this.onMousemove),
        document.documentElement.removeEventListener("touchmove", this.onMousemove),
        this.$slider.classList.remove("is-grabbing"),
        H.emit("slider:release"))
    }
    subscribe() {
        ["onMousemove", "onMousedown", "onMouseup"].forEach(t => {
            this[t] = this[t].bind(this)
        }
        ),
        this.$slider.addEventListener("mousedown", this.onMousedown, {
            passive: !0
        }),
        this.$slider.addEventListener("touchstart", this.onMousedown, {
            passive: !1
        }),
        document.documentElement.addEventListener("mouseup", this.onMouseup),
        document.documentElement.addEventListener("touchend", this.onMouseup)
    }
    unsubscribe() {
        this.$slider.removeEventListener("mousedown", this.onMousedown),
        this.$slider.removeEventListener("touchstart", this.onMousedown),
        document.documentElement.removeEventListener("mousemove", this.onMousemove),
        document.documentElement.removeEventListener("touchmove", this.onMousemove),
        document.documentElement.removeEventListener("mouseup", this.onMouseup),
        document.documentElement.removeEventListener("touchend", this.onMouseup)
    }
}
const Ae = window.setInterval;
class De {
    constructor(e) {
        I(this, "pressedTimer", 0);
        I(this, "interval", null);
        this.$el = e,
        this.onKeyDown = this.onKeyDown.bind(this),
        this.onKeyUp = this.onKeyUp.bind(this)
    }
    onKeyDown(e) {
        if (n.disabled || e.key !== "ArrowLeft" && e.key !== "ArrowRight" || e.repeat)
            return;
        let t = 1;
        switch (this.interval = Ae( () => {
            this.pressedTimer++,
            n.targetX += t * 30
        }
        , 16),
        e.key) {
        case "ArrowLeft":
            t = -1;
            break;
        case "ArrowRight":
            t = 1;
            break
        }
    }
    onKeyUp() {
        clearInterval(this.interval),
        this.pressedTimer = 0
    }
    subscribe() {
        window.addEventListener("keydown", this.onKeyDown),
        window.addEventListener("keyup", this.onKeyUp)
    }
    unsubscribe() {
        window.removeEventListener("keydown", this.onKeyDown),
        window.removeEventListener("keyup", this.onKeyUp)
    }
}
class Be {
    constructor(e, t) {
        this.$el = e,
        this.duration = t,
        this.move = this.move.bind(this)
    }
    move(e, t) {
        if (!this.isInViewport || this.isTabInactive)
            return;
        const s = -n.velocity > 0 ? 1 : -1
          , o = 1e3 / this.duration;
        n.targetX -= o * (t / 1e3) * s
    }
    get isInViewport() {
        const e = this.$el.getBoundingClientRect();
        return e.top < window.innerHeight + 200 && e.bottom > -200
    }
    get isTabInactive() {
        return document.hidden
    }
    subscribe() {
        A.ticker.add(this.move)
    }
    unsubscribe() {
        A.ticker.remove(this.move)
    }
}
class Ve {
    constructor(e, t) {
        I(this, "$sliderInner");
        I(this, "$slides");
        I(this, "controllers", {
            draggable: null,
            keyboard: null,
            auto: null
        });
        var s, o;
        this.$el = e,
        this.duration = t,
        this.$sliderInner = (s = this.$el) == null ? void 0 : s.querySelector("[data-slider-inner]"),
        this.$slides = (o = this.$el) == null ? void 0 : o.querySelectorAll("[data-slide]")
    }
    init() {
        if (!this.$el) {
            console.warn("$el is not defined");
            return
        }
        this.controllers.draggable = new Le(this.$el),
        this.controllers.keyboard = new De(this.$el),
        this.controllers.auto = new Be(this.$el,this.duration),
        Object.keys(this.controllers).forEach(e => {
            this.controllers[e].subscribe()
        }
        ),
        this.animate = this.animate.bind(this),
        this.resize = this.resize.bind(this),
        A.ticker.add(this.animate),
        N.on(this.resize)
    }
    startSetup() {
        this.moveOneCirlce()
    }
    moveOneCirlce() {
        n.targetX = n.targetX + n.max + 60
    }
    get disabled() {
        return n.disabled
    }
    set disabled(e) {
        n.disabled = e
    }
    resize() {
        n.max = this.$sliderInner.scrollWidth / 2
    }
    animate() {
        if (n.disabled)
            return;
        n.posX = F(n.posX, n.targetX, .05);
        const e = n.targetX - n.posX;
        n.velocity = e,
        n.smoothVelocity = F(n.velocity, e, .2),
        n.isMoving = Math.abs(e) > .1,
        n.isMoving && (n.posX > n.max ? (n.targetX = n.min + n.velocity,
        n.posX = n.min) : n.posX < n.min && (n.targetX = n.max + n.velocity,
        n.posX = n.max),
        this.$sliderInner.style.transform = `${oe({
            move: {
                x: -n.posX,
                y: 0,
                z: 0
            }
        })}`,
        H.emit("slider:animate", n.smoothVelocity))
    }
    destroy() {
        Object.keys(this.controllers).forEach(e => {
            var t;
            (t = this.controllers[e]) == null || t.unsubscribe()
        }
        ),
        A.ticker.remove(this.animate),
        N.off(this.resize),
        Xe()
    }
}
const Ke = {
    class: "scrolling-slider"
}
  , Te = {
    class: "scrolling-slider__plus-wrapper"
}
  , He = y({
    __name: "AutoScrollingSlider",
    props: {
        items: {},
        duration: {
            default: 20
        }
    },
    setup(r) {
        const e = r
          , t = E(null)
          , s = E(null)
          , o = E(null)
          , a = E(Date.now());
        let l = null;
        const m = E(!1)
          , i = E(!1)
          , d = u => {
            var $, h;
            const _ = u.clientX
              , f = u.clientY;
            i.value = !0,
            ($ = o.value) == null || $.style.setProperty("--indicator-x", `${_}px`),
            (h = o.value) == null || h.style.setProperty("--indicator-y", `${f}px`)
        }
        ;
        return re(async () => {
            await ie(500),
            l = new Ve(t.value,e.duration),
            l.init()
        }
        ),
        ae( () => {
            l == null || l.destroy()
        }
        ),
        ge(t, ([u]) => {
            (u == null ? void 0 : u.isIntersecting) || !1 || (i.value = !1)
        }
        ),
        (u, _) => {
            const f = j
              , $ = Me;
            return p(),
            b("div", Ke, [c("div", Te, [v(f), v(f)]), c("div", {
                ref_key: "el",
                ref: t,
                class: "scrolling-slider__content",
                "data-slider": "",
                onMousemove: d,
                onMouseenter: d,
                onMouseleave: _[0] || (_[0] = h => i.value = !1),
                onMousedown: _[1] || (_[1] = h => m.value = !0),
                onMouseup: _[2] || (_[2] = h => m.value = !1)
            }, [(p(),
            b("div", {
                ref_key: "slider",
                ref: s,
                key: w(a),
                "data-slider-inner": "",
                class: "scrolling-slider__wrapper",
                "data-slider": ""
            }, [(p(!0),
            b(S, null, D(u.items, (h, k) => (p(),
            x($, {
                key: k,
                index: k,
                item: h
            }, null, 8, ["index", "item"]))), 128)), (p(!0),
            b(S, null, D(u.items, (h, k) => {
                var C;
                return p(),
                x($, {
                    key: k,
                    index: k + ((C = u.items) == null ? void 0 : C.length),
                    item: h
                }, null, 8, ["index", "item"])
            }
            ), 128))])), c("div", {
                ref_key: "dragIndicator",
                ref: o,
                class: ce(["scrolling-slider__drag", {
                    active: w(m),
                    visible: w(i)
                }])
            }, " drag ", 2)], 544)])
        }
    }
})
  , Pe = M(He, [["__scopeId", "data-v-b02cf8eb"]]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = r => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , ze = r => r.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, s) => s ? s.toUpperCase() : t.toLowerCase())
  , je = r => {
    const e = ze(r);
    return e.charAt(0).toUpperCase() + e.slice(1)
}
  , Ue = (...r) => r.filter( (e, t, s) => !!e && e.trim() !== "" && s.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var L = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = ({size: r, strokeWidth: e=2, absoluteStrokeWidth: t, color: s, iconNode: o, name: a, class: l, ...m}, {slots: i}) => K("svg", {
    ...L,
    width: r || L.width,
    height: r || L.height,
    stroke: s || L.stroke,
    "stroke-width": t ? Number(e) * 24 / Number(r) : e,
    class: Ue("lucide", ...a ? [`lucide-${G(je(a))}-icon`, `lucide-${G(a)}`] : ["lucide-icon"]),
    ...m
}, [...o.map(d => K(...d)), ...i.default ? [i.default()] : []]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = (r, e) => (t, {slots: s}) => K(qe, {
    ...t,
    iconNode: e,
    name: r
}, s);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y = Ne("arrow-down", [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]])
  , Fe = {
    class: "connect__top"
}
  , Oe = {
    class: "connect__title"
}
  , Re = {
    class: "connect__bottom"
}
  , Ge = {
    class: "connect__bottom-wrapper"
}
  , Qe = {
    class: "connect__scroll-text"
}
  , Ze = {
    class: "connect__description"
}
  , Je = y({
    __name: "AboutSection",
    props: {
        content: {},
        arrow: {}
    },
    setup(r) {
        const {openFormModal: e} = Q()
          , t = E(null);
        return Z(t),
        (s, o) => {
            var i, d, u, _;
            const a = z
              , l = Pe
              , m = U;
            return p(),
            b("section", {
                ref_key: "$el",
                ref: t,
                class: "connect container"
            }, [c("div", Fe, [c("h2", Oe, g((i = s.content) == null ? void 0 : i.title), 1), v(a, {
                type: "button",
                view: "dark",
                class: "connect__btn",
                onClick: o[0] || (o[0] = f => w(e)("Home page"))
            }, {
                default: P( () => {
                    var f;
                    return [c("span", null, g((f = s.content) == null ? void 0 : f.button_text), 1)]
                }
                ),
                _: 1
            })]), v(l, {
                items: (d = s.content) == null ? void 0 : d.gallery
            }, null, 8, ["items"]), c("div", Re, [c("div", Ge, [c("p", Qe, [c("span", null, g(s.arrow), 1), v(w(Y), {
                class: "connect__arrow"
            })]), c("p", Ze, g((u = s.content) == null ? void 0 : u.text), 1)]), v(m, {
                color: "dark",
                text: (_ = s.content) == null ? void 0 : _.address
            }, null, 8, ["text"])])], 512)
        }
    }
})
  , We = M(Je, [["__scopeId", "data-v-9056a5ec"]])
  , Ye = {
    class: "hero"
}
  , et = {
    class: "hero__wrapper"
}
  , tt = {
    class: "hero__middle"
}
  , st = {
    "data-title": "",
    class: "hero__title"
}
  , nt = {
    class: "hero__bottom"
}
  , ot = {
    class: "hero__scroll-text"
}
  , rt = y({
    __name: "HeroSection",
    props: {
        content: {},
        arrow: {}
    },
    setup(r) {
        return (e, t) => {
            var a, l, m, i, d, u;
            const s = J
              , o = U;
            return p(),
            b("section", Ye, [c("div", et, [c("div", tt, [v(s, {
                src: (l = (a = e.content) == null ? void 0 : a.asset) == null ? void 0 : l.filename,
                alt: (i = (m = e.content) == null ? void 0 : m.asset) == null ? void 0 : i.alt,
                "data-preload": "true",
                width: 1920,
                preload: "",
                class: "hero__img"
            }, null, 8, ["src", "alt"]), c("h1", st, g((d = e.content) == null ? void 0 : d.title), 1)]), c("div", nt, [c("p", ot, [c("span", null, g(e.arrow), 1), v(w(Y), {
                class: "hero__arrow"
            })]), v(o, {
                text: (u = e.content) == null ? void 0 : u.address
            }, null, 8, ["text"])])])])
        }
    }
})
  , it = M(rt, [["__scopeId", "data-v-2c5f614c"]])
  , at = {
    class: "numbers-stat__info"
}
  , ct = {
    class: "numbers-stat__number"
}
  , lt = ["innerHTML"]
  , dt = y({
    __name: "NumberItem",
    props: {
        card: {}
    },
    setup(r) {
        const e = E(null);
        return Z(e),
        (t, s) => {
            var a, l, m, i, d, u;
            const o = J;
            return p(),
            b("li", {
                ref_key: "$el",
                ref: e,
                class: "numbers-stat__card"
            }, [c("div", at, [c("h3", ct, g((a = t.card) == null ? void 0 : a.value), 1), c("p", {
                class: "numbers-stat__desc",
                innerHTML: (l = t.card) == null ? void 0 : l.description
            }, null, 8, lt)]), v(o, {
                src: (i = (m = t.card) == null ? void 0 : m.asset) == null ? void 0 : i.filename,
                alt: (u = (d = t.card) == null ? void 0 : d.asset) == null ? void 0 : u.alt,
                width: 600,
                class: "numbers-stat__img"
            }, null, 8, ["src", "alt"])], 512)
        }
    }
})
  , ut = M(dt, [["__scopeId", "data-v-4d211199"]])
  , _t = {
    class: "numbers-stat container"
}
  , mt = {
    class: "numbers-stat__wrapper"
}
  , pt = {
    class: "numbers-stat__top"
}
  , ht = {
    class: "numbers-stat__title"
}
  , vt = {
    class: "numbers-stat__cards"
}
  , ft = y({
    __name: "NumbersSection",
    props: {
        content: {}
    },
    setup(r) {
        const {openFormModal: e} = Q();
        return (t, s) => {
            var i, d, u;
            const o = U
              , a = ut
              , l = j
              , m = z;
            return p(),
            b("section", _t, [c("div", mt, [c("div", pt, [c("h2", ht, g((i = t.content) == null ? void 0 : i.title), 1), v(o, {
                text: (d = t.content) == null ? void 0 : d.address
            }, null, 8, ["text"])]), c("ul", vt, [(p(!0),
            b(S, null, D((u = t.content) == null ? void 0 : u.numbers, (_, f) => (p(),
            x(a, {
                key: f,
                card: _
            }, null, 8, ["card"]))), 128))]), v(m, {
                type: "button",
                class: "numbers-stat__btn",
                onClick: s[0] || (s[0] = _ => w(e)("Home page"))
            }, {
                default: P( () => {
                    var _;
                    return [c("span", null, g((_ = t.content) == null ? void 0 : _.button_text), 1), v(l)]
                }
                ),
                _: 1
            })])])
        }
    }
})
  , bt = M(ft, [["__scopeId", "data-v-f8c25b64"]])
  , gt = {
    class: "video container"
}
  , wt = {
    class: "video__wrapper"
}
  , $t = y({
    __name: "VideoSection",
    props: {
        content: {}
    },
    setup(r) {
        return (e, t) => {
            var o, a, l;
            const s = we;
            return p(),
            b("section", gt, [c("div", wt, [v(s, {
                title: (o = e.content) == null ? void 0 : o.title,
                asset: (a = e.content) == null ? void 0 : a.asset,
                "address-text": (l = e.content) == null ? void 0 : l.address
            }, null, 8, ["title", "asset", "address-text"])])])
        }
    }
})
  , yt = M($t, [["__scopeId", "data-v-c00f965b"]])
  , kt = async () => {
    var e;
    const r = le("index", () => null);
    try {
        if (!r.value) {
            const t = await de("home");
            r.value = t.value
        }
    } catch (t) {
        console.log(t)
    }
    return ue((e = r.value) == null ? void 0 : e.id, t => {
        r.value = t
    }
    ),
    {
        story: r
    }
}
  , It = {
    class: "home-companies"
}
  , Et = {
    class: "container"
}
  , Mt = {
    class: "home-companies__title"
}
  , xt = {
    class: "home-companies__content"
}
  , Ct = {
    class: "home-companies__text-content"
}
  , St = {
    class: "home-companies__text"
}
  , Xt = y({
    __name: "Companies",
    props: {
        content: {}
    },
    setup(r) {
        return (e, t) => {
            var l, m, i, d, u, _, f, $, h, k;
            const s = W
              , o = j
              , a = z;
            return p(),
            b("section", It, [c("div", Et, [c("h2", Mt, g((l = e.content) == null ? void 0 : l.title), 1), c("div", xt, [(i = (m = e.content) == null ? void 0 : m.asset) != null && i.filename ? (p(),
            x(s, {
                key: 0,
                class: "home-compaines__asset",
                src: (u = (d = e.content) == null ? void 0 : d.asset) == null ? void 0 : u.filename,
                width: 1e3
            }, null, 8, ["src"])) : T("", !0), c("div", Ct, [c("p", St, g((_ = e.content) == null ? void 0 : _.text), 1), (f = e.content.button) != null && f[0] ? (p(),
            x(a, {
                key: 0,
                class: "home-compaines__btn",
                tag: "nuxt-link",
                href: (k = (h = ($ = e.content.button) == null ? void 0 : $[0]) == null ? void 0 : h.link) == null ? void 0 : k.cached_url
            }, {
                default: P( () => {
                    var C, q;
                    return [c("span", null, g((q = (C = e.content.button) == null ? void 0 : C[0]) == null ? void 0 : q.label), 1), v(o)]
                }
                ),
                _: 1
            }, 8, ["href"])) : T("", !0)])])])])
        }
    }
})
  , Lt = M(Xt, [["__scopeId", "data-v-8b769f65"]])
  , At = {
    key: 1
}
  , jt = y({
    __name: "Content",
    async setup(r) {
        let e, t;
        const {story: s} = ([e,t] = _e( () => kt()),
        e = await e,
        t(),
        e)
          , o = B( () => {
            var i, d;
            return (d = (i = s == null ? void 0 : s.value) == null ? void 0 : i.content) == null ? void 0 : d.body
        }
        )
          , a = i => ({
            home_hero: it,
            home_about: We,
            home_companies: Lt,
            company_directions: ke,
            home_numbers: bt,
            home_video: yt,
            featured_projects: ye,
            quiz_block: $e
        })[i]
          , l = B( () => {
            var i, d;
            return (d = (i = s == null ? void 0 : s.value) == null ? void 0 : i.content) == null ? void 0 : d.scroll_down_text
        }
        )
          , m = B( () => {
            var d, u, _;
            const i = (u = (d = s == null ? void 0 : s.value) == null ? void 0 : d.content) == null ? void 0 : u.meta[0];
            return i ? {
                title: i.title,
                description: i.description,
                ogImage: (_ = i == null ? void 0 : i.image) == null ? void 0 : _.filename
            } : null
        }
        );
        return (i, d) => {
            var f, $;
            const u = se
              , _ = me("editable");
            return p(),
            b("div", null, [w(m) ? (p(),
            x(ve, pe(he({
                key: 0
            }, w(m))), null, 16)) : T("", !0), (p(!0),
            b(S, null, D(w(o), h => (p(),
            b(S, {
                key: h._uid
            }, [a(h.component) ? fe((p(),
            x(be(a(h.component)), {
                key: 0,
                content: h,
                arrow: w(l)
            }, null, 8, ["content", "arrow"])), [[_, h]]) : (p(),
            b("div", At, [c("p", null, "Unknown component: " + g(h.component), 1)]))], 64))), 128)), v(u, {
                cta: ($ = (f = w(s)) == null ? void 0 : f.content) == null ? void 0 : $.cta,
                page: "Home"
            }, null, 8, ["cta"])])
        }
    }
});
export {jt as _};
