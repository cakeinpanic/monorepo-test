"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[7478],{"./src/container/Container.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,PageLayout:()=>PageLayout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/styled-components-wrapper.ts"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/container/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: 100px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-textSecondary);
  display: flex;
  align-items: center;
  justify-content: center;
`]);return _templateObject=function _templateObject(){return data},data}let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_2__.m,title:"Layout/Container",parameters:{layout:"fullscreen"}};var StyledDiv=_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject()),Base=function Base(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.m,_object_spread_props(_object_spread({},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledDiv,{})}))};Base.args={size:"full"},Base.argTypes={size:{options:Object.values(_index_js__WEBPACK_IMPORTED_MODULE_2__.f).filter(function(value){return"string"==typeof value}),control:"inline-radio"}};var PageLayout=function PageLayout(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{as:"header",size:"full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledDiv,{children:"Header"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{as:"main",size:"content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledDiv,{style:{margin:"20px 0",height:"calc(100vh - 240px)"},children:"Content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{as:"footer",size:"full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledDiv,{children:"Footer"})})]})};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:`props => <Container {...props}>
    <StyledDiv />
  </Container>`,...Base.parameters?.docs?.source}}},PageLayout.parameters={...PageLayout.parameters,docs:{...PageLayout.parameters?.docs,source:{originalSource:`() => <>
    <Container as='header' size='full'>
      <StyledDiv>Header</StyledDiv>
    </Container>
    <Container as='main' size='content'>
      <StyledDiv style={{
      margin: '20px 0',
      height: 'calc(100vh - 240px)'
    }}>
        Content
      </StyledDiv>
    </Container>
    <Container as='footer' size='full'>
      <StyledDiv>Footer</StyledDiv>
    </Container>
  </>`,...PageLayout.parameters?.docs?.source}}};let __namedExportsOrder=["Base","PageLayout"]}}]);
//# sourceMappingURL=container-Container-stories.0bb7cd16.iframe.bundle.js.map