(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,g=[];d<o.length;d++)r=o[d],i[r]&&g.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(g.length)g.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/FastSecurity/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"0838":function(t,e,a){t.exports=a.p+"img/mail.86663f1e.svg"},"0a30":function(t,e,a){},"0a5e":function(t,e,a){t.exports=a.p+"img/black_watch.2bafdd1b.png"},"1de4":function(t,e,a){"use strict";var s=a("c89f"),i=a.n(s);i.a},"2b10":function(t,e,a){"use strict";var s=a("a8d4"),i=a.n(s);i.a},"362c":function(t,e,a){},4163:function(t,e,a){"use strict";var s=a("0a30"),i=a.n(s);i.a},"41e6":function(t,e,a){t.exports=a.p+"img/shades.b777a339.png"},5071:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d"),a("f5df");var s=a("2b0e"),i=a("2f62"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Modal",{ref:"modal"}),s("button",{staticClass:"modal-open",on:{click:function(e){t.toggleModal()}}},[s("img",{attrs:{src:a("0838")}})]),s("Navbar"),s("HeroImg"),s("HeroText"),s("HeroImg3"),s("Swiper"),s("HeroImg2"),s("Merch"),s("ElFooto")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("span",{staticClass:"active",attrs:{value:"en"},on:{click:function(e){t.changeLanguage(t.en,"en")}}},[t._v(" \n        EN\n      ")]),a("span",{attrs:{value:"sv"},on:{click:function(e){t.changeLanguage(t.sv,"sv")}}},[t._v("\n        SV \n      ")])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-start"},[s("img",{staticClass:"saab",attrs:{src:a("a962")}}),s("img",{staticClass:"fs",attrs:{src:a("d8b8")}})])}],l=(a("ac6a"),a("be94")),u=a("9d41"),d={data:function(){return{language:u,sv:u.sv,en:u.en}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"])),methods:Object(l["a"])({},Object(i["c"])(["CHANGE_LANGUAGE"]),{changeLanguage:function(t,e){this.CHANGE_LANGUAGE(t),this.$el.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),this.$el.querySelector("span[value=".concat(e,"]")).classList.add("active")}})},g=d,f=(a("9da4"),a("2877")),m=Object(f["a"])(g,o,c,!1,null,"66536463",null);m.options.__file="Navbar.vue";var v=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-1"},[t._v("\n        "+t._s(t.getLanguage.titleh1)+"\n      ")]),a("h2",{staticClass:"display-2"},[t._v("\n        "+t._s(t.getLanguage.titleh2)+"\n      ")])])]),t._m(0)])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scroll-down"},[s("img",{attrs:{src:a("ca9a")}})])}],b={name:"HeroImg",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"]))},_=b,C=(a("b16f"),Object(f["a"])(_,h,p,!1,null,"37f0b0ea",null));C.options.__file="HeroImg.vue";var y=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-1"},[t._v("\n        "+t._s(t.getLanguage.subHeroTitleH1)+"\n      ")]),a("p",{staticClass:"lead"},[t._v("\n        "+t._s(t.getLanguage.subHeroTitleH2)+"\n      ")])])]),t._m(0)])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scroll-down"},[s("img",{attrs:{src:a("ca9a")}})])}],w={name:"HeroImg2",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"]))},T=w,L=(a("a139"),Object(f["a"])(T,k,x,!1,null,"20812604",null));L.options.__file="HeroImg2.vue";var S=L.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-1"},[t._v("\n        "+t._s(t.getLanguage.thirdHeroTitleH1)+"\n      ")]),a("p",{staticClass:"lead lead-center"},[t._v("\n        "+t._s(t.getLanguage.thirdHeroTitleH2)+"\n      ")])])]),t._m(0)])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scroll-down"},[s("img",{attrs:{src:a("ca9a")}})])}],O={name:"HeroImg3",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"]))},E=O,$=(a("fdec"),Object(f["a"])(E,H,j,!1,null,"8011986c",null));$.options.__file="HeroImg3.vue";var I=$.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"display-1"},[t._v("\n      "+t._s(t.getLanguage.heroTitle)+"\n    ")]),s("span",{staticClass:"color-line"}),s("div",{staticClass:"text-container"},[s("p",{staticClass:"lead"},[t._v("\n        "+t._s(t.getLanguage.heroText)+"\n      ")])]),s("button",{staticClass:"contact-link",attrs:{href:"#"},on:{click:function(e){t.openModal()}}},[t._v(t._s(t.getLanguage.keepMeInformed.toUpperCase())),s("img",{staticStyle:{transform:"rotate(360deg)",width:"10px",height:"10px"},attrs:{src:a("eadc"),alt:""}})])])])},F=[],P={name:"HeroText",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"])),methods:{openModal:function(){this.$parent.toggleModal()}}},A=P,N=(a("70b8"),Object(f["a"])(A,M,F,!1,null,"34b82dca",null));N.options.__file="HeroText.vue";var G=N.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("swiper",{ref:"mySwiper",staticClass:"slideshow",attrs:{options:t.swiperOption}},[a("swiper-slide",{staticClass:"slide"},[a("ChooseColor")],1),a("swiper-slide",{staticClass:"slide"},[a("Interior")],1),a("swiper-slide",{staticClass:"slide"},[a("Exterior")],1),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)},W=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"container"},[a("div",{staticClass:"text-box"},[a("h1",{staticClass:"display-1"},[t._v(" "+t._s(t.getLanguage.chooseColorTitle)+" ")]),a("span",{staticClass:"color-line"}),a("p",{staticClass:"lead"},[t._v(" "+t._s(t.getLanguage.chooseColorH3)+" ")])]),a("div",{staticClass:"image-box"},[a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("progressive-img",{key:t.image,staticClass:"bike-img",attrs:{src:t.image,alt:""}})],1),a("div",{staticClass:"colors"},t._l(t.circles,function(e,s){return a("div",{key:s,class:["circle",e.class,{active:t.selected==e}],on:{click:function(a){t.selected=e,t.selectedImage(e)}}})}))],1)])])},V=[],q={name:"ChooseColor",data:function(){return{circles:[{class:"white",image:"img/whiteorange2.png"},{class:"red",image:"img/red2.png"},{class:"black",image:"img/blackred2.png"},{class:"saab",image:"img/blueorange2.png"}],selected:"",image:"img/blackred2.png"}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"])),methods:{selectedImage:function(t){this.image=t.image}}},D=q,z=(a("a467"),Object(f["a"])(D,R,V,!1,null,"7826574a",null));z.options.__file="ChooseColor.vue";var B=z.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"content-container"},[a("div",{staticClass:"text-container"},[a("h2",{staticClass:"display-1"},[t._v(" "+t._s(t.getLanguage.interiorTitle)+" ")]),a("span",{staticClass:"color-line"}),a("p",{staticClass:"lead"},[t._v(" "+t._s(t.getLanguage.interiorP)+" ")])])]),a("div",{staticClass:"side"})])},K=[],Y={name:"Interior",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"])),methods:{}},X=Y,Q=(a("88a4"),Object(f["a"])(X,J,K,!1,null,"34345908",null));Q.options.__file="Interior.vue";var Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"content-container"},[a("div",{staticClass:"text-container"},[a("h2",{staticClass:"display-1"},[t._v(" "+t._s(t.getLanguage.exteriorTitle)+" ")]),a("span",{staticClass:"color-line"}),a("p",{staticClass:"lead"},[t._v(" "+t._s(t.getLanguage.exteriorP)+" ")])])]),a("div",{staticClass:"side"})])},et=[],at={name:"Exterior",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"])),methods:{}},st=at,it=(a("2b10"),Object(f["a"])(st,tt,et,!1,null,"d018edca",null));it.options.__file="Exterior.vue";var nt=it.exports,rt={name:"Carrousel",components:{ChooseColor:B,Interior:Z,Exterior:nt},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){this.swiper.slideTo(0,1e3,!1)}},ot=rt,ct=(a("1de4"),Object(f["a"])(ot,U,W,!1,null,"54d2c68f",null));ct.options.__file="Swiper.vue";var lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"display-1"},[t._v(t._s(t.getLanguage.merchandise)+" ")]),a("div",{staticClass:"merchbox"},[a("div",{staticClass:"merchitem"},[t._m(0),a("h3",{staticClass:"is-size-2"},[t._v(t._s(t.getLanguage.merchThe)+" "),a("span",{staticClass:"highlight"},[t._v(t._s(t.getLanguage.merchShades))])]),a("a",{attrs:{href:"#"}},[t._v(t._s(t.getLanguage.merchReadmore))])]),a("div",{staticClass:"merchitem"},[t._m(1),a("h3",{staticClass:"is-size-2"},[t._v(t._s(t.getLanguage.merchThe)+" "),a("span",{staticClass:"highlight"},[t._v(t._s(t.getLanguage.merchHelmet))])]),a("a",{attrs:{href:"#"}},[t._v(t._s(t.getLanguage.merchReadmore))])]),a("div",{staticClass:"merchitem"},[t._m(2),a("h3",{staticClass:"is-size-2"},[t._v(t._s(t.getLanguage.merchThe)+" "),a("span",{staticClass:"highlight"},[t._v(t._s(t.getLanguage.merchWatch))])]),a("a",{attrs:{href:"#"}},[t._v(t._s(t.getLanguage.merchReadmore))])])])])},dt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"merchimg"},[s("img",{attrs:{src:a("41e6")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"merchimg"},[s("img",{attrs:{src:a("b373")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"merchimg"},[s("img",{staticClass:"merchimg watch",attrs:{src:a("0a5e")}})])}],gt={name:"Merch",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"]))},ft=gt,mt=(a("f435"),Object(f["a"])(ft,ut,dt,!1,null,null,null));mt.options.__file="Merch.vue";var vt=mt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"container"},[s("div",{staticClass:"text-container"},[s("h2",{staticClass:"display-1"},[t._v(" "+t._s(t.getLanguage.footerTitle)+" ")])])]),s("button",{staticClass:"contact-link",attrs:{href:"#"},on:{click:function(e){t.openModal()}}},[t._v(" "+t._s(t.getLanguage.keepMeInformed.toUpperCase())),s("img",{staticStyle:{transform:"rotate(360deg)",width:"10px",height:"10px"},attrs:{src:a("eadc"),alt:""}})])])},pt=[],bt={name:"Footer",data:function(){return{}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"])),methods:{openModal:function(){this.$parent.toggleModal()}}},_t=bt,Ct=(a("f820"),Object(f["a"])(_t,ht,pt,!1,null,"5aba41b3",null));Ct.options.__file="Footer.vue";var yt=Ct.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",class:{"is-active":t.active}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"close-button-container"},[a("button",{staticClass:"close-button",on:{click:function(e){t.toggle()}}},[t._v("X")])]),a("div",{staticClass:"return-button-container"},[a("a",{staticClass:"return-button",on:{click:function(e){t.previous()}}},[a("svg",{attrs:{viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M4.24268 1L8.48532 5.24264L4.24268 9.48528",stroke:"black","stroke-width":"2"}})])])]),a("div",{staticClass:"card-content",class:{active:1===t.activePage}},[a("p",{staticClass:"title"},[t._v("\n          "+t._s(t.getLanguage.modalTitle1)+"\n        ")]),a("p",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.getLanguage.modalSubtitle1)+"\n        ")]),a("div",{staticClass:"field has-addons"},[t._m(0),a("div",{staticClass:"control"},[a("a",{staticClass:"button is-info",on:{click:function(e){t.setActive(2)}}},[t._v("\n              "+t._s(t.getLanguage.subscribe)+"\n            ")])])]),a("a",{staticClass:"button is-text",on:{click:function(e){t.setActive(3)}}},[t._v(t._s(t.getLanguage.modalFolderLink)+" > ")])]),a("div",{staticClass:"card-content",class:{active:2===t.activePage}},[a("p",{staticClass:"title"},[t._v("\n          "+t._s(t.getLanguage.modalTitle2)+"\n        ")]),a("p",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.getLanguage.modalSubtitle2)+"\n        ")]),a("a",{staticClass:"button is-text",on:{click:function(e){t.setActive(3)}}},[t._v(t._s(t.getLanguage.modalFolderLink)+" > ")])]),a("div",{staticClass:"card-content",class:{active:3===t.activePage}},[a("p",{staticClass:"title"},[t._v("\n          "+t._s(t.getLanguage.modalTitle3)+"\n        ")]),a("p",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.getLanguage.modalSubtitle3)+"\n        ")]),a("input",{staticClass:"input",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"Full name"}}),t._m(1),t._m(2)])])])])},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"E-mail"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex"}},[a("input",{staticClass:"input",staticStyle:{width:"50%"},attrs:{type:"text",placeholder:"Postal code"}}),a("input",{staticClass:"input",staticStyle:{width:"50%"},attrs:{type:"text",placeholder:"City"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex"}},[a("input",{staticClass:"input",staticStyle:{width:"50%"},attrs:{type:"text",placeholder:"Country"}}),a("input",{staticClass:"button",attrs:{type:"submit",value:"Send"}})])}],wt={data:function(){return{active:!1,activePage:1,previousPage:1}},computed:Object(l["a"])({},Object(i["b"])(["getLanguage"])),methods:{toggle:function(){this.active=!this.active},setActive:function(t){this.previousPage=this.activePage,this.activePage=t},previous:function(){this.activePage=this.previousPage}}},Tt=wt,Lt=(a("4163"),Object(f["a"])(Tt,kt,xt,!1,null,"3384c14e",null));Lt.options.__file="Modal.vue";var St=Lt.exports,Ht={name:"App",components:{Navbar:v,HeroImg:y,HeroImg3:I,HeroText:G,Swiper:lt,HeroImg2:S,Merch:vt,ElFooto:yt,Modal:St},methods:{toggleModal:function(){this.$refs.modal.toggle()}}},jt=document.querySelector(".mail-message");setTimeout(function(){jt.textContent="Hey! Don't forget to leave your email down below.",jt.classList.add("visible")},2e4),setTimeout(function(){jt.classList.remove("visible")},4e4);var Ot=Ht,Et=(a("034f"),Object(f["a"])(Ot,n,r,!1,null,null,null));Et.options.__file="App.vue";var $t=Et.exports,It=a("8a03"),Mt=a.n(It),Ft=a("7212"),Pt=a.n(Ft),At=(a("5abe"),a("dfa4"),a("0e44"));s["default"].use(i["a"]);var Nt=new i["a"].Store({plugins:[Object(At["a"])()],state:{language:u.en},getters:{getLanguage:function(t){return t.language}},mutations:{CHANGE_LANGUAGE:function(t,e){t.language=e}},actions:{setLanguage:function(t,e){var a=t.commit;a("setLanguage",e)}}}),Gt=a("9076"),Ut=a.n(Gt);s["default"].config.productionTip=!1,s["default"].use(i["a"]),s["default"].use(Mt.a),s["default"].use(Pt.a),s["default"].use(Ut.a),new s["default"]({store:Nt,render:function(t){return t($t)}}).$mount("#app")},"5bde":function(t,e,a){},"64a9":function(t,e,a){},"6df5":function(t,e,a){},"70b8":function(t,e,a){"use strict";var s=a("85a2"),i=a.n(s);i.a},"85a2":function(t,e,a){},"88a4":function(t,e,a){"use strict";var s=a("d79c"),i=a.n(s);i.a},"9d41":function(t){t.exports={en:{titleh1:"The future motorcycle",titleh2:"FAST SECURITY FS.1.0",heroTitle:"Our history becomes the future",heroText:"For a long time, hard work and innovations have given us on Saab the knowledge to make great, secure vehicles. We´re proud of our history, but maybe even more proud of our future. Now we´ll use the knowledge we´ve collected over the years to bring you Fast Security. The future electric motorcycle 1.0.",subHeroTitleH1:"Extra features",subHeroTitleH2:"A great bike come with great features. Check out the following gear, made to give you that extra for the ride.",thirdHeroTitleH1:"Features for special drivers",thirdHeroTitleH2:"We bring you a smart and beautiful interior. We also bring you top quality exterior. So, what color do you want to drive?",exteriorTitle:"The Exterior",exteriorP:"Your security is everything. That's why we've built the safest motorcycle ever made. At the same time we give you a bike with the most powerful electric engine.",interiorTitle:"The Interior",interiorP:"The Fast Security interior is beautiful and smart designed. Everything made for a unique driving experience with total control in your hands.",chooseColorTitle:"Choose color",chooseColorH3:"Fast Security comes in four colors. Why not drive your personal?",footerTitle:"Become a part of the future",modalTitle1:"Get ready for the future",modalSubtitle1:"Sign up to stay informed and get the latest news",modalTitle2:"Thank you for subscribing!",modalSubtitle2:"We're happy you want to follow the continuing work.",modalTitle3:"Shipment info",modalSubtitle3:"Type in your details and we will send you a beautiful folder for free",modalFolderLink:"I want a folder sent to my adress",subscribe:"Subscribe",merchandise:"Merchandise",merchThe:"The",merchShades:"Shades",merchHelmet:"Helmet",merchWatch:"Watch",merchReadmore:"Read more...",keepMeInformed:"Keep me informed"},sv:{titleh1:"Framtidens motorcykel",titleh2:"FAST SECURITY FS.1.0",heroTitle:"Vår historia blir framtiden",heroText:"Under lång tid har hårt arbete och innovationer gett oss på Saab kunskap om att skapa bra, säkra fordon. Vi är stolta över vår historia, men kanske ännu mer stolta över vår framtid. Nu använder vi den kunskap vi har samlat över åren för att ge er Fast Security. Den framtida elmotorcyckeln 1.0.",subHeroTitleH1:"Extra egenskaper",subHeroTitleH2:"En bra motorcykel kommer med bra funktioner. Kolla in följande redskap, gjord för att ge dig det extra för åkturen.",thirdHeroTitleH1:"Egenskaper för speciella förare",thirdHeroTitleH2:"Vi tar med dig en smart och vacker inredning. Vi tar också med dig högkvalitativ exteriör. Så vilken färg vill du köra?",exteriorTitle:"Utsidan",exteriorP:"Din säkerhet är allting. Därför har vi byggt den säkraste motorcykel som någonsin gjorts. Samtidigt ger vi dig en cykel med den kraftfullaste elektriska motorn.",interiorTitle:"Insidan",interiorP:"Fast Security-interiören är vacker och smart designad. Allt för en unik körupplevelse med total kontroll i dina händer",chooseColorTitle:"Välj färg",chooseColorH3:"Fast Security 1.0 finns i fyra färger. Varför inte köra din personliga?",footerTitle:"Bli en del utav framtiden",modalTitle1:"Gör dig redo för framtiden",modalSubtitle1:"Anmäl dig för att hålla dig informerad och få de senaste nyheterna.",modalTitle2:"Tack för att du prenumererar!",modalSubtitle2:"Vi är glada att du vill följa det fortsatta arbetet.",modalTitle3:"Försändelse info",modalSubtitle3:"Skriv in dina uppgifter och vi skickar dig en vacker mapp gratis.",modalFolderLink:"Jag vill ha en mapp skickad till min adress",subscribe:"Prenumerera",merchandise:"Handelsvaror",merchThe:"",merchShades:"Solglasögon",merchHelmet:"Hjälmen",merchWatch:"Klockan",merchReadmore:"Läs mer",keepMeInformed:"Håll mig uppdaterad"}}},"9da4":function(t,e,a){"use strict";var s=a("6df5"),i=a.n(s);i.a},a139:function(t,e,a){"use strict";var s=a("f132"),i=a.n(s);i.a},a467:function(t,e,a){"use strict";var s=a("5bde"),i=a.n(s);i.a},a8d4:function(t,e,a){},a962:function(t,e,a){t.exports=a.p+"img/saab.8562b855.png"},b16f:function(t,e,a){"use strict";var s=a("be7b"),i=a.n(s);i.a},b373:function(t,e,a){t.exports=a.p+"img/helmet.efd07d3a.png"},bcdd:function(t,e,a){},be7b:function(t,e,a){},c89f:function(t,e,a){},ca9a:function(t,e,a){t.exports=a.p+"img/red_triangle.9f0f9203.svg"},d79c:function(t,e,a){},d8b8:function(t,e,a){t.exports=a.p+"img/logo_transparent_white.92ab9176.svg"},eadc:function(t,e,a){t.exports=a.p+"img/arrow.99b005fc.svg"},f132:function(t,e,a){},f435:function(t,e,a){"use strict";var s=a("5071"),i=a.n(s);i.a},f820:function(t,e,a){"use strict";var s=a("362c"),i=a.n(s);i.a},fdec:function(t,e,a){"use strict";var s=a("bcdd"),i=a.n(s);i.a}});
//# sourceMappingURL=app.779872af.js.map