(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{50:function(e,t,a){e.exports=a(62)},55:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(55),a(10)),m=a(24),i=a(17),s=a(33),d=a(34),u=a(12),h=a(39),g=(a(56),a(99)),p=a(103),f=a(104),v=a(63);function E(){return r.a.createElement(g.a,{position:"static"},r.a.createElement(p.a,{variant:"dense"},r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"}),r.a.createElement(v.a,{variant:"h4",color:"inherit"},"Fun Factory")))}var I=a(107),x=a(106),b=a(108),y=a(105);function C(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary"},"\xa9 ".concat((new Date).getFullYear()," "),r.a.createElement(y.a,{color:"inherit",href:"https://github.com/alibayramli"},"Ali Bayramli")," ")}var O=Object(x.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"50vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function k(){var e=O();return r.a.createElement("div",{className:e.root},r.a.createElement(I.a,null),r.a.createElement(b.a,{component:"main",className:e.main,maxWidth:"sm"},r.a.createElement(v.a,{variant:"h2",component:"h1",gutterBottom:!0},"Source code"),r.a.createElement(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"You can see the source code in my ",r.a.createElement("a",{href:"https://github.com/alibayramli/fun-factory",style:{textDecoration:"none"}},"GitHub"))),r.a.createElement("footer",{className:e.footer},r.a.createElement(b.a,{maxWidth:"sm"},r.a.createElement(C,null))))}var N=a(114),j=a(110),S=a(112),w=a(113),T=a(111),M=a(109),B=a(115),P=Object(x.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"2%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),D=[1];function R(e){var t=P();return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:t.heroContent},r.a.createElement(b.a,{maxWidth:"sm"},r.a.createElement(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"How it works"),r.a.createElement(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Click ",r.a.createElement("i",null,"shuffle")," button to get a random meme image and use your creativity by adding top/bottom texts!"),r.a.createElement("div",{style:e.component.randImg?null:{display:"none"}},r.a.createElement(M.a,{container:!0,spacing:4},D.map((function(a){return r.a.createElement(M.a,{item:!0,key:a,xs:12,sm:12,md:12},r.a.createElement(j.a,{className:t.card},r.a.createElement(T.a,{className:t.cardMedia,title:"Image title"},r.a.createElement("div",{className:"container meme"},r.a.createElement("img",{src:e.component.randImg,alt:"Snow",style:{width:"100%"}}),r.a.createElement("h2",{className:"top"},e.component.topText),r.a.createElement("h2",{className:"bottom"},e.component.bottomText),r.a.createElement(S.a,null,r.a.createElement(B.a,{id:"standard-search",label:"top text",type:"search",name:"topText",value:e.component.topText,onChange:e.handleChange}),r.a.createElement(B.a,{id:"standard-search",label:"bottom text",type:"search",name:"bottomText",value:e.component.bottomText,onChange:e.handleChange})))),r.a.createElement(w.a,{className:t.cardContent},r.a.createElement(v.a,{color:"textSecondary"},"Here is your meme image. Enjoy ^^"))))})))),r.a.createElement("div",{className:t.heroButtons},r.a.createElement(M.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(M.a,{item:!0},r.a.createElement(N.a,{variant:"contained",onClick:e.handlePrevImg,disabled:!e.component.imgCount||0===e.component.indexOfCurrentImg},"Previous")),r.a.createElement(M.a,{item:!0},r.a.createElement(N.a,{variant:"contained",onClick:e.handleNextImg,disabled:e.component.indexOfCurrentImg===e.component.shuffledImgs.length-1||0===e.component.shuffledImgs.length},"Next")),r.a.createElement(M.a,{item:!0},r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:e.src,disabled:e.component.indexOfCurrentImg<e.component.shuffledImgs.length-1},"Shuffle"))))))),r.a.createElement(k,{component:e.component}))}var W=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={topText:"",bottomText:"",indexOfCurrentImg:0,randImg:"",imgCount:0,allMemeImgs:[],shuffledImgs:[]},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleRanImg=e.handleRanImg.bind(Object(u.a)(e)),e.handlePrevImg=e.handlePrevImg.bind(Object(u.a)(e)),e.handleNextImg=e.handleNextImg.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleRanImg",value:function(e){var t=this;e.preventDefault();var a=Math.floor(Math.random()*this.state.allMemeImgs.length-1)+1;this.state.shuffledImgs.includes(this.state.allMemeImgs[a].url)||this.setState({randImg:this.state.allMemeImgs[a].url,imgCount:this.state.imgCount+1,shuffledImgs:this.state.shuffledImgs.concat(this.state.allMemeImgs[a].url)},(function(){t.setState({indexOfCurrentImg:t.state.shuffledImgs.indexOf(t.state.randImg)})}))}},{key:"handlePrevImg",value:function(){var e=this;this.setState({indexOfCurrentImg:this.state.indexOfCurrentImg-1},(function(){e.setState({randImg:e.state.shuffledImgs[e.state.indexOfCurrentImg]})}))}},{key:"handleNextImg",value:function(){var e=this;this.setState({indexOfCurrentImg:this.state.indexOfCurrentImg+1},(function(){e.setState({randImg:e.state.shuffledImgs[e.state.indexOfCurrentImg]})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(l.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;return e.setState({allMemeImgs:a})})).catch((function(e){return console.log("Error : ".concat(e))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(R,{component:this.state,src:this.handleRanImg,handleChange:this.handleChange,handlePrevImg:this.handlePrevImg,handleNextImg:this.handleNextImg}))}}]),t}(n.Component);a(60),a(61);var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.65745e1a.chunk.js.map