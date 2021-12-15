(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(32),a=n.n(c),s=n(23),r=(n(95),n(6)),j=n(0),i=n(5),u=n(1);var b=function(e){e.user;var t=e.setUser;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:Object(u.jsx)(s.b,{to:"/",children:"My Pet's Health"})}),Object(u.jsx)("nav",{children:Object(u.jsx)("button",{onClick:function(){fetch("/api/logout",{method:"DELETE"}).then((function(e){e.ok&&t(null)}))},children:"Logout"})}),Object(u.jsx)("nav",{children:Object(u.jsx)("button",{children:Object(u.jsx)(s.b,{to:"/new",children:"NewPet"})})})]})},o=n(117),l=n(82);var h=function(e){var t=e.id,n=e.name,c=e.age,a=e.weight,s=e.sex,r=e.healthIssue,j=e.type,i=e.petImage;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(o.a.Content,{children:[Object(u.jsx)("h3",{children:n}),Object(u.jsx)(l.a,{className:"pet-image",src:i,alt:"my pet"}),Object(u.jsxs)(o.a.Meta,{children:[Object(u.jsx)("span",{children:s}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:j})]}),Object(u.jsxs)(o.a.Description,{children:[Object(u.jsxs)("span",{children:["Age: ",c]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["Weight: ",a," lbs"]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["Health issues: ",r]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:Object(u.jsx)("button",{id:"delete-pet",onClick:function(){fetch("/api/pets/:".concat(t),{method:"DELETE"})},children:"Delete"})})]})]})})})};var O=function(){var e=Object(j.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.useEffect)((function(){fetch("/api/pets").then((function(e){return e.json()})).then(c)}),[]),Object(u.jsx)(u.Fragment,{children:n.length>0?n.map((function(e){return Object(u.jsx)(h,{id:e.id,name:e.name,weight:e.weight,type:e.type_of_pet,sex:e.sex,age:e.age,petImage:e.pet_image,healthIssue:e.health_issues},e.id)})):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"No Pets Found"}),Object(u.jsx)("button",{children:Object(u.jsx)(s.b,{to:"/new",children:" Add a pet"})})]})})},d=n(116);var p=function(e){var t=e.text;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t})})};var x=function(){var e=Object(j.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(j.useEffect)((function(){fetch("/api/health_tips").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var a=n.map((function(e){return Object(u.jsx)(p,{text:e.text},e.id)})),s=a[Math.floor(Math.random()*a.length)];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(d.a,{className:"body",children:[Object(u.jsx)("h2",{children:"Health Tips for Your Furry Friend"}),Object(u.jsx)("h4",{children:s})]})})};var f=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{}),Object(u.jsx)(O,{})]})};var g=function(e){var t=e.onLogin,n=Object(j.useState)(""),c=Object(r.a)(n,2),a=c[0],s=c[1],i=Object(j.useState)(""),b=Object(r.a)(i,2),o=b[0],l=b[1],h=Object(j.useState)([]),O=Object(r.a)(h,2),d=O[0],p=O[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})}).then((function(e){e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return p(e.errors)}))}))},children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",id:"username",value:a,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",value:o,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Login"}),Object(u.jsx)("p",{children:d.map((function(e){return Object(u.jsx)("li",{children:e})}))})]})})};var m=function(e){var t=e.onLogin,n=Object(j.useState)(""),c=Object(r.a)(n,2),a=c[0],s=c[1],i=Object(j.useState)(""),b=Object(r.a)(i,2),o=b[0],l=b[1],h=Object(j.useState)(""),O=Object(r.a)(h,2),d=O[0],p=O[1],x=Object(j.useState)([]),f=Object(r.a)(x,2),g=f[0],m=f[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o,password_confirmation:d})}).then((function(e){e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return m(e.errors)}))}))},children:[Object(u.jsx)("label",{children:"Username: "}),Object(u.jsx)("input",{type:"text",id:"username",value:a,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Password: "}),Object(u.jsx)("input",{type:"password",id:"password",value:o,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Password Confirmation: "}),Object(u.jsx)("input",{type:"password",id:"password_confirmation",value:d,onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Sign Up"}),Object(u.jsx)("p",{children:g.map((function(e){return Object(u.jsx)("li",{children:e})}))})]})},v=n(118);var y=function(e){var t=e.onLogin,n=Object(j.useState)(!0),c=Object(r.a)(n,2),a=c[0],s=c[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"My Pet's Health"}),a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{onLogin:t}),Object(u.jsxs)("p",{children:["Don't have an account?",Object(u.jsx)(v.a,{onClick:function(){return s(!1)},children:" Sign Up"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{onLogin:t}),Object(u.jsxs)("p",{children:["Already have an account?",Object(u.jsx)(v.a,{onClick:function(){return s(!0)},children:"Log In"})]})]})]})};var S=function(e){var t=e.user,n=Object(j.useState)(""),c=Object(r.a)(n,2),a=c[0],s=c[1],b=Object(j.useState)(""),h=Object(r.a)(b,2),O=h[0],d=h[1],p=Object(j.useState)(""),x=Object(r.a)(p,2),f=x[0],g=x[1],m=Object(j.useState)(""),v=Object(r.a)(m,2),y=v[0],S=v[1],w=Object(j.useState)(""),C=Object(r.a)(w,2),F=C[0],L=C[1],P=Object(j.useState)(""),k=Object(r.a)(P,2),D=k[0],T=k[1],_=Object(j.useState)(null),E=Object(r.a)(_,2),N=E[0],I=E[1],H=Object(j.useState)([]),U=Object(r.a)(H,2),A=U[0],M=U[1],J=Object(i.f)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Add a Pet"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("name",a),t.append("age",f),t.append("weight",F),t.append("sex",y),t.append("type_of_pet",O),t.append("health_issues",D),t.append("pet_image",N),fetch("/api/pets",{method:"POST",body:t}).then((function(e){e.ok?J("/"):e.json().then((function(e){M(e)}))}))},children:[Object(u.jsx)("label",{children:"Name: "}),Object(u.jsx)("input",{type:"text",id:"pet-name",value:a,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("label",{children:"Type: "}),Object(u.jsx)("input",{type:"text",id:"pet-type",value:O,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("label",{children:"Sex: "}),Object(u.jsx)("input",{type:"text",id:"pet-sex",value:y,onChange:function(e){return S(e.target.value)}}),Object(u.jsx)("label",{children:"Age: "}),Object(u.jsx)("input",{type:"text",id:"pet-age",value:f,onChange:function(e){return g(e.target.value)}}),Object(u.jsx)("label",{children:"Weight: "}),Object(u.jsx)("input",{type:"text",id:"pet-weight",value:F,onChange:function(e){return L(e.target.value)}}),Object(u.jsx)("label",{children:"Health Issues: "}),Object(u.jsx)("input",{type:"text",id:"pet-health-issue",value:D,onChange:function(e){return T(e.target.value)}}),Object(u.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){return I(e.target.files[0])}}),Object(u.jsx)("button",{type:"submit",children:"Submit"}),Object(u.jsx)("p",{children:A.map((function(e){return Object(u.jsx)("li",{children:e})}))})]}),Object(u.jsx)(o.a,{className:"cards",children:Object(u.jsxs)(o.a.Content,{children:[Object(u.jsx)(o.a.Header,{children:a}),Object(u.jsx)(l.a,{className:"pet-image",src:N}),Object(u.jsxs)(o.a.Description,{children:[f," year old ",O," with ",D,". Weighs ",F," lbs. Belongs to ",t.username]})]})})]})};var w=function(){var e=Object(j.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.useEffect)((function(){fetch("/api/me").then((function(e){e.ok&&e.json().then((function(e){return c(e)}))}))}),[]),n?Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{user:n,setUser:c}),Object(u.jsx)("main",{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/new",element:Object(u.jsx)(S,{user:n})}),Object(u.jsx)(i.a,{exact:!0,path:"/",element:Object(u.jsx)(f,{})})]})})]}):Object(u.jsx)(y,{onLogin:c})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};a.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),C()},95:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.f99a9146.chunk.js.map