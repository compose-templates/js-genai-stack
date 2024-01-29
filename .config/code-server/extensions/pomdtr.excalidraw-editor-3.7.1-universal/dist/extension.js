(()=>{"use strict";var e={470:e=>{function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,i="",n=0,a=-1,o=0,s=0;s<=e.length;++s){if(s<e.length)r=e.charCodeAt(s);else{if(47===r)break;r=47}if(47===r){if(a===s-1||1===o);else if(a!==s-1&&2===o){if(i.length<2||2!==n||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2))if(i.length>2){var c=i.lastIndexOf("/");if(c!==i.length-1){-1===c?(i="",n=0):n=(i=i.slice(0,c)).length-1-i.lastIndexOf("/"),a=s,o=0;continue}}else if(2===i.length||1===i.length){i="",n=0,a=s,o=0;continue}t&&(i.length>0?i+="/..":i="..",n=2)}else i.length>0?i+="/"+e.slice(a+1,s):i=e.slice(a+1,s),n=s-a-1;a=s,o=0}else 46===r&&-1!==o?++o:o=-1}return i}var i={resolve:function(){for(var e,i="",n=!1,a=arguments.length-1;a>=-1&&!n;a--){var o;a>=0?o=arguments[a]:(void 0===e&&(e=process.cwd()),o=e),t(o),0!==o.length&&(i=o+"/"+i,n=47===o.charCodeAt(0))}return i=r(i,!n),n?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var i=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!i)).length||i||(e="."),e.length>0&&n&&(e+="/"),i?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];t(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":i.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=i.resolve(e))===(r=i.resolve(r)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var a=e.length,o=a-n,s=1;s<r.length&&47===r.charCodeAt(s);++s);for(var c=r.length-s,l=o<c?o:c,h=-1,d=0;d<=l;++d){if(d===l){if(c>l){if(47===r.charCodeAt(s+d))return r.slice(s+d+1);if(0===d)return r.slice(s+d)}else o>l&&(47===e.charCodeAt(n+d)?h=d:0===d&&(h=0));break}var u=e.charCodeAt(n+d);if(u!==r.charCodeAt(s+d))break;47===u&&(h=d)}var g="";for(d=n+h+1;d<=a;++d)d!==a&&47!==e.charCodeAt(d)||(0===g.length?g+="..":g+="/..");return g.length>0?g+r.slice(s+h):(s+=h,47===r.charCodeAt(s)&&++s,r.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),i=47===r,n=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(r=e.charCodeAt(o))){if(!a){n=o;break}}else a=!1;return-1===n?i?"/":".":i&&1===n?"//":e.slice(0,n)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var i,n=0,a=-1,o=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,c=-1;for(i=e.length-1;i>=0;--i){var l=e.charCodeAt(i);if(47===l){if(!o){n=i+1;break}}else-1===c&&(o=!1,c=i+1),s>=0&&(l===r.charCodeAt(s)?-1==--s&&(a=i):(s=-1,a=c))}return n===a?a=c:-1===a&&(a=e.length),e.slice(n,a)}for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!o){n=i+1;break}}else-1===a&&(o=!1,a=i+1);return-1===a?"":e.slice(n,a)},extname:function(e){t(e);for(var r=-1,i=0,n=-1,a=!0,o=0,s=e.length-1;s>=0;--s){var c=e.charCodeAt(s);if(47!==c)-1===n&&(a=!1,n=s+1),46===c?-1===r?r=s:1!==o&&(o=1):-1!==r&&(o=-1);else if(!a){i=s+1;break}}return-1===r||-1===n||0===o||1===o&&r===n-1&&r===i+1?"":e.slice(r,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,i=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+i:r+"/"+i:i}(0,e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i,n=e.charCodeAt(0),a=47===n;a?(r.root="/",i=1):i=0;for(var o=-1,s=0,c=-1,l=!0,h=e.length-1,d=0;h>=i;--h)if(47!==(n=e.charCodeAt(h)))-1===c&&(l=!1,c=h+1),46===n?-1===o?o=h:1!==d&&(d=1):-1!==o&&(d=-1);else if(!l){s=h+1;break}return-1===o||-1===c||0===d||1===d&&o===c-1&&o===s+1?-1!==c&&(r.base=r.name=0===s&&a?e.slice(1,c):e.slice(s,c)):(0===s&&a?(r.name=e.slice(1,o),r.base=e.slice(1,c)):(r.name=e.slice(s,o),r.base=e.slice(s,c)),r.ext=e.slice(o,c)),s>0?r.dir=e.slice(0,s-1):a&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{r.r(i),r.d(i,{activate:()=>A});const e=require("vscode");async function t(){const t=e.workspace.getConfiguration("excalidraw"),r=t.get("theme"),i=function(t,r){const i=t.inspect("theme");return(null==i?void 0:i.workspaceFolderValue)?e.ConfigurationTarget.WorkspaceFolder:(null==i?void 0:i.workspaceValue)?e.ConfigurationTarget.Workspace:e.ConfigurationTarget.Global}(t),n=e=>{t.update("theme",e,i)},a=e.window.createQuickPick(),o=[{label:"light",description:"Always use light theme"},{label:"dark",description:"Always use dark theme"},{label:"auto",description:"Sync theme with VSCode"}];a.items=o,a.activeItems=o.filter((e=>e.label===r)),a.onDidChangeActive((e=>{e.length>0&&n(e[0].label)}));let s=!1;a.onDidAccept((()=>{s=!0;const e=a.activeItems;e.length>0?n(e[0].label):n(r),a.hide()})),a.onDidHide((()=>{s||n(r)})),a.show()}function n(t,r){e.window.showTextDocument(t,{viewColumn:r})}function a(t,r){e.commands.executeCommand("vscode.openWith",t,"editor.excalidraw",r)}function o(t,r){e.commands.executeCommand("vscode.openWith",t,"imagePreview.previewEditor",r)}var s=r(470);const c="function"==typeof btoa,l="function"==typeof Buffer,h=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),d=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),u=((e=>{let t={};e.forEach(((e,r)=>t[e]=r))})(d),String.fromCharCode.bind(String)),g=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_"))),p=c?e=>btoa(e):l?e=>Buffer.from(e,"binary").toString("base64"):e=>{let t,r,i,n,a="";const o=e.length%3;for(let o=0;o<e.length;){if((r=e.charCodeAt(o++))>255||(i=e.charCodeAt(o++))>255||(n=e.charCodeAt(o++))>255)throw new TypeError("invalid character found");t=r<<16|i<<8|n,a+=d[t>>18&63]+d[t>>12&63]+d[t>>6&63]+d[63&t]}return o?a.slice(0,o-3)+"===".substring(o):a},m=l?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let r=0,i=e.length;r<i;r+=4096)t.push(u.apply(null,e.subarray(r,r+4096)));return p(t.join(""))},f=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?u(192|t>>>6)+u(128|63&t):u(224|t>>>12&15)+u(128|t>>>6&63)+u(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return u(240|t>>>18&7)+u(128|t>>>12&63)+u(128|t>>>6&63)+u(128|63&t)},w=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,b=l?e=>Buffer.from(e,"utf8").toString("base64"):h?e=>m(h.encode(e)):e=>p(e.replace(w,f)),y=(e,t=!1)=>t?g(b(e)):b(e);class v{getContentType(){switch(s.parse(this.uri.fsPath).ext){case".svg":return"image/svg+xml";case".png":return"image/png";default:return"application/json"}}constructor(t,r){this._onDidContentChange=new e.EventEmitter,this.onDidContentChange=this._onDidContentChange.event,this._onDidDispose=new e.EventEmitter,this.onDidDispose=this._onDidDispose.event,this.uri=t,this.content=r,this.contentType=this.getContentType()}async revert(){const t=await e.workspace.fs.readFile(this.uri);this.content=t}async backup(t){return await this.saveAs(t),{id:t.toString(),delete:async()=>{try{await e.workspace.fs.delete(t)}catch(e){}}}}async save(){this.saveAs(this.uri)}async update(e){this.content=e,this._onDidContentChange.fire()}async saveAs(t){return e.workspace.fs.writeFile(t,this.content)}dispose(){this._onDidDispose.fire(),this._onDidContentChange.dispose()}}const C={en:"en","zh-cn":"zh-CN","zh-tw":"zh-TW",fr:"fr-FR",de:"de-DE",it:"it-IT",es:"es-ES",ja:"ja-JA",ko:"ko-KO",ru:"ru-RU","pt-br":"pt-BR",tr:"tr-TR",pl:"pl-PL",cs:"cs-CS"};class x{static async register(t){const r=new x(t),i=e.window.registerCustomEditorProvider(x.viewType,r,{supportsMultipleEditorsPerDocument:!1,webviewOptions:{retainContextWhenHidden:!0}});return t.globalState.setKeysForSync(["library"]),x.migrateLegacyLibraryItems(t),i}static migrateLegacyLibraryItems(e){const t=e.globalState.get("libraryItems");t&&e.globalState.update("library",JSON.stringify({type:"excalidrawlib",version:2,source:"https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor",libraryItems:t})).then((()=>{e.globalState.update("libraryItems",void 0)}))}constructor(t){this.context=t,this._onDidChangeCustomDocument=new e.EventEmitter,this.onDidChangeCustomDocument=this._onDidChangeCustomDocument.event}async resolveCustomEditor(e,t){const r=new D(e,t.webview,this.context),i=await r.setupWebview();t.onDidDispose((()=>{i.dispose()}))}async backupCustomDocument(e,t){return e.backup(t.destination)}async openCustomDocument(t,r){const i=await e.workspace.fs.readFile(r.backupId?e.Uri.parse(r.backupId):t),n=new v(t,i),a=n.onDidContentChange((()=>{this._onDidChangeCustomDocument.fire({document:n})}));return n.onDidDispose((()=>{a.dispose()})),n}revertCustomDocument(e){return e.revert()}saveCustomDocument(e){return e.save()}async saveCustomDocumentAs(e,t){await e.saveAs(t)}}x.viewType="editor.excalidraw";class D{constructor(e,t,r){this.document=e,this.webview=t,this.context=r,this.textDecoder=new TextDecoder}isViewOnly(){return"git"===this.document.uri.scheme||"conflictResolution"===this.document.uri.scheme}async setupWebview(){this.webview.options={enableScripts:!0};let t=await this.getLibraryUri();const r=this.webview.onDidReceiveMessage((async r=>{switch(r.type){case"library-change":const i=r.library;await this.saveLibrary(i,t),D._onDidChangeLibrary.fire(i);break;case"change":await this.document.update(new Uint8Array(r.content));break;case"link-open":e.env.openExternal(e.Uri.parse(r.url));break;case"error":e.window.showErrorMessage(r.content);break;case"info":e.window.showInformationMessage(r.content)}}),this),i=e.workspace.onDidChangeConfiguration((e=>{e.affectsConfiguration("excalidraw.theme",this.document.uri)&&this.webview.postMessage({type:"theme-change",theme:this.getTheme()})}),this);e.workspace.onDidChangeConfiguration((e=>{e.affectsConfiguration("excalidraw.language",this.document.uri)&&this.webview.postMessage({type:"language-change",langCode:this.getLanguage()})}),this);const n=e.workspace.onDidChangeConfiguration((e=>{e.affectsConfiguration("excalidraw.image",this.document.uri)&&this.webview.postMessage({type:"image-params-change",imageParams:this.getImageParams()})}),this),a=e.workspace.onDidChangeConfiguration((async e=>{if(!e.affectsConfiguration("excalidraw.workspaceLibraryPath",this.document.uri))return;t=await this.getLibraryUri();const r=await this.loadLibrary(t);this.webview.postMessage({type:"library-change",library:r,merge:!1})})),o=D.onLibraryImport((async({library:e})=>{this.webview.postMessage({type:"library-change",library:e,merge:!0})})),s=D.onDidChangeLibrary((e=>{this.webview.postMessage({type:"library-change",library:e,merge:!1})}));return this.webview.html=await this.buildHtmlForWebview({content:Array.from(this.document.content),contentType:this.document.contentType,library:await this.loadLibrary(t),viewModeEnabled:this.isViewOnly()||void 0,theme:this.getTheme(),imageParams:this.getImageParams(),langCode:this.getLanguage(),name:this.extractName(this.document.uri)}),new e.Disposable((()=>{r.dispose(),i.dispose(),o.dispose(),a.dispose(),s.dispose(),n.dispose()}))}getImageParams(){return e.workspace.getConfiguration("excalidraw").get("image")}getLanguage(){return e.workspace.getConfiguration("excalidraw").get("language")||C[e.env.language]}getTheme(){return e.workspace.getConfiguration("excalidraw").get("theme","light")}extractName(e){const t=s.parse(e.fsPath).name;return t.endsWith(".excalidraw")?t.slice(0,-11):t}async getLibraryUri(){const t=await e.workspace.getConfiguration("excalidraw").get("workspaceLibraryPath"),r=e.workspace.workspaceFolders;if(!t||!r)return;const i=function(e,t){const r=e.path.split(s.sep).slice(0,-1);for(;r.length>0;){const e=r.join(s.sep),i=t.find((t=>t.uri.path===e));if(i)return i;r.pop()}}(this.document.uri,r);return i?e.Uri.joinPath(i.uri,t):void 0}static importLibrary(e){this._onLibraryImport.fire({library:e})}async loadLibrary(t){if(!t)return this.context.globalState.get("library");try{const r=await e.workspace.fs.readFile(t);return this.textDecoder.decode(r)}catch(t){return e.window.showErrorMessage(`Failed to load library: ${t}`),this.context.globalState.get("library")}}async saveLibrary(t,r){if(!r)return this.context.globalState.update("library",t);try{await e.workspace.fs.writeFile(r,(new TextEncoder).encode(t))}catch(t){await e.window.showErrorMessage(`Failed to save library: ${t}`)}}async buildHtmlForWebview(t){const r=e.Uri.joinPath(this.context.extensionUri,"public"),i=await e.workspace.fs.readFile(e.Uri.joinPath(r,"index.html"));let n=this.textDecoder.decode(i);return n=n.replace("{{data-excalidraw-config}}",y(JSON.stringify(t))),n=n.replace("{{excalidraw-asset-path}}",`${this.webview.asWebviewUri(r).toString()}/`),this.fixLinks(n,r)}fixLinks(t,r){return t.replace(new RegExp("((?:src|href)=['\"])(.*?)(['\"])","gmi"),((t,i,n,a)=>{const o=n.toLowerCase();if(n.startsWith("#")||o.startsWith("http://")||o.startsWith("https://"))return t;const s=e.Uri.joinPath(r,n);return[i,this.webview.asWebviewUri(s),a].join("")}))}}D._onDidChangeLibrary=new e.EventEmitter,D.onDidChangeLibrary=D._onDidChangeLibrary.event,D._onLibraryImport=new e.EventEmitter,D.onLibraryImport=D._onLibraryImport.event;class k{static register(){const t=new k;return e.window.registerUriHandler(t)}async handleUri(t){const r=new URLSearchParams(t.fragment).get("addLibrary");if(r){const e=await fetch(r),t=await e.text();D.importLibrary(t)}else e.window.showErrorMessage("Invalid URL!")}}async function A(r){r.subscriptions.push(await x.register(r)),r.subscriptions.push(k.register()),function(r){r.subscriptions.push(e.commands.registerCommand("excalidraw.updateTheme",t)),r.subscriptions.push(e.commands.registerCommand("excalidraw.showSource",n)),r.subscriptions.push(e.commands.registerCommand("excalidraw.showEditor",a)),r.subscriptions.push(e.commands.registerCommand("excalidraw.showImage",o)),r.subscriptions.push(e.commands.registerCommand("excalidraw.showImageToSide",(t=>o(t,e.ViewColumn.Beside)))),r.subscriptions.push(e.commands.registerCommand("excalidraw.showEditorToSide",(t=>a(t,e.ViewColumn.Beside)))),r.subscriptions.push(e.commands.registerCommand("excalidraw.showSourceToSide",(t=>n(t,e.ViewColumn.Beside)))),r.subscriptions.push(e.commands.registerCommand("excalidraw.preventDefault",(()=>{})))}(r)}})(),module.exports=i})();