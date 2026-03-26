const n = t => {
    const e = t.split(".");
    return e.length > 1 ? e.pop() : ""
}
  , o = t => {
    if (!t)
        return !1;
    const e = ["mp4", "avi", "mov", "mkv", "flv", "wmv"]
      , s = n(t).toLowerCase();
    return e.includes(s)
}
  , i = t => {
    if (!t)
        return !1;
    const e = ["jpg", "jpeg", "png", "gif", "bmp", "webp"]
      , s = n(t).toLowerCase();
    return e.includes(s)
}
;
export {o as a, i};
