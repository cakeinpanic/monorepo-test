"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[5702],{"./src/switcher/Switcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Multiple:()=>Multiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/box/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/text/index.ts"),_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/switcher/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"u">typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_4__.i,title:"Controls/Switcher"};var Basic=function Basic(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("earn"),2),active=_useState[0],setActive=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_2__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_4__.i,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.Z,{active:"earn"===active,onClick:function onClick(){return setActive("earn")},children:"Earn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.Z,{active:"stake"===active,onClick:function onClick(){return setActive("stake")},children:"Stake"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_2__.a,{mt:"16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_text__WEBPACK_IMPORTED_MODULE_3__.EY,{size:"xs",color:"secondary",children:["Selected: ",active]})})]})},Multiple=function Multiple(){var _options_find,options=[{id:"apy",label:"APY",tone:"primary",bar:"var(--lido-color-primary)"},{id:"tvl",label:"TVL",tone:"success",bar:"var(--lido-color-success)"},{id:"risk",label:"Risk",tone:"warning",bar:"var(--lido-color-warning)"},{id:"fees",label:"Fees",tone:"error",bar:"var(--lido-color-error)"}],_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options[0].id),2),active=_useState[0],setActive=_useState[1],activeOption=null!=(_options_find=options.find(function(option){return option.id===active}))?_options_find:options[0];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_2__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.i,{children:options.map(function(option){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__.Z,{active:active===option.id,onClick:function onClick(){return setActive(option.id)},children:option.label},option.id)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_2__.a,{mt:"16px",display:"grid",style:{rowGap:"8px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_text__WEBPACK_IMPORTED_MODULE_3__.EY,{size:"xs",strong:!0,color:activeOption.tone,children:["Selected: ",activeOption.label]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_2__.a,{height:"8px",borderRadius:"110px",bg:activeOption.bar})]})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`() => {
  const [active, setActive] = useState('earn');
  return <Box>
      <Switcher>
        <SwitcherItem active={active === 'earn'} onClick={() => setActive('earn')}>
          Earn
        </SwitcherItem>
        <SwitcherItem active={active === 'stake'} onClick={() => setActive('stake')}>
          Stake
        </SwitcherItem>
      </Switcher>

      <Box mt='16px'>
        <Text size='xs' color='secondary'>
          Selected: {active}
        </Text>
      </Box>
    </Box>;
}`,...Basic.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:`() => {
  const options = [{
    id: 'apy',
    label: 'APY',
    tone: 'primary',
    bar: 'var(--lido-color-primary)'
  }, {
    id: 'tvl',
    label: 'TVL',
    tone: 'success',
    bar: 'var(--lido-color-success)'
  }, {
    id: 'risk',
    label: 'Risk',
    tone: 'warning',
    bar: 'var(--lido-color-warning)'
  }, {
    id: 'fees',
    label: 'Fees',
    tone: 'error',
    bar: 'var(--lido-color-error)'
  }] as const;
  const [active, setActive] = useState<(typeof options)[number]['id']>(options[0].id);
  const activeOption = options.find(option => option.id === active) ?? options[0];
  return <Box>
      <Switcher>
        {options.map(option => <SwitcherItem key={option.id} active={active === option.id} onClick={() => setActive(option.id)}>
            {option.label}
          </SwitcherItem>)}
      </Switcher>

      <Box mt='16px' display='grid' style={{
      rowGap: '8px'
    }}>
        <Text size='xs' strong color={activeOption.tone}>
          Selected: {activeOption.label}
        </Text>
        <Box height='8px' borderRadius='110px' bg={activeOption.bar} />
      </Box>
    </Box>;
}`,...Multiple.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","Multiple"]}}]);
//# sourceMappingURL=switcher-Switcher-stories.914d536e.iframe.bundle.js.map