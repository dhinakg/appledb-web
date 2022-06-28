import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, f as defineComponent, i as usePageFrontmatter, j as computed, k as isArray, h as unref, F as Fragment, l as renderList, b as createBaseVNode, t as toDisplayString, m as createCommentVNode, n as useRoute, p as toRefs, q as createBlock, w as withCtx, s as mergeProps, v as renderSlot, x as isLinkHttp, y as isLinkMailto, z as isLinkTel, A as useSiteData, B as useSiteLocaleData, C as useDarkMode, D as normalizeClass, E as normalizeStyle, u as useRouteLocale, g as useThemeLocaleData, G as h, H as withBase, I as ClientOnly, T as Transition, J as ref, K as watch, L as withDirectives, M as vShow, N as removeLeadingSlash, O as removeEndingSlash, P as useRouter, Q as isString$1, R as useNavLink, e as createStaticVNode, S as onMounted, d as createTextVNode, U as usePageData, V as useSidebarItems, W as isPlainObject, X as withKeys, Y as onUnmounted, Z as useScrollPromise, $ as useThemeLocaleData$1 } from "./app.f09cac20.js";
const _sfc_main$k = {};
const _hoisted_1$g = { class: "theme-default-content" };
function _sfc_render(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    createVNode(_component_Content)
  ]);
}
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render], ["__file", "HomeContent.vue"]]);
const _hoisted_1$f = {
  key: 0,
  class: "features"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "HomeFeatures",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _cache) => {
      return unref(features).length ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(features), (feature) => {
          return openBlock(), createElementBlock("div", {
            key: feature.title,
            class: "feature"
          }, [
            createBaseVNode("h2", null, toDisplayString(feature.title), 1),
            createBaseVNode("p", null, toDisplayString(feature.details), 1)
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "HomeFeatures.vue"]]);
const _hoisted_1$e = ["innerHTML"];
const _hoisted_2$9 = ["textContent"];
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HomeFooter",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = computed(() => frontmatter.value.footer);
    const footerHtml = computed(() => frontmatter.value.footerHtml);
    return (_ctx, _cache) => {
      return unref(footer) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        unref(footerHtml) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "footer",
          innerHTML: unref(footer)
        }, null, 8, _hoisted_1$e)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "footer",
          textContent: toDisplayString(unref(footer))
        }, null, 8, _hoisted_2$9))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
var HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "HomeFooter.vue"]]);
const _hoisted_1$d = ["innerHTML"];
const _hoisted_2$8 = ["href", "rel", "target", "aria-label"];
const _hoisted_3$8 = ["innerHTML"];
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "AutoLink",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const site = useSiteData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = resolveComponent("AutoLinkExternalIcon");
      return unref(isRouterLink) ? (openBlock(), createBlock(_component_RouterLink, mergeProps({
        key: 0,
        class: { "router-link-active": unref(isActive) },
        to: unref(item).link,
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "before"),
          createBaseVNode("span", {
            innerHTML: unref(item).text
          }, null, 8, _hoisted_1$d),
          renderSlot(_ctx.$slots, "after")
        ]),
        _: 3
      }, 16, ["class", "to", "aria-label"])) : (openBlock(), createElementBlock("a", mergeProps({
        key: 1,
        class: "external-link",
        href: unref(item).link,
        rel: unref(linkRel),
        target: unref(linkTarget),
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "before"),
        createBaseVNode("span", {
          innerHTML: unref(item).text
        }, null, 8, _hoisted_3$8),
        unref(isBlankTarget) ? (openBlock(), createBlock(_component_AutoLinkExternalIcon, { key: 0 })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "after")
      ], 16, _hoisted_2$8));
    };
  }
});
var AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "AutoLink.vue"]]);
const _hoisted_1$c = { class: "heroWrapper" };
const _hoisted_2$7 = {
  key: 0,
  id: "main-title"
};
const _hoisted_3$7 = {
  key: 1,
  class: "description"
};
const _hoisted_4$4 = {
  key: 2,
  class: "actions"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroFilter = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroFilterDark !== void 0) {
        return frontmatter.value.heroFilterDark;
      }
      return frontmatter.value.heroFilter;
    });
    const heroColour = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroColourDark !== void 0) {
        return frontmatter.value.heroColourDark;
      }
      return frontmatter.value.heroColour;
    });
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text: text3, link: link3, type = "primary" }) => ({
        text: text3,
        link: link3,
        type
      }));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: "hero heroImage",
        style: normalizeStyle({
          "background-image": "linear-gradient(rgba(0, 0, 0, " + unref(heroFilter) + "), rgba(0, 0, 0, " + unref(heroFilter) + ")), url(" + unref(heroImage) + ")",
          "background-color": unref(heroColour)
        })
      }, [
        createBaseVNode("div", _hoisted_1$c, [
          unref(heroText) ? (openBlock(), createElementBlock("h1", _hoisted_2$7, toDisplayString(unref(heroText)), 1)) : createCommentVNode("", true),
          unref(tagline) ? (openBlock(), createElementBlock("p", _hoisted_3$7, toDisplayString(unref(tagline)), 1)) : createCommentVNode("", true),
          unref(actions).length ? (openBlock(), createElementBlock("p", _hoisted_4$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(actions), (action) => {
              return openBlock(), createBlock(AutoLink, {
                key: action.text,
                class: normalizeClass(["action-button", [action.type]]),
                item: action
              }, null, 8, ["class", "item"]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 4);
    };
  }
});
var HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "HomeHero.vue"]]);
const _hoisted_1$b = { class: "hero" };
const _hoisted_2$6 = { class: "home" };
const _hoisted_3$6 = ["innerHTML"];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$b, [
          createVNode(HomeHero)
        ]),
        createBaseVNode("main", _hoisted_2$6, [
          createVNode(HomeFeatures),
          createVNode(HomeContent),
          createBaseVNode("div", { innerHTML: `
            <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8267943526926430'
                crossorigin='anonymous'><\/script>
            <!-- Ad Unit 0 -->
            <ins class='adsbygoogle'
                style='display:block'
                data-ad-client='ca-pub-8267943526926430'
                data-ad-slot='1237978719'
                data-ad-format='auto'
                data-full-width-responsive='true'></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            <\/script>
        ` }, null, 8, _hoisted_3$6),
          createVNode(HomeFooter)
        ])
      ], 64);
    };
  }
});
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "Home.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "NavbarBrand",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(_component_RouterLink, { to: unref(navbarBrandLink) }, {
        default: withCtx(() => [
          createVNode(NavbarBrandLogo),
          unref(navbarBrandTitle) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["site-name", { "can-hide": unref(navbarBrandLogo) }])
          }, toDisplayString(unref(navbarBrandTitle)), 3)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
var NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "NavbarBrand.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  setup(__props) {
    const setHeight = (items) => {
      items.style.height = items.scrollHeight + "px";
    };
    const unsetHeight = (items) => {
      items.style.height = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "dropdown",
        onEnter: setHeight,
        onAfterEnter: unsetHeight,
        onBeforeLeave: setHeight
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
var DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "DropdownTransition.vue"]]);
const _hoisted_1$a = ["aria-label"];
const _hoisted_2$5 = ["innerHTML"];
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("span", { class: "arrow down" }, null, -1);
const _hoisted_4$3 = ["aria-label"];
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6$1 = { class: "navbar-dropdown" };
const _hoisted_7$1 = { class: "navbar-dropdown-subtitle" };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdown",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const open = ref(false);
    const route = useRoute();
    watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      if (isTriggerByTab) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-dropdown-wrapper", { open: open.value }])
      }, [
        createBaseVNode("button", {
          class: "navbar-dropdown-title",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: handleDropdown
        }, [
          createBaseVNode("span", {
            class: "title",
            innerHTML: unref(item).text
          }, null, 8, _hoisted_2$5),
          _hoisted_3$5
        ], 8, _hoisted_1$a),
        createBaseVNode("button", {
          class: "navbar-dropdown-title-mobile",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("span", {
            class: "title",
            innerHTML: unref(item).text
          }, null, 8, _hoisted_5$1),
          createBaseVNode("span", {
            class: normalizeClass(["arrow", open.value ? "down" : "right"])
          }, null, 2)
        ], 8, _hoisted_4$3),
        createVNode(DropdownTransition, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_6$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createElementBlock("li", {
                  key: child.text,
                  class: "navbar-dropdown-item"
                }, [
                  child.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("h4", _hoisted_7$1, [
                      child.link ? (openBlock(), createBlock(AutoLink, {
                        key: 0,
                        item: child,
                        onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                      }, null, 8, ["item", "onFocusout"])) : (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(child.text), 1))
                    ]),
                    createBaseVNode("ul", _hoisted_9$1, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(child.children, (grandchild) => {
                        return openBlock(), createElementBlock("li", {
                          key: grandchild.link,
                          class: "navbar-dropdown-subitem"
                        }, [
                          createVNode(AutoLink, {
                            item: grandchild,
                            onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                          }, null, 8, ["item", "onFocusout"])
                        ]);
                      }), 128))
                    ])
                  ], 64)) : (openBlock(), createBlock(AutoLink, {
                    key: 1,
                    item: child,
                    onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                  }, null, 8, ["item", "onFocusout"]))
                ]);
              }), 128))
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
var NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link3, route) => {
  if (route.hash === link3) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link3);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _hoisted_1$9 = {
  key: 0,
  class: "navbar-items"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text3 = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link3;
            if (targetLang === siteLocale.value.lang) {
              link3 = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link3 = targetLocalePage;
              } else {
                link3 = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text: text3,
              link: link3
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString$1(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return {
          ...item,
          children: item.children.map(resolveNavbarItem)
        };
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _cache) => {
      return unref(navbarLinks).length ? (openBlock(), createElementBlock("nav", _hoisted_1$9, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbarLinks), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.text,
            class: "navbar-item"
          }, [
            item.children ? (openBlock(), createBlock(NavbarDropdown, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(AutoLink, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "NavbarItems.vue"]]);
const _hoisted_1$8 = ["title"];
const _hoisted_2$4 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_3$4 = /* @__PURE__ */ createStaticVNode('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9);
const _hoisted_12 = [
  _hoisted_3$4
];
const _hoisted_13 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14
];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ToggleColorModeButton",
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode,
        onClick: toggleColorMode
      }, [
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_2$4, _hoisted_12, 512)), [
          [vShow, !unref(isDarkMode)]
        ]),
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_13, _hoisted_15, 512)), [
          [vShow, unref(isDarkMode)]
        ])
      ], 8, _hoisted_1$8);
    };
  }
});
var ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "ToggleColorModeButton.vue"]]);
const _hoisted_1$7 = ["title"];
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle"))
      }, _hoisted_3$3, 8, _hoisted_1$7);
    };
  }
});
var ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el2, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el2 == null ? void 0 : el2.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el2, null)) == null ? void 0 : _c[property];
      const num2 = Number.parseInt(val, 10);
      return Number.isNaN(num2) ? 0 : num2;
    }
    return (_ctx, _cache) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      return openBlock(), createElementBlock("header", {
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, [
        createVNode(ToggleSidebarButton, {
          onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar"))
        }),
        createBaseVNode("span", {
          ref_key: "navbarBrand",
          ref: navbarBrand
        }, [
          createVNode(NavbarBrand)
        ], 512),
        createBaseVNode("div", {
          class: "navbar-items-wrapper",
          style: normalizeStyle(unref(linksWrapperStyle))
        }, [
          renderSlot(_ctx.$slots, "before"),
          createVNode(NavbarItems, { class: "can-hide" }),
          renderSlot(_ctx.$slots, "after"),
          unref(themeLocale).colorModeSwitch ? (openBlock(), createBlock(ToggleColorModeButton, { key: 0 })) : createCommentVNode("", true),
          createVNode(_component_NavbarSearch)
        ], 4)
      ], 512);
    };
  }
});
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "Navbar.vue"]]);
const _hoisted_1$6 = { class: "page-meta" };
const _hoisted_2$2 = {
  key: 0,
  class: "meta-item edit-link"
};
const _hoisted_3$2 = {
  key: 1,
  class: "meta-item last-updated"
};
const _hoisted_4$2 = { class: "meta-item-label" };
const _hoisted_5 = { class: "meta-item-info" };
const _hoisted_6 = {
  key: 2,
  class: "meta-item contributors"
};
const _hoisted_7 = { class: "meta-item-label" };
const _hoisted_8 = { class: "meta-item-info" };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ createTextVNode(", ");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        let ret = (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
        if (frontmatter.value.extra_contributors)
          ret = ret.concat(frontmatter.value.extra_contributors.map((x) => {
            return {
              name: x,
              email: null,
              commits: 0
            };
          }));
        return ret;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("footer", _hoisted_1$6, [
        unref(editNavLink) ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createVNode(AutoLink, {
            class: "meta-item-label",
            item: unref(editNavLink)
          }, null, 8, ["item"])
        ])) : createCommentVNode("", true),
        unref(lastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createBaseVNode("span", _hoisted_4$2, toDisplayString(unref(themeLocale).lastUpdatedText) + ": ", 1),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_5, toDisplayString(unref(lastUpdated)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(contributors) && unref(contributors).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("span", _hoisted_7, toDisplayString(unref(themeLocale).contributorsText) + ": ", 1),
          createBaseVNode("span", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contributors), (contributor, index) => {
              return openBlock(), createElementBlock(Fragment, { key: index }, [
                createBaseVNode("span", {
                  class: "contributor",
                  title: `email: ${contributor.email}`
                }, toDisplayString(contributor.name), 9, _hoisted_9),
                index !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  _hoisted_10
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "PageMeta.vue"]]);
const _hoisted_1$5 = {
  key: 0,
  class: "page-nav"
};
const _hoisted_2$1 = { class: "inner" };
const _hoisted_3$1 = {
  key: 0,
  class: "prev"
};
const _hoisted_4$1 = {
  key: 1,
  class: "next"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString$1(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index !== -1) {
        const targetItem = sidebarItems2[index + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _cache) => {
      return unref(prevNavLink) || unref(nextNavLink) ? (openBlock(), createElementBlock("nav", _hoisted_1$5, [
        createBaseVNode("p", _hoisted_2$1, [
          unref(prevNavLink) ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
            createVNode(AutoLink, { item: unref(prevNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true),
          unref(nextNavLink) ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
            createVNode(AutoLink, { item: unref(nextNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageNav.vue"]]);
const _hoisted_1$4 = { class: "page" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    frontmatter.value.title;
    const chartType = frontmatter.value.chartType || "";
    const widePage = frontmatter.value.widePage || false;
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      const _component_firmwareVersion = resolveComponent("firmwareVersion");
      const _component_jailbreak = resolveComponent("jailbreak");
      const _component_device = resolveComponent("device");
      const _component_deviceList = resolveComponent("deviceList");
      const _component_deviceGroupList = resolveComponent("deviceGroupList");
      const _component_deviceGroup = resolveComponent("deviceGroup");
      return openBlock(), createElementBlock("main", _hoisted_1$4, [
        createBaseVNode("div", {
          class: normalizeClass(unref(widePage) ? "home" : "theme-default-content")
        }, [
          renderSlot(_ctx.$slots, "top"),
          !unref(chartType) ? (openBlock(), createBlock(_component_Content, { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            unref(chartType) == "firmwareVersion" ? (openBlock(), createBlock(_component_firmwareVersion, { key: 0 })) : unref(chartType) == "jailbreak" ? (openBlock(), createBlock(_component_jailbreak, { key: 1 })) : unref(chartType) == "device" ? (openBlock(), createBlock(_component_device, { key: 2 })) : unref(chartType) == "deviceList" ? (openBlock(), createBlock(_component_deviceList, { key: 3 })) : unref(chartType) == "deviceGroupList" ? (openBlock(), createBlock(_component_deviceGroupList, { key: 4 })) : unref(chartType) == "deviceGroup" ? (openBlock(), createBlock(_component_deviceGroup, { key: 5 })) : createCommentVNode("", true)
          ], 64)),
          renderSlot(_ctx.$slots, "bottom")
        ], 2),
        createVNode(PageMeta),
        createVNode(PageNav)
      ]);
    };
  }
});
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "Page.vue"]]);
const _hoisted_1$3 = { class: "sidebar-item-children" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = ref(true);
    const onClick = ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      return openBlock(), createElementBlock("li", null, [
        unref(item).link ? (openBlock(), createBlock(AutoLink, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : (openBlock(), createElementBlock("p", {
          key: 1,
          tabindex: "0",
          class: normalizeClass(unref(itemClass)),
          onClick: _cache[0] || (_cache[0] = (...args) => onClick.value && onClick.value(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => onClick.value && onClick.value(...args), ["enter"]))
        }, [
          createTextVNode(toDisplayString(unref(item).text) + " ", 1),
          unref(item).collapsible ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["arrow", isOpen.value ? "down" : "right"])
          }, null, 2)) : createCommentVNode("", true)
        ], 34)),
        ((_a = unref(item).children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(DropdownTransition, { key: 2 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_1$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createBlock(_component_SidebarItem, {
                  key: `${unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: unref(depth) + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, isOpen.value]
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "SidebarItem.vue"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const sidebar = document.querySelector(".sidebar");
        if (!sidebar)
          return;
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-item[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop) {
          activeSidebarItem.scrollIntoView(true);
        } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
          activeSidebarItem.scrollIntoView(false);
        }
      });
    });
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(SidebarItem, {
            key: item.link || item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItems.vue"]]);
const _hoisted_1$1 = { class: "sidebar" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$1, [
        createVNode(NavbarItems),
        renderSlot(_ctx.$slots, "top"),
        createVNode(SidebarItems),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "Sidebar.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["theme-container", unref(containerClass)]),
        onTouchstart: onTouchStart,
        onTouchend: onTouchEnd
      }, [
        renderSlot(_ctx.$slots, "navbar", {}, () => [
          unref(shouldShowNavbar) ? (openBlock(), createBlock(Navbar, {
            key: 0,
            onToggleSidebar: toggleSidebar
          }, {
            before: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-before")
            ]),
            after: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-after")
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: "sidebar-mask",
          onClick: _cache[0] || (_cache[0] = ($event) => toggleSidebar(false))
        }),
        renderSlot(_ctx.$slots, "sidebar", {}, () => [
          createVNode(Sidebar, null, {
            top: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-top")
            ]),
            bottom: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-bottom")
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "page", {}, () => [
          unref(frontmatter).home ? (openBlock(), createBlock(Home, { key: 0 })) : (openBlock(), createBlock(Transition, {
            key: 1,
            name: "fade-slide-y",
            mode: "out-in",
            onBeforeEnter: unref(onBeforeEnter),
            onBeforeLeave: unref(onBeforeLeave)
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Page, {
                key: unref(page).path
              }, {
                top: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-top")
                ]),
                "content-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-top")
                ]),
                "content-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-bottom")
                ]),
                bottom: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-bottom")
                ]),
                _: 3
              }))
            ]),
            _: 3
          }, 8, ["onBeforeEnter", "onBeforeLeave"]))
        ])
      ], 34);
    };
  }
});
var ParentLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Layout.vue"]]);
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var utils$1 = {};
const Aacute = "\xC1";
const aacute = "\xE1";
const Abreve = "\u0102";
const abreve = "\u0103";
const ac = "\u223E";
const acd = "\u223F";
const acE = "\u223E\u0333";
const Acirc = "\xC2";
const acirc = "\xE2";
const acute = "\xB4";
const Acy = "\u0410";
const acy = "\u0430";
const AElig = "\xC6";
const aelig = "\xE6";
const af = "\u2061";
const Afr = "\u{1D504}";
const afr = "\u{1D51E}";
const Agrave = "\xC0";
const agrave = "\xE0";
const alefsym = "\u2135";
const aleph = "\u2135";
const Alpha = "\u0391";
const alpha = "\u03B1";
const Amacr = "\u0100";
const amacr = "\u0101";
const amalg = "\u2A3F";
const amp = "&";
const AMP = "&";
const andand = "\u2A55";
const And = "\u2A53";
const and = "\u2227";
const andd = "\u2A5C";
const andslope = "\u2A58";
const andv = "\u2A5A";
const ang = "\u2220";
const ange = "\u29A4";
const angle = "\u2220";
const angmsdaa = "\u29A8";
const angmsdab = "\u29A9";
const angmsdac = "\u29AA";
const angmsdad = "\u29AB";
const angmsdae = "\u29AC";
const angmsdaf = "\u29AD";
const angmsdag = "\u29AE";
const angmsdah = "\u29AF";
const angmsd = "\u2221";
const angrt = "\u221F";
const angrtvb = "\u22BE";
const angrtvbd = "\u299D";
const angsph = "\u2222";
const angst = "\xC5";
const angzarr = "\u237C";
const Aogon = "\u0104";
const aogon = "\u0105";
const Aopf = "\u{1D538}";
const aopf = "\u{1D552}";
const apacir = "\u2A6F";
const ap = "\u2248";
const apE = "\u2A70";
const ape = "\u224A";
const apid = "\u224B";
const apos = "'";
const ApplyFunction = "\u2061";
const approx = "\u2248";
const approxeq = "\u224A";
const Aring = "\xC5";
const aring = "\xE5";
const Ascr = "\u{1D49C}";
const ascr = "\u{1D4B6}";
const Assign = "\u2254";
const ast = "*";
const asymp = "\u2248";
const asympeq = "\u224D";
const Atilde = "\xC3";
const atilde = "\xE3";
const Auml = "\xC4";
const auml = "\xE4";
const awconint = "\u2233";
const awint = "\u2A11";
const backcong = "\u224C";
const backepsilon = "\u03F6";
const backprime = "\u2035";
const backsim = "\u223D";
const backsimeq = "\u22CD";
const Backslash = "\u2216";
const Barv = "\u2AE7";
const barvee = "\u22BD";
const barwed = "\u2305";
const Barwed = "\u2306";
const barwedge = "\u2305";
const bbrk = "\u23B5";
const bbrktbrk = "\u23B6";
const bcong = "\u224C";
const Bcy = "\u0411";
const bcy = "\u0431";
const bdquo = "\u201E";
const becaus = "\u2235";
const because = "\u2235";
const Because = "\u2235";
const bemptyv = "\u29B0";
const bepsi = "\u03F6";
const bernou = "\u212C";
const Bernoullis = "\u212C";
const Beta = "\u0392";
const beta = "\u03B2";
const beth = "\u2136";
const between = "\u226C";
const Bfr = "\u{1D505}";
const bfr = "\u{1D51F}";
const bigcap = "\u22C2";
const bigcirc = "\u25EF";
const bigcup = "\u22C3";
const bigodot = "\u2A00";
const bigoplus = "\u2A01";
const bigotimes = "\u2A02";
const bigsqcup = "\u2A06";
const bigstar = "\u2605";
const bigtriangledown = "\u25BD";
const bigtriangleup = "\u25B3";
const biguplus = "\u2A04";
const bigvee = "\u22C1";
const bigwedge = "\u22C0";
const bkarow = "\u290D";
const blacklozenge = "\u29EB";
const blacksquare = "\u25AA";
const blacktriangle = "\u25B4";
const blacktriangledown = "\u25BE";
const blacktriangleleft = "\u25C2";
const blacktriangleright = "\u25B8";
const blank = "\u2423";
const blk12 = "\u2592";
const blk14 = "\u2591";
const blk34 = "\u2593";
const block$1 = "\u2588";
const bne = "=\u20E5";
const bnequiv = "\u2261\u20E5";
const bNot = "\u2AED";
const bnot = "\u2310";
const Bopf = "\u{1D539}";
const bopf = "\u{1D553}";
const bot = "\u22A5";
const bottom = "\u22A5";
const bowtie = "\u22C8";
const boxbox = "\u29C9";
const boxdl = "\u2510";
const boxdL = "\u2555";
const boxDl = "\u2556";
const boxDL = "\u2557";
const boxdr = "\u250C";
const boxdR = "\u2552";
const boxDr = "\u2553";
const boxDR = "\u2554";
const boxh = "\u2500";
const boxH = "\u2550";
const boxhd = "\u252C";
const boxHd = "\u2564";
const boxhD = "\u2565";
const boxHD = "\u2566";
const boxhu = "\u2534";
const boxHu = "\u2567";
const boxhU = "\u2568";
const boxHU = "\u2569";
const boxminus = "\u229F";
const boxplus = "\u229E";
const boxtimes = "\u22A0";
const boxul = "\u2518";
const boxuL = "\u255B";
const boxUl = "\u255C";
const boxUL = "\u255D";
const boxur = "\u2514";
const boxuR = "\u2558";
const boxUr = "\u2559";
const boxUR = "\u255A";
const boxv = "\u2502";
const boxV = "\u2551";
const boxvh = "\u253C";
const boxvH = "\u256A";
const boxVh = "\u256B";
const boxVH = "\u256C";
const boxvl = "\u2524";
const boxvL = "\u2561";
const boxVl = "\u2562";
const boxVL = "\u2563";
const boxvr = "\u251C";
const boxvR = "\u255E";
const boxVr = "\u255F";
const boxVR = "\u2560";
const bprime = "\u2035";
const breve = "\u02D8";
const Breve = "\u02D8";
const brvbar = "\xA6";
const bscr = "\u{1D4B7}";
const Bscr = "\u212C";
const bsemi = "\u204F";
const bsim = "\u223D";
const bsime = "\u22CD";
const bsolb = "\u29C5";
const bsol = "\\";
const bsolhsub = "\u27C8";
const bull = "\u2022";
const bullet = "\u2022";
const bump = "\u224E";
const bumpE = "\u2AAE";
const bumpe = "\u224F";
const Bumpeq = "\u224E";
const bumpeq = "\u224F";
const Cacute = "\u0106";
const cacute = "\u0107";
const capand = "\u2A44";
const capbrcup = "\u2A49";
const capcap = "\u2A4B";
const cap = "\u2229";
const Cap = "\u22D2";
const capcup = "\u2A47";
const capdot = "\u2A40";
const CapitalDifferentialD = "\u2145";
const caps = "\u2229\uFE00";
const caret = "\u2041";
const caron = "\u02C7";
const Cayleys = "\u212D";
const ccaps = "\u2A4D";
const Ccaron = "\u010C";
const ccaron = "\u010D";
const Ccedil = "\xC7";
const ccedil = "\xE7";
const Ccirc = "\u0108";
const ccirc = "\u0109";
const Cconint = "\u2230";
const ccups = "\u2A4C";
const ccupssm = "\u2A50";
const Cdot = "\u010A";
const cdot = "\u010B";
const cedil = "\xB8";
const Cedilla = "\xB8";
const cemptyv = "\u29B2";
const cent = "\xA2";
const centerdot = "\xB7";
const CenterDot = "\xB7";
const cfr = "\u{1D520}";
const Cfr = "\u212D";
const CHcy = "\u0427";
const chcy = "\u0447";
const check = "\u2713";
const checkmark = "\u2713";
const Chi = "\u03A7";
const chi = "\u03C7";
const circ = "\u02C6";
const circeq = "\u2257";
const circlearrowleft = "\u21BA";
const circlearrowright = "\u21BB";
const circledast = "\u229B";
const circledcirc = "\u229A";
const circleddash = "\u229D";
const CircleDot = "\u2299";
const circledR = "\xAE";
const circledS = "\u24C8";
const CircleMinus = "\u2296";
const CirclePlus = "\u2295";
const CircleTimes = "\u2297";
const cir = "\u25CB";
const cirE = "\u29C3";
const cire = "\u2257";
const cirfnint = "\u2A10";
const cirmid = "\u2AEF";
const cirscir = "\u29C2";
const ClockwiseContourIntegral = "\u2232";
const CloseCurlyDoubleQuote = "\u201D";
const CloseCurlyQuote = "\u2019";
const clubs = "\u2663";
const clubsuit = "\u2663";
const colon = ":";
const Colon = "\u2237";
const Colone = "\u2A74";
const colone = "\u2254";
const coloneq = "\u2254";
const comma = ",";
const commat = "@";
const comp = "\u2201";
const compfn = "\u2218";
const complement = "\u2201";
const complexes = "\u2102";
const cong = "\u2245";
const congdot = "\u2A6D";
const Congruent = "\u2261";
const conint = "\u222E";
const Conint = "\u222F";
const ContourIntegral = "\u222E";
const copf = "\u{1D554}";
const Copf = "\u2102";
const coprod = "\u2210";
const Coproduct = "\u2210";
const copy = "\xA9";
const COPY = "\xA9";
const copysr = "\u2117";
const CounterClockwiseContourIntegral = "\u2233";
const crarr = "\u21B5";
const cross = "\u2717";
const Cross = "\u2A2F";
const Cscr = "\u{1D49E}";
const cscr = "\u{1D4B8}";
const csub = "\u2ACF";
const csube = "\u2AD1";
const csup = "\u2AD0";
const csupe = "\u2AD2";
const ctdot = "\u22EF";
const cudarrl = "\u2938";
const cudarrr = "\u2935";
const cuepr = "\u22DE";
const cuesc = "\u22DF";
const cularr = "\u21B6";
const cularrp = "\u293D";
const cupbrcap = "\u2A48";
const cupcap = "\u2A46";
const CupCap = "\u224D";
const cup = "\u222A";
const Cup = "\u22D3";
const cupcup = "\u2A4A";
const cupdot = "\u228D";
const cupor = "\u2A45";
const cups = "\u222A\uFE00";
const curarr = "\u21B7";
const curarrm = "\u293C";
const curlyeqprec = "\u22DE";
const curlyeqsucc = "\u22DF";
const curlyvee = "\u22CE";
const curlywedge = "\u22CF";
const curren = "\xA4";
const curvearrowleft = "\u21B6";
const curvearrowright = "\u21B7";
const cuvee = "\u22CE";
const cuwed = "\u22CF";
const cwconint = "\u2232";
const cwint = "\u2231";
const cylcty = "\u232D";
const dagger = "\u2020";
const Dagger = "\u2021";
const daleth = "\u2138";
const darr = "\u2193";
const Darr = "\u21A1";
const dArr = "\u21D3";
const dash = "\u2010";
const Dashv = "\u2AE4";
const dashv = "\u22A3";
const dbkarow = "\u290F";
const dblac = "\u02DD";
const Dcaron = "\u010E";
const dcaron = "\u010F";
const Dcy = "\u0414";
const dcy = "\u0434";
const ddagger = "\u2021";
const ddarr = "\u21CA";
const DD = "\u2145";
const dd = "\u2146";
const DDotrahd = "\u2911";
const ddotseq = "\u2A77";
const deg = "\xB0";
const Del = "\u2207";
const Delta = "\u0394";
const delta = "\u03B4";
const demptyv = "\u29B1";
const dfisht = "\u297F";
const Dfr = "\u{1D507}";
const dfr = "\u{1D521}";
const dHar = "\u2965";
const dharl = "\u21C3";
const dharr = "\u21C2";
const DiacriticalAcute = "\xB4";
const DiacriticalDot = "\u02D9";
const DiacriticalDoubleAcute = "\u02DD";
const DiacriticalGrave = "`";
const DiacriticalTilde = "\u02DC";
const diam = "\u22C4";
const diamond = "\u22C4";
const Diamond = "\u22C4";
const diamondsuit = "\u2666";
const diams = "\u2666";
const die = "\xA8";
const DifferentialD = "\u2146";
const digamma = "\u03DD";
const disin = "\u22F2";
const div = "\xF7";
const divide = "\xF7";
const divideontimes = "\u22C7";
const divonx = "\u22C7";
const DJcy = "\u0402";
const djcy = "\u0452";
const dlcorn = "\u231E";
const dlcrop = "\u230D";
const dollar = "$";
const Dopf = "\u{1D53B}";
const dopf = "\u{1D555}";
const Dot = "\xA8";
const dot = "\u02D9";
const DotDot = "\u20DC";
const doteq = "\u2250";
const doteqdot = "\u2251";
const DotEqual = "\u2250";
const dotminus = "\u2238";
const dotplus = "\u2214";
const dotsquare = "\u22A1";
const doublebarwedge = "\u2306";
const DoubleContourIntegral = "\u222F";
const DoubleDot = "\xA8";
const DoubleDownArrow = "\u21D3";
const DoubleLeftArrow = "\u21D0";
const DoubleLeftRightArrow = "\u21D4";
const DoubleLeftTee = "\u2AE4";
const DoubleLongLeftArrow = "\u27F8";
const DoubleLongLeftRightArrow = "\u27FA";
const DoubleLongRightArrow = "\u27F9";
const DoubleRightArrow = "\u21D2";
const DoubleRightTee = "\u22A8";
const DoubleUpArrow = "\u21D1";
const DoubleUpDownArrow = "\u21D5";
const DoubleVerticalBar = "\u2225";
const DownArrowBar = "\u2913";
const downarrow = "\u2193";
const DownArrow = "\u2193";
const Downarrow = "\u21D3";
const DownArrowUpArrow = "\u21F5";
const DownBreve = "\u0311";
const downdownarrows = "\u21CA";
const downharpoonleft = "\u21C3";
const downharpoonright = "\u21C2";
const DownLeftRightVector = "\u2950";
const DownLeftTeeVector = "\u295E";
const DownLeftVectorBar = "\u2956";
const DownLeftVector = "\u21BD";
const DownRightTeeVector = "\u295F";
const DownRightVectorBar = "\u2957";
const DownRightVector = "\u21C1";
const DownTeeArrow = "\u21A7";
const DownTee = "\u22A4";
const drbkarow = "\u2910";
const drcorn = "\u231F";
const drcrop = "\u230C";
const Dscr = "\u{1D49F}";
const dscr = "\u{1D4B9}";
const DScy = "\u0405";
const dscy = "\u0455";
const dsol = "\u29F6";
const Dstrok = "\u0110";
const dstrok = "\u0111";
const dtdot = "\u22F1";
const dtri = "\u25BF";
const dtrif = "\u25BE";
const duarr = "\u21F5";
const duhar = "\u296F";
const dwangle = "\u29A6";
const DZcy = "\u040F";
const dzcy = "\u045F";
const dzigrarr = "\u27FF";
const Eacute = "\xC9";
const eacute = "\xE9";
const easter = "\u2A6E";
const Ecaron = "\u011A";
const ecaron = "\u011B";
const Ecirc = "\xCA";
const ecirc = "\xEA";
const ecir = "\u2256";
const ecolon = "\u2255";
const Ecy = "\u042D";
const ecy = "\u044D";
const eDDot = "\u2A77";
const Edot = "\u0116";
const edot = "\u0117";
const eDot = "\u2251";
const ee = "\u2147";
const efDot = "\u2252";
const Efr = "\u{1D508}";
const efr = "\u{1D522}";
const eg = "\u2A9A";
const Egrave = "\xC8";
const egrave = "\xE8";
const egs = "\u2A96";
const egsdot = "\u2A98";
const el = "\u2A99";
const Element = "\u2208";
const elinters = "\u23E7";
const ell = "\u2113";
const els = "\u2A95";
const elsdot = "\u2A97";
const Emacr = "\u0112";
const emacr = "\u0113";
const empty = "\u2205";
const emptyset = "\u2205";
const EmptySmallSquare = "\u25FB";
const emptyv = "\u2205";
const EmptyVerySmallSquare = "\u25AB";
const emsp13 = "\u2004";
const emsp14 = "\u2005";
const emsp = "\u2003";
const ENG = "\u014A";
const eng = "\u014B";
const ensp = "\u2002";
const Eogon = "\u0118";
const eogon = "\u0119";
const Eopf = "\u{1D53C}";
const eopf = "\u{1D556}";
const epar = "\u22D5";
const eparsl = "\u29E3";
const eplus = "\u2A71";
const epsi = "\u03B5";
const Epsilon = "\u0395";
const epsilon = "\u03B5";
const epsiv = "\u03F5";
const eqcirc = "\u2256";
const eqcolon = "\u2255";
const eqsim = "\u2242";
const eqslantgtr = "\u2A96";
const eqslantless = "\u2A95";
const Equal = "\u2A75";
const equals = "=";
const EqualTilde = "\u2242";
const equest = "\u225F";
const Equilibrium = "\u21CC";
const equiv = "\u2261";
const equivDD = "\u2A78";
const eqvparsl = "\u29E5";
const erarr = "\u2971";
const erDot = "\u2253";
const escr = "\u212F";
const Escr = "\u2130";
const esdot = "\u2250";
const Esim = "\u2A73";
const esim = "\u2242";
const Eta = "\u0397";
const eta = "\u03B7";
const ETH = "\xD0";
const eth = "\xF0";
const Euml = "\xCB";
const euml = "\xEB";
const euro = "\u20AC";
const excl = "!";
const exist = "\u2203";
const Exists = "\u2203";
const expectation = "\u2130";
const exponentiale = "\u2147";
const ExponentialE = "\u2147";
const fallingdotseq = "\u2252";
const Fcy = "\u0424";
const fcy = "\u0444";
const female = "\u2640";
const ffilig = "\uFB03";
const fflig = "\uFB00";
const ffllig = "\uFB04";
const Ffr = "\u{1D509}";
const ffr = "\u{1D523}";
const filig = "\uFB01";
const FilledSmallSquare = "\u25FC";
const FilledVerySmallSquare = "\u25AA";
const fjlig = "fj";
const flat = "\u266D";
const fllig = "\uFB02";
const fltns = "\u25B1";
const fnof = "\u0192";
const Fopf = "\u{1D53D}";
const fopf = "\u{1D557}";
const forall = "\u2200";
const ForAll = "\u2200";
const fork = "\u22D4";
const forkv = "\u2AD9";
const Fouriertrf = "\u2131";
const fpartint = "\u2A0D";
const frac12 = "\xBD";
const frac13 = "\u2153";
const frac14 = "\xBC";
const frac15 = "\u2155";
const frac16 = "\u2159";
const frac18 = "\u215B";
const frac23 = "\u2154";
const frac25 = "\u2156";
const frac34 = "\xBE";
const frac35 = "\u2157";
const frac38 = "\u215C";
const frac45 = "\u2158";
const frac56 = "\u215A";
const frac58 = "\u215D";
const frac78 = "\u215E";
const frasl = "\u2044";
const frown = "\u2322";
const fscr = "\u{1D4BB}";
const Fscr = "\u2131";
const gacute = "\u01F5";
const Gamma = "\u0393";
const gamma = "\u03B3";
const Gammad = "\u03DC";
const gammad = "\u03DD";
const gap = "\u2A86";
const Gbreve = "\u011E";
const gbreve = "\u011F";
const Gcedil = "\u0122";
const Gcirc = "\u011C";
const gcirc = "\u011D";
const Gcy = "\u0413";
const gcy = "\u0433";
const Gdot = "\u0120";
const gdot = "\u0121";
const ge = "\u2265";
const gE = "\u2267";
const gEl = "\u2A8C";
const gel = "\u22DB";
const geq = "\u2265";
const geqq = "\u2267";
const geqslant = "\u2A7E";
const gescc = "\u2AA9";
const ges = "\u2A7E";
const gesdot = "\u2A80";
const gesdoto = "\u2A82";
const gesdotol = "\u2A84";
const gesl = "\u22DB\uFE00";
const gesles = "\u2A94";
const Gfr = "\u{1D50A}";
const gfr = "\u{1D524}";
const gg = "\u226B";
const Gg = "\u22D9";
const ggg = "\u22D9";
const gimel = "\u2137";
const GJcy = "\u0403";
const gjcy = "\u0453";
const gla = "\u2AA5";
const gl = "\u2277";
const glE = "\u2A92";
const glj = "\u2AA4";
const gnap = "\u2A8A";
const gnapprox = "\u2A8A";
const gne = "\u2A88";
const gnE = "\u2269";
const gneq = "\u2A88";
const gneqq = "\u2269";
const gnsim = "\u22E7";
const Gopf = "\u{1D53E}";
const gopf = "\u{1D558}";
const grave = "`";
const GreaterEqual = "\u2265";
const GreaterEqualLess = "\u22DB";
const GreaterFullEqual = "\u2267";
const GreaterGreater = "\u2AA2";
const GreaterLess = "\u2277";
const GreaterSlantEqual = "\u2A7E";
const GreaterTilde = "\u2273";
const Gscr = "\u{1D4A2}";
const gscr = "\u210A";
const gsim = "\u2273";
const gsime = "\u2A8E";
const gsiml = "\u2A90";
const gtcc = "\u2AA7";
const gtcir = "\u2A7A";
const gt = ">";
const GT = ">";
const Gt = "\u226B";
const gtdot = "\u22D7";
const gtlPar = "\u2995";
const gtquest = "\u2A7C";
const gtrapprox = "\u2A86";
const gtrarr = "\u2978";
const gtrdot = "\u22D7";
const gtreqless = "\u22DB";
const gtreqqless = "\u2A8C";
const gtrless = "\u2277";
const gtrsim = "\u2273";
const gvertneqq = "\u2269\uFE00";
const gvnE = "\u2269\uFE00";
const Hacek = "\u02C7";
const hairsp = "\u200A";
const half = "\xBD";
const hamilt = "\u210B";
const HARDcy = "\u042A";
const hardcy = "\u044A";
const harrcir = "\u2948";
const harr = "\u2194";
const hArr = "\u21D4";
const harrw = "\u21AD";
const Hat = "^";
const hbar = "\u210F";
const Hcirc = "\u0124";
const hcirc = "\u0125";
const hearts = "\u2665";
const heartsuit = "\u2665";
const hellip = "\u2026";
const hercon = "\u22B9";
const hfr = "\u{1D525}";
const Hfr = "\u210C";
const HilbertSpace = "\u210B";
const hksearow = "\u2925";
const hkswarow = "\u2926";
const hoarr = "\u21FF";
const homtht = "\u223B";
const hookleftarrow = "\u21A9";
const hookrightarrow = "\u21AA";
const hopf = "\u{1D559}";
const Hopf = "\u210D";
const horbar = "\u2015";
const HorizontalLine = "\u2500";
const hscr = "\u{1D4BD}";
const Hscr = "\u210B";
const hslash = "\u210F";
const Hstrok = "\u0126";
const hstrok = "\u0127";
const HumpDownHump = "\u224E";
const HumpEqual = "\u224F";
const hybull = "\u2043";
const hyphen = "\u2010";
const Iacute = "\xCD";
const iacute = "\xED";
const ic = "\u2063";
const Icirc = "\xCE";
const icirc = "\xEE";
const Icy = "\u0418";
const icy = "\u0438";
const Idot = "\u0130";
const IEcy = "\u0415";
const iecy = "\u0435";
const iexcl = "\xA1";
const iff = "\u21D4";
const ifr = "\u{1D526}";
const Ifr = "\u2111";
const Igrave = "\xCC";
const igrave = "\xEC";
const ii = "\u2148";
const iiiint = "\u2A0C";
const iiint = "\u222D";
const iinfin = "\u29DC";
const iiota = "\u2129";
const IJlig = "\u0132";
const ijlig = "\u0133";
const Imacr = "\u012A";
const imacr = "\u012B";
const image$1 = "\u2111";
const ImaginaryI = "\u2148";
const imagline = "\u2110";
const imagpart = "\u2111";
const imath = "\u0131";
const Im = "\u2111";
const imof = "\u22B7";
const imped = "\u01B5";
const Implies = "\u21D2";
const incare = "\u2105";
const infin = "\u221E";
const infintie = "\u29DD";
const inodot = "\u0131";
const intcal = "\u22BA";
const int = "\u222B";
const Int = "\u222C";
const integers = "\u2124";
const Integral = "\u222B";
const intercal = "\u22BA";
const Intersection = "\u22C2";
const intlarhk = "\u2A17";
const intprod = "\u2A3C";
const InvisibleComma = "\u2063";
const InvisibleTimes = "\u2062";
const IOcy = "\u0401";
const iocy = "\u0451";
const Iogon = "\u012E";
const iogon = "\u012F";
const Iopf = "\u{1D540}";
const iopf = "\u{1D55A}";
const Iota = "\u0399";
const iota = "\u03B9";
const iprod = "\u2A3C";
const iquest = "\xBF";
const iscr = "\u{1D4BE}";
const Iscr = "\u2110";
const isin = "\u2208";
const isindot = "\u22F5";
const isinE = "\u22F9";
const isins = "\u22F4";
const isinsv = "\u22F3";
const isinv = "\u2208";
const it = "\u2062";
const Itilde = "\u0128";
const itilde = "\u0129";
const Iukcy = "\u0406";
const iukcy = "\u0456";
const Iuml = "\xCF";
const iuml = "\xEF";
const Jcirc = "\u0134";
const jcirc = "\u0135";
const Jcy = "\u0419";
const jcy = "\u0439";
const Jfr = "\u{1D50D}";
const jfr = "\u{1D527}";
const jmath = "\u0237";
const Jopf = "\u{1D541}";
const jopf = "\u{1D55B}";
const Jscr = "\u{1D4A5}";
const jscr = "\u{1D4BF}";
const Jsercy = "\u0408";
const jsercy = "\u0458";
const Jukcy = "\u0404";
const jukcy = "\u0454";
const Kappa = "\u039A";
const kappa = "\u03BA";
const kappav = "\u03F0";
const Kcedil = "\u0136";
const kcedil = "\u0137";
const Kcy = "\u041A";
const kcy = "\u043A";
const Kfr = "\u{1D50E}";
const kfr = "\u{1D528}";
const kgreen = "\u0138";
const KHcy = "\u0425";
const khcy = "\u0445";
const KJcy = "\u040C";
const kjcy = "\u045C";
const Kopf = "\u{1D542}";
const kopf = "\u{1D55C}";
const Kscr = "\u{1D4A6}";
const kscr = "\u{1D4C0}";
const lAarr = "\u21DA";
const Lacute = "\u0139";
const lacute = "\u013A";
const laemptyv = "\u29B4";
const lagran = "\u2112";
const Lambda = "\u039B";
const lambda = "\u03BB";
const lang = "\u27E8";
const Lang = "\u27EA";
const langd = "\u2991";
const langle = "\u27E8";
const lap = "\u2A85";
const Laplacetrf = "\u2112";
const laquo = "\xAB";
const larrb = "\u21E4";
const larrbfs = "\u291F";
const larr = "\u2190";
const Larr = "\u219E";
const lArr = "\u21D0";
const larrfs = "\u291D";
const larrhk = "\u21A9";
const larrlp = "\u21AB";
const larrpl = "\u2939";
const larrsim = "\u2973";
const larrtl = "\u21A2";
const latail = "\u2919";
const lAtail = "\u291B";
const lat = "\u2AAB";
const late = "\u2AAD";
const lates = "\u2AAD\uFE00";
const lbarr = "\u290C";
const lBarr = "\u290E";
const lbbrk = "\u2772";
const lbrace = "{";
const lbrack = "[";
const lbrke = "\u298B";
const lbrksld = "\u298F";
const lbrkslu = "\u298D";
const Lcaron = "\u013D";
const lcaron = "\u013E";
const Lcedil = "\u013B";
const lcedil = "\u013C";
const lceil = "\u2308";
const lcub = "{";
const Lcy = "\u041B";
const lcy = "\u043B";
const ldca = "\u2936";
const ldquo = "\u201C";
const ldquor = "\u201E";
const ldrdhar = "\u2967";
const ldrushar = "\u294B";
const ldsh = "\u21B2";
const le = "\u2264";
const lE = "\u2266";
const LeftAngleBracket = "\u27E8";
const LeftArrowBar = "\u21E4";
const leftarrow = "\u2190";
const LeftArrow = "\u2190";
const Leftarrow = "\u21D0";
const LeftArrowRightArrow = "\u21C6";
const leftarrowtail = "\u21A2";
const LeftCeiling = "\u2308";
const LeftDoubleBracket = "\u27E6";
const LeftDownTeeVector = "\u2961";
const LeftDownVectorBar = "\u2959";
const LeftDownVector = "\u21C3";
const LeftFloor = "\u230A";
const leftharpoondown = "\u21BD";
const leftharpoonup = "\u21BC";
const leftleftarrows = "\u21C7";
const leftrightarrow = "\u2194";
const LeftRightArrow = "\u2194";
const Leftrightarrow = "\u21D4";
const leftrightarrows = "\u21C6";
const leftrightharpoons = "\u21CB";
const leftrightsquigarrow = "\u21AD";
const LeftRightVector = "\u294E";
const LeftTeeArrow = "\u21A4";
const LeftTee = "\u22A3";
const LeftTeeVector = "\u295A";
const leftthreetimes = "\u22CB";
const LeftTriangleBar = "\u29CF";
const LeftTriangle = "\u22B2";
const LeftTriangleEqual = "\u22B4";
const LeftUpDownVector = "\u2951";
const LeftUpTeeVector = "\u2960";
const LeftUpVectorBar = "\u2958";
const LeftUpVector = "\u21BF";
const LeftVectorBar = "\u2952";
const LeftVector = "\u21BC";
const lEg = "\u2A8B";
const leg = "\u22DA";
const leq = "\u2264";
const leqq = "\u2266";
const leqslant = "\u2A7D";
const lescc = "\u2AA8";
const les = "\u2A7D";
const lesdot = "\u2A7F";
const lesdoto = "\u2A81";
const lesdotor = "\u2A83";
const lesg = "\u22DA\uFE00";
const lesges = "\u2A93";
const lessapprox = "\u2A85";
const lessdot = "\u22D6";
const lesseqgtr = "\u22DA";
const lesseqqgtr = "\u2A8B";
const LessEqualGreater = "\u22DA";
const LessFullEqual = "\u2266";
const LessGreater = "\u2276";
const lessgtr = "\u2276";
const LessLess = "\u2AA1";
const lesssim = "\u2272";
const LessSlantEqual = "\u2A7D";
const LessTilde = "\u2272";
const lfisht = "\u297C";
const lfloor = "\u230A";
const Lfr = "\u{1D50F}";
const lfr = "\u{1D529}";
const lg = "\u2276";
const lgE = "\u2A91";
const lHar = "\u2962";
const lhard = "\u21BD";
const lharu = "\u21BC";
const lharul = "\u296A";
const lhblk = "\u2584";
const LJcy = "\u0409";
const ljcy = "\u0459";
const llarr = "\u21C7";
const ll = "\u226A";
const Ll = "\u22D8";
const llcorner = "\u231E";
const Lleftarrow = "\u21DA";
const llhard = "\u296B";
const lltri = "\u25FA";
const Lmidot = "\u013F";
const lmidot = "\u0140";
const lmoustache = "\u23B0";
const lmoust = "\u23B0";
const lnap = "\u2A89";
const lnapprox = "\u2A89";
const lne = "\u2A87";
const lnE = "\u2268";
const lneq = "\u2A87";
const lneqq = "\u2268";
const lnsim = "\u22E6";
const loang = "\u27EC";
const loarr = "\u21FD";
const lobrk = "\u27E6";
const longleftarrow = "\u27F5";
const LongLeftArrow = "\u27F5";
const Longleftarrow = "\u27F8";
const longleftrightarrow = "\u27F7";
const LongLeftRightArrow = "\u27F7";
const Longleftrightarrow = "\u27FA";
const longmapsto = "\u27FC";
const longrightarrow = "\u27F6";
const LongRightArrow = "\u27F6";
const Longrightarrow = "\u27F9";
const looparrowleft = "\u21AB";
const looparrowright = "\u21AC";
const lopar = "\u2985";
const Lopf = "\u{1D543}";
const lopf = "\u{1D55D}";
const loplus = "\u2A2D";
const lotimes = "\u2A34";
const lowast = "\u2217";
const lowbar = "_";
const LowerLeftArrow = "\u2199";
const LowerRightArrow = "\u2198";
const loz = "\u25CA";
const lozenge = "\u25CA";
const lozf = "\u29EB";
const lpar = "(";
const lparlt = "\u2993";
const lrarr = "\u21C6";
const lrcorner = "\u231F";
const lrhar = "\u21CB";
const lrhard = "\u296D";
const lrm = "\u200E";
const lrtri = "\u22BF";
const lsaquo = "\u2039";
const lscr = "\u{1D4C1}";
const Lscr = "\u2112";
const lsh = "\u21B0";
const Lsh = "\u21B0";
const lsim = "\u2272";
const lsime = "\u2A8D";
const lsimg = "\u2A8F";
const lsqb = "[";
const lsquo = "\u2018";
const lsquor = "\u201A";
const Lstrok = "\u0141";
const lstrok = "\u0142";
const ltcc = "\u2AA6";
const ltcir = "\u2A79";
const lt = "<";
const LT = "<";
const Lt = "\u226A";
const ltdot = "\u22D6";
const lthree = "\u22CB";
const ltimes = "\u22C9";
const ltlarr = "\u2976";
const ltquest = "\u2A7B";
const ltri = "\u25C3";
const ltrie = "\u22B4";
const ltrif = "\u25C2";
const ltrPar = "\u2996";
const lurdshar = "\u294A";
const luruhar = "\u2966";
const lvertneqq = "\u2268\uFE00";
const lvnE = "\u2268\uFE00";
const macr = "\xAF";
const male = "\u2642";
const malt = "\u2720";
const maltese = "\u2720";
const map = "\u21A6";
const mapsto = "\u21A6";
const mapstodown = "\u21A7";
const mapstoleft = "\u21A4";
const mapstoup = "\u21A5";
const marker = "\u25AE";
const mcomma = "\u2A29";
const Mcy = "\u041C";
const mcy = "\u043C";
const mdash = "\u2014";
const mDDot = "\u223A";
const measuredangle = "\u2221";
const MediumSpace = "\u205F";
const Mellintrf = "\u2133";
const Mfr = "\u{1D510}";
const mfr = "\u{1D52A}";
const mho = "\u2127";
const micro = "\xB5";
const midast = "*";
const midcir = "\u2AF0";
const mid = "\u2223";
const middot = "\xB7";
const minusb = "\u229F";
const minus = "\u2212";
const minusd = "\u2238";
const minusdu = "\u2A2A";
const MinusPlus = "\u2213";
const mlcp = "\u2ADB";
const mldr = "\u2026";
const mnplus = "\u2213";
const models = "\u22A7";
const Mopf = "\u{1D544}";
const mopf = "\u{1D55E}";
const mp = "\u2213";
const mscr = "\u{1D4C2}";
const Mscr = "\u2133";
const mstpos = "\u223E";
const Mu = "\u039C";
const mu = "\u03BC";
const multimap = "\u22B8";
const mumap = "\u22B8";
const nabla = "\u2207";
const Nacute = "\u0143";
const nacute = "\u0144";
const nang = "\u2220\u20D2";
const nap = "\u2249";
const napE = "\u2A70\u0338";
const napid = "\u224B\u0338";
const napos = "\u0149";
const napprox = "\u2249";
const natural = "\u266E";
const naturals = "\u2115";
const natur = "\u266E";
const nbsp = "\xA0";
const nbump = "\u224E\u0338";
const nbumpe = "\u224F\u0338";
const ncap = "\u2A43";
const Ncaron = "\u0147";
const ncaron = "\u0148";
const Ncedil = "\u0145";
const ncedil = "\u0146";
const ncong = "\u2247";
const ncongdot = "\u2A6D\u0338";
const ncup = "\u2A42";
const Ncy = "\u041D";
const ncy = "\u043D";
const ndash = "\u2013";
const nearhk = "\u2924";
const nearr = "\u2197";
const neArr = "\u21D7";
const nearrow = "\u2197";
const ne = "\u2260";
const nedot = "\u2250\u0338";
const NegativeMediumSpace = "\u200B";
const NegativeThickSpace = "\u200B";
const NegativeThinSpace = "\u200B";
const NegativeVeryThinSpace = "\u200B";
const nequiv = "\u2262";
const nesear = "\u2928";
const nesim = "\u2242\u0338";
const NestedGreaterGreater = "\u226B";
const NestedLessLess = "\u226A";
const NewLine = "\n";
const nexist = "\u2204";
const nexists = "\u2204";
const Nfr = "\u{1D511}";
const nfr = "\u{1D52B}";
const ngE = "\u2267\u0338";
const nge = "\u2271";
const ngeq = "\u2271";
const ngeqq = "\u2267\u0338";
const ngeqslant = "\u2A7E\u0338";
const nges = "\u2A7E\u0338";
const nGg = "\u22D9\u0338";
const ngsim = "\u2275";
const nGt = "\u226B\u20D2";
const ngt = "\u226F";
const ngtr = "\u226F";
const nGtv = "\u226B\u0338";
const nharr = "\u21AE";
const nhArr = "\u21CE";
const nhpar = "\u2AF2";
const ni = "\u220B";
const nis = "\u22FC";
const nisd = "\u22FA";
const niv = "\u220B";
const NJcy = "\u040A";
const njcy = "\u045A";
const nlarr = "\u219A";
const nlArr = "\u21CD";
const nldr = "\u2025";
const nlE = "\u2266\u0338";
const nle = "\u2270";
const nleftarrow = "\u219A";
const nLeftarrow = "\u21CD";
const nleftrightarrow = "\u21AE";
const nLeftrightarrow = "\u21CE";
const nleq = "\u2270";
const nleqq = "\u2266\u0338";
const nleqslant = "\u2A7D\u0338";
const nles = "\u2A7D\u0338";
const nless = "\u226E";
const nLl = "\u22D8\u0338";
const nlsim = "\u2274";
const nLt = "\u226A\u20D2";
const nlt = "\u226E";
const nltri = "\u22EA";
const nltrie = "\u22EC";
const nLtv = "\u226A\u0338";
const nmid = "\u2224";
const NoBreak = "\u2060";
const NonBreakingSpace = "\xA0";
const nopf = "\u{1D55F}";
const Nopf = "\u2115";
const Not = "\u2AEC";
const not = "\xAC";
const NotCongruent = "\u2262";
const NotCupCap = "\u226D";
const NotDoubleVerticalBar = "\u2226";
const NotElement = "\u2209";
const NotEqual = "\u2260";
const NotEqualTilde = "\u2242\u0338";
const NotExists = "\u2204";
const NotGreater = "\u226F";
const NotGreaterEqual = "\u2271";
const NotGreaterFullEqual = "\u2267\u0338";
const NotGreaterGreater = "\u226B\u0338";
const NotGreaterLess = "\u2279";
const NotGreaterSlantEqual = "\u2A7E\u0338";
const NotGreaterTilde = "\u2275";
const NotHumpDownHump = "\u224E\u0338";
const NotHumpEqual = "\u224F\u0338";
const notin = "\u2209";
const notindot = "\u22F5\u0338";
const notinE = "\u22F9\u0338";
const notinva = "\u2209";
const notinvb = "\u22F7";
const notinvc = "\u22F6";
const NotLeftTriangleBar = "\u29CF\u0338";
const NotLeftTriangle = "\u22EA";
const NotLeftTriangleEqual = "\u22EC";
const NotLess = "\u226E";
const NotLessEqual = "\u2270";
const NotLessGreater = "\u2278";
const NotLessLess = "\u226A\u0338";
const NotLessSlantEqual = "\u2A7D\u0338";
const NotLessTilde = "\u2274";
const NotNestedGreaterGreater = "\u2AA2\u0338";
const NotNestedLessLess = "\u2AA1\u0338";
const notni = "\u220C";
const notniva = "\u220C";
const notnivb = "\u22FE";
const notnivc = "\u22FD";
const NotPrecedes = "\u2280";
const NotPrecedesEqual = "\u2AAF\u0338";
const NotPrecedesSlantEqual = "\u22E0";
const NotReverseElement = "\u220C";
const NotRightTriangleBar = "\u29D0\u0338";
const NotRightTriangle = "\u22EB";
const NotRightTriangleEqual = "\u22ED";
const NotSquareSubset = "\u228F\u0338";
const NotSquareSubsetEqual = "\u22E2";
const NotSquareSuperset = "\u2290\u0338";
const NotSquareSupersetEqual = "\u22E3";
const NotSubset = "\u2282\u20D2";
const NotSubsetEqual = "\u2288";
const NotSucceeds = "\u2281";
const NotSucceedsEqual = "\u2AB0\u0338";
const NotSucceedsSlantEqual = "\u22E1";
const NotSucceedsTilde = "\u227F\u0338";
const NotSuperset = "\u2283\u20D2";
const NotSupersetEqual = "\u2289";
const NotTilde = "\u2241";
const NotTildeEqual = "\u2244";
const NotTildeFullEqual = "\u2247";
const NotTildeTilde = "\u2249";
const NotVerticalBar = "\u2224";
const nparallel = "\u2226";
const npar = "\u2226";
const nparsl = "\u2AFD\u20E5";
const npart = "\u2202\u0338";
const npolint = "\u2A14";
const npr = "\u2280";
const nprcue = "\u22E0";
const nprec = "\u2280";
const npreceq = "\u2AAF\u0338";
const npre = "\u2AAF\u0338";
const nrarrc = "\u2933\u0338";
const nrarr = "\u219B";
const nrArr = "\u21CF";
const nrarrw = "\u219D\u0338";
const nrightarrow = "\u219B";
const nRightarrow = "\u21CF";
const nrtri = "\u22EB";
const nrtrie = "\u22ED";
const nsc = "\u2281";
const nsccue = "\u22E1";
const nsce = "\u2AB0\u0338";
const Nscr = "\u{1D4A9}";
const nscr = "\u{1D4C3}";
const nshortmid = "\u2224";
const nshortparallel = "\u2226";
const nsim = "\u2241";
const nsime = "\u2244";
const nsimeq = "\u2244";
const nsmid = "\u2224";
const nspar = "\u2226";
const nsqsube = "\u22E2";
const nsqsupe = "\u22E3";
const nsub = "\u2284";
const nsubE = "\u2AC5\u0338";
const nsube = "\u2288";
const nsubset = "\u2282\u20D2";
const nsubseteq = "\u2288";
const nsubseteqq = "\u2AC5\u0338";
const nsucc = "\u2281";
const nsucceq = "\u2AB0\u0338";
const nsup = "\u2285";
const nsupE = "\u2AC6\u0338";
const nsupe = "\u2289";
const nsupset = "\u2283\u20D2";
const nsupseteq = "\u2289";
const nsupseteqq = "\u2AC6\u0338";
const ntgl = "\u2279";
const Ntilde = "\xD1";
const ntilde = "\xF1";
const ntlg = "\u2278";
const ntriangleleft = "\u22EA";
const ntrianglelefteq = "\u22EC";
const ntriangleright = "\u22EB";
const ntrianglerighteq = "\u22ED";
const Nu = "\u039D";
const nu = "\u03BD";
const num = "#";
const numero = "\u2116";
const numsp = "\u2007";
const nvap = "\u224D\u20D2";
const nvdash = "\u22AC";
const nvDash = "\u22AD";
const nVdash = "\u22AE";
const nVDash = "\u22AF";
const nvge = "\u2265\u20D2";
const nvgt = ">\u20D2";
const nvHarr = "\u2904";
const nvinfin = "\u29DE";
const nvlArr = "\u2902";
const nvle = "\u2264\u20D2";
const nvlt = "<\u20D2";
const nvltrie = "\u22B4\u20D2";
const nvrArr = "\u2903";
const nvrtrie = "\u22B5\u20D2";
const nvsim = "\u223C\u20D2";
const nwarhk = "\u2923";
const nwarr = "\u2196";
const nwArr = "\u21D6";
const nwarrow = "\u2196";
const nwnear = "\u2927";
const Oacute = "\xD3";
const oacute = "\xF3";
const oast = "\u229B";
const Ocirc = "\xD4";
const ocirc = "\xF4";
const ocir = "\u229A";
const Ocy = "\u041E";
const ocy = "\u043E";
const odash = "\u229D";
const Odblac = "\u0150";
const odblac = "\u0151";
const odiv = "\u2A38";
const odot = "\u2299";
const odsold = "\u29BC";
const OElig = "\u0152";
const oelig = "\u0153";
const ofcir = "\u29BF";
const Ofr = "\u{1D512}";
const ofr = "\u{1D52C}";
const ogon = "\u02DB";
const Ograve = "\xD2";
const ograve = "\xF2";
const ogt = "\u29C1";
const ohbar = "\u29B5";
const ohm = "\u03A9";
const oint = "\u222E";
const olarr = "\u21BA";
const olcir = "\u29BE";
const olcross = "\u29BB";
const oline = "\u203E";
const olt = "\u29C0";
const Omacr = "\u014C";
const omacr = "\u014D";
const Omega = "\u03A9";
const omega = "\u03C9";
const Omicron = "\u039F";
const omicron = "\u03BF";
const omid = "\u29B6";
const ominus = "\u2296";
const Oopf = "\u{1D546}";
const oopf = "\u{1D560}";
const opar = "\u29B7";
const OpenCurlyDoubleQuote = "\u201C";
const OpenCurlyQuote = "\u2018";
const operp = "\u29B9";
const oplus = "\u2295";
const orarr = "\u21BB";
const Or = "\u2A54";
const or = "\u2228";
const ord = "\u2A5D";
const order = "\u2134";
const orderof = "\u2134";
const ordf = "\xAA";
const ordm = "\xBA";
const origof = "\u22B6";
const oror = "\u2A56";
const orslope = "\u2A57";
const orv = "\u2A5B";
const oS = "\u24C8";
const Oscr = "\u{1D4AA}";
const oscr = "\u2134";
const Oslash = "\xD8";
const oslash = "\xF8";
const osol = "\u2298";
const Otilde = "\xD5";
const otilde = "\xF5";
const otimesas = "\u2A36";
const Otimes = "\u2A37";
const otimes = "\u2297";
const Ouml = "\xD6";
const ouml = "\xF6";
const ovbar = "\u233D";
const OverBar = "\u203E";
const OverBrace = "\u23DE";
const OverBracket = "\u23B4";
const OverParenthesis = "\u23DC";
const para = "\xB6";
const parallel = "\u2225";
const par = "\u2225";
const parsim = "\u2AF3";
const parsl = "\u2AFD";
const part = "\u2202";
const PartialD = "\u2202";
const Pcy = "\u041F";
const pcy = "\u043F";
const percnt = "%";
const period = ".";
const permil = "\u2030";
const perp = "\u22A5";
const pertenk = "\u2031";
const Pfr = "\u{1D513}";
const pfr = "\u{1D52D}";
const Phi = "\u03A6";
const phi = "\u03C6";
const phiv = "\u03D5";
const phmmat = "\u2133";
const phone = "\u260E";
const Pi = "\u03A0";
const pi = "\u03C0";
const pitchfork = "\u22D4";
const piv = "\u03D6";
const planck = "\u210F";
const planckh = "\u210E";
const plankv = "\u210F";
const plusacir = "\u2A23";
const plusb = "\u229E";
const pluscir = "\u2A22";
const plus = "+";
const plusdo = "\u2214";
const plusdu = "\u2A25";
const pluse = "\u2A72";
const PlusMinus = "\xB1";
const plusmn = "\xB1";
const plussim = "\u2A26";
const plustwo = "\u2A27";
const pm = "\xB1";
const Poincareplane = "\u210C";
const pointint = "\u2A15";
const popf = "\u{1D561}";
const Popf = "\u2119";
const pound = "\xA3";
const prap = "\u2AB7";
const Pr = "\u2ABB";
const pr = "\u227A";
const prcue = "\u227C";
const precapprox = "\u2AB7";
const prec = "\u227A";
const preccurlyeq = "\u227C";
const Precedes = "\u227A";
const PrecedesEqual = "\u2AAF";
const PrecedesSlantEqual = "\u227C";
const PrecedesTilde = "\u227E";
const preceq = "\u2AAF";
const precnapprox = "\u2AB9";
const precneqq = "\u2AB5";
const precnsim = "\u22E8";
const pre = "\u2AAF";
const prE = "\u2AB3";
const precsim = "\u227E";
const prime = "\u2032";
const Prime = "\u2033";
const primes = "\u2119";
const prnap = "\u2AB9";
const prnE = "\u2AB5";
const prnsim = "\u22E8";
const prod = "\u220F";
const Product = "\u220F";
const profalar = "\u232E";
const profline = "\u2312";
const profsurf = "\u2313";
const prop = "\u221D";
const Proportional = "\u221D";
const Proportion = "\u2237";
const propto = "\u221D";
const prsim = "\u227E";
const prurel = "\u22B0";
const Pscr = "\u{1D4AB}";
const pscr = "\u{1D4C5}";
const Psi = "\u03A8";
const psi = "\u03C8";
const puncsp = "\u2008";
const Qfr = "\u{1D514}";
const qfr = "\u{1D52E}";
const qint = "\u2A0C";
const qopf = "\u{1D562}";
const Qopf = "\u211A";
const qprime = "\u2057";
const Qscr = "\u{1D4AC}";
const qscr = "\u{1D4C6}";
const quaternions = "\u210D";
const quatint = "\u2A16";
const quest = "?";
const questeq = "\u225F";
const quot = '"';
const QUOT = '"';
const rAarr = "\u21DB";
const race = "\u223D\u0331";
const Racute = "\u0154";
const racute = "\u0155";
const radic = "\u221A";
const raemptyv = "\u29B3";
const rang = "\u27E9";
const Rang = "\u27EB";
const rangd = "\u2992";
const range = "\u29A5";
const rangle = "\u27E9";
const raquo = "\xBB";
const rarrap = "\u2975";
const rarrb = "\u21E5";
const rarrbfs = "\u2920";
const rarrc = "\u2933";
const rarr = "\u2192";
const Rarr = "\u21A0";
const rArr = "\u21D2";
const rarrfs = "\u291E";
const rarrhk = "\u21AA";
const rarrlp = "\u21AC";
const rarrpl = "\u2945";
const rarrsim = "\u2974";
const Rarrtl = "\u2916";
const rarrtl = "\u21A3";
const rarrw = "\u219D";
const ratail = "\u291A";
const rAtail = "\u291C";
const ratio = "\u2236";
const rationals = "\u211A";
const rbarr = "\u290D";
const rBarr = "\u290F";
const RBarr = "\u2910";
const rbbrk = "\u2773";
const rbrace = "}";
const rbrack = "]";
const rbrke = "\u298C";
const rbrksld = "\u298E";
const rbrkslu = "\u2990";
const Rcaron = "\u0158";
const rcaron = "\u0159";
const Rcedil = "\u0156";
const rcedil = "\u0157";
const rceil = "\u2309";
const rcub = "}";
const Rcy = "\u0420";
const rcy = "\u0440";
const rdca = "\u2937";
const rdldhar = "\u2969";
const rdquo = "\u201D";
const rdquor = "\u201D";
const rdsh = "\u21B3";
const real = "\u211C";
const realine = "\u211B";
const realpart = "\u211C";
const reals = "\u211D";
const Re = "\u211C";
const rect = "\u25AD";
const reg = "\xAE";
const REG = "\xAE";
const ReverseElement = "\u220B";
const ReverseEquilibrium = "\u21CB";
const ReverseUpEquilibrium = "\u296F";
const rfisht = "\u297D";
const rfloor = "\u230B";
const rfr = "\u{1D52F}";
const Rfr = "\u211C";
const rHar = "\u2964";
const rhard = "\u21C1";
const rharu = "\u21C0";
const rharul = "\u296C";
const Rho = "\u03A1";
const rho = "\u03C1";
const rhov = "\u03F1";
const RightAngleBracket = "\u27E9";
const RightArrowBar = "\u21E5";
const rightarrow = "\u2192";
const RightArrow = "\u2192";
const Rightarrow = "\u21D2";
const RightArrowLeftArrow = "\u21C4";
const rightarrowtail = "\u21A3";
const RightCeiling = "\u2309";
const RightDoubleBracket = "\u27E7";
const RightDownTeeVector = "\u295D";
const RightDownVectorBar = "\u2955";
const RightDownVector = "\u21C2";
const RightFloor = "\u230B";
const rightharpoondown = "\u21C1";
const rightharpoonup = "\u21C0";
const rightleftarrows = "\u21C4";
const rightleftharpoons = "\u21CC";
const rightrightarrows = "\u21C9";
const rightsquigarrow = "\u219D";
const RightTeeArrow = "\u21A6";
const RightTee = "\u22A2";
const RightTeeVector = "\u295B";
const rightthreetimes = "\u22CC";
const RightTriangleBar = "\u29D0";
const RightTriangle = "\u22B3";
const RightTriangleEqual = "\u22B5";
const RightUpDownVector = "\u294F";
const RightUpTeeVector = "\u295C";
const RightUpVectorBar = "\u2954";
const RightUpVector = "\u21BE";
const RightVectorBar = "\u2953";
const RightVector = "\u21C0";
const ring = "\u02DA";
const risingdotseq = "\u2253";
const rlarr = "\u21C4";
const rlhar = "\u21CC";
const rlm = "\u200F";
const rmoustache = "\u23B1";
const rmoust = "\u23B1";
const rnmid = "\u2AEE";
const roang = "\u27ED";
const roarr = "\u21FE";
const robrk = "\u27E7";
const ropar = "\u2986";
const ropf = "\u{1D563}";
const Ropf = "\u211D";
const roplus = "\u2A2E";
const rotimes = "\u2A35";
const RoundImplies = "\u2970";
const rpar = ")";
const rpargt = "\u2994";
const rppolint = "\u2A12";
const rrarr = "\u21C9";
const Rrightarrow = "\u21DB";
const rsaquo = "\u203A";
const rscr = "\u{1D4C7}";
const Rscr = "\u211B";
const rsh = "\u21B1";
const Rsh = "\u21B1";
const rsqb = "]";
const rsquo = "\u2019";
const rsquor = "\u2019";
const rthree = "\u22CC";
const rtimes = "\u22CA";
const rtri = "\u25B9";
const rtrie = "\u22B5";
const rtrif = "\u25B8";
const rtriltri = "\u29CE";
const RuleDelayed = "\u29F4";
const ruluhar = "\u2968";
const rx = "\u211E";
const Sacute = "\u015A";
const sacute = "\u015B";
const sbquo = "\u201A";
const scap = "\u2AB8";
const Scaron = "\u0160";
const scaron = "\u0161";
const Sc = "\u2ABC";
const sc = "\u227B";
const sccue = "\u227D";
const sce = "\u2AB0";
const scE = "\u2AB4";
const Scedil = "\u015E";
const scedil = "\u015F";
const Scirc = "\u015C";
const scirc = "\u015D";
const scnap = "\u2ABA";
const scnE = "\u2AB6";
const scnsim = "\u22E9";
const scpolint = "\u2A13";
const scsim = "\u227F";
const Scy = "\u0421";
const scy = "\u0441";
const sdotb = "\u22A1";
const sdot = "\u22C5";
const sdote = "\u2A66";
const searhk = "\u2925";
const searr = "\u2198";
const seArr = "\u21D8";
const searrow = "\u2198";
const sect = "\xA7";
const semi = ";";
const seswar = "\u2929";
const setminus = "\u2216";
const setmn = "\u2216";
const sext = "\u2736";
const Sfr = "\u{1D516}";
const sfr = "\u{1D530}";
const sfrown = "\u2322";
const sharp = "\u266F";
const SHCHcy = "\u0429";
const shchcy = "\u0449";
const SHcy = "\u0428";
const shcy = "\u0448";
const ShortDownArrow = "\u2193";
const ShortLeftArrow = "\u2190";
const shortmid = "\u2223";
const shortparallel = "\u2225";
const ShortRightArrow = "\u2192";
const ShortUpArrow = "\u2191";
const shy = "\xAD";
const Sigma = "\u03A3";
const sigma = "\u03C3";
const sigmaf = "\u03C2";
const sigmav = "\u03C2";
const sim = "\u223C";
const simdot = "\u2A6A";
const sime = "\u2243";
const simeq = "\u2243";
const simg = "\u2A9E";
const simgE = "\u2AA0";
const siml = "\u2A9D";
const simlE = "\u2A9F";
const simne = "\u2246";
const simplus = "\u2A24";
const simrarr = "\u2972";
const slarr = "\u2190";
const SmallCircle = "\u2218";
const smallsetminus = "\u2216";
const smashp = "\u2A33";
const smeparsl = "\u29E4";
const smid = "\u2223";
const smile = "\u2323";
const smt = "\u2AAA";
const smte = "\u2AAC";
const smtes = "\u2AAC\uFE00";
const SOFTcy = "\u042C";
const softcy = "\u044C";
const solbar = "\u233F";
const solb = "\u29C4";
const sol = "/";
const Sopf = "\u{1D54A}";
const sopf = "\u{1D564}";
const spades = "\u2660";
const spadesuit = "\u2660";
const spar = "\u2225";
const sqcap = "\u2293";
const sqcaps = "\u2293\uFE00";
const sqcup = "\u2294";
const sqcups = "\u2294\uFE00";
const Sqrt = "\u221A";
const sqsub = "\u228F";
const sqsube = "\u2291";
const sqsubset = "\u228F";
const sqsubseteq = "\u2291";
const sqsup = "\u2290";
const sqsupe = "\u2292";
const sqsupset = "\u2290";
const sqsupseteq = "\u2292";
const square = "\u25A1";
const Square = "\u25A1";
const SquareIntersection = "\u2293";
const SquareSubset = "\u228F";
const SquareSubsetEqual = "\u2291";
const SquareSuperset = "\u2290";
const SquareSupersetEqual = "\u2292";
const SquareUnion = "\u2294";
const squarf = "\u25AA";
const squ = "\u25A1";
const squf = "\u25AA";
const srarr = "\u2192";
const Sscr = "\u{1D4AE}";
const sscr = "\u{1D4C8}";
const ssetmn = "\u2216";
const ssmile = "\u2323";
const sstarf = "\u22C6";
const Star = "\u22C6";
const star = "\u2606";
const starf = "\u2605";
const straightepsilon = "\u03F5";
const straightphi = "\u03D5";
const strns = "\xAF";
const sub = "\u2282";
const Sub = "\u22D0";
const subdot = "\u2ABD";
const subE = "\u2AC5";
const sube = "\u2286";
const subedot = "\u2AC3";
const submult = "\u2AC1";
const subnE = "\u2ACB";
const subne = "\u228A";
const subplus = "\u2ABF";
const subrarr = "\u2979";
const subset = "\u2282";
const Subset = "\u22D0";
const subseteq = "\u2286";
const subseteqq = "\u2AC5";
const SubsetEqual = "\u2286";
const subsetneq = "\u228A";
const subsetneqq = "\u2ACB";
const subsim = "\u2AC7";
const subsub = "\u2AD5";
const subsup = "\u2AD3";
const succapprox = "\u2AB8";
const succ = "\u227B";
const succcurlyeq = "\u227D";
const Succeeds = "\u227B";
const SucceedsEqual = "\u2AB0";
const SucceedsSlantEqual = "\u227D";
const SucceedsTilde = "\u227F";
const succeq = "\u2AB0";
const succnapprox = "\u2ABA";
const succneqq = "\u2AB6";
const succnsim = "\u22E9";
const succsim = "\u227F";
const SuchThat = "\u220B";
const sum = "\u2211";
const Sum = "\u2211";
const sung = "\u266A";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const sup = "\u2283";
const Sup = "\u22D1";
const supdot = "\u2ABE";
const supdsub = "\u2AD8";
const supE = "\u2AC6";
const supe = "\u2287";
const supedot = "\u2AC4";
const Superset = "\u2283";
const SupersetEqual = "\u2287";
const suphsol = "\u27C9";
const suphsub = "\u2AD7";
const suplarr = "\u297B";
const supmult = "\u2AC2";
const supnE = "\u2ACC";
const supne = "\u228B";
const supplus = "\u2AC0";
const supset = "\u2283";
const Supset = "\u22D1";
const supseteq = "\u2287";
const supseteqq = "\u2AC6";
const supsetneq = "\u228B";
const supsetneqq = "\u2ACC";
const supsim = "\u2AC8";
const supsub = "\u2AD4";
const supsup = "\u2AD6";
const swarhk = "\u2926";
const swarr = "\u2199";
const swArr = "\u21D9";
const swarrow = "\u2199";
const swnwar = "\u292A";
const szlig = "\xDF";
const Tab = "	";
const target = "\u2316";
const Tau = "\u03A4";
const tau = "\u03C4";
const tbrk = "\u23B4";
const Tcaron = "\u0164";
const tcaron = "\u0165";
const Tcedil = "\u0162";
const tcedil = "\u0163";
const Tcy = "\u0422";
const tcy = "\u0442";
const tdot = "\u20DB";
const telrec = "\u2315";
const Tfr = "\u{1D517}";
const tfr = "\u{1D531}";
const there4 = "\u2234";
const therefore = "\u2234";
const Therefore = "\u2234";
const Theta = "\u0398";
const theta = "\u03B8";
const thetasym = "\u03D1";
const thetav = "\u03D1";
const thickapprox = "\u2248";
const thicksim = "\u223C";
const ThickSpace = "\u205F\u200A";
const ThinSpace = "\u2009";
const thinsp = "\u2009";
const thkap = "\u2248";
const thksim = "\u223C";
const THORN = "\xDE";
const thorn = "\xFE";
const tilde = "\u02DC";
const Tilde = "\u223C";
const TildeEqual = "\u2243";
const TildeFullEqual = "\u2245";
const TildeTilde = "\u2248";
const timesbar = "\u2A31";
const timesb = "\u22A0";
const times = "\xD7";
const timesd = "\u2A30";
const tint = "\u222D";
const toea = "\u2928";
const topbot = "\u2336";
const topcir = "\u2AF1";
const top = "\u22A4";
const Topf = "\u{1D54B}";
const topf = "\u{1D565}";
const topfork = "\u2ADA";
const tosa = "\u2929";
const tprime = "\u2034";
const trade = "\u2122";
const TRADE = "\u2122";
const triangle = "\u25B5";
const triangledown = "\u25BF";
const triangleleft = "\u25C3";
const trianglelefteq = "\u22B4";
const triangleq = "\u225C";
const triangleright = "\u25B9";
const trianglerighteq = "\u22B5";
const tridot = "\u25EC";
const trie = "\u225C";
const triminus = "\u2A3A";
const TripleDot = "\u20DB";
const triplus = "\u2A39";
const trisb = "\u29CD";
const tritime = "\u2A3B";
const trpezium = "\u23E2";
const Tscr = "\u{1D4AF}";
const tscr = "\u{1D4C9}";
const TScy = "\u0426";
const tscy = "\u0446";
const TSHcy = "\u040B";
const tshcy = "\u045B";
const Tstrok = "\u0166";
const tstrok = "\u0167";
const twixt = "\u226C";
const twoheadleftarrow = "\u219E";
const twoheadrightarrow = "\u21A0";
const Uacute = "\xDA";
const uacute = "\xFA";
const uarr = "\u2191";
const Uarr = "\u219F";
const uArr = "\u21D1";
const Uarrocir = "\u2949";
const Ubrcy = "\u040E";
const ubrcy = "\u045E";
const Ubreve = "\u016C";
const ubreve = "\u016D";
const Ucirc = "\xDB";
const ucirc = "\xFB";
const Ucy = "\u0423";
const ucy = "\u0443";
const udarr = "\u21C5";
const Udblac = "\u0170";
const udblac = "\u0171";
const udhar = "\u296E";
const ufisht = "\u297E";
const Ufr = "\u{1D518}";
const ufr = "\u{1D532}";
const Ugrave = "\xD9";
const ugrave = "\xF9";
const uHar = "\u2963";
const uharl = "\u21BF";
const uharr = "\u21BE";
const uhblk = "\u2580";
const ulcorn = "\u231C";
const ulcorner = "\u231C";
const ulcrop = "\u230F";
const ultri = "\u25F8";
const Umacr = "\u016A";
const umacr = "\u016B";
const uml = "\xA8";
const UnderBar = "_";
const UnderBrace = "\u23DF";
const UnderBracket = "\u23B5";
const UnderParenthesis = "\u23DD";
const Union = "\u22C3";
const UnionPlus = "\u228E";
const Uogon = "\u0172";
const uogon = "\u0173";
const Uopf = "\u{1D54C}";
const uopf = "\u{1D566}";
const UpArrowBar = "\u2912";
const uparrow = "\u2191";
const UpArrow = "\u2191";
const Uparrow = "\u21D1";
const UpArrowDownArrow = "\u21C5";
const updownarrow = "\u2195";
const UpDownArrow = "\u2195";
const Updownarrow = "\u21D5";
const UpEquilibrium = "\u296E";
const upharpoonleft = "\u21BF";
const upharpoonright = "\u21BE";
const uplus = "\u228E";
const UpperLeftArrow = "\u2196";
const UpperRightArrow = "\u2197";
const upsi = "\u03C5";
const Upsi = "\u03D2";
const upsih = "\u03D2";
const Upsilon = "\u03A5";
const upsilon = "\u03C5";
const UpTeeArrow = "\u21A5";
const UpTee = "\u22A5";
const upuparrows = "\u21C8";
const urcorn = "\u231D";
const urcorner = "\u231D";
const urcrop = "\u230E";
const Uring = "\u016E";
const uring = "\u016F";
const urtri = "\u25F9";
const Uscr = "\u{1D4B0}";
const uscr = "\u{1D4CA}";
const utdot = "\u22F0";
const Utilde = "\u0168";
const utilde = "\u0169";
const utri = "\u25B5";
const utrif = "\u25B4";
const uuarr = "\u21C8";
const Uuml = "\xDC";
const uuml = "\xFC";
const uwangle = "\u29A7";
const vangrt = "\u299C";
const varepsilon = "\u03F5";
const varkappa = "\u03F0";
const varnothing = "\u2205";
const varphi = "\u03D5";
const varpi = "\u03D6";
const varpropto = "\u221D";
const varr = "\u2195";
const vArr = "\u21D5";
const varrho = "\u03F1";
const varsigma = "\u03C2";
const varsubsetneq = "\u228A\uFE00";
const varsubsetneqq = "\u2ACB\uFE00";
const varsupsetneq = "\u228B\uFE00";
const varsupsetneqq = "\u2ACC\uFE00";
const vartheta = "\u03D1";
const vartriangleleft = "\u22B2";
const vartriangleright = "\u22B3";
const vBar = "\u2AE8";
const Vbar = "\u2AEB";
const vBarv = "\u2AE9";
const Vcy = "\u0412";
const vcy = "\u0432";
const vdash = "\u22A2";
const vDash = "\u22A8";
const Vdash = "\u22A9";
const VDash = "\u22AB";
const Vdashl = "\u2AE6";
const veebar = "\u22BB";
const vee = "\u2228";
const Vee = "\u22C1";
const veeeq = "\u225A";
const vellip = "\u22EE";
const verbar = "|";
const Verbar = "\u2016";
const vert = "|";
const Vert = "\u2016";
const VerticalBar = "\u2223";
const VerticalLine = "|";
const VerticalSeparator = "\u2758";
const VerticalTilde = "\u2240";
const VeryThinSpace = "\u200A";
const Vfr = "\u{1D519}";
const vfr = "\u{1D533}";
const vltri = "\u22B2";
const vnsub = "\u2282\u20D2";
const vnsup = "\u2283\u20D2";
const Vopf = "\u{1D54D}";
const vopf = "\u{1D567}";
const vprop = "\u221D";
const vrtri = "\u22B3";
const Vscr = "\u{1D4B1}";
const vscr = "\u{1D4CB}";
const vsubnE = "\u2ACB\uFE00";
const vsubne = "\u228A\uFE00";
const vsupnE = "\u2ACC\uFE00";
const vsupne = "\u228B\uFE00";
const Vvdash = "\u22AA";
const vzigzag = "\u299A";
const Wcirc = "\u0174";
const wcirc = "\u0175";
const wedbar = "\u2A5F";
const wedge = "\u2227";
const Wedge = "\u22C0";
const wedgeq = "\u2259";
const weierp = "\u2118";
const Wfr = "\u{1D51A}";
const wfr = "\u{1D534}";
const Wopf = "\u{1D54E}";
const wopf = "\u{1D568}";
const wp = "\u2118";
const wr = "\u2240";
const wreath = "\u2240";
const Wscr = "\u{1D4B2}";
const wscr = "\u{1D4CC}";
const xcap = "\u22C2";
const xcirc = "\u25EF";
const xcup = "\u22C3";
const xdtri = "\u25BD";
const Xfr = "\u{1D51B}";
const xfr = "\u{1D535}";
const xharr = "\u27F7";
const xhArr = "\u27FA";
const Xi = "\u039E";
const xi = "\u03BE";
const xlarr = "\u27F5";
const xlArr = "\u27F8";
const xmap = "\u27FC";
const xnis = "\u22FB";
const xodot = "\u2A00";
const Xopf = "\u{1D54F}";
const xopf = "\u{1D569}";
const xoplus = "\u2A01";
const xotime = "\u2A02";
const xrarr = "\u27F6";
const xrArr = "\u27F9";
const Xscr = "\u{1D4B3}";
const xscr = "\u{1D4CD}";
const xsqcup = "\u2A06";
const xuplus = "\u2A04";
const xutri = "\u25B3";
const xvee = "\u22C1";
const xwedge = "\u22C0";
const Yacute = "\xDD";
const yacute = "\xFD";
const YAcy = "\u042F";
const yacy = "\u044F";
const Ycirc = "\u0176";
const ycirc = "\u0177";
const Ycy = "\u042B";
const ycy = "\u044B";
const yen = "\xA5";
const Yfr = "\u{1D51C}";
const yfr = "\u{1D536}";
const YIcy = "\u0407";
const yicy = "\u0457";
const Yopf = "\u{1D550}";
const yopf = "\u{1D56A}";
const Yscr = "\u{1D4B4}";
const yscr = "\u{1D4CE}";
const YUcy = "\u042E";
const yucy = "\u044E";
const yuml = "\xFF";
const Yuml = "\u0178";
const Zacute = "\u0179";
const zacute = "\u017A";
const Zcaron = "\u017D";
const zcaron = "\u017E";
const Zcy = "\u0417";
const zcy = "\u0437";
const Zdot = "\u017B";
const zdot = "\u017C";
const zeetrf = "\u2128";
const ZeroWidthSpace = "\u200B";
const Zeta = "\u0396";
const zeta = "\u03B6";
const zfr = "\u{1D537}";
const Zfr = "\u2128";
const ZHcy = "\u0416";
const zhcy = "\u0436";
const zigrarr = "\u21DD";
const zopf = "\u{1D56B}";
const Zopf = "\u2124";
const Zscr = "\u{1D4B5}";
const zscr = "\u{1D4CF}";
const zwj = "\u200D";
const zwnj = "\u200C";
var require$$0 = {
  Aacute,
  aacute,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc,
  acirc,
  acute,
  Acy,
  acy,
  AElig,
  aelig,
  af,
  Afr,
  afr,
  Agrave,
  agrave,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp,
  AMP,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos,
  ApplyFunction,
  approx,
  approxeq,
  Aring,
  aring,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde,
  atilde,
  Auml,
  auml,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block: block$1,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil,
  ccedil,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil,
  Cedilla,
  cemptyv,
  cent,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy,
  COPY,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute,
  eacute,
  easter,
  Ecaron,
  ecaron,
  Ecirc,
  ecirc,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave,
  egrave,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH,
  eth,
  Euml,
  euml,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12,
  frac13,
  frac14,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt,
  GT,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute,
  iacute,
  ic,
  Icirc,
  icirc,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl,
  iff,
  ifr,
  Ifr,
  Igrave,
  igrave,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image: image$1,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "\u2208",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml,
  iuml,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt,
  LT,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr,
  male,
  malt,
  maltese,
  "Map": "\u2905",
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro,
  midast,
  midcir,
  mid,
  middot,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde,
  ntilde,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute,
  oacute,
  oast,
  Ocirc,
  ocirc,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve,
  ograve,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf,
  ordm,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash,
  oslash,
  osol,
  Otilde,
  otilde,
  otimesas,
  Otimes,
  otimes,
  Ouml,
  ouml,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot,
  QUOT,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg,
  REG,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1,
  sup2,
  sup3,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN,
  thorn,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute,
  uacute,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc,
  ucirc,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave,
  ugrave,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml,
  uuml,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute,
  yacute,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
var entities$1 = require$$0;
var regex$4 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var mdurl$1 = {};
var encodeCache = {};
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = encodeCache[exclude] = [];
  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    if (/^[0-9a-z]$/i.test(ch)) {
      cache.push(ch);
    } else {
      cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }
  return cache;
}
function encode(string, exclude, keepEscaped) {
  var i, l, code3, nextCode, cache, result = "";
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  cache = getEncodeCache(exclude);
  for (i = 0, l = string.length; i < l; i++) {
    code3 = string.charCodeAt(i);
    if (keepEscaped && code3 === 37 && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }
    if (code3 < 128) {
      result += cache[code3];
      continue;
    }
    if (code3 >= 55296 && code3 <= 57343) {
      if (code3 >= 55296 && code3 <= 56319 && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string[i]);
  }
  return result;
}
encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
var encode_1 = encode;
var decodeCache = {};
function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = decodeCache[exclude] = [];
  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }
  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
  }
  return cache;
}
function decode(string, exclude) {
  var cache;
  if (typeof exclude !== "string") {
    exclude = decode.defaultChars;
  }
  cache = getDecodeCache(exclude);
  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr, result = "";
    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);
      if (b1 < 128) {
        result += cache[b1];
        continue;
      }
      if ((b1 & 224) === 192 && i + 3 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        if ((b2 & 192) === 128) {
          chr = b1 << 6 & 1984 | b2 & 63;
          if (chr < 128) {
            result += "\uFFFD\uFFFD";
          } else {
            result += String.fromCharCode(chr);
          }
          i += 3;
          continue;
        }
      }
      if ((b1 & 240) === 224 && i + 6 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
          chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
          if (chr < 2048 || chr >= 55296 && chr <= 57343) {
            result += "\uFFFD\uFFFD\uFFFD";
          } else {
            result += String.fromCharCode(chr);
          }
          i += 6;
          continue;
        }
      }
      if ((b1 & 248) === 240 && i + 9 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
          chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
          if (chr < 65536 || chr > 1114111) {
            result += "\uFFFD\uFFFD\uFFFD\uFFFD";
          } else {
            chr -= 65536;
            result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
          }
          i += 9;
          continue;
        }
      }
      result += "\uFFFD";
    }
    return result;
  });
}
decode.defaultChars = ";/?:@&=+$,#";
decode.componentChars = "";
var decode_1 = decode;
var format = function format2(url) {
  var result = "";
  result += url.protocol || "";
  result += url.slashes ? "//" : "";
  result += url.auth ? url.auth + "@" : "";
  if (url.hostname && url.hostname.indexOf(":") !== -1) {
    result += "[" + url.hostname + "]";
  } else {
    result += url.hostname || "";
  }
  result += url.port ? ":" + url.port : "";
  result += url.pathname || "";
  result += url.search || "";
  result += url.hash || "";
  return result;
};
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hostlessProtocol = {
  "javascript": true,
  "javascript:": true
}, slashedProtocol = {
  "http": true,
  "https": true,
  "ftp": true,
  "gopher": true,
  "file": true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) {
    return url;
  }
  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes, rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }
    if (rest[hostEnd - 1] === ":") {
      hostEnd--;
    }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    this.parseHost(host);
    this.hostname = this.hostname || "";
    var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part2 = hostparts[i];
        if (!part2) {
          continue;
        }
        if (!part2.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k = part2.length; j < k; j++) {
            if (part2.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part2[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part2.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join(".") + rest;
            }
            this.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = "";
    }
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) {
    this.pathname = rest;
  }
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = "";
  }
  return this;
};
Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) {
    this.hostname = host;
  }
};
var parse = urlParse;
mdurl$1.encode = encode_1;
mdurl$1.decode = decode_1;
mdurl$1.format = format;
mdurl$1.parse = parse;
var uc_micro = {};
var regex$3 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var regex$2 = /[\0-\x1F\x7F-\x9F]/;
var regex$1 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
var regex = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
uc_micro.Any = regex$3;
uc_micro.Cc = regex$2;
uc_micro.Cf = regex$1;
uc_micro.P = regex$4;
uc_micro.Z = regex;
(function(exports) {
  function _class2(obj) {
    return Object.prototype.toString.call(obj);
  }
  function isString2(obj) {
    return _class2(obj) === "[object String]";
  }
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  function has2(object, key) {
    return _hasOwnProperty.call(object, key);
  }
  function assign2(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
      if (!source) {
        return;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be object");
      }
      Object.keys(source).forEach(function(key) {
        obj[key] = source[key];
      });
    });
    return obj;
  }
  function arrayReplaceAt2(src, pos, newElements) {
    return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
  }
  function isValidEntityCode2(c) {
    if (c >= 55296 && c <= 57343) {
      return false;
    }
    if (c >= 64976 && c <= 65007) {
      return false;
    }
    if ((c & 65535) === 65535 || (c & 65535) === 65534) {
      return false;
    }
    if (c >= 0 && c <= 8) {
      return false;
    }
    if (c === 11) {
      return false;
    }
    if (c >= 14 && c <= 31) {
      return false;
    }
    if (c >= 127 && c <= 159) {
      return false;
    }
    if (c > 1114111) {
      return false;
    }
    return true;
  }
  function fromCodePoint2(c) {
    if (c > 65535) {
      c -= 65536;
      var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c);
  }
  var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
  var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  var entities2 = entities$1;
  function replaceEntityPattern(match2, name) {
    var code3 = 0;
    if (has2(entities2, name)) {
      return entities2[name];
    }
    if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
      code3 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
      if (isValidEntityCode2(code3)) {
        return fromCodePoint2(code3);
      }
    }
    return match2;
  }
  function unescapeMd(str) {
    if (str.indexOf("\\") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_MD_RE, "$1");
  }
  function unescapeAll2(str) {
    if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_ALL_RE, function(match2, escaped, entity3) {
      if (escaped) {
        return escaped;
      }
      return replaceEntityPattern(match2, entity3);
    });
  }
  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }
  function escapeHtml2(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }
  var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
  function escapeRE2(str) {
    return str.replace(REGEXP_ESCAPE_RE, "\\$&");
  }
  function isSpace2(code3) {
    switch (code3) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }
  function isWhiteSpace2(code3) {
    if (code3 >= 8192 && code3 <= 8202) {
      return true;
    }
    switch (code3) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }
  var UNICODE_PUNCT_RE = regex$4;
  function isPunctChar2(ch) {
    return UNICODE_PUNCT_RE.test(ch);
  }
  function isMdAsciiPunct2(ch) {
    switch (ch) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  function normalizeReference2(str) {
    str = str.trim().replace(/\s+/g, " ");
    if ("\u1E9E".toLowerCase() === "\u1E7E") {
      str = str.replace(/ẞ/g, "\xDF");
    }
    return str.toLowerCase().toUpperCase();
  }
  exports.lib = {};
  exports.lib.mdurl = mdurl$1;
  exports.lib.ucmicro = uc_micro;
  exports.assign = assign2;
  exports.isString = isString2;
  exports.has = has2;
  exports.unescapeMd = unescapeMd;
  exports.unescapeAll = unescapeAll2;
  exports.isValidEntityCode = isValidEntityCode2;
  exports.fromCodePoint = fromCodePoint2;
  exports.escapeHtml = escapeHtml2;
  exports.arrayReplaceAt = arrayReplaceAt2;
  exports.isSpace = isSpace2;
  exports.isWhiteSpace = isWhiteSpace2;
  exports.isMdAsciiPunct = isMdAsciiPunct2;
  exports.isPunctChar = isPunctChar2;
  exports.escapeRE = escapeRE2;
  exports.normalizeReference = normalizeReference2;
})(utils$1);
var helpers$1 = {};
var parse_link_label = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker2, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
  state.pos = start + 1;
  level = 1;
  while (state.pos < max) {
    marker2 = state.src.charCodeAt(state.pos);
    if (marker2 === 93) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }
    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker2 === 91) {
      if (prevPos === state.pos - 1) {
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }
  if (found) {
    labelEnd = state.pos;
  }
  state.pos = oldPos;
  return labelEnd;
};
var unescapeAll$2 = utils$1.unescapeAll;
var parse_link_destination = function parseLinkDestination(str, pos, max) {
  var code3, level, lines = 0, start = pos, result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (str.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max) {
      code3 = str.charCodeAt(pos);
      if (code3 === 10) {
        return result;
      }
      if (code3 === 60) {
        return result;
      }
      if (code3 === 62) {
        result.pos = pos + 1;
        result.str = unescapeAll$2(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code3 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return result;
  }
  level = 0;
  while (pos < max) {
    code3 = str.charCodeAt(pos);
    if (code3 === 32) {
      break;
    }
    if (code3 < 32 || code3 === 127) {
      break;
    }
    if (code3 === 92 && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 32) {
        break;
      }
      pos += 2;
      continue;
    }
    if (code3 === 40) {
      level++;
      if (level > 32) {
        return result;
      }
    }
    if (code3 === 41) {
      if (level === 0) {
        break;
      }
      level--;
    }
    pos++;
  }
  if (start === pos) {
    return result;
  }
  if (level !== 0) {
    return result;
  }
  result.str = unescapeAll$2(str.slice(start, pos));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};
var unescapeAll$1 = utils$1.unescapeAll;
var parse_link_title = function parseLinkTitle(str, pos, max) {
  var code3, marker2, lines = 0, start = pos, result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (pos >= max) {
    return result;
  }
  marker2 = str.charCodeAt(pos);
  if (marker2 !== 34 && marker2 !== 39 && marker2 !== 40) {
    return result;
  }
  pos++;
  if (marker2 === 40) {
    marker2 = 41;
  }
  while (pos < max) {
    code3 = str.charCodeAt(pos);
    if (code3 === marker2) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll$1(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code3 === 40 && marker2 === 41) {
      return result;
    } else if (code3 === 10) {
      lines++;
    } else if (code3 === 92 && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
    pos++;
  }
  return result;
};
helpers$1.parseLinkLabel = parse_link_label;
helpers$1.parseLinkDestination = parse_link_destination;
helpers$1.parseLinkTitle = parse_link_title;
var assign$1 = utils$1.assign;
var unescapeAll = utils$1.unescapeAll;
var escapeHtml = utils$1.escapeHtml;
var default_rules = {};
default_rules.code_inline = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<code" + slf.renderAttrs(token2) + ">" + escapeHtml(tokens[idx].content) + "</code>";
};
default_rules.code_block = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<pre" + slf.renderAttrs(token2) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
};
default_rules.fence = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx], info = token2.info ? unescapeAll(token2.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join("");
  }
  if (options.highlight) {
    highlighted = options.highlight(token2.content, langName, langAttrs) || escapeHtml(token2.content);
  } else {
    highlighted = escapeHtml(token2.content);
  }
  if (highlighted.indexOf("<pre") === 0) {
    return highlighted + "\n";
  }
  if (info) {
    i = token2.attrIndex("class");
    tmpAttrs = token2.attrs ? token2.attrs.slice() : [];
    if (i < 0) {
      tmpAttrs.push(["class", options.langPrefix + langName]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += " " + options.langPrefix + langName;
    }
    tmpToken = {
      attrs: tmpAttrs
    };
    return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
  }
  return "<pre><code" + slf.renderAttrs(token2) + ">" + highlighted + "</code></pre>\n";
};
default_rules.image = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  token2.attrs[token2.attrIndex("alt")][1] = slf.renderInlineAsText(token2.children, options, env);
  return slf.renderToken(tokens, idx, options);
};
default_rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
default_rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
default_rules.text = function(tokens, idx) {
  return escapeHtml(tokens[idx].content);
};
default_rules.html_block = function(tokens, idx) {
  return tokens[idx].content;
};
default_rules.html_inline = function(tokens, idx) {
  return tokens[idx].content;
};
function Renderer$1() {
  this.rules = assign$1({}, default_rules);
}
Renderer$1.prototype.renderAttrs = function renderAttrs(token2) {
  var i, l, result;
  if (!token2.attrs) {
    return "";
  }
  result = "";
  for (i = 0, l = token2.attrs.length; i < l; i++) {
    result += " " + escapeHtml(token2.attrs[i][0]) + '="' + escapeHtml(token2.attrs[i][1]) + '"';
  }
  return result;
};
Renderer$1.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken, result = "", needLf = false, token2 = tokens[idx];
  if (token2.hidden) {
    return "";
  }
  if (token2.block && token2.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += "\n";
  }
  result += (token2.nesting === -1 ? "</" : "<") + token2.tag;
  result += this.renderAttrs(token2);
  if (token2.nesting === 0 && options.xhtmlOut) {
    result += " /";
  }
  if (token2.block) {
    needLf = true;
    if (token2.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];
        if (nextToken.type === "inline" || nextToken.hidden) {
          needLf = false;
        } else if (nextToken.nesting === -1 && nextToken.tag === token2.tag) {
          needLf = false;
        }
      }
    }
  }
  result += needLf ? ">\n" : ">";
  return result;
};
Renderer$1.prototype.renderInline = function(tokens, options, env) {
  var type, result = "", rules = this.rules;
  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;
    if (typeof rules[type] !== "undefined") {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }
  return result;
};
Renderer$1.prototype.renderInlineAsText = function(tokens, options, env) {
  var result = "";
  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === "text") {
      result += tokens[i].content;
    } else if (tokens[i].type === "image") {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    } else if (tokens[i].type === "softbreak") {
      result += "\n";
    }
  }
  return result;
};
Renderer$1.prototype.render = function(tokens, options, env) {
  var i, len, type, result = "", rules = this.rules;
  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;
    if (type === "inline") {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== "undefined") {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }
  return result;
};
var renderer = Renderer$1;
function Ruler$3() {
  this.__rules__ = [];
  this.__cache__ = null;
}
Ruler$3.prototype.__find__ = function(name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};
Ruler$3.prototype.__compile__ = function() {
  var self = this;
  var chains = [""];
  self.__rules__.forEach(function(rule) {
    if (!rule.enabled) {
      return;
    }
    rule.alt.forEach(function(altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });
  self.__cache__ = {};
  chains.forEach(function(chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self.__cache__[chain].push(rule.fn);
    });
  });
};
Ruler$3.prototype.at = function(name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + name);
  }
  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};
Ruler$3.prototype.before = function(beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + beforeName);
  }
  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler$3.prototype.after = function(afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + afterName);
  }
  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler$3.prototype.push = function(ruleName, fn, options) {
  var opt = options || {};
  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler$3.prototype.enable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result = [];
  list3.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler$3.prototype.enableOnly = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  this.__rules__.forEach(function(rule) {
    rule.enabled = false;
  });
  this.enable(list3, ignoreInvalid);
};
Ruler$3.prototype.disable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result = [];
  list3.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler$3.prototype.getRules = function(chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};
var ruler = Ruler$3;
var NEWLINES_RE = /\r\n?|\n/g;
var NULL_RE = /\0/g;
var normalize = function normalize2(state) {
  var str;
  str = state.src.replace(NEWLINES_RE, "\n");
  str = str.replace(NULL_RE, "\uFFFD");
  state.src = str;
};
var block = function block2(state) {
  var token2;
  if (state.inlineMode) {
    token2 = new state.Token("inline", "", 0);
    token2.content = state.src;
    token2.map = [0, 1];
    token2.children = [];
    state.tokens.push(token2);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};
var inline = function inline2(state) {
  var tokens = state.tokens, tok, i, l;
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === "inline") {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};
var arrayReplaceAt = utils$1.arrayReplaceAt;
function isLinkOpen$1(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose$1(str) {
  return /^<\/a\s*>/i.test(str);
}
var linkify$1 = function linkify(state) {
  var i, j, l, tokens, token2, currentToken, nodes, ln, text3, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
  if (!state.md.options.linkify) {
    return;
  }
  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }
    tokens = blockTokens[j].children;
    htmlLinkLevel = 0;
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];
      if (currentToken.type === "link_close") {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
          i--;
        }
        continue;
      }
      if (currentToken.type === "html_inline") {
        if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose$1(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) {
        continue;
      }
      if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
        text3 = currentToken.content;
        links = state.md.linkify.match(text3);
        nodes = [];
        level = currentToken.level;
        lastPos = 0;
        if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") {
          links = links.slice(1);
        }
        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) {
            continue;
          }
          urlText = links[ln].text;
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
          } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }
          pos = links[ln].index;
          if (pos > lastPos) {
            token2 = new state.Token("text", "", 0);
            token2.content = text3.slice(lastPos, pos);
            token2.level = level;
            nodes.push(token2);
          }
          token2 = new state.Token("link_open", "a", 1);
          token2.attrs = [["href", fullUrl]];
          token2.level = level++;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          token2 = new state.Token("text", "", 0);
          token2.content = urlText;
          token2.level = level;
          nodes.push(token2);
          token2 = new state.Token("link_close", "a", -1);
          token2.level = --level;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text3.length) {
          token2 = new state.Token("text", "", 0);
          token2.content = text3.slice(lastPos);
          token2.level = level;
          nodes.push(token2);
        }
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};
var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
var SCOPED_ABBR = {
  c: "\xA9",
  r: "\xAE",
  tm: "\u2122"
};
function replaceFn(match2, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}
function replace_scoped(inlineTokens) {
  var i, token2, inside_autolink = 0;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token2 = inlineTokens[i];
    if (token2.type === "text" && !inside_autolink) {
      token2.content = token2.content.replace(SCOPED_ABBR_RE, replaceFn);
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace_rare(inlineTokens) {
  var i, token2, inside_autolink = 0;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token2 = inlineTokens[i];
    if (token2.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token2.content)) {
        token2.content = token2.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
      }
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
var replacements = function replace(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline") {
      continue;
    }
    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }
    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }
  }
};
var isWhiteSpace$1 = utils$1.isWhiteSpace;
var isPunctChar$1 = utils$1.isPunctChar;
var isMdAsciiPunct$1 = utils$1.isMdAsciiPunct;
var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = "\u2019";
function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}
function process_inlines(tokens, state) {
  var i, token2, text3, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
  stack = [];
  for (i = 0; i < tokens.length; i++) {
    token2 = tokens[i];
    thisLevel = tokens[i].level;
    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) {
        break;
      }
    }
    stack.length = j + 1;
    if (token2.type !== "text") {
      continue;
    }
    text3 = token2.content;
    pos = 0;
    max = text3.length;
    OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text3);
        if (!t) {
          break;
        }
        canOpen = canClose = true;
        pos = t.index + 1;
        isSingle = t[0] === "'";
        lastChar = 32;
        if (t.index - 1 >= 0) {
          lastChar = text3.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        nextChar = 32;
        if (pos < max) {
          nextChar = text3.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace$1(lastChar);
        isNextWhiteSpace = isWhiteSpace$1(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 && t[0] === '"') {
          if (lastChar >= 48 && lastChar <= 57) {
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          if (isSingle) {
            token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              token2.content = replaceAt(token2.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
              pos += closeQuote.length - 1;
              if (item.token === i) {
                pos += openQuote.length - 1;
              }
              text3 = token2.content;
              max = text3.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
        }
      }
  }
}
var smartquotes = function smartquotes2(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }
    process_inlines(state.tokens[blkIdx].children, state);
  }
};
var text_join = function text_join2(state) {
  var j, l, tokens, curr, max, last, blockTokens = state.tokens;
  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== "inline")
      continue;
    tokens = blockTokens[j].children;
    max = tokens.length;
    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === "text_special") {
        tokens[curr].type = "text";
      }
    }
    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }
        last++;
      }
    }
    if (curr !== last) {
      tokens.length = last;
    }
  }
};
function Token$3(type, tag, nesting) {
  this.type = type;
  this.tag = tag;
  this.attrs = null;
  this.map = null;
  this.nesting = nesting;
  this.level = 0;
  this.children = null;
  this.content = "";
  this.markup = "";
  this.info = "";
  this.meta = null;
  this.block = false;
  this.hidden = false;
}
Token$3.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;
  if (!this.attrs) {
    return -1;
  }
  attrs = this.attrs;
  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) {
      return i;
    }
  }
  return -1;
};
Token$3.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [attrData];
  }
};
Token$3.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name), attrData = [name, value];
  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};
Token$3.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};
Token$3.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);
  if (idx < 0) {
    this.attrPush([name, value]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
  }
};
var token = Token$3;
var Token$2 = token;
function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md;
}
StateCore.prototype.Token = Token$2;
var state_core = StateCore;
var Ruler$2 = ruler;
var _rules$2 = [
  ["normalize", normalize],
  ["block", block],
  ["inline", inline],
  ["linkify", linkify$1],
  ["replacements", replacements],
  ["smartquotes", smartquotes],
  ["text_join", text_join]
];
function Core() {
  this.ruler = new Ruler$2();
  for (var i = 0; i < _rules$2.length; i++) {
    this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
  }
}
Core.prototype.process = function(state) {
  var i, l, rules;
  rules = this.ruler.getRules("");
  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};
Core.prototype.State = state_core;
var parser_core = Core;
var isSpace$a = utils$1.isSpace;
function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
  return state.src.slice(pos, max);
}
function escapedSplit(str) {
  var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
  ch = str.charCodeAt(pos);
  while (pos < max) {
    if (ch === 124) {
      if (!isEscaped) {
        result.push(current + str.substring(lastPos, pos));
        current = "";
        lastPos = pos + 1;
      } else {
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }
    isEscaped = ch === 92;
    pos++;
    ch = str.charCodeAt(pos);
  }
  result.push(current + str.substring(lastPos));
  return result;
}
var table = function table2(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token2, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
  if (startLine + 2 > endLine) {
    return false;
  }
  nextLine = startLine + 1;
  if (state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
    return false;
  }
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace$a(secondCh)) {
    return false;
  }
  if (firstCh === 45 && isSpace$a(secondCh)) {
    return false;
  }
  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace$a(ch)) {
      return false;
    }
    pos++;
  }
  lineText = getLine(state, startLine + 1);
  columns = lineText.split("|");
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }
    if (!/^:?-+:?$/.test(t)) {
      return false;
    }
    if (t.charCodeAt(t.length - 1) === 58) {
      aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
    } else if (t.charCodeAt(0) === 58) {
      aligns.push("left");
    } else {
      aligns.push("");
    }
  }
  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf("|") === -1) {
    return false;
  }
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === "")
    columns.shift();
  if (columns.length && columns[columns.length - 1] === "")
    columns.pop();
  columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) {
    return false;
  }
  if (silent) {
    return true;
  }
  oldParentType = state.parentType;
  state.parentType = "table";
  terminatorRules = state.md.block.ruler.getRules("blockquote");
  token2 = state.push("table_open", "table", 1);
  token2.map = tableLines = [startLine, 0];
  token2 = state.push("thead_open", "thead", 1);
  token2.map = [startLine, startLine + 1];
  token2 = state.push("tr_open", "tr", 1);
  token2.map = [startLine, startLine + 1];
  for (i = 0; i < columns.length; i++) {
    token2 = state.push("th_open", "th", 1);
    if (aligns[i]) {
      token2.attrs = [["style", "text-align:" + aligns[i]]];
    }
    token2 = state.push("inline", "", 0);
    token2.content = columns[i].trim();
    token2.children = [];
    token2 = state.push("th_close", "th", -1);
  }
  token2 = state.push("tr_close", "tr", -1);
  token2 = state.push("thead_close", "thead", -1);
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "")
      columns.shift();
    if (columns.length && columns[columns.length - 1] === "")
      columns.pop();
    if (nextLine === startLine + 2) {
      token2 = state.push("tbody_open", "tbody", 1);
      token2.map = tbodyLines = [startLine + 2, 0];
    }
    token2 = state.push("tr_open", "tr", 1);
    token2.map = [nextLine, nextLine + 1];
    for (i = 0; i < columnCount; i++) {
      token2 = state.push("td_open", "td", 1);
      if (aligns[i]) {
        token2.attrs = [["style", "text-align:" + aligns[i]]];
      }
      token2 = state.push("inline", "", 0);
      token2.content = columns[i] ? columns[i].trim() : "";
      token2.children = [];
      token2 = state.push("td_close", "td", -1);
    }
    token2 = state.push("tr_close", "tr", -1);
  }
  if (tbodyLines) {
    token2 = state.push("tbody_close", "tbody", -1);
    tbodyLines[1] = nextLine;
  }
  token2 = state.push("table_close", "table", -1);
  tableLines[1] = nextLine;
  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};
var code = function code2(state, startLine, endLine) {
  var nextLine, last, token2;
  if (state.sCount[startLine] - state.blkIndent < 4) {
    return false;
  }
  last = nextLine = startLine + 1;
  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }
  state.line = last;
  token2 = state.push("code_block", "code", 0);
  token2.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
  token2.map = [startLine, state.line];
  return true;
};
var fence = function fence2(state, startLine, endLine, silent) {
  var marker2, len, params, nextLine, mem, token2, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (pos + 3 > max) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos);
  if (marker2 !== 126 && marker2 !== 96) {
    return false;
  }
  mem = pos;
  pos = state.skipChars(pos, marker2);
  len = pos - mem;
  if (len < 3) {
    return false;
  }
  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);
  if (marker2 === 96) {
    if (params.indexOf(String.fromCharCode(marker2)) >= 0) {
      return false;
    }
  }
  if (silent) {
    return true;
  }
  nextLine = startLine;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) {
      break;
    }
    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.src.charCodeAt(pos) !== marker2) {
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      continue;
    }
    pos = state.skipChars(pos, marker2);
    if (pos - mem < len) {
      continue;
    }
    pos = state.skipSpaces(pos);
    if (pos < max) {
      continue;
    }
    haveEndMarker = true;
    break;
  }
  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  token2 = state.push("fence", "code", 0);
  token2.info = params;
  token2.content = state.getLines(startLine + 1, nextLine, len, true);
  token2.markup = markup;
  token2.map = [startLine, state.line];
  return true;
};
var isSpace$9 = utils$1.isSpace;
var blockquote = function blockquote2(state, startLine, endLine, silent) {
  var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token2, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos++) !== 62) {
    return false;
  }
  if (silent) {
    return true;
  }
  initial = offset = state.sCount[startLine] + 1;
  if (state.src.charCodeAt(pos) === 32) {
    pos++;
    initial++;
    offset++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 9) {
    spaceAfterMarker = true;
    if ((state.bsCount[startLine] + offset) % 4 === 3) {
      pos++;
      initial++;
      offset++;
      adjustTab = false;
    } else {
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }
  oldBMarks = [state.bMarks[startLine]];
  state.bMarks[startLine] = pos;
  while (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (isSpace$9(ch)) {
      if (ch === 9) {
        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset++;
      }
    } else {
      break;
    }
    pos++;
  }
  oldBSCount = [state.bsCount[startLine]];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
  lastLineEmpty = pos >= max;
  oldSCount = [state.sCount[startLine]];
  state.sCount[startLine] = offset - initial;
  oldTShift = [state.tShift[startLine]];
  state.tShift[startLine] = pos - state.bMarks[startLine];
  terminatorRules = state.md.block.ruler.getRules("blockquote");
  oldParentType = state.parentType;
  state.parentType = "blockquote";
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    isOutdented = state.sCount[nextLine] < state.blkIndent;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos >= max) {
      break;
    }
    if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
      initial = offset = state.sCount[nextLine] + 1;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (isSpace$9(ch)) {
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      lastLineEmpty = pos >= max;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      state.lineMax = nextLine;
      if (state.blkIndent !== 0) {
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }
      break;
    }
    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);
    state.sCount[nextLine] = -1;
  }
  oldIndent = state.blkIndent;
  state.blkIndent = 0;
  token2 = state.push("blockquote_open", "blockquote", 1);
  token2.markup = ">";
  token2.map = lines = [startLine, 0];
  state.md.block.tokenize(state, startLine, nextLine);
  token2 = state.push("blockquote_close", "blockquote", -1);
  token2.markup = ">";
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;
  return true;
};
var isSpace$8 = utils$1.isSpace;
var hr = function hr2(state, startLine, endLine, silent) {
  var marker2, cnt, ch, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 95) {
    return false;
  }
  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker2 && !isSpace$8(ch)) {
      return false;
    }
    if (ch === marker2) {
      cnt++;
    }
  }
  if (cnt < 3) {
    return false;
  }
  if (silent) {
    return true;
  }
  state.line = startLine + 1;
  token2 = state.push("hr", "hr", 0);
  token2.map = [startLine, state.line];
  token2.markup = Array(cnt + 1).join(String.fromCharCode(marker2));
  return true;
};
var isSpace$7 = utils$1.isSpace;
function skipBulletListMarker(state, startLine) {
  var marker2, pos, max, ch;
  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 43) {
    return -1;
  }
  if (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$7(ch)) {
      return -1;
    }
  }
  return pos;
}
function skipOrderedListMarker(state, startLine) {
  var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
  if (pos + 1 >= max) {
    return -1;
  }
  ch = state.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) {
    return -1;
  }
  for (; ; ) {
    if (pos >= max) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      if (pos - start >= 10) {
        return -1;
      }
      continue;
    }
    if (ch === 41 || ch === 46) {
      break;
    }
    return -1;
  }
  if (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$7(ch)) {
      return -1;
    }
  }
  return pos;
}
function markTightParagraphs(state, idx) {
  var i, l, level = state.level + 2;
  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}
var list = function list2(state, startLine, endLine, silent) {
  var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token2, isTerminatingParagraph = false, tight = true;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
    return false;
  }
  if (silent && state.parentType === "paragraph") {
    if (state.sCount[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));
    if (isTerminatingParagraph && markerValue !== 1)
      return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine])
      return false;
  }
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
  if (silent) {
    return true;
  }
  listTokIdx = state.tokens.length;
  if (isOrdered) {
    token2 = state.push("ordered_list_open", "ol", 1);
    if (markerValue !== 1) {
      token2.attrs = [["start", markerValue]];
    }
  } else {
    token2 = state.push("bullet_list_open", "ul", 1);
  }
  token2.map = listLines = [startLine, 0];
  token2.markup = String.fromCharCode(markerCharCode);
  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules("list");
  oldParentType = state.parentType;
  state.parentType = "list";
  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];
    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
    while (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (ch === 9) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 32) {
        offset++;
      } else {
        break;
      }
      pos++;
    }
    contentStart = pos;
    if (contentStart >= max) {
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }
    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    }
    indent = initial + indentAfterMarker;
    token2 = state.push("list_item_open", "li", 1);
    token2.markup = String.fromCharCode(markerCharCode);
    token2.map = itemLines = [startLine, 0];
    if (isOrdered) {
      token2.info = state.src.slice(start, posAfterMarker - 1);
    }
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldSCount = state.sCount[startLine];
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset;
    if (contentStart >= max && state.isEmpty(startLine + 1)) {
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    }
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.tight = oldTight;
    token2 = state.push("list_item_close", "li", -1);
    token2.markup = String.fromCharCode(markerCharCode);
    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];
    if (nextLine >= endLine) {
      break;
    }
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    }
    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  }
  if (isOrdered) {
    token2 = state.push("ordered_list_close", "ol", -1);
  } else {
    token2 = state.push("bullet_list_close", "ul", -1);
  }
  token2.markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType;
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }
  return true;
};
var normalizeReference$2 = utils$1.normalizeReference;
var isSpace$6 = utils$1.isSpace;
var reference = function reference2(state, startLine, _endLine, silent) {
  var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 91) {
    return false;
  }
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
      if (pos + 1 === max) {
        return false;
      }
      if (state.src.charCodeAt(pos + 1) !== 58) {
        return false;
      }
      break;
    }
  }
  endLine = state.lineMax;
  terminatorRules = state.md.block.ruler.getRules("reference");
  oldParentType = state.parentType;
  state.parentType = "reference";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;
  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 91) {
      return false;
    } else if (ch === 93) {
      labelEnd = pos;
      break;
    } else if (ch === 10) {
      lines++;
    } else if (ch === 92) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
  }
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return false;
  }
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$6(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) {
    return false;
  }
  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) {
    return false;
  }
  pos = res.pos;
  lines += res.lines;
  destEndPos = pos;
  destEndLineNo = lines;
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$6(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = "";
    pos = destEndPos;
    lines = destEndLineNo;
  }
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace$6(ch)) {
      break;
    }
    pos++;
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    if (title) {
      title = "";
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace$6(ch)) {
          break;
        }
        pos++;
      }
    }
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    return false;
  }
  label = normalizeReference$2(str.slice(1, labelEnd));
  if (!label) {
    return false;
  }
  if (silent) {
    return true;
  }
  if (typeof state.env.references === "undefined") {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === "undefined") {
    state.env.references[label] = { title, href };
  }
  state.parentType = oldParentType;
  state.line = startLine + lines + 1;
  return true;
};
var html_blocks = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var html_re = {};
var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
var unquoted = "[^\"'=<>`\\x00-\\x20]+";
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';
var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
var processing = "<[?][\\s\\S]*?[?]>";
var declaration = "<![A-Z]+\\s+[^>]*>";
var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
var HTML_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
html_re.HTML_TAG_RE = HTML_TAG_RE$1;
html_re.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE$1;
var block_names = html_blocks;
var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;
var HTML_SEQUENCES = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
];
var html_block = function html_block2(state, startLine, endLine, silent) {
  var i, nextLine, token2, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (!state.md.options.html) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  lineText = state.src.slice(pos, max);
  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) {
      break;
    }
  }
  if (i === HTML_SEQUENCES.length) {
    return false;
  }
  if (silent) {
    return HTML_SEQUENCES[i][2];
  }
  nextLine = startLine + 1;
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);
      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) {
          nextLine++;
        }
        break;
      }
    }
  }
  state.line = nextLine;
  token2 = state.push("html_block", "", 0);
  token2.map = [startLine, nextLine];
  token2.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
};
var isSpace$5 = utils$1.isSpace;
var heading = function heading2(state, startLine, endLine, silent) {
  var ch, level, tmp, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  ch = state.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max) {
    return false;
  }
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 35 && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max && !isSpace$5(ch)) {
    return false;
  }
  if (silent) {
    return true;
  }
  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 35, pos);
  if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }
  state.line = startLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = "########".slice(0, level);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = state.src.slice(pos, max).trim();
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = "########".slice(0, level);
  return true;
};
var lheading = function lheading2(state, startLine, endLine) {
  var content, terminate, i, l, token2, pos, max, level, marker2, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos < max) {
        marker2 = state.src.charCodeAt(pos);
        if (marker2 === 45 || marker2 === 61) {
          pos = state.skipChars(pos, marker2);
          pos = state.skipSpaces(pos);
          if (pos >= max) {
            level = marker2 === 61 ? 1 : 2;
            break;
          }
        }
      }
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  if (!level) {
    return false;
  }
  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = String.fromCharCode(marker2);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content;
  token2.map = [startLine, state.line - 1];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = String.fromCharCode(marker2);
  state.parentType = oldParentType;
  return true;
};
var paragraph = function paragraph2(state, startLine) {
  var content, terminate, i, l, token2, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  token2 = state.push("paragraph_open", "p", 1);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content;
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
};
var Token$1 = token;
var isSpace$4 = utils$1.isSpace;
function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;
  this.src = src;
  this.md = md;
  this.env = env;
  this.tokens = tokens;
  this.bMarks = [];
  this.eMarks = [];
  this.tShift = [];
  this.sCount = [];
  this.bsCount = [];
  this.blkIndent = 0;
  this.line = 0;
  this.lineMax = 0;
  this.tight = false;
  this.ddIndent = -1;
  this.listIndent = -1;
  this.parentType = "root";
  this.level = 0;
  this.result = "";
  s = this.src;
  indent_found = false;
  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);
    if (!indent_found) {
      if (isSpace$4(ch)) {
        indent++;
        if (ch === 9) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }
    if (ch === 10 || pos === len - 1) {
      if (ch !== 10) {
        pos++;
      }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);
      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);
  this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(type, tag, nesting) {
  var token2 = new Token$1(type, tag, nesting);
  token2.block = true;
  if (nesting < 0)
    this.level--;
  token2.level = this.level;
  if (nesting > 0)
    this.level++;
  this.tokens.push(token2);
  return token2;
};
StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;
  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace$4(ch)) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (!isSpace$4(this.src.charCodeAt(--pos))) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code3) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code3) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code3, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (code3 !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
  if (begin >= end) {
    return "";
  }
  queue = new Array(end - begin);
  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];
    if (line + 1 < end || keepLastLF) {
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }
    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);
      if (isSpace$4(ch)) {
        if (ch === 9) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        lineIndent++;
      } else {
        break;
      }
      first++;
    }
    if (lineIndent > indent) {
      queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }
  return queue.join("");
};
StateBlock.prototype.Token = Token$1;
var state_block = StateBlock;
var Ruler$1 = ruler;
var _rules$1 = [
  ["table", table, ["paragraph", "reference"]],
  ["code", code],
  ["fence", fence, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", blockquote, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
  ["list", list, ["paragraph", "reference", "blockquote"]],
  ["reference", reference],
  ["html_block", html_block, ["paragraph", "reference", "blockquote"]],
  ["heading", heading, ["paragraph", "reference", "blockquote"]],
  ["lheading", lheading],
  ["paragraph", paragraph]
];
function ParserBlock$1() {
  this.ruler = new Ruler$1();
  for (var i = 0; i < _rules$1.length; i++) {
    this.ruler.push(_rules$1[i][0], _rules$1[i][1], { alt: (_rules$1[i][2] || []).slice() });
  }
}
ParserBlock$1.prototype.tokenize = function(state, startLine, endLine) {
  var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state.sCount[line] < state.blkIndent) {
      break;
    }
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }
    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        break;
      }
    }
    state.tight = !hasEmptyLines;
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }
    line = state.line;
    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};
ParserBlock$1.prototype.parse = function(src, md, env, outTokens) {
  var state;
  if (!src) {
    return;
  }
  state = new this.State(src, md, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};
ParserBlock$1.prototype.State = state_block;
var parser_block = ParserBlock$1;
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
var text = function text2(state, silent) {
  var pos = state.pos;
  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }
  if (pos === state.pos) {
    return false;
  }
  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }
  state.pos = pos;
  return true;
};
var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
var linkify2 = function linkify3(state, silent) {
  var pos, max, match2, proto, link3, url, fullUrl, token2;
  if (!state.md.options.linkify)
    return false;
  if (state.linkLevel > 0)
    return false;
  pos = state.pos;
  max = state.posMax;
  if (pos + 3 > max)
    return false;
  if (state.src.charCodeAt(pos) !== 58)
    return false;
  if (state.src.charCodeAt(pos + 1) !== 47)
    return false;
  if (state.src.charCodeAt(pos + 2) !== 47)
    return false;
  match2 = state.pending.match(SCHEME_RE);
  if (!match2)
    return false;
  proto = match2[1];
  link3 = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link3)
    return false;
  url = link3.url;
  url = url.replace(/\*+$/, "");
  fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl))
    return false;
  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);
    token2 = state.push("link_open", "a", 1);
    token2.attrs = [["href", fullUrl]];
    token2.markup = "linkify";
    token2.info = "auto";
    token2 = state.push("text", "", 0);
    token2.content = state.md.normalizeLinkText(url);
    token2 = state.push("link_close", "a", -1);
    token2.markup = "linkify";
    token2.info = "auto";
  }
  state.pos += url.length - proto.length;
  return true;
};
var isSpace$3 = utils$1.isSpace;
var newline = function newline2(state, silent) {
  var pmax, max, ws, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 10) {
    return false;
  }
  pmax = state.pending.length - 1;
  max = state.posMax;
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
        ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
          ws--;
        state.pending = state.pending.slice(0, ws);
        state.push("hardbreak", "br", 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push("softbreak", "br", 0);
      }
    } else {
      state.push("softbreak", "br", 0);
    }
  }
  pos++;
  while (pos < max && isSpace$3(state.src.charCodeAt(pos))) {
    pos++;
  }
  state.pos = pos;
  return true;
};
var isSpace$2 = utils$1.isSpace;
var ESCAPED = [];
for (var i = 0; i < 256; i++) {
  ESCAPED.push(0);
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});
var _escape = function escape(state, silent) {
  var ch1, ch2, origStr, escapedStr, token2, pos = state.pos, max = state.posMax;
  if (state.src.charCodeAt(pos) !== 92)
    return false;
  pos++;
  if (pos >= max)
    return false;
  ch1 = state.src.charCodeAt(pos);
  if (ch1 === 10) {
    if (!silent) {
      state.push("hardbreak", "br", 0);
    }
    pos++;
    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace$2(ch1))
        break;
      pos++;
    }
    state.pos = pos;
    return true;
  }
  escapedStr = state.src[pos];
  if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
    ch2 = state.src.charCodeAt(pos + 1);
    if (ch2 >= 56320 && ch2 <= 57343) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }
  origStr = "\\" + escapedStr;
  if (!silent) {
    token2 = state.push("text_special", "", 0);
    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token2.content = escapedStr;
    } else {
      token2.content = origStr;
    }
    token2.markup = origStr;
    token2.info = "escape";
  }
  state.pos = pos + 1;
  return true;
};
var backticks = function backtick(state, silent) {
  var start, max, marker2, token2, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
  if (ch !== 96) {
    return false;
  }
  start = pos;
  pos++;
  max = state.posMax;
  while (pos < max && state.src.charCodeAt(pos) === 96) {
    pos++;
  }
  marker2 = state.src.slice(start, pos);
  openerLength = marker2.length;
  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent)
      state.pending += marker2;
    state.pos += openerLength;
    return true;
  }
  matchStart = matchEnd = pos;
  while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
      matchEnd++;
    }
    closerLength = matchEnd - matchStart;
    if (closerLength === openerLength) {
      if (!silent) {
        token2 = state.push("code_inline", "code", 0);
        token2.markup = marker2;
        token2.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      state.pos = matchEnd;
      return true;
    }
    state.backticks[closerLength] = matchStart;
  }
  state.backticksScanned = true;
  if (!silent)
    state.pending += marker2;
  state.pos += openerLength;
  return true;
};
var strikethrough = {};
strikethrough.tokenize = function strikethrough2(state, silent) {
  var i, scanned, token2, len, ch, start = state.pos, marker2 = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker2 !== 126) {
    return false;
  }
  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker2);
  if (len < 2) {
    return false;
  }
  if (len % 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch;
    len--;
  }
  for (i = 0; i < len; i += 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch + ch;
    state.delimiters.push({
      marker: marker2,
      length: 0,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess$1(state, delimiters) {
  var i, j, startDelim, endDelim, token2, loneMarkers = [], max = delimiters.length;
  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];
    if (startDelim.marker !== 126) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    token2 = state.tokens[startDelim.token];
    token2.type = "s_open";
    token2.tag = "s";
    token2.nesting = 1;
    token2.markup = "~~";
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = "s_close";
    token2.tag = "s";
    token2.nesting = -1;
    token2.markup = "~~";
    token2.content = "";
    if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
      loneMarkers.push(endDelim.token - 1);
    }
  }
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;
    while (j < state.tokens.length && state.tokens[j].type === "s_close") {
      j++;
    }
    j--;
    if (i !== j) {
      token2 = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token2;
    }
  }
}
strikethrough.postProcess = function strikethrough3(state) {
  var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
  postProcess$1(state, state.delimiters);
  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess$1(state, tokens_meta[curr].delimiters);
    }
  }
};
var emphasis = {};
emphasis.tokenize = function emphasis2(state, silent) {
  var i, scanned, token2, start = state.pos, marker2 = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker2 !== 95 && marker2 !== 42) {
    return false;
  }
  scanned = state.scanDelims(state.pos, marker2 === 42);
  for (i = 0; i < scanned.length; i++) {
    token2 = state.push("text", "", 0);
    token2.content = String.fromCharCode(marker2);
    state.delimiters.push({
      marker: marker2,
      length: scanned.length,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess(state, delimiters) {
  var i, startDelim, endDelim, token2, ch, isStrong, max = delimiters.length;
  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];
    if (startDelim.marker !== 95 && startDelim.marker !== 42) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
    ch = String.fromCharCode(startDelim.marker);
    token2 = state.tokens[startDelim.token];
    token2.type = isStrong ? "strong_open" : "em_open";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = 1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = isStrong ? "strong_close" : "em_close";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = -1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = "";
      state.tokens[delimiters[startDelim.end + 1].token].content = "";
      i--;
    }
  }
}
emphasis.postProcess = function emphasis3(state) {
  var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
  postProcess(state, state.delimiters);
  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};
var normalizeReference$1 = utils$1.normalizeReference;
var isSpace$1 = utils$1.isSpace;
var link = function link2(state, silent) {
  var attrs, code3, label, labelEnd, labelStart, pos, res, ref2, token2, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
  if (state.src.charCodeAt(state.pos) !== 91) {
    return false;
  }
  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    parseReference = false;
    pos++;
    for (; pos < max; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace$1(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
      start = pos;
      for (; pos < max; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace$1(code3) && code3 !== 10) {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max; pos++) {
          code3 = state.src.charCodeAt(pos);
          if (!isSpace$1(code3) && code3 !== 10) {
            break;
          }
        }
      }
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      parseReference = true;
    }
    pos++;
  }
  if (parseReference) {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference$1(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    token2 = state.push("link_open", "a", 1);
    token2.attrs = attrs = [["href", href]];
    if (title) {
      attrs.push(["title", title]);
    }
    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;
    token2 = state.push("link_close", "a", -1);
  }
  state.pos = pos;
  state.posMax = max;
  return true;
};
var normalizeReference = utils$1.normalizeReference;
var isSpace = utils$1.isSpace;
var image = function image2(state, silent) {
  var attrs, code3, content, label, labelEnd, labelStart, pos, ref2, res, title, token2, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
  if (state.src.charCodeAt(state.pos) !== 33) {
    return false;
  }
  if (state.src.charCodeAt(state.pos + 1) !== 91) {
    return false;
  }
  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
    }
    start = pos;
    for (; pos < max; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace(code3) && code3 !== 10) {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      for (; pos < max; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace(code3) && code3 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);
    state.md.inline.parse(content, state.md, state.env, tokens = []);
    token2 = state.push("image", "img", 0);
    token2.attrs = attrs = [["src", href], ["alt", ""]];
    token2.children = tokens;
    token2.content = content;
    if (title) {
      attrs.push(["title", title]);
    }
  }
  state.pos = pos;
  state.posMax = max;
  return true;
};
var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
var autolink = function autolink2(state, silent) {
  var url, fullUrl, token2, ch, start, max, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  start = state.pos;
  max = state.posMax;
  for (; ; ) {
    if (++pos >= max)
      return false;
    ch = state.src.charCodeAt(pos);
    if (ch === 60)
      return false;
    if (ch === 62)
      break;
  }
  url = state.src.slice(start + 1, pos);
  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink("mailto:" + url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  return false;
};
var HTML_TAG_RE = html_re.HTML_TAG_RE;
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
function isLetter(ch) {
  var lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
var html_inline = function html_inline2(state, silent) {
  var ch, match2, max, token2, pos = state.pos;
  if (!state.md.options.html) {
    return false;
  }
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
    return false;
  }
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
    return false;
  }
  match2 = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match2) {
    return false;
  }
  if (!silent) {
    token2 = state.push("html_inline", "", 0);
    token2.content = state.src.slice(pos, pos + match2[0].length);
    if (isLinkOpen(token2.content))
      state.linkLevel++;
    if (isLinkClose(token2.content))
      state.linkLevel--;
  }
  state.pos += match2[0].length;
  return true;
};
var entities = entities$1;
var has = utils$1.has;
var isValidEntityCode = utils$1.isValidEntityCode;
var fromCodePoint = utils$1.fromCodePoint;
var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
var entity = function entity2(state, silent) {
  var ch, code3, match2, token2, pos = state.pos, max = state.posMax;
  if (state.src.charCodeAt(pos) !== 38)
    return false;
  if (pos + 1 >= max)
    return false;
  ch = state.src.charCodeAt(pos + 1);
  if (ch === 35) {
    match2 = state.src.slice(pos).match(DIGITAL_RE);
    if (match2) {
      if (!silent) {
        code3 = match2[1][0].toLowerCase() === "x" ? parseInt(match2[1].slice(1), 16) : parseInt(match2[1], 10);
        token2 = state.push("text_special", "", 0);
        token2.content = isValidEntityCode(code3) ? fromCodePoint(code3) : fromCodePoint(65533);
        token2.markup = match2[0];
        token2.info = "entity";
      }
      state.pos += match2[0].length;
      return true;
    }
  } else {
    match2 = state.src.slice(pos).match(NAMED_RE);
    if (match2) {
      if (has(entities, match2[1])) {
        if (!silent) {
          token2 = state.push("text_special", "", 0);
          token2.content = entities[match2[1]];
          token2.markup = match2[0];
          token2.info = "entity";
        }
        state.pos += match2[0].length;
        return true;
      }
    }
  }
  return false;
};
function processDelimiters(state, delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
  if (!max)
    return;
  var headerIdx = 0;
  var lastTokenIdx = -2;
  var jumps = [];
  for (closerIdx = 0; closerIdx < max; closerIdx++) {
    closer = delimiters[closerIdx];
    jumps.push(0);
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }
    lastTokenIdx = closer.token;
    closer.length = closer.length || 0;
    if (!closer.close)
      continue;
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
    }
    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
    openerIdx = headerIdx - jumps[headerIdx] - 1;
    newMinOpenerIdx = openerIdx;
    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker)
        continue;
      if (opener.open && opener.end < 0) {
        isOddMatch = false;
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }
        if (!isOddMatch) {
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          lastTokenIdx = -2;
          break;
        }
      }
    }
    if (newMinOpenerIdx !== -1) {
      openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}
var balance_pairs = function link_pairs(state) {
  var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
  processDelimiters(state, state.delimiters);
  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(state, tokens_meta[curr].delimiters);
    }
  }
};
var fragments_join = function fragments_join2(state) {
  var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
  for (curr = last = 0; curr < max; curr++) {
    if (tokens[curr].nesting < 0)
      level--;
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0)
      level++;
    if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) {
        tokens[last] = tokens[curr];
      }
      last++;
    }
  }
  if (curr !== last) {
    tokens.length = last;
  }
};
var Token = token;
var isWhiteSpace = utils$1.isWhiteSpace;
var isPunctChar = utils$1.isPunctChar;
var isMdAsciiPunct = utils$1.isMdAsciiPunct;
function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = "";
  this.pendingLevel = 0;
  this.cache = {};
  this.delimiters = [];
  this._prev_delimiters = [];
  this.backticks = {};
  this.backticksScanned = false;
  this.linkLevel = 0;
}
StateInline.prototype.pushPending = function() {
  var token2 = new Token("text", "", 0);
  token2.content = this.pending;
  token2.level = this.pendingLevel;
  this.tokens.push(token2);
  this.pending = "";
  return token2;
};
StateInline.prototype.push = function(type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }
  var token2 = new Token(type, tag, nesting);
  var token_meta = null;
  if (nesting < 0) {
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }
  token2.level = this.level;
  if (nesting > 0) {
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }
  this.pendingLevel = this.level;
  this.tokens.push(token2);
  this.tokens_meta.push(token_meta);
  return token2;
};
StateInline.prototype.scanDelims = function(start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker2 = this.src.charCodeAt(start);
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
  while (pos < max && this.src.charCodeAt(pos) === marker2) {
    pos++;
  }
  count = pos - start;
  nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);
  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }
  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }
  if (!canSplitWord) {
    can_open = left_flanking && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking || isNextPunctChar);
  } else {
    can_open = left_flanking;
    can_close = right_flanking;
  }
  return {
    can_open,
    can_close,
    length: count
  };
};
StateInline.prototype.Token = Token;
var state_inline = StateInline;
var Ruler = ruler;
var _rules = [
  ["text", text],
  ["linkify", linkify2],
  ["newline", newline],
  ["escape", _escape],
  ["backticks", backticks],
  ["strikethrough", strikethrough.tokenize],
  ["emphasis", emphasis.tokenize],
  ["link", link],
  ["image", image],
  ["autolink", autolink],
  ["html_inline", html_inline],
  ["entity", entity]
];
var _rules2 = [
  ["balance_pairs", balance_pairs],
  ["strikethrough", strikethrough.postProcess],
  ["emphasis", emphasis.postProcess],
  ["fragments_join", fragments_join]
];
function ParserInline$1() {
  var i;
  this.ruler = new Ruler();
  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
  this.ruler2 = new Ruler();
  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}
ParserInline$1.prototype.skipToken = function(state) {
  var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
  if (typeof cache[pos] !== "undefined") {
    state.pos = cache[pos];
    return;
  }
  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      state.level++;
      ok = rules[i](state, true);
      state.level--;
      if (ok) {
        break;
      }
    }
  } else {
    state.pos = state.posMax;
  }
  if (!ok) {
    state.pos++;
  }
  cache[pos] = state.pos;
};
ParserInline$1.prototype.tokenize = function(state) {
  var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
  while (state.pos < end) {
    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) {
          break;
        }
      }
    }
    if (ok) {
      if (state.pos >= end) {
        break;
      }
      continue;
    }
    state.pending += state.src[state.pos++];
  }
  if (state.pending) {
    state.pushPending();
  }
};
ParserInline$1.prototype.parse = function(str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);
  this.tokenize(state);
  rules = this.ruler2.getRules("");
  len = rules.length;
  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};
ParserInline$1.prototype.State = state_inline;
var parser_inline = ParserInline$1;
var re = function(opts) {
  var re2 = {};
  opts = opts || {};
  re2.src_Any = regex$3.source;
  re2.src_Cc = regex$2.source;
  re2.src_Z = regex.source;
  re2.src_P = regex$4.source;
  re2.src_ZPCc = [re2.src_Z, re2.src_P, re2.src_Cc].join("|");
  re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
  var text_separators = "[><\uFF5C]";
  re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
  re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
  re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re2.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re2.src_ZCc + "|$)|;(?!" + re2.src_ZCc + "|$)|\\!+(?!" + re2.src_ZCc + "|[!]|$)|\\?(?!" + re2.src_ZCc + "|[?]|$))+|\\/)?";
  re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
  re2.src_domain_root = "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
  re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
  re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
  re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
  re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
  re2.src_host_strict = re2.src_host + re2.src_host_terminator;
  re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
  re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
  re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
  re2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
  re2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
  return re2;
};
function assign(obj) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
function isObject(obj) {
  return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class(obj) === "[object Function]";
}
function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}
var defaultSchemas = {
  "http:": {
    validate: function(text3, pos, self) {
      var tail = text3.slice(pos);
      if (!self.re.http) {
        self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(text3, pos, self) {
      var tail = text3.slice(pos);
      if (!self.re.no_http) {
        self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
      }
      if (self.re.no_http.test(tail)) {
        if (pos >= 3 && text3[pos - 3] === ":") {
          return 0;
        }
        if (pos >= 3 && text3[pos - 3] === "/") {
          return 0;
        }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  "mailto:": {
    validate: function(text3, pos, self) {
      var tail = text3.slice(pos);
      if (!self.re.mailto) {
        self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};
var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = "";
}
function createValidator(re2) {
  return function(text3, pos) {
    var tail = text3.slice(pos);
    if (re2.test(tail)) {
      return tail.match(re2)[0].length;
    }
    return 0;
  };
}
function createNormalizer() {
  return function(match2, self) {
    self.normalize(match2);
  };
}
function compile(self) {
  var re$1 = self.re = re(self.__opts__);
  var tlds2 = self.__tlds__.slice();
  self.onCompile();
  if (!self.__tlds_replaced__) {
    tlds2.push(tlds_2ch_src_re);
  }
  tlds2.push(re$1.src_xn);
  re$1.src_tlds = tlds2.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re$1.src_tlds);
  }
  re$1.email_fuzzy = RegExp(untpl(re$1.tpl_email_fuzzy), "i");
  re$1.link_fuzzy = RegExp(untpl(re$1.tpl_link_fuzzy), "i");
  re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), "i");
  re$1.host_fuzzy_test = RegExp(untpl(re$1.tpl_host_fuzzy_test), "i");
  var aliases = [];
  self.__compiled__ = {};
  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }
  Object.keys(self.__schemas__).forEach(function(name) {
    var val = self.__schemas__[name];
    if (val === null) {
      return;
    }
    var compiled = { validate: null, link: null };
    self.__compiled__[name] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }
      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }
      return;
    }
    if (isString(val)) {
      aliases.push(name);
      return;
    }
    schemaError(name, val);
  });
  aliases.forEach(function(alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      return;
    }
    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  });
  self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
  var slist = Object.keys(self.__compiled__).filter(function(name) {
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE).join("|");
  self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + "))(" + slist + ")", "i");
  self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + "))(" + slist + ")", "ig");
  self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
  self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
  resetScanCache(self);
}
function Match(self, shift) {
  var start = self.__index__, end = self.__last_index__, text3 = self.__text_cache__.slice(start, end);
  this.schema = self.__schema__.toLowerCase();
  this.index = start + shift;
  this.lastIndex = end + shift;
  this.raw = text3;
  this.text = text3;
  this.url = text3;
}
function createMatch(self, shift) {
  var match2 = new Match(self, shift);
  self.__compiled__[match2.schema].normalize(match2, self);
  return match2;
}
function LinkifyIt$1(schemas, options) {
  if (!(this instanceof LinkifyIt$1)) {
    return new LinkifyIt$1(schemas, options);
  }
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign({}, defaultOptions, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
LinkifyIt$1.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
LinkifyIt$1.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
LinkifyIt$1.prototype.test = function test(text3) {
  this.__text_cache__ = text3;
  this.__index__ = -1;
  if (!text3.length) {
    return false;
  }
  var m, ml, me, len, shift, next, re2, tld_pos, at_pos;
  if (this.re.schema_test.test(text3)) {
    re2 = this.re.schema_search;
    re2.lastIndex = 0;
    while ((m = re2.exec(text3)) !== null) {
      len = this.testSchemaAt(text3, m[2], re2.lastIndex);
      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text3.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text3.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text3.indexOf("@");
    if (at_pos >= 0) {
      if ((me = text3.match(this.re.email_fuzzy)) !== null) {
        shift = me.index + me[1].length;
        next = me.index + me[0].length;
        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt$1.prototype.pretest = function pretest(text3) {
  return this.re.pretest.test(text3);
};
LinkifyIt$1.prototype.testSchemaAt = function testSchemaAt(text3, schema, pos) {
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text3, pos, this);
};
LinkifyIt$1.prototype.match = function match(text3) {
  var shift = 0, result = [];
  if (this.__index__ >= 0 && this.__text_cache__ === text3) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }
  var tail = shift ? text3.slice(shift) : text3;
  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }
  if (result.length) {
    return result;
  }
  return null;
};
LinkifyIt$1.prototype.matchAtStart = function matchAtStart(text3) {
  this.__text_cache__ = text3;
  this.__index__ = -1;
  if (!text3.length)
    return null;
  var m = this.re.schema_at_start.exec(text3);
  if (!m)
    return null;
  var len = this.testSchemaAt(text3, m[2], m[0].length);
  if (!len)
    return null;
  this.__schema__ = m[2];
  this.__index__ = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;
  return createMatch(this, 0);
};
LinkifyIt$1.prototype.tlds = function tlds(list3, keepOld) {
  list3 = Array.isArray(list3) ? list3 : [list3];
  if (!keepOld) {
    this.__tlds__ = list3.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list3).sort().filter(function(el2, idx, arr) {
    return el2 !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
LinkifyIt$1.prototype.normalize = function normalize3(match2) {
  if (!match2.schema) {
    match2.url = "http://" + match2.url;
  }
  if (match2.schema === "mailto:" && !/^mailto:/i.test(match2.url)) {
    match2.url = "mailto:" + match2.url;
  }
};
LinkifyIt$1.prototype.onCompile = function onCompile() {
};
var linkifyIt = LinkifyIt$1;
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
var require$$8 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var _default = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
var zero = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
};
var commonmark = {
  options: {
    html: true,
    xhtmlOut: true,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
};
var utils = utils$1;
var helpers = helpers$1;
var Renderer = renderer;
var ParserCore = parser_core;
var ParserBlock = parser_block;
var ParserInline = parser_inline;
var LinkifyIt = linkifyIt;
var mdurl = mdurl$1;
var punycode = require$$8;
var config = {
  default: _default,
  zero,
  commonmark
};
var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(url) {
  var str = url.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
}
var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.encode(mdurl.format(parsed));
}
function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
}
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }
  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = "default";
    }
  }
  this.inline = new ParserInline();
  this.block = new ParserBlock();
  this.core = new ParserCore();
  this.renderer = new Renderer();
  this.linkify = new LinkifyIt();
  this.validateLink = validateLink;
  this.normalizeLink = normalizeLink;
  this.normalizeLinkText = normalizeLinkText;
  this.utils = utils;
  this.helpers = utils.assign({}, helpers);
  this.options = {};
  this.configure(presetName);
  if (options) {
    this.set(options);
  }
}
MarkdownIt.prototype.set = function(options) {
  utils.assign(this.options, options);
  return this;
};
MarkdownIt.prototype.configure = function(presets) {
  var self = this, presetName;
  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) {
      throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
  }
  if (!presets) {
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  }
  if (presets.options) {
    self.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};
MarkdownIt.prototype.enable = function(list3, ignoreInvalid) {
  var result = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.enable(list3, true));
  }, this);
  result = result.concat(this.inline.ruler2.enable(list3, true));
  var missed = list3.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.disable = function(list3, ignoreInvalid) {
  var result = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.disable(list3, true));
  }, this);
  result = result.concat(this.inline.ruler2.disable(list3, true));
  var missed = list3.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.use = function(plugin) {
  var args = [this].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};
MarkdownIt.prototype.parse = function(src, env) {
  if (typeof src !== "string") {
    throw new Error("Input data should be a String");
  }
  var state = new this.core.State(src, this, env);
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.render = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parse(src, env), this.options, env);
};
MarkdownIt.prototype.parseInline = function(src, env) {
  var state = new this.core.State(src, this, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.renderInline = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(src, env), this.options, env);
};
var lib = MarkdownIt;
var markdownIt = lib;
var Layout_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => '.credits {\n  margin-top: 2em;\n  display: table;\n  width: 50%;\n  table-layout: fixed;\n  border-spacing: 0.2em;\n  margin-left: auto;\n  margin-right: auto;\n}\n.credits i {\n  font-size: 20px;\n  padding-top: 1em;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.user {\n  display: table-cell;\n  margin: auto;\n  text-align: center;\n  vertical-align: middle;\n}\n.user a, .user a:hover {\n  text-decoration: none !important;\n}\n.user img {\n  border-radius: 50%;\n  width: 80%;\n}\n.user h3 {\n  margin: 0.3em !important;\n}\n.user p {\n  opacity: 0.65;\n  margin-bottom: 0px !important;\n}\ntable {\n  display: table;\n  width: 100%;\n  text-align: center;\n}\n.tableContainer {\n  width: 100%;\n  overflow-x: scroll;\n}\n.custom-container-title {\n  display: none;\n}\n.custom-container.tip,\n.custom-container.warning,\n.custom-container.danger {\n  border-width: 1px;\n  border-style: solid;\n}\n.custom-container.none {\n  background-color: var(--c-container-bg);\n}\n.custom-container.tip {\n  border-color: var(--c-tip-bg);\n}\n.custom-container.warning {\n  border-color: var(--c-warning-bg);\n}\n.custom-container.danger {\n  border-color: var(--c-danger-bg);\n}\nhtml.dark .custom-container.warning {\n  border-color: var(--c-warning);\n}\nhtml.dark .custom-container.danger {\n  border-color: var(--c-danger);\n}\n.custom-container {\n  background-color: var(--c-tip-bg);\n  color: var(--c-tip-text);\n  padding: 0.1rem 1.5rem;\n  margin: 1rem 0;\n  border-radius: 8px;\n}\n.tab-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.tab-container section {\n  display: contents;\n}\n.tab-container section > input {\n  display: none;\n}\n.tab-container section .tab-link {\n  border: 1px solid var(--c-border);\n  border-bottom-width: 0;\n  padding: 0.5rem 1rem;\n  transition: 150ms ease;\n  cursor: pointer;\n}\n@media screen and (min-width: 576px) {\nhtml:not([dir=rtl]) .tab-container section:not(:first-of-type) .tab-link {\n    border-left-width: 0px;\n}\nhtml:not([dir=rtl]) .tab-container section:first-of-type .tab-link {\n    border-top-left-radius: 0.25rem;\n}\nhtml:not([dir=rtl]) .tab-container section:last-of-type .tab-link {\n    border-top-right-radius: 0.25rem;\n}\nhtml[dir=rtl] .tab-container section:not(:first-of-type) .tab-link {\n    border-right-width: 0px;\n}\nhtml[dir=rtl] .tab-container section:first-of-type .tab-link {\n    border-top-right-radius: 0.25rem;\n}\nhtml[dir=rtl] .tab-container section:last-of-type .tab-link {\n    border-top-left-radius: 0.25rem;\n}\n}\n@media screen and (max-width: 575px) {\n.tab-container section .tab-link {\n    width: 100%;\n}\n.tab-container section:last-of-type .tab-link {\n    border-bottom-width: 1px;\n    border-radius: 0 0 0.25rem 0.25rem;\n}\n.tab-container section:first-of-type .tab-link {\n    border-radius: 0.25rem 0.25rem 0 0 !important;\n}\n}\n.tab-container .tab {\n  display: none;\n  padding: 1rem 1rem 1rem 1rem;\n  order: 999;\n  width: 100%;\n  border: 1px solid var(--c-border);\n}\n@media screen and (min-width: 576px) {\n.tab-container .tab {\n    border-radius: 0 0.25rem 0.25rem 0.25rem;\n}\nhtml[dir=rtl] .tab-container .tab {\n    border-radius: 0.25rem 0 0.25rem 0.25rem;\n}\n}\n@media screen and (max-width: 575px) {\n.tab-container .tab {\n    border-radius: 0;\n    border-bottom-width: 0;\n    order: 0;\n}\n}\n@media screen and (max-width: 575px) {\n.tab-container .tab-last {\n    border-bottom-width: 1px;\n    border-radius: 0 0 0.25rem 0.25rem;\n}\n}\n.tab-container input:checked + .tab-link {\n  border-radius: 0;\n}\n.tab-container input:checked + .tab-link + .tab {\n  display: block;\n}\n.tab-container input:checked + .tab-link:not(:hover):not(:active):not(:focus) {\n  background-color: var(--c-border);\n  border-color: var(--c-border);\n}\n.tab-container .tab-link:hover, .tab-container .tab-link:active, .tab-container .tab-link:focus {\n  background-color: var(--c-border-dark);\n  border-color: var(--c-border-dark);\n}\n.navigator {\n  font-size: 0.9em;\n}\n.navigator a {\n  color: inherit;\n  font-weight: 600;\n}\n.navigator span::after {\n  content: ">";\n  padding-inline: 0.5em;\n  font-weight: 200;\n}\n.heroImage {\n  background-size: cover;\n  background-repeat: none;\n  background-position: center;\n  color: #fff;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);\n}\n.heroImage h1 {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  font-size: 3.3em;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 0.4em;\n}\n.heroImage .description {\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: 1.5em;\n  margin-top: 0;\n  margin-bottom: 2em;\n}\n.heroImage .actions {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 1.5em;\n  padding-right: 1.5em;\n}\n.heroImage .actions .action-button {\n  margin-bottom: 0.5em;\n  padding-block: 0.2em;\n}\n.heroImage .actions .primary {\n  background: white;\n  color: black;\n  mix-blend-mode: screen;\n}\n.heroImage a {\n  color: #fff;\n  font-size: 1.5em;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  padding: 0.5em 1em;\n  margin-right: 0.7em;\n  transition: all 0.2s ease-in-out;\n  transition-property: all;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  transition-delay: 0s;\n}\n.heroWrapper {\n  max-width: var(--homepage-width);\n  margin: 0 auto;\n  padding-top: 6em;\n  padding-bottom: 5.5em;\n}\n.hero {\n  padding: 2em 0 0;\n  display: block;\n}\n.home {\n  padding-top: 1em !important;\n}\n.sidebar::-webkit-scrollbar {\n  width: 5px;\n}\n@media (min-width: 720px) {\n.navbar-dropdown-wrapper .navbar-dropdown {\n    display: block !important;\n    border-width: 0px;\n    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-4px);\n    transition: visibility 0s, opacity 0.25s, visibility 0.25s, transform 0.25s;\n}\nhtml.dark .navbar-dropdown-wrapper .navbar-dropdown {\n    border-width: 1px;\n}\n.navbar-item .fab {\n    font-size: 1.25rem;\n    vertical-align: bottom;\n    padding-bottom: 1px;\n}\n.navbar-dropdown-wrapper .fas {\n    font-size: 1.25rem;\n    vertical-align: bottom;\n    padding-bottom: 1px;\n}\n}\n@media (max-width: 629px) {\n.navbar-item .icon {\n    visibility: hidden;\n    font-family: var(--c-font-family);\n    font-size: 1px;\n    letter-spacing: -1px;\n}\n.navbar-item i::after {\n    visibility: visible;\n    font-size: 1rem;\n    letter-spacing: normal;\n}\n.navbar-item .fa-globe::after {\n    content: "Language";\n    padding-left: 0.5em;\n}\n.navbar-item .fa-github::after {\n    content: "GitHub";\n    padding-left: 0.5em;\n}\n}\n.navbar-dropdown-wrapper:hover .navbar-dropdown, .navbar-dropdown-wrapper.open .navbar-dropdown {\n  opacity: 1 !important;\n  visibility: visible;\n  transform: translateY(0);\n}\n.navbar-item, .navbar-item a, .navbar-item .title {\n  transition: color 0.25s;\n}\n.navbar-item:hover .title, .navbar-item.router-link-active .title {\n  border-bottom: 0px;\n  color: var(--c-text-lightest);\n}\n.navbar-item > a:hover, .navbar-item > a.router-link-active {\n  border-bottom: 0px;\n  color: var(--c-text-accent);\n}\n.navbar-item .external-link-icon {\n  display: none;\n}\n@media (max-width: 959px) {\n.theme-default-content:not(.custom) {\n    padding-top: 0rem;\n}\n}\n:root {\n  --c-brand: #30bcd5;\n  --c-tip: #30bcd5;\n  --c-bg: #f6f6f6;\n  --c-bg-light: #f0f0f0;\n  --c-container-bg: var(--c-bg-light);\n  --c-tip-bg: #e6edef;\n}\nhtml.dark {\n  --c-brand: #30bcd5;\n  --c-tip: #3992a3;\n  --c-tip-bg: var(--c-bg-light);\n  --c-warning: #ceab00;\n  --c-warning-bg: var(--c-tip-bg);\n  --c-warning-title: #ceac03;\n  --c-warning-text: var(--c-text);\n  --c-warning-text-accent: #dbca79;\n  --c-danger: #97424a;\n  --c-danger-bg: var(--c-tip-bg);\n  --c-danger-title: #610000;\n  --c-danger-text: var(--c-text);\n  --c-danger-text-accent: #e96e6e;\n  --c-details-bg: #323843;\n}')();
const _hoisted_1 = { id: "pageTitle" };
const _hoisted_2 = {
  key: 0,
  class: "custom-container none"
};
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _sfc_main = {
  __name: "Layout",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const themeLocaleData = useThemeLocaleData$1();
    const pageTitle = computed(() => {
      if (!frontmatter.value.title)
        return null;
      return frontmatter.value.title || "Title";
    });
    const discordNoticeText = computed(() => {
      if (!themeLocaleData.value.discordNoticeText)
        return null;
      const ret = new markdownIt().render(themeLocaleData.value.discordNoticeText);
      return ret;
    });
    frontmatter.value.widePage || false;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ParentLayout, null, {
        "page-top": withCtx(() => [
          createBaseVNode("h1", _hoisted_1, toDisplayString(unref(pageTitle)), 1),
          unref(discordNoticeText) ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("p", { innerHTML: unref(discordNoticeText) }, null, 8, _hoisted_3)
          ])) : createCommentVNode("", true)
        ]),
        "page-bottom": withCtx(() => [
          createBaseVNode("div", { innerHTML: `
        <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8267943526926430'
            crossorigin='anonymous'><\/script>
        <!-- Ad Unit 0 -->
        <ins class='adsbygoogle'
            style='display:block'
            data-ad-client='ca-pub-8267943526926430'
            data-ad-slot='1237978719'
            data-ad-format='auto'
            data-full-width-responsive='true'></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        <\/script>
        ` }, null, 8, _hoisted_4)
        ]),
        _: 1
      });
    };
  }
};
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Layout.vue"]]);
export { Layout as default };
