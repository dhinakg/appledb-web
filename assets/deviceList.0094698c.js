import { _ as _export_sfc, i as usePageFrontmatter, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, L as withDirectives, a4 as vModelText, F as Fragment, l as renderList, a1 as pushScopeId, a2 as popScopeId, t as toDisplayString, a as createVNode, w as withCtx, d as createTextVNode, m as createCommentVNode } from "./app.f09cac20.js";
var deviceList_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.search-box[data-v-203ace37] {\n  margin-left: 0;\n}\n@media (max-width: 720px) {\n.search-box input[data-v-203ace37] {\n    cursor: initial;\n    width: initial;\n    border-color: var(--search-border-color);\n    position: static;\n}\n.search-box input[data-v-203ace37]:focus {\n    border-color: var(--search-accent-color);\n}\n}\n")();
String.prototype.fdn = function() {
  return this.replace(/ /g, "-").replace(/\//g, "%2F").replace(/ü/g, "u").replace(/²/g, "2").replace(/³/g, "3");
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
      tableHeaderArr: [
        "Model",
        "Name",
        "Board",
        "SoC"
      ],
      searchQuery: "",
      searchProperties: [
        "model",
        "name",
        "identifier",
        "board",
        "soc"
      ],
      searchStr: "Search",
      fm: usePageFrontmatter()
    };
  },
  computed: {
    modelList() {
      const devList = Object.keys(this.fm.deviceList).map((x) => this.fm.deviceList[x]);
      const modelArr = devList.map((x) => x.model).flat().filter((x) => x).sort();
      let modelDevArr = [];
      let previousModel = "";
      let count = 0;
      modelArr.map((x) => {
        const devArr = devList.filter((y) => y.model && y.model.includes(x));
        if (previousModel == x)
          count++;
        else
          count = 0;
        const dev = devArr[count];
        previousModel = x;
        modelDevArr.push({
          name: dev.name,
          identifier: dev.identifier,
          key: dev.key,
          model: x,
          released: dev.released,
          soc: dev.soc,
          arch: dev.arch,
          board: dev.board
        });
      });
      return modelDevArr;
    },
    modellessDevices() {
      const devList = Object.keys(this.fm.deviceList).map((x) => this.fm.deviceList[x]);
      const noModelList = devList.filter((x) => !x.hasOwnProperty("model") || !x.model || !x.model[0]).map((x) => {
        if (Array.isArray(x.model))
          x.model = "";
        return x;
      });
      return noModelList.sort((a, b) => {
        if (a.identifier.toLowerCase() < b.identifier.toLowerCase())
          return -1;
        if (a.identifier.toLowerCase() > b.identifier.toLowerCase())
          return 1;
        return 0;
      });
    },
    deviceArr() {
      return this.modelList.concat(this.modellessDevices);
    }
  },
  methods: {
    checkSearch(dev) {
      const searchQuery = this.searchQuery.toLowerCase();
      for (const p of this.searchProperties) {
        try {
          if (dev[p].toLowerCase().includes(searchQuery))
            return true;
        } catch {
          continue;
        }
      }
      return false;
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-203ace37"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "search-box",
  role: "search"
};
const _hoisted_2 = ["placeholder", "aria-placeholder"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "AppleDB is not affiliated with Apple Inc.", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("form", _hoisted_1, [
      withDirectives(createBaseVNode("input", {
        placeholder: $data.searchStr,
        "aria-placeholder": $data.searchStr,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchQuery = $event)
      }, null, 8, _hoisted_2), [
        [vModelText, $data.searchQuery]
      ])
    ]),
    createBaseVNode("table", null, [
      createBaseVNode("tr", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.tableHeaderArr, (h) => {
          return openBlock(), createElementBlock("th", { key: h }, toDisplayString(h), 1);
        }), 128))
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.deviceArr.filter($options.checkSearch), (dev) => {
        return openBlock(), createElementBlock("tr", { key: dev }, [
          createBaseVNode("td", null, toDisplayString(dev.model), 1),
          createBaseVNode("td", null, [
            createVNode(_component_router_link, {
              to: "/device/identifier/" + dev.key.fdn() + ".html"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(dev.name), 1)
              ]),
              _: 2
            }, 1032, ["to"]),
            dev.name != dev.identifier ? (openBlock(), createElementBlock("code", _hoisted_3, toDisplayString(dev.identifier), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("td", null, toDisplayString(dev.board ? dev.board.join(", ") : ""), 1),
          createBaseVNode("td", null, toDisplayString(dev.soc ? Array.isArray(dev.soc) ? dev.soc.join(", ") : dev.soc : ""), 1)
        ]);
      }), 128))
    ]),
    _hoisted_4
  ], 64);
}
var deviceList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-203ace37"], ["__file", "deviceList.vue"]]);
export { deviceList as default };
