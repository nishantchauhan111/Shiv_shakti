import {_ as S} from "./DuVedMQ2.js";
import {u as k, _ as C} from "./DYM-f5Yb.js";
import {d as N, r as I, V as L, H as $, ai as x, c as _, o as u, f as v, a as h, F as B, j as E, n as F, i as d, D as P, _ as V} from "./C5bBxmVo.js";
const q = {
    ref: "el",
    class: "full-slider"
}
  , A = {
    class: "full-slider__wrapper"
}
  , D = {
    class: "full-slider__list"
}
  , j = N({
    __name: "FullImageSlider",
    props: {
        images: {}
    },
    setup(w) {
        const g = w
          , a = I([])
          , {prev: r, current: l, direction: y, throttledNavigate: c} = k(g.images.length);
        L(l, async () => {
            const s = a.value[l.value]
              , o = a.value[r.value]
              , n = s.querySelector("img")
              , i = o == null ? void 0 : o.querySelector("img")
              , t = y.value
              , e = P.timeline({
                overwrite: !0
            })
              , m = "inset(0 0 0 100%)"
              , f = "inset(0 100% 0 0)";
            e.set(s, {
                clipPath: t === 1 ? m : f
            }),
            e.set(n, {
                scale: 1.3
            }),
            o && (e.to(o, {
                clipPath: t === 1 ? f : m,
                duration: 1.5,
                ease: "power2.out"
            }, 0),
            e.to(i, {
                scale: 1.3,
                duration: 1.5,
                ease: "power2.out"
            }, 0)),
            e.to(s, {
                clipPath: "inset(0 0% 0 0%)",
                duration: 1.5,
                ease: "power2.out"
            }, 0),
            e.to(n, {
                scale: 1,
                duration: 1.5,
                ease: "power2.out"
            }, 0)
        }
        );
        const p = s => {
            s.key === "ArrowLeft" ? c(-1) : s.key === "ArrowRight" && c(1)
        }
        ;
        return $( () => {
            r.value = a.value.length - 1,
            window.addEventListener("keydown", p)
        }
        ),
        x( () => {
            window.removeEventListener("keydown", p)
        }
        ),
        (s, o) => {
            const n = S
              , i = C;
            return u(),
            _("div", q, [v("div", A, [v("ul", D, [(u(!0),
            _(B, null, E(s.images, (t, e) => (u(),
            _("li", {
                key: e,
                ref_for: !0,
                ref_key: "$items",
                ref: a,
                class: F(["full-slider__item", {
                    active: e === d(l),
                    prev: e === d(r)
                }])
            }, [h(n, {
                src: t == null ? void 0 : t.filename,
                alt: t == null ? void 0 : t.alt,
                class: "full-slider__img",
                width: 1920
            }, null, 8, ["src", "alt"])], 2))), 128))]), h(i, {
                onNavigate: d(c)
            }, null, 8, ["onNavigate"])])], 512)
        }
    }
})
  , R = V(j, [["__scopeId", "data-v-099c4934"]]);
export {R as _};
