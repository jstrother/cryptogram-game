(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{292:function(e,t,r){var content=r(301);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("dbbadc8c",content,!0,{sourceMap:!1})},293:function(e,t,r){var content=r(303);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("8a065bf0",content,!0,{sourceMap:!1})},294:function(e,t,r){var content=r(305);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("405bb839",content,!0,{sourceMap:!1})},295:function(e,t,r){var content=r(320);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("fc3da432",content,!0,{sourceMap:!1})},296:function(e,t,r){var content=r(322);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("018f3dd6",content,!0,{sourceMap:!1})},297:function(e,t,r){var content=r(324);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("b05b0df8",content,!0,{sourceMap:!1})},300:function(e,t,r){"use strict";r(292)},301:function(e,t,r){(t=r(18)(!1)).push([e.i,"div[data-v-f8a86e46]{margin:1em}",""]),e.exports=t},302:function(e,t,r){"use strict";r(293)},303:function(e,t,r){(t=r(18)(!1)).push([e.i,".letter-input[data-v-d8c565de]{width:1.5em;margin:auto}",""]),e.exports=t},304:function(e,t,r){"use strict";r(294)},305:function(e,t,r){(t=r(18)(!1)).push([e.i,".answerLetter input{text-transform:uppercase;text-align:center}",""]),e.exports=t},319:function(e,t,r){"use strict";r(295)},320:function(e,t,r){(t=r(18)(!1)).push([e.i,"div[data-v-5df35bd0]{height:1.5em}",""]),e.exports=t},321:function(e,t,r){"use strict";r(296)},322:function(e,t,r){(t=r(18)(!1)).push([e.i,"p[data-v-a99cada0]{text-align:center}",""]),e.exports=t},323:function(e,t,r){"use strict";r(297)},324:function(e,t,r){(t=r(18)(!1)).push([e.i,".text[data-v-1e1fb968]{text-align:center}",""]),e.exports=t},337:function(e,t,r){"use strict";r.r(t);r(29);var n={props:{word:{type:String,required:!0},wordIndex:{type:Number,required:!0}}},c=(r(300),r(58)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-wrap justify-center mt-16 pt-4"},e._l(e.word.split(""),(function(t,n){return r("LetterPairing",{key:n,attrs:{letter:t,"letter-index":n,"word-index":e.wordIndex}})})),1)}),[],!1,null,"f8a86e46",null);t.default=component.exports;installComponents(component,{LetterPairing:r(340).default})},338:function(e,t,r){"use strict";r.r(t);r(21),r(9),r(6),r(4),r(11);var n=r(2),c=r(66);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={computed:l({},Object(c.d)(["selectedQuote","selectedMovie"])),methods:l(l({},Object(c.c)(["resetState"])),{},{gameReset:function(){this.resetState()}})},f=(r(323),r(58)),h=r(80),v=r.n(h),w=r(289),y=r(298),O=r(291),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"d-flex flex-column align-center ma-sm-auto pa-16"},[r("v-card-title",[e._v("Correct!")]),e._v(" "),r("v-card-text",{staticClass:"text"},[e._v(e._s(e.selectedQuote))]),e._v(" "),r("v-card-text",{staticClass:"text"},[e._v(e._s(e.selectedMovie))]),e._v(" "),r("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[r("v-btn",{staticClass:"ma-sm-auto",on:{click:e.gameReset}},[e._v("New Game")])],1)],1)}),[],!1,null,"1e1fb968",null);t.default=component.exports;v()(component,{VBtn:w.a,VCard:y.a,VCardText:O.a,VCardTitle:O.b})},340:function(e,t,r){"use strict";r.r(t);r(29);var n={props:{letter:{type:String,required:!0},letterIndex:{type:Number,required:!0},wordIndex:{type:Number,required:!0}}},c=(r(302),r(58)),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"letter-input"},[this.letter.match(/[A-Z]/)?t("AnswerLetter",{attrs:{"letter-index":this.letterIndex,"word-index":this.wordIndex}}):t("SpotHolder"),this._v(" "),t("EncryptedLetter",{attrs:{letter:this.letter}})],1)}),[],!1,null,"d8c565de",null);t.default=component.exports;installComponents(component,{AnswerLetter:r(341).default,SpotHolder:r(343).default,EncryptedLetter:r(342).default})},341:function(e,t,r){"use strict";r.r(t);r(21),r(9),r(6),r(4),r(11),r(60);var n=r(2),c=(r(29),r(66));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:{letterIndex:{type:Number,required:!0},wordIndex:{type:Number,required:!0}},data:function(){return{answerLetter:""}},computed:l({},Object(c.d)(["userAnswer"])),created:function(){var e=this;this.userAnswer.length>0&&(this.answerLetter=this.userAnswer[this.wordIndex][this.letterIndex]),this.unsubscribe=this.$store.subscribe((function(t,r){"setUserAnswer"===t.type&&(e.answerLetter=r.userAnswer[e.wordIndex][e.letterIndex])}))},beforeDestroy:function(){this.unsubscribe()},methods:l(l({},Object(c.c)(["setUserAnswer","setIsAnswerCorrect"])),{},{setLetter:function(){9===event.keyCode&&event.shiftKey&&(event.shiftKey||9===event.keyCode)||this.answerLetter&&this.answerLetter.match(/^[a-zA-Z]+$/)&&(this.answerLetter=this.answerLetter.toUpperCase(),this.setUserAnswer({letter:this.answerLetter,wordIndex:this.wordIndex,letterIndex:this.letterIndex}),this.setIsAnswerCorrect())}})},f=(r(304),r(58)),h=r(80),v=r.n(h),w=r(348),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{staticClass:"answerLetter",attrs:{maxlength:"1"},on:{keyup:e.setLetter},model:{value:e.answerLetter,callback:function(t){e.answerLetter=t},expression:"answerLetter"}})}),[],!1,null,null,null);t.default=component.exports;v()(component,{VTextField:w.a})},342:function(e,t,r){"use strict";r.r(t);var n={props:{letter:{type:String,required:!0}}},c=(r(321),r(58)),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v(this._s(this.letter))])])}),[],!1,null,"a99cada0",null);t.default=component.exports},343:function(e,t,r){"use strict";r.r(t);r(319);var n=r(58),component=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"5df35bd0",null);t.default=component.exports},349:function(e,t,r){"use strict";r.r(t);r(21),r(9),r(6),r(4),r(11);var n=r(2),c=r(66);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={data:function(){return{isAnswerCorrect:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.d)(["encryptedQuote"])),created:function(){var e=this;this.unsubscribe=this.$store.subscribe((function(t,r){"setIsAnswerCorrect"===t.type&&(e.isAnswerCorrect=r.isAnswerCorrect)}))},beforeDestroy:function(){this.unsubscribe()}},d=r(58),f=r(80),h=r.n(f),v=r(346),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"d-flex flex-wrap justify-center mt-16 pt-16"},[this._l(this.encryptedQuote.split(" "),(function(e,r){return t("Word",{key:r,attrs:{word:e,"word-index":r}})})),this._v(" "),t("v-overlay",{attrs:{value:this.isAnswerCorrect}},[t("CorrectAnswer")],1)],2)}),[],!1,null,null,null);t.default=component.exports;h()(component,{Word:r(337).default,CorrectAnswer:r(338).default}),h()(component,{VOverlay:v.a})}}]);