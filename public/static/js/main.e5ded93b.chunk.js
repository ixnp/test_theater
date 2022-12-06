(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c,r=n(1),i=n(21),o=n.n(i),s=n(4),a=n(27),j=n(2),u=n(3),l=n(5),b=n(6),d=n(0);var h,O,p=function(e){var t=e.production,n=t.title,c=t.budget,r=t.genre,i=t.image,o=t.id;return console.log(t),Object(d.jsxs)(x,{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)(b.b,{to:"/productions/".concat(o),children:[" ",Object(d.jsx)("h2",{children:n})]}),Object(d.jsx)("p",{children:r}),Object(d.jsxs)("p",{children:["$ ",c]})]}),Object(d.jsx)("img",{src:i})]})},x=l.b.li(c||(c=Object(s.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content:start;\n    font-family:Arial, sans-serif;\n    margin:10px;\n    &:hover {\n      transform: scale(1.15);\n      transform-origin: top left;\n    }\n    a{\n      text-decoration:none;\n      color:white;\n    }\n    img{\n      width: 180px;\n      margin-left:20%;\n      mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);\n    }\n    position:relative;\n    div{\n     position:absolute;\n    \n    }\n  "])));var f,m=function(e){var t=e.productions;return Object(d.jsxs)("div",{children:[Object(d.jsxs)(g,{children:[Object(d.jsx)("span",{children:"F"}),"latIron Theater ",Object(d.jsx)("span",{children:"C"}),"ompany"]}),Object(d.jsx)(v,{children:t.map((function(e){return Object(d.jsx)(p,{production:e},e.id)}))})]})},g=l.b.h1(h||(h=Object(s.a)(["\n    text-transform: uppercase;\n    font-family:Arial, sans-serif;\n    width:70px;\n    font-size: 70px;\n    line-height: .8;\n   \n    transform: scale(.7, 1.4);\n    \n    span{\n        color:#42ddf5;\n    }\n"]))),v=l.b.ul(O||(O=Object(s.a)(["\n    display:flex;\n    flex-direction:column;\n\n"])));var y,w=function(e){var t=e.productions;return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{}),Object(d.jsx)(m,{productions:t})]})},C=l.b.img.attrs((function(){return{src:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"}}))(f||(f=Object(s.a)(["\n    position: absolute;\n    z-index:-1;\n  "]))),S=n(10),k=n(9),P=l.b.form(y||(y=Object(s.a)(["\ndisplay:flex;\nflex-direction:column;\nwidth: 400px;\nmargin:auto;\nfont-family:Arial;\nfont-size:30px;\ninput[type=submit]{\n  background-color:#42ddf5;\n  color: white;\n  height:40px;\n  font-family:Arial;\n  font-size:30px;\n  margin-top:10px;\n  margin-bottom:10px;\n}\n"])));var T=function(e){var t=e.addProduction,n=Object(r.useState)({title:"",genre:"",budget:"",image:"",director:"",description:""}),c=Object(j.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)([]),a=Object(j.a)(s,2),u=a[0],l=a[1],b=function(e){var t=e.target,n=t.name,c=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(S.a)({},n,c)))};return Object(d.jsxs)("div",{className:"App",children:[u?u.map((function(e){return Object(d.jsx)("div",{children:e})})):null,Object(d.jsxs)(P,{onSubmit:function(e){e.preventDefault(),fetch("/productions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(k.a)(Object(k.a)({},i),{},{ongoing:!0}))}).then((function(e){e.ok?e.json().then(t):e.json().then((function(e){return l(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:[Object(d.jsx)("label",{children:"Title "}),Object(d.jsx)("input",{type:"text",name:"title",value:i.title,onChange:b}),Object(d.jsx)("label",{children:" Genre"}),Object(d.jsx)("input",{type:"text",name:"genre",value:i.genre,onChange:b}),Object(d.jsx)("label",{children:"Budget"}),Object(d.jsx)("input",{type:"number",name:"budget",value:i.budget,onChange:b}),Object(d.jsx)("label",{children:"Image"}),Object(d.jsx)("input",{type:"text",name:"image",value:i.image,onChange:b}),Object(d.jsx)("label",{children:"Director"}),Object(d.jsx)("input",{type:"text",name:"director",value:i.director,onChange:b}),Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",{type:"text",rows:"4",cols:"50",name:"description",value:i.description,onChange:b}),Object(d.jsx)("input",{type:"submit",value:"Update Production"})]}),u?u.map((function(e){return Object(d.jsx)("h2",{style:{color:"red"},children:e.toUpperCase()})})):null]})};var D,E,U,A=function(e){var t=e.updateProduction,n=Object(r.useState)({title:"",genre:"",budget:"",image:"",director:"",description:""}),c=Object(j.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)([]),a=Object(j.a)(s,2),l=a[0],b=a[1],h=Object(u.g)().id;Object(r.useEffect)((function(){fetch("/productions/".concat(h)).then((function(e){return e.json()})).then(o)}),[]);var O=function(e){var t=e.target,n=t.name,c=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(S.a)({},n,c)))};return Object(d.jsxs)("div",{className:"App",children:[l?l.map((function(e){return Object(d.jsx)("div",{children:e})})):null,Object(d.jsxs)(P,{onSubmit:function(e){e.preventDefault(),fetch("/productions/".concat(h),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){e.ok?e.json().then(t):e.json().then((function(e){return b(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:[Object(d.jsx)("label",{children:"Title "}),Object(d.jsx)("input",{type:"text",name:"title",value:i.title,onChange:O}),Object(d.jsx)("label",{children:" Genre"}),Object(d.jsx)("input",{type:"text",name:"genre",value:i.genre,onChange:O}),Object(d.jsx)("label",{children:"Budget"}),Object(d.jsx)("input",{type:"number",name:"budget",value:i.budget,onChange:O}),Object(d.jsx)("label",{children:"Image"}),Object(d.jsx)("input",{type:"text",name:"image",value:i.image,onChange:O}),Object(d.jsx)("label",{children:"Director"}),Object(d.jsx)("input",{type:"text",name:"director",value:i.director,onChange:O}),Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",{type:"text",rows:"4",cols:"50",name:"description",value:i.description,onChange:O}),Object(d.jsx)("input",{type:"submit",value:"Update Production"})]}),l?l.map((function(e){return Object(d.jsx)("h2",{style:{color:"red"},children:e.toUpperCase()})})):null]})},N=n(26);var z,L=function(e){var t=e.updateUser,n=Object(r.useState)(!1),c=Object(j.a)(n,2),i=c[0],o=c[1];return Object(d.jsxs)(F,{children:[Object(d.jsx)(B,{children:"Flatiron Theater Company"}),Object(d.jsxs)(J,{children:[Object(d.jsx)("button",{onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&t(!1)}))},children:"Log Out"}),i?Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return o(!i)},children:"x"}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/users/1",children:"User Page"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/productions/new",children:"New Production"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:" Home"})})]}):Object(d.jsx)("div",{onClick:function(){return o(!i)},children:Object(d.jsx)(N.a,{size:30})})]})]})},B=l.b.h1(D||(D=Object(s.a)(["\nfont-family: 'Splash', cursive;\n"]))),F=l.b.div(E||(E=Object(s.a)(["\n  display: flex;\n  justify-content:space-between;\n  \n"]))),J=l.b.div(U||(U=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  a{\n    text-decoration: none;\n    color:white;\n    font-family:Arial;\n  }\n  a:hover{\n    color:pink\n  }\n  ul{\n    list-style:none;\n  }\n  \n"])));var G=function(e){var t=e.deleteProduction,n=Object(r.useState)({}),c=Object(j.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)(!0),a=Object(j.a)(s,2),l=a[0],h=a[1],O=Object(r.useState)(!1),p=Object(j.a)(O,2),x=p[0],f=p[1],m=Object(u.g)(),g=Object(u.f)();if(Object(r.useEffect)((function(){fetch("/productions/".concat(m.id)).then((function(e){e.ok?e.json().then((function(e){o(e),h(!1)})):(console.log("error"),e.json().then((function(e){return f(e.error)})))}))}),[]),l)return Object(d.jsx)("h1",{children:"Loading"});if(x)return Object(d.jsx)("h1",{children:x});var v=i.id,y=i.title,w=(i.budget,i.genre),C=i.image,S=i.description,k=i.cast_members;return console.log(k),Object(d.jsxs)(H,{children:[Object(d.jsx)("h1",{children:y}),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Genre:"}),Object(d.jsx)("p",{children:w}),Object(d.jsx)("h3",{children:"Description:"}),Object(d.jsx)("p",{children:S}),Object(d.jsx)("h2",{children:"Crew Memebers"}),Object(d.jsx)("ul",{children:k.map((function(e){return Object(d.jsxs)("li",{children:[e.role," : ",e.name]})}))})]}),Object(d.jsx)("img",{src:C})]}),Object(d.jsx)("button",{children:Object(d.jsx)(b.b,{to:"/productions/".concat(v,"/edit"),children:"Edit Production"})}),Object(d.jsx)("button",{onClick:function(){fetch("/productions/".concat(m.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){e.ok?(t(v),g.push("/")):e.json().then((function(e){return f(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:"Delete Production"}),Object(d.jsx)("button",{onClick:function(){fetch("/tickets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({production_id:v,user_id:1,price:30.5})}).then((function(e){e.ok?g.push("/users/1"):e.json().then((function(e){return f(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:"Buy Ticket"})]})},H=l.b.li(z||(z=Object(s.a)(["\n    display:flex;\n    flex-direction:column;\n    justify-content:start;\n    font-family:Arial, sans-serif;\n    margin:5px;\n    h1{\n      font-size:60px;\n      border-bottom:solid;\n      border-color:#42ddf5;\n    }\n    .wrapper{\n      display:flex;\n      div{\n        margin:10px;\n      }\n    }\n    img{\n      width: 300px;\n    }\n    button{\n      background-color:#42ddf5;\n      color: white;\n      height:40px;\n      font-family:Arial;\n      font-size:30px;\n      margin-top:10px;\n    }\n  "])));var I=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!0),o=Object(j.a)(i,2),s=o[0],a=o[1],l=Object(r.useState)(!1),b=Object(j.a)(l,2),h=b[0],O=b[1],p=Object(u.g)().id;return Object(r.useEffect)((function(){fetch("/users/".concat(p)).then((function(e){e.ok?e.json().then((function(e){c(e),a(!1)})):e.json().then((function(e){return O(e.error)}))}))}),[]),s?Object(d.jsx)("h1",{children:"Loading"}):h?Object(d.jsx)("h1",{children:h}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:n.name}),Object(d.jsx)("h3",{children:"Tickets"}),Object(d.jsx)("ul",{children:n.tickets.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("h2",{children:e.production.title}),Object(d.jsxs)("p",{children:["Price: ",e.price]})]})}))})]})};var M=function(e){var t=e.updateUser,n=Object(r.useState)({name:"",email:"",password:""}),c=Object(j.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)(!1),a=Object(j.a)(s,2),l=a[0],b=a[1],h=Object(r.useState)([]),O=Object(j.a)(h,2),p=O[0],x=O[1],f=Object(u.f)(),m=i.name,g=i.password,v=function(e){var t=e.target,n=t.name,c=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(S.a)({},n,c)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(P,{onSubmit:function(e){e.preventDefault();var n={name:m,password:g},c="/login";l&&(c="/users"),fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.ok?e.json().then((function(e){t(e),f.push("/users/".concat(e.id))})):e.json().then((function(e){return x(e.errors)}))}))},children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{type:"text",name:"name",value:m,onChange:v}),Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",value:g,onChange:v}),Object(d.jsx)("input",{type:"submit",value:"Log in!"}),Object(d.jsx)("input",{type:"submit",onClick:function(){return b(!0)},value:"Sign up!"})]}),p?Object(d.jsx)("div",{children:p}):null]})};var _,W=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Sorry We can't find the Page you're looking for!"}),Object(d.jsx)("h1",{children:"404 Not Found"})]})};var q=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),o=Object(j.a)(i,2),s=o[0],l=o[1],b=Object(r.useState)(!1),h=Object(j.a)(b,2),O=h[0],p=h[1];Object(r.useEffect)((function(){fetch("/authorized_user").then((function(e){e.ok&&e.json().then((function(e){p(e),x()}))}))}),[]);var x=function(){fetch("/productions").then((function(e){e.ok?e.json().then(c):e.json().then((function(e){return l(e.error)}))}))},f=function(e){return p(e)};return s?Object(d.jsx)("h1",{children:s}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(V,{}),Object(d.jsx)(L,{updateUser:f}),O?Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/productions/new",children:Object(d.jsx)(T,{addProduction:function(e){return c((function(t){return[].concat(Object(a.a)(t),[e])}))}})}),Object(d.jsx)(u.a,{path:"/productions/:id/edit",children:Object(d.jsx)(A,{updateProduction:function(e){return c((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))}})}),Object(d.jsx)(u.a,{path:"/productions/:id",children:Object(d.jsx)(G,{deleteProduction:function(e){return c((function(t){return t.filter((function(t){return t.id!==e}))}))}})}),Object(d.jsx)(u.a,{path:"/users/:id",children:Object(d.jsx)(I,{updateUser:f})}),Object(d.jsx)(u.a,{path:"/login",children:Object(d.jsx)(M,{updateUser:f})}),Object(d.jsx)(u.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{productions:n})}),Object(d.jsx)(u.a,{children:Object(d.jsx)(W,{})})]}):Object(d.jsx)(M,{error:"please login",updateUser:f})]})},V=Object(l.a)(_||(_=Object(s.a)(["\n    body{\n      background-color: black; \n      color:white;\n    }\n    "])));o.a.render(Object(d.jsx)(b.a,{children:Object(d.jsx)(q,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e5ded93b.chunk.js.map