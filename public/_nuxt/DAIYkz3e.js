import {d, r as g, c as a, o as n, f as r, n as o, i as s, t as u, F as v, j as y, h as b, _ as C} from "./C5bBxmVo.js";
const k = {
    class: "category-filter"
}
  , h = ["onClick"]
  , A = {
    key: 0,
    role: "separator",
    "aria-orientation": "vertical"
}
  , F = d({
    __name: "CategoryFilter",
    props: {
        categories: {},
        labelAll: {}
    },
    emits: ["filter", "getAll"],
    setup(B, {emit: p}) {
        const i = p
          , e = g(null)
          , m = t => {
            e.value = t,
            i("filter", t)
        }
          , f = () => {
            e.value = null,
            i("getAll")
        }
        ;
        return (t, c) => (n(),
        a("ul", k, [r("li", {
            class: o(["category-filter__item", {
                "category-filter__item--active": s(e) === null
            }])
        }, [r("button", {
            type: "button",
            class: o(["category-filter__btn underline", {
                "underline--active": s(e) === null
            }]),
            onClick: f
        }, u(t.labelAll), 3), c[0] || (c[0] = r("span", {
            role: "separator",
            "aria-orientation": "vertical"
        }, "|", -1))], 2), (n(!0),
        a(v, null, y(t.categories, (l, _) => (n(),
        a("li", {
            key: _,
            class: o(["category-filter__item", {
                "category-filter__item--active": s(e) === l
            }])
        }, [r("button", {
            type: "button",
            class: o(["category-filter__btn underline", {
                "underline--active": s(e) === l
            }]),
            onClick: N => m(l)
        }, u(l), 11, h), t.categories.length - 1 !== _ ? (n(),
        a("span", A, "|")) : b("", !0)], 2))), 128))]))
    }
})
  , j = C(F, [["__scopeId", "data-v-688578a0"]]);
export {j as _};
