webpackJsonp([1],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i=e("zL8q"),a=e.n(i),s=(e("tvR6"),e("znjY")),r=e.n(s),c=e("BO1k"),l=e.n(c),u=e("/+CH"),d=e.n(u),h={name:"ConnectionLink",components:{QrcodeVue:e("Z1I5").a},props:{localId:{type:String,default:""}},computed:{linkURL:function(){return location.href+"?q="+this.localId}}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"connection-link"},[n("p",[this._v("スマホでQRコードをスキャンしてPCと接続します。")]),n("QrcodeVue",{attrs:{value:this.linkURL,size:"200",level:"H",className:"qrcode"}}),n("a",{staticClass:"link-string",attrs:{href:this.linkURL,target:"_blank"},domProps:{textContent:this._s(this.linkURL)}})],1)},staticRenderFns:[]};var f=e("VU/8")(h,p,!1,function(t){e("dO1O")},"data-v-1ff2e18d",null).exports,v={name:"TextInput",props:{connection:{type:Object,required:!0}},data:function(){return{text:""}},created:function(){var t=this;this.connection.on("data",function(n){t.text=n})},methods:{updateText:function(t){this.text=t.target.value,this.connection.send(this.text)}}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"text-input"},[n("p",[this._v("以下のテキストボックスに入力した内容が接続先へリアルタイムに反映されます。")]),n("el-row",[n("el-col",{attrs:{xs:24,sm:{span:22,offset:1},md:{span:20,offset:2},lg:{span:18,offset:3},xl:{span:16,offset:4}}},[n("textarea",{attrs:{autocapitalize:"none",autocomplete:"off"},domProps:{value:this.text},on:{input:this.updateText}})])],1)],1)},staticRenderFns:[]};var x={name:"App",components:{ConnectionLink:f,TextInput:e("VU/8")(v,m,!1,function(t){e("yIeB")},"data-v-3a8406bd",null).exports},created:function(){this.parseQuery(),this.setupPeer()},data:function(){return{loading:null,peer:null,dataConnection:null,localId:"",remoteId:""}},computed:{shouldShowLink:function(){return this.localId&&!this.remoteId&&!(this.dataConnection&&this.dataConnection.open)},shouldShowTextarea:function(){return this.dataConnection&&this.dataConnection.open}},methods:{parseQuery:function(){var t=location.search.substring(1).split("&"),n=!0,e=!1,o=void 0;try{for(var i,a=l()(t);!(n=(i=a.next()).done);n=!0){var s=i.value.split("=");"q"===s[0]&&(this.remoteId=s[1])}}catch(t){e=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(e)throw o}}},setupPeer:function(){var t=this;this.peer=new d.a({key:"9dd37309-9c0d-433c-86f0-54a02a5ca7ba",debug:3}).on("open",function(n){if(t.localId=n,t.remoteId){var e=t.peer.connect(t.remoteId,{label:"textarea"});t.connect(e)}}).on("connection",function(n){t.connect(n)}).on("error",this.handleError)},connect:function(t){var n=this;this.dataConnection=t,t.on("open",function(){t.on("close",function(){return n.warning(t.remoteId+"との接続が切断されました。")}).on("error",n.handleError)})},message:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.$message({showClose:!0,message:t,type:n})},warning:function(t){this.message(t,"warning")},handleError:function(t){this.message(t.message,"error")}}},g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[this._v("フリック入力ちゃん")]),n("p",[this._v("スマホのフリック入力でPCに文字入力できるサービスです。")]),this.shouldShowLink?n("ConnectionLink",{attrs:{localId:this.localId}}):this.shouldShowTextarea?n("TextInput",{attrs:{connection:this.dataConnection}}):this._e()],1)},staticRenderFns:[]};var I=e("VU/8")(x,g,!1,function(t){e("NY16")},null,null).exports;o.default.use(a.a,{size:"small",locale:r.a}),o.default.config.productionTip=!1,new o.default({el:"#app",components:{App:I},template:"<App/>"})},NY16:function(t,n){},dO1O:function(t,n){},tvR6:function(t,n){},yIeB:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.4e0c1bf7a2362125497f.js.map