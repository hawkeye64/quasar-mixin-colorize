(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21e402"],{d583:function(o,t,n){"use strict";n.r(t);var r=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[n("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-color",{model:{value:o.bgColor,callback:function(t){o.bgColor=t},expression:"bgColor"}})],1)],1)]},proxy:!0}]),model:{value:o.bgColor,callback:function(t){o.bgColor=t},expression:"bgColor"}})],1),n("q-separator"),n("div",{staticClass:"q-pa-md row justify-around"},[n("my-component",{attrs:{"bg-color":o.bgColor}},[n("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)],1)},e=[],s=n("2b0e"),a=n("dda6"),i=s["a"].extend({name:"my-component",mixins:[a["b"]],props:{bgColor:String},data:function(){return{}},render:function(o){return o("div",this.setBackgroundColor(this.bgColor,{style:{width:"200px",height:"200px"}}))}}),l={components:{MyComponent:i},data:function(){return{bgColor:"#FF0000"}}},c=l,u=n("2877"),d=Object(u["a"])(c,r,e,!1,null,null,null);t["default"]=d.exports}}]);