(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+9Uw":function(e,t,A){e.exports=A.p+"static/resume-ee9931bcd702736342395dc2754d2164.pdf"},"0mN4":function(e,t,A){"use strict";A("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"16l3":function(e,t,A){"use strict";A.r(t);A("SRfc");var a=A("jdOB"),i=A("q1tI"),r=A.n(i),n=A("9eSz"),s=A.n(n),d=A("Wbzz"),c=A("U5tq"),l=A("jkrH"),o=A("JwsL"),f=(A("UaTi"),function(e){var t=e.title,A=e.excerpt,a=e.featuredImage,i=e.href;return r.a.createElement("div",{className:"project"},r.a.createElement(d.Link,{to:i},r.a.createElement(s.a,{fluid:a.childImageSharp.fluid,className:"project-thumbnail"}),r.a.createElement("h2",null,t),r.a.createElement("p",null,A)))});t.default=function(){var e=a.data.projects.edges;return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(l.a,{title:"Projects!"},r.a.createElement("div",{className:"projects-container"},e.map((function(e){var t=e.node,A=t.frontmatter,a=A.title,i=A.subtitle,n=A.excerpt,s=A.featuredImage,d=t.fileRelativePath;return r.a.createElement(f,{title:a,subtitle:i,excerpt:n,featuredImage:s,href:d.match(/content(\/projects\/.*)\.md/)[1]})})))),r.a.createElement(o.a,null))}},"1iHX":function(e,t,A){},"9eSz":function(e,t,A){"use strict";A("rGqo"),A("yt8O"),A("Btvt"),A("XfO3"),A("EK0E"),A("INYr"),A("0mN4");var a=A("5NKs");t.__esModule=!0,t.default=void 0;var i,r=a(A("v06X")),n=a(A("XEEL")),s=a(A("uDP2")),d=a(A("j8BX")),c=a(A("q1tI")),l=a(A("17x9")),o=function(e){var t=(0,d.default)({},e),A=t.resolutions,a=t.sizes,i=t.critical;return A&&(t.fixed=A,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=B([].concat(t.fluid))),t.fixed&&(t.fixed=B([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},u=function(e){var t=e.fluid,A=e.fixed;return p(t||A).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var A=e.findIndex((function(e){return void 0===e.media}));if(-1!==A)return e[A]}return e[0]},g=Object.create({}),m=function(e){var t=o(e),A=u(t);return g[A]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,w=new WeakMap;function j(e){return e.map((function(e){var t=e.src,A=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:r}),c.default.createElement("source",{media:i,srcSet:A,sizes:r}))}))}function B(e){var t=[],A=[];return e.forEach((function(e){return(e.media?t:A).push(e)})),[].concat(t,A)}function v(e){return e.map((function(e){var t=e.src,A=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:A,srcSet:a})}))}function x(e){return e.map((function(e){var t=e.src,A=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:A,srcSet:a})}))}function S(e,t){var A=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:A)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var R=function(e,t){var A=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return A&&(A.observe(e),w.set(e,t)),function(){A.unobserve(e),w.delete(e)}},Q=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',A=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+n+s+A+a+t+r+i+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=c.default.forwardRef((function(e,t){var A=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=c.default.createElement(N,(0,d.default)({ref:t,src:A},r,{ariaHidden:n}));return a.length>1?c.default.createElement("picture",null,i(a),s):s})),N=c.default.forwardRef((function(e,t){var A=e.sizes,a=e.srcSet,i=e.src,r=e.style,n=e.onLoad,l=e.onError,o=e.loading,f=e.draggable,u=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,d.default)({"aria-hidden":u,sizes:A,srcSet:a,src:i},p,{onLoad:n,onError:l,ref:t,loading:o,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));N.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var y=function(e){function t(t){var A;(A=e.call(this,t)||this).seenBefore=b&&m(t),A.isCritical="eager"===t.loading||t.critical,A.addNoScript=!(A.isCritical&&!t.fadeIn),A.useIOSupport=!h&&E&&!A.isCritical&&!A.seenBefore;var a=A.isCritical||b&&(h||!A.useIOSupport);return A.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!A.seenBefore&&t.fadeIn},A.imageRef=c.default.createRef(),A.placeholderRef=t.placeholderRef||c.default.createRef(),A.handleImageLoaded=A.handleImageLoaded.bind((0,r.default)(A)),A.handleRef=A.handleRef.bind((0,r.default)(A)),A}(0,n.default)(t,e);var A=t.prototype;return A.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},A.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},A.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},A.handleImageLoaded=function(){var e,t,A;e=this.props,t=o(e),A=u(t),g[A]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},A.render=function(){var e=o(this.props),t=e.title,A=e.alt,a=e.className,i=e.style,r=void 0===i?{}:i,n=e.imgStyle,s=void 0===n?{}:n,l=e.placeholderStyle,f=void 0===l?{}:l,u=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,w=e.itemProp,B=e.loading,S=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,y=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,d.default)({opacity:R?1:0,transition:y?"opacity "+b+"ms":"none"},s),D="boolean"==typeof h?"lightgray":h,Y={transitionDelay:b+"ms"},O=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},y&&Y),s),f),C={title:t,alt:this.state.isVisible?"":A,style:O,className:u,itemProp:w};if(g){var G=g,L=p(g);return c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:L.maxWidth?L.maxWidth+"px":null,maxHeight:L.maxHeight?L.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),D&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},y&&Y)}),L.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:L.base64,spreadProps:C,imageVariants:G,generateSources:x}),L.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:L.tracedSVG,spreadProps:C,imageVariants:G,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,j(G),c.default.createElement(N,{alt:A,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:B,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Q((0,d.default)((0,d.default)({alt:A,title:t,loading:B},L),{},{imageVariants:G}))}}))}if(m){var T=m,H=p(m),z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},r);return"inherit"===r.display&&delete z.display,c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},D&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:D,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},y&&Y)}),H.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:C,imageVariants:T,generateSources:x}),H.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:C,imageVariants:T,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,j(T),c.default.createElement(N,{alt:A,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:B,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Q((0,d.default)((0,d.default)({alt:A,title:t,loading:B},H),{},{imageVariants:T}))}}))}return null},t}(c.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),D=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});y.propTypes={resolutions:P,sizes:D,fixed:l.default.oneOfType([P,l.default.arrayOf(P)]),fluid:l.default.oneOfType([D,l.default.arrayOf(D)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var Y=y;t.default=Y},JwsL:function(e,t,A){"use strict";var a=A("q1tI"),i=A.n(a);A("1iHX");t.a=function(e){e.selected;return i.a.createElement("div",{className:"footer"},"Hannah Chea 2020, ",i.a.createElement("a",{href:"https://github.com/thecheapet/thecheapet.github.io"},"source code on Github"))}},U5tq:function(e,t,A){"use strict";var a=A("Wbzz"),i=A("q1tI"),r=A.n(i),n=(A("UJFi"),A("+9Uw")),s=A.n(n);t.a=function(e){e.selected;return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"title-meta"},r.a.createElement(a.Link,{to:"/"},r.a.createElement("p",null,"hannah chea"))),r.a.createElement("div",{className:"links"},r.a.createElement(a.Link,{to:"/about"},"about"),r.a.createElement("a",{href:s.a,target:"_blank",rel:"noreferrer"},"resume"),r.a.createElement(a.Link,{to:"/projects"},"projects"),r.a.createElement(a.Link,{to:"/contact"},"contact")))}},UJFi:function(e,t,A){},UaTi:function(e,t,A){},jdOB:function(e){e.exports=JSON.parse('{"data":{"projects":{"edges":[{"node":{"fileRelativePath":"/content/projects/project1.md","frontmatter":{"title":"Predicting Taxi Ride Duration (2019)","subtitle":"2019","excerpt":"Tools: Python (numpy, pandas, matplotlib, seaborn), SQL, Jupyter Notebooks","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFF4LDhAT//xAAaEAEBAAIDAAAAAAAAAAAAAAABAgADEBEi/9oACAEBAAEFAtCQ+wqtfc04rx//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPwGn/8QAHRABAAEDBQAAAAAAAAAAAAAAAQACITIQETNBov/aAAgBAQAGPwIaS/cqQyZx+pZ2mTp//8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAIUExUf/aAAgBAQABPyExSqLISDJsYPI1bHSbTSelsRgTfJ//2gAMAwEAAgADAAAAECMv/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAEDAQE/EMV//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxBw8RD/xAAeEAEAAgEEAwAAAAAAAAAAAAABABEhMVFxgUFhsf/aAAgBAQABPxDIs9i1xt3MuuxlF/IGi8pKfcAZR1UO28DQI0oqnmFoBwE//9k=","aspectRatio":1.5037593984962405,"src":"/static/3c4ede9d713ad1aa6d157349d2a5b135/14b42/taxi.jpg","srcSet":"/static/3c4ede9d713ad1aa6d157349d2a5b135/f836f/taxi.jpg 200w,\\n/static/3c4ede9d713ad1aa6d157349d2a5b135/2244e/taxi.jpg 400w,\\n/static/3c4ede9d713ad1aa6d157349d2a5b135/14b42/taxi.jpg 800w,\\n/static/3c4ede9d713ad1aa6d157349d2a5b135/47498/taxi.jpg 1200w,\\n/static/3c4ede9d713ad1aa6d157349d2a5b135/0e329/taxi.jpg 1600w,\\n/static/3c4ede9d713ad1aa6d157349d2a5b135/16b67/taxi.jpg 3407w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}},{"node":{"fileRelativePath":"/content/projects/project2.md","frontmatter":{"title":"Spam vs Ham Email Classifier (2019)","subtitle":"2019","excerpt":"Tools: Python (numpy, pandas, seaborn, matplotlib), Jupyter Notebooks","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB50mXZBf/xAAXEAADAQAAAAAAAAAAAAAAAAAAASBB/9oACAEBAAEFAthH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAECAxof/aAAgBAQAGPwITE//EAB8QAAIBAgcAAAAAAAAAAAAAAAABQRExIVFhcZGhsf/aAAgBAQABPyGr5ZCfjgSrAO73EsIsMtOz/9oADAMBAAIAAwAAABCQ3//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EEf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPxBX/8QAGxAAAgMBAQEAAAAAAAAAAAAAAREAIVExQWH/2gAIAQEAAT8QcRfi3yERI7p2AZkIq/mAFElpwmCYvpuxE31sf//Z","aspectRatio":1.3333333333333333,"src":"/static/b8d3253eb4e5f56402ec7776584e1c6c/14b42/spam.jpg","srcSet":"/static/b8d3253eb4e5f56402ec7776584e1c6c/f836f/spam.jpg 200w,\\n/static/b8d3253eb4e5f56402ec7776584e1c6c/2244e/spam.jpg 400w,\\n/static/b8d3253eb4e5f56402ec7776584e1c6c/14b42/spam.jpg 800w,\\n/static/b8d3253eb4e5f56402ec7776584e1c6c/47498/spam.jpg 1200w,\\n/static/b8d3253eb4e5f56402ec7776584e1c6c/0e329/spam.jpg 1600w,\\n/static/b8d3253eb4e5f56402ec7776584e1c6c/10a43/spam.jpg 4032w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}},{"node":{"fileRelativePath":"/content/projects/project3.md","frontmatter":{"title":"Presidential Twitter Behavior (2019)","subtitle":"2019","excerpt":"Tools: Python (numpy, pandas, matplotlib, seaborn), Jupyter Notebooks","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABTyYahWJ4Kf/EABoQAQACAwEAAAAAAAAAAAAAAAIBEgADBBH/2gAIAQEAAQUC6HJV0jE7/FtvkSQrrP/EABYRAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwERf//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAeEAACAQQDAQAAAAAAAAAAAAAAASECERIxAzJhkf/aAAgBAQAGPwJYuLGDqjZ24/oroimfTZ//xAAeEAACAgEFAQAAAAAAAAAAAAAAARFBITFRcZGxwf/aAAgBAQABPyHFG1BPFY27IScqmnwd5xrr3NI30XCP/9oADAMBAAIAAwAAABA8D//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QHA2F/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxDSpWf/xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhMVFhsf/aAAgBAQABPxD6XgHBBLSdUehbzhnZAK1E6wAzhSKO/TNYoSvl5rGh4GgwM//Z","aspectRatio":1.5037593984962405,"src":"/static/16846fb048d73e0e0dfd29f9b04734b5/14b42/twitter2.jpg","srcSet":"/static/16846fb048d73e0e0dfd29f9b04734b5/f836f/twitter2.jpg 200w,\\n/static/16846fb048d73e0e0dfd29f9b04734b5/2244e/twitter2.jpg 400w,\\n/static/16846fb048d73e0e0dfd29f9b04734b5/14b42/twitter2.jpg 800w,\\n/static/16846fb048d73e0e0dfd29f9b04734b5/47498/twitter2.jpg 1200w,\\n/static/16846fb048d73e0e0dfd29f9b04734b5/0e329/twitter2.jpg 1600w,\\n/static/16846fb048d73e0e0dfd29f9b04734b5/93dd1/twitter2.jpg 6240w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}},{"node":{"fileRelativePath":"/content/projects/project4.md","frontmatter":{"title":"Reported Laser Pointings at Aircrafts (2019)","subtitle":"2019","excerpt":"Tools: Tableu, Excel","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAB2HAAAdhwGP5fFlAAADRUlEQVQ4y12TXUzbVRjG/zIWykeBIgsFC7SF2tKPUZCWpgMLJVCEQMLKR4R2MDoogkiRhalbyldbpzGIMfHC6IXxxumVxswsRo2wC6PE6cyMThNviGHLxMWPGL35ef6HqIkXT97nzXnPe85znvcog31evrkS4ev3Iryc6WEh9iBORx21FgsVFeWYTCYJjUaDoijk5ubKXKvVUl1dTX5+voS6lpOTg3L1jRH4bpbfv5yGH+Y4+PQ09+kLRUGWLJKFollpaSllZWWUlJRgNBopKCigsLBQ5jU1Nej1+sOGb77Yz8FnMX75fIpfr02ztzOBTnuEsnID4cEhnjx/gcTjZ1leXmZra4twOEwwGGRxcZGZmRlWV1dJJpOkUim5rmxe6OL2J5P89sU0f3wVZ297gmO6HCFDS09PDwMDA3R1ddHZ2Smjy+Wivr6elpYWuru7GRsbY3R0lGg0SigUQvng9UH+uhGXDVXZP+9Ocqzk8L2yshR0Oh1FRUUYDAYpS41ms1nKDgQCeDweHA6HlF1VVYXyQjLE3d0zvP9amNPDXs5OB+jwGynVaf59QxXZ2dkUFxeTl5cnDVIb+nw+3G73YSNRoxql1NRaScRaGO5rospopbLaSqu/gdF+O7maI2KjSch0YrVaJWw2m4TT6aStrY2Ojg7a29tlrt5UafEdp9Ht4H6rXWx0cNx1yH0eO4byIiKRKM9czJBJb5BOrZPJpHhaICX4mjBkbW2NlZUVaY7KFbvdQZ2A0+mQJ6hQua3Ogb68ApPZgsXeiFXAYmsQcEtudzXR2OSludnHCb9fmOSXXPlHwv9ht9dhFs8RaKhkc66ei4sP8Pw5L88uNbF5rpmnJsXhtfcK4/6b13vUqNo9Pj4upEWk9WpUR2HqzCQnAiFeOh+EGzH+vB6H7x+Fm3PwrcD1KXbfGuGxiJejRzX0txp47olWlKWlJdbX10mn02xsbMgBVZEWvFcMdrLVw8GrJ9n/6GH2P4xw6+Mo+1cn2N8+xd7lEXZe6eNSKsjNSycJ93oObzg7O0sikWB+fp6FhQX5Cx6Jx3looJ9uvZNr0V7uXhni9juD3Lk8LJpFubNzilvvDvHj22F+2o4QG/JSKabkb8tT9fVx3+hXAAAAAElFTkSuQmCC","aspectRatio":1.5873015873015872,"src":"/static/567d11d52dfebf5a5815530d437be90e/ee604/laser.png","srcSet":"/static/567d11d52dfebf5a5815530d437be90e/69585/laser.png 200w,\\n/static/567d11d52dfebf5a5815530d437be90e/497c6/laser.png 400w,\\n/static/567d11d52dfebf5a5815530d437be90e/ee604/laser.png 800w,\\n/static/567d11d52dfebf5a5815530d437be90e/f3583/laser.png 1200w,\\n/static/567d11d52dfebf5a5815530d437be90e/5707d/laser.png 1600w,\\n/static/567d11d52dfebf5a5815530d437be90e/cb90a/laser.png 1632w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}},{"node":{"fileRelativePath":"/content/projects/project5.md","frontmatter":{"title":"Automated Medical Image Analysis (2017)","subtitle":"2017","excerpt":"Tools: MATLAB","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAADnklEQVQozwGTA2z8ACpUrzpitDlgtDZftDZeszRcsjhgtDdeszhgtGmJwn2ZyXuZy3aXymGHw22w3VaSzgAwnhpHpRtHpQAzoAAIN6UYRa0aR60jTrEiTbEhTbAWRasHN6YNPKiJpdGlvNuQrdOas8N2j7WGcJVtZJ0AMKMTQaYTQKYAMKIAUHKoR3ChUHWlVnmpT3alT3akZICySm+jQmqfRmyfRWyfRm2hRGqcZ4GukYibh4mlVnypW32oV3umXn6qAKjLvVqdinCqmXetnWWkk2WkktDj25fEtX21pYa8rYO5qXyyoJHBst3r416hmGeemW6lmnSpmWmmlYu5qwDz7/Hn3+Lp4+Xm4OPo4eTq4uT7+vv5+Prb4PD49vX7+frc4env8ff+/v/99/rfy9ji3eXc2trY1dfe3N0A1eDftsrHxdXSytrXx9fUv9PQ6vHw8O7w5Obq8O7u7+7u1NbZ3+Hj/fz96ubn5d3h39nZw7/A493e+PT1AJO7tUKGfF6Xj1eQiFWQiEKGfMXZ2Nnf38vW1NHb2s/Y2M3X1tff3ubt7HaUkIeinYCbl3OMiZWzrsje2wDCwcRsbXR9f4ZiZGtkZmxsbHPY3N1wqqFQjoRXk4pZlItTkIdxqqHd6uh6tayHu7SLvraRwruAuK+VwbsAtri6U1pfbnR4XWJmW2FkU1pe3+Di4+PijIuMh4uMhYeIkZKT3d7f////5Oz60+H35u796vD84+r78fX9AL2/wmxucIaHjGltcWtwdmFkaeLk5vTz9L3Fv9DDws/JytDLye/w8f7//+Po7N3k6dng5ODl6d/n7PL19gDu8+ygwtLA1cq80snH2ca2zs33+/jx8PCzsaLRlZTQxMDRxsTx7u/////Q0dCysrGxsbDExMO5urnc3d0A5erjhqa1udPMudTTsMzChZ2e5uzol8G7dqOdd6mie62lequjkb639/n6vLa3l5GTpJ+gn5qbdG5vxMHBAM/R1Hp9frjP5rvX76rC2GJhYtnc3s7l4sHe2MLd2cXd2qrGwcXd2tvo51OVilGOhWCWjWObkkWHfIGwqQDv7/DY2drf3Nrg3tzf3t3g4OH+/v7//f769PT79/j9+vvt6en+9vbx9fS0x8S5zMm7zcq5y8i0yMXK2NUA7Ozs2tra3+Dg4OHh3t7e5OTk/f395+fn4OHh4uPj4uLi4uPj6Onp/Pz86+fo6+fn6ufn7enq9PDx/Pn6Us10WduVdu4AAAAASUVORK5CYII=","aspectRatio":1.3333333333333333,"src":"/static/41fc4fb2e49c5faa4457116d0f9cf74b/ee604/revsup2.png","srcSet":"/static/41fc4fb2e49c5faa4457116d0f9cf74b/69585/revsup2.png 200w,\\n/static/41fc4fb2e49c5faa4457116d0f9cf74b/497c6/revsup2.png 400w,\\n/static/41fc4fb2e49c5faa4457116d0f9cf74b/ee604/revsup2.png 800w,\\n/static/41fc4fb2e49c5faa4457116d0f9cf74b/f3583/revsup2.png 1200w,\\n/static/41fc4fb2e49c5faa4457116d0f9cf74b/5707d/revsup2.png 1600w,\\n/static/41fc4fb2e49c5faa4457116d0f9cf74b/3cea3/revsup2.png 2500w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}}]}}}')},jkrH:function(e,t,A){"use strict";var a=A("q1tI"),i=A.n(a);A("qMvl");t.a=function(e){var t=e.title,A=(e.subTitle,e.width,e.children);return i.a.createElement("div",null,i.a.createElement("div",{className:"hero-container"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",null,t))),i.a.createElement("div",{className:"content"},A))}},qMvl:function(e,t,A){}}]);
//# sourceMappingURL=component---src-pages-projects-js-e021a48aad6e5ae532c6.js.map