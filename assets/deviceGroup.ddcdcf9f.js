import { _ as _export_sfc, i as usePageFrontmatter, C as useDarkMode, r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, l as renderList, b as createBaseVNode, t as toDisplayString, m as createCommentVNode, a as createVNode, w as withCtx, D as normalizeClass, d as createTextVNode, q as createBlock } from "./app.f09cac20.js";
var deviceGroup_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\nh3 {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\ntd, th {\n    text-align: center;\n}\n.noBorder tr {\n    background-color: inherit;\n}\n.noBorder td {\n    border: 0;\n    text-align: initial;\n    vertical-align: 0;\n}\n.flexWrapper {\n    display: flex;\n    flex-wrap: wrap;\n}\n.flexImg {\n    overflow: hidden;\n    height: 8em;\n}\n.flexColumn {\n    flex-direction: column;\n}\n.devHead {\n    margin-right: 1em;\n    width: 50%;\n}\n.imgWrapper {\n    height: 8em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.devImage {\n    max-width: 100%;\n    max-height: 8em;\n    padding-right: .5em;\n}\n.variablePadding {\n    display: block;\n    margin-bottom: 1em;\n}\n@media only screen and (max-width: 600px) {\n.devHead {\n        width: 100%;\n}\n.devInfo {\n        position: static !important;\n}\n.devReleased {\n        position: static !important;\n}\nh3 {\n        white-space: normal;\n        overflow: visible;\n}\n.variablePadding {\n        display: none;\n}\n}\n.home {\n    padding-top: 0 !important;\n}\n.infoList {\n    list-style-type: none;\n    padding-left: 0;\n}\n")();
String.prototype.fdn = function() {
  return encodeURI(this.replace(/ /g, "-").replace(/\//g, "%2F").replace(/ü/g, "u").replace(/²/g, "2").replace(/³/g, "3"));
};
String.prototype.format = function(vars) {
  let temp = this;
  for (let item in vars)
    temp = temp.replace("${" + item + "}", vars[item]);
  return temp;
};
const _sfc_main = {
  data() {
    return {
      labels: {
        identifier: "Identifier: ${identifier}",
        soc: "SoC: ${soc}",
        arch: "Architecture: ${arch}",
        model: "Model: ${model}",
        board: "Board: ${board}"
      },
      releasedOn: "Released on ${released}",
      viewDeviceStr: "View more",
      iPhoneNote: 'Note that all "Plus", "Max" and "mini" models of iPhones are functionally identical to the regular models.',
      frontmatter: usePageFrontmatter(),
      isDarkMode: useDarkMode()
    };
  },
  computed: {
    introStr() {
      return [
        `Please select what model of ${this.frontmatter.type} you have below.`
      ];
    },
    deviceArr() {
      return this.frontmatter.group;
    },
    infoObj() {
      let o = {};
      for (const dev of this.deviceArr) {
        let attr = ["identifier", "soc", "arch", "model", "board"].map((x) => {
          return {
            type: x,
            value: dev[x]
          };
        });
        o[dev.name] = [];
        for (const i of attr)
          if (i.value && i.value != "") {
            let ret = this.labels[i.type].format({ [i.type]: i.value.slice(0, 3).join(", ") });
            if (i.value.length > 3)
              ret += ", ...";
            o[dev.name].push(ret);
          }
      }
      return o;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "custom-container tip"
};
const _hoisted_2 = { class: "flexWrapper" };
const _hoisted_3 = { class: "devHead" };
const _hoisted_4 = {
  class: "flexWrapper flexImg",
  style: { "user-select": "none", "height": "8em" }
};
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  key: 1,
  class: "imgWrapper imgWrapper0"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "flexWrapper flexColumn devInfo" };
const _hoisted_9 = {
  class: "devInfo infoList",
  style: { "position": "absolute" }
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("...");
const _hoisted_11 = {
  class: "devReleased infoList",
  style: { "position": "relative", "top": "9em" }
};
const _hoisted_12 = { key: 0 };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("...");
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "variablePadding" }, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, "AppleDB is not affiliated with Apple Inc.", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock(Fragment, null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.introStr, (s) => {
      return openBlock(), createElementBlock("p", { key: s }, toDisplayString(s), 1);
    }), 128)),
    $data.frontmatter.type == "iPhone" ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createBaseVNode("p", null, toDisplayString($data.iPhoneNote), 1)
    ])) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.deviceArr, (dev) => {
      return openBlock(), createElementBlock(Fragment, { key: dev }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList([`/device/${dev.name.fdn()}.html`], (url) => {
          return openBlock(), createElementBlock(Fragment, { key: url }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_router_link, {
                  to: url,
                  style: { "color": "inherit" }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("h3", null, toDisplayString(dev.name), 1),
                    createBaseVNode("div", _hoisted_4, [
                      dev.img.count > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Math.min(dev.img.count, 3), (i) => {
                        return openBlock(), createElementBlock("div", {
                          key: i,
                          class: normalizeClass(`imgWrapper imgWrapper${i}`)
                        }, [
                          createBaseVNode("img", {
                            class: normalizeClass(`devImage devImage${i}`),
                            src: `https://img.appledb.dev/device@preview/${dev.devices[0].replace(/\//g, "%252F")}/${i - 1}${$data.isDarkMode && dev.img.dark ? "_dark" : ""}.png`
                          }, null, 10, _hoisted_5)
                        ], 2);
                      }), 128)) : (openBlock(), createElementBlock("div", _hoisted_6, [
                        createBaseVNode("img", {
                          class: "devImage devImage0",
                          src: `/assets/images/logo${$data.isDarkMode ? "_dark" : ""}.png`
                        }, null, 8, _hoisted_7)
                      ]))
                    ])
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("ul", _hoisted_9, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($options.infoObj[dev.name].slice(0, 3), (i) => {
                    return openBlock(), createElementBlock("li", { key: i }, [
                      createTextVNode(toDisplayString(i.replace("...", "")) + " ", 1),
                      i.includes("...") ? (openBlock(), createBlock(_component_router_link, {
                        key: 0,
                        to: url
                      }, {
                        default: withCtx(() => [
                          _hoisted_10
                        ]),
                        _: 2
                      }, 1032, ["to"])) : createCommentVNode("", true)
                    ]);
                  }), 128)),
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: url }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.viewDeviceStr), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ]),
                createBaseVNode("ul", _hoisted_11, [
                  dev.released ? (openBlock(), createElementBlock("li", _hoisted_12, [
                    createTextVNode(toDisplayString($data.releasedOn.format({ released: dev.released.slice(0, 1).join(", ") })), 1),
                    dev.released.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      _hoisted_13,
                      createVNode(_component_router_link, { to: url }, {
                        default: withCtx(() => [
                          _hoisted_14
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ], 64)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            _hoisted_15,
            _hoisted_16
          ], 64);
        }), 128))
      ], 64);
    }), 128)),
    _hoisted_17
  ], 64);
}
var deviceGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "deviceGroup.vue"]]);
export { deviceGroup as default };
