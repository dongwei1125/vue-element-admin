"use strict";(self["webpackChunkvue_element_admin"]=self["webpackChunkvue_element_admin"]||[]).push([[1694],{1694:function(t,i,e){e.r(i),e.d(i,{default:function(){return k}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"dnd-list-page"},[i("i18n",{staticClass:"tips",attrs:{path:"componentPage.dndList",tag:"p"}},[i("template",{slot:"link"},[i("el-link",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",type:"primary",target:"_blank"}},[t._v(" vuedraggable ")])],1)],2),i("dnd-list",{attrs:{"left-list":t.leftList,"right-list":t.rightList},on:{"update:leftList":function(i){t.leftList=i},"update:left-list":function(i){t.leftList=i},"update:rightList":function(i){t.rightList=i},"update:right-list":function(i){t.rightList=i}}},[i("h3",{attrs:{slot:"left-header"},slot:"left-header"},[t._v(t._s(t.$t("componentPage.list")))]),i("h3",{attrs:{slot:"right-header"},slot:"right-header"},[t._v(t._s(t.$t("componentPage.articlePool")))])])],1)},l=[],a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"dnd-list"},[i("div",{staticClass:"dnd-left-list"},[i("div",{staticClass:"dnd-left-list-header"},[t._t("left-header")],2),i("draggable",{staticClass:"dnd-left-list-content",attrs:{list:t.leftList,group:"list"}},t._l(t.leftList,(function(e){return i("div",{key:e.id,staticClass:"dnd-list-item"},[i("div",[t._v(t._s(e.id)+" ["+t._s(e.author)+"] "+t._s(e.title))]),i("div",{staticClass:"btn",on:{click:function(i){return t.deleteLeftItem(e)}}},[i("i",{staticClass:"el-icon-delete"})])])})),0)],1),i("div",{staticClass:"dnd-right-list"},[i("div",{staticClass:"dnd-right-list-header"},[t._t("right-header")],2),i("draggable",{staticClass:"dnd-right-list-content",attrs:{list:t.rightList,group:"list"}},t._l(t.rightList,(function(e){return i("div",{key:e.id,staticClass:"dnd-list-item",on:{click:function(i){return t.addToLeft(e)}}},[i("div",[t._v(t._s(e.id)+" ["+t._s(e.author)+"] "+t._s(e.title))])])})),0)],1)])},d=[],r=(e(4114),e(9135)),n=e.n(r),u={name:"DndList",components:{draggable:n()},props:{leftList:{type:Array,default:()=>[]},rightList:{type:Array,default:()=>[]}},methods:{deleteLeftItem(t){const i=[...this.leftList],e=[...this.rightList],s=i.findIndex((i=>i===t)),[l]=i.splice(s,1);e.unshift(l),this.$emit("update:leftList",i),this.$emit("update:rightList",e)},addToLeft(t){const i=[...this.leftList],e=[...this.rightList],s=e.findIndex((i=>i===t)),[l]=e.splice(s,1);i.push(l),this.$emit("update:leftList",i),this.$emit("update:rightList",e)}}},h=u,o=e(1656),c=(0,o.A)(h,a,d,!1,null,"6a10963e",null),f=c.exports,g={name:"DndListPage",components:{DndList:f},data(){return{leftList:[{id:1,author:"Carol",title:"Qegrzaa Idsbg Mutq Itdjptly Fbkktxsb"},{id:2,author:"Jessica",title:"Otmt Fkww Foyiqftr Iebgj Nsfleb Drytgr Ehjqr Lbdoe"},{id:3,author:"Donald",title:"Dgtmjc Mpxpxqvn Mdcsldh Fegkdhhy Bfh Gwvh"},{id:4,author:"Helen",title:"Nioaexmw Fjexc Jsmvknfui Rin Dpslgficx Lkggmm Roexufc Ruvbmsjsd Kvwgsjkof"},{id:5,author:"Timothy",title:"Rnttin Rbrugu Ssstvmyb Qizmbkj Kcfs Hlt Xwzkiwo Mfyek Yquwrmd"}],rightList:[{id:6,author:"Brenda",title:"Gpm Spkage Tkwnz Eoepfr Vxcocnqbuj Jzj Arehfnnw Nrrcv Ewy"},{id:7,author:"Edward",title:"Uqgxvwyuq Mespec Zmzvz Uon Ilknqhl Jyiddoso Bdrir Xtkwiylc Uued"},{id:8,author:"David",title:"Jerrrt Xgmtmgxge Kvij Eivnkjjj Ehfir Luznt Vksbpls Huqjltklg Tkghchvqds"},{id:9,author:"Melissa",title:"Zvfthudw Lpdt Ohhbclk Ocgdvkm Oxvmr Ufcovgndj Zfspf Pgftn Uucge"},{id:10,author:"Ruth",title:"Zbaoipmsn Vwtqxhdjv Wehutqn Jid Qtsx Erypqwfuq Ngji"},{id:11,author:"Matthew",title:"Qndte Uhkgooc Kjyhjlmx Qmsciopblu Ukske Jcimusid Iwsuyn"},{id:12,author:"James",title:"Gnqpoez Hubhlypiqj Ramif Wkmezre Hugmufo"},{id:13,author:"Helen",title:"Jlsc Trg Wflioqbg Xgkluigtd Libeefite Optib Hptf Hlykc Xpajyl"},{id:14,author:"Michelle",title:"Oqwxwawger Bbxatnjz Vqlmwfep Bkdjw Abce Ntdkutn"},{id:15,author:"Amy",title:"Onnhh Wqey Gutjxjlr Ymuhjplq Nnpgtnh Nylx Iypkpm"},{id:16,author:"Lisa",title:"Cgsgfjjf Kcykcptt Owhi Ixdhqtuu Ndixikwjk Kkqqcfi Sgxhj Ifqmqk"},{id:17,author:"Larry",title:"Jkry Plzpx Gujk Udj Uwdbltnwm Xifpyevx"},{id:18,author:"William",title:"Imntqg Viddkuxo Okvqsjbvc Tkykjv Gujni Ygldgz Eucmuqocs Eecx"},{id:19,author:"Donna",title:"Wwsqajpzvj Qanuq Lst Qtgfam Gwfal Abeur"},{id:20,author:"Christopher",title:"Situ Ermotj Ctjhrfxu Iil Zaqp Jcawa Zhgnqaht"}]}}},p=g,m=(0,o.A)(p,s,l,!1,null,"76a17714",null),k=m.exports}}]);