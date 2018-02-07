webpackJsonp([1],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t("/oeL"),o=function(){return function(){}}(),e=function(){function n(n,l){var t=this;this.authorities=[],this.authenticated=n,l.map(function(n){return t.authorities.push(new i(n.authority))})}return n.prototype.isAdmin=function(){return this.authorities.some(function(n){return n.authority.indexOf("ADMIN")>-1})},n}(),i=function(){return function(n){this.authority=n}}(),r=t("CPp0"),a=function(){function n(n){this.http=n}return n.prototype.me=function(){return this.http.get("/me",this.makeOptions())},n.prototype.logout=function(){return this.http.post("/logout","",this.makeOptions())},n.prototype.getBooks=function(){return this.http.get("/book-service/books",this.makeOptions())},n.prototype.updateBook=function(n){return this.http.put("/book-service/books/"+n.id,n,this.makeOptions())},n.prototype.deleteBook=function(n){return this.http.delete("/book-service/books/"+n.id,this.makeOptions())},n.prototype.createBook=function(n){return this.http.post("/book-service/books",n,this.makeOptions())},n.prototype.getRatings=function(n){return this.http.get("/rating-service/ratings?bookId="+n,this.makeOptions())},n.prototype.createRating=function(n){return this.http.post("/rating-service/ratings",n,this.makeOptions())},n.prototype.deleteRating=function(n){return this.http.delete("/rating-service/ratings/"+n,this.makeOptions())},n.prototype.updateRating=function(n){return this.http.put("/rating-service/ratings/"+n.id,n,this.makeOptions())},n.prototype.makeOptions=function(){var n=new r.d({"Content-Type":"application/json"});return new r.g({headers:n})},n.ctorParameters=function(){return[{type:r.e}]},n}(),c=function(){function n(n){this.httpService=n,this.selectedBook=null,this.principal=new e(!1,[]),this.loginFailed=!1}return n.prototype.ngOnInit=function(){var n=this;this.httpService.me().subscribe(function(l){var t=l.json();console.log(t),n.principal=new e(t.authenticated,t.authorities)},function(n){console.log(n)})},n.prototype.onLogout=function(){var n=this;this.httpService.logout().subscribe(function(l){200===l.status&&(n.loginFailed=!1,n.principal=new e(!1,[]),window.location.replace(l.url))},function(n){console.log(n)})},n.ctorParameters=function(){return[{type:a}]},n}(),s=t("qbdv"),p=[[".custom-close[_ngcontent-%COMP%]{float:right}"]],_=u._5({encapsulation:0,styles:p,data:{}});function f(n){return u._22(0,[(n()(),u._8(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u._21(-1,null,["Admin"]))],null,null)}function h(n){return u._22(0,[(n()(),u._8(0,0,null,null,1,"button",[["class","btn btn-link"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0,o=n.component;"click"===l&&(u=!1!==o.onLogout()&&u);return u},null,null)),(n()(),u._21(-1,null,["Logout"]))],null,null)}function g(n){return u._22(0,[(n()(),u._8(0,0,null,null,1,"button",[["class","btn btn-link"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0,o=n.component;"click"===l&&(u=!1!==o.onLogout()&&u);return u},null,null)),(n()(),u._21(-1,null,["Logout"]))],null,null)}function b(n){return u._22(0,[(n()(),u._8(0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(n()(),u._21(-1,null,["Anyone can view the books."]))],null,null)}function d(n){return u._22(0,[(n()(),u._8(0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(n()(),u._21(-1,null,["Users can view and create ratings"]))],null,null)}function v(n){return u._22(0,[(n()(),u._8(0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(n()(),u._21(-1,null,["Admins can do anything! "]))],null,null)}function k(n){return u._22(0,[(n()(),u._8(0,0,null,null,23,"nav",[["class","navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse"]],null,null,null,null,null)),(n()(),u._21(-1,null,["\n  "])),(n()(),u._8(2,0,null,null,3,"button",[["aria-controls","navbarCollapse"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler navbar-toggler-right"],["data-target","#navbarCollapse"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(n()(),u._21(-1,null,["\n    "])),(n()(),u._8(4,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(n()(),u._21(-1,null,["\n  "])),(n()(),u._21(-1,null,["\n  "])),(n()(),u._8(7,0,null,null,3,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),u._21(-1,null,["Book Rater "])),(n()(),u._2(16777216,null,null,1,null,f)),u._6(10,16384,null,0,s.c,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u._21(-1,null,["\n  "])),(n()(),u._2(16777216,null,null,1,null,h)),u._6(13,16384,null,0,s.c,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u._21(-1,null,["\n  "])),(n()(),u._8(15,0,null,null,7,"div",[["class","collapse navbar-collapse"],["id","navbarCollapse"]],null,null,null,null,null)),(n()(),u._21(-1,null,["\n    "])),(n()(),u._8(17,0,null,null,1,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(n()(),u._21(-1,null,["\n    "])),(n()(),u._21(-1,null,["\n    "])),(n()(),u._2(16777216,null,null,1,null,g)),u._6(21,16384,null,0,s.c,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u._21(-1,null,["\n  "])),(n()(),u._21(-1,null,["\n"])),(n()(),u._21(-1,null,["\n\n"])),(n()(),u._8(25,0,null,null,16,"div",[["class","jumbotron"]],null,null,null,null,null)),(n()(),u._21(-1,null,["\n  "])),(n()(),u._8(27,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(n()(),u._21(-1,null,["\n    "])),(n()(),u._8(29,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u._21(-1,null,["Book Rater App"])),(n()(),u._21(-1,null,["\n    "])),(n()(),u._2(16777216,null,null,1,null,b)),u._6(33,16384,null,0,s.c,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u._21(-1,null,["\n    "])),(n()(),u._2(16777216,null,null,1,null,d)),u._6(36,16384,null,0,s.c,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u._21(-1,null,["\n    "])),(n()(),u._2(16777216,null,null,1,null,v)),u._6(39,16384,null,0,s.c,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u._21(-1,null,["\n\n  "])),(n()(),u._21(-1,null,["\n"])),(n()(),u._21(-1,null,["\n\n"]))],function(n,l){var t=l.component;n(l,10,0,t.principal.isAdmin()),n(l,13,0,t.principal.authenticated),n(l,21,0,t.principal.authenticated),n(l,33,0,!t.principal.authenticated),n(l,36,0,t.principal.authenticated&&!t.principal.isAdmin()),n(l,39,0,t.principal.isAdmin())},null)}var m=u._3("app-root",c,function(n){return u._22(0,[(n()(),u._8(0,0,null,null,1,"app-root",[],null,null,null,k,_)),u._6(1,114688,null,0,c,[a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),y=t("fc+i"),O=t("bm2B"),I=u._4(o,[c],function(n){return u._18([u._19(512,u.i,u._0,[[8,[m]],[3,u.i],u.x]),u._19(5120,u.v,u._17,[[3,u.v]]),u._19(4608,s.e,s.d,[u.v]),u._19(4608,u.h,u.h,[]),u._19(5120,u.a,u._9,[]),u._19(5120,u.t,u._14,[]),u._19(5120,u.u,u._15,[]),u._19(4608,y.b,y.s,[s.b]),u._19(6144,u.J,null,[y.b]),u._19(4608,y.e,y.f,[]),u._19(5120,y.c,function(n,l,t,u){return[new y.k(n),new y.o(l),new y.n(t,u)]},[s.b,s.b,s.b,y.e]),u._19(4608,y.d,y.d,[y.c,u.z]),u._19(135680,y.m,y.m,[s.b]),u._19(4608,y.l,y.l,[y.d,y.m]),u._19(6144,u.H,null,[y.l]),u._19(6144,y.p,null,[y.m]),u._19(4608,u.O,u.O,[u.z]),u._19(4608,y.g,y.g,[s.b]),u._19(4608,y.i,y.i,[s.b]),u._19(4608,O.c,O.c,[]),u._19(4608,r.c,r.c,[]),u._19(4608,r.h,r.b,[]),u._19(5120,r.j,r.k,[]),u._19(4608,r.i,r.i,[r.c,r.h,r.j]),u._19(4608,r.g,r.a,[]),u._19(5120,r.e,r.l,[r.i,r.g]),u._19(4608,a,a,[r.e]),u._19(512,s.a,s.a,[]),u._19(1024,u.l,y.q,[]),u._19(1024,u.b,function(n,l){return[y.r(n,l)]},[[2,y.h],[2,u.y]]),u._19(512,u.c,u.c,[[2,u.b]]),u._19(131584,u._7,u._7,[u.z,u._1,u.r,u.l,u.i,u.c]),u._19(2048,u.e,null,[u._7]),u._19(512,u.d,u.d,[u.e]),u._19(512,y.a,y.a,[[3,y.a]]),u._19(512,O.b,O.b,[]),u._19(512,O.a,O.a,[]),u._19(512,r.f,r.f,[]),u._19(512,o,o,[])])});Object(u.U)(),Object(y.j)().bootstrapModuleFactory(I)},gFIY:function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);