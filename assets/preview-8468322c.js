import{R as r}from"./index-c0290abd.js";import{d as T,F as p,g as _}from"./index-4ddfb4d5.js";import{t as R}from"./chunk-4NMOSTKD-052c8761.js";import"./_commonjsHelpers-725317a4.js";import"./extends-98964cd2.js";import"./jsx-runtime-5fc188ad.js";import"./index-d475d2ea.js";const{useParameter:v,addons:S,useEffect:K,useMemo:b}=__STORYBOOK_MODULE_PREVIEW_API__;var y=Object.defineProperty,O=(t,e)=>{for(var a in e)y(t,a,{get:e[a],enumerable:!0})},P={};O(P,{initializeThemeState:()=>d,pluckThemeFromContext:()=>u,useThemeParameters:()=>h});var k="@storybook/addon-styling",G=`${k}/theme-switcher`,I="theming",M="theme",x={},F={REGISTER_THEMES:`${G}/REGISTER_THEMES`};function u({globals:t}){return t[M]||""}function h(){return v(I,x)}function d(t,e){S.getChannel().emit(F.REGISTER_THEMES,{defaultTheme:e,themes:t})}var H=([t,e])=>e,$=({Provider:t,GlobalStyles:e,defaultTheme:a,themes:l={}})=>{let o=Object.keys(l),m=a||o[0];return d(o,m),(n,E)=>{let{themeOverride:s}=h(),i=u(E),f=b(()=>{let g=s||i||m,c=Object.entries(l);return c.length===1?H(c[0]):l[g]},[l,i,s]);return t?r.createElement(t,{theme:f},e&&r.createElement(e,null),n()):r.createElement(r.Fragment,null,e&&r.createElement(e,null),n())}};const L={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:R.dark}}},Q=[$({themes:{light:T},defaultTheme:"light",Provider:p,GlobalStyles:_})];export{Q as decorators,L as default};
//# sourceMappingURL=preview-8468322c.js.map