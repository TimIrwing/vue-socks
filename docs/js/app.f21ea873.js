(function(t){function e(e){for(var n,i,c=e[0],o=e[1],u=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var o=r[c];0!==s[o]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"28e0":function(t,e,r){t.exports=r.p+"img/blueSocks.93947685.jpg"},4536:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"nav"},[r("ul",{staticClass:"nav__content"},[t._m(0),r("li",[r("Cart",{attrs:{cart:t.cart}})],1)])]),r("Product",{attrs:{product:t.product},on:{"add-to-cart":t.pushToCart}})],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("h1",{staticClass:"title"},[t._v("Vue Socks")])])}],i=r("2fa7"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"product"},[r("div",{staticClass:"product-image"},[r("img",{attrs:{src:t.current.imageSrc,alt:"Socks"}})]),r("div",{staticClass:"product-info"},[r("h2",[t._v(" "+t._s(t.product.name)+" ")]),r("h3",[r("span",{staticClass:"price",class:{price_inactive:t.current.price.sale},attrs:{"aria-label":"price"}},[t._v(" "+t._s(t.current.price.default)+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"price",attrs:{"aria-label":"price on sale"}},[t._v(" "+t._s(t.current.price.sale)+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"sale"},[t._v("On Sale!")])]),r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory>25,expression:"inventory > 25"}]},[t._v(" In Stock ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=25&&t.inventory>0,expression:"inventory <= 25 && inventory > 0"}]},[t._v(" Almost sold out! ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=0,expression:"inventory <= 0"}]},[t._v(" Out of Stock ")])]),r("ul",t._l(t.product.details,(function(e){return r("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0),r("ul",{staticClass:"buttonList"},t._l(t.product.variants,(function(e,n){return r("li",{key:e.id},[r("label",{staticClass:"squareButton",attrs:{"aria-label":e.colorDesc}},[r("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"color"},domProps:{checked:0===n},on:{change:function(e){return t.updateProduct(n)}}}),r("span",{staticClass:"colorBtn__inside",style:{"background-color":e.bgColor}})])])})),0),r("ul",{staticClass:"buttonList"},t._l(t.current.sizes,(function(e,n){return r("li",{key:n},[r("label",{staticClass:"squareButton squareButton_small"},[r("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"size"},domProps:{checked:t.size===n},on:{change:function(e){t.size=n}}}),r("span",{staticClass:"sizeBtn__text"},[t._v(t._s(n))])])])})),0),r("p",{staticClass:"itemsLeft",attrs:{role:"status","aria-live":"polite"}},[t._v(t._s(t.modelCount)+" pieces available")]),r("button",{staticClass:"toCart",attrs:{disabled:!t.current.sizes[t.size]},on:{click:function(e){return t.$emit("add-to-cart",t.current,t.size)}}},[t._v(" Add to Cart ")])])])},o=[],u=(r("b64b"),{name:"Product",props:{product:{type:Object,required:!0}},data:function(){return{selected:0,size:null}},computed:{modelCount:function(){var t=this.current.sizes[this.size];return void 0!==t?t:this.inventory},current:function(){return this.product.variants[this.selected]},inventory:function(){var t=this;return Object.keys(this.current.sizes).reduce((function(e,r){return e+t.current.sizes[r]}),0)}},methods:{updateProduct:function(t){this.selected=t,this.size=null}}}),l=u,p=(r("89df"),r("2877")),d=Object(p["a"])(l,c,o,!1,null,"7e99c8c8",null),f=d.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Cart ["+t._s(t.totalCount)+"] ")])},h=[],m=(r("159b"),{name:"Cart",props:{cart:{type:Object,required:!0}},computed:{totalCount:function(){var t=this,e=0;return Object.keys(this.cart).forEach((function(r){var n=t.cart[r].selectedSizes;e+=Object.keys(n).reduce((function(t,e){return t+n[e]}),0)})),e}}}),b=m,_=Object(p["a"])(b,v,h,!1,null,"3c055e34",null),y=_.exports,C=r("b7f2"),g=r.n(C),w=r("28e0"),S=r.n(w),j={name:"App",components:{Cart:y,Product:f},methods:{pushToCart:function(t,e){var r=this.cart[t.id];void 0===r?this.$set(this.cart,t.id,{obj:t,selectedSizes:Object(i["a"])({},e,1)}):this.incrementCart(t.id,e)},incrementCart:function(t,e){var r=this.cart[t].obj.sizes[e],n=this.cart[t].selectedSizes;n[e]?n[e]<r&&(n[e]+=1):this.$set(n,e,1)}},data:function(){return{cart:{},product:{name:"Socks",details:["80% cotton","20% polyester","Unisex"],variants:[{id:2234,colorDesc:"mint green",bgColor:"#359264",imageSrc:g.a,price:{default:"$4.99",sale:"$2.99"},sizes:{XS:0,S:3,M:7,L:4,XL:2}},{id:2235,colorDesc:"dark blue",bgColor:"#405267",imageSrc:S.a,price:{default:"$4.99"},sizes:{XS:2,S:6,M:15,L:0,XL:9}}]}}}},O=j,k=(r("034f"),Object(p["a"])(O,s,a,!1,null,null,null)),z=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},"85ec":function(t,e,r){},"89df":function(t,e,r){"use strict";var n=r("4536"),s=r.n(n);s.a},b7f2:function(t,e,r){t.exports=r.p+"img/greenSocks.fcf06f2c.jpg"}});