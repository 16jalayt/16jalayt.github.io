"use strict";(self.webpackChunk_16jalayt_github_io=self.webpackChunk_16jalayt_github_io||[]).push([[592],{7142:(e,t,r)=>{r.d(t,{Z:()=>Qt});var n=r(7294);var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};Object.create;function s(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;var a=r(6774),i=r.n(a),c="-ms-",u="-moz-",l="-webkit-",f="comm",p="rule",h="decl",d="@import",g="@keyframes",m="@layer",v=Math.abs,y=String.fromCharCode,S=Object.assign;function b(e){return e.trim()}function w(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,r){return e.replace(t,r)}function x(e,t,r){return e.indexOf(t,r)}function I(e,t){return 0|e.charCodeAt(t)}function P(e,t,r){return e.slice(t,r)}function A(e){return e.length}function k(e){return e.length}function E(e,t){return t.push(e),e}function $(e,t){return e.filter((function(e){return!w(e,t)}))}var _=1,R=1,O=0,j=0,N=0,T="";function D(e,t,r,n,o,s,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:_,column:R,length:a,return:"",siblings:i}}function F(e,t){return S(D("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function z(e){for(;e.root;)e=F(e.root,{children:[e]});E(e,e.siblings)}function G(){return N=j>0?I(T,--j):0,R--,10===N&&(R=1,_--),N}function M(){return N=j<O?I(T,j++):0,R++,10===N&&(R=1,_++),N}function B(){return I(T,j)}function L(){return j}function W(e,t){return P(T,e,t)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return _=R=1,O=A(T=e),j=0,[]}function q(e){return T="",e}function U(e){return b(W(j-1,J(91===e?e+2:40===e?e+1:e)))}function Z(e){for(;(N=B())&&N<33;)M();return Y(e)>2||Y(N)>3?"":" "}function V(e,t){for(;--t&&M()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return W(e,L()+(t<6&&32==B()&&32==M()))}function J(e){for(;M();)switch(N){case e:return j;case 34:case 39:34!==e&&39!==e&&J(N);break;case 40:41===e&&J(e);break;case 92:M()}return j}function K(e,t){for(;M()&&e+N!==57&&(e+N!==84||47!==B()););return"/*"+W(t,j-1)+"*"+y(47===e?e:M())}function Q(e){for(;!Y(B());)M();return W(e,j)}function X(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ee(e,t,r,n){switch(e.type){case m:if(e.children.length)break;case d:case h:return e.return=e.return||e.value;case f:return"";case g:return e.return=e.value+"{"+X(e.children,n)+"}";case p:if(!A(e.value=e.props.join(",")))return""}return A(r=X(e.children,n))?e.return=e.value+"{"+r+"}":""}function te(e,t,r){switch(function(e,t){return 45^I(e,0)?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}(e,t)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+u+e+c+e+e;case 5936:switch(I(e,t+11)){case 114:return l+e+c+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+c+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+c+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return l+e+c+e+e;case 6165:return l+e+c+"flex-"+e+e;case 5187:return l+e+C(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return l+e+c+"flex-item-"+C(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":c+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return l+e+c+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return l+e+c+C(e,"shrink","negative")+e;case 5292:return l+e+c+C(e,"basis","preferred-size")+e;case 6060:return l+"box-"+C(e,"-grow","")+l+e+c+C(e,"grow","positive")+e;case 4554:return l+C(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4200:if(!w(e,/flex-|baseline/))return c+"grid-column-align"+P(e,t)+e;break;case 2592:case 3360:return c+C(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,w(e.props,/grid-\w+-end/)}))?~x(e+(r=r[t].value),"span",0)?e:c+C(e,"-start","")+e+c+"grid-row-span:"+(~x(r,"span",0)?w(r,/\d+/):+w(r,/\d+/)-+w(e,/\d+/))+";":c+C(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return w(e.props,/grid-\w+-start/)}))?e:c+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(I(e,t+1)){case 109:if(45!==I(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+u+(108==I(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch",0)?te(C(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,s,a,i){return c+r+":"+n+i+(o?c+r+"-span:"+(s?a:+a-+n)+i:"")+e}));case 4949:if(121===I(e,t+6))return C(e,":",":"+l)+e;break;case 6444:switch(I(e,45===I(e,14)?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===I(e,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+c+"$2box$3")+e;case 100:return C(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function re(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=te(e.value,e.length,r));case g:return X([F(e,{value:C(e.value,"@","@"+l)})],n);case p:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(w(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":z(F(e,{props:[C(t,/:(read-\w+)/,":"+u+"$1")]})),z(F(e,{props:[t]})),S(e,{props:$(r,n)});break;case"::placeholder":z(F(e,{props:[C(t,/:(plac\w+)/,":"+l+"input-$1")]})),z(F(e,{props:[C(t,/:(plac\w+)/,":"+u+"$1")]})),z(F(e,{props:[C(t,/:(plac\w+)/,c+"input-$1")]})),z(F(e,{props:[t]})),S(e,{props:$(r,n)})}return""}))}}function ne(e){return q(oe("",null,null,null,[""],e=H(e),0,[0],e))}function oe(e,t,r,n,o,s,a,i,c){for(var u=0,l=0,f=a,p=0,h=0,d=0,g=1,m=1,S=1,b=0,w="",P=o,k=s,$=n,_=w;m;)switch(d=b,b=M()){case 40:if(108!=d&&58==I(_,f-1)){-1!=x(_+=C(U(b),"&","&\f"),"&\f",v(u?i[u-1]:0))&&(S=-1);break}case 34:case 39:case 91:_+=U(b);break;case 9:case 10:case 13:case 32:_+=Z(d);break;case 92:_+=V(L()-1,7);continue;case 47:switch(B()){case 42:case 47:E(ae(K(M(),L()),t,r,c),c);break;default:_+="/"}break;case 123*g:i[u++]=A(_)*S;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+l:-1==S&&(_=C(_,/\f/g,"")),h>0&&A(_)-f&&E(h>32?ie(_+";",n,r,f-1,c):ie(C(_," ","")+";",n,r,f-2,c),c);break;case 59:_+=";";default:if(E($=se(_,t,r,u,l,o,i,w,P=[],k=[],f,s),s),123===b)if(0===l)oe(_,t,$,$,P,s,f,i,k);else switch(99===p&&110===I(_,3)?100:p){case 100:case 108:case 109:case 115:oe(e,$,$,n&&E(se(e,$,$,0,0,o,i,w,o,P=[],f,k),k),o,k,f,i,n?P:k);break;default:oe(_,$,$,$,[""],k,0,i,k)}}u=l=h=0,g=S=1,w=_="",f=a;break;case 58:f=1+A(_),h=d;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==G())continue;switch(_+=y(b),b*g){case 38:S=l>0?1:(_+="\f",-1);break;case 44:i[u++]=(A(_)-1)*S,S=1;break;case 64:45===B()&&(_+=U(M())),p=B(),l=f=A(w=_+=Q(L())),b++;break;case 45:45===d&&2==A(_)&&(g=0)}}return s}function se(e,t,r,n,o,s,a,i,c,u,l,f){for(var h=o-1,d=0===o?s:[""],g=k(d),m=0,y=0,S=0;m<n;++m)for(var w=0,x=P(e,h+1,h=v(y=a[m])),I=e;w<g;++w)(I=b(y>0?d[w]+" "+x:C(x,/&\f/g,d[w])))&&(c[S++]=I);return D(e,t,r,0===o?p:i,c,u,l,f)}function ae(e,t,r,n){return D(e,t,r,f,y(N),P(e,2,-2),0,n)}function ie(e,t,r,n,o){return D(e,t,r,h,P(e,0,n),P(e,n+1,-1),n,o)}const ce={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ue="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",le="active",fe="data-styled-version",pe="6.1.8",he="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,ge=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&("false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY)),me=(new Set,Object.freeze([])),ve=Object.freeze({});function ye(e,t,r){return void 0===r&&(r=ve),e.theme!==r.theme&&e.theme||t||r.theme}var Se=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function Ce(e){return e.replace(be,"-").replace(we,"")}var xe=/(a)(d)/gi,Ie=52,Pe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ae(e){var t,r="";for(t=Math.abs(e);t>Ie;t=t/Ie|0)r=Pe(t%Ie)+r;return(Pe(t%Ie)+r).replace(xe,"$1-$2")}var ke,Ee=5381,$e=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},_e=function(e){return $e(Ee,e)};function Re(e){return Ae(_e(e)>>>0)}function Oe(e){return e.displayName||e.name||"Component"}function je(e){return"string"==typeof e&&!0}var Ne="function"==typeof Symbol&&Symbol.for,Te=Ne?Symbol.for("react.memo"):60115,De=Ne?Symbol.for("react.forward_ref"):60112,Fe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ze={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ge={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Me=((ke={})[De]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke[Te]=Ge,ke);function Be(e){return("type"in(t=e)&&t.type.$$typeof)===Te?Ge:"$$typeof"in e?Me[e.$$typeof]:Fe;var t}var Le=Object.defineProperty,We=Object.getOwnPropertyNames,Ye=Object.getOwnPropertySymbols,He=Object.getOwnPropertyDescriptor,qe=Object.getPrototypeOf,Ue=Object.prototype;function Ze(e,t,r){if("string"!=typeof t){if(Ue){var n=qe(t);n&&n!==Ue&&Ze(e,n,r)}var o=We(t);Ye&&(o=o.concat(Ye(t)));for(var s=Be(e),a=Be(t),i=0;i<o.length;++i){var c=o[i];if(!(c in ze||r&&r[c]||a&&c in a||s&&c in s)){var u=He(t,c);try{Le(e,c,u)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function Je(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Xe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,r){if(void 0===r&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=et(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=et(e[n],t[n]);return e}function tt(e,t){Object.defineProperty(e,"toString",{value:t})}function rt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw rt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),i=(s=0,t.length);s<i;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(he);return t},e}(),ot=new Map,st=new Map,at=1,it=function(e){if(ot.has(e))return ot.get(e);for(;st.has(at);)at++;var t=at++;return ot.set(e,t),st.set(t,e),t},ct=function(e,t){at=t+1,ot.set(e,t),st.set(t,e)},ut="style[".concat(ue,"][").concat(fe,'="').concat(pe,'"]'),lt=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ft=function(e,t,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(t,n)},pt=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(he),o=[],s=0,a=n.length;s<a;s++){var i=n[s].trim();if(i){var c=i.match(lt);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(ct(l,u),ft(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}};function ht(){return r.nc}var dt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(r),s=void 0!==o?o.nextSibling:null;n.setAttribute(ue,le),n.setAttribute(fe,pe);var a=ht();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},gt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw rt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),yt=de,St={isServer:!de,useCSSOMInjection:!ge},bt=function(){function e(e,t,r){void 0===e&&(e=ve),void 0===t&&(t={});var n=this;this.options=o(o({},St),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&de&&yt&&(yt=!1,function(e){for(var t=document.querySelectorAll(ut),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(ue)!==le&&(pt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),tt(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return st.get(e)}(r);if(void 0===o)return"continue";var s=e.names.get(o),a=t.getGroup(r);if(void 0===s||0===a.length)return"continue";var i="".concat(ue,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(a).concat(i,'{content:"').concat(c,'"}').concat(he)},s=0;s<r;s++)o(s);return n}(n)}))}return e.registerId=function(e){return it(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(o(o({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new vt(r):t?new gt(r):new mt(r)}(this.options),new nt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(it(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(it(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(it(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wt=/&/g,Ct=/^\s*\/\/.*$/gm;function xt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e}))}function It(e){var t,r,n,o=void 0===e?ve:e,s=o.options,a=void 0===s?ve:s,i=o.plugins,c=void 0===i?me:i,u=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wt,r).replace(n,u))})),a.prefix&&l.push(re),l.push(ee);var f=function(e,o,s,i){void 0===o&&(o=""),void 0===s&&(s=""),void 0===i&&(i="&"),t=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(Ct,""),u=ne(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);a.namespace&&(u=xt(u,a.namespace));var f,p,h,d=[];return X(u,(f=l.concat((h=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&h(e)})),p=k(f),function(e,t,r,n){for(var o="",s=0;s<p;s++)o+=f[s](e,t,r,n)||"";return o})),d};return f.hash=c.length?c.reduce((function(e,t){return t.name||rt(15),$e(e,t.name)}),Ee).toString():"",f}var Pt=new bt,At=It(),kt=n.createContext({shouldForwardProp:void 0,styleSheet:Pt,stylis:At}),Et=(kt.Consumer,n.createContext(void 0));function $t(){return(0,n.useContext)(kt)}function _t(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],o=t[1],s=$t().styleSheet,a=(0,n.useMemo)((function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,s]),c=(0,n.useMemo)((function(){return It({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,n.useEffect)((function(){i()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var u=(0,n.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:c}}),[e.shouldForwardProp,a,c]);return n.createElement(kt.Provider,{value:u},n.createElement(Et.Provider,{value:c},e.children))}var Rt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=At);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,tt(this,(function(){throw rt(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=At),this.name+e.hash},e}(),Ot=function(e){return e>="A"&&e<="Z"};function jt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Ot(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Nt=function(e){return null==e||!1===e||""===e},Tt=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Nt(a)&&(Array.isArray(a)&&a.isCss||Ve(a)?n.push("".concat(jt(o),":"),a,";"):Xe(a)?n.push.apply(n,s(s(["".concat(o," {")],Tt(a),!1),["}"],!1)):n.push("".concat(jt(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ce||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Dt(e,t,r,n){return Nt(e)?[]:Je(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Dt(e(t),t,r,n):e instanceof Rt?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?Tt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map((function(e){return Dt(e,t,r,n)}))):[e.toString()];var o}function Ft(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ve(r)&&!Je(r))return!1}return!0}var zt=_e(pe),Gt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Ft(e),this.componentId=t,this.baseHash=$e(zt,t),this.baseStyle=r,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ke(n,this.staticRulesId);else{var o=Qe(Dt(this.rules,e,t,r)),s=Ae($e(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}n=Ke(n,s),this.staticRulesId=s}else{for(var i=$e(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=Qe(Dt(l,e,t,r));i=$e(i,f+u),c+=f}}if(c){var p=Ae(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=Ke(n,p)}}return n},e}(),Mt=n.createContext(void 0);Mt.Consumer;var Bt={};new Set;function Lt(e,t,r){var s=Je(e),a=e,i=!je(e),c=t.attrs,u=void 0===c?me:c,l=t.componentId,f=void 0===l?function(e,t){var r="string"!=typeof e?"sc":Ce(e);Bt[r]=(Bt[r]||0)+1;var n="".concat(r,"-").concat(Re(pe+r+Bt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):l,p=t.displayName,h=void 0===p?function(e){return je(e)?"styled.".concat(e):"Styled(".concat(Oe(e),")")}(e):p,d=t.displayName&&t.componentId?"".concat(Ce(t.displayName),"-").concat(t.componentId):t.componentId||f,g=s&&a.attrs?a.attrs.concat(u).filter(Boolean):u,m=t.shouldForwardProp;if(s&&a.shouldForwardProp){var v=a.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;m=function(e,t){return v(e,t)&&y(e,t)}}else m=v}var S=new Gt(r,d,s?a.componentStyle:void 0);function b(e,t){return function(e,t,r){var s=e.attrs,a=e.componentStyle,i=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,f=n.useContext(Mt),p=$t(),h=e.shouldForwardProp||p.shouldForwardProp,d=ye(t,f,i)||ve,g=function(e,t,r){for(var n,s=o(o({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=Ve(n=e[a])?n(s):n;for(var c in i)s[c]="className"===c?Ke(s[c],i[c]):"style"===c?o(o({},s[c]),i[c]):i[c]}return t.className&&(s.className=Ke(s.className,t.className)),s}(s,t,d),m=g.as||l,v={};for(var y in g)void 0===g[y]||"$"===y[0]||"as"===y||"theme"===y&&g.theme===d||("forwardedAs"===y?v.as=g.forwardedAs:h&&!h(y,m)||(v[y]=g[y]));var S=function(e,t){var r=$t();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(a,g),b=Ke(c,u);return S&&(b+=" "+S),g.className&&(b+=" "+g.className),v[je(m)&&!Se.has(m)?"class":"className"]=b,v.ref=r,(0,n.createElement)(m,v)}(w,e,t)}b.displayName=h;var w=n.forwardRef(b);return w.attrs=g,w.componentStyle=S,w.displayName=h,w.shouldForwardProp=m,w.foldedComponentIds=s?Ke(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=d,w.target=s?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)et(e,o[n],!0);return e}({},a.defaultProps,e):e}}),tt(w,(function(){return".".concat(w.styledComponentId)})),i&&Ze(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Wt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Yt=function(e){return Object.assign(e,{isCss:!0})};function Ht(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ve(e)||Xe(e))return Yt(Dt(Wt(me,s([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Dt(n):Yt(Dt(Wt(n,t)))}function qt(e,t,r){if(void 0===r&&(r=ve),!t)throw rt(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,Ht.apply(void 0,s([n],o,!1)))};return n.attrs=function(n){return qt(e,t,o(o({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return qt(e,t,o(o({},r),n))},n}var Ut=function(e){return qt(Lt,e)},Zt=Ut;Se.forEach((function(e){Zt[e]=Ut(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ft(e),bt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(Qe(Dt(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&bt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=ht(),n=Qe([r&&'nonce="'.concat(r,'"'),"".concat(ue,'="true"'),"".concat(fe,'="').concat(pe,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw rt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw rt(2);var r=((t={})[ue]="",t[fe]=pe,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),s=ht();return s&&(r.nonce=s),[n.createElement("style",o({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw rt(2);return n.createElement(_t,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw rt(3)}})(),"__sc-".concat(ue,"__");var Vt=r(5893);const Jt=Zt.div`
    display: flex;
	flex-direction:column;
    align-items:center;
    justify-content: center;
    align:center
`,Kt=Zt.img`

`,Qt=e=>(0,Vt.jsxs)(Jt,{children:[(0,Vt.jsx)("a",{href:e.href,target:"_blank",children:(0,Vt.jsx)(Kt,{src:e.src,alt:"Unhelpful generic description of an image."})}),(0,Vt.jsxs)("a",{href:e.link,children:[" ",e.subText||"Uploaded to Flickr"," "]})]})},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(7294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);