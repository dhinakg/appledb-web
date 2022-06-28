import { _ as _export_sfc, i as usePageFrontmatter, C as useDarkMode, r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, b as createBaseVNode, l as renderList, E as normalizeStyle, m as createCommentVNode, t as toDisplayString, d as createTextVNode, L as withDirectives, a0 as vModelSelect, a1 as pushScopeId, a2 as popScopeId, D as normalizeClass, a as createVNode, w as withCtx, a3 as vModelCheckbox, q as createBlock } from "./app.f09cac20.js";
var device_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '\n.devFlexImgWrapper[data-v-1d5278e0] {\n    overflow: hidden;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    text-align: center;\n    padding-bottom: 1em;\n    margin-bottom: 1em;\n    max-height: 7em;\n}\n.flexImg0[data-v-1d5278e0] {\n    margin-left: 0 !important;\n    max-width: 100%;\n}\nselect[data-v-1d5278e0] {\n  /* styling */\n  background-color: inherit;\n  border: thin solid var(--c-border-dark);\n  border-radius: 8px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1em;\n  font-size: .8em;\n  padding: 0.8em 3.5em 0.8em 1em;\n\n  /* reset */\n\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  background-image:\n    linear-gradient(45deg, transparent 50%, gray 50%),\n    linear-gradient(135deg, gray 50%, transparent 50%),\n    linear-gradient(to right, var(--c-border-dark), var(--c-border-dark));\n  background-position:\n    calc(100% - 18px) calc(1em + 2px),\n    calc(100% - 13px) calc(1em + 2px),\n    calc(100% - 2.5em) 0.55em;\n  background-size:\n    5px 5px,\n    5px 5px,\n    1px 1.5em;\n  background-repeat: no-repeat;\n}\nselect[data-v-1d5278e0]:focus {\n  background-image:\n    linear-gradient(45deg, var(--c-text-accent) 50%, transparent 50%),\n    linear-gradient(135deg, transparent 50%, var(--c-text-accent) 50%),\n    linear-gradient(to right, var(--c-text-accent), var(--c-text-accent));\n  background-position:\n    calc(100% - 13px) 1.1em,\n    calc(100% - 18px) 1.1em,\n    calc(100% - 2.5em) 0.55em;\n  background-size:\n    5px 5px,\n    5px 5px,\n    1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: var(--c-text-accent);\n  color: var(--c-text-accent) !important;\n  outline: 0;\n}\nselect[data-v-1d5278e0]:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000;\n}\n.flexWrapper[data-v-1d5278e0] {\n  display: flex;\n  justify-content: space-between;\n}\n.flexWrapper img[data-v-1d5278e0] {\n  align-self: center;\n  margin-right: 0;\n  margin-left: 0;\n}\n.infoList[data-v-1d5278e0] {\n    list-style-type: none;\n    padding-left: 0;\n    margin-top: 0;\n}\n.showOnHover .hoverElement[data-v-1d5278e0] {\n  opacity: 0;\n  display: none !important;\n}\n.showOnHover .opaqueHoverElement[data-v-1d5278e0] {\n  opacity: 0;\n  display: none !important;\n}\n.showOnHover:hover .hoverElement[data-v-1d5278e0] {\n  opacity: 0.3;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 100ms;\n  display: inline !important;\n}\n.showOnHover:hover .opaqueHoverElement[data-v-1d5278e0] {\n  opacity: 1;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 100ms;\n  display: inline !important;\n}\n.hoverElement[data-v-1d5278e0]:hover {\n  opacity: 1 !important;\n  display: inline !important;\n}\n.chartDropdown[data-v-1d5278e0] {\n  font-size: 0.9rem;\n  line-height: 1.4rem;\n  font-weight: 500;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.chartDropdownBox[data-v-1d5278e0] {\n  position: absolute;\n  height: auto !important;\n  box-sizing: border-box;\n  background-color: var(--c-bg-navbar);\n  border-bottom-color: var(--c-border-dark);\n  text-align: left;\n  border-radius: 0.25rem;\n  white-space: nowrap;\n  top: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: 0px solid var(--c-border);\n\n  padding: 0;\n  max-height: 0px;\n  transition: 300ms ease-in-out;\n}\n.chartDropdownBox input[type="checkbox"][data-v-1d5278e0] {\n  position: static;\n  left: 0px;\n  opacity: 1;\n  margin-right: .5em;\n}\n.chartDropdown:hover + div.chartDropdownBox[data-v-1d5278e0] {\n  left: auto;\n  top: auto;\n  padding: 1.5em 0.8em 1.5em 0em;\n  /*border: 1px solid var(--c-border);*/\n  box-shadow: 0px 1px 6px var(--dropdown-shadow);\n  max-height: 100%;\n  transition: 300ms ease-in-out;\n}\n.chartDropdownBox[data-v-1d5278e0]:hover {\n  left: auto;\n  top: auto;\n  padding: 1.5em 0.8em 1.5em 0em;\n  /*border: 1px solid var(--c-border);*/\n  box-shadow: 0px 1px 6px var(--dropdown-shadow);\n  max-height: 100%;\n  transition: 300ms ease-in-out;\n}\n.chartDropdown:hover + div.chartDropdownBox li[data-v-1d5278e0] {\n  opacity: 1;\n  padding: 0em 1em;\n  max-height: 100%;\n}\n.chartDropdownBox:hover li[data-v-1d5278e0] {\n  opacity: 1;\n  padding: 0em 1em;\n  max-height: 100%;\n}\n.chartDropdownBox li[data-v-1d5278e0] {\n  list-style-type: none;\n  float: none !important;\n  margin: 0 !important;\n\n  overflow: hidden;\n  padding: 0px;\n  opacity: 0;\n  max-height: 0px;\n  transition: 300ms ease-in-out;\n}\n.tableOptionsWrapper li[data-v-1d5278e0] {\n  float: left;\n  margin: 0em 1.5em .5em 0em;\n}\n@media (min-width: 951px) {\n.tableOptionsWrapper[data-v-1d5278e0] {\n      margin-bottom: 2.1em;\n}\n}\n.tableOptionsWrapper li[data-v-1d5278e0] {\n  list-style-type: none;\n}\n.chartDropdown button[data-v-1d5278e0] {\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n  padding: inherit;\n}\ntd[data-v-1d5278e0], th[data-v-1d5278e0] {\n    text-align: center;\n}\n')();
String.prototype.format = function(vars) {
  let temp = this;
  for (let item in vars)
    temp = temp.replace("${" + item + "}", vars[item]);
  return temp;
};
String.prototype.formatExtraInfoTitle = function() {
  return this.replace(/_/g, " ");
};
Array.prototype.formatExtraInfoText = function(property) {
  let temp = this;
  if (property == "Resolution")
    temp = temp.map((x) => x.x + " x " + x.y);
  return Array.from(new Set(temp.flat())).filter((x) => x || x === false).join(", ").replace(/true/g, "Yes").replace(/false/g, "No");
};
const _sfc_main = {
  data() {
    return {
      infoStrArr: [
        "Identifier: ${identifier}",
        "Released: ${released}",
        "SoC: ${soc}",
        "Arch: ${arch}",
        "Model: ${model}",
        "Board: ${board}"
      ],
      groupedHeaderStr: "Grouped Devices",
      relatedHeaderStr: "Related Devices",
      versionHeaderStr: "Version Table",
      tableHeadObj: {
        build: "Build",
        version: "Version",
        jailbreak: "Jailbreak",
        download: "Download",
        ota: "OTA Download",
        released: "Released"
      },
      optionsStr: "Options",
      sortStr: "Sort",
      deviceStr: "Device",
      allDeviceStr: "Filter",
      naStr: "N/A",
      unknownDateStr: "Unknown",
      viewAllStr: "View all",
      activeTab: "",
      optionsObjStr: {
        showBuildColumn: "Show build numbers",
        showVersionColumn: "Show version numbers",
        showJailbreakColumn: "Show jailbreaks",
        showDownloadColumn: "Show download links",
        showOtaColumn: "Show OTA download links",
        showReleasedColumn: "Show release dates",
        showStable: "Show stable version",
        showBeta: "Show beta versions"
      },
      imgCount: 0,
      maxImgCount: 0,
      options: {
        showBuildColumn: false,
        showVersionColumn: true,
        showJailbreakColumn: true,
        showDownloadColumn: false,
        showOtaColumn: false,
        showReleasedColumn: false,
        showStable: true,
        showBeta: false,
        filterDev: [],
        showAll: {}
      },
      wrapImg: false,
      reverseSorting: false,
      versionArr: [],
      devicePath: "/device",
      fm: usePageFrontmatter(),
      isDarkMode: useDarkMode()
    };
  },
  computed: {
    tabArr() {
      if (!this.fm.extraInfo)
        return [];
      return Array.from(new Set(Object.keys(this.fm.extraInfo).map((x) => this.fm.extraInfo[x]).flat().map((x) => x.type)));
    },
    tabPropertyArr() {
      const arr = Object.keys(this.fm.extraInfo).map((x) => this.fm.extraInfo[x]).flat();
      let retObj = {};
      for (const i of arr) {
        if (!retObj.hasOwnProperty(i.type))
          retObj[i.type] = Object.keys(i).filter((x) => x != "type");
        else
          retObj[i.type].concat(Object.keys(i.type).filter((x) => x != "type"));
      }
      return retObj;
    },
    tabData() {
      let retObj = {};
      for (const dev in this.fm.extraInfo) {
        retObj[dev] = {};
        for (const tab of this.fm.extraInfo[dev]) {
          retObj[dev][tab.type] = {};
          for (const property in tab) {
            if (property == "type")
              continue;
            retObj[dev][tab.type][property] = Array.isArray(tab[property]) ? tab[property] : [tab[property]];
          }
        }
      }
      return retObj;
    },
    infoArr() {
      const dev = this.fm.device;
      function grabInfo(property) {
        if (property == "released") {
          const dateArr = Array.from(new Set(dev.map((x) => x[property]).flat())).filter((x) => x).sort().map((x) => {
            const releasedArr = x.split("-");
            const dateStyleArr = [{ year: "numeric" }, { dateStyle: "medium" }, { dateStyle: "medium" }];
            const date = new Intl.DateTimeFormat("en-US", dateStyleArr[releasedArr.length - 1]).format(new Date(x));
            return date;
          });
          return dateArr;
        }
        return Array.from(new Set(dev.map((x) => x[property]).flat())).sort();
      }
      const propertyArr = [
        "identifier",
        "released",
        "soc",
        "arch",
        "model",
        "board"
      ];
      var retObj = {};
      for (var str of this.infoStrArr) {
        const property = propertyArr.filter((x) => str.includes(x))[0];
        const infoArr = grabInfo(property).filter((x) => x);
        let info = infoArr;
        if (property == "released" && info.length > 1)
          info = info.map((x) => x.replace(",", ""));
        info = info.join(", ");
        if (property == "identifier" && infoArr.includes(this.fm.title))
          info = "N/A";
        if (info)
          retObj[property] = str.format({ [property]: info });
      }
      return retObj;
    },
    groupedOrRelatedDevicesObj() {
      this.fm.device;
      return {
        header: this.fm.grouped ? this.groupedHeaderStr : this.relatedHeaderStr,
        devices: this.fm.device.map((x) => {
          return {
            name: x.name,
            identifier: x.identifier,
            url: [
              this.devicePath,
              "identifier",
              x.key.replace(/ /g, "-")
            ].join("/") + ".html"
          };
        })
      };
    },
    optionsObj() {
      return [
        [
          "showStable",
          "showBeta"
        ],
        [
          "showBuildColumn",
          "showVersionColumn",
          "showJailbreakColumn",
          "showDownloadColumn",
          "showOtaColumn",
          "showReleasedColumn"
        ]
      ].map((x) => {
        return x.map((y) => {
          return {
            label: this.optionsObjStr[y],
            model: y,
            id: y + "Checkbox",
            display: true
          };
        });
      });
    },
    tableHeaders() {
      return [
        {
          label: this.tableHeadObj.build,
          value: this.options.showBuildColumn
        },
        {
          label: this.tableHeadObj.version,
          value: this.options.showVersionColumn
        },
        {
          label: this.tableHeadObj.jailbreak,
          value: this.options.showJailbreakColumn
        },
        {
          label: this.tableHeadObj.download,
          value: this.options.showDownloadColumn
        },
        {
          label: this.tableHeadObj.ota,
          value: this.options.showOtaColumn
        },
        {
          label: this.tableHeadObj.released,
          value: this.options.showReleasedColumn
        }
      ].filter((x) => x.value).map((x) => x.label);
    }
  },
  methods: {
    checkWrap: function() {
      const flexImgs = document.getElementsByClassName("flexImg");
      const flexInfoWidth = document.getElementById("flexInfo").getBoundingClientRect().width;
      const homeElement = document.getElementsByClassName("home")[0];
      var totalWidth = homeElement.clientWidth - parseFloat(window.getComputedStyle(homeElement).paddingLeft) - parseFloat(window.getComputedStyle(homeElement).paddingRight);
      let flexImgWidth = 0;
      const flexImgsLength = flexImgs.length;
      let counter = 0;
      for (let i = 0; i < flexImgsLength; i++) {
        flexImgs[i].onload = () => {
          if (counter >= flexImgsLength)
            return;
          flexImgWidth += flexImgs[i].clientWidth;
          this.wrapImg = totalWidth < flexInfoWidth + flexImgWidth + 10;
          counter++;
        };
      }
      window.onresize = () => {
        totalWidth = totalWidth = homeElement.clientWidth - parseFloat(window.getComputedStyle(homeElement).paddingLeft) - parseFloat(window.getComputedStyle(homeElement).paddingRight);
        this.wrapImg = totalWidth < flexInfoWidth + flexImgWidth + 10;
      };
    },
    validateJSON(text) {
      if (typeof text !== "string") {
        return false;
      }
      try {
        JSON.parse(text);
        return true;
      } catch (error) {
        return false;
      }
    },
    getFilteredDownloads(dlArr) {
      const filterDev = this.options.filterDev;
      const fmDeviceFilter = this.fm.deviceFilter;
      if (JSON.stringify(filterDev) == JSON.stringify(fmDeviceFilter[0].value) || this.fm.mainList)
        return dlArr;
      const retArr = dlArr.filter((x) => filterDev.includes(x.key));
      const urlCount = Array.from(new Set(retArr.map((x) => x.url))).length;
      if (urlCount == 1)
        return [retArr[0]];
      else
        return retArr;
    }
  },
  mounted() {
    this.versionArr = this.fm.versionArr.sort((a, b) => {
      const time = [a, b].map((x) => x.released ? new Date(x.released).getTime() : 0);
      if (time[0] < time[1])
        return 1;
      if (time[0] > time[1])
        return -1;
      const osStr = [a, b].map((x) => x.osStr.toLowerCase());
      if (osStr[0] < osStr[1])
        return -1;
      if (osStr[0] > osStr[1])
        return 1;
      return 0;
    });
    if (this.fm.noJb) {
      this.options.showReleasedColumn = true;
      this.options.showJailbreakColumn = false;
      this.options.showDownloadColumn = false;
    }
    if (window.screen.width > 650) {
      this.options.showReleasedColumn = true;
      if (this.fm.noJb)
        this.options.showDownloadColumn = true;
    }
    if (this.fm.mainList) {
      this.options.filterDev = this.fm.deviceFilter[0].value;
      this.options.showBeta = true;
      this.options.showDownloadColumn = true;
      this.options.showJailbreakColumn = false;
    } else {
      this.checkWrap();
      this.options.filterDev = this.fm.deviceFilter[0].value;
    }
    if (this.tabArr.length > 0)
      this.activeTab = this.tabArr[0];
    this.maxImgCount = this.fm.imgCount;
  },
  watch: {
    imgCount(val) {
      if (val > this.maxImgCount - 1)
        this.imgCount = 0;
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-1d5278e0"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "infoList",
  id: "flexInfo"
};
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "tab-container" };
const _hoisted_5 = ["id", "checked"];
const _hoisted_6 = ["for", "onClick"];
const _hoisted_7 = { style: { "margin": "0" } };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, null, -1));
const _hoisted_10 = ["colspan"];
const _hoisted_11 = {
  key: 0,
  style: { "padding-left": ".5em" },
  class: "hoverElement"
};
const _hoisted_12 = { key: 1 };
const _hoisted_13 = { class: "tableOptionsWrapper" };
const _hoisted_14 = { class: "chartDropdown" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-cog" }, null, -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "arrow down" }, null, -1));
const _hoisted_17 = { class: "chartDropdownBox" };
const _hoisted_18 = ["onUpdate:modelValue", "id"];
const _hoisted_19 = ["for"];
const _hoisted_20 = { key: 0 };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { style: { "padding": "0" } }, [
  /* @__PURE__ */ createBaseVNode("hr")
], -1));
const _hoisted_22 = [
  _hoisted_21
];
const _hoisted_23 = ["onClick"];
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-sort" }, null, -1));
const _hoisted_25 = { key: 0 };
const _hoisted_26 = ["onUpdate:modelValue"];
const _hoisted_27 = ["value"];
const _hoisted_28 = { class: "tableContainer" };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = {
  key: 0,
  class: "showOnHover"
};
const _hoisted_31 = ["href"];
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-download hoverElement",
  style: { "margin-left": ".4em", "position": "absolute" }
}, null, -1));
const _hoisted_33 = [
  _hoisted_32
];
const _hoisted_34 = { key: 1 };
const _hoisted_35 = {
  key: 1,
  class: "showOnHover"
};
const _hoisted_36 = ["href"];
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-download hoverElement",
  style: { "margin-left": ".4em", "position": "absolute" }
}, null, -1));
const _hoisted_38 = [
  _hoisted_37
];
const _hoisted_39 = { key: 2 };
const _hoisted_40 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_41 = { key: 3 };
const _hoisted_42 = ["href"];
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-download opaqueHoverElement",
  style: { "margin-left": ".4em", "position": "absolute" }
}, null, -1));
const _hoisted_44 = { key: 4 };
const _hoisted_45 = ["href"];
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-download opaqueHoverElement",
  style: { "margin-left": ".4em", "position": "absolute" }
}, null, -1));
const _hoisted_47 = {
  key: 5,
  style: { "width": "7em" }
};
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "AppleDB is not affiliated with Apple Inc.", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock(Fragment, null, [
    !$data.fm.mainList ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("div", {
        class: "flexWrapper",
        style: normalizeStyle($data.wrapImg ? "flex-direction: column;" : "flex-direction: row;")
      }, [
        createBaseVNode("ul", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.infoArr, (s, index) => {
            return openBlock(), createElementBlock("li", { key: s }, [
              $options.infoArr[index].split(", ").length > 5 && !$data.options.showAll[index] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(s.replace($options.infoArr[index], $options.infoArr[index].split(", ").slice(0, 3).join(", "))) + ", ", 1),
                createBaseVNode("a", {
                  style: { "user-select": "none", "cursor": "pointer" },
                  onClick: ($event) => $data.options.showAll[index] = true
                }, "...", 8, _hoisted_2)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(s), 1)
              ], 64))
            ]);
          }), 128))
        ]),
        $data.fm.img.count && $data.fm.img.count > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(`padding-top: ${$data.wrapImg ? "1em" : "0"};`),
          class: "devFlexImgWrapper"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Math.min($data.fm.img.count, 3), (i) => {
            return openBlock(), createElementBlock("img", {
              key: i,
              class: normalizeClass(`flexImg flexImg${i}`),
              src: `https://img.appledb.dev/device@main/${$data.fm.device.map((x) => x.key)[0]}/${i - 1}${$data.isDarkMode && $data.fm.img.dark ? "_dark" : ""}.png`,
              style: { "margin-left": ".5em", "max-height": "8em" }
            }, null, 10, _hoisted_3);
          }), 128))
        ], 4)) : createCommentVNode("", true)
      ], 4),
      createBaseVNode("div", _hoisted_4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.tabArr, (tab, index) => {
          return openBlock(), createElementBlock("section", { key: tab }, [
            createBaseVNode("input", {
              id: tab,
              type: "radio",
              checked: $data.activeTab == tab
            }, null, 8, _hoisted_5),
            createBaseVNode("label", {
              for: tab,
              class: "tab-link",
              onClick: ($event) => $data.activeTab = tab
            }, toDisplayString(tab.formatExtraInfoTitle()), 9, _hoisted_6),
            createBaseVNode("div", {
              class: normalizeClass(`tab ${index == $options.tabArr.length - 1 ? "tab-last" : ""}`),
              style: { "overflow-x": "scroll" }
            }, [
              createBaseVNode("table", _hoisted_7, [
                Object.keys($data.fm.extraInfo).length > 1 && [Object.keys($options.tabData).map((x) => $options.tabData[x][tab])].map((d) => Array.from(new Set(d.map((y) => JSON.stringify(Object.keys(y).map((x) => y[x]))))).length)[0] > 1 ? (openBlock(), createElementBlock("tr", _hoisted_8, [
                  _hoisted_9,
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys($data.fm.extraInfo), (dev) => {
                    return openBlock(), createElementBlock("th", { key: dev }, toDisplayString($data.fm.device.filter((x) => x.key == dev)[0].name), 1);
                  }), 128))
                ])) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.tabPropertyArr[tab], (property) => {
                  return openBlock(), createElementBlock("tr", { key: property }, [
                    createBaseVNode("td", null, toDisplayString(property.formatExtraInfoTitle()), 1),
                    Array.from(new Set(Object.keys($options.tabData).map((x) => JSON.stringify($options.tabData[x][tab][property])))).length == 1 && Object.keys($options.tabData).map((x) => JSON.stringify($options.tabData[x][tab][property])).length != 1 ? (openBlock(), createElementBlock("td", {
                      key: 0,
                      colspan: Object.keys($data.fm.extraInfo).length
                    }, toDisplayString($options.tabData[Object.keys($options.tabData)[0]][tab][property].formatExtraInfoText(property)), 9, _hoisted_10)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($options.tabData, (dev) => {
                      return openBlock(), createElementBlock("td", { key: dev }, [
                        dev[tab][property] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(dev[tab][property].formatExtraInfoText(property)), 1)
                        ], 64)) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ]);
                }), 128))
              ])
            ], 2)
          ]);
        }), 128))
      ]),
      !$data.fm.hideChildren && $options.groupedOrRelatedDevicesObj.devices.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("h2", null, toDisplayString($options.groupedOrRelatedDevicesObj.header), 1),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.groupedOrRelatedDevicesObj.devices, (dev) => {
            return openBlock(), createElementBlock("li", {
              key: dev,
              class: "showOnHover"
            }, [
              createVNode(_component_router_link, {
                to: dev.url
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(dev.name), 1)
                ]),
                _: 2
              }, 1032, ["to"]),
              dev.name != dev.identifier ? (openBlock(), createElementBlock("div", _hoisted_11, [
                createBaseVNode("code", null, toDisplayString(dev.identifier), 1)
              ])) : createCommentVNode("", true)
            ]);
          }), 128))
        ])
      ], 64)) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    $data.fm.versionArr && $data.fm.versionArr.length > 0 && !$data.fm.mainList ? (openBlock(), createElementBlock("h2", _hoisted_12, toDisplayString($data.versionHeaderStr), 1)) : createCommentVNode("", true),
    $data.fm.versionArr && $data.fm.versionArr.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      createBaseVNode("ul", _hoisted_13, [
        createBaseVNode("li", {
          style: normalizeStyle(`margin-right: 1.5em; ${$data.fm.deviceFilter.length > 2 ? "padding-top: 0.15em;" : ""}`)
        }, [
          createBaseVNode("label", _hoisted_14, [
            _hoisted_15,
            createTextVNode(" " + toDisplayString($data.optionsStr) + " ", 1),
            _hoisted_16
          ]),
          createBaseVNode("div", _hoisted_17, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.optionsObj.filter((x) => x.filter((y) => y.display).length > 0), (optionSection, index) => {
              return openBlock(), createElementBlock(Fragment, { key: optionSection }, [
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(optionSection.filter((x) => x.display), (option) => {
                    return openBlock(), createElementBlock("li", { key: option }, [
                      withDirectives(createBaseVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => $data.options[option.model] = $event,
                        id: option.id
                      }, null, 8, _hoisted_18), [
                        [vModelCheckbox, $data.options[option.model]]
                      ]),
                      createBaseVNode("label", {
                        for: option.id
                      }, toDisplayString(option.label), 9, _hoisted_19)
                    ]);
                  }), 128))
                ]),
                index < $options.optionsObj.length - 1 ? (openBlock(), createElementBlock("ul", _hoisted_20, _hoisted_22)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ], 4),
        createBaseVNode("li", {
          style: normalizeStyle(`margin-right: 1.5em; ${$data.fm.deviceFilter.length > 2 ? "padding-top: 0.15em;" : ""}`)
        }, [
          createBaseVNode("label", {
            class: "chartDropdown",
            onClick: ($event) => $data.versionArr.reverse()
          }, [
            _hoisted_24,
            createTextVNode(" " + toDisplayString($data.sortStr), 1)
          ], 8, _hoisted_23)
        ], 4),
        !$data.fm.hideChildren && $data.fm.deviceFilter.length > 2 ? (openBlock(), createElementBlock("li", _hoisted_25, [
          withDirectives(createBaseVNode("select", {
            "onUpdate:modelValue": ($event) => $data.options.filterDev = $event,
            name: "deviceSelect",
            id: "deviceSelect",
            style: normalizeStyle(`margin-left: .5em; ${$data.options.filterDev == $data.fm.deviceFilter[0].value ? "color: gray;" : ""}`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.fm.deviceFilter, (filterItem, index) => {
              return openBlock(), createElementBlock("option", {
                key: filterItem,
                value: filterItem.value
              }, [
                index == 0 && !$data.fm.mainList ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString($data.allDeviceStr), 1)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(filterItem.label), 1)
                ], 64))
              ], 8, _hoisted_27);
            }), 128))
          ], 12, _hoisted_26), [
            [vModelSelect, $data.options.filterDev]
          ])
        ])) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", _hoisted_28, [
        createBaseVNode("table", null, [
          createBaseVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.tableHeaders, (header) => {
              return openBlock(), createElementBlock("th", { key: header }, toDisplayString(header), 1);
            }), 128))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.versionArr, (fw) => {
            return openBlock(), createElementBlock(Fragment, { key: fw }, [
              (fw.beta ? $data.options.showBeta : $data.options.showStable) && ($data.fm.mainList ? fw.deviceFilterArr.includes($data.options.filterDev) || $data.options.filterDev == $data.fm.deviceFilter[0].value : fw.deviceFilterArr.some((r) => $data.options.filterDev.includes(r))) ? (openBlock(), createElementBlock("tr", _hoisted_29, [
                $data.options.showBuildColumn ? (openBlock(), createElementBlock("td", _hoisted_30, [
                  createVNode(_component_router_link, {
                    to: fw.url
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(fw.build), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]),
                  $options.getFilteredDownloads(fw.downloads).length == 1 && !$data.options.showDownloadColumn ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.getFilteredDownloads(fw.downloads), (dl) => {
                    return openBlock(), createElementBlock("a", {
                      key: dl,
                      href: dl.url
                    }, _hoisted_33, 8, _hoisted_31);
                  }), 128)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                $data.options.showVersionColumn ? (openBlock(), createElementBlock("td", _hoisted_34, [
                  $data.options.showBuildColumn ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(fw.osStr) + " " + toDisplayString(fw.version), 1)
                  ], 64)) : (openBlock(), createElementBlock("div", _hoisted_35, [
                    createVNode(_component_router_link, {
                      to: fw.url
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(fw.osStr) + " " + toDisplayString(fw.version), 1),
                        fw.duplicateVersion ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createTextVNode(" (" + toDisplayString(fw.build) + ")", 1)
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    $options.getFilteredDownloads(fw.downloads).length == 1 && !$data.options.showDownloadColumn ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.getFilteredDownloads(fw.downloads), (dl) => {
                      return openBlock(), createElementBlock("a", {
                        key: dl,
                        href: dl.url
                      }, _hoisted_38, 8, _hoisted_36);
                    }), 128)) : createCommentVNode("", true)
                  ]))
                ])) : createCommentVNode("", true),
                $data.options.showJailbreakColumn ? (openBlock(), createElementBlock("td", _hoisted_39, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(fw.jailbreakArr, (jb, index) => {
                    return openBlock(), createElementBlock(Fragment, { key: jb }, [
                      createVNode(_component_router_link, {
                        to: encodeURI(`/jailbreak/${jb.replace(/ /g, "-")}.html`)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(jb), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      index < fw.jailbreakArr.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        _hoisted_40
                      ], 64)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)),
                  fw.jailbreakArr.length == 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($data.naStr), 1)
                  ], 64)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                $data.options.showDownloadColumn ? (openBlock(), createElementBlock("td", _hoisted_41, [
                  $options.getFilteredDownloads(fw.downloads).length == 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($data.naStr), 1)
                  ], 64)) : $options.getFilteredDownloads(fw.downloads).length > 1 && $data.fm.mainList ? (openBlock(), createBlock(_component_router_link, {
                    key: 1,
                    to: fw.url
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.viewAllStr), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList($options.getFilteredDownloads(fw.downloads), (dl) => {
                    return openBlock(), createElementBlock("div", {
                      key: dl,
                      class: "showOnHover"
                    }, [
                      $options.getFilteredDownloads(fw.downloads).length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(dl.deviceName) + ": ", 1)
                      ], 64)) : createCommentVNode("", true),
                      createBaseVNode("a", {
                        href: dl.url
                      }, [
                        createTextVNode(toDisplayString(dl.label) + " ", 1),
                        _hoisted_43
                      ], 8, _hoisted_42)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                $data.options.showOtaColumn ? (openBlock(), createElementBlock("td", _hoisted_44, [
                  $options.getFilteredDownloads(fw.otas).length == 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($data.naStr), 1)
                  ], 64)) : $options.getFilteredDownloads(fw.otas).length > 1 && $data.fm.mainList ? (openBlock(), createBlock(_component_router_link, {
                    key: 1,
                    to: fw.url
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.viewAllStr), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList($options.getFilteredDownloads(fw.otas), (dl) => {
                    return openBlock(), createElementBlock("div", {
                      key: dl,
                      class: "showOnHover"
                    }, [
                      $options.getFilteredDownloads(fw.otas).length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(dl.deviceName) + ": ", 1)
                      ], 64)) : createCommentVNode("", true),
                      createBaseVNode("a", {
                        href: dl.url
                      }, [
                        createTextVNode(toDisplayString(dl.label) + " ", 1),
                        _hoisted_46
                      ], 8, _hoisted_45)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                $data.options.showReleasedColumn ? (openBlock(), createElementBlock("td", _hoisted_47, toDisplayString(fw.releasedStr ? fw.releasedStr : $data.unknownDateStr), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ])
      ])
    ], 64)) : createCommentVNode("", true),
    _hoisted_48
  ], 64);
}
var device = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1d5278e0"], ["__file", "device.vue"]]);
export { device as default };
