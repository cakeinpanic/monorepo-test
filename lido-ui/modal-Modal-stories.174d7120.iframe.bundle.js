"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[838],{"./src/modal/Modal.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,BasicModalButtonInModal:()=>BasicModalButtonInModal,ChooseNetworkInModal:()=>ChooseNetworkInModal,ErrorStateInModal:()=>ErrorStateInModal,ExtraContent:()=>ExtraContent,LoadingStateInModal:()=>LoadingStateInModal,ManulIconSizeInModalButtonInModal:()=>ManulIconSizeInModalButtonInModal,SuccessStateInModal:()=>SuccessStateInModal,WithBackButton:()=>WithBackButton,WithScroll:()=>WithScroll,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/styled-components-wrapper.ts"),_button_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button/index.ts"),_loaders_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/loaders/index.ts"),_text_index_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/text/index.ts"),_link_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/link/index.ts"),_icons_index_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/icons/index.tsx"),_index_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/modal/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"u">typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
    margin-bottom: `,`;
  `]);return _templateObject=function _templateObject(){return data},data}var getOptions=function getOptions(enumObject){return Object.values(enumObject).filter(function(value){return"string"==typeof value})};let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,title:"Dialogs/Modal",args:{title:"Modal Title",subtitle:"",children:"Modal content",center:!1,windowSize:"sm"},argTypes:{onClose:{action:"close",table:{disable:!0}},windowSize:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.RH),control:"inline-radio"}}};var useModal=function useModal(param){var onClose=param.onClose,onBack=param.onBack,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),state=_useState[0],setState=_useState[1];return{state:state,handleOpen:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){return setState(!0)},[]),handleClose:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){setState(!1),null==onClose||onClose()},[onClose]),handleBack:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){null==onBack||onBack()},[onBack])}},Basic=function Basic(props){var _useModal=useModal(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},props),{open:state,onClose:handleClose}))]})},ExtraContent=function ExtraContent(props){var _useModal=useModal(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},props),{open:state,onClose:handleClose,extra:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.KC,{children:"Extra content"})}))]})},WithBackButton=function WithBackButton(props){var _useModal=useModal(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose,handleBack=_useModal.handleBack;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},props),{open:state,onClose:handleClose,onBack:handleBack}))]})},WithScroll=function WithScroll(props){var _useModal=useModal(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},props),{open:state,onClose:handleClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"150vh"},children:props.children})}))]})},LoadingStateInModal=function LoadingStateInModal(props){var _useModal=useModal(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show loading modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},props),{titleIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_loaders_index_js__WEBPACK_IMPORTED_MODULE_4__.aH,{size:"large"}),open:state,onClose:handleClose,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text_index_js__WEBPACK_IMPORTED_MODULE_5__.EY,{color:"secondary",size:"xxs",children:"Confirm this transaction in your wallet"})]}))]})};LoadingStateInModal.args={title:"You are now staking 10 ETH",subtitle:"Staking 10 ETH. You will receive 10 stETH",center:!0},LoadingStateInModal.argTypes={children:{table:{disable:!0}}};var SuccessStateInModal=function SuccessStateInModal(props){var _useModal=useModal(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show success modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},props),{titleIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_7__.Success,{color:"green",width:64,height:64}),open:state,onClose:handleClose,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_link_index_js__WEBPACK_IMPORTED_MODULE_6__.N,{href:"https://etherscan.io/",children:"View on Etherscan"})]}))]})};SuccessStateInModal.args={title:"Your new balance is 10 stETH",subtitle:"Staking operation was successful",center:!0},SuccessStateInModal.argTypes={children:{table:{disable:!0}}};var ErrorStateInModal=function ErrorStateInModal(props){var _useModal=useModal(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show error modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},props),{titleIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_7__.Error,{color:"red",width:64,height:64}),open:state,onClose:handleClose,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_link_index_js__WEBPACK_IMPORTED_MODULE_6__.N,{href:"#",children:"Retry"})]}))]})};ErrorStateInModal.args={title:"Something went wrong",subtitle:"Staking operation was not successful",center:!0},ErrorStateInModal.argTypes={children:{table:{disable:!0}}};var BasicModalButtonInModal=function BasicModalButtonInModal(props){var modalProps={title:"Basic modal button in modal",center:!1},_useModal=useModal(modalProps),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},modalProps),{open:state,onClose:handleClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.yl,_object_spread({icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_7__.Eth,{})},props))}))]})};BasicModalButtonInModal.args={size:"md",active:!1,disabled:!1,fullwidth:!0,loading:!1,children:"Ethereum"},BasicModalButtonInModal.argTypes={title:{table:{disable:!0}},size:{options:getOptions(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.Mp),control:"inline-radio"}};var ManulIconSizeInModalButtonInModal=function ManulIconSizeInModalButtonInModal(props){var modalProps={title:"Basic modal button in modal",center:!1},_useModal=useModal(modalProps),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},modalProps),{open:state,onClose:handleClose,children:["You can set manual width and/or height of ModalButton (size props of ModalButton does not affect to the icon): use width and height props. For example set width and height to 128px.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.yl,_object_spread({icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_7__.Eth,{width:128,height:128})},props))]}))]})};ManulIconSizeInModalButtonInModal.args={size:"md",active:!1,disabled:!1,fullwidth:!0,loading:!1,children:"Ethereum"},ManulIconSizeInModalButtonInModal.argTypes={title:{table:{disable:!0}},active:{table:{disable:!0}}};var ChooseNetworkInModal=function ChooseNetworkInModal(){var modalProps={title:"ChooseNetwork",center:!1},_useModal=useModal(modalProps),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose,ETHEREUM="Ethereum",TERRA="Terra",_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ETHEREUM),2),curButtonIndex=_useState[0],setCurButtonIndex=_useState[1],StyledMarginBottom=_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),function(param){var theme=param.theme;return"".concat(theme.spaceMap.sm,"px")});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_3__.$n,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_8__.aF,_object_spread_props(_object_spread({},modalProps),{open:state,onClose:handleClose,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMarginBottom,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.yl,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_7__.Eth,{}),size:"sm",active:curButtonIndex===ETHEREUM,fullwidth:!0,onClick:function onClick(){return setCurButtonIndex(ETHEREUM)},children:"Ethereum"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMarginBottom,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.yl,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_7__.Terra,{}),size:"sm",active:curButtonIndex===TERRA,fullwidth:!0,onClick:function onClick(){return setCurButtonIndex(TERRA)},children:"Terra"})})]}))]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(props);
  return <>
      <Button onClick={handleOpen}>Show modal</Button>
      <Modal {...props} open={state} onClose={handleClose} />
    </>;
}`,...Basic.parameters?.docs?.source}}},ExtraContent.parameters={...ExtraContent.parameters,docs:{...ExtraContent.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(props);
  return <>
      <Button onClick={handleOpen}>Show modal</Button>
      <Modal {...props} open={state} onClose={handleClose} extra={<ModalExtra>Extra content</ModalExtra>} />
    </>;
}`,...ExtraContent.parameters?.docs?.source}}},WithBackButton.parameters={...WithBackButton.parameters,docs:{...WithBackButton.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    handleOpen,
    handleClose,
    handleBack
  } = useModal(props);
  return <>
      <Button onClick={handleOpen}>Show modal</Button>
      <Modal {...props} open={state} onClose={handleClose} onBack={handleBack} />
    </>;
}`,...WithBackButton.parameters?.docs?.source}}},WithScroll.parameters={...WithScroll.parameters,docs:{...WithScroll.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(props);
  return <>
      <Button onClick={handleOpen}>Show modal</Button>
      <Modal {...props} open={state} onClose={handleClose}>
        <div style={{
        height: '150vh'
      }}>{props.children}</div>
      </Modal>
    </>;
}`,...WithScroll.parameters?.docs?.source}}},LoadingStateInModal.parameters={...LoadingStateInModal.parameters,docs:{...LoadingStateInModal.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(props);
  return <>
      <Button onClick={handleOpen}>Show loading modal</Button>

      <Modal {...props} titleIcon={<Loader size={'large'} />} open={state} onClose={handleClose}>
        <br />
        <Text color='secondary' size='xxs'>
          Confirm this transaction in your wallet
        </Text>
      </Modal>
    </>;
}`,...LoadingStateInModal.parameters?.docs?.source}}},SuccessStateInModal.parameters={...SuccessStateInModal.parameters,docs:{...SuccessStateInModal.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(props);
  return <>
      <Button onClick={handleOpen}>Show success modal</Button>

      <Modal {...props} titleIcon={<Success color={'green'} width={64} height={64} />} open={state} onClose={handleClose}>
        <br />
        <Link href={'https://etherscan.io/'}>View on Etherscan</Link>
      </Modal>
    </>;
}`,...SuccessStateInModal.parameters?.docs?.source}}},ErrorStateInModal.parameters={...ErrorStateInModal.parameters,docs:{...ErrorStateInModal.parameters?.docs,source:{originalSource:`props => {
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(props);
  return <>
      <Button onClick={handleOpen}>Show error modal</Button>

      <Modal {...props} titleIcon={<Error color={'red'} width={64} height={64} />} open={state} onClose={handleClose}>
        <br />
        <Link href={'#'}>Retry</Link>
      </Modal>
    </>;
}`,...ErrorStateInModal.parameters?.docs?.source}}},BasicModalButtonInModal.parameters={...BasicModalButtonInModal.parameters,docs:{...BasicModalButtonInModal.parameters?.docs,source:{originalSource:`props => {
  const modalProps = {
    title: 'Basic modal button in modal',
    center: false
  };
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(modalProps);
  return <>
      <Button onClick={handleOpen}>Show modal</Button>

      <Modal {...modalProps} open={state} onClose={handleClose}>
        <ModalButton icon={<Eth />} {...props} />
      </Modal>
    </>;
}`,...BasicModalButtonInModal.parameters?.docs?.source}}},ManulIconSizeInModalButtonInModal.parameters={...ManulIconSizeInModalButtonInModal.parameters,docs:{...ManulIconSizeInModalButtonInModal.parameters?.docs,source:{originalSource:`props => {
  const modalProps = {
    title: 'Basic modal button in modal',
    center: false
  };
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(modalProps);
  return <>
      <Button onClick={handleOpen}>Show modal</Button>

      <Modal {...modalProps} open={state} onClose={handleClose}>
        You can set manual width and/or height of ModalButton (size props of
        ModalButton does not affect to the icon): use width and height props.
        For example set width and height to 128px.
        <br />
        <br />
        <ModalButton icon={<Eth width={128} height={128} />} {...props} />
      </Modal>
    </>;
}`,...ManulIconSizeInModalButtonInModal.parameters?.docs?.source}}},ChooseNetworkInModal.parameters={...ChooseNetworkInModal.parameters,docs:{...ChooseNetworkInModal.parameters?.docs,source:{originalSource:`() => {
  const modalProps = {
    title: 'ChooseNetwork',
    center: false
  };
  const {
    state,
    handleOpen,
    handleClose
  } = useModal(modalProps);
  const ETHEREUM = 'Ethereum';
  const TERRA = 'Terra';
  const [curButtonIndex, setCurButtonIndex] = useState(ETHEREUM);
  const StyledMarginBottom = styled.div\`
    margin-bottom: \${({
    theme
  }) => \`\${theme.spaceMap.sm}px\`};
  \`;
  return <>
      <Button onClick={handleOpen}>Show modal</Button>

      <Modal {...modalProps} open={state} onClose={handleClose}>
        <StyledMarginBottom>
          <ModalButton icon={<Eth />} size='sm' active={curButtonIndex === ETHEREUM} fullwidth={true} onClick={() => setCurButtonIndex(ETHEREUM)}>
            Ethereum
          </ModalButton>
        </StyledMarginBottom>

        <StyledMarginBottom>
          <ModalButton icon={<Terra />} size='sm' active={curButtonIndex === TERRA} fullwidth={true} onClick={() => setCurButtonIndex(TERRA)}>
            Terra
          </ModalButton>
        </StyledMarginBottom>
      </Modal>
    </>;
}`,...ChooseNetworkInModal.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","ExtraContent","WithBackButton","WithScroll","LoadingStateInModal","SuccessStateInModal","ErrorStateInModal","BasicModalButtonInModal","ManulIconSizeInModalButtonInModal","ChooseNetworkInModal"]}}]);
//# sourceMappingURL=modal-Modal-stories.174d7120.iframe.bundle.js.map