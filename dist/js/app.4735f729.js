(function(t){function e(e){for(var i,s,o=e[0],l=e[1],d=e[2],u=0,p=[];u<o.length;u++)s=o[u],r[s]&&p.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("1356"),r=a.n(i);r.a},1356:function(t,e,a){},"261c":function(t,e,a){},"35f6":function(t,e,a){"use strict";var i=a("a6bb"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),r=a("bb71");a("da64");i["a"].use(r["a"],{iconfont:"md",theme:{primary:"#f4925c",secondary:"#1c4a6c",accent:"#f8d1be",info:"#667d96",error:"#009688",warning:"#ff5722",success:"#607d8b"}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-content",[a("v-container",{staticClass:"fluid"},[a("form",{attrs:{autocomplete:"off",novalidate:"novalidate"}},[a("v-layout",{attrs:{"justify-center":"",row:"","fill-height":"",wrap:"","my-2":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("CardAvatar")],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("CardName")],1)],1),a("v-layout",{attrs:{"justify-center":"",row:"","fill-height":"",wrap:"","my-2":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("CardEmail")],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("CardPhone")],1)],1),a("v-layout",{attrs:{"justify-center":"",row:"","fill-height":"",wrap:"","my-2":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("CardAddBilling")],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("CardAddMailing")],1)],1)],1)])],1),a("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"secondary",attrs:{app:"",dark:"",height:"86px"}},[a("v-toolbar-side-icon",{on:{click:function(e){return t.doDrawer()}}}),a("v-toolbar-title",{staticClass:"headline"},[a("h1",{staticClass:"display-1"},[a("span",{staticClass:"font-weight-light"},[t._v("Accu")]),a("span",{staticClass:"primary--text font-weight-light"},[t._v("Contax")])])]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{fab:"",small:"",color:"primary",dark:"",href:"https://github.com/neodigm/accucontax",target:"_blank","aria-label":"Github Repo"},on:{click:function(e){return e.preventDefault(),t.getGit()}}},i),[a("v-icon",[t._v("code")])],1)]}}])},[a("span",[t._v("Github Repo")])])],1),a("v-navigation-drawer",{staticClass:"info",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.links,function(e){return a("v-list-tile",{key:e.text,on:{click:function(a){return t.doLaunch(e.route)}}},[a("v-list-tile-action",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"white--text subheading"},[t._v(t._s(e.text))])],1)],1)}),1)],1)],1)},l=[],d={data:function(){return{drawer:!1,links:[{icon:"launch",text:"Scott C. Krause",route:"https://www.theScottKrause.com/"},{icon:"code",text:"Other Vue.js",route:"https://neodigm.github.io/vue_voyagers/"},{icon:"accessible",text:"On Accessibility",route:"https://www.linkedin.com/pulse/accessibility-ecommerce-scott-krause/"}]}},methods:{getGit:function(){this.$store.commit("setSound",5),setTimeout(function(){window.location.href="https://github.com/neodigm/accucontax"},2e3)},doDrawer:function(){this.drawer=!this.drawer,this.$store.commit("setSound",this.drawer?6:2)},doLaunch:function(t){this.$store.commit("setSound",4),setTimeout(function(){window.location.href=t},2e3)}}},c=d,u=a("2877"),p=a("6544"),f=a.n(p),m=a("8336"),v=a("132d"),h=a("8860"),w=a("ba95"),y=a("40fe"),x=a("5d23"),b=a("f774"),_=a("9910"),C=a("71d9"),S=a("706c"),g=a("2a7f"),A=a("3a2f"),V=Object(u["a"])(c,o,l,!1,null,null,null),T=V.exports;f()(V,{VBtn:m["a"],VIcon:v["a"],VList:h["a"],VListTile:w["a"],VListTileAction:y["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VNavigationDrawer:b["a"],VSpacer:_["a"],VToolbar:C["a"],VToolbarSideIcon:S["a"],VToolbarTitle:g["a"],VTooltip:A["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"secondary",attrs:{app:"",fixed:"",dark:"",height:"74px"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-actions",{staticClass:"secondary justify-center"},[a("v-btn",{staticClass:"primary",on:{click:function(e){return t.doSnack()}}},[a("v-icon",{attrs:{left:""}},[t._v("supervisor_account")]),a("span",[t._v("Create Contact")])],1)],1)],1),a("v-snackbar",{attrs:{timeout:t.timeout,top:!0,vertical:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n"+t._s(t.text)+"\n"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n    Close\n")])],1)],1)},F=[],E={data:function(){return{message:"",snackbar:!1,y:"top",x:null,mode:"",timeout:5600,text:"Please enter all required information."}},methods:{doSnack:function(){this.snackbar=!this.snackbar,this.playAudioFile(3)}}},P=E,M=a("b0af"),D=a("99d9"),I=a("553a"),N=a("2db4"),O=Object(u["a"])(P,k,F,!1,null,null,null),$=O.exports;f()(O,{VBtn:m["a"],VCard:M["a"],VCardActions:D["a"],VFooter:I["a"],VIcon:v["a"],VSnackbar:N["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{light:"",tile:"",hover:"",color:"mx-3 grey lighten-4"}},[a("v-card-title",{staticClass:"title font-weight-light info white--text"},[a("v-icon",{staticClass:"white--text",attrs:{left:""}},[t._v("account_circle")]),a("span",[t._v("Avatar | Selfie")])],1),a("v-layout",{attrs:{"justify-center":"",row:"","fill-height":"",wrap:""}},[a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md12:"","justify-center":""}},[a("v-img",{staticStyle:{margin:"0 auto"},attrs:{src:"avatar.png","aspect-ratio":"1",center:"",width:"260",position:"center center","justify-center":""}})],1)],1),a("v-card-actions",{attrs:{fixed:""}},[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.doShow()}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\nPlease select a picture of yourself then drag & drop the file onto the silhouette above. You can find recent pictures taken from this device in the camera roll folder.\n            ")])],1)],1)},R=[],q={name:"CardAvatar",data:function(){return{show:!1,items:["Mr.","Mrs.","Miss","Dr.","Ms.","Prof.","Rev."]}},methods:{doShow:function(){this.show=!this.show,this.playAudioFile(this.show?2:1)}}},L=q,B=(a("c76a"),a("12b2")),Y=a("0e8f"),Z=a("adda"),H=a("a722"),W=a("0789"),G=Object(u["a"])(L,j,R,!1,null,"7d873ef4",null),K=G.exports;f()(G,{VBtn:m["a"],VCard:M["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:B["a"],VFlex:Y["a"],VIcon:v["a"],VImg:Z["a"],VLayout:H["a"],VSlideYTransition:W["d"],VSpacer:_["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{light:"",tile:"",hover:"",color:"mx-3 grey lighten-4"}},[a("v-card-title",{staticClass:"title font-weight-light info white--text"},[a("v-icon",{staticClass:"white--text",attrs:{left:""}},[t._v("face")]),a("span",[t._v("Name | Company")])],1),a("v-layout",{attrs:{"justify-center":"",row:"","fill-height":"",wrap:""}},[a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-select",{attrs:{items:t.items,label:"Salutation",box:""}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-text-field",{attrs:{label:"* First Name",box:""}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-text-field",{attrs:{label:"* Last Name",box:""}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Company",box:""}})],1)],1),a("v-card-actions",{attrs:{fixed:""}},[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.doShow()}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\nPlease select a salutation then enter your first name, last name, and optionally your company name. The First and Last name information is required. The salutation and company name are optional. See our privacy policy for questions about how we use this information.\n            ")])],1)],1)},X=[],U={name:"CardName",data:function(){return{show:!1,items:["Mr.","Mrs.","Miss","Dr.","Ms.","Prof.","Rev."]}},methods:{doShow:function(){this.show=!this.show,this.playAudioFile(this.show?2:1)}}},z=U,Q=(a("fda6"),a("b56d")),tt=a("2677"),et=Object(u["a"])(z,J,X,!1,null,"418d2c3a",null),at=et.exports;f()(et,{VBtn:m["a"],VCard:M["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:B["a"],VFlex:Y["a"],VIcon:v["a"],VLayout:H["a"],VSelect:Q["a"],VSlideYTransition:W["d"],VSpacer:_["a"],VTextField:tt["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{light:"",tile:"",hover:"",color:"mx-3 grey lighten-4"}},[a("v-card-title",{staticClass:"title font-weight-light info white--text"},[a("v-icon",{staticClass:"white--text",attrs:{left:""}},[t._v("home")]),a("span",[t._v("Billing Address")])],1),a("v-layout",{attrs:{"justify-center":"",row:"","fill-height":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"* Street Address",hint:"Building Number and Street Name",box:""},model:{value:t.appFields[t.STREET_ADDRESS].value,callback:function(e){t.$set(t.appFields[t.STREET_ADDRESS],"value",e)},expression:"appFields[ STREET_ADDRESS ].value"}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-text-field",{attrs:{label:"* City",box:""},model:{value:t.appFields[t.CITY].value,callback:function(e){t.$set(t.appFields[t.CITY],"value",e)},expression:"appFields[ CITY ].value"}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-select",{attrs:{items:t.usStates,label:"* State",box:""},model:{value:t.appFields[t.STATE].value,callback:function(e){t.$set(t.appFields[t.STATE],"value",e)},expression:"appFields[ STATE ].value"}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-text-field",{attrs:{label:"* Zip-code",box:""},model:{value:t.appFields[t.ZIP_CODE].value,callback:function(e){t.$set(t.appFields[t.ZIP_CODE],"value",e)},expression:"appFields[ ZIP_CODE ].value"}})],1)],1),a("v-card-actions",{attrs:{fixed:""}},[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.doShow()}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n                Please enter your billing address. This is the address known to your bank and creditors. Enter the building number and street name on the first line. All fields are required. See our privacy policy for questions about how we use this information.\n            ")])],1)],1)},rt=[],nt={name:"CardAddBilling",data:function(){return{STREET_ADDRESS:14,CITY:15,STATE:16,ZIP_CODE:17,show:!1,items:["Mr.","Mrs.","Miss","Dr.","Ms.","Prof.","Rev."]}},computed:{appFields:function(){return this.$store.state.appFields},usStates:function(){return this.$store.state.usStates}},methods:{doShow:function(){this.show=!this.show,this.playAudioFile(this.show?2:1)}}},st=nt,ot=(a("f72a"),Object(u["a"])(st,it,rt,!1,null,"48e1c111",null)),lt=ot.exports;f()(ot,{VBtn:m["a"],VCard:M["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:B["a"],VFlex:Y["a"],VIcon:v["a"],VLayout:H["a"],VSelect:Q["a"],VSlideYTransition:W["d"],VSpacer:_["a"],VTextField:tt["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{light:"",tile:"",hover:"",color:"mx-3 grey lighten-4"}},[a("v-card-title",{staticClass:"title font-weight-light info white--text"},[a("v-icon",{staticClass:"white--text",attrs:{left:""}},[t._v("markunread_mailbox")]),a("span",[t._v("Mailing Address")])],1),a("v-layout",{attrs:{"justify-center":"",row:"","fill-height":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"* Street Address",hint:"Building Number and Street Name",box:""},model:{value:t.appFields[t.STREET_ADDRESS].value,callback:function(e){t.$set(t.appFields[t.STREET_ADDRESS],"value",e)},expression:"appFields[ STREET_ADDRESS ].value"}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-text-field",{attrs:{label:"* City",box:""},model:{value:t.appFields[t.CITY].value,callback:function(e){t.$set(t.appFields[t.CITY],"value",e)},expression:"appFields[ CITY ].value"}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-select",{attrs:{items:t.usStates,label:"* State",box:""},model:{value:t.appFields[t.STATE].value,callback:function(e){t.$set(t.appFields[t.STATE],"value",e)},expression:"appFields[ STATE ].value"}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs12:"",sm12:"",md4:""}},[a("v-text-field",{attrs:{label:"* Zip-code",box:""},model:{value:t.appFields[t.ZIP_CODE].value,callback:function(e){t.$set(t.appFields[t.ZIP_CODE],"value",e)},expression:"appFields[ ZIP_CODE ].value"}})],1)],1),a("v-card-actions",{attrs:{fixed:""}},[a("v-btn",{staticClass:"info",attrs:{small:""},on:{click:function(e){return t.doCopyAdd()}}},[t._v("Same as Billing")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.doShow()}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n                Please enter your mailing address. This is the address of your home of where you receive your mail. Enter the building number and street name on the first line. All fields are required. See our privacy policy for questions about how we use this information.\n            ")])],1)],1)},ct=[],ut={name:"CardAddBilling",data:function(){return{STREET_ADDRESS:10,CITY:11,STATE:12,ZIP_CODE:13,show:!1,items:["Mr.","Mrs.","Miss","Dr.","Ms.","Prof.","Rev."]}},computed:{appFields:function(){return this.$store.state.appFields},usStates:function(){return this.$store.state.usStates}},methods:{doCopyAdd:function(){this.playAudioFile(4);for(var t=14;t<=17;t++)this.appFields[t].value&&(this.appFields[t-4].value=this.appFields[t].value)},doShow:function(){this.show=!this.show,this.playAudioFile(this.show?2:1)}}},pt=ut,ft=(a("6551"),Object(u["a"])(pt,dt,ct,!1,null,"f9110596",null)),mt=ft.exports;f()(ft,{VBtn:m["a"],VCard:M["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:B["a"],VFlex:Y["a"],VIcon:v["a"],VLayout:H["a"],VSelect:Q["a"],VSlideYTransition:W["d"],VSpacer:_["a"],VTextField:tt["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{light:"",tile:"",hover:"",color:"mx-3 grey lighten-4"}},[a("v-card-title",{staticClass:"title font-weight-light info white--text"},[a("v-icon",{staticClass:"white--text",attrs:{left:""}},[t._v("email")]),a("span",[t._v("Email Addresses")])],1),t._l(t.aItems,function(e,i){return a("v-layout",{key:i,class:{delete:e.delete},attrs:{"justify-center":"",row:"","fill-height":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md9:""}},[a("v-text-field",{staticClass:"field-input__grid--2",attrs:{label:"* EMail Address",hint:"Enter a valid email address",box:""}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md3:""}},[a("v-btn",{class:{primary:e.primary},attrs:{small:"",left:""},on:{click:function(a){return t.doPrimary(e)}}},[t._v("Primary")]),a("v-btn",{staticClass:"red--text",attrs:{small:"",left:"",fab:""},on:{click:function(a){return t.doDelete(e)}}},[a("v-icon",[t._v("delete_forever")])],1)],1)],1)}),a("v-card-actions",{attrs:{fixed:""}},[a("v-btn",{staticClass:"info",attrs:{small:""},on:{click:function(e){return t.doAddAnother()}}},[t._v("Add Another")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.doShow()}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n                Enter one or more email addresses. Please indicate which email is your preference or primary. Click [ Add Another ] to create an additional email address.\n            ")])],1)],2)},ht=[],wt={name:"CardEmail",data:function(){return{show:!1,aItems:[{item:"",primary:!0,delete:!1},{item:"",primary:!1,delete:!1}]}},computed:{appFields:function(){return this.$store.state.appFields},usStates:function(){return this.$store.state.usStates}},methods:{doAddAnother:function(){this.playAudioFile(4),this.aItems.push({item:"",primary:!1,delete:!1})},doShow:function(){this.show=!this.show,this.playAudioFile(this.show?2:1)},doPrimary:function(t){this.playAudioFile(4),this.aItems.map(function(t){t.primary=!1}),t.primary=!0},doDelete:function(t){this.playAudioFile(4),t.delete=!0}}},yt=wt,xt=(a("b501"),Object(u["a"])(yt,vt,ht,!1,null,"be90cc32",null)),bt=xt.exports;f()(xt,{VBtn:m["a"],VCard:M["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:B["a"],VFlex:Y["a"],VIcon:v["a"],VLayout:H["a"],VSlideYTransition:W["d"],VSpacer:_["a"],VTextField:tt["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{light:"",tile:"",hover:"",color:"mx-3 grey lighten-4"}},[a("v-card-title",{staticClass:"title font-weight-light info white--text"},[a("v-icon",{staticClass:"white--text",attrs:{left:""}},[t._v("phone")]),a("span",[t._v("Phone Numbers")])],1),t._l(t.aItems,function(e,i){return a("v-layout",{key:i,class:{delete:e.delete},attrs:{"justify-center":"",row:"","fill-height":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:"",md5:""}},[a("v-text-field",{staticClass:"field-input__grid--2",attrs:{mask:"phone",label:"* Phone Number",hint:"Enter a valid phone number",box:""},model:{value:e.item,callback:function(a){t.$set(e,"item",a)},expression:"item.item"}})],1),a("v-flex",{staticClass:"field-input__grid--2",attrs:{xs6:"",sm4:"",md4:""}},[a("v-select",{attrs:{items:t.types,label:"Salutation",box:""}})],1),a("v-flex",{attrs:{xs6:"",sm3:"",md3:""}},[a("v-btn",{class:{primary:e.primary},attrs:{small:"",left:""},on:{click:function(a){return t.doPrimary(e)}}},[t._v("Primary")]),a("v-btn",{staticClass:"red--text",attrs:{small:"",left:"",fab:""},on:{click:function(a){return t.doDelete(e)}}},[a("v-icon",[t._v("delete_forever")])],1)],1)],1)}),a("v-card-actions",{attrs:{fixed:""}},[a("v-btn",{staticClass:"info",attrs:{small:""},on:{click:function(e){return t.doAddAnother()}}},[t._v("Add Another")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.doShow()}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n                Enter one or more phone number. Please indicate which number is your preference or primary. Click [ Add Another ] to create an additional phone numbers. See our privacy policy for questions about how we use this information.\n            ")])],1)],2)},Ct=[],St={name:"CardPhone",data:function(){return{show:!1,aItems:[{item:"",primary:!0,delete:!1},{item:"",primary:!1,delete:!1}],types:["Work","Mobile","Home"]}},computed:{appFields:function(){return this.$store.state.appFields}},methods:{doAddAnother:function(){this.playAudioFile(4),this.aItems.push({item:"",primary:!1,delete:!1})},doShow:function(){this.show=!this.show,this.playAudioFile(this.show?2:1)},doPrimary:function(t){this.playAudioFile(4),this.aItems.map(function(t){t.primary=!1}),t.primary=!0},doDelete:function(t){this.playAudioFile(4),t.delete=!0}}},gt=St,At=(a("35f6"),Object(u["a"])(gt,_t,Ct,!1,null,"dc192928",null)),Vt=At.exports;f()(At,{VBtn:m["a"],VCard:M["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:B["a"],VFlex:Y["a"],VIcon:v["a"],VLayout:H["a"],VSelect:Q["a"],VSlideYTransition:W["d"],VSpacer:_["a"],VTextField:tt["a"]});var Tt={name:"App",components:{Header:T,Footer:$,CardAvatar:K,CardName:at,CardAddBilling:lt,CardAddMailing:mt,CardEmail:bt,CardPhone:Vt},data:function(){return{}},computed:{appFields:function(){return this.$store.state.appFields},playSound:function(){return this.$store.state.playSound}},watch:{playSound:function(){this.playAudioFile(this.playSound)}},methods:{setSound:function(){this.$store.commit("setSound",3)}}},kt=Tt,Ft=(a("034f"),a("7496")),Et=a("a523"),Pt=a("549c"),Mt=Object(u["a"])(kt,n,s,!1,null,null,null),Dt=Mt.exports;f()(Mt,{VApp:Ft["a"],VContainer:Et["a"],VContent:Pt["a"],VFlex:Y["a"],VLayout:H["a"]});var It=a("2f62");i["a"].use(It["a"]);var Nt=new It["a"].Store({state:{appFields:[{comp:"CardName",name:"Salutation",required:!1,value:""},{comp:"CardName",name:"First Name",required:!0,value:""},{comp:"CardName",name:"Last Name",required:!0,value:""},{comp:"CardName",name:"Company",required:!1,value:""},{comp:"CardPhone",name:"Phone Number",required:!1,value:""},{comp:"CardPhone",name:"Extension",required:!1,value:""},{comp:"CardPhone",name:"Type",required:!1,value:""},{comp:"CardPhone",name:"Primary Phone",required:!1,value:""},{comp:"CardEmail",name:"Email Address",required:!1,value:""},{comp:"CardEmail",name:"Primary Email",required:!1,value:""},{comp:"CardAddMailing",name:"Street Address",required:!1,value:""},{comp:"CardAddMailing",name:"City",required:!1,value:""},{comp:"CardAddMailing",name:"State",required:!1,value:""},{comp:"CardAddMailing",name:"Zip",required:!1,value:""},{comp:"CardAddBilling",name:"Street Address",required:!1,value:""},{comp:"CardAddBilling",name:"City",required:!1,value:""},{comp:"CardAddBilling",name:"State",required:!1,value:""},{comp:"CardAddBilling",name:"Zip",required:!1,value:""}],playSound:0,primaryPhone:0,primaryEmail:0,usStates:["AK Alaska","AL Alabama","AR Arkansas","AZ Arizona","CA California","CO Colorado","CT Connecticut","DC District of Columbia","DE Delaware","FL Florida","GA Georgia","HI Hawaii","IA Iowa","ID Idaho","IL Illinois","IN Indiana","KS Kansas","KY Kentucky","LA Louisiana","MA Massachusetts","MD Maryland","ME Maine","MI Michigan","MN Minnesota","MO Missouri","MS Mississippi","MT Montana","NC North Carolina","ND North Dakota","NE Nebraska","NH New Hampshire","NJ New Jersey","NM New Mexico","NV Nevada","NY New York","OH Ohio","OK Oklahoma","OR Oregon","PA Pennsylvania","PR Puerto Rico","RI Rhode Island","SC South Carolina","SD South Dakota","TN Tennessee","TX Texas","UT Utah","VA Virginia","VT Vermont","WA Washington","WI Wisconsin","WV West Virginia","WY Wyoming"]},mutations:{setSound:function(t,e){t.playSound=e},setPrimaryPhone:function(t,e){t.primaryPhone=e},setPrimaryEmail:function(t,e){t.primaryEmail=e}},actions:{}});i["a"].config.productionTip=!1,new i["a"]({store:Nt,render:function(t){return t(Dt)}}).$mount("#app");var Ot={audio:!1},$t=window.AudioContext||!1;if($t){Ot.audio=!0;var jt=new $t,Rt=new XMLHttpRequest,qt=new Array(8),Lt={sound_max:7,sound_current:1};setTimeout(function(){Bt()},4800)}function Bt(){Rt.open("GET","au/a".concat(Lt.sound_current,".mp3"),!0),Rt.responseType="arraybuffer",Rt.send(),Rt.onload=Yt}function Yt(){jt.decodeAudioData(Rt.response,function(t){qt[Lt.sound_current]=t,Lt.sound_current+=1,Lt.sound_current<=Lt.sound_max&&(Rt=new XMLHttpRequest,Rt.responseType="arraybuffer",Bt(Lt.sound_current))})}function Zt(t){if(!0===Ot.audio)try{var e=jt.createBufferSource(),a=jt.createGain();e.buffer=qt[t],e.connect(a),a.connect(jt.destination),e.connect(jt.destination),e.start(jt.currentTime)}catch(i){}}i["a"].prototype.playAudioFile=Zt,document.addEventListener("contextmenu",function(t){Zt(7)})},6551:function(t,e,a){"use strict";var i=a("9f46"),r=a.n(i);r.a},"894d":function(t,e,a){},"9f46":function(t,e,a){},a6bb:function(t,e,a){},b501:function(t,e,a){"use strict";var i=a("dafc"),r=a.n(i);r.a},c76a:function(t,e,a){"use strict";var i=a("894d"),r=a.n(i);r.a},cb99:function(t,e,a){},dafc:function(t,e,a){},f72a:function(t,e,a){"use strict";var i=a("cb99"),r=a.n(i);r.a},fda6:function(t,e,a){"use strict";var i=a("261c"),r=a.n(i);r.a}});
//# sourceMappingURL=app.4735f729.js.map