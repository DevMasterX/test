const t=[{id:1,img:"https://shop.avto-dreamcar.ru/upload/iblock/2b3/e4jh4p4c00mobxc056pksno4ye62hwk9.jpg",name:"Шуруповерт",price:150,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://alteco.kz/uploads/2/images/Lwthgh4s.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://www.motoblok.biz/uploads/c9/0a/2c80eec2b014233a4677349a74460ac9.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://boltzavod.ru/wp-content/uploads/2019/02/02-kak-pravilno-polzovatsya-urovnem.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{id:6,img:"https://baucenter.ru/upload/medialibrary/!_Sovety/trimmer/preview-trimmer.webp",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{id:7,img:"https://budprocat.com/assets/images/products/116/%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%BC%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D1%81%D1%8B%20STIHL%20FS%2055.png",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://www.firman.biz/images/2016/10/11/IyXU1Yh6zJXWpBxm7wuAvbeGudNCzq.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}];var n={};function e(t){"Escape"===t.code&&this.close()}n=function t(n,e,o){function i(a,s){if(!e[a]){if(!n[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var l=e[a]={exports:{}};n[a][0].call(l.exports,(function(t){return i(n[a][1][t]||t)}),l,l.exports,t,n,e,o)}return e[a].exports}for(var r=void 0,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var o=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");return e.innerHTML=t.trim(),!0===n?e.children:e.firstChild},i=function(t,n){var e=t.children;return 1===e.length&&e[0].tagName===n},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};e.visible=r,e.create=function(t,n){var e=function(t,n){var e=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=e.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var a=i(r,"IMG"),s=i(r,"VIDEO"),c=i(r,"IFRAME");return!0===a&&e.classList.add("basicLightbox--img"),!0===s&&e.classList.add("basicLightbox--video"),!0===c&&e.classList.add("basicLightbox--iframe"),e}(t=function(t){var n="string"==typeof t,e=t instanceof HTMLElement==1;if(!1===n&&!1===e)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(n)),a=function(t){return!1!==n.onClose(s)&&function(t,n){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),n()}),410),!0}(e,(function(){if("function"==typeof t)return t(s)}))};!0===n.closable&&e.addEventListener("click",(function(t){t.target===e&&a()}));var s={element:function(){return e},visible:function(){return r(e)},show:function(t){return!1!==n.onShow(s)&&function(t,n){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),n()}))}),10),!0}(e,(function(){if("function"==typeof t)return t(s)}))},close:a};return s}},{}]},{},[1])(1);$c0d351fe1bc40a39$export$f5cb82f0aad40ad6=[];const o=document.querySelector(".js-list");!function(t,n){let e;e=t.length?t.map((({id:t,img:n,name:e})=>`\n       <li data-id='${t}' class='js-card'>\n      <img src="${n}" alt="${e}" width='300'>\n      <h2>${e}</h2>\n      \n      <p ><a class='js-info' href='#'>More information</a></p>\n      <button class='favoriteBtn'>Add to favorite</button>\n      <button class='basketBtn'>Add to basket</button>\n    </li>\n    `)).join(""):"<li >\n      <img src=\"https://www.ouinolanguages.com/assets/French/vocab/8/images/pic7.jpg\"  width='700'>\n      \n    </li>",n.innerHTML=e}(t,o),o.addEventListener("click",(function(o){if(o.preventDefault(),o.target.classList.contains("js-info")){const r=Number(o.target.closest(".js-card").dataset.id),a=t.find((t=>t.id===r));i=a,n.create(`\n<div class='modal'>\n<button class='closeModalBtn'>X</button>\n      <img src="${i.img}" alt="${i.name}" width='600'/>\n      <h2>${i.name}</h2>\n\n      <p >${i.description}</p>\n      <button class='favoriteBtn'>Add to favorite</button>\n      <button class='basketBtn'>Add to basket</button>\n</div>\n    `,{handler:null,onShow(t){this.handler=e.bind(t),window.addEventListener("keydown",this.handler)},onClose(){window.removeEventListener("keydown",this.handler)}}).show()}var i;if(o.target.classList.contains("favoriteBtn")){const n=Number(o.target.closest(".js-card").dataset.id),e=t.find((t=>t.id===n));if(console.log("🚀  elementToSave:",e),$c0d351fe1bc40a39$export$f5cb82f0aad40ad6.some((t=>t.id===n)))return;$c0d351fe1bc40a39$export$f5cb82f0aad40ad6.push(e),localStorage.setItem("favorite",JSON.stringify($c0d351fe1bc40a39$export$f5cb82f0aad40ad6))}}));
//# sourceMappingURL=index.914ca505.js.map