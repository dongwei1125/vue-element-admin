"use strict";(self["webpackChunkvue_element_admin"]=self["webpackChunkvue_element_admin"]||[]).push([[1874],{8144:function(e,t,s){s.d(t,{A:function(){return u}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sticky",style:{height:`${e.height}px`,zIndex:e.zIndex}},[t("div",{class:e.className,style:e.styles},[e._t("default")],2)])},l=[],r={data(){return{loaded:!1,resizeObserver:null,$_resizeHandler:null}},mounted(){this.$_resizeHandler=this.resize,this.initObserver()},beforeDestroy(){this.destroyObserver()},methods:{initObserver(){this.resizeObserver=new ResizeObserver((e=>{this.loaded?this.$_resizeHandler():this.loaded=!0})),this.resizeObserver.observe(this.$el)},destroyObserver(){this.resizeObserver.unobserve(this.$el),this.resizeObserver=null}}},n={data(){return{$_scrollHandler:null}},mounted(){this.$_scrollHandler=this.scroll,this.addEventListener()},beforeDestroy(){this.removeEventListener()},methods:{addEventListener(){window.addEventListener("scroll",this.$_scrollHandler)},removeEventListener(){window.removeEventListener("scroll",this.$_scrollHandler)}}},o={name:"Sticky",mixins:[r,n],props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data(){return{width:void 0,height:void 0,isSticky:!1}},computed:{styles(){return{width:this.isSticky?`${this.width}px`:"auto",position:this.isSticky?"fixed":void 0,top:this.isSticky?`${this.stickyTop}px`:void 0,zIndex:this.zIndex}}},mounted(){this.setHeight()},methods:{setHeight(){this.height=this.$el.getBoundingClientRect().height},setWidth(){this.width=this.$el.getBoundingClientRect().width},scroll(){const{top:e}=this.$el.getBoundingClientRect();this.isSticky=e<this.stickyTop,this.setWidth()},resize(){this.isSticky&&this.setWidth()}}},a=o,d=s(1656),c=(0,d.A)(a,i,l,!1,null,null,null),u=c.exports},1874:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div",[t("sticky",{attrs:{"class-name":"sub-navbar","z-index":11}},[t("el-dropdown",{attrs:{trigger:"click"}},[t("el-button",{attrs:{plain:""}},[e._v(" "+e._s(e.$t("componentPage.platform"))+" "),t("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-checkbox-group",{model:{value:e.platforms,callback:function(t){e.platforms=t},expression:"platforms"}},e._l(e.platformOptions,(function(s){return t("el-checkbox",{key:s.value,attrs:{label:s.value}},[e._v(" "+e._s(e.$t(s.label))+" ")])})),1)],1)],1),t("el-dropdown",{attrs:{trigger:"click"}},[t("el-button",{attrs:{plain:""}},[e._v(" "+e._s(e.$t("componentPage.link"))+" "),t("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-input",{attrs:{placeholder:e.$t("componentPage.inputLink")},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},[t("template",{slot:"prepend"},[e._v("URL")])],2)],1)],1),t("el-date-picker",{attrs:{type:"datetime",format:"yyyy/MM/dd HH:mm:ss",placeholder:e.$t("componentPage.releaseTime")},model:{value:e.datetime,callback:function(t){e.datetime=t},expression:"datetime"}}),t("el-button",{attrs:{type:"success"}},[e._v(e._s(e.$t("componentPage.publish")))])],1),t("ul",[t("li",[t("p",{staticClass:"tips"},[e._v(e._s(e.$t("componentPage.sticky")))])]),e._l(9,(function(s){return t("li",{key:s},[e._v(e._s(s))])})),t("li",[t("sticky",{attrs:{"sticky-top":200}},[t("el-button",{attrs:{type:"primary"}},[e._v("10")])],1)],1),e._l(40,(function(s){return t("li",{key:s+10},[e._v(e._s(s+10))])}))],2)],1)},l=[],r=s(8144),n={name:"StickyPage",components:{Sticky:r.A},data(){return{platforms:[],platformOptions:[{value:"a",label:"componentPage.platformA"},{value:"b",label:"componentPage.platformB"},{value:"c",label:"componentPage.platformC"}],url:"",datetime:""}}},o=n,a=s(1656),d=(0,a.A)(o,i,l,!1,null,"01755fa4",null),c=d.exports}}]);