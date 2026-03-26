import {d as p, k as n, r as f, H as h, c as l, o as c, h as y, i as s, Z as _, _ as b} from "./C5bBxmVo.js";
const v = ["src"]
  , w = p({
    __name: "EmbedVideo",
    props: {
        url: {},
        width: {
            default: 1920
        },
        height: {
            default: 1080
        },
        videoAttributes: {},
        isFullscreen: {
            type: Boolean
        },
        autoplay: {
            default: "1"
        },
        mute: {
            default: "1"
        },
        loop: {
            default: "1"
        },
        rel: {
            default: "0"
        },
        controls: {
            default: "1"
        }
    },
    setup(i) {
        const t = i
          , u = n( () => +t.width / +t.height)
          , a = f("")
          , d = o => {
            if (!o)
                return "";
            try {
                const e = new URL(o);
                if (e.hostname.includes("youtube.com") || e.hostname.includes("youtu.be")) {
                    const r = e.hostname.includes("youtu.be") ? e.pathname.slice(1) : e.searchParams.get("v");
                    return r ? `https://www.youtube.com/embed/${r}` : ""
                }
                if (e.hostname.includes("vimeo.com")) {
                    const r = e.pathname.split("/").filter(Boolean).pop();
                    return r ? `https://player.vimeo.com/video/${r}` : ""
                }
            } catch (e) {
                console.warn("Invalid video URL:", o, e)
            }
            return ""
        }
        ;
        h( () => {
            a.value = d(t.url)
        }
        );
        const m = n( () => {
            if (!a.value)
                return "";
            const o = new URLSearchParams({
                autoplay: t.autoplay,
                mute: t.mute,
                loop: t.loop,
                rel: t.rel,
                controls: t.controls,
                background: t.isFullscreen ? "0" : "1"
            });
            return `${a.value}?${o.toString()}`
        }
        );
        return (o, e) => (c(),
        l("div", {
            ref: "el",
            class: "embed-video",
            style: _({
                "--aspect": s(u)
            })
        }, [s(a) ? (c(),
        l("iframe", {
            key: 0,
            ref: "iframe",
            src: s(m),
            title: "Video player",
            frameborder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowfullscreen: "",
            referrerpolicy: "strict-origin-when-cross-origin"
        }, null, 8, v)) : y("", !0)], 4))
    }
})
  , U = b(w, [["__scopeId", "data-v-1000af41"]]);
export {U as _};
