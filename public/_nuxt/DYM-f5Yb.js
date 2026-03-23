import {_ as r, c as u, o as v, f as a, d as m, a as f, r as _, k as h, U as w, ah as L} from "./C5bBxmVo.js";
const x = {}
  , b = {
    width: "23",
    height: "22",
    viewBox: "0 0 23 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
function V(s, n) {
    return v(),
    u("svg", b, n[0] || (n[0] = [a("path", {
        d: "M11.9883 -0.00292969L1.97339 9.99855H1.97108V10.0009L0.970703 11L11.9863 22.001L13.4023 20.5868L4.80284 11.9986H22.9707V9.99855H4.80573L13.4044 1.41128L11.9883 -0.00292969Z",
        fill: "white"
    }, null, -1)]))
}
const $ = r(x, [["render", V]])
  , H = {}
  , k = {
    width: "23",
    height: "22",
    viewBox: "0 0 23 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
function B(s, n) {
    return v(),
    u("svg", k, n[0] || (n[0] = [a("path", {
        d: "M11.0117 -0.00292969L21.0266 9.99855H21.0289V10.0009L22.0293 11L11.0137 22.001L9.59766 20.5868L18.1972 11.9986H0.0292969V9.99855H18.1943L9.59563 1.41128L11.0117 -0.00292969Z",
        fill: "white"
    }, null, -1)]))
}
const N = r(H, [["render", B]])
  , C = {
    ref: "el",
    class: "floating-nav"
}
  , I = {
    class: "floating-nav__btns"
}
  , y = m({
    __name: "SliderNavigation",
    emits: ["navigate"],
    setup(s, {emit: n}) {
        const t = n;
        return (l, e) => {
            const o = $
              , i = N;
            return v(),
            u("div", C, [a("div", I, [a("button", {
                type: "button",
                class: "floating-nav__btn",
                "aria-label": "previous slide",
                onClick: e[0] || (e[0] = c => t("navigate", -1))
            }, [f(o, {
                class: "floating-nav__icon"
            })]), a("button", {
                type: "button",
                class: "floating-nav__btn",
                "aria-label": "next slide",
                onClick: e[1] || (e[1] = c => t("navigate", 1))
            }, [f(i, {
                class: "floating-nav__icon"
            })])])], 512)
        }
    }
})
  , M = r(y, [["__scopeId", "data-v-c9aac36f"]])
  , S = (s, n=700) => {
    const t = _(0)
      , l = _(null)
      , e = _(1)
      , o = h( () => w(s))
      , i = () => {
        l.value = t.value,
        t.value = (t.value - 1 + o.value) % o.value,
        e.value = -1
    }
      , c = () => {
        l.value = t.value,
        t.value = (t.value + 1) % o.value,
        e.value = 1
    }
      , d = g => {
        g === 1 ? c() : i()
    }
      , p = L(d, n);
    return {
        current: t,
        prev: l,
        direction: e,
        handlePrev: i,
        handleNext: c,
        navigate: d,
        throttledNavigate: p
    }
}
;
export {M as _, $ as a, N as b, S as u};
