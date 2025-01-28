import{T as O}from"./Task-t0s9Q890.js";import{v as K}from"./v4-CQkTLCs1.js";import"./index-DximhN0d.js";const{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:j}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:m}=__STORYBOOK_MODULE_GLOBAL__;var B="storybook/actions",N=`${B}/action-event`,C={depth:10,clearOnStoryChange:!0,limit:50},k=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:k(r,e)},L=t=>!!(typeof t=="object"&&t&&k(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),W=t=>{if(L(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(n.constructor.prototype)}),e}return t},Y=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?K():Date.now().toString(36)+Math.random().toString(36).substring(2);function g(t,e={}){let r={...C,...e},n=function(...c){var d,l;if(e.implicit){let _=(d="__STORYBOOK_PREVIEW__"in m?m.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(_){let a=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),u=new j({phase:_.phase,name:t,deprecated:a});if(a)console.warn(u);else throw u}}let I=V.getChannel(),P=Y(),v=5,p=c.map(W),w=c.length>1?p:p[0],b={id:P,count:0,data:{name:t,args:w},options:{...r,maxDepth:v+(r.depth||3),allowFunction:r.allowFunction||!1}};I.emit(N,b)};return n.isAction=!0,n.implicit=e.implicit,n}const x={onPinTask:g("onPinTask"),onArchiveTask:g("onArchiveTask")},F={component:O,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,render:t=>({Component:O,props:t,on:{...x}})},o={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...o.args.task,state:"TASK_PINNED"}}},i={args:{task:{...o.args.task,state:"TASK_ARCHIVED"}}};var E,T,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var D,S,A;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var R,h,y;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const $=["actionsData","Default","Pinned","Archived"];export{i as Archived,o as Default,s as Pinned,$ as __namedExportsOrder,x as actionsData,F as default};
