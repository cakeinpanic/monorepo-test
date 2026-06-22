"use strict";(self.webpackChunkcakeinpanic_ui=self.webpackChunkcakeinpanic_ui||[]).push([[8790],{"./src/cookies-tooltip/cookies-tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithCustomPrivacyTextAndLink:()=>WithCustomPrivacyTextAndLink,WithCustomPrivacyTextNoLink:()=>WithCustomPrivacyTextNoLink,WithPrivacyLinkDisabled:()=>WithPrivacyLinkDisabled,WithPrivacyLinkEnabled:()=>WithPrivacyLinkEnabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_text_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/text/index.ts"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/cookies-tooltip/index.ts");let __WEBPACK_DEFAULT_EXPORT__={title:"CookiesTooltip/Basic"};var Basic=function Basic(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text_index_js__WEBPACK_IMPORTED_MODULE_1__.EY,{children:"CookiesTooltip component has an ability to detect a user choice in other tabs and third level domain."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_text_index_js__WEBPACK_IMPORTED_MODULE_1__.EY,{children:["You can check above if you:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"1. duplicate this tab;",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"2. allow or decline cookie;",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"3. and check in another tab;",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"4. and click to work area (to handler window.onfocus event)."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.D,{})]})},WithPrivacyLinkEnabled=function WithPrivacyLinkEnabled(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text_index_js__WEBPACK_IMPORTED_MODULE_1__.EY,{children:"This story shows the CookiesTooltip with the privacy link enabled (default behavior). The privacy link appears in the text and links to the privacy notice."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.D,{privacyLinkEnabled:!0})]})},WithPrivacyLinkDisabled=function WithPrivacyLinkDisabled(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text_index_js__WEBPACK_IMPORTED_MODULE_1__.EY,{children:"This story shows the CookiesTooltip with the privacy link disabled. Notice that no privacy link appears in the text."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.D,{privacyLinkEnabled:!1})]})},WithCustomPrivacyTextAndLink=function WithCustomPrivacyTextAndLink(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text_index_js__WEBPACK_IMPORTED_MODULE_1__.EY,{children:"This story shows the CookiesTooltip with custom privacy text and a custom privacy link. The privacy link is enabled and points to a custom URL."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.D,{privacyLinkEnabled:!0,privacyLink:"https://example.com/custom-privacy",privacyText:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:"We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies."})})]})},WithCustomPrivacyTextNoLink=function WithCustomPrivacyTextNoLink(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text_index_js__WEBPACK_IMPORTED_MODULE_1__.EY,{children:"This story shows the CookiesTooltip with custom privacy text but no privacy link. Even though custom text is provided, the privacy link is disabled."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.D,{privacyLinkEnabled:!1,privacyText:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:"We use cookies to improve our services. You can accept or decline cookies using the buttons below."})})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`() => <>
    <Text>
      CookiesTooltip component has an ability to detect a user choice in other
      tabs and third level domain.
    </Text>
    <Text>
      You can check above if you:
      <br />
      1. duplicate this tab;
      <br />
      2. allow or decline cookie;
      <br />
      3. and check in another tab;
      <br />
      4. and click to work area (to handler window.onfocus event).
    </Text>
    <CookiesTooltip />
  </>`,...Basic.parameters?.docs?.source}}},WithPrivacyLinkEnabled.parameters={...WithPrivacyLinkEnabled.parameters,docs:{...WithPrivacyLinkEnabled.parameters?.docs,source:{originalSource:`() => <>
    <Text>
      This story shows the CookiesTooltip with the privacy link enabled (default
      behavior). The privacy link appears in the text and links to the privacy
      notice.
    </Text>
    <CookiesTooltip privacyLinkEnabled={true} />
  </>`,...WithPrivacyLinkEnabled.parameters?.docs?.source}}},WithPrivacyLinkDisabled.parameters={...WithPrivacyLinkDisabled.parameters,docs:{...WithPrivacyLinkDisabled.parameters?.docs,source:{originalSource:`() => <>
    <Text>
      This story shows the CookiesTooltip with the privacy link disabled. Notice
      that no privacy link appears in the text.
    </Text>
    <CookiesTooltip privacyLinkEnabled={false} />
  </>`,...WithPrivacyLinkDisabled.parameters?.docs?.source}}},WithCustomPrivacyTextAndLink.parameters={...WithCustomPrivacyTextAndLink.parameters,docs:{...WithCustomPrivacyTextAndLink.parameters?.docs,source:{originalSource:`() => <>
    <Text>
      This story shows the CookiesTooltip with custom privacy text and a custom
      privacy link. The privacy link is enabled and points to a custom URL.
    </Text>
    <CookiesTooltip privacyLinkEnabled={true} privacyLink='https://example.com/custom-privacy' privacyText={<>
          We use cookies to enhance your experience on our website. By
          continuing to browse, you agree to our use of cookies.
        </>} />
  </>`,...WithCustomPrivacyTextAndLink.parameters?.docs?.source}}},WithCustomPrivacyTextNoLink.parameters={...WithCustomPrivacyTextNoLink.parameters,docs:{...WithCustomPrivacyTextNoLink.parameters?.docs,source:{originalSource:`() => <>
    <Text>
      This story shows the CookiesTooltip with custom privacy text but no
      privacy link. Even though custom text is provided, the privacy link is
      disabled.
    </Text>
    <CookiesTooltip privacyLinkEnabled={false} privacyText={<>
          We use cookies to improve our services. You can accept or decline
          cookies using the buttons below.
        </>} />
  </>`,...WithCustomPrivacyTextNoLink.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","WithPrivacyLinkEnabled","WithPrivacyLinkDisabled","WithCustomPrivacyTextAndLink","WithCustomPrivacyTextNoLink"]}}]);
//# sourceMappingURL=cookies-tooltip-cookies-tooltip-stories.d0d4c323.iframe.bundle.js.map