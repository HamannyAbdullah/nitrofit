import{N as u,u as h,_ as p,o as m,a as f,w as d,f as l,ac as S,n as P,d as A,t as B,g as D,e as r,k as v,a4 as g,l as C,a8 as M,aa as k,r as c,J as $,a7 as w}from"./index.f4591746.js";import{l as E}from"./stripe.esm.91383e67.js";const q={props:{id:{type:String,default:"card-element"},title:String,amount:[String,Number],btnLabel:String,processing:Boolean,pay:Boolean,add:Boolean,disabled:Boolean,dense:Boolean,hasButton:Boolean,billingDetails:Object},data(){return{loading:Boolean(this.processing),stripe:null,cardElement:null}},emits:["failed","success","confirmed"],methods:{submit(){this.$refs["card-button"].$el.click()},confirmPaymentMethod({client_secret:e,payment_method:s}){this.loading=!0,this.stripe.confirmCardPayment(e,{setup_future_usage:"off_session",payment_method:s.id}).then(({error:o,paymentIntent:a})=>{this.loading=!1,o?(this.$emit("failed",o.message),console.log("paymentIntent",o)):(this.$emit("confirmed",a),console.log("paymentIntent",a))})}},async mounted(){const e=this.stripe=await E(this.stripe_key),s=e.elements(),t=this.cardElement=s.create("card",{hidePostalCode:!0});t.mount(`#${this.id}`),document.getElementById(`${this.id}-card-button`).addEventListener("click",async a=>{this.loading=!0;const{paymentMethod:n,error:i}=await e.createPaymentMethod("card",t,{billing_details:{...this.billingDetails}});i?(this.loading=!1,this.$emit("failed",i.message),console.log("paymentMethod",i)):(this.loading=!1,this.$emit("success",n),console.log("paymentMethod",n))})},computed:{...u(h,["stripePayment"]),stripe_key(){var e,s;return(s=(e=this.stripePayment)==null?void 0:e.API_KEY)!=null?s:"pk_test_mKQ8m5rUcQoXi9sHSLXnuoKt"},label(){return this.btnLabel||this.$t("payAmount",{amount:this.$core.money(this.amount)})},paymentMethods(){return[{title:"Card",type:"card",remember:!0,redirects:!1,element:"card"},{title:"Alipay",type:"alipay"},{title:"BECS Direct Debit",type:"au_becs_debit",remember:!0,redirects:!1,element:"auBankAccount"},{title:"Bancontact",type:"bancontact",remember:!0},{title:"EPS",type:"eps",element:"epsBank"},{title:"Giropay",type:"giropay"},{title:"iDEAL",type:"ideal",remember:!0,element:"idealBank"},{title:"SEPA Debit",type:"sepa_debit",remember:!0,redirects:!1,element:"iban",options:{supportedCountries:["SEPA"]}}].map(s=>({remember:!1,redirects:!0,options:{},...s}))}},watch:{processing:{deep:!0,handler(e){this.loading=Boolean(e)}}},unmounted(){this.cardElement.unmount(),[document.querySelectorAll("[name^=__privateStripeMetricsController]"),document.querySelectorAll("[name^=__privateStripeController]")].forEach(s=>s.forEach(t=>{t.parentNode.removeChild(t)}))}},L={key:0,class:"text-h6 q-mb-md"},N=["id"],H={class:"actions"};function Q(e,s,t,o,a,n){return m(),f(k,{class:"stripe-credit-card"},{default:d(()=>[l(S,{class:P({"q-pa-none":t.dense})},{default:d(()=>[t.title?(m(),A("div",L,B(t.title),1)):D("",!0),r("div",{id:t.id},null,8,N),v(e.$slots,"default"),r("div",H,[g(l(C,{color:"primary","no-caps":"",class:"full-width",icon:"far fa-credit-card",label:n.label,loading:a.loading,disabled:t.disabled,id:`${t.id}-card-button`,ref:"card-button"},null,8,["label","loading","disabled","id"]),[[M,t.hasButton]])])]),_:3},8,["class"])]),_:3})}var V=p(q,[["render",Q]]);const x={name:"AddPaymentMethod",components:{StripeCard:V},data(){return{isDefault:!1,loading:!1}},emits:["ok","hide"],methods:{show(){console.func("components/payment-methods/AddPaymentMethod:methods.show()",arguments),this.$refs.dialog.show()},hide(){console.func("components/payment-methods/AddPaymentMethod:methods.close()",arguments),this.$refs.dialog.hide()},onDialogHide(){console.func("components/payment-methods/AddPaymentMethod:methods.onDialogHide()",arguments),this.loading=!1,this.$emit("hide")},onAdd(){console.func("components/payment-methods/AddPaymentMethod:methods.onAdd()",arguments),this.loading=!0,this.$refs.stripe.submit()},onSuccess(e){console.func("components/payment-methods/AddPaymentMethod:methods.onSuccess()",arguments);const{id:s,card:t}=e;this.$emit("ok",Object.assign(this,{payment_method:s,card:t,isDefault:this.isDefault}))},onFailed(e){console.func("components/payment-methods/AddPaymentMethod:methods.onFailed()",arguments),this.loading=!1,this.$core.error(e,{title:this.$t("dialog.title.error")})},setLoading(e=!1){console.func("components/payment-methods/AddPaymentMethod:methods.setLoading()",arguments),this.loading=e}},computed:{...u(h,["billingDetails"])}},F={class:"q-mt-md"},I={class:"q-mt-md text-right"};function K(e,s,t,o,a,n){const i=c("base-btn"),y=c("stripe-card"),b=c("base-dialog");return m(),f(b,{"content-style":"width: 450px; max-width: 95vw",title:e.$t("addPaymentMethod"),ref:"dialog",class:"addPaymentMethod",persistent:"",onHide:n.onDialogHide,"hide-footer":"","use-separator":""},{body:d(()=>[l(y,{flat:"",dense:"",ref:"stripe",id:"add-card-element",onSuccess:n.onSuccess,onFailed:n.onFailed,billingDetails:e.billingDetails},{default:d(()=>[r("div",F,[l($,{dense:"",modelValue:a.isDefault,"onUpdate:modelValue":s[0]||(s[0]=_=>a.isDefault=_),label:e.$t("default")},null,8,["modelValue","label"])]),r("div",I,[g(l(i,{color:"negative",outline:"",disable:a.loading,label:e.$t("cancel"),class:"q-mr-sm"},null,8,["disable","label"]),[[w]]),l(i,{color:"primary",label:e.$t("addNew"),loading:a.loading,onClick:n.onAdd},null,8,["label","loading","onClick"])])]),_:1},8,["onSuccess","onFailed","billingDetails"])]),_:1},8,["title","onHide"])}var U=p(x,[["render",K]]);export{U as A,V as S};