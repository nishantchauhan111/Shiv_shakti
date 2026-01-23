import {r as L, aE as $, aF as O, k as y, aG as W, aH as x, aI as b, V as _, H, aJ as V, aK as X, a6 as R, aL as Y, aM as N} from "./C5bBxmVo.js";
const C = W ? window : void 0
  , Q = W ? window.document : void 0;
function S(l) {
    var r;
    const t = x(l);
    return (r = t == null ? void 0 : t.$el) != null ? r : t
}
function F(...l) {
    let r, t, o, s;
    if (typeof l[0] == "string" || Array.isArray(l[0]) ? ([t,o,s] = l,
    r = C) : [r,t,o,s] = l,
    !r)
        return b;
    Array.isArray(t) || (t = [t]),
    Array.isArray(o) || (o = [o]);
    const c = []
      , v = () => {
        c.forEach(a => a()),
        c.length = 0
    }
      , f = (a, i, w, p) => (a.addEventListener(i, w, p),
    () => a.removeEventListener(i, w, p))
      , d = _( () => [S(r), x(s)], ([a,i]) => {
        if (v(),
        !a)
            return;
        const w = N(i) ? {
            ...i
        } : i;
        c.push(...t.flatMap(p => o.map(E => f(a, p, E, w))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , m = () => {
        d(),
        v()
    }
    ;
    return O(m),
    m
}
let T = !1;
function U(l, r, t={}) {
    const {window: o=C, ignore: s=[], capture: c=!0, detectIframe: v=!1} = t;
    if (!o)
        return b;
    Y && !T && (T = !0,
    Array.from(o.document.body.children).forEach(n => n.addEventListener("click", b)),
    o.document.documentElement.addEventListener("click", b));
    let f = !0;
    const d = n => x(s).some(u => {
        if (typeof u == "string")
            return Array.from(o.document.querySelectorAll(u)).some(e => e === n.target || n.composedPath().includes(e));
        {
            const e = S(u);
            return e && (n.target === e || n.composedPath().includes(e))
        }
    }
    );
    function m(n) {
        const u = x(n);
        return u && u.$.subTree.shapeFlag === 16
    }
    function a(n, u) {
        const e = x(n)
          , M = e.$.subTree && e.$.subTree.children;
        return M == null || !Array.isArray(M) ? !1 : M.some(A => A.el === u.target || u.composedPath().includes(A.el))
    }
    const i = n => {
        const u = S(l);
        if (n.target != null && !(!(u instanceof Element) && m(l) && a(l, n)) && !(!u || u === n.target || n.composedPath().includes(u))) {
            if (n.detail === 0 && (f = !d(n)),
            !f) {
                f = !0;
                return
            }
            r(n)
        }
    }
    ;
    let w = !1;
    const p = [F(o, "click", n => {
        w || (w = !0,
        setTimeout( () => {
            w = !1
        }
        , 0),
        i(n))
    }
    , {
        passive: !0,
        capture: c
    }), F(o, "pointerdown", n => {
        const u = S(l);
        f = !d(n) && !!(u && !n.composedPath().includes(u))
    }
    , {
        passive: !0
    }), v && F(o, "blur", n => {
        setTimeout( () => {
            var u;
            const e = S(l);
            ((u = o.document.activeElement) == null ? void 0 : u.tagName) === "IFRAME" && !(e != null && e.contains(o.document.activeElement)) && r(n)
        }
        , 0)
    }
    )].filter(Boolean);
    return () => p.forEach(n => n())
}
function j() {
    const l = L(!1)
      , r = V();
    return r && H( () => {
        l.value = !0
    }
    , r),
    l
}
function q(l) {
    const r = j();
    return y( () => (r.value,
    !!l()))
}
function Z(l, r={}) {
    const {window: t=C} = r
      , o = q( () => t && "matchMedia"in t && typeof t.matchMedia == "function");
    let s;
    const c = L(!1)
      , v = m => {
        c.value = m.matches
    }
      , f = () => {
        s && ("removeEventListener"in s ? s.removeEventListener("change", v) : s.removeListener(v))
    }
      , d = $( () => {
        o.value && (f(),
        s = t.matchMedia(x(l)),
        "addEventListener"in s ? s.addEventListener("change", v) : s.addListener(v),
        c.value = s.matches)
    }
    );
    return O( () => {
        d(),
        f(),
        s = void 0
    }
    ),
    c
}
function ee(l, r, t={}) {
    const {root: o, rootMargin: s="0px", threshold: c=0, window: v=C, immediate: f=!0} = t
      , d = q( () => v && "IntersectionObserver"in v)
      , m = y( () => {
        const E = x(l);
        return (Array.isArray(E) ? E : [E]).map(S).filter(X)
    }
    );
    let a = b;
    const i = L(f)
      , w = d.value ? _( () => [m.value, S(o), i.value], ([E,n]) => {
        if (a(),
        !i.value || !E.length)
            return;
        const u = new IntersectionObserver(r,{
            root: S(n),
            rootMargin: s,
            threshold: c
        });
        E.forEach(e => e && u.observe(e)),
        a = () => {
            u.disconnect(),
            a = b
        }
    }
    , {
        immediate: f,
        flush: "post"
    }) : b
      , p = () => {
        a(),
        w(),
        i.value = !1
    }
    ;
    return O(p),
    {
        isSupported: d,
        isActive: i,
        pause() {
            a(),
            i.value = !1
        },
        resume() {
            i.value = !0
        },
        stop: p
    }
}
const z = ["fullscreenchange", "webkitfullscreenchange", "webkitendfullscreen", "mozfullscreenchange", "MSFullscreenChange"];
function te(l, r={}) {
    const {document: t=Q, autoExit: o=!1} = r
      , s = y( () => {
        var e;
        return (e = S(l)) != null ? e : t == null ? void 0 : t.querySelector("html")
    }
    )
      , c = L(!1)
      , v = y( () => ["requestFullscreen", "webkitRequestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].find(e => t && e in t || s.value && e in s.value))
      , f = y( () => ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].find(e => t && e in t || s.value && e in s.value))
      , d = y( () => ["fullScreen", "webkitIsFullScreen", "webkitDisplayingFullscreen", "mozFullScreen", "msFullscreenElement"].find(e => t && e in t || s.value && e in s.value))
      , m = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].find(e => t && e in t)
      , a = q( () => s.value && t && v.value !== void 0 && f.value !== void 0 && d.value !== void 0)
      , i = () => m ? (t == null ? void 0 : t[m]) === s.value : !1
      , w = () => {
        if (d.value) {
            if (t && t[d.value] != null)
                return t[d.value];
            {
                const e = s.value;
                if ((e == null ? void 0 : e[d.value]) != null)
                    return !!e[d.value]
            }
        }
        return !1
    }
    ;
    async function p() {
        if (!(!a.value || !c.value)) {
            if (f.value)
                if ((t == null ? void 0 : t[f.value]) != null)
                    await t[f.value]();
                else {
                    const e = s.value;
                    (e == null ? void 0 : e[f.value]) != null && await e[f.value]()
                }
            c.value = !1
        }
    }
    async function E() {
        if (!a.value || c.value)
            return;
        w() && await p();
        const e = s.value;
        v.value && (e == null ? void 0 : e[v.value]) != null && (await e[v.value](),
        c.value = !0)
    }
    async function n() {
        await (c.value ? p() : E())
    }
    const u = () => {
        const e = w();
        (!e || e && i()) && (c.value = e)
    }
    ;
    return F(t, z, u, !1),
    F( () => S(s), z, u, !1),
    o && O(p),
    {
        isSupported: a,
        isFullscreen: c,
        enter: E,
        exit: p,
        toggle: n
    }
}
function ne(l, r={}) {
    const {threshold: t=50, onSwipe: o, onSwipeEnd: s, onSwipeStart: c, passive: v=!0, window: f=C} = r
      , d = R({
        x: 0,
        y: 0
    })
      , m = R({
        x: 0,
        y: 0
    })
      , a = y( () => d.x - m.x)
      , i = y( () => d.y - m.y)
      , {max: w, abs: p} = Math
      , E = y( () => w(p(a.value), p(i.value)) >= t)
      , n = L(!1)
      , u = y( () => E.value ? p(a.value) > p(i.value) ? a.value > 0 ? "left" : "right" : i.value > 0 ? "up" : "down" : "none")
      , e = h => [h.touches[0].clientX, h.touches[0].clientY]
      , M = (h, g) => {
        d.x = h,
        d.y = g
    }
      , A = (h, g) => {
        m.x = h,
        m.y = g
    }
    ;
    let k;
    const P = G(f == null ? void 0 : f.document);
    v ? k = P ? {
        passive: !0
    } : {
        capture: !1
    } : k = P ? {
        passive: !1,
        capture: !0
    } : {
        capture: !0
    };
    const B = h => {
        n.value && (s == null || s(h, u.value)),
        n.value = !1
    }
      , D = [F(l, "touchstart", h => {
        if (h.touches.length !== 1)
            return;
        const [g,I] = e(h);
        M(g, I),
        A(g, I),
        c == null || c(h)
    }
    , k), F(l, "touchmove", h => {
        if (h.touches.length !== 1)
            return;
        const [g,I] = e(h);
        A(g, I),
        k.capture && !k.passive && Math.abs(a.value) > Math.abs(i.value) && h.preventDefault(),
        !n.value && E.value && (n.value = !0),
        n.value && (o == null || o(h))
    }
    , k), F(l, ["touchend", "touchcancel"], B, k)];
    return {
        isPassiveEventSupported: P,
        isSwiping: n,
        direction: u,
        coordsStart: d,
        coordsEnd: m,
        lengthX: a,
        lengthY: i,
        stop: () => D.forEach(h => h())
    }
}
function G(l) {
    if (!l)
        return !1;
    let r = !1;
    const t = {
        get passive() {
            return r = !0,
            !1
        }
    };
    return l.addEventListener("x", b, t),
    l.removeEventListener("x", b),
    r
}
export {ee as a, ne as b, te as c, U as o, Z as u};
