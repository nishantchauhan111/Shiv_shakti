import {E as n} from "./C5bBxmVo.js";
function o() {
    return "onorientationchange"in window
}
function e() {
    return window.orientation
}
function t() {
    document.body.classList.remove("landscape")
}
function a() {
    document.body.classList.add("landscape")
}
function i() {
    document.body.classList.add("landscape")
}
function c() {
    switch (console.log("change"),
    e()) {
    case 0:
        t();
        break;
    case 90:
    case -90:
        a();
        break;
    case 180:
        i();
        break
    }
}
function r() {
    o() && n.on(c)
}
export {r as detectOrientationChanges};
