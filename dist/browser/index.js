var Ce=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var Pe=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var i=(t,e,r)=>(Pe(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},f=(t,e,r,s)=>(Pe(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r),Ne=(t,e,r,s)=>({set _(n){f(t,e,n,r)},get _(){return i(t,e,s)}}),l=(t,e,r)=>(Pe(t,e,"access private method"),r);var ke={default:new URL("https://db.fauna.com"),local:new URL("http://localhost:8443"),localhost:new URL("http://localhost:8443")};var C=class extends Error{constructor(...e){super(...e)}},d=class extends C{httpStatus;code;queryInfo;constraint_failures;constructor(e,r){super(e.error.message),Error.captureStackTrace&&Error.captureStackTrace(this,d),this.name="ServiceError",this.code=e.error.code,this.httpStatus=r;let s={txn_ts:e.txn_ts,summary:e.summary,query_tags:e.query_tags,stats:e.stats};this.queryInfo=s,this.constraint_failures=e.error.constraint_failures}},F=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,F),this.name="QueryRuntimeError"}},P=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,P),this.name="QueryCheckError"}},N=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,N),this.name="InvalidRequestError"}},ne=class extends d{abort;constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,P),this.name="AbortError",this.abort=e.error.abort}},M=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,M),this.name="AuthenticationError"}},v=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,v),this.name="AuthorizationError"}},se=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,N),this.name="ContendedTransactionError"}},k=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,k),this.name="ThrottlingError"}},W=class extends d{stats;constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,W),this.name="QueryTimeoutError",this.stats=e.stats}},j=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,j),this.name="ServiceInternalError"}},$=class extends d{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,$),this.name="ServiceTimeoutError"}},b=class extends C{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,b),this.name="ClientError"}},I=class extends C{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,I),this.name="ClientClosedError"}},w=class extends C{constructor(e,r){super(e,r),Error.captureStackTrace&&Error.captureStackTrace(this,w),this.name="NetworkError"}},E=class extends C{httpStatus;constructor(e){super(e.message),Error.captureStackTrace&&Error.captureStackTrace(this,E),this.name="ProtocolError",this.httpStatus=e.httpStatus}};var oe=class{#e;#t;constructor({url:e,fetch_keepalive:r}){this.#e=new URL("/query/1",e).toString(),this.#t=r}async request({data:e,headers:r,method:s,client_timeout_ms:n}){let o=AbortSignal.timeout===void 0?(()=>{let T=new AbortController,m=T.signal;return setTimeout(()=>T.abort(),n),m})():AbortSignal.timeout(n),a=await fetch(this.#e,{method:s,headers:{...r,"Content-Type":"application/json"},body:JSON.stringify(e),signal:o,keepalive:this.#t}).catch(T=>{throw new w("The network connection encountered a problem.",{cause:T})}),c=a.status,p={};a.headers.forEach((T,m)=>p[m]=T);let h=await a.text();return{status:c,body:h,headers:p}}close(){}};var L;try{L=Ce("node:http2")}catch{L=void 0}var J,ie,ae,ue,A,y,pe,We,K,me,fe,je,ye,$e,U=class{constructor({http2_session_idle_ms:e,url:r,http2_max_streams:s}){u(this,K);u(this,fe);u(this,ye);u(this,ie,void 0);u(this,ae,void 0);u(this,ue,void 0);u(this,A,0);u(this,y,void 0);if(L===void 0)throw new Error("Your platform does not support Node's http2 library");f(this,ie,e),f(this,ae,s),f(this,ue,r),f(this,y,null)}static getClient(e){var n;let r=l(n=U,pe,We).call(n,e);i(U,J).has(r)||i(U,J).set(r,new U(e));let s=i(U,J).get(r);return Ne(s,A)._++,s}async request(e){let r=0,s;do try{return await l(this,ye,$e).call(this,e)}catch(n){if(n?.code!=="ERR_HTTP2_GOAWAY_SESSION")throw new w("The network connection encountered a problem.",{cause:n});s=n,r++}while(r<3);throw new w("The network connection encountered a problem.",{cause:s})}close(){this.isClosed()||(Ne(this,A)._--,i(this,A)===0&&i(this,y)&&!i(this,y).closed&&i(this,y).close())}isClosed(){return i(this,A)===0}},G=U;J=new WeakMap,ie=new WeakMap,ae=new WeakMap,ue=new WeakMap,A=new WeakMap,y=new WeakMap,pe=new WeakSet,We=function({http2_session_idle_ms:e,url:r}){return`${r}|${e}`},K=new WeakSet,me=function(){f(this,A,0),i(this,y)&&!i(this,y).closed&&i(this,y).close()},fe=new WeakSet,je=function(){if(!i(this,y)||i(this,y).closed||i(this,y).destroyed){let e=L.connect(i(this,ue),{peerMaxConcurrentStreams:i(this,ae)}).once("error",()=>l(this,K,me).call(this)).once("goaway",()=>l(this,K,me).call(this));e.setTimeout(i(this,ie),()=>{l(this,K,me).call(this)}),f(this,y,e)}return i(this,y)},ye=new WeakSet,$e=function({client_timeout_ms:e,data:r,headers:s,method:n}){return new Promise((o,a)=>{let c,p=h=>{let T=Number(h[L.constants.HTTP2_HEADER_STATUS]),m="";c.on("data",z=>{m+=z}),c.on("end",()=>{o({status:T,body:m,headers:h})})};try{let h={...s,[L.constants.HTTP2_HEADER_PATH]:"/query/1",[L.constants.HTTP2_HEADER_METHOD]:n};c=l(this,fe,je).call(this).request(h).setEncoding("utf8").on("error",m=>{a(m)}).on("response",p),c.write(JSON.stringify(r),"utf8"),c.setTimeout(e,()=>{c.destroy(new Error("Client timeout"))}),c.end()}catch(h){a(h)}})},u(G,pe),u(G,J,new Map);var Ie=t=>mt()?G.getClient(t):new oe(t),Ae=t=>t instanceof Object&&"body"in t&&"headers"in t&&"status"in t,mt=()=>{if(typeof process<"u"&&process&&process.release?.name==="node"&&process.versions?.deno===void 0)try{return Ce("node:http2"),!0}catch{return!1}return!1};var pt=/(?:\d{4}|[\u2212-]\d{4,}|\+\d{5,})/,ft=/(?:0[1-9]|1[0-2])/,yt=/(?:0[1-9]|[12]\d|3[01])/,Le=/(?:[01][0-9]|2[0-3])/,ce=/(?:[0-5][0-9])/,gt=/(?:\.\d+)/,De=new RegExp(`(${pt.source}-(${ft.source})-(${yt.source}))`),Tt=new RegExp(`(${Le.source}:${ce.source}:${ce.source}${gt.source}?)`),ht=new RegExp(`([zZ]|[+\u2212-]${Le.source}(?::?${ce.source}|:${ce.source}:${ce.source}))`),Ue=new RegExp(`^${De.source}$`),Ge=new RegExp(`^${De.source}`),Be=new RegExp(`^${De.source}T${Tt.source}${ht.source}$`);var _=class{isoString;constructor(e){this.isoString=e}static from(e){if(typeof e!="string")throw new TypeError(`Expected string but received ${typeof e}: ${e}`);if(Be.exec(e)===null)throw new RangeError(`(regex) Expected an ISO date string but received '${e}'`);return new _(e)}static fromDate(e){return new _(e.toISOString())}toDate(){let e=new Date(this.isoString);if(e.toString()==="Invalid Date")throw new RangeError("Fauna Date could not be converted to Javascript Date");return e}toString(){return`TimeStub("${this.isoString}")`}},Q=class{dateString;constructor(e){this.dateString=e}static from(e){if(typeof e!="string")throw new TypeError(`Expected string but received ${typeof e}: ${e}`);let r=Ue.exec(e);if(r===null)throw new RangeError(`Expected a plain date string but received '${e}'`);return new Q(r[0])}static fromDate(e){let r=e.toISOString(),s=Ge.exec(r);if(s===null)throw new b(`Failed to parse date '${e}'`);return new Q(s[0])}toDate(){let e=new Date(this.dateString+"T00:00:00Z");if(e.toString()==="Invalid Date")throw new RangeError("Fauna Date could not be converted to Javascript Date");return e}toString(){return`DateStub("${this.dateString}")`}};var D=class{coll;id;constructor({coll:e,id:r}){this.id=r,typeof e=="string"?this.coll=new V(e):this.coll=e}},Z=class extends D{ts;constructor(e){let{coll:r,id:s,ts:n,...o}=e;super({coll:r,id:s}),this.ts=n,Object.assign(this,o)}toObject(){return{...this}}},B=class{coll;name;constructor({coll:e,name:r}){this.name=r,typeof e=="string"?this.coll=new V(e):this.coll=e}},ee=class extends B{ts;data;constructor(e){let{coll:r,name:s,ts:n,data:o,...a}=e;super({coll:r,name:s}),this.ts=n,this.data=o||{},Object.assign(this,a)}toObject(){return{...this}}},V=class{name;constructor(e){this.name=e}},te=class{ref;cause;constructor(e,r){this.ref=e,this.cause=r}};var R=class{data;after;constructor({data:e,after:r}){this.data=e,this.after=r}},q=class{after;constructor(e){this.after=e}},O=class{#e;constructor(e,r,s){if(s=s??{},r instanceof Function)this.#e=wt(e,r,s);else if(r instanceof R||r instanceof q)this.#e=Xe(e,r,s);else throw new TypeError(`Expected 'Page<T> | EmbeddedSet | (() => Promise<T | Page<T> | EmbeddedSet>)', but received ${JSON.stringify(r)}`)}static fromQuery(e,r,s){return new O(e,async()=>(await e.query(r,s)).data,s)}static fromPageable(e,r,s){return new O(e,r,s)}flatten(){return new Ve(this)}async next(){return this.#e.next()}async return(){return this.#e.return()}async throw(e){return this.#e.throw(e)}[Symbol.asyncIterator](){return this}},Ve=class{#e;constructor(e){this.#e=xt(e)}async next(){return this.#e.next()}async return(){return this.#e.return()}async throw(e){return this.#e.throw(e)}[Symbol.asyncIterator](){return this}};async function*Xe(t,e,r){let s=e;for(s instanceof R&&(yield s.data);s.after;){let n=qe`Set.paginate(${s.after})`;s=(await t.query(n,r)).data,yield s.data}}async function*wt(t,e,r){let s=await e();if(s instanceof R||s instanceof q){for await(let n of Xe(t,s,r))yield n;return}yield[s]}async function*xt(t){for await(let e of t)for(let r of e)yield r}var H=class{static encode(e){return ge(e)}static decode(e,r){return JSON.parse(e,(s,n)=>{if(n==null)return null;if(n["@mod"])return new V(n["@mod"]);if(n["@doc"]){if(typeof n["@doc"]=="string"){let[a,c]=n["@doc"].split(":");return new D({coll:a,id:c})}let o=n["@doc"];return o.id?new Z(o):new ee(o)}else if(n["@ref"]){let o=n["@ref"],a;return o.id?a=new D(o):a=new B(o),"exists"in o&&o.exists===!1?new te(a,o.cause):a}else{if(n["@set"])return typeof n["@set"]=="string"?new q(n["@set"]):new R(n["@set"]);if(n["@int"])return Number(n["@int"]);if(n["@long"]){let o=BigInt(n["@long"]);return r.long_type==="number"?((o>Number.MAX_SAFE_INTEGER||o<Number.MIN_SAFE_INTEGER)&&console.warn("Value is too large to be represented as a number. Returning as Number with loss of precision. Use long_type 'bigint' instead."),Number(o)):o}else{if(n["@double"])return Number(n["@double"]);if(n["@date"])return Q.from(n["@date"]);if(n["@time"])return _.from(n["@time"]);if(n["@object"])return n["@object"]}}return n})}},Je=BigInt("-9223372036854775808"),Ke=BigInt("9223372036854775807"),Ye=-(2**31),ze=2**31-1,g={bigint:t=>{if(t<Je||t>Ke)throw new RangeError("BigInt value exceeds max magnitude for a 64-bit Fauna long. Use a 'number' to represent doubles beyond that limit.");return t>=Ye&&t<=ze?{"@int":t.toString()}:{"@long":t.toString()}},number:t=>{if(t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)throw new RangeError(`Cannot convert ${t} to a Fauna type.`);return Number.isInteger(t)?t>=Ye&&t<=ze?{"@int":t.toString()}:Number.isSafeInteger(t)?{"@long":t.toString()}:{"@double":t.toString()}:{"@double":t.toString()}},string:t=>t,object:t=>{let e=!1,r={};for(let s in t)s.startsWith("@")&&(e=!0),t[s]!==void 0&&(r[s]=ge(t[s]));return e?{"@object":r}:r},array:t=>{let e=[];for(let r in t)e.push(ge(t[r]));return e},date:t=>({"@time":t.toISOString()}),faunadate:t=>({"@date":t.dateString}),faunatime:t=>({"@time":t.isoString}),module:t=>({"@mod":t.name}),documentReference:t=>({"@ref":{id:t.id,coll:{"@mod":t.coll.name}}}),document:t=>({"@ref":{id:t.id,coll:{"@mod":t.coll.name}}}),namedDocumentReference:t=>({"@ref":{name:t.name,coll:{"@mod":t.coll.name}}}),namedDocument:t=>({"@ref":{name:t.name,coll:{"@mod":t.coll.name}}}),set:t=>{throw new b("Page could not be encoded. Fauna does not accept encoded Set values, yet. Use Page.data and Page.after as arguments, instead.")}},ge=t=>{if(t===void 0)throw new TypeError("Passing undefined as a QueryValue is not supported");switch(typeof t){case"bigint":return g.bigint(t);case"string":return g.string(t);case"number":return g.number(t);case"boolean":return t;case"object":return t==null?null:Array.isArray(t)?g.array(t):t instanceof Date?g.date(t):t instanceof Q?g.faunadate(t):t instanceof _?g.faunatime(t):t instanceof V?g.module(t):t instanceof Z?g.document(t):t instanceof D?g.documentReference(t):t instanceof ee?g.namedDocument(t):t instanceof B?g.namedDocumentReference(t):t instanceof te?ge(t.ref):t instanceof R||t instanceof q?g.set(t):g.object(t)}};function qe(t,...e){return new X(t,...e)}var X=class{#e;#t;constructor(e,...r){if(e.length===0||e.length!==r.length+1)throw new Error("invalid query constructed");this.#e=e,this.#t=r}toQuery(e={}){return{...this.#r(e),...e}}#r(e){if(this.#e.length===1)return{query:{fql:[this.#e[0]]},arguments:{}};let r={};return{query:{fql:this.#e.flatMap((n,o)=>{if(o===this.#e.length-1)return n===""?[]:[n];let a=this.#t[o],c;if(a instanceof X){let p=a.toQuery(e);c=p.query,r={...r,...p.arguments}}else c={value:H.encode(a)};return[n,c].filter(p=>p!=="")})},arguments:r}}};var Ze="1.3.1";var Te;try{Te=Ce("node:os")}catch{Te=void 0}var rt=()=>{let t={driver:["javascript",Ze].join("-"),env:"unknown",os:"unknown",runtime:"unknown"};try{let e=typeof window>"u"&&typeof process<"u"&&process.versions!=null&&process.versions.node!=null,r=typeof window<"u"&&typeof window.document<"u",s=typeof self=="object"&&self.constructor&&self.constructor.name==="DedicatedWorkerGlobalScope";e?(t.runtime=["nodejs",process.version].join("-"),t.env=Et(),t.os=[Te.platform(),Te.release()].join("-")):s?(t.runtime=et(navigator),t.env="Service Worker",t.os=tt(navigator)):r?(t.runtime=et(navigator),t.env="browser",t.os=tt(navigator)):typeof EdgeRuntime!="string"&&(t.runtime="Vercel Edge Runtime",t.env="edge")}catch{}return Object.entries(t).filter(([e,r])=>r!=="unknown").map(e=>e.join("=")).join("; ")},et=t=>{let e=t.appName,r=""+parseFloat(t.appVersion),s,n,o;return(n=t.userAgent.indexOf("Opera"))!=-1?(e="Opera",r=t.userAgent.substring(n+6),(n=t.userAgent.indexOf("Version"))!=-1&&(r=t.userAgent.substring(n+8))):(n=t.userAgent.indexOf("MSIE"))!=-1?(e="Microsoft Internet Explorer",r=t.userAgent.substring(n+5)):e=="Netscape"&&t.userAgent.indexOf("Trident/")!=-1?(e="Microsoft Internet Explorer",r=t.userAgent.substring(n+5),(n=t.userAgent.indexOf("rv:"))!=-1&&(r=t.userAgent.substring(n+3))):(n=t.userAgent.indexOf("Chrome"))!=-1?(e="Chrome",r=t.userAgent.substring(n+7)):(n=t.userAgent.indexOf("Safari"))!=-1?(e="Safari",r=t.userAgent.substring(n+7),(n=t.userAgent.indexOf("Version"))!=-1&&(r=t.userAgent.substring(n+8)),t.userAgent.indexOf("CriOS")!=-1&&(e="Chrome")):(n=t.userAgent.indexOf("Firefox"))!=-1?(e="Firefox",r=t.userAgent.substring(n+8)):(s=t.userAgent.lastIndexOf(" ")+1)<(n=t.userAgent.lastIndexOf("/"))&&(e=t.userAgent.substring(s,n),r=t.userAgent.substring(n+1),e.toLowerCase()==e.toUpperCase()&&(e=t.appName)),(o=r.indexOf(";"))!=-1&&(r=r.substring(0,o)),(o=r.indexOf(" "))!=-1&&(r=r.substring(0,o)),(o=r.indexOf(")"))!=-1&&(r=r.substring(0,o)),[e,r].join("-")},tt=t=>{let e="unknown",r=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Chrome OS",r:/CrOS/},{s:"Linux",r:/(Linux|X11(?!.*CrOS))/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(let n in r){let o=r[n];if(o.r.test(t.userAgent)){e=o.s;break}}let s="unknown";if(/Windows/.test(e)){let n=/Windows (.*)/.exec(e);n&&(s=n[1]),e="Windows"}switch(e){case"Mac OS":case"Mac OS X":case"Android":{let n=/(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/.exec(t.userAgent);n&&(s=n[1]);break}case"iOS":{let n=/OS (\d+)_(\d+)_?(\d+)?/.exec(t.appVersion);n&&(s=n[1]+"."+n[2]+"."+(n[3]??0));break}}return[e,s].join("-")},St=typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof global<"u"?global:self,Et=()=>{if(!(typeof process<"u"&&process&&process.env&&typeof process.env=="object"))return"unknown";let e=[{name:"Netlify",check:function(){return!!process.env.NETLIFY_IMAGES_CDN_DOMAIN}},{name:"Vercel",check:function(){return!!process.env.VERCEL}},{name:"Heroku",check:function(){return!!process.env.PATH&&process.env.PATH.indexOf(".heroku")!==-1}},{name:"AWS Lambda",check:function(){return!!process.env.AWS_LAMBDA_FUNCTION_VERSION}},{name:"GCP Cloud Functions",check:function(){return!!process.env._&&process.env._.indexOf("google")!==-1}},{name:"GCP Compute Instances",check:function(){return!!process.env.GOOGLE_CLOUD_PROJECT}},{name:"Azure Cloud Functions",check:function(){return!!process.env.WEBSITE_FUNCTIONS_AZUREMONITOR_CATEGORIES}},{name:"Azure Compute",check:function(){return!!process.env.ORYX_ENV_TYPE&&!!process.env.WEBSITE_INSTANCE_ID&&process.env.ORYX_ENV_TYPE==="AppService"}},{name:"Mongo Stitch",check:function(){return typeof St?.StitchError=="function"}},{name:"Render",check:function(){return!!process.env.RENDER_SERVICE_ID}},{name:"Begin",check:function(){return!!process.env.BEGIN_DATA_SCOPE_ID}}].find(r=>r.check());return e?e.name:"unknown"};var nt=t=>t instanceof Object&&"data"in t,st=t=>t instanceof Object&&"error"in t&&t.error instanceof Object&&"code"in t.error&&"message"in t.error;var He={client_timeout_buffer_ms:5e3,format:"tagged",http2_session_idle_ms:5e3,http2_max_streams:100,long_type:"number",fetch_keepalive:!1,query_timeout_ms:5e3,max_attempts:3,max_backoff:20},be,x,Y,S,re,de,Fe,le,Me,we,ot,xe,it,Se,at,Ee,ut,_e,ct,Qe,dt,ve=class{constructor(e,r){u(this,de);u(this,le);u(this,we);u(this,xe);u(this,Se);u(this,Ee);u(this,_e);u(this,Qe);u(this,x,void 0);u(this,Y,void 0);u(this,S,void 0);u(this,re,!1);f(this,x,{...He,...e,secret:l(this,we,ot).call(this,e),endpoint:l(this,xe,it).call(this,e)}),l(this,Qe,dt).call(this),r?f(this,Y,r):f(this,Y,Ie({url:i(this,x).endpoint.toString(),http2_session_idle_ms:i(this,x).http2_session_idle_ms,http2_max_streams:i(this,x).http2_max_streams,fetch_keepalive:i(this,x).fetch_keepalive}))}get lastTxnTs(){return i(this,S)}set lastTxnTs(e){e!==void 0&&f(this,S,i(this,S)?Math.max(e,i(this,S)):e)}get clientConfiguration(){let{...e}=i(this,x);return e}close(){if(i(this,re))throw new I("Your client is closed. You cannot close it again.");i(this,Y).close(),f(this,re,!0)}paginate(e,r){return e instanceof X?O.fromQuery(this,e,r):O.fromPageable(this,e,r)}async query(e,r){if(i(this,re))throw new I("Your client is closed. No further requests can be issued.");let s=e.toQuery(r).query;return l(this,de,Fe).call(this,s,r)}},he=ve;be=new WeakMap,x=new WeakMap,Y=new WeakMap,S=new WeakMap,re=new WeakMap,de=new WeakSet,Fe=async function(e,r,s=0){let n=this.clientConfiguration.max_backoff??He.max_backoff,o=this.clientConfiguration.max_attempts??He.max_attempts,a=Math.min(Math.random()*2**s,n)*1e3,c=p=>new Promise(h=>setTimeout(h,p));return s+=1,l(this,Ee,ut).call(this,e,r,s).catch(p=>{if(p instanceof k&&s<o)return c(a).then(()=>l(this,de,Fe).call(this,e,r,s));throw p})},le=new WeakSet,Me=function(e){if(e instanceof b||e instanceof w||e instanceof E||e instanceof d)return e;if(Ae(e)){if(st(e.body)){let r=e.body,s=e.status;return l(this,Se,at).call(this,r,s)}return new E({message:`Response is in an unkown format: ${e.body}`,httpStatus:e.status})}return new b("A client level error occurred. Fauna was not called.",{cause:e})},we=new WeakSet,ot=function(e){let r;typeof process<"u"&&process&&typeof process=="object"&&process.env&&typeof process.env=="object"&&(r=process.env.FAUNA_SECRET);let s=e?.secret??r;if(s===void 0)throw new TypeError("You must provide a secret to the driver. Set it in an environmental variable named FAUNA_SECRET or pass it to the Client constructor.");return s},xe=new WeakSet,it=function(e){if(e&&"endpoint"in e&&e.endpoint===void 0)throw new TypeError("ClientConfiguration option endpoint must be defined.");let r;return typeof process<"u"&&process&&typeof process=="object"&&process.env&&typeof process.env=="object"&&(r=process.env.FAUNA_ENDPOINT?new URL(process.env.FAUNA_ENDPOINT):void 0),e?.endpoint??r??ke.default},Se=new WeakSet,at=function(e,r){switch(r){case 400:return _t.includes(e.error.code)?new P(e,r):e.error.code==="invalid_request"?new N(e,r):e.error.code==="abort"&&e.error.abort!==void 0?new ne(e,r):new F(e,r);case 401:return new M(e,r);case 403:return new v(e,r);case 409:return new se(e,r);case 429:return new k(e,r);case 440:return new W(e,r);case 500:return new j(e,r);case 503:return new $(e,r);default:return new d(e,r)}},Ee=new WeakSet,ut=async function(e,r,s=0){try{let n={...i(this,x),...r},o={Authorization:`Bearer ${n.secret}`};l(this,_e,ct).call(this,n,o);let a=n.format==="tagged",c=n.arguments?a?H.encode(n.arguments):n.arguments:void 0,p={query:e,arguments:c},h=n.query_timeout_ms+i(this,x).client_timeout_buffer_ms,T=await i(this,Y).request({client_timeout_ms:h,data:p,headers:o,method:"POST"}),m;try{if(m={...T,body:a?H.decode(T.body,{long_type:n.long_type}):JSON.parse(T.body)},m.body.query_tags){let Oe=m.body.query_tags.split(",").map(lt=>lt.split("="));m.body.query_tags=Object.fromEntries(Oe)}}catch(Oe){throw new E({message:`Error parsing response as JSON: ${Oe}`,httpStatus:T.status})}if(!nt(m.body))throw l(this,le,Me).call(this,m);let z=m.body.txn_ts;(i(this,S)===void 0&&z!==void 0||z!==void 0&&i(this,S)!==void 0&&i(this,S)<z)&&f(this,S,z);let Re=m.body;return Re.stats&&(Re.stats.attempts=s),Re}catch(n){throw l(this,le,Me).call(this,n)}},_e=new WeakSet,ct=function(e,r){let s=(n,o,a=c=>String(c))=>{o!==void 0&&(r[n]=a(o))};s("x-format",e.format),s("x-typecheck",e.typecheck),s("x-query-timeout-ms",e.query_timeout_ms),s("x-linearized",e.linearized),s("x-max-contention-retries",e.max_contention_retries),s("traceparent",e.traceparent),s("x-query-tags",e.query_tags,n=>Object.entries(n).map(o=>o.join("=")).join(",")),s("x-last-txn-ts",i(this,S),n=>n),s("x-driver-env",i(ve,be))},Qe=new WeakSet,dt=function(){let e=i(this,x);if(["client_timeout_buffer_ms","endpoint","format","http2_session_idle_ms","long_type","query_timeout_ms","fetch_keepalive","http2_max_streams"].forEach(s=>{if(e[s]===void 0)throw new TypeError(`ClientConfiguration option '${s}' must be defined.`)}),e.http2_max_streams<=0)throw new RangeError("'http2_max_streams' must be greater than zero.");if(e.client_timeout_buffer_ms<=0)throw new RangeError("'client_timeout_buffer_ms' must be greater than zero.");if(e.query_timeout_ms<=0)throw new RangeError("'query_timeout_ms' must be greater than zero.")},u(he,be,rt());var _t=["invalid_function_definition","invalid_identifier","invalid_query","invalid_syntax","invalid_type"];export{ne as AbortError,M as AuthenticationError,v as AuthorizationError,he as Client,I as ClientClosedError,b as ClientError,se as ContendedTransactionError,Q as DateStub,Z as Document,D as DocumentReference,q as EmbeddedSet,C as FaunaError,oe as FetchClient,N as InvalidRequestError,Ke as LONG_MAX,Je as LONG_MIN,V as Module,ee as NamedDocument,B as NamedDocumentReference,w as NetworkError,G as NodeHTTP2Client,te as NullDocument,R as Page,E as ProtocolError,P as QueryCheckError,F as QueryRuntimeError,W as QueryTimeoutError,d as ServiceError,j as ServiceInternalError,$ as ServiceTimeoutError,O as SetIterator,H as TaggedTypeFormat,k as ThrottlingError,_ as TimeStub,ke as endpoints,qe as fql,Ie as getDefaultHTTPClient,Ae as isHTTPResponse};
//# sourceMappingURL=index.js.map