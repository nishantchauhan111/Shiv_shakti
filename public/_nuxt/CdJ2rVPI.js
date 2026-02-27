import {r as n} from "./C5bBxmVo.js";
const o = n(new Set());
const e = n(null);
const t = n("default");
function r(i) {
    const s = new Set(o.value);
    s.add(i);
    o.value = s;
    t.value = "black";
}
function s(i) {
    const a = new Set(o.value);
    a.delete(i);
    o.value = a;
    if (o.value.size === 0)
        t.value = "default";
}
const u = () => ({
    headerColor: t,
    $headerRef: e,
    registerBlackHeaderTrigger: r,
    unregisterBlackHeaderTrigger: s
});
export {u};
