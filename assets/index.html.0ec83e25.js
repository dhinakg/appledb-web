import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, b as createBaseVNode, d as createTextVNode } from "./app.f09cac20.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "new-releases",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#new-releases",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" New releases")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Created by ");
const _hoisted_3 = {
  href: "https://twitter.com/emiyl0",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("emiyl");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(". Please contribute to the database at ");
const _hoisted_6 = {
  href: "https://github.com/emiyl/appledb",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("github.com/emiyl/appledb");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(".");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Splash images created by ");
const _hoisted_10 = {
  href: "https://twitter.com/23Aaron_",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("23 Aaron");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(".");
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "AppleDB is not affiliated with Apple Inc.", -1);
function _sfc_render(_ctx, _cache) {
  const _component_latestVersion = resolveComponent("latestVersion");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_latestVersion),
    createBaseVNode("p", null, [
      _hoisted_2,
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_5,
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_8
    ]),
    createBaseVNode("p", null, [
      _hoisted_9,
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_12
    ]),
    _hoisted_13
  ]);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export { index_html as default };
