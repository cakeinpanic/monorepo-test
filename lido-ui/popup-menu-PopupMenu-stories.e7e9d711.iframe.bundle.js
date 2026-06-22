"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[9913],{"./src/popup-menu/PopupMenu.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icons:()=>Icons,WithDisabled:()=>WithDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_button_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.ts"),_icons_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icons/index.tsx"),_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/popup-menu/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"u">typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_4__.in,title:"Dialogs/PopupMenu",args:{variant:"default"},argTypes:{variant:{options:Object.values(_index_js__WEBPACK_IMPORTED_MODULE_4__.hR).filter(function(value){return"string"==typeof value}),control:"inline-radio"}}};var usePopup=function usePopup(param){var onClose=param.onClose,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),state=_useState[0],setState=_useState[1];return{state:state,anchorRef:(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),handleOpen:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){setState(!0)},[]),handleClose:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){setState(!1),null==onClose||onClose()},[onClose])}},Basic=function Basic(props){var _usePopup=usePopup(props),state=_usePopup.state,anchorRef=_usePopup.anchorRef,handleOpen=_usePopup.handleOpen,handleClose=_usePopup.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_2__.$n,{size:"sm",onClick:handleOpen,ref:anchorRef,children:"Open Menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_4__.in,_object_spread_props(_object_spread({},props),{open:state,style:{width:200},onClose:handleClose,anchorRef:anchorRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,children:"Ethereum (ETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,children:"Lido (STETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,children:"Solana (SOL)"})]}))]})},Icons=function Icons(props){var _usePopup=usePopup(props),state=_usePopup.state,anchorRef=_usePopup.anchorRef,handleOpen=_usePopup.handleOpen,handleClose=_usePopup.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_2__.$n,{size:"sm",onClick:handleOpen,ref:anchorRef,children:"Open Menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_4__.in,_object_spread_props(_object_spread({},props),{open:state,style:{width:200},onClose:handleClose,anchorRef:anchorRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_3__.Eth,{}),children:"Ethereum (ETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_3__.Steth,{}),children:"Lido (STETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_3__.Solana,{}),children:"Solana (SOL)"})]}))]})},WithDisabled=function WithDisabled(props){var _usePopup=usePopup(props),state=_usePopup.state,anchorRef=_usePopup.anchorRef,handleOpen=_usePopup.handleOpen,handleClose=_usePopup.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_2__.$n,{size:"sm",onClick:handleOpen,ref:anchorRef,children:"Open Menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_4__.in,_object_spread_props(_object_spread({},props),{open:state,style:{width:200},onClose:handleClose,anchorRef:anchorRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,children:"Ethereum (ETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{onClick:handleClose,children:"Lido (STETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.DT,{disabled:!0,children:"Solana (SOL)"})]}))]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    anchorRef,
    handleOpen,
    handleClose
  } = usePopup(props);
  return <>
      <Button size='sm' onClick={handleOpen} ref={anchorRef}>
        Open Menu
      </Button>
      <PopupMenu {...props} open={state} style={{
      width: 200
    }} onClose={handleClose} anchorRef={anchorRef}>
        <PopupMenuItem onClick={handleClose}>Ethereum (ETH)</PopupMenuItem>
        <PopupMenuItem onClick={handleClose}>Lido (STETH)</PopupMenuItem>
        <PopupMenuItem onClick={handleClose}>Solana (SOL)</PopupMenuItem>
      </PopupMenu>
    </>;
}`,...Basic.parameters?.docs?.source}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    anchorRef,
    handleOpen,
    handleClose
  } = usePopup(props);
  return <>
      <Button size='sm' onClick={handleOpen} ref={anchorRef}>
        Open Menu
      </Button>
      <PopupMenu {...props} open={state} style={{
      width: 200
    }} onClose={handleClose} anchorRef={anchorRef}>
        <PopupMenuItem onClick={handleClose} leftDecorator={<Eth />}>
          Ethereum (ETH)
        </PopupMenuItem>
        <PopupMenuItem onClick={handleClose} leftDecorator={<Steth />}>
          Lido (STETH)
        </PopupMenuItem>
        <PopupMenuItem onClick={handleClose} leftDecorator={<Solana />}>
          Solana (SOL)
        </PopupMenuItem>
      </PopupMenu>
    </>;
}`,...Icons.parameters?.docs?.source}}},WithDisabled.parameters={...WithDisabled.parameters,docs:{...WithDisabled.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    anchorRef,
    handleOpen,
    handleClose
  } = usePopup(props);
  return <>
      <Button size='sm' onClick={handleOpen} ref={anchorRef}>
        Open Menu
      </Button>
      <PopupMenu {...props} open={state} style={{
      width: 200
    }} onClose={handleClose} anchorRef={anchorRef}>
        <PopupMenuItem onClick={handleClose}>Ethereum (ETH)</PopupMenuItem>
        <PopupMenuItem onClick={handleClose}>Lido (STETH)</PopupMenuItem>
        <PopupMenuItem disabled>Solana (SOL)</PopupMenuItem>
      </PopupMenu>
    </>;
}`,...WithDisabled.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","Icons","WithDisabled"]}}]);
//# sourceMappingURL=popup-menu-PopupMenu-stories.e7e9d711.iframe.bundle.js.map