import { _ as _export_sfc, i as usePageFrontmatter, r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, b as createBaseVNode, t as toDisplayString, l as renderList, m as createCommentVNode, a as createVNode, w as withCtx, d as createTextVNode } from "./app.f09cac20.js";
var firmwareVersion_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.chevronPoint { \n  float: left;\n  margin-left: -1.5em;\n}\n.chevron {\n  padding-right: 0.23em;\n  margin-top: 0.8em;\n  font-size: 0.7em;\n}\n.showOnHover .hoverElement {\n  opacity: 0;\n  display: none !important;\n}\n.displayNone {\n  display: none !important;\n}\n.showOnHover:hover .hoverElement {\n  opacity: 1 !important;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 100ms;\n  display: inline !important;\n}\n.hoverElement:hover {\n  opacity: 1 !important;\n  display: inline !important;\n}\ninput[type=checkbox]{\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n.clickToShow { display: none !important;\n}\n.clickToHide { display: block !important;\n}\n.clickToHideInline { display: inline !important;\n}\ninput:checked ~ .clickToHide { display: none !important;\n}\ninput:checked ~ .clickToShow { display: block !important;\n}\ninput:checked ~ .clickToShowInline { display: inline !important;\n}\n")();
String.prototype.format = function(vars) {
  let temp = this;
  for (let item in vars)
    temp = temp.replace("${" + item + "}", vars[item]);
  return temp;
};
const _sfc_main = {
  data() {
    return {
      infoHead: "Info",
      versionStr: "Version: ${version}",
      buildStr: "Build: ${build}",
      releasedStr: "Released: ${released}",
      infoArr: [],
      devicesHead: "Devices",
      deviceObj: {},
      frontmatter: usePageFrontmatter(),
      query: this.$route.query
    };
  },
  methods: {
    getQuery() {
      const query = this.query;
      const iosList = this.frontmatter.iosList;
      if (!query.hasOwnProperty("os") && !query.hasOwnProperty("build"))
        return false;
      const osStr = query.os;
      const build = query.build;
      const ver = iosList.filter((x) => x.osStr == osStr && x.uniqueBuild == build)[0];
      if (ver)
        return ver;
      return false;
    }
  },
  mounted() {
    const versionObject = this.getQuery();
    if (versionObject) {
      const title = `${versionObject.osStr} ${versionObject.version} (${versionObject.build})`;
      document.title = `${title} | AppleDB`;
      document.getElementById("pageTitle").innerHTML = title;
      let rel = false;
      if (versionObject.released) {
        const releasedArr = versionObject.released.split("-");
        const dateStyleArr = [{ year: "numeric" }, { dateStyle: "medium" }, { dateStyle: "medium" }];
        const releaseDate = new Intl.DateTimeFormat("en-US", dateStyleArr[releasedArr.length - 1]).format(new Date(versionObject.released));
        rel = this.releasedStr.format({ released: releaseDate });
      }
      this.infoArr = [
        this.versionStr.format({ version: [versionObject.osStr, versionObject.version].join(" ") }),
        this.buildStr.format({ build: versionObject.build }),
        rel
      ].filter((x) => x);
      let deviceObj = { ...versionObject.deviceMap };
      let deviceMap = Object.keys(deviceObj).map((x) => deviceObj[x]);
      for (let device of deviceMap) {
        const group = device.group;
        if (!group)
          continue;
        const identArr = group.key;
        let pass = true;
        if (identArr.length > 1) {
          for (const ident of identArr)
            if (!Object.keys(deviceObj).includes(ident)) {
              pass = false;
              break;
            }
        }
        if (!pass)
          continue;
        device.name = group.name;
        device.key = group.name;
        device.children = group.key.map((x) => {
          let obj = { ...deviceObj[x] };
          delete obj.group;
          return obj;
        });
        device.url = `/device/${group.name.replace(/ /g, "-")}`;
      }
      deviceMap = deviceMap.filter((value, index, self) => index === self.findIndex((d) => d.name === value.name && d.url === value.url));
      this.deviceObj = deviceMap;
    }
  }
};
const _hoisted_1 = { style: { "padding-left": "0", "list-style-type": "none" } };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = {
  key: 0,
  class: "hoverElement"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "AppleDB is not affiliated with Apple Inc.", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock(Fragment, null, [
    $data.infoArr.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("h2", null, toDisplayString($data.infoHead), 1),
      createBaseVNode("ul", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.infoArr, (i) => {
          return openBlock(), createElementBlock("li", { key: i }, toDisplayString(i), 1);
        }), 128))
      ])
    ], 64)) : createCommentVNode("", true),
    Object.keys($data.deviceObj).length > 0 ? (openBlock(), createElementBlock("h2", _hoisted_2, toDisplayString($data.devicesHead), 1)) : createCommentVNode("", true),
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.deviceObj, (d) => {
        return openBlock(), createElementBlock("li", {
          key: d,
          class: "showOnHover"
        }, [
          createVNode(_component_router_link, {
            to: d.url
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(d.name), 1)
            ]),
            _: 2
          }, 1032, ["to"]),
          _hoisted_3,
          d.name != d.identifier ? (openBlock(), createElementBlock("code", _hoisted_4, toDisplayString(d.identifier), 1)) : createCommentVNode("", true)
        ]);
      }), 128))
    ]),
    _hoisted_5
  ], 64);
}
var firmwareVersion = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "firmwareVersion.vue"]]);
export { firmwareVersion as default };
