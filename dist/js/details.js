"use strict";function ownKeys(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach(function(e){_defineProperty(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}require(["./config"],function(){require(["template","header","elevateZoom","footer","fly"],function(d,o,e){new(function(){function t(){var e=this;_classCallCheck(this,t),this.render().then(function(){e.addToCart(),e.addImgActive(),e.addSub(),e.addLove()})}return _createClass(t,[{key:"render",value:function(){var u=this,e=location.search.slice(4)-0;return console.log(e),new Promise(function(s){$.get("http://www.xiongmaoyouxuan.com/api/detail",{id:e},function(e){if(console.log(e.data.detail),200===e.code){var t=e.data.detail,o=t.id,n=t.photo,r=t.title,i=t.price,l=t.originPrice;u.detail={id:o,photo:n,title:r,price:i,originPrice:l},$("#design").html(d("designTemplate",_objectSpread({},u.detail)));var a=localStorage.getItem("loveList");if(a){a=JSON.parse(a);var c=null;a.forEach(function(e){e.id===o&&(c=e.love)}),console.log(c),c&&$("#love").css("color","red")}s()}})})}},{key:"addToCart",value:function(){var n=this;$(".btn2").on("click",function(e){console.log("点击了");var t=n.addSub();console.log("输入框数量为：",t),n.fly(e);var o=localStorage.getItem("cart");o?((o=JSON.parse(o)).some(function(e){return e.id===n.detail.id})?o=o.map(function(e){return e.id===n.detail.id&&(e.count+=t),e}):o.push({id:n.detail.id,image:n.detail.photo[0].url,title:n.detail.title,price:n.detail.price,count:t}),localStorage.setItem("cart",JSON.stringify(o))):localStorage.setItem("cart",JSON.stringify([{id:n.detail.id,image:n.detail.photo[0].url,title:n.detail.title,price:n.detail.price,count:t}]))})}},{key:"fly",value:function(e){$('<img class="fly" src="'.concat(this.detail.photo[0].url,'">')).fly({start:{left:e.clientX,top:e.clientY},end:{left:$("#cart").offset().left-$(window).scrollLeft(),top:$("#cart").offset().top-$(window).scrollTop()},speed:.7,onEnd:function(){this.destroy(),o.calcCartCount()}})}},{key:"addImgActive",value:function(){$(".zoom-image").elevateZoom({gallery:"gal1"})}},{key:"addSub",value:function(){var t=$("#num").val()-0;return console.log(t),$("#sub").on("click",function(){if(1==t)return 0;t--,$("#num").val(t)}),$("#add").on("click",function(){t++,$("#num").val(t)}),$("#num").on("blur",function(){var e=parseInt(document.querySelector("#num").value);console.log(e),0<e&&e<100?(console.log("合法"),t=e,$("#num").val(e)):(console.log("不合法"),$("#num").val(1))}),t}},{key:"addLove",value:function(){$("#love").on("click",function(){var n;n="rgb(204, 204, 204)"==$("#love").css("color")?($("#love").css("color","red"),!0):($("#love").css("color","#ccc"),!1),console.log("love:",n);var e=location.search.slice(4)-0;$.get("http://www.xiongmaoyouxuan.com/api/detail",{id:e},function(e){var t=e.data.detail;t.love=n,console.log("喜欢项：",t);var o=localStorage.getItem("loveList");o?((o=JSON.parse(o)).some(function(e){return e.id===t.id})?(console.log("已存在"),o=o.map(function(e){return e.id===t.id&&(console.log(n),e.love=n),e})):o.push(_objectSpread({},t)),console.log(o,"000"),localStorage.setItem("loveList",JSON.stringify(o))):localStorage.setItem("loveList",JSON.stringify([_objectSpread({},t)]))})})}}]),t}())})});