(window.webpackJsonpkiev=window.webpackJsonpkiev||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/swifter_black.ed72796e.png"},function(e,a,t){e.exports=t.p+"static/media/mobile.73948da1.png"},function(e,a,t){e.exports=t.p+"static/media/video2.04847a91.gif"},function(e,a,t){e.exports=t.p+"static/media/user.6555f7cb.gif"},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),i=t.n(r),s=(t(19),t(1)),c=t(2),o=t(5),m=t(3),u=t(4),d=(t(20),t(9)),h=t.n(d),p=t(10),E=t.n(p),v=t(11),b=t.n(v),g=t(12),f=t.n(g),y=t(13),N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={company:"",firstName:"",lastName:"",url:"",email:"",choice:"Advertise",status:"",style:"yes"},t.onSubmit=function(e){e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{company:t.state.company,name:t.state.firstName,last:t.state.lastName,email:t.state.email,url:t.state.url,choice:t.state.choice}})}).then(function(){console.log("Success")}),t.setState({company:"",firstName:"",lastName:"",url:"",email:"",choice:"",status:"",style:""}),t.forceUpdate()},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"change",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.style?l.a.createElement("div",{className:"contact-container"},l.a.createElement("div",{id:"contact"},l.a.createElement("h1",{className:"title-demand"},"Let's talk :)"),l.a.createElement("p",{className:"contact-description"},"Want to know more about Swifter and what we could do for you? Let\u2019s get a conversation going. Complete the form below and we\u2019ll be in touch as soon as possible.")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("label",{htmlFor:"app"},"Company or App Name"),l.a.createElement("input",{type:"text",id:"company",name:"company",placeholder:"Your app name..",onChange:function(a){return e.change(a)},required:!0,value:this.state.company}),l.a.createElement("label",{htmlFor:"url"},"App Store URL*"),l.a.createElement("input",{type:"text",id:"url",name:"url",placeholder:"Your app store URL..",onChange:function(a){return e.change(a)},required:!0,value:this.state.url}),l.a.createElement("label",{htmlFor:"fname"},"First Name"),l.a.createElement("input",{type:"text",id:"fname",name:"firstName",placeholder:"Your first name..",onChange:function(a){return e.change(a)},required:!0,value:this.state.firstName}),l.a.createElement("label",{htmlFor:"lname"},"Last Name"),l.a.createElement("input",{type:"text",id:"lname",name:"lastName",placeholder:"Your last name..",onChange:function(a){return e.change(a)},required:!0,value:this.state.lastName}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"Your email..",onChange:function(a){return e.change(a)},required:!0,value:this.state.email}),l.a.createElement("label",{htmlFor:"choice"}," ","Are You Looking to Advertise or Monetize with Swifter?*"),l.a.createElement("br",null),l.a.createElement("div",{className:"options"},l.a.createElement("div",{className:"radio-container"},l.a.createElement("input",{type:"radio",onClick:function(a){return e.change(a)},name:"choice",value:"Advertise"}),"Advertise"),l.a.createElement("div",{className:"radio-container"},l.a.createElement("input",{type:"radio",onClick:function(a){return e.change(a)},name:"choice",value:"Monetize",defaultChecked:!0}),"Monetize"),l.a.createElement("div",{className:"radio-container"},l.a.createElement("input",{type:"radio",onClick:function(a){return e.change(a)},name:"choice",value:"Both"}),"Both")),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",value:"Submit"},"Send"))):l.a.createElement("h1",{className:"text-contact"},"Thank you!",l.a.createElement("br",null),"We will be in touch shortly."))}}]),a}(l.a.Component),w=t(6),x=(t(21),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).close=function(e){e.preventDefault(),t.setState({style:{left:"100%"},menu:!t.state.menu})},t.open=function(e){e.preventDefault(),t.setState({style:{left:"0%"},menu:!t.state.menu})},t.state={style:{left:"100%"},menu:!0},t.open=t.open.bind(Object(w.a)(t)),t.close=t.close.bind(Object(w.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.open,className:"hamburger hamburger--spring",type:"button"},l.a.createElement("span",{className:"hamburger-box"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("div",{id:"myNav",className:"overlay ",style:this.state.style},l.a.createElement("nav",{className:"header close-btn"},l.a.createElement("button",{onClick:this.close,className:"hamburger hamburger--spring is-active ",type:"button"},l.a.createElement("span",{className:"hamburger-box "},l.a.createElement("span",{className:"hamburger-inner"})))),l.a.createElement("div",{className:"overlay-content"},l.a.createElement("a",{onClick:function(a){e.close(a),window.location.assign("/#advertise")}},"Advertisers"," "),l.a.createElement("a",{onClick:function(a){e.close(a),window.location.assign("/#monetization")},href:"#"},"Publishers"),l.a.createElement("a",{href:"#"},"Clients"),l.a.createElement("a",{onClick:function(a){e.close(a),window.location.assign("/#contact")},href:"#"},"Contact"))))}}]),a}(l.a.Component)),C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",null,l.a.createElement("nav",{className:"header"},l.a.createElement("div",null,l.a.createElement("img",{src:h.a,alt:"Logo",className:"logo"})),l.a.createElement(x,null),l.a.createElement("div",{className:"navigation"},l.a.createElement("a",{href:"#"},"Home"),l.a.createElement("a",{href:"#advertise"},"Advertisers"),l.a.createElement("a",{href:"#monetization"},"Publishers"),l.a.createElement("a",{href:"#contact"},"Contact"))),l.a.createElement("div",{className:"container-home"},l.a.createElement("div",{className:"image-text"},l.a.createElement("p",{className:"first-text"},"Grow your mobile business"),l.a.createElement("p",{className:"second-text"},"Whether you need to acquire high-quality users, boost engagement and retention, or maximize ad revenue, Swifter has you covered."),l.a.createElement("button",{className:"primary-btn"},"Find out more")),l.a.createElement("div",null),l.a.createElement("img",{src:E.a,className:"responsive-home",alt:"image",width:"600",height:"400"})),l.a.createElement("div",{className:"strip-blue",id:"advertise"},l.a.createElement("h1",{className:"title-advertisers"},"Advertisers"),l.a.createElement("img",{src:b.a,className:"responsive",alt:"image",width:"525",height:"350",style:{height:"auto"}}),l.a.createElement("div",{className:"cards"},l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,"Inventory At Scale"),l.a.createElement("p",{className:"description"},"Global user base lets you scale across non-gaming, gaming, social apps, and more. Over 500M monthly unique users for mobile in-app alone.")),l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,"Vpaid Mobile "),l.a.createElement("p",{className:"description"},"Directly track viewability, completion and click-through rates to see how individual ads are performing and devise improved ways of engaging with mobile audiences.")),l.a.createElement("div",{className:"card"},l.a.createElement("h3",null," Brand Safety"),l.a.createElement("p",{className:"description"},"Constant and consistent application of new technologies to ensure a transparent trading environment. Certified third-party ad quality partners: Pixalate, WhiteOps."))))),l.a.createElement("div",{className:"strip-white"},l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("h1",{className:"title-advertisers left",style:{color:"#00abcd"}},"User Aquisition"),l.a.createElement("ul",{className:"text"},l.a.createElement("li",{className:"list"},"Tap into a database of 2 billion mobile profiles to identify the most valuable players for your game"),l.a.createElement("li",{className:"list"},"Reach mobile app users programmatically in 165+ countries, across 65,000 apps"),l.a.createElement("li",{className:"list"},"Increase in-app purchases through"),l.a.createElement("li",{className:"list"},"CPA optimization Optimize for mobile gamers, not just installs"))),l.a.createElement("img",{src:f.a,className:"responsive",alt:"image",width:"214",height:"462"}))),l.a.createElement("div",{className:"strip-green",id:"monetization"},l.a.createElement("h1",{className:"title-advertisers"},"Monetization"),l.a.createElement("div",{className:"boxes"},l.a.createElement("div",{className:"box"},l.a.createElement("h1",{className:"subline"}," Global Demand"),l.a.createElement("p",{className:"subline-text"},"We help you monetize your audience with global demand from the world\u2019s largest mobile advertisers. Maximize your yield through brand safe content and dedicated service.")),l.a.createElement("div",{className:"box"},l.a.createElement("h1",{className:"subline"}," Engaging Ad Formats"),l.a.createElement("p",{className:"subline-text "},"Excite users with ad formats that enhance your app experience.",l.a.createElement("br",null),"Power your full screen, vertical, and in-feed placements with the highest quality ads")),l.a.createElement("div",{className:"box"},l.a.createElement("h1",{className:"subline"}," Transparent Reporting"),l.a.createElement("p",{className:"subline-text"},"Reporting on all advertiser campaigns running across publishers\u2019 websites: campaign & viewability reports, audience insights and inventory quality analysis.")),l.a.createElement("div",{className:"box"},l.a.createElement("h1",{className:"subline"}," ","Programmatic Integration ",l.a.createElement("br",null)),l.a.createElement("p",{className:"subline-text"},"We provide automated solutions for you to maximize your revenue potential, while preserving the viewer experience.")))),l.a.createElement(N,null),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"@ Copyright 2019 Global Promoting Services LTD."),l.a.createElement("p",null,"483 Green Lanes, London, N13 4BS, UK")))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.767e0e9c.chunk.js.map