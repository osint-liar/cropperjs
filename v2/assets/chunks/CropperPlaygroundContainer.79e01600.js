import{_ as r,o as t,c as n}from"./framework.e7a370da.js";const c={name:"CropperPlaygroundContainer",props:{src:{type:String,default:void 0}},mounted(){const e=document.body.querySelector(".VPFooter");e&&(e.style.display="none")},beforeUnmount(){const e=document.body.querySelector(".VPFooter");e&&(e.style.display="")}};const s=["src"];function a(e,p,o,l,d,u){return t(),n("iframe",{class:"cropper-playground-container",src:o.src},null,8,s)}const i=r(c,[["render",a]]);export{i as default};
