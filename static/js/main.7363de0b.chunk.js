(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[0],{19:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),i=c(12),s=c.n(i),o=c(5),l=c.n(o),u=c(8),d=c(3),p=c(7),b=(c(19),c(6)),h=c(4),j=function(e,t){if(e){var c=t.current.play();void 0!==c&&c.then((function(e){t.current.play()}))}},f=function(e){var t=e.songInfo,c=e.setSongInfo,r=e.audioRef,i=e.currentSong,s=e.isPlaying,o=e.setIsPlaying,l=e.songs,u=e.setCurrentSong,p=e.setSongs;Object(a.useEffect)((function(){var e=l.map((function(e){return e.id===i.id?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));p(e)}),[i]);var f=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(e){var t=l.findIndex((function(e){return e.id===i.id}));if("skip-forward"===e&&u(l[(t+1)%l.length]),"skip-back"===e){if((t-1)%l.length===-1)return u(l[l.length-1]),void j(s,r);u(l[(t-1)%l.length])}j(s,r)},g={transform:"translateX(".concat(t.animationPercentage,"%)")};return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(b.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:h.a}),Object(n.jsx)(b.a,{onClick:function(){s?(r.current.pause(),o(!1)):(r.current.play(),o(!0))},className:"play",size:"2x",icon:s?h.d:h.e}),Object(n.jsx)(b.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:h.b})]}),Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:f(t.currentTime)}),Object(n.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(i.color[0],", ").concat(i.color[1],")")},className:"track",children:[Object(n.jsx)("input",{onChange:function(e){r.current.currentTime=e.target.value,c(Object(d.a)(Object(d.a)({},t),{},{currentTime:e.target.value}))},min:0,max:t.duration||0,value:t.currentTime,type:"range"}),Object(n.jsx)("div",{style:g,className:"animate-track"})]}),Object(n.jsx)("p",{children:f(t.duration)})]})]})},m=function(e){var t=e.currentSong;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{src:t.cover,alt:""}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,c=e.songs,a=e.setCurrentSong,r=e.audioRef,i=e.setIsPlaying,s=e.id,o=e.setSongs,p=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:n=c.map((function(e){return e.id===s?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),o(n),i(!0),r.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{onClick:p,className:"library-song ".concat(t.active?"selected":""),children:[Object(n.jsx)("img",{src:t.cover,alt:t.name}),Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.artist})]})]})},v=function(e){var t=e.songs,c=e.setCurrentSong,a=e.audioRef,r=e.setIsPlaying,i=e.setSongs,s=e.libraryStatus;return Object(n.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(n.jsx)("div",{className:"head",children:Object(n.jsx)("h2",{children:"Library"})}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(g,{setSongs:i,setIsPlaying:r,songs:t,setCurrentSong:c,song:e,id:e.id,audioRef:a},e.id)}))})]})},O=c(27);var x=function(){return[{name:"Sleepover",artist:"Nymano, JK the Sage",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",id:Object(O.a)(),active:!0,color:["#715E87","#181413"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10130"},{name:"Soil",artist:"Philanthrope, Guillaume Muschalle",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg",id:Object(O.a)(),active:!1,color:["#583631","#984A44"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10254"},{name:"Tumbling",artist:"Sw\xf8rn",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#C14979","#361750"],audio:"https://mp3.chillhop.com/serve.php/?mp3=9225"},{name:"Aerials",artist:"No Spirit, dryhope",cover:"https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#C15448","#477E61"],audio:"https://mp3.chillhop.com/serve.php/?mp3=9423"},{name:"Harbor",artist:"Stan Forebee, The Field Tapes, azula, Francis",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#DDE9DE","#222641"],audio:"https://mp3.chillhop.com/serve.php/?mp3=11245"},{name:"Melancholy",artist:"Makzo",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#FDDC67","#5065a1"],audio:"https://mp3.chillhop.com/serve.php/?mp3=11778"},{name:"Flushing the Stairs",artist:"Leavv",cover:"https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#033540","#879974"],audio:"https://mp3.chillhop.com/serve.php/?mp3=9917"},{name:"Hibiscus",artist:"G Mills, Felty",cover:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#1872B1","#E2B240"],audio:"https://mp3.chillhop.com/serve.php/?mp3=8971"}]},y=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("h1",{children:"MyPlayer"}),Object(n.jsxs)("button",{onClick:function(){return c(!t)},children:["Library",Object(n.jsx)(b.a,{icon:h.c})]})]})};var S=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(x()),c=Object(p.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(r[0]),o=Object(p.a)(s,2),b=o[0],h=o[1],j=Object(a.useState)(!1),g=Object(p.a)(j,2),O=g[0],S=g[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(p.a)(k,2),C=w[0],N=w[1],P=Object(a.useState)(!1),I=Object(p.a)(P,2),T=I[0],M=I[1],F=function(e){var t=e.target.currentTime,c=e.target.duration,n=Math.round(t),a=Math.round(c),r=Math.round(n/a*100);N(Object(d.a)(Object(d.a)({},C),{},{currentTime:t,duration:c,animationPercentage:r}))},E=function(){var t=Object(u.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.findIndex((function(e){return e.id===b.id})),t.next=3,h(r[(c+1)%r.length]);case 3:O&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(y,{libraryStatus:T,setLibraryStatus:M}),Object(n.jsx)(m,{currentSong:b}),Object(n.jsx)(f,{setSongs:i,setCurrentSong:h,songs:r,songInfo:C,setSongInfo:N,audioRef:e,isPlaying:O,setIsPlaying:S,currentSong:b}),Object(n.jsx)(v,{libraryStatus:T,setSongs:i,setIsPlaying:S,audioRef:e,songs:r,setCurrentSong:h}),Object(n.jsx)("audio",{onEnded:E,onLoadedMetadata:F,onTimeUpdate:F,ref:e,src:b.audio})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),k()}},[[25,1,2]]]);
//# sourceMappingURL=main.7363de0b.chunk.js.map