(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d5fdf"],{"713b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{attrs:{view:"HHh LpR fFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1),r("q-toolbar-title",[e._v("\n        Colorize - Quasar Demo App\n      ")]),r("div",[e._v("Quasar v"+e._s(e.$q.version))])],1)],1),r("q-drawer",{attrs:{bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[r("q-list",[r("q-item-label",{attrs:{header:""}},[e._v("Essential Links")])],1),r("essential-links")],1),r("q-drawer",{attrs:{side:"right",bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[r("q-scroll-area",{staticClass:"fit"},[r("q-list",{attrs:{dense:""}},e._l(e.toc,function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(r){return e.scrollTo(t.id)}}},[2===t.level?r("q-item-section",{attrs:{side:""}},[e._v("  • ")]):t.level>2?r("q-item-section",{attrs:{side:""}},[e._v("      • ")]):e._e(),r("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)}),1)],1)],1),r("q-page-container",[r("router-view")],1)],1)},o=[],a=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),i=r.n(a),c=r("2f62"),l=r("0831");function s(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u={name:"MainLayout",components:{"essential-links":function(){return r.e("2d0cc070").then(r.bind(null,"4bd0"))}},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},computed:f({},Object(c["b"])({toc:"common/toc"})),mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout(function(){e.scrollTo(t)},200)}},methods:{scrollTo:function(e){this.activeToc=e;var t=document.getElementById(e);t&&this.scrollPage(t)},scrollPage:function(e){var t=e.offsetTop-50;l["a"].setScrollPosition(window,t,500)}}},d=u,p=r("2877"),b=Object(p["a"])(d,n,o,!1,null,null,null);t["default"]=b.exports}}]);