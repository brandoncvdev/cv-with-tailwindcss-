"use strict";(self.webpackChunktailwind_cv=self.webpackChunktailwind_cv||[]).push([[551],{8551:(v,p,s)=>{s.r(p),s.d(p,{FullLayoutModule:()=>D});var a=s(6019),d=s(9322),t=s(1514);let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,d.Bz]]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez]]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,x]]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez]]}),n})();const T=[{path:"sobre-mi",loadChildren:()=>s.e(646).then(s.bind(s,6646)).then(n=>n.AboutMeModule)},{path:"experiencia",loadChildren:()=>s.e(671).then(s.bind(s,2671)).then(n=>n.ExperienceModule)},{path:"repositorio",loadChildren:()=>s.e(751).then(s.bind(s,4751)).then(n=>n.RepositoryModule)}];var b=s(5549);const _=[{url:"sobre-mi",name:"Sobre mi",status:!0},{url:"experiencia",name:"Experiencia",status:!1},{url:"repositorio",name:"Repositorio",status:!1}];let w=(()=>{class n{constructor(e,i){this.renderer2=e,this._elementRef=i}ngOnChanges(){this.colorNavBar?(this.renderer2.addClass(this._elementRef.nativeElement,"text-black"),this.renderer2.removeClass(this._elementRef.nativeElement,"text-gray-500")):(this.renderer2.addClass(this._elementRef.nativeElement,"text-gray-500"),this.renderer2.removeClass(this._elementRef.nativeElement,"text-black"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","colorNavBar",""]],inputs:{colorNavBar:"colorNavBar"},features:[t.TTD]}),n})();const A=["navComp"],M=["pinItem"],f=function(n){return[n]};function B(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li",13),t._UZ(1,"div",14,15),t.TgZ(3,"a",16,17),t.NdJ("click",function(){const l=t.CHM(e).index;return t.oxw().navBarStatus(l)}),t._uU(5),t.qZA(),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(3),t.Q6J("colorNavBar",e.status)("routerLink",t.VKq(3,f,"/"+e.url)),t.xp6(2),t.hij(" ",e.name," ")}}function S(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li",13),t.TgZ(1,"a",16,17),t.NdJ("click",function(){const l=t.CHM(e).index;return t.oxw(2).navBarStatus(l)}),t._uU(3),t.qZA(),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(1),t.Q6J("colorNavBar",e.status)("routerLink",t.VKq(3,f,"/"+e.url)),t.xp6(2),t.hij(" ",e.name," ")}}function k(n,o){if(1&n&&(t.TgZ(0,"div",18),t.TgZ(1,"ul",19),t.YNc(2,S,4,5,"li",10),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.config)}}function I(n,o){}let E=(()=>{class n{constructor(e){this.renderer2=e,this.config=_,this.stateButtonMenu=!1}ngAfterViewInit(){this.navBarStatus(0)}navBarStatus(e){this.navBarComp.forEach((i,r)=>{const l=this.pingComp.get(r);r===e?(this.addNavClassBold(i),this.removePingNav(l)):(this.addNavClassLightweigth(i),this.addPingNav(l))})}addPingNav(e){this.renderer2.addClass(e.nativeElement,"hidden")}removePingNav(e){this.renderer2.removeClass(e.nativeElement,"hidden")}addNavClassBold(e){this.renderer2.addClass(e.nativeElement,"text-black"),this.renderer2.removeClass(e.nativeElement,"text-gray-500")}addNavClassLightweigth(e){this.renderer2.addClass(e.nativeElement,"text-gray-500"),this.renderer2.removeClass(e.nativeElement,"text-black")}handleMenuButton(){this.stateButtonMenu=!this.stateButtonMenu}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],viewQuery:function(e,i){if(1&e&&(t.Gf(A,5),t.Gf(M,5)),2&e){let r;t.iGM(r=t.CRH())&&(i.navBarComp=r),t.iGM(r=t.CRH())&&(i.pingComp=r)}},decls:15,vars:2,consts:[[1,"md:flex","md:items-center","md:justify-between","py-4","px-6","pb-0","shadow-lg","md:pb-4"],[1,"flex","items-center","justify-between","mb-4","md:mb-0"],[1,"leading-none","text-grey-darkest"],["href","#",1,"no-underline","text-grey-darkest","hover:text-black","font-semibold"],[1,"md:hidden","flex","items-center"],[1,"outline-none","mobile-menu-button",3,"click"],["x-show","!showMenu","fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","viewBox","0 0 24 24","stroke","currentColor",1,"w-6","h-6","text-gray-500"],["d","M4 6h16M4 12h16M4 18h16"],[1,"flex"],[1,"hidden","list-reset","md:flex","md:items-center"],["class","li-container",4,"ngFor","ngForOf"],["class","flex md:hidden w-full text-center",4,"ngIf"],["name",""],[1,"li-container"],[1,"ping-items-header"],["pinItem",""],[1,"border-t","block","no-underline","py-2","text-gray-500","hover:text-black","md:border-none","md:p-0","font-semibold",3,"colorNavBar","routerLink","click"],["navComp",""],[1,"flex","md:hidden","w-full","text-center"],[1,"list-reset","w-full"]],template:function(e,i){1&e&&(t.TgZ(0,"header",0),t.TgZ(1,"div",1),t.TgZ(2,"p",2),t.TgZ(3,"a",3),t._uU(4," Hey, mi nombre es "),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.handleMenuButton()}),t.O4$(),t.TgZ(7,"svg",6),t._UZ(8,"path",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.kcU(),t.TgZ(9,"nav",8),t.TgZ(10,"ul",9),t.YNc(11,B,6,5,"li",10),t.qZA(),t.YNc(12,k,3,1,"div",11),t.qZA(),t.qZA(),t.YNc(13,I,0,0,"ng-template",null,12,t.W1O)),2&e&&(t.xp6(11),t.Q6J("ngForOf",i.config),t.xp6(1),t.Q6J("ngIf",i.stateButtonMenu))},directives:[a.sg,a.O5,d.yS,w],styles:[".li-container[_ngcontent-%COMP%]{position:relative;border-radius:.25rem;border-width:2px;--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity));padding-left:.25rem;padding-right:.25rem}@media (min-width: 768px){.li-container[_ngcontent-%COMP%]{margin-left:1rem}}.ping-items-header[_ngcontent-%COMP%]{position:absolute;height:.25rem;width:.25rem;animation:ping 1s cubic-bezier(0,0,.2,1) infinite;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgba(239,68,68,var(--tw-bg-opacity));padding:.25rem;right:-3px;top:-4px}"]}),n})();var h=s(5711),m=s(3189),c=s(9814);const F={fadeToast:(0,c.X$)("fadeAnimation",[(0,c.SB)("default",(0,c.oB)({opacity:1})),(0,c.eR)("void => *",[(0,c.oB)({opacity:0}),(0,c.jt)("{{ fadeIn }}ms")]),(0,c.eR)("default => closing",(0,c.jt)("{{ fadeOut }}ms",(0,c.oB)({opacity:0})))])};class u{constructor(o){this.overlay=o}close(){this.overlay.dispose()}isVisible(){return this.overlay&&this.overlay.overlayElement}getPosition(){return this.overlay.overlayElement.getBoundingClientRect()}}const O=function(n,o){return{fadeIn:n,fadeOut:o}},N=function(n,o){return{value:n,params:o}};let q=(()=>{class n{constructor(e,i,r){this.data=e,this.ref=i,this.toastConfig=r,this.animationState="default",this.iconType="success"===e.type?"done":e.type}ngOnInit(){this.intervalId=setTimeout(()=>this.animationState="closing",5e3)}ngOnDestroy(){clearTimeout(this.intervalId)}close(){this.ref.close()}onFadeFinished(e){const{toState:i}=e;"closing"===i&&"closing"===this.animationState&&this.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.hO),t.Y36(u),t.Y36(m.$d))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-toast"]],decls:4,vars:8,consts:[[1,""],["role","alert",1,"p-4","mb-4","text-sm","text-green-700","bg-green-100","rounded-lg","dark:bg-green-200","dark:text-green-800"],[1,"font-medium"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.NdJ("@fadeAnimation.done",function(l){return i.onFadeFinished(l)}),t._UZ(2,"span",2),t._uU(3),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("@fadeAnimation",t.WLB(5,N,i.animationState,t.WLB(2,O,null==i.toastConfig.animation?null:i.toastConfig.animation.fadeIn,null==i.toastConfig.animation?null:i.toastConfig.animation.fadeOut))),t.xp6(2),t.hij(" ",i.data.text," "))},styles:[""],data:{animation:[F.fadeToast]}}),n})();var j=s(6648);let P=(()=>{class n{constructor(e,i,r){this.overlay=e,this.parentInjector=i,this.toastConfig=r}show(e){const i=this.getPositionStrategy();console.log(i);const r=this.overlay.create({positionStrategy:i,panelClass:"toasts-overlay"}),l=new u(r);this.lastToast=l;const g=this.getInjector(e,l,this.parentInjector),W=new h.C5(q,null,g);return r.attach(W),l}getPositionStrategy(){var e;return this.overlay.position().global().top(this.getPosition()).right((null===(e=this.toastConfig.position)||void 0===e?void 0:e.right)+"px")}getPosition(){var e;return(this.lastToast&&this.lastToast.isVisible()?this.lastToast.getPosition().bottom:null===(e=this.toastConfig.position)||void 0===e?void 0:e.top)+"px"}getInjector(e,i,r){const l=new WeakMap;return l.set(m.hO,e),l.set(u,i),new h.nK(r,l)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(j.aV),t.LFG(t.zs3),t.LFG(m.$d))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const U=["textElement"],H=["blinkElement"];let z=(()=>{class n{constructor(e){this.renderer=e,this.wordArray=["Brandon Castillo Villa"],this.textColor="black",this.fontSize="20px",this.blinkWidth="2px",this.typingSpeedMilliseconds=300,this.deleteSpeedMilliseconds=300,this.wordArrayTwo=["Brandon Castillo Villa"],this.i=0}ngAfterViewInit(){this.initVariables(),this.typingEffect()}initVariables(){this.renderer.setStyle(this.textElement.nativeElement,"color",this.textColor),this.renderer.setStyle(this.textElement.nativeElement,"font-size",this.fontSize),this.renderer.setStyle(this.textElement.nativeElement,"padding","0.1em"),this.renderer.setStyle(this.blinkElement.nativeElement,"border-right-width",this.blinkWidth),this.renderer.setStyle(this.blinkElement.nativeElement,"border-right-color",this.textColor),this.renderer.setStyle(this.blinkElement.nativeElement,"font-size",this.fontSize)}typingEffect(){var e;const i=null===(e=this.wordArray[this.i])||void 0===e?void 0:e.split(""),r=()=>{(null==i?void 0:i.length)>0?(this.textElement.nativeElement.innerHTML+=i.shift(),setTimeout(r,this.typingSpeedMilliseconds)):setTimeout(()=>{this.deletingEffect()},5e3)};r()}deletingEffect(){var e;const i=null===(e=this.wordArray[this.i])||void 0===e?void 0:e.split(""),r=()=>{var l;if(!((null==i?void 0:i.length)>0))return this.i=(null===(l=this.wordArray)||void 0===l?void 0:l.length)>this.i+1?this.i+1:0,this.typingEffect(),!1;i.pop(),this.textElement.nativeElement.innerHTML=i.join(""),setTimeout(r,this.deleteSpeedMilliseconds)};r()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["infinite-typing"]],viewQuery:function(e,i){if(1&e&&(t.Gf(U,5),t.Gf(H,5)),2&e){let r;t.iGM(r=t.CRH())&&(i.textElement=r.first),t.iGM(r=t.CRH())&&(i.blinkElement=r.first)}},inputs:{wordArray:"wordArray",textColor:"textColor",fontSize:"fontSize",blinkWidth:"blinkWidth",typingSpeedMilliseconds:"typingSpeedMilliseconds",deleteSpeedMilliseconds:"deleteSpeedMilliseconds"},decls:5,vars:0,consts:[[1,"max-h-screen"],[1,"text-typed"],["textElement",""],[1,"text-typed-blink"],["blinkElement",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"span",1,2),t._UZ(3,"span",3,4),t.qZA())},styles:[".text-typed[_ngcontent-%COMP%]{padding:0!important}.text-typed-blink[_ngcontent-%COMP%]{border-right-style:solid;animation:1s text-typed-blink infinite}@keyframes text-typed-blink{to{opacity:0}}"]}),n})();function L(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw().alertTextCopied(r.label)}),t.TgZ(1,"div",16),t.TgZ(2,"div",17),t.TgZ(3,"span",18),t._uU(4),t.qZA(),t.TgZ(5,"div",19),t._UZ(6,"div"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(4),t.Oqu(e.label),t.xp6(2),t.Gre("icon-source ",e.url,"")}}function R(n,o){if(1&n&&(t.TgZ(0,"a",20),t.TgZ(1,"div",16),t.TgZ(2,"div",17),t.TgZ(3,"span",18),t._uU(4),t.qZA(),t.TgZ(5,"div",19),t._UZ(6,"div"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("href",e.label,t.LSH),t.xp6(4),t.Oqu(e.label),t.xp6(2),t.Gre("icon-source ",e.url,"")}}function J(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"span",12),t.YNc(2,L,7,4,"div",13),t.YNc(3,R,7,5,"a",14),t.qZA(),t.BQk()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngSwitch",e.type),t.xp6(1),t.Q6J("ngSwitchCase","func")}}let Q=(()=>{class n{constructor(e){this.toastService=e,this.count=1,this.socialIcons=[{url:"bg-gitIcon",label:"https://github.com/brandoncvdev"},{url:"bg-telegramIcon",label:"2212796918",type:"func"},{url:"bg-linkedinIcon",label:"https://linkedin.com/in/brandon-castillo777"},{url:"bg-pinIcon",label:"Puebla, M\xe9xico"}]}showToast(e){this.toastService.show({text:`${e}`,type:"success"}),this.count+=1}alertTextCopied(e){navigator.clipboard.writeText(e),this.showToast("Numero copiado")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["info-bar"]],decls:17,vars:2,consts:[[1,"max-h-full"],[1,"mt-2","font-bold"],[3,"fontSize"],[1,"my-4","font-bold"],[1,""],[1,"flex","justify-around","mt-4"],[4,"ngFor","ngForOf"],[1,"mt-4","flex","justify-center"],[1,"avatar-markup","flex","justify-center"],[1,"avatar-markup-img","flex","justify-center"],[1,"card-zoom"],[1,"card-zoom-image","bg-profileImage"],[1,"",3,"ngSwitch"],["class","cursor-pointer flex flex-wrap",3,"click",4,"ngSwitchCase"],["class","text-center","target","blank",3,"href",4,"ngSwitchDefault"],[1,"cursor-pointer","flex","flex-wrap",3,"click"],[1,"p-4","lg:w-1/3"],[1,"has-tooltip"],[1,"tooltip"],[1,"icon-container"],["target","blank",1,"text-center",3,"href"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"infinite-typing",2),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"h3"),t._uU(5,"Soy desarrollador Front-End (Angular)"),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"p"),t._uU(8," Soy un entusiasta con ganas de seguir mejorando mis habilidades, aprender nuevas tecnolog\xedas y crecer profesionalmente. "),t.qZA(),t.qZA(),t.TgZ(9,"div",5),t.YNc(10,J,4,2,"ng-container",6),t.qZA(),t._UZ(11,"div"),t.TgZ(12,"div",7),t.TgZ(13,"div",8),t.TgZ(14,"div",9),t.TgZ(15,"div",10),t._UZ(16,"div",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("fontSize","60px"),t.xp6(8),t.Q6J("ngForOf",i.socialIcons))},directives:[z,a.sg,a.RF,a.n9,a.ED],styles:[".avatar-markup[_ngcontent-%COMP%]{height:10rem;width:10rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.avatar-markup[_ngcontent-%COMP%]   .avatar-markup-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:auto;height:9rem;width:9rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.container-typing[_ngcontent-%COMP%]{height:180px;height:12rem}@media (min-width: 480px){.container-typing[_ngcontent-%COMP%]{height:24rem}}@media (min-width: 976px){.container-typing[_ngcontent-%COMP%]{height:15rem}}.card-zoom[_ngcontent-%COMP%]{position:relative;margin:auto;display:flex;height:9rem;width:9rem;align-items:center;justify-content:center}.card-zoom-image[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;border-radius:9999px;background-size:cover;background-position:center}"]}),n})();var Y=s(3668);function $(n,o){1&n&&(t.ynx(0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"span",3),t.O4$(),t.TgZ(4,"svg",4),t._UZ(5,"path",5),t.qZA(),t.qZA(),t.kcU(),t.TgZ(6,"p",6),t._uU(7,"Cargando..."),t.qZA(),t.qZA(),t.BQk())}let G=(()=>{class n{constructor(e){this.loader=e,this.loading$=this.loader.loading$}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Y.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["spinner"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"overlay"],[1,"absolute","top-1/2","left-1/2","transform","z-50","text-center"],[1,"inline-block","animate-spin","rounded-full","p-2","bg-teal-400","text-black","text-sm"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-6","h-6","mx-auto"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"],[1,"text-xl"]],template:function(e,i){1&e&&(t.YNc(0,$,8,0,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.loading$))},directives:[a.O5],pipes:[a.Ov],styles:[".overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:41;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}"]}),n})();const V=[{path:"",component:(()=>{class n{constructor(e){this.router=e}ngOnInit(){this.router.navigateByUrl("/sobre-mi")}prepareRoute(e){return(null==e?void 0:e.isActivated)||""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-full-layout"]],hostVars:1,hostBindings:function(e,i){2&e&&t.d8E("@fadeInAnimation",void 0)},decls:9,vars:0,consts:[[1,"h-full"],[1,"flex","flex-wrap","px-6","bg-white"],[1,"md:w-1/3","w-full"],[1,"md:w-2/3","w-full","overflow-auto"],["outlet","outlet"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header"),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t._UZ(4,"info-bar"),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"router-outlet",null,4),t.qZA(),t.qZA(),t._UZ(8,"spinner"),t.qZA())},directives:[E,Q,d.lC,G],styles:["section[_ngcontent-%COMP%]{max-height:100%}"],data:{animation:[b.B]}}),n})(),children:T}];let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,y,C,Z,d.Bz.forChild(V)]]}),n})()},5549:(v,p,s)=>{s.d(p,{B:()=>t});var a=s(9814);(0,a.X$)("routeAnimations",[(0,a.eR)("* <=> *",[(0,a.IO)(":enter, :leave",[(0,a.oB)({position:"absolute",left:0,width:"100%",opacity:0,transform:"scale(0) translateY(100%)"})]),(0,a.IO)(":enter",[(0,a.jt)("600ms ease",(0,a.oB)({opacity:1,transform:"scale(1) translateY(0)"}))])])]);const t=(0,a.X$)("fadeInAnimation",[(0,a.eR)(":enter",[(0,a.oB)({opacity:0}),(0,a.jt)(".3s",(0,a.oB)({opacity:1}))])])}}]);