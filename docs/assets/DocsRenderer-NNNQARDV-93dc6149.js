import{_ as p}from"./iframe-c38426e8.js";import{R as e,r as c}from"./index-f46741a2.js";import{r as l,u}from"./react-18-3202c028.js";import{C as h,A as E,H as d,D as x}from"./index-7d00e4f8.js";import"../sb-preview/runtime.js";import"./index-d868a670.js";import"./chunk-6E673XPF-4294b5bd.js";import"./index-b7b0ffbb.js";import"./index-356e4a49.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-3dbaff96.js"),["./index-3dbaff96.js","./index-13ca71f7.js","./index-f46741a2.js"],import.meta.url).then(({MDXProvider:i})=>l(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{F as DocsRenderer,_ as defaultComponents};