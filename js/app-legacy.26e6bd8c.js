(function(){"use strict";var A={7408:function(A,V,l){l(6992),l(8674),l(9601),l(7727);var t=l(9567),e=function(){var A=this,V=A.$createElement,l=A._self._c||V;return l("div",{attrs:{id:"app"}},[l("div",{staticClass:"play"},[l("h1",{staticClass:"title"},[A._v("Simon plays")]),l("div",{staticClass:"wrapper"},[l("div",{staticClass:"options"},[l("h2",{staticClass:"round"},[A._v("Round: "+A._s(A.round))]),l("div",{staticClass:"settings"},[l("h2",{staticClass:"settings__title"},[A._v("Settings")]),l("ul",{staticClass:"settings__buttons"},A._l(A.levels,(function(V){return l("li",{key:V.value,staticClass:"settings__button"},[l("label",{attrs:{for:V.value}},["checkbox"===V.type?l("input",{directives:[{name:"model",rawName:"v-model",value:A.currentLevel,expression:"currentLevel"}],attrs:{name:V.value,disabled:A.disabledButton,id:V.value,type:"checkbox"},domProps:{value:V.value,checked:Array.isArray(A.currentLevel)?A._i(A.currentLevel,V.value)>-1:A.currentLevel},on:{change:function(l){var t=A.currentLevel,e=l.target,m=!!e.checked;if(Array.isArray(t)){var a=V.value,i=A._i(t,a);e.checked?i<0&&(A.currentLevel=t.concat([a])):i>-1&&(A.currentLevel=t.slice(0,i).concat(t.slice(i+1)))}else A.currentLevel=m}}}):"radio"===V.type?l("input",{directives:[{name:"model",rawName:"v-model",value:A.currentLevel,expression:"currentLevel"}],attrs:{name:V.value,disabled:A.disabledButton,id:V.value,type:"radio"},domProps:{value:V.value,checked:A._q(A.currentLevel,V.value)},on:{change:function(l){A.currentLevel=V.value}}}):l("input",{directives:[{name:"model",rawName:"v-model",value:A.currentLevel,expression:"currentLevel"}],attrs:{name:V.value,disabled:A.disabledButton,id:V.value,type:V.type},domProps:{value:V.value,value:A.currentLevel},on:{input:function(V){V.target.composing||(A.currentLevel=V.target.value)}}}),A._v(" "+A._s(V.label)+" ")])])})),0)]),l("button",{staticClass:"button-start",attrs:{type:"button",disabled:A.disabledButton},on:{click:A.startPlay}},[A._v(" Start ")])]),l("div",[l("div",{staticClass:"buttons",on:{click:A.addUserStep}},A._l(A.buttons,(function(V){return l("button",{key:V.name,staticClass:"button",class:["button--"+V.color,{active:A.activeButton===V.color}],attrs:{"data-color":V.color,disabled:"entering"!==A.stateOfPlay}})})),0),"failed"===A.stateOfPlay?l("p",{staticClass:"game-over"},[A._v("Game over!")]):A._e()])])])])},m=[],a=(l(1539),l(4747),l(7327),function(A){return Math.round(Math.random()*A)}),i={BETWEEN_ROUNDS:400,ACTIVE_COLOR:250},E=1,d=l(8900),C=l(1165),n=l(7269),p=l(9394),u={name:"App",components:{},data:function(){return{round:0,stateOfPlay:"none",currentLevel:"easy",currentSpeed:1500,activeButton:"",levels:{easy:{type:"radio",label:"Easy",value:"easy",speed:1500},middle:{type:"radio",label:"Middle",value:"middle",speed:1e3},hard:{type:"radio",label:"Hard",value:"hard",speed:400}},buttons:[{color:"red",sound:d},{color:"blue",sound:C},{color:"yellow",sound:n},{color:"green",sound:p}],userSteps:[],stepsOfPlay:{sounds:[],colors:[]}}},methods:{startPlay:function(){this.stateOfPlay="preparing"},createStep:function(){var A=this.stepsOfPlay,V=A.colors,l=A.sounds,t=this.buttons.length-1,e=a(t),m=this.buttons[e],i=m.color,E=m.sound;V.push(i),l.push(E),this.stateOfPlay="playing"},playStep:function(){var A=this,V=this.stepsOfPlay,l=V.colors,t=V.sounds;t.forEach((function(V,t){setTimeout((function(){return A.activateButton(V,l[t])}),A.currentSpeed*(t+E))})),setTimeout((function(){return A.stateOfPlay="entering"}),this.currentSpeed*t.length)},playSound:function(A){var V=new Audio(A);return V.play()},activateButton:function(A,V){var l=this;this.activeButton=V;var t=this.playSound(A);t.then((function(){return setTimeout((function(){return l.activeButton=""}),i.ACTIVE_COLOR)}))},addUserStep:function(A){var V=A.target,l=V.dataset.color;if(l){this.userSteps.push(l);var t=this.buttons.filter((function(A){return A.color===l}))[0].sound;this.activateButton(t,l)}},checkUserSteps:function(){var A=this,V=this.userSteps.every((function(V,l){return V===A.stepsOfPlay.colors[l]})),l=this.userSteps.length===this.stepsOfPlay.colors.length;V||(this.stateOfPlay="failed"),V&&!l&&(this.stateOfPlay="entering"),V&&l&&(this.userSteps=[],this.stateOfPlay="preparing")}},computed:{disabledButton:function(){return!("none"===this.stateOfPlay||"failed"===this.stateOfPlay)}},watch:{stateOfPlay:function(){var A=this;switch(this.stateOfPlay){case"preparing":this.round++,this.createStep();break;case"playing":setTimeout((function(){return A.playStep()}),i.BETWEEN_ROUNDS);break;case"checking":this.checkUserSteps();break;case"failed":this.userSteps=[],this.round=0,this.stepsOfPlay={colors:[],sounds:[]};break}},userSteps:function(){this.userSteps.length>0&&(this.stateOfPlay="checking")},currentLevel:function(){this.currentSpeed=this.levels[this.currentLevel].speed,console.log(this.currentSpeed)}}},k=u,r=l(1001),R=(0,r.Z)(k,e,m,!1,null,null,null),o=R.exports;t.Z.config.productionTip=!1,t.Z.config.devtools=!0,new t.Z({render:function(A){return A(o)}}).$mount("#app")},8900:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABw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"},1165:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABwAAAPAADHBhAR0RxHh8cHSIjICElJAAAAAADgAMAHAMBhAkRENMfR4fEBEiIyQlISAAAAAAAAAAAABAQEAAAAAAACAAAABARPZ2dTAASAVQAAAAAAAAnbu2MCAAAACv7c9BoBdbkpLB02IyMjIiIjJCMiIyIhICEmNVmkTQA6lvz3bF+EACZAiqpIJVUZAADFMYxaJXLbDr79d99apg1apmzHi5QAx0yi4v82escpuVyRN8YlnQmHmRn9fxljJjMDcGJMgC0Z6C0No0YJADhs2zZmHBsbgwa2MYW/NsD/oMFAQ6FAgSr+2myCGIZSwA5yDx02luzT5Y8IExETHMfRb6s4Xq7idXYN7IGASqr7wKpKSdHnW/3mae2fzlHf2fGENPdzHsmZ9l2Y0X5XkCOgePsRCnf1I2K4jyh2vvQwiwf8TLvFsplsTmI4Divw/4KzEtwCgOvhrMVqL0ox5q4OogVBWUzPPJSPM2oI8hUje8cCpn/kyCUpRGekhLWuH/T2OjF7lHJ4sKAYvANN/IBUgzCGQkz3fiMBnIIAzi+MGWFu0D8SQVcRLaDACQwJUzfuKGxxK0EwAL9zXcO+7RmZ/vA4qrC1vGwXu776RbkUoYwHdQ4A3Jr1OTlFpgEIAwCGFlC/K+rtVCgVDZKnAg++0zt+qma88YriOH755QPvBQAMr79/DC7NEgAQAAAAXgHt50wezFatsK7xei6UAvqpvgV7ef+iLxRnlYzwAQCAAgAAAIBx/LOTZkBuxulf3rh11PH+equOXHn19UbeI9LLKAC4Ab66fsFdvw7Fbxju8EGaAAAAAAAAANB/VgMAsKLawfG8SAAAXrp+oOPff/E7ioNKmgAAAAAAAADQv1pzAACrZuXaI7xKAAAeqr5z+6//4lcgOVsqaQIAAAAAAACAt9YnAICIf1Y77FkCAB6avpOHhPNnn2gOMmkCAgAAAAAAACZ1AQAUag9jj1JLAAD+mb6T+3/+4lehOMikCQgAAAAAAAC4rb4BAHzl1SbSlgAA3om+kce3/+xXITlopAkAAAAAAAAA++31CQAQc27ZKCklAABein6BXb8JxSeGu6kN0gQAAAAAAACA/UPNAQDp251ecEkNAABeen7j/dt/8VuiOKGSSRMAAAAAAAAA9h9qAIDx7XSNXCoAAB5qfqH96r94BYaT5wVpAgAAAAAAAMD+twYAEIy1Ts8pAAAeWn7D/emf+EBx8hgaaQILAAAAAAAA9l8FAJiQ8evmqmcAAP5J/idRPqKLT3DCB2kCCwAAAAAAAPbnAAATMk/3bltrAAAeOf6rlC9d/AL3GqQJLAAAAAAAAHheAgBTzmQb31UGAACeGP5tpVM28QvcQJrAAgAAAAAAgP3TBABCa0/8sRoDAH4J/h+ifGniN3BCBWkCAAAAAAAAwP5PCQAmZKU4NcEAAB7p/SdR36KL3xKc8EGaAAAgoAAAAADY31YBAMy0q+8kAQA6mu0Avrj9J1F8U1e/L7DDB2kCADAzBQAAAPDDcAAwkfXsnL+SGwQANLBTwvySYmk/bfroExqUAgAeaP0nUf1g04AKJ3wgvAAApFeSEhAwAAC4dQoAIPLLc+tIbUkRAFQCmDngY5t6gxXCh7snFyeZKfN/y5fXTBVFlAfIcCoqRkiF7U55tUPWp0GBCTAXkFJYAJ6m/CHHfJjHgBaJEEgLAFBWNboCShJQAOgbAGSDTK9/fNkRxgpGRNne3j7H3NJXjd9qbHvX/YwfZ7+OwxX1e9Vtns4BNWjrsGx5ogX2xwO1RyGczYXoZM5rbOMVdnJrtV8xscmls+5Ej8+LKzRhqgI36vYuDeW2C+MDIi42NSOGm3copr4To7Z16qcS+HNymZlzRh5to+u4igwtnXAZpyDAWfIAHpb8d60fmgI2MAPm0HsydJKBUgoCCgCAClZPSTvmvEZ0Ed4l45iTjwV1/k7YBITtWbrGN3duWLIk1cB+E3M6AK/M6fxgpwMwAe6MrQI="},7269:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABw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"},9394:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABw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"}},V={};function l(t){var e=V[t];if(void 0!==e)return e.exports;var m=V[t]={exports:{}};return A[t](m,m.exports,l),m.exports}l.m=A,function(){var A=[];l.O=function(V,t,e,m){if(!t){var a=1/0;for(C=0;C<A.length;C++){t=A[C][0],e=A[C][1],m=A[C][2];for(var i=!0,E=0;E<t.length;E++)(!1&m||a>=m)&&Object.keys(l.O).every((function(A){return l.O[A](t[E])}))?t.splice(E--,1):(i=!1,m<a&&(a=m));if(i){A.splice(C--,1);var d=e();void 0!==d&&(V=d)}}return V}m=m||0;for(var C=A.length;C>0&&A[C-1][2]>m;C--)A[C]=A[C-1];A[C]=[t,e,m]}}(),function(){l.d=function(A,V){for(var t in V)l.o(V,t)&&!l.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:V[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){l.o=function(A,V){return Object.prototype.hasOwnProperty.call(A,V)}}(),function(){var A={143:0};l.O.j=function(V){return 0===A[V]};var V=function(V,t){var e,m,a=t[0],i=t[1],E=t[2],d=0;if(a.some((function(V){return 0!==A[V]}))){for(e in i)l.o(i,e)&&(l.m[e]=i[e]);if(E)var C=E(l)}for(V&&V(t);d<a.length;d++)m=a[d],l.o(A,m)&&A[m]&&A[m][0](),A[m]=0;return l.O(C)},t=self["webpackChunksimon_play"]=self["webpackChunksimon_play"]||[];t.forEach(V.bind(null,0)),t.push=V.bind(null,t.push.bind(t))}();var t=l.O(void 0,[998],(function(){return l(7408)}));t=l.O(t)})();
//# sourceMappingURL=app-legacy.26e6bd8c.js.map