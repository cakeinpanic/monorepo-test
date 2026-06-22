"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[4317],{"./src/chart-line/ChartLine.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ChartInModal:()=>ChartInModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icons/index.tsx"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/chart-line/index.ts"),_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/modal/index.ts"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"u">typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var sourceKeys,key,i,target={};if("u">typeof Reflect&&Reflect.ownKeys){for(sourceKeys=Reflect.ownKeys(Object(source)),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}if(target=_object_without_properties_loose(source,excluded),Object.getOwnPropertySymbols)for(sourceKeys=Object.getOwnPropertySymbols(source),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.getOwnPropertyNames(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var getOptions=function getOptions(enumObject){return Object.values(enumObject).filter(function(value){return"string"==typeof value})};let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_2__.BS,title:"Charts/ChartLine",args:{demoMaxValue:1e3,useMaxValue:!0,demoCount:3,demoViewportWidth:600,loading:!1,height:20,border:"rounded",thresholdType:"flag",showLabels:!0},argTypes:{demoMaxValue:{control:{type:"range",min:100,max:1e3,step:100}},demoViewportWidth:{control:{type:"range",min:200,max:1e3,step:100}},height:{control:{type:"range",min:3,max:24,step:1}},border:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_2__.pV),control:"inline-radio"},thresholdType:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_2__.ui),control:"inline-radio"},demoCount:{control:{type:"range",min:0,max:5,step:1}},showLabels:{control:"boolean"}}};var randomColor=function randomColor(index){return hslToHex((index+1)*137.508%360|0,65+5*index%30,45+7*index%20)},hslToHex=function hslToHex(h,s,l){var a=s*Math.min(l/=100,1-l)/100,f=function f(n){var k=(n+h/30)%12;return Math.round(255*(l-a*Math.max(Math.min(k-3,9-k,1),-1))).toString(16).padStart(2,"0")};return"#".concat(f(0)).concat(f(8)).concat(f(4))},descriptionElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(function DescriptionComponent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:["Description Component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.Question,{style:{width:16,height:16}})]})},{}),useChartData=function useChartData(props){var demoCount=props.demoCount,values=Array.from({length:demoCount},function(_,index){return demoCount+index}),colors=Array.from({length:demoCount},function(_,index){return randomColor(index)}),data=values.map(function(value,index){return{color:colors[index],threshold:{value:10*value,label:"".concat(value,"%"),description:"Forced Rebalance Threshold"},labelPosition:index%2==0?"top":"bottom"}});return data.push({threshold:{value:90,color:"#FF0000",label:"90%",description:"Forced Rebalance Threshold",descriptionElement:descriptionElement},labelPosition:"top"}),data},Basic=function Basic(props){var demoCount=props.demoCount,demoMaxValue=props.demoMaxValue,useMaxValue=props.useMaxValue,demoViewportWidth=props.demoViewportWidth,rest=_object_without_properties(props,["demoCount","demoMaxValue","useMaxValue","demoViewportWidth"]),data=useChartData({demoCount:demoCount});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"".concat(demoViewportWidth,"px")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.BS,_object_spread_props(_object_spread({},rest),{data:data,maxValue:useMaxValue?demoMaxValue:void 0}))})},ChartInModal=function ChartInModal(props){var demoCount=props.demoCount,demoMaxValue=props.demoMaxValue,useMaxValue=props.useMaxValue,demoViewportWidth=props.demoViewportWidth,rest=_object_without_properties(props,["demoCount","demoMaxValue","useMaxValue","demoViewportWidth"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],data=useChartData({demoCount:demoCount}),staticData=[{color:randomColor(0),threshold:{value:90,color:randomColor(0),label:"90%",description:"Forced Rebalance Threshold",descriptionElement:descriptionElement},labelPosition:"top"},{color:randomColor(1),threshold:{value:50,color:randomColor(1),label:"50%",description:"Forced Rebalance Threshold",descriptionElement:descriptionElement},labelPosition:"top"}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{width:"".concat(demoViewportWidth,"px")},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function onClick(){return setIsOpen(!0)},children:"Open Modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.BS,{data:staticData,height:20,showLabels:!0,border:_index_js__WEBPACK_IMPORTED_MODULE_2__.pV.rounded,thresholdType:_index_js__WEBPACK_IMPORTED_MODULE_2__.ui.flag}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modal__WEBPACK_IMPORTED_MODULE_3__.aF,{open:isOpen,onClose:function onClose(){return setIsOpen(!1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.BS,_object_spread_props(_object_spread({},rest),{data:data,maxValue:useMaxValue?demoMaxValue:void 0}))})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`props => {
  const {
    demoCount,
    demoMaxValue,
    useMaxValue,
    demoViewportWidth,
    ...rest
  } = props;
  const data = useChartData({
    demoCount
  });
  return <div style={{
    width: \`\${demoViewportWidth}px\`
  }}>
      <ChartLine {...rest} data={data} maxValue={useMaxValue ? demoMaxValue : undefined} />
    </div>;
}`,...Basic.parameters?.docs?.source}}},ChartInModal.parameters={...ChartInModal.parameters,docs:{...ChartInModal.parameters?.docs,source:{originalSource:`props => {
  const {
    demoCount,
    demoMaxValue,
    useMaxValue,
    demoViewportWidth,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const data = useChartData({
    demoCount
  });
  const staticData: LineData[] = [{
    color: randomColor(0),
    threshold: {
      value: 90,
      color: randomColor(0),
      label: '90%',
      description: 'Forced Rebalance Threshold',
      descriptionElement
    },
    labelPosition: 'top'
  }, {
    color: randomColor(1),
    threshold: {
      value: 50,
      color: randomColor(1),
      label: '50%',
      description: 'Forced Rebalance Threshold',
      descriptionElement
    },
    labelPosition: 'top'
  }];
  return <div style={{
    width: \`\${demoViewportWidth}px\`
  }}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ChartLine data={staticData} height={20} showLabels={true} border={ChartLineBorderType.rounded} thresholdType={ChartLineThresholdType.flag} />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ChartLine {...rest} data={data} maxValue={useMaxValue ? demoMaxValue : undefined} />
      </Modal>
    </div>;
}`,...ChartInModal.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","ChartInModal"]}}]);
//# sourceMappingURL=chart-line-ChartLine-stories.df1c8951.iframe.bundle.js.map