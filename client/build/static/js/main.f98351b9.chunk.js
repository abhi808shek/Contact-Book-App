(this["webpackJsonpcontact-app"]=this["webpackJsonpcontact-app"]||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(104),s=n.n(r),o=n(7),l=n.n(o),i=n(15),u=n(8),b=n(19),j=n.n(b),d=n(4),h=n(0);var p=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),o=s[0],b=s[1],p=Object(a.useState)(""),x=Object(u.a)(p,2),m=x[0],O=x[1],f=Object(d.f)(),g={name:n,phone_no:o,email:m},v=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/users",g);case 2:f.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container rounded mt-5 w-75 h-100 d-flex justify-content-center flex-column",style:{boxShadow:"0px 0px 10px grey"},children:[Object(h.jsx)("h5",{className:"bg-danger text-white text-center p-1 rounded-top mt-2",children:"Add Contact"}),Object(h.jsx)("label",{htmlFor:"name ",className:"font-weight-bold",children:"Name"}),Object(h.jsx)("input",{type:"text",value:n,onChange:function(e){c(e.target.value)},name:"name",id:""}),Object(h.jsx)("label",{htmlFor:"phone ",className:"font-weight-bold my-2",children:"Phone No"}),Object(h.jsx)("input",{type:"text",value:o,onChange:function(e){b(e.target.value)},name:"phone",id:""}),Object(h.jsx)("label",{htmlFor:"email ",className:"font-weight-bold my-2",children:"E-mail"}),Object(h.jsx)("input",{type:"email",value:m,onChange:function(e){O(e.target.value)},name:"email",id:""}),Object(h.jsx)("button",{className:"btn btn-info my-3 font-weight-bold",style:{boxShadow:"0px 0px 10px black"},onClick:v,children:"Add Contact"})]})})},x=n(109),m=n(18),O=function(e){var t=e.contact,n=e.check,c=e.deltedUser,r=Object(a.useState)(!1),s=Object(u.a)(r,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){l(n)}),[n]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{style:{boxShadow:"0px 0px 10px grey"},children:[Object(h.jsx)("th",{scope:"row",className:"px-2",children:Object(h.jsx)("input",{type:"checkbox",checked:o,onChange:function(){return l(!o)}})}),Object(h.jsxs)("td",{children:[Object(h.jsx)(x.a,{name:t.name,size:"50",round:!0,className:"mr-2"}),t.name]}),Object(h.jsxs)("td",{children:[t.phone_no," "]}),Object(h.jsx)("td",{children:t.email}),Object(h.jsxs)("td",{children:[Object(h.jsx)(m.b,{to:"/updateuser/".concat(t._id),children:Object(h.jsx)("i",{className:"fas fa-edit"})}),Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("i",{className:"fas fa-trash-alt px-2",onClick:function(){t._id&&c(t._id)}})})]})]})})};var f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2),o=s[0],b=s[1],d=Object(a.useState)(""),p=Object(u.a)(d,2),x=p[0],m=p[1],f=Object(a.useState)([]),g=Object(u.a)(f,2),v=g[0],y=g[1],w=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/api/users");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){console.log("Inside UseEffect"),""==x&&y(n)}),[]);var N=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.delete("/api/users/".concat(t));case 3:n=e.sent,console.log(n.data),w(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("/api/users");case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container mt-5 rounded-top p-2 overflow-auto",style:{boxShadow:"0px 0px 10px grey"},children:[o&&Object(h.jsx)("button",{className:"btn mb-1 text-white",style:{backgroundColor:"teal",border:"none",boxShadow:"0px 0px 8px black"},onClick:k,children:"Delete All"}),Object(h.jsx)("input",{type:"text",className:"mb-2",placeholder:"Search Here",value:x,onChange:function(e){m(e.target.value);var t=n.filter((function(t){return t.name.includes(e.target.value)||t.phone_no.toString().includes(e.target.value)||t.email.includes(e.target.value)}));y(t)},style:{float:"right",borderStyle:"dashed",borderRadius:"10px",textAlign:"center",fontFamily:"monospace"}}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{style:{borderRadius:"10px"},children:Object(h.jsxs)("tr",{className:"bg-danger text-white rounded mt-2",style:{boxShadow:"0px 0px 10px grey"},children:[Object(h.jsxs)("th",{scope:"col",children:[Object(h.jsx)("input",{type:"checkbox",onClick:function(){b(!o)},className:"mr-1"}),"All"]}),Object(h.jsx)("th",{scope:"col",children:"Name"}),Object(h.jsx)("th",{scope:"col",children:"Phone"}),Object(h.jsx)("th",{scope:"col",children:"E-mail"}),Object(h.jsx)("th",{scope:"col",children:"Action"})]})}),Object(h.jsx)("tbody",{children:0==v.length?Object(h.jsx)("h4",{style:{position:"absolute",left:"40%"},children:"No Data Found"}):v.map((function(e){return Object(h.jsx)(O,{contact:e,check:o,deltedUser:N},e._id)}))})]})]})})};var g=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{className:"navbar navbar-light bg-primary font-weight-bold",children:[Object(h.jsxs)(m.c,{to:"/",className:"navbar-brand",children:[" ",Object(h.jsx)("i",{className:"fas fa-address-book pr-2"}),"Contact-App"]}),Object(h.jsx)("form",{className:"form-inline",children:Object(h.jsx)(m.c,{to:"/adduser",children:Object(h.jsx)("button",{className:"btn mb-1 text-white",style:{backgroundColor:"seagreen",border:"none",boxShadow:"0px 0px 8px black"},children:"Add Contact"})})})]})})};var v=function(e){var t=Object(d.f)(),n=Object(d.g)().id,c=Object(a.useState)(""),r=Object(u.a)(c,2),s=r[0],o=r[1],b=Object(a.useState)(""),p=Object(u.a)(b,2),x=p[0],m=p[1],O=Object(a.useState)(""),f=Object(u.a)(O,2),g=f[0],v=f[1];Object(a.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/users/".concat(n));case 2:t=e.sent,o(t.data.name),m(t.data.phone_no),v(t.data.email);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var y={name:s,phone_no:x,email:g},w=function(){var e=Object(i.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.patch("/api/users/".concat(n),y);case 3:t.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container rounded mt-5 w-75 d-flex justify-content-center flex-column",style:{boxShadow:"0px 0px 10px grey"},children:[Object(h.jsx)("h5",{className:"bg-warning text-white text-center p-1 rounded-top mt-2",children:"Update Contact"}),Object(h.jsx)("label",{htmlFor:"name ",className:"font-weight-bold",children:"Name"}),Object(h.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},name:"name",id:""}),Object(h.jsx)("label",{htmlFor:"phone ",className:"font-weight-bold my-2",children:"Phone No"}),Object(h.jsx)("input",{type:"text",value:x,onChange:function(e){m(e.target.value)},name:"phone",id:""}),Object(h.jsx)("label",{htmlFor:"email ",className:"font-weight-bold my-2",children:"E-mail"}),Object(h.jsx)("input",{type:"email",value:g,onChange:function(e){v(e.target.value)},name:"email",id:""}),Object(h.jsx)("button",{className:"btn bg-success text-white my-3 font-weight-bold",style:{boxShadow:"0px 0px 10px black"},onClick:function(){w(n)},children:"Update Contact"})]})})};var y=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(d.a,{path:"/adduser",component:p}),Object(h.jsx)(d.a,{path:"/updateuser/:id",component:v})]})]})})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.f98351b9.chunk.js.map