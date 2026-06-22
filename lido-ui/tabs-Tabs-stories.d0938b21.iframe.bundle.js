"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[8844],{"./src/tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Scroll:()=>Scroll,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_accordion_transparent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/accordion-transparent/index.ts"),_block__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/block/index.ts"),_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/box/index.ts"),_chart_line__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/chart-line/index.ts"),_text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/text/index.ts"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/styled-components-wrapper.ts"),_index_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/tabs/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"u">typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`]);return _templateObject=function _templateObject(){return data},data}let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_8__.t,title:"Controls/Tabs"};var chartData=[{color:"#00a3ff",threshold:{value:40,label:"40%",description:"Metric A"},labelPosition:"bottom"},{color:"#53BA95",threshold:{value:70,label:"70%",description:"Metric B"},labelPosition:"top"}],scrollTabs=["Overview","Performance","Strategy","Portfolio","Analytics","Risk","Validators","Rewards","Withdrawals","Governance","Security","Roadmap","FAQ","Support","Settings"],ScrollTabs=(0,_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_7__.Ay)(_index_js__WEBPACK_IMPORTED_MODULE_8__.t)(_templateObject()),Basic=function Basic(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("performance"),2),active=_useState[0],setActive=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_8__.t,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.o,{active:"performance"===active,onClick:function onClick(){return setActive("performance")},children:"Block"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.o,{active:"strategy"===active,onClick:function onClick(){return setActive("strategy")},children:"Accordion"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.o,{active:"faq"===active,onClick:function onClick(){return setActive("faq")},children:"Chart"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{mt:"16px",children:["performance"===active&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_block__WEBPACK_IMPORTED_MODULE_3__.eB,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{mb:"12px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text__WEBPACK_IMPORTED_MODULE_6__.EY,{size:"sm",strong:!0,children:"Neutral Block"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{mb:"12px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text__WEBPACK_IMPORTED_MODULE_6__.EY,{size:"xs",color:"secondary",children:"Simple text content to demonstrate a basic block layout."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{children:["Line item one","Line item two","Line item three"].map(function(item){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{mb:"6px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text__WEBPACK_IMPORTED_MODULE_6__.EY,{size:"xs",color:"secondary",children:item})},item)})})]}),"strategy"===active&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_accordion_transparent__WEBPACK_IMPORTED_MODULE_2__.B,{summary:"Section one",children:"Expandable content example with neutral text."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_accordion_transparent__WEBPACK_IMPORTED_MODULE_2__.B,{summary:"Section two",children:"Another accordion item for layout variety."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_accordion_transparent__WEBPACK_IMPORTED_MODULE_2__.B,{summary:"Section three",children:"Final section to show multiple accordion panels."})]}),"faq"===active&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chart_line__WEBPACK_IMPORTED_MODULE_5__.BS,{data:chartData,height:20,showLabels:!0,border:_chart_line__WEBPACK_IMPORTED_MODULE_5__.pV.rounded,thresholdType:_chart_line__WEBPACK_IMPORTED_MODULE_5__.ui.flag,maxValue:100})})]})]})},Scroll=function Scroll(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(scrollTabs[0]),2),active=_useState[0],setActive=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ScrollTabs,{children:scrollTabs.map(function(label){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.o,{active:active===label,onClick:function onClick(){return setActive(label)},children:label},label)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{mt:"16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_block__WEBPACK_IMPORTED_MODULE_3__.eB,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box__WEBPACK_IMPORTED_MODULE_4__.a,{mb:"12px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text__WEBPACK_IMPORTED_MODULE_6__.EY,{size:"sm",strong:!0,children:active})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text__WEBPACK_IMPORTED_MODULE_6__.EY,{size:"xs",color:"secondary",children:"Horizontal scroll example with many tabs."})]})})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`() => {
  const [active, setActive] = useState('performance');
  return <Box>
      <Tabs>
        <Tab active={active === 'performance'} onClick={() => setActive('performance')}>
          Block
        </Tab>
        <Tab active={active === 'strategy'} onClick={() => setActive('strategy')}>
          Accordion
        </Tab>
        <Tab active={active === 'faq'} onClick={() => setActive('faq')}>
          Chart
        </Tab>
      </Tabs>

      <Box mt='16px'>
        {active === 'performance' && <Block>
            <Box mb='12px'>
              <Text size='sm' strong>
                Neutral Block
              </Text>
            </Box>
            <Box mb='12px'>
              <Text size='xs' color='secondary'>
                Simple text content to demonstrate a basic block layout.
              </Text>
            </Box>
            <Box>
              {['Line item one', 'Line item two', 'Line item three'].map(item => <Box key={item} mb='6px'>
                    <Text size='xs' color='secondary'>
                      {item}
                    </Text>
                  </Box>)}
            </Box>
          </Block>}

        {active === 'strategy' && <Box>
            <AccordionTransparent summary='Section one'>
              Expandable content example with neutral text.
            </AccordionTransparent>
            <AccordionTransparent summary='Section two'>
              Another accordion item for layout variety.
            </AccordionTransparent>
            <AccordionTransparent summary='Section three'>
              Final section to show multiple accordion panels.
            </AccordionTransparent>
          </Box>}

        {active === 'faq' && <Box>
            <ChartLine data={chartData} height={20} showLabels border={ChartLineBorderType.rounded} thresholdType={ChartLineThresholdType.flag} maxValue={100} />
          </Box>}
      </Box>
    </Box>;
}`,...Basic.parameters?.docs?.source}}},Scroll.parameters={...Scroll.parameters,docs:{...Scroll.parameters?.docs,source:{originalSource:`() => {
  const [active, setActive] = useState(scrollTabs[0]);
  return <Box>
      <ScrollTabs>
        {scrollTabs.map(label => <Tab key={label} active={active === label} onClick={() => setActive(label)}>
            {label}
          </Tab>)}
      </ScrollTabs>

      <Box mt='16px'>
        <Block>
          <Box mb='12px'>
            <Text size='sm' strong>
              {active}
            </Text>
          </Box>
          <Text size='xs' color='secondary'>
            Horizontal scroll example with many tabs.
          </Text>
        </Block>
      </Box>
    </Box>;
}`,...Scroll.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","Scroll"]}}]);
//# sourceMappingURL=tabs-Tabs-stories.d0938b21.iframe.bundle.js.map