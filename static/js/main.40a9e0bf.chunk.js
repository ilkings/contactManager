(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){},31:function(e,a,t){e.exports=t(65)},36:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),o=t.n(c),l=(t(36),t(6)),s=t(7),i=t(9),m=t(8),u=t(10),p=t(67),h=t(68),d=t(69),f=t(11),b=t.n(f),E=t(13),v=t(30),y=t(18),N=t(12),C=t.n(N),g=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return O(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=g.Consumer,w=t(66),x=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onShowClick=function(a,t){e.state.showContactInfo?e.setState({showContactInfo:!1,className:"fas fa-sort-up"}):e.setState({showContactInfo:!0,className:"fas fa-sort-down"})},e.onDeleteClick=function(){var e=Object(E.a)(b.a.mark(function e(a,t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(a,t){return e.apply(this,arguments)}}(),e.state={showContactInfo:!0,className:"fas fa-sort-down"},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contract,t=a.id,n=a.name,c=a.email,o=a.phone;console.log(this.props.contract);var l=this.state.showContactInfo;return r.a.createElement(k,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,r.a.createElement("label",{onClick:e.onShowClick.bind(e,t),style:{cursor:"pointer"}},"Name:",n),r.a.createElement("i",{onClick:e.onShowClick.bind(e,t),className:e.state.className,style:{margin:"15px",cursor:"pointer"}}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,t,s),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(w.a,{to:"/contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt fr",style:{cursor:"pointer",color:"black",marginRight:"1rem"}})," ")),l?null:r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email:",c),r.a.createElement("li",{className:"list-group-item"},"Phone:",o)))})}}]),a}(n.Component),S=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contacts;return console.log(a),r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact"),r.a.createElement("span",null,"List")),a.map(function(e){return r.a.createElement(x,{key:e.id,contract:e})}))})}}]),a}(n.Component),A=(t(27),function(e){var a=e.branding;return r.a.createElement("nav",{className:"nav navbar-dark navbar-expand-sm bg-danger sm-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand fl"},a),r.a.createElement("ul",{className:"navbar-nav mr-auto fr"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link fl"},r.a.createElement("i",{className:"fa fa-home"}," Home")),r.a.createElement(w.a,{to:"/contact/add",className:"nav-link fl"},r.a.createElement("i",{className:"fa fa-plus"},"Add")),r.a.createElement(w.a,{to:"/about",className:"nav-link fl"},r.a.createElement("i",{className:"fa fa-down"},"About"))))))});A.defaultProps={branding:"Contact Manager"};var T=A,D=t(14),P=t(15),_=t.n(P),q=function(e){var a=e.label,t=e.name,n=e.error,c=e.value,o=e.placeholder,l=e.type,s=e.onChange;return r.a.createElement("div",{className:_()("form-group")},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:l,name:t,placeholder:o,className:_()("form-control form-control-lg",{"is-invalid":n}),value:c,onChange:s}),n&&r.a.createElement("div",{className:"invalid-feedback"},n))};q.defaultProps={type:"text"};var I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={id:"",name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(D.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,c=n.email,o=n.phone;if(""!==r)if(""!==c)if(""!==o){var l={name:r,email:c,phone:o};C.a.post("https://jsonplaceholder.typicode.com/users",l).then(function(a){return e({type:"ADD_CONTACT",payload:a.data})}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/")}else t.setState({errors:{phone:"Phone is required"}});else t.setState({errors:{email:"Email is required"}});else t.setState({errors:{name:"Name is required"}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter the Name ...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",placeholder:"Enter the Email ...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter the Phone ...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),L=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={id:"",name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(D.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(E.a)(b.a.mark(function e(a,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s=t.props.match.params.id,i={name:c,email:o,phone:l},e.next=15,C.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),i);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var a,t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,C.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter the Name ...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",placeholder:"Enter the Email ...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter the Phone ...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),M=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404"),"Not Found s"),r.a.createElement("p",{className:"lead"},"Sorry,that page not exist"))},F=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:_()("display-4")},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Test"),r.a.createElement("p",{className:"text-secondary"},"Version1.0.0"))},B=(t(62),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,{basename:"/test"},r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:L}),r.a.createElement(d.a,{exact:!0,path:"/about",component:F}),r.a.createElement(d.a,{component:M}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.40a9e0bf.chunk.js.map