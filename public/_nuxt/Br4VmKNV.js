import {D as x, C as ut, ap as lt, X as F, r as S, H as Z, T as ct, I as vt, V as tt, Y, u as ft, k as gt} from "./C5bBxmVo.js";
import {u as pt} from "./DYM-f5Yb.js";
import {u as dt} from "./DsoqDRZR.js";
const q = t => (t == null ? void 0 : t.querySelectorAll(".word")) ?? []
  , G = (t, o, n, u=0) => {
    if (!t.length)
        return;
    const v = o ? "130%" : "-130%";
    x.fromTo(t, {
        y: v
    }, {
        y: "0%",
        duration: n,
        delay: u
    })
}
  , H = (t, o, n, u=0) => {
    if (!t.length)
        return;
    const v = o ? "-130%" : "130%";
    x.to(t, {
        y: v,
        duration: n,
        delay: u
    })
}
;
function D(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var W = {
    exports: {}
}, J;
function mt() {
    return J || (J = 1,
    function(t, o) {
        (function(n) {
            t.exports = n()
        }
        )(function() {
            return function n(u, v, d) {
                function s(r, c) {
                    if (!v[r]) {
                        if (!u[r]) {
                            var f = typeof D == "function" && D;
                            if (!c && f)
                                return f(r, !0);
                            if (l)
                                return l(r, !0);
                            var m = new Error("Cannot find module '" + r + "'");
                            throw m.code = "MODULE_NOT_FOUND",
                            m
                        }
                        var h = v[r] = {
                            exports: {}
                        };
                        u[r][0].call(h.exports, function(I) {
                            var A = u[r][1][I];
                            return s(A || I)
                        }, h, h.exports, n, u, v, d)
                    }
                    return v[r].exports
                }
                for (var l = typeof D == "function" && D, a = 0; a < d.length; a++)
                    s(d[a]);
                return s
            }({
                1: [function(n, u, v) {
                    function d() {}
                    d.prototype = {
                        on: function(s, l, a) {
                            var r = this.e || (this.e = {});
                            return (r[s] || (r[s] = [])).push({
                                fn: l,
                                ctx: a
                            }),
                            this
                        },
                        once: function(s, l, a) {
                            var r = this;
                            function c() {
                                r.off(s, c),
                                l.apply(a, arguments)
                            }
                            return c._ = l,
                            this.on(s, c, a)
                        },
                        emit: function(s) {
                            var l = [].slice.call(arguments, 1)
                              , a = ((this.e || (this.e = {}))[s] || []).slice()
                              , r = 0
                              , c = a.length;
                            for (r; r < c; r++)
                                a[r].fn.apply(a[r].ctx, l);
                            return this
                        },
                        off: function(s, l) {
                            var a = this.e || (this.e = {})
                              , r = a[s]
                              , c = [];
                            if (r && l)
                                for (var f = 0, m = r.length; f < m; f++)
                                    r[f].fn !== l && r[f].fn._ !== l && c.push(r[f]);
                            return c.length ? a[s] = c : delete a[s],
                            this
                        }
                    },
                    u.exports = d,
                    u.exports.TinyEmitter = d
                }
                , {}]
            }, {}, [1])(1)
        })
    }(W)),
    W.exports
}
var ht = mt();
const yt = ut(ht)
  , Q = t => {
    t != null && t.length && (t.forEach(o => {
        o.revert()
    }
    ),
    t = [])
}
  , z = t => {
    const o = [];
    return t == null || t.forEach( (n, u) => {
        const v = new lt(n,{
            splitTypeTypes: "lines,words"
        });
        o.push(v),
        u !== 0 && x.set(n.querySelectorAll(".word"), {
            y: "120%"
        })
    }
    ),
    o
}
  , Mt = (t, o) => {
    const n = F(t)
      , u = F(o)
      , {current: v, prev: d, direction: s, throttledNavigate: l} = pt(u.value)
      , a = S(null)
      , r = S(null)
      , c = S(null)
      , f = S(null)
      , m = S(null)
      , h = S(null);
    let I = []
      , A = [];
    const j = new yt
      , et = async () => {
        var e;
        (e = a.value) == null || e.forEach( (y, i) => {
            i > 0 && (x.set(y, {
                clipPath: "inset(0 0 0 100%)"
            }),
            x.set(r[i], {
                scale: 1.3
            }),
            x.set(c.value[i], {
                clipPath: "inset(0 0 0 100%)"
            }),
            x.set(f.value[i], {
                scale: 1.3
            }))
        }
        ),
        Q(I),
        Q(A),
        await Y(),
        I = z(m.value),
        A = z(h.value)
    }
      , rt = e => {
        j.on("init", () => {
            e()
        }
        )
    }
    ;
    Z(async () => {
        await ct(500);
        const e = n.value;
        a.value = e == null ? void 0 : e.querySelectorAll("[data-f-bg]"),
        r.value = e == null ? void 0 : e.querySelectorAll("[data-f-bg-i]"),
        c.value = e == null ? void 0 : e.querySelectorAll("[data-f-img]"),
        f.value = e == null ? void 0 : e.querySelectorAll("[data-f-img-i]"),
        m.value = e == null ? void 0 : e.querySelectorAll("[data-f-title]"),
        h.value = e == null ? void 0 : e.querySelectorAll("[data-f-text]"),
        await et(),
        window.addEventListener("keydown", k),
        j.emit("init")
    }
    ),
    vt( () => {
        window.removeEventListener("keydown", k)
    }
    );
    const k = e => {
        e.key === "ArrowLeft" ? l(-1) : e.key === "ArrowRight" && l(1)
    }
    ;
    return tt(v, async () => {
        await Y();
        const e = v.value
          , y = d.value
          , i = {
            current: {
                bg: a.value[e],
                bgImg: r.value[e],
                item: c.value[e],
                itemImg: f.value[e],
                title: m.value[e],
                text: h.value[e]
            },
            prev: {
                bg: a.value[y],
                bgImg: r.value[y],
                item: c.value[y],
                itemImg: f.value[y],
                title: m.value[y],
                text: h.value[y]
            }
        }
          , nt = 1.3
          , T = 1
          , g = x.timeline({
            defaults: {
                duration: nt
            }
        })
          , E = s.value === 1
          , b = "inset(0 0 0 100%)"
          , R = "inset(0 100% 0 0)";
        g.set(i.current.bg, {
            clipPath: E ? b : R
        }),
        g.set(i.current.item, {
            clipPath: E ? b : R
        }),
        g.set(i.current.bgImg, {
            scale: 1.3
        }),
        g.set(i.current.itemImg, {
            scale: 1.3
        }),
        i.prev.bg && g.to(i.prev.bg, {
            clipPath: E ? R : b
        }, 0),
        i.prev.bgImg && g.to(i.prev.bgImg, {
            scale: 1.3
        }, 0),
        i.prev.item && g.to(i.prev.item, {
            clipPath: E ? R : b
        }, 0),
        i.prev.itemImg && g.to(i.prev.itemImg, {
            scale: 1.3
        }, 0),
        g.to(i.current.bg, {
            clipPath: "inset(0 0% 0 0%)"
        }, 0),
        g.to(i.current.item, {
            clipPath: "inset(0 0% 0 0%)"
        }, 0),
        g.to(i.current.bgImg, {
            scale: 1
        }, 0),
        g.to(i.current.itemImg, {
            scale: 1
        }, 0);
        const it = q(i.current.title)
          , ot = q(i.prev.title)
          , at = q(i.current.text)
          , st = q(i.prev.text);
        H(ot, E, T, 0),
        G(it, E, T, 0),
        H(st, E, T, 0),
        G(at, E, T, 0)
    }
    ),
    {
        current: v,
        prev: d,
        direction: s,
        throttledNavigate: l,
        onInit: rt
    }
}
;
var Et = "undefined"
  , wt = "object"
  , O = "browser"
  , K = "cpu"
  , X = "device"
  , _ = "engine"
  , P = "os"
  , w = "name"
  , C = "type"
  , $ = "vendor"
  , p = "version"
  , B = "architecture"
  , N = "major"
  , V = "model"
  , xt = "console"
  , St = "mobile"
  , It = "tablet"
  , At = "smarttv"
  , Tt = "wearable"
  , bt = "embedded"
  , Rt = typeof window !== Et
  , L = Rt && window.navigator ? window.navigator : void 0;
L && L.userAgentData && L.userAgentData;
var U = function(t) {
    for (var o = {}, n = 0; n < t.length; n++)
        o[t[n].toUpperCase()] = t[n];
    return o
}
  , M = function(t) {
    for (var o in t) {
        var n = t[o];
        typeof n == wt && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0
    }
    return this
};
(function() {
    var t = {
        init: {},
        isIgnore: {},
        isIgnoreRgx: {},
        toString: {}
    };
    return M.call(t.init, [[O, [w, p, N, C]], [K, [B]], [X, [C, V, $]], [_, [w, p]], [P, [w, p]]]),
    M.call(t.isIgnore, [[O, [p, N]], [_, [p]], [P, [p]]]),
    M.call(t.isIgnoreRgx, [[O, / ?browser$/i], [P, / ?os$/i]]),
    M.call(t.toString, [[O, [w, p]], [K, [B]], [X, [$, V]], [_, [w, p]], [P, [w, p]]]),
    t
}
)();
U([w, p, N, C]);
U([B]);
U([V, $, C, xt, St, At, It, Tt, bt]);
U([w, p]);
function Ct(t) {
    const o = ft("isSSRMatch", () => !1);
    {
        const n = dt(t);
        Z( () => {
            o.value !== n.value && (o.value = n.value)
        }
        ),
        tt(n, u => {
            o.value = u
        }
        )
    }
    return gt( () => o.value)
}
export {Ct as a, Mt as u};
