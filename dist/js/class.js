"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}require(["./config"],function(){require(["template","header","footer","fly","jquery","bootstrap"],function(u,n){new(function(){function e(){var t=this;_classCallCheck(this,e),this.getList().then(function(){t.addToCart(),t.myLove()})}return _createClass(e,[{key:"getList",value:function(){var s=this,f=location.search.slice(4,5)-0;return console.log(f),new Promise(function(c){$.get("http://www.xiongmaoyouxuan.com/api/tab/".concat(f),{start:0,sort:1},function(t){var e,o,i=!1;if(7==f&&(i=!0,e=decodeURIComponent(location.search.slice(12))),console.log(t,"1111"),200===t.code){var l=t.data.items.list;l=l.filter(function(t){if(t.saleNum)return t}),console.log(l,"888"),i&&(l=l.filter(function(t){if(-1!==t.title.indexOf(e))return t})),console.log(l),s.detail={list:l};var n=l.filter(function(t,e){if(e/16<1)return t}),r=l.filter(function(t,e){if(1<=e/16)return t});console.log("detailList:",s.detail.list),console.log(l),$("#list").html(u("listTemplate",{list:n})),$("#page1").on("click",function(){$("#list").html(u("listTemplate",{list:n})),$("html,body").scrollTop(0)}),$("#page2").on("click",function(){$("#list").html(u("listTemplate",{list:r})),$("html,body").scrollTop(0)});var a=(o="saleNum",l.sort(function(t,e){return e[o]-t[o]}));console.log("排序后：",a),$("#soldList").html(u("soldListTemplate",{list0:a.slice(0,6)})),c()}})})}},{key:"addToCart",value:function(){var n=this;$(".add").on("click",function(t){var e=$(this).parents(".good").find(".select").val()-0;console.log("plusNum:",e);var o,i=$(this).parents(".good").data("id");console.log("id:",i),n.fly(t,i,n.detail.list),n.detail.list.map(function(t){t.id===i&&(o=t)}),console.log(o);var l=localStorage.getItem("cart");l?(l=JSON.parse(l),console.log("cart:",l),l.some(function(t){return t.id===i})?l=l.map(function(t){return t.id===i&&(t.count+=e),t}):l.push({id:o.id,image:o.image,title:o.title,price:o.price,count:e}),localStorage.setItem("cart",JSON.stringify(l))):localStorage.setItem("cart",JSON.stringify([{id:o.id,image:o.image,title:o.title,price:o.price,count:e}]))})}},{key:"fly",value:function(t,e,o){var i,l=e;o.map(function(t){return t.id===l&&(i=t.image),i}),$('<img class="fly" src=\''.concat(i,"'>")).fly({start:{left:t.clientX,top:t.clientY},end:{left:$("#cart").offset().left-$(window).scrollLeft(),top:$("#cart").offset().top-$(window).scrollTop()},speed:.7,onEnd:function(){this.destroy(),n.calcCartCount()}})}},{key:"myLove",value:function(){var t=localStorage.getItem("loveList");t&&(t=JSON.parse(t),console.log("喜欢列表",t)),t=(t=t.filter(function(t){return 1==t.love})).slice(0,6),$("#myLove").html(u("myLoveTemplate",{loveList:t}))}}]),e}())})});