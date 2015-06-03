!function e(t,n,i){function o(r,l){var c,s,u;if(!n[r]){if(!t[r]){if(c="function"==typeof require&&require,!l&&c)return c(r,!0);if(a)return a(r,!0);throw s=Error("Cannot find module '"+r+"'"),s.code="MODULE_NOT_FOUND",s}u=n[r]={exports:{}},t[r][0].call(u.exports,function(e){var n=t[r][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[r].exports}var r,a="function"==typeof require&&require;for(r=0;r<i.length;r++)o(i[r]);return o}({1:[function(e,t,n){"use strict";function i(e){var t,n;if(e&&e.__esModule)return e;if(t={},null!=e)for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){var n,i,o,r=Object.getOwnPropertyNames(t);for(n=0;n<r.length;n++)i=r[n],o=Object.getOwnPropertyDescriptor(t,i),o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o);return e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}var l,c,s,u,f,d,p;Object.defineProperty(n,"__esModule",{value:!0}),l=function(){function e(e,t){var n,i;for(n=0;n<t.length;n++)i=t[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(e,t,n){for(var i,o,r,a,l,c,s=!0;s;){if(i=e,o=t,r=n,a=l=c=void 0,s=!1,a=Object.getOwnPropertyDescriptor(i,o),void 0!==a)return"value"in a?a.value:(c=a.get,void 0===c?void 0:c.call(r));if(l=Object.getPrototypeOf(i),null===l)return void 0;e=l,t=o,n=r,s=!0}},e("./shim/object.mixin"),s=e("./base/event_emitter"),u=e("./base/block"),f=e("./base/separator.js"),d=e("./blocks/index"),o(n,i(d)),p=function(e){function t(){var e=this,n=void 0===arguments[0]?{}:arguments[0];r(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.config=n,this.$root=n.root,this._blocks=(n.blocks||[]).map(function(n,i){var o=u.Block.instantinateBlock(n);return o.on(u.Block.EVENTS.data_changed,function(n,o){return e.fire(t.EVENTS.data_changed_block,[n,o,i])}),o}),this.render()}return a(t,e),l(t,[{key:"render",value:function(){this.$root.innerHTML="",this._blocks.forEach(this._addChild.bind(this))}},{key:"_addChild",value:function(e,t){this.$root.appendChild(e.$el);var n=new f.Separator;this.$root.appendChild(n.$el),n.on(f.Separator.EVENTS.addNewBlock,this.addNewBlock.bind(this,t+1))}},{key:"addNewBlock",value:function(e,n){var i=this,o=u.Block.instantinateBlock({type:n,data:null});o.on(u.Block.EVENTS.data_changed,function(n,o){return i.fire(t.EVENTS.data_changed_block,[n,o,e])}),this._blocks.splice(e,0,o),this.render(),o.fire(u.Block.EVENTS.start_edit)}},{key:"getData",value:function(){return this._blocks.map(function(e){return e.content})}}],[{key:"EVENTS",value:{finish_edit_block:"finish_edit_block.editor",data_changed_block:"data_changed_block.editor"},enumerable:!0}]),t}(s.EventEmitter),n.EditBlockJS=p,window.EditBlockJS=p},{"./base/block":2,"./base/event_emitter":3,"./base/separator.js":4,"./blocks/index":6,"./shim/object.mixin":10}],2:[function(e,t,n){"use strict";function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}var a,l,c,s,u;Object.defineProperty(n,"__esModule",{value:!0}),a=function(){function e(e,t){var n,i;for(n=0;n<t.length;n++)i=t[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function(e,t,n){for(var i,o,r,a,l,c,s=!0;s;){if(i=e,o=t,r=n,a=l=c=void 0,s=!1,a=Object.getOwnPropertyDescriptor(i,o),void 0!==a)return"value"in a?a.value:(c=a.get,void 0===c?void 0:c.call(r));if(l=Object.getPrototypeOf(i),null===l)return void 0;e=l,t=o,n=r,s=!0}},c=e("./event_emitter"),s=e("../helpers/dom"),u=function(e){function t(e){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.content=e,this.init(),this.initBindings(),this.initView(),this.setState(t.STATE_VIEW)}return r(t,e),a(t,[{key:"init",value:function(){console.log("Type "+content.type+" not registered")}},{key:"initView",value:function(){this.$el=document.createElement("div"),s.DomHelpers.addClass(this.$el,"block")}},{key:"initBindings",value:function(){this.on(t.EVENTS.finish_edit,this.onFinishEdit.bind(this)),this.on(t.EVENTS.start_edit,this.onStartEdit.bind(this)),this.on(t.EVENTS.remove,this.destroy.bind(this))}},{key:"onStartEdit",value:function(){this.setState(t.STATE_EDIT)}},{key:"onFinishEdit",value:function(){this.setState(t.STATE_VIEW)}},{key:"setState",value:function(e){this.state=e,this.render()}},{key:"render",value:function(){this.$el.text=""(i(["\n            Type "," not registered.\n            State ","\n            Content ","\n        "],["\n            Type "," not registered.\n            State ","\n            Content ","\n        "]),this.content.type,this.state,JSON.stringify(this.content,null,2))(i([""],[""]))}},{key:"_remove",value:function(){var e=this.$el.parent;e&&e.removeChild(this.$el)}},{key:"destroy",value:function(){this._remove(),this.$el=null,l(Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}}],[{key:"EVENTS",value:{start_edit:"start_edit.block",finish_edit:"finish_edit.block",remove:"remove.block",data_changed:"data_changed.block"},enumerable:!0},{key:"STATE_VIEW",value:0,enumerable:!0},{key:"STATE_EDIT",value:1,enumerable:!0},{key:"TYPES",value:{},enumerable:!0},{key:"registerBlock",value:function(e,n){return t.TYPES[e]=n,n}},{key:"getBlock",value:function(e){return t.TYPES[e]||t}},{key:"instantinateBlock",value:function(e){var n=t.getBlock(e.type);return new n(e)}}]),t}(c.EventEmitter),n.Block=u},{"../helpers/dom":9,"./event_emitter":3}],3:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o,r;Object.defineProperty(n,"__esModule",{value:!0}),o=function(){function e(e,t){var n,i;for(n=0;n<t.length;n++)i=t[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){i(this,e),this._bindings={}}return o(e,[{key:"_getNS",value:function(e){return this._bindings[e]||(this._bindings[e]=[]),this._bindings[e]}},{key:"off",value:function(e,t){var n=this._getNS(e),i=n.indexOf(t);i>=0&&n.splice(i,1)}},{key:"destroy",value:function(){this._bindings={}}},{key:"on",value:function(e,t){var n=this._getNS(e);return n.indexOf(t)<0&&n.push(t),this.off.bind(this,e,t)}},{key:"fire",value:function(e,t){var n=this._getNS(e);n.forEach(function(e){e.apply(null,t)})}},{key:"fireAsync",value:function(e,t){function n(){var e=i.shift();e&&(e.apply(null,t),setTimeout(n,0))}var i=this._getNS(e).slice();setTimeout(n,0)}}]),e}(),n.EventEmitter=r},{}],4:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}var r,a,l,c,s;Object.defineProperty(n,"__esModule",{value:!0}),r=function(){function e(e,t){var n,i;for(n=0;n<t.length;n++)i=t[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(e,t,n){for(var i,o,r,a,l,c,s=!0;s;){if(i=e,o=t,r=n,a=l=c=void 0,s=!1,a=Object.getOwnPropertyDescriptor(i,o),void 0!==a)return"value"in a?a.value:(c=a.get,void 0===c?void 0:c.call(r));if(l=Object.getPrototypeOf(i),null===l)return void 0;e=l,t=o,n=r,s=!0}},l=e("./event_emitter"),c=e("./block.js"),s=function(e){function t(){i(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.possibleButtons={},this.$el=document.createElement("div"),this.init(),this.initView()}return o(t,e),r(t,[{key:"init",value:function(){var e=this;Object.keys(c.Block.TYPES).forEach(function(t){var n=c.Block.TYPES[t];n.BUTTON&&(e.possibleButtons[t]=n)})}},{key:"initView",value:function(){var e=this;Object.keys(this.possibleButtons).forEach(function(n){var i=e.possibleButtons[n].BUTTON.getButton();e.$el.appendChild(i),i.addEventListener("click",e.fire.bind(e,t.EVENTS.addNewBlock,[n]))})}}],[{key:"EVENTS",value:{addNewBlock:"add-new-block.separator"},enumerable:!0}]),t}(l.EventEmitter),n.Separator=s},{"./block.js":2,"./event_emitter":3}],5:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}var r,a,l,c,s;Object.defineProperty(n,"__esModule",{value:!0}),r=function(){function e(e,t){var n,i;for(n=0;n<t.length;n++)i=t[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(e,t,n){for(var i,o,r,a,l,c,s=!0;s;){if(i=e,o=t,r=n,a=l=c=void 0,s=!1,a=Object.getOwnPropertyDescriptor(i,o),void 0!==a)return"value"in a?a.value:(c=a.get,void 0===c?void 0:c.call(r));if(l=Object.getPrototypeOf(i),null===l)return void 0;e=l,t=o,n=r,s=!0}},l=e("../base/block"),c=e("../helpers/dom"),s=function(e){function t(){i(this,t),null!=e&&e.apply(this,arguments)}return o(t,e),r(t,[{key:"init",value:function(){}},{key:"initView",value:function(){a(Object.getPrototypeOf(t.prototype),"initView",this).call(this);var e=document.createElement("img"),n=document.createElement("input");n.type="Url",c.DomHelpers.addClass(e,"block-image__view"),c.DomHelpers.addClass(n,"block-image__edit"),c.DomHelpers.toggle(e,!1),c.DomHelpers.toggle(n,!1),this.$edit=n,this.$view=e,this.$el.appendChild(n),this.$el.appendChild(e),this.$view.addEventListener("click",this.fire.bind(this,t.EVENTS.start_edit)),this.$edit.addEventListener("blur",this.fireAsync.bind(this,t.EVENTS.finish_edit))}},{key:"onFinishEdit",value:function(){var e=this.$edit.value;e!=this.content.data&&(this.content.data=e,this.fire(t.EVENTS.data_changed,[e,this])),a(Object.getPrototypeOf(t.prototype),"onFinishEdit",this).call(this)}},{key:"onStartEdit",value:function(){a(Object.getPrototypeOf(t.prototype),"onStartEdit",this).call(this),this.$edit.focus()}},{key:"remove",value:function(){this.$view.removeEventListener("click"),this.$edit.removeEventListener("click"),a(Object.getPrototypeOf(t.prototype),"remove",this).call(this)}},{key:"render",value:function(){var e=this.state==l.Block.STATE_EDIT,t=this.state==l.Block.STATE_VIEW;e?this.$edit.value=this.content.data||"":t&&(this.$view.src=this.content.data||"https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"),c.DomHelpers.toggle(this.$edit,e),c.DomHelpers.toggle(this.$view,t)}}],[{key:"EVENTS",value:Object.mixin({},l.Block.EVENTS),enumerable:!0},{key:"BUTTON",value:{getButton:function(){var e=document.createElement("a");return e.textContent="ImageBlock",e}},enumerable:!0}]),t}(l.Block),n.ImageBlock=s,l.Block.registerBlock("image-block",s)},{"../base/block":2,"../helpers/dom":9}],6:[function(e,t,n){"use strict";var i,o;Object.defineProperty(n,"__esModule",{value:!0}),i=e("./text_block"),Object.defineProperty(n,"TextBlock",{enumerable:!0,get:function(){return i.TextBlock}}),o=e("./image_block.js"),Object.defineProperty(n,"ImageBlock",{enumerable:!0,get:function(){return o.ImageBlock}})},{"./image_block.js":5,"./text_block":7}],7:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}var r,a,l,c,s;Object.defineProperty(n,"__esModule",{value:!0}),r=function(){function e(e,t){var n,i;for(n=0;n<t.length;n++)i=t[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(e,t,n){for(var i,o,r,a,l,c,s=!0;s;){if(i=e,o=t,r=n,a=l=c=void 0,s=!1,a=Object.getOwnPropertyDescriptor(i,o),void 0!==a)return"value"in a?a.value:(c=a.get,void 0===c?void 0:c.call(r));if(l=Object.getPrototypeOf(i),null===l)return void 0;e=l,t=o,n=r,s=!0}},l=e("../base/block"),c=e("../helpers/dom"),s=function(e){function t(){i(this,t),null!=e&&e.apply(this,arguments)}return o(t,e),r(t,[{key:"init",value:function(){}},{key:"initView",value:function(){a(Object.getPrototypeOf(t.prototype),"initView",this).call(this);var e=document.createElement("div"),n=document.createElement("textarea");c.DomHelpers.addClass(e,"block-text__view"),c.DomHelpers.addClass(n,"block-text__edit"),c.DomHelpers.toggle(e,!1),c.DomHelpers.toggle(n,!1),this.$edit=n,this.$view=e,this.$el.appendChild(n),this.$el.appendChild(e),this.$view.addEventListener("click",this.fire.bind(this,t.EVENTS.start_edit)),this.$edit.addEventListener("blur",this.fireAsync.bind(this,t.EVENTS.finish_edit))}},{key:"onFinishEdit",value:function(){var e=this.$edit.value;e!=this.content.data&&(this.content.data=e,this.fire(t.EVENTS.data_changed,[e,this])),a(Object.getPrototypeOf(t.prototype),"onFinishEdit",this).call(this)}},{key:"onStartEdit",value:function(){a(Object.getPrototypeOf(t.prototype),"onStartEdit",this).call(this),this.$edit.focus()}},{key:"remove",value:function(){this.$view.removeEventListener("click"),this.$edit.removeEventListener("click"),a(Object.getPrototypeOf(t.prototype),"remove",this).call(this)}},{key:"render",value:function(){var e=this.state==l.Block.STATE_EDIT,t=this.state==l.Block.STATE_VIEW;e?this.$edit.value=this.content.data||"":t&&(this.$view.textContent=this.content.data||"empty data"),c.DomHelpers.toggle(this.$edit,e),c.DomHelpers.toggle(this.$view,t)}}],[{key:"EVENTS",value:Object.mixin({},l.Block.EVENTS),enumerable:!0},{key:"BUTTON",value:{getButton:function(){var e=document.createElement("a");return e.textContent="TextBlock",e}},enumerable:!0}]),t}(l.Block),n.TextBlock=s,l.Block.registerBlock("text-block",s)},{"../base/block":2,"../helpers/dom":9}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={isUndefined:function(e){return void 0===e}};n.Assets=i},{}],9:[function(e,t,n){"use strict";var i,o,r;Object.defineProperty(n,"__esModule",{value:!0}),i=e("./assets"),o={toggle:function(e,t){e.style.display=t?"":"none"},show:function(e){o.toggle(e,!1)},hide:function(e){o.toggle(e,!1)},addClass:function(e,t){t instanceof Array?t.forEach(function(t){o.toggleClass(e,t,!0)}):o.toggleClass(e,t,!0)},remClass:function(e,t){o.toggleClass(e,t,!1)},hasClass:function(e,t){return!!e.classList.contains(t)},toggleClass:function(e,t,n){n=i.Assets.isUndefined(n)?!o.hasClass(t):n,n?e.classList.add(t):e.classList.remove(t)}},r=o,n.DomHelpers=r},{"./assets":8}],10:[function(){"use strict";!function(e,t){var n=e.prototype,i=n.__lookupGetter__,o=n.__lookupSetter__,r=n.__defineGetter__,a=n.__defineSetter__,l=n.hasOwnProperty,c=[],s=!0,u=function(e){try{return e&&e({},"_",{value:1})._&&e}catch(t){s=!1}}(e.defineProperty)||function(e,t,n){var i=n.get,o=n.set;i&&r&&r.call(e,t,i),o&&a&&a.call(e,t,o),i||o||(e[t]=n.value)},f=s&&e.getOwnPropertyNames||function(){var e,t,n,i=function(e){return e},o=[];for(e in{valueOf:e})o.push(e);return o.length||(n=o.push("constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf")-1,i=function(i,r){for(t=0;n>t;t++)e=o[t],l.call(r,e)&&i.push(e);return i}),function(e){var t,n=[];for(t in e)l.call(e,t)&&n.push(t);return i(n,e)}}(),d=s&&e.getOwnPropertyDescriptor||function(e,t){var n={enumerable:!0,configurable:!0},r=i&&i.call(e,t),a=o&&o.call(e,t);return r&&(n.get=r),a&&(n.set=a),r||a||(n.writable=!0,n.value=e[t]),n};e[t]||u(e,t,{enumerable:!1,writable:!0,configurable:!0,value:function(e,t,n){var i,o,r,a;if("function"==typeof t)t.apply(e,n||c);else for(r=f(t),o=r.length,i=0;o>i;)a=r[i++],u(e,a,d(t,a));return e}})}(Object,"mixin")},{}]},{},[1]);