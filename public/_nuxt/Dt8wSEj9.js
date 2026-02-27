import {c as p} from "./DsoqDRZR.js";
import {d, r as _, V as o, c as m, o as f, f as a, x as v, _ as y} from "./C5bBxmVo.js";
const h = {
    class: "video"
}
  , B = ["autoplay"]
  , g = ["src"]
  , F = d({
    __name: "CustomVideo",
    props: {
        url: {},
        videoAttributes: {},
        isPlaying: {
            type: Boolean
        },
        isFullscreen: {
            type: Boolean
        }
    },
    emits: ["fullscreen"],
    setup(l, {emit: n}) {
        const t = l
          , s = _(null)
          , r = n;
        o( () => t.isPlaying, e => {
            s.value && (e ? s.value.play() : s.value.pause())
        }
        , {
            immediate: !0
        });
        const {isFullscreen: i, enter: c, exit: u} = p(s);
        return o( () => t.isFullscreen, e => {
            s.value && (e ? c() : u())
        }
        ),
        o(i, e => {
            r("fullscreen", e)
        }
        ),
        (e, P) => (f(),
        m("div", h, [a("video", v({
            ref_key: "videoRef",
            ref: s,
            autoplay: e.isPlaying,
            loop: "",
            muted: "",
            preload: "metadata"
        }, e.videoAttributes, {
            playsinline: ""
        }), [a("source", {
            src: e.url,
            type: "video/mp4"
        }, null, 8, g)], 16, B)]))
    }
})
  , x = y(F, [["__scopeId", "data-v-d54b3198"]]);
export {x as _};
