(this["webpackJsonpgoogle-books"]=this["webpackJsonpgoogle-books"]||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),o=(a(35),a(28)),i=a(1);var s=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("h3",{className:"text-white"},"Google Book Search")),l.a.createElement("div",{id:"nav-bar"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item",id:"home"},l.a.createElement("a",{className:"nav-link",href:"/"},l.a.createElement("button",{type:"button",className:"btn btn-info text-white"},"Search Books"))),l.a.createElement("li",{className:"nav-item",id:"saved"},l.a.createElement("a",{className:"nav-link",href:"/saved"},l.a.createElement("button",{type:"button",className:"btn btn-danger text-white"},"Saved Books"))))))},m=a(10),u=a(11),d=a(13),h=a(12),E=a(8),v=a.n(E),b=function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},f=function(){return v.a.get("/api/books")},k=function(e){return v.a.post("/api/books",e)},p=function(e){return v.a.delete("/api/books/"+e)};a(53);var g=function(e){var t=e.children;return l.a.createElement("div",{className:"jumbotron jumbotron-fluid d-flex align-items-center"},l.a.createElement("div",{className:"container text-center"},t))},N=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"SearchLabel"},l.a.createElement("h4",null,"Book Search")),l.a.createElement("input",{className:"col-12 form-control",value:e.search,type:"text",name:"searchBook",placeholder:"Enter Book's Name",onChange:e.handleInputChange})),l.a.createElement("button",{type:"submit",className:"submitButton btn btn-primary",onClick:e.handleFormSubmit},"Submit"))};function S(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function B(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function y(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var w=function(e){return 0===e.books.length?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Results")))):l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Results"),e.books.map((function(t){return l.a.createElement("li",{className:"list-group-item"},l.a.createElement(B,{className:"result row",id:t.title+"card",key:t._id},l.a.createElement(y,{size:"2",className:"image"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(y,{size:"1",className:"empty"}),l.a.createElement(y,{size:"9",className:"books"},l.a.createElement(B,null,l.a.createElement("h4",null,t.title)),l.a.createElement(B,null,l.a.createElement("h4",null,t.author)),l.a.createElement(B,null,l.a.createElement("p",null,t.description)))),l.a.createElement("br",null),l.a.createElement(B,{className:"button"},l.a.createElement("button",{className:"btn btn-primary",id:t.id,onClick:function(t){return e.handleSavedButton(t)}},"Save Book"),l.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"btn btn-success"},"View Book"))))})))))},x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",books:[],error:"",message:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),b(e.state.search).then((function(t){var a=t.data.items;a=a.map((function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}})),e.setState({books:a,error:""})})).catch((function(t){return e.setState({error:t.items})}))},e.handleSavedButton=function(t){t.preventDefault();var a=e.state.books.filter((function(e){return e.id===t.target.id}));a=a[0],k(a).then(e.setState({message:alert("This book has been saved")})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(S,{fluid:!0},l.a.createElement(g,null,l.a.createElement("h1",null,"Google Book Search"),l.a.createElement("h4",null,"Search for and Save Books of Interest")),l.a.createElement(S,null,l.a.createElement(B,null,l.a.createElement(y,{size:"12"},l.a.createElement(N,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})))),l.a.createElement("br",null),l.a.createElement(S,null,l.a.createElement(w,{books:this.state.books,handleSavedButton:this.handleSavedButton})))}}]),a}(n.Component),j=function(e){return 0===e.booksSaved.length?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("h3",null,"Books Saved")))):l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("h3",null,"Books Saved"),e.booksSaved.map((function(t){return l.a.createElement("li",{className:"list-group-item"},l.a.createElement(B,{id:t.title+"Card",key:t._id},l.a.createElement(y,{size:"2"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(y,{size:"1"}),l.a.createElement(y,{size:"9"},l.a.createElement(B,null,l.a.createElement("h2",null,t.title)),l.a.createElement(B,null,l.a.createElement("h3",null,t.authors)),l.a.createElement(B,null,l.a.createElement("h4",null,t.description)))),l.a.createElement("br",null),l.a.createElement(B,null,l.a.createElement("button",{className:"btn btn-danger",id:t._id,onClick:function(){return e.handleDeleteButton(t._id)}},"Delete Book"),l.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"btn btn-success"},"View Book"))))})))))},C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={booksSaved:[]},e.loadBooks=function(){f().then((function(t){return e.setState({booksSaved:t.data})})).catch((function(e){return console.log(e)}))},e.handleDeleteButton=function(t){p(t).then((function(t){return e.loadBooks()})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return l.a.createElement(S,{fluid:!0},l.a.createElement(g,null),l.a.createElement(S,null,l.a.createElement(j,{booksSaved:this.state.booksSaved,handleDeleteButton:this.handleDeleteButton})))}}]),a}(n.Component);var I=function(){return l.a.createElement(S,{fluid:!0},l.a.createElement(B,null,l.a.createElement(y,{size:"md-12"},l.a.createElement(g,null,l.a.createElement("h1",{className:"text-white"},"404 Page Not Found")))))};a(54);var z=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:x}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:C}),l.a.createElement(i.a,{exact:!0,path:"/saved/:id",component:C}),l.a.createElement(i.a,{component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9023f2fc.chunk.js.map