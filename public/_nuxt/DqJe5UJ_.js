import {_ as ce} from "./Dt8wSEj9.js";
import {d as B, c as I, o as _, n as T, f as n, p as E, t as w, _ as Q, r as h, H as O, a0 as _e, I as se, h as M, g as k, a as q, i as a, l as F, a1 as ie, m as ae, a2 as W, a3 as Y, k as N, V as ne, a4 as pe, Z as le, D as me, F as re, j as ue, N as ve, a5 as fe, a6 as ze, L as be, E as oe, O as he, a7 as xe} from "./C5bBxmVo.js";
import {_ as ge} from "./DpMqWF5x.js";
import {_ as ye} from "./DuVedMQ2.js";
const qe = B({
    __name: "BuildAddress",
    props: {
        color: {
            default: "light"
        },
        text: {}
    },
    setup(m) {
        return (r, t) => (_(),
        I("p", {
            class: T(["build-address", r.color === "light" ? "build-address--light" : "build-address--dark"])
        }, [t[0] || (t[0] = n("span", null, null, -1)), E(" " + w(r.text), 1)], 2))
    }
})
  , we = Q(qe, [["__scopeId", "data-v-ca024373"]])
  , Ie = {
    class: "d-video__wrapper"
}
  , $e = {
    class: "d-video__title"
}
  , Ve = {
    class: "d-video__videos"
}
  , ke = {
    class: "d-video__landscape"
}
  , Se = {
    class: "d-video__phone"
}
  , Ae = {
    class: "d-video__phone-wrapper"
}
  , Ce = ["href"]
  , Le = {
    key: 0,
    class: "d-video__address"
}
  , rt = B({
    __name: "DoubleVideo",
    props: {
        title: {},
        asset: {},
        addressText: {},
        button: {},
        isYoutube: {
            type: Boolean
        }
    },
    setup(m) {
        const r = h(!1)
          , t = h(!1)
          , o = h(null)
          , l = h([])
          , v = h(null);
        return O( () => {
            if (!o.value)
                return;
            const s = o.value.querySelectorAll("video");
            l.value = Array.from(s),
            v.value = _e.create({
                trigger: o.value,
                start: () => `top-=${window.innerHeight * .75} top`,
                end: () => `bottom+=${window.innerHeight * .75} bottom`,
                onUpdate: p => {
                    const d = p.isActive;
                    t.value || (r.value = d)
                }
            })
        }
        ),
        se( () => {
            var s;
            (s = v.value) == null || s.kill()
        }
        ),
        (s, p) => {
            var x, g, $, L, V, A;
            const d = ce
              , e = ie
              , c = ae
              , S = we;
            return _(),
            I("section", {
                ref_key: "sectionRef",
                ref: o,
                class: "d-video"
            }, [n("div", Ie, [n("h2", $e, w(s.title), 1), n("div", Ve, [n("div", ke, [q(d, {
                "video-attributes": {
                    preload: "auto"
                },
                url: (x = s.asset) == null ? void 0 : x.filename,
                "is-playing": a(r)
            }, null, 8, ["url", "is-playing"])]), n("div", Se, [n("div", Ae, [p[0] || (p[0] = n("div", {
                class: "d-video__phone-camera"
            }, null, -1)), q(d, {
                url: (g = s.asset) == null ? void 0 : g.filename,
                "is-playing": a(r)
            }, null, 8, ["url", "is-playing"]), s.isYoutube ? (_(),
            I("a", {
                key: 0,
                href: (L = ($ = s.button) == null ? void 0 : $.link) == null ? void 0 : L.url,
                target: "_blank",
                "aria-label": "Open Youtube",
                rel: "noopener noreferrer",
                type: "button",
                class: "d-video__youtube"
            }, [q(ge)], 8, Ce)) : M("", !0)])])]), s.button ? (_(),
            k(c, {
                key: 0,
                tag: "a",
                href: (A = (V = s.button) == null ? void 0 : V.link) == null ? void 0 : A.url,
                type: "button",
                class: "d-video__btn"
            }, {
                default: F( () => {
                    var i;
                    return [E(w((i = s.button) == null ? void 0 : i.label) + " ", 1), n("span", null, [q(e)])]
                }
                ),
                _: 1
            }, 8, ["href"])) : M("", !0)]), s.addressText ? (_(),
            I("div", Le, [q(S, {
                text: s.addressText
            }, null, 8, ["text"])])) : M("", !0)], 512)
        }
    }
})
  , Be = {
    class: "quiz-radio__image-container"
}
  , Qe = ["aria-label"]
  , Fe = {
    class: "quiz-radio__desc"
}
  , Re = B({
    __name: "QuizRadio",
    props: W({
        item: {},
        isActive: {
            type: Boolean
        }
    }, {
        modelValue: {},
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(m) {
        const r = m
          , t = Y(m, "modelValue")
          , o = () => {
            var l;
            t.value = (l = r.item) == null ? void 0 : l.label
        }
        ;
        return (l, v) => {
            var p, d, e, c, S, x;
            const s = ye;
            return _(),
            I("li", {
                class: T(["quiz-radio", {
                    "quiz-radio--active": l.isActive
                }]),
                onClick: o
            }, [n("div", Be, [q(s, {
                src: (d = (p = l.item) == null ? void 0 : p.asset) == null ? void 0 : d.filename,
                alt: (c = (e = l.item) == null ? void 0 : e.asset) == null ? void 0 : c.alt,
                class: "quiz-radio__img",
                width: 500
            }, null, 8, ["src", "alt"]), n("button", {
                type: "button",
                "aria-label": (S = l.item) == null ? void 0 : S.label,
                class: T(["quiz-radio__circled-btn", {
                    "quiz-radio__circled-btn--active": l.isActive
                }]),
                onClick: o
            }, v[0] || (v[0] = [n("span", null, null, -1), n("span", null, null, -1)]), 10, Qe)]), n("p", Fe, w((x = l.item) == null ? void 0 : x.label), 1)], 2)
        }
    }
})
  , Te = Q(Re, [["__scopeId", "data-v-eb20cdcc"]])
  , He = {
    class: "quiz-step__wrapper"
}
  , Me = {
    class: "quiz-step__content"
}
  , Ne = {
    class: "quiz-step__count"
}
  , Pe = {
    class: "quiz-step__quiz-name"
}
  , Ue = B({
    __name: "QuizStepWrapper",
    props: {
        idx: {},
        size: {},
        activeIdx: {},
        prevIdx: {},
        title: {}
    },
    emits: ["animating"],
    setup(m, {emit: r}) {
        const t = m
          , o = r
          , l = h(null)
          , v = h(!1)
          , s = N( () => Math.abs(t.activeIdx - t.idx))
          , p = N( () => t.activeIdx > t.prevIdx ? "forward" : "reverse")
          , d = async () => {
            const e = l.value;
            if (!e)
                return;
            v.value = !0;
            const c = me.timeline({
                onComplete: () => {
                    v.value = !1
                }
            })
              , S = t.activeIdx === t.idx
              , x = t.prevIdx === t.idx
              , g = s.value
              , $ = 20
              , L = .93
              , V = 1.5
              , A = g - 1
              , i = p.value === "forward";
            if (S)
                c.set(e, {
                    zIndex: 30,
                    opacity: 1
                }),
                c.fromTo(e, {
                    scale: L,
                    yPercent: 100
                }, {
                    duration: V,
                    scale: 1,
                    yPercent: 0,
                    ease: "power2.out"
                });
            else {
                let u = $;
                i && x ? u = $ - A : u = $ - g,
                c.set(e, {
                    zIndex: u,
                    opacity: 1
                }),
                c.fromTo(e, {
                    scale: 1 - A * .07,
                    yPercent: -3 * g - 1
                }, {
                    duration: V,
                    scale: 1 - g * .07,
                    yPercent: -3 * g,
                    ease: "power2.out"
                }),
                g > 2 && c.to(e, {
                    opacity: 0,
                    duration: V / 3
                }, 0)
            }
        }
        ;
        return ne( () => t.activeIdx, () => {
            d()
        }
        ),
        ne(v, e => {
            o("animating", e)
        }
        ),
        O( () => {
            d()
        }
        ),
        (e, c) => (_(),
        I("div", {
            ref_key: "itemRef",
            ref: l,
            class: T(["quiz-step", {
                "quiz-step--active": t.activeIdx === t.idx
            }]),
            style: le({
                boxShadow: a(s) >= 1 ? "0 0 20px 0 rgba(0, 0, 0, 0.3)" : "none"
            })
        }, [c[1] || (c[1] = n("div", {
            class: "quiz-step__overlay"
        }, null, -1)), n("div", He, [n("div", Me, [n("p", Ne, [n("span", null, w(e.idx + 1), 1), c[0] || (c[0] = E("/")), n("span", null, w(e.size), 1)]), n("h3", Pe, w(e.title), 1), pe(e.$slots, "default", {}, void 0, !0)])])], 6))
    }
})
  , de = Q(Ue, [["__scopeId", "data-v-c45912ed"]])
  , Ee = {
    class: "quiz-step__list"
}
  , Oe = B({
    __name: "QuizStep",
    props: W({
        quizStep: {},
        idx: {},
        size: {},
        activeIdx: {},
        prevIdx: {}
    }, {
        modelValue: {},
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(m) {
        const r = Y(m, "modelValue");
        return (t, o) => {
            var s;
            const l = Te
              , v = de;
            return _(),
            k(v, {
                idx: t.idx,
                size: t.size,
                "active-idx": t.activeIdx,
                "prev-idx": t.prevIdx,
                title: (s = t.quizStep) == null ? void 0 : s.title
            }, {
                default: F( () => {
                    var p;
                    return [n("ul", Ee, [(_(!0),
                    I(re, null, ue((p = t.quizStep) == null ? void 0 : p.items, (d, e) => (_(),
                    k(l, {
                        key: e,
                        modelValue: r.value,
                        "onUpdate:modelValue": o[0] || (o[0] = c => r.value = c),
                        "is-active": r.value === (d == null ? void 0 : d.label),
                        item: d
                    }, null, 8, ["modelValue", "is-active", "item"]))), 128))])]
                }
                ),
                _: 1
            }, 8, ["idx", "size", "active-idx", "prev-idx", "title"])
        }
    }
})
  , We = Q(Oe, [["__scopeId", "data-v-6e4d4f2f"]])
  , Ye = B({
    __name: "QuizForm",
    props: W({
        idx: {},
        size: {},
        activeIdx: {},
        prevIdx: {}
    }, {
        modelValue: {},
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(m) {
        const r = Y(m, "modelValue");
        return (t, o) => {
            const l = ve
              , v = de;
            return _(),
            k(v, {
                idx: t.idx,
                size: t.size,
                "active-idx": t.activeIdx,
                "prev-idx": t.prevIdx,
                title: "Fill out the form"
            }, {
                default: F( () => [q(l, {
                    modelValue: r.value,
                    "onUpdate:modelValue": o[0] || (o[0] = s => r.value = s),
                    "form-id": "feedback",
                    class: "quiz__form",
                    "show-button": !1
                }, null, 8, ["modelValue"])]),
                _: 1
            }, 8, ["idx", "size", "active-idx", "prev-idx"])
        }
    }
})
  , Je = Q(Ye, [["__scopeId", "data-v-6e2f4bc1"]])
  , Ze = {}
  , je = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
function Ge(m, r) {
    return _(),
    I("svg", je, r[0] || (r[0] = [n("path", {
        d: "M16.469 3.52659L4.67422 3.51869L4.67285 3.51732L4.67147 3.51869L3.49327 3.51791L3.50186 16.4913L5.16963 16.4924L5.16293 6.36442L15.8685 17.07L17.047 15.8915L6.34319 5.18766L16.4701 5.19436L16.469 3.52659Z",
        fill: "currentColor"
    }, null, -1)]))
}
const Ke = Q(Ze, [["render", Ge]])
  , Xe = m => JSON.parse(JSON.stringify(m))
  , De = {
    class: "quiz__wrapper"
}
  , et = {
    class: "quiz__title"
}
  , tt = {
    class: "quiz__btn-wrapper"
}
  , nt = {
    key: 1
}
  , ot = B({
    __name: "QuizSection",
    props: {
        content: {}
    },
    setup(m) {
        const r = m
          , t = N( () => {
            var i, u, f;
            return [...((f = (u = (i = r.content) == null ? void 0 : i.quiz) == null ? void 0 : u.content) == null ? void 0 : f.steps) || []]
        }
        )
          , o = h(0)
          , l = h(0)
          , v = () => {
            o.value < t.value.length && (l.value = o.value,
            o.value++)
        }
          , s = () => {
            o.value > 0 && (l.value = o.value,
            o.value--)
        }
          , p = fe( () => {
            var i;
            return {
                value: (i = t.value) == null ? void 0 : i.map(u => ({
                    question: u == null ? void 0 : u.title,
                    answer: null
                }))
            }
        }
        )
          , d = {
            name: {
                value: "",
                error: !0
            },
            email: {
                value: "",
                error: !0
            },
            phone: {
                value: "",
                error: !0
            }
        }
          , e = ze(Xe(d))
          , c = N( () => {
            var i, u, f;
            return ((i = e == null ? void 0 : e.name) == null ? void 0 : i.error) || ((u = e == null ? void 0 : e.email) == null ? void 0 : u.error) || ((f = e == null ? void 0 : e.phone) == null ? void 0 : f.error)
        }
        )
          , {submitHandler: S, isFetching: x} = be("Quiz")
          , g = async () => {
            var f, H;
            if (c.value)
                return;
            const i = (f = p.value) == null ? void 0 : f.reduce( (C, {question: R, answer: P}) => (C[R] = {
                value: P
            },
            C), {})
              , u = {
                name: e.name,
                email: e.email,
                phone: e.phone
            };
            await S({
                ...u,
                ...i
            }),
            e.name = d.name,
            e.email = d.email,
            e.phone = d.phone,
            p.value = (H = t.value) == null ? void 0 : H.map(C => ({
                question: C == null ? void 0 : C.title,
                answer: null
            })),
            setTimeout( () => {
                o.value = 0,
                l.value = 0
            }
            , 2e3)
        }
          , $ = h(null)
          , L = h("0")
          , V = () => {
            var f;
            const i = (f = $.value) == null ? void 0 : f.querySelector(".quiz-step")
              , u = (i == null ? void 0 : i.scrollHeight) + "px";
            L.value = u
        }
        ;
        O( () => {
            oe.on(V)
        }
        ),
        se( () => {
            oe.off(V)
        }
        );
        const A = h(!1);
        return (i, u) => {
            var Z, j, G, K, X, D, ee, te;
            const f = We
              , H = Je
              , C = Ke
              , R = ae
              , P = xe
              , J = ie;
            return _(),
            I("section", {
                ref_key: "elRef",
                ref: $,
                class: T(["quiz", {
                    "is-animating": a(A)
                }])
            }, [n("div", De, [n("h2", et, w((G = (j = (Z = i.content) == null ? void 0 : Z.quiz) == null ? void 0 : j.content) == null ? void 0 : G.title), 1), n("div", {
                class: "quiz__step-tab",
                style: le({
                    "--height": `${a(L)}`
                })
            }, [(_(!0),
            I(re, null, ue(a(t), (b, z) => {
                var y;
                return _(),
                k(f, {
                    key: z,
                    modelValue: a(p).value[z].answer,
                    "onUpdate:modelValue": U => a(p).value[z].answer = U,
                    "quiz-step": b,
                    idx: z,
                    "active-idx": a(o),
                    "prev-idx": a(l),
                    size: ((y = a(t)) == null ? void 0 : y.length) + 1,
                    class: "quiz__item",
                    onAnimating: u[0] || (u[0] = U => A.value = U)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "quiz-step", "idx", "active-idx", "prev-idx", "size"])
            }
            ), 128)), q(H, {
                modelValue: a(e),
                "onUpdate:modelValue": u[1] || (u[1] = b => he(e) ? e.value = b : null),
                idx: a(t).length,
                "active-idx": a(o),
                "prev-idx": a(l),
                size: ((K = a(t)) == null ? void 0 : K.length) + 1,
                title: (ee = (D = (X = i.content) == null ? void 0 : X.quiz) == null ? void 0 : D.content) == null ? void 0 : ee.form_title,
                class: "quiz__item"
            }, null, 8, ["modelValue", "idx", "active-idx", "prev-idx", "size", "title"])], 4), n("div", tt, [a(o) > 0 ? (_(),
            k(R, {
                key: 0,
                type: "button",
                class: "quiz__btn",
                disabled: a(x),
                onClick: s
            }, {
                default: F( () => {
                    var b, z, y;
                    return [q(C), n("span", null, w((y = (z = (b = i.content) == null ? void 0 : b.quiz) == null ? void 0 : z.content) == null ? void 0 : y.back_button), 1)]
                }
                ),
                _: 1
            }, 8, ["disabled"])) : M("", !0), a(o) === a(t).length ? (_(),
            k(R, {
                key: 1,
                type: "button",
                class: "quiz__btn",
                disabled: a(c) || a(x),
                onClick: g
            }, {
                default: F( () => {
                    var b, z, y;
                    return [a(x) ? (_(),
                    k(P, {
                        key: 0
                    })) : (_(),
                    I("span", nt, w((y = (z = (b = i.content) == null ? void 0 : b.quiz) == null ? void 0 : z.content) == null ? void 0 : y.send_button), 1)), q(J)]
                }
                ),
                _: 1
            }, 8, ["disabled"])) : (_(),
            k(R, {
                key: 2,
                type: "button",
                class: "quiz__btn",
                disabled: !((te = a(p).value[a(o)]) != null && te.answer),
                onClick: v
            }, {
                default: F( () => {
                    var b, z, y;
                    return [n("span", null, w((y = (z = (b = i.content) == null ? void 0 : b.quiz) == null ? void 0 : z.content) == null ? void 0 : y.next_button), 1), q(J)]
                }
                ),
                _: 1
            }, 8, ["disabled"]))])])], 2)
        }
    }
})
  , ut = Q(ot, [["__scopeId", "data-v-fff14f9b"]]);
export {ut as Q, we as _, rt as a};
