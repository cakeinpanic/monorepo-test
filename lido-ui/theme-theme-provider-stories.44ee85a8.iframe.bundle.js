"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[8996],{"./src/theme/theme-provider.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Providers:()=>Providers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/styled-components-wrapper.ts"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  font-size: `,`px;
  line-height: 1.5em;
  padding: `,`px;
  margin: `,`px 0;
  border-radius: `,`px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-text);

  &:not(:only-child):first-child {
    margin-top: 0;
  }

  &:not(:only-child):last-child {
    margin-bottom: 0;
  }
`]);return _templateObject=function _templateObject(){return data},data}let __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Providers"};var themeCustom=_object_spread_props(_object_spread({},_index_js__WEBPACK_IMPORTED_MODULE_2__.ef),{colors:_object_spread_props(_object_spread({},_index_js__WEBPACK_IMPORTED_MODULE_2__.ef.colors),{text:"#FFA29A",foreground:"#323161"})}),Block=_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject(),function(param){return param.theme.fontSizesMap.xs},function(param){return param.theme.spaceMap.xxl},function(param){return param.theme.spaceMap.md},function(param){return param.theme.borderRadiusesMap.xl}),Providers=function Providers(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Component inherits global theme"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.Zw,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in LightThemeProvider"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.J$,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in DarkThemeProvider"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.NP,_object_spread_props(_object_spread({theme:themeCustom},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in ThemeProvider, which provides custom theme"})}))]})};Providers.parameters={...Providers.parameters,docs:{...Providers.parameters?.docs,source:{originalSource:`props => <>
    <Block>Component inherits global theme</Block>
    <LightThemeProvider>
      <Block>Wrapped in LightThemeProvider</Block>
    </LightThemeProvider>
    <DarkThemeProvider>
      <Block>Wrapped in DarkThemeProvider</Block>
    </DarkThemeProvider>
    <ThemeProvider theme={themeCustom} {...props}>
      <Block>Wrapped in ThemeProvider, which provides custom theme</Block>
    </ThemeProvider>
  </>`,...Providers.parameters?.docs?.source}}};let __namedExportsOrder=["Providers"]}}]);
//# sourceMappingURL=theme-theme-provider-stories.44ee85a8.iframe.bundle.js.map