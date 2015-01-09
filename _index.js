;

//Since Zepto doesn't have any dependency, a factory is not needed in order to produce a UMD


if (typeof exports === "object") {
  module.exports = Zepto;
} else if (typeof define === "function" && define.amd) {
  define(Zepto);
} else {
  root.Requester = Zepto;
}
