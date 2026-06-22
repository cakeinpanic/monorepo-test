"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[3329],{"./src/chart-proportion/ChartProportion.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/chart-proportion/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var sourceKeys,key,i,target={};if("u">typeof Reflect&&Reflect.ownKeys){for(sourceKeys=Reflect.ownKeys(Object(source)),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}if(target=_object_without_properties_loose(source,excluded),Object.getOwnPropertySymbols)for(sourceKeys=Object.getOwnPropertySymbols(source),i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.getOwnPropertyNames(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key]);return target}var getOptions=function getOptions(enumObject){return Object.values(enumObject).filter(function(value){return"string"==typeof value})};let __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_1__.$N,title:"Charts/ChartProportion",args:{loading:!1,height:20,border:"rounded",borderSize:"md",margin:"md",demoCount:3,showLabels:!0},argTypes:{demoCount:{control:{type:"range",min:2,max:5,step:1}},height:{control:{type:"range",min:3,max:24,step:1}},border:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_1__.fm),control:"inline-radio"},borderSize:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_1__.Y8),control:"inline-radio"},margin:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_1__.ml),control:"inline-radio"},showLabels:{control:"boolean"}}};var hslToHex=function hslToHex(h,s,l){var a=s*Math.min(l/=100,1-l)/100,f=function f(n){var k=(n+h/30)%12;return Math.round(255*(l-a*Math.max(Math.min(k-3,9-k,1),-1))).toString(16).padStart(2,"0")};return"#".concat(f(0)).concat(f(8)).concat(f(4))},Basic=function Basic(props){var demoCount=props.demoCount,rest=(props.demoMaxValue,props.useMaxValue,_object_without_properties(props,["demoCount","demoMaxValue","useMaxValue"])),values=Array.from({length:demoCount},function(_,index){return demoCount+index}),colors=Array.from({length:demoCount+1},function(_,index){return hslToHex((index+1)*137.508%360|0,65+5*index%30,45+7*index%20)}),data=values.map(function(value,index){return{color:colors[index],value:value,progress:100,label:"".concat(value,"%")}});return data.push({color:colors[colors.length-1],value:data.reduce(function(acc,item){return acc+item.value},0),progress:50,label:"".concat(data.reduce(function(acc,item){return acc+item.value},0),"%")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"600px",padding:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.$N,_object_spread_props(_object_spread({},rest),{data:data}))})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`props => {
  const {
    demoCount,
    demoMaxValue,
    useMaxValue,
    ...rest
  } = props;
  const values = Array.from({
    length: demoCount
  }, (_, index) => demoCount + index);
  const colors = Array.from({
    length: demoCount + 1
  }, (_, index) => randomColor(index));
  const data: ChartProportionData[] = values.map((value, index) => ({
    color: colors[index],
    value: value,
    progress: 100,
    label: \`\${value}%\`
  }));
  data.push({
    color: colors[colors.length - 1],
    value: data.reduce((acc, item) => acc + item.value, 0),
    progress: 50,
    label: \`\${data.reduce((acc, item) => acc + item.value, 0)}%\`
  });
  return <div style={{
    width: '600px',
    padding: '10px'
  }}>
      <ChartProportion {...rest} data={data} />
    </div>;
}`,...Basic.parameters?.docs?.source}}};let __namedExportsOrder=["Basic"]}}]);
//# sourceMappingURL=chart-proportion-ChartProportion-stories.0e499b26.iframe.bundle.js.map