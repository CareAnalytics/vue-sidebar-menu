!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sidebar-menu"]=e():t["vue-sidebar-menu"]=e()}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=6)}([function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});var s={data:function(){return{active:!1,childActive:!1,itemShow:!1}},created:function(){var t=this;this.active=!(!this.item||void 0===this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child),this.item&&this.item.child&&(this.showChild?this.itemShow=!0:(this.itemShow=this.isLinkActive(this.item)||this.isChildActive(this.item.child),this.showOneChild&&!this.showChild&&(this.active||this.childActive)&&this.firstItem&&this.emitActiveShow(this._uid))),this.$router||window.addEventListener("hashchange",function(){t.active=!(!t.item||void 0===t.item.href)&&t.isLinkActive(t.item),t.childActive=!(!t.item||!t.item.child)&&t.isChildActive(t.item.child)})},methods:{toggleDropdown:function(){this.itemShow=!this.itemShow},isLinkActive:function(t){return this.formActiveStepData?t.title==this.formActiveStepData.title:this.$route?t.href===this.$route.path+this.$route.hash:t.href===window.location.pathname+window.location.hash},isChildActive:function(t){var e=!0,i=!1,s=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var o=n.value;if(this.isLinkActive(o))return!0;if(o.child&&this.isChildActive(o.child))return!0}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}return!1},clickEvent:function(t,e){if(this.emitItemClick(t,this.item),this.item.disabled||e&&void 0===this.item.href)t.preventDefault();else if(this.isCollapsed&&this.firstItem&&!this.item.child&&this.$parent.$emit("clickItem"),!e&&this.item.child){if(this.isCollapsed&&this.firstItem)return void t.preventDefault();this.isRouterLink?this.firstItem&&this.showOneChild&&!this.showChild?this.active&&this.activeShow.uid===this._uid?(this.itemShow=!1,this.emitActiveShow(null)):(this.itemShow=!0,this.emitActiveShow(this._uid)):this.active?this.toggleDropdown():this.itemShow=!0:void 0===this.item.href&&(t.preventDefault(),this.firstItem&&this.showOneChild&&!this.showChild?this.activeShow.uid===this._uid?(this.itemShow=!1,this.emitActiveShow(null)):(this.itemShow=!0,this.emitActiveShow(this._uid)):this.toggleDropdown())}else e||this.isCollapsed||!this.firstItem||this.item.child||this.emitActiveShow(null)}},computed:{isRouterLink:function(){return this.$router&&this.item&&void 0!==this.item.href},show:function(){return!(!this.item||!this.item.child)&&(this.firstItem&&this.showOneChild&&!this.showChild?!!this.activeShow.uid&&this._uid===this.activeShow.uid:this.itemShow)}},watch:{$route:function(){this.active=!(!this.item||void 0===this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)},formActiveStepData:{handler:function(){this.active=!(!this.item||void 0===this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child),this.childActive&&this.emitActiveShow(this._uid)},deep:!0,immediate:!0}},inject:["showChild","showOneChild","emitActiveShow","activeShow","emitItemClick","rtl"]},n={methods:{expandEnter:function(t){t.style.height=t.scrollHeight+"px"},expandAfterEnter:function(t){t.style.height="auto"},expandBeforeLeave:function(t){this.isCollapsed?t.style.display="none":t.style.height=t.scrollHeight+"px"}}}},function(t,e,i){"use strict";function s(t,e,i,s,n,a,o,l){var c,r="function"==typeof t?t.options:t;if(e&&(r.render=e,r.staticRenderFns=i,r._compiled=!0),s&&(r.functional=!0),a&&(r._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},r._ssrRegister=c):n&&(c=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(r.functional){r._injectStyles=c;var h=r.render;r.render=function(t,e){return c.call(e),h(t,e)}}else{var m=r.beforeCreate;r.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:r}}i.d(e,"a",function(){return s})},function(t,e,i){"use strict";i.r(e);var s=i(4),n=i(0),a={components:{SubItem:s.a},mixins:[n.b,n.a],props:{item:{type:Object,required:!0},firstItem:{type:Boolean,default:!1},isCollapsed:{type:Boolean},formActiveStepData:{type:Object}},methods:{mouseEnter:function(t){this.isCollapsed&&this.firstItem&&this.$parent.$emit("mouseEnterItem",{item:this.item,pos:t.currentTarget.getBoundingClientRect().top-this.$parent.$el.getBoundingClientRect().top,height:this.$el.offsetHeight})}}},o=i(1),l=Object(o.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"first-item":t.firstItem},{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}],on:{mouseenter:function(e){t.mouseEnter(e)}}},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]:[i("a",{staticClass:"vsm-link",attrs:{href:void 0!==t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:t.clickEvent}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)],t._v(" "),t.item.child?[t.isCollapsed?t._e():[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(e,s){return i("sub-item",{directives:[{name:"show",rawName:"v-show",value:void 0===e.hidden||!e.hidden,expression:"typeof subItem.hidden != 'undefined' ? !subItem.hidden : true"}],key:s,attrs:{item:e,formActiveStepData:t.formActiveStepData}})}),1)]):t._e()])]]:t._e()],2)},[],!1,null,null,null);l.options.__file="Item.vue";e.default=l.exports},function(t,e,i){},function(t,e,i){"use strict";var s=i(2),n=i(0),a={components:{Item:s.default},mixins:[n.b,n.a],props:{item:{type:Object,required:!0},formActiveStepData:{type:Object}},beforeCreate:function(){this.$options.components.Item=i(2).default}},o=i(1),l=Object(o.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])]:[i("a",{staticClass:"vsm-link",attrs:{href:void 0!==t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:t.clickEvent}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])],t._v(" "),t.item.child?[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(e,s){return i("item",{directives:[{name:"show",rawName:"v-show",value:void 0===e.hidden||!e.hidden,expression:"typeof subItem.hidden != 'undefined' ? !subItem.hidden : true"}],key:s,attrs:{item:e,formActiveStepData:t.formActiveStepData}})}),1)]):t._e()])]:t._e()],2)},[],!1,null,null,null);l.options.__file="SubItem.vue";e.a=l.exports},function(t,e,i){"use strict";var s=i(3);i.n(s).a},function(t,e,i){"use strict";i.r(e);var s=i(2),n=i(4),a=i(0),o={mixins:[a.b],props:{item:{type:Object,default:null},formActiveStepData:{type:Object}},watch:{item:function(){this.active=!(!this.item||void 0===this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)}}},l=i(1),c=Object(l.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("div",{staticClass:"vsm-item mobile-item",class:[{"open-item":t.item.child},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v("\n      "+t._s(t.item.title)+"\n      "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()])]:[i("a",{staticClass:"vsm-link",attrs:{href:void 0!==t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.item.badge?i("span",{staticClass:"vsm-badge",class:[t.item.badge.class?t.item.badge.class:"default-badge"],style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},[t._v(t._s(t.item.badge.text))]):t._e(),t._v("\n      "+t._s(t.item.title)+"\n      "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()])]],2):t._e()},[],!1,null,null,null);c.options.__file="MobileItem.vue";var r=c.exports,h={name:"SidebarMenu",components:{Item:s.default,SubItem:n.a,MobileItem:r},mixins:[a.a],props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"350px"},widthCollapsed:{type:String,default:"50px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},formActiveStepData:{type:Object}},data:function(){return{isCollapsed:this.collapsed,mobileItem:null,mobileItemPos:0,mobileItemHeight:0,closeTimeout:null,activeShow:null}},computed:{sidebarWidth:function(){return this.isCollapsed?this.widthCollapsed:this.width}},watch:{collapsed:function(t){this.isCollapsed=t}},created:function(){var t=this;this.$on("mouseEnterItem",function(e){t.mobileItem=null,t.$nextTick(function(){t.mobileItem=e.item,t.mobileItemPos=e.pos,t.mobileItemHeight=e.height})}),this.$on("clickItem",function(){t.closeTimeout&&clearTimeout(t.closeTimeout),t.closeTimeout=setTimeout(function(){t.mouseLeave()},600)})},methods:{mouseLeave:function(){this.mobileItem=null},toggleCollapse:function(){this.isCollapsed=!this.isCollapsed,this.$emit("collapse",this.isCollapsed)},onActiveShow:function(t){this.activeShow=t},onItemClick:function(t,e){this.$emit("itemClick",t,e)}},provide:function(){var t=this,e={};return Object.defineProperty(e,"uid",{enumerable:!0,get:function(){return t.activeShow}}),{showChild:this.showChild,showOneChild:this.showOneChild,emitActiveShow:this.onActiveShow,activeShow:e,emitItemClick:this.onItemClick,rtl:this.rtl}}},m=(i(5),Object(l.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-sidebar-menu",class:[t.isCollapsed?"vsm-collapsed":"vsm-default",t.theme,t.rtl?"rtl":""],style:{width:t.sidebarWidth},on:{mouseleave:t.mouseLeave}},[i("div",{staticClass:"vsm-list"},[t._l(t.menu,function(e,s){return[e.header?[!e.visibleOnCollapse&&t.isCollapsed||!e.component?e.visibleOnCollapse||!t.isCollapsed?[i("div",{key:s,staticClass:"vsm-header"},[t._v("\n            "+t._s(e.title)+"\n          ")])]:t._e():[i(e.component,{key:s,tag:"component"})]]:i("item",{directives:[{name:"show",rawName:"v-show",value:void 0===e.hidden||!e.hidden,expression:"typeof item.hidden != 'undefined' ? !item.hidden : true"}],key:s,attrs:{item:e,"first-item":!0,"is-collapsed":t.isCollapsed,formActiveStepData:t.formActiveStepData}})]})],2),t._v(" "),t.isCollapsed?i("div",{style:[{position:"absolute"},{top:t.mobileItemPos+"px"},t.rtl?{right:"0px"}:{left:"0px"},{"z-index":30},{width:t.width}]},[i("mobile-item",{attrs:{item:t.mobileItem}}),t._v(" "),i("transition",{attrs:{name:"slide-animation"}},[t.mobileItem?i("div",{staticClass:"vsm-mobile-bg",style:[{position:"absolute"},{left:"0px"},{right:"0px"},{top:"0px"},{height:t.mobileItemHeight+"px"}]}):t._e()]),t._v(" "),i("div",{staticClass:"vsm-dropdown",style:[{position:"absolute"},{top:t.mobileItemHeight+"px"},{left:t.rtl?"0px":t.sidebarWidth},{right:t.rtl?t.sidebarWidth:"0px"},{"max-height":"calc(100vh - "+(t.mobileItemPos+t.mobileItemHeight)+"px)"},{"overflow-y":"auto"}]},[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.mobileItem&&t.mobileItem.child?i("div",{staticClass:"vsm-list"},t._l(t.mobileItem.child,function(e,s){return i("sub-item",{directives:[{name:"show",rawName:"v-show",value:void 0===e.hidden||!e.hidden,expression:"typeof subItem.hidden != 'undefined' ? !subItem.hidden : true"}],key:s,attrs:{item:e,formActiveStepData:t.formActiveStepData}})}),1):t._e()])],1)],1):t._e(),t._v(" "),i("button",{staticClass:"collapse-btn",on:{click:t.toggleCollapse}})])},[],!1,null,null,null));m.options.__file="SidebarMenu.vue";var d=m.exports;i.d(e,"SidebarMenu",function(){return d});e.default={install:function(t){t.component("sidebar-menu",d)}}}])});
//# sourceMappingURL=vue-sidebar-menu.js.map