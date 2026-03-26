import {_ as V} from "./BZ6ROOaS.js";
import {_ as B} from "./Dt8wSEj9.js";
import {_ as C} from "./DpMqWF5x.js";
import {d as F, r as u, c as s, o as t, f as I, h as o, g as m, i as f, a as N, t as v, _ as E} from "./C5bBxmVo.js";
const P = {
    class: "interview"
}
  , S = {
    class: "interview__video-wrapper"
}
  , D = {
    key: 0,
    class: "interview__title"
}
  , O = {
    key: 1,
    class: "interview__description"
}
  , $ = F({
    __name: "VideoInterview",
    props: {
        asset: {},
        title: {},
        description: {}
    },
    setup(j) {
        const h = u(!0)
          , n = u(!1)
          , k = () => {
            n.value = !0
        }
        ;
        return (e, i) => {
            var a, r, l, _, c, d, p;
            const y = V
              , b = B
              , w = C;
            return t(),
            s("div", P, [I("div", S, [(a = e.asset) != null && a.embed_link ? (t(),
            m(y, {
                key: 0,
                url: (r = e.asset) == null ? void 0 : r.embed_link,
                width: (l = e.asset) == null ? void 0 : l.embed_width,
                height: (_ = e.asset) == null ? void 0 : _.embed_height
            }, null, 8, ["url", "width", "height"])) : (t(),
            m(b, {
                key: 1,
                "video-attributes": {
                    preload: "auto"
                },
                url: (d = (c = e.asset) == null ? void 0 : c.asset) == null ? void 0 : d.filename,
                "is-playing": f(h),
                "is-fullscreen": f(n),
                class: "interview__video",
                onFullscreen: i[0] || (i[0] = g => n.value = g)
            }, null, 8, ["url", "is-playing", "is-fullscreen"])), (p = e.asset) != null && p.embed_link ? o("", !0) : (t(),
            s("button", {
                key: 2,
                type: "button",
                class: "interview__play-btn",
                "aria-label": "Open video in fullscreen",
                onClick: k
            }, [N(w)]))]), e.title ? (t(),
            s("h4", D, v(e.title), 1)) : o("", !0), e.description ? (t(),
            s("p", O, v(e.description), 1)) : o("", !0)])
        }
    }
})
  , H = E($, [["__scopeId", "data-v-f92d79ec"]]);
export {H as _};
