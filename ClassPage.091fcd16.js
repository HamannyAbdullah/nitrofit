import{_ as x,aE as c,M as v,r as a,o as p,a as h,w as n,e as r,f as i,h as f,t as b,J as k}from"./index.f4591746.js";import{Q as N}from"./QPage.a3fc6f07.js";import{S as U}from"./SkeletonSinglePage.67226046.js";import{u as q}from"./class-list.72fd415c.js";import{U as D}from"./UrlList.907bc71f.js";import"./QSkeleton.28ea6420.js";import"./QItemLabel.e0825433.js";const g={is_active:!0,urls:[]},P={components:{SkeletonSinglePage:U,UrlList:D},data(){return{default:c.exports.cloneDeep(g),classlist:c.exports.cloneDeep(g),loaded:!1,submited:!1}},methods:{...v(q,["store","show","update"]),onSubmit(e){console.func("pages/admins/class-lists/ClassPage:methods.onSubmit()",arguments),this.submited=!0,(this.creating?this.store:this.update)(this.classlist).then(({data:o,message:_})=>{this.submited=!1,this.$q.notify(_),this.classlist=o,this.default=c.exports.cloneDeep(o),this.$router.push({name:"Single Class",params:{id:o.id},query:{action:"edit"}})}).catch(o=>{this.submited=!1,this.$core.error(o,{title:this.$t("dialog.title.error")})})},onReset(e){console.func("pages/admins/class-lists/ClassPage:methods.onReset()",arguments),this.loaded=!1,this.$nextTick(()=>{this.classlist=c.exports.cloneDeep(this.default),this.loaded=!0})},onCancel(e){console.func("pages/admins/class-lists/ClassPage:methods.onCancel()",arguments),this.$router.go(-1)}},async mounted(){this.creating?this.loaded=!0:this.show(this.id).then(e=>{this.classlist=e,this.default=c.exports.cloneDeep(e),this.loaded=!0}).catch(e=>{this.$emit("error",e)})},computed:{edit(){return["add","edit"].includes(this.action)||this.id==="add"},creating(){return this.id==="add"},id(){return this.$route.params.id},action(){return this.$route.query.action},disable(){return this.default&&JSON.stringify(this.classlist)===JSON.stringify(this.default)},resetable(){return this.default&&JSON.stringify(this.classlist)!==JSON.stringify(this.default)}}},J={class:"q-gutter-md"},R={class:"col-xs-12 col-sm-6"},w={class:"col-xs-12 col-sm-6"},O={class:"col-xs-12"},B={class:"col-xs-12"},Q={class:"col-xs-12"};function L(e,t,o,_,s,d){const u=a("base-label"),m=a("base-input"),V=a("url-list"),y=a("base-section"),S=a("base-form"),C=a("skeleton-single-page");return p(),h(N,{padding:""},{default:n(()=>[s.loaded?(p(),h(S,{key:0,onSubmit:d.onSubmit,onCancel:d.onCancel,onReset:d.onReset,resetable:d.resetable,disable:d.disable,submited:s.submited},{default:n(()=>[r("div",J,[i(y,{flat:"",bordered:"",title:e.$t("generalInformation")},{default:n(()=>[r("div",R,[i(u,{required:""},{default:n(()=>[f(b(e.$t("name")),1)]),_:1}),i(m,{modelValue:s.classlist.name,"onUpdate:modelValue":t[0]||(t[0]=l=>s.classlist.name=l),name:"name"},null,8,["modelValue"])]),r("div",w,[i(u,{required:""},{default:n(()=>[f(b(e.$t("capacity")),1)]),_:1}),i(m,{modelValue:s.classlist.capacity,"onUpdate:modelValue":t[1]||(t[1]=l=>s.classlist.capacity=l),name:"capacity",type:"number"},null,8,["modelValue"])]),r("div",O,[i(u,null,{default:n(()=>[f(b(e.$t("description")),1)]),_:1}),i(m,{modelValue:s.classlist.description,"onUpdate:modelValue":t[2]||(t[2]=l=>s.classlist.description=l),name:"description",type:"textarea"},null,8,["modelValue"])]),r("div",B,[i(V,{modelValue:s.classlist.urls,"onUpdate:modelValue":t[3]||(t[3]=l=>s.classlist.urls=l)},null,8,["modelValue"])]),r("div",Q,[i(k,{dense:"",modelValue:s.classlist.is_active,"onUpdate:modelValue":t[4]||(t[4]=l=>s.classlist.is_active=l),label:e.$t("active"),color:"green"},null,8,["modelValue","label"])])]),_:1},8,["title"])])]),_:1},8,["onSubmit","onCancel","onReset","resetable","disable","submited"])):(p(),h(C,{key:1}))]),_:1})}var z=x(P,[["render",L]]);export{z as default};