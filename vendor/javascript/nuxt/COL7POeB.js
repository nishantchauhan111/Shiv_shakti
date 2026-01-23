import {_, c as m, o as d, f, r as u, D as p, K as v, H as h, ai as w, ao as H, V as y, d as k, a as B, x as C} from "./C5bBxmVo.js";
import {u as V} from "./CdJ2rVPI.js";
import {_ as b} from "./DuVedMQ2.js";
const I = {}
  , q = {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
function T(o, t) {
    return d(),
    m("svg", q, t[0] || (t[0] = [f("path", {
        d: "M8.25 9.75V17.25H9.75V9.75H17.25V8.25H9.75V0.75H8.25V8.25H0.75V9.75H8.25Z",
        fill: "#202020"
    }, null, -1)]))
}
const R = _(I, [["render", T]]);
function W(o, t) {
    const r = u(!1)
      , e = () => {
        var l, g;
        const n = (l = o.value) == null ? void 0 : l.getBoundingClientRect()
          , a = (g = t.value) == null ? void 0 : g.getBoundingClientRect();
        return !n || !a ? !1 : !(n.right < a.left || n.left > a.right || n.bottom < a.top || n.top > a.bottom)
    }
      , s = () => {
        e() !== r.value && (r.value = e())
    }
    ;
    return {
        isIntersecting: r,
        init: () => {
            p.ticker.add(s)
        }
        ,
        cleanup: () => {
            p.ticker.remove(s)
        }
    }
}
const S = o => {
    const t = H(12)
      , {registerBlackHeaderTrigger: r, unregisterBlackHeaderTrigger: e, $headerRef: s} = V()
      , {isMenuOpened: i} = v()
      , {isIntersecting: c, init: n, cleanup: a} = W(o, s)
      , l = () => {
        c.value && !i.value ? r(t) : e(t)
    }
    ;
    h( () => {
        n(),
        l()
    }
    ),
    w( () => {
        a(),
        e(t)
    }
    ),
    y([c, i], l, {
        immediate: !0
    })
}
  , $ = k({
    __name: "ParallaxImg",
    props: {
        src: {},
        scale: {},
        alt: {},
        width: {},
        height: {},
        storyblok: {
            type: Boolean
        },
        format: {},
        quality: {},
        preload: {
            type: Boolean
        },
        imageAttrs: {}
    },
    setup(o) {
        const t = u(null)
          , r = u(null);
        return h( () => {
            !t.value || !r.value || window.innerWidth < 860 || p.fromTo(r.value, {
                y: "-20%"
            }, {
                y: "5%",
                ease: "none",
                scrollTrigger: {
                    trigger: t.value,
                    start: () => "top bottom",
                    end: () => `bottom+=${window.innerHeight} bottom`,
                    scrub: !0
                }
            })
        }
        ),
        (e, s) => {
            const i = b;
            return d(),
            m("div", {
                ref_key: "imgWrapper",
                ref: t,
                class: "p-img-wrapper"
            }, [f("div", {
                ref_key: "imgContainer",
                ref: r,
                class: "p-img-container"
            }, [B(i, C(e.imageAttrs, {
                class: "parallax-img",
                src: e.src,
                alt: e.alt,
                "data-scale": e.scale,
                quality: e.quality,
                format: e.format,
                width: e.width,
                height: e.height,
                preload: e.preload
            }), null, 16, ["src", "alt", "data-scale", "quality", "format", "width", "height", "preload"])], 512)], 512)
        }
    }
});
export {R as _, $ as a, S as u};
