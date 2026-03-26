import {_ as B} from "./BZ6ROOaS.js";
import {_ as C} from "./Dt8wSEj9.js";
import {d as p, H as x, k as g, c as _, h as w, i, o, f as d, g as u, a as h, ab as S, n as T, t as $, _ as k, j as D, F as N, A as V, z as b, B as I} from "./C5bBxmVo.js";
import {_ as P} from "./3NLjUwEP.js";
import {_ as A} from "./DuVedMQ2.js";
const F = {
    key: 0,
    class: "news-custom-video"
}
  , H = {
    class: "curr-news-content"
}
  , L = p({
    __name: "CustomVideo",
    props: {
        blok: {}
    },
    setup(r) {
        const t = r;
        x( () => {
            console.log(t.blok)
        }
        );
        const s = g( () => t.blok);
        return (n, c) => {
            var e, m, l, v, y, f;
            const a = B;
            return i(s) ? (o(),
            _("div", F, [d("div", H, [(e = i(s)) != null && e.embed_link ? (o(),
            u(a, {
                key: 0,
                url: (m = i(s)) == null ? void 0 : m.embed_link,
                width: (l = i(s)) == null ? void 0 : l.embed_width,
                height: (v = i(s)) == null ? void 0 : v.embed_height
            }, null, 8, ["url", "width", "height"])) : (o(),
            u(C, {
                key: 1,
                "video-attributes": {
                    preload: "auto"
                },
                url: (f = (y = i(s)) == null ? void 0 : y.asset) == null ? void 0 : f.filename,
                "is-playing": !0,
                class: "interview__video"
            }, null, 8, ["url"]))])])) : w("", !0)
        }
    }
})
  , M = {
    key: 0,
    class: "gallery"
}
  , R = p({
    __name: "GallerySection",
    props: {
        blok: {}
    },
    setup(r) {
        return (t, s) => {
            var c, a;
            const n = P;
            return (c = t.blok) != null && c.images ? (o(),
            _("div", M, [h(n, {
                images: ((a = t.blok) == null ? void 0 : a.images) || []
            }, null, 8, ["images"])])) : w("", !0)
        }
    }
})
  , z = ["innerHTML"]
  , E = p({
    __name: "RichText",
    props: {
        text: {}
    },
    setup(r) {
        const t = r
          , s = g( () => {
            try {
                return S(t.text)
            } catch {
                return ""
            }
        }
        );
        return (n, c) => (o(),
        _("div", {
            innerHTML: i(s)
        }, null, 8, z))
    }
})
  , O = p({
    __name: "NewsSection",
    props: {
        blok: {},
        isPrivacy: {
            type: Boolean
        }
    },
    setup(r) {
        return (t, s) => {
            const n = E;
            return o(),
            _("div", {
                class: T(["curr-news-content container", {
                    "privacy-content": t.isPrivacy
                }])
            }, [h(n, {
                text: t.blok.content
            }, null, 8, ["text"])], 2)
        }
    }
})
  , j = {
    class: "text-asset"
}
  , G = {
    class: "text-asset__text"
}
  , U = p({
    __name: "TextOnAssetSection",
    props: {
        blok: {}
    },
    setup(r) {
        return (t, s) => {
            var c, a, e, m, l;
            const n = A;
            return o(),
            _("div", j, [h(n, {
                src: (a = (c = t.blok) == null ? void 0 : c.asset) == null ? void 0 : a.filename,
                alt: (m = (e = t.blok) == null ? void 0 : e.asset) == null ? void 0 : m.alt,
                class: "text-asset__img",
                width: 1920
            }, null, 8, ["src", "alt"]), d("p", G, $((l = t.blok) == null ? void 0 : l.text), 1)])
        }
    }
})
  , q = k(U, [["__scopeId", "data-v-a36caafa"]])
  , J = {
    key: 1
}
  , K = p({
    __name: "DynamicBlockRenderer",
    props: {
        blocks: {},
        isPrivacy: {
            type: Boolean
        }
    },
    setup(r) {
        const t = r
          , s = n => ({
            news_section: O,
            gallery: R,
            text_on_asset: q,
            "Custom video": L
        })[n];
        return x( () => {
            console.log(t.blocks)
        }
        ),
        (n, c) => {
            const a = b("editable");
            return o(!0),
            _(N, null, D(n.blocks, e => (o(),
            _("section", {
                key: e._uid,
                class: "news-section"
            }, [s(e == null ? void 0 : e.component) ? V((o(),
            u(I(s(e == null ? void 0 : e.component)), {
                key: 0,
                blok: e,
                "is-privacy": n.isPrivacy
            }, null, 8, ["blok", "is-privacy"])), [[a, e == null ? void 0 : e.content]]) : (o(),
            _("div", J, [d("p", null, "Unknown component: " + $(e == null ? void 0 : e.component), 1)]))]))), 128)
        }
    }
})
  , ee = k(K, [["__scopeId", "data-v-0cae2c01"]]);
export {ee as _};
