(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,c){},47:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(37),r=c.n(a),i=c(18),o=c(3),l=(c(45),c(4)),j=c(38),u=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return Object(j.a)({},e)}},b=c(0),d={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},O=Object(n.createContext)(d),h=function(e){var t=e.children,c=Object(n.useReducer)(u,d),s=Object(l.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a.user))}),[a.user]),Object(b.jsx)(O.Provider,{value:{user:a.user,isFetching:a.isFetching,error:a.error,dispatch:r},children:t})},p=c(6),x=c(14),m=c(91),v=c(92),f=(c(47),c(15)),g=c.n(f);function N(e){var t=e.type,c=e.setGenre,s=Object(n.useState)({}),a=Object(l.a)(s,2),r=a[0],i=a[1],j=Object(o.g)(),u=g.a.create({baseURL:"http://179.61.219.126/api/"});return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(p.a)().mark((function e(){var c;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movies/random?type=".concat(t),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:c=e.sent,i(c.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,u]),console.log(r),Object(b.jsxs)("div",{className:"feature",children:[t&&Object(b.jsxs)("div",{className:"fea-category",children:[Object(b.jsx)("span",{children:"movies"===t?"Movies":"Series"}),Object(b.jsxs)("select",{name:"genre",id:"genre",onChange:function(e){return c(e.target.value)},children:[Object(b.jsx)("option",{children:"Genre"}),Object(b.jsx)("option",{value:"adventure",children:"Adventure"}),Object(b.jsx)("option",{value:"comedy",children:"Comedy"}),Object(b.jsx)("option",{value:"crime",children:"Crime"}),Object(b.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(b.jsx)("option",{value:"historical",children:"Historical"}),Object(b.jsx)("option",{value:"horror",children:"Horror"}),Object(b.jsx)("option",{value:"romance",children:"Romance"}),Object(b.jsx)("option",{value:"sci-fi",children:"Sci-fi"}),Object(b.jsx)("option",{value:"thriller",children:"Thriller"}),Object(b.jsx)("option",{value:"western",children:"Western"}),Object(b.jsx)("option",{value:"animation",children:"Animation"}),Object(b.jsx)("option",{value:"drama",children:"Drama"}),Object(b.jsx)("option",{value:"documentary",children:"Documentary"})]})]}),Object(b.jsx)("img",{src:r.img,alt:""}),Object(b.jsxs)("div",{className:"fea-info",children:[Object(b.jsx)("img",{src:r.imgTitle,alt:""}),Object(b.jsx)("span",{className:"info-desc",children:r.desc}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsxs)("button",{className:"play-btn",onClick:function(){j.push("/watch")},children:[Object(b.jsx)(m.a,{}),Object(b.jsx)("span",{children:"Play"})]}),Object(b.jsxs)("button",{className:"more-btn",children:[Object(b.jsx)(v.a,{}),Object(b.jsx)("span",{children:"Info"})]})]})]})]})}var w=c(96),y=c(97),S=(c(72),c(93)),k=c(94),C=c(95);function I(e){var t=e.index,c=e.item,s=Object(n.useState)(!1),a=Object(l.a)(s,2),r=a[0],j=a[1],u=Object(n.useState)({}),d=Object(l.a)(u,2),O=d[0],h=d[1],v=Object(o.g)(),f=g.a.create({baseURL:"http://179.61.219.126/api/"});return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(p.a)().mark((function e(){var t;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/movies/find/"+c,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:t=e.sent,h(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c,f]),Object(b.jsx)(i.b,{to:{pathname:"/watch",movies:O},children:Object(b.jsxs)("div",{className:"movlistItem",style:{left:r&&225*t-50+2.5*t},onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[Object(b.jsx)("img",{src:null===O||void 0===O?void 0:O.imgSm,alt:""}),r&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("video",{src:O.trailer,autoPlay:!0,loop:!0}),Object(b.jsxs)("div",{className:"itemInfo",children:[Object(b.jsxs)("div",{className:"icons",children:[Object(b.jsx)("span",{onClick:function(){v.push("/watch")},children:Object(b.jsx)(m.a,{className:"icon"})}),Object(b.jsx)(S.a,{className:"icon"}),Object(b.jsx)(k.a,{className:"icon"}),Object(b.jsx)(C.a,{className:"icon"})]}),Object(b.jsxs)("div",{className:"itemInfoTop",children:[Object(b.jsx)("span",{children:O.duration}),Object(b.jsxs)("span",{className:"limit",children:["+",O.limit]}),Object(b.jsx)("span",{children:O.year})]}),Object(b.jsx)("div",{className:"desc",children:O.desc}),Object(b.jsx)("div",{className:"genre",children:O.genre})]})]})]})})}c(73);function L(e){var t=e.category,c=Object(n.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(0),o=Object(l.a)(i,2),j=o[0],u=o[1],d=Object(n.useRef)(),O=function(e){r(!0);var t=d.current.getBoundingClientRect().x-50;"left"===e&&j>0&&(u(j-1),d.current.style.transform="translateX(".concat(230+t,"px)")),"right"===e&&j<5&&(u(j+1),d.current.style.transform="translateX(".concat(-230+t,"px)"))};return Object(b.jsxs)("div",{className:"movlist",children:[Object(b.jsx)("span",{className:"listTitle",children:t.title}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(w.a,{className:"sliderArrow left",onClick:function(){return O("left")},style:{display:!a&&"none"}}),Object(b.jsx)("div",{className:"container",ref:d,children:t.content.map((function(e,t){return Object(b.jsx)(I,{index:t,item:e})}))}),Object(b.jsx)(y.a,{className:"sliderArrow right",onClick:function(){return O("right")}})]})]})}c(74);var R=c(98),T=c(99),F=c(100),E=function(e){return{type:"LOGIN_SUCCESS",payload:e}},U=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(O).dispatch;return window.onscroll=function(){return s(0!==window.pageYOffset),function(){return window.onscroll=null}},Object(b.jsx)("div",{className:c?"navbar scrolled":"navbar",children:Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsxs)("div",{className:"nav-left",children:[Object(b.jsx)("img",{src:"https://raw.githubusercontent.com/edielam/ReactNodeJava/main/practice/JEFLIX2-removebg-preview.png",alt:""}),Object(b.jsx)(i.b,{to:"/",className:"link",children:Object(b.jsx)("span",{children:"Homepage"})}),Object(b.jsx)(i.b,{to:"/series",className:"link",children:Object(b.jsx)("span",{children:"Series"})}),Object(b.jsx)(i.b,{to:"/movies",className:"link",children:Object(b.jsx)("span",{children:"Movies"})}),Object(b.jsx)("span",{children:"New and Popular"}),Object(b.jsx)("span",{children:"My List"})]}),Object(b.jsxs)("div",{className:"nav-right",children:[Object(b.jsx)(R.a,{className:"nav-icon"}),Object(b.jsx)("span",{children:"KID"}),Object(b.jsx)(T.a,{className:"nav-icon"}),Object(b.jsx)("img",{src:"https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Sophia-Nomvete-Rings-of-Power-Still-Amazon-Publicity-H-2022.jpg?w=1296",alt:""}),Object(b.jsxs)("div",{className:"nav-profile",children:[Object(b.jsx)(F.a,{className:"nav-icon"}),Object(b.jsxs)("div",{className:"nav-options",children:[Object(b.jsx)("span",{children:"Settings"}),Object(b.jsx)("span",{onClick:function(){return a({type:"LOGOUT"})},children:"Logout"})]})]})]})]})})},J=(c(75),function(e){var t=e.type,c=Object(n.useState)([]),s=Object(l.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(null),o=Object(l.a)(i,2),j=o[0],u=o[1],d=g.a.create({baseURL:"http://179.61.219.126/api/"});return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(p.a)().mark((function e(){var c;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("lists".concat(t?"?type="+t:"").concat(j?"&genre="+j:""),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:c=e.sent,r(c.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,j,d]),Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(U,{}),Object(b.jsx)(N,{type:t,setGenre:u}),a.map((function(e){return Object(b.jsx)(L,{category:e})}))]})}),A=g.a.create({baseURL:"http://179.61.219.126/api/"}),G=function(){var e=Object(x.a)(Object(p.a)().mark((function e(t,c){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,e.next=4,A.post("auth/login",t);case 4:n=e.sent,c(E(n.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"LOGIN_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}();c(76);function P(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(l.a)(a,2),i=r[0],o=r[1],j=Object(n.useContext)(O).dispatch;return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("div",{className:"log-top",children:Object(b.jsx)("div",{className:"log-wrapper",children:Object(b.jsx)("img",{className:"logo",src:"https://raw.githubusercontent.com/edielam/ReactNodeJava/main/practice/JEFLIX2-removebg-preview.png",alt:""})})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsx)("input",{type:"email",placeholder:"Email or phone number",onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("button",{className:"login-btn",onClick:function(){var e;e.preventDefault(),G({email:c,password:i},j)},children:"Sign In"}),Object(b.jsxs)("span",{children:["New to Jetflix? ",Object(b.jsx)("b",{children:"Sign up now."})]}),Object(b.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(b.jsx)("b",{children:"Learn more"}),"."]})]})})]})}c(77);function _(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(l.a)(a,2),i=r[0],j=r[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),O=d[0],h=d[1],m=Object(o.g)(),v=Object(n.useRef)(),f=Object(n.useRef)(),N=Object(n.useRef)(),w=g.a.create({baseURL:"http://179.61.219.126/api/"}),y=function(){var e=Object(x.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(f.current.value),h(N.current.value),e.prev=3,e.next=6,w.post("auth/register",{email:c,username:O,password:i});case 6:m.push("/login"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"registeration",children:[Object(b.jsxs)("div",{className:"reg-top",children:[Object(b.jsx)("img",{className:"logo",src:"https://raw.githubusercontent.com/edielam/ReactNodeJava/main/practice/JEFLIX2-removebg-preview.png",alt:""}),Object(b.jsx)("button",{onClick:function(){m.push("/login")},children:"Sign In"})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(b.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(b.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),c?Object(b.jsxs)("form",{className:"input",children:[Object(b.jsx)("input",{type:"username",placeholder:"username",ref:N}),Object(b.jsx)("input",{type:"password",placeholder:"password",ref:f}),Object(b.jsx)("button",{className:"reg-btn",onClick:y,children:"Start"})]}):Object(b.jsxs)("div",{className:"input",children:[Object(b.jsx)("input",{type:"email",placeholder:"email address",ref:v}),Object(b.jsx)("button",{className:"reg-btn",onClick:function(){s(v.current.value)},children:"Get Started"})]})]})]})}var B=c(101);c(78);function M(){var e=Object(o.g)();return Object(b.jsxs)("div",{className:"watch",children:[Object(b.jsx)("button",{className:"back",onClick:function(){e.push("/")},children:Object(b.jsx)(B.a,{className:"svg_icons"})}),Object(b.jsx)("iframe",{className:"video",width:"966",height:"543",src:"https://www.youtube.com/embed/x8UAUAuKNcU?autoplay=1",title:"The Lord of the Rings: The Rings of Power - Official Trailer | Prime Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}var D=function(){var e=Object(n.useContext)(O).user;return Object(b.jsx)(i.a,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",children:e?Object(b.jsx)(J,{}):Object(b.jsx)(o.a,{to:"/register"})}),Object(b.jsx)(o.b,{path:"/register",children:e?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsx)(_,{})}),Object(b.jsx)(o.b,{path:"/login",children:e?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsx)(P,{})}),e&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.b,{path:"/movies",children:Object(b.jsx)(J,{type:"movies"})}),Object(b.jsx)(o.b,{path:"/series",children:Object(b.jsx)(J,{type:"series"})}),Object(b.jsx)(o.b,{path:"/watch",children:Object(b.jsx)(M,{})})]})]})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{children:Object(b.jsx)(D,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.932f7ce5.chunk.js.map