function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("UDlvM",(function(t,n){e(t.exports,"common",(function(){return o}));const o={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"}})),i.register("dEdDu",(function(t,n){function o(e,t){let n;n=e.length?e.map((({id:e,img:t,name:n})=>`\n  <li data-id="${e}" class='js-card'>\n      <img src="${t}" alt="${n}" width='300' />\n      <h2>${n}</h2>\n      <p ><a class='js-info' href='#'>More information</a></p>\n      <div>\n        <button class='js-favorite'>Add to favorite</button>\n          <button class='js-basket'>Add to basket</button>\n      </div>\n    </li>\n    `)).join(""):'\n  <li >\n      <img src="https://thumbs.dreamstime.com/b/empty-wicker-basket-black-white-isolated-white-background-basket-empty-wicker-basket-basket-vector-icon-black-white-302325782.jpg" alt="404" width=\'600\' />\n    </li>\n    ',t.innerHTML=n}e(t.exports,"createMarkup",(function(){return o}))})),i.register("l5ICX",(function(t,n){e(t.exports,"createModal",(function(){return a}));var o=i("9B8F0"),r=i("fZsbs");function a(e){o.create(`\n\t   <div class='modal'>\n        <img src="${e.img}" alt="${e.name}" width='300'/>\n        <h2>${e.name}</h2>\n        <h3>${e.price}</h3>\n        <p>${e.description}</p>\n        <div>\n          <button class='js-favorite'>Add to favorite</button>\n          <button class='js-basket'>Add to basket</button>\n        </div>\n      </div>\n    \n`,{handler:null,onShow(e){this.handler=r.closeModal.bind(e),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}}).show()}})),i.register("9B8F0",(function(e,t){e.exports=function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,(function(e){return i(t[a][1][e]||e)}),u,u.exports,e,t,n,o)}return n[a].exports}for(var r=void 0,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var a=i(r,"IMG"),s=i(r,"VIDEO"),c=i(r,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var s={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:a};return s}},{}]},{},[1])(1)})),i.register("fZsbs",(function(t,n){function o(e){"Escape"===e.code&&this.close()}e(t.exports,"closeModal",(function(){return o}))})),i.register("c1Bmg",(function(t,n){e(t.exports,"instruments",(function(){return o}));const o=[{id:1,img:"https://shop.avto-dreamcar.ru/upload/iblock/2b3/e4jh4p4c00mobxc056pksno4ye62hwk9.jpg",name:"Шуруповерт",price:150,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://alteco.kz/uploads/2/images/Lwthgh4s.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://www.motoblok.biz/uploads/c9/0a/2c80eec2b014233a4677349a74460ac9.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://boltzavod.ru/wp-content/uploads/2019/02/02-kak-pravilno-polzovatsya-urovnem.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{id:6,img:"https://baucenter.ru/upload/medialibrary/!_Sovety/trimmer/preview-trimmer.webp",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{id:7,img:"https://budprocat.com/assets/images/products/116/%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%BC%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D1%81%D1%8B%20STIHL%20FS%2055.png",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://www.firman.biz/images/2016/10/11/IyXU1Yh6zJXWpBxm7wuAvbeGudNCzq.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]}));
//# sourceMappingURL=index.3e83c7fe.js.map