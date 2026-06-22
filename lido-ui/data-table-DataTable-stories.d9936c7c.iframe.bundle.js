"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[5323],{"./src/data-table/DataTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,WithHighlighted:()=>WithHighlighted,WithHint:()=>WithHint,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/data-table/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var sourceKeys,key,i,target={};if("u">typeof Reflect&&Reflect.ownKeys){for(sourceKeys=Reflect.ownKeys(Object(source)),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}if(target=_object_without_properties_loose(source,excluded),Object.getOwnPropertySymbols)for(sourceKeys=Object.getOwnPropertySymbols(source),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.getOwnPropertyNames(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_1__.b,title:"Layout/DataTable",parameters:{layout:"centered"}};var Base=function Base(_0){var loading=_0.loading,rest=_object_without_properties(_0,["loading"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_1__.b,_object_spread_props(_object_spread({},rest),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{title:"You will receive",loading:loading,children:"100 LDO"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{title:"Transaction gas cost",loading:loading,children:"$0.12"})]}))})};Base.args={loading:!1};var WithHint=function WithHint(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_1__.b,_object_spread_props(_object_spread({},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{title:"Staking rewards fee",help:"This fee is split between node operators, the DAO, and an insurance fund",children:"10%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{title:"Transaction gas cost",children:"$0.12"})]}))})},WithHighlighted=function WithHighlighted(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_1__.b,_object_spread_props(_object_spread({},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{title:"Staking rewards fee",highlight:!0,children:"10%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.J,{title:"Transaction gas cost",children:"$0.12"})]}))})};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:`({
  loading,
  ...rest
}) => {
  return <div style={{
    width: 300
  }}>
      <DataTable {...rest}>
        <DataTableRow title='You will receive' loading={loading}>
          100&nbsp;LDO
        </DataTableRow>
        <DataTableRow title='Transaction gas cost' loading={loading}>
          $0.12
        </DataTableRow>
      </DataTable>
    </div>;
}`,...Base.parameters?.docs?.source}}},WithHint.parameters={...WithHint.parameters,docs:{...WithHint.parameters?.docs,source:{originalSource:`props => {
  return <div style={{
    width: 300
  }}>
      <DataTable {...props}>
        <DataTableRow title='Staking rewards fee' help='This fee is split between node operators, the DAO, and an insurance fund'>
          10%
        </DataTableRow>
        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>
      </DataTable>
    </div>;
}`,...WithHint.parameters?.docs?.source}}},WithHighlighted.parameters={...WithHighlighted.parameters,docs:{...WithHighlighted.parameters?.docs,source:{originalSource:`props => {
  return <div style={{
    width: 300
  }}>
      <DataTable {...props}>
        <DataTableRow title='Staking rewards fee' highlight>
          10%
        </DataTableRow>
        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>
      </DataTable>
    </div>;
}`,...WithHighlighted.parameters?.docs?.source}}};let __namedExportsOrder=["Base","WithHint","WithHighlighted"]}}]);
//# sourceMappingURL=data-table-DataTable-stories.d9936c7c.iframe.bundle.js.map