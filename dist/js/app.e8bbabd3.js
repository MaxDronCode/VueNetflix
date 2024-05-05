(function(){"use strict";var a={7019:function(a,e,i){var t=i(5130),n=i(6768),r=i.p+"img/logo.6626ef02.webp";const l=(0,n.Lk)("img",{class:"logo-img",alt:"Vue logo",src:r},null,-1),o=(0,n.Lk)("h2",null,"Tendencias",-1),s={class:"pelis"},u=(0,n.Lk)("h2",null,"Últimos Trailers",-1),d={class:"trailers"};function c(a,e,i,t,r,c){const v=(0,n.g2)("NavComponent"),p=(0,n.g2)("PeliComponent"),b=(0,n.g2)("TrailerComponent"),m=(0,n.g2)("UneteComponent"),g=(0,n.g2)("FooterComponent");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(v),l,o,(0,n.Lk)("div",s,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.peliculas,((a,e)=>((0,n.uX)(),(0,n.Wv)(p,{key:e,imgUrl:a.imgUrl,tituloPeli:a.tituloPeli,puntuacionPeli:a.puntuacionPeli},null,8,["imgUrl","tituloPeli","puntuacionPeli"])))),128))]),u,(0,n.Lk)("div",d,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.trailers,((a,e)=>((0,n.uX)(),(0,n.Wv)(b,{key:e,imgUrl:a.imgUrl,tituloTrailer:a.tituloTrailer},null,8,["imgUrl","tituloTrailer"])))),128))]),(0,n.bF)(m,{class:"unete"}),(0,n.bF)(g,{class:"footer"})],64)}const v=a=>((0,n.Qi)("data-v-f07e4cc4"),a=a(),(0,n.jt)(),a),p=v((()=>(0,n.Lk)("a",{href:"#"},"Index",-1))),b=v((()=>(0,n.Lk)("a",{href:"#"},"Peliculas",-1))),m=v((()=>(0,n.Lk)("a",{href:"#"},"Detalle",-1))),g=v((()=>(0,n.Lk)("a",{href:"#"},"Login",-1))),f=[p,b,m,g];function A(a,e,i,t,r,l){return(0,n.uX)(),(0,n.CE)("nav",null,f)}var h={name:"NavComponent"},U=i(1241);const P=(0,U.A)(h,[["render",A],["__scopeId","data-v-f07e4cc4"]]);var T=P,L=i(4232);const S={class:"peli"},k=["src"];function w(a,e,i,t,r,l){return(0,n.uX)(),(0,n.CE)("div",S,[(0,n.Lk)("img",{src:i.imgUrl,alt:"Descripció Película"},null,8,k),(0,n.Lk)("p",null,(0,L.v_)(i.tituloPeli),1),(0,n.Lk)("p",null,(0,L.v_)(i.puntuacionPeli),1)])}var C={name:"PeliComponent",props:{imgUrl:String,tituloPeli:String,puntuacionPeli:String}};const y=(0,U.A)(C,[["render",w],["__scopeId","data-v-11424a1a"]]);var E=y;const j=a=>((0,n.Qi)("data-v-d17246e6"),a=a(),(0,n.jt)(),a),K={class:"container"},I=["src"],R=j((()=>(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[(0,n.Lk)("path",{fill:"#ffffff",d:"m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"})],-1)));function x(a,e,i,t,r,l){return(0,n.uX)(),(0,n.CE)("div",K,[(0,n.Lk)("div",{class:"trailer",style:(0,L.Tr)({backgroundImage:"url("+i.imgUrl+")"})},[(0,n.Lk)("img",{src:r.dotsUrl,alt:"desc",class:"dots"},null,8,I),R],4),(0,n.Lk)("p",null,(0,L.v_)(i.tituloTrailer),1)])}var F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABSpJREFUaEPtWV1oXEUUPudu0mUbtN1FMKli/av4iy+isVUULdoo1dbAvgix0t2Zm2AjFAoWtK71D0UjRpvsjNXYgi+pUStVrKhQrNjgmxRaf7DxwUZ8yKZVk2wk+cyUtGx279177yZ3u5Sep8vcM98535wzM2dmmM4R4XOEB50nUmuRXPCIaK2vIaKbpqenlzPzciK6fJb0EIDfiWiorq7ux1Qq9etCDsa8iezevbthbGyslZlXE9E9RHSJTwf/IKJvAHy1ePHigba2tn999nNUq5hIf39/ZGRkJM3MGSK6eD5OENGfzLzt+PHj72YymelKsCoiorVeDeAtIrq2EqNl+hwBsMm27a+D4gYikslkrMbGxheY+Smi0FY8ENF2IcRzzGy+fYlvIn19fUvz+fwAM5t5ELoA2D85OZns7Ow86ceYLyI9PT3xSCQySEQr/IAuoM5PkUhkZSqVGvHC9CRiJvXo6OgBAKu8wEL6fzAej9+dTCanyuF7ElFKvUNEqZCc9AurpZSyYiJa6xYAn/u1FqYeM68RQux3s+EaEZNSuVzuKBFdHaaDAbAPDw8P3+y2z7gSUUq1E1FPAEOhqzKzEEKYVC8RRyLd3d0XRqPRISKKh+5dMAN/xWKxK53KGUciSikzsbLBbFRH2y0qbkTMBG+pjmvBrADYZ9v22uJeJUS6urpiDQ0No0S0KJiJqmlPmpSXUo4VWiwhorVuBfBh1dyqwBCAdbZt7y1LJJvNvsTMWyvAr1oXANtt237WKyI7AWx08WoXgLej0ejhiYmJ65j5MWZ+0kX3GICtzHyqJAdwLzO/QkTm1FgiAN60LOv9+vr6o/l8/kbLsjYBaHPBVlJKuywRpdQ+InqwZDIxfyeEuKO4XSllQvxQcbtlWben0+lDhe1KKdP/22JdAB/btv2IA7bpf5sf/ZI5opT6gYhucRiJbVLK54vbtdYdAHYUtf8jpbzAaTSVUhNEFC38B6Ddtu2S5V4pZdLHnECL5Xsp5Uqv1Bqcqa9unSeRk1LKJS5E8sUrYgVEBqWUzV5EPgHwsIMTB6WUdzqE/1MiKlnXiahZSmnOMGekt7d3lWVZBx2wP5JSti5oammtewHMmUinDZjJKoQwx9xTMpMm5vtlp5Enop8ty1qTTqePmf/ZbHYFM5v5Z66LSoSZtwghXivAfpWItrhg75BSPlE2ImXy0gXzrDQ/LaV8sSyRbDa7lplNutSsAGixbfuLskT6+/sX5XK5v2u4RBmLx+PxZDJpSpUz4lg0aq0/A/BALYaEmfcKIdYV++ZW/dbcoarA8bSUcqdfImYP+I2IEjUWlZFYLHaZ74PV7HK5mZlfrzEim2c22jccl283R5VS9bNRubRGyJjb+yuklP8FImKUtdYbAPTVCJENUspdbr6UvaADwFrrPURUUj5Uk5ypjk0JU+5S2/Omsbu7OxqNRk195FQRh84HwKFEInFX8b7ha9UqVlJKXURE5mxwVeiezzXwSyQSaV6QS+zTuLM38qbom3MOCJHYgampqfUdHR05PzY8U6sQJJPJ1DU1NWkietwPeKU6AHoSiUSn1w28Z4ni5YDW+n4AZo+5wUs34P8jzNwuhDgQsF/lz2fmGW7ZsmUbAZjj77wfQ4nomeHh4feq+hhaOFrmeXp8fPzR2SX6voAj+eXMm/xALBb74Kw9Tzs5rJRawszrAVxPREsALGXmpQDMo+YJZjY3mKPMbF5vzd5wIiBxV/VAk32hjIaBc55IGKM6H8xzJiL/Awyn70IdqQkzAAAAAElFTkSuQmCC",M={name:"TrailerComponent",props:{imgUrl:String,tituloTrailer:{type:String,default:"Texto por defecto"}},data(){return{dotsUrl:F}}};const D=(0,U.A)(M,[["render",x],["__scopeId","data-v-d17246e6"]]);var q=D;const z={class:"container"},X=(0,n.Fv)('<div class="div1" data-v-de4322a6><h2 data-v-de4322a6>Únete Hoy</h2><p data-v-de4322a6>Obtén acceso para mantener tus propias <span data-v-de4322a6>listas personales personalizadas, hacer un seguimiento de lo que has visto</span> y buscar y filtrar <span data-v-de4322a6>qué ver a continuación</span>, independientemente de si está en los cines, en la televisión o disponible en servicios de streaming populares como Disney Plus, Amazon Prime Video, Netflix, fuboTV y Apple TV Plus.</p><button href="#" data-v-de4322a6>Regístrate</button></div><div class="div2" data-v-de4322a6><ul data-v-de4322a6><li data-v-de4322a6>Disfruta de TMDB sin anuncios</li><li data-v-de4322a6>Mantén una lista de seguimiento personal</li><li data-v-de4322a6>Filtra por tus suscripciones a servicios de retransmisión y encuentra algo que ver</li><li data-v-de4322a6>Registra las películas y series que has visto</li><li data-v-de4322a6>Crea listas personalizadas</li><li data-v-de4322a6>Aporta y mejora nuestra base de datos</li></ul></div>',2),N=[X];function V(a,e,i,t,r,l){return(0,n.uX)(),(0,n.CE)("div",z,N)}var B={name:"UneteComponent"};const J=(0,U.A)(B,[["render",V],["__scopeId","data-v-de4322a6"]]);var O=J;const Z=a=>((0,n.Qi)("data-v-1ae6bcb7"),a=a(),(0,n.jt)(),a),Y={class:"container"},W={class:"div1"},Q=["src"],H=Z((()=>(0,n.Lk)("button",null,"ÚNETE A LA COMUNIDAD",-1))),G=(0,n.Fv)('<div class="div-general" data-v-1ae6bcb7><div class="div2" data-v-1ae6bcb7><p data-v-1ae6bcb7>LO BÁSICO</p><a href="" data-v-1ae6bcb7>Sobre MaxFlix</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Contacto</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Foros de Ayuda</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>API</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Estado del Sistema</a></div><div class="div2" data-v-1ae6bcb7><p data-v-1ae6bcb7>PARTICIPA</p><a href="" data-v-1ae6bcb7>Guía de Aportaciones</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Añadir Nueva Pelicula</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Añadir Nueva Serie</a><br data-v-1ae6bcb7></div><div class="div2" data-v-1ae6bcb7><p data-v-1ae6bcb7>COMUNIDAD</p><a href="" data-v-1ae6bcb7>Directrices</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Discusiones</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Tabla de Clasificación</a><br data-v-1ae6bcb7></div><div class="div2" data-v-1ae6bcb7><p data-v-1ae6bcb7>LEGAL</p><a href="" data-v-1ae6bcb7>Términos de uso</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Términos de uso de la API</a><br data-v-1ae6bcb7><a href="" data-v-1ae6bcb7>Política de Privacidad</a></div></div>',1);function _(a,e,i,t,r,l){return(0,n.uX)(),(0,n.CE)("div",Y,[(0,n.Lk)("div",W,[(0,n.Lk)("img",{src:r.logoUrl,alt:"descripcion"},null,8,Q),H]),G])}var $=i.p+"img/logoMaxFlix.ef00543f.webp",aa={name:"FooterComponent",data(){return{logoUrl:$}}};const ea=(0,U.A)(aa,[["render",_],["__scopeId","data-v-1ae6bcb7"]]);var ia=ea,ta={name:"App",components:{NavComponent:T,PeliComponent:E,TrailerComponent:q,UneteComponent:O,FooterComponent:ia},data(){return{peliculas:[{imgUrl:"img/theMiracleClub.webp",tituloPeli:"tituloPeli",puntuacionPeli:"8.5"},{imgUrl:"img/RebelMoon.jpg",tituloPeli:"Rebel Moon",puntuacionPeli:"8.4"},{imgUrl:"img/freuds.jpg",tituloPeli:"Freud's Last Session",puntuacionPeli:"8.3"},{imgUrl:"img/thanksgiving.webp",tituloPeli:"Thanksgiving",puntuacionPeli:"8.2"},{imgUrl:"img/theKitchen.webp",tituloPeli:"The Kitchen",puntuacionPeli:"8.1"},{imgUrl:"img/laSociedadDeLaNieve.webp",tituloPeli:"La Sociedad de la Nieve",puntuacionPeli:"8"},{imgUrl:"img/anatomiaDeUnaCaida.jpg",tituloPeli:"Anatomia de una Caída",puntuacionPeli:"7.9"},{imgUrl:"img/chickenRun.jpg",tituloPeli:"Chicken Run",puntuacionPeli:"7.8"},{imgUrl:"img/granTurismo.jpg",tituloPeli:"Gran Turismo",puntuacionPeli:"7.7"},{imgUrl:"img/killersOfTheFlowerMoon.jpg",tituloPeli:"Killers Of The Flower Moon",puntuacionPeli:"7.6"},{imgUrl:"img/leaveTheWorldBehind.jpg",tituloPeli:"Leave The World Behind",puntuacionPeli:"7.5"},{imgUrl:"img/napoleon.jpg",tituloPeli:"Napoleon",puntuacionPeli:"7.4"}],trailers:[{imgUrl:"img/cobraKai.jpg",tituloTrailer:"Cobra Kai"},{imgUrl:"img/starWarsLaRemesaMala.jpg",tituloTrailer:"Star Wars: La Remesa Mala"},{imgUrl:"img/starWarsVisions.jpg",tituloTrailer:"Star Wars: Visions"},{imgUrl:"img/atlas.jpg",tituloTrailer:"Atlas"},{imgUrl:"img/garfield.jpg",tituloTrailer:"Garfield"},{imgUrl:"img/elReinoDelPlanetaDeLosSimios.jpg",tituloTrailer:"El Reino Del Planeta De Los Simios"},{imgUrl:"img/theBoys.jpg",tituloTrailer:"The Boys"}]}}};const na=(0,U.A)(ta,[["render",c]]);var ra=na;(0,t.Ef)(ra).mount("#app")}},e={};function i(t){var n=e[t];if(void 0!==n)return n.exports;var r=e[t]={exports:{}};return a[t].call(r.exports,r,r.exports,i),r.exports}i.m=a,function(){var a=[];i.O=function(e,t,n,r){if(!t){var l=1/0;for(d=0;d<a.length;d++){t=a[d][0],n=a[d][1],r=a[d][2];for(var o=!0,s=0;s<t.length;s++)(!1&r||l>=r)&&Object.keys(i.O).every((function(a){return i.O[a](t[s])}))?t.splice(s--,1):(o=!1,r<l&&(l=r));if(o){a.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}r=r||0;for(var d=a.length;d>0&&a[d-1][2]>r;d--)a[d]=a[d-1];a[d]=[t,n,r]}}(),function(){i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,{a:e}),e}}(),function(){i.d=function(a,e){for(var t in e)i.o(e,t)&&!i.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){i.p="/"}(),function(){var a={524:0};i.O.j=function(e){return 0===a[e]};var e=function(e,t){var n,r,l=t[0],o=t[1],s=t[2],u=0;if(l.some((function(e){return 0!==a[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(s)var d=s(i)}for(e&&e(t);u<l.length;u++)r=l[u],i.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return i.O(d)},t=self["webpackChunkvuenetflix"]=self["webpackChunkvuenetflix"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=i.O(void 0,[504],(function(){return i(7019)}));t=i.O(t)})();
//# sourceMappingURL=app.e8bbabd3.js.map