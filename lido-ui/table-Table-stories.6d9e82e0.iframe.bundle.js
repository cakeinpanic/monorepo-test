"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[1510],{"./src/table/Table.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_icons_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/icons/index.tsx"),_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/table/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"u">typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var getOptions=function getOptions(enumObject){return Object.values(enumObject).filter(function(value){return"string"==typeof value})};let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_3__.XI,title:"Table/Table",parameters:{layout:"centered"},args:{textColor:"default",align:"left",stickyHeader:!0,showHighlight:!1},argTypes:{textColor:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_3__.PE),control:"inline-radio"},align:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_3__.Gk),control:"inline-radio"}}};var Base=function Base(props,options){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("ASC"),2),sortDir=_useState[0],setSortDir=_useState[1],isShowTrHighlights=options.args.showHighlight;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:300,overflowY:"scroll"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_3__.XI,{style:{width:600},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.d8,{sticky:options.args.stickyHeader,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Th,{onClick:function onClick(){return setSortDir("ASC"===sortDir?"DESC":"ASC")},sortDir:sortDir,children:"Date | Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Th,_object_spread_props(_object_spread({},props),{children:"Change"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Th,_object_spread_props(_object_spread({},props),{children:"Balance"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Th,_object_spread_props(_object_spread({},props),{children:"APR"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Th,_object_spread_props(_object_spread({},props),{variant:"icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_2__.Eth,{})}))]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.NN,{children:[,,,,,].fill(null).map(function(item,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Tr,{highlight:isShowTrHighlights?_index_js__WEBPACK_IMPORTED_MODULE_3__.du[index%3]:void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Td,_object_spread_props(_object_spread({},props),{onClick:function onClick(){},children:["01-13-2021",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"Stake"]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Td,_object_spread_props(_object_spread({},props),{children:["+ 0.000007452",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"+ $0.02"]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Td,_object_spread_props(_object_spread({},props),{children:["10.00038581",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"$18,912.80"]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Td,_object_spread_props(_object_spread({},props),{children:"2.4%"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_3__.Td,_object_spread_props(_object_spread({},props),{variant:"icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_2__.Light,{})}))]},index)})})]})})};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:`(props, options) => {
  const [sortDir, setSortDir] = useState<ThSortDirs>('ASC');
  const isShowTrHighlights = options.args.showHighlight;
  return <div style={{
    height: 300,
    overflowY: 'scroll'
  }}>
      <Table style={{
      width: 600
    }}>
        <Thead sticky={options.args.stickyHeader}>
          <Tr>
            <Th onClick={() => setSortDir(sortDir === 'ASC' ? 'DESC' : 'ASC')} sortDir={sortDir}>
              Date | Type
            </Th>
            <Th {...props}>Change</Th>
            <Th {...props}>Balance</Th>
            <Th {...props}>APR</Th>
            <Th {...props} variant='icon'>
              <Eth />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array(5).fill(null).map((item, index) => <Tr key={index}
        // @ts-expect-error this is a story anyway
        highlight={isShowTrHighlights ? TrHighlight[index % 3] : undefined}>
                <Td {...props} onClick={() => void 0}>
                  01-13-2021
                  <br />
                  Stake
                </Td>
                <Td {...props}>
                  + 0.000007452
                  <br />+ $0.02
                </Td>
                <Td {...props}>
                  10.00038581
                  <br />
                  $18,912.80
                </Td>
                <Td {...props}>2.4%</Td>
                <Td {...props} variant='icon'>
                  <Light />
                </Td>
              </Tr>)}
        </Tbody>
      </Table>
    </div>;
}`,...Base.parameters?.docs?.source}}};let __namedExportsOrder=["Base"]}}]);
//# sourceMappingURL=table-Table-stories.6d9e82e0.iframe.bundle.js.map