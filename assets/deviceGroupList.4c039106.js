import { _ as _export_sfc, i as usePageFrontmatter, C as useDarkMode, r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, l as renderList, b as createBaseVNode, a as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, a1 as pushScopeId, a2 as popScopeId, E as normalizeStyle, q as createBlock, m as createCommentVNode } from "./app.f09cac20.js";
var deviceTypeGroups = [{ "label": "iOS Devices", "types": ["iPhone", "iPad", "iPad Air", "iPad Pro", "iPad mini", "iPod touch"] }, { "label": "macOS Devices", "types": ["MacBook Air", "MacBook Pro", "MacBook", "iMac", "Mac mini", "Mac Studio", "Mac Pro"] }, { "label": "Home and Accessories", "types": ["Apple Watch", "Apple TV", "HomePod", "AirPods", "Display", "Apple Pencil", "AirTag", "Mouse", "Trackpad", "Keyboard", "Remote", "Power"] }, { "label": "iPods", "types": ["iPod touch", "iPod nano", "iPod shuffle", "iPod mini", "iPod"] }, { "label": "Beats", "types": ["Beats Earbuds", "Beats Headphones", "Beats Speakers"] }];
var deviceGroupList_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\ntable[data-v-72e55978] {\n    table-layout: fixed;\n}\ntd[data-v-72e55978], th[data-v-72e55978] {\n    text-align: center;\n}\n")();
String.prototype.fdn = function() {
  return this.replace(/ /g, "-").replace(/\//g, "%2F").replace(/ü/g, "u").replace(/²/g, "2").replace(/³/g, "3");
};
const _sfc_main = {
  data() {
    return {
      introStr: [
        "Please select what kind of device you have below."
      ],
      viewAllStr: "View all devices",
      colCount: 3,
      frontmatter: usePageFrontmatter(),
      isDarkMode: useDarkMode()
    };
  },
  computed: {
    groupList() {
      return this.frontmatter.groupList;
    },
    typeArr() {
      return Array.from(new Set(this.groupList.map((x) => x.type)));
    },
    groupObj() {
      var presetTypeArr = [];
      var presetOrder = deviceTypeGroups.map((x) => {
        x.types = x.types.filter((y) => this.typeArr.includes(y));
        for (const t of x.types)
          presetTypeArr.push(t);
        return x;
      });
      const unsetTypes = this.typeArr.filter((x) => !presetTypeArr.includes(x));
      if (unsetTypes.length > 0)
        presetOrder.push({
          label: "Other",
          types: unsetTypes
        });
      return presetOrder;
    },
    devCount() {
      const groupList = this.groupList;
      var tempTypeArr = [];
      var ret = {};
      for (const g of groupList) {
        if (tempTypeArr.includes(g.type))
          continue;
        tempTypeArr.push(g.type);
        ret[g.type] = 0;
      }
      for (const g of groupList)
        ret[g.type] += g.devices.length;
      return ret;
    },
    imageObj() {
      const groupList = this.groupList;
      var tempTypeArr = [];
      var firstDeviceObj = {};
      for (const g of groupList) {
        if (tempTypeArr.includes(g.type))
          continue;
        tempTypeArr.push(g.type);
        firstDeviceObj[g.type] = {
          key: g.devices[0],
          imageBool: g.img.count > 0,
          dark: g.img.dark
        };
      }
      const overrides = {
        iPhone: "iPhone14,2",
        AirPods: "AirPods1,1",
        "MacBook Pro": "MacBookPro18,1"
      };
      for (const o in overrides) {
        const group = groupList.filter((x) => {
          if (!x.key)
            return false;
          return x.key.includes(overrides[o]);
        })[0];
        if (!group)
          continue;
        firstDeviceObj[o] = {
          key: group.devices[0],
          imageBool: group.img.count > 0,
          dark: group.img.dark
        };
      }
      var ret = {};
      for (const d in firstDeviceObj)
        ret[d] = firstDeviceObj[d].imageBool ? `https://img.appledb.dev/device@preview/${firstDeviceObj[d].key}/0${this.isDarkMode && firstDeviceObj[d].dark ? "_dark" : ""}.png` : `/assets/images/logo${this.isDarkMode ? "_dark" : ""}.png`;
      return ret;
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-72e55978"), n = n(), popScopeId(), n);
const _hoisted_1 = ["src"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "AppleDB is not affiliated with Apple Inc.", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock(Fragment, null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.introStr, (s) => {
      return openBlock(), createElementBlock("p", { key: s }, toDisplayString(s), 1);
    }), 128)),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.groupObj, (o) => {
      return openBlock(), createElementBlock(Fragment, { key: o }, [
        createBaseVNode("h2", null, toDisplayString(o.label), 1),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Math.ceil(o.types.length / $data.colCount), (t) => {
          return openBlock(), createElementBlock("table", { key: t }, [
            createBaseVNode("tr", {
              style: normalizeStyle(`width: ${parseInt(100 / $data.colCount)}%;`)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.colCount, (c) => {
                return openBlock(), createElementBlock("th", {
                  key: c,
                  style: normalizeStyle({ "width": parseInt(100 / $data.colCount) + "%" })
                }, [
                  o.types[(t - 1) * $data.colCount + c - 1] ? (openBlock(), createBlock(_component_router_link, {
                    key: 0,
                    to: `/device-selection/${o.types[(t - 1) * $data.colCount + c - 1].fdn()}.html`
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(o.types[(t - 1) * $data.colCount + c - 1]), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])) : createCommentVNode("", true)
                ], 4);
              }), 128))
            ], 4),
            createBaseVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.colCount, (c) => {
                return openBlock(), createElementBlock("td", { key: c }, [
                  o.types[(t - 1) * $data.colCount + c - 1] ? (openBlock(), createBlock(_component_router_link, {
                    key: 0,
                    to: `/device-selection/${o.types[(t - 1) * $data.colCount + c - 1].fdn()}.html`
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("img", {
                        src: $options.imageObj[o.types[(t - 1) * $data.colCount + c - 1]],
                        style: { "max-height": "8em" }
                      }, null, 8, _hoisted_1)
                    ]),
                    _: 2
                  }, 1032, ["to"])) : createCommentVNode("", true)
                ]);
              }), 128))
            ])
          ]);
        }), 128))
      ], 64);
    }), 128)),
    createBaseVNode("p", null, [
      createVNode(_component_router_link, { to: "/device-list.html" }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($data.viewAllStr), 1)
        ]),
        _: 1
      })
    ]),
    _hoisted_2
  ], 64);
}
var deviceGroupList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72e55978"], ["__file", "deviceGroupList.vue"]]);
export { deviceGroupList as default };
