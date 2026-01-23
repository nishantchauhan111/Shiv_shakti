const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./CwtODRB9.js", "./fNq6fNo0.js", "./B0G1e5qc.js", "./DuVedMQ2.js", "./Logo.CSq5boGF.css", "./BookTheMeetings.giexwHZr.css", "./COL7POeB.js", "./CdJ2rVPI.js", "./ParallaxImg.DhtwRBgK.css", "./DsoqDRZR.js", "./DqJe5UJ_.js", "./Dt8wSEj9.js", "./CustomVideo.DEhiZNK4.css", "./DpMqWF5x.js", "./B_pKfgL8.js", "./DarkLayer.CtEl5xZ_.css", "./FeaturedProjects.DymGxh74.css", "./QuizSection.CjuTUcGr.css", "./Content.CkHE65et.css", "./B7nfpW9d.js", "./BZ6ROOaS.js", "./EmbedVideo.C_oPVZAi.css", "./C_jxTAov.js", "./VideoInterview.Ccfojjwe.css", "./CiqAVqVC.js", "./about.BLWpjssd.css", "./BkqGLCYF.js", "./BPIRsWBQ.js", "./contact.D95RP3ca.css", "./O3I4SUWC.js", "./C7TFlp1a.js", "./3NLjUwEP.js", "./DYM-f5Yb.js", "./slider.BIJCI37R.css", "./FullImageSlider.eWY2RYJ7.css", "./DynamicBlockRenderer.B1HTu4vK.css", "./DY-wUTdT.js", "./xvu5ibTZ.js", "./_id_.Re7LZA_F.css", "./DxxqEkjj.js", "./Br4VmKNV.js", "./consulting.BYnK6NQ0.css", "./DyzWxbTC.js", "./DAIYkz3e.js", "./CategoryFilter.Ddm9V_tD.css", "./index.Bk7FS1K2.css", "./Bd2w2Ipp.js", "./C0H5Ao26.js", "./DdkQzejC.js", "./CuBH4DsP.js", "./currentProjectStory.Cph8BSGI.css", "./wYJfBMtb.js", "./B4cQH2UB.js", "./projectsStories.Dso4B-rk.css", "./CEF-vgKg.js", "./N8eAFCf2.js", "./DHr6Vc-T.js", "./privacy-policy.CgirSFQO.css", "./G9vHfUmm.js", "./Bo8zxcBE.js", "./3FyxhYft.js", "./default.CnYO97II.css"]))) => i.map(i => d[i]);
var m1 = Object.defineProperty;
var Xp = t => {
    throw TypeError(t)
}
;
var _1 = (t, e, n) => e in t ? m1(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var Gt = (t, e, n) => _1(t, typeof e != "symbol" ? e + "" : e, n)
  , y1 = (t, e, n) => e.has(t) || Xp("Cannot " + n);
var ea = (t, e, n) => (y1(t, e, "read from private field"),
n ? n.call(t) : e.get(t))
  , Jp = (t, e, n) => e.has(t) ? Xp("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function bh(t) {
    const e = Object.create(null);
    for (const n of t.split(","))
        e[n] = 1;
    return n => n in e
}
const Me = {}
  , uo = []
  , Fr = () => {}
  , v1 = () => !1
  , bl = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97)
  , wh = t => t.startsWith("onUpdate:")
  , vt = Object.assign
  , Th = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
  , b1 = Object.prototype.hasOwnProperty
  , Ue = (t, e) => b1.call(t, e)
  , ie = Array.isArray
  , fo = t => zo(t) === "[object Map]"
  , Vo = t => zo(t) === "[object Set]"
  , Qp = t => zo(t) === "[object Date]"
  , w1 = t => zo(t) === "[object RegExp]"
  , de = t => typeof t == "function"
  , Qe = t => typeof t == "string"
  , gr = t => typeof t == "symbol"
  , Ve = t => t !== null && typeof t == "object"
  , Su = t => (Ve(t) || de(t)) && de(t.then) && de(t.catch)
  , ay = Object.prototype.toString
  , zo = t => ay.call(t)
  , T1 = t => zo(t).slice(8, -1)
  , ly = t => zo(t) === "[object Object]"
  , xh = t => Qe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t
  , ho = bh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Cu = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
}
  , x1 = /-(\w)/g
  , Un = Cu(t => t.replace(x1, (e, n) => n ? n.toUpperCase() : ""))
  , E1 = /\B([A-Z])/g
  , pi = Cu(t => t.replace(E1, "-$1").toLowerCase())
  , ku = Cu(t => t.charAt(0).toUpperCase() + t.slice(1))
  , ef = Cu(t => t ? `on${ku(t)}` : "")
  , xn = (t, e) => !Object.is(t, e)
  , po = (t, ...e) => {
    for (let n = 0; n < t.length; n++)
        t[n](...e)
}
  , cy = (t, e, n, r=!1) => {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Nc = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
}
  , uy = t => {
    const e = Qe(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
}
;
let Zp;
const Ru = () => Zp || (Zp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pu(t) {
    if (ie(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const r = t[n]
              , i = Qe(r) ? R1(r) : Pu(r);
            if (i)
                for (const s in i)
                    e[s] = i[s]
        }
        return e
    } else if (Qe(t) || Ve(t))
        return t
}
const S1 = /;(?![^(]*\))/g
  , C1 = /:([^]+)/
  , k1 = /\/\*[^]*?\*\//g;
function R1(t) {
    const e = {};
    return t.replace(k1, "").split(S1).forEach(n => {
        if (n) {
            const r = n.split(C1);
            r.length > 1 && (e[r[0].trim()] = r[1].trim())
        }
    }
    ),
    e
}
function Gi(t) {
    let e = "";
    if (Qe(t))
        e = t;
    else if (ie(t))
        for (let n = 0; n < t.length; n++) {
            const r = Gi(t[n]);
            r && (e += r + " ")
        }
    else if (Ve(t))
        for (const n in t)
            t[n] && (e += n + " ");
    return e.trim()
}
function P1(t) {
    if (!t)
        return null;
    let {class: e, style: n} = t;
    return e && !Qe(e) && (t.class = Gi(e)),
    n && (t.style = Pu(n)),
    t
}
const A1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , O1 = bh(A1);
function fy(t) {
    return !!t || t === ""
}
function $1(t, e) {
    if (t.length !== e.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++)
        n = Ls(t[r], e[r]);
    return n
}
function Ls(t, e) {
    if (t === e)
        return !0;
    let n = Qp(t)
      , r = Qp(e);
    if (n || r)
        return n && r ? t.getTime() === e.getTime() : !1;
    if (n = gr(t),
    r = gr(e),
    n || r)
        return t === e;
    if (n = ie(t),
    r = ie(e),
    n || r)
        return n && r ? $1(t, e) : !1;
    if (n = Ve(t),
    r = Ve(e),
    n || r) {
        if (!n || !r)
            return !1;
        const i = Object.keys(t).length
          , s = Object.keys(e).length;
        if (i !== s)
            return !1;
        for (const o in t) {
            const a = t.hasOwnProperty(o)
              , l = e.hasOwnProperty(o);
            if (a && !l || !a && l || !Ls(t[o], e[o]))
                return !1
        }
    }
    return String(t) === String(e)
}
function Eh(t, e) {
    return t.findIndex(n => Ls(n, e))
}
const dy = t => !!(t && t.__v_isRef === !0)
  , ys = t => Qe(t) ? t : t == null ? "" : ie(t) || Ve(t) && (t.toString === ay || !de(t.toString)) ? dy(t) ? ys(t.value) : JSON.stringify(t, hy, 2) : String(t)
  , hy = (t, e) => dy(e) ? hy(t, e.value) : fo(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce( (n, [r,i], s) => (n[tf(r, s) + " =>"] = i,
    n), {})
} : Vo(e) ? {
    [`Set(${e.size})`]: [...e.values()].map(n => tf(n))
} : gr(e) ? tf(e) : Ve(e) && !ie(e) && !ly(e) ? String(e) : e
  , tf = (t, e="") => {
    var n;
    return gr(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
}
;
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let hn;
class py {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = hn,
        !e && hn && (this.index = (hn.scopes || (hn.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let e, n;
            if (this.scopes)
                for (e = 0,
                n = this.scopes.length; e < n; e++)
                    this.scopes[e].pause();
            for (e = 0,
            n = this.effects.length; e < n; e++)
                this.effects[e].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let e, n;
            if (this.scopes)
                for (e = 0,
                n = this.scopes.length; e < n; e++)
                    this.scopes[e].resume();
            for (e = 0,
            n = this.effects.length; e < n; e++)
                this.effects[e].resume()
        }
    }
    run(e) {
        if (this._active) {
            const n = hn;
            try {
                return hn = this,
                e()
            } finally {
                hn = n
            }
        }
    }
    on() {
        hn = this
    }
    off() {
        hn = this.parent
    }
    stop(e) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !e) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i,
                i.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function L1(t) {
    return new py(t)
}
function wl() {
    return hn
}
function Fc(t, e=!1) {
    hn && hn.cleanups.push(t)
}
let Ge;
const nf = new WeakSet;
class gy {
    constructor(e) {
        this.fn = e,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        hn && hn.active && hn.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        nf.has(this) && (nf.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _y(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        eg(this),
        yy(this);
        const e = Ge
          , n = dr;
        Ge = this,
        dr = !0;
        try {
            return this.fn()
        } finally {
            vy(this),
            Ge = e,
            dr = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let e = this.deps; e; e = e.nextDep)
                kh(e);
            this.deps = this.depsTail = void 0,
            eg(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? nf.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Zf(this) && this.run()
    }
    get dirty() {
        return Zf(this)
    }
}
let my = 0, Ca, ka;
function _y(t, e=!1) {
    if (t.flags |= 8,
    e) {
        t.next = ka,
        ka = t;
        return
    }
    t.next = Ca,
    Ca = t
}
function Sh() {
    my++
}
function Ch() {
    if (--my > 0)
        return;
    if (ka) {
        let e = ka;
        for (ka = void 0; e; ) {
            const n = e.next;
            e.next = void 0,
            e.flags &= -9,
            e = n
        }
    }
    let t;
    for (; Ca; ) {
        let e = Ca;
        for (Ca = void 0; e; ) {
            const n = e.next;
            if (e.next = void 0,
            e.flags &= -9,
            e.flags & 1)
                try {
                    e.trigger()
                } catch (r) {
                    t || (t = r)
                }
            e = n
        }
    }
    if (t)
        throw t
}
function yy(t) {
    for (let e = t.deps; e; e = e.nextDep)
        e.version = -1,
        e.prevActiveLink = e.dep.activeLink,
        e.dep.activeLink = e
}
function vy(t) {
    let e, n = t.depsTail, r = n;
    for (; r; ) {
        const i = r.prevDep;
        r.version === -1 ? (r === n && (n = i),
        kh(r),
        M1(r)) : e = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = i
    }
    t.deps = e,
    t.depsTail = n
}
function Zf(t) {
    for (let e = t.deps; e; e = e.nextDep)
        if (e.dep.version !== e.version || e.dep.computed && (by(e.dep.computed) || e.dep.version !== e.version))
            return !0;
    return !!t._dirty
}
function by(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17,
    t.globalVersion === Qa))
        return;
    t.globalVersion = Qa;
    const e = t.dep;
    if (t.flags |= 2,
    e.version > 0 && !t.isSSR && t.deps && !Zf(t)) {
        t.flags &= -3;
        return
    }
    const n = Ge
      , r = dr;
    Ge = t,
    dr = !0;
    try {
        yy(t);
        const i = t.fn(t._value);
        (e.version === 0 || xn(i, t._value)) && (t._value = i,
        e.version++)
    } catch (i) {
        throw e.version++,
        i
    } finally {
        Ge = n,
        dr = r,
        vy(t),
        t.flags &= -3
    }
}
function kh(t, e=!1) {
    const {dep: n, prevSub: r, nextSub: i} = t;
    if (r && (r.nextSub = i,
    t.prevSub = void 0),
    i && (i.prevSub = r,
    t.nextSub = void 0),
    n.subs === t && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let s = n.computed.deps; s; s = s.nextDep)
            kh(s, !0)
    }
    !e && !--n.sc && n.map && n.map.delete(n.key)
}
function M1(t) {
    const {prevDep: e, nextDep: n} = t;
    e && (e.nextDep = n,
    t.prevDep = void 0),
    n && (n.prevDep = e,
    t.nextDep = void 0)
}
let dr = !0;
const wy = [];
function Xi() {
    wy.push(dr),
    dr = !1
}
function Ji() {
    const t = wy.pop();
    dr = t === void 0 ? !0 : t
}
function eg(t) {
    const {cleanup: e} = t;
    if (t.cleanup = void 0,
    e) {
        const n = Ge;
        Ge = void 0;
        try {
            e()
        } finally {
            Ge = n
        }
    }
}
let Qa = 0
  , I1 = class {
    constructor(e, n) {
        this.sub = e,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
;
class Au {
    constructor(e) {
        this.computed = e,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0
    }
    track(e) {
        if (!Ge || !dr || Ge === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Ge)
            n = this.activeLink = new I1(Ge,this),
            Ge.deps ? (n.prevDep = Ge.depsTail,
            Ge.depsTail.nextDep = n,
            Ge.depsTail = n) : Ge.deps = Ge.depsTail = n,
            Ty(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = Ge.depsTail,
            n.nextDep = void 0,
            Ge.depsTail.nextDep = n,
            Ge.depsTail = n,
            Ge.deps === n && (Ge.deps = r)
        }
        return n
    }
    trigger(e) {
        this.version++,
        Qa++,
        this.notify(e)
    }
    notify(e) {
        Sh();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Ch()
        }
    }
}
function Ty(t) {
    if (t.dep.sc++,
    t.sub.flags & 4) {
        const e = t.dep.computed;
        if (e && !t.dep.subs) {
            e.flags |= 20;
            for (let r = e.deps; r; r = r.nextDep)
                Ty(r)
        }
        const n = t.dep.subs;
        n !== t && (t.prevSub = n,
        n && (n.nextSub = t)),
        t.dep.subs = t
    }
}
const jc = new WeakMap
  , vs = Symbol("")
  , ed = Symbol("")
  , Za = Symbol("");
function Qt(t, e, n) {
    if (dr && Ge) {
        let r = jc.get(t);
        r || jc.set(t, r = new Map);
        let i = r.get(n);
        i || (r.set(n, i = new Au),
        i.map = r,
        i.key = n),
        i.track()
    }
}
function ti(t, e, n, r, i, s) {
    const o = jc.get(t);
    if (!o) {
        Qa++;
        return
    }
    const a = l => {
        l && l.trigger()
    }
    ;
    if (Sh(),
    e === "clear")
        o.forEach(a);
    else {
        const l = ie(t)
          , u = l && xh(n);
        if (l && n === "length") {
            const c = Number(r);
            o.forEach( (f, d) => {
                (d === "length" || d === Za || !gr(d) && d >= c) && a(f)
            }
            )
        } else
            switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)),
            u && a(o.get(Za)),
            e) {
            case "add":
                l ? u && a(o.get("length")) : (a(o.get(vs)),
                fo(t) && a(o.get(ed)));
                break;
            case "delete":
                l || (a(o.get(vs)),
                fo(t) && a(o.get(ed)));
                break;
            case "set":
                fo(t) && a(o.get(vs));
                break
            }
    }
    Ch()
}
function D1(t, e) {
    const n = jc.get(t);
    return n && n.get(e)
}
function Ys(t) {
    const e = Oe(t);
    return e === t ? e : (Qt(e, "iterate", Za),
    Qn(t) ? e : e.map(Zt))
}
function Ou(t) {
    return Qt(t = Oe(t), "iterate", Za),
    t
}
const N1 = {
    __proto__: null,
    [Symbol.iterator]() {
        return rf(this, Symbol.iterator, Zt)
    },
    concat(...t) {
        return Ys(this).concat(...t.map(e => ie(e) ? Ys(e) : e))
    },
    entries() {
        return rf(this, "entries", t => (t[1] = Zt(t[1]),
        t))
    },
    every(t, e) {
        return Yr(this, "every", t, e, void 0, arguments)
    },
    filter(t, e) {
        return Yr(this, "filter", t, e, n => n.map(Zt), arguments)
    },
    find(t, e) {
        return Yr(this, "find", t, e, Zt, arguments)
    },
    findIndex(t, e) {
        return Yr(this, "findIndex", t, e, void 0, arguments)
    },
    findLast(t, e) {
        return Yr(this, "findLast", t, e, Zt, arguments)
    },
    findLastIndex(t, e) {
        return Yr(this, "findLastIndex", t, e, void 0, arguments)
    },
    forEach(t, e) {
        return Yr(this, "forEach", t, e, void 0, arguments)
    },
    includes(...t) {
        return sf(this, "includes", t)
    },
    indexOf(...t) {
        return sf(this, "indexOf", t)
    },
    join(t) {
        return Ys(this).join(t)
    },
    lastIndexOf(...t) {
        return sf(this, "lastIndexOf", t)
    },
    map(t, e) {
        return Yr(this, "map", t, e, void 0, arguments)
    },
    pop() {
        return ta(this, "pop")
    },
    push(...t) {
        return ta(this, "push", t)
    },
    reduce(t, ...e) {
        return tg(this, "reduce", t, e)
    },
    reduceRight(t, ...e) {
        return tg(this, "reduceRight", t, e)
    },
    shift() {
        return ta(this, "shift")
    },
    some(t, e) {
        return Yr(this, "some", t, e, void 0, arguments)
    },
    splice(...t) {
        return ta(this, "splice", t)
    },
    toReversed() {
        return Ys(this).toReversed()
    },
    toSorted(t) {
        return Ys(this).toSorted(t)
    },
    toSpliced(...t) {
        return Ys(this).toSpliced(...t)
    },
    unshift(...t) {
        return ta(this, "unshift", t)
    },
    values() {
        return rf(this, "values", Zt)
    }
};
function rf(t, e, n) {
    const r = Ou(t)
      , i = r[e]();
    return r !== t && !Qn(t) && (i._next = i.next,
    i.next = () => {
        const s = i._next();
        return s.value && (s.value = n(s.value)),
        s
    }
    ),
    i
}
const F1 = Array.prototype;
function Yr(t, e, n, r, i, s) {
    const o = Ou(t)
      , a = o !== t && !Qn(t)
      , l = o[e];
    if (l !== F1[e]) {
        const f = l.apply(t, s);
        return a ? Zt(f) : f
    }
    let u = n;
    o !== t && (a ? u = function(f, d) {
        return n.call(this, Zt(f), d, t)
    }
    : n.length > 2 && (u = function(f, d) {
        return n.call(this, f, d, t)
    }
    ));
    const c = l.call(o, u, r);
    return a && i ? i(c) : c
}
function tg(t, e, n, r) {
    const i = Ou(t);
    let s = n;
    return i !== t && (Qn(t) ? n.length > 3 && (s = function(o, a, l) {
        return n.call(this, o, a, l, t)
    }
    ) : s = function(o, a, l) {
        return n.call(this, o, Zt(a), l, t)
    }
    ),
    i[e](s, ...r)
}
function sf(t, e, n) {
    const r = Oe(t);
    Qt(r, "iterate", Za);
    const i = r[e](...n);
    return (i === -1 || i === !1) && Ah(n[0]) ? (n[0] = Oe(n[0]),
    r[e](...n)) : i
}
function ta(t, e, n=[]) {
    Xi(),
    Sh();
    const r = Oe(t)[e].apply(t, n);
    return Ch(),
    Ji(),
    r
}
const j1 = bh("__proto__,__v_isRef,__isVue")
  , xy = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(gr));
function B1(t) {
    gr(t) || (t = String(t));
    const e = Oe(this);
    return Qt(e, "has", t),
    e.hasOwnProperty(t)
}
class Ey {
    constructor(e=!1, n=!1) {
        this._isReadonly = e,
        this._isShallow = n
    }
    get(e, n, r) {
        if (n === "__v_skip")
            return e.__v_skip;
        const i = this._isReadonly
          , s = this._isShallow;
        if (n === "__v_isReactive")
            return !i;
        if (n === "__v_isReadonly")
            return i;
        if (n === "__v_isShallow")
            return s;
        if (n === "__v_raw")
            return r === (i ? s ? X1 : Ry : s ? ky : Cy).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
        const o = ie(e);
        if (!i) {
            let l;
            if (o && (l = N1[n]))
                return l;
            if (n === "hasOwnProperty")
                return B1
        }
        const a = Reflect.get(e, n, Je(e) ? e : r);
        return (gr(n) ? xy.has(n) : j1(n)) || (i || Qt(e, "get", n),
        s) ? a : Je(a) ? o && xh(n) ? a : a.value : Ve(a) ? i ? Py(a) : mr(a) : a
    }
}
class Sy extends Ey {
    constructor(e=!1) {
        super(!1, e)
    }
    set(e, n, r, i) {
        let s = e[n];
        if (!this._isShallow) {
            const l = Ui(s);
            if (!Qn(r) && !Ui(r) && (s = Oe(s),
            r = Oe(r)),
            !ie(e) && Je(s) && !Je(r))
                return l ? !1 : (s.value = r,
                !0)
        }
        const o = ie(e) && xh(n) ? Number(n) < e.length : Ue(e, n)
          , a = Reflect.set(e, n, r, Je(e) ? e : i);
        return e === Oe(i) && (o ? xn(r, s) && ti(e, "set", n, r) : ti(e, "add", n, r)),
        a
    }
    deleteProperty(e, n) {
        const r = Ue(e, n);
        e[n];
        const i = Reflect.deleteProperty(e, n);
        return i && r && ti(e, "delete", n, void 0),
        i
    }
    has(e, n) {
        const r = Reflect.has(e, n);
        return (!gr(n) || !xy.has(n)) && Qt(e, "has", n),
        r
    }
    ownKeys(e) {
        return Qt(e, "iterate", ie(e) ? "length" : vs),
        Reflect.ownKeys(e)
    }
}
class H1 extends Ey {
    constructor(e=!1) {
        super(!0, e)
    }
    set(e, n) {
        return !0
    }
    deleteProperty(e, n) {
        return !0
    }
}
const U1 = new Sy
  , V1 = new H1
  , z1 = new Sy(!0);
const td = t => t
  , Ol = t => Reflect.getPrototypeOf(t);
function W1(t, e, n) {
    return function(...r) {
        const i = this.__v_raw
          , s = Oe(i)
          , o = fo(s)
          , a = t === "entries" || t === Symbol.iterator && o
          , l = t === "keys" && o
          , u = i[t](...r)
          , c = n ? td : e ? nd : Zt;
        return !e && Qt(s, "iterate", l ? ed : vs),
        {
            next() {
                const {value: f, done: d} = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function $l(t) {
    return function(...e) {
        return t === "delete" ? !1 : t === "clear" ? void 0 : this
    }
}
function q1(t, e) {
    const n = {
        get(i) {
            const s = this.__v_raw
              , o = Oe(s)
              , a = Oe(i);
            t || (xn(i, a) && Qt(o, "get", i),
            Qt(o, "get", a));
            const {has: l} = Ol(o)
              , u = e ? td : t ? nd : Zt;
            if (l.call(o, i))
                return u(s.get(i));
            if (l.call(o, a))
                return u(s.get(a));
            s !== o && s.get(i)
        },
        get size() {
            const i = this.__v_raw;
            return !t && Qt(Oe(i), "iterate", vs),
            Reflect.get(i, "size", i)
        },
        has(i) {
            const s = this.__v_raw
              , o = Oe(s)
              , a = Oe(i);
            return t || (xn(i, a) && Qt(o, "has", i),
            Qt(o, "has", a)),
            i === a ? s.has(i) : s.has(i) || s.has(a)
        },
        forEach(i, s) {
            const o = this
              , a = o.__v_raw
              , l = Oe(a)
              , u = e ? td : t ? nd : Zt;
            return !t && Qt(l, "iterate", vs),
            a.forEach( (c, f) => i.call(s, u(c), u(f), o))
        }
    };
    return vt(n, t ? {
        add: $l("add"),
        set: $l("set"),
        delete: $l("delete"),
        clear: $l("clear")
    } : {
        add(i) {
            !e && !Qn(i) && !Ui(i) && (i = Oe(i));
            const s = Oe(this);
            return Ol(s).has.call(s, i) || (s.add(i),
            ti(s, "add", i, i)),
            this
        },
        set(i, s) {
            !e && !Qn(s) && !Ui(s) && (s = Oe(s));
            const o = Oe(this)
              , {has: a, get: l} = Ol(o);
            let u = a.call(o, i);
            u || (i = Oe(i),
            u = a.call(o, i));
            const c = l.call(o, i);
            return o.set(i, s),
            u ? xn(s, c) && ti(o, "set", i, s) : ti(o, "add", i, s),
            this
        },
        delete(i) {
            const s = Oe(this)
              , {has: o, get: a} = Ol(s);
            let l = o.call(s, i);
            l || (i = Oe(i),
            l = o.call(s, i)),
            a && a.call(s, i);
            const u = s.delete(i);
            return l && ti(s, "delete", i, void 0),
            u
        },
        clear() {
            const i = Oe(this)
              , s = i.size !== 0
              , o = i.clear();
            return s && ti(i, "clear", void 0, void 0),
            o
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        n[i] = W1(i, t, e)
    }
    ),
    n
}
function Rh(t, e) {
    const n = q1(t, e);
    return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(Ue(n, i) && i in r ? n : r, i, s)
}
const Y1 = {
    get: Rh(!1, !1)
}
  , K1 = {
    get: Rh(!1, !0)
}
  , G1 = {
    get: Rh(!0, !1)
};
const Cy = new WeakMap
  , ky = new WeakMap
  , Ry = new WeakMap
  , X1 = new WeakMap;
function J1(t) {
    switch (t) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Q1(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : J1(T1(t))
}
function mr(t) {
    return Ui(t) ? t : Ph(t, !1, U1, Y1, Cy)
}
function si(t) {
    return Ph(t, !1, z1, K1, ky)
}
function Py(t) {
    return Ph(t, !0, V1, G1, Ry)
}
function Ph(t, e, n, r, i) {
    if (!Ve(t) || t.__v_raw && !(e && t.__v_isReactive))
        return t;
    const s = i.get(t);
    if (s)
        return s;
    const o = Q1(t);
    if (o === 0)
        return t;
    const a = new Proxy(t,o === 2 ? r : n);
    return i.set(t, a),
    a
}
function bs(t) {
    return Ui(t) ? bs(t.__v_raw) : !!(t && t.__v_isReactive)
}
function Ui(t) {
    return !!(t && t.__v_isReadonly)
}
function Qn(t) {
    return !!(t && t.__v_isShallow)
}
function Ah(t) {
    return t ? !!t.__v_raw : !1
}
function Oe(t) {
    const e = t && t.__v_raw;
    return e ? Oe(e) : t
}
function Z1(t) {
    return !Ue(t, "__v_skip") && Object.isExtensible(t) && cy(t, "__v_skip", !0),
    t
}
const Zt = t => Ve(t) ? mr(t) : t
  , nd = t => Ve(t) ? Py(t) : t;
function Je(t) {
    return t ? t.__v_isRef === !0 : !1
}
function De(t) {
    return Ay(t, !1)
}
function ko(t) {
    return Ay(t, !0)
}
function Ay(t, e) {
    return Je(t) ? t : new eT(t,e)
}
class eT {
    constructor(e, n) {
        this.dep = new Au,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? e : Oe(e),
        this._value = n ? e : Zt(e),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(e) {
        const n = this._rawValue
          , r = this.__v_isShallow || Qn(e) || Ui(e);
        e = r ? e : Oe(e),
        xn(e, n) && (this._rawValue = e,
        this._value = r ? e : Zt(e),
        this.dep.trigger())
    }
}
function ee(t) {
    return Je(t) ? t.value : t
}
function Oy(t) {
    return de(t) ? t() : ee(t)
}
const tT = {
    get: (t, e, n) => e === "__v_raw" ? t : ee(Reflect.get(t, e, n)),
    set: (t, e, n, r) => {
        const i = t[e];
        return Je(i) && !Je(n) ? (i.value = n,
        !0) : Reflect.set(t, e, n, r)
    }
};
function $y(t) {
    return bs(t) ? t : new Proxy(t,tT)
}
class nT {
    constructor(e) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new Au
          , {get: r, set: i} = e(n.track.bind(n), n.trigger.bind(n));
        this._get = r,
        this._set = i
    }
    get value() {
        return this._value = this._get()
    }
    set value(e) {
        this._set(e)
    }
}
function Ly(t) {
    return new nT(t)
}
class rT {
    constructor(e, n, r) {
        this._object = e,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const e = this._object[this._key];
        return this._value = e === void 0 ? this._defaultValue : e
    }
    set value(e) {
        this._object[this._key] = e
    }
    get dep() {
        return D1(Oe(this._object), this._key)
    }
}
class iT {
    constructor(e) {
        this._getter = e,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function My(t, e, n) {
    return Je(t) ? t : de(t) ? new iT(t) : Ve(t) && arguments.length > 1 ? sT(t, e, n) : De(t)
}
function sT(t, e, n) {
    const r = t[e];
    return Je(r) ? r : new rT(t,e,n)
}
class oT {
    constructor(e, n, r) {
        this.fn = e,
        this.setter = n,
        this._value = void 0,
        this.dep = new Au(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Qa - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && Ge !== this)
            return _y(this, !0),
            !0
    }
    get value() {
        const e = this.dep.track();
        return by(this),
        e && (e.version = this.dep.version),
        this._value
    }
    set value(e) {
        this.setter && this.setter(e)
    }
}
function aT(t, e, n=!1) {
    let r, i;
    return de(t) ? r = t : (r = t.get,
    i = t.set),
    new oT(r,i,n)
}
const Ll = {}
  , Bc = new WeakMap;
let ls;
function lT(t, e=!1, n=ls) {
    if (n) {
        let r = Bc.get(n);
        r || Bc.set(n, r = []),
        r.push(t)
    }
}
function cT(t, e, n=Me) {
    const {immediate: r, deep: i, once: s, scheduler: o, augmentJob: a, call: l} = n
      , u = _ => i ? _ : Qn(_) || i === !1 || i === 0 ? ni(_, 1) : ni(_);
    let c, f, d, h, g = !1, p = !1;
    if (Je(t) ? (f = () => t.value,
    g = Qn(t)) : bs(t) ? (f = () => u(t),
    g = !0) : ie(t) ? (p = !0,
    g = t.some(_ => bs(_) || Qn(_)),
    f = () => t.map(_ => {
        if (Je(_))
            return _.value;
        if (bs(_))
            return u(_);
        if (de(_))
            return l ? l(_, 2) : _()
    }
    )) : de(t) ? e ? f = l ? () => l(t, 2) : t : f = () => {
        if (d) {
            Xi();
            try {
                d()
            } finally {
                Ji()
            }
        }
        const _ = ls;
        ls = c;
        try {
            return l ? l(t, 3, [h]) : t(h)
        } finally {
            ls = _
        }
    }
    : f = Fr,
    e && i) {
        const _ = f
          , w = i === !0 ? 1 / 0 : i;
        f = () => ni(_(), w)
    }
    const v = wl()
      , y = () => {
        c.stop(),
        v && v.active && Th(v.effects, c)
    }
    ;
    if (s && e) {
        const _ = e;
        e = (...w) => {
            _(...w),
            y()
        }
    }
    let b = p ? new Array(t.length).fill(Ll) : Ll;
    const m = _ => {
        if (!(!(c.flags & 1) || !c.dirty && !_))
            if (e) {
                const w = c.run();
                if (i || g || (p ? w.some( (E, S) => xn(E, b[S])) : xn(w, b))) {
                    d && d();
                    const E = ls;
                    ls = c;
                    try {
                        const S = [w, b === Ll ? void 0 : p && b[0] === Ll ? [] : b, h];
                        l ? l(e, 3, S) : e(...S),
                        b = w
                    } finally {
                        ls = E
                    }
                }
            } else
                c.run()
    }
    ;
    return a && a(m),
    c = new gy(f),
    c.scheduler = o ? () => o(m, !1) : m,
    h = _ => lT(_, !1, c),
    d = c.onStop = () => {
        const _ = Bc.get(c);
        if (_) {
            if (l)
                l(_, 4);
            else
                for (const w of _)
                    w();
            Bc.delete(c)
        }
    }
    ,
    e ? r ? m(!0) : b = c.run() : o ? o(m.bind(null, !0), !0) : c.run(),
    y.pause = c.pause.bind(c),
    y.resume = c.resume.bind(c),
    y.stop = y,
    y
}
function ni(t, e=1 / 0, n) {
    if (e <= 0 || !Ve(t) || t.__v_skip || (n = n || new Set,
    n.has(t)))
        return t;
    if (n.add(t),
    e--,
    Je(t))
        ni(t.value, e, n);
    else if (ie(t))
        for (let r = 0; r < t.length; r++)
            ni(t[r], e, n);
    else if (Vo(t) || fo(t))
        t.forEach(r => {
            ni(r, e, n)
        }
        );
    else if (ly(t)) {
        for (const r in t)
            ni(t[r], e, n);
        for (const r of Object.getOwnPropertySymbols(t))
            Object.prototype.propertyIsEnumerable.call(t, r) && ni(t[r], e, n)
    }
    return t
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Tl(t, e, n, r) {
    try {
        return r ? t(...r) : t()
    } catch (i) {
        Wo(i, e, n)
    }
}
function _r(t, e, n, r) {
    if (de(t)) {
        const i = Tl(t, e, n, r);
        return i && Su(i) && i.catch(s => {
            Wo(s, e, n)
        }
        ),
        i
    }
    if (ie(t)) {
        const i = [];
        for (let s = 0; s < t.length; s++)
            i.push(_r(t[s], e, n, r));
        return i
    }
}
function Wo(t, e, n, r=!0) {
    const i = e ? e.vnode : null
      , {errorHandler: s, throwUnhandledErrorInProduction: o} = e && e.appContext.config || Me;
    if (e) {
        let a = e.parent;
        const l = e.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a; ) {
            const c = a.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](t, l, u) === !1)
                        return
            }
            a = a.parent
        }
        if (s) {
            Xi(),
            Tl(s, null, 10, [t, l, u]),
            Ji();
            return
        }
    }
    uT(t, n, i, r, o)
}
function uT(t, e, n, r=!0, i=!1) {
    if (i)
        throw t;
    console.error(t)
}
const mn = [];
let Pr = -1;
const go = [];
let xi = null
  , eo = 0;
const Iy = Promise.resolve();
let Hc = null;
function nr(t) {
    const e = Hc || Iy;
    return t ? e.then(this ? t.bind(this) : t) : e
}
function fT(t) {
    let e = Pr + 1
      , n = mn.length;
    for (; e < n; ) {
        const r = e + n >>> 1
          , i = mn[r]
          , s = el(i);
        s < t || s === t && i.flags & 2 ? e = r + 1 : n = r
    }
    return e
}
function Oh(t) {
    if (!(t.flags & 1)) {
        const e = el(t)
          , n = mn[mn.length - 1];
        !n || !(t.flags & 2) && e >= el(n) ? mn.push(t) : mn.splice(fT(e), 0, t),
        t.flags |= 1,
        Dy()
    }
}
function Dy() {
    Hc || (Hc = Iy.then(Ny))
}
function rd(t) {
    ie(t) ? go.push(...t) : xi && t.id === -1 ? xi.splice(eo + 1, 0, t) : t.flags & 1 || (go.push(t),
    t.flags |= 1),
    Dy()
}
function ng(t, e, n=Pr + 1) {
    for (; n < mn.length; n++) {
        const r = mn[n];
        if (r && r.flags & 2) {
            if (t && r.id !== t.uid)
                continue;
            mn.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function Uc(t) {
    if (go.length) {
        const e = [...new Set(go)].sort( (n, r) => el(n) - el(r));
        if (go.length = 0,
        xi) {
            xi.push(...e);
            return
        }
        for (xi = e,
        eo = 0; eo < xi.length; eo++) {
            const n = xi[eo];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        xi = null,
        eo = 0
    }
}
const el = t => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Ny(t) {
    try {
        for (Pr = 0; Pr < mn.length; Pr++) {
            const e = mn[Pr];
            e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2),
            Tl(e, e.i, e.i ? 15 : 14),
            e.flags & 4 || (e.flags &= -2))
        }
    } finally {
        for (; Pr < mn.length; Pr++) {
            const e = mn[Pr];
            e && (e.flags &= -2)
        }
        Pr = -1,
        mn.length = 0,
        Uc(),
        Hc = null,
        (mn.length || go.length) && Ny()
    }
}
let Ot = null
  , Fy = null;
function Vc(t) {
    const e = Ot;
    return Ot = t,
    Fy = t && t.type.__scopeId || null,
    e
}
function ot(t, e=Ot, n) {
    if (!e || t._n)
        return t;
    const r = (...i) => {
        r._d && _g(-1);
        const s = Vc(e);
        let o;
        try {
            o = t(...i)
        } finally {
            Vc(s),
            r._d && _g(1)
        }
        return o
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function dT(t, e) {
    if (Ot === null)
        return t;
    const n = Fu(Ot)
      , r = t.dirs || (t.dirs = []);
    for (let i = 0; i < e.length; i++) {
        let[s,o,a,l=Me] = e[i];
        s && (de(s) && (s = {
            mounted: s,
            updated: s
        }),
        s.deep && ni(o),
        r.push({
            dir: s,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return t
}
function Ar(t, e, n, r) {
    const i = t.dirs
      , s = e && e.dirs;
    for (let o = 0; o < i.length; o++) {
        const a = i[o];
        s && (a.oldValue = s[o].value);
        let l = a.dir[r];
        l && (Xi(),
        _r(l, n, 8, [t.el, a, t, e]),
        Ji())
    }
}
const jy = Symbol("_vte")
  , By = t => t.__isTeleport
  , Ra = t => t && (t.disabled || t.disabled === "")
  , rg = t => t && (t.defer || t.defer === "")
  , ig = t => typeof SVGElement < "u" && t instanceof SVGElement
  , sg = t => typeof MathMLElement == "function" && t instanceof MathMLElement
  , id = (t, e) => {
    const n = t && t.to;
    return Qe(n) ? e ? e(n) : null : n
}
  , Hy = {
    name: "Teleport",
    __isTeleport: !0,
    process(t, e, n, r, i, s, o, a, l, u) {
        const {mc: c, pc: f, pbc: d, o: {insert: h, querySelector: g, createText: p, createComment: v}} = u
          , y = Ra(e.props);
        let {shapeFlag: b, children: m, dynamicChildren: _} = e;
        if (t == null) {
            const w = e.el = p("")
              , E = e.anchor = p("");
            h(w, n, r),
            h(E, n, r);
            const S = (A, x) => {
                b & 16 && (i && i.isCE && (i.ce._teleportTarget = A),
                c(m, A, x, i, s, o, a, l))
            }
              , L = () => {
                const A = e.target = id(e.props, g)
                  , x = Vy(A, e, p, h);
                A && (o !== "svg" && ig(A) ? o = "svg" : o !== "mathml" && sg(A) && (o = "mathml"),
                y || (S(A, x),
                yc(e, !1)))
            }
            ;
            y && (S(n, E),
            yc(e, !0)),
            rg(e.props) ? St( () => {
                L(),
                e.el.__isMounted = !0
            }
            , s) : L()
        } else {
            if (rg(e.props) && !t.el.__isMounted) {
                St( () => {
                    Hy.process(t, e, n, r, i, s, o, a, l, u),
                    delete t.el.__isMounted
                }
                , s);
                return
            }
            e.el = t.el,
            e.targetStart = t.targetStart;
            const w = e.anchor = t.anchor
              , E = e.target = t.target
              , S = e.targetAnchor = t.targetAnchor
              , L = Ra(t.props)
              , A = L ? n : E
              , x = L ? w : S;
            if (o === "svg" || ig(E) ? o = "svg" : (o === "mathml" || sg(E)) && (o = "mathml"),
            _ ? (d(t.dynamicChildren, _, A, i, s, o, a),
            jh(t, e, !0)) : l || f(t, e, A, x, i, s, o, a, !1),
            y)
                L ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Ml(e, n, w, u, 1);
            else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
                const M = e.target = id(e.props, g);
                M && Ml(e, M, null, u, 0)
            } else
                L && Ml(e, E, S, u, 1);
            yc(e, y)
        }
    },
    remove(t, e, n, {um: r, o: {remove: i}}, s) {
        const {shapeFlag: o, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d} = t;
        if (f && (i(u),
        i(c)),
        s && i(l),
        o & 16) {
            const h = s || !Ra(d);
            for (let g = 0; g < a.length; g++) {
                const p = a[g];
                r(p, e, n, h, !!p.dynamicChildren)
            }
        }
    },
    move: Ml,
    hydrate: hT
};
function Ml(t, e, n, {o: {insert: r}, m: i}, s=2) {
    s === 0 && r(t.targetAnchor, e, n);
    const {el: o, anchor: a, shapeFlag: l, children: u, props: c} = t
      , f = s === 2;
    if (f && r(o, e, n),
    (!f || Ra(c)) && l & 16)
        for (let d = 0; d < u.length; d++)
            i(u[d], e, n, 2);
    f && r(a, e, n)
}
function hT(t, e, n, r, i, s, {o: {nextSibling: o, parentNode: a, querySelector: l, insert: u, createText: c}}, f) {
    const d = e.target = id(e.props, l);
    if (d) {
        const h = Ra(e.props)
          , g = d._lpa || d.firstChild;
        if (e.shapeFlag & 16)
            if (h)
                e.anchor = f(o(t), e, a(t), n, r, i, s),
                e.targetStart = g,
                e.targetAnchor = g && o(g);
            else {
                e.anchor = o(t);
                let p = g;
                for (; p; ) {
                    if (p && p.nodeType === 8) {
                        if (p.data === "teleport start anchor")
                            e.targetStart = p;
                        else if (p.data === "teleport anchor") {
                            e.targetAnchor = p,
                            d._lpa = e.targetAnchor && o(e.targetAnchor);
                            break
                        }
                    }
                    p = o(p)
                }
                e.targetAnchor || Vy(d, e, c, u),
                f(g && o(g), e, d, n, r, i, s)
            }
        yc(e, h)
    }
    return e.anchor && o(e.anchor)
}
const Uy = Hy;
function yc(t, e) {
    const n = t.ctx;
    if (n && n.ut) {
        let r, i;
        for (e ? (r = t.el,
        i = t.anchor) : (r = t.targetStart,
        i = t.targetAnchor); r && r !== i; )
            r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function Vy(t, e, n, r) {
    const i = e.targetStart = n("")
      , s = e.targetAnchor = n("");
    return i[jy] = s,
    t && (r(i, t),
    r(s, t)),
    s
}
const Ei = Symbol("_leaveCb")
  , Il = Symbol("_enterCb");
function zy() {
    const t = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ur( () => {
        t.isMounted = !0
    }
    ),
    qo( () => {
        t.isUnmounting = !0
    }
    ),
    t
}
const Wn = [Function, Array]
  , Wy = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Wn,
    onEnter: Wn,
    onAfterEnter: Wn,
    onEnterCancelled: Wn,
    onBeforeLeave: Wn,
    onLeave: Wn,
    onAfterLeave: Wn,
    onLeaveCancelled: Wn,
    onBeforeAppear: Wn,
    onAppear: Wn,
    onAfterAppear: Wn,
    onAppearCancelled: Wn
}
  , qy = t => {
    const e = t.subTree;
    return e.component ? qy(e.component) : e
}
  , pT = {
    name: "BaseTransition",
    props: Wy,
    setup(t, {slots: e}) {
        const n = rr()
          , r = zy();
        return () => {
            const i = e.default && $h(e.default(), !0);
            if (!i || !i.length)
                return;
            const s = Yy(i)
              , o = Oe(t)
              , {mode: a} = o;
            if (r.isLeaving)
                return of(s);
            const l = og(s);
            if (!l)
                return of(s);
            let u = tl(l, o, r, n, f => u = f);
            l.type !== Pt && Vi(l, u);
            let c = n.subTree && og(n.subTree);
            if (c && c.type !== Pt && !ur(l, c) && qy(n).type !== Pt) {
                let f = tl(c, o, r, n);
                if (Vi(c, f),
                a === "out-in" && l.type !== Pt)
                    return r.isLeaving = !0,
                    f.afterLeave = () => {
                        r.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete f.afterLeave,
                        c = void 0
                    }
                    ,
                    of(s);
                a === "in-out" && l.type !== Pt ? f.delayLeave = (d, h, g) => {
                    const p = Ky(r, c);
                    p[String(c.key)] = c,
                    d[Ei] = () => {
                        h(),
                        d[Ei] = void 0,
                        delete u.delayedLeave,
                        c = void 0
                    }
                    ,
                    u.delayedLeave = () => {
                        g(),
                        delete u.delayedLeave,
                        c = void 0
                    }
                }
                : c = void 0
            } else
                c && (c = void 0);
            return s
        }
    }
};
function Yy(t) {
    let e = t[0];
    if (t.length > 1) {
        for (const n of t)
            if (n.type !== Pt) {
                e = n;
                break
            }
    }
    return e
}
const gT = pT;
function Ky(t, e) {
    const {leavingVNodes: n} = t;
    let r = n.get(e.type);
    return r || (r = Object.create(null),
    n.set(e.type, r)),
    r
}
function tl(t, e, n, r, i) {
    const {appear: s, mode: o, persisted: a=!1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: g, onLeaveCancelled: p, onBeforeAppear: v, onAppear: y, onAfterAppear: b, onAppearCancelled: m} = e
      , _ = String(t.key)
      , w = Ky(n, t)
      , E = (A, x) => {
        A && _r(A, r, 9, x)
    }
      , S = (A, x) => {
        const M = x[1];
        E(A, x),
        ie(A) ? A.every(R => R.length <= 1) && M() : A.length <= 1 && M()
    }
      , L = {
        mode: o,
        persisted: a,
        beforeEnter(A) {
            let x = l;
            if (!n.isMounted)
                if (s)
                    x = v || l;
                else
                    return;
            A[Ei] && A[Ei](!0);
            const M = w[_];
            M && ur(t, M) && M.el[Ei] && M.el[Ei](),
            E(x, [A])
        },
        enter(A) {
            let x = u
              , M = c
              , R = f;
            if (!n.isMounted)
                if (s)
                    x = y || u,
                    M = b || c,
                    R = m || f;
                else
                    return;
            let P = !1;
            const O = A[Il] = I => {
                P || (P = !0,
                I ? E(R, [A]) : E(M, [A]),
                L.delayedLeave && L.delayedLeave(),
                A[Il] = void 0)
            }
            ;
            x ? S(x, [A, O]) : O()
        },
        leave(A, x) {
            const M = String(t.key);
            if (A[Il] && A[Il](!0),
            n.isUnmounting)
                return x();
            E(d, [A]);
            let R = !1;
            const P = A[Ei] = O => {
                R || (R = !0,
                x(),
                O ? E(p, [A]) : E(g, [A]),
                A[Ei] = void 0,
                w[M] === t && delete w[M])
            }
            ;
            w[M] = t,
            h ? S(h, [A, P]) : P()
        },
        clone(A) {
            const x = tl(A, e, n, r, i);
            return i && i(x),
            x
        }
    };
    return L
}
function of(t) {
    if (xl(t))
        return t = yr(t),
        t.children = null,
        t
}
function og(t) {
    if (!xl(t))
        return By(t.type) && t.children ? Yy(t.children) : t;
    const {shapeFlag: e, children: n} = t;
    if (n) {
        if (e & 16)
            return n[0];
        if (e & 32 && de(n.default))
            return n.default()
    }
}
function Vi(t, e) {
    t.shapeFlag & 6 && t.component ? (t.transition = e,
    Vi(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent),
    t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}
function $h(t, e=!1, n) {
    let r = []
      , i = 0;
    for (let s = 0; s < t.length; s++) {
        let o = t[s];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
        o.type === Rt ? (o.patchFlag & 128 && i++,
        r = r.concat($h(o.children, e, a))) : (e || o.type !== Pt) && r.push(a != null ? yr(o, {
            key: a
        }) : o)
    }
    if (i > 1)
        for (let s = 0; s < r.length; s++)
            r[s].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function ke(t, e) {
    return de(t) ? vt({
        name: t.name
    }, e, {
        setup: t
    }) : t
}
function Gy() {
    const t = rr();
    return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : ""
}
function Lh(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0]
}
function mI(t) {
    const e = rr()
      , n = ko(null);
    if (e) {
        const i = e.refs === Me ? e.refs = {} : e.refs;
        Object.defineProperty(i, t, {
            enumerable: !0,
            get: () => n.value,
            set: s => n.value = s
        })
    }
    return n
}
function nl(t, e, n, r, i=!1) {
    if (ie(t)) {
        t.forEach( (g, p) => nl(g, e && (ie(e) ? e[p] : e), n, r, i));
        return
    }
    if (Di(r) && !i) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && nl(t, e, n, r.component.subTree);
        return
    }
    const s = r.shapeFlag & 4 ? Fu(r.component) : r.el
      , o = i ? null : s
      , {i: a, r: l} = t
      , u = e && e.r
      , c = a.refs === Me ? a.refs = {} : a.refs
      , f = a.setupState
      , d = Oe(f)
      , h = f === Me ? () => !1 : g => Ue(d, g);
    if (u != null && u !== l && (Qe(u) ? (c[u] = null,
    h(u) && (f[u] = null)) : Je(u) && (u.value = null)),
    de(l))
        Tl(l, a, 12, [o, c]);
    else {
        const g = Qe(l)
          , p = Je(l);
        if (g || p) {
            const v = () => {
                if (t.f) {
                    const y = g ? h(l) ? f[l] : c[l] : l.value;
                    i ? ie(y) && Th(y, s) : ie(y) ? y.includes(s) || y.push(s) : g ? (c[l] = [s],
                    h(l) && (f[l] = c[l])) : (l.value = [s],
                    t.k && (c[t.k] = l.value))
                } else
                    g ? (c[l] = o,
                    h(l) && (f[l] = o)) : p && (l.value = o,
                    t.k && (c[t.k] = o))
            }
            ;
            o ? (v.id = -1,
            St(v, n)) : v()
        }
    }
}
let ag = !1;
const Ks = () => {
    ag || (console.error("Hydration completed but contains mismatches."),
    ag = !0)
}
  , mT = t => t.namespaceURI.includes("svg") && t.tagName !== "foreignObject"
  , _T = t => t.namespaceURI.includes("MathML")
  , Dl = t => {
    if (t.nodeType === 1) {
        if (mT(t))
            return "svg";
        if (_T(t))
            return "mathml"
    }
}
  , io = t => t.nodeType === 8;
function yT(t) {
    const {mt: e, p: n, o: {patchProp: r, createText: i, nextSibling: s, parentNode: o, remove: a, insert: l, createComment: u}} = t
      , c = (m, _) => {
        if (!_.hasChildNodes()) {
            n(null, m, _),
            Uc(),
            _._vnode = m;
            return
        }
        f(_.firstChild, m, null, null, null),
        Uc(),
        _._vnode = m
    }
      , f = (m, _, w, E, S, L=!1) => {
        L = L || !!_.dynamicChildren;
        const A = io(m) && m.data === "["
          , x = () => p(m, _, w, E, S, A)
          , {type: M, ref: R, shapeFlag: P, patchFlag: O} = _;
        let I = m.nodeType;
        _.el = m,
        O === -2 && (L = !1,
        _.dynamicChildren = null);
        let N = null;
        switch (M) {
        case xs:
            I !== 3 ? _.children === "" ? (l(_.el = i(""), o(m), m),
            N = m) : N = x() : (m.data !== _.children && (Ks(),
            m.data = _.children),
            N = s(m));
            break;
        case Pt:
            b(m) ? (N = s(m),
            y(_.el = m.content.firstChild, m, w)) : I !== 8 || A ? N = x() : N = s(m);
            break;
        case Aa:
            if (A && (m = s(m),
            I = m.nodeType),
            I === 1 || I === 3) {
                N = m;
                const F = !_.children.length;
                for (let H = 0; H < _.staticCount; H++)
                    F && (_.children += N.nodeType === 1 ? N.outerHTML : N.data),
                    H === _.staticCount - 1 && (_.anchor = N),
                    N = s(N);
                return A ? s(N) : N
            } else
                x();
            break;
        case Rt:
            A ? N = g(m, _, w, E, S, L) : N = x();
            break;
        default:
            if (P & 1)
                (I !== 1 || _.type.toLowerCase() !== m.tagName.toLowerCase()) && !b(m) ? N = x() : N = d(m, _, w, E, S, L);
            else if (P & 6) {
                _.slotScopeIds = S;
                const F = o(m);
                if (A ? N = v(m) : io(m) && m.data === "teleport start" ? N = v(m, m.data, "teleport end") : N = s(m),
                e(_, F, null, w, E, Dl(F), L),
                Di(_) && !_.type.__asyncResolved) {
                    let H;
                    A ? (H = pe(Rt),
                    H.anchor = N ? N.previousSibling : F.lastChild) : H = m.nodeType === 3 ? Yo("") : pe("div"),
                    H.el = m,
                    _.component.subTree = H
                }
            } else
                P & 64 ? I !== 8 ? N = x() : N = _.type.hydrate(m, _, w, E, S, L, t, h) : P & 128 && (N = _.type.hydrate(m, _, w, E, Dl(o(m)), S, L, t, f))
        }
        return R != null && nl(R, null, E, _),
        N
    }
      , d = (m, _, w, E, S, L) => {
        L = L || !!_.dynamicChildren;
        const {type: A, props: x, patchFlag: M, shapeFlag: R, dirs: P, transition: O} = _
          , I = A === "input" || A === "option";
        if (I || M !== -1) {
            P && Ar(_, null, w, "created");
            let N = !1;
            if (b(m)) {
                N = gv(null, O) && w && w.vnode.props && w.vnode.props.appear;
                const H = m.content.firstChild;
                N && O.beforeEnter(H),
                y(H, m, w),
                _.el = m = H
            }
            if (R & 16 && !(x && (x.innerHTML || x.textContent))) {
                let H = h(m.firstChild, _, m, w, E, S, L);
                for (; H; ) {
                    Nl(m, 1) || Ks();
                    const G = H;
                    H = H.nextSibling,
                    a(G)
                }
            } else if (R & 8) {
                let H = _.children;
                H[0] === `
` && (m.tagName === "PRE" || m.tagName === "TEXTAREA") && (H = H.slice(1)),
                m.textContent !== H && (Nl(m, 0) || Ks(),
                m.textContent = _.children)
            }
            if (x) {
                if (I || !L || M & 48) {
                    const H = m.tagName.includes("-");
                    for (const G in x)
                        (I && (G.endsWith("value") || G === "indeterminate") || bl(G) && !ho(G) || G[0] === "." || H) && r(m, G, null, x[G], void 0, w)
                } else if (x.onClick)
                    r(m, "onClick", null, x.onClick, void 0, w);
                else if (M & 4 && bs(x.style))
                    for (const H in x.style)
                        x.style[H]
            }
            let F;
            (F = x && x.onVnodeBeforeMount) && wn(F, w, _),
            P && Ar(_, null, w, "beforeMount"),
            ((F = x && x.onVnodeMounted) || P || N) && Tv( () => {
                F && wn(F, w, _),
                N && O.enter(m),
                P && Ar(_, null, w, "mounted")
            }
            , E)
        }
        return m.nextSibling
    }
      , h = (m, _, w, E, S, L, A) => {
        A = A || !!_.dynamicChildren;
        const x = _.children
          , M = x.length;
        for (let R = 0; R < M; R++) {
            const P = A ? x[R] : x[R] = In(x[R])
              , O = P.type === xs;
            m ? (O && !A && R + 1 < M && In(x[R + 1]).type === xs && (l(i(m.data.slice(P.children.length)), w, s(m)),
            m.data = P.children),
            m = f(m, P, E, S, L, A)) : O && !P.children ? l(P.el = i(""), w) : (Nl(w, 1) || Ks(),
            n(null, P, w, null, E, S, Dl(w), L))
        }
        return m
    }
      , g = (m, _, w, E, S, L) => {
        const {slotScopeIds: A} = _;
        A && (S = S ? S.concat(A) : A);
        const x = o(m)
          , M = h(s(m), _, x, w, E, S, L);
        return M && io(M) && M.data === "]" ? s(_.anchor = M) : (Ks(),
        l(_.anchor = u("]"), x, M),
        M)
    }
      , p = (m, _, w, E, S, L) => {
        if (Nl(m.parentElement, 1) || Ks(),
        _.el = null,
        L) {
            const M = v(m);
            for (; ; ) {
                const R = s(m);
                if (R && R !== M)
                    a(R);
                else
                    break
            }
        }
        const A = s(m)
          , x = o(m);
        return a(m),
        n(null, _, x, A, w, E, Dl(x), S),
        w && (w.vnode.el = _.el,
        Nu(w, _.el)),
        A
    }
      , v = (m, _="[", w="]") => {
        let E = 0;
        for (; m; )
            if (m = s(m),
            m && io(m) && (m.data === _ && E++,
            m.data === w)) {
                if (E === 0)
                    return s(m);
                E--
            }
        return m
    }
      , y = (m, _, w) => {
        const E = _.parentNode;
        E && E.replaceChild(m, _);
        let S = w;
        for (; S; )
            S.vnode.el === _ && (S.vnode.el = S.subTree.el = m),
            S = S.parent
    }
      , b = m => m.nodeType === 1 && m.tagName === "TEMPLATE";
    return [c, f]
}
const lg = "data-allow-mismatch"
  , vT = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
};
function Nl(t, e) {
    if (e === 0 || e === 1)
        for (; t && !t.hasAttribute(lg); )
            t = t.parentElement;
    const n = t && t.getAttribute(lg);
    if (n == null)
        return !1;
    if (n === "")
        return !0;
    {
        const r = n.split(",");
        return e === 0 && r.includes("children") ? !0 : n.split(",").includes(vT[e])
    }
}
Ru().requestIdleCallback;
Ru().cancelIdleCallback;
function bT(t, e) {
    if (io(t) && t.data === "[") {
        let n = 1
          , r = t.nextSibling;
        for (; r; ) {
            if (r.nodeType === 1) {
                if (e(r) === !1)
                    break
            } else if (io(r))
                if (r.data === "]") {
                    if (--n === 0)
                        break
                } else
                    r.data === "[" && n++;
            r = r.nextSibling
        }
    } else
        e(t)
}
const Di = t => !!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function Xy(t) {
    de(t) && (t = {
        loader: t
    });
    const {loader: e, loadingComponent: n, errorComponent: r, delay: i=200, hydrate: s, timeout: o, suspensible: a=!0, onError: l} = t;
    let u = null, c, f = 0;
    const d = () => (f++,
    u = null,
    h())
      , h = () => {
        let g;
        return u || (g = u = e().catch(p => {
            if (p = p instanceof Error ? p : new Error(String(p)),
            l)
                return new Promise( (v, y) => {
                    l(p, () => v(d()), () => y(p), f + 1)
                }
                );
            throw p
        }
        ).then(p => g !== u && u ? u : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default),
        c = p,
        p)))
    }
    ;
    return ke({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        __asyncHydrate(g, p, v) {
            const y = s ? () => {
                const b = s(v, m => bT(g, m));
                b && (p.bum || (p.bum = [])).push(b)
            }
            : v;
            c ? y() : h().then( () => !p.isUnmounted && y())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const g = At;
            if (Lh(g),
            c)
                return () => af(c, g);
            const p = m => {
                u = null,
                Wo(m, g, 13, !r)
            }
            ;
            if (a && g.suspense || Po)
                return h().then(m => () => af(m, g)).catch(m => (p(m),
                () => r ? pe(r, {
                    error: m
                }) : null));
            const v = De(!1)
              , y = De()
              , b = De(!!i);
            return i && setTimeout( () => {
                b.value = !1
            }
            , i),
            o != null && setTimeout( () => {
                if (!v.value && !y.value) {
                    const m = new Error(`Async component timed out after ${o}ms.`);
                    p(m),
                    y.value = m
                }
            }
            , o),
            h().then( () => {
                v.value = !0,
                g.parent && xl(g.parent.vnode) && g.parent.update()
            }
            ).catch(m => {
                p(m),
                y.value = m
            }
            ),
            () => {
                if (v.value && c)
                    return af(c, g);
                if (y.value && r)
                    return pe(r, {
                        error: y.value
                    });
                if (n && !b.value)
                    return pe(n)
            }
        }
    })
}
function af(t, e) {
    const {ref: n, props: r, children: i, ce: s} = e.vnode
      , o = pe(t, r, i);
    return o.ref = n,
    o.ce = s,
    delete e.vnode.ce,
    o
}
const xl = t => t.type.__isKeepAlive
  , wT = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(t, {slots: e}) {
        const n = rr()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const b = e.default && e.default();
                return b && b.length === 1 ? b[0] : b
            }
            ;
        const i = new Map
          , s = new Set;
        let o = null;
        const a = n.suspense
          , {renderer: {p: l, m: u, um: c, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (b, m, _, w, E) => {
            const S = b.component;
            u(b, m, _, 0, a),
            l(S.vnode, b, m, _, S, a, w, b.slotScopeIds, E),
            St( () => {
                S.isDeactivated = !1,
                S.a && po(S.a);
                const L = b.props && b.props.onVnodeMounted;
                L && wn(L, S.parent, b)
            }
            , a)
        }
        ,
        r.deactivate = b => {
            const m = b.component;
            qc(m.m),
            qc(m.a),
            u(b, d, null, 1, a),
            St( () => {
                m.da && po(m.da);
                const _ = b.props && b.props.onVnodeUnmounted;
                _ && wn(_, m.parent, b),
                m.isDeactivated = !0
            }
            , a)
        }
        ;
        function h(b) {
            lf(b),
            c(b, n, a, !0)
        }
        function g(b) {
            i.forEach( (m, _) => {
                const w = hd(m.type);
                w && !b(w) && p(_)
            }
            )
        }
        function p(b) {
            const m = i.get(b);
            m && (!o || !ur(m, o)) ? h(m) : o && lf(o),
            i.delete(b),
            s.delete(b)
        }
        zt( () => [t.include, t.exclude], ([b,m]) => {
            b && g(_ => ha(b, _)),
            m && g(_ => !ha(m, _))
        }
        , {
            flush: "post",
            deep: !0
        });
        let v = null;
        const y = () => {
            v != null && (Kc(n.subTree.type) ? St( () => {
                i.set(v, Fl(n.subTree))
            }
            , n.subTree.suspense) : i.set(v, Fl(n.subTree)))
        }
        ;
        return Ur(y),
        Mh(y),
        qo( () => {
            i.forEach(b => {
                const {subTree: m, suspense: _} = n
                  , w = Fl(m);
                if (b.type === w.type && b.key === w.key) {
                    lf(w);
                    const E = w.component.da;
                    E && St(E, _);
                    return
                }
                h(b)
            }
            )
        }
        ),
        () => {
            if (v = null,
            !e.default)
                return o = null;
            const b = e.default()
              , m = b[0];
            if (b.length > 1)
                return o = null,
                b;
            if (!Ms(m) || !(m.shapeFlag & 4) && !(m.shapeFlag & 128))
                return o = null,
                m;
            let _ = Fl(m);
            if (_.type === Pt)
                return o = null,
                _;
            const w = _.type
              , E = hd(Di(_) ? _.type.__asyncResolved || {} : w)
              , {include: S, exclude: L, max: A} = t;
            if (S && (!E || !ha(S, E)) || L && E && ha(L, E))
                return _.shapeFlag &= -257,
                o = _,
                m;
            const x = _.key == null ? w : _.key
              , M = i.get(x);
            return _.el && (_ = yr(_),
            m.shapeFlag & 128 && (m.ssContent = _)),
            v = x,
            M ? (_.el = M.el,
            _.component = M.component,
            _.transition && Vi(_, _.transition),
            _.shapeFlag |= 512,
            s.delete(x),
            s.add(x)) : (s.add(x),
            A && s.size > parseInt(A, 10) && p(s.values().next().value)),
            _.shapeFlag |= 256,
            o = _,
            Kc(m.type) ? m : _
        }
    }
}
  , TT = wT;
function ha(t, e) {
    return ie(t) ? t.some(n => ha(n, e)) : Qe(t) ? t.split(",").includes(e) : w1(t) ? (t.lastIndex = 0,
    t.test(e)) : !1
}
function Jy(t, e) {
    Zy(t, "a", e)
}
function Qy(t, e) {
    Zy(t, "da", e)
}
function Zy(t, e, n=At) {
    const r = t.__wdc || (t.__wdc = () => {
        let i = n;
        for (; i; ) {
            if (i.isDeactivated)
                return;
            i = i.parent
        }
        return t()
    }
    );
    if ($u(e, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            xl(i.parent.vnode) && xT(r, e, n, i),
            i = i.parent
    }
}
function xT(t, e, n, r) {
    const i = $u(e, t, r, !0);
    wr( () => {
        Th(r[e], i)
    }
    , n)
}
function lf(t) {
    t.shapeFlag &= -257,
    t.shapeFlag &= -513
}
function Fl(t) {
    return t.shapeFlag & 128 ? t.ssContent : t
}
function $u(t, e, n=At, r=!1) {
    if (n) {
        const i = n[t] || (n[t] = [])
          , s = e.__weh || (e.__weh = (...o) => {
            Xi();
            const a = Is(n)
              , l = _r(e, n, t, o);
            return a(),
            Ji(),
            l
        }
        );
        return r ? i.unshift(s) : i.push(s),
        s
    }
}
const gi = t => (e, n=At) => {
    (!Po || t === "sp") && $u(t, (...r) => e(...r), n)
}
  , ET = gi("bm")
  , Ur = gi("m")
  , ST = gi("bu")
  , Mh = gi("u")
  , qo = gi("bum")
  , wr = gi("um")
  , CT = gi("sp")
  , kT = gi("rtg")
  , RT = gi("rtc");
function Ih(t, e=At) {
    $u("ec", t, e)
}
const Dh = "components"
  , PT = "directives";
function cg(t, e) {
    return Nh(Dh, t, !0, e) || t
}
const ev = Symbol.for("v-ndc");
function ws(t) {
    return Qe(t) ? Nh(Dh, t, !1) || t : t || ev
}
function _I(t) {
    return Nh(PT, t)
}
function Nh(t, e, n=!0, r=!1) {
    const i = Ot || At;
    if (i) {
        const s = i.type;
        if (t === Dh) {
            const a = hd(s, !1);
            if (a && (a === e || a === Un(e) || a === ku(Un(e))))
                return s
        }
        const o = ug(i[t] || s[t], e) || ug(i.appContext[t], e);
        return !o && r ? s : o
    }
}
function ug(t, e) {
    return t && (t[e] || t[Un(e)] || t[ku(Un(e))])
}
function AT(t, e, n, r) {
    let i;
    const s = n
      , o = ie(t);
    if (o || Qe(t)) {
        const a = o && bs(t);
        let l = !1;
        a && (l = !Qn(t),
        t = Ou(t)),
        i = new Array(t.length);
        for (let u = 0, c = t.length; u < c; u++)
            i[u] = e(l ? Zt(t[u]) : t[u], u, void 0, s)
    } else if (typeof t == "number") {
        i = new Array(t);
        for (let a = 0; a < t; a++)
            i[a] = e(a + 1, a, void 0, s)
    } else if (Ve(t))
        if (t[Symbol.iterator])
            i = Array.from(t, (a, l) => e(a, l, void 0, s));
        else {
            const a = Object.keys(t);
            i = new Array(a.length);
            for (let l = 0, u = a.length; l < u; l++) {
                const c = a[l];
                i[l] = e(t[c], c, l, s)
            }
        }
    else
        i = [];
    return i
}
function fi(t, e, n={}, r, i) {
    if (Ot.ce || Ot.parent && Di(Ot.parent) && Ot.parent.ce)
        return ge(),
        Fe(Rt, null, [pe("slot", n, r)], 64);
    let s = t[e];
    s && s._c && (s._d = !1),
    ge();
    const o = s && tv(s(n))
      , a = n.key || o && o.key
      , l = Fe(Rt, {
        key: (a && !gr(a) ? a : `_${e}`) + ""
    }, o || [], o && t._ === 1 ? 64 : -2);
    return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    l
}
function tv(t) {
    return t.some(e => Ms(e) ? !(e.type === Pt || e.type === Rt && !tv(e.children)) : !0) ? t : null
}
const sd = t => t ? Rv(t) ? Fu(t) : sd(t.parent) : null
  , Pa = vt(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => sd(t.parent),
    $root: t => sd(t.root),
    $host: t => t.ce,
    $emit: t => t.emit,
    $options: t => rv(t),
    $forceUpdate: t => t.f || (t.f = () => {
        Oh(t.update)
    }
    ),
    $nextTick: t => t.n || (t.n = nr.bind(t.proxy)),
    $watch: t => QT.bind(t)
})
  , cf = (t, e) => t !== Me && !t.__isScriptSetup && Ue(t, e)
  , OT = {
    get({_: t}, e) {
        if (e === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: i, props: s, accessCache: o, type: a, appContext: l} = t;
        let u;
        if (e[0] !== "$") {
            const h = o[e];
            if (h !== void 0)
                switch (h) {
                case 1:
                    return r[e];
                case 2:
                    return i[e];
                case 4:
                    return n[e];
                case 3:
                    return s[e]
                }
            else {
                if (cf(r, e))
                    return o[e] = 1,
                    r[e];
                if (i !== Me && Ue(i, e))
                    return o[e] = 2,
                    i[e];
                if ((u = t.propsOptions[0]) && Ue(u, e))
                    return o[e] = 3,
                    s[e];
                if (n !== Me && Ue(n, e))
                    return o[e] = 4,
                    n[e];
                od && (o[e] = 0)
            }
        }
        const c = Pa[e];
        let f, d;
        if (c)
            return e === "$attrs" && Qt(t.attrs, "get", ""),
            c(t);
        if ((f = a.__cssModules) && (f = f[e]))
            return f;
        if (n !== Me && Ue(n, e))
            return o[e] = 4,
            n[e];
        if (d = l.config.globalProperties,
        Ue(d, e))
            return d[e]
    },
    set({_: t}, e, n) {
        const {data: r, setupState: i, ctx: s} = t;
        return cf(i, e) ? (i[e] = n,
        !0) : r !== Me && Ue(r, e) ? (r[e] = n,
        !0) : Ue(t.props, e) || e[0] === "$" && e.slice(1)in t ? !1 : (s[e] = n,
        !0)
    },
    has({_: {data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s}}, o) {
        let a;
        return !!n[o] || t !== Me && Ue(t, o) || cf(e, o) || (a = s[0]) && Ue(a, o) || Ue(r, o) || Ue(Pa, o) || Ue(i.config.globalProperties, o)
    },
    defineProperty(t, e, n) {
        return n.get != null ? t._.accessCache[e] = 0 : Ue(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
    }
};
function yI() {
    return $T().attrs
}
function $T() {
    const t = rr();
    return t.setupContext || (t.setupContext = Av(t))
}
function zc(t) {
    return ie(t) ? t.reduce( (e, n) => (e[n] = null,
    e), {}) : t
}
function rl(t, e) {
    return !t || !e ? t || e : ie(t) && ie(e) ? t.concat(e) : vt({}, zc(t), zc(e))
}
function Lu(t) {
    const e = rr();
    let n = t();
    return fd(),
    Su(n) && (n = n.catch(r => {
        throw Is(e),
        r
    }
    )),
    [n, () => Is(e)]
}
let od = !0;
function LT(t) {
    const e = rv(t)
      , n = t.proxy
      , r = t.ctx;
    od = !1,
    e.beforeCreate && fg(e.beforeCreate, t, "bc");
    const {data: i, computed: s, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: h, updated: g, activated: p, deactivated: v, beforeDestroy: y, beforeUnmount: b, destroyed: m, unmounted: _, render: w, renderTracked: E, renderTriggered: S, errorCaptured: L, serverPrefetch: A, expose: x, inheritAttrs: M, components: R, directives: P, filters: O} = e;
    if (u && MT(u, r, null),
    o)
        for (const F in o) {
            const H = o[F];
            de(H) && (r[F] = H.bind(n))
        }
    if (i) {
        const F = i.call(n, n);
        Ve(F) && (t.data = mr(F))
    }
    if (od = !0,
    s)
        for (const F in s) {
            const H = s[F]
              , G = de(H) ? H.bind(n, n) : de(H.get) ? H.get.bind(n, n) : Fr
              , $ = !de(H) && de(H.set) ? H.set.bind(n) : Fr
              , ne = Ie({
                get: G,
                set: $
            });
            Object.defineProperty(r, F, {
                enumerable: !0,
                configurable: !0,
                get: () => ne.value,
                set: ce => ne.value = ce
            })
        }
    if (a)
        for (const F in a)
            nv(a[F], r, n, F);
    if (l) {
        const F = de(l) ? l.call(n) : l;
        Reflect.ownKeys(F).forEach(H => {
            Zn(H, F[H])
        }
        )
    }
    c && fg(c, t, "c");
    function N(F, H) {
        ie(H) ? H.forEach(G => F(G.bind(n))) : H && F(H.bind(n))
    }
    if (N(ET, f),
    N(Ur, d),
    N(ST, h),
    N(Mh, g),
    N(Jy, p),
    N(Qy, v),
    N(Ih, L),
    N(RT, E),
    N(kT, S),
    N(qo, b),
    N(wr, _),
    N(CT, A),
    ie(x))
        if (x.length) {
            const F = t.exposed || (t.exposed = {});
            x.forEach(H => {
                Object.defineProperty(F, H, {
                    get: () => n[H],
                    set: G => n[H] = G
                })
            }
            )
        } else
            t.exposed || (t.exposed = {});
    w && t.render === Fr && (t.render = w),
    M != null && (t.inheritAttrs = M),
    R && (t.components = R),
    P && (t.directives = P),
    A && Lh(t)
}
function MT(t, e, n=Fr) {
    ie(t) && (t = ad(t));
    for (const r in t) {
        const i = t[r];
        let s;
        Ve(i) ? "default"in i ? s = ut(i.from || r, i.default, !0) : s = ut(i.from || r) : s = ut(i),
        Je(s) ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: o => s.value = o
        }) : e[r] = s
    }
}
function fg(t, e, n) {
    _r(ie(t) ? t.map(r => r.bind(e.proxy)) : t.bind(e.proxy), e, n)
}
function nv(t, e, n, r) {
    let i = r.includes(".") ? yv(n, r) : () => n[r];
    if (Qe(t)) {
        const s = e[t];
        de(s) && zt(i, s)
    } else if (de(t))
        zt(i, t.bind(n));
    else if (Ve(t))
        if (ie(t))
            t.forEach(s => nv(s, e, n, r));
        else {
            const s = de(t.handler) ? t.handler.bind(n) : e[t.handler];
            de(s) && zt(i, s, t)
        }
}
function rv(t) {
    const e = t.type
      , {mixins: n, extends: r} = e
      , {mixins: i, optionsCache: s, config: {optionMergeStrategies: o}} = t.appContext
      , a = s.get(e);
    let l;
    return a ? l = a : !i.length && !n && !r ? l = e : (l = {},
    i.length && i.forEach(u => Wc(l, u, o, !0)),
    Wc(l, e, o)),
    Ve(e) && s.set(e, l),
    l
}
function Wc(t, e, n, r=!1) {
    const {mixins: i, extends: s} = e;
    s && Wc(t, s, n, !0),
    i && i.forEach(o => Wc(t, o, n, !0));
    for (const o in e)
        if (!(r && o === "expose")) {
            const a = IT[o] || n && n[o];
            t[o] = a ? a(t[o], e[o]) : e[o]
        }
    return t
}
const IT = {
    data: dg,
    props: hg,
    emits: hg,
    methods: pa,
    computed: pa,
    beforeCreate: un,
    created: un,
    beforeMount: un,
    mounted: un,
    beforeUpdate: un,
    updated: un,
    beforeDestroy: un,
    beforeUnmount: un,
    destroyed: un,
    unmounted: un,
    activated: un,
    deactivated: un,
    errorCaptured: un,
    serverPrefetch: un,
    components: pa,
    directives: pa,
    watch: NT,
    provide: dg,
    inject: DT
};
function dg(t, e) {
    return e ? t ? function() {
        return vt(de(t) ? t.call(this, this) : t, de(e) ? e.call(this, this) : e)
    }
    : e : t
}
function DT(t, e) {
    return pa(ad(t), ad(e))
}
function ad(t) {
    if (ie(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++)
            e[t[n]] = t[n];
        return e
    }
    return t
}
function un(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}
function pa(t, e) {
    return t ? vt(Object.create(null), t, e) : e
}
function hg(t, e) {
    return t ? ie(t) && ie(e) ? [...new Set([...t, ...e])] : vt(Object.create(null), zc(t), zc(e ?? {})) : e
}
function NT(t, e) {
    if (!t)
        return e;
    if (!e)
        return t;
    const n = vt(Object.create(null), t);
    for (const r in e)
        n[r] = un(t[r], e[r]);
    return n
}
function iv() {
    return {
        app: null,
        config: {
            isNativeTag: v1,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let FT = 0;
function jT(t, e) {
    return function(r, i=null) {
        de(r) || (r = vt({}, r)),
        i != null && !Ve(i) && (i = null);
        const s = iv()
          , o = new WeakSet
          , a = [];
        let l = !1;
        const u = s.app = {
            _uid: FT++,
            _component: r,
            _props: i,
            _container: null,
            _context: s,
            _instance: null,
            version: yx,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...f) {
                return o.has(c) || (c && de(c.install) ? (o.add(c),
                c.install(u, ...f)) : de(c) && (o.add(c),
                c(u, ...f))),
                u
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c),
                u
            },
            component(c, f) {
                return f ? (s.components[c] = f,
                u) : s.components[c]
            },
            directive(c, f) {
                return f ? (s.directives[c] = f,
                u) : s.directives[c]
            },
            mount(c, f, d) {
                if (!l) {
                    const h = u._ceVNode || pe(r, i);
                    return h.appContext = s,
                    d === !0 ? d = "svg" : d === !1 && (d = void 0),
                    f && e ? e(h, c) : t(h, c, d),
                    l = !0,
                    u._container = c,
                    c.__vue_app__ = u,
                    Fu(h.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                l && (_r(a, u._instance, 16),
                t(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(c, f) {
                return s.provides[c] = f,
                u
            },
            runWithContext(c) {
                const f = Ts;
                Ts = u;
                try {
                    return c()
                } finally {
                    Ts = f
                }
            }
        };
        return u
    }
}
let Ts = null;
function Zn(t, e) {
    if (At) {
        let n = At.provides;
        const r = At.parent && At.parent.provides;
        r === n && (n = At.provides = Object.create(r)),
        n[t] = e
    }
}
function ut(t, e, n=!1) {
    const r = At || Ot;
    if (r || Ts) {
        const i = Ts ? Ts._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (i && t in i)
            return i[t];
        if (arguments.length > 1)
            return n && de(e) ? e.call(r && r.proxy) : e
    }
}
function Mu() {
    return !!(At || Ot || Ts)
}
const sv = {}
  , ov = () => Object.create(sv)
  , av = t => Object.getPrototypeOf(t) === sv;
function BT(t, e, n, r=!1) {
    const i = {}
      , s = ov();
    t.propsDefaults = Object.create(null),
    lv(t, e, i, s);
    for (const o in t.propsOptions[0])
        o in i || (i[o] = void 0);
    n ? t.props = r ? i : si(i) : t.type.props ? t.props = i : t.props = s,
    t.attrs = s
}
function HT(t, e, n, r) {
    const {props: i, attrs: s, vnode: {patchFlag: o}} = t
      , a = Oe(i)
      , [l] = t.propsOptions;
    let u = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = t.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (Du(t.emitsOptions, d))
                    continue;
                const h = e[d];
                if (l)
                    if (Ue(s, d))
                        h !== s[d] && (s[d] = h,
                        u = !0);
                    else {
                        const g = Un(d);
                        i[g] = ld(l, a, g, h, t, !1)
                    }
                else
                    h !== s[d] && (s[d] = h,
                    u = !0)
            }
        }
    } else {
        lv(t, e, i, s) && (u = !0);
        let c;
        for (const f in a)
            (!e || !Ue(e, f) && ((c = pi(f)) === f || !Ue(e, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = ld(l, a, f, void 0, t, !0)) : delete i[f]);
        if (s !== a)
            for (const f in s)
                (!e || !Ue(e, f)) && (delete s[f],
                u = !0)
    }
    u && ti(t.attrs, "set", "")
}
function lv(t, e, n, r) {
    const [i,s] = t.propsOptions;
    let o = !1, a;
    if (e)
        for (let l in e) {
            if (ho(l))
                continue;
            const u = e[l];
            let c;
            i && Ue(i, c = Un(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Du(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            o = !0)
        }
    if (s) {
        const l = Oe(n)
          , u = a || Me;
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            n[f] = ld(i, l, f, u[f], t, !Ue(u, f))
        }
    }
    return o
}
function ld(t, e, n, r, i, s) {
    const o = t[n];
    if (o != null) {
        const a = Ue(o, "default");
        if (a && r === void 0) {
            const l = o.default;
            if (o.type !== Function && !o.skipFactory && de(l)) {
                const {propsDefaults: u} = i;
                if (n in u)
                    r = u[n];
                else {
                    const c = Is(i);
                    r = u[n] = l.call(null, e),
                    c()
                }
            } else
                r = l;
            i.ce && i.ce._setProp(n, r)
        }
        o[0] && (s && !a ? r = !1 : o[1] && (r === "" || r === pi(n)) && (r = !0))
    }
    return r
}
const UT = new WeakMap;
function cv(t, e, n=!1) {
    const r = n ? UT : e.propsCache
      , i = r.get(t);
    if (i)
        return i;
    const s = t.props
      , o = {}
      , a = [];
    let l = !1;
    if (!de(t)) {
        const c = f => {
            l = !0;
            const [d,h] = cv(f, e, !0);
            vt(o, d),
            h && a.push(...h)
        }
        ;
        !n && e.mixins.length && e.mixins.forEach(c),
        t.extends && c(t.extends),
        t.mixins && t.mixins.forEach(c)
    }
    if (!s && !l)
        return Ve(t) && r.set(t, uo),
        uo;
    if (ie(s))
        for (let c = 0; c < s.length; c++) {
            const f = Un(s[c]);
            pg(f) && (o[f] = Me)
        }
    else if (s)
        for (const c in s) {
            const f = Un(c);
            if (pg(f)) {
                const d = s[c]
                  , h = o[f] = ie(d) || de(d) ? {
                    type: d
                } : vt({}, d)
                  , g = h.type;
                let p = !1
                  , v = !0;
                if (ie(g))
                    for (let y = 0; y < g.length; ++y) {
                        const b = g[y]
                          , m = de(b) && b.name;
                        if (m === "Boolean") {
                            p = !0;
                            break
                        } else
                            m === "String" && (v = !1)
                    }
                else
                    p = de(g) && g.name === "Boolean";
                h[0] = p,
                h[1] = v,
                (p || Ue(h, "default")) && a.push(f)
            }
        }
    const u = [o, a];
    return Ve(t) && r.set(t, u),
    u
}
function pg(t) {
    return t[0] !== "$" && !ho(t)
}
const uv = t => t[0] === "_" || t === "$stable"
  , Fh = t => ie(t) ? t.map(In) : [In(t)]
  , VT = (t, e, n) => {
    if (e._n)
        return e;
    const r = ot( (...i) => Fh(e(...i)), n);
    return r._c = !1,
    r
}
  , fv = (t, e, n) => {
    const r = t._ctx;
    for (const i in t) {
        if (uv(i))
            continue;
        const s = t[i];
        if (de(s))
            e[i] = VT(i, s, r);
        else if (s != null) {
            const o = Fh(s);
            e[i] = () => o
        }
    }
}
  , dv = (t, e) => {
    const n = Fh(e);
    t.slots.default = () => n
}
  , hv = (t, e, n) => {
    for (const r in e)
        (n || r !== "_") && (t[r] = e[r])
}
  , zT = (t, e, n) => {
    const r = t.slots = ov();
    if (t.vnode.shapeFlag & 32) {
        const i = e._;
        i ? (hv(r, e, n),
        n && cy(r, "_", i, !0)) : fv(e, r)
    } else
        e && dv(t, e)
}
  , WT = (t, e, n) => {
    const {vnode: r, slots: i} = t;
    let s = !0
      , o = Me;
    if (r.shapeFlag & 32) {
        const a = e._;
        a ? n && a === 1 ? s = !1 : hv(i, e, n) : (s = !e.$stable,
        fv(e, i)),
        o = e
    } else
        e && (dv(t, e),
        o = {
            default: 1
        });
    if (s)
        for (const a in i)
            !uv(a) && o[a] == null && delete i[a]
}
  , St = Tv;
function qT(t) {
    return pv(t)
}
function YT(t) {
    return pv(t, yT)
}
function pv(t, e) {
    const n = Ru();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: s, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: h=Fr, insertStaticContent: g} = t
      , p = (T, C, D, U=null, k=null, V=null, K=void 0, Y=null, B=!!C.dynamicChildren) => {
        if (T === C)
            return;
        T && !ur(T, C) && (U = j(T),
        ce(T, k, V, !0),
        T = null),
        C.patchFlag === -2 && (B = !1,
        C.dynamicChildren = null);
        const {type: z, ref: re, shapeFlag: J} = C;
        switch (z) {
        case xs:
            v(T, C, D, U);
            break;
        case Pt:
            y(T, C, D, U);
            break;
        case Aa:
            T == null && b(C, D, U, K);
            break;
        case Rt:
            R(T, C, D, U, k, V, K, Y, B);
            break;
        default:
            J & 1 ? w(T, C, D, U, k, V, K, Y, B) : J & 6 ? P(T, C, D, U, k, V, K, Y, B) : (J & 64 || J & 128) && z.process(T, C, D, U, k, V, K, Y, B, X)
        }
        re != null && k && nl(re, T && T.ref, V, C || T, !C)
    }
      , v = (T, C, D, U) => {
        if (T == null)
            r(C.el = a(C.children), D, U);
        else {
            const k = C.el = T.el;
            C.children !== T.children && u(k, C.children)
        }
    }
      , y = (T, C, D, U) => {
        T == null ? r(C.el = l(C.children || ""), D, U) : C.el = T.el
    }
      , b = (T, C, D, U) => {
        [T.el,T.anchor] = g(T.children, C, D, U, T.el, T.anchor)
    }
      , m = ({el: T, anchor: C}, D, U) => {
        let k;
        for (; T && T !== C; )
            k = d(T),
            r(T, D, U),
            T = k;
        r(C, D, U)
    }
      , _ = ({el: T, anchor: C}) => {
        let D;
        for (; T && T !== C; )
            D = d(T),
            i(T),
            T = D;
        i(C)
    }
      , w = (T, C, D, U, k, V, K, Y, B) => {
        C.type === "svg" ? K = "svg" : C.type === "math" && (K = "mathml"),
        T == null ? E(C, D, U, k, V, K, Y, B) : A(T, C, k, V, K, Y, B)
    }
      , E = (T, C, D, U, k, V, K, Y) => {
        let B, z;
        const {props: re, shapeFlag: J, transition: Q, dirs: le} = T;
        if (B = T.el = o(T.type, V, re && re.is, re),
        J & 8 ? c(B, T.children) : J & 16 && L(T.children, B, null, U, k, uf(T, V), K, Y),
        le && Ar(T, null, U, "created"),
        S(B, T, T.scopeId, K, U),
        re) {
            for (const Ee in re)
                Ee !== "value" && !ho(Ee) && s(B, Ee, null, re[Ee], V, U);
            "value"in re && s(B, "value", null, re.value, V),
            (z = re.onVnodeBeforeMount) && wn(z, U, T)
        }
        le && Ar(T, null, U, "beforeMount");
        const oe = gv(k, Q);
        oe && Q.beforeEnter(B),
        r(B, C, D),
        ((z = re && re.onVnodeMounted) || oe || le) && St( () => {
            z && wn(z, U, T),
            oe && Q.enter(B),
            le && Ar(T, null, U, "mounted")
        }
        , k)
    }
      , S = (T, C, D, U, k) => {
        if (D && h(T, D),
        U)
            for (let V = 0; V < U.length; V++)
                h(T, U[V]);
        if (k) {
            let V = k.subTree;
            if (C === V || Kc(V.type) && (V.ssContent === C || V.ssFallback === C)) {
                const K = k.vnode;
                S(T, K, K.scopeId, K.slotScopeIds, k.parent)
            }
        }
    }
      , L = (T, C, D, U, k, V, K, Y, B=0) => {
        for (let z = B; z < T.length; z++) {
            const re = T[z] = Y ? Si(T[z]) : In(T[z]);
            p(null, re, C, D, U, k, V, K, Y)
        }
    }
      , A = (T, C, D, U, k, V, K) => {
        const Y = C.el = T.el;
        let {patchFlag: B, dynamicChildren: z, dirs: re} = C;
        B |= T.patchFlag & 16;
        const J = T.props || Me
          , Q = C.props || Me;
        let le;
        if (D && ns(D, !1),
        (le = Q.onVnodeBeforeUpdate) && wn(le, D, C, T),
        re && Ar(C, T, D, "beforeUpdate"),
        D && ns(D, !0),
        (J.innerHTML && Q.innerHTML == null || J.textContent && Q.textContent == null) && c(Y, ""),
        z ? x(T.dynamicChildren, z, Y, D, U, uf(C, k), V) : K || H(T, C, Y, null, D, U, uf(C, k), V, !1),
        B > 0) {
            if (B & 16)
                M(Y, J, Q, D, k);
            else if (B & 2 && J.class !== Q.class && s(Y, "class", null, Q.class, k),
            B & 4 && s(Y, "style", J.style, Q.style, k),
            B & 8) {
                const oe = C.dynamicProps;
                for (let Ee = 0; Ee < oe.length; Ee++) {
                    const be = oe[Ee]
                      , nt = J[be]
                      , at = Q[be];
                    (at !== nt || be === "value") && s(Y, be, nt, at, k, D)
                }
            }
            B & 1 && T.children !== C.children && c(Y, C.children)
        } else
            !K && z == null && M(Y, J, Q, D, k);
        ((le = Q.onVnodeUpdated) || re) && St( () => {
            le && wn(le, D, C, T),
            re && Ar(C, T, D, "updated")
        }
        , U)
    }
      , x = (T, C, D, U, k, V, K) => {
        for (let Y = 0; Y < C.length; Y++) {
            const B = T[Y]
              , z = C[Y]
              , re = B.el && (B.type === Rt || !ur(B, z) || B.shapeFlag & 70) ? f(B.el) : D;
            p(B, z, re, null, U, k, V, K, !0)
        }
    }
      , M = (T, C, D, U, k) => {
        if (C !== D) {
            if (C !== Me)
                for (const V in C)
                    !ho(V) && !(V in D) && s(T, V, C[V], null, k, U);
            for (const V in D) {
                if (ho(V))
                    continue;
                const K = D[V]
                  , Y = C[V];
                K !== Y && V !== "value" && s(T, V, Y, K, k, U)
            }
            "value"in D && s(T, "value", C.value, D.value, k)
        }
    }
      , R = (T, C, D, U, k, V, K, Y, B) => {
        const z = C.el = T ? T.el : a("")
          , re = C.anchor = T ? T.anchor : a("");
        let {patchFlag: J, dynamicChildren: Q, slotScopeIds: le} = C;
        le && (Y = Y ? Y.concat(le) : le),
        T == null ? (r(z, D, U),
        r(re, D, U),
        L(C.children || [], D, re, k, V, K, Y, B)) : J > 0 && J & 64 && Q && T.dynamicChildren ? (x(T.dynamicChildren, Q, D, k, V, K, Y),
        (C.key != null || k && C === k.subTree) && jh(T, C, !0)) : H(T, C, D, re, k, V, K, Y, B)
    }
      , P = (T, C, D, U, k, V, K, Y, B) => {
        C.slotScopeIds = Y,
        T == null ? C.shapeFlag & 512 ? k.ctx.activate(C, D, U, K, B) : O(C, D, U, k, V, K, B) : I(T, C, B)
    }
      , O = (T, C, D, U, k, V, K) => {
        const Y = T.component = hx(T, U, k);
        if (xl(T) && (Y.ctx.renderer = X),
        px(Y, !1, K),
        Y.asyncDep) {
            if (k && k.registerDep(Y, N, K),
            !T.el) {
                const B = Y.subTree = pe(Pt);
                y(null, B, C, D)
            }
        } else
            N(Y, T, C, D, k, V, K)
    }
      , I = (T, C, D) => {
        const U = C.component = T.component;
        if (rx(T, C, D))
            if (U.asyncDep && !U.asyncResolved) {
                F(U, C, D);
                return
            } else
                U.next = C,
                U.update();
        else
            C.el = T.el,
            U.vnode = C
    }
      , N = (T, C, D, U, k, V, K) => {
        const Y = () => {
            if (T.isMounted) {
                let {next: J, bu: Q, u: le, parent: oe, vnode: Ee} = T;
                {
                    const Lt = mv(T);
                    if (Lt) {
                        J && (J.el = Ee.el,
                        F(T, J, K)),
                        Lt.asyncDep.then( () => {
                            T.isUnmounted || Y()
                        }
                        );
                        return
                    }
                }
                let be = J, nt;
                ns(T, !1),
                J ? (J.el = Ee.el,
                F(T, J, K)) : J = Ee,
                Q && po(Q),
                (nt = J.props && J.props.onVnodeBeforeUpdate) && wn(nt, oe, J, Ee),
                ns(T, !0);
                const at = ff(T)
                  , $e = T.subTree;
                T.subTree = at,
                p($e, at, f($e.el), j($e), T, k, V),
                J.el = at.el,
                be === null && Nu(T, at.el),
                le && St(le, k),
                (nt = J.props && J.props.onVnodeUpdated) && St( () => wn(nt, oe, J, Ee), k)
            } else {
                let J;
                const {el: Q, props: le} = C
                  , {bm: oe, m: Ee, parent: be, root: nt, type: at} = T
                  , $e = Di(C);
                if (ns(T, !1),
                oe && po(oe),
                !$e && (J = le && le.onVnodeBeforeMount) && wn(J, be, C),
                ns(T, !0),
                Q && _e) {
                    const Lt = () => {
                        T.subTree = ff(T),
                        _e(Q, T.subTree, T, k, null)
                    }
                    ;
                    $e && at.__asyncHydrate ? at.__asyncHydrate(Q, T, Lt) : Lt()
                } else {
                    nt.ce && nt.ce._injectChildStyle(at);
                    const Lt = T.subTree = ff(T);
                    p(null, Lt, D, U, T, k, V),
                    C.el = Lt.el
                }
                if (Ee && St(Ee, k),
                !$e && (J = le && le.onVnodeMounted)) {
                    const Lt = C;
                    St( () => wn(J, be, Lt), k)
                }
                (C.shapeFlag & 256 || be && Di(be.vnode) && be.vnode.shapeFlag & 256) && T.a && St(T.a, k),
                T.isMounted = !0,
                C = D = U = null
            }
        }
        ;
        T.scope.on();
        const B = T.effect = new gy(Y);
        T.scope.off();
        const z = T.update = B.run.bind(B)
          , re = T.job = B.runIfDirty.bind(B);
        re.i = T,
        re.id = T.uid,
        B.scheduler = () => Oh(re),
        ns(T, !0),
        z()
    }
      , F = (T, C, D) => {
        C.component = T;
        const U = T.vnode.props;
        T.vnode = C,
        T.next = null,
        HT(T, C.props, U, D),
        WT(T, C.children, D),
        Xi(),
        ng(T),
        Ji()
    }
      , H = (T, C, D, U, k, V, K, Y, B=!1) => {
        const z = T && T.children
          , re = T ? T.shapeFlag : 0
          , J = C.children
          , {patchFlag: Q, shapeFlag: le} = C;
        if (Q > 0) {
            if (Q & 128) {
                $(z, J, D, U, k, V, K, Y, B);
                return
            } else if (Q & 256) {
                G(z, J, D, U, k, V, K, Y, B);
                return
            }
        }
        le & 8 ? (re & 16 && ae(z, k, V),
        J !== z && c(D, J)) : re & 16 ? le & 16 ? $(z, J, D, U, k, V, K, Y, B) : ae(z, k, V, !0) : (re & 8 && c(D, ""),
        le & 16 && L(J, D, U, k, V, K, Y, B))
    }
      , G = (T, C, D, U, k, V, K, Y, B) => {
        T = T || uo,
        C = C || uo;
        const z = T.length
          , re = C.length
          , J = Math.min(z, re);
        let Q;
        for (Q = 0; Q < J; Q++) {
            const le = C[Q] = B ? Si(C[Q]) : In(C[Q]);
            p(T[Q], le, D, null, k, V, K, Y, B)
        }
        z > re ? ae(T, k, V, !0, !1, J) : L(C, D, U, k, V, K, Y, B, J)
    }
      , $ = (T, C, D, U, k, V, K, Y, B) => {
        let z = 0;
        const re = C.length;
        let J = T.length - 1
          , Q = re - 1;
        for (; z <= J && z <= Q; ) {
            const le = T[z]
              , oe = C[z] = B ? Si(C[z]) : In(C[z]);
            if (ur(le, oe))
                p(le, oe, D, null, k, V, K, Y, B);
            else
                break;
            z++
        }
        for (; z <= J && z <= Q; ) {
            const le = T[J]
              , oe = C[Q] = B ? Si(C[Q]) : In(C[Q]);
            if (ur(le, oe))
                p(le, oe, D, null, k, V, K, Y, B);
            else
                break;
            J--,
            Q--
        }
        if (z > J) {
            if (z <= Q) {
                const le = Q + 1
                  , oe = le < re ? C[le].el : U;
                for (; z <= Q; )
                    p(null, C[z] = B ? Si(C[z]) : In(C[z]), D, oe, k, V, K, Y, B),
                    z++
            }
        } else if (z > Q)
            for (; z <= J; )
                ce(T[z], k, V, !0),
                z++;
        else {
            const le = z
              , oe = z
              , Ee = new Map;
            for (z = oe; z <= Q; z++) {
                const gt = C[z] = B ? Si(C[z]) : In(C[z]);
                gt.key != null && Ee.set(gt.key, z)
            }
            let be, nt = 0;
            const at = Q - oe + 1;
            let $e = !1
              , Lt = 0;
            const ln = new Array(at);
            for (z = 0; z < at; z++)
                ln[z] = 0;
            for (z = le; z <= J; z++) {
                const gt = T[z];
                if (nt >= at) {
                    ce(gt, k, V, !0);
                    continue
                }
                let bt;
                if (gt.key != null)
                    bt = Ee.get(gt.key);
                else
                    for (be = oe; be <= Q; be++)
                        if (ln[be - oe] === 0 && ur(gt, C[be])) {
                            bt = be;
                            break
                        }
                bt === void 0 ? ce(gt, k, V, !0) : (ln[bt - oe] = z + 1,
                bt >= Lt ? Lt = bt : $e = !0,
                p(gt, C[bt], D, null, k, V, K, Y, B),
                nt++)
            }
            const Wr = $e ? KT(ln) : uo;
            for (be = Wr.length - 1,
            z = at - 1; z >= 0; z--) {
                const gt = oe + z
                  , bt = C[gt]
                  , xr = gt + 1 < re ? C[gt + 1].el : U;
                ln[z] === 0 ? p(null, bt, D, xr, k, V, K, Y, B) : $e && (be < 0 || z !== Wr[be] ? ne(bt, D, xr, 2) : be--)
            }
        }
    }
      , ne = (T, C, D, U, k=null) => {
        const {el: V, type: K, transition: Y, children: B, shapeFlag: z} = T;
        if (z & 6) {
            ne(T.component.subTree, C, D, U);
            return
        }
        if (z & 128) {
            T.suspense.move(C, D, U);
            return
        }
        if (z & 64) {
            K.move(T, C, D, X);
            return
        }
        if (K === Rt) {
            r(V, C, D);
            for (let J = 0; J < B.length; J++)
                ne(B[J], C, D, U);
            r(T.anchor, C, D);
            return
        }
        if (K === Aa) {
            m(T, C, D);
            return
        }
        if (U !== 2 && z & 1 && Y)
            if (U === 0)
                Y.beforeEnter(V),
                r(V, C, D),
                St( () => Y.enter(V), k);
            else {
                const {leave: J, delayLeave: Q, afterLeave: le} = Y
                  , oe = () => r(V, C, D)
                  , Ee = () => {
                    J(V, () => {
                        oe(),
                        le && le()
                    }
                    )
                }
                ;
                Q ? Q(V, oe, Ee) : Ee()
            }
        else
            r(V, C, D)
    }
      , ce = (T, C, D, U=!1, k=!1) => {
        const {type: V, props: K, ref: Y, children: B, dynamicChildren: z, shapeFlag: re, patchFlag: J, dirs: Q, cacheIndex: le} = T;
        if (J === -2 && (k = !1),
        Y != null && nl(Y, null, D, T, !0),
        le != null && (C.renderCache[le] = void 0),
        re & 256) {
            C.ctx.deactivate(T);
            return
        }
        const oe = re & 1 && Q
          , Ee = !Di(T);
        let be;
        if (Ee && (be = K && K.onVnodeBeforeUnmount) && wn(be, C, T),
        re & 6)
            he(T.component, D, U);
        else {
            if (re & 128) {
                T.suspense.unmount(D, U);
                return
            }
            oe && Ar(T, null, C, "beforeUnmount"),
            re & 64 ? T.type.remove(T, C, D, X, U) : z && !z.hasOnce && (V !== Rt || J > 0 && J & 64) ? ae(z, C, D, !1, !0) : (V === Rt && J & 384 || !k && re & 16) && ae(B, C, D),
            U && ze(T)
        }
        (Ee && (be = K && K.onVnodeUnmounted) || oe) && St( () => {
            be && wn(be, C, T),
            oe && Ar(T, null, C, "unmounted")
        }
        , D)
    }
      , ze = T => {
        const {type: C, el: D, anchor: U, transition: k} = T;
        if (C === Rt) {
            me(D, U);
            return
        }
        if (C === Aa) {
            _(T);
            return
        }
        const V = () => {
            i(D),
            k && !k.persisted && k.afterLeave && k.afterLeave()
        }
        ;
        if (T.shapeFlag & 1 && k && !k.persisted) {
            const {leave: K, delayLeave: Y} = k
              , B = () => K(D, V);
            Y ? Y(T.el, V, B) : B()
        } else
            V()
    }
      , me = (T, C) => {
        let D;
        for (; T !== C; )
            D = d(T),
            i(T),
            T = D;
        i(C)
    }
      , he = (T, C, D) => {
        const {bum: U, scope: k, job: V, subTree: K, um: Y, m: B, a: z} = T;
        qc(B),
        qc(z),
        U && po(U),
        k.stop(),
        V && (V.flags |= 8,
        ce(K, T, C, D)),
        Y && St(Y, C),
        St( () => {
            T.isUnmounted = !0
        }
        , C),
        C && C.pendingBranch && !C.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === C.pendingId && (C.deps--,
        C.deps === 0 && C.resolve())
    }
      , ae = (T, C, D, U=!1, k=!1, V=0) => {
        for (let K = V; K < T.length; K++)
            ce(T[K], C, D, U, k)
    }
      , j = T => {
        if (T.shapeFlag & 6)
            return j(T.component.subTree);
        if (T.shapeFlag & 128)
            return T.suspense.next();
        const C = d(T.anchor || T.el)
          , D = C && C[jy];
        return D ? d(D) : C
    }
    ;
    let W = !1;
    const q = (T, C, D) => {
        T == null ? C._vnode && ce(C._vnode, null, null, !0) : p(C._vnode || null, T, C, null, null, null, D),
        C._vnode = T,
        W || (W = !0,
        ng(),
        Uc(),
        W = !1)
    }
      , X = {
        p,
        um: ce,
        m: ne,
        r: ze,
        mt: O,
        mc: L,
        pc: H,
        pbc: x,
        n: j,
        o: t
    };
    let se, _e;
    return e && ([se,_e] = e(X)),
    {
        render: q,
        hydrate: se,
        createApp: jT(q, se)
    }
}
function uf({type: t, props: e}, n) {
    return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
}
function ns({effect: t, job: e}, n) {
    n ? (t.flags |= 32,
    e.flags |= 4) : (t.flags &= -33,
    e.flags &= -5)
}
function gv(t, e) {
    return (!t || t && !t.pendingBranch) && e && !e.persisted
}
function jh(t, e, n=!1) {
    const r = t.children
      , i = e.children;
    if (ie(r) && ie(i))
        for (let s = 0; s < r.length; s++) {
            const o = r[s];
            let a = i[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = Si(i[s]),
            a.el = o.el),
            !n && a.patchFlag !== -2 && jh(o, a)),
            a.type === xs && (a.el = o.el)
        }
}
function KT(t) {
    const e = t.slice()
      , n = [0];
    let r, i, s, o, a;
    const l = t.length;
    for (r = 0; r < l; r++) {
        const u = t[r];
        if (u !== 0) {
            if (i = n[n.length - 1],
            t[i] < u) {
                e[r] = i,
                n.push(r);
                continue
            }
            for (s = 0,
            o = n.length - 1; s < o; )
                a = s + o >> 1,
                t[n[a]] < u ? s = a + 1 : o = a;
            u < t[n[s]] && (s > 0 && (e[r] = n[s - 1]),
            n[s] = r)
        }
    }
    for (s = n.length,
    o = n[s - 1]; s-- > 0; )
        n[s] = o,
        o = e[o];
    return n
}
function mv(t) {
    const e = t.subTree.component;
    if (e)
        return e.asyncDep && !e.asyncResolved ? e : mv(e)
}
function qc(t) {
    if (t)
        for (let e = 0; e < t.length; e++)
            t[e].flags |= 8
}
const GT = Symbol.for("v-scx")
  , XT = () => ut(GT);
function _v(t, e) {
    return Iu(t, null, e)
}
function JT(t, e) {
    return Iu(t, null, {
        flush: "sync"
    })
}
function zt(t, e, n) {
    return Iu(t, e, n)
}
function Iu(t, e, n=Me) {
    const {immediate: r, deep: i, flush: s, once: o} = n
      , a = vt({}, n)
      , l = e && r || !e && s !== "post";
    let u;
    if (Po) {
        if (s === "sync") {
            const h = XT();
            u = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!l) {
            const h = () => {}
            ;
            return h.stop = Fr,
            h.resume = Fr,
            h.pause = Fr,
            h
        }
    }
    const c = At;
    a.call = (h, g, p) => _r(h, c, g, p);
    let f = !1;
    s === "post" ? a.scheduler = h => {
        St(h, c && c.suspense)
    }
    : s !== "sync" && (f = !0,
    a.scheduler = (h, g) => {
        g ? h() : Oh(h)
    }
    ),
    a.augmentJob = h => {
        e && (h.flags |= 4),
        f && (h.flags |= 2,
        c && (h.id = c.uid,
        h.i = c))
    }
    ;
    const d = cT(t, e, a);
    return Po && (u ? u.push(d) : l && d()),
    d
}
function QT(t, e, n) {
    const r = this.proxy
      , i = Qe(t) ? t.includes(".") ? yv(r, t) : () => r[t] : t.bind(r, r);
    let s;
    de(e) ? s = e : (s = e.handler,
    n = e);
    const o = Is(this)
      , a = Iu(i, s.bind(r), n);
    return o(),
    a
}
function yv(t, e) {
    const n = e.split(".");
    return () => {
        let r = t;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function Yc(t, e, n=Me) {
    const r = rr()
      , i = Un(e)
      , s = pi(e)
      , o = vv(t, i)
      , a = Ly( (l, u) => {
        let c, f = Me, d;
        return JT( () => {
            const h = t[i];
            xn(c, h) && (c = h,
            u())
        }
        ),
        {
            get() {
                return l(),
                n.get ? n.get(c) : c
            },
            set(h) {
                const g = n.set ? n.set(h) : h;
                if (!xn(g, c) && !(f !== Me && xn(h, f)))
                    return;
                const p = r.vnode.props;
                p && (e in p || i in p || s in p) && (`onUpdate:${e}`in p || `onUpdate:${i}`in p || `onUpdate:${s}`in p) || (c = h,
                u()),
                r.emit(`update:${e}`, g),
                xn(h, g) && xn(h, f) && !xn(g, d) && u(),
                f = h,
                d = g
            }
        }
    }
    );
    return a[Symbol.iterator] = () => {
        let l = 0;
        return {
            next() {
                return l < 2 ? {
                    value: l++ ? o || Me : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    a
}
const vv = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Un(e)}Modifiers`] || t[`${pi(e)}Modifiers`];
function ZT(t, e, ...n) {
    if (t.isUnmounted)
        return;
    const r = t.vnode.props || Me;
    let i = n;
    const s = e.startsWith("update:")
      , o = s && vv(r, e.slice(7));
    o && (o.trim && (i = n.map(c => Qe(c) ? c.trim() : c)),
    o.number && (i = n.map(Nc)));
    let a, l = r[a = ef(e)] || r[a = ef(Un(e))];
    !l && s && (l = r[a = ef(pi(e))]),
    l && _r(l, t, 6, i);
    const u = r[a + "Once"];
    if (u) {
        if (!t.emitted)
            t.emitted = {};
        else if (t.emitted[a])
            return;
        t.emitted[a] = !0,
        _r(u, t, 6, i)
    }
}
function bv(t, e, n=!1) {
    const r = e.emitsCache
      , i = r.get(t);
    if (i !== void 0)
        return i;
    const s = t.emits;
    let o = {}
      , a = !1;
    if (!de(t)) {
        const l = u => {
            const c = bv(u, e, !0);
            c && (a = !0,
            vt(o, c))
        }
        ;
        !n && e.mixins.length && e.mixins.forEach(l),
        t.extends && l(t.extends),
        t.mixins && t.mixins.forEach(l)
    }
    return !s && !a ? (Ve(t) && r.set(t, null),
    null) : (ie(s) ? s.forEach(l => o[l] = null) : vt(o, s),
    Ve(t) && r.set(t, o),
    o)
}
function Du(t, e) {
    return !t || !bl(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""),
    Ue(t, e[0].toLowerCase() + e.slice(1)) || Ue(t, pi(e)) || Ue(t, e))
}
function ff(t) {
    const {type: e, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: o, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: h, ctx: g, inheritAttrs: p} = t
      , v = Vc(t);
    let y, b;
    try {
        if (n.shapeFlag & 4) {
            const _ = i || r
              , w = _;
            y = In(u.call(w, _, c, f, h, d, g)),
            b = a
        } else {
            const _ = e;
            y = In(_.length > 1 ? _(f, {
                attrs: a,
                slots: o,
                emit: l
            }) : _(f, null)),
            b = e.props ? a : tx(a)
        }
    } catch (_) {
        Oa.length = 0,
        Wo(_, t, 1),
        y = pe(Pt)
    }
    let m = y;
    if (b && p !== !1) {
        const _ = Object.keys(b)
          , {shapeFlag: w} = m;
        _.length && w & 7 && (s && _.some(wh) && (b = nx(b, s)),
        m = yr(m, b, !1, !0))
    }
    return n.dirs && (m = yr(m, null, !1, !0),
    m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs),
    n.transition && Vi(m, n.transition),
    y = m,
    Vc(v),
    y
}
function ex(t, e=!0) {
    let n;
    for (let r = 0; r < t.length; r++) {
        const i = t[r];
        if (Ms(i)) {
            if (i.type !== Pt || i.children === "v-if") {
                if (n)
                    return;
                n = i
            }
        } else
            return
    }
    return n
}
const tx = t => {
    let e;
    for (const n in t)
        (n === "class" || n === "style" || bl(n)) && ((e || (e = {}))[n] = t[n]);
    return e
}
  , nx = (t, e) => {
    const n = {};
    for (const r in t)
        (!wh(r) || !(r.slice(9)in e)) && (n[r] = t[r]);
    return n
}
;
function rx(t, e, n) {
    const {props: r, children: i, component: s} = t
      , {props: o, children: a, patchFlag: l} = e
      , u = s.emitsOptions;
    if (e.dirs || e.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? gg(r, o, u) : !!o;
        if (l & 8) {
            const c = e.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (o[d] !== r[d] && !Du(u, d))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? gg(r, o, u) : !0 : !!o;
    return !1
}
function gg(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const s = r[i];
        if (e[s] !== t[s] && !Du(n, s))
            return !0
    }
    return !1
}
function Nu({vnode: t, parent: e}, n) {
    for (; e; ) {
        const r = e.subTree;
        if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el),
        r === t)
            (t = e.vnode).el = n,
            e = e.parent;
        else
            break
    }
}
const Kc = t => t.__isSuspense;
let cd = 0;
const ix = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, r, i, s, o, a, l, u) {
        if (t == null)
            sx(e, n, r, i, s, o, a, l, u);
        else {
            if (s && s.deps > 0 && !t.suspense.isInFallback) {
                e.suspense = t.suspense,
                e.suspense.vnode = e,
                e.el = t.el;
                return
            }
            ox(t, e, n, r, i, o, a, l, u)
        }
    },
    hydrate: ax,
    normalize: lx
}
  , Bh = ix;
function il(t, e) {
    const n = t.props && t.props[e];
    de(n) && n()
}
function sx(t, e, n, r, i, s, o, a, l) {
    const {p: u, o: {createElement: c}} = l
      , f = c("div")
      , d = t.suspense = wv(t, i, r, e, f, n, s, o, a, l);
    u(null, d.pendingBranch = t.ssContent, f, null, r, d, s, o),
    d.deps > 0 ? (il(t, "onPending"),
    il(t, "onFallback"),
    u(null, t.ssFallback, e, n, r, null, s, o),
    mo(d, t.ssFallback)) : d.resolve(!1, !0)
}
function ox(t, e, n, r, i, s, o, a, {p: l, um: u, o: {createElement: c}}) {
    const f = e.suspense = t.suspense;
    f.vnode = e,
    e.el = t.el;
    const d = e.ssContent
      , h = e.ssFallback
      , {activeBranch: g, pendingBranch: p, isInFallback: v, isHydrating: y} = f;
    if (p)
        f.pendingBranch = d,
        ur(d, p) ? (l(p, d, f.hiddenContainer, null, i, f, s, o, a),
        f.deps <= 0 ? f.resolve() : v && (y || (l(g, h, n, r, i, null, s, o, a),
        mo(f, h)))) : (f.pendingId = cd++,
        y ? (f.isHydrating = !1,
        f.activeBranch = p) : u(p, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        v ? (l(null, d, f.hiddenContainer, null, i, f, s, o, a),
        f.deps <= 0 ? f.resolve() : (l(g, h, n, r, i, null, s, o, a),
        mo(f, h))) : g && ur(d, g) ? (l(g, d, n, r, i, f, s, o, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, s, o, a),
        f.deps <= 0 && f.resolve()));
    else if (g && ur(d, g))
        l(g, d, n, r, i, f, s, o, a),
        mo(f, d);
    else if (il(e, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = cd++,
    l(null, d, f.hiddenContainer, null, i, f, s, o, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: b, pendingId: m} = f;
        b > 0 ? setTimeout( () => {
            f.pendingId === m && f.fallback(h)
        }
        , b) : b === 0 && f.fallback(h)
    }
}
function wv(t, e, n, r, i, s, o, a, l, u, c=!1) {
    const {p: f, m: d, um: h, n: g, o: {parentNode: p, remove: v}} = u;
    let y;
    const b = cx(t);
    b && e && e.pendingBranch && (y = e.pendingId,
    e.deps++);
    const m = t.props ? uy(t.props.timeout) : void 0
      , _ = s
      , w = {
        vnode: t,
        parent: e,
        parentComponent: n,
        namespace: o,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: cd++,
        timeout: typeof m == "number" ? m : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !c,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(E=!1, S=!1) {
            const {vnode: L, activeBranch: A, pendingBranch: x, pendingId: M, effects: R, parentComponent: P, container: O} = w;
            let I = !1;
            w.isHydrating ? w.isHydrating = !1 : E || (I = A && x.transition && x.transition.mode === "out-in",
            I && (A.transition.afterLeave = () => {
                M === w.pendingId && (d(x, O, s === _ ? g(A) : s, 0),
                rd(R))
            }
            ),
            A && (p(A.el) === O && (s = g(A)),
            h(A, P, w, !0)),
            I || d(x, O, s, 0)),
            mo(w, x),
            w.pendingBranch = null,
            w.isInFallback = !1;
            let N = w.parent
              , F = !1;
            for (; N; ) {
                if (N.pendingBranch) {
                    N.effects.push(...R),
                    F = !0;
                    break
                }
                N = N.parent
            }
            !F && !I && rd(R),
            w.effects = [],
            b && e && e.pendingBranch && y === e.pendingId && (e.deps--,
            e.deps === 0 && !S && e.resolve()),
            il(L, "onResolve")
        },
        fallback(E) {
            if (!w.pendingBranch)
                return;
            const {vnode: S, activeBranch: L, parentComponent: A, container: x, namespace: M} = w;
            il(S, "onFallback");
            const R = g(L)
              , P = () => {
                w.isInFallback && (f(null, E, x, R, A, null, M, a, l),
                mo(w, E))
            }
              , O = E.transition && E.transition.mode === "out-in";
            O && (L.transition.afterLeave = P),
            w.isInFallback = !0,
            h(L, A, null, !0),
            O || P()
        },
        move(E, S, L) {
            w.activeBranch && d(w.activeBranch, E, S, L),
            w.container = E
        },
        next() {
            return w.activeBranch && g(w.activeBranch)
        },
        registerDep(E, S, L) {
            const A = !!w.pendingBranch;
            A && w.deps++;
            const x = E.vnode.el;
            E.asyncDep.catch(M => {
                Wo(M, E, 0)
            }
            ).then(M => {
                if (E.isUnmounted || w.isUnmounted || w.pendingId !== E.suspenseId)
                    return;
                E.asyncResolved = !0;
                const {vnode: R} = E;
                dd(E, M),
                x && (R.el = x);
                const P = !x && E.subTree.el;
                S(E, R, p(x || E.subTree.el), x ? null : g(E.subTree), w, o, L),
                P && v(P),
                Nu(E, R.el),
                A && --w.deps === 0 && w.resolve()
            }
            )
        },
        unmount(E, S) {
            w.isUnmounted = !0,
            w.activeBranch && h(w.activeBranch, n, E, S),
            w.pendingBranch && h(w.pendingBranch, n, E, S)
        }
    };
    return w
}
function ax(t, e, n, r, i, s, o, a, l) {
    const u = e.suspense = wv(e, r, n, t.parentNode, document.createElement("div"), null, i, s, o, a, !0)
      , c = l(t, u.pendingBranch = e.ssContent, n, u, s, o);
    return u.deps === 0 && u.resolve(!1, !0),
    c
}
function lx(t) {
    const {shapeFlag: e, children: n} = t
      , r = e & 32;
    t.ssContent = mg(r ? n.default : n),
    t.ssFallback = r ? mg(n.fallback) : pe(Pt)
}
function mg(t) {
    let e;
    if (de(t)) {
        const n = Ro && t._c;
        n && (t._d = !1,
        ge()),
        t = t(),
        n && (t._d = !0,
        e = En,
        xv())
    }
    return ie(t) && (t = ex(t)),
    t = In(t),
    e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n => n !== t)),
    t
}
function Tv(t, e) {
    e && e.pendingBranch ? ie(t) ? e.effects.push(...t) : e.effects.push(t) : rd(t)
}
function mo(t, e) {
    t.activeBranch = e;
    const {vnode: n, parentComponent: r} = t;
    let i = e.el;
    for (; !i && e.component; )
        e = e.component.subTree,
        i = e.el;
    n.el = i,
    r && r.subTree === n && (r.vnode.el = i,
    Nu(r, i))
}
function cx(t) {
    const e = t.props && t.props.suspensible;
    return e != null && e !== !1
}
const Rt = Symbol.for("v-fgt")
  , xs = Symbol.for("v-txt")
  , Pt = Symbol.for("v-cmt")
  , Aa = Symbol.for("v-stc")
  , Oa = [];
let En = null;
function ge(t=!1) {
    Oa.push(En = t ? null : [])
}
function xv() {
    Oa.pop(),
    En = Oa[Oa.length - 1] || null
}
let Ro = 1;
function _g(t, e=!1) {
    Ro += t,
    t < 0 && En && e && (En.hasOnce = !0)
}
function Ev(t) {
    return t.dynamicChildren = Ro > 0 ? En || uo : null,
    xv(),
    Ro > 0 && En && En.push(t),
    t
}
function Ut(t, e, n, r, i, s) {
    return Ev(pt(t, e, n, r, i, s, !0))
}
function Fe(t, e, n, r, i) {
    return Ev(pe(t, e, n, r, i, !0))
}
function Ms(t) {
    return t ? t.__v_isVNode === !0 : !1
}
function ur(t, e) {
    return t.type === e.type && t.key === e.key
}
const Sv = ({key: t}) => t ?? null
  , vc = ({ref: t, ref_key: e, ref_for: n}) => (typeof t == "number" && (t = "" + t),
t != null ? Qe(t) || Je(t) || de(t) ? {
    i: Ot,
    r: t,
    k: e,
    f: !!n
} : t : null);
function pt(t, e=null, n=null, r=0, i=null, s=t === Rt ? 0 : 1, o=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && Sv(e),
        ref: e && vc(e),
        scopeId: Fy,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Ot
    };
    return a ? (Hh(l, n),
    s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Qe(n) ? 8 : 16),
    Ro > 0 && !o && En && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && En.push(l),
    l
}
const pe = ux;
function ux(t, e=null, n=null, r=0, i=null, s=!1) {
    if ((!t || t === ev) && (t = Pt),
    Ms(t)) {
        const a = yr(t, e, !0);
        return n && Hh(a, n),
        Ro > 0 && !s && En && (a.shapeFlag & 6 ? En[En.indexOf(t)] = a : En.push(a)),
        a.patchFlag = -2,
        a
    }
    if (_x(t) && (t = t.__vccOpts),
    e) {
        e = Cv(e);
        let {class: a, style: l} = e;
        a && !Qe(a) && (e.class = Gi(a)),
        Ve(l) && (Ah(l) && !ie(l) && (l = vt({}, l)),
        e.style = Pu(l))
    }
    const o = Qe(t) ? 1 : Kc(t) ? 128 : By(t) ? 64 : Ve(t) ? 4 : de(t) ? 2 : 0;
    return pt(t, e, n, r, i, o, s, !0)
}
function Cv(t) {
    return t ? Ah(t) || av(t) ? vt({}, t) : t : null
}
function yr(t, e, n=!1, r=!1) {
    const {props: i, ref: s, patchFlag: o, children: a, transition: l} = t
      , u = e ? El(i || {}, e) : i
      , c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: u,
        key: u && Sv(u),
        ref: e && e.ref ? n && s ? ie(s) ? s.concat(vc(e)) : [s, vc(e)] : vc(e) : s,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetStart: t.targetStart,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== Rt ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: l,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && yr(t.ssContent),
        ssFallback: t.ssFallback && yr(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce
    };
    return l && r && Vi(c, l.clone(c)),
    c
}
function Yo(t=" ", e=0) {
    return pe(xs, null, t, e)
}
function kv(t, e) {
    const n = pe(Aa, null, t);
    return n.staticCount = e,
    n
}
function Ni(t="", e=!1) {
    return e ? (ge(),
    Fe(Pt, null, t)) : pe(Pt, null, t)
}
function In(t) {
    return t == null || typeof t == "boolean" ? pe(Pt) : ie(t) ? pe(Rt, null, t.slice()) : Ms(t) ? Si(t) : pe(xs, null, String(t))
}
function Si(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : yr(t)
}
function Hh(t, e) {
    let n = 0;
    const {shapeFlag: r} = t;
    if (e == null)
        e = null;
    else if (ie(e))
        n = 16;
    else if (typeof e == "object")
        if (r & 65) {
            const i = e.default;
            i && (i._c && (i._d = !1),
            Hh(t, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = e._;
            !i && !av(e) ? e._ctx = Ot : i === 3 && Ot && (Ot.slots._ === 1 ? e._ = 1 : (e._ = 2,
            t.patchFlag |= 1024))
        }
    else
        de(e) ? (e = {
            default: e,
            _ctx: Ot
        },
        n = 32) : (e = String(e),
        r & 64 ? (n = 16,
        e = [Yo(e)]) : n = 8);
    t.children = e,
    t.shapeFlag |= n
}
function El(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        for (const i in r)
            if (i === "class")
                e.class !== r.class && (e.class = Gi([e.class, r.class]));
            else if (i === "style")
                e.style = Pu([e.style, r.style]);
            else if (bl(i)) {
                const s = e[i]
                  , o = r[i];
                o && s !== o && !(ie(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o)
            } else
                i !== "" && (e[i] = r[i])
    }
    return e
}
function wn(t, e, n, r=null) {
    _r(t, e, 7, [n, r])
}
const fx = iv();
let dx = 0;
function hx(t, e, n) {
    const r = t.type
      , i = (e ? e.appContext : t.appContext) || fx
      , s = {
        uid: dx++,
        vnode: t,
        type: r,
        parent: e,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new py(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: e ? e.provides : Object.create(i.provides),
        ids: e ? e.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: cv(r, i),
        emitsOptions: bv(r, i),
        emit: null,
        emitted: null,
        propsDefaults: Me,
        inheritAttrs: r.inheritAttrs,
        ctx: Me,
        data: Me,
        props: Me,
        attrs: Me,
        slots: Me,
        refs: Me,
        setupState: Me,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return s.ctx = {
        _: s
    },
    s.root = e ? e.root : s,
    s.emit = ZT.bind(null, s),
    t.ce && t.ce(s),
    s
}
let At = null;
const rr = () => At || Ot;
let Gc, ud;
{
    const t = Ru()
      , e = (n, r) => {
        let i;
        return (i = t[n]) || (i = t[n] = []),
        i.push(r),
        s => {
            i.length > 1 ? i.forEach(o => o(s)) : i[0](s)
        }
    }
    ;
    Gc = e("__VUE_INSTANCE_SETTERS__", n => At = n),
    ud = e("__VUE_SSR_SETTERS__", n => Po = n)
}
const Is = t => {
    const e = At;
    return Gc(t),
    t.scope.on(),
    () => {
        t.scope.off(),
        Gc(e)
    }
}
  , fd = () => {
    At && At.scope.off(),
    Gc(null)
}
;
function Rv(t) {
    return t.vnode.shapeFlag & 4
}
let Po = !1;
function px(t, e=!1, n=!1) {
    e && ud(e);
    const {props: r, children: i} = t.vnode
      , s = Rv(t);
    BT(t, r, s, e),
    zT(t, i, n);
    const o = s ? gx(t, e) : void 0;
    return e && ud(!1),
    o
}
function gx(t, e) {
    const n = t.type;
    t.accessCache = Object.create(null),
    t.proxy = new Proxy(t.ctx,OT);
    const {setup: r} = n;
    if (r) {
        Xi();
        const i = t.setupContext = r.length > 1 ? Av(t) : null
          , s = Is(t)
          , o = Tl(r, t, 0, [t.props, i])
          , a = Su(o);
        if (Ji(),
        s(),
        (a || t.sp) && !Di(t) && Lh(t),
        a) {
            if (o.then(fd, fd),
            e)
                return o.then(l => {
                    dd(t, l)
                }
                ).catch(l => {
                    Wo(l, t, 0)
                }
                );
            t.asyncDep = o
        } else
            dd(t, o)
    } else
        Pv(t)
}
function dd(t, e, n) {
    de(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ve(e) && (t.setupState = $y(e)),
    Pv(t)
}
function Pv(t, e, n) {
    const r = t.type;
    t.render || (t.render = r.render || Fr);
    {
        const i = Is(t);
        Xi();
        try {
            LT(t)
        } finally {
            Ji(),
            i()
        }
    }
}
const mx = {
    get(t, e) {
        return Qt(t, "get", ""),
        t[e]
    }
};
function Av(t) {
    const e = n => {
        t.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(t.attrs,mx),
        slots: t.slots,
        emit: t.emit,
        expose: e
    }
}
function Fu(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy($y(Z1(t.exposed)),{
        get(e, n) {
            if (n in e)
                return e[n];
            if (n in Pa)
                return Pa[n](t)
        },
        has(e, n) {
            return n in e || n in Pa
        }
    })) : t.proxy
}
function hd(t, e=!0) {
    return de(t) ? t.displayName || t.name : t.name || e && t.__name
}
function _x(t) {
    return de(t) && "__vccOpts"in t
}
const Ie = (t, e) => aT(t, e, Po);
function tt(t, e, n) {
    const r = arguments.length;
    return r === 2 ? Ve(e) && !ie(e) ? Ms(e) ? pe(t, null, [e]) : pe(t, e) : pe(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ms(n) && (n = [n]),
    pe(t, e, n))
}
const yx = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pd;
const yg = typeof window < "u" && window.trustedTypes;
if (yg)
    try {
        pd = yg.createPolicy("vue", {
            createHTML: t => t
        })
    } catch {}
const Ov = pd ? t => pd.createHTML(t) : t => t
  , vx = "http://www.w3.org/2000/svg"
  , bx = "http://www.w3.org/1998/Math/MathML"
  , Qr = typeof document < "u" ? document : null
  , vg = Qr && Qr.createElement("template")
  , wx = {
    insert: (t, e, n) => {
        e.insertBefore(t, n || null)
    }
    ,
    remove: t => {
        const e = t.parentNode;
        e && e.removeChild(t)
    }
    ,
    createElement: (t, e, n, r) => {
        const i = e === "svg" ? Qr.createElementNS(vx, t) : e === "mathml" ? Qr.createElementNS(bx, t) : n ? Qr.createElement(t, {
            is: n
        }) : Qr.createElement(t);
        return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: t => Qr.createTextNode(t),
    createComment: t => Qr.createComment(t),
    setText: (t, e) => {
        t.nodeValue = e
    }
    ,
    setElementText: (t, e) => {
        t.textContent = e
    }
    ,
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => Qr.querySelector(t),
    setScopeId(t, e) {
        t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, r, i, s) {
        const o = n ? n.previousSibling : e.lastChild;
        if (i && (i === s || i.nextSibling))
            for (; e.insertBefore(i.cloneNode(!0), n),
            !(i === s || !(i = i.nextSibling)); )
                ;
        else {
            vg.innerHTML = Ov(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
            const a = vg.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            e.insertBefore(a, n)
        }
        return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
}
  , yi = "transition"
  , na = "animation"
  , Ao = Symbol("_vtc")
  , $v = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Lv = vt({}, Wy, $v)
  , Tx = t => (t.displayName = "Transition",
t.props = Lv,
t)
  , ju = Tx( (t, {slots: e}) => tt(gT, Mv(t), e))
  , rs = (t, e=[]) => {
    ie(t) ? t.forEach(n => n(...e)) : t && t(...e)
}
  , bg = t => t ? ie(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;
function Mv(t) {
    const e = {};
    for (const R in t)
        R in $v || (e[R] = t[R]);
    if (t.css === !1)
        return e;
    const {name: n="v", type: r, duration: i, enterFromClass: s=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=s, appearActiveClass: u=o, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = t
      , g = xx(i)
      , p = g && g[0]
      , v = g && g[1]
      , {onBeforeEnter: y, onEnter: b, onEnterCancelled: m, onLeave: _, onLeaveCancelled: w, onBeforeAppear: E=y, onAppear: S=b, onAppearCancelled: L=m} = e
      , A = (R, P, O, I) => {
        R._enterCancelled = I,
        wi(R, P ? c : a),
        wi(R, P ? u : o),
        O && O()
    }
      , x = (R, P) => {
        R._isLeaving = !1,
        wi(R, f),
        wi(R, h),
        wi(R, d),
        P && P()
    }
      , M = R => (P, O) => {
        const I = R ? S : b
          , N = () => A(P, R, O);
        rs(I, [P, N]),
        wg( () => {
            wi(P, R ? l : s),
            Rr(P, R ? c : a),
            bg(I) || Tg(P, r, p, N)
        }
        )
    }
    ;
    return vt(e, {
        onBeforeEnter(R) {
            rs(y, [R]),
            Rr(R, s),
            Rr(R, o)
        },
        onBeforeAppear(R) {
            rs(E, [R]),
            Rr(R, l),
            Rr(R, u)
        },
        onEnter: M(!1),
        onAppear: M(!0),
        onLeave(R, P) {
            R._isLeaving = !0;
            const O = () => x(R, P);
            Rr(R, f),
            R._enterCancelled ? (Rr(R, d),
            gd()) : (gd(),
            Rr(R, d)),
            wg( () => {
                R._isLeaving && (wi(R, f),
                Rr(R, h),
                bg(_) || Tg(R, r, v, O))
            }
            ),
            rs(_, [R, O])
        },
        onEnterCancelled(R) {
            A(R, !1, void 0, !0),
            rs(m, [R])
        },
        onAppearCancelled(R) {
            A(R, !0, void 0, !0),
            rs(L, [R])
        },
        onLeaveCancelled(R) {
            x(R),
            rs(w, [R])
        }
    })
}
function xx(t) {
    if (t == null)
        return null;
    if (Ve(t))
        return [df(t.enter), df(t.leave)];
    {
        const e = df(t);
        return [e, e]
    }
}
function df(t) {
    return uy(t)
}
function Rr(t, e) {
    e.split(/\s+/).forEach(n => n && t.classList.add(n)),
    (t[Ao] || (t[Ao] = new Set)).add(e)
}
function wi(t, e) {
    e.split(/\s+/).forEach(r => r && t.classList.remove(r));
    const n = t[Ao];
    n && (n.delete(e),
    n.size || (t[Ao] = void 0))
}
function wg(t) {
    requestAnimationFrame( () => {
        requestAnimationFrame(t)
    }
    )
}
let Ex = 0;
function Tg(t, e, n, r) {
    const i = t._endId = ++Ex
      , s = () => {
        i === t._endId && r()
    }
    ;
    if (n != null)
        return setTimeout(s, n);
    const {type: o, timeout: a, propCount: l} = Iv(t, e);
    if (!o)
        return r();
    const u = o + "end";
    let c = 0;
    const f = () => {
        t.removeEventListener(u, d),
        s()
    }
      , d = h => {
        h.target === t && ++c >= l && f()
    }
    ;
    setTimeout( () => {
        c < l && f()
    }
    , a + 1),
    t.addEventListener(u, d)
}
function Iv(t, e) {
    const n = window.getComputedStyle(t)
      , r = g => (n[g] || "").split(", ")
      , i = r(`${yi}Delay`)
      , s = r(`${yi}Duration`)
      , o = xg(i, s)
      , a = r(`${na}Delay`)
      , l = r(`${na}Duration`)
      , u = xg(a, l);
    let c = null
      , f = 0
      , d = 0;
    e === yi ? o > 0 && (c = yi,
    f = o,
    d = s.length) : e === na ? u > 0 && (c = na,
    f = u,
    d = l.length) : (f = Math.max(o, u),
    c = f > 0 ? o > u ? yi : na : null,
    d = c ? c === yi ? s.length : l.length : 0);
    const h = c === yi && /\b(transform|all)(,|$)/.test(r(`${yi}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}
function xg(t, e) {
    for (; t.length < e.length; )
        t = t.concat(t);
    return Math.max(...e.map( (n, r) => Eg(n) + Eg(t[r])))
}
function Eg(t) {
    return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3
}
function gd() {
    return document.body.offsetHeight
}
function Sx(t, e, n) {
    const r = t[Ao];
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
const Xc = Symbol("_vod")
  , Dv = Symbol("_vsh")
  , vI = {
    beforeMount(t, {value: e}, {transition: n}) {
        t[Xc] = t.style.display === "none" ? "" : t.style.display,
        n && e ? n.beforeEnter(t) : ra(t, e)
    },
    mounted(t, {value: e}, {transition: n}) {
        n && e && n.enter(t)
    },
    updated(t, {value: e, oldValue: n}, {transition: r}) {
        !e != !n && (r ? e ? (r.beforeEnter(t),
        ra(t, !0),
        r.enter(t)) : r.leave(t, () => {
            ra(t, !1)
        }
        ) : ra(t, e))
    },
    beforeUnmount(t, {value: e}) {
        ra(t, e)
    }
};
function ra(t, e) {
    t.style.display = e ? t[Xc] : "none",
    t[Dv] = !e
}
const Cx = Symbol("")
  , kx = /(^|;)\s*display\s*:/;
function Rx(t, e, n) {
    const r = t.style
      , i = Qe(n);
    let s = !1;
    if (n && !i) {
        if (e)
            if (Qe(e))
                for (const o of e.split(";")) {
                    const a = o.slice(0, o.indexOf(":")).trim();
                    n[a] == null && bc(r, a, "")
                }
            else
                for (const o in e)
                    n[o] == null && bc(r, o, "");
        for (const o in n)
            o === "display" && (s = !0),
            bc(r, o, n[o])
    } else if (i) {
        if (e !== n) {
            const o = r[Cx];
            o && (n += ";" + o),
            r.cssText = n,
            s = kx.test(n)
        }
    } else
        e && t.removeAttribute("style");
    Xc in t && (t[Xc] = s ? r.display : "",
    t[Dv] && (r.display = "none"))
}
const Sg = /\s*!important$/;
function bc(t, e, n) {
    if (ie(n))
        n.forEach(r => bc(t, e, r));
    else if (n == null && (n = ""),
    e.startsWith("--"))
        t.setProperty(e, n);
    else {
        const r = Px(t, e);
        Sg.test(n) ? t.setProperty(pi(r), n.replace(Sg, ""), "important") : t[r] = n
    }
}
const Cg = ["Webkit", "Moz", "ms"]
  , hf = {};
function Px(t, e) {
    const n = hf[e];
    if (n)
        return n;
    let r = Un(e);
    if (r !== "filter" && r in t)
        return hf[e] = r;
    r = ku(r);
    for (let i = 0; i < Cg.length; i++) {
        const s = Cg[i] + r;
        if (s in t)
            return hf[e] = s
    }
    return e
}
const kg = "http://www.w3.org/1999/xlink";
function Rg(t, e, n, r, i, s=O1(e)) {
    r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(kg, e.slice(6, e.length)) : t.setAttributeNS(kg, e, n) : n == null || s && !fy(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : gr(n) ? String(n) : n)
}
function Pg(t, e, n, r, i) {
    if (e === "innerHTML" || e === "textContent") {
        n != null && (t[e] = e === "innerHTML" ? Ov(n) : n);
        return
    }
    const s = t.tagName;
    if (e === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const a = s === "OPTION" ? t.getAttribute("value") || "" : t.value
          , l = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value"in t)) && (t.value = l),
        n == null && t.removeAttribute(e),
        t._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const a = typeof t[e];
        a === "boolean" ? n = fy(n) : n == null && a === "string" ? (n = "",
        o = !0) : a === "number" && (n = 0,
        o = !0)
    }
    try {
        t[e] = n
    } catch {}
    o && t.removeAttribute(i || e)
}
function ri(t, e, n, r) {
    t.addEventListener(e, n, r)
}
function Ax(t, e, n, r) {
    t.removeEventListener(e, n, r)
}
const Ag = Symbol("_vei");
function Ox(t, e, n, r, i=null) {
    const s = t[Ag] || (t[Ag] = {})
      , o = s[e];
    if (r && o)
        o.value = r;
    else {
        const [a,l] = $x(e);
        if (r) {
            const u = s[e] = Ix(r, i);
            ri(t, a, u, l)
        } else
            o && (Ax(t, a, o, l),
            s[e] = void 0)
    }
}
const Og = /(?:Once|Passive|Capture)$/;
function $x(t) {
    let e;
    if (Og.test(t)) {
        e = {};
        let r;
        for (; r = t.match(Og); )
            t = t.slice(0, t.length - r[0].length),
            e[r[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : pi(t.slice(2)), e]
}
let pf = 0;
const Lx = Promise.resolve()
  , Mx = () => pf || (Lx.then( () => pf = 0),
pf = Date.now());
function Ix(t, e) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        _r(Dx(r, n.value), e, 5, [r])
    }
    ;
    return n.value = t,
    n.attached = Mx(),
    n
}
function Dx(t, e) {
    if (ie(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t),
            t._stopped = !0
        }
        ,
        e.map(r => i => !i._stopped && r && r(i))
    } else
        return e
}
const $g = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123
  , Nx = (t, e, n, r, i, s) => {
    const o = i === "svg";
    e === "class" ? Sx(t, r, o) : e === "style" ? Rx(t, n, r) : bl(e) ? wh(e) || Ox(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1),
    !0) : e[0] === "^" ? (e = e.slice(1),
    !1) : Fx(t, e, r, o)) ? (Pg(t, e, r),
    !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Rg(t, e, r, o, s, e !== "value")) : t._isVueCE && (/[A-Z]/.test(e) || !Qe(r)) ? Pg(t, Un(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r),
    Rg(t, e, r, o))
}
;
function Fx(t, e, n, r) {
    if (r)
        return !!(e === "innerHTML" || e === "textContent" || e in t && $g(e) && de(n));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
        return !1;
    if (e === "width" || e === "height") {
        const i = t.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return $g(e) && Qe(n) ? !1 : e in t
}
const Nv = new WeakMap
  , Fv = new WeakMap
  , Jc = Symbol("_moveCb")
  , Lg = Symbol("_enterCb")
  , jx = t => (delete t.props.mode,
t)
  , Bx = jx({
    name: "TransitionGroup",
    props: vt({}, Lv, {
        tag: String,
        moveClass: String
    }),
    setup(t, {slots: e}) {
        const n = rr()
          , r = zy();
        let i, s;
        return Mh( () => {
            if (!i.length)
                return;
            const o = t.moveClass || `${t.name || "v"}-move`;
            if (!zx(i[0].el, n.vnode.el, o))
                return;
            i.forEach(Hx),
            i.forEach(Ux);
            const a = i.filter(Vx);
            gd(),
            a.forEach(l => {
                const u = l.el
                  , c = u.style;
                Rr(u, o),
                c.transform = c.webkitTransform = c.transitionDuration = "";
                const f = u[Jc] = d => {
                    d && d.target !== u || (!d || /transform$/.test(d.propertyName)) && (u.removeEventListener("transitionend", f),
                    u[Jc] = null,
                    wi(u, o))
                }
                ;
                u.addEventListener("transitionend", f)
            }
            )
        }
        ),
        () => {
            const o = Oe(t)
              , a = Mv(o);
            let l = o.tag || Rt;
            if (i = [],
            s)
                for (let u = 0; u < s.length; u++) {
                    const c = s[u];
                    c.el && c.el instanceof Element && (i.push(c),
                    Vi(c, tl(c, a, r, n)),
                    Nv.set(c, c.el.getBoundingClientRect()))
                }
            s = e.default ? $h(e.default()) : [];
            for (let u = 0; u < s.length; u++) {
                const c = s[u];
                c.key != null && Vi(c, tl(c, a, r, n))
            }
            return pe(l, null, s)
        }
    }
})
  , bI = Bx;
function Hx(t) {
    const e = t.el;
    e[Jc] && e[Jc](),
    e[Lg] && e[Lg]()
}
function Ux(t) {
    Fv.set(t, t.el.getBoundingClientRect())
}
function Vx(t) {
    const e = Nv.get(t)
      , n = Fv.get(t)
      , r = e.left - n.left
      , i = e.top - n.top;
    if (r || i) {
        const s = t.el.style;
        return s.transform = s.webkitTransform = `translate(${r}px,${i}px)`,
        s.transitionDuration = "0s",
        t
    }
}
function zx(t, e, n) {
    const r = t.cloneNode()
      , i = t[Ao];
    i && i.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const s = e.nodeType === 1 ? e : e.parentNode;
    s.appendChild(r);
    const {hasTransform: o} = Iv(r);
    return s.removeChild(r),
    o
}
const zi = t => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return ie(e) ? n => po(e, n) : e
}
;
function Wx(t) {
    t.target.composing = !0
}
function Mg(t) {
    const e = t.target;
    e.composing && (e.composing = !1,
    e.dispatchEvent(new Event("input")))
}
const er = Symbol("_assign")
  , Ig = {
    created(t, {modifiers: {lazy: e, trim: n, number: r}}, i) {
        t[er] = zi(i);
        const s = r || i.props && i.props.type === "number";
        ri(t, e ? "change" : "input", o => {
            if (o.target.composing)
                return;
            let a = t.value;
            n && (a = a.trim()),
            s && (a = Nc(a)),
            t[er](a)
        }
        ),
        n && ri(t, "change", () => {
            t.value = t.value.trim()
        }
        ),
        e || (ri(t, "compositionstart", Wx),
        ri(t, "compositionend", Mg),
        ri(t, "change", Mg))
    },
    mounted(t, {value: e}) {
        t.value = e ?? ""
    },
    beforeUpdate(t, {value: e, oldValue: n, modifiers: {lazy: r, trim: i, number: s}}, o) {
        if (t[er] = zi(o),
        t.composing)
            return;
        const a = (s || t.type === "number") && !/^0\d/.test(t.value) ? Nc(t.value) : t.value
          , l = e ?? "";
        a !== l && (document.activeElement === t && t.type !== "range" && (r && e === n || i && t.value.trim() === l) || (t.value = l))
    }
}
  , qx = {
    deep: !0,
    created(t, e, n) {
        t[er] = zi(n),
        ri(t, "change", () => {
            const r = t._modelValue
              , i = Oo(t)
              , s = t.checked
              , o = t[er];
            if (ie(r)) {
                const a = Eh(r, i)
                  , l = a !== -1;
                if (s && !l)
                    o(r.concat(i));
                else if (!s && l) {
                    const u = [...r];
                    u.splice(a, 1),
                    o(u)
                }
            } else if (Vo(r)) {
                const a = new Set(r);
                s ? a.add(i) : a.delete(i),
                o(a)
            } else
                o(jv(t, s))
        }
        )
    },
    mounted: Dg,
    beforeUpdate(t, e, n) {
        t[er] = zi(n),
        Dg(t, e, n)
    }
};
function Dg(t, {value: e, oldValue: n}, r) {
    t._modelValue = e;
    let i;
    if (ie(e))
        i = Eh(e, r.props.value) > -1;
    else if (Vo(e))
        i = e.has(r.props.value);
    else {
        if (e === n)
            return;
        i = Ls(e, jv(t, !0))
    }
    t.checked !== i && (t.checked = i)
}
const Yx = {
    created(t, {value: e}, n) {
        t.checked = Ls(e, n.props.value),
        t[er] = zi(n),
        ri(t, "change", () => {
            t[er](Oo(t))
        }
        )
    },
    beforeUpdate(t, {value: e, oldValue: n}, r) {
        t[er] = zi(r),
        e !== n && (t.checked = Ls(e, r.props.value))
    }
}
  , Kx = {
    deep: !0,
    created(t, {value: e, modifiers: {number: n}}, r) {
        const i = Vo(e);
        ri(t, "change", () => {
            const s = Array.prototype.filter.call(t.options, o => o.selected).map(o => n ? Nc(Oo(o)) : Oo(o));
            t[er](t.multiple ? i ? new Set(s) : s : s[0]),
            t._assigning = !0,
            nr( () => {
                t._assigning = !1
            }
            )
        }
        ),
        t[er] = zi(r)
    },
    mounted(t, {value: e}) {
        Ng(t, e)
    },
    beforeUpdate(t, e, n) {
        t[er] = zi(n)
    },
    updated(t, {value: e}) {
        t._assigning || Ng(t, e)
    }
};
function Ng(t, e) {
    const n = t.multiple
      , r = ie(e);
    if (!(n && !r && !Vo(e))) {
        for (let i = 0, s = t.options.length; i < s; i++) {
            const o = t.options[i]
              , a = Oo(o);
            if (n)
                if (r) {
                    const l = typeof a;
                    l === "string" || l === "number" ? o.selected = e.some(u => String(u) === String(a)) : o.selected = Eh(e, a) > -1
                } else
                    o.selected = e.has(a);
            else if (Ls(Oo(o), e)) {
                t.selectedIndex !== i && (t.selectedIndex = i);
                return
            }
        }
        !n && t.selectedIndex !== -1 && (t.selectedIndex = -1)
    }
}
function Oo(t) {
    return "_value"in t ? t._value : t.value
}
function jv(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e
}
const Gx = {
    created(t, e, n) {
        jl(t, e, n, null, "created")
    },
    mounted(t, e, n) {
        jl(t, e, n, null, "mounted")
    },
    beforeUpdate(t, e, n, r) {
        jl(t, e, n, r, "beforeUpdate")
    },
    updated(t, e, n, r) {
        jl(t, e, n, r, "updated")
    }
};
function Xx(t, e) {
    switch (t) {
    case "SELECT":
        return Kx;
    case "TEXTAREA":
        return Ig;
    default:
        switch (e) {
        case "checkbox":
            return qx;
        case "radio":
            return Yx;
        default:
            return Ig
        }
    }
}
function jl(t, e, n, r, i) {
    const o = Xx(t.tagName, n.props && n.props.type)[i];
    o && o(t, e, n, r)
}
const Jx = ["ctrl", "shift", "alt", "meta"]
  , Qx = {
    stop: t => t.stopPropagation(),
    prevent: t => t.preventDefault(),
    self: t => t.target !== t.currentTarget,
    ctrl: t => !t.ctrlKey,
    shift: t => !t.shiftKey,
    alt: t => !t.altKey,
    meta: t => !t.metaKey,
    left: t => "button"in t && t.button !== 0,
    middle: t => "button"in t && t.button !== 1,
    right: t => "button"in t && t.button !== 2,
    exact: (t, e) => Jx.some(n => t[`${n}Key`] && !e.includes(n))
}
  , Zx = (t, e) => {
    const n = t._withMods || (t._withMods = {})
      , r = e.join(".");
    return n[r] || (n[r] = (i, ...s) => {
        for (let o = 0; o < e.length; o++) {
            const a = Qx[e[o]];
            if (a && a(i, e))
                return
        }
        return t(i, ...s)
    }
    )
}
  , eE = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , tE = (t, e) => {
    const n = t._withKeys || (t._withKeys = {})
      , r = e.join(".");
    return n[r] || (n[r] = i => {
        if (!("key"in i))
            return;
        const s = pi(i.key);
        if (e.some(o => o === s || eE[o] === s))
            return t(i)
    }
    )
}
  , Bv = vt({
    patchProp: Nx
}, wx);
let $a, Fg = !1;
function nE() {
    return $a || ($a = qT(Bv))
}
function rE() {
    return $a = Fg ? $a : YT(Bv),
    Fg = !0,
    $a
}
const iE = (...t) => {
    const e = nE().createApp(...t)
      , {mount: n} = e;
    return e.mount = r => {
        const i = Uv(r);
        if (!i)
            return;
        const s = e._component;
        !de(s) && !s.render && !s.template && (s.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
        const o = n(i, !1, Hv(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        o
    }
    ,
    e
}
  , sE = (...t) => {
    const e = rE().createApp(...t)
      , {mount: n} = e;
    return e.mount = r => {
        const i = Uv(r);
        if (i)
            return n(i, !0, Hv(i))
    }
    ,
    e
}
;
function Hv(t) {
    if (t instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement)
        return "mathml"
}
function Uv(t) {
    return Qe(t) ? document.querySelector(t) : t
}
const oE = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , aE = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , lE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function cE(t, e) {
    if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype"in e) {
        uE(t);
        return
    }
    return e
}
function uE(t) {
    console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
}
function sl(t, e={}) {
    if (typeof t != "string")
        return t;
    if (t[0] === '"' && t[t.length - 1] === '"' && t.indexOf("\\") === -1)
        return t.slice(1, -1);
    const n = t.trim();
    if (n.length <= 9)
        switch (n.toLowerCase()) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "undefined":
            return;
        case "null":
            return null;
        case "nan":
            return Number.NaN;
        case "infinity":
            return Number.POSITIVE_INFINITY;
        case "-infinity":
            return Number.NEGATIVE_INFINITY
        }
    if (!lE.test(t)) {
        if (e.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return t
    }
    try {
        if (oE.test(t) || aE.test(t)) {
            if (e.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(t, cE)
        }
        return JSON.parse(t)
    } catch (r) {
        if (e.strict)
            throw r;
        return t
    }
}
const fE = /#/g
  , dE = /&/g
  , hE = /\//g
  , pE = /=/g
  , Uh = /\+/g
  , gE = /%5e/gi
  , mE = /%60/gi
  , _E = /%7c/gi
  , yE = /%20/gi;
function vE(t) {
    return encodeURI("" + t).replace(_E, "|")
}
function md(t) {
    return vE(typeof t == "string" ? t : JSON.stringify(t)).replace(Uh, "%2B").replace(yE, "+").replace(fE, "%23").replace(dE, "%26").replace(mE, "`").replace(gE, "^").replace(hE, "%2F")
}
function gf(t) {
    return md(t).replace(pE, "%3D")
}
function Qc(t="") {
    try {
        return decodeURIComponent("" + t)
    } catch {
        return "" + t
    }
}
function bE(t) {
    return Qc(t.replace(Uh, " "))
}
function wE(t) {
    return Qc(t.replace(Uh, " "))
}
function Vh(t="") {
    const e = Object.create(null);
    t[0] === "?" && (t = t.slice(1));
    for (const n of t.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = bE(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const s = wE(r[2] || "");
        e[i] === void 0 ? e[i] = s : Array.isArray(e[i]) ? e[i].push(s) : e[i] = [e[i], s]
    }
    return e
}
function TE(t, e) {
    return (typeof e == "number" || typeof e == "boolean") && (e = String(e)),
    e ? Array.isArray(e) ? e.map(n => `${gf(t)}=${md(n)}`).join("&") : `${gf(t)}=${md(e)}` : gf(t)
}
function xE(t) {
    return Object.keys(t).filter(e => t[e] !== void 0).map(e => TE(e, t[e])).filter(Boolean).join("&")
}
const EE = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , SE = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , CE = /^([/\\]\s*){2,}[^/\\]/
  , kE = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , RE = /\/$|\/\?|\/#/
  , PE = /^\.?\//;
function mi(t, e={}) {
    return typeof e == "boolean" && (e = {
        acceptRelative: e
    }),
    e.strict ? EE.test(t) : SE.test(t) || (e.acceptRelative ? CE.test(t) : !1)
}
function AE(t) {
    return !!t && kE.test(t)
}
function _d(t="", e) {
    return e ? RE.test(t) : t.endsWith("/")
}
function $o(t="", e) {
    if (!e)
        return (_d(t) ? t.slice(0, -1) : t) || "/";
    if (!_d(t, !0))
        return t || "/";
    let n = t
      , r = "";
    const i = t.indexOf("#");
    i !== -1 && (n = t.slice(0, i),
    r = t.slice(i));
    const [s,...o] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r
}
function Vv(t="", e) {
    if (!e)
        return t.endsWith("/") ? t : t + "/";
    if (_d(t, !0))
        return t || "/";
    let n = t
      , r = "";
    const i = t.indexOf("#");
    if (i !== -1 && (n = t.slice(0, i),
    r = t.slice(i),
    !n))
        return r;
    const [s,...o] = n.split("?");
    return s + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r
}
function OE(t="") {
    return t.startsWith("/")
}
function wI(t="") {
    return OE(t) ? t : "/" + t
}
function $E(t, e) {
    if (zv(e) || mi(t))
        return t;
    const n = $o(e);
    return t.startsWith(n) ? t : Pi(n, t)
}
function jg(t, e) {
    if (zv(e))
        return t;
    const n = $o(e);
    if (!t.startsWith(n))
        return t;
    const r = t.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function zh(t, e) {
    const n = Wh(t)
      , r = {
        ...Vh(n.search),
        ...e
    };
    return n.search = xE(r),
    IE(n)
}
function zv(t) {
    return !t || t === "/"
}
function LE(t) {
    return t && t !== "/"
}
function Pi(t, ...e) {
    let n = t || "";
    for (const r of e.filter(i => LE(i)))
        if (n) {
            const i = r.replace(PE, "");
            n = Vv(n) + i
        } else
            n = r;
    return n
}
function Wv(...t) {
    var o, a, l, u;
    const e = /\/(?!\/)/
      , n = t.filter(Boolean)
      , r = [];
    let i = 0;
    for (const c of n)
        if (!(!c || c === "/")) {
            for (const [f,d] of c.split(e).entries())
                if (!(!d || d === ".")) {
                    if (d === "..") {
                        if (r.length === 1 && mi(r[0]))
                            continue;
                        r.pop(),
                        i--;
                        continue
                    }
                    if (f === 1 && ((o = r[r.length - 1]) != null && o.endsWith(":/"))) {
                        r[r.length - 1] += "/" + d;
                        continue
                    }
                    r.push(d),
                    i++
                }
        }
    let s = r.join("/");
    return i >= 0 ? (a = n[0]) != null && a.startsWith("/") && !s.startsWith("/") ? s = "/" + s : (l = n[0]) != null && l.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * i) + s,
    (u = n[n.length - 1]) != null && u.endsWith("/") && !s.endsWith("/") && (s += "/"),
    s
}
function ME(t, e) {
    return Qc($o(t)) === Qc($o(e))
}
const qv = Symbol.for("ufo:protocolRelative");
function Wh(t="", e) {
    const n = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,d=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!mi(t, {
        acceptRelative: !0
    }))
        return Bg(t);
    const [,r="",i,s=""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let[,o="",a=""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {pathname: l, search: u, hash: c} = Bg(a);
    return {
        protocol: r.toLowerCase(),
        auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
        host: o,
        pathname: l,
        search: u,
        hash: c,
        [qv]: !r
    }
}
function Bg(t="") {
    const [e="",n="",r=""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: e,
        search: n,
        hash: r
    }
}
function IE(t) {
    const e = t.pathname || ""
      , n = t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : ""
      , r = t.hash || ""
      , i = t.auth ? t.auth + "@" : ""
      , s = t.host || "";
    return (t.protocol || t[qv] ? (t.protocol || "") + "//" : "") + i + s + e + n + r
}
class DE extends Error {
    constructor(e, n) {
        super(e, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function NE(t) {
    var l, u, c, f, d;
    const e = ((l = t.error) == null ? void 0 : l.message) || ((u = t.error) == null ? void 0 : u.toString()) || ""
      , n = ((c = t.request) == null ? void 0 : c.method) || ((f = t.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = t.request) == null ? void 0 : d.url) || String(t.request) || "/"
      , i = `[${n}] ${JSON.stringify(r)}`
      , s = t.response ? `${t.response.status} ${t.response.statusText}` : "<no response>"
      , o = `${i}: ${s}${e ? ` ${e}` : ""}`
      , a = new DE(o,t.error ? {
        cause: t.error
    } : void 0);
    for (const h of ["request", "options", "response"])
        Object.defineProperty(a, h, {
            get() {
                return t[h]
            }
        });
    for (const [h,g] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, h, {
            get() {
                return t.response && t.response[g]
            }
        });
    return a
}
const FE = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Hg(t="GET") {
    return FE.has(t.toUpperCase())
}
function jE(t) {
    if (t === void 0)
        return !1;
    const e = typeof t;
    return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.buffer ? !1 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
}
const BE = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , HE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function UE(t="") {
    if (!t)
        return "json";
    const e = t.split(";").shift() || "";
    return HE.test(e) ? "json" : BE.has(e) || e.startsWith("text/") ? "text" : "blob"
}
function VE(t, e, n, r) {
    const i = zE((e == null ? void 0 : e.headers) ?? (t == null ? void 0 : t.headers), n == null ? void 0 : n.headers, r);
    let s;
    return (n != null && n.query || n != null && n.params || e != null && e.params || e != null && e.query) && (s = {
        ...n == null ? void 0 : n.params,
        ...n == null ? void 0 : n.query,
        ...e == null ? void 0 : e.params,
        ...e == null ? void 0 : e.query
    }),
    {
        ...n,
        ...e,
        query: s,
        params: s,
        headers: i
    }
}
function zE(t, e, n) {
    if (!e)
        return new n(t);
    const r = new n(e);
    if (t)
        for (const [i,s] of Symbol.iterator in t || Array.isArray(t) ? t : new n(t))
            r.set(i, s);
    return r
}
async function Bl(t, e) {
    if (e)
        if (Array.isArray(e))
            for (const n of e)
                await n(t);
        else
            await e(t)
}
const WE = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , qE = new Set([101, 204, 205, 304]);
function Yv(t={}) {
    const {fetch: e=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = t;
    async function i(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = Hg(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : WE.has(f))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)),
                s(a.request, {
                    ...a.options,
                    retry: c - 1
                })
            }
        }
        const u = NE(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, s),
        u
    }
    const s = async function(l, u={}) {
        const c = {
            request: l,
            options: VE(l, u, t.defaults, n),
            response: void 0,
            error: void 0
        };
        c.options.method && (c.options.method = c.options.method.toUpperCase()),
        c.options.onRequest && await Bl(c, c.options.onRequest),
        typeof c.request == "string" && (c.options.baseURL && (c.request = $E(c.request, c.options.baseURL)),
        c.options.query && (c.request = zh(c.request, c.options.query),
        delete c.options.query),
        "query"in c.options && delete c.options.query,
        "params"in c.options && delete c.options.params),
        c.options.body && Hg(c.options.method) && (jE(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
        c.options.headers = new n(c.options.headers || {}),
        c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"),
        c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo"in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex"in c.options || (c.options.duplex = "half")));
        let f;
        if (!c.options.signal && c.options.timeout) {
            const h = new r;
            f = setTimeout( () => {
                const g = new Error("[TimeoutError]: The operation was aborted due to timeout");
                g.name = "TimeoutError",
                g.code = 23,
                h.abort(g)
            }
            , c.options.timeout),
            c.options.signal = h.signal
        }
        try {
            c.response = await e(c.request, c.options)
        } catch (h) {
            return c.error = h,
            c.options.onRequestError && await Bl(c, c.options.onRequestError),
            await i(c)
        } finally {
            f && clearTimeout(f)
        }
        if ((c.response.body || c.response._bodyInit) && !qE.has(c.response.status) && c.options.method !== "HEAD") {
            const h = (c.options.parseResponse ? "json" : c.options.responseType) || UE(c.response.headers.get("content-type") || "");
            switch (h) {
            case "json":
                {
                    const g = await c.response.text()
                      , p = c.options.parseResponse || sl;
                    c.response._data = p(g);
                    break
                }
            case "stream":
                {
                    c.response._data = c.response.body || c.response._bodyInit;
                    break
                }
            default:
                c.response._data = await c.response[h]()
            }
        }
        return c.options.onResponse && await Bl(c, c.options.onResponse),
        !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await Bl(c, c.options.onResponseError),
        await i(c)) : c.response
    }
      , o = async function(l, u) {
        return (await s(l, u))._data
    };
    return o.raw = s,
    o.native = (...a) => e(...a),
    o.create = (a={}, l={}) => Yv({
        ...t,
        ...l,
        defaults: {
            ...t.defaults,
            ...l.defaults,
            ...a
        }
    }),
    o
}
const Zc = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , YE = Zc.fetch ? (...t) => Zc.fetch(...t) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))
  , KE = Zc.Headers
  , GE = Zc.AbortController
  , XE = Yv({
    fetch: YE,
    Headers: KE,
    AbortController: GE
})
  , JE = XE
  , QE = () => {
    var t;
    return ((t = window == null ? void 0 : window.__NUXT__) == null ? void 0 : t.config) || {}
}
  , eu = QE().app
  , ZE = () => eu.baseURL
  , eS = () => eu.buildAssetsDir
  , qh = (...t) => Wv(Yh(), eS(), ...t)
  , Yh = (...t) => {
    const e = eu.cdnURL || eu.baseURL;
    return t.length ? Wv(e, ...t) : e
}
;
globalThis.__buildAssetsURL = qh,
globalThis.__publicAssetsURL = Yh;
globalThis.$fetch || (globalThis.$fetch = JE.create({
    baseURL: ZE()
}));
function yd(t, e={}, n) {
    for (const r in t) {
        const i = t[r]
          , s = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? yd(i, e, s) : typeof i == "function" && (e[s] = i)
    }
    return e
}
const tS = {
    run: t => t()
}
  , nS = () => tS
  , Kv = typeof console.createTask < "u" ? console.createTask : nS;
function rS(t, e) {
    const n = e.shift()
      , r = Kv(n);
    return t.reduce( (i, s) => i.then( () => r.run( () => s(...e))), Promise.resolve())
}
function iS(t, e) {
    const n = e.shift()
      , r = Kv(n);
    return Promise.all(t.map(i => r.run( () => i(...e))))
}
function mf(t, e) {
    for (const n of [...t])
        n(e)
}
class sS {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, n, r={}) {
        if (!e || typeof n != "function")
            return () => {}
            ;
        const i = e;
        let s;
        for (; this._deprecatedHooks[e]; )
            s = this._deprecatedHooks[e],
            e = s.to;
        if (s && !r.allowDeprecated) {
            let o = s.message;
            o || (o = `${i} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(o) || (console.warn(o),
            this._deprecatedMessages.add(o))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[e] = this._hooks[e] || [],
        this._hooks[e].push(n),
        () => {
            n && (this.removeHook(e, n),
            n = void 0)
        }
    }
    hookOnce(e, n) {
        let r, i = (...s) => (typeof r == "function" && r(),
        r = void 0,
        i = void 0,
        n(...s));
        return r = this.hook(e, i),
        r
    }
    removeHook(e, n) {
        if (this._hooks[e]) {
            const r = this._hooks[e].indexOf(n);
            r !== -1 && this._hooks[e].splice(r, 1),
            this._hooks[e].length === 0 && delete this._hooks[e]
        }
    }
    deprecateHook(e, n) {
        this._deprecatedHooks[e] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[e] || [];
        delete this._hooks[e];
        for (const i of r)
            this.hook(e, i)
    }
    deprecateHooks(e) {
        Object.assign(this._deprecatedHooks, e);
        for (const n in e)
            this.deprecateHook(n, e[n])
    }
    addHooks(e) {
        const n = yd(e)
          , r = Object.keys(n).map(i => this.hook(i, n[i]));
        return () => {
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(e) {
        const n = yd(e);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const e in this._hooks)
            delete this._hooks[e]
    }
    callHook(e, ...n) {
        return n.unshift(e),
        this.callHookWith(rS, e, ...n)
    }
    callHookParallel(e, ...n) {
        return n.unshift(e),
        this.callHookWith(iS, e, ...n)
    }
    callHookWith(e, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && mf(this._before, i);
        const s = e(n in this._hooks ? [...this._hooks[n]] : [], r);
        return s instanceof Promise ? s.finally( () => {
            this._after && i && mf(this._after, i)
        }
        ) : (this._after && i && mf(this._after, i),
        s)
    }
    beforeEach(e) {
        return this._before = this._before || [],
        this._before.push(e),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(e);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(e) {
        return this._after = this._after || [],
        this._after.push(e),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(e);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function Gv() {
    return new sS
}
function oS(t={}) {
    let e, n = !1;
    const r = o => {
        if (e && e !== o)
            throw new Error("Context conflict")
    }
    ;
    let i;
    if (t.asyncContext) {
        const o = t.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        o ? i = new o : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const s = () => {
        if (i) {
            const o = i.getStore();
            if (o !== void 0)
                return o
        }
        return e
    }
    ;
    return {
        use: () => {
            const o = s();
            if (o === void 0)
                throw new Error("Context is not available");
            return o
        }
        ,
        tryUse: () => s(),
        set: (o, a) => {
            a || r(o),
            e = o,
            n = !0
        }
        ,
        unset: () => {
            e = void 0,
            n = !1
        }
        ,
        call: (o, a) => {
            r(o),
            e = o;
            try {
                return i ? i.run(o, a) : a()
            } finally {
                n || (e = void 0)
            }
        }
        ,
        async callAsync(o, a) {
            e = o;
            const l = () => {
                e = o
            }
              , u = () => e === o ? l : void 0;
            vd.add(u);
            try {
                const c = i ? i.run(o, a) : a();
                return n || (e = void 0),
                await c
            } finally {
                vd.delete(u)
            }
        }
    }
}
function aS(t={}) {
    const e = {};
    return {
        get(n, r={}) {
            return e[n] || (e[n] = oS({
                ...t,
                ...r
            })),
            e[n]
        }
    }
}
const tu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Ug = "__unctx__"
  , lS = tu[Ug] || (tu[Ug] = aS())
  , cS = (t, e={}) => lS.get(t, e)
  , Vg = "__unctx_async_handlers__"
  , vd = tu[Vg] || (tu[Vg] = new Set);
function jr(t) {
    const e = [];
    for (const i of vd) {
        const s = i();
        s && e.push(s)
    }
    const n = () => {
        for (const i of e)
            i()
    }
    ;
    let r = t();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(i => {
        throw n(),
        i
    }
    )),
    [r, n]
}
const zg = {
    mode: "out-in"
}
  , uS = !1
  , fS = !1
  , dS = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: {
        visibility: !0
    }
}
  , hS = null
  , pS = "#__nuxt"
  , Xv = "nuxt-app"
  , Wg = 36e5
  , gS = "vite:preloadError";
function Jv(t=Xv) {
    return cS(t, {
        asyncContext: !1
    })
}
const mS = "__nuxt_plugin";
function _S(t) {
    var i;
    let e = 0;
    const n = {
        _id: t.id || Xv || "nuxt-app",
        _scope: L1(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.17.2"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: si({
            ...((i = t.ssrContext) == null ? void 0 : i.payload) || {},
            data: si({}),
            state: mr({}),
            once: new Set,
            _errors: si({})
        }),
        static: {
            data: {}
        },
        runWithContext(s) {
            return n._scope.active && !wl() ? n._scope.run( () => qg(n, s)) : qg(n, s)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => {}
                ;
            e++;
            let s = !1;
            return () => {
                if (!s && (s = !0,
                e--,
                e === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: si({}),
        _payloadRevivers: {},
        ...t
    };
    {
        const s = window.__NUXT__;
        if (s)
            for (const o in s)
                switch (o) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(n.payload[o], s[o]);
                    break;
                default:
                    n.payload[o] = s[o]
                }
    }
    n.hooks = Gv(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (s, o) => {
        const a = "$" + s;
        Hl(n, a, o),
        Hl(n.vueApp.config.globalProperties, a, o)
    }
    ,
    Hl(n.vueApp, "$nuxt", n),
    Hl(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener(gS, o => {
            n.callHook("app:chunkError", {
                error: o.payload
            }),
            (n.isHydrating || o.payload.message.includes("Unable to preload CSS")) && o.preventDefault()
        }
        ),
        window.useNuxtApp || (window.useNuxtApp = Ye);
        const s = n.hook("app:error", (...o) => {
            console.error("[nuxt] error caught during app initialization", ...o)
        }
        );
        n.hook("app:mounted", s)
    }
    const r = n.payload.config;
    return n.provide("config", r),
    n
}
function yS(t, e) {
    e.hooks && t.hooks.addHooks(e.hooks)
}
async function vS(t, e) {
    if (typeof e == "function") {
        const {provide: n} = await t.runWithContext( () => e(t)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                t.provide(r, n[r])
    }
}
async function bS(t, e) {
    const n = []
      , r = []
      , i = []
      , s = [];
    let o = 0;
    async function a(l) {
        var c;
        const u = ((c = l.dependsOn) == null ? void 0 : c.filter(f => e.some(d => d._name === f) && !n.includes(f))) ?? [];
        if (u.length > 0)
            r.push([new Set(u), l]);
        else {
            const f = vS(t, l).then(async () => {
                l._name && (n.push(l._name),
                await Promise.all(r.map(async ([d,h]) => {
                    d.has(l._name) && (d.delete(l._name),
                    d.size === 0 && (o++,
                    await a(h)))
                }
                )))
            }
            );
            l.parallel ? i.push(f.catch(d => s.push(d))) : await f
        }
    }
    for (const l of e)
        yS(t, l);
    for (const l of e)
        await a(l);
    if (await Promise.all(i),
    o)
        for (let l = 0; l < o; l++)
            await Promise.all(i);
    if (s.length)
        throw s[0]
}
function an(t) {
    if (typeof t == "function")
        return t;
    const e = t._name || t.name;
    return delete t.name,
    Object.assign(t.setup || ( () => {}
    ), t, {
        [mS]: !0,
        _name: e
    })
}
function qg(t, e, n) {
    const r = () => e();
    return Jv(t._id).set(t),
    t.vueApp.runWithContext(r)
}
function Qv(t) {
    var n;
    let e;
    return Mu() && (e = (n = rr()) == null ? void 0 : n.appContext.app.$nuxt),
    e || (e = Jv(t).tryUse()),
    e || null
}
function Ye(t) {
    const e = Qv(t);
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function bn(t) {
    return Ye().$config
}
function Hl(t, e, n) {
    Object.defineProperty(t, e, {
        get: () => n
    })
}
function wS(t, e) {
    return {
        ctx: {
            table: t
        },
        matchAll: n => e0(n, t)
    }
}
function Zv(t) {
    const e = {};
    for (const n in t)
        e[n] = n === "dynamic" ? new Map(Object.entries(t[n]).map( ([r,i]) => [r, Zv(i)])) : new Map(Object.entries(t[n]));
    return e
}
function TS(t) {
    return wS(Zv(t))
}
function e0(t, e, n) {
    t.endsWith("/") && (t = t.slice(0, -1) || "/");
    const r = [];
    for (const [s,o] of Yg(e.wildcard))
        (t === s || t.startsWith(s + "/")) && r.push(o);
    for (const [s,o] of Yg(e.dynamic))
        if (t.startsWith(s + "/")) {
            const a = "/" + t.slice(s.length).split("/").splice(2).join("/");
            r.push(...e0(a, o))
        }
    const i = e.static.get(t);
    return i && r.push(i),
    r.filter(Boolean)
}
function Yg(t) {
    return [...t.entries()].sort( (e, n) => e[0].length - n[0].length)
}
function _f(t) {
    if (t === null || typeof t != "object")
        return !1;
    const e = Object.getPrototypeOf(t);
    return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0
}
function bd(t, e, n=".", r) {
    if (!_f(e))
        return bd(t, {}, n, r);
    const i = Object.assign({}, e);
    for (const s in t) {
        if (s === "__proto__" || s === "constructor")
            continue;
        const o = t[s];
        o != null && (r && r(i, s, o, n) || (Array.isArray(o) && Array.isArray(i[s]) ? i[s] = [...o, ...i[s]] : _f(o) && _f(i[s]) ? i[s] = bd(o, i[s], (n ? `${n}.` : "") + s.toString(), r) : i[s] = o))
    }
    return i
}
function xS(t) {
    return (...e) => e.reduce( (n, r) => bd(n, r, "", t), {})
}
const t0 = xS();
function ES(t, e) {
    try {
        return e in t
    } catch {
        return !1
    }
}
class wd extends Error {
    constructor(n, r={}) {
        super(n, r);
        Gt(this, "statusCode", 500);
        Gt(this, "fatal", !1);
        Gt(this, "unhandled", !1);
        Gt(this, "statusMessage");
        Gt(this, "data");
        Gt(this, "cause");
        r.cause && !this.cause && (this.cause = r.cause)
    }
    toJSON() {
        const n = {
            message: this.message,
            statusCode: Td(this.statusCode, 500)
        };
        return this.statusMessage && (n.statusMessage = n0(this.statusMessage)),
        this.data !== void 0 && (n.data = this.data),
        n
    }
}
Gt(wd, "__h3_error__", !0);
function SS(t) {
    if (typeof t == "string")
        return new wd(t);
    if (CS(t))
        return t;
    const e = new wd(t.message ?? t.statusMessage ?? "",{
        cause: t.cause || t
    });
    if (ES(t, "stack"))
        try {
            Object.defineProperty(e, "stack", {
                get() {
                    return t.stack
                }
            })
        } catch {
            try {
                e.stack = t.stack
            } catch {}
        }
    if (t.data && (e.data = t.data),
    t.statusCode ? e.statusCode = Td(t.statusCode, e.statusCode) : t.status && (e.statusCode = Td(t.status, e.statusCode)),
    t.statusMessage ? e.statusMessage = t.statusMessage : t.statusText && (e.statusMessage = t.statusText),
    e.statusMessage) {
        const n = e.statusMessage;
        n0(e.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return t.fatal !== void 0 && (e.fatal = t.fatal),
    t.unhandled !== void 0 && (e.unhandled = t.unhandled),
    e
}
function CS(t) {
    var e;
    return ((e = t == null ? void 0 : t.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const kS = /[^\u0009\u0020-\u007E]/g;
function n0(t="") {
    return t.replace(kS, "")
}
function Td(t, e=200) {
    return !t || (typeof t == "string" && (t = Number.parseInt(t, 10)),
    t < 100 || t > 999) ? e : t
}
const r0 = Symbol("layout-meta")
  , Sl = Symbol("route")
  , $t = () => {
    var t;
    return (t = Ye()) == null ? void 0 : t.$router
}
  , Wi = () => Mu() ? ut(Sl, Ye()._route) : Ye()._route;
const RS = () => {
    try {
        if (Ye()._processingMiddleware)
            return !0
    } catch {
        return !1
    }
    return !1
}
  , Kh = (t, e) => {
    t || (t = "/");
    const n = typeof t == "string" ? t : "path"in t ? xd(t) : $t().resolve(t).href;
    if (e != null && e.open) {
        const {target: l="_blank", windowFeatures: u={}} = e.open
          , c = Object.entries(u).filter( ([f,d]) => d !== void 0).map( ([f,d]) => `${f.toLowerCase()}=${d}`).join(", ");
        return open(n, l, c),
        Promise.resolve()
    }
    const r = mi(n, {
        acceptRelative: !0
    })
      , i = (e == null ? void 0 : e.external) || r;
    if (i) {
        if (!(e != null && e.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const {protocol: l} = new URL(n,window.location.href);
        if (l && AE(l))
            throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
    }
    const s = RS();
    if (!i && s) {
        if (e != null && e.replace) {
            if (typeof t == "string") {
                const {pathname: l, search: u, hash: c} = Wh(t);
                return {
                    path: l,
                    ...u && {
                        query: Vh(u)
                    },
                    ...c && {
                        hash: c
                    },
                    replace: !0
                }
            }
            return {
                ...t,
                replace: !0
            }
        }
        return t
    }
    const o = $t()
      , a = Ye();
    return i ? (a._scope.stop(),
    e != null && e.replace ? location.replace(n) : location.href = n,
    s ? a.isHydrating ? new Promise( () => {}
    ) : !1 : Promise.resolve()) : e != null && e.replace ? o.replace(t) : o.push(t)
}
;
function xd(t) {
    return zh(t.path || "", t.query || {}) + (t.hash || "")
}
const i0 = "__nuxt_error"
  , Bu = () => My(Ye().payload, "error")
  , cs = t => {
    const e = Es(t);
    try {
        const n = Ye()
          , r = Bu();
        n.hooks.callHook("app:error", e),
        r.value || (r.value = e)
    } catch {
        throw e
    }
    return e
}
  , s0 = async (t={}) => {
    const e = Ye()
      , n = Bu();
    e.callHook("app:error:cleared", t),
    t.redirect && await $t().replace(t.redirect),
    n.value = hS
}
  , o0 = t => !!t && typeof t == "object" && i0 in t
  , Es = t => {
    const e = SS(t);
    return Object.defineProperty(e, i0, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    e
}
;
function Kg(t) {
    const e = AS(t)
      , n = new ArrayBuffer(e.length)
      , r = new DataView(n);
    for (let i = 0; i < n.byteLength; i++)
        r.setUint8(i, e.charCodeAt(i));
    return n
}
const PS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function AS(t) {
    t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
    let e = ""
      , n = 0
      , r = 0;
    for (let i = 0; i < t.length; i++)
        n <<= 6,
        n |= PS.indexOf(t[i]),
        r += 6,
        r === 24 && (e += String.fromCharCode((n & 16711680) >> 16),
        e += String.fromCharCode((n & 65280) >> 8),
        e += String.fromCharCode(n & 255),
        n = r = 0);
    return r === 12 ? (n >>= 4,
    e += String.fromCharCode(n)) : r === 18 && (n >>= 2,
    e += String.fromCharCode((n & 65280) >> 8),
    e += String.fromCharCode(n & 255)),
    e
}
const OS = -1
  , $S = -2
  , LS = -3
  , MS = -4
  , IS = -5
  , DS = -6;
function NS(t, e) {
    return FS(JSON.parse(t), e)
}
function FS(t, e) {
    if (typeof t == "number")
        return i(t, !0);
    if (!Array.isArray(t) || t.length === 0)
        throw new Error("Invalid input");
    const n = t
      , r = Array(n.length);
    function i(s, o=!1) {
        if (s === OS)
            return;
        if (s === LS)
            return NaN;
        if (s === MS)
            return 1 / 0;
        if (s === IS)
            return -1 / 0;
        if (s === DS)
            return -0;
        if (o)
            throw new Error("Invalid input");
        if (s in r)
            return r[s];
        const a = n[s];
        if (!a || typeof a != "object")
            r[s] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0]
                  , u = e == null ? void 0 : e[l];
                if (u)
                    return r[s] = u(i(a[1]));
                switch (l) {
                case "Date":
                    r[s] = new Date(a[1]);
                    break;
                case "Set":
                    const c = new Set;
                    r[s] = c;
                    for (let h = 1; h < a.length; h += 1)
                        c.add(i(a[h]));
                    break;
                case "Map":
                    const f = new Map;
                    r[s] = f;
                    for (let h = 1; h < a.length; h += 2)
                        f.set(i(a[h]), i(a[h + 1]));
                    break;
                case "RegExp":
                    r[s] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[s] = Object(a[1]);
                    break;
                case "BigInt":
                    r[s] = BigInt(a[1]);
                    break;
                case "null":
                    const d = Object.create(null);
                    r[s] = d;
                    for (let h = 1; h < a.length; h += 2)
                        d[a[h]] = i(a[h + 1]);
                    break;
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float32Array":
                case "Float64Array":
                case "BigInt64Array":
                case "BigUint64Array":
                    {
                        const h = globalThis[l]
                          , g = a[1]
                          , p = Kg(g)
                          , v = new h(p);
                        r[s] = v;
                        break
                    }
                case "ArrayBuffer":
                    {
                        const h = a[1]
                          , g = Kg(h);
                        r[s] = g;
                        break
                    }
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[s] = l;
                for (let u = 0; u < a.length; u += 1) {
                    const c = a[u];
                    c !== $S && (l[u] = i(c))
                }
            }
        else {
            const l = {};
            r[s] = l;
            for (const u in a) {
                const c = a[u];
                l[u] = i(c)
            }
        }
        return r[s]
    }
    return i(0)
}
const jS = new Set(["link", "style", "script", "noscript"])
  , BS = new Set(["title", "titleTemplate", "script", "style", "noscript"])
  , Gg = new Set(["base", "meta", "link", "style", "script", "noscript"])
  , HS = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"])
  , US = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"])
  , VS = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"])
  , zS = new Set(["templateParams", "htmlAttrs", "bodyAttrs"])
  , WS = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);
const qS = ["name", "property", "http-equiv"];
function a0(t) {
    const e = t.split(":")[1];
    return WS.has(e)
}
function Ed(t) {
    const {props: e, tag: n} = t;
    if (US.has(n))
        return n;
    if (n === "link" && e.rel === "canonical")
        return "canonical";
    if (e.charset)
        return "charset";
    if (t.tag === "meta") {
        for (const r of qS)
            if (e[r] !== void 0)
                return `${n}:${e[r]}`
    }
    if (t.key)
        return `${n}:key:${t.key}`;
    if (e.id)
        return `${n}:id:${e.id}`;
    if (BS.has(n)) {
        const r = t.textContent || t.innerHTML;
        if (r)
            return `${n}:content:${r}`
    }
}
function Xg(t) {
    const e = t._h || t._d;
    if (e)
        return e;
    const n = t.textContent || t.innerHTML;
    return n || `${t.tag}:${Object.entries(t.props).map( ([r,i]) => `${r}:${String(i)}`).join(",")}`
}
function nu(t, e, n) {
    typeof t === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (t = t());
    let i;
    if (e && (i = e(n, t)),
    Array.isArray(i))
        return i.map(s => nu(s, e));
    if ((i == null ? void 0 : i.constructor) === Object) {
        const s = {};
        for (const o of Object.keys(i))
            s[o] = nu(i[o], e, o);
        return s
    }
    return i
}
function YS(t, e) {
    const n = t === "style" ? new Map : new Set;
    function r(i) {
        const s = i.trim();
        if (s)
            if (t === "style") {
                const [o,...a] = s.split(":").map(l => l.trim());
                o && a.length && n.set(o, a.join(":"))
            } else
                s.split(" ").filter(Boolean).forEach(o => n.add(o))
    }
    return typeof e == "string" ? t === "style" ? e.split(";").forEach(r) : r(e) : Array.isArray(e) ? e.forEach(i => r(i)) : e && typeof e == "object" && Object.entries(e).forEach( ([i,s]) => {
        s && s !== "false" && (t === "style" ? n.set(i.trim(), s) : r(i))
    }
    ),
    n
}
function l0(t, e) {
    return t.props = t.props || {},
    e && Object.entries(e).forEach( ([n,r]) => {
        if (r === null) {
            t.props[n] = null;
            return
        }
        if (n === "class" || n === "style") {
            t.props[n] = YS(n, r);
            return
        }
        if (VS.has(n)) {
            if (["textContent", "innerHTML"].includes(n) && typeof r == "object") {
                let o = e.type;
                if (e.type || (o = "application/json"),
                !(o != null && o.endsWith("json")) && o !== "speculationrules")
                    return;
                e.type = o,
                t.props.type = o,
                t[n] = JSON.stringify(r)
            } else
                t[n] = r;
            return
        }
        const i = String(r)
          , s = n.startsWith("data-");
        i === "true" || i === "" ? t.props[n] = s ? i : !0 : !r && s && i === "false" ? t.props[n] = "false" : r !== void 0 && (t.props[n] = r)
    }
    ),
    t
}
function KS(t, e) {
    const n = typeof e == "object" && typeof e != "function" ? e : {
        [t === "script" || t === "noscript" || t === "style" ? "innerHTML" : "textContent"]: e
    }
      , r = l0({
        tag: t,
        props: {}
    }, n);
    return r.key && jS.has(r.tag) && (r.props["data-hid"] = r._h = r.key),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(i => ({
        ...r,
        props: {
            ...r.props,
            content: i
        }
    })) : r
}
function GS(t, e) {
    if (!t)
        return [];
    typeof t == "function" && (t = t());
    const n = (i, s) => {
        for (let o = 0; o < e.length; o++)
            s = e[o](i, s);
        return s
    }
    ;
    t = n(void 0, t);
    const r = [];
    return t = nu(t, n),
    Object.entries(t || {}).forEach( ([i,s]) => {
        if (s !== void 0)
            for (const o of Array.isArray(s) ? s : [s])
                r.push(KS(i, o))
    }
    ),
    r.flat()
}
const Sd = (t, e) => t._w === e._w ? t._p - e._p : t._w - e._w
  , Jg = {
    base: -10,
    title: 10
}
  , XS = {
    critical: -8,
    high: -1,
    low: 2
}
  , Qg = {
    meta: {
        "content-security-policy": -30,
        charset: -20,
        viewport: -15
    },
    link: {
        preconnect: 20,
        stylesheet: 60,
        preload: 70,
        modulepreload: 70,
        prefetch: 90,
        "dns-prefetch": 90,
        prerender: 90
    },
    script: {
        async: 30,
        defer: 80,
        sync: 50
    },
    style: {
        imported: 40,
        sync: 60
    }
}
  , JS = /@import/
  , ia = t => t === "" || t === !0;
function QS(t, e) {
    var s;
    if (typeof e.tagPriority == "number")
        return e.tagPriority;
    let n = 100;
    const r = XS[e.tagPriority] || 0
      , i = t.resolvedOptions.disableCapoSorting ? {
        link: {},
        script: {},
        style: {}
    } : Qg;
    if (e.tag in Jg)
        n = Jg[e.tag];
    else if (e.tag === "meta") {
        const o = e.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : e.props.charset ? "charset" : e.props.name === "viewport" ? "viewport" : null;
        o && (n = Qg.meta[o])
    } else
        e.tag === "link" && e.props.rel ? n = i.link[e.props.rel] : e.tag === "script" ? ia(e.props.async) ? n = i.script.async : e.props.src && !ia(e.props.defer) && !ia(e.props.async) && e.props.type !== "module" && !((s = e.props.type) != null && s.endsWith("json")) ? n = i.script.sync : ia(e.props.defer) && e.props.src && !ia(e.props.async) && (n = i.script.defer) : e.tag === "style" && (n = e.innerHTML && JS.test(e.innerHTML) ? i.style.imported : i.style.sync);
    return (n || 100) + r
}
function Zg(t, e) {
    const n = typeof e == "function" ? e(t) : e
      , r = n.key || String(t.plugins.size + 1);
    t.plugins.get(r) || (t.plugins.set(r, n),
    t.hooks.addHooks(n.hooks || {}))
}
function ZS(t={}) {
    var a;
    const e = Gv();
    e.addHooks(t.hooks || {});
    const n = !t.document
      , r = new Map
      , i = new Map
      , s = []
      , o = {
        _entryCount: 1,
        plugins: i,
        dirty: !1,
        resolvedOptions: t,
        hooks: e,
        ssr: n,
        entries: r,
        headEntries() {
            return [...r.values()]
        },
        use: l => Zg(o, l),
        push(l, u) {
            const c = {
                ...u || {}
            };
            delete c.head;
            const f = c._index ?? o._entryCount++
              , d = {
                _i: f,
                input: l,
                options: c
            }
              , h = {
                _poll(g=!1) {
                    o.dirty = !0,
                    !g && s.push(f),
                    e.callHook("entries:updated", o)
                },
                dispose() {
                    r.delete(f) && h._poll(!0)
                },
                patch(g) {
                    (!c.mode || c.mode === "server" && n || c.mode === "client" && !n) && (d.input = g,
                    r.set(f, d),
                    h._poll())
                }
            };
            return h.patch(l),
            h
        },
        async resolveTags() {
            var h;
            const l = {
                tagMap: new Map,
                tags: [],
                entries: [...o.entries.values()]
            };
            for (await e.callHook("entries:resolve", l); s.length; ) {
                const g = s.shift()
                  , p = r.get(g);
                if (p) {
                    const v = {
                        tags: GS(p.input, t.propResolvers || []).map(y => Object.assign(y, p.options)),
                        entry: p
                    };
                    await e.callHook("entries:normalize", v),
                    p._tags = v.tags.map( (y, b) => (y._w = QS(o, y),
                    y._p = (p._i << 10) + b,
                    y._d = Ed(y),
                    y))
                }
            }
            let u = !1;
            l.entries.flatMap(g => (g._tags || []).map(p => ({
                ...p,
                props: {
                    ...p.props
                }
            }))).sort(Sd).reduce( (g, p) => {
                const v = String(p._d || p._p);
                if (!g.has(v))
                    return g.set(v, p);
                const y = g.get(v);
                if (((p == null ? void 0 : p.tagDuplicateStrategy) || (zS.has(p.tag) ? "merge" : null) || (p.key && p.key === y.key ? "merge" : null)) === "merge") {
                    const m = {
                        ...y.props
                    };
                    Object.entries(p.props).forEach( ([_,w]) => m[_] = _ === "style" ? new Map([...y.props.style || new Map, ...w]) : _ === "class" ? new Set([...y.props.class || new Set, ...w]) : w),
                    g.set(v, {
                        ...p,
                        props: m
                    })
                } else
                    p._p >> 10 === y._p >> 10 && a0(p._d) ? (g.set(v, Object.assign([...Array.isArray(y) ? y : [y], p], p)),
                    u = !0) : (p._w === y._w ? p._p > y._p : (p == null ? void 0 : p._w) < (y == null ? void 0 : y._w)) && g.set(v, p);
                return g
            }
            , l.tagMap);
            const c = l.tagMap.get("title")
              , f = l.tagMap.get("titleTemplate");
            if (o._title = c == null ? void 0 : c.textContent,
            f) {
                const g = f == null ? void 0 : f.textContent;
                if (o._titleTemplate = g,
                g) {
                    let p = typeof g == "function" ? g(c == null ? void 0 : c.textContent) : g;
                    typeof p == "string" && !o.plugins.has("template-params") && (p = p.replace("%s", (c == null ? void 0 : c.textContent) || "")),
                    c ? p === null ? l.tagMap.delete("title") : l.tagMap.set("title", {
                        ...c,
                        textContent: p
                    }) : (f.tag = "title",
                    f.textContent = p)
                }
            }
            l.tags = Array.from(l.tagMap.values()),
            u && (l.tags = l.tags.flat().sort(Sd)),
            await e.callHook("tags:beforeResolve", l),
            await e.callHook("tags:resolve", l),
            await e.callHook("tags:afterResolve", l);
            const d = [];
            for (const g of l.tags) {
                const {innerHTML: p, tag: v, props: y} = g;
                if (HS.has(v) && !(Object.keys(y).length === 0 && !g.innerHTML && !g.textContent) && !(v === "meta" && !y.content && !y["http-equiv"] && !y.charset)) {
                    if (v === "script" && p) {
                        if ((h = y.type) != null && h.endsWith("json")) {
                            const b = typeof p == "string" ? p : JSON.stringify(p);
                            g.innerHTML = b.replace(/</g, "\\u003C")
                        } else
                            typeof p == "string" && (g.innerHTML = p.replace(new RegExp(`</${v}`,"g"), `<\\/${v}`));
                        g._d = Ed(g)
                    }
                    d.push(g)
                }
            }
            return d
        }
    };
    return ((t == null ? void 0 : t.plugins) || []).forEach(l => Zg(o, l)),
    o.hooks.callHook("init", o),
    (a = t.init) == null || a.forEach(l => l && o.push(l)),
    o
}
const Ci = "%separator"
  , eC = new RegExp(`${Ci}(?:\\s*${Ci})*`,"g");
function tC(t, e, n=!1) {
    var i;
    let r;
    if (e === "s" || e === "pageTitle")
        r = t.pageTitle;
    else if (e.includes(".")) {
        const s = e.indexOf(".");
        r = (i = t[e.substring(0, s)]) == null ? void 0 : i[e.substring(s + 1)]
    } else
        r = t[e];
    if (r !== void 0)
        return n ? (r || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r || ""
}
function Ul(t, e, n, r=!1) {
    if (typeof t != "string" || !t.includes("%"))
        return t;
    let i = t;
    try {
        i = decodeURI(t)
    } catch {}
    const s = i.match(/%\w+(?:\.\w+)?/g);
    if (!s)
        return t;
    const o = t.includes(Ci);
    return t = t.replace(/%\w+(?:\.\w+)?/g, a => {
        if (a === Ci || !s.includes(a))
            return a;
        const l = tC(e, a.slice(1), r);
        return l !== void 0 ? l : a
    }
    ).trim(),
    o && (t.endsWith(Ci) && (t = t.slice(0, -Ci.length)),
    t.startsWith(Ci) && (t = t.slice(Ci.length)),
    t = t.replace(eC, n || "").trim()),
    t
}
const em = t => t.includes(":key") ? t : t.split(":").join(":key:")
  , nC = {
    key: "aliasSorting",
    hooks: {
        "tags:resolve": t => {
            let e = !1;
            for (const n of t.tags) {
                const r = n.tagPriority;
                if (!r)
                    continue;
                const i = String(r);
                if (i.startsWith("before:")) {
                    const s = em(i.slice(7))
                      , o = t.tagMap.get(s);
                    o && (typeof o.tagPriority == "number" && (n.tagPriority = o.tagPriority),
                    n._p = o._p - 1,
                    e = !0)
                } else if (i.startsWith("after:")) {
                    const s = em(i.slice(6))
                      , o = t.tagMap.get(s);
                    o && (typeof o.tagPriority == "number" && (n.tagPriority = o.tagPriority),
                    n._p = o._p + 1,
                    e = !0)
                }
            }
            e && (t.tags = t.tags.sort(Sd))
        }
    }
}
  , rC = {
    key: "deprecations",
    hooks: {
        "entries:normalize": ({tags: t}) => {
            for (const e of t)
                e.props.children && (e.innerHTML = e.props.children,
                delete e.props.children),
                e.props.hid && (e.key = e.props.hid,
                delete e.props.hid),
                e.props.vmid && (e.key = e.props.vmid,
                delete e.props.vmid),
                e.props.body && (e.tagPosition = "bodyClose",
                delete e.props.body)
        }
    }
};
async function Cd(t) {
    if (typeof t === "function")
        return t;
    if (t instanceof Promise)
        return await t;
    if (Array.isArray(t))
        return await Promise.all(t.map(n => Cd(n)));
    if ((t == null ? void 0 : t.constructor) === Object) {
        const n = {};
        for (const r of Object.keys(t))
            n[r] = await Cd(t[r]);
        return n
    }
    return t
}
const iC = {
    key: "promises",
    hooks: {
        "entries:resolve": async t => {
            const e = [];
            for (const n in t.entries)
                t.entries[n]._promisesProcessed || e.push(Cd(t.entries[n].input).then(r => {
                    t.entries[n].input = r,
                    t.entries[n]._promisesProcessed = !0
                }
                ));
            await Promise.all(e)
        }
    }
}
  , sC = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , oC = ["innerHTML", "textContent"]
  , aC = t => ({
    key: "template-params",
    hooks: {
        "entries:normalize": e => {
            var r, i, s;
            const n = ((i = (r = e.tags.filter(o => o.tag === "templateParams" && o.mode === "server")) == null ? void 0 : r[0]) == null ? void 0 : i.props) || {};
            Object.keys(n).length && (t._ssrPayload = {
                templateParams: {
                    ...((s = t._ssrPayload) == null ? void 0 : s.templateParams) || {},
                    ...n
                }
            })
        }
        ,
        "tags:resolve": ({tagMap: e, tags: n}) => {
            var s;
            const r = ((s = e.get("templateParams")) == null ? void 0 : s.props) || {}
              , i = r.separator || "|";
            delete r.separator,
            r.pageTitle = Ul(r.pageTitle || t._title || "", r, i);
            for (const o of n) {
                if (o.processTemplateParams === !1)
                    continue;
                const a = sC[o.tag];
                if (a && typeof o.props[a] == "string")
                    o.props[a] = Ul(o.props[a], r, i);
                else if (o.processTemplateParams || o.tag === "titleTemplate" || o.tag === "title")
                    for (const l of oC)
                        typeof o[l] == "string" && (o[l] = Ul(o[l], r, i, o.tag === "script" && o.props.type.endsWith("json")))
            }
            t._templateParams = r,
            t._separator = i
        }
        ,
        "tags:afterResolve": ({tagMap: e}) => {
            const n = e.get("title");
            n != null && n.textContent && n.processTemplateParams !== !1 && (n.textContent = Ul(n.textContent, t._templateParams, t._separator))
        }
    }
})
  , lC = (t, e) => Je(e) ? Oy(e) : e
  , Gh = "usehead";
function cC(t) {
    return {
        install(n) {
            n.config.globalProperties.$unhead = t,
            n.config.globalProperties.$head = t,
            n.provide(Gh, t)
        }
    }.install
}
function uC() {
    if (Mu()) {
        const t = ut(Gh);
        if (!t)
            throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
        return t
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}
function fC(t, e={}) {
    const n = e.head || uC();
    return n.ssr ? n.push(t || {}, e) : dC(n, t, e)
}
function dC(t, e, n={}) {
    const r = De(!1);
    let i;
    return _v( () => {
        const o = r.value ? {} : nu(e, lC);
        i ? i.patch(o) : i = t.push(o, n)
    }
    ),
    rr() && (qo( () => {
        i.dispose()
    }
    ),
    Qy( () => {
        r.value = !0
    }
    ),
    Jy( () => {
        r.value = !1
    }
    )),
    i
}
function hC(t) {
    var n;
    const e = t || Qv();
    return ((n = e == null ? void 0 : e.ssrContext) == null ? void 0 : n.head) || (e == null ? void 0 : e.runWithContext( () => {
        if (Mu())
            return ut(Gh)
    }
    ))
}
function Xh(t, e={}) {
    const n = hC(e.nuxt);
    if (n)
        return fC(t, {
            head: n,
            ...e
        })
}
const pC = "modulepreload"
  , gC = function(t, e) {
    return new URL(t,e).href
}
  , tm = {}
  , je = function(e, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        let o = function(c) {
            return Promise.all(c.map(f => Promise.resolve(f).then(d => ({
                status: "fulfilled",
                value: d
            }), d => ({
                status: "rejected",
                reason: d
            }))))
        };
        const a = document.getElementsByTagName("link")
          , l = document.querySelector("meta[property=csp-nonce]")
          , u = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
        i = o(n.map(c => {
            if (c = gC(c, r),
            c in tm)
                return;
            tm[c] = !0;
            const f = c.endsWith(".css")
              , d = f ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let p = a.length - 1; p >= 0; p--) {
                    const v = a[p];
                    if (v.href === c && (!f || v.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${c}"]${d}`))
                return;
            const g = document.createElement("link");
            if (g.rel = f ? "stylesheet" : pC,
            f || (g.as = "script"),
            g.crossOrigin = "",
            g.href = c,
            u && g.setAttribute("nonce", u),
            document.head.appendChild(g),
            f)
                return new Promise( (p, v) => {
                    g.addEventListener("load", p),
                    g.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    function s(o) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = o,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw o
    }
    return i.then(o => {
        for (const a of o || [])
            a.status === "rejected" && s(a.reason);
        return e().catch(s)
    }
    )
};
let wc, Tc;
function mC() {
    return wc = $fetch(qh(`builds/meta/${bn().app.buildId}.json`), {
        responseType: "json"
    }),
    wc.then(t => {
        Tc = TS(t.matcher)
    }
    ).catch(t => {
        console.error("[nuxt] Error fetching app manifest.", t)
    }
    ),
    wc
}
function Hu() {
    return wc || mC()
}
async function Jh(t) {
    const e = typeof t == "string" ? t : t.path;
    if (await Hu(),
    !Tc)
        return console.error("[nuxt] Error creating app manifest matcher.", Tc),
        {};
    try {
        return t0({}, ...Tc.matchAll(e).reverse())
    } catch (n) {
        return console.error("[nuxt] Error matching route rules.", n),
        {}
    }
}
async function nm(t, e={}) {
    if (!await u0(t))
        return null;
    const r = await yC(t, e);
    return await c0(r) || null
}
const _C = "_payload.json";
async function yC(t, e={}) {
    const n = new URL(t,"http://localhost");
    if (n.host !== "localhost" || mi(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + t);
    const r = bn()
      , i = e.hash || (e.fresh ? Date.now() : r.app.buildId)
      , s = r.app.cdnURL
      , o = s && await u0(t) ? s : r.app.baseURL;
    return Pi(o, n.pathname, _C + (i ? `?${i}` : ""))
}
async function c0(t) {
    const e = fetch(t, {
        cache: "force-cache"
    }).then(n => n.text().then(f0));
    try {
        return await e
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", t, n)
    }
    return null
}
async function u0(t=Wi().path) {
    const e = Ye();
    return t = $o(t),
    (await Hu()).prerendered.includes(t) ? !0 : e.runWithContext(async () => {
        const r = await Jh({
            path: t
        });
        return !!r.prerender && !r.redirect
    }
    )
}
let is = null;
async function vC() {
    var r;
    if (is)
        return is;
    const t = document.getElementById("__NUXT_DATA__");
    if (!t)
        return {};
    const e = await f0(t.textContent || "")
      , n = t.dataset.src ? await c0(t.dataset.src) : void 0;
    return is = {
        ...e,
        ...n,
        ...window.__NUXT__
    },
    (r = is.config) != null && r.public && (is.config.public = mr(is.config.public)),
    is
}
async function f0(t) {
    return await NS(t, Ye()._payloadRevivers)
}
function bC(t, e) {
    Ye()._payloadRevivers[t] = e
}
const wC = [["NuxtError", t => Es(t)], ["EmptyShallowRef", t => ko(t === "_" ? void 0 : t === "0n" ? BigInt(0) : sl(t))], ["EmptyRef", t => De(t === "_" ? void 0 : t === "0n" ? BigInt(0) : sl(t))], ["ShallowRef", t => ko(t)], ["ShallowReactive", t => si(t)], ["Ref", t => De(t)], ["Reactive", t => mr(t)]]
  , TC = an({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(t) {
        let e, n;
        for (const [r,i] of wC)
            bC(r, i);
        Object.assign(t.payload, ([e,n] = jr( () => t.runWithContext(vC)),
        e = await e,
        n(),
        e)),
        window.__NUXT__ = t.payload
    }
});
async function Qh(t, e={}) {
    const n = e.document || t.resolvedOptions.document;
    if (!n || !t.dirty)
        return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await t.hooks.callHook("dom:beforeRender", r),
    !!r.shouldRender)
        return t._domUpdatePromise || (t._domUpdatePromise = new Promise(async i => {
            var h;
            const s = new Map
              , o = new Promise(g => {
                t.resolveTags().then(p => {
                    g(p.map(v => {
                        const y = s.get(v._d) || 0
                          , b = {
                            tag: v,
                            id: (y ? `${v._d}:${y}` : v._d) || Xg(v),
                            shouldRender: !0
                        };
                        return v._d && a0(v._d) && s.set(v._d, y + 1),
                        b
                    }
                    ))
                }
                )
            }
            );
            let a = t._dom;
            if (!a) {
                a = {
                    title: n.title,
                    elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
                };
                for (const g of ["body", "head"]) {
                    const p = (h = n[g]) == null ? void 0 : h.children;
                    for (const v of p) {
                        const y = v.tagName.toLowerCase();
                        if (!Gg.has(y))
                            continue;
                        const b = l0({
                            tag: y,
                            props: {}
                        }, {
                            innerHTML: v.innerHTML,
                            ...v.getAttributeNames().reduce( (m, _) => (m[_] = v.getAttribute(_),
                            m), {}) || {}
                        });
                        if (b.key = v.getAttribute("data-hid") || void 0,
                        b._d = Ed(b) || Xg(b),
                        a.elMap.has(b._d)) {
                            let m = 1
                              , _ = b._d;
                            for (; a.elMap.has(_); )
                                _ = `${b._d}:${m++}`;
                            a.elMap.set(_, v)
                        } else
                            a.elMap.set(b._d, v)
                    }
                }
            }
            a.pendingSideEffects = {
                ...a.sideEffects
            },
            a.sideEffects = {};
            function l(g, p, v) {
                const y = `${g}:${p}`;
                a.sideEffects[y] = v,
                delete a.pendingSideEffects[y]
            }
            function u({id: g, $el: p, tag: v}) {
                const y = v.tag.endsWith("Attrs");
                a.elMap.set(g, p),
                y || (v.textContent && v.textContent !== p.textContent && (p.textContent = v.textContent),
                v.innerHTML && v.innerHTML !== p.innerHTML && (p.innerHTML = v.innerHTML),
                l(g, "el", () => {
                    p == null || p.remove(),
                    a.elMap.delete(g)
                }
                ));
                for (const b in v.props) {
                    if (!Object.prototype.hasOwnProperty.call(v.props, b))
                        continue;
                    const m = v.props[b];
                    if (b.startsWith("on") && typeof m == "function") {
                        const w = p == null ? void 0 : p.dataset;
                        if (w && w[`${b}fired`]) {
                            const E = b.slice(0, -5);
                            m.call(p, new Event(E.substring(2)))
                        }
                        p.getAttribute(`data-${b}`) !== "" && ((v.tag === "bodyAttrs" ? n.defaultView : p).addEventListener(b.substring(2), m.bind(p)),
                        p.setAttribute(`data-${b}`, ""));
                        continue
                    }
                    const _ = `attr:${b}`;
                    if (b === "class") {
                        if (!m)
                            continue;
                        for (const w of m)
                            y && l(g, `${_}:${w}`, () => p.classList.remove(w)),
                            !p.classList.contains(w) && p.classList.add(w)
                    } else if (b === "style") {
                        if (!m)
                            continue;
                        for (const [w,E] of m)
                            l(g, `${_}:${w}`, () => {
                                p.style.removeProperty(w)
                            }
                            ),
                            p.style.setProperty(w, E)
                    } else
                        m !== !1 && m !== null && (p.getAttribute(b) !== m && p.setAttribute(b, m === !0 ? "" : String(m)),
                        y && l(g, _, () => p.removeAttribute(b)))
                }
            }
            const c = []
              , f = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            }
              , d = await o;
            for (const g of d) {
                const {tag: p, shouldRender: v, id: y} = g;
                if (v) {
                    if (p.tag === "title") {
                        n.title = p.textContent,
                        l("title", "", () => n.title = a.title);
                        continue
                    }
                    g.$el = g.$el || a.elMap.get(y),
                    g.$el ? u(g) : Gg.has(p.tag) && c.push(g)
                }
            }
            for (const g of c) {
                const p = g.tag.tagPosition || "head";
                g.$el = n.createElement(g.tag.tag),
                u(g),
                f[p] = f[p] || n.createDocumentFragment(),
                f[p].appendChild(g.$el)
            }
            for (const g of d)
                await t.hooks.callHook("dom:renderTag", g, n, l);
            f.head && n.head.appendChild(f.head),
            f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild),
            f.bodyClose && n.body.appendChild(f.bodyClose);
            for (const g in a.pendingSideEffects)
                a.pendingSideEffects[g]();
            t._dom = a,
            await t.hooks.callHook("dom:rendered", {
                renders: d
            }),
            i()
        }
        ).finally( () => {
            t._domUpdatePromise = void 0,
            t.dirty = !1
        }
        )),
        t._domUpdatePromise
}
function xC(t={}) {
    var r, i, s;
    const e = ((r = t.domOptions) == null ? void 0 : r.render) || Qh;
    t.document = t.document || (typeof window < "u" ? document : void 0);
    const n = ((s = (i = t.document) == null ? void 0 : i.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
    return ZS({
        ...t,
        plugins: [...t.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": e
            }
        }],
        init: [n ? JSON.parse(n) : !1, ...t.init || []]
    })
}
function EC(t, e) {
    let n = 0;
    return () => {
        const r = ++n;
        e( () => {
            n === r && t()
        }
        )
    }
}
function SC(t={}) {
    const e = xC({
        domOptions: {
            render: EC( () => Qh(e), n => setTimeout(n, 0))
        },
        ...t
    });
    return e.install = cC(e),
    e
}
const CC = {
    disableDefaults: !0,
    disableCapoSorting: !1,
    plugins: [rC, iC, aC, nC]
}
  , kC = an({
    name: "nuxt:head",
    enforce: "pre",
    setup(t) {
        const e = SC(CC);
        t.vueApp.use(e);
        {
            let n = !0;
            const r = async () => {
                n = !1,
                await Qh(e)
            }
            ;
            e.hooks.hook("dom:beforeRender", i => {
                i.shouldRender = !n
            }
            ),
            t.hooks.hook("page:start", () => {
                n = !0
            }
            ),
            t.hooks.hook("page:finish", () => {
                t.isHydrating || r()
            }
            ),
            t.hooks.hook("app:error", r),
            t.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const to = typeof document < "u";
function d0(t) {
    return typeof t == "object" || "displayName"in t || "props"in t || "__vccOpts"in t
}
function RC(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && d0(t.default)
}
const Be = Object.assign;
function yf(t, e) {
    const n = {};
    for (const r in e) {
        const i = e[r];
        n[r] = vr(i) ? i.map(t) : t(i)
    }
    return n
}
const La = () => {}
  , vr = Array.isArray
  , h0 = /#/g
  , PC = /&/g
  , AC = /\//g
  , OC = /=/g
  , $C = /\?/g
  , p0 = /\+/g
  , LC = /%5B/g
  , MC = /%5D/g
  , g0 = /%5E/g
  , IC = /%60/g
  , m0 = /%7B/g
  , DC = /%7C/g
  , _0 = /%7D/g
  , NC = /%20/g;
function Zh(t) {
    return encodeURI("" + t).replace(DC, "|").replace(LC, "[").replace(MC, "]")
}
function FC(t) {
    return Zh(t).replace(m0, "{").replace(_0, "}").replace(g0, "^")
}
function kd(t) {
    return Zh(t).replace(p0, "%2B").replace(NC, "+").replace(h0, "%23").replace(PC, "%26").replace(IC, "`").replace(m0, "{").replace(_0, "}").replace(g0, "^")
}
function jC(t) {
    return kd(t).replace(OC, "%3D")
}
function BC(t) {
    return Zh(t).replace(h0, "%23").replace($C, "%3F")
}
function HC(t) {
    return t == null ? "" : BC(t).replace(AC, "%2F")
}
function ol(t) {
    try {
        return decodeURIComponent("" + t)
    } catch {}
    return "" + t
}
const UC = /\/$/
  , VC = t => t.replace(UC, "");
function vf(t, e, n="/") {
    let r, i = {}, s = "", o = "";
    const a = e.indexOf("#");
    let l = e.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = e.slice(0, l),
    s = e.slice(l + 1, a > -1 ? a : e.length),
    i = t(s)),
    a > -1 && (r = r || e.slice(0, a),
    o = e.slice(a, e.length)),
    r = YC(r ?? e, n),
    {
        fullPath: r + (s && "?") + s + o,
        path: r,
        query: i,
        hash: ol(o)
    }
}
function zC(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "")
}
function rm(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}
function WC(t, e, n) {
    const r = e.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && Lo(e.matched[r], n.matched[i]) && y0(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}
function Lo(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e)
}
function y0(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (!qC(t[n], e[n]))
            return !1;
    return !0
}
function qC(t, e) {
    return vr(t) ? im(t, e) : vr(e) ? im(e, t) : t === e
}
function im(t, e) {
    return vr(e) ? t.length === e.length && t.every( (n, r) => n === e[r]) : t.length === 1 && t[0] === e
}
function YC(t, e) {
    if (t.startsWith("/"))
        return t;
    if (!t)
        return e;
    const n = e.split("/")
      , r = t.split("/")
      , i = r[r.length - 1];
    (i === ".." || i === ".") && r.push("");
    let s = n.length - 1, o, a;
    for (o = 0; o < r.length; o++)
        if (a = r[o],
        a !== ".")
            if (a === "..")
                s > 1 && s--;
            else
                break;
    return n.slice(0, s).join("/") + "/" + r.slice(o).join("/")
}
const Yn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var al;
(function(t) {
    t.pop = "pop",
    t.push = "push"
}
)(al || (al = {}));
var Ma;
(function(t) {
    t.back = "back",
    t.forward = "forward",
    t.unknown = ""
}
)(Ma || (Ma = {}));
function KC(t) {
    if (!t)
        if (to) {
            const e = document.querySelector("base");
            t = e && e.getAttribute("href") || "/",
            t = t.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t),
    VC(t)
}
const GC = /^[^#]+#/;
function XC(t, e) {
    return t.replace(GC, "#") + e
}
function JC(t, e) {
    const n = document.documentElement.getBoundingClientRect()
      , r = t.getBoundingClientRect();
    return {
        behavior: e.behavior,
        left: r.left - n.left - (e.left || 0),
        top: r.top - n.top - (e.top || 0)
    }
}
const Uu = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function QC(t) {
    let e;
    if ("el"in t) {
        const n = t.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        e = JC(i, t)
    } else
        e = t;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY)
}
function sm(t, e) {
    return (history.state ? history.state.position - e : -1) + t
}
const Rd = new Map;
function ZC(t, e) {
    Rd.set(t, e)
}
function ek(t) {
    const e = Rd.get(t);
    return Rd.delete(t),
    e
}
let tk = () => location.protocol + "//" + location.host;
function v0(t, e) {
    const {pathname: n, search: r, hash: i} = e
      , s = t.indexOf("#");
    if (s > -1) {
        let a = i.includes(t.slice(s)) ? t.slice(s).length : 1
          , l = i.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        rm(l, "")
    }
    return rm(n, t) + r + i
}
function nk(t, e, n, r) {
    let i = []
      , s = []
      , o = null;
    const a = ({state: d}) => {
        const h = v0(t, location)
          , g = n.value
          , p = e.value;
        let v = 0;
        if (d) {
            if (n.value = h,
            e.value = d,
            o && o === g) {
                o = null;
                return
            }
            v = p ? d.position - p.position : 0
        } else
            r(h);
        i.forEach(y => {
            y(n.value, g, {
                delta: v,
                type: al.pop,
                direction: v ? v > 0 ? Ma.forward : Ma.back : Ma.unknown
            })
        }
        )
    }
    ;
    function l() {
        o = n.value
    }
    function u(d) {
        i.push(d);
        const h = () => {
            const g = i.indexOf(d);
            g > -1 && i.splice(g, 1)
        }
        ;
        return s.push(h),
        h
    }
    function c() {
        const {history: d} = window;
        d.state && d.replaceState(Be({}, d.state, {
            scroll: Uu()
        }), "")
    }
    function f() {
        for (const d of s)
            d();
        s = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: u,
        destroy: f
    }
}
function om(t, e, n, r=!1, i=!1) {
    return {
        back: t,
        current: e,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? Uu() : null
    }
}
function rk(t) {
    const {history: e, location: n} = window
      , r = {
        value: v0(t, n)
    }
      , i = {
        value: e.state
    };
    i.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function s(l, u, c) {
        const f = t.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + l : tk() + t + l;
        try {
            e[c ? "replaceState" : "pushState"](u, "", d),
            i.value = u
        } catch (h) {
            console.error(h),
            n[c ? "replace" : "assign"](d)
        }
    }
    function o(l, u) {
        const c = Be({}, e.state, om(i.value.back, l, i.value.forward, !0), u, {
            position: i.value.position
        });
        s(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = Be({}, i.value, e.state, {
            forward: l,
            scroll: Uu()
        });
        s(c.current, c, !0);
        const f = Be({}, om(r.value, l, null), {
            position: c.position + 1
        }, u);
        s(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: i,
        push: a,
        replace: o
    }
}
function ik(t) {
    t = KC(t);
    const e = rk(t)
      , n = nk(t, e.state, e.location, e.replace);
    function r(s, o=!0) {
        o || n.pauseListeners(),
        history.go(s)
    }
    const i = Be({
        location: "",
        base: t,
        go: r,
        createHref: XC.bind(null, t)
    }, e, n);
    return Object.defineProperty(i, "location", {
        enumerable: !0,
        get: () => e.location.value
    }),
    Object.defineProperty(i, "state", {
        enumerable: !0,
        get: () => e.state.value
    }),
    i
}
function sk(t) {
    return typeof t == "string" || t && typeof t == "object"
}
function b0(t) {
    return typeof t == "string" || typeof t == "symbol"
}
const w0 = Symbol("");
var am;
(function(t) {
    t[t.aborted = 4] = "aborted",
    t[t.cancelled = 8] = "cancelled",
    t[t.duplicated = 16] = "duplicated"
}
)(am || (am = {}));
function Mo(t, e) {
    return Be(new Error, {
        type: t,
        [w0]: !0
    }, e)
}
function Kr(t, e) {
    return t instanceof Error && w0 in t && (e == null || !!(t.type & e))
}
const lm = "[^/]+?"
  , ok = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , ak = /[.+*?^${}()[\]/\\]/g;
function lk(t, e) {
    const n = Be({}, ok, e)
      , r = [];
    let i = n.start ? "^" : "";
    const s = [];
    for (const u of t) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (i += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (i += "/"),
                i += d.value.replace(ak, "\\$&"),
                h += 40;
            else if (d.type === 1) {
                const {value: g, repeatable: p, optional: v, regexp: y} = d;
                s.push({
                    name: g,
                    repeatable: p,
                    optional: v
                });
                const b = y || lm;
                if (b !== lm) {
                    h += 10;
                    try {
                        new RegExp(`(${b})`)
                    } catch (_) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${b}): ` + _.message)
                    }
                }
                let m = p ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
                f || (m = v && u.length < 2 ? `(?:/${m})` : "/" + m),
                v && (m += "?"),
                i += m,
                h += 20,
                v && (h += -8),
                p && (h += -20),
                b === ".*" && (h += -50)
            }
            c.push(h)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (i += "/?"),
    n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
    const o = new RegExp(i,n.sensitive ? "" : "i");
    function a(u) {
        const c = u.match(o)
          , f = {};
        if (!c)
            return null;
        for (let d = 1; d < c.length; d++) {
            const h = c[d] || ""
              , g = s[d - 1];
            f[g.name] = h && g.repeatable ? h.split("/") : h
        }
        return f
    }
    function l(u) {
        let c = ""
          , f = !1;
        for (const d of t) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const h of d)
                if (h.type === 0)
                    c += h.value;
                else if (h.type === 1) {
                    const {value: g, repeatable: p, optional: v} = h
                      , y = g in u ? u[g] : "";
                    if (vr(y) && !p)
                        throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                    const b = vr(y) ? y.join("/") : y;
                    if (!b)
                        if (v)
                            d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${g}"`);
                    c += b
                }
        }
        return c || "/"
    }
    return {
        re: o,
        score: r,
        keys: s,
        parse: a,
        stringify: l
    }
}
function ck(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length; ) {
        const r = e[n] - t[n];
        if (r)
            return r;
        n++
    }
    return t.length < e.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0
}
function T0(t, e) {
    let n = 0;
    const r = t.score
      , i = e.score;
    for (; n < r.length && n < i.length; ) {
        const s = ck(r[n], i[n]);
        if (s)
            return s;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (cm(r))
            return 1;
        if (cm(i))
            return -1
    }
    return i.length - r.length
}
function cm(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0
}
const uk = {
    type: 0,
    value: ""
}
  , fk = /[a-zA-Z0-9_]/;
function dk(t) {
    if (!t)
        return [[]];
    if (t === "/")
        return [[uk]];
    if (!t.startsWith("/"))
        throw new Error(`Invalid path "${t}"`);
    function e(h) {
        throw new Error(`ERR (${n})/"${u}": ${h}`)
    }
    let n = 0
      , r = n;
    const i = [];
    let s;
    function o() {
        s && i.push(s),
        s = []
    }
    let a = 0, l, u = "", c = "";
    function f() {
        u && (n === 0 ? s.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        s.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : e("Invalid state to consume buffer"),
        u = "")
    }
    function d() {
        u += l
    }
    for (; a < t.length; ) {
        if (l = t[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (u && f(),
            o()) : l === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : fk.test(l) ? d() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            e("Unknown state");
            break
        }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${u}"`),
    f(),
    o(),
    i
}
function hk(t, e, n) {
    const r = lk(dk(t.path), n)
      , i = Be(r, {
        record: t,
        parent: e,
        children: [],
        alias: []
    });
    return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i),
    i
}
function pk(t, e) {
    const n = []
      , r = new Map;
    e = hm({
        strict: !1,
        end: !0,
        sensitive: !1
    }, e);
    function i(f) {
        return r.get(f)
    }
    function s(f, d, h) {
        const g = !h
          , p = fm(f);
        p.aliasOf = h && h.record;
        const v = hm(e, f)
          , y = [p];
        if ("alias"in f) {
            const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const w of _)
                y.push(fm(Be({}, p, {
                    components: h ? h.record.components : p.components,
                    path: w,
                    aliasOf: h ? h.record : p
                })))
        }
        let b, m;
        for (const _ of y) {
            const {path: w} = _;
            if (d && w[0] !== "/") {
                const E = d.record.path
                  , S = E[E.length - 1] === "/" ? "" : "/";
                _.path = d.record.path + (w && S + w)
            }
            if (b = hk(_, d, v),
            h ? h.alias.push(b) : (m = m || b,
            m !== b && m.alias.push(b),
            g && f.name && !dm(b) && o(f.name)),
            x0(b) && l(b),
            p.children) {
                const E = p.children;
                for (let S = 0; S < E.length; S++)
                    s(E[S], b, h && h.children[S])
            }
            h = h || b
        }
        return m ? () => {
            o(m)
        }
        : La
    }
    function o(f) {
        if (b0(f)) {
            const d = r.get(f);
            d && (r.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(o),
            d.alias.forEach(o))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && r.delete(f.record.name),
            f.children.forEach(o),
            f.alias.forEach(o))
        }
    }
    function a() {
        return n
    }
    function l(f) {
        const d = _k(f, n);
        n.splice(d, 0, f),
        f.record.name && !dm(f) && r.set(f.record.name, f)
    }
    function u(f, d) {
        let h, g = {}, p, v;
        if ("name"in f && f.name) {
            if (h = r.get(f.name),
            !h)
                throw Mo(1, {
                    location: f
                });
            v = h.record.name,
            g = Be(um(d.params, h.keys.filter(m => !m.optional).concat(h.parent ? h.parent.keys.filter(m => m.optional) : []).map(m => m.name)), f.params && um(f.params, h.keys.map(m => m.name))),
            p = h.stringify(g)
        } else if (f.path != null)
            p = f.path,
            h = n.find(m => m.re.test(p)),
            h && (g = h.parse(p),
            v = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(m => m.re.test(d.path)),
            !h)
                throw Mo(1, {
                    location: f,
                    currentLocation: d
                });
            v = h.record.name,
            g = Be({}, d.params, f.params),
            p = h.stringify(g)
        }
        const y = [];
        let b = h;
        for (; b; )
            y.unshift(b.record),
            b = b.parent;
        return {
            name: v,
            path: p,
            params: g,
            matched: y,
            meta: mk(y)
        }
    }
    t.forEach(f => s(f));
    function c() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: s,
        resolve: u,
        removeRoute: o,
        clearRoutes: c,
        getRoutes: a,
        getRecordMatcher: i
    }
}
function um(t, e) {
    const n = {};
    for (const r of e)
        r in t && (n[r] = t[r]);
    return n
}
function fm(t) {
    const e = {
        path: t.path,
        redirect: t.redirect,
        name: t.name,
        meta: t.meta || {},
        aliasOf: t.aliasOf,
        beforeEnter: t.beforeEnter,
        props: gk(t),
        children: t.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in t ? t.components || null : t.component && {
            default: t.component
        }
    };
    return Object.defineProperty(e, "mods", {
        value: {}
    }),
    e
}
function gk(t) {
    const e = {}
      , n = t.props || !1;
    if ("component"in t)
        e.default = n;
    else
        for (const r in t.components)
            e[r] = typeof n == "object" ? n[r] : n;
    return e
}
function dm(t) {
    for (; t; ) {
        if (t.record.aliasOf)
            return !0;
        t = t.parent
    }
    return !1
}
function mk(t) {
    return t.reduce( (e, n) => Be(e, n.meta), {})
}
function hm(t, e) {
    const n = {};
    for (const r in t)
        n[r] = r in e ? e[r] : t[r];
    return n
}
function _k(t, e) {
    let n = 0
      , r = e.length;
    for (; n !== r; ) {
        const s = n + r >> 1;
        T0(t, e[s]) < 0 ? r = s : n = s + 1
    }
    const i = yk(t);
    return i && (r = e.lastIndexOf(i, r - 1)),
    r
}
function yk(t) {
    let e = t;
    for (; e = e.parent; )
        if (x0(e) && T0(t, e) === 0)
            return e
}
function x0({record: t}) {
    return !!(t.name || t.components && Object.keys(t.components).length || t.redirect)
}
function vk(t) {
    const e = {};
    if (t === "" || t === "?")
        return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let i = 0; i < r.length; ++i) {
        const s = r[i].replace(p0, " ")
          , o = s.indexOf("=")
          , a = ol(o < 0 ? s : s.slice(0, o))
          , l = o < 0 ? null : ol(s.slice(o + 1));
        if (a in e) {
            let u = e[a];
            vr(u) || (u = e[a] = [u]),
            u.push(l)
        } else
            e[a] = l
    }
    return e
}
function pm(t) {
    let e = "";
    for (let n in t) {
        const r = t[n];
        if (n = jC(n),
        r == null) {
            r !== void 0 && (e += (e.length ? "&" : "") + n);
            continue
        }
        (vr(r) ? r.map(s => s && kd(s)) : [r && kd(r)]).forEach(s => {
            s !== void 0 && (e += (e.length ? "&" : "") + n,
            s != null && (e += "=" + s))
        }
        )
    }
    return e
}
function bk(t) {
    const e = {};
    for (const n in t) {
        const r = t[n];
        r !== void 0 && (e[n] = vr(r) ? r.map(i => i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return e
}
const wk = Symbol("")
  , gm = Symbol("")
  , ep = Symbol("")
  , tp = Symbol("")
  , Pd = Symbol("");
function sa() {
    let t = [];
    function e(r) {
        return t.push(r),
        () => {
            const i = t.indexOf(r);
            i > -1 && t.splice(i, 1)
        }
    }
    function n() {
        t = []
    }
    return {
        add: e,
        list: () => t.slice(),
        reset: n
    }
}
function ki(t, e, n, r, i, s=o => o()) {
    const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return () => new Promise( (a, l) => {
        const u = d => {
            d === !1 ? l(Mo(4, {
                from: n,
                to: e
            })) : d instanceof Error ? l(d) : sk(d) ? l(Mo(2, {
                from: e,
                to: d
            })) : (o && r.enterCallbacks[i] === o && typeof d == "function" && o.push(d),
            a())
        }
          , c = s( () => t.call(r && r.instances[i], e, n, u));
        let f = Promise.resolve(c);
        t.length < 3 && (f = f.then(u)),
        f.catch(d => l(d))
    }
    )
}
function bf(t, e, n, r, i=s => s()) {
    const s = [];
    for (const o of t)
        for (const a in o.components) {
            let l = o.components[a];
            if (!(e !== "beforeRouteEnter" && !o.instances[a]))
                if (d0(l)) {
                    const c = (l.__vccOpts || l)[e];
                    c && s.push(ki(c, n, r, o, a, i))
                } else {
                    let u = l();
                    s.push( () => u.then(c => {
                        if (!c)
                            throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
                        const f = RC(c) ? c.default : c;
                        o.mods[a] = c,
                        o.components[a] = f;
                        const h = (f.__vccOpts || f)[e];
                        return h && ki(h, n, r, o, a, i)()
                    }
                    ))
                }
        }
    return s
}
function mm(t) {
    const e = ut(ep)
      , n = ut(tp)
      , r = Ie( () => {
        const l = ee(t.to);
        return e.resolve(l)
    }
    )
      , i = Ie( () => {
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const d = f.findIndex(Lo.bind(null, c));
        if (d > -1)
            return d;
        const h = _m(l[u - 2]);
        return u > 1 && _m(c) === h && f[f.length - 1].path !== h ? f.findIndex(Lo.bind(null, l[u - 2])) : d
    }
    )
      , s = Ie( () => i.value > -1 && Ck(n.params, r.value.params))
      , o = Ie( () => i.value > -1 && i.value === n.matched.length - 1 && y0(n.params, r.value.params));
    function a(l={}) {
        if (Sk(l)) {
            const u = e[ee(t.replace) ? "replace" : "push"](ee(t.to)).catch(La);
            return t.viewTransition && typeof document < "u" && "startViewTransition"in document && document.startViewTransition( () => u),
            u
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: Ie( () => r.value.href),
        isActive: s,
        isExactActive: o,
        navigate: a
    }
}
function Tk(t) {
    return t.length === 1 ? t[0] : t
}
const xk = ke({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
        viewTransition: Boolean
    },
    useLink: mm,
    setup(t, {slots: e}) {
        const n = mr(mm(t))
          , {options: r} = ut(ep)
          , i = Ie( () => ({
            [ym(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [ym(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const s = e.default && Tk(e.default(n));
            return t.custom ? s : tt("a", {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, s)
        }
    }
})
  , Ek = xk;
function Sk(t) {
    if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
            const e = t.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(e))
                return
        }
        return t.preventDefault && t.preventDefault(),
        !0
    }
}
function Ck(t, e) {
    for (const n in e) {
        const r = e[n]
          , i = t[n];
        if (typeof r == "string") {
            if (r !== i)
                return !1
        } else if (!vr(i) || i.length !== r.length || r.some( (s, o) => s !== i[o]))
            return !1
    }
    return !0
}
function _m(t) {
    return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const ym = (t, e, n) => t ?? e ?? n
  , kk = ke({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(t, {attrs: e, slots: n}) {
        const r = ut(Pd)
          , i = Ie( () => t.route || r.value)
          , s = ut(gm, 0)
          , o = Ie( () => {
            let u = ee(s);
            const {matched: c} = i.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = Ie( () => i.value.matched[o.value]);
        Zn(gm, Ie( () => o.value + 1)),
        Zn(wk, a),
        Zn(Pd, i);
        const l = De();
        return zt( () => [l.value, a.value, t.name], ([u,c,f], [d,h,g]) => {
            c && (c.instances[f] = u,
            h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
            c.updateGuards.size || (c.updateGuards = h.updateGuards))),
            u && c && (!h || !Lo(c, h) || !d) && (c.enterCallbacks[f] || []).forEach(p => p(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = i.value
              , c = t.name
              , f = a.value
              , d = f && f.components[c];
            if (!d)
                return vm(n.default, {
                    Component: d,
                    route: u
                });
            const h = f.props[c]
              , g = h ? h === !0 ? u.params : typeof h == "function" ? h(u) : h : null
              , v = tt(d, Be({}, g, e, {
                onVnodeUnmounted: y => {
                    y.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return vm(n.default, {
                Component: v,
                route: u
            }) || v
        }
    }
});
function vm(t, e) {
    if (!t)
        return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n
}
const E0 = kk;
function Rk(t) {
    const e = pk(t.routes, t)
      , n = t.parseQuery || vk
      , r = t.stringifyQuery || pm
      , i = t.history
      , s = sa()
      , o = sa()
      , a = sa()
      , l = ko(Yn);
    let u = Yn;
    to && t.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = yf.bind(null, j => "" + j)
      , f = yf.bind(null, HC)
      , d = yf.bind(null, ol);
    function h(j, W) {
        let q, X;
        return b0(j) ? (q = e.getRecordMatcher(j),
        X = W) : X = j,
        e.addRoute(X, q)
    }
    function g(j) {
        const W = e.getRecordMatcher(j);
        W && e.removeRoute(W)
    }
    function p() {
        return e.getRoutes().map(j => j.record)
    }
    function v(j) {
        return !!e.getRecordMatcher(j)
    }
    function y(j, W) {
        if (W = Be({}, W || l.value),
        typeof j == "string") {
            const C = vf(n, j, W.path)
              , D = e.resolve({
                path: C.path
            }, W)
              , U = i.createHref(C.fullPath);
            return Be(C, D, {
                params: d(D.params),
                hash: ol(C.hash),
                redirectedFrom: void 0,
                href: U
            })
        }
        let q;
        if (j.path != null)
            q = Be({}, j, {
                path: vf(n, j.path, W.path).path
            });
        else {
            const C = Be({}, j.params);
            for (const D in C)
                C[D] == null && delete C[D];
            q = Be({}, j, {
                params: f(C)
            }),
            W.params = f(W.params)
        }
        const X = e.resolve(q, W)
          , se = j.hash || "";
        X.params = c(d(X.params));
        const _e = zC(r, Be({}, j, {
            hash: FC(se),
            path: X.path
        }))
          , T = i.createHref(_e);
        return Be({
            fullPath: _e,
            hash: se,
            query: r === pm ? bk(j.query) : j.query || {}
        }, X, {
            redirectedFrom: void 0,
            href: T
        })
    }
    function b(j) {
        return typeof j == "string" ? vf(n, j, l.value.path) : Be({}, j)
    }
    function m(j, W) {
        if (u !== j)
            return Mo(8, {
                from: W,
                to: j
            })
    }
    function _(j) {
        return S(j)
    }
    function w(j) {
        return _(Be(b(j), {
            replace: !0
        }))
    }
    function E(j) {
        const W = j.matched[j.matched.length - 1];
        if (W && W.redirect) {
            const {redirect: q} = W;
            let X = typeof q == "function" ? q(j) : q;
            return typeof X == "string" && (X = X.includes("?") || X.includes("#") ? X = b(X) : {
                path: X
            },
            X.params = {}),
            Be({
                query: j.query,
                hash: j.hash,
                params: X.path != null ? {} : j.params
            }, X)
        }
    }
    function S(j, W) {
        const q = u = y(j)
          , X = l.value
          , se = j.state
          , _e = j.force
          , T = j.replace === !0
          , C = E(q);
        if (C)
            return S(Be(b(C), {
                state: typeof C == "object" ? Be({}, se, C.state) : se,
                force: _e,
                replace: T
            }), W || q);
        const D = q;
        D.redirectedFrom = W;
        let U;
        return !_e && WC(r, X, q) && (U = Mo(16, {
            to: D,
            from: X
        }),
        ne(X, X, !0, !1)),
        (U ? Promise.resolve(U) : x(D, X)).catch(k => Kr(k) ? Kr(k, 2) ? k : $(k) : H(k, D, X)).then(k => {
            if (k) {
                if (Kr(k, 2))
                    return S(Be({
                        replace: T
                    }, b(k.to), {
                        state: typeof k.to == "object" ? Be({}, se, k.to.state) : se,
                        force: _e
                    }), W || D)
            } else
                k = R(D, X, !0, T, se);
            return M(D, X, k),
            k
        }
        )
    }
    function L(j, W) {
        const q = m(j, W);
        return q ? Promise.reject(q) : Promise.resolve()
    }
    function A(j) {
        const W = me.values().next().value;
        return W && typeof W.runWithContext == "function" ? W.runWithContext(j) : j()
    }
    function x(j, W) {
        let q;
        const [X,se,_e] = Pk(j, W);
        q = bf(X.reverse(), "beforeRouteLeave", j, W);
        for (const C of X)
            C.leaveGuards.forEach(D => {
                q.push(ki(D, j, W))
            }
            );
        const T = L.bind(null, j, W);
        return q.push(T),
        ae(q).then( () => {
            q = [];
            for (const C of s.list())
                q.push(ki(C, j, W));
            return q.push(T),
            ae(q)
        }
        ).then( () => {
            q = bf(se, "beforeRouteUpdate", j, W);
            for (const C of se)
                C.updateGuards.forEach(D => {
                    q.push(ki(D, j, W))
                }
                );
            return q.push(T),
            ae(q)
        }
        ).then( () => {
            q = [];
            for (const C of _e)
                if (C.beforeEnter)
                    if (vr(C.beforeEnter))
                        for (const D of C.beforeEnter)
                            q.push(ki(D, j, W));
                    else
                        q.push(ki(C.beforeEnter, j, W));
            return q.push(T),
            ae(q)
        }
        ).then( () => (j.matched.forEach(C => C.enterCallbacks = {}),
        q = bf(_e, "beforeRouteEnter", j, W, A),
        q.push(T),
        ae(q))).then( () => {
            q = [];
            for (const C of o.list())
                q.push(ki(C, j, W));
            return q.push(T),
            ae(q)
        }
        ).catch(C => Kr(C, 8) ? C : Promise.reject(C))
    }
    function M(j, W, q) {
        a.list().forEach(X => A( () => X(j, W, q)))
    }
    function R(j, W, q, X, se) {
        const _e = m(j, W);
        if (_e)
            return _e;
        const T = W === Yn
          , C = to ? history.state : {};
        q && (X || T ? i.replace(j.fullPath, Be({
            scroll: T && C && C.scroll
        }, se)) : i.push(j.fullPath, se)),
        l.value = j,
        ne(j, W, q, T),
        $()
    }
    let P;
    function O() {
        P || (P = i.listen( (j, W, q) => {
            if (!he.listening)
                return;
            const X = y(j)
              , se = E(X);
            if (se) {
                S(Be(se, {
                    replace: !0,
                    force: !0
                }), X).catch(La);
                return
            }
            u = X;
            const _e = l.value;
            to && ZC(sm(_e.fullPath, q.delta), Uu()),
            x(X, _e).catch(T => Kr(T, 12) ? T : Kr(T, 2) ? (S(Be(b(T.to), {
                force: !0
            }), X).then(C => {
                Kr(C, 20) && !q.delta && q.type === al.pop && i.go(-1, !1)
            }
            ).catch(La),
            Promise.reject()) : (q.delta && i.go(-q.delta, !1),
            H(T, X, _e))).then(T => {
                T = T || R(X, _e, !1),
                T && (q.delta && !Kr(T, 8) ? i.go(-q.delta, !1) : q.type === al.pop && Kr(T, 20) && i.go(-1, !1)),
                M(X, _e, T)
            }
            ).catch(La)
        }
        ))
    }
    let I = sa(), N = sa(), F;
    function H(j, W, q) {
        $(j);
        const X = N.list();
        return X.length ? X.forEach(se => se(j, W, q)) : console.error(j),
        Promise.reject(j)
    }
    function G() {
        return F && l.value !== Yn ? Promise.resolve() : new Promise( (j, W) => {
            I.add([j, W])
        }
        )
    }
    function $(j) {
        return F || (F = !j,
        O(),
        I.list().forEach( ([W,q]) => j ? q(j) : W()),
        I.reset()),
        j
    }
    function ne(j, W, q, X) {
        const {scrollBehavior: se} = t;
        if (!to || !se)
            return Promise.resolve();
        const _e = !q && ek(sm(j.fullPath, 0)) || (X || !q) && history.state && history.state.scroll || null;
        return nr().then( () => se(j, W, _e)).then(T => T && QC(T)).catch(T => H(T, j, W))
    }
    const ce = j => i.go(j);
    let ze;
    const me = new Set
      , he = {
        currentRoute: l,
        listening: !0,
        addRoute: h,
        removeRoute: g,
        clearRoutes: e.clearRoutes,
        hasRoute: v,
        getRoutes: p,
        resolve: y,
        options: t,
        push: _,
        replace: w,
        go: ce,
        back: () => ce(-1),
        forward: () => ce(1),
        beforeEach: s.add,
        beforeResolve: o.add,
        afterEach: a.add,
        onError: N.add,
        isReady: G,
        install(j) {
            const W = this;
            j.component("RouterLink", Ek),
            j.component("RouterView", E0),
            j.config.globalProperties.$router = W,
            Object.defineProperty(j.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => ee(l)
            }),
            to && !ze && l.value === Yn && (ze = !0,
            _(i.location).catch(se => {}
            ));
            const q = {};
            for (const se in Yn)
                Object.defineProperty(q, se, {
                    get: () => l.value[se],
                    enumerable: !0
                });
            j.provide(ep, W),
            j.provide(tp, si(q)),
            j.provide(Pd, l);
            const X = j.unmount;
            me.add(j),
            j.unmount = function() {
                me.delete(j),
                me.size < 1 && (u = Yn,
                P && P(),
                P = null,
                l.value = Yn,
                ze = !1,
                F = !1),
                X()
            }
        }
    };
    function ae(j) {
        return j.reduce( (W, q) => W.then( () => A(q)), Promise.resolve())
    }
    return he
}
function Pk(t, e) {
    const n = []
      , r = []
      , i = []
      , s = Math.max(e.matched.length, t.matched.length);
    for (let o = 0; o < s; o++) {
        const a = e.matched[o];
        a && (t.matched.find(u => Lo(u, a)) ? r.push(a) : n.push(a));
        const l = t.matched[o];
        l && (e.matched.find(u => Lo(u, l)) || i.push(l))
    }
    return [n, r, i]
}
function Ak(t) {
    return ut(tp)
}
const Ok = /(:\w+)\([^)]+\)/g
  , $k = /(:\w+)[?+*]/g
  , Lk = /:\w+/g
  , Mk = (t, e) => e.path.replace(Ok, "$1").replace($k, "$1").replace(Lk, n => {
    var r;
    return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Ad = (t, e) => {
    const n = t.route.matched.find(i => {
        var s;
        return ((s = i.components) == null ? void 0 : s.default) === t.Component.type
    }
    )
      , r = e ?? (n == null ? void 0 : n.meta.key) ?? (n && Mk(t.route, n));
    return typeof r == "function" ? r(t.route) : r
}
  , Ik = (t, e) => ({
    default: () => t ? tt(TT, t === !0 ? {} : t, e) : e
});
function np(t) {
    return Array.isArray(t) ? t : [t]
}
function Zr(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function S0(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Hn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Io = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, rp, Wt, et, Br = 1e8, sn = 1 / Br, Od = Math.PI * 2, Dk = Od / 4, Nk = 0, C0 = Math.sqrt, Fk = Math.cos, jk = Math.sin, Nt = function(e) {
    return typeof e == "string"
}, ct = function(e) {
    return typeof e == "function"
}, di = function(e) {
    return typeof e == "number"
}, ip = function(e) {
    return typeof e > "u"
}, Vr = function(e) {
    return typeof e == "object"
}, Sn = function(e) {
    return e !== !1
}, sp = function() {
    return typeof window < "u"
}, Vl = function(e) {
    return ct(e) || Nt(e)
}, k0 = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, on = Array.isArray, $d = /(?:-?\.?\d|\.)+/gi, R0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, so = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, wf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, P0 = /[+-]=-?[.\d]+/, A0 = /[^,'"\[\]\s]+/gi, Bk = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, it, Or, Ld, op, Vn = {}, ru = {}, O0, $0 = function(e) {
    return (ru = Do(e, Vn)) && Pn
}, ap = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, ll = function(e, n) {
    return !n && console.warn(e)
}, L0 = function(e, n) {
    return e && (Vn[e] = n) && ru && (ru[e] = n) || Vn
}, cl = function() {
    return 0
}, Hk = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, xc = {
    suppressEvents: !0,
    kill: !1
}, Uk = {
    suppressEvents: !0
}, lp = {}, Fi = [], Md = {}, M0, Mn = {}, Tf = {}, bm = 30, Ec = [], cp = "", up = function(e) {
    var n = e[0], r, i;
    if (Vr(n) || ct(n) || (e = [e]),
    !(r = (n._gsap || {}).harness)) {
        for (i = Ec.length; i-- && !Ec[i].targetTest(n); )
            ;
        r = Ec[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new ib(e[i],r))) || e.splice(i, 1);
    return e
}, Ss = function(e) {
    return e._gsap || up(Xn(e))[0]._gsap
}, I0 = function(e, n, r) {
    return (r = e[n]) && ct(r) ? e[n]() : ip(r) && e.getAttribute && e.getAttribute(n) || r
}, Cn = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
}, dt = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, yt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, _o = function(e, n) {
    var r = n.charAt(0)
      , i = parseFloat(n.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, Vk = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
        ;
    return i < r
}, iu = function() {
    var e = Fi.length, n = Fi.slice(0), r, i;
    for (Md = {},
    Fi.length = 0,
    r = 0; r < e; r++)
        i = n[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, fp = function(e) {
    return !!(e._initted || e._startAt || e.add)
}, D0 = function(e, n, r, i) {
    Fi.length && !Wt && iu(),
    e.render(n, r, !!(Wt && n < 0 && fp(e))),
    Fi.length && !Wt && iu()
}, N0 = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(A0).length < 2 ? n : Nt(e) ? e.trim() : e
}, F0 = function(e) {
    return e
}, zn = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, zk = function(e) {
    return function(n, r) {
        for (var i in r)
            i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
}, Do = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, wm = function t(e, n) {
    for (var r in n)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Vr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
}, su = function(e, n) {
    var r = {}, i;
    for (i in e)
        i in n || (r[i] = e[i]);
    return r
}, Ia = function(e) {
    var n = e.parent || it
      , r = e.keyframes ? zk(on(e.keyframes)) : zn;
    if (Sn(e.inherit))
        for (; n; )
            r(e, n.vars.defaults),
            n = n.parent || n._dp;
    return e
}, Wk = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
        ;
    return r < 0
}, j0 = function(e, n, r, i, s) {
    var o = e[i], a;
    if (s)
        for (a = n[s]; o && o[s] > a; )
            o = o._prev;
    return o ? (n._next = o._next,
    o._next = n) : (n._next = e[r],
    e[r] = n),
    n._next ? n._next._prev = n : e[i] = n,
    n._prev = o,
    n.parent = n._dp = e,
    n
}, Vu = function(e, n, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var s = n._prev
      , o = n._next;
    s ? s._next = o : e[r] === n && (e[r] = o),
    o ? o._prev = s : e[i] === n && (e[i] = s),
    n._next = n._prev = n.parent = null
}, qi = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Cs = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, qk = function(e) {
    for (var n = e.parent; n && n.parent; )
        n._dirty = 1,
        n.totalDuration(),
        n = n.parent;
    return e
}, Id = function(e, n, r, i) {
    return e._startAt && (Wt ? e._startAt.revert(xc) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
}, Yk = function t(e) {
    return !e || e._ts && t(e.parent)
}, Tm = function(e) {
    return e._repeat ? No(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, No = function(e, n) {
    var r = Math.floor(e = yt(e / n));
    return e && r === e ? r - 1 : r
}, ou = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, zu = function(e) {
    return e._end = yt(e._start + (e._tDur / Math.abs(e._ts || e._rts || sn) || 0))
}, Wu = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = yt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
    zu(e),
    r._dirty || Cs(r, e)),
    e
}, B0 = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = ou(e.rawTime(), n),
    (!n._dur || Cl(0, n.totalDuration(), r) - n._tTime > sn) && n.render(r, !0)),
    Cs(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -1e-8
    }
}, Lr = function(e, n, r, i) {
    return n.parent && qi(n),
    n._start = yt((di(r) ? r : r || e !== it ? qn(e, r, n) : e._time) + n._delay),
    n._end = yt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
    j0(e, n, "_first", "_last", e._sort ? "_start" : 0),
    Dd(n) || (e._recent = n),
    i || B0(e, n),
    e._ts < 0 && Wu(e, e._tTime),
    e
}, H0 = function(e, n) {
    return (Vn.ScrollTrigger || ap("scrollTrigger", n)) && Vn.ScrollTrigger.create(n, e)
}, U0 = function(e, n, r, i, s) {
    if (hp(e, n, s),
    !e._initted)
        return 1;
    if (!r && e._pt && !Wt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && M0 !== Fn.frame)
        return Fi.push(e),
        e._lazy = [s, i],
        1
}, Kk = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, Dd = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
}, Gk = function(e, n, r, i) {
    var s = e.ratio, o = n < 0 || !n && (!e._start && Kk(e) && !(!e._initted && Dd(e)) || (e._ts < 0 || e._dp._ts < 0) && !Dd(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, f;
    if (a && e._repeat && (l = Cl(0, e._tDur, n),
    c = No(l, a),
    e._yoyo && c & 1 && (o = 1 - o),
    c !== No(e._tTime, a) && (s = 1 - o,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    o !== s || Wt || i || e._zTime === sn || !n && e._zTime) {
        if (!e._initted && U0(e, n, i, r, l))
            return;
        for (f = e._zTime,
        e._zTime = n || (r ? sn : 0),
        r || (r = n && !f),
        e.ratio = o,
        e._from && (o = 1 - o),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(o, u.d),
            u = u._next;
        n < 0 && Id(e, n, r, !0),
        e._onUpdate && !r && Bn(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Bn(e, "onRepeat"),
        (n >= e._tDur || n < 0) && e.ratio === o && (o && qi(e, 1),
        !r && !Wt && (Bn(e, o ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = n)
}, Xk = function(e, n, r) {
    var i;
    if (r > n)
        for (i = e._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > n)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < n)
                return i;
            i = i._prev
        }
}, Fo = function(e, n, r, i) {
    var s = e._repeat
      , o = yt(n) || 0
      , a = e._tTime / e._tDur;
    return a && !i && (e._time *= o / e._dur),
    e._dur = o,
    e._tDur = s ? s < 0 ? 1e10 : yt(o * (s + 1) + e._rDelay * s) : o,
    a > 0 && !i && Wu(e, e._tTime = e._tDur * a),
    e.parent && zu(e),
    r || Cs(e.parent, e),
    e
}, xm = function(e) {
    return e instanceof yn ? Cs(e) : Fo(e, e._dur)
}, Jk = {
    _start: 0,
    endTime: cl,
    totalDuration: cl
}, qn = function t(e, n, r) {
    var i = e.labels, s = e._recent || Jk, o = e.duration() >= Br ? s.endTime(!1) : e._dur, a, l, u;
    return Nt(n) && (isNaN(n) || n in i) ? (l = n.charAt(0),
    u = n.substr(-1) === "%",
    a = n.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")),
    (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = o),
    i[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)),
    u && r && (l = l / 100 * (on(r) ? r[0] : r).totalDuration()),
    a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l)) : n == null ? o : +n
}, Da = function(e, n, r) {
    var i = di(n[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = n[s], a, l;
    if (i && (o.duration = n[1]),
    o.parent = r,
    e) {
        for (a = o,
        l = r; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = Sn(l.vars.inherit) && l.parent;
        o.immediateRender = Sn(a.immediateRender),
        e < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1]
    }
    return new _t(n[0],o,n[s + 1])
}, Qi = function(e, n) {
    return e || e === 0 ? n(e) : n
}, Cl = function(e, n, r) {
    return r < e ? e : r > n ? n : r
}, tn = function(e, n) {
    return !Nt(e) || !(n = Bk.exec(e)) ? "" : n[1]
}, Qk = function(e, n, r) {
    return Qi(r, function(i) {
        return Cl(e, n, i)
    })
}, Nd = [].slice, V0 = function(e, n) {
    return e && Vr(e) && "length"in e && (!n && !e.length || e.length - 1 in e && Vr(e[0])) && !e.nodeType && e !== Or
}, Zk = function(e, n, r) {
    return r === void 0 && (r = []),
    e.forEach(function(i) {
        var s;
        return Nt(i) && !n || V0(i, 1) ? (s = r).push.apply(s, Xn(i)) : r.push(i)
    }) || r
}, Xn = function(e, n, r) {
    return et && !n && et.selector ? et.selector(e) : Nt(e) && !r && (Ld || !jo()) ? Nd.call((n || op).querySelectorAll(e), 0) : on(e) ? Zk(e, r) : V0(e) ? Nd.call(e, 0) : e ? [e] : []
}, Fd = function(e) {
    return e = Xn(e)[0] || ll("Invalid scope") || {},
    function(n) {
        var r = e.current || e.nativeElement || e;
        return Xn(n, r.querySelectorAll ? r : r === e ? ll("Invalid scope") || op.createElement("div") : e)
    }
}, z0 = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, W0 = function(e) {
    if (ct(e))
        return e;
    var n = Vr(e) ? e : {
        each: e
    }
      , r = ks(n.ease)
      , i = n.from || 0
      , s = parseFloat(n.base) || 0
      , o = {}
      , a = i > 0 && i < 1
      , l = isNaN(i) || a
      , u = n.axis
      , c = i
      , f = i;
    return Nt(i) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !a && l && (c = i[0],
    f = i[1]),
    function(d, h, g) {
        var p = (g || n).length, v = o[p], y, b, m, _, w, E, S, L, A;
        if (!v) {
            if (A = n.grid === "auto" ? 0 : (n.grid || [1, Br])[1],
            !A) {
                for (S = -1e8; S < (S = g[A++].getBoundingClientRect().left) && A < p; )
                    ;
                A < p && A--
            }
            for (v = o[p] = [],
            y = l ? Math.min(A, p) * c - .5 : i % A,
            b = A === Br ? 0 : l ? p * f / A - .5 : i / A | 0,
            S = 0,
            L = Br,
            E = 0; E < p; E++)
                m = E % A - y,
                _ = b - (E / A | 0),
                v[E] = w = u ? Math.abs(u === "y" ? _ : m) : C0(m * m + _ * _),
                w > S && (S = w),
                w < L && (L = w);
            i === "random" && z0(v),
            v.max = S - L,
            v.min = L,
            v.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (A > p ? p - 1 : u ? u === "y" ? p / A : A : Math.max(A, p / A)) || 0) * (i === "edges" ? -1 : 1),
            v.b = p < 0 ? s - p : s,
            v.u = tn(n.amount || n.each) || 0,
            r = r && p < 0 ? tb(r) : r
        }
        return p = (v[d] - v.min) / v.max || 0,
        yt(v.b + (r ? r(p) : p) * v.v) + v.u
    }
}, jd = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var i = yt(Math.round(parseFloat(r) / e) * e * n);
        return (i - i % 1) / n + (di(r) ? 0 : tn(r))
    }
}, q0 = function(e, n) {
    var r = on(e), i, s;
    return !r && Vr(e) && (i = r = e.radius || Br,
    e.values ? (e = Xn(e.values),
    (s = !di(e[0])) && (i *= i)) : e = jd(e.increment)),
    Qi(n, r ? ct(e) ? function(o) {
        return s = e(o),
        Math.abs(s - o) <= i ? s : o
    }
    : function(o) {
        for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = Br, c = 0, f = e.length, d, h; f--; )
            s ? (d = e[f].x - a,
            h = e[f].y - l,
            d = d * d + h * h) : d = Math.abs(e[f] - a),
            d < u && (u = d,
            c = f);
        return c = !i || u <= i ? e[c] : o,
        s || c === o || di(o) ? c : c + tn(o)
    }
    : jd(e))
}, Y0 = function(e, n, r, i) {
    return Qi(on(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
        return on(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
}, eR = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
    return function(i) {
        return n.reduce(function(s, o) {
            return o(s)
        }, i)
    }
}, tR = function(e, n) {
    return function(r) {
        return e(parseFloat(r)) + (n || tn(r))
    }
}, nR = function(e, n, r) {
    return G0(e, n, 0, 1, r)
}, K0 = function(e, n, r) {
    return Qi(r, function(i) {
        return e[~~n(i)]
    })
}, rR = function t(e, n, r) {
    var i = n - e;
    return on(e) ? K0(e, t(0, e.length), n) : Qi(r, function(s) {
        return (i + (s - e) % i) % i + e
    })
}, iR = function t(e, n, r) {
    var i = n - e
      , s = i * 2;
    return on(e) ? K0(e, t(0, e.length - 1), n) : Qi(r, function(o) {
        return o = (s + (o - e) % s) % s || 0,
        e + (o > i ? s - o : o)
    })
}, ul = function(e) {
    for (var n = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", n)); )
        o = e.indexOf(")", i),
        a = e.charAt(i + 7) === "[",
        s = e.substr(i + 7, o - i - 7).match(a ? A0 : $d),
        r += e.substr(n, i - n) + Y0(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5),
        n = o + 1;
    return r + e.substr(n, e.length - n)
}, G0 = function(e, n, r, i, s) {
    var o = n - e
      , a = i - r;
    return Qi(s, function(l) {
        return r + ((l - e) / o * a || 0)
    })
}, sR = function t(e, n, r, i) {
    var s = isNaN(e + n) ? 0 : function(h) {
        return (1 - h) * e + h * n
    }
    ;
    if (!s) {
        var o = Nt(e), a = {}, l, u, c, f, d;
        if (r === !0 && (i = 1) && (r = null),
        o)
            e = {
                p: e
            },
            n = {
                p: n
            };
        else if (on(e) && !on(n)) {
            for (c = [],
            f = e.length,
            d = f - 2,
            u = 1; u < f; u++)
                c.push(t(e[u - 1], e[u]));
            f--,
            s = function(g) {
                g *= f;
                var p = Math.min(d, ~~g);
                return c[p](g - p)
            }
            ,
            r = n
        } else
            i || (e = Do(on(e) ? [] : {}, e));
        if (!c) {
            for (l in n)
                dp.call(a, e, l, "get", n[l]);
            s = function(g) {
                return mp(g, a) || (o ? e.p : e)
            }
        }
    }
    return Qi(r, s)
}, Em = function(e, n, r) {
    var i = e.labels, s = Br, o, a, l;
    for (o in i)
        a = i[o] - n,
        a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o,
        s = a);
    return l
}, Bn = function(e, n, r) {
    var i = e.vars, s = i[n], o = et, a = e._ctx, l, u, c;
    if (s)
        return l = i[n + "Params"],
        u = i.callbackScope || e,
        r && Fi.length && iu(),
        a && (et = a),
        c = l ? s.apply(u, l) : s.call(u),
        et = o,
        c
}, ga = function(e) {
    return qi(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Wt),
    e.progress() < 1 && Bn(e, "onInterrupt"),
    e
}, oo, X0 = [], J0 = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        sp() || e.headless) {
            var n = e.name
              , r = ct(e)
              , i = n && !r && e.init ? function() {
                this._props = []
            }
            : e
              , s = {
                init: cl,
                render: mp,
                add: dp,
                kill: wR,
                modifier: bR,
                rawVars: 0
            }
              , o = {
                targetTest: 0,
                get: 0,
                getSetter: gp,
                aliases: {},
                register: 0
            };
            if (jo(),
            e !== i) {
                if (Mn[n])
                    return;
                zn(i, zn(su(e, s), o)),
                Do(i.prototype, Do(s, su(e, o))),
                Mn[i.prop = n] = i,
                e.targetTest && (Ec.push(i),
                lp[n] = 1),
                n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
            }
            L0(n, i),
            e.register && e.register(Pn, i, kn)
        } else
            X0.push(e)
}, qe = 255, ma = {
    aqua: [0, qe, qe],
    lime: [0, qe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, qe],
    navy: [0, 0, 128],
    white: [qe, qe, qe],
    olive: [128, 128, 0],
    yellow: [qe, qe, 0],
    orange: [qe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [qe, 0, 0],
    pink: [qe, 192, 203],
    cyan: [0, qe, qe],
    transparent: [qe, qe, qe, 0]
}, xf = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * qe + .5 | 0
}, Q0 = function(e, n, r) {
    var i = e ? di(e) ? [e >> 16, e >> 8 & qe, e & qe] : 0 : ma.black, s, o, a, l, u, c, f, d, h, g;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        ma[e])
            i = ma[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (s = e.charAt(1),
            o = e.charAt(2),
            a = e.charAt(3),
            e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & qe, i & qe, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & qe, e & qe]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = g = e.match($d),
            !n)
                l = +i[0] % 360 / 360,
                u = +i[1] / 100,
                c = +i[2] / 100,
                o = c <= .5 ? c * (u + 1) : c + u - c * u,
                s = c * 2 - o,
                i.length > 3 && (i[3] *= 1),
                i[0] = xf(l + 1 / 3, s, o),
                i[1] = xf(l, s, o),
                i[2] = xf(l - 1 / 3, s, o);
            else if (~e.indexOf("="))
                return i = e.match(R0),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match($d) || ma.transparent;
        i = i.map(Number)
    }
    return n && !g && (s = i[0] / qe,
    o = i[1] / qe,
    a = i[2] / qe,
    f = Math.max(s, o, a),
    d = Math.min(s, o, a),
    c = (f + d) / 2,
    f === d ? l = u = 0 : (h = f - d,
    u = c > .5 ? h / (2 - f - d) : h / (f + d),
    l = f === s ? (o - a) / h + (o < a ? 6 : 0) : f === o ? (a - s) / h + 2 : (s - o) / h + 4,
    l *= 60),
    i[0] = ~~(l + .5),
    i[1] = ~~(u * 100 + .5),
    i[2] = ~~(c * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, Z0 = function(e) {
    var n = []
      , r = []
      , i = -1;
    return e.split(ji).forEach(function(s) {
        var o = s.match(so) || [];
        n.push.apply(n, o),
        r.push(i += o.length + 1)
    }),
    n.c = r,
    n
}, Sm = function(e, n, r) {
    var i = "", s = (e + i).match(ji), o = n ? "hsla(" : "rgba(", a = 0, l, u, c, f;
    if (!s)
        return e;
    if (s = s.map(function(d) {
        return (d = Q0(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
    }),
    r && (c = Z0(e),
    l = r.c,
    l.join(i) !== c.c.join(i)))
        for (u = e.replace(ji, "1").split(so),
        f = u.length - 1; a < f; a++)
            i += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
    if (!u)
        for (u = e.split(ji),
        f = u.length - 1; a < f; a++)
            i += u[a] + s[a];
    return i + u[f]
}, ji = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in ma)
        t += "|" + e + "\\b";
    return new RegExp(t + ")","gi")
}(), oR = /hsl[a]?\(/, eb = function(e) {
    var n = e.join(" "), r;
    if (ji.lastIndex = 0,
    ji.test(n))
        return r = oR.test(n),
        e[1] = Sm(e[1], r),
        e[0] = Sm(e[0], r, Z0(e[1])),
        !0
}, fl, Fn = function() {
    var t = Date.now, e = 500, n = 33, r = t(), i = r, s = 1e3 / 240, o = s, a = [], l, u, c, f, d, h, g = function p(v) {
        var y = t() - i, b = v === !0, m, _, w, E;
        if ((y > e || y < 0) && (r += y - n),
        i += y,
        w = i - r,
        m = w - o,
        (m > 0 || b) && (E = ++f.frame,
        d = w - f.time * 1e3,
        f.time = w = w / 1e3,
        o += m + (m >= s ? 4 : s - m),
        _ = 1),
        b || (l = u(p)),
        _)
            for (h = 0; h < a.length; h++)
                a[h](w, d, E, v)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            g(!0)
        },
        deltaRatio: function(v) {
            return d / (1e3 / (v || 60))
        },
        wake: function() {
            O0 && (!Ld && sp() && (Or = Ld = window,
            op = Or.document || {},
            Vn.gsap = Pn,
            (Or.gsapVersions || (Or.gsapVersions = [])).push(Pn.version),
            $0(ru || Or.GreenSockGlobals || !Or.gsap && Or || {}),
            X0.forEach(J0)),
            c = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            l && f.sleep(),
            u = c || function(v) {
                return setTimeout(v, o - f.time * 1e3 + 1 | 0)
            }
            ,
            fl = 1,
            g(2))
        },
        sleep: function() {
            (c ? cancelAnimationFrame : clearTimeout)(l),
            fl = 0,
            u = cl
        },
        lagSmoothing: function(v, y) {
            e = v || 1 / 0,
            n = Math.min(y || 33, e)
        },
        fps: function(v) {
            s = 1e3 / (v || 240),
            o = f.time * 1e3 + s
        },
        add: function(v, y, b) {
            var m = y ? function(_, w, E, S) {
                v(_, w, E, S),
                f.remove(m)
            }
            : v;
            return f.remove(v),
            a[b ? "unshift" : "push"](m),
            jo(),
            m
        },
        remove: function(v, y) {
            ~(y = a.indexOf(v)) && a.splice(y, 1) && h >= y && h--
        },
        _listeners: a
    },
    f
}(), jo = function() {
    return !fl && Fn.wake()
}, Ae = {}, aR = /^[\d.\-M][\d.\-,\s]/, lR = /["']/g, cR = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
        l = r[s],
        a = s !== o - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        n[i] = isNaN(u) ? u.replace(lR, "").trim() : +u,
        i = l.substr(a + 1).trim();
    return n
}, uR = function(e) {
    var n = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, fR = function(e) {
    var n = (e + "").split("(")
      , r = Ae[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [cR(n[1])] : uR(e).split(",").map(N0)) : Ae._CE && aR.test(e) ? Ae._CE("", e) : r
}, tb = function(e) {
    return function(n) {
        return 1 - e(1 - n)
    }
}, nb = function t(e, n) {
    for (var r = e._first, i; r; )
        r instanceof yn ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = n)),
        r = r._next
}, ks = function(e, n) {
    return e && (ct(e) ? e : Ae[e] || fR(e)) || n
}, zs = function(e, n, r, i) {
    r === void 0 && (r = function(l) {
        return 1 - n(1 - l)
    }
    ),
    i === void 0 && (i = function(l) {
        return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
    }
    );
    var s = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
    }, o;
    return Cn(e, function(a) {
        Ae[a] = Vn[a] = s,
        Ae[o = a.toLowerCase()] = r;
        for (var l in s)
            Ae[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ae[a + "." + l] = s[l]
    }),
    s
}, rb = function(e) {
    return function(n) {
        return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
}, Ef = function t(e, n, r) {
    var i = n >= 1 ? n : 1
      , s = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
      , o = s / Od * (Math.asin(1 / i) || 0)
      , a = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * jk((c - o) * s) + 1
    }
      , l = e === "out" ? a : e === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : rb(a);
    return s = Od / s,
    l.config = function(u, c) {
        return t(e, u, c)
    }
    ,
    l
}, Sf = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
    }
      , i = e === "out" ? r : e === "in" ? function(s) {
        return 1 - r(1 - s)
    }
    : rb(r);
    return i.config = function(s) {
        return t(e, s)
    }
    ,
    i
};
Cn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    zs(t + ",Power" + (n - 1), e ? function(r) {
        return Math.pow(r, n)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn;
zs("Elastic", Ef("in"), Ef("out"), Ef());
(function(t, e) {
    var n = 1 / e
      , r = 2 * n
      , i = 2.5 * n
      , s = function(a) {
        return a < n ? t * a * a : a < r ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
    };
    zs("Bounce", function(o) {
        return 1 - s(1 - o)
    }, s)
}
)(7.5625, 2.75);
zs("Expo", function(t) {
    return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
});
zs("Circ", function(t) {
    return -(C0(1 - t * t) - 1)
});
zs("Sine", function(t) {
    return t === 1 ? 1 : -Fk(t * Dk) + 1
});
zs("Back", Sf("in"), Sf("out"), Sf());
Ae.SteppedEase = Ae.steps = Vn.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , i = e + (n ? 0 : 1)
          , s = n ? 1 : 0
          , o = 1 - sn;
        return function(a) {
            return ((i * Cl(0, o, a) | 0) + s) * r
        }
    }
};
Io.ease = Ae["quad.out"];
Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return cp += t + "," + t + "Params,"
});
var ib = function(e, n) {
    this.id = Nk++,
    e._gsap = this,
    this.target = e,
    this.harness = n,
    this.get = n ? n.get : I0,
    this.set = n ? n.getSetter : gp
}
  , dl = function() {
    function t(n) {
        this.vars = n,
        this._delay = +n.delay || 0,
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
        this._yoyo = !!n.yoyo || !!n.yoyoEase),
        this._ts = 1,
        Fo(this, +n.duration, 1, 1),
        this.data = n.data,
        et && (this._ctx = et,
        et.data.push(this)),
        fl || Fn.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        Fo(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, i) {
        if (jo(),
        !arguments.length)
            return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
            for (Wu(this, r),
            !s._dp || s.parent || B0(s, this); s && s.parent; )
                s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0),
                s = s.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Lr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === sn || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        D0(this, r, i)),
        this
    }
    ,
    e.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Tm(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    e.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Tm(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(r, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? No(this._tTime, s) + 1 : 1
    }
    ,
    e.timeScale = function(r, i) {
        if (!arguments.length)
            return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var s = this.parent && this._ts ? ou(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -1e-8 ? 0 : this._rts,
        this.totalTime(Cl(-Math.abs(this._delay), this.totalDuration(), s), i !== !1),
        zu(this),
        qk(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (jo(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== sn && (this._tTime -= sn)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && Lr(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (Sn(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ou(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = Uk);
        var i = Wt;
        return Wt = r,
        fp(this) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Wt = i,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            s = i._start + s / (Math.abs(i._ts) || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : s
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        xm(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            xm(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, i) {
        return this.totalTime(qn(this, r), Sn(i))
    }
    ,
    e.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Sn(i)),
        this._dur || (this._zTime = -1e-8),
        this
    }
    ,
    e.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -1e-8 : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -1e-8,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, i = this._start, s;
        return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - sn)
    }
    ,
    e.eventCallback = function(r, i, s) {
        var o = this.vars;
        return arguments.length > 1 ? (i ? (o[r] = i,
        s && (o[r + "Params"] = s),
        r === "onUpdate" && (this._onUpdate = i)) : delete o[r],
        this) : o[r]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(s) {
            var o = ct(r) ? r : F0
              , a = function() {
                var u = i.then;
                i.then = null,
                ct(o) && (o = o(i)) && (o.then || o === i) && (i.then = u),
                s(o),
                i.then = u
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
        }
        )
    }
    ,
    e.kill = function() {
        ga(this)
    }
    ,
    t
}();
zn(dl.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var yn = function(t) {
    S0(e, t);
    function e(r, i) {
        var s;
        return r === void 0 && (r = {}),
        s = t.call(this, r) || this,
        s.labels = {},
        s.smoothChildTiming = !!r.smoothChildTiming,
        s.autoRemoveChildren = !!r.autoRemoveChildren,
        s._sort = Sn(r.sortChildren),
        it && Lr(r.parent || it, Zr(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && H0(Zr(s), r.scrollTrigger),
        s
    }
    var n = e.prototype;
    return n.to = function(i, s, o) {
        return Da(0, arguments, this),
        this
    }
    ,
    n.from = function(i, s, o) {
        return Da(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(i, s, o, a) {
        return Da(2, arguments, this),
        this
    }
    ,
    n.set = function(i, s, o) {
        return s.duration = 0,
        s.parent = this,
        Ia(s).repeatDelay || (s.repeat = 0),
        s.immediateRender = !!s.immediateRender,
        new _t(i,s,qn(this, o),1),
        this
    }
    ,
    n.call = function(i, s, o) {
        return Lr(this, _t.delayedCall(0, i, s), o)
    }
    ,
    n.staggerTo = function(i, s, o, a, l, u, c) {
        return o.duration = s,
        o.stagger = o.stagger || a,
        o.onComplete = u,
        o.onCompleteParams = c,
        o.parent = this,
        new _t(i,o,qn(this, l)),
        this
    }
    ,
    n.staggerFrom = function(i, s, o, a, l, u, c) {
        return o.runBackwards = 1,
        Ia(o).immediateRender = Sn(o.immediateRender),
        this.staggerTo(i, s, o, a, l, u, c)
    }
    ,
    n.staggerFromTo = function(i, s, o, a, l, u, c, f) {
        return a.startAt = o,
        Ia(a).immediateRender = Sn(a.immediateRender),
        this.staggerTo(i, s, a, l, u, c, f)
    }
    ,
    n.render = function(i, s, o) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : yt(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), d, h, g, p, v, y, b, m, _, w, E, S;
        if (this !== it && c > l && i >= 0 && (c = l),
        c !== this._tTime || o || f) {
            if (a !== this._time && u && (c += this._time - a,
            i += this._time - a),
            d = c,
            _ = this._start,
            m = this._ts,
            y = !m,
            f && (u || (a = this._zTime),
            (i || !s) && (this._zTime = i)),
            this._repeat) {
                if (E = this._yoyo,
                v = u + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(v * 100 + i, s, o);
                if (d = yt(c % v),
                c === l ? (p = this._repeat,
                d = u) : (w = yt(c / v),
                p = ~~w,
                p && p === w && (d = u,
                p--),
                d > u && (d = u)),
                w = No(this._tTime, v),
                !a && this._tTime && w !== p && this._tTime - w * v - this._dur <= 0 && (w = p),
                E && p & 1 && (d = u - d,
                S = 1),
                p !== w && !this._lock) {
                    var L = E && w & 1
                      , A = L === (E && p & 1);
                    if (p < w && (L = !L),
                    a = L ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(a || (S ? 0 : yt(p * v)), s, !u)._lock = 0,
                    this._tTime = c,
                    !s && this.parent && Bn(this, "onRepeat"),
                    this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                    a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    A && (this._lock = 2,
                    a = L ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !S && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !y)
                        return this;
                    nb(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (b = Xk(this, yt(a), yt(d)),
            b && (c -= d - (d = b._start))),
            this._tTime = c,
            this._time = d,
            this._act = !m,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            a = 0),
            !a && c && !s && !w && (Bn(this, "onStart"),
            this._tTime !== c))
                return this;
            if (d >= a && i >= 0)
                for (h = this._first; h; ) {
                    if (g = h._next,
                    (h._act || d >= h._start) && h._ts && b !== h) {
                        if (h.parent !== this)
                            return this.render(i, s, o);
                        if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, s, o),
                        d !== this._time || !this._ts && !y) {
                            b = 0,
                            g && (c += this._zTime = -1e-8);
                            break
                        }
                    }
                    h = g
                }
            else {
                h = this._last;
                for (var x = i < 0 ? i : d; h; ) {
                    if (g = h._prev,
                    (h._act || x <= h._end) && h._ts && b !== h) {
                        if (h.parent !== this)
                            return this.render(i, s, o);
                        if (h.render(h._ts > 0 ? (x - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (x - h._start) * h._ts, s, o || Wt && fp(h)),
                        d !== this._time || !this._ts && !y) {
                            b = 0,
                            g && (c += this._zTime = x ? -1e-8 : sn);
                            break
                        }
                    }
                    h = g
                }
            }
            if (b && !s && (this.pause(),
            b.render(d >= a ? 0 : -1e-8)._zTime = d >= a ? 1 : -1,
            this._ts))
                return this._start = _,
                zu(this),
                this.render(i, s, o);
            this._onUpdate && !s && Bn(this, "onUpdate", !0),
            (c === l && this._tTime >= this.totalDuration() || !c && a) && (_ === this._start || Math.abs(m) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && qi(this, 1),
            !s && !(i < 0 && !a) && (c || a || !l) && (Bn(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(i, s) {
        var o = this;
        if (di(s) || (s = qn(this, s, i)),
        !(i instanceof dl)) {
            if (on(i))
                return i.forEach(function(a) {
                    return o.add(a, s)
                }),
                this;
            if (Nt(i))
                return this.addLabel(i, s);
            if (ct(i))
                i = _t.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? Lr(this, i, s) : this
    }
    ,
    n.getChildren = function(i, s, o, a) {
        i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -1e8);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof _t ? s && l.push(u) : (o && l.push(u),
            i && l.push.apply(l, u.getChildren(!0, s, o)))),
            u = u._next;
        return l
    }
    ,
    n.getById = function(i) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
            if (s[o].vars.id === i)
                return s[o]
    }
    ,
    n.remove = function(i) {
        return Nt(i) ? this.removeLabel(i) : ct(i) ? this.killTweensOf(i) : (i.parent === this && Vu(this, i),
        i === this._recent && (this._recent = this._last),
        Cs(this))
    }
    ,
    n.totalTime = function(i, s) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = yt(Fn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        t.prototype.totalTime.call(this, i, s),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(i, s) {
        return this.labels[i] = qn(this, s),
        this
    }
    ,
    n.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    n.addPause = function(i, s, o) {
        var a = _t.delayedCall(0, s || cl, o);
        return a.data = "isPause",
        this._hasPause = 1,
        Lr(this, a, qn(this, i))
    }
    ,
    n.removePause = function(i) {
        var s = this._first;
        for (i = qn(this, i); s; )
            s._start === i && s.data === "isPause" && qi(s),
            s = s._next
    }
    ,
    n.killTweensOf = function(i, s, o) {
        for (var a = this.getTweensOf(i, o), l = a.length; l--; )
            Ai !== a[l] && a[l].kill(i, s);
        return this
    }
    ,
    n.getTweensOf = function(i, s) {
        for (var o = [], a = Xn(i), l = this._first, u = di(s), c; l; )
            l instanceof _t ? Vk(l._targets, a) && (u ? (!Ai || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
            l = l._next;
        return o
    }
    ,
    n.tweenTo = function(i, s) {
        s = s || {};
        var o = this, a = qn(o, i), l = s, u = l.startAt, c = l.onStart, f = l.onStartParams, d = l.immediateRender, h, g = _t.to(o, zn({
            ease: s.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: s.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale()) || sn,
            onStart: function() {
                if (o.pause(),
                !h) {
                    var v = s.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale());
                    g._dur !== v && Fo(g, v, 0, 1).render(g._time, !0, !0),
                    h = 1
                }
                c && c.apply(g, f || [])
            }
        }, s));
        return d ? g.render(0) : g
    }
    ,
    n.tweenFromTo = function(i, s, o) {
        return this.tweenTo(s, zn({
            startAt: {
                time: qn(this, i)
            }
        }, o))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        Em(this, qn(this, i))
    }
    ,
    n.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        Em(this, qn(this, i), 1)
    }
    ,
    n.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + sn)
    }
    ,
    n.shiftChildren = function(i, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= o && (a._start += i,
            a._end += i),
            a = a._next;
        if (s)
            for (u in l)
                l[u] >= o && (l[u] += i);
        return Cs(this)
    }
    ,
    n.invalidate = function(i) {
        var s = this._first;
        for (this._lock = 0; s; )
            s.invalidate(i),
            s = s._next;
        return t.prototype.invalidate.call(this, i)
    }
    ,
    n.clear = function(i) {
        i === void 0 && (i = !0);
        for (var s = this._first, o; s; )
            o = s._next,
            this.remove(s),
            s = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Cs(this)
    }
    ,
    n.totalDuration = function(i) {
        var s = 0, o = this, a = o._last, l = Br, u, c, f;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
        if (o._dirty) {
            for (f = o.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                c = a._start,
                c > l && o._sort && a._ts && !o._lock ? (o._lock = 1,
                Lr(o, a, c - a._delay, 1)._lock = 0) : l = c,
                c < 0 && a._ts && (s -= c,
                (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts,
                o._time -= c,
                o._tTime -= c),
                o.shiftChildren(-c, !1, -1 / 0),
                l = 0),
                a._end > s && a._ts && (s = a._end),
                a = u;
            Fo(o, o === it && o._time > s ? o._time : s, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (it._ts && (D0(it, ou(i, it)),
        M0 = Fn.frame),
        Fn.frame >= bm) {
            bm += Hn.autoSleep || 120;
            var s = it._first;
            if ((!s || !s._ts) && Hn.autoSleep && Fn._listeners.length < 2) {
                for (; s && !s._ts; )
                    s = s._next;
                s || Fn.sleep()
            }
        }
    }
    ,
    e
}(dl);
zn(yn.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var dR = function(e, n, r, i, s, o, a) {
    var l = new kn(this._pt,e,n,0,1,ub,null,s), u = 0, c = 0, f, d, h, g, p, v, y, b;
    for (l.b = r,
    l.e = i,
    r += "",
    i += "",
    (y = ~i.indexOf("random(")) && (i = ul(i)),
    o && (b = [r, i],
    o(b, e, n),
    r = b[0],
    i = b[1]),
    d = r.match(wf) || []; f = wf.exec(i); )
        g = f[0],
        p = i.substring(u, f.index),
        h ? h = (h + 1) % 5 : p.substr(-5) === "rgba(" && (h = 1),
        g !== d[c++] && (v = parseFloat(d[c - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: v,
            c: g.charAt(1) === "=" ? _o(v, g) - v : parseFloat(g) - v,
            m: h && h < 4 ? Math.round : 0
        },
        u = wf.lastIndex);
    return l.c = u < i.length ? i.substring(u, i.length) : "",
    l.fp = a,
    (P0.test(i) || y) && (l.e = 0),
    this._pt = l,
    l
}, dp = function(e, n, r, i, s, o, a, l, u, c) {
    ct(i) && (i = i(s || 0, e, o));
    var f = e[n], d = r !== "get" ? r : ct(f) ? u ? e[n.indexOf("set") || !ct(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, h = ct(f) ? u ? _R : lb : pp, g;
    if (Nt(i) && (~i.indexOf("random(") && (i = ul(i)),
    i.charAt(1) === "=" && (g = _o(d, i) + (tn(d) || 0),
    (g || g === 0) && (i = g))),
    !c || d !== i || Bd)
        return !isNaN(d * i) && i !== "" ? (g = new kn(this._pt,e,n,+d || 0,i - (d || 0),typeof f == "boolean" ? vR : cb,0,h),
        u && (g.fp = u),
        a && g.modifier(a, this, e),
        this._pt = g) : (!f && !(n in e) && ap(n, i),
        dR.call(this, e, n, d, i, h, l || Hn.stringFilter, u))
}, hR = function(e, n, r, i, s) {
    if (ct(e) && (e = Na(e, s, n, r, i)),
    !Vr(e) || e.style && e.nodeType || on(e) || k0(e))
        return Nt(e) ? Na(e, s, n, r, i) : e;
    var o = {}, a;
    for (a in e)
        o[a] = Na(e[a], s, n, r, i);
    return o
}, sb = function(e, n, r, i, s, o) {
    var a, l, u, c;
    if (Mn[e] && (a = new Mn[e]).init(s, a.rawVars ? n[e] : hR(n[e], i, s, o, r), r, i, o) !== !1 && (r._pt = l = new kn(r._pt,s,e,0,1,a.render,a,0,a.priority),
    r !== oo))
        for (u = r._ptLookup[r._targets.indexOf(s)],
        c = a._props.length; c--; )
            u[a._props[c]] = l;
    return a
}, Ai, Bd, hp = function t(e, n, r) {
    var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, f = i.yoyoEase, d = i.keyframes, h = i.autoRevert, g = e._dur, p = e._startAt, v = e._targets, y = e.parent, b = y && y.data === "nested" ? y.vars.targets : v, m = e._overwrite === "auto" && !rp, _ = e.timeline, w, E, S, L, A, x, M, R, P, O, I, N, F;
    if (_ && (!d || !s) && (s = "none"),
    e._ease = ks(s, Io.ease),
    e._yEase = f ? tb(ks(f === !0 ? s : f, Io.ease)) : 0,
    f && e._yoyo && !e._repeat && (f = e._yEase,
    e._yEase = e._ease,
    e._ease = f),
    e._from = !_ && !!i.runBackwards,
    !_ || d && !i.stagger) {
        if (R = v[0] ? Ss(v[0]).harness : 0,
        N = R && i[R.prop],
        w = su(i, lp),
        p && (p._zTime < 0 && p.progress(1),
        n < 0 && c && a && !h ? p.render(-1, !0) : p.revert(c && g ? xc : Hk),
        p._lazy = 0),
        o) {
            if (qi(e._startAt = _t.set(v, zn({
                data: "isStart",
                overwrite: !1,
                parent: y,
                immediateRender: !0,
                lazy: !p && Sn(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return Bn(e, "onUpdate")
                }
                ,
                stagger: 0
            }, o))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Wt || !a && !h) && e._startAt.revert(xc),
            a && g && n <= 0 && r <= 0) {
                n && (e._zTime = n);
                return
            }
        } else if (c && g && !p) {
            if (n && (a = !1),
            S = zn({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && Sn(l),
                immediateRender: a,
                stagger: 0,
                parent: y
            }, w),
            N && (S[R.prop] = N),
            qi(e._startAt = _t.set(v, S)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Wt ? e._startAt.revert(xc) : e._startAt.render(-1, !0)),
            e._zTime = n,
            !a)
                t(e._startAt, sn, sn);
            else if (!n)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = g && Sn(l) || l && !g,
        E = 0; E < v.length; E++) {
            if (A = v[E],
            M = A._gsap || up(v)[E]._gsap,
            e._ptLookup[E] = O = {},
            Md[M.id] && Fi.length && iu(),
            I = b === v ? E : b.indexOf(A),
            R && (P = new R).init(A, N || w, e, I, b) !== !1 && (e._pt = L = new kn(e._pt,A,P.name,0,1,P.render,P,0,P.priority),
            P._props.forEach(function(H) {
                O[H] = L
            }),
            P.priority && (x = 1)),
            !R || N)
                for (S in w)
                    Mn[S] && (P = sb(S, w, e, I, A, b)) ? P.priority && (x = 1) : O[S] = L = dp.call(e, A, S, "get", w[S], I, b, 0, i.stringFilter);
            e._op && e._op[E] && e.kill(A, e._op[E]),
            m && e._pt && (Ai = e,
            it.killTweensOf(A, O, e.globalTime(n)),
            F = !e.parent,
            Ai = 0),
            e._pt && l && (Md[M.id] = 1)
        }
        x && fb(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !F,
    d && n <= 0 && _.render(Br, !0, !0)
}, pR = function(e, n, r, i, s, o, a, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[n], c, f, d, h;
    if (!u)
        for (u = e._ptCache[n] = [],
        d = e._ptLookup,
        h = e._targets.length; h--; ) {
            if (c = d[h][n],
            c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== n && c.fp !== n; )
                    c = c._next;
            if (!c)
                return Bd = 1,
                e.vars[n] = "+=0",
                hp(e, a),
                Bd = 0,
                l ? ll(n + " not eligible for reset") : 1;
            u.push(c)
        }
    for (h = u.length; h--; )
        f = u[h],
        c = f._pt || f,
        c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c,
        c.c = r - c.s,
        f.e && (f.e = dt(r) + tn(f.e)),
        f.b && (f.b = c.s + tn(f.b))
}, gR = function(e, n) {
    var r = e[0] ? Ss(e[0]).harness : 0, i = r && r.aliases, s, o, a, l;
    if (!i)
        return n;
    s = Do({}, n);
    for (o in i)
        if (o in s)
            for (l = i[o].split(","),
            a = l.length; a--; )
                s[l[a]] = s[o];
    return s
}, mR = function(e, n, r, i) {
    var s = n.ease || i || "power1.inOut", o, a;
    if (on(n))
        a = r[e] || (r[e] = []),
        n.forEach(function(l, u) {
            return a.push({
                t: u / (n.length - 1) * 100,
                v: l,
                e: s
            })
        });
    else
        for (o in n)
            a = r[o] || (r[o] = []),
            o === "ease" || a.push({
                t: parseFloat(e),
                v: n[o],
                e: s
            })
}, Na = function(e, n, r, i, s) {
    return ct(e) ? e.call(n, r, i, s) : Nt(e) && ~e.indexOf("random(") ? ul(e) : e
}, ob = cp + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ab = {};
Cn(ob + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return ab[t] = 1
});
var _t = function(t) {
    S0(e, t);
    function e(r, i, s, o) {
        var a;
        typeof i == "number" && (s.duration = i,
        i = s,
        s = null),
        a = t.call(this, o ? i : Ia(i)) || this;
        var l = a.vars, u = l.duration, c = l.delay, f = l.immediateRender, d = l.stagger, h = l.overwrite, g = l.keyframes, p = l.defaults, v = l.scrollTrigger, y = l.yoyoEase, b = i.parent || it, m = (on(r) || k0(r) ? di(r[0]) : "length"in i) ? [r] : Xn(r), _, w, E, S, L, A, x, M;
        if (a._targets = m.length ? up(m) : ll("GSAP target " + r + " not found. https://gsap.com", !Hn.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = h,
        g || d || Vl(u) || Vl(c)) {
            if (i = a.vars,
            _ = a.timeline = new yn({
                data: "nested",
                defaults: p || {},
                targets: b && b.data === "nested" ? b.vars.targets : m
            }),
            _.kill(),
            _.parent = _._dp = Zr(a),
            _._start = 0,
            d || Vl(u) || Vl(c)) {
                if (S = m.length,
                x = d && W0(d),
                Vr(d))
                    for (L in d)
                        ~ob.indexOf(L) && (M || (M = {}),
                        M[L] = d[L]);
                for (w = 0; w < S; w++)
                    E = su(i, ab),
                    E.stagger = 0,
                    y && (E.yoyoEase = y),
                    M && Do(E, M),
                    A = m[w],
                    E.duration = +Na(u, Zr(a), w, A, m),
                    E.delay = (+Na(c, Zr(a), w, A, m) || 0) - a._delay,
                    !d && S === 1 && E.delay && (a._delay = c = E.delay,
                    a._start += c,
                    E.delay = 0),
                    _.to(A, E, x ? x(w, A, m) : 0),
                    _._ease = Ae.none;
                _.duration() ? u = c = 0 : a.timeline = 0
            } else if (g) {
                Ia(zn(_.vars.defaults, {
                    ease: "none"
                })),
                _._ease = ks(g.ease || i.ease || "none");
                var R = 0, P, O, I;
                if (on(g))
                    g.forEach(function(N) {
                        return _.to(m, N, ">")
                    }),
                    _.duration();
                else {
                    E = {};
                    for (L in g)
                        L === "ease" || L === "easeEach" || mR(L, g[L], E, g.easeEach);
                    for (L in E)
                        for (P = E[L].sort(function(N, F) {
                            return N.t - F.t
                        }),
                        R = 0,
                        w = 0; w < P.length; w++)
                            O = P[w],
                            I = {
                                ease: O.e,
                                duration: (O.t - (w ? P[w - 1].t : 0)) / 100 * u
                            },
                            I[L] = O.v,
                            _.to(m, I, R),
                            R += I.duration;
                    _.duration() < u && _.to({}, {
                        duration: u - _.duration()
                    })
                }
            }
            u || a.duration(u = _.duration())
        } else
            a.timeline = 0;
        return h === !0 && !rp && (Ai = Zr(a),
        it.killTweensOf(m),
        Ai = 0),
        Lr(b, Zr(a), s),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (f || !u && !g && a._start === yt(b._time) && Sn(f) && Yk(Zr(a)) && b.data !== "nested") && (a._tTime = -1e-8,
        a.render(Math.max(0, -c) || 0)),
        v && H0(Zr(a), v),
        a
    }
    var n = e.prototype;
    return n.render = function(i, s, o) {
        var a = this._time, l = this._tDur, u = this._dur, c = i < 0, f = i > l - sn && !c ? l : i < sn ? 0 : i, d, h, g, p, v, y, b, m, _;
        if (!u)
            Gk(this, i, s, o);
        else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
            if (d = f,
            m = this.timeline,
            this._repeat) {
                if (p = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(p * 100 + i, s, o);
                if (d = yt(f % p),
                f === l ? (g = this._repeat,
                d = u) : (v = yt(f / p),
                g = ~~v,
                g && g === v ? (d = u,
                g--) : d > u && (d = u)),
                y = this._yoyo && g & 1,
                y && (_ = this._yEase,
                d = u - d),
                v = No(this._tTime, p),
                d === a && !o && this._initted && g === v)
                    return this._tTime = f,
                    this;
                g !== v && (m && this._yEase && nb(m, y),
                this.vars.repeatRefresh && !y && !this._lock && d !== p && this._initted && (this._lock = o = 1,
                this.render(yt(p * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (U0(this, c ? i : d, o, s, f))
                    return this._tTime = 0,
                    this;
                if (a !== this._time && !(o && this.vars.repeatRefresh && g !== v))
                    return this;
                if (u !== this._dur)
                    return this.render(i, s, o)
            }
            if (this._tTime = f,
            this._time = d,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = b = (_ || this._ease)(d / u),
            this._from && (this.ratio = b = 1 - b),
            !a && f && !s && !v && (Bn(this, "onStart"),
            this._tTime !== f))
                return this;
            for (h = this._pt; h; )
                h.r(b, h.d),
                h = h._next;
            m && m.render(i < 0 ? i : m._dur * m._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i),
            this._onUpdate && !s && (c && Id(this, i, s, o),
            Bn(this, "onUpdate")),
            this._repeat && g !== v && this.vars.onRepeat && !s && this.parent && Bn(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Id(this, i, !0, !0),
            (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && qi(this, 1),
            !s && !(c && !a) && (f || a || y) && (Bn(this, f === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
    }
    ,
    n.resetTo = function(i, s, o, a, l) {
        fl || Fn.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || hp(this, u),
        c = this._ease(u / this._dur),
        pR(this, i, s, o, a, c, u, l) ? this.resetTo(i, s, o, a, 1) : (Wu(this, 0),
        this.parent || j0(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(i, s) {
        if (s === void 0 && (s = "all"),
        !i && (!s || s === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? ga(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Wt),
            this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, s, Ai && Ai.vars.overwrite !== !0)._first || ga(this),
            this.parent && o !== this.timeline.totalDuration() && Fo(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var a = this._targets, l = i ? Xn(i) : a, u = this._ptLookup, c = this._pt, f, d, h, g, p, v, y;
        if ((!s || s === "all") && Wk(a, l))
            return s === "all" && (this._pt = 0),
            ga(this);
        for (f = this._op = this._op || [],
        s !== "all" && (Nt(s) && (p = {},
        Cn(s, function(b) {
            return p[b] = 1
        }),
        s = p),
        s = gR(a, s)),
        y = a.length; y--; )
            if (~l.indexOf(a[y])) {
                d = u[y],
                s === "all" ? (f[y] = s,
                g = d,
                h = {}) : (h = f[y] = f[y] || {},
                g = s);
                for (p in g)
                    v = d && d[p],
                    v && ((!("kill"in v.d) || v.d.kill(p) === !0) && Vu(this, v, "_pt"),
                    delete d[p]),
                    h !== "all" && (h[p] = 1)
            }
        return this._initted && !this._pt && c && ga(this),
        this
    }
    ,
    e.to = function(i, s) {
        return new e(i,s,arguments[2])
    }
    ,
    e.from = function(i, s) {
        return Da(1, arguments)
    }
    ,
    e.delayedCall = function(i, s, o, a) {
        return new e(s,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: s,
            onReverseComplete: s,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(i, s, o) {
        return Da(2, arguments)
    }
    ,
    e.set = function(i, s) {
        return s.duration = 0,
        s.repeatDelay || (s.repeat = 0),
        new e(i,s)
    }
    ,
    e.killTweensOf = function(i, s, o) {
        return it.killTweensOf(i, s, o)
    }
    ,
    e
}(dl);
zn(_t.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Cn("staggerTo,staggerFrom,staggerFromTo", function(t) {
    _t[t] = function() {
        var e = new yn
          , n = Nd.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
        e[t].apply(e, n)
    }
});
var pp = function(e, n, r) {
    return e[n] = r
}
  , lb = function(e, n, r) {
    return e[n](r)
}
  , _R = function(e, n, r, i) {
    return e[n](i.fp, r)
}
  , yR = function(e, n, r) {
    return e.setAttribute(n, r)
}
  , gp = function(e, n) {
    return ct(e[n]) ? lb : ip(e[n]) && e.setAttribute ? yR : pp
}
  , cb = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
  , vR = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
  , ub = function(e, n) {
    var r = n._pt
      , i = "";
    if (!e && n.b)
        i = n.b;
    else if (e === 1 && n.e)
        i = n.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
            r = r._next;
        i += n.c
    }
    n.set(n.t, n.p, i, n)
}
  , mp = function(e, n) {
    for (var r = n._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , bR = function(e, n, r, i) {
    for (var s = this._pt, o; s; )
        o = s._next,
        s.p === i && s.modifier(e, n, r),
        s = o
}
  , wR = function(e) {
    for (var n = this._pt, r, i; n; )
        i = n._next,
        n.p === e && !n.op || n.op === e ? Vu(this, n, "_pt") : n.dep || (r = 1),
        n = i;
    return !r
}
  , TR = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
}
  , fb = function(e) {
    for (var n = e._pt, r, i, s, o; n; ) {
        for (r = n._next,
        i = s; i && i.pr > n.pr; )
            i = i._next;
        (n._prev = i ? i._prev : o) ? n._prev._next = n : s = n,
        (n._next = i) ? i._prev = n : o = n,
        n = r
    }
    e._pt = s
}
  , kn = function() {
    function t(n, r, i, s, o, a, l, u, c) {
        this.t = r,
        this.s = s,
        this.c = o,
        this.p = i,
        this.r = a || cb,
        this.d = l || this,
        this.set = u || pp,
        this.pr = c || 0,
        this._next = n,
        n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, s) {
        this.mSet = this.mSet || this.set,
        this.set = TR,
        this.m = r,
        this.mt = s,
        this.tween = i
    }
    ,
    t
}();
Cn(cp + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return lp[t] = 1
});
Vn.TweenMax = Vn.TweenLite = _t;
Vn.TimelineLite = Vn.TimelineMax = yn;
it = new yn({
    sortChildren: !1,
    defaults: Io,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Hn.stringFilter = eb;
var Rs = []
  , Sc = {}
  , xR = []
  , Cm = 0
  , ER = 0
  , Cf = function(e) {
    return (Sc[e] || xR).map(function(n) {
        return n()
    })
}
  , Hd = function() {
    var e = Date.now()
      , n = [];
    e - Cm > 2 && (Cf("matchMediaInit"),
    Rs.forEach(function(r) {
        var i = r.queries, s = r.conditions, o, a, l, u;
        for (a in i)
            o = Or.matchMedia(i[a]).matches,
            o && (l = 1),
            o !== s[a] && (s[a] = o,
            u = 1);
        u && (r.revert(),
        l && n.push(r))
    }),
    Cf("matchMediaRevert"),
    n.forEach(function(r) {
        return r.onMatch(r, function(i) {
            return r.add(null, i)
        })
    }),
    Cm = e,
    Cf("matchMedia"))
}
  , db = function() {
    function t(n, r) {
        this.selector = r && Fd(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = ER++,
        n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
        ct(r) && (s = i,
        i = r,
        r = ct);
        var o = this
          , a = function() {
            var u = et, c = o.selector, f;
            return u && u !== o && u.data.push(o),
            s && (o.selector = Fd(s)),
            et = o,
            f = i.apply(o, arguments),
            ct(f) && o._r.push(f),
            et = u,
            o.selector = c,
            o.isReverted = !1,
            f
        };
        return o.last = a,
        r === ct ? a(o, function(l) {
            return o.add(null, l)
        }) : r ? o[r] = a : a
    }
    ,
    e.ignore = function(r) {
        var i = et;
        et = null,
        r(this),
        et = i
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof _t && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, i) {
        var s = this;
        if (r ? function() {
            for (var a = s.getTweens(), l = s.data.length, u; l--; )
                u = s.data[l],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(c) {
                    return a.splice(a.indexOf(c), 1)
                }));
            for (a.map(function(c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function(c, f) {
                return f.g - c.g || -1 / 0
            }).forEach(function(c) {
                return c.t.revert(r)
            }),
            l = s.data.length; l--; )
                u = s.data[l],
                u instanceof yn ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof _t) && u.revert && u.revert(r);
            s._r.forEach(function(c) {
                return c(r, s)
            }),
            s.isReverted = !0
        }() : this.data.forEach(function(a) {
            return a.kill && a.kill()
        }),
        this.clear(),
        i)
            for (var o = Rs.length; o--; )
                Rs[o].id === this.id && Rs.splice(o, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t
}()
  , SR = function() {
    function t(n) {
        this.contexts = [],
        this.scope = n,
        et && et.data.push(this)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
        Vr(r) || (r = {
            matches: r
        });
        var o = new db(0,s || this.scope), a = o.conditions = {}, l, u, c;
        et && !o.selector && (o.selector = et.selector),
        this.contexts.push(o),
        i = o.add("onMatch", i),
        o.queries = r;
        for (u in r)
            u === "all" ? c = 1 : (l = Or.matchMedia(r[u]),
            l && (Rs.indexOf(o) < 0 && Rs.push(o),
            (a[u] = l.matches) && (c = 1),
            l.addListener ? l.addListener(Hd) : l.addEventListener("change", Hd)));
        return c && i(o, function(f) {
            return o.add(null, f)
        }),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    t
}()
  , au = {
    registerPlugin: function() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
        n.forEach(function(i) {
            return J0(i)
        })
    },
    timeline: function(e) {
        return new yn(e)
    },
    getTweensOf: function(e, n) {
        return it.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
        Nt(e) && (e = Xn(e)[0]);
        var s = Ss(e || {}).get
          , o = r ? F0 : N0;
        return r === "native" && (r = ""),
        e && (n ? o((Mn[n] && Mn[n].get || s)(e, n, r, i)) : function(a, l, u) {
            return o((Mn[a] && Mn[a].get || s)(e, a, l, u))
        }
        )
    },
    quickSetter: function(e, n, r) {
        if (e = Xn(e),
        e.length > 1) {
            var i = e.map(function(c) {
                return Pn.quickSetter(c, n, r)
            })
              , s = i.length;
            return function(c) {
                for (var f = s; f--; )
                    i[f](c)
            }
        }
        e = e[0] || {};
        var o = Mn[n]
          , a = Ss(e)
          , l = a.harness && (a.harness.aliases || {})[n] || n
          , u = o ? function(c) {
            var f = new o;
            oo._pt = 0,
            f.init(e, r ? c + r : c, oo, 0, [e]),
            f.render(1, f),
            oo._pt && mp(1, oo)
        }
        : a.set(e, l);
        return o ? u : function(c) {
            return u(e, l, r ? c + r : c, a, 1)
        }
    },
    quickTo: function(e, n, r) {
        var i, s = Pn.to(e, zn((i = {},
        i[n] = "+=0.1",
        i.paused = !0,
        i.stagger = 0,
        i), r || {})), o = function(l, u, c) {
            return s.resetTo(n, l, u, c)
        };
        return o.tween = s,
        o
    },
    isTweening: function(e) {
        return it.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = ks(e.ease, Io.ease)),
        wm(Io, e || {})
    },
    config: function(e) {
        return wm(Hn, e || {})
    },
    registerEffect: function(e) {
        var n = e.name
          , r = e.effect
          , i = e.plugins
          , s = e.defaults
          , o = e.extendTimeline;
        (i || "").split(",").forEach(function(a) {
            return a && !Mn[a] && !Vn[a] && ll(n + " effect requires " + a + " plugin.")
        }),
        Tf[n] = function(a, l, u) {
            return r(Xn(a), zn(l || {}, s), u)
        }
        ,
        o && (yn.prototype[n] = function(a, l, u) {
            return this.add(Tf[n](a, Vr(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, n) {
        Ae[e] = ks(n)
    },
    parseEase: function(e, n) {
        return arguments.length ? ks(e, n) : Ae
    },
    getById: function(e) {
        return it.getById(e)
    },
    exportRoot: function(e, n) {
        e === void 0 && (e = {});
        var r = new yn(e), i, s;
        for (r.smoothChildTiming = Sn(e.smoothChildTiming),
        it.remove(r),
        r._dp = 0,
        r._time = r._tTime = it._time,
        i = it._first; i; )
            s = i._next,
            (n || !(!i._dur && i instanceof _t && i.vars.onComplete === i._targets[0])) && Lr(r, i, i._start - i._delay),
            i = s;
        return Lr(it, r, 0),
        r
    },
    context: function(e, n) {
        return e ? new db(e,n) : et
    },
    matchMedia: function(e) {
        return new SR(e)
    },
    matchMediaRefresh: function() {
        return Rs.forEach(function(e) {
            var n = e.conditions, r, i;
            for (i in n)
                n[i] && (n[i] = !1,
                r = 1);
            r && e.revert()
        }) || Hd()
    },
    addEventListener: function(e, n) {
        var r = Sc[e] || (Sc[e] = []);
        ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
        var r = Sc[e]
          , i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: rR,
        wrapYoyo: iR,
        distribute: W0,
        random: Y0,
        snap: q0,
        normalize: nR,
        getUnit: tn,
        clamp: Qk,
        splitColor: Q0,
        toArray: Xn,
        selector: Fd,
        mapRange: G0,
        pipe: eR,
        unitize: tR,
        interpolate: sR,
        shuffle: z0
    },
    install: $0,
    effects: Tf,
    ticker: Fn,
    updateRoot: yn.updateRoot,
    plugins: Mn,
    globalTimeline: it,
    core: {
        PropTween: kn,
        globals: L0,
        Tween: _t,
        Timeline: yn,
        Animation: dl,
        getCache: Ss,
        _removeLinkedListItem: Vu,
        reverting: function() {
            return Wt
        },
        context: function(e) {
            return e && et && (et.data.push(e),
            e._ctx = et),
            et
        },
        suppressOverwrites: function(e) {
            return rp = e
        }
    }
};
Cn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return au[t] = _t[t]
});
Fn.add(yn.updateRoot);
oo = au.to({}, {
    duration: 0
});
var CR = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
    return r
}
  , kR = function(e, n) {
    var r = e._targets, i, s, o;
    for (i in n)
        for (s = r.length; s--; )
            o = e._ptLookup[s][i],
            o && (o = o.d) && (o._pt && (o = CR(o, i)),
            o && o.modifier && o.modifier(n[i], e, r[s], i))
}
  , kf = function(e, n) {
    return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function(i, s, o) {
            o._onInit = function(a) {
                var l, u;
                if (Nt(s) && (l = {},
                Cn(s, function(c) {
                    return l[c] = 1
                }),
                s = l),
                n) {
                    l = {};
                    for (u in s)
                        l[u] = n(s[u]);
                    s = l
                }
                kR(a, s)
            }
        }
    }
}
  , Pn = au.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, s) {
        var o, a, l;
        this.tween = r;
        for (o in n)
            l = e.getAttribute(o) || "",
            a = this.add(e, "setAttribute", (l || 0) + "", n[o], i, s, 0, 0, o),
            a.op = o,
            a.b = l,
            this._props.push(o)
    },
    render: function(e, n) {
        for (var r = n._pt; r; )
            Wt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    headless: 1,
    init: function(e, n) {
        for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
}, kf("roundProps", jd), kf("modifiers"), kf("snap", q0)) || au;
_t.version = yn.version = Pn.version = "3.13.0";
O0 = 1;
sp() && jo();
Ae.Power0;
Ae.Power1;
Ae.Power2;
Ae.Power3;
Ae.Power4;
Ae.Linear;
Ae.Quad;
Ae.Cubic;
Ae.Quart;
Ae.Quint;
Ae.Strong;
Ae.Elastic;
Ae.Back;
Ae.SteppedEase;
Ae.Bounce;
Ae.Sine;
Ae.Expo;
Ae.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var km, Oi, yo, _p, ps, Rm, yp, RR = function() {
    return typeof window < "u"
}, hi = {}, us = 180 / Math.PI, vo = Math.PI / 180, Gs = Math.atan2, Pm = 1e8, vp = /([A-Z])/g, PR = /(left|right|width|margin|padding|x)/i, AR = /[\s,\(]\S/, Mr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Ud = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, OR = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, $R = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, LR = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, hb = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
}, pb = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, MR = function(e, n, r) {
    return e.style[n] = r
}, IR = function(e, n, r) {
    return e.style.setProperty(n, r)
}, DR = function(e, n, r) {
    return e._gsap[n] = r
}, NR = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, FR = function(e, n, r, i, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = r,
    o.renderTransform(s, o)
}, jR = function(e, n, r, i, s) {
    var o = e._gsap;
    o[n] = r,
    o.renderTransform(s, o)
}, st = "transform", Rn = st + "Origin", BR = function t(e, n) {
    var r = this
      , i = this.target
      , s = i.style
      , o = i._gsap;
    if (e in hi && s) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = Mr[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                return r.tfm[a] = ei(i, a)
            }) : this.tfm[e] = o.x ? o[e] : ei(i, e),
            e === Rn && (this.tfm.zOrigin = o.zOrigin);
        else
            return Mr.transform.split(",").forEach(function(a) {
                return t.call(r, a, n)
            });
        if (this.props.indexOf(st) >= 0)
            return;
        o.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(Rn, n, "")),
        e = st
    }
    (s || n) && this.props.push(e, n, s[e])
}, gb = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, HR = function() {
    var e = this.props, n = this.target, r = n.style, i = n._gsap, s, o;
    for (s = 0; s < e.length; s += 3)
        e[s + 1] ? e[s + 1] === 2 ? n[e[s]](e[s + 2]) : n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(vp, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            i[o] = this.tfm[o];
        i.svg && (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        s = yp(),
        (!s || !s.isStart) && !r[st] && (gb(r),
        i.zOrigin && r[Rn] && (r[Rn] += " " + i.zOrigin + "px",
        i.zOrigin = 0,
        i.renderTransform()),
        i.uncache = 1)
    }
}, mb = function(e, n) {
    var r = {
        target: e,
        props: [],
        revert: HR,
        save: BR
    };
    return e._gsap || Pn.core.getCache(e),
    n && e.style && e.nodeType && n.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, _b, Vd = function(e, n) {
    var r = Oi.createElementNS ? Oi.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Oi.createElement(e);
    return r && r.style ? r : Oi.createElement(e)
}, Jn = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(vp, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Bo(n) || n, 1) || ""
}, Am = "O,Moz,ms,Ms,Webkit".split(","), Bo = function(e, n, r) {
    var i = n || ps
      , s = i.style
      , o = 5;
    if (e in s && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Am[o] + e in s); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Am[o] : "") + e
}, zd = function() {
    RR() && window.document && (km = window,
    Oi = km.document,
    yo = Oi.documentElement,
    ps = Vd("div") || {
        style: {}
    },
    Vd("div"),
    st = Bo(st),
    Rn = st + "Origin",
    ps.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    _b = !!Bo("perspective"),
    yp = Pn.core.reverting,
    _p = 1)
}, Om = function(e) {
    var n = e.ownerSVGElement, r = Vd("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), s;
    i.style.display = "block",
    r.appendChild(i),
    yo.appendChild(r);
    try {
        s = i.getBBox()
    } catch {}
    return r.removeChild(i),
    yo.removeChild(r),
    s
}, $m = function(e, n) {
    for (var r = n.length; r--; )
        if (e.hasAttribute(n[r]))
            return e.getAttribute(n[r])
}, yb = function(e) {
    var n, r;
    try {
        n = e.getBBox()
    } catch {
        n = Om(e),
        r = 1
    }
    return n && (n.width || n.height) || r || (n = Om(e)),
    n && !n.width && !n.x && !n.y ? {
        x: +$m(e, ["x", "cx", "x1"]) || 0,
        y: +$m(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : n
}, vb = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && yb(e))
}, Ds = function(e, n) {
    if (n) {
        var r = e.style, i;
        n in hi && n !== Rn && (n = st),
        r.removeProperty ? (i = n.substr(0, 2),
        (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
        r.removeProperty(i === "--" ? n : n.replace(vp, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
}, $i = function(e, n, r, i, s, o) {
    var a = new kn(e._pt,n,r,0,1,o ? pb : hb);
    return e._pt = a,
    a.b = i,
    a.e = s,
    e._props.push(r),
    a
}, Lm = {
    deg: 1,
    rad: 1,
    turn: 1
}, UR = {
    grid: 1,
    flex: 1
}, Yi = function t(e, n, r, i) {
    var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = ps.style, l = PR.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, d = i === "px", h = i === "%", g, p, v, y;
    if (i === o || !s || Lm[i] || Lm[o])
        return s;
    if (o !== "px" && !d && (s = t(e, n, r, "px")),
    y = e.getCTM && vb(e),
    (h || o === "%") && (hi[n] || ~n.indexOf("adius")))
        return g = y ? e.getBBox()[l ? "width" : "height"] : e[c],
        dt(h ? s / g * f : s / 100 * g);
    if (a[l ? "width" : "height"] = f + (d ? o : i),
    p = i !== "rem" && ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode,
    y && (p = (e.ownerSVGElement || {}).parentNode),
    (!p || p === Oi || !p.appendChild) && (p = Oi.body),
    v = p._gsap,
    v && h && v.width && l && v.time === Fn.time && !v.uncache)
        return dt(s / v.width * f);
    if (h && (n === "height" || n === "width")) {
        var b = e.style[n];
        e.style[n] = f + i,
        g = e[c],
        b ? e.style[n] = b : Ds(e, n)
    } else
        (h || o === "%") && !UR[Jn(p, "display")] && (a.position = Jn(e, "position")),
        p === e && (a.position = "static"),
        p.appendChild(ps),
        g = ps[c],
        p.removeChild(ps),
        a.position = "absolute";
    return l && h && (v = Ss(p),
    v.time = Fn.time,
    v.width = p[c]),
    dt(d ? g * s / f : g && s ? f / g * s : 0)
}, ei = function(e, n, r, i) {
    var s;
    return _p || zd(),
    n in Mr && n !== "transform" && (n = Mr[n],
    ~n.indexOf(",") && (n = n.split(",")[0])),
    hi[n] && n !== "transform" ? (s = pl(e, i),
    s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : cu(Jn(e, Rn)) + " " + s.zOrigin + "px") : (s = e.style[n],
    (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = lu[n] && lu[n](e, n, r) || Jn(e, n) || I0(e, n) || (n === "opacity" ? 1 : 0))),
    r && !~(s + "").trim().indexOf(" ") ? Yi(e, n, s, r) + r : s
}, VR = function(e, n, r, i) {
    if (!r || r === "none") {
        var s = Bo(n, e, 1)
          , o = s && Jn(e, s, 1);
        o && o !== r ? (n = s,
        r = o) : n === "borderColor" && (r = Jn(e, "borderTopColor"))
    }
    var a = new kn(this._pt,e.style,n,0,1,ub), l = 0, u = 0, c, f, d, h, g, p, v, y, b, m, _, w;
    if (a.b = r,
    a.e = i,
    r += "",
    i += "",
    i.substring(0, 6) === "var(--" && (i = Jn(e, i.substring(4, i.indexOf(")")))),
    i === "auto" && (p = e.style[n],
    e.style[n] = i,
    i = Jn(e, n) || i,
    p ? e.style[n] = p : Ds(e, n)),
    c = [r, i],
    eb(c),
    r = c[0],
    i = c[1],
    d = r.match(so) || [],
    w = i.match(so) || [],
    w.length) {
        for (; f = so.exec(i); )
            v = f[0],
            b = i.substring(l, f.index),
            g ? g = (g + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (g = 1),
            v !== (p = d[u++] || "") && (h = parseFloat(p) || 0,
            _ = p.substr((h + "").length),
            v.charAt(1) === "=" && (v = _o(h, v) + _),
            y = parseFloat(v),
            m = v.substr((y + "").length),
            l = so.lastIndex - m.length,
            m || (m = m || Hn.units[n] || _,
            l === i.length && (i += m,
            a.e += m)),
            _ !== m && (h = Yi(e, n, p, m) || 0),
            a._pt = {
                _next: a._pt,
                p: b || u === 1 ? b : ",",
                s: h,
                c: y - h,
                m: g && g < 4 || n === "zIndex" ? Math.round : 0
            });
        a.c = l < i.length ? i.substring(l, i.length) : ""
    } else
        a.r = n === "display" && i === "none" ? pb : hb;
    return P0.test(i) && (a.e = 0),
    this._pt = a,
    a
}, Mm = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, zR = function(e) {
    var n = e.split(" ")
      , r = n[0]
      , i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
    r = i,
    i = e),
    n[0] = Mm[r] || r,
    n[1] = Mm[i] || i,
    n.join(" ")
}, WR = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t, i = r.style, s = n.u, o = r._gsap, a, l, u;
        if (s === "all" || s === !0)
            i.cssText = "",
            l = 1;
        else
            for (s = s.split(","),
            u = s.length; --u > -1; )
                a = s[u],
                hi[a] && (l = 1,
                a = a === "transformOrigin" ? Rn : st),
                Ds(r, a);
        l && (Ds(r, st),
        o && (o.svg && r.removeAttribute("transform"),
        i.scale = i.rotate = i.translate = "none",
        pl(r, 1),
        o.uncache = 1,
        gb(i)))
    }
}, lu = {
    clearProps: function(e, n, r, i, s) {
        if (s.data !== "isFromStart") {
            var o = e._pt = new kn(e._pt,n,r,0,0,WR);
            return o.u = i,
            o.pr = -10,
            o.tween = s,
            e._props.push(r),
            1
        }
    }
}, hl = [1, 0, 0, 1, 0, 0], bb = {}, wb = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Im = function(e) {
    var n = Jn(e, st);
    return wb(n) ? hl : n.substr(7).match(R0).map(dt)
}, bp = function(e, n) {
    var r = e._gsap || Ss(e), i = e.style, s = Im(e), o, a, l, u;
    return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    s = [l.a, l.b, l.c, l.d, l.e, l.f],
    s.join(",") === "1,0,0,1,0,0" ? hl : s) : (s === hl && !e.offsetParent && e !== yo && !r.svg && (l = i.display,
    i.display = "block",
    o = e.parentNode,
    (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1,
    a = e.nextElementSibling,
    yo.appendChild(e)),
    s = Im(e),
    l ? i.display = l : Ds(e, "display"),
    u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : yo.removeChild(e))),
    n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
}, Wd = function(e, n, r, i, s, o) {
    var a = e._gsap, l = s || bp(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, d = a.yOffset || 0, h = l[0], g = l[1], p = l[2], v = l[3], y = l[4], b = l[5], m = n.split(" "), _ = parseFloat(m[0]) || 0, w = parseFloat(m[1]) || 0, E, S, L, A;
    r ? l !== hl && (S = h * v - g * p) && (L = _ * (v / S) + w * (-p / S) + (p * b - v * y) / S,
    A = _ * (-g / S) + w * (h / S) - (h * b - g * y) / S,
    _ = L,
    w = A) : (E = yb(e),
    _ = E.x + (~m[0].indexOf("%") ? _ / 100 * E.width : _),
    w = E.y + (~(m[1] || m[0]).indexOf("%") ? w / 100 * E.height : w)),
    i || i !== !1 && a.smooth ? (y = _ - u,
    b = w - c,
    a.xOffset = f + (y * h + b * p) - y,
    a.yOffset = d + (y * g + b * v) - b) : a.xOffset = a.yOffset = 0,
    a.xOrigin = _,
    a.yOrigin = w,
    a.smooth = !!i,
    a.origin = n,
    a.originIsAbsolute = !!r,
    e.style[Rn] = "0px 0px",
    o && ($i(o, a, "xOrigin", u, _),
    $i(o, a, "yOrigin", c, w),
    $i(o, a, "xOffset", f, a.xOffset),
    $i(o, a, "yOffset", d, a.yOffset)),
    e.setAttribute("data-svg-origin", _ + " " + w)
}, pl = function(e, n) {
    var r = e._gsap || new ib(e);
    if ("x"in r && !n && !r.uncache)
        return r;
    var i = e.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = Jn(e, Rn) || "0", c, f, d, h, g, p, v, y, b, m, _, w, E, S, L, A, x, M, R, P, O, I, N, F, H, G, $, ne, ce, ze, me, he;
    return c = f = d = p = v = y = b = m = _ = 0,
    h = g = 1,
    r.svg = !!(e.getCTM && vb(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[st] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[st] !== "none" ? l[st] : "")),
    i.scale = i.rotate = i.translate = "none"),
    S = bp(e, r.svg),
    r.svg && (r.uncache ? (H = e.getBBox(),
    u = r.xOrigin - H.x + "px " + (r.yOrigin - H.y) + "px",
    F = "") : F = !n && e.getAttribute("data-svg-origin"),
    Wd(e, F || u, !!F || r.originIsAbsolute, r.smooth !== !1, S)),
    w = r.xOrigin || 0,
    E = r.yOrigin || 0,
    S !== hl && (M = S[0],
    R = S[1],
    P = S[2],
    O = S[3],
    c = I = S[4],
    f = N = S[5],
    S.length === 6 ? (h = Math.sqrt(M * M + R * R),
    g = Math.sqrt(O * O + P * P),
    p = M || R ? Gs(R, M) * us : 0,
    b = P || O ? Gs(P, O) * us + p : 0,
    b && (g *= Math.abs(Math.cos(b * vo))),
    r.svg && (c -= w - (w * M + E * P),
    f -= E - (w * R + E * O))) : (he = S[6],
    ze = S[7],
    $ = S[8],
    ne = S[9],
    ce = S[10],
    me = S[11],
    c = S[12],
    f = S[13],
    d = S[14],
    L = Gs(he, ce),
    v = L * us,
    L && (A = Math.cos(-L),
    x = Math.sin(-L),
    F = I * A + $ * x,
    H = N * A + ne * x,
    G = he * A + ce * x,
    $ = I * -x + $ * A,
    ne = N * -x + ne * A,
    ce = he * -x + ce * A,
    me = ze * -x + me * A,
    I = F,
    N = H,
    he = G),
    L = Gs(-P, ce),
    y = L * us,
    L && (A = Math.cos(-L),
    x = Math.sin(-L),
    F = M * A - $ * x,
    H = R * A - ne * x,
    G = P * A - ce * x,
    me = O * x + me * A,
    M = F,
    R = H,
    P = G),
    L = Gs(R, M),
    p = L * us,
    L && (A = Math.cos(L),
    x = Math.sin(L),
    F = M * A + R * x,
    H = I * A + N * x,
    R = R * A - M * x,
    N = N * A - I * x,
    M = F,
    I = H),
    v && Math.abs(v) + Math.abs(p) > 359.9 && (v = p = 0,
    y = 180 - y),
    h = dt(Math.sqrt(M * M + R * R + P * P)),
    g = dt(Math.sqrt(N * N + he * he)),
    L = Gs(I, N),
    b = Math.abs(L) > 2e-4 ? L * us : 0,
    _ = me ? 1 / (me < 0 ? -me : me) : 0),
    r.svg && (F = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !wb(Jn(e, st)),
    F && e.setAttribute("transform", F))),
    Math.abs(b) > 90 && Math.abs(b) < 270 && (s ? (h *= -1,
    b += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (g *= -1,
    b += b <= 0 ? 180 : -180)),
    n = n || r.uncache,
    r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o,
    r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o,
    r.z = d + o,
    r.scaleX = dt(h),
    r.scaleY = dt(g),
    r.rotation = dt(p) + a,
    r.rotationX = dt(v) + a,
    r.rotationY = dt(y) + a,
    r.skewX = b + a,
    r.skewY = m + a,
    r.transformPerspective = _ + o,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) && (i[Rn] = cu(u)),
    r.xOffset = r.yOffset = 0,
    r.force3D = Hn.force3D,
    r.renderTransform = r.svg ? YR : _b ? Tb : qR,
    r.uncache = 0,
    r
}, cu = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Rf = function(e, n, r) {
    var i = tn(n);
    return dt(parseFloat(n) + parseFloat(Yi(e, "x", r + "px", i))) + i
}, qR = function(e, n) {
    n.z = "0px",
    n.rotationY = n.rotationX = "0deg",
    n.force3D = 0,
    Tb(e, n)
}, ss = "0deg", oa = "0px", os = ") ", Tb = function(e, n) {
    var r = n || this
      , i = r.xPercent
      , s = r.yPercent
      , o = r.x
      , a = r.y
      , l = r.z
      , u = r.rotation
      , c = r.rotationY
      , f = r.rotationX
      , d = r.skewX
      , h = r.skewY
      , g = r.scaleX
      , p = r.scaleY
      , v = r.transformPerspective
      , y = r.force3D
      , b = r.target
      , m = r.zOrigin
      , _ = ""
      , w = y === "auto" && e && e !== 1 || y === !0;
    if (m && (f !== ss || c !== ss)) {
        var E = parseFloat(c) * vo, S = Math.sin(E), L = Math.cos(E), A;
        E = parseFloat(f) * vo,
        A = Math.cos(E),
        o = Rf(b, o, S * A * -m),
        a = Rf(b, a, -Math.sin(E) * -m),
        l = Rf(b, l, L * A * -m + m)
    }
    v !== oa && (_ += "perspective(" + v + os),
    (i || s) && (_ += "translate(" + i + "%, " + s + "%) "),
    (w || o !== oa || a !== oa || l !== oa) && (_ += l !== oa || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + os),
    u !== ss && (_ += "rotate(" + u + os),
    c !== ss && (_ += "rotateY(" + c + os),
    f !== ss && (_ += "rotateX(" + f + os),
    (d !== ss || h !== ss) && (_ += "skew(" + d + ", " + h + os),
    (g !== 1 || p !== 1) && (_ += "scale(" + g + ", " + p + os),
    b.style[st] = _ || "translate(0, 0)"
}, YR = function(e, n) {
    var r = n || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, d = r.scaleY, h = r.target, g = r.xOrigin, p = r.yOrigin, v = r.xOffset, y = r.yOffset, b = r.forceCSS, m = parseFloat(o), _ = parseFloat(a), w, E, S, L, A;
    l = parseFloat(l),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    l += c),
    l || u ? (l *= vo,
    u *= vo,
    w = Math.cos(l) * f,
    E = Math.sin(l) * f,
    S = Math.sin(l - u) * -d,
    L = Math.cos(l - u) * d,
    u && (c *= vo,
    A = Math.tan(u - c),
    A = Math.sqrt(1 + A * A),
    S *= A,
    L *= A,
    c && (A = Math.tan(c),
    A = Math.sqrt(1 + A * A),
    w *= A,
    E *= A)),
    w = dt(w),
    E = dt(E),
    S = dt(S),
    L = dt(L)) : (w = f,
    L = d,
    E = S = 0),
    (m && !~(o + "").indexOf("px") || _ && !~(a + "").indexOf("px")) && (m = Yi(h, "x", o, "px"),
    _ = Yi(h, "y", a, "px")),
    (g || p || v || y) && (m = dt(m + g - (g * w + p * S) + v),
    _ = dt(_ + p - (g * E + p * L) + y)),
    (i || s) && (A = h.getBBox(),
    m = dt(m + i / 100 * A.width),
    _ = dt(_ + s / 100 * A.height)),
    A = "matrix(" + w + "," + E + "," + S + "," + L + "," + m + "," + _ + ")",
    h.setAttribute("transform", A),
    b && (h.style[st] = A)
}, KR = function(e, n, r, i, s) {
    var o = 360, a = Nt(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? us : 1), u = l - i, c = i + u + "deg", f, d;
    return a && (f = s.split("_")[1],
    f === "short" && (u %= o,
    u !== u % (o / 2) && (u += u < 0 ? o : -360)),
    f === "cw" && u < 0 ? u = (u + o * Pm) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * Pm) % o - ~~(u / o) * o)),
    e._pt = d = new kn(e._pt,n,r,i,u,OR),
    d.e = c,
    d.u = "deg",
    e._props.push(r),
    d
}, Dm = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, GR = function(e, n, r) {
    var i = Dm({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, f, d, h, g;
    i.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    o[st] = n,
    a = pl(r, 1),
    Ds(r, st),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[st],
    o[st] = n,
    a = pl(r, 1),
    o[st] = u);
    for (l in hi)
        u = i[l],
        c = a[l],
        u !== c && s.indexOf(l) < 0 && (h = tn(u),
        g = tn(c),
        f = h !== g ? Yi(r, l, u, g) : parseFloat(u),
        d = parseFloat(c),
        e._pt = new kn(e._pt,a,l,f,d - f,Ud),
        e._pt.u = g || 0,
        e._props.push(l));
    Dm(a, i)
};
Cn("padding,margin,Width,Radius", function(t, e) {
    var n = "Top"
      , r = "Right"
      , i = "Bottom"
      , s = "Left"
      , o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(a) {
        return e < 2 ? t + a : "border" + a + t
    });
    lu[e > 1 ? "border" + t : t] = function(a, l, u, c, f) {
        var d, h;
        if (arguments.length < 4)
            return d = o.map(function(g) {
                return ei(a, g, u)
            }),
            h = d.join(" "),
            h.split(d[0]).length === 5 ? d[0] : h;
        d = (c + "").split(" "),
        h = {},
        o.forEach(function(g, p) {
            return h[g] = d[p] = d[p] || d[(p - 1) / 2 | 0]
        }),
        a.init(l, h, f)
    }
});
var xb = {
    name: "css",
    register: zd,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, r, i, s) {
        var o = this._props, a = e.style, l = r.vars.startAt, u, c, f, d, h, g, p, v, y, b, m, _, w, E, S, L;
        _p || zd(),
        this.styles = this.styles || mb(e),
        L = this.styles.props,
        this.tween = r;
        for (p in n)
            if (p !== "autoRound" && (c = n[p],
            !(Mn[p] && sb(p, n, r, i, e, s)))) {
                if (h = typeof c,
                g = lu[p],
                h === "function" && (c = c.call(r, i, e, s),
                h = typeof c),
                h === "string" && ~c.indexOf("random(") && (c = ul(c)),
                g)
                    g(this, e, p, c, r) && (S = 1);
                else if (p.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(p) + "").trim(),
                    c += "",
                    ji.lastIndex = 0,
                    ji.test(u) || (v = tn(u),
                    y = tn(c)),
                    y ? v !== y && (u = Yi(e, p, u, y) + y) : v && (c += v),
                    this.add(a, "setProperty", u, c, i, s, 0, 0, p),
                    o.push(p),
                    L.push(p, 0, a[p]);
                else if (h !== "undefined") {
                    if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, i, e, s) : l[p],
                    Nt(u) && ~u.indexOf("random(") && (u = ul(u)),
                    tn(u + "") || u === "auto" || (u += Hn.units[p] || tn(ei(e, p)) || ""),
                    (u + "").charAt(1) === "=" && (u = ei(e, p))) : u = ei(e, p),
                    d = parseFloat(u),
                    b = h === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    b && (c = c.substr(2)),
                    f = parseFloat(c),
                    p in Mr && (p === "autoAlpha" && (d === 1 && ei(e, "visibility") === "hidden" && f && (d = 0),
                    L.push("visibility", 0, a.visibility),
                    $i(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    p !== "scale" && p !== "transform" && (p = Mr[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    m = p in hi,
                    m) {
                        if (this.styles.save(p),
                        h === "string" && c.substring(0, 6) === "var(--" && (c = Jn(e, c.substring(4, c.indexOf(")"))),
                        f = parseFloat(c)),
                        _ || (w = e._gsap,
                        w.renderTransform && !n.parseTransform || pl(e, n.parseTransform),
                        E = n.smoothOrigin !== !1 && w.smooth,
                        _ = this._pt = new kn(this._pt,a,st,0,1,w.renderTransform,w,0,-1),
                        _.dep = 1),
                        p === "scale")
                            this._pt = new kn(this._pt,w,"scaleY",w.scaleY,(b ? _o(w.scaleY, b + f) : f) - w.scaleY || 0,Ud),
                            this._pt.u = 0,
                            o.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            L.push(Rn, 0, a[Rn]),
                            c = zR(c),
                            w.svg ? Wd(e, c, 0, E, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0,
                            y !== w.zOrigin && $i(this, w, "zOrigin", w.zOrigin, y),
                            $i(this, a, p, cu(u), cu(c)));
                            continue
                        } else if (p === "svgOrigin") {
                            Wd(e, c, 1, E, 0, this);
                            continue
                        } else if (p in bb) {
                            KR(this, w, p, d, b ? _o(d, b + c) : c);
                            continue
                        } else if (p === "smoothOrigin") {
                            $i(this, w, "smooth", w.smooth, c);
                            continue
                        } else if (p === "force3D") {
                            w[p] = c;
                            continue
                        } else if (p === "transform") {
                            GR(this, c, e);
                            continue
                        }
                    } else
                        p in a || (p = Bo(p) || p);
                    if (m || (f || f === 0) && (d || d === 0) && !AR.test(c) && p in a)
                        v = (u + "").substr((d + "").length),
                        f || (f = 0),
                        y = tn(c) || (p in Hn.units ? Hn.units[p] : v),
                        v !== y && (d = Yi(e, p, u, y)),
                        this._pt = new kn(this._pt,m ? w : a,p,d,(b ? _o(d, b + f) : f) - d,!m && (y === "px" || p === "zIndex") && n.autoRound !== !1 ? LR : Ud),
                        this._pt.u = y || 0,
                        v !== y && y !== "%" && (this._pt.b = u,
                        this._pt.r = $R);
                    else if (p in a)
                        VR.call(this, e, p, u, b ? b + c : c);
                    else if (p in e)
                        this.add(e, p, u || e[p], b ? b + c : c, i, s);
                    else if (p !== "parseTransform") {
                        ap(p, c);
                        continue
                    }
                    m || (p in a ? L.push(p, 0, a[p]) : typeof e[p] == "function" ? L.push(p, 2, e[p]()) : L.push(p, 1, u || e[p])),
                    o.push(p)
                }
            }
        S && fb(this)
    },
    render: function(e, n) {
        if (n.tween._time || !yp())
            for (var r = n._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            n.styles.revert()
    },
    get: ei,
    aliases: Mr,
    getSetter: function(e, n, r) {
        var i = Mr[n];
        return i && i.indexOf(",") < 0 && (n = i),
        n in hi && n !== Rn && (e._gsap.x || ei(e, "x")) ? r && Rm === r ? n === "scale" ? NR : DR : (Rm = r || {}) && (n === "scale" ? FR : jR) : e.style && !ip(e.style[n]) ? MR : ~n.indexOf("-") ? IR : gp(e, n)
    },
    core: {
        _removeProperty: Ds,
        _getMatrix: bp
    }
};
Pn.utils.checkPrefix = Bo;
Pn.core.getStyleSaver = mb;
(function(t, e, n, r) {
    var i = Cn(t + "," + e + "," + n, function(s) {
        hi[s] = 1
    });
    Cn(e, function(s) {
        Hn.units[s] = "deg",
        bb[s] = 1
    }),
    Mr[i[13]] = t + "," + e,
    Cn(r, function(s) {
        var o = s.split(":");
        Mr[o[1]] = i[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    Hn.units[t] = "px"
});
Pn.registerPlugin(xb);
var Dn = Pn.registerPlugin(xb) || Pn;
Dn.core.Tween;
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var oi, Ps, wp, qu, _a, Cc, uu, Fa, fr = "transform", qd = fr + "Origin", Eb, Tp = function(e) {
    var n = e.ownerDocument || e;
    for (!(fr in e.style) && ("msTransform"in e.style) && (fr = "msTransform",
    qd = fr + "Origin"); n.parentNode && (n = n.parentNode); )
        ;
    if (Ps = window,
    uu = new Ns,
    n) {
        oi = n,
        wp = n.documentElement,
        qu = n.body,
        Fa = oi.createElementNS("http://www.w3.org/2000/svg", "g"),
        Fa.style.transform = "none";
        var r = n.createElement("div")
          , i = n.createElement("div")
          , s = n && (n.body || n.firstElementChild);
        s && s.appendChild && (s.appendChild(r),
        r.appendChild(i),
        r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"),
        Eb = i.offsetParent !== r,
        s.removeChild(r))
    }
    return n
}, XR = function(e) {
    for (var n, r; e && e !== qu; )
        r = e._gsap,
        r && r.uncache && r.get(e, "x"),
        r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4,
        r.renderTransform(1, r),
        n ? n.push(r) : n = [r]),
        e = e.parentNode;
    return n
}, Sb = [], Cb = [], xp = function() {
    return Ps.pageYOffset || oi.scrollTop || wp.scrollTop || qu.scrollTop || 0
}, Ep = function() {
    return Ps.pageXOffset || oi.scrollLeft || wp.scrollLeft || qu.scrollLeft || 0
}, Sp = function(e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
}, JR = function t(e) {
    if (Ps.getComputedStyle(e).position === "fixed")
        return !0;
    if (e = e.parentNode,
    e && e.nodeType === 1)
        return t(e)
}, Pf = function t(e, n) {
    if (e.parentNode && (oi || Tp(e))) {
        var r = Sp(e)
          , i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
          , s = r ? n ? "rect" : "g" : "div"
          , o = n !== 2 ? 0 : 100
          , a = n === 3 ? 100 : 0
          , l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
          , u = oi.createElementNS ? oi.createElementNS(i.replace(/^https/, "http"), s) : oi.createElement(s);
        return n && (r ? (Cc || (Cc = t(e)),
        u.setAttribute("width", .01),
        u.setAttribute("height", .01),
        u.setAttribute("transform", "translate(" + o + "," + a + ")"),
        Cc.appendChild(u)) : (_a || (_a = t(e),
        _a.style.cssText = l),
        u.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + o + "px",
        _a.appendChild(u))),
        u
    }
    throw "Need document and parent."
}, QR = function(e) {
    for (var n = new Ns, r = 0; r < e.numberOfItems; r++)
        n.multiply(e.getItem(r).matrix);
    return n
}, kb = function(e) {
    var n = e.getCTM(), r;
    return n || (r = e.style[fr],
    e.style[fr] = "none",
    e.appendChild(Fa),
    n = Fa.getCTM(),
    e.removeChild(Fa),
    r ? e.style[fr] = r : e.style.removeProperty(fr.replace(/([A-Z])/g, "-$1").toLowerCase())),
    n || uu.clone()
}, ZR = function(e, n) {
    var r = Sp(e), i = e === r, s = r ? Sb : Cb, o = e.parentNode, a = o && !r && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o, l, u, c, f, d, h;
    if (e === Ps)
        return e;
    if (s.length || s.push(Pf(e, 1), Pf(e, 2), Pf(e, 3)),
    l = r ? Cc : _a,
    r)
        i ? (c = kb(e),
        f = -c.e / c.a,
        d = -c.f / c.d,
        u = uu) : e.getBBox ? (c = e.getBBox(),
        u = e.transform ? e.transform.baseVal : {},
        u = u.numberOfItems ? u.numberOfItems > 1 ? QR(u) : u.getItem(0).matrix : uu,
        f = u.a * c.x + u.c * c.y,
        d = u.b * c.x + u.d * c.y) : (u = new Ns,
        f = d = 0),
        n && e.tagName.toLowerCase() === "g" && (f = d = 0),
        (i ? r : o).appendChild(l),
        l.setAttribute("transform", "matrix(" + u.a + "," + u.b + "," + u.c + "," + u.d + "," + (u.e + f) + "," + (u.f + d) + ")");
    else {
        if (f = d = 0,
        Eb)
            for (u = e.offsetParent,
            c = e; c && (c = c.parentNode) && c !== u && c.parentNode; )
                (Ps.getComputedStyle(c)[fr] + "").length > 4 && (f = c.offsetLeft,
                d = c.offsetTop,
                c = 0);
        if (h = Ps.getComputedStyle(e),
        h.position !== "absolute" && h.position !== "fixed")
            for (u = e.offsetParent; o && o !== u; )
                f += o.scrollLeft || 0,
                d += o.scrollTop || 0,
                o = o.parentNode;
        c = l.style,
        c.top = e.offsetTop - d + "px",
        c.left = e.offsetLeft - f + "px",
        c[fr] = h[fr],
        c[qd] = h[qd],
        c.position = h.position === "fixed" ? "fixed" : "absolute",
        a.appendChild(l)
    }
    return l
}, Af = function(e, n, r, i, s, o, a) {
    return e.a = n,
    e.b = r,
    e.c = i,
    e.d = s,
    e.e = o,
    e.f = a,
    e
}, Ns = function() {
    function t(n, r, i, s, o, a) {
        n === void 0 && (n = 1),
        r === void 0 && (r = 0),
        i === void 0 && (i = 0),
        s === void 0 && (s = 1),
        o === void 0 && (o = 0),
        a === void 0 && (a = 0),
        Af(this, n, r, i, s, o, a)
    }
    var e = t.prototype;
    return e.inverse = function() {
        var r = this.a
          , i = this.b
          , s = this.c
          , o = this.d
          , a = this.e
          , l = this.f
          , u = r * o - i * s || 1e-10;
        return Af(this, o / u, -i / u, -s / u, r / u, (s * l - o * a) / u, -(r * l - i * a) / u)
    }
    ,
    e.multiply = function(r) {
        var i = this.a
          , s = this.b
          , o = this.c
          , a = this.d
          , l = this.e
          , u = this.f
          , c = r.a
          , f = r.c
          , d = r.b
          , h = r.d
          , g = r.e
          , p = r.f;
        return Af(this, c * i + d * o, c * s + d * a, f * i + h * o, f * s + h * a, l + g * i + p * o, u + g * s + p * a)
    }
    ,
    e.clone = function() {
        return new t(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    e.equals = function(r) {
        var i = this.a
          , s = this.b
          , o = this.c
          , a = this.d
          , l = this.e
          , u = this.f;
        return i === r.a && s === r.b && o === r.c && a === r.d && l === r.e && u === r.f
    }
    ,
    e.apply = function(r, i) {
        i === void 0 && (i = {});
        var s = r.x
          , o = r.y
          , a = this.a
          , l = this.b
          , u = this.c
          , c = this.d
          , f = this.e
          , d = this.f;
        return i.x = s * a + o * u + f || 0,
        i.y = s * l + o * c + d || 0,
        i
    }
    ,
    t
}();
function zr(t, e, n, r) {
    if (!t || !t.parentNode || (oi || Tp(t)).documentElement === t)
        return new Ns;
    var i = XR(t)
      , s = Sp(t)
      , o = s ? Sb : Cb
      , a = ZR(t, n)
      , l = o[0].getBoundingClientRect()
      , u = o[1].getBoundingClientRect()
      , c = o[2].getBoundingClientRect()
      , f = a.parentNode
      , d = !r && JR(t)
      , h = new Ns((u.left - l.left) / 100,(u.top - l.top) / 100,(c.left - l.left) / 100,(c.top - l.top) / 100,l.left + (d ? 0 : Ep()),l.top + (d ? 0 : xp()));
    if (f.removeChild(a),
    i)
        for (l = i.length; l--; )
            u = i[l],
            u.scaleX = u.scaleY = 0,
            u.renderTransform(1, u);
    return e ? h.inverse() : h
}
/*!
 * Flip 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var eP = 1, Ho, en, Xe, ja, Ri, ai, Yd, Nm = function(e, n) {
    return e.actions.forEach(function(r) {
        return r.vars[n] && r.vars[n](r)
    })
}, Kd = {}, Fm = 180 / Math.PI, tP = Math.PI / 180, fu = {}, jm = {}, Yu = {}, Cp = function(e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e
}, nP = Cp("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Ku = Cp("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), Ba = function(e) {
    return Ho(e)[0] || console.warn("Element not found:", e)
}, ao = function(e) {
    return Math.round(e * 1e4) / 1e4 || 0
}, Of = function(e, n, r) {
    return e.forEach(function(i) {
        return i.classList[r](n)
    })
}, Bm = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
}, Rb = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
}, Pb = function(e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase()
}, lo = function(e, n) {
    var r = {}, i;
    for (i in e)
        n[i] || (r[i] = e[i]);
    return r
}, kp = {}, Ab = function(e) {
    var n = kp[e] = Cp(e);
    return Yu[e] = n.concat(Ku),
    n
}, rP = function(e) {
    var n = e._gsap || en.core.getCache(e);
    return n.gmCache === en.ticker.frame ? n.gMatrix : (n.gmCache = en.ticker.frame,
    n.gMatrix = zr(e, !0, !1, !0))
}, iP = function t(e, n, r) {
    r === void 0 && (r = 0);
    for (var i = e.parentNode, s = 1e3 * Math.pow(10, r) * (n ? -1 : 1), o = n ? -s * 900 : 0; e; )
        o += s,
        e = e.previousSibling;
    return i ? o + t(i, n, r + 1) : o
}, du = function(e, n, r) {
    return e.forEach(function(i) {
        return i.d = iP(r ? i.element : i.t, n)
    }),
    e.sort(function(i, s) {
        return i.d - s.d
    }),
    e
}, gl = function(e, n) {
    for (var r = e.element.style, i = e.css = e.css || [], s = n.length, o, a; s--; )
        o = n[s],
        a = r[o] || r.getPropertyValue(o),
        i.push(a ? o : jm[o] || (jm[o] = Pb(o)), a);
    return r
}, hu = function(e) {
    var n = e.css
      , r = e.element.style
      , i = 0;
    for (e.cache.uncache = 1; i < n.length; i += 2)
        n[i + 1] ? r[n[i]] = n[i + 1] : r.removeProperty(n[i]);
    !n[n.indexOf("transform") + 1] && r.translate && (r.removeProperty("translate"),
    r.removeProperty("scale"),
    r.removeProperty("rotate"))
}, Hm = function(e, n) {
    e.forEach(function(r) {
        return r.a.cache.uncache = 1
    }),
    n || e.finalStates.forEach(hu)
}, $f = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Rp = function(e, n, r) {
    var i = e.element, s = e.width, o = e.height, a = e.uncache, l = e.getProp, u = i.style, c = 4, f, d, h;
    if (typeof n != "object" && (n = e),
    Xe && r !== 1)
        return Xe._abs.push({
            t: i,
            b: e,
            a: e,
            sd: 0
        }),
        Xe._final.push(function() {
            return (e.cache.uncache = 1) && hu(e)
        }),
        i;
    for (d = l("display") === "none",
    (!e.isVisible || d) && (d && (gl(e, ["display"]).display = n.display),
    e.matrix = n.matrix,
    e.width = s = e.width || n.width,
    e.height = o = e.height || n.height),
    gl(e, $f),
    h = window.getComputedStyle(i); c--; )
        u[$f[c]] = h[$f[c]];
    if (u.gridArea = "1 / 1 / 1 / 1",
    u.transition = "none",
    u.position = "absolute",
    u.width = s + "px",
    u.height = o + "px",
    u.top || (u.top = "0px"),
    u.left || (u.left = "0px"),
    a)
        f = new Fs(i);
    else if (f = lo(e, fu),
    f.position = "absolute",
    e.simple) {
        var g = i.getBoundingClientRect();
        f.matrix = new Ns(1,0,0,1,g.left + Ep(),g.top + xp())
    } else
        f.matrix = zr(i, !1, !1, !0);
    return f = bo(f, e, !0),
    e.x = ai(f.x, .01),
    e.y = ai(f.y, .01),
    i
}, Um = function(e, n) {
    return n !== !0 && (n = Ho(n),
    e = e.filter(function(r) {
        if (n.indexOf((r.sd < 0 ? r.b : r.a).element) !== -1)
            return !0;
        r.t._gsap.renderTransform(1),
        r.b.isVisible && (r.t.style.width = r.b.width + "px",
        r.t.style.height = r.b.height + "px")
    })),
    e
}, Ob = function(e) {
    return du(e, !0).forEach(function(n) {
        return (n.a.isVisible || n.b.isVisible) && Rp(n.sd < 0 ? n.b : n.a, n.b, 1)
    })
}, sP = function(e, n) {
    return n && e.idLookup[Gd(n).id] || e.elementStates[0]
}, Gd = function(e, n, r, i) {
    return e instanceof Fs ? e : e instanceof hr ? sP(e, i) : new Fs(typeof e == "string" ? Ba(e) || console.warn(e + " not found") : e,n,r)
}, oP = function(e, n) {
    for (var r = en.getProperty(e.element, null, "native"), i = e.props = {}, s = n.length; s--; )
        i[n[s]] = (r(n[s]) + "").trim();
    return i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0),
    e
}, $b = function(e, n) {
    var r = e.style || e, i;
    for (i in n)
        r[i] = n[i]
}, aP = function(e) {
    var n = e.getAttribute("data-flip-id");
    return n || e.setAttribute("data-flip-id", n = "auto-" + eP++),
    n
}, Lb = function(e) {
    return e.map(function(n) {
        return n.element
    })
}, Vm = function(e, n, r) {
    return e && n.length && r.add(e(Lb(n), r, new hr(n,0,!0)), 0)
}, bo = function(e, n, r, i, s, o) {
    var a = e.element, l = e.cache, u = e.parent, c = e.x, f = e.y, d = n.width, h = n.height, g = n.scaleX, p = n.scaleY, v = n.rotation, y = n.bounds, b = o && Yd && Yd(a, "transform,width,height"), m = e, _ = n.matrix, w = _.e, E = _.f, S = e.bounds.width !== y.width || e.bounds.height !== y.height || e.scaleX !== g || e.scaleY !== p || e.rotation !== v, L = !S && e.simple && n.simple && !s, A, x, M, R, P, O, I;
    return L || !u ? (g = p = 1,
    v = A = 0) : (P = rP(u),
    O = P.clone().multiply(n.ctm ? n.matrix.clone().multiply(n.ctm) : n.matrix),
    v = ao(Math.atan2(O.b, O.a) * Fm),
    A = ao(Math.atan2(O.c, O.d) * Fm + v) % 360,
    g = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2)),
    p = Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) * Math.cos(A * tP),
    s && (s = Ho(s)[0],
    R = en.getProperty(s),
    I = s.getBBox && typeof s.getBBox == "function" && s.getBBox(),
    m = {
        scaleX: R("scaleX"),
        scaleY: R("scaleY"),
        width: I ? I.width : Math.ceil(parseFloat(R("width", "px"))),
        height: I ? I.height : parseFloat(R("height", "px"))
    }),
    l.rotation = v + "deg",
    l.skewX = A + "deg"),
    r ? (g *= d === m.width || !m.width ? 1 : d / m.width,
    p *= h === m.height || !m.height ? 1 : h / m.height,
    l.scaleX = g,
    l.scaleY = p) : (d = ai(d * g / m.scaleX, 0),
    h = ai(h * p / m.scaleY, 0),
    a.style.width = d + "px",
    a.style.height = h + "px"),
    i && $b(a, n.props),
    L || !u ? (c += w - e.matrix.e,
    f += E - e.matrix.f) : S || u !== n.parent ? (l.renderTransform(1, l),
    O = zr(s || a, !1, !1, !0),
    x = P.apply({
        x: O.e,
        y: O.f
    }),
    M = P.apply({
        x: w,
        y: E
    }),
    c += M.x - x.x,
    f += M.y - x.y) : (P.e = P.f = 0,
    M = P.apply({
        x: w - e.matrix.e,
        y: E - e.matrix.f
    }),
    c += M.x,
    f += M.y),
    c = ai(c, .02),
    f = ai(f, .02),
    o && !(o instanceof Fs) ? b && b.revert() : (l.x = c + "px",
    l.y = f + "px",
    l.renderTransform(1, l)),
    o && (o.x = c,
    o.y = f,
    o.rotation = v,
    o.skewX = A,
    r ? (o.scaleX = g,
    o.scaleY = p) : (o.width = d,
    o.height = h)),
    o || l
}, Lf = function(e, n) {
    return e instanceof hr ? e : new hr(e,n)
}, Mb = function(e, n, r) {
    var i = e.idLookup[r]
      , s = e.alt[r];
    return s.isVisible && (!(n.getElementState(s.element) || s).isVisible || !i.isVisible) ? s : i
}, Mf = [], If = "width,height,overflowX,overflowY".split(","), zl, zm = function(e) {
    if (e !== zl) {
        var n = Ri.style
          , r = Ri.clientWidth === window.outerWidth
          , i = Ri.clientHeight === window.outerHeight
          , s = 4;
        if (e && (r || i)) {
            for (; s--; )
                Mf[s] = n[If[s]];
            r && (n.width = Ri.clientWidth + "px",
            n.overflowY = "hidden"),
            i && (n.height = Ri.clientHeight + "px",
            n.overflowX = "hidden"),
            zl = e
        } else if (zl) {
            for (; s--; )
                Mf[s] ? n[If[s]] = Mf[s] : n.removeProperty(Pb(If[s]));
            zl = e
        }
    }
}, Df = function(e, n, r, i) {
    e instanceof hr && n instanceof hr || console.warn("Not a valid state object."),
    r = r || {};
    var s = r, o = s.clearProps, a = s.onEnter, l = s.onLeave, u = s.absolute, c = s.absoluteOnLeave, f = s.custom, d = s.delay, h = s.paused, g = s.repeat, p = s.repeatDelay, v = s.yoyo, y = s.toggleClass, b = s.nested, m = s.zIndex, _ = s.scale, w = s.fade, E = s.stagger, S = s.spin, L = s.prune, A = ("props"in r ? r : e).props, x = lo(r, Bm), M = en.timeline({
        delay: d,
        paused: h,
        repeat: g,
        repeatDelay: p,
        yoyo: v,
        data: "isFlip"
    }), R = x, P = [], O = [], I = [], N = [], F = S === !0 ? 1 : S || 0, H = typeof S == "function" ? S : function() {
        return F
    }
    , G = e.interrupted || n.interrupted, $ = M[i !== 1 ? "to" : "from"], ne, ce, ze, me, he, ae, j, W, q, X, se, _e, T, C;
    for (ce in n.idLookup)
        se = n.alt[ce] ? Mb(n, e, ce) : n.idLookup[ce],
        he = se.element,
        X = e.idLookup[ce],
        e.alt[ce] && he === X.element && (e.alt[ce].isVisible || !se.isVisible) && (X = e.alt[ce]),
        X ? (ae = {
            t: he,
            b: X,
            a: se,
            sd: X.element === he ? 0 : se.isVisible ? 1 : -1
        },
        I.push(ae),
        ae.sd && (ae.sd < 0 && (ae.b = se,
        ae.a = X),
        G && gl(ae.b, A ? Yu[A] : Ku),
        w && I.push(ae.swap = {
            t: X.element,
            b: ae.b,
            a: ae.a,
            sd: -ae.sd,
            swap: ae
        })),
        he._flip = X.element._flip = Xe ? Xe.timeline : M) : se.isVisible && (I.push({
            t: he,
            b: lo(se, {
                isVisible: 1
            }),
            a: se,
            sd: 0,
            entering: 1
        }),
        he._flip = Xe ? Xe.timeline : M);
    if (A && (kp[A] || Ab(A)).forEach(function(k) {
        return x[k] = function(V) {
            return I[V].a.props[k]
        }
    }),
    I.finalStates = q = [],
    _e = function() {
        for (du(I),
        zm(!0),
        me = 0; me < I.length; me++)
            ae = I[me],
            T = ae.a,
            C = ae.b,
            L && !T.isDifferent(C) && !ae.entering ? I.splice(me--, 1) : (he = ae.t,
            b && !(ae.sd < 0) && me && (T.matrix = zr(he, !1, !1, !0)),
            C.isVisible && T.isVisible ? (ae.sd < 0 ? (j = new Fs(he,A,e.simple),
            bo(j, T, _, 0, 0, j),
            j.matrix = zr(he, !1, !1, !0),
            j.css = ae.b.css,
            ae.a = T = j,
            w && (he.style.opacity = G ? C.opacity : T.opacity),
            E && N.push(he)) : ae.sd > 0 && w && (he.style.opacity = G ? T.opacity - C.opacity : "0"),
            bo(T, C, _, A)) : C.isVisible !== T.isVisible && (C.isVisible ? T.isVisible || (C.css = T.css,
            O.push(C),
            I.splice(me--, 1),
            u && b && bo(T, C, _, A)) : (T.isVisible && P.push(T),
            I.splice(me--, 1))),
            _ || (he.style.maxWidth = Math.max(T.width, C.width) + "px",
            he.style.maxHeight = Math.max(T.height, C.height) + "px",
            he.style.minWidth = Math.min(T.width, C.width) + "px",
            he.style.minHeight = Math.min(T.height, C.height) + "px"),
            b && y && he.classList.add(y)),
            q.push(T);
        var V;
        if (y && (V = q.map(function(B) {
            return B.element
        }),
        b && V.forEach(function(B) {
            return B.classList.remove(y)
        })),
        zm(!1),
        _ ? (x.scaleX = function(B) {
            return I[B].a.scaleX
        }
        ,
        x.scaleY = function(B) {
            return I[B].a.scaleY
        }
        ) : (x.width = function(B) {
            return I[B].a.width + "px"
        }
        ,
        x.height = function(B) {
            return I[B].a.height + "px"
        }
        ,
        x.autoRound = r.autoRound || !1),
        x.x = function(B) {
            return I[B].a.x + "px"
        }
        ,
        x.y = function(B) {
            return I[B].a.y + "px"
        }
        ,
        x.rotation = function(B) {
            return I[B].a.rotation + (S ? H(B, W[B], W) * 360 : 0)
        }
        ,
        x.skewX = function(B) {
            return I[B].a.skewX
        }
        ,
        W = I.map(function(B) {
            return B.t
        }),
        (m || m === 0) && (x.modifiers = {
            zIndex: function() {
                return m
            }
        },
        x.zIndex = m,
        x.immediateRender = r.immediateRender !== !1),
        w && (x.opacity = function(B) {
            return I[B].sd < 0 ? 0 : I[B].sd > 0 ? I[B].a.opacity : "+=0"
        }
        ),
        N.length) {
            E = en.utils.distribute(E);
            var K = W.slice(N.length);
            x.stagger = function(B, z) {
                return E(~N.indexOf(z) ? W.indexOf(I[B].swap.t) : B, z, K)
            }
        }
        if (nP.forEach(function(B) {
            return r[B] && M.eventCallback(B, r[B], r[B + "Params"])
        }),
        f && W.length) {
            R = lo(x, Bm),
            "scale"in f && (f.scaleX = f.scaleY = f.scale,
            delete f.scale);
            for (ce in f)
                ne = lo(f[ce], Rb),
                ne[ce] = x[ce],
                !("duration"in ne) && "duration"in x && (ne.duration = x.duration),
                ne.stagger = x.stagger,
                $.call(M, W, ne, 0),
                delete R[ce]
        }
        (W.length || O.length || P.length) && (y && M.add(function() {
            return Of(V, y, M._zTime < 0 ? "remove" : "add")
        }, 0) && !h && Of(V, y, "add"),
        W.length && $.call(M, W, R, 0)),
        Vm(a, P, M),
        Vm(l, O, M);
        var Y = Xe && Xe.timeline;
        Y && (Y.add(M, 0),
        Xe._final.push(function() {
            return Hm(I, !o)
        })),
        ze = M.duration(),
        M.call(function() {
            var B = M.time() >= ze;
            B && !Y && Hm(I, !o),
            y && Of(V, y, B ? "remove" : "add")
        })
    }
    ,
    c && (u = I.filter(function(k) {
        return !k.sd && !k.a.isVisible && k.b.isVisible
    }).map(function(k) {
        return k.a.element
    })),
    Xe) {
        var D;
        u && (D = Xe._abs).push.apply(D, Um(I, u)),
        Xe._run.push(_e)
    } else
        u && Ob(Um(I, u)),
        _e();
    var U = Xe ? Xe.timeline : M;
    return U.revert = function() {
        return Pp(U, 1, 1)
    }
    ,
    U
}, lP = function t(e) {
    e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
    e.getChildren(!0, !1, !0).forEach(t)
}, Pp = function(e, n, r) {
    if (e && e.progress() < 1 && (!e.paused() || r))
        return n && (lP(e),
        n < 2 && e.progress(1),
        e.kill()),
        !0
}, Wl = function(e) {
    for (var n = e.idLookup = {}, r = e.alt = {}, i = e.elementStates, s = i.length, o; s--; )
        o = i[s],
        n[o.id] ? r[o.id] = o : n[o.id] = o
}, hr = function() {
    function t(n, r, i) {
        if (this.props = r && r.props,
        this.simple = !!(r && r.simple),
        i)
            this.targets = Lb(n),
            this.elementStates = n,
            Wl(this);
        else {
            this.targets = Ho(n);
            var s = r && (r.kill === !1 || r.batch && !r.kill);
            Xe && !s && Xe._kill.push(this),
            this.update(s || !!Xe)
        }
    }
    var e = t.prototype;
    return e.update = function(r) {
        var i = this;
        return this.elementStates = this.targets.map(function(s) {
            return new Fs(s,i.props,i.simple)
        }),
        Wl(this),
        this.interrupt(r),
        this.recordInlineStyles(),
        this
    }
    ,
    e.clear = function() {
        return this.targets.length = this.elementStates.length = 0,
        Wl(this),
        this
    }
    ,
    e.fit = function(r, i, s) {
        for (var o = du(this.elementStates.slice(0), !1, !0), a = (r || this).idLookup, l = 0, u, c; l < o.length; l++)
            u = o[l],
            s && (u.matrix = zr(u.element, !1, !1, !0)),
            c = a[u.id],
            c && bo(u, c, i, !0, 0, u),
            u.matrix = zr(u.element, !1, !1, !0);
        return this
    }
    ,
    e.getProperty = function(r, i) {
        var s = this.getElementState(r) || fu;
        return (i in s ? s : s.props || fu)[i]
    }
    ,
    e.add = function(r) {
        for (var i = r.targets.length, s = this.idLookup, o = this.alt, a, l, u; i--; )
            l = r.elementStates[i],
            u = s[l.id],
            u && (l.element === u.element || o[l.id] && o[l.id].element === l.element) ? (a = this.elementStates.indexOf(l.element === u.element ? u : o[l.id]),
            this.targets.splice(a, 1, r.targets[i]),
            this.elementStates.splice(a, 1, l)) : (this.targets.push(r.targets[i]),
            this.elementStates.push(l));
        return r.interrupted && (this.interrupted = !0),
        r.simple || (this.simple = !1),
        Wl(this),
        this
    }
    ,
    e.compare = function(r) {
        var i = r.idLookup, s = this.idLookup, o = [], a = [], l = [], u = [], c = [], f = r.alt, d = this.alt, h = function(L, A, x) {
            return (L.isVisible !== A.isVisible ? L.isVisible ? l : u : L.isVisible ? a : o).push(x) && c.push(x)
        }, g = function(L, A, x) {
            return c.indexOf(x) < 0 && h(L, A, x)
        }, p, v, y, b, m, _, w, E;
        for (y in i)
            m = f[y],
            _ = d[y],
            p = m ? Mb(r, this, y) : i[y],
            b = p.element,
            v = s[y],
            _ ? (E = v.isVisible || !_.isVisible && b === v.element ? v : _,
            w = m && !p.isVisible && !m.isVisible && E.element === m.element ? m : p,
            w.isVisible && E.isVisible && w.element !== E.element ? ((w.isDifferent(E) ? a : o).push(w.element, E.element),
            c.push(w.element, E.element)) : h(w, E, w.element),
            m && w.element === m.element && (m = i[y]),
            g(w.element !== v.element && m ? m : w, v, v.element),
            g(m && m.element === _.element ? m : w, _, _.element),
            m && g(m, _.element === m.element ? _ : v, m.element)) : (v ? v.isDifferent(p) ? h(p, v, b) : o.push(b) : l.push(b),
            m && g(m, v, m.element));
        for (y in s)
            i[y] || (u.push(s[y].element),
            d[y] && u.push(d[y].element));
        return {
            changed: a,
            unchanged: o,
            enter: l,
            leave: u
        }
    }
    ,
    e.recordInlineStyles = function() {
        for (var r = Yu[this.props] || Ku, i = this.elementStates.length; i--; )
            gl(this.elementStates[i], r)
    }
    ,
    e.interrupt = function(r) {
        var i = this
          , s = [];
        this.targets.forEach(function(o) {
            var a = o._flip
              , l = Pp(a, r ? 0 : 1);
            r && l && s.indexOf(a) < 0 && a.add(function() {
                return i.updateVisibility()
            }),
            l && s.push(a)
        }),
        !r && s.length && this.updateVisibility(),
        this.interrupted || (this.interrupted = !!s.length)
    }
    ,
    e.updateVisibility = function() {
        this.elementStates.forEach(function(r) {
            var i = r.element.getBoundingClientRect();
            r.isVisible = !!(i.width || i.height || i.top || i.left),
            r.uncache = 1
        })
    }
    ,
    e.getElementState = function(r) {
        return this.elementStates[this.targets.indexOf(Ba(r))]
    }
    ,
    e.makeAbsolute = function() {
        return du(this.elementStates.slice(0), !0, !0).map(Rp)
    }
    ,
    t
}(), Fs = function() {
    function t(n, r, i) {
        this.element = n,
        this.update(r, i)
    }
    var e = t.prototype;
    return e.isDifferent = function(r) {
        var i = this.bounds
          , s = r.bounds;
        return i.top !== s.top || i.left !== s.left || i.width !== s.width || i.height !== s.height || !this.matrix.equals(r.matrix) || this.opacity !== r.opacity || this.props && r.props && JSON.stringify(this.props) !== JSON.stringify(r.props)
    }
    ,
    e.update = function(r, i) {
        var s = this
          , o = s.element
          , a = en.getProperty(o)
          , l = en.core.getCache(o)
          , u = o.getBoundingClientRect()
          , c = o.getBBox && typeof o.getBBox == "function" && o.nodeName.toLowerCase() !== "svg" && o.getBBox()
          , f = i ? new Ns(1,0,0,1,u.left + Ep(),u.top + xp()) : zr(o, !1, !1, !0);
        l.uncache = 1,
        s.getProp = a,
        s.element = o,
        s.id = aP(o),
        s.matrix = f,
        s.cache = l,
        s.bounds = u,
        s.isVisible = !!(u.width || u.height || u.left || u.top),
        s.display = a("display"),
        s.position = a("position"),
        s.parent = o.parentNode,
        s.x = a("x"),
        s.y = a("y"),
        s.scaleX = l.scaleX,
        s.scaleY = l.scaleY,
        s.rotation = a("rotation"),
        s.skewX = a("skewX"),
        s.opacity = a("opacity"),
        s.width = c ? c.width : ai(a("width", "px"), .04),
        s.height = c ? c.height : ai(a("height", "px"), .04),
        r && oP(s, kp[r] || Ab(r)),
        s.ctm = o.getCTM && o.nodeName.toLowerCase() === "svg" && kb(o).inverse(),
        s.simple = i || ao(f.a) === 1 && !ao(f.b) && !ao(f.c) && ao(f.d) === 1,
        s.uncache = 0
    }
    ,
    t
}(), cP = function() {
    function t(n, r) {
        this.vars = n,
        this.batch = r,
        this.states = [],
        this.timeline = r.timeline
    }
    var e = t.prototype;
    return e.getStateById = function(r) {
        for (var i = this.states.length; i--; )
            if (this.states[i].idLookup[r])
                return this.states[i]
    }
    ,
    e.kill = function() {
        this.batch.remove(this)
    }
    ,
    t
}(), uP = function() {
    function t(n) {
        this.id = n,
        this.actions = [],
        this._kill = [],
        this._final = [],
        this._abs = [],
        this._run = [],
        this.data = {},
        this.state = new hr,
        this.timeline = en.timeline()
    }
    var e = t.prototype;
    return e.add = function(r) {
        var i = this.actions.filter(function(s) {
            return s.vars === r
        });
        return i.length ? i[0] : (i = new cP(typeof r == "function" ? {
            animate: r
        } : r,this),
        this.actions.push(i),
        i)
    }
    ,
    e.remove = function(r) {
        var i = this.actions.indexOf(r);
        return i >= 0 && this.actions.splice(i, 1),
        this
    }
    ,
    e.getState = function(r) {
        var i = this
          , s = Xe
          , o = ja;
        return Xe = this,
        this.state.clear(),
        this._kill.length = 0,
        this.actions.forEach(function(a) {
            a.vars.getState && (a.states.length = 0,
            ja = a,
            a.state = a.vars.getState(a)),
            r && a.states.forEach(function(l) {
                return i.state.add(l)
            })
        }),
        ja = o,
        Xe = s,
        this.killConflicts(),
        this
    }
    ,
    e.animate = function() {
        var r = this, i = Xe, s = this.timeline, o = this.actions.length, a, l;
        for (Xe = this,
        s.clear(),
        this._abs.length = this._final.length = this._run.length = 0,
        this.actions.forEach(function(u) {
            u.vars.animate && u.vars.animate(u);
            var c = u.vars.onEnter, f = u.vars.onLeave, d = u.targets, h, g;
            d && d.length && (c || f) && (h = new hr,
            u.states.forEach(function(p) {
                return h.add(p)
            }),
            g = h.compare(Gu.getState(d)),
            g.enter.length && c && c(g.enter),
            g.leave.length && f && f(g.leave))
        }),
        Ob(this._abs),
        this._run.forEach(function(u) {
            return u()
        }),
        l = s.duration(),
        a = this._final.slice(0),
        s.add(function() {
            l <= s.time() && (a.forEach(function(u) {
                return u()
            }),
            Nm(r, "onComplete"))
        }),
        Xe = i; o--; )
            this.actions[o].vars.once && this.actions[o].kill();
        return Nm(this, "onStart"),
        s.restart(),
        this
    }
    ,
    e.loadState = function(r) {
        r || (r = function() {
            return 0
        }
        );
        var i = [];
        return this.actions.forEach(function(s) {
            if (s.vars.loadState) {
                var o, a = function l(u) {
                    u && (s.targets = u),
                    o = i.indexOf(l),
                    ~o && (i.splice(o, 1),
                    i.length || r())
                };
                i.push(a),
                s.vars.loadState(a)
            }
        }),
        i.length || r(),
        this
    }
    ,
    e.setState = function() {
        return this.actions.forEach(function(r) {
            return r.targets = r.vars.setState && r.vars.setState(r)
        }),
        this
    }
    ,
    e.killConflicts = function(r) {
        return this.state.interrupt(r),
        this._kill.forEach(function(i) {
            return i.interrupt(r)
        }),
        this
    }
    ,
    e.run = function(r, i) {
        var s = this;
        return this !== Xe && (r || this.getState(i),
        this.loadState(function() {
            s._killed || (s.setState(),
            s.animate())
        })),
        this
    }
    ,
    e.clear = function(r) {
        this.state.clear(),
        r || (this.actions.length = 0)
    }
    ,
    e.getStateById = function(r) {
        for (var i = this.actions.length, s; i--; )
            if (s = this.actions[i].getStateById(r),
            s)
                return s;
        return this.state.idLookup[r] && this.state
    }
    ,
    e.kill = function() {
        this._killed = 1,
        this.clear(),
        delete Kd[this.id]
    }
    ,
    t
}(), Gu = function() {
    function t() {}
    return t.getState = function(n, r) {
        var i = Lf(n, r);
        return ja && ja.states.push(i),
        r && r.batch && t.batch(r.batch).state.add(i),
        i
    }
    ,
    t.from = function(n, r) {
        return r = r || {},
        "clearProps"in r || (r.clearProps = !0),
        Df(n, Lf(r.targets || n.targets, {
            props: r.props || n.props,
            simple: r.simple,
            kill: !!r.kill
        }), r, -1)
    }
    ,
    t.to = function(n, r) {
        return Df(n, Lf(r.targets || n.targets, {
            props: r.props || n.props,
            simple: r.simple,
            kill: !!r.kill
        }), r, 1)
    }
    ,
    t.fromTo = function(n, r, i) {
        return Df(n, r, i)
    }
    ,
    t.fit = function(n, r, i) {
        var s = i ? lo(i, Rb) : {}
          , o = i || s
          , a = o.absolute
          , l = o.scale
          , u = o.getVars
          , c = o.props
          , f = o.runBackwards
          , d = o.onComplete
          , h = o.simple
          , g = i && i.fitChild && Ba(i.fitChild)
          , p = Gd(r, c, h, n)
          , v = Gd(n, 0, h, p)
          , y = c ? Yu[c] : Ku
          , b = en.context();
        return c && $b(s, p.props),
        gl(v, y),
        f && ("immediateRender"in s || (s.immediateRender = !0),
        s.onComplete = function() {
            hu(v),
            d && d.apply(this, arguments)
        }
        ),
        a && Rp(v, p),
        s = bo(v, p, l || g, !s.duration && c, g, s.duration || u ? s : 0),
        typeof i == "object" && "zIndex"in i && (s.zIndex = i.zIndex),
        b && !u && b.add(function() {
            return function() {
                return hu(v)
            }
        }),
        u ? s : s.duration ? en.to(v.element, s) : null
    }
    ,
    t.makeAbsolute = function(n, r) {
        return (n instanceof hr ? n : new hr(n,r)).makeAbsolute()
    }
    ,
    t.batch = function(n) {
        return n || (n = "default"),
        Kd[n] || (Kd[n] = new uP(n))
    }
    ,
    t.killFlipsOf = function(n, r) {
        (n instanceof hr ? n.targets : Ho(n)).forEach(function(i) {
            return i && Pp(i._flip, r !== !1 ? 1 : 2)
        })
    }
    ,
    t.isFlipping = function(n) {
        var r = t.getByTarget(n);
        return !!r && r.isActive()
    }
    ,
    t.getByTarget = function(n) {
        return (Ba(n) || fu)._flip
    }
    ,
    t.getElementState = function(n, r) {
        return new Fs(Ba(n),r)
    }
    ,
    t.convertCoordinates = function(n, r, i) {
        var s = zr(r, !0, !0).multiply(zr(n));
        return i ? s.apply(i) : s
    }
    ,
    t.register = function(n) {
        if (Ri = typeof document < "u" && document.body,
        Ri) {
            en = n,
            Tp(Ri),
            Ho = en.utils.toArray,
            Yd = en.core.getStyleSaver;
            var r = en.utils.snap(.1);
            ai = function(s, o) {
                return r(parseFloat(s) + o)
            }
        }
    }
    ,
    t
}();
Gu.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Gu);
function fP(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r)
    }
}
function dP(t, e, n) {
    return e && fP(t.prototype, e),
    t
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Vt, kc, jn, Li, Mi, wo, Ib, fs, Ha, Db, li, lr, Nb, Fb = function() {
    return Vt || typeof window < "u" && (Vt = window.gsap) && Vt.registerPlugin && Vt
}, jb = 1, co = [], Ce = [], Hr = [], Ua = Date.now, Xd = function(e, n) {
    return n
}, hP = function() {
    var e = Ha.core
      , n = e.bridge || {}
      , r = e._scrollers
      , i = e._proxies;
    r.push.apply(r, Ce),
    i.push.apply(i, Hr),
    Ce = r,
    Hr = i,
    Xd = function(o, a) {
        return n[o](a)
    }
}, Bi = function(e, n) {
    return ~Hr.indexOf(e) && Hr[Hr.indexOf(e) + 1][n]
}, Va = function(e) {
    return !!~Db.indexOf(e)
}, fn = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
        passive: i !== !1,
        capture: !!s
    })
}, cn = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, ql = "scrollLeft", Yl = "scrollTop", Jd = function() {
    return li && li.isPressed || Ce.cache++
}, pu = function(e, n) {
    var r = function i(s) {
        if (s || s === 0) {
            jb && (jn.history.scrollRestoration = "manual");
            var o = li && li.isPressed;
            s = i.v = Math.round(s) || (li && li.iOS ? 1 : 0),
            e(s),
            i.cacheID = Ce.cache,
            o && Xd("ss", s)
        } else
            (n || Ce.cache !== i.cacheID || Xd("ref")) && (i.cacheID = Ce.cache,
            i.v = e());
        return i.v + i.offset
    };
    return r.offset = 0,
    e && r
}, vn = {
    s: ql,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: pu(function(t) {
        return arguments.length ? jn.scrollTo(t, Ct.sc()) : jn.pageXOffset || Li[ql] || Mi[ql] || wo[ql] || 0
    })
}, Ct = {
    s: Yl,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: vn,
    sc: pu(function(t) {
        return arguments.length ? jn.scrollTo(vn.sc(), t) : jn.pageYOffset || Li[Yl] || Mi[Yl] || wo[Yl] || 0
    })
}, Tn = function(e, n) {
    return (n && n._ctx && n._ctx.selector || Vt.utils.toArray)(e)[0] || (typeof e == "string" && Vt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, pP = function(e, n) {
    for (var r = n.length; r--; )
        if (n[r] === e || n[r].contains(e))
            return !0;
    return !1
}, Ki = function(e, n) {
    var r = n.s
      , i = n.sc;
    Va(e) && (e = Li.scrollingElement || Mi);
    var s = Ce.indexOf(e)
      , o = i === Ct.sc ? 1 : 2;
    !~s && (s = Ce.push(e) - 1),
    Ce[s + o] || fn(e, "scroll", Jd);
    var a = Ce[s + o]
      , l = a || (Ce[s + o] = pu(Bi(e, r), !0) || (Va(e) ? i : pu(function(u) {
        return arguments.length ? e[r] = u : e[r]
    })));
    return l.target = e,
    a || (l.smooth = Vt.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, Qd = function(e, n, r) {
    var i = e
      , s = e
      , o = Ua()
      , a = o
      , l = n || 50
      , u = Math.max(500, l * 3)
      , c = function(g, p) {
        var v = Ua();
        p || v - o > l ? (s = i,
        i = g,
        a = o,
        o = v) : r ? i += g : i = s + (g - s) / (v - a) * (o - a)
    }
      , f = function() {
        s = i = r ? 0 : i,
        a = o = 0
    }
      , d = function(g) {
        var p = a
          , v = s
          , y = Ua();
        return (g || g === 0) && g !== i && c(g),
        o === a || y - a > u ? 0 : (i + (r ? v : -v)) / ((r ? y : o) - p) * 1e3
    };
    return {
        update: c,
        reset: f,
        getVelocity: d
    }
}, aa = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Wm = function(e) {
    var n = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
}, Bb = function() {
    Ha = Vt.core.globals().ScrollTrigger,
    Ha && Ha.core && hP()
}, Hb = function(e) {
    return Vt = e || Fb(),
    !kc && Vt && typeof document < "u" && document.body && (jn = window,
    Li = document,
    Mi = Li.documentElement,
    wo = Li.body,
    Db = [jn, Li, Mi, wo],
    Vt.utils.clamp,
    Nb = Vt.core.context || function() {}
    ,
    fs = "onpointerenter"in wo ? "pointer" : "mouse",
    Ib = ht.isTouch = jn.matchMedia && jn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in jn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    lr = ht.eventTypes = ("ontouchstart"in Mi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Mi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return jb = 0
    }, 500),
    Bb(),
    kc = 1),
    kc
};
vn.op = Ct;
Ce.cache = 0;
var ht = function() {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype;
    return e.init = function(r) {
        kc || Hb(Vt) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ha || Bb();
        var i = r.tolerance
          , s = r.dragMinimum
          , o = r.type
          , a = r.target
          , l = r.lineHeight
          , u = r.debounce
          , c = r.preventDefault
          , f = r.onStop
          , d = r.onStopDelay
          , h = r.ignore
          , g = r.wheelSpeed
          , p = r.event
          , v = r.onDragStart
          , y = r.onDragEnd
          , b = r.onDrag
          , m = r.onPress
          , _ = r.onRelease
          , w = r.onRight
          , E = r.onLeft
          , S = r.onUp
          , L = r.onDown
          , A = r.onChangeX
          , x = r.onChangeY
          , M = r.onChange
          , R = r.onToggleX
          , P = r.onToggleY
          , O = r.onHover
          , I = r.onHoverEnd
          , N = r.onMove
          , F = r.ignoreCheck
          , H = r.isNormalizer
          , G = r.onGestureStart
          , $ = r.onGestureEnd
          , ne = r.onWheel
          , ce = r.onEnable
          , ze = r.onDisable
          , me = r.onClick
          , he = r.scrollSpeed
          , ae = r.capture
          , j = r.allowClicks
          , W = r.lockAxis
          , q = r.onLockAxis;
        this.target = a = Tn(a) || Mi,
        this.vars = r,
        h && (h = Vt.utils.toArray(h)),
        i = i || 1e-9,
        s = s || 0,
        g = g || 1,
        he = he || 1,
        o = o || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(jn.getComputedStyle(wo).lineHeight) || 22);
        var X, se, _e, T, C, D, U, k = this, V = 0, K = 0, Y = r.passive || !c && r.passive !== !1, B = Ki(a, vn), z = Ki(a, Ct), re = B(), J = z(), Q = ~o.indexOf("touch") && !~o.indexOf("pointer") && lr[0] === "pointerdown", le = Va(a), oe = a.ownerDocument || Li, Ee = [0, 0, 0], be = [0, 0, 0], nt = 0, at = function() {
            return nt = Ua()
        }, $e = function(fe, Ne) {
            return (k.event = fe) && h && pP(fe.target, h) || Ne && Q && fe.pointerType !== "touch" || F && F(fe, Ne)
        }, Lt = function() {
            k._vx.reset(),
            k._vy.reset(),
            se.pause(),
            f && f(k)
        }, ln = function() {
            var fe = k.deltaX = Wm(Ee)
              , Ne = k.deltaY = Wm(be)
              , Z = Math.abs(fe) >= i
              , ye = Math.abs(Ne) >= i;
            M && (Z || ye) && M(k, fe, Ne, Ee, be),
            Z && (w && k.deltaX > 0 && w(k),
            E && k.deltaX < 0 && E(k),
            A && A(k),
            R && k.deltaX < 0 != V < 0 && R(k),
            V = k.deltaX,
            Ee[0] = Ee[1] = Ee[2] = 0),
            ye && (L && k.deltaY > 0 && L(k),
            S && k.deltaY < 0 && S(k),
            x && x(k),
            P && k.deltaY < 0 != K < 0 && P(k),
            K = k.deltaY,
            be[0] = be[1] = be[2] = 0),
            (T || _e) && (N && N(k),
            _e && (v && _e === 1 && v(k),
            b && b(k),
            _e = 0),
            T = !1),
            D && !(D = !1) && q && q(k),
            C && (ne(k),
            C = !1),
            X = 0
        }, Wr = function(fe, Ne, Z) {
            Ee[Z] += fe,
            be[Z] += Ne,
            k._vx.update(fe),
            k._vy.update(Ne),
            u ? X || (X = requestAnimationFrame(ln)) : ln()
        }, gt = function(fe, Ne) {
            W && !U && (k.axis = U = Math.abs(fe) > Math.abs(Ne) ? "x" : "y",
            D = !0),
            U !== "y" && (Ee[2] += fe,
            k._vx.update(fe, !0)),
            U !== "x" && (be[2] += Ne,
            k._vy.update(Ne, !0)),
            u ? X || (X = requestAnimationFrame(ln)) : ln()
        }, bt = function(fe) {
            if (!$e(fe, 1)) {
                fe = aa(fe, c);
                var Ne = fe.clientX
                  , Z = fe.clientY
                  , ye = Ne - k.x
                  , ue = Z - k.y
                  , ve = k.isDragging;
                k.x = Ne,
                k.y = Z,
                (ve || (ye || ue) && (Math.abs(k.startX - Ne) >= s || Math.abs(k.startY - Z) >= s)) && (_e = ve ? 2 : 1,
                ve || (k.isDragging = !0),
                gt(ye, ue))
            }
        }, xr = k.onPress = function(we) {
            $e(we, 1) || we && we.button || (k.axis = U = null,
            se.pause(),
            k.isPressed = !0,
            we = aa(we),
            V = K = 0,
            k.startX = k.x = we.clientX,
            k.startY = k.y = we.clientY,
            k._vx.reset(),
            k._vy.reset(),
            fn(H ? a : oe, lr[1], bt, Y, !0),
            k.deltaX = k.deltaY = 0,
            m && m(k))
        }
        , Re = k.onRelease = function(we) {
            if (!$e(we, 1)) {
                cn(H ? a : oe, lr[1], bt, !0);
                var fe = !isNaN(k.y - k.startY)
                  , Ne = k.isDragging
                  , Z = Ne && (Math.abs(k.x - k.startX) > 3 || Math.abs(k.y - k.startY) > 3)
                  , ye = aa(we);
                !Z && fe && (k._vx.reset(),
                k._vy.reset(),
                c && j && Vt.delayedCall(.08, function() {
                    if (Ua() - nt > 300 && !we.defaultPrevented) {
                        if (we.target.click)
                            we.target.click();
                        else if (oe.createEvent) {
                            var ue = oe.createEvent("MouseEvents");
                            ue.initMouseEvent("click", !0, !0, jn, 1, ye.screenX, ye.screenY, ye.clientX, ye.clientY, !1, !1, !1, !1, 0, null),
                            we.target.dispatchEvent(ue)
                        }
                    }
                })),
                k.isDragging = k.isGesturing = k.isPressed = !1,
                f && Ne && !H && se.restart(!0),
                _e && ln(),
                y && Ne && y(k),
                _ && _(k, Z)
            }
        }
        , Zi = function(fe) {
            return fe.touches && fe.touches.length > 1 && (k.isGesturing = !0) && G(fe, k.isDragging)
        }, ir = function() {
            return (k.isGesturing = !1) || $(k)
        }, sr = function(fe) {
            if (!$e(fe)) {
                var Ne = B()
                  , Z = z();
                Wr((Ne - re) * he, (Z - J) * he, 1),
                re = Ne,
                J = Z,
                f && se.restart(!0)
            }
        }, or = function(fe) {
            if (!$e(fe)) {
                fe = aa(fe, c),
                ne && (C = !0);
                var Ne = (fe.deltaMode === 1 ? l : fe.deltaMode === 2 ? jn.innerHeight : 1) * g;
                Wr(fe.deltaX * Ne, fe.deltaY * Ne, 0),
                f && !H && se.restart(!0)
            }
        }, es = function(fe) {
            if (!$e(fe)) {
                var Ne = fe.clientX
                  , Z = fe.clientY
                  , ye = Ne - k.x
                  , ue = Z - k.y;
                k.x = Ne,
                k.y = Z,
                T = !0,
                f && se.restart(!0),
                (ye || ue) && gt(ye, ue)
            }
        }, qs = function(fe) {
            k.event = fe,
            O(k)
        }, qr = function(fe) {
            k.event = fe,
            I(k)
        }, Jo = function(fe) {
            return $e(fe) || aa(fe, c) && me(k)
        };
        se = k._dc = Vt.delayedCall(d || .25, Lt).pause(),
        k.deltaX = k.deltaY = 0,
        k._vx = Qd(0, 50, !0),
        k._vy = Qd(0, 50, !0),
        k.scrollX = B,
        k.scrollY = z,
        k.isDragging = k.isGesturing = k.isPressed = !1,
        Nb(this),
        k.enable = function(we) {
            return k.isEnabled || (fn(le ? oe : a, "scroll", Jd),
            o.indexOf("scroll") >= 0 && fn(le ? oe : a, "scroll", sr, Y, ae),
            o.indexOf("wheel") >= 0 && fn(a, "wheel", or, Y, ae),
            (o.indexOf("touch") >= 0 && Ib || o.indexOf("pointer") >= 0) && (fn(a, lr[0], xr, Y, ae),
            fn(oe, lr[2], Re),
            fn(oe, lr[3], Re),
            j && fn(a, "click", at, !0, !0),
            me && fn(a, "click", Jo),
            G && fn(oe, "gesturestart", Zi),
            $ && fn(oe, "gestureend", ir),
            O && fn(a, fs + "enter", qs),
            I && fn(a, fs + "leave", qr),
            N && fn(a, fs + "move", es)),
            k.isEnabled = !0,
            k.isDragging = k.isGesturing = k.isPressed = T = _e = !1,
            k._vx.reset(),
            k._vy.reset(),
            re = B(),
            J = z(),
            we && we.type && xr(we),
            ce && ce(k)),
            k
        }
        ,
        k.disable = function() {
            k.isEnabled && (co.filter(function(we) {
                return we !== k && Va(we.target)
            }).length || cn(le ? oe : a, "scroll", Jd),
            k.isPressed && (k._vx.reset(),
            k._vy.reset(),
            cn(H ? a : oe, lr[1], bt, !0)),
            cn(le ? oe : a, "scroll", sr, ae),
            cn(a, "wheel", or, ae),
            cn(a, lr[0], xr, ae),
            cn(oe, lr[2], Re),
            cn(oe, lr[3], Re),
            cn(a, "click", at, !0),
            cn(a, "click", Jo),
            cn(oe, "gesturestart", Zi),
            cn(oe, "gestureend", ir),
            cn(a, fs + "enter", qs),
            cn(a, fs + "leave", qr),
            cn(a, fs + "move", es),
            k.isEnabled = k.isPressed = k.isDragging = !1,
            ze && ze(k))
        }
        ,
        k.kill = k.revert = function() {
            k.disable();
            var we = co.indexOf(k);
            we >= 0 && co.splice(we, 1),
            li === k && (li = 0)
        }
        ,
        co.push(k),
        H && Va(a) && (li = k),
        k.enable(p)
    }
    ,
    dP(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    t
}();
ht.version = "3.13.0";
ht.create = function(t) {
    return new ht(t)
}
;
ht.register = Hb;
ht.getAll = function() {
    return co.slice()
}
;
ht.getById = function(t) {
    return co.filter(function(e) {
        return e.vars.id === t
    })[0]
}
;
Fb() && Vt.registerPlugin(ht);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var te, no, Se, Ke, Nn, He, Ap, gu, ml, za, ya, Kl, Xt, Xu, Zd, pn, qm, Ym, ro, Ub, Nf, Vb, dn, eh, zb, Wb, Ti, th, Op, To, $p, mu, nh, Ff, Gl = 1, Jt = Date.now, jf = Jt(), tr = 0, va = 0, Km = function(e, n, r) {
    var i = Ln(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i,
    i ? e.substr(6, e.length - 7) : e
}, Gm = function(e, n) {
    return n && (!Ln(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, gP = function t() {
    return va && requestAnimationFrame(t)
}, Xm = function() {
    return Xu = 1
}, Jm = function() {
    return Xu = 0
}, $r = function(e) {
    return e
}, ba = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, qb = function() {
    return typeof window < "u"
}, Yb = function() {
    return te || qb() && (te = window.gsap) && te.registerPlugin && te
}, js = function(e) {
    return !!~Ap.indexOf(e)
}, Kb = function(e) {
    return (e === "Height" ? $p : Se["inner" + e]) || Nn["client" + e] || He["client" + e]
}, Gb = function(e) {
    return Bi(e, "getBoundingClientRect") || (js(e) ? function() {
        return $c.width = Se.innerWidth,
        $c.height = $p,
        $c
    }
    : function() {
        return ii(e)
    }
    )
}, mP = function(e, n, r) {
    var i = r.d
      , s = r.d2
      , o = r.a;
    return (o = Bi(e, "getBoundingClientRect")) ? function() {
        return o()[i]
    }
    : function() {
        return (n ? Kb(s) : e["client" + s]) || 0
    }
}, _P = function(e, n) {
    return !n || ~Hr.indexOf(e) ? Gb(e) : function() {
        return $c
    }
}, Ir = function(e, n) {
    var r = n.s
      , i = n.d2
      , s = n.d
      , o = n.a;
    return Math.max(0, (r = "scroll" + i) && (o = Bi(e, r)) ? o() - Gb(e)()[s] : js(e) ? (Nn[r] || He[r]) - Kb(i) : e[r] - e["offset" + i])
}, Xl = function(e, n) {
    for (var r = 0; r < ro.length; r += 3)
        (!n || ~n.indexOf(ro[r + 1])) && e(ro[r], ro[r + 1], ro[r + 2])
}, Ln = function(e) {
    return typeof e == "string"
}, nn = function(e) {
    return typeof e == "function"
}, wa = function(e) {
    return typeof e == "number"
}, ds = function(e) {
    return typeof e == "object"
}, la = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
}, Bf = function(e, n) {
    if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function() {
            return n(e)
        }) : n(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, Xs = Math.abs, Xb = "left", Jb = "top", Lp = "right", Mp = "bottom", As = "width", Os = "height", Wa = "Right", qa = "Left", Ya = "Top", Ka = "Bottom", mt = "padding", Kn = "margin", Uo = "Width", Ip = "Height", xt = "px", Gn = function(e) {
    return Se.getComputedStyle(e)
}, yP = function(e) {
    var n = Gn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
}, Qm = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, ii = function(e, n) {
    var r = n && Gn(e)[Zd] !== "matrix(1, 0, 0, 1, 0, 0)" && te.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = e.getBoundingClientRect();
    return r && r.progress(0).kill(),
    i
}, _u = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
}, Qb = function(e) {
    var n = [], r = e.labels, i = e.duration(), s;
    for (s in r)
        n.push(r[s] / i);
    return n
}, vP = function(e) {
    return function(n) {
        return te.utils.snap(Qb(e), n)
    }
}, Dp = function(e) {
    var n = te.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(i, s) {
        return i - s
    });
    return r ? function(i, s, o) {
        o === void 0 && (o = .001);
        var a;
        if (!s)
            return n(i);
        if (s > 0) {
            for (i -= o,
            a = 0; a < r.length; a++)
                if (r[a] >= i)
                    return r[a];
            return r[a - 1]
        } else
            for (a = r.length,
            i += o; a--; )
                if (r[a] <= i)
                    return r[a];
        return r[0]
    }
    : function(i, s, o) {
        o === void 0 && (o = .001);
        var a = n(i);
        return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : n(s < 0 ? i - e : i + e)
    }
}, bP = function(e) {
    return function(n, r) {
        return Dp(Qb(e))(n, r.direction)
    }
}, Jl = function(e, n, r, i) {
    return r.split(",").forEach(function(s) {
        return e(n, s, i)
    })
}, Dt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
        passive: !i,
        capture: !!s
    })
}, It = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, Ql = function(e, n, r) {
    r = r && r.wheelHandler,
    r && (e(n, "wheel", r),
    e(n, "touchmove", r))
}, Zm = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Zl = {
    toggleActions: "play",
    anticipatePin: 0
}, yu = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Rc = function(e, n) {
    if (Ln(e)) {
        var r = e.indexOf("=")
          , i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= n / 100),
        e = e.substr(0, r - 1)),
        e = i + (e in yu ? yu[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
}, ec = function(e, n, r, i, s, o, a, l) {
    var u = s.startColor
      , c = s.endColor
      , f = s.fontSize
      , d = s.indent
      , h = s.fontWeight
      , g = Ke.createElement("div")
      , p = js(r) || Bi(r, "pinType") === "fixed"
      , v = e.indexOf("scroller") !== -1
      , y = p ? He : r
      , b = e.indexOf("start") !== -1
      , m = b ? u : c
      , _ = "border-color:" + m + ";font-size:" + f + ";color:" + m + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return _ += "position:" + ((v || l) && p ? "fixed;" : "absolute;"),
    (v || l || !p) && (_ += (i === Ct ? Lp : Mp) + ":" + (o + parseFloat(d)) + "px;"),
    a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    g._isStart = b,
    g.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
    g.style.cssText = _,
    g.innerText = n || n === 0 ? e + "-" + n : e,
    y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g),
    g._offset = g["offset" + i.op.d2],
    Pc(g, 0, i, b),
    g
}, Pc = function(e, n, r, i) {
    var s = {
        display: "block"
    }
      , o = r[i ? "os2" : "p2"]
      , a = r[i ? "p2" : "os2"];
    e._isFlipped = i,
    s[r.a + "Percent"] = i ? -100 : 0,
    s[r.a] = i ? "1px" : 0,
    s["border" + o + Uo] = 1,
    s["border" + a + Uo] = 0,
    s[r.p] = n + "px",
    te.set(e, s)
}, Te = [], rh = {}, _l, e_ = function() {
    return Jt() - tr > 34 && (_l || (_l = requestAnimationFrame(ci)))
}, Js = function() {
    (!dn || !dn.isPressed || dn.startX > He.clientWidth) && (Ce.cache++,
    dn ? _l || (_l = requestAnimationFrame(ci)) : ci(),
    tr || Hs("scrollStart"),
    tr = Jt())
}, Hf = function() {
    Wb = Se.innerWidth,
    zb = Se.innerHeight
}, Ta = function(e) {
    Ce.cache++,
    (e === !0 || !Xt && !Vb && !Ke.fullscreenElement && !Ke.webkitFullscreenElement && (!eh || Wb !== Se.innerWidth || Math.abs(Se.innerHeight - zb) > Se.innerHeight * .25)) && gu.restart(!0)
}, Bs = {}, wP = [], Zb = function t() {
    return It(xe, "scrollEnd", t) || gs(!0)
}, Hs = function(e) {
    return Bs[e] && Bs[e].map(function(n) {
        return n()
    }) || wP
}, $n = [], ew = function(e) {
    for (var n = 0; n < $n.length; n += 5)
        (!e || $n[n + 4] && $n[n + 4].query === e) && ($n[n].style.cssText = $n[n + 1],
        $n[n].getBBox && $n[n].setAttribute("transform", $n[n + 2] || ""),
        $n[n + 3].uncache = 1)
}, Np = function(e, n) {
    var r;
    for (pn = 0; pn < Te.length; pn++)
        r = Te[pn],
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    mu = !0,
    n && ew(n),
    n || Hs("revert")
}, tw = function(e, n) {
    Ce.cache++,
    (n || !gn) && Ce.forEach(function(r) {
        return nn(r) && r.cacheID++ && (r.rec = 0)
    }),
    Ln(e) && (Se.history.scrollRestoration = Op = e)
}, gn, $s = 0, t_, TP = function() {
    if (t_ !== $s) {
        var e = t_ = $s;
        requestAnimationFrame(function() {
            return e === $s && gs(!0)
        })
    }
}, nw = function() {
    He.appendChild(To),
    $p = !dn && To.offsetHeight || Se.innerHeight,
    He.removeChild(To)
}, n_ = function(e) {
    return ml(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
        return n.style.display = e ? "none" : "block"
    })
}, gs = function(e, n) {
    if (Nn = Ke.documentElement,
    He = Ke.body,
    Ap = [Se, Ke, Nn, He],
    tr && !e && !mu) {
        Dt(xe, "scrollEnd", Zb);
        return
    }
    nw(),
    gn = xe.isRefreshing = !0,
    Ce.forEach(function(i) {
        return nn(i) && ++i.cacheID && (i.rec = i())
    });
    var r = Hs("refreshInit");
    Ub && xe.sort(),
    n || Np(),
    Ce.forEach(function(i) {
        nn(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    Te.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    mu = !1,
    Te.forEach(function(i) {
        if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , o = i.pin[s];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[s] - o),
            i.refresh()
        }
    }),
    nh = 1,
    n_(!0),
    Te.forEach(function(i) {
        var s = Ir(i.scroller, i._dir)
          , o = i.vars.end === "max" || i._endClamp && i.end > s
          , a = i._startClamp && i.start >= s;
        (o || a) && i.setPositions(a ? s - 1 : i.start, o ? Math.max(a ? s : i.start + 1, s) : i.end, !0)
    }),
    n_(!1),
    nh = 0,
    r.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    Ce.forEach(function(i) {
        nn(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    tw(Op, 1),
    gu.pause(),
    $s++,
    gn = 2,
    ci(2),
    Te.forEach(function(i) {
        return nn(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    gn = xe.isRefreshing = !1,
    Hs("refresh")
}, ih = 0, Ac = 1, Ga, ci = function(e) {
    if (e === 2 || !gn && !mu) {
        xe.isUpdating = !0,
        Ga && Ga.update(0);
        var n = Te.length
          , r = Jt()
          , i = r - jf >= 50
          , s = n && Te[0].scroll();
        if (Ac = ih > s ? -1 : 1,
        gn || (ih = s),
        i && (tr && !Xu && r - tr > 200 && (tr = 0,
        Hs("scrollEnd")),
        ya = jf,
        jf = r),
        Ac < 0) {
            for (pn = n; pn-- > 0; )
                Te[pn] && Te[pn].update(0, i);
            Ac = 1
        } else
            for (pn = 0; pn < n; pn++)
                Te[pn] && Te[pn].update(0, i);
        xe.isUpdating = !1
    }
    _l = 0
}, sh = [Xb, Jb, Mp, Lp, Kn + Ka, Kn + Wa, Kn + Ya, Kn + qa, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Oc = sh.concat([As, Os, "boxSizing", "max" + Uo, "max" + Ip, "position", Kn, mt, mt + Ya, mt + Wa, mt + Ka, mt + qa]), xP = function(e, n, r) {
    xo(r);
    var i = e._gsap;
    if (i.spacerIsNative)
        xo(i.spacerState);
    else if (e._gsap.swappedIn) {
        var s = n.parentNode;
        s && (s.insertBefore(e, n),
        s.removeChild(n))
    }
    e._gsap.swappedIn = !1
}, Uf = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
        for (var s = sh.length, o = n.style, a = e.style, l; s--; )
            l = sh[s],
            o[l] = r[l];
        o.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (o.display = "inline-block"),
        a[Mp] = a[Lp] = "auto",
        o.flexBasis = r.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[As] = _u(e, vn) + xt,
        o[Os] = _u(e, Ct) + xt,
        o[mt] = a[Kn] = a[Jb] = a[Xb] = "0",
        xo(i),
        a[As] = a["max" + Uo] = r[As],
        a[Os] = a["max" + Ip] = r[Os],
        a[mt] = r[mt],
        e.parentNode !== n && (e.parentNode.insertBefore(n, e),
        n.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, EP = /([A-Z])/g, xo = function(e) {
    if (e) {
        var n = e.t.style, r = e.length, i = 0, s, o;
        for ((e.t._gsap || te.core.getCache(e.t)).uncache = 1; i < r; i += 2)
            o = e[i + 1],
            s = e[i],
            o ? n[s] = o : n[s] && n.removeProperty(s.replace(EP, "-$1").toLowerCase())
    }
}, tc = function(e) {
    for (var n = Oc.length, r = e.style, i = [], s = 0; s < n; s++)
        i.push(Oc[s], r[Oc[s]]);
    return i.t = e,
    i
}, SP = function(e, n, r) {
    for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
        a = e[o],
        i.push(a, a in n ? n[a] : e[o + 1]);
    return i.t = e.t,
    i
}, $c = {
    left: 0,
    top: 0
}, r_ = function(e, n, r, i, s, o, a, l, u, c, f, d, h, g) {
    nn(e) && (e = e(l)),
    Ln(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Rc("0" + e.substr(3), r) : 0));
    var p = h ? h.time() : 0, v, y, b;
    if (h && h.seek(0),
    isNaN(e) || (e = +e),
    wa(e))
        h && (e = te.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, d, e)),
        a && Pc(a, r, i, !0);
    else {
        nn(n) && (n = n(l));
        var m = (e || "0").split(" "), _, w, E, S;
        b = Tn(n, l) || He,
        _ = ii(b) || {},
        (!_ || !_.left && !_.top) && Gn(b).display === "none" && (S = b.style.display,
        b.style.display = "block",
        _ = ii(b),
        S ? b.style.display = S : b.style.removeProperty("display")),
        w = Rc(m[0], _[i.d]),
        E = Rc(m[1] || "0", r),
        e = _[i.p] - u[i.p] - c + w + s - E,
        a && Pc(a, E, i, r - E < 20 || a._isStart && E > 20),
        r -= r - E
    }
    if (g && (l[g] = e || -.001,
    e < 0 && (e = 0)),
    o) {
        var L = e + r
          , A = o._isStart;
        v = "scroll" + i.d2,
        Pc(o, L, i, A && L > 20 || !A && (f ? Math.max(He[v], Nn[v]) : o.parentNode[v]) <= L + 1),
        f && (u = ii(a),
        f && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + xt))
    }
    return h && b && (v = ii(b),
    h.seek(d),
    y = ii(b),
    h._caScrollDist = v[i.p] - y[i.p],
    e = e / h._caScrollDist * d),
    h && h.seek(p),
    h ? e : Math.round(e)
}, CP = /(webkit|moz|length|cssText|inset)/i, i_ = function(e, n, r, i) {
    if (e.parentNode !== n) {
        var s = e.style, o, a;
        if (n === He) {
            e._stOrig = s.cssText,
            a = Gn(e);
            for (o in a)
                !+o && !CP.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
            s.top = r,
            s.left = i
        } else
            s.cssText = e._stOrig;
        te.core.getCache(e).uncache = 1,
        n.appendChild(e)
    }
}, rw = function(e, n, r) {
    var i = n
      , s = i;
    return function(o) {
        var a = Math.round(e());
        return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && (o = a,
        r && r()),
        s = i,
        i = Math.round(o),
        i
    }
}, nc = function(e, n, r) {
    var i = {};
    i[n.p] = "+=" + r,
    te.set(e, i)
}, s_ = function(e, n) {
    var r = Ki(e, n)
      , i = "_scroll" + n.p2
      , s = function o(a, l, u, c, f) {
        var d = o.tween
          , h = l.onComplete
          , g = {};
        u = u || r();
        var p = rw(r, u, function() {
            d.kill(),
            o.tween = 0
        });
        return f = c && f || 0,
        c = c || a - u,
        d && d.kill(),
        l[i] = a,
        l.inherit = !1,
        l.modifiers = g,
        g[i] = function() {
            return p(u + c * d.ratio + f * d.ratio * d.ratio)
        }
        ,
        l.onUpdate = function() {
            Ce.cache++,
            o.tween && ci()
        }
        ,
        l.onComplete = function() {
            o.tween = 0,
            h && h.call(d)
        }
        ,
        d = o.tween = te.to(e, l),
        d
    };
    return e[i] = r,
    r.wheelHandler = function() {
        return s.tween && s.tween.kill() && (s.tween = 0)
    }
    ,
    Dt(e, "wheel", r.wheelHandler),
    xe.isTouch && Dt(e, "touchmove", r.wheelHandler),
    s
}, xe = function() {
    function t(n, r) {
        no || t.register(te) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        th(this),
        this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !va) {
            this.update = this.refresh = this.kill = $r;
            return
        }
        r = Qm(Ln(r) || wa(r) || r.nodeType ? {
            trigger: r
        } : r, Zl);
        var s = r, o = s.onUpdate, a = s.toggleClass, l = s.id, u = s.onToggle, c = s.onRefresh, f = s.scrub, d = s.trigger, h = s.pin, g = s.pinSpacing, p = s.invalidateOnRefresh, v = s.anticipatePin, y = s.onScrubComplete, b = s.onSnapComplete, m = s.once, _ = s.snap, w = s.pinReparent, E = s.pinSpacer, S = s.containerAnimation, L = s.fastScrollEnd, A = s.preventOverlaps, x = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? vn : Ct, M = !f && f !== 0, R = Tn(r.scroller || Se), P = te.core.getCache(R), O = js(R), I = ("pinType"in r ? r.pinType : Bi(R, "pinType") || O && "fixed") === "fixed", N = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], F = M && r.toggleActions.split(" "), H = "markers"in r ? r.markers : Zl.markers, G = O ? 0 : parseFloat(Gn(R)["border" + x.p2 + Uo]) || 0, $ = this, ne = r.onRefreshInit && function() {
            return r.onRefreshInit($)
        }
        , ce = mP(R, O, x), ze = _P(R, O), me = 0, he = 0, ae = 0, j = Ki(R, x), W, q, X, se, _e, T, C, D, U, k, V, K, Y, B, z, re, J, Q, le, oe, Ee, be, nt, at, $e, Lt, ln, Wr, gt, bt, xr, Re, Zi, ir, sr, or, es, qs, qr;
        if ($._startClamp = $._endClamp = !1,
        $._dir = x,
        v *= 45,
        $.scroller = R,
        $.scroll = S ? S.time.bind(S) : j,
        se = j(),
        $.vars = r,
        i = i || r.animation,
        "refreshPriority"in r && (Ub = 1,
        r.refreshPriority === -9999 && (Ga = $)),
        P.tweenScroll = P.tweenScroll || {
            top: s_(R, Ct),
            left: s_(R, vn)
        },
        $.tweenTo = W = P.tweenScroll[x.p],
        $.scrubDuration = function(Z) {
            Zi = wa(Z) && Z,
            Zi ? Re ? Re.duration(Z) : Re = te.to(i, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: Zi,
                paused: !0,
                onComplete: function() {
                    return y && y($)
                }
            }) : (Re && Re.progress(1).kill(),
            Re = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted && !$.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        $.animation = i.pause(),
        i.scrollTrigger = $,
        $.scrubDuration(f),
        bt = 0,
        l || (l = i.vars.id)),
        _ && ((!ds(_) || _.push) && (_ = {
            snapTo: _
        }),
        "scrollBehavior"in He.style && te.set(O ? [He, Nn] : R, {
            scrollBehavior: "auto"
        }),
        Ce.forEach(function(Z) {
            return nn(Z) && Z.target === (O ? Ke.scrollingElement || Nn : R) && (Z.smooth = !1)
        }),
        X = nn(_.snapTo) ? _.snapTo : _.snapTo === "labels" ? vP(i) : _.snapTo === "labelsDirectional" ? bP(i) : _.directional !== !1 ? function(Z, ye) {
            return Dp(_.snapTo)(Z, Jt() - he < 500 ? 0 : ye.direction)
        }
        : te.utils.snap(_.snapTo),
        ir = _.duration || {
            min: .1,
            max: 2
        },
        ir = ds(ir) ? za(ir.min, ir.max) : za(ir, ir),
        sr = te.delayedCall(_.delay || Zi / 2 || .1, function() {
            var Z = j()
              , ye = Jt() - he < 500
              , ue = W.tween;
            if ((ye || Math.abs($.getVelocity()) < 10) && !ue && !Xu && me !== Z) {
                var ve = (Z - T) / B, Mt = i && !M ? i.totalProgress() : ve, Pe = ye ? 0 : (Mt - xr) / (Jt() - ya) * 1e3 || 0, ft = te.utils.clamp(-ve, 1 - ve, Xs(Pe / 2) * Pe / .185), qt = ve + (_.inertia === !1 ? 0 : ft), lt, Ze, We = _, ar = We.onStart, rt = We.onInterrupt, An = We.onComplete;
                if (lt = X(qt, $),
                wa(lt) || (lt = qt),
                Ze = Math.max(0, Math.round(T + lt * B)),
                Z <= C && Z >= T && Ze !== Z) {
                    if (ue && !ue._initted && ue.data <= Xs(Ze - Z))
                        return;
                    _.inertia === !1 && (ft = lt - ve),
                    W(Ze, {
                        duration: ir(Xs(Math.max(Xs(qt - Mt), Xs(lt - Mt)) * .185 / Pe / .05 || 0)),
                        ease: _.ease || "power3",
                        data: Xs(Ze - Z),
                        onInterrupt: function() {
                            return sr.restart(!0) && rt && rt($)
                        },
                        onComplete: function() {
                            $.update(),
                            me = j(),
                            i && !M && (Re ? Re.resetTo("totalProgress", lt, i._tTime / i._tDur) : i.progress(lt)),
                            bt = xr = i && !M ? i.totalProgress() : $.progress,
                            b && b($),
                            An && An($)
                        }
                    }, Z, ft * B, Ze - Z - ft * B),
                    ar && ar($, W.tween)
                }
            } else
                $.isActive && me !== Z && sr.restart(!0)
        }).pause()),
        l && (rh[l] = $),
        d = $.trigger = Tn(d || h !== !0 && h),
        qr = d && d._gsap && d._gsap.stRevert,
        qr && (qr = qr($)),
        h = h === !0 ? d : Tn(h),
        Ln(a) && (a = {
            targets: d,
            className: a
        }),
        h && (g === !1 || g === Kn || (g = !g && h.parentNode && h.parentNode.style && Gn(h.parentNode).display === "flex" ? !1 : mt),
        $.pin = h,
        q = te.core.getCache(h),
        q.spacer ? z = q.pinState : (E && (E = Tn(E),
        E && !E.nodeType && (E = E.current || E.nativeElement),
        q.spacerIsNative = !!E,
        E && (q.spacerState = tc(E))),
        q.spacer = Q = E || Ke.createElement("div"),
        Q.classList.add("pin-spacer"),
        l && Q.classList.add("pin-spacer-" + l),
        q.pinState = z = tc(h)),
        r.force3D !== !1 && te.set(h, {
            force3D: !0
        }),
        $.spacer = Q = q.spacer,
        gt = Gn(h),
        at = gt[g + x.os2],
        oe = te.getProperty(h),
        Ee = te.quickSetter(h, x.a, xt),
        Uf(h, Q, gt),
        J = tc(h)),
        H) {
            K = ds(H) ? Qm(H, Zm) : Zm,
            k = ec("scroller-start", l, R, x, K, 0),
            V = ec("scroller-end", l, R, x, K, 0, k),
            le = k["offset" + x.op.d2];
            var Jo = Tn(Bi(R, "content") || R);
            D = this.markerStart = ec("start", l, Jo, x, K, le, 0, S),
            U = this.markerEnd = ec("end", l, Jo, x, K, le, 0, S),
            S && (qs = te.quickSetter([D, U], x.a, xt)),
            !I && !(Hr.length && Bi(R, "fixedMarkers") === !0) && (yP(O ? He : R),
            te.set([k, V], {
                force3D: !0
            }),
            Lt = te.quickSetter(k, x.a, xt),
            Wr = te.quickSetter(V, x.a, xt))
        }
        if (S) {
            var we = S.vars.onUpdate
              , fe = S.vars.onUpdateParams;
            S.eventCallback("onUpdate", function() {
                $.update(0, 0, 1),
                we && we.apply(S, fe || [])
            })
        }
        if ($.previous = function() {
            return Te[Te.indexOf($) - 1]
        }
        ,
        $.next = function() {
            return Te[Te.indexOf($) + 1]
        }
        ,
        $.revert = function(Z, ye) {
            if (!ye)
                return $.kill(!0);
            var ue = Z !== !1 || !$.enabled
              , ve = Xt;
            ue !== $.isReverted && (ue && (or = Math.max(j(), $.scroll.rec || 0),
            ae = $.progress,
            es = i && i.progress()),
            D && [D, U, k, V].forEach(function(Mt) {
                return Mt.style.display = ue ? "none" : "block"
            }),
            ue && (Xt = $,
            $.update(ue)),
            h && (!w || !$.isActive) && (ue ? xP(h, Q, z) : Uf(h, Q, Gn(h), $e)),
            ue || $.update(ue),
            Xt = ve,
            $.isReverted = ue)
        }
        ,
        $.refresh = function(Z, ye, ue, ve) {
            if (!((Xt || !$.enabled) && !ye)) {
                if (h && Z && tr) {
                    Dt(t, "scrollEnd", Zb);
                    return
                }
                !gn && ne && ne($),
                Xt = $,
                W.tween && !ue && (W.tween.kill(),
                W.tween = 0),
                Re && Re.pause(),
                p && i && (i.revert({
                    kill: !1
                }).invalidate(),
                i.getChildren && i.getChildren(!0, !0, !1).forEach(function(_i) {
                    return _i.vars.immediateRender && _i.render(0, !0, !0)
                })),
                $.isReverted || $.revert(!0, !0),
                $._subPinOffset = !1;
                var Mt = ce(), Pe = ze(), ft = S ? S.duration() : Ir(R, x), qt = B <= .01 || !B, lt = 0, Ze = ve || 0, We = ds(ue) ? ue.end : r.end, ar = r.endTrigger || d, rt = ds(ue) ? ue.start : r.start || (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"), An = $.pinnedContainer = r.pinnedContainer && Tn(r.pinnedContainer, $), Er = d && Math.max(0, Te.indexOf($)) || 0, Ft = Er, jt, Yt, ts, Pl, Kt, wt, Sr, Zu, Gp, Qo, Cr, Zo, Al;
                for (H && ds(ue) && (Zo = te.getProperty(k, x.p),
                Al = te.getProperty(V, x.p)); Ft-- > 0; )
                    wt = Te[Ft],
                    wt.end || wt.refresh(0, 1) || (Xt = $),
                    Sr = wt.pin,
                    Sr && (Sr === d || Sr === h || Sr === An) && !wt.isReverted && (Qo || (Qo = []),
                    Qo.unshift(wt),
                    wt.revert(!0, !0)),
                    wt !== Te[Ft] && (Er--,
                    Ft--);
                for (nn(rt) && (rt = rt($)),
                rt = Km(rt, "start", $),
                T = r_(rt, d, Mt, x, j(), D, k, $, Pe, G, I, ft, S, $._startClamp && "_startClamp") || (h ? -.001 : 0),
                nn(We) && (We = We($)),
                Ln(We) && !We.indexOf("+=") && (~We.indexOf(" ") ? We = (Ln(rt) ? rt.split(" ")[0] : "") + We : (lt = Rc(We.substr(2), Mt),
                We = Ln(rt) ? rt : (S ? te.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, T) : T) + lt,
                ar = d)),
                We = Km(We, "end", $),
                C = Math.max(T, r_(We || (ar ? "100% 0" : ft), ar, Mt, x, j() + lt, U, V, $, Pe, G, I, ft, S, $._endClamp && "_endClamp")) || -.001,
                lt = 0,
                Ft = Er; Ft--; )
                    wt = Te[Ft],
                    Sr = wt.pin,
                    Sr && wt.start - wt._pinPush <= T && !S && wt.end > 0 && (jt = wt.end - ($._startClamp ? Math.max(0, wt.start) : wt.start),
                    (Sr === d && wt.start - wt._pinPush < T || Sr === An) && isNaN(rt) && (lt += jt * (1 - wt.progress)),
                    Sr === h && (Ze += jt));
                if (T += lt,
                C += lt,
                $._startClamp && ($._startClamp += lt),
                $._endClamp && !gn && ($._endClamp = C || -.001,
                C = Math.min(C, Ir(R, x))),
                B = C - T || (T -= .01) && .001,
                qt && (ae = te.utils.clamp(0, 1, te.utils.normalize(T, C, or))),
                $._pinPush = Ze,
                D && lt && (jt = {},
                jt[x.a] = "+=" + lt,
                An && (jt[x.p] = "-=" + j()),
                te.set([D, U], jt)),
                h && !(nh && $.end >= Ir(R, x)))
                    jt = Gn(h),
                    Pl = x === Ct,
                    ts = j(),
                    be = parseFloat(oe(x.a)) + Ze,
                    !ft && C > 1 && (Cr = (O ? Ke.scrollingElement || Nn : R).style,
                    Cr = {
                        style: Cr,
                        value: Cr["overflow" + x.a.toUpperCase()]
                    },
                    O && Gn(He)["overflow" + x.a.toUpperCase()] !== "scroll" && (Cr.style["overflow" + x.a.toUpperCase()] = "scroll")),
                    Uf(h, Q, jt),
                    J = tc(h),
                    Yt = ii(h, !0),
                    Zu = I && Ki(R, Pl ? vn : Ct)(),
                    g ? ($e = [g + x.os2, B + Ze + xt],
                    $e.t = Q,
                    Ft = g === mt ? _u(h, x) + B + Ze : 0,
                    Ft && ($e.push(x.d, Ft + xt),
                    Q.style.flexBasis !== "auto" && (Q.style.flexBasis = Ft + xt)),
                    xo($e),
                    An && Te.forEach(function(_i) {
                        _i.pin === An && _i.vars.pinSpacing !== !1 && (_i._subPinOffset = !0)
                    }),
                    I && j(or)) : (Ft = _u(h, x),
                    Ft && Q.style.flexBasis !== "auto" && (Q.style.flexBasis = Ft + xt)),
                    I && (Kt = {
                        top: Yt.top + (Pl ? ts - T : Zu) + xt,
                        left: Yt.left + (Pl ? Zu : ts - T) + xt,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    Kt[As] = Kt["max" + Uo] = Math.ceil(Yt.width) + xt,
                    Kt[Os] = Kt["max" + Ip] = Math.ceil(Yt.height) + xt,
                    Kt[Kn] = Kt[Kn + Ya] = Kt[Kn + Wa] = Kt[Kn + Ka] = Kt[Kn + qa] = "0",
                    Kt[mt] = jt[mt],
                    Kt[mt + Ya] = jt[mt + Ya],
                    Kt[mt + Wa] = jt[mt + Wa],
                    Kt[mt + Ka] = jt[mt + Ka],
                    Kt[mt + qa] = jt[mt + qa],
                    re = SP(z, Kt, w),
                    gn && j(0)),
                    i ? (Gp = i._initted,
                    Nf(1),
                    i.render(i.duration(), !0, !0),
                    nt = oe(x.a) - be + B + Ze,
                    ln = Math.abs(B - nt) > 1,
                    I && ln && re.splice(re.length - 2, 2),
                    i.render(0, !0, !0),
                    Gp || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    Nf(0)) : nt = B,
                    Cr && (Cr.value ? Cr.style["overflow" + x.a.toUpperCase()] = Cr.value : Cr.style.removeProperty("overflow-" + x.a));
                else if (d && j() && !S)
                    for (Yt = d.parentNode; Yt && Yt !== He; )
                        Yt._pinOffset && (T -= Yt._pinOffset,
                        C -= Yt._pinOffset),
                        Yt = Yt.parentNode;
                Qo && Qo.forEach(function(_i) {
                    return _i.revert(!1, !0)
                }),
                $.start = T,
                $.end = C,
                se = _e = gn ? or : j(),
                !S && !gn && (se < or && j(or),
                $.scroll.rec = 0),
                $.revert(!1, !0),
                he = Jt(),
                sr && (me = -1,
                sr.restart(!0)),
                Xt = 0,
                i && M && (i._initted || es) && i.progress() !== es && i.progress(es || 0, !0).render(i.time(), !0, !0),
                (qt || ae !== $.progress || S || p || i && !i._initted) && (i && !M && (i._initted || ae || i.vars.immediateRender !== !1) && i.totalProgress(S && T < -.001 && !ae ? te.utils.normalize(T, C, 0) : ae, !0),
                $.progress = qt || (se - T) / B === ae ? 0 : ae),
                h && g && (Q._pinOffset = Math.round($.progress * nt)),
                Re && Re.invalidate(),
                isNaN(Zo) || (Zo -= te.getProperty(k, x.p),
                Al -= te.getProperty(V, x.p),
                nc(k, x, Zo),
                nc(D, x, Zo - (ve || 0)),
                nc(V, x, Al),
                nc(U, x, Al - (ve || 0))),
                qt && !gn && $.update(),
                c && !gn && !Y && (Y = !0,
                c($),
                Y = !1)
            }
        }
        ,
        $.getVelocity = function() {
            return (j() - _e) / (Jt() - ya) * 1e3 || 0
        }
        ,
        $.endAnimation = function() {
            la($.callbackAnimation),
            i && (Re ? Re.progress(1) : i.paused() ? M || la(i, $.direction < 0, 1) : la(i, i.reversed()))
        }
        ,
        $.labelToScroll = function(Z) {
            return i && i.labels && (T || $.refresh() || T) + i.labels[Z] / i.duration() * B || 0
        }
        ,
        $.getTrailing = function(Z) {
            var ye = Te.indexOf($)
              , ue = $.direction > 0 ? Te.slice(0, ye).reverse() : Te.slice(ye + 1);
            return (Ln(Z) ? ue.filter(function(ve) {
                return ve.vars.preventOverlaps === Z
            }) : ue).filter(function(ve) {
                return $.direction > 0 ? ve.end <= T : ve.start >= C
            })
        }
        ,
        $.update = function(Z, ye, ue) {
            if (!(S && !ue && !Z)) {
                var ve = gn === !0 ? or : $.scroll(), Mt = Z ? 0 : (ve - T) / B, Pe = Mt < 0 ? 0 : Mt > 1 ? 1 : Mt || 0, ft = $.progress, qt, lt, Ze, We, ar, rt, An, Er;
                if (ye && (_e = se,
                se = S ? j() : ve,
                _ && (xr = bt,
                bt = i && !M ? i.totalProgress() : Pe)),
                v && h && !Xt && !Gl && tr && (!Pe && T < ve + (ve - _e) / (Jt() - ya) * v ? Pe = 1e-4 : Pe === 1 && C > ve + (ve - _e) / (Jt() - ya) * v && (Pe = .9999)),
                Pe !== ft && $.enabled) {
                    if (qt = $.isActive = !!Pe && Pe < 1,
                    lt = !!ft && ft < 1,
                    rt = qt !== lt,
                    ar = rt || !!Pe != !!ft,
                    $.direction = Pe > ft ? 1 : -1,
                    $.progress = Pe,
                    ar && !Xt && (Ze = Pe && !ft ? 0 : Pe === 1 ? 1 : ft === 1 ? 2 : 3,
                    M && (We = !rt && F[Ze + 1] !== "none" && F[Ze + 1] || F[Ze],
                    Er = i && (We === "complete" || We === "reset" || We in i))),
                    A && (rt || Er) && (Er || f || !i) && (nn(A) ? A($) : $.getTrailing(A).forEach(function(ts) {
                        return ts.endAnimation()
                    })),
                    M || (Re && !Xt && !Gl ? (Re._dp._time - Re._start !== Re._time && Re.render(Re._dp._time - Re._start),
                    Re.resetTo ? Re.resetTo("totalProgress", Pe, i._tTime / i._tDur) : (Re.vars.totalProgress = Pe,
                    Re.invalidate().restart())) : i && i.totalProgress(Pe, !!(Xt && (he || Z)))),
                    h) {
                        if (Z && g && (Q.style[g + x.os2] = at),
                        !I)
                            Ee(ba(be + nt * Pe));
                        else if (ar) {
                            if (An = !Z && Pe > ft && C + 1 > ve && ve + 1 >= Ir(R, x),
                            w)
                                if (!Z && (qt || An)) {
                                    var Ft = ii(h, !0)
                                      , jt = ve - T;
                                    i_(h, He, Ft.top + (x === Ct ? jt : 0) + xt, Ft.left + (x === Ct ? 0 : jt) + xt)
                                } else
                                    i_(h, Q);
                            xo(qt || An ? re : J),
                            ln && Pe < 1 && qt || Ee(be + (Pe === 1 && !An ? nt : 0))
                        }
                    }
                    _ && !W.tween && !Xt && !Gl && sr.restart(!0),
                    a && (rt || m && Pe && (Pe < 1 || !Ff)) && ml(a.targets).forEach(function(ts) {
                        return ts.classList[qt || m ? "add" : "remove"](a.className)
                    }),
                    o && !M && !Z && o($),
                    ar && !Xt ? (M && (Er && (We === "complete" ? i.pause().totalProgress(1) : We === "reset" ? i.restart(!0).pause() : We === "restart" ? i.restart(!0) : i[We]()),
                    o && o($)),
                    (rt || !Ff) && (u && rt && Bf($, u),
                    N[Ze] && Bf($, N[Ze]),
                    m && (Pe === 1 ? $.kill(!1, 1) : N[Ze] = 0),
                    rt || (Ze = Pe === 1 ? 1 : 3,
                    N[Ze] && Bf($, N[Ze]))),
                    L && !qt && Math.abs($.getVelocity()) > (wa(L) ? L : 2500) && (la($.callbackAnimation),
                    Re ? Re.progress(1) : la(i, We === "reverse" ? 1 : !Pe, 1))) : M && o && !Xt && o($)
                }
                if (Wr) {
                    var Yt = S ? ve / S.duration() * (S._caScrollDist || 0) : ve;
                    Lt(Yt + (k._isFlipped ? 1 : 0)),
                    Wr(Yt)
                }
                qs && qs(-ve / S.duration() * (S._caScrollDist || 0))
            }
        }
        ,
        $.enable = function(Z, ye) {
            $.enabled || ($.enabled = !0,
            Dt(R, "resize", Ta),
            O || Dt(R, "scroll", Js),
            ne && Dt(t, "refreshInit", ne),
            Z !== !1 && ($.progress = ae = 0,
            se = _e = me = j()),
            ye !== !1 && $.refresh())
        }
        ,
        $.getTween = function(Z) {
            return Z && W ? W.tween : Re
        }
        ,
        $.setPositions = function(Z, ye, ue, ve) {
            if (S) {
                var Mt = S.scrollTrigger
                  , Pe = S.duration()
                  , ft = Mt.end - Mt.start;
                Z = Mt.start + ft * Z / Pe,
                ye = Mt.start + ft * ye / Pe
            }
            $.refresh(!1, !1, {
                start: Gm(Z, ue && !!$._startClamp),
                end: Gm(ye, ue && !!$._endClamp)
            }, ve),
            $.update()
        }
        ,
        $.adjustPinSpacing = function(Z) {
            if ($e && Z) {
                var ye = $e.indexOf(x.d) + 1;
                $e[ye] = parseFloat($e[ye]) + Z + xt,
                $e[1] = parseFloat($e[1]) + Z + xt,
                xo($e)
            }
        }
        ,
        $.disable = function(Z, ye) {
            if ($.enabled && (Z !== !1 && $.revert(!0, !0),
            $.enabled = $.isActive = !1,
            ye || Re && Re.pause(),
            or = 0,
            q && (q.uncache = 1),
            ne && It(t, "refreshInit", ne),
            sr && (sr.pause(),
            W.tween && W.tween.kill() && (W.tween = 0)),
            !O)) {
                for (var ue = Te.length; ue--; )
                    if (Te[ue].scroller === R && Te[ue] !== $)
                        return;
                It(R, "resize", Ta),
                O || It(R, "scroll", Js)
            }
        }
        ,
        $.kill = function(Z, ye) {
            $.disable(Z, ye),
            Re && !ye && Re.kill(),
            l && delete rh[l];
            var ue = Te.indexOf($);
            ue >= 0 && Te.splice(ue, 1),
            ue === pn && Ac > 0 && pn--,
            ue = 0,
            Te.forEach(function(ve) {
                return ve.scroller === $.scroller && (ue = 1)
            }),
            ue || gn || ($.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            Z && i.revert({
                kill: !1
            }),
            ye || i.kill()),
            D && [D, U, k, V].forEach(function(ve) {
                return ve.parentNode && ve.parentNode.removeChild(ve)
            }),
            Ga === $ && (Ga = 0),
            h && (q && (q.uncache = 1),
            ue = 0,
            Te.forEach(function(ve) {
                return ve.pin === h && ue++
            }),
            ue || (q.spacer = 0)),
            r.onKill && r.onKill($)
        }
        ,
        Te.push($),
        $.enable(!1, !1),
        qr && qr($),
        i && i.add && !B) {
            var Ne = $.update;
            $.update = function() {
                $.update = Ne,
                Ce.cache++,
                T || C || $.refresh()
            }
            ,
            te.delayedCall(.01, $.update),
            B = .01,
            T = C = 0
        } else
            $.refresh();
        h && TP()
    }
    ,
    t.register = function(r) {
        return no || (te = r || Yb(),
        qb() && window.document && t.enable(),
        no = va),
        no
    }
    ,
    t.defaults = function(r) {
        if (r)
            for (var i in r)
                Zl[i] = r[i];
        return Zl
    }
    ,
    t.disable = function(r, i) {
        va = 0,
        Te.forEach(function(o) {
            return o[i ? "kill" : "disable"](r)
        }),
        It(Se, "wheel", Js),
        It(Ke, "scroll", Js),
        clearInterval(Kl),
        It(Ke, "touchcancel", $r),
        It(He, "touchstart", $r),
        Jl(It, Ke, "pointerdown,touchstart,mousedown", Xm),
        Jl(It, Ke, "pointerup,touchend,mouseup", Jm),
        gu.kill(),
        Xl(It);
        for (var s = 0; s < Ce.length; s += 3)
            Ql(It, Ce[s], Ce[s + 1]),
            Ql(It, Ce[s], Ce[s + 2])
    }
    ,
    t.enable = function() {
        if (Se = window,
        Ke = document,
        Nn = Ke.documentElement,
        He = Ke.body,
        te && (ml = te.utils.toArray,
        za = te.utils.clamp,
        th = te.core.context || $r,
        Nf = te.core.suppressOverwrites || $r,
        Op = Se.history.scrollRestoration || "auto",
        ih = Se.pageYOffset || 0,
        te.core.globals("ScrollTrigger", t),
        He)) {
            va = 1,
            To = document.createElement("div"),
            To.style.height = "100vh",
            To.style.position = "absolute",
            nw(),
            gP(),
            ht.register(te),
            t.isTouch = ht.isTouch,
            Ti = ht.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            eh = ht.isTouch === 1,
            Dt(Se, "wheel", Js),
            Ap = [Se, Ke, Nn, He],
            te.matchMedia ? (t.matchMedia = function(u) {
                var c = te.matchMedia(), f;
                for (f in u)
                    c.add(f, u[f]);
                return c
            }
            ,
            te.addEventListener("matchMediaInit", function() {
                return Np()
            }),
            te.addEventListener("matchMediaRevert", function() {
                return ew()
            }),
            te.addEventListener("matchMedia", function() {
                gs(0, 1),
                Hs("matchMedia")
            }),
            te.matchMedia().add("(orientation: portrait)", function() {
                return Hf(),
                Hf
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Hf(),
            Dt(Ke, "scroll", Js);
            var r = He.hasAttribute("style"), i = He.style, s = i.borderTopStyle, o = te.core.Animation.prototype, a, l;
            for (o.revert || Object.defineProperty(o, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            i.borderTopStyle = "solid",
            a = ii(He),
            Ct.m = Math.round(a.top + Ct.sc()) || 0,
            vn.m = Math.round(a.left + vn.sc()) || 0,
            s ? i.borderTopStyle = s : i.removeProperty("border-top-style"),
            r || (He.setAttribute("style", ""),
            He.removeAttribute("style")),
            Kl = setInterval(e_, 250),
            te.delayedCall(.5, function() {
                return Gl = 0
            }),
            Dt(Ke, "touchcancel", $r),
            Dt(He, "touchstart", $r),
            Jl(Dt, Ke, "pointerdown,touchstart,mousedown", Xm),
            Jl(Dt, Ke, "pointerup,touchend,mouseup", Jm),
            Zd = te.utils.checkPrefix("transform"),
            Oc.push(Zd),
            no = Jt(),
            gu = te.delayedCall(.2, gs).pause(),
            ro = [Ke, "visibilitychange", function() {
                var u = Se.innerWidth
                  , c = Se.innerHeight;
                Ke.hidden ? (qm = u,
                Ym = c) : (qm !== u || Ym !== c) && Ta()
            }
            , Ke, "DOMContentLoaded", gs, Se, "load", gs, Se, "resize", Ta],
            Xl(Dt),
            Te.forEach(function(u) {
                return u.enable(0, 1)
            }),
            l = 0; l < Ce.length; l += 3)
                Ql(It, Ce[l], Ce[l + 1]),
                Ql(It, Ce[l], Ce[l + 2])
        }
    }
    ,
    t.config = function(r) {
        "limitCallbacks"in r && (Ff = !!r.limitCallbacks);
        var i = r.syncInterval;
        i && clearInterval(Kl) || (Kl = i) && setInterval(e_, i),
        "ignoreMobileResize"in r && (eh = t.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (Xl(It) || Xl(Dt, r.autoRefreshEvents || "none"),
        Vb = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    t.scrollerProxy = function(r, i) {
        var s = Tn(r)
          , o = Ce.indexOf(s)
          , a = js(s);
        ~o && Ce.splice(o, a ? 6 : 2),
        i && (a ? Hr.unshift(Se, i, He, i, Nn, i) : Hr.unshift(s, i))
    }
    ,
    t.clearMatchMedia = function(r) {
        Te.forEach(function(i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
        })
    }
    ,
    t.isInViewport = function(r, i, s) {
        var o = (Ln(r) ? Tn(r) : r).getBoundingClientRect()
          , a = o[s ? As : Os] * i || 0;
        return s ? o.right - a > 0 && o.left + a < Se.innerWidth : o.bottom - a > 0 && o.top + a < Se.innerHeight
    }
    ,
    t.positionInViewport = function(r, i, s) {
        Ln(r) && (r = Tn(r));
        var o = r.getBoundingClientRect()
          , a = o[s ? As : Os]
          , l = i == null ? a / 2 : i in yu ? yu[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
        return s ? (o.left + l) / Se.innerWidth : (o.top + l) / Se.innerHeight
    }
    ,
    t.killAll = function(r) {
        if (Te.slice(0).forEach(function(s) {
            return s.vars.id !== "ScrollSmoother" && s.kill()
        }),
        r !== !0) {
            var i = Bs.killAll || [];
            Bs = {},
            i.forEach(function(s) {
                return s()
            })
        }
    }
    ,
    t
}();
xe.version = "3.13.0";
xe.saveStyles = function(t) {
    return t ? ml(t).forEach(function(e) {
        if (e && e.style) {
            var n = $n.indexOf(e);
            n >= 0 && $n.splice(n, 5),
            $n.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), te.core.getCache(e), th())
        }
    }) : $n
}
;
xe.revert = function(t, e) {
    return Np(!t, e)
}
;
xe.create = function(t, e) {
    return new xe(t,e)
}
;
xe.refresh = function(t) {
    return t ? Ta(!0) : (no || xe.register()) && gs(!0)
}
;
xe.update = function(t) {
    return ++Ce.cache && ci(t === !0 ? 2 : 0)
}
;
xe.clearScrollMemory = tw;
xe.maxScroll = function(t, e) {
    return Ir(t, e ? vn : Ct)
}
;
xe.getScrollFunc = function(t, e) {
    return Ki(Tn(t), e ? vn : Ct)
}
;
xe.getById = function(t) {
    return rh[t]
}
;
xe.getAll = function() {
    return Te.filter(function(t) {
        return t.vars.id !== "ScrollSmoother"
    })
}
;
xe.isScrolling = function() {
    return !!tr
}
;
xe.snapDirectional = Dp;
xe.addEventListener = function(t, e) {
    var n = Bs[t] || (Bs[t] = []);
    ~n.indexOf(e) || n.push(e)
}
;
xe.removeEventListener = function(t, e) {
    var n = Bs[t]
      , r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1)
}
;
xe.batch = function(t, e) {
    var n = [], r = {}, i = e.interval || .016, s = e.batchMax || 1e9, o = function(u, c) {
        var f = []
          , d = []
          , h = te.delayedCall(i, function() {
            c(f, d),
            f = [],
            d = []
        }).pause();
        return function(g) {
            f.length || h.restart(!0),
            f.push(g.trigger),
            d.push(g),
            s <= f.length && h.progress(1)
        }
    }, a;
    for (a in e)
        r[a] = a.substr(0, 2) === "on" && nn(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
    return nn(s) && (s = s(),
    Dt(xe, "refresh", function() {
        return s = e.batchMax()
    })),
    ml(t).forEach(function(l) {
        var u = {};
        for (a in r)
            u[a] = r[a];
        u.trigger = l,
        n.push(xe.create(u))
    }),
    n
}
;
var o_ = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0),
    r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
}, Vf = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (ht.isTouch ? " pinch-zoom" : "") : "none",
    e === Nn && t(He, n)
}, rc = {
    auto: 1,
    scroll: 1
}, kP = function(e) {
    var n = e.event, r = e.target, i = e.axis, s = (n.changedTouches ? n.changedTouches[0] : n).target, o = s._gsap || te.core.getCache(s), a = Jt(), l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; s && s !== He && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(rc[(l = Gn(s)).overflowY] || rc[l.overflowX])); )
            s = s.parentNode;
        o._isScroll = s && s !== r && !js(s) && (rc[(l = Gn(s)).overflowY] || rc[l.overflowX]),
        o._isScrollT = a
    }
    (o._isScroll || i === "x") && (n.stopPropagation(),
    n._gsapAllow = !0)
}, iw = function(e, n, r, i) {
    return ht.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: i = i && kP,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return r && Dt(Ke, ht.eventTypes[0], l_, !1, !0)
        },
        onDisable: function() {
            return It(Ke, ht.eventTypes[0], l_, !0)
        }
    })
}, RP = /(input|label|select|textarea)/i, a_, l_ = function(e) {
    var n = RP.test(e.target.tagName);
    (n || a_) && (e._gsapAllow = !0,
    a_ = n)
}, PP = function(e) {
    ds(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var n = e, r = n.normalizeScrollX, i = n.momentum, s = n.allowNestedScroll, o = n.onRelease, a, l, u = Tn(e.target) || Nn, c = te.core.globals().ScrollSmoother, f = c && c.get(), d = Ti && (e.content && Tn(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), h = Ki(u, Ct), g = Ki(u, vn), p = 1, v = (ht.isTouch && Se.visualViewport ? Se.visualViewport.scale * Se.visualViewport.width : Se.outerWidth) / Se.innerWidth, y = 0, b = nn(i) ? function() {
        return i(a)
    }
    : function() {
        return i || 2.8
    }
    , m, _, w = iw(u, e.type, !0, s), E = function() {
        return _ = !1
    }, S = $r, L = $r, A = function() {
        l = Ir(u, Ct),
        L = za(Ti ? 1 : 0, l),
        r && (S = za(0, Ir(u, vn))),
        m = $s
    }, x = function() {
        d._gsap.y = ba(parseFloat(d._gsap.y) + h.offset) + "px",
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)",
        h.offset = h.cacheID = 0
    }, M = function() {
        if (_) {
            requestAnimationFrame(E);
            var H = ba(a.deltaY / 2)
              , G = L(h.v - H);
            if (d && G !== h.v + h.offset) {
                h.offset = G - h.v;
                var $ = ba((parseFloat(d && d._gsap.y) || 0) - h.offset);
                d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + $ + ", 0, 1)",
                d._gsap.y = $ + "px",
                h.cacheID = Ce.cache,
                ci()
            }
            return !0
        }
        h.offset && x(),
        _ = !0
    }, R, P, O, I, N = function() {
        A(),
        R.isActive() && R.vars.scrollY > l && (h() > l ? R.progress(1) && h(l) : R.resetTo("scrollY", l))
    };
    return d && te.set(d, {
        y: "+=0"
    }),
    e.ignoreCheck = function(F) {
        return Ti && F.type === "touchmove" && M() || p > 1.05 && F.type !== "touchstart" || a.isGesturing || F.touches && F.touches.length > 1
    }
    ,
    e.onPress = function() {
        _ = !1;
        var F = p;
        p = ba((Se.visualViewport && Se.visualViewport.scale || 1) / v),
        R.pause(),
        F !== p && Vf(u, p > 1.01 ? !0 : r ? !1 : "x"),
        P = g(),
        O = h(),
        A(),
        m = $s
    }
    ,
    e.onRelease = e.onGestureStart = function(F, H) {
        if (h.offset && x(),
        !H)
            I.restart(!0);
        else {
            Ce.cache++;
            var G = b(), $, ne;
            r && ($ = g(),
            ne = $ + G * .05 * -F.velocityX / .227,
            G *= o_(g, $, ne, Ir(u, vn)),
            R.vars.scrollX = S(ne)),
            $ = h(),
            ne = $ + G * .05 * -F.velocityY / .227,
            G *= o_(h, $, ne, Ir(u, Ct)),
            R.vars.scrollY = L(ne),
            R.invalidate().duration(G).play(.01),
            (Ti && R.vars.scrollY >= l || $ >= l - 1) && te.to({}, {
                onUpdate: N,
                duration: G
            })
        }
        o && o(F)
    }
    ,
    e.onWheel = function() {
        R._ts && R.pause(),
        Jt() - y > 1e3 && (m = 0,
        y = Jt())
    }
    ,
    e.onChange = function(F, H, G, $, ne) {
        if ($s !== m && A(),
        H && r && g(S($[2] === H ? P + (F.startX - F.x) : g() + H - $[1])),
        G) {
            h.offset && x();
            var ce = ne[2] === G
              , ze = ce ? O + F.startY - F.y : h() + G - ne[1]
              , me = L(ze);
            ce && ze !== me && (O += me - ze),
            h(me)
        }
        (G || H) && ci()
    }
    ,
    e.onEnable = function() {
        Vf(u, r ? !1 : "x"),
        xe.addEventListener("refresh", N),
        Dt(Se, "resize", N),
        h.smooth && (h.target.style.scrollBehavior = "auto",
        h.smooth = g.smooth = !1),
        w.enable()
    }
    ,
    e.onDisable = function() {
        Vf(u, !0),
        It(Se, "resize", N),
        xe.removeEventListener("refresh", N),
        w.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    a = new ht(e),
    a.iOS = Ti,
    Ti && !h() && h(1),
    Ti && te.ticker.add($r),
    I = a._dc,
    R = te.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: rw(h, h(), function() {
                return R.pause()
            })
        },
        onUpdate: ci,
        onComplete: I.vars.onComplete
    }),
    a
};
xe.sort = function(t) {
    if (nn(t))
        return Te.sort(t);
    var e = Se.pageYOffset || 0;
    return xe.getAll().forEach(function(n) {
        return n._sortY = n.trigger ? e + n.trigger.getBoundingClientRect().top : n.start + Se.innerHeight
    }),
    Te.sort(t || function(n, r) {
        return (n.vars.refreshPriority || 0) * -1e6 + (n.vars.containerAnimation ? 1e6 : n._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
xe.observe = function(t) {
    return new ht(t)
}
;
xe.normalizeScroll = function(t) {
    if (typeof t > "u")
        return dn;
    if (t === !0 && dn)
        return dn.enable();
    if (t === !1) {
        dn && dn.kill(),
        dn = t;
        return
    }
    var e = t instanceof ht ? t : PP(t);
    return dn && dn.target === e.target && dn.kill(),
    js(e.target) && (dn = e),
    e
}
;
xe.core = {
    _getVelocityProp: Qd,
    _inputObserver: iw,
    _scrollers: Ce,
    _proxies: Hr,
    bridge: {
        ss: function() {
            tr || Hs("scrollStart"),
            tr = Jt()
        },
        ref: function() {
            return Xt
        }
    }
};
Yb() && te.registerPlugin(xe);
/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var rn, sw, ui, Dr, Hi, ow, Eo, ic, aw = function() {
    return typeof window < "u"
}, lw = function() {
    return rn || aw() && (rn = window.gsap) && rn.registerPlugin && rn
}, cw = function(e) {
    return typeof e == "string"
}, c_ = function(e) {
    return typeof e == "function"
}, yl = function(e, n) {
    var r = n === "x" ? "Width" : "Height"
      , i = "scroll" + r
      , s = "client" + r;
    return e === ui || e === Dr || e === Hi ? Math.max(Dr[i], Hi[i]) - (ui["inner" + r] || Dr[s] || Hi[s]) : e[i] - e["offset" + r]
}, vl = function(e, n) {
    var r = "scroll" + (n === "x" ? "Left" : "Top");
    return e === ui && (e.pageXOffset != null ? r = "page" + n.toUpperCase() + "Offset" : e = Dr[r] != null ? Dr : Hi),
    function() {
        return e[r]
    }
}, AP = function(e, n, r, i) {
    if (c_(e) && (e = e(n, r, i)),
    typeof e != "object")
        return cw(e) && e !== "max" && e.charAt(1) !== "=" ? {
            x: e,
            y: e
        } : {
            y: e
        };
    if (e.nodeType)
        return {
            y: e,
            x: e
        };
    var s = {}, o;
    for (o in e)
        s[o] = o !== "onAutoKill" && c_(e[o]) ? e[o](n, r, i) : e[o];
    return s
}, uw = function(e, n) {
    if (e = ow(e)[0],
    !e || !e.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var r = e.getBoundingClientRect()
      , i = !n || n === ui || n === Hi
      , s = i ? {
        top: Dr.clientTop - (ui.pageYOffset || Dr.scrollTop || Hi.scrollTop || 0),
        left: Dr.clientLeft - (ui.pageXOffset || Dr.scrollLeft || Hi.scrollLeft || 0)
    } : n.getBoundingClientRect()
      , o = {
        x: r.left - s.left,
        y: r.top - s.top
    };
    return !i && n && (o.x += vl(n, "x")(),
    o.y += vl(n, "y")()),
    o
}, u_ = function(e, n, r, i, s) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - s : cw(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + i - s : e === "max" ? yl(n, r) - s : Math.min(yl(n, r), uw(e, n)[r] - s)
}, oh = function() {
    rn = lw(),
    aw() && rn && typeof document < "u" && document.body && (ui = window,
    Hi = document.body,
    Dr = document.documentElement,
    ow = rn.utils.toArray,
    rn.config({
        autoKillThreshold: 7
    }),
    Eo = rn.config(),
    sw = 1)
}, Ko = {
    version: "3.13.0",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
        rn = e,
        oh()
    },
    init: function(e, n, r, i, s) {
        sw || oh();
        var o = this
          , a = rn.getProperty(e, "scrollSnapType");
        o.isWin = e === ui,
        o.target = e,
        o.tween = r,
        n = AP(n, i, e, s),
        o.vars = n,
        o.autoKill = !!("autoKill"in n ? n : Eo).autoKill,
        o.getX = vl(e, "x"),
        o.getY = vl(e, "y"),
        o.x = o.xPrev = o.getX(),
        o.y = o.yPrev = o.getY(),
        ic || (ic = rn.core.globals().ScrollTrigger),
        rn.getProperty(e, "scrollBehavior") === "smooth" && rn.set(e, {
            scrollBehavior: "auto"
        }),
        a && a !== "none" && (o.snap = 1,
        o.snapInline = e.style.scrollSnapType,
        e.style.scrollSnapType = "none"),
        n.x != null ? (o.add(o, "x", o.x, u_(n.x, e, "x", o.x, n.offsetX || 0), i, s),
        o._props.push("scrollTo_x")) : o.skipX = 1,
        n.y != null ? (o.add(o, "y", o.y, u_(n.y, e, "y", o.y, n.offsetY || 0), i, s),
        o._props.push("scrollTo_y")) : o.skipY = 1
    },
    render: function(e, n) {
        for (var r = n._pt, i = n.target, s = n.tween, o = n.autoKill, a = n.xPrev, l = n.yPrev, u = n.isWin, c = n.snap, f = n.snapInline, d, h, g, p, v; r; )
            r.r(e, r.d),
            r = r._next;
        d = u || !n.skipX ? n.getX() : a,
        h = u || !n.skipY ? n.getY() : l,
        g = h - l,
        p = d - a,
        v = Eo.autoKillThreshold,
        n.x < 0 && (n.x = 0),
        n.y < 0 && (n.y = 0),
        o && (!n.skipX && (p > v || p < -v) && d < yl(i, "x") && (n.skipX = 1),
        !n.skipY && (g > v || g < -v) && h < yl(i, "y") && (n.skipY = 1),
        n.skipX && n.skipY && (s.kill(),
        n.vars.onAutoKill && n.vars.onAutoKill.apply(s, n.vars.onAutoKillParams || []))),
        u ? ui.scrollTo(n.skipX ? d : n.x, n.skipY ? h : n.y) : (n.skipY || (i.scrollTop = n.y),
        n.skipX || (i.scrollLeft = n.x)),
        c && (e === 1 || e === 0) && (h = i.scrollTop,
        d = i.scrollLeft,
        f ? i.style.scrollSnapType = f : i.style.removeProperty("scroll-snap-type"),
        i.scrollTop = h + 1,
        i.scrollLeft = d + 1,
        i.scrollTop = h,
        i.scrollLeft = d),
        n.xPrev = n.x,
        n.yPrev = n.y,
        ic && ic.update()
    },
    kill: function(e) {
        var n = e === "scrollTo"
          , r = this._props.indexOf(e);
        return (n || e === "scrollTo_x") && (this.skipX = 1),
        (n || e === "scrollTo_y") && (this.skipY = 1),
        r > -1 && this._props.splice(r, 1),
        !this._props.length
    }
};
Ko.max = yl;
Ko.getOffset = uw;
Ko.buildGetter = vl;
Ko.config = function(t) {
    Eo || oh() || (Eo = rn.config());
    for (var e in t)
        Eo[e] = t[e]
}
;
lw() && rn.registerPlugin(Ko);
const OP = (1 + Math.sqrt(5)) / 2
  , $P = 1 / OP
  , LP = $P;
globalThis.document && (Dn.registerPlugin(Gu, xe),
Dn.registerPlugin(Ko),
Dn.config({
    autoSleep: 60,
    nullTargetWarn: !1
}),
Dn.defaults({
    duration: LP,
    ease: "power2.out"
}),
xe.defaults({
    scroller: "#scroll-container",
    pinType: "fixed"
}),
Dn.ticker.lagSmoothing(0),
Dn.ticker.add( () => {
    var t;
    (t = window == null ? void 0 : window.escroll) == null || t.update()
}
));
const MP = () => document.querySelector("#scroll-container")
  , IP = () => {
    var t;
    if (window.escroll)
        try {
            window.escroll.reset(),
            (t = MP()) == null || t.scrollTo(0, 0),
            window.scrollTo(0, 0)
        } catch (e) {
            console.log(e)
        }
    window.escroll && (window.escroll.disabled = !1),
    xe.refresh()
}
  , f_ = {
    mode: "out-in",
    css: !1,
    appear: !0,
    onEnter() {
        IP()
    },
    onLeave() {
        window.escroll && (window.escroll.disabled = !0),
        document.documentElement.style.cursor = "wait",
        document.body.style.pointerEvents = "none !important"
    }
};
var DP = Object.defineProperty
  , NP = (t, e, n) => e in t ? DP(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n
  , Lc = (t, e, n) => NP(t, typeof e != "symbol" ? e + "" : e, n);
function d_(t) {
    return t !== null && typeof t == "object" && "constructor"in t && t.constructor === Object
}
function Fp(t={}, e={}) {
    Object.keys(e).forEach(n => {
        typeof t[n] > "u" ? t[n] = e[n] : d_(e[n]) && d_(t[n]) && Object.keys(e[n]).length > 0 && Fp(t[n], e[n])
    }
    )
}
const fw = {
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
function FP() {
    const t = typeof document < "u" ? document : {};
    return Fp(t, fw),
    t
}
const jP = {
    document: fw,
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
    requestAnimationFrame(t) {
        return t
    },
    cancelAnimationFrame(t) {
        return t
    }
};
function dw() {
    const t = typeof window < "u" ? window : {};
    return Fp(t, jP),
    t
}
const sc = dw();
let BP = class {
    constructor() {
        Lc(this, "cbArray"),
        Lc(this, "raf"),
        Lc(this, "lastTime", performance.now()),
        this.cbArray = [],
        this.animation = this.animation.bind(this),
        this.animation(0)
    }
    on(e) {
        this.cbArray.push(e)
    }
    off(e) {
        this.cbArray = this.cbArray.filter(n => n !== e)
    }
    animation(e) {
        const n = performance.now()
          , r = n - this.lastTime;
        this.lastTime = n,
        this.cbArray.forEach(i => i(e, r)),
        sc && (this.raf = sc.requestAnimationFrame(this.animation))
    }
    destroy() {
        sc && sc.cancelAnimationFrame(this.raf),
        this.cbArray = []
    }
}
;
const zf = new BP
  , xI = {
    on: t => zf.on(t),
    off: t => zf.off(t),
    destroy: () => zf.destroy()
}
  , ca = dw();
class HP {
    constructor() {
        Lc(this, "cbArray"),
        this.cbArray = [],
        this.init()
    }
    bounds() {
        ["resizeHandler"].forEach(e => {
            this[e] = this[e].bind(this)
        }
        )
    }
    init() {
        this.bounds(),
        typeof ca < "u" && ca.addEventListener("resize", this.resizeHandler)
    }
    resizeHandler() {
        this.cbArray.forEach(e => e())
    }
    on(e) {
        e(),
        this.cbArray.push(e)
    }
    off(e) {
        this.cbArray = this.cbArray.filter(n => n !== e)
    }
    match(e, n) {
        let r;
        e.startsWith("<") ? r = `(max-width: ${e.slice(1)})` : e.startsWith(">") ? r = `(min-width: ${e.slice(1)})` : r = `(min-width: ${e})`;
        const i = ca.matchMedia(r);
        i.matches && n(),
        i.onchange = () => {
            i.matches && n()
        }
    }
    destroy() {
        typeof ca < "u" && ca.removeEventListener("resize", this.resizeHandler)
    }
}
const oc = new HP
  , EI = {
    on: t => oc.on(t),
    off: t => oc.off(t),
    match: (t, e) => oc.match(t, e),
    destroy: () => oc.destroy()
}
  , SI = (t, e, n) => t * (1 - n) + e * n
  , CI = (t, e, n) => Math.max(Math.min(t, Math.max(e, n)), Math.min(e, n));
FP();
const kI = (t={}) => {
    const e = {
        scale: t.scale ?? {
            x: 1,
            y: 1
        },
        move: t.move ?? {
            x: 0,
            y: 0,
            z: 0
        }
    }
      , n = Object.keys(e).map(r => typeof e[r] == "string" || typeof e[r] == "number" ? {
        x: e[r],
        y: e[r],
        z: e[r]
    } : e[r]);
    return `matrix3d(
    ${n[0].x ?? 1},0,0,0,
    0,${n[0].y ?? 1},0,0,
    0,0,1,0,
    ${n[1].x ?? 0},${n[1].y ?? 0},${n[1].z ?? 0},1
    )`
}
  , hw = (t=0) => new Promise(e => {
    setTimeout( () => {
        e()
    }
    , t)
}
)
  , RI = t => {
    let e = "";
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      , r = n.length;
    for (let i = 0; i < t; i++)
        e += n.charAt(Math.floor(Math.random() * r));
    return e
}
  , UP = "$s";
function kt(...t) {
    const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
    typeof t[0] != "string" && t.unshift(e);
    const [n,r] = t;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + r);
    const i = UP + n
      , s = Ye()
      , o = My(s.payload.state, i);
    if (o.value === void 0 && r) {
        const a = r();
        if (Je(a))
            return s.payload.state[i] = a,
            a;
        o.value = a
    }
    return o
}
const VP = () => {
    const t = kt("elRef", () => null);
    return {
        init: i => {
            t.value = i
        }
        ,
        appear: async () => new Promise(i => {
            var l;
            const s = (l = t.value) == null ? void 0 : l.querySelectorAll("path")
              , o = getComputedStyle(t.value).getPropertyValue("color")
              , a = Dn.timeline();
            t.value.style.pointerEvents = "none",
            a.fromTo(s, {
                strokeDashoffset: (u, c) => c.getTotalLength(),
                strokeDasharray: (u, c) => c.getTotalLength(),
                stroke: o,
                fill: "transparent"
            }, {
                duration: 2,
                strokeDashoffset: 0,
                stroke: "transparent",
                fill: o,
                ease: "power2.out",
                clearProps: "all",
                overwrite: !0,
                stagger: {
                    amount: .5,
                    from: "start"
                },
                onComplete: () => {
                    s == null || s.forEach(u => {
                        u.removeAttribute("stroke"),
                        u.setAttribute("fill", "currentColor")
                    }
                    ),
                    t.value.style.pointerEvents = "auto",
                    i()
                }
            })
        }
        ),
        disappear: () => {
            var s;
            const i = (s = t.value) == null ? void 0 : s.querySelectorAll("path");
            i == null || i.forEach(o => {
                const a = o.getTotalLength();
                Dn.to(o, {
                    duration: 2,
                    strokeDashoffset: a,
                    stroke: "white",
                    fill: "transparent",
                    ease: "power2.out",
                    stagger: {
                        amount: .5,
                        from: "end"
                    }
                })
            }
            )
        }
    }
}
;
function pw(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var ac = {
    exports: {}
}, h_;
function zP() {
    if (h_)
        return ac.exports;
    h_ = 1;
    function t(e, n=100, r={}) {
        if (typeof e != "function")
            throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
        if (n < 0)
            throw new RangeError("`wait` must not be negative.");
        const {immediate: i} = typeof r == "boolean" ? {
            immediate: r
        } : r;
        let s, o, a, l, u;
        function c() {
            const h = s
              , g = o;
            return s = void 0,
            o = void 0,
            u = e.apply(h, g),
            u
        }
        function f() {
            const h = Date.now() - l;
            h < n && h >= 0 ? a = setTimeout(f, n - h) : (a = void 0,
            i || (u = c()))
        }
        const d = function(...h) {
            if (s && this !== s && Object.getPrototypeOf(this) === Object.getPrototypeOf(s))
                throw new Error("Debounced method called with different contexts of the same prototype.");
            s = this,
            o = h,
            l = Date.now();
            const g = i && !a;
            return a || (a = setTimeout(f, n)),
            g && (u = c()),
            u
        };
        return Object.defineProperty(d, "isPending", {
            get() {
                return a !== void 0
            }
        }),
        d.clear = () => {
            a && (clearTimeout(a),
            a = void 0)
        }
        ,
        d.flush = () => {
            a && d.trigger()
        }
        ,
        d.trigger = () => {
            u = c(),
            d.clear()
        }
        ,
        d
    }
    return ac.exports.debounce = t,
    ac.exports = t,
    ac.exports
}
var WP = zP();
const qP = pw(WP);
(function() {
    function t() {
        for (var r = arguments.length, i = 0; i < r; i++) {
            var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            s.nodeType === 1 || s.nodeType === 11 ? this.appendChild(s) : this.appendChild(document.createTextNode(String(s)))
        }
    }
    function e() {
        for (; this.lastChild; )
            this.removeChild(this.lastChild);
        arguments.length && this.append.apply(this, arguments)
    }
    function n() {
        for (var r = this.parentNode, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
        var a = s.length;
        if (r)
            for (a || r.removeChild(this); a--; ) {
                var l = s[a];
                typeof l != "object" ? l = this.ownerDocument.createTextNode(l) : l.parentNode && l.parentNode.removeChild(l),
                a ? r.insertBefore(this.previousSibling, l) : r.replaceChild(l, this)
            }
    }
    typeof Element < "u" && (Element.prototype.append || (Element.prototype.append = t,
    DocumentFragment.prototype.append = t),
    Element.prototype.replaceChildren || (Element.prototype.replaceChildren = e,
    DocumentFragment.prototype.replaceChildren = e),
    Element.prototype.replaceWith || (Element.prototype.replaceWith = n,
    DocumentFragment.prototype.replaceWith = n))
}
)();
function YP(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function p_(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r)
    }
}
function g_(t, e, n) {
    return e && p_(t.prototype, e),
    n && p_(t, n),
    t
}
function KP(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function m_(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function __(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? m_(Object(n), !0).forEach(function(r) {
            KP(t, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m_(Object(n)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return t
}
function gw(t, e) {
    return XP(t) || QP(t, e) || mw(t, e) || eA()
}
function _n(t) {
    return GP(t) || JP(t) || mw(t) || ZP()
}
function GP(t) {
    if (Array.isArray(t))
        return ah(t)
}
function XP(t) {
    if (Array.isArray(t))
        return t
}
function JP(t) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(t))
        return Array.from(t)
}
function QP(t, e) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
        var n = []
          , r = !0
          , i = !1
          , s = void 0;
        try {
            for (var o = t[Symbol.iterator](), a; !(r = (a = o.next()).done) && (n.push(a.value),
            !(e && n.length === e)); r = !0)
                ;
        } catch (l) {
            i = !0,
            s = l
        } finally {
            try {
                !r && o.return != null && o.return()
            } finally {
                if (i)
                    throw s
            }
        }
        return n
    }
}
function mw(t, e) {
    if (t) {
        if (typeof t == "string")
            return ah(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if (n === "Object" && t.constructor && (n = t.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(t);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return ah(t, e)
    }
}
function ah(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++)
        r[n] = t[n];
    return r
}
function ZP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function eA() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function ms(t, e) {
    return Object.getOwnPropertyNames(Object(t)).reduce(function(n, r) {
        var i = Object.getOwnPropertyDescriptor(Object(t), r)
          , s = Object.getOwnPropertyDescriptor(Object(e), r);
        return Object.defineProperty(n, r, s || i)
    }, {})
}
function kl(t) {
    return typeof t == "string"
}
function jp(t) {
    return Array.isArray(t)
}
function lc() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = ms(t), n;
    return e.types !== void 0 ? n = e.types : e.split !== void 0 && (n = e.split),
    n !== void 0 && (e.types = (kl(n) || jp(n) ? String(n) : "").split(",").map(function(r) {
        return String(r).trim()
    }).filter(function(r) {
        return /((line)|(word)|(char))/i.test(r)
    })),
    (e.absolute || e.position) && (e.absolute = e.absolute || /absolute/.test(t.position)),
    e
}
function Bp(t) {
    var e = kl(t) || jp(t) ? String(t) : "";
    return {
        none: !e,
        lines: /line/i.test(e),
        words: /word/i.test(e),
        chars: /char/i.test(e)
    }
}
function Ju(t) {
    return t !== null && typeof t == "object"
}
function tA(t) {
    return Ju(t) && /^(1|3|11)$/.test(t.nodeType)
}
function nA(t) {
    return typeof t == "number" && t > -1 && t % 1 === 0
}
function rA(t) {
    return Ju(t) && nA(t.length)
}
function Us(t) {
    return jp(t) ? t : t == null ? [] : rA(t) ? Array.prototype.slice.call(t) : [t]
}
function y_(t) {
    var e = t;
    return kl(t) && (/^(#[a-z]\w+)$/.test(t.trim()) ? e = document.getElementById(t.trim().slice(1)) : e = document.querySelectorAll(t)),
    Us(e).reduce(function(n, r) {
        return [].concat(_n(n), _n(Us(r).filter(tA)))
    }, [])
}
var iA = Object.entries
  , vu = "_splittype"
  , pr = {}
  , sA = 0;
function Nr(t, e, n) {
    if (!Ju(t))
        return console.warn("[data.set] owner is not an object"),
        null;
    var r = t[vu] || (t[vu] = ++sA)
      , i = pr[r] || (pr[r] = {});
    return n === void 0 ? e && Object.getPrototypeOf(e) === Object.prototype && (pr[r] = __(__({}, i), e)) : e !== void 0 && (i[e] = n),
    n
}
function _s(t, e) {
    var n = Ju(t) ? t[vu] : null
      , r = n && pr[n] || {};
    return r
}
function _w(t) {
    var e = t && t[vu];
    e && (delete t[e],
    delete pr[e])
}
function oA() {
    Object.keys(pr).forEach(function(t) {
        delete pr[t]
    })
}
function aA() {
    iA(pr).forEach(function(t) {
        var e = gw(t, 2)
          , n = e[0]
          , r = e[1]
          , i = r.isRoot
          , s = r.isSplit;
        (!i || !s) && (pr[n] = null,
        delete pr[n])
    })
}
function lA(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " "
      , n = t ? String(t) : "";
    return n.trim().replace(/\s+/g, " ").split(e)
}
var Hp = "\\ud800-\\udfff"
  , yw = "\\u0300-\\u036f\\ufe20-\\ufe23"
  , vw = "\\u20d0-\\u20f0"
  , bw = "\\ufe0e\\ufe0f"
  , cA = "[".concat(Hp, "]")
  , lh = "[".concat(yw).concat(vw, "]")
  , ch = "\\ud83c[\\udffb-\\udfff]"
  , uA = "(?:".concat(lh, "|").concat(ch, ")")
  , ww = "[^".concat(Hp, "]")
  , Tw = "(?:\\ud83c[\\udde6-\\uddff]){2}"
  , xw = "[\\ud800-\\udbff][\\udc00-\\udfff]"
  , Ew = "\\u200d"
  , Sw = "".concat(uA, "?")
  , Cw = "[".concat(bw, "]?")
  , fA = "(?:" + Ew + "(?:" + [ww, Tw, xw].join("|") + ")" + Cw + Sw + ")*"
  , dA = Cw + Sw + fA
  , hA = "(?:".concat(["".concat(ww).concat(lh, "?"), lh, Tw, xw, cA].join("|"), `
)`)
  , pA = RegExp("".concat(ch, "(?=").concat(ch, ")|").concat(hA).concat(dA), "g")
  , gA = [Ew, Hp, yw, vw, bw]
  , mA = RegExp("[".concat(gA.join(""), "]"));
function _A(t) {
    return t.split("")
}
function kw(t) {
    return mA.test(t)
}
function yA(t) {
    return t.match(pA) || []
}
function vA(t) {
    return kw(t) ? yA(t) : _A(t)
}
function bA(t) {
    return t == null ? "" : String(t)
}
function wA(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return t = bA(t),
    t && kl(t) && !e && kw(t) ? vA(t) : t.split(e)
}
function uh(t, e) {
    var n = document.createElement(t);
    return e && Object.keys(e).forEach(function(r) {
        var i = e[r]
          , s = kl(i) ? i.trim() : i;
        s === null || s === "" || (r === "children" ? n.append.apply(n, _n(Us(s))) : n.setAttribute(r, s))
    }),
    n
}
var Up = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div"
};
function TA(t, e) {
    e = ms(Up, e);
    var n = Bp(e.types)
      , r = e.tagName
      , i = t.nodeValue
      , s = document.createDocumentFragment()
      , o = []
      , a = [];
    return /^\s/.test(i) && s.append(" "),
    o = lA(i).reduce(function(l, u, c, f) {
        var d, h;
        return n.chars && (h = wA(u).map(function(g) {
            var p = uh(r, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: g
            });
            return Nr(p, "isChar", !0),
            a = [].concat(_n(a), [p]),
            p
        })),
        n.words || n.lines ? (d = uh(r, {
            class: "".concat(e.wordClass, " ").concat(e.splitClass),
            style: "display: inline-block; ".concat(n.words && e.absolute ? "position: relative;" : ""),
            children: n.chars ? h : u
        }),
        Nr(d, {
            isWord: !0,
            isWordStart: !0,
            isWordEnd: !0
        }),
        s.appendChild(d)) : h.forEach(function(g) {
            s.appendChild(g)
        }),
        c < f.length - 1 && s.append(" "),
        n.words ? l.concat(d) : l
    }, []),
    /\s$/.test(i) && s.append(" "),
    t.replaceWith(s),
    {
        words: o,
        chars: a
    }
}
function Rw(t, e) {
    var n = t.nodeType
      , r = {
        words: [],
        chars: []
    };
    if (!/(1|3|11)/.test(n))
        return r;
    if (n === 3 && /\S/.test(t.nodeValue))
        return TA(t, e);
    var i = Us(t.childNodes);
    if (i.length && (Nr(t, "isSplit", !0),
    !_s(t).isRoot)) {
        t.style.display = "inline-block",
        t.style.position = "relative";
        var s = t.nextSibling
          , o = t.previousSibling
          , a = t.textContent || ""
          , l = s ? s.textContent : " "
          , u = o ? o.textContent : " ";
        Nr(t, {
            isWordEnd: /\s$/.test(a) || /^\s/.test(l),
            isWordStart: /^\s/.test(a) || /\s$/.test(u)
        })
    }
    return i.reduce(function(c, f) {
        var d = Rw(f, e)
          , h = d.words
          , g = d.chars;
        return {
            words: [].concat(_n(c.words), _n(h)),
            chars: [].concat(_n(c.chars), _n(g))
        }
    }, r)
}
function xA(t, e, n, r) {
    if (!n.absolute)
        return {
            top: e ? t.offsetTop : null
        };
    var i = t.offsetParent
      , s = gw(r, 2)
      , o = s[0]
      , a = s[1]
      , l = 0
      , u = 0;
    if (i && i !== document.body) {
        var c = i.getBoundingClientRect();
        l = c.x + o,
        u = c.y + a
    }
    var f = t.getBoundingClientRect()
      , d = f.width
      , h = f.height
      , g = f.x
      , p = f.y
      , v = p + a - u
      , y = g + o - l;
    return {
        width: d,
        height: h,
        top: v,
        left: y
    }
}
function Pw(t) {
    _s(t).isWord ? (_w(t),
    t.replaceWith.apply(t, _n(t.childNodes))) : Us(t.children).forEach(function(e) {
        return Pw(e)
    })
}
var EA = function() {
    return document.createDocumentFragment()
};
function SA(t, e, n) {
    var r = Bp(e.types), i = e.tagName, s = t.getElementsByTagName("*"), o = [], a = [], l = null, u, c, f, d = [], h = t.parentElement, g = t.nextElementSibling, p = EA(), v = window.getComputedStyle(t), y = v.textAlign, b = parseFloat(v.fontSize), m = b * .2;
    return e.absolute && (f = {
        left: t.offsetLeft,
        top: t.offsetTop,
        width: t.offsetWidth
    },
    c = t.offsetWidth,
    u = t.offsetHeight,
    Nr(t, {
        cssWidth: t.style.width,
        cssHeight: t.style.height
    })),
    Us(s).forEach(function(_) {
        var w = _.parentElement === t
          , E = xA(_, w, e, n)
          , S = E.width
          , L = E.height
          , A = E.top
          , x = E.left;
        /^br$/i.test(_.nodeName) || (r.lines && w && ((l === null || A - l >= m) && (l = A,
        o.push(a = [])),
        a.push(_)),
        e.absolute && Nr(_, {
            top: A,
            left: x,
            width: S,
            height: L
        }))
    }),
    h && h.removeChild(t),
    r.lines && (d = o.map(function(_) {
        var w = uh(i, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(y, "; width: 100%;")
        });
        Nr(w, "isLine", !0);
        var E = {
            height: 0,
            top: 1e4
        };
        return p.appendChild(w),
        _.forEach(function(S, L, A) {
            var x = _s(S)
              , M = x.isWordEnd
              , R = x.top
              , P = x.height
              , O = A[L + 1];
            E.height = Math.max(E.height, P),
            E.top = Math.min(E.top, R),
            w.appendChild(S),
            M && _s(O).isWordStart && w.append(" ")
        }),
        e.absolute && Nr(w, {
            height: E.height,
            top: E.top
        }),
        w
    }),
    r.words || Pw(p),
    t.replaceChildren(p)),
    e.absolute && (t.style.width = "".concat(t.style.width || c, "px"),
    t.style.height = "".concat(u, "px"),
    Us(s).forEach(function(_) {
        var w = _s(_)
          , E = w.isLine
          , S = w.top
          , L = w.left
          , A = w.width
          , x = w.height
          , M = _s(_.parentElement)
          , R = !E && M.isLine;
        _.style.top = "".concat(R ? S - M.top : S, "px"),
        _.style.left = E ? "".concat(f.left, "px") : "".concat(L - (R ? f.left : 0), "px"),
        _.style.height = "".concat(x, "px"),
        _.style.width = E ? "".concat(f.width, "px") : "".concat(A, "px"),
        _.style.position = "absolute"
    })),
    h && (g ? h.insertBefore(t, g) : h.appendChild(t)),
    d
}
var Qs = ms(Up, {})
  , CA = function() {
    g_(t, null, [{
        key: "clearData",
        value: function() {
            oA()
        }
    }, {
        key: "setDefaults",
        value: function(n) {
            return Qs = ms(Qs, lc(n)),
            Up
        }
    }, {
        key: "revert",
        value: function(n) {
            y_(n).forEach(function(r) {
                var i = _s(r)
                  , s = i.isSplit
                  , o = i.html
                  , a = i.cssWidth
                  , l = i.cssHeight;
                s && (r.innerHTML = o,
                r.style.width = a || "",
                r.style.height = l || "",
                _w(r))
            })
        }
    }, {
        key: "create",
        value: function(n, r) {
            return new t(n,r)
        }
    }, {
        key: "data",
        get: function() {
            return pr
        }
    }, {
        key: "defaults",
        get: function() {
            return Qs
        },
        set: function(n) {
            Qs = ms(Qs, lc(n))
        }
    }]);
    function t(e, n) {
        YP(this, t),
        this.isSplit = !1,
        this.settings = ms(Qs, lc(n)),
        this.elements = y_(e),
        this.split()
    }
    return g_(t, [{
        key: "split",
        value: function(n) {
            var r = this;
            this.revert(),
            this.elements.forEach(function(o) {
                Nr(o, "html", o.innerHTML)
            }),
            this.lines = [],
            this.words = [],
            this.chars = [];
            var i = [window.pageXOffset, window.pageYOffset];
            n !== void 0 && (this.settings = ms(this.settings, lc(n)));
            var s = Bp(this.settings.types);
            s.none || (this.elements.forEach(function(o) {
                Nr(o, "isRoot", !0);
                var a = Rw(o, r.settings)
                  , l = a.words
                  , u = a.chars;
                r.words = [].concat(_n(r.words), _n(l)),
                r.chars = [].concat(_n(r.chars), _n(u))
            }),
            this.elements.forEach(function(o) {
                if (s.lines || r.settings.absolute) {
                    var a = SA(o, r.settings, i);
                    r.lines = [].concat(_n(r.lines), _n(a))
                }
            }),
            this.isSplit = !0,
            window.scrollTo(i[0], i[1]),
            aA())
        }
    }, {
        key: "revert",
        value: function() {
            this.isSplit && (this.lines = null,
            this.words = null,
            this.chars = null,
            this.isSplit = !1),
            t.revert(this.elements)
        }
    }]),
    t
}();
class kA {
    constructor(e, n={}) {
        Gt(this, "textElement");
        Gt(this, "splitText");
        Gt(this, "previousContainerWidth");
        Gt(this, "onResize");
        if (!e || !(e instanceof HTMLElement))
            throw new Error("Invalid text element provided.");
        const {resizeCallback: r, splitTypeTypes: i} = n;
        this.textElement = e,
        this.onResize = typeof r == "function" ? r : null;
        const s = i ? {
            types: i,
            lineClass: "e-line"
        } : {};
        this.splitText = new CA(this.textElement,s),
        this.onResize && this.initResizeObserver()
    }
    initResizeObserver() {
        this.previousContainerWidth = null,
        new ResizeObserver(qP(n => this.handleResize(n), 100)).observe(this.textElement)
    }
    handleResize(e) {
        const [{contentRect: n}] = e
          , r = Math.floor(n.width);
        this.previousContainerWidth && this.previousContainerWidth !== r && (this.splitText.split({}),
        this.onResize()),
        this.previousContainerWidth = r
    }
    revert() {
        return this.splitText.revert()
    }
    getLines() {
        return this.splitText.lines
    }
    getWords() {
        return this.splitText.words
    }
    getChars() {
        return this.splitText.chars
    }
}
const Aw = () => {
    const {appear: t} = VP()
      , e = kt("isFirstLoad", () => !0)
      , n = s => {
        const o = s || document
          , a = o.querySelector("[data-preload]")
          , l = o.querySelector("[data-full-image]")
          , u = o.querySelector("[data-title]")
          , c = o.querySelector(".header__logo")
          , f = o.querySelectorAll("[data-t]")
          , d = o.querySelectorAll("[data-o]");
        return {
            $image: a,
            $fullImage: l,
            $title: u,
            $logo: c,
            $t: f,
            $o: d
        }
    }
      , r = s => {
        const o = s.getBoundingClientRect()
          , a = window.innerWidth / 2
          , l = window.innerHeight / 2
          , u = o.left + o.width / 2
          , c = o.top + o.height / 2;
        return {
            x: a - u,
            y: l - c
        }
    }
    ;
    return {
        isFirstLoad: e,
        init: async (s, o=.2) => {
            document.documentElement.style.cursor = "wait",
            document.body.style.pointerEvents = "none";
            const {$image: a, $fullImage: l, $title: u, $logo: c, $t: f, $o: d} = n(s);
            await hw(200);
            const h = e.value ? 1.7 : o
              , g = () => {
                window.escroll.disabled = !1,
                v == null || v.revert(),
                p.revert(),
                document.documentElement.style.cursor = "auto",
                document.body.style.pointerEvents = "auto"
            }
              , p = Dn.timeline();
            if (a && p.set(a, {
                width: "100vw",
                height: "100vh"
            }),
            l && p.set(l, {
                opacity: 0,
                clipPath: "inset(25%)"
            }),
            p.set(f, {
                opacity: 0,
                y: 50
            }),
            p.set(d, {
                opacity: 0
            }),
            e.value && c) {
                const {x: _, y: w} = r(c);
                p.set(c, {
                    x: _,
                    y: w,
                    scale: 3
                }),
                t(),
                p.to(c, {
                    duration: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out"
                }, 1.7)
            }
            if (a) {
                const _ = a.getBoundingClientRect();
                p.to(a, {
                    duration: 1.6,
                    width: _.width,
                    height: _.height,
                    ease: "power2.out"
                }, h)
            }
            l && p.to(l, {
                duration: 1.6,
                opacity: 1,
                clipPath: "inset(0%)",
                ease: "power2.out"
            }, h);
            let v = null
              , y = null;
            u && (v = new kA(u,{
                splitTypeTypes: "lines,words"
            }),
            y = v.getLines(),
            Dn.set(y, {
                y: "100%",
                clipPath: "inset(0 0 110% 0)"
            }),
            p.to(y, {
                duration: 1.6,
                y: "0%",
                clipPath: "inset(0 0 -110% 0)",
                stagger: .1,
                opacity: 1,
                ease: "power2.out",
                overwrite: !0
            }, h)),
            f.length && p.to(f, {
                duration: 1.3,
                opacity: 1,
                y: 0,
                stagger: .2,
                ease: "power2.out"
            }, h + .2),
            d.length && p.to(d, {
                duration: 1.6,
                opacity: 1,
                stagger: .2,
                ease: "power2.out"
            }, h + 1),
            e.value = !1;
            const b = d.length ? 1200 : 300
              , m = p.duration() * 1e3 - b;
            setTimeout( () => {
                g()
            }
            , m),
            setTimeout( () => {
                document.body.style.pointerEvents = "auto",
                window.escroll.disabled = !1
            }
            , 1e3)
        }
    }
}
  , v_ = .5
  , b_ = "power3.inOut"
  , br = {
    mode: "out-in",
    onEnter(t, e) {
        const {init: n} = Aw()
          , r = Dn.timeline({
            defaults: {
                duration: v_,
                ease: b_
            },
            onComplete: () => {
                e(),
                r.revert(),
                r.kill()
            }
        });
        r.fromTo(t, {
            opacity: 0
        }, {
            opacity: 1
        }, .3),
        f_.onEnter(),
        n()
    },
    async onLeave(t, e) {
        Dn.timeline({
            onComplete: e,
            defaults: {
                duration: v_,
                ease: b_
            }
        }).to(t, {
            opacity: 0
        }, 0),
        f_.onLeave()
    }
}
  , w_ = {
    pageTransition: br
}
  , T_ = {
    pageTransition: br
}
  , x_ = {
    pageTransition: br
}
  , E_ = {
    pageTransition: br
}
  , S_ = {
    pageTransition: br
}
  , C_ = {
    pageTransition: br
}
  , k_ = {
    pageTransition: br
}
  , R_ = {
    pageTransition: br
}
  , P_ = {
    pageTransition: br
}
  , Wf = [{
    name: "home",
    path: "/home",
    meta: w_ || {},
    component: () => je( () => import("./CwtODRB9.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]), import.meta.url)
}, {
    name: "about",
    path: "/about",
    meta: T_ || {},
    component: () => je( () => import("./B7nfpW9d.js"), __vite__mapDeps([19, 2, 3, 4, 5, 20, 21, 6, 7, 8, 11, 9, 12, 22, 13, 14, 15, 16, 23, 24, 25]), import.meta.url)
}, {
    name: "index",
    path: "/",
    meta: x_ || {},
    component: () => je( () => import("./BkqGLCYF.js"), __vite__mapDeps([26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]), import.meta.url)
}, {
    name: "contact",
    path: "/contact",
    meta: E_ || {},
    component: () => je( () => import("./BPIRsWBQ.js"), __vite__mapDeps([27, 2, 3, 4, 5, 28]), import.meta.url)
}, {
    name: "news-id",
    path: "/news/:id()",
    component: () => je( () => import("./O3I4SUWC.js"), __vite__mapDeps([29, 30, 20, 21, 11, 9, 12, 31, 3, 4, 32, 33, 34, 35, 36, 37, 2, 5, 38]), import.meta.url)
}, {
    name: "consulting",
    path: "/consulting",
    meta: S_ || {},
    component: () => je( () => import("./DxxqEkjj.js"), __vite__mapDeps([39, 2, 3, 4, 5, 13, 14, 15, 16, 32, 33, 40, 9, 6, 7, 8, 22, 20, 21, 11, 12, 23, 10, 17, 41]), import.meta.url)
}, {
    name: "news",
    path: "/news",
    meta: C_ || {},
    component: () => je( () => import("./DyzWxbTC.js"), __vite__mapDeps([42, 3, 4, 36, 37, 9, 2, 5, 43, 44, 45]), import.meta.url)
}, {
    name: "landing-id",
    path: "/landing/:id()",
    component: () => je( () => import("./Bd2w2Ipp.js"), __vite__mapDeps([46, 47, 3, 4, 6, 7, 8, 48, 20, 21, 11, 9, 12, 24, 31, 32, 33, 34, 49, 50, 2, 5]), import.meta.url)
}, {
    name: "landing",
    path: "/landing",
    meta: k_ || {},
    component: () => je( () => import("./wYJfBMtb.js"), __vite__mapDeps([51, 2, 3, 4, 5, 52, 43, 44, 14, 15, 32, 33, 40, 9, 37, 53, 49]), import.meta.url)
}, {
    name: "projects-id",
    path: "/projects/:id()",
    component: () => je( () => import("./CEF-vgKg.js"), __vite__mapDeps([54, 47, 3, 4, 6, 7, 8, 48, 20, 21, 11, 9, 12, 24, 31, 32, 33, 34, 49, 50, 2, 5]), import.meta.url)
}, {
    name: "projects",
    path: "/projects",
    meta: R_ || {},
    component: () => je( () => import("./N8eAFCf2.js"), __vite__mapDeps([55, 2, 3, 4, 5, 52, 43, 44, 14, 15, 32, 33, 40, 9, 37, 53, 49]), import.meta.url)
}, {
    name: "legal-privacy-policy",
    path: "/legal/privacy-policy",
    component: () => je( () => import("./DHr6Vc-T.js"), __vite__mapDeps([56, 30, 20, 21, 11, 9, 12, 31, 3, 4, 32, 33, 34, 35, 2, 5, 57]), import.meta.url)
}, {
    name: "consultancy-projects-id",
    path: "/consultancy-projects/:id()",
    component: () => je( () => import("./G9vHfUmm.js"), __vite__mapDeps([58, 47, 3, 4, 6, 7, 8, 48, 20, 21, 11, 9, 12, 24, 31, 32, 33, 34, 49, 50, 2, 5]), import.meta.url)
}, {
    name: "consultancy-projects",
    path: "/consultancy-projects",
    meta: P_ || {},
    component: () => je( () => import("./Bo8zxcBE.js"), __vite__mapDeps([59, 2, 3, 4, 5, 52, 43, 44, 14, 15, 32, 33, 40, 9, 37, 53, 49]), import.meta.url)
}, {
    name: "localized-home",
    path: "/:locale(ru)/home",
    meta: w_ || {},
    component: () => je( () => import("./CwtODRB9.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]), import.meta.url)
}, {
    name: "localized-about",
    path: "/:locale(ru)/about",
    meta: T_ || {},
    component: () => je( () => import("./B7nfpW9d.js"), __vite__mapDeps([19, 2, 3, 4, 5, 20, 21, 6, 7, 8, 11, 9, 12, 22, 13, 14, 15, 16, 23, 24, 25]), import.meta.url)
}, {
    name: "localized-index",
    path: "/:locale(ru)",
    meta: x_ || {},
    component: () => je( () => import("./BkqGLCYF.js"), __vite__mapDeps([26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]), import.meta.url)
}, {
    name: "localized-contact",
    path: "/:locale(ru)/contact",
    meta: E_ || {},
    component: () => je( () => import("./BPIRsWBQ.js"), __vite__mapDeps([27, 2, 3, 4, 5, 28]), import.meta.url)
}, {
    name: "localized-news-id",
    path: "/:locale(ru)/news/:id()",
    component: () => je( () => import("./O3I4SUWC.js"), __vite__mapDeps([29, 30, 20, 21, 11, 9, 12, 31, 3, 4, 32, 33, 34, 35, 36, 37, 2, 5, 38]), import.meta.url)
}, {
    name: "localized-consulting",
    path: "/:locale(ru)/consulting",
    meta: S_ || {},
    component: () => je( () => import("./DxxqEkjj.js"), __vite__mapDeps([39, 2, 3, 4, 5, 13, 14, 15, 16, 32, 33, 40, 9, 6, 7, 8, 22, 20, 21, 11, 12, 23, 10, 17, 41]), import.meta.url)
}, {
    name: "localized-news",
    path: "/:locale(ru)/news",
    meta: C_ || {},
    component: () => je( () => import("./DyzWxbTC.js"), __vite__mapDeps([42, 3, 4, 36, 37, 9, 2, 5, 43, 44, 45]), import.meta.url)
}, {
    name: "localized-landing-id",
    path: "/:locale(ru)/landing/:id()",
    component: () => je( () => import("./Bd2w2Ipp.js"), __vite__mapDeps([46, 47, 3, 4, 6, 7, 8, 48, 20, 21, 11, 9, 12, 24, 31, 32, 33, 34, 49, 50, 2, 5]), import.meta.url)
}, {
    name: "localized-landing",
    path: "/:locale(ru)/landing",
    meta: k_ || {},
    component: () => je( () => import("./wYJfBMtb.js"), __vite__mapDeps([51, 2, 3, 4, 5, 52, 43, 44, 14, 15, 32, 33, 40, 9, 37, 53, 49]), import.meta.url)
}, {
    name: "localized-projects-id",
    path: "/:locale(ru)/projects/:id()",
    component: () => je( () => import("./CEF-vgKg.js"), __vite__mapDeps([54, 47, 3, 4, 6, 7, 8, 48, 20, 21, 11, 9, 12, 24, 31, 32, 33, 34, 49, 50, 2, 5]), import.meta.url)
}, {
    name: "localized-projects",
    path: "/:locale(ru)/projects",
    meta: R_ || {},
    component: () => je( () => import("./N8eAFCf2.js"), __vite__mapDeps([55, 2, 3, 4, 5, 52, 43, 44, 14, 15, 32, 33, 40, 9, 37, 53, 49]), import.meta.url)
}, {
    name: "localized-legal-privacy-policy",
    path: "/:locale(ru)/legal/privacy-policy",
    component: () => je( () => import("./DHr6Vc-T.js"), __vite__mapDeps([56, 30, 20, 21, 11, 9, 12, 31, 3, 4, 32, 33, 34, 35, 2, 5, 57]), import.meta.url)
}, {
    name: "localized-consultancy-projects-id",
    path: "/:locale(ru)/consultancy-projects/:id()",
    component: () => je( () => import("./G9vHfUmm.js"), __vite__mapDeps([58, 47, 3, 4, 6, 7, 8, 48, 20, 21, 11, 9, 12, 24, 31, 32, 33, 34, 49, 50, 2, 5]), import.meta.url)
}, {
    name: "localized-consultancy-projects",
    path: "/:locale(ru)/consultancy-projects",
    meta: P_ || {},
    component: () => je( () => import("./Bo8zxcBE.js"), __vite__mapDeps([59, 2, 3, 4, 5, 52, 43, 44, 14, 15, 32, 33, 40, 9, 37, 53, 49]), import.meta.url)
}]
  , Ow = (t, e) => ({
    default: () => {
        var n;
        return t ? tt(ju, t === !0 ? {} : t, e) : (n = e.default) == null ? void 0 : n.call(e)
    }
})
  , RA = /(:\w+)\([^)]+\)/g
  , PA = /(:\w+)[?+*]/g
  , AA = /:\w+/g;
function A_(t) {
    const e = (t == null ? void 0 : t.meta.key) ?? t.path.replace(RA, "$1").replace(PA, "$1").replace(AA, n => {
        var r;
        return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof e == "function" ? e(t) : e
}
function OA(t, e) {
    return t === e || e === Yn ? !1 : A_(t) !== A_(e) ? !0 : !t.matched.every( (r, i) => {
        var s, o;
        return r.components && r.components.default === ((o = (s = e.matched[i]) == null ? void 0 : s.components) == null ? void 0 : o.default)
    }
    )
}
function $A(t, e=!1) {
    if (t) {
        if (t.nodeName === "#comment" && t.nodeValue === "[")
            return $w(t, [], e);
        if (e) {
            const n = t.cloneNode(!0);
            return n.querySelectorAll("[data-island-slot]").forEach(r => {
                r.innerHTML = ""
            }
            ),
            [n.outerHTML]
        }
        return [t.outerHTML]
    }
}
function $w(t, e=[], n=!1) {
    var r;
    if (t && t.nodeName) {
        if (MA(t))
            return e;
        if (!LA(t)) {
            const i = t.cloneNode(!0);
            n && ((r = i.querySelectorAll) == null || r.call(i, "[data-island-slot]").forEach(s => {
                s.innerHTML = ""
            }
            )),
            e.push(i.outerHTML)
        }
        $w(t.nextSibling, e, n)
    }
    return e
}
function qf(t, e) {
    const n = t ? $A(t) : [e];
    return n ? kv(n.join(""), n.length) : tt("div")
}
function LA(t) {
    return t.nodeName === "#comment" && t.nodeValue === "["
}
function MA(t) {
    return t.nodeName === "#comment" && t.nodeValue === "]"
}
const IA = {
    scrollBehavior(t, e, n) {
        var l;
        const r = Ye()
          , i = ((l = $t().options) == null ? void 0 : l.scrollBehaviorType) ?? "auto";
        if (t.path === e.path)
            return e.hash && !t.hash ? {
                left: 0,
                top: 0
            } : t.hash ? {
                el: t.hash,
                top: Lw(t.hash),
                behavior: i
            } : !1;
        if ((typeof t.meta.scrollToTop == "function" ? t.meta.scrollToTop(t, e) : t.meta.scrollToTop) === !1)
            return !1;
        let o = n || void 0;
        !o && OA(t, e) && (o = {
            left: 0,
            top: 0
        });
        const a = r._runningTransition ? "page:transition:finish" : "page:loading:end";
        return new Promise(u => {
            if (e === Yn) {
                u(O_(t, "instant", o));
                return
            }
            r.hooks.hookOnce(a, () => {
                requestAnimationFrame( () => u(O_(t, "instant", o)))
            }
            )
        }
        )
    }
};
function Lw(t) {
    try {
        const e = document.querySelector(t);
        if (e)
            return (Number.parseFloat(getComputedStyle(e).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}
function O_(t, e, n) {
    return n || (t.hash ? {
        el: t.hash,
        top: Lw(t.hash),
        behavior: e
    } : {
        left: 0,
        top: 0,
        behavior: e
    })
}
const DA = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , kr = {
    ...DA,
    ...IA
}
  , NA = async (t, e) => {
    var o;
    let n, r;
    if (!((o = t.meta) != null && o.validate))
        return;
    const i = ([n,r] = jr( () => Promise.resolve(t.meta.validate(t))),
    n = await n,
    r(),
    n);
    if (i === !0)
        return;
    const s = Es({
        fatal: !0,
        statusCode: i && i.statusCode || 404,
        statusMessage: i && i.statusMessage || `Page Not Found: ${t.fullPath}`,
        data: {
            path: t.fullPath
        }
    });
    return typeof window < "u" && window.history.pushState({}, "", e.fullPath),
    s
}
  , FA = () => {
    const t = kt("prevRoute", () => "")
      , e = kt("currentRoute", () => "")
      , n = kt("isProjectTransition", () => !1);
    return {
        prevRoute: t,
        currentRoute: e,
        isProjectTransition: n
    }
}
  , jA = (t, e) => {
    const {prevRoute: n, currentRoute: r} = FA();
    n.value = String(e.name),
    r.value = String(t.name),
    t.meta.pageTransition = br,
    e.meta.pageTransition = br
}
  , BA = async t => {
    let e, n;
    const r = ([e,n] = jr( () => Jh({
        path: t.path
    })),
    e = await e,
    n(),
    e);
    if (r.redirect)
        return mi(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect,
        !1) : r.redirect
}
  , HA = [NA, jA, BA]
  , Xa = {};
function UA(t, e, n) {
    const {pathname: r, search: i, hash: s} = e
      , o = t.indexOf("#");
    if (o > -1) {
        const u = s.includes(t.slice(o)) ? t.slice(o).length : 1;
        let c = s.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        jg(c, "")
    }
    const a = jg(r, t)
      , l = !n || ME(a, n) ? a : n;
    return l + (l.includes("?") ? "" : i) + s
}
const VA = an({
    name: "nuxt:router",
    enforce: "pre",
    async setup(t) {
        var v;
        let e, n, r = bn().app.baseURL;
        const i = ((v = kr.history) == null ? void 0 : v.call(kr, r)) ?? ik(r)
          , s = kr.routes ? ([e,n] = jr( () => kr.routes(Wf)),
        e = await e,
        n(),
        e ?? Wf) : Wf;
        let o;
        const a = Rk({
            ...kr,
            scrollBehavior: (y, b, m) => {
                if (b === Yn) {
                    o = m;
                    return
                }
                if (kr.scrollBehavior) {
                    if (a.options.scrollBehavior = kr.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const _ = a.beforeEach( () => {
                            _(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return kr.scrollBehavior(y, Yn, o || m)
                }
            }
            ,
            history: i,
            routes: s
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        t.vueApp.use(a);
        const l = ko(a.currentRoute.value);
        a.afterEach( (y, b) => {
            l.value = b
        }
        ),
        Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
            get: () => l.value
        });
        const u = UA(r, window.location, t.payload.path)
          , c = ko(a.currentRoute.value)
          , f = () => {
            c.value = a.currentRoute.value
        }
        ;
        t.hook("page:finish", f),
        a.afterEach( (y, b) => {
            var m, _, w, E;
            ((_ = (m = y.matched[0]) == null ? void 0 : m.components) == null ? void 0 : _.default) === ((E = (w = b.matched[0]) == null ? void 0 : w.components) == null ? void 0 : E.default) && f()
        }
        );
        const d = {};
        for (const y in c.value)
            Object.defineProperty(d, y, {
                get: () => c.value[y],
                enumerable: !0
            });
        t._route = si(d),
        t._middleware || (t._middleware = {
            global: [],
            named: {}
        });
        const h = Bu();
        a.afterEach(async (y, b, m) => {
            delete t._processingMiddleware,
            !t.isHydrating && h.value && await t.runWithContext(s0),
            m && await t.callHook("page:loading:end")
        }
        );
        try {
            [e,n] = jr( () => a.isReady()),
            await e,
            n()
        } catch (y) {
            [e,n] = jr( () => t.runWithContext( () => cs(y))),
            await e,
            n()
        }
        const g = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
        f();
        const p = t.payload.state._layout;
        return a.beforeEach(async (y, b) => {
            var m;
            await t.callHook("page:loading:start"),
            y.meta = mr(y.meta),
            t.isHydrating && p && !Ui(y.meta.layout) && (y.meta.layout = p),
            t._processingMiddleware = !0;
            {
                const _ = new Set([...HA, ...t._middleware.global]);
                for (const w of y.matched) {
                    const E = w.meta.middleware;
                    if (E)
                        for (const S of np(E))
                            _.add(S)
                }
                {
                    const w = await t.runWithContext( () => Jh({
                        path: y.path
                    }));
                    if (w.appMiddleware)
                        for (const E in w.appMiddleware)
                            w.appMiddleware[E] ? _.add(E) : _.delete(E)
                }
                for (const w of _) {
                    const E = typeof w == "string" ? t._middleware.named[w] || await ((m = Xa[w]) == null ? void 0 : m.call(Xa).then(S => S.default || S)) : w;
                    if (!E)
                        throw new Error(`Unknown route middleware: '${w}'.`);
                    try {
                        const S = await t.runWithContext( () => E(y, b));
                        if (!t.payload.serverRendered && t.isHydrating && (S === !1 || S instanceof Error)) {
                            const L = S || Es({
                                statusCode: 404,
                                statusMessage: `Page Not Found: ${u}`
                            });
                            return await t.runWithContext( () => cs(L)),
                            !1
                        }
                        if (S === !0)
                            continue;
                        if (S === !1)
                            return S;
                        if (S)
                            return o0(S) && S.fatal && await t.runWithContext( () => cs(S)),
                            S
                    } catch (S) {
                        const L = Es(S);
                        return L.fatal && await t.runWithContext( () => cs(L)),
                        L
                    }
                }
            }
        }
        ),
        a.onError(async () => {
            delete t._processingMiddleware,
            await t.callHook("page:loading:end")
        }
        ),
        a.afterEach(async (y, b) => {
            y.matched.length === 0 && await t.runWithContext( () => cs(Es({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${y.fullPath}`,
                data: {
                    path: y.fullPath
                }
            })))
        }
        ),
        t.hooks.hookOnce("app:created", async () => {
            try {
                "name"in g && (g.name = void 0),
                await a.replace({
                    ...g,
                    force: !0
                }),
                a.options.scrollBehavior = kr.scrollBehavior
            } catch (y) {
                await t.runWithContext( () => cs(y))
            }
        }
        ),
        {
            provide: {
                router: a
            }
        }
    }
})
  , Gr = {}
  , vi = {}
  , Yf = []
  , Xr = {};
function zA(t) {
    return Array.isArray(t) || typeof t == "object" && t !== null ? JSON.parse(JSON.stringify(t)) : t
}
function ua(t, e) {
    let n = t;
    if (t === null || typeof e != "string")
        return null;
    if (t[e])
        n = t[e];
    else {
        const r = e.toString().split(".");
        for (const i of r)
            if (n && typeof n == "object" && i in n)
                n = n[i];
            else
                return null
    }
    return typeof n == "object" && n !== null ? zA(n) : n ?? null
}
function Mw() {
    return {
        hasCache(t, e) {
            return (Xr[`${t}:${e}`] ?? new Map).size > 0
        },
        getCache(t, e) {
            return Xr[`${t}:${e}`]
        },
        setCache(t, e, n) {
            Xr[`${t}:${e}`] = n
        },
        mergeTranslation(t, e, n, r=!1) {
            !r && !vi[`${t}:${e}`] && console.error(`marge: route ${t}:${e} not loaded`),
            vi[`${t}:${e}`] = {
                ...vi[`${t}:${e}`],
                ...n
            }
        },
        mergeGlobalTranslation(t, e, n=!1) {
            !n && !Gr[`${t}`] && console.error(`marge: route ${t} not loaded`),
            Gr[t] = {
                ...Gr[t],
                ...e
            }
        },
        hasGeneralTranslation(t) {
            return !!Gr[t]
        },
        hasPageTranslation(t, e) {
            return !!vi[`${t}:${e}`]
        },
        hasTranslation: (t, e) => {
            for (const n of Yf)
                if (ua(n[t] || null, e) !== null)
                    return !0;
            return ua(Gr[t] || null, e) !== null
        }
        ,
        getTranslation: (t, e, n) => {
            var r;
            const i = `${t}:${e}`
              , s = (r = Xr[i]) == null ? void 0 : r.get(n);
            if (s)
                return s;
            let o = null;
            for (const a of Yf)
                if (o = ua(a[t] || null, n),
                o !== null)
                    break;
            return o || (o = ua(vi[i] || null, n) ?? ua(Gr[t] || null, n)),
            o && (Xr[i] || (Xr[i] = new Map),
            Xr[i].set(n, o)),
            o
        }
        ,
        async loadPageTranslations(t, e, n) {
            const r = `${t}:${e}`;
            vi[r] = {
                ...n
            }
        },
        async loadTranslations(t, e) {
            Gr[t] = {
                ...e
            }
        },
        clearCache() {
            Object.keys(Gr).forEach(t => {
                Gr[t] = {}
            }
            ),
            Object.keys(vi).forEach(t => {
                vi[t] = {}
            }
            ),
            Yf.length = 0,
            Object.keys(Xr).forEach(t => {
                Xr[t].clear()
            }
            )
        }
    }
}
function WA(t, e) {
    let n = t;
    for (const r in e)
        n = n.split(`{${r}}`).join(String(e[r]));
    return n
}
const as = t => t === "prefix" || t === "prefix_and_default"
  , Et = t => t === "no_prefix"
  , qA = t => t === "prefix"
  , YA = t => t === "prefix_except_default";
let KA = class {
    constructor(e, n, r, i, s, o) {
        this.i18nConfig = e,
        this.router = n,
        this.hashLocaleDefault = r,
        this.noPrefixDefault = i,
        this.navigateTo = s,
        this.setCookie = o
    }
    getCurrentLocale(e) {
        var n;
        return e = e ?? this.router.currentRoute.value,
        this.i18nConfig.hashMode && this.hashLocaleDefault ? this.hashLocaleDefault : Et(this.i18nConfig.strategy) && this.noPrefixDefault ? this.noPrefixDefault : (((n = e.params) == null ? void 0 : n.locale) ?? this.i18nConfig.defaultLocale).toString()
    }
    getCurrentName(e) {
        var n;
        const r = this.getCurrentLocale(e)
          , i = (n = this.i18nConfig.locales) == null ? void 0 : n.find(s => s.code === r);
        return (i == null ? void 0 : i.displayName) ?? null
    }
    getRouteName(e, n) {
        return (e.name ?? "").toString().toString().replace("localized-", "").replace(new RegExp(`-${n}$`), "")
    }
    getFullPathWithBaseUrl(e, n) {
        let r = this.router.resolve(n).fullPath;
        e != null && e.baseDefault && (r = r.replace(new RegExp(`^/${e.code}`), ""));
        let i = e.baseUrl;
        return i || (i = ""),
        i != null && i.endsWith("/") && (i = i.slice(0, -1)),
        i + r
    }
    switchLocaleRoute(e, n, r, i) {
        var s, o;
        const a = (s = this.i18nConfig.locales) == null ? void 0 : s.find(d => d.code === n)
          , l = this.getRouteName(r, e);
        if (this.router.hasRoute(`localized-${l}-${n}`)) {
            const d = {
                ...r.params ?? {},
                ...i == null ? void 0 : i[n]
            };
            Et(this.i18nConfig.strategy) || (d.locale = n);
            const h = {
                name: `localized-${l}-${n}`,
                params: d,
                query: r.query,
                hash: r.hash
            };
            return a != null && a.baseUrl ? this.getFullPathWithBaseUrl(a, h) : h
        }
        let u = l;
        const c = {
            ...r.params ?? {},
            ...i == null ? void 0 : i[n]
        };
        delete c.locale,
        Et(this.i18nConfig.strategy) || (l === "custom-fallback-route" ? u = l : u = n !== this.i18nConfig.defaultLocale || as(this.i18nConfig.strategy) ? `localized-${l}` : l,
        Et(this.i18nConfig.strategy) || (n !== this.i18nConfig.defaultLocale || as(this.i18nConfig.strategy)) && (c.locale = n));
        const f = {
            name: u,
            params: c,
            query: r.query,
            hash: r.hash
        };
        return Et(this.i18nConfig.strategy) && ((o = this.i18nConfig.locales) == null || o.forEach( (d, h) => {
            f.name.endsWith(`-${d.code}`) && (f.name = f.name.slice(0, -d.code - 1))
        }
        )),
        a != null && a.baseUrl ? this.getFullPathWithBaseUrl(a, f) : f
    }
    resolveParams(e) {
        const n = typeof e == "object" && "params"in e && typeof e.params == "object" ? {
            ...e.params
        } : {};
        if (typeof e == "string") {
            const r = this.router.resolve(e);
            r && r.params && Object.assign(n, r.params)
        }
        return n
    }
    handlePrefixStrategy(e) {
        if (!as(this.i18nConfig.strategy))
            return e;
        const n = this.i18nConfig.defaultLocale;
        let r = e;
        typeof e == "string" && (r = this.router.resolve("/" + n + e));
        const i = this.getRouteName(r, n)
          , s = this.resolveParams(r);
        return Et(this.i18nConfig.strategy) || (s.locale = n),
        this.router.hasRoute(`localized-${i}`) ? this.router.resolve({
            name: `localized-${i}`,
            query: r.query,
            hash: r.hash,
            params: s
        }) : this.router.hasRoute(`localized-${i}-${n}`) ? this.router.resolve({
            name: `localized-${i}-${n}`,
            query: r.query,
            hash: r.hash,
            params: s
        }) : e
    }
    createLocalizedRoute(e, n, r) {
        const i = this.router.resolve(e)
          , s = this.getRouteName(i, r).replace(new RegExp(`-${this.i18nConfig.defaultLocale}$`), "");
        if (!Et(this.i18nConfig.strategy) && (!s || s === "")) {
            let l = this.router.resolve(e).path.replace(new RegExp(`^/${r}/`), "/");
            return (r !== this.i18nConfig.defaultLocale || as(this.i18nConfig.strategy)) && (l = "/" + r + l),
            this.router.resolve({
                path: l,
                query: i.query,
                hash: i.hash
            })
        }
        if (this.router.hasRoute(`localized-${s}-${r}`)) {
            const l = this.resolveParams(i);
            return Et(this.i18nConfig.strategy) || (l.locale = r),
            this.router.resolve({
                name: `localized-${s}-${r}`,
                params: l,
                query: i.query,
                hash: i.hash
            })
        }
        const o = r !== this.i18nConfig.defaultLocale || as(this.i18nConfig.strategy) ? `localized-${s}` : s;
        if (!this.router.hasRoute(o)) {
            const l = this.resolveParams(e);
            return delete l.locale,
            this.router.hasRoute(s) ? this.router.resolve({
                name: s,
                params: l,
                query: i.query,
                hash: i.hash
            }) : this.router.resolve("/")
        }
        const a = this.resolveParams(e);
        return delete a.locale,
        Et(this.i18nConfig.strategy) || (r !== this.i18nConfig.defaultLocale || as(this.i18nConfig.strategy)) && (a.locale = r),
        this.router.resolve({
            name: o,
            params: a,
            query: i.query,
            hash: i.hash
        })
    }
    getLocalizedRoute(e, n, r) {
        const i = r || this.getCurrentLocale(n)
          , s = this.handlePrefixStrategy(e);
        return this.createLocalizedRoute(s, n, i)
    }
    updateCookies(e) {
        this.i18nConfig.hashMode && (this.setCookie("hash-locale", e),
        this.hashLocaleDefault = e),
        Et(this.i18nConfig.strategy) && (this.setCookie("no-prefix-locale", e),
        this.noPrefixDefault = e)
    }
    getCurrentRoute() {
        return this.router.currentRoute.value
    }
    resolveRouteWithStrategy(e, n, r) {
        return Et(this.i18nConfig.strategy) ? this.router.resolve(e) : n !== this.i18nConfig.defaultLocale || as(this.i18nConfig.strategy) ? this.router.resolve(`/${r}${e}`) : this.router.resolve(e)
    }
    switchLocaleLogic(e, n, r) {
        const i = this.getCurrentLocale();
        let s;
        typeof r == "string" ? s = this.resolveRouteWithStrategy(r, e, i) : s = r ?? this.getCurrentRoute(),
        this.updateCookies(e);
        const o = this.switchLocaleRoute(i, e, s, n);
        return typeof o == "string" && o.startsWith("http") ? this.navigateTo(o, {
            redirectCode: 200,
            external: !0
        }) : (Et(this.i18nConfig.strategy) && (o.force = !0),
        this.router.push(o))
    }
    resolveLocalizedRoute(e, n) {
        const r = this.getCurrentRoute()
          , i = this.getCurrentLocale()
          , s = n ?? i;
        let o;
        return typeof e == "string" ? (e.startsWith("/") || (e = `/${e}`),
        o = this.resolveRouteWithStrategy(e, s, i)) : o = e,
        this.getLocalizedRoute(o, r, s)
    }
}
;
class GA {
    formatNumber(e, n, r) {
        return new Intl.NumberFormat(n,r).format(e)
    }
    formatDate(e, n, r) {
        const i = new Date(e);
        return Number.isNaN(i.getTime()) ? "Invalid Date" : new Intl.DateTimeFormat(n,r).format(i)
    }
    formatRelativeTime(e, n, r) {
        const i = new Date(e);
        if (Number.isNaN(i.getTime()))
            return new Intl.RelativeTimeFormat(n,r).format(0, "second");
        const s = Math.floor((new Date().getTime() - i.getTime()) / 1e3)
          , o = [{
            unit: "year",
            seconds: 31536e3
        }, {
            unit: "month",
            seconds: 2592e3
        }, {
            unit: "day",
            seconds: 86400
        }, {
            unit: "hour",
            seconds: 3600
        }, {
            unit: "minute",
            seconds: 60
        }, {
            unit: "second",
            seconds: 1
        }];
        for (const {unit: a, seconds: l} of o) {
            const u = Math.floor(s / l);
            if (u >= 1)
                return new Intl.RelativeTimeFormat(n,r).format(-u, a)
        }
        return new Intl.RelativeTimeFormat(n,r).format(0, "second")
    }
}
const XA = (t, e, n, r, i) => {
    const s = i(t, n);
    if (!s)
        return null;
    const o = s.toString().split("|");
    return (e < o.length ? o[e].trim() : o[o.length - 1].trim()).replace("{count}", e.toString())
}
;
function JA(t, e) {
    if (typeof t != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , r = e || {}
      , i = r.decode || QA;
    let s = 0;
    for (; s < t.length; ) {
        const o = t.indexOf("=", s);
        if (o === -1)
            break;
        let a = t.indexOf(";", s);
        if (a === -1)
            a = t.length;
        else if (a < o) {
            s = t.lastIndexOf(";", o - 1) + 1;
            continue
        }
        const l = t.slice(s, o).trim();
        if (r != null && r.filter && !(r != null && r.filter(l))) {
            s = a + 1;
            continue
        }
        if (n[l] === void 0) {
            let u = t.slice(o + 1, a).trim();
            u.codePointAt(0) === 34 && (u = u.slice(1, -1)),
            n[l] = ZA(u, i)
        }
        s = a + 1
    }
    return n
}
function QA(t) {
    return t.includes("%") ? decodeURIComponent(t) : t
}
function ZA(t, e) {
    try {
        return e(t)
    } catch {
        return t
    }
}
const cc = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function $_(t, e, n) {
    const r = n || {}
      , i = r.encode || encodeURIComponent;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!cc.test(t))
        throw new TypeError("argument name is invalid");
    const s = i(e);
    if (s && !cc.test(s))
        throw new TypeError("argument val is invalid");
    let o = t + "=" + s;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        o += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!cc.test(r.domain))
            throw new TypeError("option domain is invalid");
        o += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!cc.test(r.path))
            throw new TypeError("option path is invalid");
        o += "; Path=" + r.path
    }
    if (r.expires) {
        if (!eO(r.expires) || Number.isNaN(r.expires.valueOf()))
            throw new TypeError("option expires is invalid");
        o += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (o += "; HttpOnly"),
    r.secure && (o += "; Secure"),
    r.priority)
        switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
            {
                o += "; Priority=Low";
                break
            }
        case "medium":
            {
                o += "; Priority=Medium";
                break
            }
        case "high":
            {
                o += "; Priority=High";
                break
            }
        default:
            throw new TypeError("option priority is invalid")
        }
    if (r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            {
                o += "; SameSite=Strict";
                break
            }
        case "lax":
            {
                o += "; SameSite=Lax";
                break
            }
        case "strict":
            {
                o += "; SameSite=Strict";
                break
            }
        case "none":
            {
                o += "; SameSite=None";
                break
            }
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return r.partitioned && (o += "; Partitioned"),
    o
}
function eO(t) {
    return Object.prototype.toString.call(t) === "[object Date]" || t instanceof Date
}
function L_(t) {
    return typeof t == "string" ? `'${t}'` : new tO().serialize(t)
}
const tO = function() {
    var e;
    class t {
        constructor() {
            Jp(this, e, new Map)
        }
        compare(r, i) {
            const s = typeof r
              , o = typeof i;
            return s === "string" && o === "string" ? r.localeCompare(i) : s === "number" && o === "number" ? r - i : String.prototype.localeCompare.call(this.serialize(r, !0), this.serialize(i, !0))
        }
        serialize(r, i) {
            if (r === null)
                return "null";
            switch (typeof r) {
            case "string":
                return i ? r : `'${r}'`;
            case "bigint":
                return `${r}n`;
            case "object":
                return this.$object(r);
            case "function":
                return this.$function(r)
            }
            return String(r)
        }
        serializeObject(r) {
            const i = Object.prototype.toString.call(r);
            if (i !== "[object Object]")
                return this.serializeBuiltInType(i.length < 10 ? `unknown:${i}` : i.slice(8, -1), r);
            const s = r.constructor
              , o = s === Object || s === void 0 ? "" : s.name;
            if (o !== "" && globalThis[o] === s)
                return this.serializeBuiltInType(o, r);
            if (typeof r.toJSON == "function") {
                const a = r.toJSON();
                return o + (a !== null && typeof a == "object" ? this.$object(a) : `(${this.serialize(a)})`)
            }
            return this.serializeObjectEntries(o, Object.entries(r))
        }
        serializeBuiltInType(r, i) {
            const s = this["$" + r];
            if (s)
                return s.call(this, i);
            if (typeof (i == null ? void 0 : i.entries) == "function")
                return this.serializeObjectEntries(r, i.entries());
            throw new Error(`Cannot serialize ${r}`)
        }
        serializeObjectEntries(r, i) {
            const s = Array.from(i).sort( (a, l) => this.compare(a[0], l[0]));
            let o = `${r}{`;
            for (let a = 0; a < s.length; a++) {
                const [l,u] = s[a];
                o += `${this.serialize(l, !0)}:${this.serialize(u)}`,
                a < s.length - 1 && (o += ",")
            }
            return o + "}"
        }
        $object(r) {
            let i = ea(this, e).get(r);
            return i === void 0 && (ea(this, e).set(r, `#${ea(this, e).size}`),
            i = this.serializeObject(r),
            ea(this, e).set(r, i)),
            i
        }
        $function(r) {
            const i = Function.prototype.toString.call(r);
            return i.slice(-15) === "[native code] }" ? `${r.name || ""}()[native]` : `${r.name}(${r.length})${i.replace(/\s*\n\s*/g, "")}`
        }
        $Array(r) {
            let i = "[";
            for (let s = 0; s < r.length; s++)
                i += this.serialize(r[s]),
                s < r.length - 1 && (i += ",");
            return i + "]"
        }
        $Date(r) {
            try {
                return `Date(${r.toISOString()})`
            } catch {
                return "Date(null)"
            }
        }
        $ArrayBuffer(r) {
            return `ArrayBuffer[${new Uint8Array(r).join(",")}]`
        }
        $Set(r) {
            return `Set${this.$Array(Array.from(r).sort( (i, s) => this.compare(i, s)))}`
        }
        $Map(r) {
            return this.serializeObjectEntries("Map", r.entries())
        }
    }
    e = new WeakMap;
    for (const n of ["Error", "RegExp", "URL"])
        t.prototype["$" + n] = function(r) {
            return `${n}(${r})`
        }
        ;
    for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"])
        t.prototype["$" + n] = function(r) {
            return `${n}[${r.join(",")}]`
        }
        ;
    for (const n of ["BigInt64Array", "BigUint64Array"])
        t.prototype["$" + n] = function(r) {
            return `${n}[${r.join("n,")}${r.length > 0 ? "n" : ""}]`
        }
        ;
    return t
}();
function nO(t, e) {
    return t === e || L_(t) === L_(e)
}
function cr(t) {
    if (typeof t != "object")
        return t;
    var e, n, r = Object.prototype.toString.call(t);
    if (r === "[object Object]") {
        if (t.constructor !== Object && typeof t.constructor == "function") {
            n = new t.constructor;
            for (e in t)
                t.hasOwnProperty(e) && n[e] !== t[e] && (n[e] = cr(t[e]))
        } else {
            n = {};
            for (e in t)
                e === "__proto__" ? Object.defineProperty(n, e, {
                    value: cr(t[e]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[e] = cr(t[e])
        }
        return n
    }
    if (r === "[object Array]") {
        for (e = t.length,
        n = Array(e); e--; )
            n[e] = cr(t[e]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    t.forEach(function(i) {
        n.add(cr(i))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    t.forEach(function(i, s) {
        n.set(cr(s), cr(i))
    }),
    n) : r === "[object Date]" ? new Date(+t) : r === "[object RegExp]" ? (n = new RegExp(t.source,t.flags),
    n.lastIndex = t.lastIndex,
    n) : r === "[object DataView]" ? new t.constructor(cr(t.buffer)) : r === "[object ArrayBuffer]" ? t.slice(0) : r.slice(-6) === "Array]" ? new t.constructor(t) : t
}
const rO = {
    path: "/",
    watch: !0,
    decode: t => sl(decodeURIComponent(t)),
    encode: t => encodeURIComponent(typeof t == "string" ? t : JSON.stringify(t))
}
  , uc = window.cookieStore;
function fa(t, e) {
    var u;
    const n = {
        ...rO,
        ...e
    };
    n.filter ?? (n.filter = c => c === t);
    const r = M_(n) || {};
    let i;
    n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
    const s = i !== void 0 && i <= 0
      , o = s || r[t] === void 0 || r[t] === null
      , a = cr(s ? void 0 : r[t] ?? ((u = n.default) == null ? void 0 : u.call(n)))
      , l = i && !s ? oO(a, i, n.watch && n.watch !== "shallow") : De(a);
    {
        let c = null;
        try {
            !uc && typeof BroadcastChannel < "u" && (c = new BroadcastChannel(`nuxt:cookies:${t}`))
        } catch {}
        const f = (p=!1) => {
            !p && (n.readonly || nO(l.value, r[t])) || (sO(t, l.value, n),
            r[t] = cr(l.value),
            c == null || c.postMessage({
                value: n.encode(l.value)
            }))
        }
          , d = p => {
            var y;
            const v = p.refresh ? (y = M_(n)) == null ? void 0 : y[t] : n.decode(p.value);
            h = !0,
            l.value = v,
            r[t] = cr(v),
            nr( () => {
                h = !1
            }
            )
        }
        ;
        let h = !1;
        const g = !!wl();
        if (g && Fc( () => {
            h = !0,
            f(),
            c == null || c.close()
        }
        ),
        uc) {
            const p = v => {
                const y = v.changed.find(m => m.name === t)
                  , b = v.deleted.find(m => m.name === t);
                y && d({
                    value: y.value
                }),
                b && d({
                    value: null
                })
            }
            ;
            uc.addEventListener("change", p),
            g && Fc( () => uc.removeEventListener("change", p))
        } else
            c && (c.onmessage = ({data: p}) => d(p));
        n.watch && zt(l, () => {
            h || f()
        }
        , {
            deep: n.watch !== "shallow"
        }),
        o && f(o)
    }
    return l
}
function M_(t={}) {
    return JA(document.cookie, t)
}
function iO(t, e, n={}) {
    return e == null ? $_(t, e, {
        ...n,
        maxAge: -1
    }) : $_(t, e, n)
}
function sO(t, e, n={}) {
    document.cookie = iO(t, e, n)
}
const I_ = 2147483647;
function oO(t, e, n) {
    let r, i, s = 0;
    const o = n ? De(t) : {
        value: t
    };
    return wl() && Fc( () => {
        i == null || i(),
        clearTimeout(r)
    }
    ),
    Ly( (a, l) => {
        n && (i = zt(o, l));
        function u() {
            s = 0,
            clearTimeout(r);
            const c = e - s
              , f = c < I_ ? c : I_;
            r = setTimeout( () => {
                if (s += f,
                s < e)
                    return u();
                o.value = void 0,
                l()
            }
            , f)
        }
        return {
            get() {
                return a(),
                o.value
            },
            set(c) {
                u(),
                o.value = c,
                l()
            }
        }
    }
    )
}
const Jr = Mw()
  , aO = an(async t => {
    let e, n;
    const i = bn().public.i18nConfig
      , s = i.apiBaseUrl ?? "_locales"
      , o = $t()
      , a = bn();
    let l = null
      , u = null;
    i.hashMode && (l = ([e,n] = jr( () => t.runWithContext( () => fa("hash-locale").value)),
    e = await e,
    n(),
    e)),
    Et(i.strategy) && (u = ([e,n] = jr( () => t.runWithContext( () => fa("no-prefix-locale").value)),
    e = await e,
    n(),
    e));
    const c = new KA(i,o,l,u, (y, b) => Kh(y, b), (y, b) => {
        t.runWithContext( () => fa(y).value = b)
    }
    )
      , f = new GA
      , d = kt("i18n-route-params", () => ({}));
    t.hook("page:start", () => {
        d.value = null
    }
    );
    const h = async (y, b, m) => {
        try {
            if (!Jr.hasPageTranslation(y, b)) {
                let _ = b;
                if (i.routesLocaleLinks && i.routesLocaleLinks[_] && (_ = i.routesLocaleLinks[_]),
                !_ || _ === "") {
                    console.warn(`[nuxt-i18n-next] The page name is missing in the path: ${m}. Please ensure that definePageMeta({ name: 'pageName' }) is set.`);
                    return
                }
                const w = `/${s}/${_}/${y}/data.json`.replace(/\/{2,}/g, "/")
                  , E = await $fetch(w, {
                    baseURL: a.app.baseURL,
                    params: {
                        v: i.dateBuild
                    }
                });
                await Jr.loadPageTranslations(y, b, E ?? {})
            }
        } catch {}
    }
    ;
    async function g(y) {
        let b = c.getCurrentLocale(y);
        if (i.hashMode && (b = await t.runWithContext( () => fa("hash-locale", {
            default: () => b
        }).value)),
        Et(i.strategy) && (b = await t.runWithContext( () => fa("no-prefix-locale", {
            default: () => b
        }).value)),
        !Jr.hasGeneralTranslation(b)) {
            const m = `/${s}/general/${b}/data.json`.replace(/\/{2,}/g, "/")
              , _ = await $fetch(m, {
                baseURL: a.app.baseURL,
                params: {
                    v: i.dateBuild
                }
            });
            await Jr.loadTranslations(b, _ ?? {})
        }
        if (!i.disablePageLocales) {
            const m = c.getCurrentLocale(y)
              , _ = c.getRouteName(y, m);
            await h(m, _, y.fullPath)
        }
    }
    o.beforeEach(async (y, b, m) => {
        (y.path !== b.path || Et(i.strategy)) && await g(y),
        m && m()
    }
    ),
    [e,n] = jr( () => g(o.currentRoute.value)),
    await e,
    n();
    const p = {
        i18n: void 0,
        __micro: !0,
        getLocale: y => c.getCurrentLocale(y),
        getLocaleName: () => c.getCurrentName(c.getCurrentRoute()),
        defaultLocale: () => i.defaultLocale,
        getLocales: () => i.locales || [],
        getRouteName: (y, b) => {
            const m = b ?? c.getCurrentLocale()
              , _ = y ?? c.getCurrentRoute();
            return c.getRouteName(_, m)
        }
        ,
        t: (y, b, m, _) => {
            if (!y)
                return "";
            _ = _ ?? c.getCurrentRoute();
            const w = c.getCurrentLocale()
              , E = c.getRouteName(_, w);
            let S = Jr.getTranslation(w, E, y);
            return S || (S = m === void 0 ? y : m),
            typeof S == "string" && b ? WA(S, b) : S
        }
        ,
        ts: (y, b, m, _) => {
            const w = p.t(y, b, m, _);
            return (w == null ? void 0 : w.toString()) ?? m ?? y
        }
        ,
        _t: y => (b, m, _) => p.t(b, m, _, y),
        _ts: y => (b, m, _) => p.ts(b, m, _, y),
        tc: (y, b, m) => {
            const _ = c.getCurrentLocale()
              , {count: w, ...E} = typeof b == "number" ? {
                count: b
            } : b;
            return XA(y, Number.parseInt(w.toString()), E, _, p.t) ?? m ?? y
        }
        ,
        tn: (y, b) => {
            const m = c.getCurrentLocale();
            return f.formatNumber(y, m, b)
        }
        ,
        td: (y, b) => {
            const m = c.getCurrentLocale();
            return f.formatDate(y, m, b)
        }
        ,
        tdr: (y, b) => {
            const m = c.getCurrentLocale();
            return f.formatRelativeTime(y, m, b)
        }
        ,
        has: (y, b) => {
            b = b ?? c.getCurrentRoute();
            const m = c.getCurrentLocale()
              , _ = c.getRouteName(b, m);
            return !!Jr.getTranslation(m, _, y)
        }
        ,
        mergeTranslations: y => {
            const b = c.getCurrentRoute()
              , m = c.getCurrentLocale(b)
              , _ = c.getRouteName(b, m);
            Jr.mergeTranslation(m, _, y)
        }
        ,
        mergeGlobalTranslations: y => {
            const b = c.getCurrentLocale();
            Jr.mergeGlobalTranslation(b, y, !0)
        }
        ,
        switchLocaleRoute: y => {
            const b = c.getCurrentRoute()
              , m = c.getCurrentLocale(b);
            return c.switchLocaleRoute(m, y, b, ee(d.value))
        }
        ,
        clearCache: () => {
            Jr.clearCache()
        }
        ,
        switchLocalePath: y => {
            const b = c.getCurrentRoute()
              , m = c.getCurrentLocale(b)
              , _ = c.switchLocaleRoute(m, y, b, ee(d.value));
            return typeof _ == "string" ? _ : "fullPath"in _ && _.fullPath ? _.fullPath : "name"in _ && _.name && o.hasRoute(_.name) ? o.resolve(_).fullPath : ""
        }
        ,
        switchLocale: y => c.switchLocaleLogic(y, ee(d.value)),
        switchRoute: (y, b) => c.switchLocaleLogic(b ?? c.getCurrentLocale(), ee(d.value), y),
        localeRoute: (y, b) => c.resolveLocalizedRoute(y, b),
        localePath: (y, b) => {
            const m = c.resolveLocalizedRoute(y, b);
            return typeof m == "string" ? m : "fullPath"in m ? m.fullPath : ""
        }
        ,
        setI18nRouteParams: y => (d.value = y,
        d.value)
    }
      , v = Object.fromEntries(Object.entries(p).map( ([y,b]) => [`$${y}`, b]));
    return p.i18n = {
        ...p,
        ...v
    },
    {
        provide: p
    }
}
)
  , fh = globalThis.requestIdleCallback || (t => {
    const e = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
    };
    return setTimeout( () => {
        t(n)
    }
    , 1)
}
)
  , lO = globalThis.cancelIdleCallback || (t => {
    clearTimeout(t)
}
)
  , Qu = t => {
    const e = Ye();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", () => {
        fh( () => t())
    }
    ) : fh( () => t())
}
  , cO = an({
    name: "nuxt:payload",
    setup(t) {
        const e = new Set;
        $t().beforeResolve(async (n, r) => {
            if (n.path === r.path)
                return;
            const i = await nm(n.path);
            if (i) {
                for (const s of e)
                    delete t.static.data[s];
                for (const s in i.data)
                    s in t.static.data || e.add(s),
                    t.static.data[s] = i.data[s]
            }
        }
        ),
        Qu( () => {
            var n;
            t.hooks.hook("link:prefetch", async r => {
                const {hostname: i} = new URL(r,window.location.href);
                i === window.location.hostname && await nm(r).catch( () => {
                    console.warn("[nuxt] Error preloading payload for", r)
                }
                )
            }
            ),
            ((n = navigator.connection) == null ? void 0 : n.effectiveType) !== "slow-2g" && setTimeout(Hu, 1e3)
        }
        )
    }
})
  , uO = an( () => {
    const t = $t();
    Qu( () => {
        t.beforeResolve(async () => {
            await new Promise(e => {
                setTimeout(e, 100),
                requestAnimationFrame( () => {
                    setTimeout(e, 0)
                }
                )
            }
            )
        }
        )
    }
    )
}
)
  , fO = an(t => {
    let e;
    async function n() {
        const r = await Hu();
        e && clearTimeout(e),
        e = setTimeout(n, Wg);
        try {
            const i = await $fetch(qh("builds/latest.json") + `?${Date.now()}`);
            i.id !== r.id && t.hooks.callHook("app:manifest:update", i)
        } catch {}
    }
    Qu( () => {
        e = setTimeout(n, Wg)
    }
    )
}
);
function dO(t={}) {
    const e = t.path || window.location.pathname;
    let n = {};
    try {
        n = sl(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (t.force || (n == null ? void 0 : n.path) !== e || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: e,
                expires: Date.now() + (t.ttl ?? 1e4)
            }))
        } catch {}
        if (t.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: Ye().payload.state
                }))
            } catch {}
        window.location.pathname !== e ? window.location.href = e : window.location.reload()
    }
}
const hO = an({
    name: "nuxt:chunk-reload",
    setup(t) {
        const e = $t()
          , n = bn()
          , r = new Set;
        e.beforeEach( () => {
            r.clear()
        }
        ),
        t.hook("app:chunkError", ({error: s}) => {
            r.add(s)
        }
        );
        function i(s) {
            const a = "href"in s && s.href[0] === "#" ? n.app.baseURL + s.href : Pi(n.app.baseURL, s.fullPath);
            dO({
                path: a,
                persistState: !0
            })
        }
        t.hook("app:manifest:update", () => {
            e.beforeResolve(i)
        }
        ),
        e.onError( (s, o) => {
            r.has(s) && i(o)
        }
        )
    }
})
  , pO = an({
    name: "nuxt:global-components"
})
  , Ii = {
    default: Xy( () => je( () => import("./3FyxhYft.js"), __vite__mapDeps([60, 9, 3, 4, 48, 7, 61]), import.meta.url).then(t => t.default || t))
}
  , gO = an({
    name: "nuxt:prefetch",
    setup(t) {
        const e = $t();
        t.hooks.hook("app:mounted", () => {
            e.beforeEach(async n => {
                var i;
                const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
                r && typeof Ii[r] == "function" && await Ii[r]()
            }
            )
        }
        ),
        t.hooks.hook("link:prefetch", n => {
            if (mi(n))
                return;
            const r = e.resolve(n);
            if (!r)
                return;
            const i = r.meta.layout;
            let s = np(r.meta.middleware);
            s = s.filter(o => typeof o == "string");
            for (const o of s)
                typeof Xa[o] == "function" && Xa[o]();
            i && typeof Ii[i] == "function" && Ii[i]()
        }
        )
    }
});
let D_ = !1;
const N_ = []
  , mO = t => new Promise( (e, n) => {
    if (typeof window > "u" || (window.storyblokRegisterEvent = i => {
        if (window.location === window.parent.location) {
            console.warn("You are not in Draft Mode or in the Visual Editor.");
            return
        }
        D_ ? i() : N_.push(i)
    }
    ,
    document.getElementById("storyblok-javascript-bridge")))
        return;
    const r = document.createElement("script");
    r.async = !0,
    r.src = t,
    r.id = "storyblok-javascript-bridge",
    r.onerror = i => n(i),
    r.onload = i => {
        N_.forEach(s => s()),
        D_ = !0,
        e(i)
    }
    ,
    document.getElementsByTagName("head")[0].appendChild(r)
}
);
var _O = Object.defineProperty
  , yO = (t, e, n) => e in t ? _O(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n
  , Le = (t, e, n) => yO(t, typeof e != "symbol" ? e + "" : e, n);
class vO extends Error {
    constructor(e) {
        super(e),
        this.name = "AbortError"
    }
}
function bO(t, e, n) {
    if (!Number.isFinite(e))
        throw new TypeError("Expected `limit` to be a finite number");
    if (!Number.isFinite(n))
        throw new TypeError("Expected `interval` to be a finite number");
    const r = [];
    let i = []
      , s = 0
      , o = !1;
    const a = async () => {
        s++;
        const u = r.shift();
        if (u)
            try {
                const f = await t(...u.args);
                u.resolve(f)
            } catch (f) {
                u.reject(f)
            }
        const c = setTimeout( () => {
            s--,
            r.length > 0 && a(),
            i = i.filter(f => f !== c)
        }
        , n);
        i.includes(c) || i.push(c)
    }
      , l = (...u) => o ? Promise.reject(new Error("Throttled function is already aborted and not accepting new promises")) : new Promise( (c, f) => {
        r.push({
            resolve: c,
            reject: f,
            args: u
        }),
        s < e && a()
    }
    );
    return l.abort = () => {
        o = !0,
        i.forEach(clearTimeout),
        i = [],
        r.forEach(u => u.reject( () => new vO("Throttle function aborted"))),
        r.length = 0
    }
    ,
    l
}
class bu {
    constructor() {
        Le(this, "isCDNUrl", (e="") => e.includes("/cdn/")),
        Le(this, "getOptionsPage", (e, n=25, r=1) => ({
            ...e,
            per_page: n,
            page: r
        })),
        Le(this, "delay", e => new Promise(n => setTimeout(n, e))),
        Le(this, "arrayFrom", (e=0, n) => Array.from({
            length: e
        }, n)),
        Le(this, "range", (e=0, n=e) => {
            const r = Math.abs(n - e) || 0
              , i = e < n ? 1 : -1;
            return this.arrayFrom(r, (s, o) => o * i + e)
        }
        ),
        Le(this, "asyncMap", async (e, n) => Promise.all(e.map(n))),
        Le(this, "flatMap", (e=[], n) => e.map(n).reduce( (r, i) => [...r, ...i], [])),
        Le(this, "escapeHTML", function(e) {
            const n = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }
              , r = /[&<>"']/g
              , i = new RegExp(r.source);
            return e && i.test(e) ? e.replace(r, s => n[s]) : e
        })
    }
    stringify(e, n, r) {
        const i = [];
        for (const s in e) {
            if (!Object.prototype.hasOwnProperty.call(e, s))
                continue;
            const o = e[s];
            if (o == null)
                continue;
            const a = r ? "" : encodeURIComponent(s);
            let l;
            typeof o == "object" ? l = this.stringify(o, n ? n + encodeURIComponent(`[${a}]`) : a, Array.isArray(o)) : l = `${n ? n + encodeURIComponent(`[${a}]`) : a}=${encodeURIComponent(o)}`,
            i.push(l)
        }
        return i.join("&")
    }
    getRegionURL(e) {
        const n = "api.storyblok.com"
          , r = "api-us.storyblok.com"
          , i = "app.storyblokchina.cn"
          , s = "api-ap.storyblok.com"
          , o = "api-ca.storyblok.com";
        switch (e) {
        case "us":
            return r;
        case "cn":
            return i;
        case "ap":
            return s;
        case "ca":
            return o;
        default:
            return n
        }
    }
}
const wO = function(t, e) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        e.includes(r) && i !== null && (n[r] = i)
    }
    return n
}
  , TO = t => t === "email"
  , xO = () => ({
    singleTag: "hr"
})
  , EO = () => ({
    tag: "blockquote"
})
  , SO = () => ({
    tag: "ul"
})
  , CO = t => ({
    tag: ["pre", {
        tag: "code",
        attrs: t.attrs
    }]
})
  , kO = () => ({
    singleTag: "br"
})
  , RO = t => ({
    tag: `h${t.attrs.level}`
})
  , PO = t => ({
    singleTag: [{
        tag: "img",
        attrs: wO(t.attrs, ["src", "alt", "title"])
    }]
})
  , AO = () => ({
    tag: "li"
})
  , OO = () => ({
    tag: "ol"
})
  , $O = () => ({
    tag: "p"
})
  , LO = t => ({
    tag: [{
        tag: "span",
        attrs: {
            "data-type": "emoji",
            "data-name": t.attrs.name,
            emoji: t.attrs.emoji
        }
    }]
})
  , MO = () => ({
    tag: "b"
})
  , IO = () => ({
    tag: "s"
})
  , DO = () => ({
    tag: "u"
})
  , NO = () => ({
    tag: "strong"
})
  , FO = () => ({
    tag: "code"
})
  , jO = () => ({
    tag: "i"
})
  , BO = t => {
    if (!t.attrs)
        return {
            tag: ""
        };
    const e = new bu().escapeHTML
      , n = {
        ...t.attrs
    }
      , {linktype: r="url"} = t.attrs;
    if (delete n.linktype,
    n.href && (n.href = e(t.attrs.href || "")),
    TO(r) && (n.href = `mailto:${n.href}`),
    n.anchor && (n.href = `${n.href}#${n.anchor}`,
    delete n.anchor),
    n.custom) {
        for (const i in n.custom)
            n[i] = n.custom[i];
        delete n.custom
    }
    return {
        tag: [{
            tag: "a",
            attrs: n
        }]
    }
}
  , HO = t => ({
    tag: [{
        tag: "span",
        attrs: t.attrs
    }]
})
  , UO = () => ({
    tag: "sub"
})
  , VO = () => ({
    tag: "sup"
})
  , zO = t => ({
    tag: [{
        tag: "span",
        attrs: t.attrs
    }]
})
  , WO = t => {
    var e;
    return (e = t.attrs) != null && e.color ? {
        tag: [{
            tag: "span",
            attrs: {
                style: `background-color:${t.attrs.color};`
            }
        }]
    } : {
        tag: ""
    }
}
  , qO = t => {
    var e;
    return (e = t.attrs) != null && e.color ? {
        tag: [{
            tag: "span",
            attrs: {
                style: `color:${t.attrs.color}`
            }
        }]
    } : {
        tag: ""
    }
}
  , YO = {
    nodes: {
        horizontal_rule: xO,
        blockquote: EO,
        bullet_list: SO,
        code_block: CO,
        hard_break: kO,
        heading: RO,
        image: PO,
        list_item: AO,
        ordered_list: OO,
        paragraph: $O,
        emoji: LO
    },
    marks: {
        bold: MO,
        strike: IO,
        underline: DO,
        strong: NO,
        code: FO,
        italic: jO,
        link: BO,
        styled: HO,
        subscript: UO,
        superscript: VO,
        anchor: zO,
        highlight: WO,
        textStyle: qO
    }
}
  , KO = function(t) {
    const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , n = /[&<>"']/g
      , r = new RegExp(n.source);
    return t && r.test(t) ? t.replace(n, i => e[i]) : t
};
let F_ = !1
  , dh = class {
    constructor(e) {
        Le(this, "marks"),
        Le(this, "nodes"),
        e || (e = YO),
        this.marks = e.marks || [],
        this.nodes = e.nodes || []
    }
    addNode(e, n) {
        this.nodes[e] = n
    }
    addMark(e, n) {
        this.marks[e] = n
    }
    render(e, n={
        optimizeImages: !1
    }, r=!0) {
        if (!F_ && r && (console.warn("Warning ⚠️: The RichTextResolver class is deprecated and will be removed in the next major release. Please use the `@storyblok/richtext` package instead. https://github.com/storyblok/richtext/"),
        F_ = !0),
        e && e.content && Array.isArray(e.content)) {
            let i = "";
            return e.content.forEach(s => {
                i += this.renderNode(s)
            }
            ),
            n.optimizeImages ? this.optimizeImages(i, n.optimizeImages) : i
        }
        return console.warn(`The render method must receive an Object with a "content" field.
      The "content" field must be an array of nodes as the type ISbRichtext.
      ISbRichtext:
        content?: ISbRichtext[]
        marks?: ISbRichtext[]
        attrs?: any
        text?: string
        type: string
        
        Example:
        {
          content: [
            {
              content: [
                {
                  text: 'Hello World',
                  type: 'text'
                }
              ],
              type: 'paragraph'
            }
          ],
          type: 'doc'
        }`),
        ""
    }
    optimizeImages(e, n) {
        let r = 0
          , i = 0
          , s = ""
          , o = "";
        typeof n != "boolean" && (typeof n.width == "number" && n.width > 0 && (s += `width="${n.width}" `,
        r = n.width),
        typeof n.height == "number" && n.height > 0 && (s += `height="${n.height}" `,
        i = n.height),
        (n.loading === "lazy" || n.loading === "eager") && (s += `loading="${n.loading}" `),
        typeof n.class == "string" && n.class.length > 0 && (s += `class="${n.class}" `),
        n.filters && (typeof n.filters.blur == "number" && n.filters.blur >= 0 && n.filters.blur <= 100 && (o += `:blur(${n.filters.blur})`),
        typeof n.filters.brightness == "number" && n.filters.brightness >= -100 && n.filters.brightness <= 100 && (o += `:brightness(${n.filters.brightness})`),
        n.filters.fill && (n.filters.fill.match(/[0-9A-F]{6}/gi) || n.filters.fill === "transparent") && (o += `:fill(${n.filters.fill})`),
        n.filters.format && ["webp", "png", "jpeg"].includes(n.filters.format) && (o += `:format(${n.filters.format})`),
        typeof n.filters.grayscale == "boolean" && n.filters.grayscale && (o += ":grayscale()"),
        typeof n.filters.quality == "number" && n.filters.quality >= 0 && n.filters.quality <= 100 && (o += `:quality(${n.filters.quality})`),
        n.filters.rotate && [90, 180, 270].includes(n.filters.rotate) && (o += `:rotate(${n.filters.rotate})`),
        o.length > 0 && (o = `/filters${o}`))),
        s.length > 0 && (e = e.replace(/<img/g, `<img ${s.trim()}`));
        const a = r > 0 || i > 0 || o.length > 0 ? `${r}x${i}${o}` : "";
        return e = e.replace(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|bmp)/g, `a.storyblok.com/f/$1/$2.$3/m/${a}`),
        typeof n != "boolean" && (n.sizes || n.srcset) && (e = e.replace(/<img.*?src=["|'](.*?)["|']/g, l => {
            var u, c;
            const f = l.match(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|bmp)/g);
            if (f && f.length > 0) {
                const d = {
                    srcset: (u = n.srcset) == null ? void 0 : u.map(g => {
                        if (typeof g == "number")
                            return `//${f}/m/${g}x0${o} ${g}w`;
                        if (typeof g == "object" && g.length === 2) {
                            let p = 0
                              , v = 0;
                            return typeof g[0] == "number" && (p = g[0]),
                            typeof g[1] == "number" && (v = g[1]),
                            `//${f}/m/${p}x${v}${o} ${p}w`
                        }
                        return ""
                    }
                    ).join(", "),
                    sizes: (c = n.sizes) == null ? void 0 : c.map(g => g).join(", ")
                };
                let h = "";
                return d.srcset && (h += `srcset="${d.srcset}" `),
                d.sizes && (h += `sizes="${d.sizes}" `),
                l.replace(/<img/g, `<img ${h.trim()}`)
            }
            return l
        }
        )),
        e
    }
    renderNode(e) {
        const n = [];
        e.marks && e.marks.forEach(i => {
            const s = this.getMatchingMark(i);
            s && s.tag !== "" && n.push(this.renderOpeningTag(s.tag))
        }
        );
        const r = this.getMatchingNode(e);
        return r && r.tag && n.push(this.renderOpeningTag(r.tag)),
        e.content ? e.content.forEach(i => {
            n.push(this.renderNode(i))
        }
        ) : e.text ? n.push(KO(e.text)) : r && r.singleTag ? n.push(this.renderTag(r.singleTag, " /")) : r && r.html ? n.push(r.html) : e.type === "emoji" && n.push(this.renderEmoji(e)),
        r && r.tag && n.push(this.renderClosingTag(r.tag)),
        e.marks && e.marks.slice(0).reverse().forEach(i => {
            const s = this.getMatchingMark(i);
            s && s.tag !== "" && n.push(this.renderClosingTag(s.tag))
        }
        ),
        n.join("")
    }
    renderTag(e, n) {
        return e.constructor === String ? `<${e}${n}>` : e.map(r => {
            if (r.constructor === String)
                return `<${r}${n}>`;
            {
                let i = `<${r.tag}`;
                if (r.attrs) {
                    for (const s in r.attrs)
                        if (Object.prototype.hasOwnProperty.call(r.attrs, s)) {
                            const o = r.attrs[s];
                            o !== null && (i += ` ${s}="${o}"`)
                        }
                }
                return `${i}${n}>`
            }
        }
        ).join("")
    }
    renderOpeningTag(e) {
        return this.renderTag(e, "")
    }
    renderClosingTag(e) {
        return e.constructor === String ? `</${e}>` : e.slice(0).reverse().map(n => n.constructor === String ? `</${n}>` : `</${n.tag}>`).join("")
    }
    getMatchingNode(e) {
        const n = this.nodes[e.type];
        if (typeof n == "function")
            return n(e)
    }
    getMatchingMark(e) {
        const n = this.marks[e.type];
        if (typeof n == "function")
            return n(e)
    }
    renderEmoji(e) {
        if (e.attrs.emoji)
            return e.attrs.emoji;
        const n = [{
            tag: "img",
            attrs: {
                src: e.attrs.fallbackImage,
                draggable: "false",
                loading: "lazy",
                align: "absmiddle"
            }
        }];
        return this.renderTag(n, " /")
    }
}
;
class GO {
    constructor(e) {
        Le(this, "baseURL"),
        Le(this, "timeout"),
        Le(this, "headers"),
        Le(this, "responseInterceptor"),
        Le(this, "fetch"),
        Le(this, "ejectInterceptor"),
        Le(this, "url"),
        Le(this, "parameters"),
        Le(this, "fetchOptions"),
        this.baseURL = e.baseURL,
        this.headers = e.headers || new Headers,
        this.timeout = e != null && e.timeout ? e.timeout * 1e3 : 0,
        this.responseInterceptor = e.responseInterceptor,
        this.fetch = (...n) => e.fetch ? e.fetch(...n) : fetch(...n),
        this.ejectInterceptor = !1,
        this.url = "",
        this.parameters = {},
        this.fetchOptions = {}
    }
    get(e, n) {
        return this.url = e,
        this.parameters = n,
        this._methodHandler("get")
    }
    post(e, n) {
        return this.url = e,
        this.parameters = n,
        this._methodHandler("post")
    }
    put(e, n) {
        return this.url = e,
        this.parameters = n,
        this._methodHandler("put")
    }
    delete(e, n) {
        return this.url = e,
        this.parameters = n ?? {},
        this._methodHandler("delete")
    }
    async _responseHandler(e) {
        const n = []
          , r = {
            data: {},
            headers: {},
            status: 0,
            statusText: ""
        };
        e.status !== 204 && await e.json().then(i => {
            r.data = i
        }
        );
        for (const i of e.headers.entries())
            n[i[0]] = i[1];
        return r.headers = {
            ...n
        },
        r.status = e.status,
        r.statusText = e.statusText,
        r
    }
    async _methodHandler(e) {
        let n = `${this.baseURL}${this.url}`
          , r = null;
        if (e === "get") {
            const l = new bu;
            n = `${this.baseURL}${this.url}?${l.stringify(this.parameters)}`
        } else
            r = JSON.stringify(this.parameters);
        const i = new URL(n)
          , s = new AbortController
          , {signal: o} = s;
        let a;
        this.timeout && (a = setTimeout( () => s.abort(), this.timeout));
        try {
            const l = await this.fetch(`${i}`, {
                method: e,
                headers: this.headers,
                body: r,
                signal: o,
                ...this.fetchOptions
            });
            this.timeout && clearTimeout(a);
            const u = await this._responseHandler(l);
            return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(u)) : this._statusHandler(u)
        } catch (l) {
            return {
                message: l
            }
        }
    }
    setFetchOptions(e={}) {
        Object.keys(e).length > 0 && "method"in e && delete e.method,
        this.fetchOptions = {
            ...e
        }
    }
    eject() {
        this.ejectInterceptor = !0
    }
    _statusHandler(e) {
        const n = /20[0-6]/g;
        return new Promise( (r, i) => {
            if (n.test(`${e.status}`))
                return r(e);
            const s = {
                message: e.statusText,
                status: e.status,
                response: Array.isArray(e.data) ? e.data[0] : e.data.error || e.data.slug
            };
            i(s)
        }
        )
    }
}
const j_ = "SB-Agent"
  , Kf = {
    defaultAgentName: "SB-JS-CLIENT",
    defaultAgentVersion: "SB-Agent-Version",
    packageVersion: "6.0.0"
};
let fc = {};
const bi = {};
class XO {
    constructor(e, n) {
        Le(this, "client"),
        Le(this, "maxRetries"),
        Le(this, "retriesDelay"),
        Le(this, "throttle"),
        Le(this, "accessToken"),
        Le(this, "cache"),
        Le(this, "helpers"),
        Le(this, "resolveCounter"),
        Le(this, "relations"),
        Le(this, "links"),
        Le(this, "richTextResolver"),
        Le(this, "resolveNestedRelations"),
        Le(this, "stringifiedStoriesCache");
        let r = e.endpoint || n;
        if (!r) {
            const o = new bu().getRegionURL
              , a = e.https === !1 ? "http" : "https";
            e.oauthToken ? r = `${a}://${o(e.region)}/v1` : r = `${a}://${o(e.region)}/v2`
        }
        const i = new Headers;
        i.set("Content-Type", "application/json"),
        i.set("Accept", "application/json"),
        e.headers && (e.headers.constructor.name === "Headers" ? e.headers.entries().toArray() : Object.entries(e.headers)).forEach( ([o,a]) => {
            i.set(o, a)
        }
        ),
        i.has(j_) || (i.set(j_, Kf.defaultAgentName),
        i.set(Kf.defaultAgentVersion, Kf.packageVersion));
        let s = 5;
        e.oauthToken && (i.set("Authorization", e.oauthToken),
        s = 3),
        e.rateLimit && (s = e.rateLimit),
        e.richTextSchema ? this.richTextResolver = new dh(e.richTextSchema) : this.richTextResolver = new dh,
        e.componentResolver && this.setComponentResolver(e.componentResolver),
        this.maxRetries = e.maxRetries || 10,
        this.retriesDelay = 300,
        this.throttle = bO(this.throttledRequest.bind(this), s, 1e3),
        this.accessToken = e.accessToken || "",
        this.relations = {},
        this.links = {},
        this.cache = e.cache || {
            clear: "manual"
        },
        this.helpers = new bu,
        this.resolveCounter = 0,
        this.resolveNestedRelations = e.resolveNestedRelations || !0,
        this.stringifiedStoriesCache = {},
        this.client = new GO({
            baseURL: r,
            timeout: e.timeout || 0,
            headers: i,
            responseInterceptor: e.responseInterceptor,
            fetch: e.fetch
        })
    }
    setComponentResolver(e) {
        this.richTextResolver.addNode("blok", n => {
            let r = "";
            return n.attrs.body && n.attrs.body.forEach(i => {
                r += e(i.component, i)
            }
            ),
            {
                html: r
            }
        }
        )
    }
    parseParams(e) {
        return e.token || (e.token = this.getToken()),
        e.cv || (e.cv = bi[e.token]),
        Array.isArray(e.resolve_relations) && (e.resolve_relations = e.resolve_relations.join(",")),
        typeof e.resolve_relations < "u" && (e.resolve_level = 2),
        e
    }
    factoryParamOptions(e, n) {
        return this.helpers.isCDNUrl(e) ? this.parseParams(n) : n
    }
    makeRequest(e, n, r, i, s) {
        const o = this.factoryParamOptions(e, this.helpers.getOptionsPage(n, r, i));
        return this.cacheResponse(e, o, void 0, s)
    }
    get(e, n, r) {
        n || (n = {});
        const i = `/${e}`
          , s = this.factoryParamOptions(i, n);
        return this.cacheResponse(i, s, void 0, r)
    }
    async getAll(e, n, r, i) {
        const s = (n == null ? void 0 : n.per_page) || 25
          , o = `/${e}`.replace(/\/$/, "")
          , a = r ?? o.substring(o.lastIndexOf("/") + 1)
          , l = 1
          , u = await this.makeRequest(o, n, s, l, i)
          , c = u.total ? Math.ceil(u.total / s) : 1
          , f = await this.helpers.asyncMap(this.helpers.range(l, c), d => this.makeRequest(o, n, s, d + 1, i));
        return this.helpers.flatMap([u, ...f], d => Object.values(d.data[a]))
    }
    post(e, n, r) {
        const i = `/${e}`;
        return Promise.resolve(this.throttle("post", i, n, r))
    }
    put(e, n, r) {
        const i = `/${e}`;
        return Promise.resolve(this.throttle("put", i, n, r))
    }
    delete(e, n, r) {
        n || (n = {});
        const i = `/${e}`;
        return Promise.resolve(this.throttle("delete", i, n, r))
    }
    getStories(e, n) {
        return this._addResolveLevel(e),
        this.get("cdn/stories", e, n)
    }
    getStory(e, n, r) {
        return this._addResolveLevel(n),
        this.get(`cdn/stories/${e}`, n, r)
    }
    getToken() {
        return this.accessToken
    }
    ejectInterceptor() {
        this.client.eject()
    }
    _addResolveLevel(e) {
        typeof e.resolve_relations < "u" && (e.resolve_level = 2)
    }
    _cleanCopy(e) {
        return JSON.parse(JSON.stringify(e))
    }
    _insertLinks(e, n, r) {
        const i = e[n];
        i && i.fieldtype === "multilink" && i.linktype === "story" && typeof i.id == "string" && this.links[r][i.id] ? i.story = this._cleanCopy(this.links[r][i.id]) : i && i.linktype === "story" && typeof i.uuid == "string" && this.links[r][i.uuid] && (i.story = this._cleanCopy(this.links[r][i.uuid]))
    }
    getStoryReference(e, n) {
        return this.relations[e][n] ? JSON.parse(this.stringifiedStoriesCache[n] || JSON.stringify(this.relations[e][n])) : n
    }
    _resolveField(e, n, r) {
        const i = e[n];
        typeof i == "string" ? e[n] = this.getStoryReference(r, i) : Array.isArray(i) && (e[n] = i.map(s => this.getStoryReference(r, s)).filter(Boolean))
    }
    _insertRelations(e, n, r, i) {
        if (Array.isArray(r) ? r.find(o => o.endsWith(`.${n}`)) : r.endsWith(`.${n}`)) {
            this._resolveField(e, n, i);
            return
        }
        const s = e.component ? `${e.component}.${n}` : n;
        (Array.isArray(r) ? r.includes(s) : r === s) && this._resolveField(e, n, i)
    }
    iterateTree(e, n, r) {
        const i = (s, o="") => {
            if (!(!s || s._stopResolving)) {
                if (Array.isArray(s))
                    s.forEach( (a, l) => i(a, `${o}[${l}]`));
                else if (typeof s == "object")
                    for (const a in s) {
                        const l = o ? `${o}.${a}` : a;
                        (s.component && s._uid || s.type === "link") && (this._insertRelations(s, a, n, r),
                        this._insertLinks(s, a, r)),
                        i(s[a], l)
                    }
            }
        }
        ;
        i(e.content)
    }
    async resolveLinks(e, n, r) {
        let i = [];
        if (e.link_uuids) {
            const s = e.link_uuids.length
              , o = []
              , a = 50;
            for (let l = 0; l < s; l += a) {
                const u = Math.min(s, l + a);
                o.push(e.link_uuids.slice(l, u))
            }
            for (let l = 0; l < o.length; l++)
                (await this.getStories({
                    per_page: a,
                    language: n.language,
                    version: n.version,
                    starts_with: n.starts_with,
                    by_uuids: o[l].join(",")
                })).data.stories.forEach(u => {
                    i.push(u)
                }
                )
        } else
            i = e.links;
        i.forEach(s => {
            this.links[r][s.uuid] = {
                ...s,
                _stopResolving: !0
            }
        }
        )
    }
    async resolveRelations(e, n, r) {
        let i = [];
        if (e.rel_uuids) {
            const s = e.rel_uuids.length
              , o = []
              , a = 50;
            for (let l = 0; l < s; l += a) {
                const u = Math.min(s, l + a);
                o.push(e.rel_uuids.slice(l, u))
            }
            for (let l = 0; l < o.length; l++)
                (await this.getStories({
                    per_page: a,
                    language: n.language,
                    version: n.version,
                    starts_with: n.starts_with,
                    by_uuids: o[l].join(","),
                    excluding_fields: n.excluding_fields
                })).data.stories.forEach(u => {
                    i.push(u)
                }
                )
        } else
            i = e.rels;
        i && i.length > 0 && i.forEach(s => {
            this.relations[r][s.uuid] = {
                ...s,
                _stopResolving: !0
            }
        }
        )
    }
    async resolveStories(e, n, r) {
        var i, s;
        let o = [];
        if (this.links[r] = {},
        this.relations[r] = {},
        typeof n.resolve_relations < "u" && n.resolve_relations.length > 0 && (typeof n.resolve_relations == "string" && (o = n.resolve_relations.split(",")),
        await this.resolveRelations(e, n, r)),
        n.resolve_links && ["1", "story", "url", "link"].includes(n.resolve_links) && ((i = e.links) != null && i.length || (s = e.link_uuids) != null && s.length) && await this.resolveLinks(e, n, r),
        this.resolveNestedRelations)
            for (const a in this.relations[r])
                this.iterateTree(this.relations[r][a], o, r);
        e.story ? this.iterateTree(e.story, o, r) : e.stories.forEach(a => {
            this.iterateTree(a, o, r)
        }
        ),
        this.stringifiedStoriesCache = {},
        delete this.links[r],
        delete this.relations[r]
    }
    async cacheResponse(e, n, r, i) {
        const s = this.helpers.stringify({
            url: e,
            params: n
        })
          , o = this.cacheProvider();
        if (n.version === "published" && e !== "/cdn/spaces/me") {
            const a = await o.get(s);
            if (a)
                return Promise.resolve(a)
        }
        return new Promise(async (a, l) => {
            var u;
            try {
                const c = await this.throttle("get", e, n, i);
                if (c.status !== 200)
                    return l(c);
                let f = {
                    data: c.data,
                    headers: c.headers
                };
                if ((u = c.headers) != null && u["per-page"] && (f = Object.assign({}, f, {
                    perPage: c.headers["per-page"] ? Number.parseInt(c.headers["per-page"]) : 0,
                    total: c.headers["per-page"] ? Number.parseInt(c.headers.total) : 0
                })),
                f.data.story || f.data.stories) {
                    const h = this.resolveCounter = ++this.resolveCounter % 1e3;
                    await this.resolveStories(f.data, n, `${h}`)
                }
                n.version === "published" && e !== "/cdn/spaces/me" && await o.set(s, f);
                const d = this.cache.clear === "onpreview" && n.version === "draft" || this.cache.clear === "auto";
                return n.token && f.data.cv && (d && bi[n.token] && bi[n.token] !== f.data.cv && await this.flushCache(),
                bi[n.token] = f.data.cv),
                a(f)
            } catch (c) {
                if (c.response && c.status === 429 && (r = typeof r > "u" ? 0 : r + 1,
                r < this.maxRetries))
                    return console.log(`Hit rate limit. Retrying in ${this.retriesDelay / 1e3} seconds.`),
                    await this.helpers.delay(this.retriesDelay),
                    this.cacheResponse(e, n, r).then(a).catch(l);
                l(c)
            }
        }
        )
    }
    throttledRequest(e, n, r, i) {
        return this.client.setFetchOptions(i),
        this.client[e](n, r)
    }
    cacheVersions() {
        return bi
    }
    cacheVersion() {
        return bi[this.accessToken]
    }
    setCacheVersion(e) {
        this.accessToken && (bi[this.accessToken] = e)
    }
    clearCacheVersion() {
        this.accessToken && (bi[this.accessToken] = 0)
    }
    cacheProvider() {
        switch (this.cache.type) {
        case "memory":
            return {
                get(e) {
                    return Promise.resolve(fc[e])
                },
                getAll() {
                    return Promise.resolve(fc)
                },
                set(e, n) {
                    return fc[e] = n,
                    Promise.resolve(void 0)
                },
                flush() {
                    return fc = {},
                    Promise.resolve(void 0)
                }
            };
        case "custom":
            if (this.cache.custom)
                return this.cache.custom;
        default:
            return {
                get() {
                    return Promise.resolve()
                },
                getAll() {
                    return Promise.resolve(void 0)
                },
                set() {
                    return Promise.resolve(void 0)
                },
                flush() {
                    return Promise.resolve(void 0)
                }
            }
        }
    }
    async flushCache() {
        return await this.cacheProvider().flush(),
        this.clearCacheVersion(),
        this
    }
}
const JO = (t={}) => {
    const {apiOptions: e} = t;
    if (!e || !e.accessToken) {
        console.error("You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication");
        return
    }
    return {
        storyblokApi: new XO(e)
    }
}
  , QO = t => {
    if (typeof t != "object" || typeof t._editable > "u")
        return {};
    try {
        const e = JSON.parse(t._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
        return e ? {
            "data-blok-c": JSON.stringify(e),
            "data-blok-uid": `${e.id}-${e.uid}`
        } : {}
    } catch {
        return {}
    }
}
;
function ZO(t, e) {
    if (!e)
        return {
            src: t,
            attrs: {}
        };
    let n = 0
      , r = 0;
    const i = {}
      , s = [];
    function o(l, u, c, f, d) {
        typeof l != "number" || l <= u || l >= c ? console.warn(`[StoryblokRichText] - ${f.charAt(0).toUpperCase() + f.slice(1)} value must be a number between ${u} and ${c} (inclusive)`) : d.push(`${f}(${l})`)
    }
    if (typeof e == "object") {
        if (typeof e.width == "number" && e.width > 0 ? (i.width = e.width,
        n = e.width) : console.warn("[StoryblokRichText] - Width value must be a number greater than 0"),
        e.height && typeof e.height == "number" && e.height > 0 ? (i.height = e.height,
        r = e.height) : console.warn("[StoryblokRichText] - Height value must be a number greater than 0"),
        e.loading && ["lazy", "eager"].includes(e.loading) && (i.loading = e.loading),
        e.class && (i.class = e.class),
        e.filters) {
            const {filters: l} = e || {}
              , {blur: u, brightness: c, fill: f, format: d, grayscale: h, quality: g, rotate: p} = l || {};
            u && o(u, 0, 100, "blur", s),
            g && o(g, 0, 100, "quality", s),
            c && o(c, 0, 100, "brightness", s),
            f && s.push(`fill(${f})`),
            h && s.push("grayscale()"),
            p && [0, 90, 180, 270].includes(e.filters.rotate || 0) && s.push(`rotate(${p})`),
            d && ["webp", "png", "jpeg"].includes(d) && s.push(`format(${d})`)
        }
        e.srcset && (i.srcset = e.srcset.map(l => {
            if (typeof l == "number")
                return `${t}/m/${l}x0/${s.length > 0 ? `filters:${s.join(":")}` : ""} ${l}w`;
            if (Array.isArray(l) && l.length === 2) {
                const [u,c] = l;
                return `${t}/m/${u}x${c}/${s.length > 0 ? `filters:${s.join(":")}` : ""} ${u}w`
            } else {
                console.warn("[StoryblokRichText] - srcset entry must be a number or a tuple of two numbers");
                return
            }
        }
        ).join(", ")),
        e.sizes && (i.sizes = e.sizes.join(", "))
    }
    let a = `${t}/m/`;
    return n > 0 && r > 0 && (a = `${a}${n}x${r}/`),
    s.length > 0 && (a = `${a}filters:${s.join(":")}`),
    {
        src: a,
        attrs: i
    }
}
var Tt = (t => (t.DOCUMENT = "doc",
t.HEADING = "heading",
t.PARAGRAPH = "paragraph",
t.QUOTE = "blockquote",
t.OL_LIST = "ordered_list",
t.UL_LIST = "bullet_list",
t.LIST_ITEM = "list_item",
t.CODE_BLOCK = "code_block",
t.HR = "horizontal_rule",
t.BR = "hard_break",
t.IMAGE = "image",
t.EMOJI = "emoji",
t.COMPONENT = "blok",
t.TABLE = "table",
t.TABLE_ROW = "tableRow",
t.TABLE_CELL = "tableCell",
t.TABLE_HEADER = "tableHeader",
t))(Tt || {})
  , On = (t => (t.BOLD = "bold",
t.STRONG = "strong",
t.STRIKE = "strike",
t.UNDERLINE = "underline",
t.ITALIC = "italic",
t.CODE = "code",
t.LINK = "link",
t.ANCHOR = "anchor",
t.STYLED = "styled",
t.SUPERSCRIPT = "superscript",
t.SUBSCRIPT = "subscript",
t.TEXT_STYLE = "textStyle",
t.HIGHLIGHT = "highlight",
t))(On || {})
  , Iw = (t => (t.TEXT = "text",
t))(Iw || {})
  , xa = (t => (t.URL = "url",
t.STORY = "story",
t.ASSET = "asset",
t.EMAIL = "email",
t))(xa || {});
const e$ = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]
  , t$ = (t={}) => Object.keys(t).map(e => `${e}="${t[e]}"`).join(" ")
  , n$ = (t={}) => Object.keys(t).map(e => `${e}: ${t[e]}`).join("; ");
function r$(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}
const dc = t => Object.fromEntries(Object.entries(t).filter( ([e,n]) => n !== void 0));
function B_(t, e={}, n) {
    const r = t$(e)
      , i = r ? `${t} ${r}` : t
      , s = Array.isArray(n) ? n.join("") : n || "";
    if (t) {
        if (e$.includes(t))
            return `<${i}>`
    } else
        return s;
    return `<${i}>${s}</${t}>`
}
function i$(t={}) {
    const e = new Map
      , {renderFn: n=B_, textFn: r=r$, resolvers: i={}, optimizeImages: s=!1, keyedResolvers: o=!1} = t
      , a = n !== B_
      , l = () => ({
        render: (x, M={}, R) => {
            if (o && x) {
                const P = e.get(x) || 0;
                e.set(x, P + 1),
                M.key = `${x}-${P}`
            }
            return n(x, M, R)
        }
    })
      , u = x => (M, R) => {
        const P = M.attrs || {};
        return R.render(x, P, M.children || null)
    }
      , c = (x, M) => {
        const {src: R, alt: P, title: O, srcset: I, sizes: N} = x.attrs || {};
        let F = R
          , H = {};
        if (s) {
            const {src: $, attrs: ne} = ZO(R, s);
            F = $,
            H = ne
        }
        const G = {
            src: F,
            alt: P,
            title: O,
            srcset: I,
            sizes: N,
            ...H
        };
        return M.render("img", dc(G))
    }
      , f = (x, M) => {
        const {level: R, ...P} = x.attrs || {};
        return M.render(`h${R}`, P, x.children)
    }
      , d = (x, M) => {
        var R, P, O, I;
        const N = M.render("img", {
            src: (R = x.attrs) == null ? void 0 : R.fallbackImage,
            alt: (P = x.attrs) == null ? void 0 : P.alt,
            style: "width: 1.25em; height: 1.25em; vertical-align: text-top",
            draggable: "false",
            loading: "lazy"
        });
        return M.render("span", {
            "data-type": "emoji",
            "data-name": (O = x.attrs) == null ? void 0 : O.name,
            "data-emoji": (I = x.attrs) == null ? void 0 : I.emoji
        }, N)
    }
      , h = (x, M) => M.render("pre", x.attrs || {}, M.render("code", {}, x.children || ""))
      , g = (x, M=!1) => ({text: R, attrs: P}, O) => {
        const {class: I, id: N, ...F} = P || {}
          , H = M ? {
            class: I,
            id: N,
            style: n$(F) || void 0
        } : P || {};
        return O.render(x, dc(H), R)
    }
      , p = x => A(x)
      , v = x => {
        const {marks: M, ...R} = x;
        if ("text"in x) {
            if (M)
                return M.reduce( (O, I) => p({
                    ...I,
                    text: O
                }), p({
                    ...R,
                    children: R.children
                }));
            const P = x.attrs || {};
            if (o) {
                const O = e.get("txt") || 0;
                e.set("txt", O + 1),
                P.key = `txt-${O}`
            }
            return r(R.text, P)
        }
        return ""
    }
      , y = (x, M) => {
        const {linktype: R, href: P, anchor: O, ...I} = x.attrs || {};
        let N = "";
        switch (R) {
        case xa.ASSET:
        case xa.URL:
            N = P;
            break;
        case xa.EMAIL:
            N = `mailto:${P}`;
            break;
        case xa.STORY:
            N = P,
            O && (N = `${N}#${O}`);
            break;
        default:
            N = P;
            break
        }
        const F = {
            ...I
        };
        return N && (F.href = N),
        M.render("a", F, x.text)
    }
      , b = (x, M) => {
        var R, P;
        return console.warn("[StoryblokRichtText] - BLOK resolver is not available for vanilla usage"),
        M.render("span", {
            blok: (R = x == null ? void 0 : x.attrs) == null ? void 0 : R.body[0],
            id: (P = x.attrs) == null ? void 0 : P.id,
            style: "display: none"
        })
    }
      , m = (x, M) => {
        const R = {}
          , P = M.render("tbody", {}, x.children);
        return M.render("table", R, P)
    }
      , _ = (x, M) => {
        const R = {};
        return M.render("tr", R, x.children)
    }
      , w = (x, M) => {
        const {colspan: R, rowspan: P, colwidth: O, backgroundColor: I, ...N} = x.attrs || {}
          , F = {
            ...N
        };
        R > 1 && (F.colspan = R),
        P > 1 && (F.rowspan = P);
        const H = [];
        return O && H.push(`width: ${O}px;`),
        I && H.push(`background-color: ${I};`),
        H.length > 0 && (F.style = H.join(" ")),
        M.render("td", dc(F), x.children)
    }
      , E = (x, M) => {
        const {colspan: R, rowspan: P, colwidth: O, backgroundColor: I, ...N} = x.attrs || {}
          , F = {
            ...N
        };
        R > 1 && (F.colspan = R),
        P > 1 && (F.rowspan = P);
        const H = [];
        return O && H.push(`width: ${O}px;`),
        I && H.push(`background-color: ${I};`),
        H.length > 0 && (F.style = H.join(" ")),
        M.render("th", dc(F), x.children)
    }
      , S = new Map([[Tt.DOCUMENT, u("")], [Tt.HEADING, f], [Tt.PARAGRAPH, u("p")], [Tt.UL_LIST, u("ul")], [Tt.OL_LIST, u("ol")], [Tt.LIST_ITEM, u("li")], [Tt.IMAGE, c], [Tt.EMOJI, d], [Tt.CODE_BLOCK, h], [Tt.HR, u("hr")], [Tt.BR, u("br")], [Tt.QUOTE, u("blockquote")], [Tt.COMPONENT, b], [Iw.TEXT, v], [On.LINK, y], [On.ANCHOR, y], [On.STYLED, g("span", !0)], [On.BOLD, g("strong")], [On.TEXT_STYLE, g("span", !0)], [On.ITALIC, g("em")], [On.UNDERLINE, g("u")], [On.STRIKE, g("s")], [On.CODE, g("code")], [On.SUPERSCRIPT, g("sup")], [On.SUBSCRIPT, g("sub")], [On.HIGHLIGHT, g("mark")], [Tt.TABLE, m], [Tt.TABLE_ROW, _], [Tt.TABLE_CELL, w], [Tt.TABLE_HEADER, E], ...Object.entries(i).map( ([x,M]) => [x, M])]);
    function L(x) {
        const M = S.get(x.type);
        if (!M)
            return console.error("<Storyblok>", `No resolver found for node type ${x.type}`),
            "";
        const R = l();
        if (x.type === "text")
            return M(x, R);
        const P = x.content ? x.content.map(A) : void 0;
        return M({
            ...x,
            children: P
        }, R)
    }
    function A(x) {
        return x.type === "doc" ? a ? x.content.map(L) : x.content.map(L).join("") : Array.isArray(x) ? x.map(L) : L(x)
    }
    return {
        render: A
    }
}
let hh, H_ = "https://app.storyblok.com/f/storyblok-v2-latest.js";
const Dw = (t, e, n={}) => {
    var r;
    const i = !(typeof window > "u") && typeof window.storyblokRegisterEvent < "u"
      , s = new URL((r = window.location) == null ? void 0 : r.href).searchParams.get("_storyblok")
      , o = s !== null && +s === t;
    if (!(!i || !o)) {
        if (!t) {
            console.warn("Story ID is not defined. Please provide a valid ID.");
            return
        }
        window.storyblokRegisterEvent( () => {
            new window.StoryblokBridge(n).on(["input", "published", "change"], a => {
                var l;
                a && (a.action === "input" && ((l = a.story) == null ? void 0 : l.id) === t ? e(a.story) : (a.action === "change" || a.action === "published") && a.storyId === t && window.location.reload())
            }
            )
        }
        )
    }
}
  , s$ = (t, e) => {
    t.addNode("blok", n => {
        let r = "";
        return n.attrs.body.forEach(i => {
            r += e(i.component, i)
        }
        ),
        {
            html: r
        }
    }
    )
}
  , o$ = (t={}) => {
    var e, n;
    const {bridge: r, accessToken: i, use: s=[], apiOptions: o={}, richText: a={}, bridgeUrl: l} = t;
    o.accessToken = o.accessToken || i;
    const u = {
        bridge: r,
        apiOptions: o
    };
    let c = {};
    s.forEach(d => {
        c = {
            ...c,
            ...d(u)
        }
    }
    ),
    l && (H_ = l);
    const f = !(typeof window > "u") && ((n = (e = window.location) == null ? void 0 : e.search) == null ? void 0 : n.includes("_storyblok_tk"));
    return r !== !1 && f && mO(H_),
    hh = new dh(a.schema),
    a.resolver && s$(hh, a.resolver),
    c
}
  , a$ = t => {
    var e;
    return !t || !((e = t == null ? void 0 : t.content) != null && e.some(n => n.content || n.type === "blok" || n.type === "horizontal_rule"))
}
  , OI = (t, e, n) => {
    let r = hh;
    if (!r) {
        console.error("Please initialize the Storyblok SDK before calling the renderRichText function");
        return
    }
    return a$(t) ? "" : r.render(t, {}, !1)
}
  , Nw = ke({
    __name: "StoryblokComponent",
    props: {
        blok: {}
    },
    setup(t, {expose: e}) {
        const n = t
          , r = De();
        e({
            value: r
        });
        const i = typeof ws(n.blok.component) != "string"
          , s = ut("VueSDKOptions")
          , o = De(n.blok.component);
        return !i && s && (s.enableFallbackComponent ? (o.value = s.customFallbackComponent ?? "FallbackComponent",
        typeof ws(o.value) == "string" && console.error(`Is the Fallback component "${o.value}" registered properly?`)) : console.error(`Component could not be found for blok "${n.blok.component}"! Is it defined in main.ts as "app.component("${n.blok.component}", ${n.blok.component});"?`)),
        (a, l) => (ge(),
        Fe(ws(o.value), El({
            ref_key: "blokRef",
            ref: r
        }, {
            ...a.$props,
            ...a.$attrs
        }), null, 16))
    }
})
  , l$ = t => {
    var e, n;
    return tt(Nw, {
        blok: (e = t == null ? void 0 : t.attrs) == null ? void 0 : e.body[0],
        id: (n = t.attrs) == null ? void 0 : n.id
    }, t.children)
}
;
function c$(t) {
    const e = {
        renderFn: tt,
        textFn: Yo,
        keyedResolvers: !0,
        resolvers: {
            [Tt.COMPONENT]: l$,
            ...t.resolvers
        }
    };
    return i$(e)
}
const u$ = ke({
    __name: "StoryblokRichText",
    props: {
        doc: {},
        resolvers: {}
    },
    setup(t) {
        const e = t
          , n = De()
          , r = () => n.value;
        return zt([ () => e.doc, () => e.resolvers], ([i,s]) => {
            const {render: o} = c$({
                resolvers: s ?? {}
            });
            n.value = o(i)
        }
        , {
            immediate: !0,
            deep: !0
        }),
        (i, s) => (ge(),
        Fe(r))
    }
})
  , f$ = {
    beforeMount(t, e) {
        if (e.value) {
            const n = QO(e.value);
            Object.keys(n).length > 0 && (t.setAttribute("data-blok-c", n["data-blok-c"]),
            t.setAttribute("data-blok-uid", n["data-blok-uid"]),
            t.classList.add("storyblok__outline"))
        }
    }
}
  , d$ = t => {
    console.error(`You can't use ${t} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `)
}
;
let ph = null;
const h$ = () => (ph || d$("useStoryblokApi"),
ph)
  , p$ = {
    install(t, e={}) {
        t.directive("editable", f$),
        t.component("StoryblokComponent", Nw),
        t.component("StoryblokRichText", u$),
        e.enableFallbackComponent && !e.customFallbackComponent && t.component("FallbackComponent", Xy( () => je( () => import("./DI5CiS_a.js"), [], import.meta.url)));
        const {storyblokApi: n} = o$(e);
        ph = n || null,
        t.provide("VueSDKOptions", e)
    }
}
  , g$ = Symbol.for("nuxt:client-only")
  , hc = "<div></div>"
  , Fw = ke({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(t, {slots: e, attrs: n}) {
        const r = De(!1);
        Ur( () => {
            r.value = !0
        }
        );
        const i = rr();
        return i && (i._nuxtClientOnly = !0),
        Zn(g$, !0),
        s => {
            var u;
            if (r.value)
                return (u = e.default) == null ? void 0 : u.call(e);
            const o = e.fallback || e.placeholder;
            if (o)
                return o();
            const a = s.fallback || s.placeholder || ""
              , l = s.fallbackTag || s.placeholderTag || "span";
            return Ut(l, n, a)
        }
    }
})
  , Gf = new WeakMap;
function $I(t) {
    if (Gf.has(t))
        return Gf.get(t);
    const e = {
        ...t
    };
    return e.render ? e.render = (n, r, i, s, o, a) => {
        var l;
        if (s.mounted$ ?? n.mounted$) {
            const u = (l = t.render) == null ? void 0 : l.bind(n)(n, r, i, s, o, a);
            return u.children === null || typeof u.children == "string" ? yr(u) : tt(u)
        }
        return qf(n._.vnode.el, hc)
    }
    : e.template && (e.template = `
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${hc}</template>
    `),
    e.setup = (n, r) => {
        var l;
        const i = Ye()
          , s = De(i.isHydrating === !1)
          , o = rr();
        if (i.isHydrating) {
            const u = {
                ...o.attrs
            }
              , c = m$(o);
            for (const f in u)
                delete o.attrs[f];
            Ur( () => {
                Object.assign(o.attrs, u),
                o.vnode.dirs = c
            }
            )
        }
        Ur( () => {
            s.value = !0
        }
        );
        const a = ((l = t.setup) == null ? void 0 : l.call(t, n, r)) || {};
        return Su(a) ? Promise.resolve(a).then(u => typeof u != "function" ? (u || (u = {}),
        u.mounted$ = s,
        u) : (...c) => {
            if (s.value || !i.isHydrating) {
                const f = u(...c);
                return f.children === null || typeof f.children == "string" ? yr(f) : tt(f)
            }
            return qf(o == null ? void 0 : o.vnode.el, hc)
        }
        ) : typeof a == "function" ? (...u) => s.value ? tt(a(...u), r.attrs) : qf(o == null ? void 0 : o.vnode.el, hc) : Object.assign(a, {
            mounted$: s
        })
    }
    ,
    Gf.set(t, e),
    e
}
function m$(t) {
    if (!t || !t.vnode.dirs)
        return null;
    const e = t.vnode.dirs;
    return t.vnode.dirs = null,
    e
}
async function jw(t, e=$t()) {
    const {path: n, matched: r} = e.resolve(t);
    if (!r.length || (e._routePreloaded || (e._routePreloaded = new Set),
    e._routePreloaded.has(n)))
        return;
    const i = e._preloadPromises || (e._preloadPromises = []);
    if (i.length > 4)
        return Promise.all(i).then( () => jw(t, e));
    e._routePreloaded.add(n);
    const s = r.map(o => {
        var a;
        return (a = o.components) == null ? void 0 : a.default
    }
    ).filter(o => typeof o == "function");
    for (const o of s) {
        const a = Promise.resolve(o()).catch( () => {}
        ).finally( () => i.splice(i.indexOf(a)));
        i.push(a)
    }
    await Promise.all(i)
}
function _$(t) {
    return new URL(window.location.href)
}
const y$ = (...t) => t.find(e => e !== void 0);
function v$(t) {
    const e = t.componentName || "NuxtLink";
    function n(s) {
        return typeof s == "string" && s.startsWith("#")
    }
    function r(s, o, a) {
        const l = a ?? t.trailingSlash;
        if (!s || l !== "append" && l !== "remove")
            return s;
        if (typeof s == "string")
            return pc(s, l);
        const u = "path"in s && s.path !== void 0 ? s.path : o(s).path;
        return {
            ...s,
            name: void 0,
            path: pc(u, l)
        }
    }
    function i(s) {
        const o = $t()
          , a = bn()
          , l = Ie( () => !!s.target && s.target !== "_self")
          , u = Ie( () => {
            const v = s.to || s.href || "";
            return typeof v == "string" && mi(v, {
                acceptRelative: !0
            })
        }
        )
          , c = cg("RouterLink")
          , f = typeof c != "string" ? c.useLink : void 0
          , d = Ie( () => {
            if (s.external)
                return !0;
            const v = s.to || s.href || "";
            return typeof v == "object" ? !1 : v === "" || u.value
        }
        )
          , h = Ie( () => {
            const v = s.to || s.href || "";
            return d.value ? v : r(v, o.resolve, s.trailingSlash)
        }
        )
          , g = d.value || f == null ? void 0 : f({
            ...s,
            to: h
        })
          , p = Ie( () => {
            var y;
            const v = s.trailingSlash ?? t.trailingSlash;
            if (!h.value || u.value || n(h.value))
                return h.value;
            if (d.value) {
                const b = typeof h.value == "object" && "path"in h.value ? xd(h.value) : h.value
                  , m = typeof b == "object" ? o.resolve(b).href : b;
                return pc(m, v)
            }
            return typeof h.value == "object" ? ((y = o.resolve(h.value)) == null ? void 0 : y.href) ?? null : pc(Pi(a.app.baseURL, h.value), v)
        }
        );
        return {
            to: h,
            hasTarget: l,
            isAbsoluteUrl: u,
            isExternal: d,
            href: p,
            isActive: (g == null ? void 0 : g.isActive) ?? Ie( () => h.value === o.currentRoute.value.path),
            isExactActive: (g == null ? void 0 : g.isExactActive) ?? Ie( () => h.value === o.currentRoute.value.path),
            route: (g == null ? void 0 : g.route) ?? Ie( () => o.resolve(h.value)),
            async navigate(v) {
                await Kh(p.value, {
                    replace: s.replace,
                    external: d.value || l.value
                })
            }
        }
    }
    return ke({
        name: e,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetchOn: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            trailingSlash: {
                type: String,
                default: void 0,
                required: !1
            }
        },
        useLink: i,
        setup(s, {slots: o}) {
            const a = $t()
              , {to: l, href: u, navigate: c, isExternal: f, hasTarget: d, isAbsoluteUrl: h} = i(s)
              , g = De(!1)
              , p = De(null)
              , v = m => {
                var _;
                p.value = s.custom ? (_ = m == null ? void 0 : m.$el) == null ? void 0 : _.nextElementSibling : m == null ? void 0 : m.$el
            }
            ;
            function y(m) {
                var _, w;
                return !g.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === m : ((_ = s.prefetchOn) == null ? void 0 : _[m]) ?? ((w = t.prefetchOn) == null ? void 0 : w[m])) && (s.prefetch ?? t.prefetch) !== !1 && s.noPrefetch !== !0 && s.target !== "_blank" && !x$()
            }
            async function b(m=Ye()) {
                if (g.value)
                    return;
                g.value = !0;
                const _ = typeof l.value == "string" ? l.value : f.value ? xd(l.value) : a.resolve(l.value).fullPath
                  , w = f.value ? new URL(_,window.location.href).href : _;
                await Promise.all([m.hooks.callHook("link:prefetch", w).catch( () => {}
                ), !f.value && !d.value && jw(l.value, a).catch( () => {}
                )])
            }
            if (y("visibility")) {
                const m = Ye();
                let _, w = null;
                Ur( () => {
                    const E = w$();
                    Qu( () => {
                        _ = fh( () => {
                            var S;
                            (S = p == null ? void 0 : p.value) != null && S.tagName && (w = E.observe(p.value, async () => {
                                w == null || w(),
                                w = null,
                                await b(m)
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                qo( () => {
                    _ && lO(_),
                    w == null || w(),
                    w = null
                }
                )
            }
            return () => {
                var w;
                if (!f.value && !d.value && !n(l.value)) {
                    const E = {
                        ref: v,
                        to: l.value,
                        activeClass: s.activeClass || t.activeClass,
                        exactActiveClass: s.exactActiveClass || t.exactActiveClass,
                        replace: s.replace,
                        ariaCurrentValue: s.ariaCurrentValue,
                        custom: s.custom
                    };
                    return s.custom || (y("interaction") && (E.onPointerenter = b.bind(null, void 0),
                    E.onFocus = b.bind(null, void 0)),
                    g.value && (E.class = s.prefetchedClass || t.prefetchedClass),
                    E.rel = s.rel || void 0),
                    tt(cg("RouterLink"), E, o.default)
                }
                const m = s.target || null
                  , _ = y$(s.noRel ? "" : s.rel, t.externalRelAttribute, h.value || d.value ? "noopener noreferrer" : "") || null;
                return s.custom ? o.default ? o.default({
                    href: u.value,
                    navigate: c,
                    prefetch: b,
                    get route() {
                        if (!u.value)
                            return;
                        const E = new URL(u.value,window.location.href);
                        return {
                            path: E.pathname,
                            fullPath: E.pathname,
                            get query() {
                                return Vh(E.search)
                            },
                            hash: E.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: u.value
                        }
                    },
                    rel: _,
                    target: m,
                    isExternal: f.value || d.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : tt("a", {
                    ref: p,
                    href: u.value || null,
                    rel: _,
                    target: m
                }, (w = o.default) == null ? void 0 : w.call(o))
            }
        }
    })
}
const b$ = v$(dS);
function pc(t, e) {
    const n = e === "append" ? Vv : $o;
    return mi(t) && !t.startsWith("http") ? t : n(t, !0)
}
function w$() {
    const t = Ye();
    if (t._observer)
        return t._observer;
    let e = null;
    const n = new Map
      , r = (s, o) => (e || (e = new IntersectionObserver(a => {
        for (const l of a) {
            const u = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && u && u()
        }
    }
    )),
    n.set(s, o),
    e.observe(s),
    () => {
        n.delete(s),
        e == null || e.unobserve(s),
        n.size === 0 && (e == null || e.disconnect(),
        e = null)
    }
    );
    return t._observer = {
        observe: r
    }
}
const T$ = /2g/;
function x$() {
    const t = navigator.connection;
    return !!(t && (t.saveData || T$.test(t.effectiveType)))
}
const E$ = an( ({vueApp: t}) => {
    let {storyblok: e} = bn().public;
    e = JSON.parse(JSON.stringify(e)),
    t.use(p$, {
        ...e,
        use: [JO]
    })
}
);
var U_ = /^GTM-[0-9A-Z]+$/;
function Xf(t) {
    if (typeof t != "string" || !U_.test(t)) {
        let e = String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g, "")
          , n = e.length === 0 ? "" : ` Did you mean 'GTM-${e}'?`;
        throw new Error(`'${t}' is not a valid GTM-ID (${U_}).${n}`)
    }
}
function Ea(t, e="dataLayer") {
    return t[e] || (t[e] = []),
    t[e]
}
function So(t, e) {
    let n = document
      , r = n.createElement("script")
      , i = u => {
        var c;
        (c = e.onReady) == null || c.call(e, {
            id: t,
            script: r
        }),
        r.removeEventListener("load", i)
    }
    ;
    r.addEventListener("load", i);
    let s = e.dataLayerName ?? "dataLayer";
    if (Ea(window, s).push({
        event: "gtm.js",
        "gtm.start": new Date().getTime()
    }),
    !t)
        return r;
    r.async = !e.defer,
    r.defer = !!(e.defer || e.compatibility),
    e.nonce && r.setAttribute("nonce", e.nonce),
    e.scriptType && (r.type = e.scriptType);
    let o = new URLSearchParams({
        id: t,
        ...e.dataLayerName ? {
            l: e.dataLayerName
        } : {},
        ...e.queryParams ?? {}
    })
      , a = e.source ?? "https://www.googletagmanager.com/gtm.js";
    r.src = `${a}?${o}`;
    let l = e.parentElement ?? n.body;
    if (typeof (l == null ? void 0 : l.appendChild) != "function")
        throw new Error("parentElement must be a DOM element");
    return l.appendChild(r),
    r
}
function S$(t="https://www.googletagmanager.com/gtm.js") {
    return Array.from(document.getElementsByTagName("script")).some(e => e.src.includes(t))
}
var C$ = class {
    constructor(t) {
        Gt(this, "id");
        Gt(this, "options");
        Gt(this, "scriptElements", []);
        Gt(this, "isInBrowserContext", () => typeof window < "u");
        if (Array.isArray(t.id))
            for (let e of t.id)
                Xf(typeof e == "string" ? e : e.id);
        else
            Xf(t.id);
        this.id = t.id,
        this.options = {
            enabled: !0,
            debug: !1,
            loadScript: !0,
            defer: !1,
            compatibility: !1,
            dataLayerName: "dataLayer",
            ...t
        },
        delete this.options.id
    }
    enabled() {
        return this.options.enabled ?? !0
    }
    enable(t=!0, e) {
        if (this.options.enabled = t,
        this.isInBrowserContext() && t && !S$(e) && this.options.loadScript)
            if (Array.isArray(this.id))
                this.id.forEach(n => {
                    let r;
                    typeof n == "string" ? r = So(n, {
                        ...this.options
                    }) : r = So(n.id, {
                        ...this.options,
                        queryParams: n.queryParams
                    }),
                    this.scriptElements.push(r)
                }
                );
            else {
                let n = So(this.id, {
                    ...this.options
                });
                this.scriptElements.push(n)
            }
    }
    debugEnabled() {
        return this.options.debug ?? !1
    }
    debug(t) {
        this.options.debug = t
    }
    dataLayer() {
        return this.isInBrowserContext() && this.options.enabled ? Ea(window, this.options.dataLayerName) : !1
    }
    trackView(t, e, n={}) {
        let r = this.isInBrowserContext() && (this.options.enabled ?? !1);
        this.options.debug && console.log(`[GTM-Support${r ? "" : "(disabled)"}]: Dispatching TrackView`, {
            screenName: t,
            path: e
        }),
        r && Ea(window, this.options.dataLayerName).push({
            ...n,
            event: this.options.trackViewEventProperty ?? "content-view",
            "content-name": e,
            "content-view-name": t
        })
    }
    trackEvent({event: t, category: e=null, action: n=null, label: r=null, value: i=null, noninteraction: s=!1, ...o}={}) {
        let a = this.isInBrowserContext() && (this.options.enabled ?? !1);
        this.options.debug && console.log(`[GTM-Support${a ? "" : "(disabled)"}]: Dispatching event`, {
            event: t,
            category: e,
            action: n,
            label: r,
            value: i,
            ...o
        }),
        a && Ea(window, this.options.dataLayerName).push({
            event: t ?? "interaction",
            target: e,
            action: n,
            "target-properties": r,
            value: i,
            "interaction-type": s,
            ...o
        })
    }
    push(t) {
        let e = this.isInBrowserContext() && (this.options.enabled ?? !1);
        this.options.debug && console.log(`[GTM-Support${e ? "" : "(disabled)"}]: Dispatching event`, t),
        e && Ea(window, this.options.dataLayerName).push(t)
    }
}
, Bt;
function k$(t, e={
    id: ""
}) {
    e = {
        trackOnNextTick: !1,
        ...e
    },
    Bt = new C$(e),
    t.config.globalProperties.$gtm = Bt,
    Bt.isInBrowserContext() && (e.vueRouter && R$(t, e.vueRouter, e.ignoredViews, e.trackOnNextTick, e.vueRouterAdditionalEventData),
    Bt.options.enabled && Bt.options.loadScript && (Array.isArray(e.id) ? e.id.forEach(n => {
        if (typeof n == "string")
            So(n, e);
        else {
            let r = {
                ...e
            };
            n.queryParams != null && (r.queryParams = {
                ...r.queryParams,
                ...n.queryParams
            }),
            So(n.id, r)
        }
    }
    ) : So(e.id, e))),
    t.provide("gtm", e)
}
function R$(t, e, n=[], r, i= () => ({})) {
    function s(o, a) {
        return o instanceof Error ? !!(o.type & a) : !1
    }
    e.afterEach(async (o, a, l) => {
        var d, h, g;
        if (typeof o.name != "string" || Array.isArray(n) && n.includes(o.name) || typeof n == "function" && n(o, a))
            return;
        let u = o.meta && typeof o.meta.gtm == "string" && o.meta.gtm ? o.meta.gtm : o.name;
        s(l, 4) ? Bt != null && Bt.debugEnabled() && console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`) : s(l, 8) && (Bt != null && Bt.debugEnabled()) && console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);
        let c = {
            ...await i(o, a),
            ...(d = o.meta) == null ? void 0 : d.gtmAdditionalEventData
        }
          , f = ((g = (h = e.options) == null ? void 0 : h.history) == null ? void 0 : g.base) ?? "";
        f.endsWith("/") || (f += "/"),
        f += o.fullPath.startsWith("/") ? o.fullPath.substring(1) : o.fullPath,
        r ? nr( () => {
            Bt == null || Bt.trackView(u, f, c)
        }
        ) : Bt == null || Bt.trackView(u, f, c)
    }
    )
}
function P$(t) {
    return {
        install: e => k$(e, t)
    }
}
const A$ = an(t => {
    {
        const e = t.$config.public.gtm
          , n = $t()
          , r = {
            ...e,
            vueRouter: e.enableRouterSync && n ? n : void 0
        };
        t.vueApp.use(P$(r))
    }
}
)
  , V_ = Mw()
  , O$ = an(async t => {
    let e, n;
    const i = bn().public.i18nConfig
      , s = $t()
      , o = t.$getLocale()
      , a = t.$getRouteName();
    [e,n] = jr( () => t.callHook("i18n:register", (l, u) => {
        V_.mergeTranslation(u ?? o, a, l, !0)
    }
    , o)),
    await e,
    n(),
    s.beforeEach(async (l, u, c) => {
        if (l.path !== u.path || Et(i.strategy)) {
            const f = t.$getLocale(l)
              , d = t.$getRouteName(l);
            await t.callHook("i18n:register", (h, g) => {
                V_.mergeTranslation(g ?? f, d, h, !0)
            }
            , f)
        }
        c && c()
    }
    )
}
)
  , $$ = ({addDirAttribute: t=!0, identifierAttribute: e="id", addSeoAttributes: n=!0, baseUrl: r="/"}={}) => {
    const i = De({
        htmlAttrs: {},
        link: [],
        meta: []
    });
    function s(a, l) {
        const {pathname: u, search: c} = Wh(a)
          , f = new URLSearchParams(c)
          , d = {};
        for (const h of l)
            f.has(h) && (d[h] = f.get(h));
        return zh(u, d)
    }
    function o() {
        const {defaultLocale: a, strategy: l, canonicalQueryWhitelist: u} = bn().public.i18nConfig
          , {$getLocales: c, $getLocale: f} = Ye()
          , d = Wi()
          , h = ee(f())
          , g = ee(c())
          , p = (d.name ?? "").toString()
          , v = ee(c().find(O => O.code === h));
        if (!v)
            return;
        const y = v.iso || h
          , b = v.dir || "auto";
        let m = ee(d.fullPath);
        m.startsWith("/") || (m = `/${m}`);
        const _ = g.find(O => m.startsWith(`/${O.code}`));
        let w = m, E, S;
        if (p.startsWith("localized-") && _ ? (w = m.slice(_.code.length + 1),
        S = s(w, u ?? []),
        E = Pi(ee(r), h, S)) : (S = s(m, u ?? []),
        E = Pi(ee(r), S)),
        i.value = {
            htmlAttrs: {
                lang: y,
                ...t ? {
                    dir: b
                } : {}
            },
            link: [],
            meta: []
        },
        !n)
            return;
        const L = c() ?? []
          , A = {
            [e]: "i18n-og",
            property: "og:locale",
            content: y
        }
          , x = {
            [e]: "i18n-og-url",
            property: "og:url",
            content: E
        }
          , M = L.map(O => ({
            [e]: `i18n-og-alt-${O.iso || O.code}`,
            property: "og:locale:alternate",
            content: ee(O.iso || O.code)
        }))
          , R = {
            [e]: "i18n-can",
            rel: "canonical",
            href: E
        }
          , P = Et(l) ? [] : L.flatMap(O => {
            const I = a === O.code && YA(l) ? S : Pi(O.code, S)
              , N = Pi(ee(r), I)
              , F = [{
                [e]: `i18n-alternate-${O.code}`,
                rel: "alternate",
                href: N,
                hreflang: ee(O.code)
            }];
            return O.iso && O.iso !== O.code && F.push({
                [e]: `i18n-alternate-${O.iso}`,
                rel: "alternate",
                href: N,
                hreflang: ee(O.iso)
            }),
            F
        }
        );
        i.value.meta = [A, x, ...M],
        i.value.link = [R, ...P]
    }
    {
        const a = Wi()
          , l = zt( () => a.fullPath, () => o(), {
            immediate: !0
        });
        wr( () => l())
    }
    return i
}
;
var Bw = {};
const z_ = Bw.HOST ?? "localhost"
  , gc = Bw.PORT ?? "host"
  , L$ = an(t => {
    const n = bn().public.i18nConfig
      , r = gc === "443" ? "https" : "http"
      , i = gc === "80" || gc === "443" ? `${r}://${z_}` : `${r}://${z_}:${gc}`;
    t.hook("app:rendered", s => {
        const o = _$()
          , a = (n.metaBaseUrl || o.origin || i).toString()
          , l = $$({
            addDirAttribute: !0,
            identifierAttribute: "id",
            addSeoAttributes: !0,
            baseUrl: a
        });
        Xh(l)
    }
    )
}
)
  , M$ = t => Array.isArray(t) ? t.reduce( (e, n) => (e[n] = {},
e), {}) : typeof t == "object" && t !== null ? t : {}
  , I$ = an( () => ({
    provide: {
        defineI18nRoute: async e => {
            const {$getLocale: n, $mergeGlobalTranslations: r} = Ye();
            let i = Ie( () => n());
            const s = M$(e.locales)
              , o = () => {
                const a = ee(i);
                a && s[a] && (r == null || r(s[a]))
            }
            ;
            o();
            {
                let a = zt(i, o);
                wr( () => {
                    a && (a(),
                    a = null,
                    i = null)
                }
                )
            }
        }
    }
}))
  , D$ = an(async t => {
    const n = bn().public.i18nConfig;
    Wi();
    const r = $t()
      , i = async s => {
        var u;
        const o = t.$getLocale().toString()
          , a = (u = s.name) == null ? void 0 : u.toString();
        let l = a == null ? void 0 : a.toString().replace("localized-", "").replace(new RegExp(`-${o}$`), "");
        if (!s.params.locale) {
            if (r.hasRoute(`localized-${a}-${o}`) ? l = `localized-${a}-${o}` : l = `localized-${a}`,
            !r.hasRoute(l))
                return;
            const c = {
                ...s.params
            };
            return Et(n.strategy) || (c.locale = n.defaultLocale),
            Kh({
                name: l,
                params: c
            }, {
                external: !0
            })
        }
    }
    ;
    r.beforeEach(async (s, o, a) => {
        (qA(n.strategy) || Et(n.strategy)) && await i(s),
        a == null || a()
    }
    )
}
)
  , N$ = [TC, kC, VA, aO, cO, uO, fO, hO, pO, gO, E$, A$, O$, L$, I$, D$]
  , gh = Symbol("head-component")
  , Vp = {
    body: {
        type: Boolean,
        default: void 0
    },
    tagPosition: {
        type: String
    }
}
  , Rl = t => {
    const e = Object.fromEntries(Object.entries(t).filter( ([n,r]) => r !== void 0));
    return typeof e.body < "u" && (e.tagPosition = e.body ? "bodyClose" : "head"),
    typeof e.renderPriority < "u" && (e.tagPriority = e.renderPriority),
    e
}
;
function Ws() {
    return ut(gh, Hw, !0)
}
function Hw() {
    const t = ut(gh, null);
    if (t)
        return t;
    const e = mr({})
      , n = Xh(e)
      , r = {
        input: e,
        entry: n
    };
    return Zn(gh, r),
    r
}
const Go = {
    accesskey: String,
    autocapitalize: String,
    autofocus: {
        type: Boolean,
        default: void 0
    },
    class: {
        type: [String, Object, Array],
        default: void 0
    },
    contenteditable: {
        type: Boolean,
        default: void 0
    },
    contextmenu: String,
    dir: String,
    draggable: {
        type: Boolean,
        default: void 0
    },
    enterkeyhint: String,
    exportparts: String,
    hidden: {
        type: Boolean,
        default: void 0
    },
    id: String,
    inputmode: String,
    is: String,
    itemid: String,
    itemprop: String,
    itemref: String,
    itemscope: String,
    itemtype: String,
    lang: String,
    nonce: String,
    part: String,
    slot: String,
    spellcheck: {
        type: Boolean,
        default: void 0
    },
    style: {
        type: [String, Object, Array],
        default: void 0
    },
    tabindex: String,
    title: String,
    translate: String,
    renderPriority: [String, Number],
    tagPriority: {
        type: [String, Number]
    }
};
({
    ...Go,
    ...Vp
});
const F$ = ke({
    name: "Link",
    inheritAttrs: !1,
    props: {
        ...Go,
        ...Vp,
        as: String,
        crossorigin: String,
        disabled: Boolean,
        fetchpriority: String,
        href: String,
        hreflang: String,
        imagesizes: String,
        imagesrcset: String,
        integrity: String,
        media: String,
        prefetch: {
            type: Boolean,
            default: void 0
        },
        referrerpolicy: String,
        rel: String,
        sizes: String,
        title: String,
        type: String,
        methods: String,
        target: String
    },
    setup(t) {
        const {input: e} = Ws();
        e.link || (e.link = []);
        const n = e.link.push({}) - 1;
        return wr( () => e.link[n] = null),
        () => (e.link[n] = Rl(t),
        null)
    }
});
({
    ...Go
});
const j$ = ke({
    name: "Title",
    inheritAttrs: !1,
    setup(t, {slots: e}) {
        const {input: n} = Ws();
        return wr( () => n.title = null),
        () => {
            var i, s, o;
            const r = (i = e.default) == null ? void 0 : i.call(e);
            return n.title = (s = r == null ? void 0 : r[0]) != null && s.children ? String((o = r == null ? void 0 : r[0]) == null ? void 0 : o.children) : void 0,
            null
        }
    }
})
  , Uw = ke({
    name: "Meta",
    inheritAttrs: !1,
    props: {
        ...Go,
        charset: String,
        content: String,
        httpEquiv: String,
        name: String,
        property: String
    },
    setup(t) {
        const {input: e} = Ws();
        e.meta || (e.meta = []);
        const n = e.meta.push({}) - 1;
        return wr( () => e.meta[n] = null),
        () => {
            const r = {
                "http-equiv": t.httpEquiv,
                ...Rl(t)
            };
            return "httpEquiv"in r && delete r.httpEquiv,
            e.meta[n] = r,
            null
        }
    }
});
({
    ...Go,
    ...Vp
});
const Vw = ke({
    name: "Head",
    inheritAttrs: !1,
    setup: (t, e) => (Hw(),
    () => {
        var n, r;
        return (r = (n = e.slots).default) == null ? void 0 : r.call(n)
    }
    )
});
({
    ...Go
});
const B$ = ke({
    __name: "PageMeta",
    props: {
        title: {},
        description: {},
        ogImage: {},
        twitterImage: {},
        schema: {}
    },
    setup(t) {
        const e = t;
        return e.schema && Xh({
            script: [{
                type: "application/ld+json",
                innerHTML: e.schema
            }]
        }),
        (n, r) => {
            const i = j$
              , s = Uw
              , o = Vw;
            return ge(),
            Fe(o, null, {
                default: ot( () => [pe(i, null, {
                    default: ot( () => [Yo(ys(n.title), 1)]),
                    _: 1
                }), pe(s, {
                    name: "description",
                    content: n.description
                }, null, 8, ["content"]), pe(s, {
                    name: "og:title",
                    content: n.title
                }, null, 8, ["content"]), pe(s, {
                    name: "title",
                    property: "og:title",
                    content: n.title
                }, null, 8, ["content"]), pe(s, {
                    name: "og:description",
                    content: n.description
                }, null, 8, ["content"]), pe(s, {
                    name: "twitter:title",
                    content: n.title
                }, null, 8, ["content"]), pe(s, {
                    name: "twitter:description",
                    content: n.description
                }, null, 8, ["content"]), n.twitterImage ? (ge(),
                Fe(s, {
                    key: 0,
                    name: "twitter:image",
                    content: n.twitterImage
                }, null, 8, ["content"])) : Ni("", !0), n.ogImage ? (ge(),
                Fe(s, {
                    key: 1,
                    property: "og:image",
                    content: n.ogImage
                }, null, 8, ["content"])) : Ni("", !0)]),
                _: 1
            })
        }
    }
});
function H$() {
    const t = Ye()
      , e = {
        $defaultLocale: t.$defaultLocale,
        $getLocale: t.$getLocale,
        $getLocaleName: t.$getLocaleName,
        $getLocales: t.$getLocales,
        $getRouteName: t.$getRouteName,
        $t: t.$t,
        $ts: t.$ts,
        $tn: t.$tn,
        $td: t.$td,
        $tdr: t.$tdr,
        $has: t.$has,
        $tc: t.$tc,
        $mergeTranslations: t.$mergeTranslations,
        $mergeGlobalTranslations: t.$mergeGlobalTranslations,
        $setI18nRouteParams: t.$setI18nRouteParams,
        $switchLocaleRoute: t.$switchLocaleRoute,
        $switchLocalePath: t.$switchLocalePath,
        $switchLocale: t.$switchLocale,
        $switchRoute: t.$switchRoute,
        $localeRoute: t.$localeRoute,
        $localePath: t.$localePath
    }
      , n = Object.fromEntries(Object.entries(e).map( ([r,i]) => [r.slice(1), i]));
    return {
        ...e,
        ...n
    }
}
const zp = () => {
    const {getLocales: t, switchLocale: e, getLocale: n, defaultLocale: r} = H$()
      , i = kt("lang", () => n());
    _v( () => {
        i.value = n()
    }
    );
    const s = async a => {
        a !== i.value && (await e(a),
        i.value = a)
    }
      , o = Ie( () => t().map(a => a.code));
    return {
        selectedLang: i,
        languages: o,
        setLang: s,
        defaultLocale: r
    }
}
  , Wp = () => {
    const t = Ie( () => !!Wi().query._storyblok)
      , e = kt("inLoaded", () => !1)
      , n = kt("isWaiting", () => !1)
      , r = kt("isMenuOpened", () => !1)
      , i = kt("isSlideModalOpened", () => !1)
      , s = kt("isFormModalOpened", () => !1)
      , o = kt("formModalFrom", () => "")
      , a = bn()
      , l = kt("isUseLoader", () => a.public.ENVIROMENT === "production")
      , u = kt("isFullPage", () => !1)
      , c = async f => {
        o.value = f,
        await nr(),
        s.value = !0
    }
    ;
    return zt(s, f => {
        f || (o.value = "")
    }
    ),
    {
        isInEditor: t,
        isLoaded: e,
        isWaiting: n,
        isMenuOpened: r,
        isFormModalOpened: s,
        openFormModal: c,
        formModalFrom: o,
        isSlideModalOpened: i,
        isUseLoader: l,
        isFullPage: u
    }
}
;
var zw = (t => (t.info = "info",
t.danger = "danger",
t.success = "success",
t.warning = "warning",
t))(zw || {});
const Ww = () => {
    const t = kt("toasts", () => [])
      , e = i => {
        const s = {
            ...i,
            id: Date.now().toString()
        };
        t.value = [s, ...t.value]
    }
    ;
    return {
        toasts: t,
        addToast: e,
        updateToasts: i => {
            t.value = i
        }
        ,
        toast: {
            success: i => e({
                text: i,
                color: "success"
            }),
            error: i => e({
                text: i,
                color: "danger"
            }),
            info: i => e({
                text: i,
                color: "info"
            }),
            warning: i => e({
                text: i,
                color: "warning"
            })
        }
    }
}
  , qw = async t => {
    const e = De(null)
      , n = bn()
      , r = h$()
      , {selectedLang: i} = zp()
      , {isInEditor: s} = Wp()
      , {addToast: o} = Ww()
      , a = 3
      , l = async (u=0) => {
        if (!e.value)
            try {
                const {data: c} = await r.get(`cdn/stories/${t}`, {
                    version: n.public.ENVIROMENT === "development" || s.value ? "draft" : "published",
                    cv: n.public.ENVIROMENT === "production" ? Date.now() : void 0,
                    language: i.value,
                    resolve_relations: ["cta_block.manager", "home.cta", "featured_projects.featured_projects", "consultancy_featured_projects.featured_projects", "quiz_block.quiz", "footer.contacts", "company_direction.person", "project.category", "project.cta", "about.cta", "about_team_group.members", "consulting.cta", "consulting_expertise.interview", "consulting_experts.experts", "about_hero.interview", "project_home.cta", "news_home.cta", "contact.cta", "contact.contacts", "page.cta", "page.category", "page_policy.cta"]
                });
                e.value = c.story
            } catch (c) {
                if (console.error(`Story fetch failed (attempt ${u + 1}):`, c.message),
                u + 1 >= a) {
                    o({
                        color: zw.danger,
                        id: Date.now().toString(),
                        text: "An error with our server occurred. Please try reloading the page."
                    });
                    return
                }
                await l(u + 1)
            }
    }
    ;
    return await l(),
    e
}
  , U$ = async () => {
    var e;
    const t = kt("components/global-meta", () => null);
    try {
        if (!t.value) {
            const n = await qw("components/meta");
            t.value = n.value
        }
    } catch (n) {
        console.log(n)
    }
    return Dw((e = t.value) == null ? void 0 : e.id, n => {
        t.value = n
    }
    ),
    {
        story: t
    }
}
  , V$ = ke({
    __name: "GlobalMeta",
    async setup(t) {
        let e, n;
        const {story: r} = ([e,n] = Lu( () => U$()),
        e = await e,
        n(),
        e)
          , i = Ie( () => {
            var a;
            return ((a = r.value) == null ? void 0 : a.content.title) || ""
        }
        )
          , s = Ie( () => {
            var a, l;
            return ((l = (a = r.value) == null ? void 0 : a.content) == null ? void 0 : l.description) || ""
        }
        )
          , o = Ie( () => {
            var a, l;
            return ((l = (a = r.value) == null ? void 0 : a.content) == null ? void 0 : l.social_image.filename) || ""
        }
        );
        return (a, l) => {
            const u = B$;
            return ge(),
            Fe(u, {
                title: ee(i),
                description: ee(s),
                "og-image": ee(o),
                "twitter-image": ee(o)
            }, null, 8, ["title", "description", "og-image", "twitter-image"])
        }
    }
})
  , Tr = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r,i] of e)
        n[r] = i;
    return n
}
  , z$ = {}
  , W$ = {
    class: "preloader"
};
function q$(t, e) {
    return ge(),
    Ut("div", W$, e[0] || (e[0] = [pt("div", {
        class: "preloader__dot"
    }, null, -1)]))
}
const Y$ = Tr(z$, [["render", q$]])
  , Yw = "inputContext";
function K$(t={}) {
    const e = De(t);
    return Zn(Yw, e),
    e
}
function G$() {
    return ut(Yw, null)
}
const X$ = (t, e, n) => {
    const r = G$();
    r && (r.value = {
        ...r.value,
        ...t
    });
    const i = Ie( () => t.id || `input-${Gy()}`)
      , s = De(null)
      , o = De(!1)
      , a = De(!1)
      , l = () => {
        if (t.validators) {
            const g = t.validators.find(p => p(n.value));
            g ? (o.value = g(n.value),
            e("error", o.value)) : o.value = !1
        }
    }
    ;
    return {
        id: i,
        $input: s,
        error: o,
        isFocused: a,
        onChange: async () => {
            await nr(),
            l(),
            e("input", {
                id: i.value,
                value: n.value,
                error: !!o.value
            }),
            r && (r.value = {
                ...r.value,
                value: n.value,
                error: o.value
            })
        }
        ,
        onFocus: () => {
            a.value = !0,
            e("focus")
        }
        ,
        onBlur: () => {
            a.value = !1,
            e("blur")
        }
        ,
        reset: () => {
            n.value = "",
            o.value = !1
        }
        ,
        validate: l,
        updateFields: () => {
            n.value.trim() !== "" && e("input", {
                id: i.value,
                value: n.value,
                error: o.value
            })
        }
    }
}
  , J$ = ["id", "data-focused", "required", "name", "type", "disabled", "placeholder", "autofocus", "aria-invalid"]
  , Q$ = ke({
    __name: "index",
    props: rl({
        required: {
            type: Boolean
        },
        id: {},
        name: {},
        type: {
            default: "text"
        },
        disabled: {
            type: Boolean
        },
        placeholder: {
            default: ""
        },
        autoFocus: {
            type: Boolean
        },
        validators: {}
    }, {
        modelValue: {},
        modelModifiers: {}
    }),
    emits: rl(["input", "focus", "blur", "error"], ["update:modelValue"]),
    setup(t, {expose: e, emit: n}) {
        const r = t
          , i = n
          , s = Yc(t, "modelValue")
          , {id: o, $input: a, error: l, isFocused: u, onBlur: c, onChange: f, onFocus: d, reset: h} = X$(r, i, s);
        return e({
            reset: h,
            $input: a
        }),
        (g, p) => dT((ge(),
        Ut("input", {
            id: ee(o),
            ref_key: "$input",
            ref: a,
            "onUpdate:modelValue": p[0] || (p[0] = v => s.value = v),
            class: "input",
            "data-input": "",
            "data-focused": ee(u),
            required: g.required,
            name: g.name,
            type: g.type,
            disabled: g.disabled,
            placeholder: g.placeholder,
            autofocus: g.autoFocus,
            "aria-invalid": !!ee(l),
            onInput: p[1] || (p[1] = (...v) => ee(f) && ee(f)(...v)),
            onFocus: p[2] || (p[2] = (...v) => ee(d) && ee(d)(...v)),
            onBlur: p[3] || (p[3] = (...v) => ee(c) && ee(c)(...v))
        }, null, 40, J$)), [[Gx, s.value]])
    }
})
  , Z$ = Tr(Q$, [["__scopeId", "data-v-fb8694c5"]])
  , eL = ke({
    __name: "ValidationMessage",
    props: {
        as: {
            default: "div"
        }
    },
    setup(t) {
        return (e, n) => (ge(),
        Fe(ws(e.as), {
            "data-validation-message": ""
        }, {
            default: ot( () => [fi(e.$slots, "default")]),
            _: 3
        }))
    }
})
  , tL = ke({
    __name: "Field",
    props: {
        as: {
            default: "div"
        }
    },
    setup(t) {
        const e = K$();
        return (n, r) => (ge(),
        Fe(ws(n.as), {
            "data-field": "",
            disabled: ee(e).disabled
        }, {
            default: ot( () => [fi(n.$slots, "default", P1(Cv(ee(e))))]),
            _: 3
        }, 8, ["disabled"]))
    }
})
  , nL = ke({
    __name: "AppInput",
    props: rl({
        id: {},
        name: {},
        type: {},
        value: {},
        placeholder: {},
        required: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        validators: {}
    }, {
        modelValue: {},
        modelModifiers: {},
        errors: {
            type: Boolean
        },
        errorsModifiers: {}
    }),
    emits: ["update:modelValue", "update:errors"],
    setup(t) {
        const e = Yc(t, "modelValue")
          , n = Yc(t, "errors")
          , r = i => {
            n.value = !!i.error
        }
        ;
        return (i, s) => {
            const o = Z$
              , a = eL
              , l = tL;
            return ge(),
            Fe(l, null, {
                default: ot(u => [pe(o, {
                    id: i.id,
                    modelValue: e.value,
                    "onUpdate:modelValue": s[0] || (s[0] = c => e.value = c),
                    name: i.name,
                    type: i.type,
                    placeholder: i.placeholder,
                    required: i.required,
                    validators: i.validators,
                    onInput: r
                }, null, 8, ["id", "modelValue", "name", "type", "placeholder", "required", "validators"]), u.error ? (ge(),
                Fe(a, {
                    key: 0,
                    class: "validation-message"
                }, {
                    default: ot( () => [Yo(ys(u.error), 1)]),
                    _: 2
                }, 1024)) : Ni("", !0)]),
                _: 1
            })
        }
    }
})
  , rL = Tr(nL, [["__scopeId", "data-v-74273273"]])
  , iL = {};
function sL(t, e) {
    return ge(),
    Fe(ju, {
        name: "fade"
    }, {
        default: ot( () => e[0] || (e[0] = [pt("div", {
            class: "headless-loader",
            style: {
                height: "1em",
                width: "1em"
            }
        }, [pt("svg", {
            class: "circular",
            viewBox: "25 25 50 50"
        }, [pt("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            "stroke-width": "2",
            "stroke-miterlimit": "10"
        })])], -1)])),
        _: 1
    })
}
const oL = Tr(iL, [["render", sL], ["__scopeId", "data-v-bbc31baa"]])
  , aL = {}
  , lL = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
function cL(t, e) {
    return ge(),
    Ut("svg", lL, e[0] || (e[0] = [pt("path", {
        d: "M3.53102 3.52659L15.3258 3.51869L15.3272 3.51732L15.3285 3.51869L16.5067 3.51791L16.4981 16.4913L14.8304 16.4924L14.8371 6.36442L4.13151 17.07L2.953 15.8915L13.6568 5.18766L3.52992 5.19436L3.53102 3.52659Z",
        fill: "currentColor"
    }, null, -1)]))
}
const uL = Tr(aL, [["render", cL]])
  , fL = ke({
    __name: "Button",
    props: {
        tag: {
            default: "button"
        },
        type: {
            default: "button"
        },
        href: {}
    },
    setup(t) {
        const e = t
          , n = Ie( () => e.tag === "nuxt-link" ? b$ : e.tag ?? "button")
          , r = Ie( () => e.tag === "nuxt-link" ? e.href : void 0)
          , i = Ie( () => e.tag === "a" ? e.href : void 0);
        return (s, o) => (ge(),
        Fe(ws(ee(n)), {
            type: s.type,
            to: ee(r),
            href: ee(i),
            target: e.tag === "a" ? "_blank" : void 0,
            rel: e.tag === "a" ? "noreferer noopener" : void 0
        }, {
            default: ot( () => [fi(s.$slots, "default")]),
            _: 3
        }, 8, ["type", "to", "href", "target", "rel"]))
    }
})
  , dL = {
    class: "btn__content-wrapper"
}
  , hL = {
    class: "btn__content"
}
  , pL = {
    "aria-hidden": "true",
    class: "btn__content btn__content--duplicate"
}
  , gL = ke({
    __name: "Button",
    props: {
        tag: {},
        type: {},
        href: {},
        view: {
            default: "primary"
        },
        disabled: {
            type: Boolean
        }
    },
    setup(t) {
        return (e, n) => {
            const r = fL;
            return ge(),
            Fe(r, {
                class: Gi(["btn", [`btn--${e.view}`]]),
                tag: e.tag,
                type: e.type,
                href: e.href,
                disabled: e.disabled
            }, {
                default: ot( () => [pt("span", dL, [pt("span", hL, [fi(e.$slots, "default", {}, void 0, !0)]), pt("span", pL, [fi(e.$slots, "default", {}, void 0, !0)])])]),
                _: 3
            }, 8, ["class", "tag", "type", "href", "disabled"])
        }
    }
})
  , Kw = Tr(gL, [["__scopeId", "data-v-7d38ae27"]])
  , qp = async () => {
    var e;
    const t = kt("components/form", () => null);
    try {
        if (!t.value) {
            const n = await qw("components/form");
            t.value = n.value
        }
    } catch (n) {
        console.log(n)
    }
    return Dw((e = t.value) == null ? void 0 : e.id, n => {
        t.value = n
    }
    ),
    {
        story: t
    }
}
;
function LI(t) {
    return wl() ? (Fc(t),
    !0) : !1
}
function mL(t) {
    return typeof t == "function" ? t() : ee(t)
}
function _L(t) {
    if (!Je(t))
        return mr(t);
    const e = new Proxy({},{
        get(n, r, i) {
            return ee(Reflect.get(t.value, r, i))
        },
        set(n, r, i) {
            return Je(t.value[r]) && !Je(i) ? t.value[r].value = i : t.value[r] = i,
            !0
        },
        deleteProperty(n, r) {
            return Reflect.deleteProperty(t.value, r)
        },
        has(n, r) {
            return Reflect.has(t.value, r)
        },
        ownKeys() {
            return Object.keys(t.value)
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: !0,
                configurable: !0
            }
        }
    });
    return mr(e)
}
function yL(t) {
    return _L(Ie(t))
}
const vL = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const MI = t => t != null
  , bL = Object.prototype.toString
  , II = t => bL.call(t) === "[object Object]"
  , W_ = () => {}
  , DI = wL();
function wL() {
    var t, e;
    return vL && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}
function TL(t, e) {
    function n(...r) {
        return new Promise( (i, s) => {
            Promise.resolve(t( () => e.apply(this, r), {
                fn: e,
                thisArg: this,
                args: r
            })).then(i).catch(s)
        }
        )
    }
    return n
}
function xL(...t) {
    let e = 0, n, r = !0, i = W_, s, o, a, l, u;
    !Je(t[0]) && typeof t[0] == "object" ? {delay: o, trailing: a=!0, leading: l=!0, rejectOnCancel: u=!1} = t[0] : [o,a=!0,l=!0,u=!1] = t;
    const c = () => {
        n && (clearTimeout(n),
        n = void 0,
        i(),
        i = W_)
    }
    ;
    return d => {
        const h = mL(o)
          , g = Date.now() - e
          , p = () => s = d();
        return c(),
        h <= 0 ? (e = Date.now(),
        p()) : (g > h && (l || !r) ? (e = Date.now(),
        p()) : a && (s = new Promise( (v, y) => {
            i = u ? y : v,
            n = setTimeout( () => {
                e = Date.now(),
                r = !0,
                v(p()),
                c()
            }
            , Math.max(0, h - g))
        }
        )),
        !l && !n && (n = setTimeout( () => r = !0, h)),
        r = !1,
        s)
    }
}
function NI(t, e=200, n=!1, r=!0, i=!1) {
    return TL(xL(e, n, r, i), t)
}
function FI(t, e, n) {
    return zt(t, e, {
        ...n,
        immediate: !0
    })
}
const EL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  , SL = /\+?([\d|(][h|(\d{3})|.|\-|\d]{4,}\d)/;
class CL {
    required(e) {
        return n => !n || !n.trim() ? e : !1
    }
    min(e, n) {
        return r => r.trim().length < e ? n : !1
    }
    max(e, n) {
        return r => r.trim().length > e ? n : !1
    }
    email(e) {
        return n => {
            if (!n)
                return e;
            const r = n.split("@");
            if (r.length !== 2)
                return e;
            const i = r[0]
              , s = r[1];
            return i.length > 64 || s.length > 255 || s.split(".").some(a => a.length > 63) || !EL.test(n) ? e : !1
        }
    }
    phone(e) {
        return n => SL.test(n) ? !1 : e
    }
    isEqual(e, n) {
        return r => r.trim() !== e.trim() ? n : !1
    }
}
const Jf = new CL
  , kL = {
    key: 0,
    class: "form__title"
}
  , RL = {
    key: 1,
    class: "form__description"
}
  , PL = {
    class: "form__fields"
}
  , AL = {
    key: 1
}
  , OL = ke({
    __name: "AppForm",
    props: rl({
        formId: {},
        title: {},
        description: {},
        btnText: {
            default: "Submit"
        },
        btnPosition: {
            default: "center"
        },
        showButton: {
            type: Boolean,
            default: !0
        },
        isLoading: {
            type: Boolean
        }
    }, {
        modelValue: {},
        modelModifiers: {}
    }),
    emits: rl(["submit"], ["update:modelValue"]),
    async setup(t, {emit: e}) {
        let n, r;
        const i = t
          , s = e
          , {story: o} = ([n,r] = Lu( () => qp()),
        n = await n,
        r(),
        n)
          , a = Yc(t, "modelValue")
          , l = yL( () => {
            var f, d, h, g, p, v, y, b, m, _, w, E, S, L, A;
            return [{
                id: `${i.formId}-name`,
                name: "name",
                type: "text",
                placeholder: ((d = (f = o == null ? void 0 : o.value) == null ? void 0 : f.content) == null ? void 0 : d.full_name_label) || "Name",
                required: !0,
                value: (h = a.value) == null ? void 0 : h.name.value,
                error: (p = (g = a.value) == null ? void 0 : g.name) == null ? void 0 : p.error,
                validators: [Jf.min(2, "Please enter at least 2 characters")]
            }, {
                id: `${i.formId}-number`,
                name: "phone",
                type: "text",
                placeholder: ((y = (v = o == null ? void 0 : o.value) == null ? void 0 : v.content) == null ? void 0 : y.phone_label) || "Number",
                required: !0,
                value: (b = a.value) == null ? void 0 : b.phone.value,
                error: (_ = (m = a.value) == null ? void 0 : m.phone) == null ? void 0 : _.error,
                validators: [Jf.phone("Please enter a valid phone number")]
            }, {
                id: `${i.formId}-email`,
                name: "email",
                type: "email",
                placeholder: ((E = (w = o == null ? void 0 : o.value) == null ? void 0 : w.content) == null ? void 0 : E.email_label) || "Email",
                required: !0,
                value: (S = a.value) == null ? void 0 : S.email.value,
                error: (A = (L = a.value) == null ? void 0 : L.email) == null ? void 0 : A.error,
                validators: [Jf.email("Please enter a valid email address")]
            }]
        }
        )
          , u = Ie( () => a.value ? Object.values(a.value).every(f => {
            var d;
            return !!((d = f.value) != null && d.trim()) && !f.error
        }
        ) : !1)
          , c = () => {
            u.value && s("submit", a.value)
        }
        ;
        return (f, d) => {
            const h = rL
              , g = oL
              , p = uL
              , v = Kw;
            return ge(),
            Ut("form", {
                class: "form",
                novalidate: "",
                onSubmit: Zx(c, ["prevent"])
            }, [pt("div", {
                class: Gi(["form__wrapper", {
                    "form__wrapper--left": f.btnPosition === "left",
                    "form__wrapper--right": f.btnPosition === "right",
                    "form__wrapper--center": f.btnPosition === "center"
                }])
            }, [f.title ? (ge(),
            Ut("legend", kL, ys(f.title), 1)) : Ni("", !0), f.description ? (ge(),
            Ut("p", RL, ys(f.description), 1)) : Ni("", !0), pt("fieldset", PL, [(ge(!0),
            Ut(Rt, null, AT(ee(l), (y, b) => (ge(),
            Fe(h, {
                id: y.id,
                key: b,
                modelValue: a.value[y.name].value,
                "onUpdate:modelValue": m => a.value[y.name].value = m,
                errors: a.value[y.name].error,
                "onUpdate:errors": m => a.value[y.name].error = m,
                class: "form__input",
                name: y.name,
                type: y.type,
                value: y.value,
                placeholder: y.placeholder,
                required: y.required,
                error: y.error,
                validators: y.validators
            }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "errors", "onUpdate:errors", "name", "type", "value", "placeholder", "required", "error", "validators"]))), 128))]), f.showButton ? (ge(),
            Fe(v, {
                key: 2,
                type: "submit",
                class: "form__btn",
                disabled: !ee(u) || f.isLoading
            }, {
                default: ot( () => [f.isLoading ? (ge(),
                Fe(g, {
                    key: 0
                })) : (ge(),
                Ut("span", AL, ys(f.btnText), 1)), pe(p)]),
                _: 1
            }, 8, ["disabled"])) : Ni("", !0)], 2)], 32)
        }
    }
})
  , $L = {}
  , LL = {
    "data-dialog-backdrop": "",
    "aria-hidden": "true"
};
function ML(t, e) {
    return ge(),
    Ut("div", LL)
}
const IL = Tr($L, [["render", ML]])
  , DL = ["id"]
  , NL = ke({
    __name: "Window",
    setup(t) {
        const e = De(null)
          , n = ut("dialogId")
          , r = ut("registerWindow");
        return Ur( () => {
            r(e)
        }
        ),
        (i, s) => (ge(),
        Ut("div", El({
            id: ee(n),
            ref_key: "$el",
            ref: e,
            tabindex: "-1",
            role: "document",
            "data-dialog-window": ""
        }, i.$attrs), [fi(i.$slots, "default")], 16, DL))
    }
});
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Gw = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
  , wu = Gw.join(",")
  , Xw = typeof Element > "u"
  , Vs = Xw ? function() {}
: Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  , Tu = !Xw && Element.prototype.getRootNode ? function(t) {
    var e;
    return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t)
}
: function(t) {
    return t == null ? void 0 : t.ownerDocument
}
  , xu = function t(e, n) {
    var r;
    n === void 0 && (n = !0);
    var i = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert")
      , s = i === "" || i === "true"
      , o = s || n && e && t(e.parentNode);
    return o
}
  , FL = function(e) {
    var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
    return r === "" || r === "true"
}
  , Jw = function(e, n, r) {
    if (xu(e))
        return [];
    var i = Array.prototype.slice.apply(e.querySelectorAll(wu));
    return n && Vs.call(e, wu) && i.unshift(e),
    i = i.filter(r),
    i
}
  , Qw = function t(e, n, r) {
    for (var i = [], s = Array.from(e); s.length; ) {
        var o = s.shift();
        if (!xu(o, !1))
            if (o.tagName === "SLOT") {
                var a = o.assignedElements()
                  , l = a.length ? a : o.children
                  , u = t(l, !0, r);
                r.flatten ? i.push.apply(i, u) : i.push({
                    scopeParent: o,
                    candidates: u
                })
            } else {
                var c = Vs.call(o, wu);
                c && r.filter(o) && (n || !e.includes(o)) && i.push(o);
                var f = o.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(o)
                  , d = !xu(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
                if (f && d) {
                    var h = t(f === !0 ? o.children : f.children, !0, r);
                    r.flatten ? i.push.apply(i, h) : i.push({
                        scopeParent: o,
                        candidates: h
                    })
                } else
                    s.unshift.apply(s, o.children)
            }
    }
    return i
}
  , Zw = function(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
}
  , hs = function(e) {
    if (!e)
        throw new Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || FL(e)) && !Zw(e) ? 0 : e.tabIndex
}
  , jL = function(e, n) {
    var r = hs(e);
    return r < 0 && n && !Zw(e) ? 0 : r
}
  , BL = function(e, n) {
    return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex
}
  , e1 = function(e) {
    return e.tagName === "INPUT"
}
  , HL = function(e) {
    return e1(e) && e.type === "hidden"
}
  , UL = function(e) {
    var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
        return r.tagName === "SUMMARY"
    });
    return n
}
  , VL = function(e, n) {
    for (var r = 0; r < e.length; r++)
        if (e[r].checked && e[r].form === n)
            return e[r]
}
  , zL = function(e) {
    if (!e.name)
        return !0;
    var n = e.form || Tu(e), r = function(a) {
        return n.querySelectorAll('input[type="radio"][name="' + a + '"]')
    }, i;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
        i = r(window.CSS.escape(e.name));
    else
        try {
            i = r(e.name)
        } catch (o) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message),
            !1
        }
    var s = VL(i, e.form);
    return !s || s === e
}
  , WL = function(e) {
    return e1(e) && e.type === "radio"
}
  , qL = function(e) {
    return WL(e) && !zL(e)
}
  , YL = function(e) {
    var n, r = e && Tu(e), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
    if (r && r !== e) {
        var o, a, l;
        for (s = !!((o = i) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(i) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !s && i; ) {
            var u, c, f;
            r = Tu(i),
            i = (u = r) === null || u === void 0 ? void 0 : u.host,
            s = !!((c = i) !== null && c !== void 0 && (f = c.ownerDocument) !== null && f !== void 0 && f.contains(i))
        }
    }
    return s
}
  , q_ = function(e) {
    var n = e.getBoundingClientRect()
      , r = n.width
      , i = n.height;
    return r === 0 && i === 0
}
  , KL = function(e, n) {
    var r = n.displayCheck
      , i = n.getShadowRoot;
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    var s = Vs.call(e, "details>summary:first-of-type")
      , o = s ? e.parentElement : e;
    if (Vs.call(o, "details:not([open]) *"))
        return !0;
    if (!r || r === "full" || r === "legacy-full") {
        if (typeof i == "function") {
            for (var a = e; e; ) {
                var l = e.parentElement
                  , u = Tu(e);
                if (l && !l.shadowRoot && i(l) === !0)
                    return q_(e);
                e.assignedSlot ? e = e.assignedSlot : !l && u !== e.ownerDocument ? e = u.host : e = l
            }
            e = a
        }
        if (YL(e))
            return !e.getClientRects().length;
        if (r !== "legacy-full")
            return !0
    } else if (r === "non-zero-area")
        return q_(e);
    return !1
}
  , GL = function(e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
        for (var n = e.parentElement; n; ) {
            if (n.tagName === "FIELDSET" && n.disabled) {
                for (var r = 0; r < n.children.length; r++) {
                    var i = n.children.item(r);
                    if (i.tagName === "LEGEND")
                        return Vs.call(n, "fieldset[disabled] *") ? !0 : !i.contains(e)
                }
                return !0
            }
            n = n.parentElement
        }
    return !1
}
  , Eu = function(e, n) {
    return !(n.disabled || xu(n) || HL(n) || KL(n, e) || UL(n) || GL(n))
}
  , mh = function(e, n) {
    return !(qL(n) || hs(n) < 0 || !Eu(e, n))
}
  , XL = function(e) {
    var n = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0)
}
  , JL = function t(e) {
    var n = []
      , r = [];
    return e.forEach(function(i, s) {
        var o = !!i.scopeParent
          , a = o ? i.scopeParent : i
          , l = jL(a, o)
          , u = o ? t(i.candidates) : a;
        l === 0 ? o ? n.push.apply(n, u) : n.push(a) : r.push({
            documentOrder: s,
            tabIndex: l,
            item: i,
            isScope: o,
            content: u
        })
    }),
    r.sort(BL).reduce(function(i, s) {
        return s.isScope ? i.push.apply(i, s.content) : i.push(s.content),
        i
    }, []).concat(n)
}
  , QL = function(e, n) {
    n = n || {};
    var r;
    return n.getShadowRoot ? r = Qw([e], n.includeContainer, {
        filter: mh.bind(null, n),
        flatten: !1,
        getShadowRoot: n.getShadowRoot,
        shadowRootFilter: XL
    }) : r = Jw(e, n.includeContainer, mh.bind(null, n)),
    JL(r)
}
  , ZL = function(e, n) {
    n = n || {};
    var r;
    return n.getShadowRoot ? r = Qw([e], n.includeContainer, {
        filter: Eu.bind(null, n),
        flatten: !0,
        getShadowRoot: n.getShadowRoot
    }) : r = Jw(e, n.includeContainer, Eu.bind(null, n)),
    r
}
  , Zs = function(e, n) {
    if (n = n || {},
    !e)
        throw new Error("No node provided");
    return Vs.call(e, wu) === !1 ? !1 : mh(n, e)
}
  , eM = Gw.concat("iframe").join(",")
  , Qf = function(e, n) {
    if (n = n || {},
    !e)
        throw new Error("No node provided");
    return Vs.call(e, eM) === !1 ? !1 : Eu(n, e)
};
/*!
* focus-trap 7.6.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _h(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++)
        r[n] = t[n];
    return r
}
function tM(t) {
    if (Array.isArray(t))
        return _h(t)
}
function nM(t, e, n) {
    return (e = aM(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function rM(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
        return Array.from(t)
}
function iM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Y_(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function K_(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Y_(Object(n), !0).forEach(function(r) {
            nM(t, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Y_(Object(n)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return t
}
function sM(t) {
    return tM(t) || rM(t) || lM(t) || iM()
}
function oM(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(t, e);
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
function aM(t) {
    var e = oM(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function lM(t, e) {
    if (t) {
        if (typeof t == "string")
            return _h(t, e);
        var n = {}.toString.call(t).slice(8, -1);
        return n === "Object" && t.constructor && (n = t.constructor.name),
        n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _h(t, e) : void 0
    }
}
var G_ = {
    activateTrap: function(e, n) {
        if (e.length > 0) {
            var r = e[e.length - 1];
            r !== n && r._setPausedState(!0)
        }
        var i = e.indexOf(n);
        i === -1 || e.splice(i, 1),
        e.push(n)
    },
    deactivateTrap: function(e, n) {
        var r = e.indexOf(n);
        r !== -1 && e.splice(r, 1),
        e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1)
    }
}
  , cM = function(e) {
    return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function"
}
  , uM = function(e) {
    return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27
}
  , Ja = function(e) {
    return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9
}
  , fM = function(e) {
    return Ja(e) && !e.shiftKey
}
  , dM = function(e) {
    return Ja(e) && e.shiftKey
}
  , X_ = function(e) {
    return setTimeout(e, 0)
}
  , da = function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
        r[i - 1] = arguments[i];
    return typeof e == "function" ? e.apply(void 0, r) : e
}
  , mc = function(e) {
    return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target
}
  , hM = []
  , pM = function(e, n) {
    var r = document, i = hM, s = K_({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: fM,
        isKeyBackward: dM
    }, n), o = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        manuallyPaused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
    }, a, l = function(P, O, I) {
        return P && P[O] !== void 0 ? P[O] : s[I || O]
    }, u = function(P, O) {
        var I = typeof (O == null ? void 0 : O.composedPath) == "function" ? O.composedPath() : void 0;
        return o.containerGroups.findIndex(function(N) {
            var F = N.container
              , H = N.tabbableNodes;
            return F.contains(P) || (I == null ? void 0 : I.includes(F)) || H.find(function(G) {
                return G === P
            })
        })
    }, c = function(P) {
        var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , I = O.hasFallback
          , N = I === void 0 ? !1 : I
          , F = O.params
          , H = F === void 0 ? [] : F
          , G = s[P];
        if (typeof G == "function" && (G = G.apply(void 0, sM(H))),
        G === !0 && (G = void 0),
        !G) {
            if (G === void 0 || G === !1)
                return G;
            throw new Error("`".concat(P, "` was specified but was not a node, or did not return a node"))
        }
        var $ = G;
        if (typeof G == "string") {
            try {
                $ = r.querySelector(G)
            } catch (ne) {
                throw new Error("`".concat(P, '` appears to be an invalid selector; error="').concat(ne.message, '"'))
            }
            if (!$ && !N)
                throw new Error("`".concat(P, "` as selector refers to no known node"))
        }
        return $
    }, f = function() {
        var P = c("initialFocus", {
            hasFallback: !0
        });
        if (P === !1)
            return !1;
        if (P === void 0 || P && !Qf(P, s.tabbableOptions))
            if (u(r.activeElement) >= 0)
                P = r.activeElement;
            else {
                var O = o.tabbableGroups[0]
                  , I = O && O.firstTabbableNode;
                P = I || c("fallbackFocus")
            }
        else
            P === null && (P = c("fallbackFocus"));
        if (!P)
            throw new Error("Your focus-trap needs to have at least one focusable element");
        return P
    }, d = function() {
        if (o.containerGroups = o.containers.map(function(P) {
            var O = QL(P, s.tabbableOptions)
              , I = ZL(P, s.tabbableOptions)
              , N = O.length > 0 ? O[0] : void 0
              , F = O.length > 0 ? O[O.length - 1] : void 0
              , H = I.find(function(ne) {
                return Zs(ne)
            })
              , G = I.slice().reverse().find(function(ne) {
                return Zs(ne)
            })
              , $ = !!O.find(function(ne) {
                return hs(ne) > 0
            });
            return {
                container: P,
                tabbableNodes: O,
                focusableNodes: I,
                posTabIndexesFound: $,
                firstTabbableNode: N,
                lastTabbableNode: F,
                firstDomTabbableNode: H,
                lastDomTabbableNode: G,
                nextTabbableNode: function(ce) {
                    var ze = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
                      , me = O.indexOf(ce);
                    return me < 0 ? ze ? I.slice(I.indexOf(ce) + 1).find(function(he) {
                        return Zs(he)
                    }) : I.slice(0, I.indexOf(ce)).reverse().find(function(he) {
                        return Zs(he)
                    }) : O[me + (ze ? 1 : -1)]
                }
            }
        }),
        o.tabbableGroups = o.containerGroups.filter(function(P) {
            return P.tabbableNodes.length > 0
        }),
        o.tabbableGroups.length <= 0 && !c("fallbackFocus"))
            throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
        if (o.containerGroups.find(function(P) {
            return P.posTabIndexesFound
        }) && o.containerGroups.length > 1)
            throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
    }, h = function(P) {
        var O = P.activeElement;
        if (O)
            return O.shadowRoot && O.shadowRoot.activeElement !== null ? h(O.shadowRoot) : O
    }, g = function(P) {
        if (P !== !1 && P !== h(document)) {
            if (!P || !P.focus) {
                g(f());
                return
            }
            P.focus({
                preventScroll: !!s.preventScroll
            }),
            o.mostRecentlyFocusedNode = P,
            cM(P) && P.select()
        }
    }, p = function(P) {
        var O = c("setReturnFocus", {
            params: [P]
        });
        return O || (O === !1 ? !1 : P)
    }, v = function(P) {
        var O = P.target
          , I = P.event
          , N = P.isBackward
          , F = N === void 0 ? !1 : N;
        O = O || mc(I),
        d();
        var H = null;
        if (o.tabbableGroups.length > 0) {
            var G = u(O, I)
              , $ = G >= 0 ? o.containerGroups[G] : void 0;
            if (G < 0)
                F ? H = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : H = o.tabbableGroups[0].firstTabbableNode;
            else if (F) {
                var ne = o.tabbableGroups.findIndex(function(j) {
                    var W = j.firstTabbableNode;
                    return O === W
                });
                if (ne < 0 && ($.container === O || Qf(O, s.tabbableOptions) && !Zs(O, s.tabbableOptions) && !$.nextTabbableNode(O, !1)) && (ne = G),
                ne >= 0) {
                    var ce = ne === 0 ? o.tabbableGroups.length - 1 : ne - 1
                      , ze = o.tabbableGroups[ce];
                    H = hs(O) >= 0 ? ze.lastTabbableNode : ze.lastDomTabbableNode
                } else
                    Ja(I) || (H = $.nextTabbableNode(O, !1))
            } else {
                var me = o.tabbableGroups.findIndex(function(j) {
                    var W = j.lastTabbableNode;
                    return O === W
                });
                if (me < 0 && ($.container === O || Qf(O, s.tabbableOptions) && !Zs(O, s.tabbableOptions) && !$.nextTabbableNode(O)) && (me = G),
                me >= 0) {
                    var he = me === o.tabbableGroups.length - 1 ? 0 : me + 1
                      , ae = o.tabbableGroups[he];
                    H = hs(O) >= 0 ? ae.firstTabbableNode : ae.firstDomTabbableNode
                } else
                    Ja(I) || (H = $.nextTabbableNode(O))
            }
        } else
            H = c("fallbackFocus");
        return H
    }, y = function(P) {
        var O = mc(P);
        if (!(u(O, P) >= 0)) {
            if (da(s.clickOutsideDeactivates, P)) {
                a.deactivate({
                    returnFocus: s.returnFocusOnDeactivate
                });
                return
            }
            da(s.allowOutsideClick, P) || P.preventDefault()
        }
    }, b = function(P) {
        var O = mc(P)
          , I = u(O, P) >= 0;
        if (I || O instanceof Document)
            I && (o.mostRecentlyFocusedNode = O);
        else {
            P.stopImmediatePropagation();
            var N, F = !0;
            if (o.mostRecentlyFocusedNode)
                if (hs(o.mostRecentlyFocusedNode) > 0) {
                    var H = u(o.mostRecentlyFocusedNode)
                      , G = o.containerGroups[H].tabbableNodes;
                    if (G.length > 0) {
                        var $ = G.findIndex(function(ne) {
                            return ne === o.mostRecentlyFocusedNode
                        });
                        $ >= 0 && (s.isKeyForward(o.recentNavEvent) ? $ + 1 < G.length && (N = G[$ + 1],
                        F = !1) : $ - 1 >= 0 && (N = G[$ - 1],
                        F = !1))
                    }
                } else
                    o.containerGroups.some(function(ne) {
                        return ne.tabbableNodes.some(function(ce) {
                            return hs(ce) > 0
                        })
                    }) || (F = !1);
            else
                F = !1;
            F && (N = v({
                target: o.mostRecentlyFocusedNode,
                isBackward: s.isKeyBackward(o.recentNavEvent)
            })),
            g(N || o.mostRecentlyFocusedNode || f())
        }
        o.recentNavEvent = void 0
    }, m = function(P) {
        var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = P;
        var I = v({
            event: P,
            isBackward: O
        });
        I && (Ja(P) && P.preventDefault(),
        g(I))
    }, _ = function(P) {
        (s.isKeyForward(P) || s.isKeyBackward(P)) && m(P, s.isKeyBackward(P))
    }, w = function(P) {
        uM(P) && da(s.escapeDeactivates, P) !== !1 && (P.preventDefault(),
        a.deactivate())
    }, E = function(P) {
        var O = mc(P);
        u(O, P) >= 0 || da(s.clickOutsideDeactivates, P) || da(s.allowOutsideClick, P) || (P.preventDefault(),
        P.stopImmediatePropagation())
    }, S = function() {
        if (o.active)
            return G_.activateTrap(i, a),
            o.delayInitialFocusTimer = s.delayInitialFocus ? X_(function() {
                g(f())
            }) : g(f()),
            r.addEventListener("focusin", b, !0),
            r.addEventListener("mousedown", y, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("touchstart", y, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("click", E, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("keydown", _, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("keydown", w),
            a
    }, L = function() {
        if (o.active)
            return r.removeEventListener("focusin", b, !0),
            r.removeEventListener("mousedown", y, !0),
            r.removeEventListener("touchstart", y, !0),
            r.removeEventListener("click", E, !0),
            r.removeEventListener("keydown", _, !0),
            r.removeEventListener("keydown", w),
            a
    }, A = function(P) {
        var O = P.some(function(I) {
            var N = Array.from(I.removedNodes);
            return N.some(function(F) {
                return F === o.mostRecentlyFocusedNode
            })
        });
        O && g(f())
    }, x = typeof window < "u" && "MutationObserver"in window ? new MutationObserver(A) : void 0, M = function() {
        x && (x.disconnect(),
        o.active && !o.paused && o.containers.map(function(P) {
            x.observe(P, {
                subtree: !0,
                childList: !0
            })
        }))
    };
    return a = {
        get active() {
            return o.active
        },
        get paused() {
            return o.paused
        },
        activate: function(P) {
            if (o.active)
                return this;
            var O = l(P, "onActivate")
              , I = l(P, "onPostActivate")
              , N = l(P, "checkCanFocusTrap");
            N || d(),
            o.active = !0,
            o.paused = !1,
            o.nodeFocusedBeforeActivation = r.activeElement,
            O == null || O();
            var F = function() {
                N && d(),
                S(),
                M(),
                I == null || I()
            };
            return N ? (N(o.containers.concat()).then(F, F),
            this) : (F(),
            this)
        },
        deactivate: function(P) {
            if (!o.active)
                return this;
            var O = K_({
                onDeactivate: s.onDeactivate,
                onPostDeactivate: s.onPostDeactivate,
                checkCanReturnFocus: s.checkCanReturnFocus
            }, P);
            clearTimeout(o.delayInitialFocusTimer),
            o.delayInitialFocusTimer = void 0,
            L(),
            o.active = !1,
            o.paused = !1,
            M(),
            G_.deactivateTrap(i, a);
            var I = l(O, "onDeactivate")
              , N = l(O, "onPostDeactivate")
              , F = l(O, "checkCanReturnFocus")
              , H = l(O, "returnFocus", "returnFocusOnDeactivate");
            I == null || I();
            var G = function() {
                X_(function() {
                    H && g(p(o.nodeFocusedBeforeActivation)),
                    N == null || N()
                })
            };
            return H && F ? (F(p(o.nodeFocusedBeforeActivation)).then(G, G),
            this) : (G(),
            this)
        },
        pause: function(P) {
            return o.active ? (o.manuallyPaused = !0,
            this._setPausedState(!0, P)) : this
        },
        unpause: function(P) {
            return o.active ? (o.manuallyPaused = !1,
            i[i.length - 1] !== this ? this : this._setPausedState(!1, P)) : this
        },
        updateContainerElements: function(P) {
            var O = [].concat(P).filter(Boolean);
            return o.containers = O.map(function(I) {
                return typeof I == "string" ? r.querySelector(I) : I
            }),
            o.active && d(),
            M(),
            this
        }
    },
    Object.defineProperties(a, {
        _isManuallyPaused: {
            value: function() {
                return o.manuallyPaused
            }
        },
        _setPausedState: {
            value: function(P, O) {
                if (o.paused === P)
                    return this;
                if (o.paused = P,
                P) {
                    var I = l(O, "onPause")
                      , N = l(O, "onPostPause");
                    I == null || I(),
                    L(),
                    M(),
                    N == null || N()
                } else {
                    var F = l(O, "onUnpause")
                      , H = l(O, "onPostUnpause");
                    F == null || F(),
                    d(),
                    S(),
                    M(),
                    H == null || H()
                }
                return this
            }
        }
    }),
    a.updateContainerElements(e),
    a
};
const gM = ["data-open"]
  , mM = ke({
    __name: "Modal",
    props: {
        isOpen: {
            type: Boolean
        }
    },
    emits: ["close"],
    setup(t, {emit: e}) {
        const n = t
          , r = e
          , i = `dialog-${Gy()}`
          , s = De(null)
          , o = De(null)
          , a = De(null)
          , l = De(null);
        return Zn("registerWindow", c => {
            if (!c.value)
                throw new Error("Dialog window not found");
            o.value = c.value
        }
        ),
        Zn("dialogId", i),
        Ur( () => {}
        ),
        zt( () => n.isOpen, c => {
            var f;
            c ? setTimeout( () => {
                var d;
                a.value = pM(s.value),
                (d = a.value) == null || d.activate()
            }
            , 0) : (f = a.value) == null || f.deactivate()
        }
        ),
        zt( () => n.isOpen, () => {
            setTimeout( () => {
                var c;
                (c = o.value) == null || c.classList.toggle("is-open", n.isOpen)
            }
            , 1)
        }
        ),
        (c, f) => c.isOpen ? (ge(),
        Ut("div", El({
            key: 0,
            ref_key: "$el",
            ref: s,
            "data-open": c.isOpen,
            role: "dialog",
            "aria-modal": !0,
            "aria-labelledby": i
        }, c.$attrs, {
            onKeydown: f[0] || (f[0] = tE(d => r("close"), ["esc"]))
        }), [pt("button", {
            ref_key: "$modalFocusGuard",
            ref: l,
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "1px",
                height: "1px",
                opacity: "0"
            }
        }, null, 512), fi(c.$slots, "default")], 16, gM)) : Ni("", !0)
    }
})
  , _M = {
    class: "modal__content"
}
  , yM = ke({
    __name: "Modal",
    props: {
        isOpen: {
            type: Boolean
        },
        modalWindowClass: {}
    },
    emits: ["close"],
    setup(t, {emit: e}) {
        const n = t
          , r = e;
        return zt( () => n.isOpen, i => {
            window.escroll.disabled = i
        }
        ),
        (i, s) => {
            const o = IL
              , a = NL
              , l = mM
              , u = Fw;
            return ge(),
            Fe(u, null, {
                default: ot( () => [(ge(),
                Fe(Uy, {
                    to: "#teleports"
                }, [pe(ju, {
                    name: "dialog",
                    duration: 600
                }, {
                    default: ot( () => [pe(l, {
                        "is-open": i.isOpen,
                        class: "modal",
                        onClose: s[2] || (s[2] = c => r("close"))
                    }, {
                        default: ot( () => [pe(o, {
                            class: "modal__backdrop",
                            onClick: s[0] || (s[0] = c => r("close"))
                        }), pe(a, {
                            class: Gi(["modal__wrapper", i.modalWindowClass])
                        }, {
                            default: ot( () => [pt("button", {
                                type: "button",
                                class: "modal__close-btn",
                                onClick: s[1] || (s[1] = c => r("close"))
                            }), pt("div", _M, [fi(i.$slots, "default", {}, void 0, !0)])]),
                            _: 3
                        }, 8, ["class"])]),
                        _: 3
                    }, 8, ["is-open"])]),
                    _: 3
                })]))]),
                _: 3
            })
        }
    }
})
  , vM = Tr(yM, [["__scopeId", "data-v-b96758b3"]])
  , t1 = () => {
    const t = kt("isShowThankYou", () => !1)
      , e = (r=2e3) => {
        setTimeout( () => {
            t.value = !1
        }
        , r)
    }
    ;
    return {
        isShowThankYou: t,
        showThankYou: r => {
            t.value = !0,
            e(r)
        }
        ,
        hideThankYou: e
    }
}
  , n1 = "3.7.7"
  , bM = n1
  , Xo = typeof Buffer == "function"
  , J_ = typeof TextDecoder == "function" ? new TextDecoder : void 0
  , Q_ = typeof TextEncoder == "function" ? new TextEncoder : void 0
  , wM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  , Sa = Array.prototype.slice.call(wM)
  , _c = (t => {
    let e = {};
    return t.forEach( (n, r) => e[n] = r),
    e
}
)(Sa)
  , TM = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
  , Ht = String.fromCharCode.bind(String)
  , Z_ = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : t => new Uint8Array(Array.prototype.slice.call(t, 0))
  , r1 = t => t.replace(/=/g, "").replace(/[+\/]/g, e => e == "+" ? "-" : "_")
  , i1 = t => t.replace(/[^A-Za-z0-9\+\/]/g, "")
  , s1 = t => {
    let e, n, r, i, s = "";
    const o = t.length % 3;
    for (let a = 0; a < t.length; ) {
        if ((n = t.charCodeAt(a++)) > 255 || (r = t.charCodeAt(a++)) > 255 || (i = t.charCodeAt(a++)) > 255)
            throw new TypeError("invalid character found");
        e = n << 16 | r << 8 | i,
        s += Sa[e >> 18 & 63] + Sa[e >> 12 & 63] + Sa[e >> 6 & 63] + Sa[e & 63]
    }
    return o ? s.slice(0, o - 3) + "===".substring(o) : s
}
  , Yp = typeof btoa == "function" ? t => btoa(t) : Xo ? t => Buffer.from(t, "binary").toString("base64") : s1
  , yh = Xo ? t => Buffer.from(t).toString("base64") : t => {
    let n = [];
    for (let r = 0, i = t.length; r < i; r += 4096)
        n.push(Ht.apply(null, t.subarray(r, r + 4096)));
    return Yp(n.join(""))
}
  , Mc = (t, e=!1) => e ? r1(yh(t)) : yh(t)
  , xM = t => {
    if (t.length < 2) {
        var e = t.charCodeAt(0);
        return e < 128 ? t : e < 2048 ? Ht(192 | e >>> 6) + Ht(128 | e & 63) : Ht(224 | e >>> 12 & 15) + Ht(128 | e >>> 6 & 63) + Ht(128 | e & 63)
    } else {
        var e = 65536 + (t.charCodeAt(0) - 55296) * 1024 + (t.charCodeAt(1) - 56320);
        return Ht(240 | e >>> 18 & 7) + Ht(128 | e >>> 12 & 63) + Ht(128 | e >>> 6 & 63) + Ht(128 | e & 63)
    }
}
  , EM = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
  , o1 = t => t.replace(EM, xM)
  , ey = Xo ? t => Buffer.from(t, "utf8").toString("base64") : Q_ ? t => yh(Q_.encode(t)) : t => Yp(o1(t))
  , Co = (t, e=!1) => e ? r1(ey(t)) : ey(t)
  , ty = t => Co(t, !0)
  , SM = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
  , CM = t => {
    switch (t.length) {
    case 4:
        var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)
          , n = e - 65536;
        return Ht((n >>> 10) + 55296) + Ht((n & 1023) + 56320);
    case 3:
        return Ht((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
    default:
        return Ht((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
    }
}
  , a1 = t => t.replace(SM, CM)
  , l1 = t => {
    if (t = t.replace(/\s+/g, ""),
    !TM.test(t))
        throw new TypeError("malformed base64.");
    t += "==".slice(2 - (t.length & 3));
    let e, n = "", r, i;
    for (let s = 0; s < t.length; )
        e = _c[t.charAt(s++)] << 18 | _c[t.charAt(s++)] << 12 | (r = _c[t.charAt(s++)]) << 6 | (i = _c[t.charAt(s++)]),
        n += r === 64 ? Ht(e >> 16 & 255) : i === 64 ? Ht(e >> 16 & 255, e >> 8 & 255) : Ht(e >> 16 & 255, e >> 8 & 255, e & 255);
    return n
}
  , Kp = typeof atob == "function" ? t => atob(i1(t)) : Xo ? t => Buffer.from(t, "base64").toString("binary") : l1
  , c1 = Xo ? t => Z_(Buffer.from(t, "base64")) : t => Z_(Kp(t).split("").map(e => e.charCodeAt(0)))
  , u1 = t => c1(f1(t))
  , kM = Xo ? t => Buffer.from(t, "base64").toString("utf8") : J_ ? t => J_.decode(c1(t)) : t => a1(Kp(t))
  , f1 = t => i1(t.replace(/[-_]/g, e => e == "-" ? "+" : "/"))
  , vh = t => kM(f1(t))
  , RM = t => {
    if (typeof t != "string")
        return !1;
    const e = t.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e)
}
  , d1 = t => ({
    value: t,
    enumerable: !1,
    writable: !0,
    configurable: !0
})
  , h1 = function() {
    const t = (e, n) => Object.defineProperty(String.prototype, e, d1(n));
    t("fromBase64", function() {
        return vh(this)
    }),
    t("toBase64", function(e) {
        return Co(this, e)
    }),
    t("toBase64URI", function() {
        return Co(this, !0)
    }),
    t("toBase64URL", function() {
        return Co(this, !0)
    }),
    t("toUint8Array", function() {
        return u1(this)
    })
}
  , p1 = function() {
    const t = (e, n) => Object.defineProperty(Uint8Array.prototype, e, d1(n));
    t("toBase64", function(e) {
        return Mc(this, e)
    }),
    t("toBase64URI", function() {
        return Mc(this, !0)
    }),
    t("toBase64URL", function() {
        return Mc(this, !0)
    })
}
  , PM = () => {
    h1(),
    p1()
}
  , AM = {
    version: n1,
    VERSION: bM,
    atob: Kp,
    atobPolyfill: l1,
    btoa: Yp,
    btoaPolyfill: s1,
    fromBase64: vh,
    toBase64: Co,
    encode: Co,
    encodeURI: ty,
    encodeURL: ty,
    utob: o1,
    btou: a1,
    decode: vh,
    isValid: RM,
    fromUint8Array: Mc,
    toUint8Array: u1,
    extendString: h1,
    extendUint8Array: p1,
    extendBuiltins: PM
};
function OM(t) {
    const e = AM.decode(t);
    return JSON.parse(e)
}
const $M = () => {
    const t = bn();
    return {
        public: OM(t.public.value),
        app: t.app
    }
}
  , LM = t => {
    const e = De(!1)
      , {showThankYou: n} = t1()
      , {selectedLang: r} = zp()
      , i = $M()
      , {toast: s} = Ww()
      , o = Wi()
      , a = u => {
        var y, b, m, _, w, E;
        const c = Object.entries(u)
          , f = S => {
            var L, A;
            return (A = (L = c.find(x => {
                var M, R;
                return x[0] === S || ((M = x[1]) == null ? void 0 : M.name) === S || ((R = x[1]) == null ? void 0 : R._key) === S
            }
            )) == null ? void 0 : L[1]) == null ? void 0 : A.value
        }
          , d = f("email") || ((b = (y = c.find(S => {
            var L;
            return /email/i.test(((L = S[1]) == null ? void 0 : L.name) || "")
        }
        )) == null ? void 0 : y[1]) == null ? void 0 : b.value)
          , h = f("phone") || ((_ = (m = c.find(S => {
            var L;
            return /(phone|tel)/i.test(((L = S[1]) == null ? void 0 : L.name) || "")
        }
        )) == null ? void 0 : m[1]) == null ? void 0 : _.value)
          , g = f("name") || ((E = (w = c.find(S => {
            var L;
            return /name/i.test(((L = S[1]) == null ? void 0 : L.name) || "")
        }
        )) == null ? void 0 : w[1]) == null ? void 0 : E.value)
          , p = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
          , v = /^\+?[0-9\s\-()]{7,}$/;
        return !!(g && p.test(d) && v.test(h))
    }
    ;
    return {
        submitHandler: async (u, c=300) => {
            if (e.value)
                return;
            if (!a(u)) {
                s.error("Please fill required fields");
                return
            }
            const f = Object.entries(u)
              , d = new FormData;
            d.append("sitelang", r.value || "-"),
            d.append("from", Oy(t) || o.path),
            f.forEach(h => {
                const [g,p] = h;
                d.append(g, (p == null ? void 0 : p.value) ?? "")
            }
            );
            try {
                e.value = !0;
                const h = i.public.FORMSPREE_KEY;
                if (!h)
                    throw new Error("FORMSPREE is not connected");
                const g = await fetch("https://formspree.io/f/" + h, {
                    method: "POST",
                    body: d,
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (!g.ok) {
                    const v = await g.text().catch( () => "");
                    throw new Error(`Form submit failed: ${g.status} ${v == null ? void 0 : v.slice(0, 200)}`)
                }
                let p = !0;
                try {
                    const v = await g.json();
                    typeof (v == null ? void 0 : v.ok) < "u" && (p = !!v.ok)
                } catch {
                    console.log("Error parsing Formspree response JSON")
                }
                if (!p)
                    throw new Error("FORMSPREE responded with ok=false");
                p && typeof window < "u" && (console.log("Pushing GTM event: Generated_lead"),
                window.dataLayer = window.dataLayer || [],
                window.dataLayer.push({
                    event: "Generated_lead"
                })),
                await hw(c),
                n()
            } catch (h) {
                console.log(h),
                s.error("something went wrong, please try again later")
            } finally {
                setTimeout( () => {
                    e.value = !1
                }
                , 500)
            }
        }
        ,
        isFetching: e
    }
}
  , MM = ke({
    __name: "FormModal",
    async setup(t) {
        let e, n;
        const {isFormModalOpened: r, formModalFrom: i} = Wp()
          , s = () => {
            r.value = !1
        }
          , {submitHandler: o, isFetching: a} = LM(i)
          , {story: l} = ([e,n] = Lu( () => qp()),
        e = await e,
        n(),
        e)
          , u = De({
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
          , c = async f => {
            await o(f),
            u.value.name.value = "",
            u.value.phone.value = "",
            u.value.email.value = "",
            r.value = !1
        }
        ;
        return (f, d) => {
            const h = OL
              , g = vM;
            return ge(),
            Fe(g, {
                "is-open": ee(r),
                onClose: s
            }, {
                default: ot( () => {
                    var p, v, y, b, m, _;
                    return [pe(h, {
                        modelValue: ee(u),
                        "onUpdate:modelValue": d[0] || (d[0] = w => Je(u) ? u.value = w : null),
                        "form-id": "global-form",
                        class: "global-form__form",
                        title: (v = (p = ee(l)) == null ? void 0 : p.content) == null ? void 0 : v.form_popup_title,
                        description: (b = (y = ee(l)) == null ? void 0 : y.content) == null ? void 0 : b.form_popup_text,
                        "show-button": !0,
                        "is-loading": ee(a),
                        "btn-text": (_ = (m = ee(l)) == null ? void 0 : m.content) == null ? void 0 : _.form_popup_button,
                        onSubmit: c
                    }, null, 8, ["modelValue", "title", "description", "is-loading", "btn-text"])]
                }
                ),
                _: 1
            }, 8, ["is-open"])
        }
    }
})
  , IM = {
    class: "slide-modal__wrapper"
}
  , DM = {
    class: "slide-modal__content"
}
  , NM = ke({
    __name: "SlideModal",
    props: {
        isOpen: {
            type: Boolean
        }
    },
    setup(t) {
        const e = t;
        return zt( () => e.isOpen, n => {
            if (n) {
                window.escroll.disabled = !0;
                return
            } else
                window.escroll.disabled = !1
        }
        ),
        (n, r) => (ge(),
        Fe(Uy, {
            to: "#teleports"
        }, [pt("div", {
            class: Gi(["slide-modal", {
                "slide-modal--open": n.isOpen
            }])
        }, [pt("div", IM, [pt("div", DM, [fi(n.$slots, "default", {}, void 0, !0)])])], 2)]))
    }
})
  , FM = Tr(NM, [["__scopeId", "data-v-a4752ac9"]])
  , jM = {
    class: "approve-modal"
}
  , BM = ["innerHTML"]
  , HM = ke({
    __name: "ApproveSlideModal",
    async setup(t) {
        let e, n;
        const {story: r} = ([e,n] = Lu( () => qp()),
        e = await e,
        n(),
        e)
          , {isShowThankYou: i} = t1();
        return (s, o) => {
            const a = FM;
            return ge(),
            Fe(a, {
                "is-open": ee(i)
            }, {
                default: ot( () => {
                    var l, u;
                    return [pt("div", jM, [pt("h2", {
                        class: "approve-modal__text",
                        innerHTML: (u = (l = ee(r)) == null ? void 0 : l.content) == null ? void 0 : u.thankyou_text
                    }, null, 8, BM)])]
                }
                ),
                _: 1
            }, 8, ["is-open"])
        }
    }
})
  , UM = Tr(HM, [["__scopeId", "data-v-21c345e1"]])
  , g1 = (t="RouteProvider") => ke({
    name: t,
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(e) {
        const n = e.renderKey
          , r = e.route
          , i = {};
        for (const s in e.route)
            Object.defineProperty(i, s, {
                get: () => n === e.renderKey ? e.route[s] : r[s],
                enumerable: !0
            });
        return Zn(Sl, si(i)),
        () => tt(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , VM = g1()
  , ny = new WeakMap
  , zM = ke({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(t, {attrs: e, slots: n, expose: r}) {
        const i = Ye()
          , s = De()
          , o = ut(Sl, null);
        let a;
        r({
            pageRef: s
        });
        const l = ut(r0, null);
        let u;
        const c = i.deferHydration();
        if (i.isHydrating) {
            const d = i.hooks.hookOnce("app:error", c);
            $t().beforeEach(d)
        }
        t.pageKey && zt( () => t.pageKey, (d, h) => {
            d !== h && i.callHook("page:loading:start")
        }
        );
        let f = !1;
        {
            const d = $t().beforeResolve( () => {
                f = !1
            }
            );
            qo( () => {
                d()
            }
            )
        }
        return () => tt(E0, {
            name: t.name,
            route: t.route,
            ...e
        }, {
            default: d => {
                const h = qM(o, d.route, d.Component)
                  , g = o && o.matched.length === d.route.matched.length;
                if (!d.Component) {
                    if (u && !g)
                        return u;
                    c();
                    return
                }
                if (u && l && !l.isCurrent(d.route))
                    return u;
                if (h && o && (!l || l != null && l.isCurrent(o)))
                    return g ? u : null;
                const p = Ad(d, t.pageKey)
                  , v = YM(o, d.route, d.Component);
                !i.isHydrating && a === p && !v && nr( () => {
                    f = !0,
                    i.callHook("page:loading:end")
                }
                ),
                a = p;
                const y = !!(t.transition ?? d.route.meta.pageTransition ?? zg)
                  , b = y && WM([t.transition, d.route.meta.pageTransition, zg, {
                    onBeforeLeave() {
                        i._runningTransition = !0
                    },
                    onAfterLeave() {
                        delete i._runningTransition,
                        i.callHook("page:transition:finish", d.Component)
                    }
                }])
                  , m = t.keepalive ?? d.route.meta.keepalive ?? fS;
                return u = Ow(y && b, Ik(m, tt(Bh, {
                    suspensible: !0,
                    onPending: () => i.callHook("page:start", d.Component),
                    onResolve: () => {
                        nr( () => i.callHook("page:finish", d.Component).then( () => {
                            if (!f && !v)
                                return f = !0,
                                i.callHook("page:loading:end")
                        }
                        ).finally(c))
                    }
                }, {
                    default: () => {
                        const _ = {
                            key: p || void 0,
                            vnode: n.default ? KM(n.default, d) : d.Component,
                            route: d.route,
                            renderKey: p || void 0,
                            trackRootNodes: y,
                            vnodeRef: s
                        };
                        if (!m)
                            return tt(VM, _);
                        const w = d.Component.type
                          , E = w;
                        let S = ny.get(E);
                        return S || (S = g1(w.name || w.__name),
                        ny.set(E, S)),
                        tt(S, _)
                    }
                }))).default(),
                u
            }
        })
    }
});
function WM(t) {
    const e = t.filter(Boolean).map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? np(n.onAfterLeave) : void 0
    }));
    return t0(...e)
}
function qM(t, e, n) {
    if (!t)
        return !1;
    const r = e.matched.findIndex(i => {
        var s;
        return ((s = i.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
    }
    );
    return !r || r === -1 ? !1 : e.matched.slice(0, r).some( (i, s) => {
        var o, a, l;
        return ((o = i.components) == null ? void 0 : o.default) !== ((l = (a = t.matched[s]) == null ? void 0 : a.components) == null ? void 0 : l.default)
    }
    ) || n && Ad({
        route: e,
        Component: n
    }) !== Ad({
        route: t,
        Component: n
    })
}
function YM(t, e, n) {
    return t ? e.matched.findIndex(i => {
        var s;
        return ((s = i.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
    }
    ) < e.matched.length - 1 : !1
}
function KM(t, e) {
    const n = t(e);
    return n.length === 1 ? tt(n[0]) : tt(Rt, void 0, n)
}
const GM = ke({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    setup(t, e) {
        return () => tt(Ii[t.name], t.layoutProps, e.slots)
    }
})
  , XM = {
    name: {
        type: [String, Boolean, Object],
        default: null
    },
    fallback: {
        type: [String, Object],
        default: null
    }
}
  , JM = ke({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: XM,
    setup(t, e) {
        const n = Ye()
          , r = ut(Sl)
          , i = r === Wi() ? Ak() : r
          , s = Ie( () => {
            let l = ee(t.name) ?? i.meta.layout ?? "default";
            return l && !(l in Ii) && t.fallback && (l = ee(t.fallback)),
            l
        }
        )
          , o = De();
        e.expose({
            layoutRef: o
        });
        const a = n.deferHydration();
        if (n.isHydrating) {
            const l = n.hooks.hookOnce("app:error", a);
            $t().beforeEach(l)
        }
        return () => {
            const l = s.value && s.value in Ii
              , u = i.meta.layoutTransition ?? uS;
            return Ow(l && u, {
                default: () => tt(Bh, {
                    suspensible: !0,
                    onResolve: () => {
                        nr(a)
                    }
                }, {
                    default: () => tt(QM, {
                        layoutProps: El(e.attrs, {
                            ref: o
                        }),
                        key: s.value || void 0,
                        name: s.value,
                        shouldProvide: !t.name,
                        hasTransition: !!u
                    }, e.slots)
                })
            }).default()
        }
    }
})
  , QM = ke({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean]
        },
        layoutProps: {
            type: Object
        },
        hasTransition: {
            type: Boolean
        },
        shouldProvide: {
            type: Boolean
        }
    },
    setup(t, e) {
        const n = t.name;
        return t.shouldProvide && Zn(r0, {
            isCurrent: r => n === (r.meta.layout ?? "default")
        }),
        () => {
            var r, i;
            return !n || typeof n == "string" && !(n in Ii) ? (i = (r = e.slots).default) == null ? void 0 : i.call(r) : tt(GM, {
                key: n,
                layoutProps: t.layoutProps,
                name: n
            }, e.slots)
        }
    }
});
var Ic = {
    exports: {}
}, Dc = {
    exports: {}
}, ZM = Dc.exports, ry;
function eI() {
    return ry || (ry = 1,
    function(t) {
        (function(e, n) {
            t.exports ? t.exports = n() : e.EvEmitter = n()
        }
        )(typeof window < "u" ? window : ZM, function() {
            function e() {}
            let n = e.prototype;
            return n.on = function(r, i) {
                if (!r || !i)
                    return this;
                let s = this._events = this._events || {}
                  , o = s[r] = s[r] || [];
                return o.includes(i) || o.push(i),
                this
            }
            ,
            n.once = function(r, i) {
                if (!r || !i)
                    return this;
                this.on(r, i);
                let s = this._onceEvents = this._onceEvents || {}
                  , o = s[r] = s[r] || {};
                return o[i] = !0,
                this
            }
            ,
            n.off = function(r, i) {
                let s = this._events && this._events[r];
                if (!s || !s.length)
                    return this;
                let o = s.indexOf(i);
                return o != -1 && s.splice(o, 1),
                this
            }
            ,
            n.emitEvent = function(r, i) {
                let s = this._events && this._events[r];
                if (!s || !s.length)
                    return this;
                s = s.slice(0),
                i = i || [];
                let o = this._onceEvents && this._onceEvents[r];
                for (let a of s)
                    o && o[a] && (this.off(r, a),
                    delete o[a]),
                    a.apply(this, i);
                return this
            }
            ,
            n.allOff = function() {
                return delete this._events,
                delete this._onceEvents,
                this
            }
            ,
            e
        })
    }(Dc)),
    Dc.exports
}
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
var tI = Ic.exports, iy;
function nI() {
    return iy || (iy = 1,
    function(t) {
        (function(e, n) {
            t.exports ? t.exports = n(e, eI()) : e.imagesLoaded = n(e, e.EvEmitter)
        }
        )(typeof window < "u" ? window : tI, function(n, r) {
            let i = n.jQuery
              , s = n.console;
            function o(d) {
                return Array.isArray(d) ? d : typeof d == "object" && typeof d.length == "number" ? [...d] : [d]
            }
            function a(d, h, g) {
                if (!(this instanceof a))
                    return new a(d,h,g);
                let p = d;
                if (typeof d == "string" && (p = document.querySelectorAll(d)),
                !p) {
                    s.error(`Bad element for imagesLoaded ${p || d}`);
                    return
                }
                this.elements = o(p),
                this.options = {},
                typeof h == "function" ? g = h : Object.assign(this.options, h),
                g && this.on("always", g),
                this.getImages(),
                i && (this.jqDeferred = new i.Deferred),
                setTimeout(this.check.bind(this))
            }
            a.prototype = Object.create(r.prototype),
            a.prototype.getImages = function() {
                this.images = [],
                this.elements.forEach(this.addElementImages, this)
            }
            ;
            const l = [1, 9, 11];
            a.prototype.addElementImages = function(d) {
                d.nodeName === "IMG" && this.addImage(d),
                this.options.background === !0 && this.addElementBackgroundImages(d);
                let {nodeType: h} = d;
                if (!h || !l.includes(h))
                    return;
                let g = d.querySelectorAll("img");
                for (let p of g)
                    this.addImage(p);
                if (typeof this.options.background == "string") {
                    let p = d.querySelectorAll(this.options.background);
                    for (let v of p)
                        this.addElementBackgroundImages(v)
                }
            }
            ;
            const u = /url\((['"])?(.*?)\1\)/gi;
            a.prototype.addElementBackgroundImages = function(d) {
                let h = getComputedStyle(d);
                if (!h)
                    return;
                let g = u.exec(h.backgroundImage);
                for (; g !== null; ) {
                    let p = g && g[2];
                    p && this.addBackground(p, d),
                    g = u.exec(h.backgroundImage)
                }
            }
            ,
            a.prototype.addImage = function(d) {
                let h = new c(d);
                this.images.push(h)
            }
            ,
            a.prototype.addBackground = function(d, h) {
                let g = new f(d,h);
                this.images.push(g)
            }
            ,
            a.prototype.check = function() {
                if (this.progressedCount = 0,
                this.hasAnyBroken = !1,
                !this.images.length) {
                    this.complete();
                    return
                }
                let d = (h, g, p) => {
                    setTimeout( () => {
                        this.progress(h, g, p)
                    }
                    )
                }
                ;
                this.images.forEach(function(h) {
                    h.once("progress", d),
                    h.check()
                })
            }
            ,
            a.prototype.progress = function(d, h, g) {
                this.progressedCount++,
                this.hasAnyBroken = this.hasAnyBroken || !d.isLoaded,
                this.emitEvent("progress", [this, d, h]),
                this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, d),
                this.progressedCount === this.images.length && this.complete(),
                this.options.debug && s && s.log(`progress: ${g}`, d, h)
            }
            ,
            a.prototype.complete = function() {
                let d = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0,
                this.emitEvent(d, [this]),
                this.emitEvent("always", [this]),
                this.jqDeferred) {
                    let h = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[h](this)
                }
            }
            ;
            function c(d) {
                this.img = d
            }
            c.prototype = Object.create(r.prototype),
            c.prototype.check = function() {
                if (this.getIsImageComplete()) {
                    this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                    return
                }
                this.proxyImage = new Image,
                this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin),
                this.proxyImage.addEventListener("load", this),
                this.proxyImage.addEventListener("error", this),
                this.img.addEventListener("load", this),
                this.img.addEventListener("error", this),
                this.proxyImage.src = this.img.currentSrc || this.img.src
            }
            ,
            c.prototype.getIsImageComplete = function() {
                return this.img.complete && this.img.naturalWidth
            }
            ,
            c.prototype.confirm = function(d, h) {
                this.isLoaded = d;
                let {parentNode: g} = this.img
                  , p = g.nodeName === "PICTURE" ? g : this.img;
                this.emitEvent("progress", [this, p, h])
            }
            ,
            c.prototype.handleEvent = function(d) {
                let h = "on" + d.type;
                this[h] && this[h](d)
            }
            ,
            c.prototype.onload = function() {
                this.confirm(!0, "onload"),
                this.unbindEvents()
            }
            ,
            c.prototype.onerror = function() {
                this.confirm(!1, "onerror"),
                this.unbindEvents()
            }
            ,
            c.prototype.unbindEvents = function() {
                this.proxyImage.removeEventListener("load", this),
                this.proxyImage.removeEventListener("error", this),
                this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this)
            }
            ;
            function f(d, h) {
                this.url = d,
                this.element = h,
                this.img = new Image
            }
            return f.prototype = Object.create(c.prototype),
            f.prototype.check = function() {
                this.img.addEventListener("load", this),
                this.img.addEventListener("error", this),
                this.img.src = this.url,
                this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"),
                this.unbindEvents())
            }
            ,
            f.prototype.unbindEvents = function() {
                this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this)
            }
            ,
            f.prototype.confirm = function(d, h) {
                this.isLoaded = d,
                this.emitEvent("progress", [this, this.element, h])
            }
            ,
            a.makeJQueryPlugin = function(d) {
                d = d || n.jQuery,
                d && (i = d,
                i.fn.imagesLoaded = function(h, g) {
                    return new a(this,h,g).jqDeferred.promise(i(this))
                }
                )
            }
            ,
            a.makeJQueryPlugin(),
            a
        })
    }(Ic)),
    Ic.exports
}
var rI = nI();
const iI = pw(rI)
  , sI = ke({
    __name: "app",
    setup(t) {
        const {isInEditor: e, isUseLoader: n} = Wp()
          , {isFirstLoad: r, init: i} = Aw()
          , s = async () => {
            window.escroll.disabled = !0,
            await i()
        }
        ;
        return Ur(async () => {
            if (await nr(),
            e.value || !n.value) {
                r.value = !1;
                return
            }
            const o = document.querySelector("[data-preload]");
            o ? iI(o, s) : s()
        }
        ),
        Ih(o => (console.error("Error in app.vue:", o),
        !1)),
        (o, a) => {
            const l = Uw
              , u = F$
              , c = Vw
              , f = V$
              , d = Y$
              , h = MM
              , g = UM
              , p = Fw
              , v = zM
              , y = JM;
            return ge(),
            Ut(Rt, null, [pe(c, null, {
                default: ot( () => [pe(l, {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), pe(u, {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico"
                })]),
                _: 1
            }), pe(f), pe(ju, {
                name: "loader"
            }, {
                default: ot( () => [ee(r) ? (ge(),
                Fe(d, {
                    key: 0
                })) : Ni("", !0)]),
                _: 1
            }), pe(y, null, {
                default: ot( () => [pe(h), pe(p, null, {
                    default: ot( () => [pe(g)]),
                    _: 1
                }), pe(v)]),
                _: 1
            })], 64)
        }
    }
})
  , oI = Yh("/images/error/1.png")
  , aI = {
    class: "n-found container"
}
  , lI = {
    class: "n-found__wrapper"
}
  , cI = ke({
    __name: "NotFound",
    emits: ["error"],
    setup(t, {emit: e}) {
        const n = e
          , {selectedLang: r, defaultLocale: i} = zp();
        return (s, o) => {
            const a = Kw;
            return ge(),
            Ut("section", aI, [pt("div", lI, [o[2] || (o[2] = kv('<div class="n-found__bg-wrapper" data-v-df7d866a><img class="n-found__bg" src="' + oI + '" alt="Error background" data-v-df7d866a><div class="n-found__layer" data-v-df7d866a></div></div><div class="n-found__content" data-v-df7d866a><p class="n-found__subtitle" data-v-df7d866a>404</p><h1 class="n-found__title" data-v-df7d866a>PAGE NOT FOUND</h1><p class="n-found__description" data-v-df7d866a> something is broken, please refresh the page or return to Homme page </p></div>', 2)), pe(a, {
                tag: "nuxt-link",
                href: ee(r) === ee(i)() ? "/" : "/" + ee(r),
                type: "button",
                class: "n-found__btn",
                onClick: o[0] || (o[0] = l => n("error"))
            }, {
                default: ot( () => o[1] || (o[1] = [Yo(" go to home page ")])),
                _: 1
            }, 8, ["href"])])])
        }
    }
})
  , uI = Tr(cI, [["__scopeId", "data-v-df7d866a"]])
  , fI = {
    key: 1
}
  , dI = ke({
    __name: "error",
    props: {
        error: Object
    },
    setup(t) {
        const e = () => s0({
            redirect: "/"
        });
        return (n, r) => {
            const i = uI;
            return ge(),
            Ut("main", null, [t.error.statusCode === 404 ? (ge(),
            Fe(i, {
                key: 0,
                onError: e
            })) : (ge(),
            Ut("p", fI, ys(t.error.statusCode), 1))])
        }
    }
})
  , hI = {
    key: 0
}
  , sy = {
    __name: "nuxt-root",
    setup(t) {
        const e = () => null
          , n = Ye()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const l = n.hooks.hookOnce("app:error", r);
            $t().beforeEach(l)
        }
        const i = !1;
        Zn(Sl, Wi()),
        n.hooks.callHookWith(l => l.map(u => u()), "vue:setup");
        const s = Bu()
          , o = !1;
        Ih( (l, u, c) => {
            if (n.hooks.callHook("vue:error", l, u, c).catch(f => console.error("[nuxt] Error in `vue:error` hook", f)),
            o0(l) && (l.fatal || l.unhandled))
                return n.runWithContext( () => cs(l)),
                !1
        }
        );
        const a = !1;
        return (l, u) => (ge(),
        Fe(Bh, {
            onResolve: ee(r)
        }, {
            default: ot( () => [ee(o) ? (ge(),
            Ut("div", hI)) : ee(s) ? (ge(),
            Fe(ee(dI), {
                key: 1,
                error: ee(s)
            }, null, 8, ["error"])) : ee(a) ? (ge(),
            Fe(ee(e), {
                key: 2,
                context: ee(a)
            }, null, 8, ["context"])) : ee(i) ? (ge(),
            Fe(ws(ee(i)), {
                key: 3
            })) : (ge(),
            Fe(ee(sI), {
                key: 4
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let oy;
{
    let t;
    oy = async function() {
        var o, a;
        if (t)
            return t;
        const r = !!(((o = window.__NUXT__) == null ? void 0 : o.serverRendered) ?? ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? sE(sy) : iE(sy)
          , i = _S({
            vueApp: r
        });
        async function s(l) {
            var u;
            await i.callHook("app:error", l),
            (u = i.payload).error || (u.error = Es(l))
        }
        r.config.errorHandler = s,
        i.hook("app:suspense:resolve", () => {
            r.config.errorHandler === s && (r.config.errorHandler = void 0)
        }
        );
        try {
            await bS(i, N$)
        } catch (l) {
            s(l)
        }
        try {
            await i.hooks.callHook("app:created", r),
            await i.hooks.callHook("app:beforeMount", r),
            r.mount(pS),
            await i.hooks.callHook("app:mounted", r),
            await nr()
        } catch (l) {
            s(l)
        }
        return r
    }
    ,
    t = oy().catch(e => {
        throw console.error("Error while mounting app:", e),
        e
    }
    )
}
export {SI as $, dT as A, ws as B, pw as C, Dn as D, EI as E, Rt as F, kI as G, Ur as H, qo as I, tt as J, Wp as K, LM as L, Uw as M, OL as N, Je as O, qp as P, Wi as Q, b$ as R, cs as S, hw as T, Oy as U, zt as V, MP as W, My as X, nr as Y, Pu as Z, Tr as _, pe as a, xe as a0, uL as a1, rl as a2, Yc as a3, fi as a4, yL as a5, mr as a6, oL as a7, vI as a8, Cv as a9, CI as aA, bI as aB, Xh as aC, je as aD, _v as aE, LI as aF, vL as aG, mL as aH, W_ as aI, rr as aJ, MI as aK, DI as aL, II as aM, t0 as aN, wI as aO, mi as aP, Pi as aQ, Wh as aR, $E as aS, xE as aT, Ye as aU, yI as aV, ju as aa, OI as ab, $I as ac, Mh as ad, ST as ae, Zn as af, mI as ag, NI as ah, wr as ai, vM as aj, Uy as ak, mM as al, IL as am, NL as an, RI as ao, kA as ap, h$ as aq, Ww as ar, zp as as, bn as at, zw as au, VP as av, Zx as aw, rL as ax, Jf as ay, xI as az, qw as b, Ut as c, ke as d, Dw as e, pt as f, Fe as g, Ni as h, ee as i, AT as j, Ie as k, ot as l, Kw as m, Gi as n, ge as o, Yo as p, Fw as q, De as r, Lu as s, ys as t, kt as u, P1 as v, FI as w, El as x, B$ as y, _I as z};
