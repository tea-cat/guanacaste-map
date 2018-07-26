parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={style:"mapbox://styles/guanacaste/cjj079axn0aqu2so55fx6ln2x",center:[-85.61365526723557,10.838261234356153],zoom:9.619976883678385},s="pk.eyJ1IjoiZ3VhbmFjYXN0ZSIsImEiOiJjamowNzhuYnAwZXU2M2txczhsc21mbDVsIn0.amJMu3O1jfjcbg-B1qC7ww";exports.default={LAYER_ID:"toggle-turismo",SOURCE_LAYER:"Turismo",ANIMATION_DURATION:2e3,LEGEND_TITLE:"Puestos Estaciónes y Tourismos",ACCESS_TOKEN:s,MAP:e,SOURCE_TYPES:[{name:"biological",label:"Biological",icon:'<svg><use href="assets/svg/information-11.svg"></use></svg>'},{name:"tourist",label:"Touristo"}],LAYERS:{"toggle-turismo":{label:"Turismo",color:"#CCCC00"},"toggle-unesco":{label:"UNESCO",color:"#CCCC00",shape:"line"},"toggle-sectores":{label:"Sectores",color:"#449438",shape:"square"},"toggle-ecosistemas":{label:"Ecosistemas",color:"#000000",shape:"square"}}};
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(n){return'<div class="popup-header">\n    <h3>\n        <a\n          href="'+n.properties.link+'"\n          >\n          '+n.properties.Estación+'\n        </a>\n    </h3>\n    <div class="popup-image">\n        <a\n          href="'+n.properties.link+'"\n          >\n          <img\n            src="'+n.properties.Image+'"\n            alt="Image del Estación '+n.properties.Estación+'"\n          />\n        </a>\n      \n    </div>\n  </div>\n  <div class="popup-content">\n    <div class="popup-description">\n      <p>'+n.properties.description+'</p>\n    </div>\n    <a\n      class="popup-button"\n      href="'+n.properties.link+'"\n      >\n      Más informacíon\n    </a>\n  </div>\n  '};
},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){return'<div>\n\t    <h4>Puestos Estaciónes y Tourismos</h4>\n\t\t\t<div id="legend-items">\n          '+e.map(function(e){return'<div class="legend-item active" id="'+e.name+'" onClick="handleFilter(\''+e.name+"', '"+(e.type||"symbol")+'\')">\n                  <span class="legend-key" style="background-color: '+e.color+'"></span>\n                  <span class="label">'+e.label+"</span>\n                </div>"}).join("")+'\n          <div onClick="noFilter()">Toggle Off Filters</div>\n\t\t\t</div>\n\t</div>'};
},{}],6:[function(require,module,exports) {
"use strict";var e=require("./config"),t=a(e),n=require("./components/popup"),o=a(n),r=require("./components/legend"),l=a(r);function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c=t.default.ACCESS_TOKEN,u=t.default.MAP,s=t.default.LAYER_ID,d=t.default.ANIMATION_DURATION,m=t.default.SOURCE_TYPES,f=t.default.LAYERS,g={container:"map"};mapboxgl.accessToken=c;var p=new mapboxgl.Map(Object.assign(g,u));window.map=p;var y=new mapboxgl.Popup,b=function(e){return y.setLngLat(e.geometry.coordinates).setHTML((0,o.default)(e)).addTo(p),y.on("close",function(){p.flyTo({center:g.center,duration:d})}),y};function v(){var e=document.querySelector(".mapboxgl-ctrl-bottom-left"),t=document.createElement("div");t.innerHTML='<div class="mapboxgl-ctrl mapboxgl-ctrl-group">\n      <button class="mapboxgl-ctrl-icon mapboxgl-ctrl-compass" type="button" aria-label="Reset North">\u2028\n      <span class="mapboxgl-ctrl-compass-arrow" style="transform: rotate(0deg);"></span>\u2028\n    </button>\u2028\n  </div>',t.onclick=function(){p.flyTo({center:g.center})},e.appendChild(t)}p.on("click",s,function(e){var t=e.features[0];setTimeout(function(){p.flyTo({center:t.geometry.coordinates,duration:d}),b(t)},200)}),p.addControl(new mapboxgl.FullscreenControl);var w={};p.on("load",function(){var e=new mapboxgl.NavigationControl({showCompass:!1});p.addControl(e,"top-left"),p.scrollZoom.disable(),v();var t=p.getStyle().layers.filter(function(e){var t=e.id;return"toggle-"===t.substring(0,7)&&"toggle-turismo"!==t});t=t.map(function(e){return{name:e.id,label:f[e.id]?f[e.id].label:e.id.substring(7),type:"layer",color:f[e.id]?f[e.id].color:"darkgrey"}}),document.getElementById("legend").innerHTML=(0,l.default)([].concat(i(m),i(t))),window.handleFilter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;w[e]=!w[e];var n=w[e];if(document.getElementById(e).classList.toggle("active"),"symbol"!==t)p.setLayoutProperty(e,"visibility",n?"none":"visible");else{var o=Object.keys(w).filter(function(e){return w[e]});p.setFilter(s,[n?"in":"!in","symbol"].concat(i(o)))}},window.noFilter=function(){p.setFilter(s,null),t.map(function(e){return p.setLayoutProperty(e.name,"visibility","visible")}),w={},document.querySelector(".legend-item").classList.add("active")}}),document.body.addEventListener("keydown",function(e){var t=e.metaKey,n=e.ctrlKey;(t||n)&&p.scrollZoom.enable()}),document.body.addEventListener("keyup",function(e){var t=e.metaKey,n=e.ctrlKey;(t||n)&&p.scrollZoom.disable()});
},{"./config":11,"./components/popup":12,"./components/legend":13}]},{},[6], null)
//# sourceMappingURL=/guanacaste-map/src.f1527283.map