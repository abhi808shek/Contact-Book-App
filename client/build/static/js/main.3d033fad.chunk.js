(this["webpackJsonpcontact-app"]=this["webpackJsonpcontact-app"]||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(104),s=n.n(o),r=n(13),i=n.n(r),l=n(22),j=n(10),b=n(23),d=n.n(b),u=n(4),h=n(0);var p=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),r=s[0],b=s[1],p=Object(c.useState)(""),x=Object(j.a)(p,2),m=x[0],O=x[1],f=Object(u.f)(),g={name:n,phone_no:r,email:m},w=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat(window.location.protocol,"//").concat(window.location.hostname,"/api/users"),g);case 2:f.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container rounded mt-5 w-75 h-100 d-flex justify-content-center flex-column",style:{boxShadow:"0px 0px 10px grey"},children:[Object(h.jsx)("h5",{className:"bg-danger text-white text-center p-1 rounded-top mt-2",children:"Add Contact"}),Object(h.jsx)("label",{htmlFor:"name ",className:"font-weight-bold",children:"Name"}),Object(h.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)},name:"name",id:""}),Object(h.jsx)("label",{htmlFor:"phone ",className:"font-weight-bold my-2",children:"Phone No"}),Object(h.jsx)("input",{type:"text",value:r,onChange:function(e){b(e.target.value)},name:"phone",id:""}),Object(h.jsx)("label",{htmlFor:"email ",className:"font-weight-bold my-2",children:"E-mail"}),Object(h.jsx)("input",{type:"email",value:m,onChange:function(e){O(e.target.value)},name:"email",id:""}),Object(h.jsx)("button",{className:"btn btn-info my-3 font-weight-bold",style:{boxShadow:"0px 0px 10px black"},onClick:w,children:"Add Contact"})]})})},x=n(109),m=n(17),O=function(e){var t=e.contact,n=e.check,a=e.deltedUser,o=Object(c.useState)(!1),s=Object(j.a)(o,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){i(n)}),[n]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",classNameName:"px-2",children:Object(h.jsx)("input",{type:"checkbox",checked:r,onChange:function(){return i(!r)}})}),Object(h.jsxs)("td",{children:[Object(h.jsx)(x.a,{name:t.name,size:"50",round:!0,className:"mr-2"}),t.name]}),Object(h.jsxs)("td",{children:[t.phone_no," "]}),Object(h.jsx)("td",{children:t.email}),Object(h.jsxs)("td",{children:[Object(h.jsx)(m.b,{to:"/updateuser/".concat(t._id),children:Object(h.jsx)("i",{className:"fas fa-edit"})}),Object(h.jsx)(m.b,{children:Object(h.jsx)("i",{className:"fas fa-trash-alt px-2",onClick:function(){t._id&&a(t._id)}})})]})]},t._id)})};var f=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),s=Object(j.a)(o,2),r=s[0],b=s[1],u=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("".concat(window.location.protocol,"//").concat(window.location.hostname,"/api/users"));case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){try{u()}catch(e){console.log(e.message)}}),[r]);var p=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat(window.location.protocol,"//").concat(window.location.hostname,"/api/users/")+t);case 2:u();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n.map((function(e){return Object(h.jsx)(O,{contact:e,check:r,deltedUser:p})}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container mt-5 rounded-top p-2",style:{boxShadow:"0px 0px 10px grey"},children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{style:{borderRadius:"10px"},children:Object(h.jsxs)("tr",{className:"bg-danger text-white rounded",children:[Object(h.jsxs)("th",{scope:"col",children:[Object(h.jsx)("input",{type:"checkbox",onClick:function(){b(!r)},className:"mr-1"}),"All"]}),Object(h.jsx)("th",{scope:"col",children:"Name"}),Object(h.jsx)("th",{scope:"col",children:"Phone"}),Object(h.jsx)("th",{scope:"col",children:"E-mail"}),Object(h.jsx)("th",{scope:"col",children:"Action"})]})}),Object(h.jsx)("tbody",{children:x})]})})})};var g=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{className:"navbar navbar-light bg-primary font-weight-bold",children:[Object(h.jsxs)(m.c,{to:"/api/users",className:"navbar-brand",children:[" ",Object(h.jsx)("i",{className:"fas fa-address-book pr-2"}),"Contact-App"]})," ",Object(h.jsx)("form",{className:"form-inline",children:Object(h.jsx)(m.c,{to:"/adduser",children:Object(h.jsx)("button",{className:"btn btn-outline-danger my-2 my-sm-0 text-white",type:"button",children:"Add Contact"})})})]})})};var w=function(){var e=Object(u.f)(),t=Object(u.g)().id,n=Object(c.useState)(""),a=Object(j.a)(n,2),o=a[0],s=a[1],r=Object(c.useState)(""),b=Object(j.a)(r,2),p=b[0],x=b[1],m=Object(c.useState)(""),O=Object(j.a)(m,2),f=O[0],g=O[1],w={name:o,phone_no:p,email:f};console.log("Details",w);var v=function(){var n=Object(l.a)(i.a.mark((function n(){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.patch("".concat(window.location.protocol,"//").concat(window.location.hostname,"/api/users/")+t,w);case 3:c=n.sent,console.log(c.data),e.push("/"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container rounded mt-5 w-75 d-flex justify-content-center flex-column",style:{boxShadow:"0px 0px 10px grey"},children:[Object(h.jsx)("h5",{className:"bg-warning text-white text-center p-1 rounded-top mt-2",children:"Update Contact"}),Object(h.jsx)("label",{htmlFor:"name ",className:"font-weight-bold",children:"Name"}),Object(h.jsx)("input",{type:"text",value:o,onChange:function(e){s(e.target.value)},name:"name",id:""}),Object(h.jsx)("label",{htmlFor:"phone ",className:"font-weight-bold my-2",children:"Phone No"}),Object(h.jsx)("input",{type:"text",value:p,onChange:function(e){x(e.target.value)},name:"phone",id:""}),Object(h.jsx)("label",{htmlFor:"email ",className:"font-weight-bold my-2",children:"E-mail"}),Object(h.jsx)("input",{type:"email",value:f,onChange:function(e){g(e.target.value)},name:"email",id:""}),Object(h.jsx)("button",{className:"btn bg-success text-white my-3 font-weight-bold",style:{boxShadow:"0px 0px 10px black"},onClick:function(){v(t)},children:"Update Contact"})]})})};var v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(u.a,{path:"/adduser",component:p}),Object(h.jsx)(u.a,{path:"/updateuser/:id",component:w})]})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.3d033fad.chunk.js.map