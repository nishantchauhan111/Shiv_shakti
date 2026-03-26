import {u as a} from "./C5bBxmVo.js";
const d = () => {
    const c = a("$headerRef", () => null)
      , t = a("headerColor", () => "white")
      , e = a("activeBlackSections", () => new Set)
      , o = () => {
        t.value = e.value.size > 0 ? "black" : "white"
    }
    ;
    return {
        $headerRef: c,
        headerColor: t,
        registerBlackHeaderTrigger: r => {
            e.value.add(r),
            o()
        }
        ,
        unregisterBlackHeaderTrigger: r => {
            e.value.delete(r),
            o()
        }
    }
}
;
export {d as u};
