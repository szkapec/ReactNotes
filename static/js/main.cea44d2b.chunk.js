(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,n,t){e.exports=t.p+"static/media/link.6fc1d8fe.svg"},46:function(e,n,t){e.exports=t.p+"static/media/bulb.af737b55.svg"},47:function(e,n,t){e.exports=t.p+"static/media/logout.0969c92b.svg"},48:function(e,n,t){e.exports=t.p+"static/media/pen.84b70f8a.svg"},49:function(e,n,t){e.exports=t.p+"static/media/twitter.051af8ba.svg"},50:function(e,n,t){e.exports=t.p+"static/media/magnifier.a14461b8.svg"},53:function(e,n,t){e.exports=t.p+"static/media/plus.e43ce6c8.svg"},58:function(e,n,t){e.exports=t(67)},67:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(29),o=t.n(i),c=t(5),l=t(12),u=t(10),d=t(55),p=t(18),s=t(19),m=t(21),f=t(20),x=t(22),h=t(1),b=t(2);function g(){var e=Object(b.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');\n  \n  *, *::before, *::after {\n    box-sizing: border-box;\n\n  }\n  \n  html {\n    font-size: 62.5%; \n  }\n  \n  body {\n    padding-left: 50px;\n    font-size: 1.6rem;\n    font-family: \"Montserrat\", sans-serif;\n    @media(min-width: 500px) {\n      padding-left: 90px;\n    }\n    @media(min-width: 1000px) {\n      padding-left: 120px;\n    }\n  }\n"]);return g=function(){return e},e}var w=Object(h.b)(g()),v={notes:"hsl(1, 78%, 43%, 1)",twitters:"hsl(241, 98%, 63%, 1)",articles:"hsl(48, 98%, 50%, 1)",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}},y=r.a.createContext("notes"),j=function(e){function n(){var e,t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={pageType:"notes"},t.setCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=t.props.location.pathname,a=["twitters","articles","notes"].filter(function(e){return n.includes(e)}),r=Object(d.a)(a,1)[0];e.pageType!==r&&t.setState({pageType:r})},t}return Object(x.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(e,n){this.setCurrentPage(n)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(y.Provider,{value:this.state.pageType},r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(h.a,{theme:v},e)))}}]),n}(a.Component),O=Object(l.g)(j);function E(){var e=Object(b.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return E=function(){return e},e}var k=h.d.p(E(),function(e){return e.theme.fontSize.s},function(e){return e.theme.regular});function z(){var e=Object(b.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return z=function(){return e},e}var C=h.d.h1(z(),function(e){var n=e.theme;return e.big?n.fontSize.xl:n.fontSize.l},function(e){return e.theme.bold});function T(){var e=Object(b.a)(["\n      background-color: hsl(0, 0%, 90%);\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return T=function(){return e},e}function N(){var e=Object(b.a)(["\n  padding: 0;\n  background-color: ",";\n  width: 220px;\n  height: 47px;\n  border: none;\n  border-radius: 50px;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n\n  ","\n"]);return N=function(){return e},e}var R=h.d.button(N(),function(e){var n=e.activecolor;return e.theme[n]},function(e){return e.secondary&&Object(h.c)(T())}),S=t(45),I=t.n(S),V=t(26);function D(){var e=Object(b.a)(["\n  background-color:  ",";\n  width: 70px;\n  font-size: 10px;\n\n  @media(min-width: 1000px){\n    width: 90px;\n  font-size: 12px;\n  }\n"]);return D=function(){return e},e}function U(){var e=Object(b.a)(["\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  background: white url(",") no-repeat;\n  background-size: 60%;\n  background-position: 50%;\n  position: absolute;\n  right: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  @media(min-width: 500px) {\n    width: 35px;\n  height: 35px;\n  }\n  @media(min-width: 700px) {\n    width: 40px;\n  height: 40px;\n  }\n"]);return U=function(){return e},e}function B(){var e=Object(b.a)(["\n  width: 30px;\n  height: 30px;\n  border: 5px solid ",";\n  border-radius: 50px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  @media(min-width: 500px) {\n    width: 35px;\n  height: 35px;\n  }\n  @media(min-width: 700px) {\n    width: 40px;\n  height: 40px;\n  }\n"]);return B=function(){return e},e}function P(){var e=Object(b.a)(["\n  margin: 5px 0 0;\n  font-size: 10px;\n\n  @media(min-width: 500px){\n    font-size: 14px;\n  }\n\n\n  \n"]);return P=function(){return e},e}function M(){var e=Object(b.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return M=function(){return e},e}function _(){var e=Object(b.a)(["\n  position: relative;\n  padding: 17px 30px;\n  background-color: ",";\n\n  :first-of-type {\n    z-index: 9999;\n  }\n\n  ","\n"]);return _=function(){return e},e}function F(){var e=Object(b.a)(["\nfont-size: 12px;\nline-height: 15px;\nmargin-bottom: 10px;\n@media(min-width: 500px){\n  font-size: 14px;\n}\n@media(min-width: 700px){\n  font-size: 16px;\n  line-height: 20px;\n}\n"]);return F=function(){return e},e}function J(){var e=Object(b.a)(["\n  min-height: 200px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n\n\n"]);return J=function(){return e},e}var Z=h.d.div(J()),A=Object(h.d)(k)(F()),K=h.d.div(_(),function(e){var n=e.activeColor,t=e.theme;return n?t[n]:"white"},function(e){return e.flex&&Object(h.c)(M())}),L=Object(h.d)(C)(P()),q=h.d.img(B(),function(e){return e.theme.twitters}),H=h.d.a(U(),I.a),Q=Object(h.d)(R)(D(),function(e){var n=e.propsik,t=e.theme;return n?t[n]:"white"}),Y=function(e){function n(e){var t;return Object(p.a)(this,n),(t=Object(m.a)(this,Object(f.a)(n).call(this,e))).state={redirect:!1},t.handleCardClick=function(){return t.setState({redirect:!0})},t.state={},t}return Object(x.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.cardType,a=e.title,i=(e.created,e.twitterName),o=e.articleUrl,c=e.content,u=e.removeItem;return this.state.redirect?r.a.createElement(l.a,{to:"".concat(t,"/").concat(n)}):r.a.createElement(Z,{onClick:this.handleCardClick},r.a.createElement(K,{activeColor:t},r.a.createElement(L,null,a),"twitters"===t&&r.a.createElement(q,{src:"https://avatars.io/twitter/".concat(i)}),"articles"===t&&r.a.createElement(H,{href:o})),r.a.createElement(K,{flex:!0},r.a.createElement(A,null,c),r.a.createElement(Q,{onClick:function(){return u(t,n)},propsik:t,secondary:!0},"Usu\u0144")))}}]),n}(a.Component);Y.defaultProps={cardType:"notes",content:null};var W=Object(u.b)(null,function(e){return{removeItem:function(n,t){return e(function(e,n){return{type:"REMOVE_ITEM",payload:{itemType:e,id:n}}}(n,t))}}})(Y);function X(){var e=Object(b.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 50% 50%;\n  border: none;\n\n  &.active {\n    background-color: white;\n  }\n"]);return X=function(){return e},e}var G=h.d.button(X(),function(e){return e.icon}),$=t(46),ee=t.n($),ne=t(47),te=t.n(ne),ae=t(48),re=t.n(ae),ie=t(49),oe=t.n(ie),ce=function(e){return function(n){return r.a.createElement(y.Consumer,null,function(t){return r.a.createElement(e,Object.assign({},n,{pageContext:t}))})}};function le(){var e=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return le=function(){return e},e}function ue(){var e=Object(b.a)(["\n  margin-top: auto;\n  width: 30px;\n  height: 30px;\n  @media(min-width: 500px) {\n    width: 40px;\n  height: 40px;\n  }\n"]);return ue=function(){return e},e}function de(){var e=Object(b.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  background-position: 50% 50%;\n  background-size: 80%;\n  border: none;\n  margin-bottom: 10vh;\n"]);return de=function(){return e},e}function pe(){var e=Object(b.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 100px 0;\n  width: 50px;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  @media(min-width: 500px) {\n    width: 70px;\n  }\n"]);return pe=function(){return e},e}var se=h.d.nav(pe(),function(e){var n=e.activeColor,t=e.theme;return n?t[n]:t.note}),me=h.d.div(de()),fe=Object(h.d)(G)(ue()),xe=h.d.ul(le()),he=function(e){var n=e.pageContext;return r.a.createElement(se,{activeColor:n},r.a.createElement(me,null),r.a.createElement(xe,null,r.a.createElement("li",null,r.a.createElement(fe,{as:c.c,to:"/ReactNotes/notes",icon:re.a,activeclass:"active"})),r.a.createElement("li",null,r.a.createElement(fe,{as:c.c,to:"/ReactNotes/twitters",icon:oe.a,activeclass:"active"})),r.a.createElement("li",null,r.a.createElement(fe,{as:c.c,to:"/ReactNotes/articles",icon:ee.a,activeclass:"active"}))),r.a.createElement(fe,{as:c.c,to:"/ReactNotes/login",icon:te.a}))};he.defaultProps={pageContext:"notes"};var be=ce(he),ge=t(50),we=t.n(ge);function ve(){var e=Object(b.a)(["\n      padding: 10px 20px 10px 40px;\n      font-size: ",";\n      background-image: url(",");\n      background-size: 15px;\n      background-position: 15px 50%;\n      background-repeat: no-repeat;\n    "]);return ve=function(){return e},e}function ye(){var e=Object(b.a)(["\n  padding: 15px 30px;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: ",";\n  }\n\n  ","\n"]);return ye=function(){return e},e}var je=h.d.input(ye(),function(e){return e.theme.fontSize.s},function(e){return e.theme.regular},function(e){return e.theme.grey100},function(e){return e.theme.grey300},function(e){return e.search&&Object(h.c)(ve(),function(e){return e.theme.fontSize.xs},we.a)}),Oe=t(16);function Ee(){var e=Object(b.a)(["\n  margin-top: 30px;\n  font-size: 10px;\n  width: 150px;\n    @media(min-width: 700px) {\n       font-size: 12px;\n       width: 200px;\n}\n\n"]);return Ee=function(){return e},e}function ke(){var e=Object(b.a)(["\nfont-size: 12px;\n@media(min-width: 700px) {\n  font-size: 18px;\n}\n@media(min-width: 1000px) {\n  font-size: 22px;\n}\n"]);return ke=function(){return e},e}function ze(){var e=Object(b.a)(["\ndisplay:flex;\nflex-direction: column;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(b.a)(["\n  margin-top: 30px;\n  font-size: 8px;\n\n  @media(min-width: 700px) {\n       font-size: 12px;\n}\n\n"]);return Ce=function(){return e},e}function Te(){var e=Object(b.a)(["\n    margin: 30px 0 100px;\n    border-radius:20px;\n    height: 30vh;\n"]);return Te=function(){return e},e}function Ne(){var e=Object(b.a)(["\n    border-left: 10px solid ",";\n    border-top: 10px solid ",";\n    z-index: 10000; \n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    padding: 50px 60px;\n    right: 0;\n    top: 40px;\n    height: 100vh;\n    width: 300px;\n    background-color: white;\n    box-shadow: -5px 0 15px rgba(0,0,0,0.1);\n    /* transform: translate(","); */\n    transform: translateY(",");\n    transition: transform 1s ease-in-out;\n\n    @media(min-width: 400px) {\n      width:350px;\n    }\n    @media(min-width: 500px) {\n      width:400px;\n    }\n    @media(min-width: 700px) {\n      width:500px;\n}\n\n  @media(min-width: 1000px) {\n    width:850px;\n}\n@media(min-width: 1200px) {\n    width:1000px;\n}\n"]);return Ne=function(){return e},e}var Re=h.d.div(Ne(),function(e){return e.theme[e.activeColor]},function(e){return e.theme[e.activeColor]},function(e){return e.isVisible?"0":"100%"},function(e){return e.isVisible?"0":"100%"}),Se=h.d.div(Te()),Ie=Object(h.d)(je)(Ce()),Ve=Object(h.d)(Oe.a)(ze()),De=Object(h.d)(C)(ke()),Ue=Object(h.d)(R)(Ee()),Be=function(e){var n=e.pageContext,t=e.isVisible,a=e.addItem,i=e.handleClose;return r.a.createElement(Re,{isVisible:t,activecolor:n},r.a.createElement(De,{big:!0},"Stw\xf3rz","notes"===n?" now\u0105 notatk\u0119":null,"articles"===n?" nowy artyku\u0142 ":null,"twitters"===n?" nowy twitt":null),r.a.createElement(Oe.b,{initialValues:{title:"",content:"",articleUrl:"",twitterName:"",created:""},onSubmit:function(e){a(n,e),console.log(e),i()}},function(e){var t=e.values,a=e.handleChange,i=e.handleBlur;return r.a.createElement(Ve,null,r.a.createElement(Ie,{type:"text",name:"title",placeholder:"Tytu\u0142",onChange:a,onBlur:i,value:t.title}),"twitters"===n&&r.a.createElement(Ie,{placeholder:"Nazwa twittera",type:"text",name:"twitterName",onChange:a,onBlur:i,value:t.twitterName}),"articles"===n&&r.a.createElement(Ie,{placeholder:"link do artyku\u0142u",type:"text",name:"articleUrl",onChange:a,onBlur:i,value:t.articleUrl}),r.a.createElement(Se,{name:"content",as:"textarea",onChange:a,onBlur:i,value:t.content}),r.a.createElement(Ue,{type:"submit",activecolor:n},"Dodaj notatke"))}))};Be.defaultProps={pageContext:"notes",isVisible:!1};var Pe=Object(u.b)(null,function(e){return{addItem:function(n,t){return e(function(e,n){return{type:"ADD_ITEM",payload:{itemType:e,item:Object(V.a)({id:"_".concat(Math.random().toString(36).substr(2,9))},n)}}}(n,t))}}})(ce(Be)),Me=t(53),_e=t.n(Me);function Fe(){var e=Object(b.a)(["\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  background-color: ",";\n  border-radius: 50%;\n  background-size: 20%;\n    height: 35px;\n    width: 35px;\n  z-index: 10001;\n\n  @media(min-width: 500px) {\n    background-size: 20%;\n    height: 50px;\n    width: 50px;\n  }\n  @media(min-width: 1000px) {\n    height: 70px;\n    width: 70px;\n    bottom: 40px;\n  right: 40px;\n  }\n\n"]);return Fe=function(){return e},e}function Je(){var e=Object(b.a)(["\n  margin: 0;\n  font-size: 10px;\n  text-align: center;\n  @media(min-width:500px){\n    font-size: 12px;\n  }\n    @media(min-width:1000px){\n    font-size: 16px;\n  }\n"]);return Je=function(){return e},e}function Ze(){var e=Object(b.a)(["\n  margin: 25px 0 10px 0;\n  font-size: 12px;\n  text-align: center;\n  @media(min-width:500px){\n    font-size: 16px;\n  }\n  @media(min-width:1000px){\n    font-size: 20px;\n  }\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return Ze=function(){return e},e}function Ae(){var e=Object(b.a)(["\n  margin: 25px 0 50px 0;\n"]);return Ae=function(){return e},e}function Ke(){var e=Object(b.a)(["\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 85px;\n  @media(max-width:1000px){\n    grid-template-columns: repeat(1, 0.8fr);\n  }\n"]);return Ke=function(){return e},e}function Le(){var e=Object(b.a)(["\nposition: relative;\n  padding: 25px 0px 25px 0px;\n"]);return Le=function(){return e},e}var qe=h.d.div(Le()),He=h.d.div(Ke()),Qe=h.d.div(Ae()),Ye=Object(h.d)(C)(Ze()),We=Object(h.d)(k)(Je()),Xe=Object(h.d)(G)(Fe(),function(e){var n=e.activeColor;return e.theme[n]}),Ge=function(e){function n(){var e,t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={isNewItemBarVisible:!1},t.handleNewItemBarToggle=function(){t.setState(function(e){return{isNewItemBarVisible:!e.isNewItemBarVisible}})},t}return Object(x.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.pageType,a=e.pageContext,i=this.state.isNewItemBarVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement(be,{pageType:a}),r.a.createElement(qe,{pageType:t},r.a.createElement(Qe,null,r.a.createElement(Ye,{as:"h1"},"notes"===t?"Dodaj now\u0105 notatk\u0119":null,"twitters"===t?"Dodaj nowego twitta":null,"articles"===t?"Dodaj nowy artyku\u0142":null),r.a.createElement(We,null,"dodaj","notes"===t?" notetk\u0119!":null,"twitters"===t?" twitta!":null,"articles"===t?" artyku\u0142!":null)),r.a.createElement(Xe,{onClick:this.handleNewItemBarToggle,icon:_e.a,activeColor:a}),r.a.createElement(Pe,{handleClose:this.handleNewItemBarToggle,isVisible:i}),r.a.createElement(He,null,n)))}}]),n}(a.Component);Ge.defaultProps={pageContext:"notes"};var $e=ce(Ge),en=function(e){var n=e.notes;return r.a.createElement($e,{pageType:"notes"},n.map(function(e){return r.a.createElement(W,{cardType:"notes",id:e.id,title:e.title,content:e.content,created:e.created,key:e.id})}))};en.defaultProps={notes:[]};var nn=Object(u.b)(function(e){var n=e.notes;return console.log(e),{notes:n}})(en),tn=function(e){var n=e.articles;return r.a.createElement($e,{pageType:"articles"},n.map(function(e){return r.a.createElement(W,{cardType:"articles",title:e.title,content:e.content,articleUrl:e.articleUrl,created:e.created,key:e.title,id:e.id})}))};tn.defaultProps={articles:[]};var an=Object(u.b)(function(e){return{articles:e.articles}})(tn),rn=function(e){var n=e.twitters;return r.a.createElement($e,{pageType:"twitters"},n.map(function(e){return r.a.createElement(W,{cardType:"twitters",title:e.title,content:e.content,twitterName:e.twitterName,created:e.created,key:e.title,id:e.id})}))};rn.defaultProps={twitters:[]};var on=Object(u.b)(function(e){return{twitters:e.twitters}})(rn),cn=function(e){var n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(be,null),n)};function ln(){var e=Object(b.a)(["\n  margin: 25px 0 50px 0;\n  font-size: 20px;\n  \n  @media(min-width: 500px){\n    font-size: 22px;\n  }\n  @media(min-width: 600px){\n    font-size: 28px;\n  }\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return ln=function(){return e},e}function un(){var e=Object(b.a)(["\n  margin-bottom: 30px;\n  font-size: 12px;\n  width: 180px;\n  padding: 15px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);\n\n\n  @media(min-width: 500px){\n    font-size: 14px;\n    width: 250px;\n  }\n  @media(min-width: 600px){\n    font-size: 16px;\n    width: 350px;\n  }\n    @media(min-width: 1000px){\n    font-size: 20px;\n    width: 500px;\n  }\n"]);return un=function(){return e},e}function dn(){var e=Object(b.a)(["\ndisplay: block;\nfont-weight: ",";\nfont-size: 10px;\ncolor: black;\ntext-transform: uppercase;\nmargin: 40px 0 30px;\n\n\n@media(min-width: 500px) {\n  font-size: 12px;\n}\n"]);return dn=function(){return e},e}function pn(){var e=Object(b.a)(["\n      padding: 10px;\n      width: 150px;\n      font-size: 10px;\n      text-decoration: none;\n      color: black;\n\n      @media(min-width: 600px) {\n        font-size: 14px;\n        width: 250px;\n      }\n\n"]);return pn=function(){return e},e}function sn(){var e=Object(b.a)(["\n  margin: 0;\n  font-weight: ",";\n"]);return sn=function(){return e},e}function mn(){var e=Object(b.a)(["\n  margin: 25px 0 0 0;\n"]);return mn=function(){return e},e}function fn(){var e=Object(b.a)(["\n  padding: 25px 150px 25px 30px;\n  max-width: 50vw;\n  position: relative;\n  @media (max-width: 1200px) {\n    max-width: 80vw;\n  }\n"]);return fn=function(){return e},e}var xn=h.d.div(fn()),hn=h.d.div(mn()),bn=(Object(h.d)(k)(sn(),function(e){return e.theme.bold}),Object(h.d)(R)(pn())),gn=h.d.a(dn(),function(e){return e.theme.bold}),wn=Object(h.d)(k)(un()),vn=Object(h.d)(C)(ln()),yn=function(e){var n=e.pageContext,t=e.title,a=(e.created,e.content),i=e.articleUrl;e.twitterName;return r.a.createElement(cn,null,r.a.createElement(xn,null,r.a.createElement(hn,null,r.a.createElement(vn,{big:!0,as:"h1"},t)),r.a.createElement(wn,null,a),"articles"===n&&r.a.createElement(gn,{href:i},"Otw\xf3rz artyku\u0142"),r.a.createElement(bn,{as:c.b,to:"/".concat(n),activecolor:n},"Zapisz")))};yn.defaultProps={title:"",created:"",content:"",articleUrl:"",twitterName:""};var jn=ce(yn),On=function(e){function n(e){var t;return Object(p.a)(this,n),(t=Object(m.a)(this,Object(f.a)(n).call(this,e))).state={pageType:"notes"},t.state={},t}return Object(x.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e="Komedia filmowa ",n="lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content",t="random",a="http://www.google.pl",i="1day";return r.a.createElement(jn,{pageType:this.state.pageType,title:e,created:i,content:n,articleUrl:a,twitterName:t})}}]),n}(a.Component),En="/",kn="/login",zn="/register";function Cn(){var e=Object(b.a)(["\n  text-align: center;\n  font-size: 14px;\n  @media(min-width:800px) {\n    font-size: 20px;\n  }\n"]);return Cn=function(){return e},e}function Tn(){var e=Object(b.a)(["\n  width: 400px;\n  height: 400px;\n  margin-top: 40px;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return Tn=function(){return e},e}function Nn(){var e=Object(b.a)(["\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return Nn=function(){return e},e}var Rn=h.d.div(Nn(),function(e){return e.theme.notes}),Sn=h.d.div(Tn()),In=Object(h.d)(C)(Cn()),Vn=function(e){var n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Rn,null,r.a.createElement(In,null,"Zaloguj si\u0119 aby zobaczy\u0107 swoje notatki online"),r.a.createElement(Sn,null,n)))};function Dn(){var e=Object(b.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"]);return Dn=function(){return e},e}function Un(){var e=Object(b.a)(["\n  margin: 0 0 30px 0;\n  height: 40px;\n  width: 300px;\n"]);return Un=function(){return e},e}function Bn(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return Bn=function(){return e},e}var Pn=Object(h.d)(Oe.a)(Bn()),Mn=Object(h.d)(je)(Un()),_n=Object(h.d)(c.b)(Dn(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Fn=function(e){var n=e.userID;e.authenticate;return r.a.createElement(Vn,null,r.a.createElement(Oe.b,null,function(e){return e.handleChange,e.handleBlur,e.values,n?r.a.createElement(l.a,{to:En}):r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,"Zaloguj si\u0119"),r.a.createElement(Pn,null,r.a.createElement(Mn,{type:"text",name:"username",placeholder:"Login"}),r.a.createElement(Mn,{type:"password",name:"password",placeholder:"Has\u0142o"}),r.a.createElement(R,{activecolor:"notes",type:"submit"},"Zaloguj")),r.a.createElement(_n,{to:zn},"Zarejestruj si\u0119!"))}))};function Jn(){var e=Object(b.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"]);return Jn=function(){return e},e}function Zn(){var e=Object(b.a)(["\n  margin: 0 0 30px 0;\n  height: 40px;\n  width: 300px;\n"]);return Zn=function(){return e},e}function An(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return An=function(){return e},e}var Kn=Object(h.d)(Oe.a)(An()),Ln=Object(h.d)(je)(Zn()),qn=Object(h.d)(c.b)(Jn(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Hn=function(){return r.a.createElement(Vn,null,r.a.createElement(Oe.b,{initialValues:{username:"",password:""},onSubmit:function(e){e.username,e.password,console.log("hello")}},function(e){var n=e.handleChange,t=e.handleBlur,a=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,"Zarejestruj si\u0119"),r.a.createElement(Kn,null,r.a.createElement(Ln,{type:"text",name:"username",placeholder:"Login",onChange:n,onBlur:t,value:a.title}),r.a.createElement(Ln,{type:"password",name:"password",placeholder:"Has\u0142o",onChange:n,onBlur:t,value:a.title}),r.a.createElement(R,{activecolor:"notes",type:"submit"},"Rejestracja")),r.a.createElement(qn,{to:kn},"Zaloguj si\u0119!"))}))},Qn=t(25),Yn=t(27),Wn=t(39),Xn={twitters:[{id:1,title:"Wprowadzenie do hook\xf3w",content:"Hooki s\u0105 nowym dodatkiem w Reakcie 16.8. Pozwalaj\u0105 one u\u017cywa\u0107 stanu i innych funkcjonalno\u015bci Reacta, bez u\u017cycia klas.",created:"1 day",twitterName:"aaa"},{id:2,title:"React Redux",content:"Od samego pocz\u0105tku musimy podkre\u015bli\u0107, \u017ce Redux nie ma zwi\u0105zku z React. Mo\u017cesz pisa\u0107 aplikacje Redux za pomoc\u0105 React, Angular, Ember, jQuery lub waniliowego JavaScript.",created:"1 day",twitterName:"dan_abramov"},{id:3,title:"Styled component w React",content:"Styled-components jest wynikiem zastanawiania si\u0119, w jaki spos\xf3b mo\u017cemy ulepszy\u0107 CSS do stylizacji system\xf3w komponent\xf3w React. Koncentruj\u0105c si\u0119 na pojedynczym przypadku u\u017cycia, uda\u0142o nam si\u0119 zoptymalizowa\u0107 do\u015bwiadczenie dla programist\xf3w, a tak\u017ce wydajno\u015b\u0107 dla u\u017cytkownik\xf3w ko\u0144cowych.",created:"1 day",twitterName:"aaa"}],articles:[{id:1,title:"React artyku\u0142",content:"Nasz du\u017cy zesp\xf3\u0142 in\u017cynier\xf3w korzysta z tego przewodnika rozwoju",articleUrl:"https://www.freecodecamp.org/news/grabs-front-end-guide-for-large-teams-484d4033cc41/",created:"1 day"},{id:2,title:"Czysty kod w React",content:"Jak napisa\u0107 bardzo czytelny kod React - 10 wskaz\xf3wek dotycz\u0105cych stylu kodowania",created:"1 day",articleUrl:"https://youtube.com/helloroman"},{id:3,title:"You gave React a bad name",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"1 day",articleUrl:"https://www.freecodecamp.org/news/10-points-to-remember-thatll-help-you-master-coding-in-reactjs-library-d0520d8c73d8/"},{id:4,title:"Kurs Reacta - udemy",content:"React 16 - Kompletny przewodnik (w tym React Router 4 i Redux)",articleUrl:"https://www.udemy.com/course/react-the-complete-guide-incl-redux/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-Q3q.KljcfruAzgZwaqyUjw",created:"10 days"},{id:5,title:"Kompletny kurs React Native i Redux",content:"Tworzenie aplikacji na iOS i Androida od zera - buduj pe\u0142ne aplikacje mobilne React Native bardzo szybko!",articleUrl:"https://www.udemy.com/course/the-complete-react-native-and-redux-course/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-8suJ_4d.g3Q1mcWkI6wKCA",created:"10 days"}],notes:[{id:1,title:"Zapraszam do dodawania notatek!",created:"1 day",content:'Ka\u017cdy mo\u017ce doda\u0107 notatk\u0119 przycisk "+" prawy dolny r\xf3g. Zapraszam! '},{id:2,title:"Zakupy",created:"1 day",content:"Lista zakup\xf3w"}]},Gn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_ITEM":return Object(V.a)({},e,Object(Yn.a)({},n.payload.itemType,[].concat(Object(Wn.a)(e[n.payload.itemType]),[n.payload.item])));case"REMOVE_ITEM":return Object(V.a)({},e,Object(Yn.a)({},n.payload.itemType,Object(Wn.a)(e[n.payload.itemType].filter(function(e){return e.id!==n.payload.id}))));default:return e}},$n=t(54),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Qn.c,nt=Object(Qn.d)(Gn,et(Object(Qn.a)($n.a))),tt=function(){return r.a.createElement(u.a,{store:nt},r.a.createElement(c.a,null,r.a.createElement(O,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:kn,component:Fn}),r.a.createElement(l.b,{exact:!0,path:zn,component:Hn}),r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:"/ReactNotes/notes"})}}),r.a.createElement(l.b,{exact:!0,path:"/ReactNotes",render:function(){return r.a.createElement(l.a,{to:"/ReactNotes/notes"})}}),r.a.createElement(l.b,{exact:!0,path:"/ReactNotes/notes",component:nn}),r.a.createElement(l.b,{path:"/ReactNotes/notes/:id",component:On}),r.a.createElement(l.b,{exact:!0,path:"/ReactNotes/articles",component:an}),r.a.createElement(l.b,{path:"/ReactNotes/articles/:id",component:On}),r.a.createElement(l.b,{exact:!0,path:"/ReactNotes/twitters",component:on}),r.a.createElement(l.b,{path:"/ReactNotes/twitters/:id",component:On})))))};o.a.render(r.a.createElement(tt,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.cea44d2b.chunk.js.map