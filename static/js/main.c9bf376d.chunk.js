(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{50:function(e,t,a){e.exports=a(60)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=a(10),m=a(24),i=a(17),s=a(34),d=a(35),u=a(12),h=a(40),g=a(97),f=a(100),p=a(102),E=a(103),v=a(61),I=Object(g.a)((function(e){return{root:{boxShadow:"none",backgroundColor:"purple"}}}));function x(){var e=I();return r.a.createElement(f.a,{position:"static",className:e.root},r.a.createElement(p.a,{variant:"dense"},r.a.createElement(E.a,{edge:"start",color:"inherit","aria-label":"menu"}),r.a.createElement(v.a,{variant:"h4",color:"inherit"},"Fun Factory")))}var y=a(105),b=a(106),C=a(104);function k(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary"},"\xa9 ".concat((new Date).getFullYear()," "),r.a.createElement(C.a,{color:"inherit",href:"https://github.com/alibayramli"},"Ali Bayramli")," ")}var O=Object(g.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"50vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function N(){var e=O();return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,null),r.a.createElement(b.a,{component:"main",className:e.main,maxWidth:"sm"},r.a.createElement(v.a,{variant:"h2",component:"h1",gutterBottom:!0},"Source code"),r.a.createElement(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"You can see the source code in my ",r.a.createElement("a",{href:"https://github.com/alibayramli/fun-factory",style:{textDecoration:"none"}},"GitHub"))),r.a.createElement("footer",{className:e.footer},r.a.createElement(b.a,{maxWidth:"sm"},r.a.createElement(k,null))))}var S=a(112),j=a(108),D=a(110),w=a(111),T=a(109),M=a(107),B=a(113),P=Object(g.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"2%"},cardMediaImgList:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),A=[1];function W(e){var t=P(),a=e.component.shuffledImgs||[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:t.heroContent},r.a.createElement(b.a,{maxWidth:"sm"},r.a.createElement(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"How it works"),r.a.createElement(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Click ",r.a.createElement("i",null,"shuffle")," button to get a random meme image and use your creativity by adding top/bottom texts!"),r.a.createElement("div",{style:e.component.randImg?null:{display:"none"}},r.a.createElement(M.a,{container:!0,spacing:4},A.map((function(a){return r.a.createElement(M.a,{item:!0,key:a,xs:12,sm:12,md:12},r.a.createElement(j.a,{className:t.card},r.a.createElement(T.a,{className:t.cardMedia,title:"Image title"},r.a.createElement("div",{className:"container meme"},r.a.createElement("img",{src:e.component.randImg,alt:"Snow",style:{width:"100%"}}),r.a.createElement("h2",{className:"top"},e.component.topText),r.a.createElement("h2",{className:"bottom"},e.component.bottomText),r.a.createElement(D.a,null,r.a.createElement(B.a,{id:"standard-search",label:"top text",type:"search",name:"topText",value:e.component.topText,onChange:e.handleChange}),r.a.createElement(B.a,{id:"standard-search",label:"bottom text",type:"search",name:"bottomText",value:e.component.bottomText,onChange:e.handleChange})))),r.a.createElement(w.a,{className:t.cardContent},r.a.createElement(v.a,{color:"textSecondary"},"Here is your meme image. Enjoy ^^"))),r.a.createElement(v.a,{color:"textSecondary",style:e.component.shuffleAfterDel?null:{display:"none"}},"Note:you ",r.a.createElement("b",null,"must")," shuffle first to click previous/next after deletion"),r.a.createElement("br",null))})))),r.a.createElement("div",{className:t.heroButtons},r.a.createElement(M.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(M.a,{item:!0},r.a.createElement(S.a,{variant:"contained",onClick:e.handlePrevImg,disabled:!(e.component.imgCount&&0!==e.component.indexOfCurrentImg&&!e.component.shuffleAfterDel)},"Previous")),r.a.createElement(M.a,{item:!0},r.a.createElement(S.a,{variant:"contained",onClick:e.handleNextImg,disabled:!(e.component.indexOfCurrentImg!==e.component.shuffledImgs.length-1&&0!==e.component.shuffledImgs.length&&!e.component.shuffleAfterDel)},"Next")),r.a.createElement(M.a,{item:!0},r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:e.src,disabled:e.component.indexOfCurrentImg<e.component.shuffledImgs.length-1},"Shuffle"))))),r.a.createElement(b.a,{className:t.cardGrid,maxWidth:"md"},r.a.createElement(v.a,{color:"textPrimary",variant:"h4",style:e.component.shuffledImgs.length?{display:"none",paddingBottom:"3%"}:null},"There is no meme in the card, why not exploring?"),r.a.createElement(v.a,{color:"textPrimary",variant:"h4",style:e.component.shuffledImgs.length?null:{display:"none",paddingBottom:"3%"}},"Great! you have ",e.component.shuffledImgs.length," memes, keep it up ^^")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(M.a,{container:!0,spacing:4},a.map((function(a,n){return r.a.createElement(M.a,{item:!0,key:n,xs:12,sm:6,md:4},r.a.createElement(j.a,{className:t.card},r.a.createElement(T.a,{className:t.cardMediaImgList,image:a,title:"Image title"}),r.a.createElement(w.a,{className:t.cardContent},r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Meme ",n+1)),r.a.createElement(D.a,null,r.a.createElement(S.a,{size:"small",color:"secondary",onClick:function(){return e.handleDelete(n)}},"Delete"))))})))))),r.a.createElement(N,{component:e.component}))}var G=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={topText:"",bottomText:"",indexOfCurrentImg:0,randImg:"",imgCount:0,shuffleAfterDel:!1,allMemeImgs:[],shuffledImgs:[]},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleRanImg=e.handleRanImg.bind(Object(u.a)(e)),e.handlePrevImg=e.handlePrevImg.bind(Object(u.a)(e)),e.handleNextImg=e.handleNextImg.bind(Object(u.a)(e)),e.handleDelete=e.handleDelete.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleRanImg",value:function(e){var t=this;e.preventDefault();var a=Math.floor(Math.random()*this.state.allMemeImgs.length-1)+1;this.state.shuffledImgs.includes(this.state.allMemeImgs[a].url)||this.setState({randImg:this.state.allMemeImgs[a].url,imgCount:this.state.imgCount+1,shuffledImgs:this.state.shuffledImgs.concat(this.state.allMemeImgs[a].url),shuffleAfterDel:!1},(function(){t.setState({indexOfCurrentImg:t.state.shuffledImgs.indexOf(t.state.randImg)})}))}},{key:"handlePrevImg",value:function(){var e=this;this.setState({indexOfCurrentImg:this.state.indexOfCurrentImg-1},(function(){e.setState({randImg:e.state.shuffledImgs[e.state.indexOfCurrentImg]})}))}},{key:"handleNextImg",value:function(){var e=this;this.setState({indexOfCurrentImg:this.state.indexOfCurrentImg+1},(function(){e.setState({randImg:e.state.shuffledImgs[e.state.indexOfCurrentImg]})}))}},{key:"handleDelete",value:function(e){var t=this;this.setState({shuffleAfterDel:!0},(function(){var a=t.state.shuffledImgs.filter((function(t,a){return a!==e}));t.setState({shuffledImgs:a},(function(){t.setState({randImg:t.state.shuffledImgs[t.state.shuffledImgs.length-1]})}))}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;return e.setState({allMemeImgs:a})})).catch((function(e){return console.log("Error : ".concat(e))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(W,{component:this.state,src:this.handleRanImg,handleChange:this.handleChange,handlePrevImg:this.handlePrevImg,handleNextImg:this.handleNextImg,handleDelete:this.handleDelete}))}}]),t}(n.Component);a(58),a(59);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.c9bf376d.chunk.js.map