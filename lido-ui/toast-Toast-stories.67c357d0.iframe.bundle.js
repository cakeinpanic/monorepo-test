"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[1186],{"./src/toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Error:()=>Error,Info:()=>Info,Pending:()=>Pending,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_button_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/button/index.ts"),_accordion_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/accordion/index.ts"),_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/toast/index.ts");function _object_without_properties(source,excluded){if(null==source)return{};var sourceKeys,key,i,target={};if("u">typeof Reflect&&Reflect.ownKeys){for(sourceKeys=Reflect.ownKeys(Object(source)),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}if(target=_object_without_properties_loose(source,excluded),Object.getOwnPropertySymbols)for(sourceKeys=Object.getOwnPropertySymbols(source),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.getOwnPropertyNames(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_3__.N9,title:"Notify/Toast",args:{text:"🚀🚀🚀 Wow so easy!",position:_index_js__WEBPACK_IMPORTED_MODULE_3__.xJ.BOTTOM_LEFT},argTypes:{position:{options:Object.values(_index_js__WEBPACK_IMPORTED_MODULE_3__.xJ).filter(function(value){return"string"==typeof value}),control:"inline-radio"}}};var Basic=function Basic(_0){var text=_0.text,options=_object_without_properties(_0,["text"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_accordion_index_js__WEBPACK_IMPORTED_MODULE_2__.n,{summary:"IMPORTANT",children:"Remember to render the ToastContainer once in your application tree. If you can not figure out where to put it, rendering it in the application root would be the best bet."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:function notifyDefault(){return(0,_index_js__WEBPACK_IMPORTED_MODULE_3__.BY)(text,options)},size:"xs",children:"Show default notify!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.N9,{})]})},Error=function Error(_0){var text=_0.text,options=_object_without_properties(_0,["text"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:function notifyError(){return(0,_index_js__WEBPACK_IMPORTED_MODULE_3__.aR)(text,options)},size:"xs",children:"Show error notify!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.N9,{})]})},Success=function Success(_0){var text=_0.text,options=_object_without_properties(_0,["text"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:function notifySuccess(){return(0,_index_js__WEBPACK_IMPORTED_MODULE_3__.f_)(text,options)},size:"xs",children:"Show success notify!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.N9,{})]})},Info=function Info(_0){var text=_0.text,options=_object_without_properties(_0,["text"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:function notifyInfo(){return(0,_index_js__WEBPACK_IMPORTED_MODULE_3__.sZ)(text,options)},size:"xs",children:"Show info notify!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.N9,{})]})},Pending=function Pending(_0){var text=_0.text,options=_object_without_properties(_0,["text"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:function notifyPending(){return(0,_index_js__WEBPACK_IMPORTED_MODULE_3__.jm)(text,options)},size:"xs",children:"Show pending notify!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:function dismissAll(){return _index_js__WEBPACK_IMPORTED_MODULE_3__.oR.dismiss()},size:"xs",variant:"translucent",children:"Dismiss all"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.N9,{})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`({
  text,
  ...options
}) => {
  const notifyDefault = () => ToastDefault(text, options);
  return <>
      <Accordion summary='IMPORTANT'>
        Remember to render the ToastContainer once in your application tree. If
        you can not figure out where to put it, rendering it in the application
        root would be the best bet.
      </Accordion>

      <Button onClick={notifyDefault} size='xs'>
        Show default notify!
      </Button>
      <ToastContainer />
    </>;
}`,...Basic.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:`({
  text,
  ...options
}) => {
  const notifyError = () => ToastError(text, options);
  return <>
      <Button onClick={notifyError} size='xs'>
        Show error notify!
      </Button>
      <ToastContainer />
    </>;
}`,...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:`({
  text,
  ...options
}) => {
  const notifySuccess = () => ToastSuccess(text, options);
  return <>
      <Button onClick={notifySuccess} size='xs'>
        Show success notify!
      </Button>
      <ToastContainer />
    </>;
}`,...Success.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:`({
  text,
  ...options
}) => {
  const notifyInfo = () => ToastInfo(text, options);
  return <>
      <Button onClick={notifyInfo} size='xs'>
        Show info notify!
      </Button>
      <ToastContainer />
    </>;
}`,...Info.parameters?.docs?.source}}},Pending.parameters={...Pending.parameters,docs:{...Pending.parameters?.docs,source:{originalSource:`({
  text,
  ...options
}) => {
  const notifyPending = () => ToastPending(text, options);
  const dismissAll = () => toast.dismiss();
  return <>
      <Button onClick={notifyPending} size='xs'>
        Show pending notify!
      </Button>
      <br />
      <br />
      <Button onClick={dismissAll} size='xs' variant='translucent'>
        Dismiss all
      </Button>
      <ToastContainer />
    </>;
}`,...Pending.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","Error","Success","Info","Pending"]}}]);
//# sourceMappingURL=toast-Toast-stories.67c357d0.iframe.bundle.js.map