"use strict";(self["webpackChunkvue_element_admin"]=self["webpackChunkvue_element_admin"]||[]).push([[4864],{4864:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"i18n"},[t("div",{staticClass:"i18n-header"},[t("el-card",[t("template",{slot:"header"},[t("svg-icon",{attrs:{"icon-class":"i18n"}}),t("span",{staticClass:"title"},[e._v(e._s(e.$t("i18nPage.title")))])],1),t("el-radio-group",{model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}},e._l(e.langs,(function(a){return t("el-radio",{key:a.value,attrs:{border:"",label:a.value}},[e._v(" "+e._s(a.label)+" ")])})),1),t("el-tag",{staticClass:"tag",attrs:{type:"info"}},[e._v(e._s(e.$t("i18nPage.tips")))])],2)],1),t("div",{staticClass:"i18n-content"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12,xs:24}},[t("div",{staticClass:"item"},[t("el-date-picker",{attrs:{type:"date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),t("div",{staticClass:"item"},[t("el-select",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(a){return t("el-option",{key:a.value,attrs:{label:e.$t(a.label),value:a.value}})})),1)],1),t("div",{staticClass:"item"},[t("el-button",[e._v(e._s(e.$t("i18nPage.default")))]),t("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("i18nPage.primary")))]),t("el-button",{attrs:{type:"success"}},[e._v(e._s(e.$t("i18nPage.success")))]),t("el-button",{attrs:{type:"info"}},[e._v(e._s(e.$t("i18nPage.info")))]),t("el-button",{attrs:{type:"warning"}},[e._v(e._s(e.$t("i18nPage.warning")))]),t("el-button",{attrs:{type:"danger"}},[e._v(e._s(e.$t("i18nPage.danger")))])],1)]),t("el-col",{attrs:{span:12,xs:24}},[t("el-table",{attrs:{data:e.tableData,"highlight-current-row":"",border:""}},[t("el-table-column",{attrs:{label:e.$t("i18nPage.name"),prop:"name",width:"100px",align:"center"}}),t("el-table-column",{attrs:{label:e.$t("i18nPage.date"),prop:"date",width:"120px",align:"center"}}),t("el-table-column",{attrs:{label:e.$t("i18nPage.address"),prop:"address"}})],1)],1)],1)],1)])},s=[],n=a(4470),i={name:"I18n",data(){return{langs:[{label:"中文",value:"zh"},{label:"English",value:"en"}],options:[{value:"1",label:"i18nPage.one"},{value:"2",label:"i18nPage.two"},{value:"3",label:"i18nPage.three"}],tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],date:"",value:""}},computed:{title(){return this.$route.meta?.title},lang:{get(){return this.$store.state.app.language},set(e){this.$i18n.locale=e,document.title=(0,n.w)(this.title),this.$store.dispatch("app/updateLanguage",e)}}}},r=i,o=a(1656),u=(0,o.A)(r,l,s,!1,null,"4dff9cc2",null),d=u.exports}}]);