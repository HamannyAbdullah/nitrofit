import{cX as s,A as l}from"./index.f4591746.js";const n=s("product/attribute",{getters:{module:t=>({name:"Attributes",label:t.$t("modules.attributes"),singular:t.$t("modules.singular.attribute"),plural:t.$t("modules.plural.attributes")}),columns:t=>[{name:"name",align:"left",label:t.$t("label.name"),field:"name",style:"width: 40px",sortable:!0},{name:"slug",align:"left",label:t.$t("label.slug"),field:"slug",style:"width: 40px",sortable:!0},{name:"actions",align:"right",sortable:!1}],actions:t=>[{label:t.$t("label.edit"),permission:"Edit",action:"route",route:"Single Attribute",params:r=>({id:r.id}),query:r=>({action:"edit"}),icon:"fas fa-edit",deleted:!1},{label:t.$t("label.delete"),permission:"Delete",action:"delete",icon:"fas fa-trash-alt",deleted:!1},{label:t.$t("label.restore"),permission:"Delete",action:"restore",icon:"fas fa-trash-undo",deleted:!0}],toolbar:t=>[{label:t.$t("label.trashed"),action:"request",component:"base-toggle",dense:!0,key:"deleted",checkedIcon:"delete",deleted:"all"},{icon:"fad fa-plus-circle",label:t.$t("label.addAttribute"),permission:"New",action:"route",params:{id:"add"},route:"Single Attribute",color:"primary",deleted:"all"}],filters:t=>[]},actions:{get(t){return new Promise((r,a)=>{l.get("attributes",t).then(e=>{this.setRows(e.data),r(e)}).catch(e=>{a(e)})})},store(t){return new Promise((r,a)=>{l.post("attributes/store",t).then(e=>{r(e)}).catch(e=>{a(e)})})},show(t){return new Promise((r,a)=>{l.get(`attributes/${t}`).then(e=>{r(e)}).catch(e=>{a(e)})})},update(t){return new Promise((r,a)=>{l.put(`attributes/${t.id}`,t).then(e=>{r(e)}).catch(e=>{a(e)})})},delete(t){return new Promise((r,a)=>{l.delete(`attributes/${t}/destroy`).then(e=>{r(e)}).catch(e=>{a(e)})})},deleteSelected(t){return new Promise((r,a)=>{l.delete("attributes/destroy",{items:t}).then(e=>{r(e)}).catch(e=>{a(e)})})},restore(t){return new Promise((r,a)=>{l.post(`attributes/${t}/restore`).then(e=>{r(e)}).catch(e=>{a(e)})})},restoreSelected(t){return new Promise((r,a)=>{l.post("attributes/restore",{items:t}).then(e=>{r(e)}).catch(e=>{a(e)})})}}});export{n as u};
