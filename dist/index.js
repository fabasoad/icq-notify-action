(()=>{"use strict";var e={351:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const a=o(n(87));const s=n(278);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+a.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const l="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=l+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${l}${escapeData(this.message)}`;return e}}function escapeData(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var a=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const s=n(351);const l=n(717);const u=n(278);const p=o(n(87));const c=o(n(622));var d;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(d=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=u.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${p.EOL}${n}${p.EOL}${t}`;l.issueCommand("ENV",r)}else{s.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){s.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){l.issueCommand("PATH",e)}else{s.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${c.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return n}return n.trim()}t.getInput=getInput;function getMultilineInput(e,t){const n=getInput(e,t).split("\n").filter((e=>e!==""));return n}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const n=["true","True","TRUE"];const r=["false","False","FALSE"];const i=getInput(e,t);if(n.includes(i))return true;if(r.includes(i))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(p.EOL);s.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){s.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=d.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){s.issueCommand("debug",{},e)}t.debug=debug;function error(e){s.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){s.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+p.EOL)}t.info=info;function startGroup(e){s.issue("group",e)}t.startGroup=startGroup;function endGroup(){s.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return a(this,void 0,void 0,(function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n}))}t.group=group;function saveState(e,t){s.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const a=o(n(747));const s=o(n(87));const l=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!a.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}a.appendFileSync(n,`${l.toCommandValue(t)}${s.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},863:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.Bot=void 0;var r=n(366);var i=n(973);var o=n(232);var a=n(46);var s=n(190);var l=function(){function Bot(e,t){this.running=false;this.lastEventId=0;if(!e)throw new Error("Нет токена");this.token=e;this.apiBaseUrl=t&&t.apiUrlBase?t.apiUrlBase:"https://api.icq.net/bot/v1";this.name=t&&t.name?t.name:"NodeBot";this.version=t&&t.version?t.version:"0.0.1";this.timeoutS=t&&t.timeoutS?t.timeoutS:20;this.pollTimeS=t&&t.pollTimeS?t.pollTimeS:60;this.dispatcher=new o.DispatcherMessage(this);this.uin=this.token.split(":")[this.token.split(":").length-1];this.setHttpSession(new r.ICQHttpClient);this.dispatcher.addHandler(new s.SkipDuplicateMessageHandler({}))}Bot.prototype.getDispatcher=function(){return this.dispatcher};Bot.prototype.getUNI=function(){return this.uin};Bot.prototype.getUserAgent=function(){var e="2.0.0-beta";return this.name+"/"+this.version+" (uin="+(this.uin?this.uin:null)+") bot-nodejs/"+e};Bot.prototype.setHttpSession=function(e){this.http=e};Bot.prototype.startPolling=function(){var e=this;try{if(!this.running){console.log("Starting polling.");this.running=true;this.pollingThread=setTimeout((function(t){return e.polling()}))}}catch(e){console.error("Starting polling.",e)}return this};Bot.prototype.polling=function(){var e=this;if(this.running){try{this.eventsGet(this.pollTimeS,this.lastEventId).then((function(t){for(var n=0,r=t.events;n<r.length;n++){var i=r[n];e.dispatcher.dispatch(new a.ICQEvent(i))}e.polling()}))}catch(e){console.error("Exception while polling!",e)}}};Bot.prototype.stop=function(){if(this.running){console.log("Stopping bot.");this.running=false}return this};Bot.prototype.eventsGet=function(e,t){var n=this;return this.http.get(this.apiBaseUrl+"/events/get",{token:this.token,lastEventId:t,pollTime:e},{"user-agent":this.getUserAgent()}).then((function(e){return new Promise((function(t,r){if(e.events){e.events.forEach((function(e){n.lastEventId=n.lastEventId>e.eventId?n.lastEventId:e.eventId}))}t(e)}))}))};Bot.prototype.selfGet=function(){return this.http.get(this.apiBaseUrl+"/self/get",{token:this.token},{"user-agent":this.getUserAgent()})};Bot.prototype.sendText=function(e,t,n,r,i,o,a){if(n===void 0){n=""}if(r===void 0){r=""}if(i===void 0){i=""}var s={token:this.token,chatId:e,text:t.toString()};if(n)s["replyMsgId"]=n;if(r)s["forwardChatId"]=r;if(i)s["forwardMsgId"]=i;if(o){var l=this.getICQButtonList(o);if(l)s["inlineKeyboardMarkup"]=JSON.stringify(l)}if(a){if(!a.mode){s["format"]=JSON.stringify(a.range)}else{s["parseMode"]=`${a.mode}`}}return this.http.get(this.apiBaseUrl+"/messages/sendText",s,{"user-agent":this.getUserAgent()})};Bot.prototype.getICQButtonList=function(e){if(!e)return null;var t=[];if(Array.isArray(e[0])){for(var n=0,r=e;n<r.length;n++){var i=r[n];var o=[];for(var a=0,s=i;a<s.length;a++){var l=s[a];o.push(l.getQueryStructure())}t.push(o)}return t}else if(Array.isArray(e)){for(var u=0,p=e;u<p.length;u++){var l=p[u];t.push(l.getQueryStructure())}return[t]}else{return[[e.getQueryStructure()]]}};Bot.prototype.sendFile=function(e,t,n,r,o,a,s,l,u){if(n){var p=new i.FormDataICQ;p.append("token",this.token);p.append("chatId",e);if(r)p.append("caption",r);if(o)p.append("replyMsgId",o);if(a)p.append("forwardChatId",a);if(s)p.append("forwardMsgId",s);p.appendFile("file",n);if(l){var c=this.getICQButtonList(l);if(c)p.append("inlineKeyboardMarkup",c)}if(u){if(!u.mode){p.append("format",JSON.stringify(u.range))}else{p.append("parseMode",u.mode)}}return this.http.post(this.apiBaseUrl+"/messages/sendFile",p,{"user-agent":this.getUserAgent()})}else{var d={token:this.token,chatId:e,fileId:t};if(r)d["caption"]=r;if(o)d["replyMsgId"]=o;if(a)d["forwardChatId"]=a;if(s)d["forwardMsgId"]=s;if(l){var c=this.getICQButtonList(l);if(c)d["inlineKeyboardMarkup"]=JSON.stringify(c)}if(u){if(!u.mode){d["format"]=JSON.stringify(u.range)}else{d["parseMode"]=u.mode}}return this.http.get(this.apiBaseUrl+"/messages/sendFile",d,{"user-agent":this.getUserAgent()})}};Bot.prototype.sendVoice=function(e,t,n,r,o,a,s){if(n){var l=new i.FormDataICQ;l.append("token",this.token);l.append("chatId",e);l.append("fileId",t);if(r)l.append("replyMsgId",r);if(o)l.append("forwardChatId",o);if(a)l.append("forwardMsgId",a);if(s){var u=this.getICQButtonList(s);if(u)l.append("inlineKeyboardMarkup",u)}l.appendFile("file",n);return this.http.post(this.apiBaseUrl+"/messages/sendVoice",l,{"user-agent":this.getUserAgent()})}else{var p={token:this.token,chatId:e,fileId:t};if(r)p["replyMsgId"]=r;if(o)p["forwardChatId"]=o;if(a)p["forwardMsgId"]=a;if(s){var u=this.getICQButtonList(s);if(u)p["inlineKeyboardMarkup"]=JSON.stringify(u)}return this.http.get(this.apiBaseUrl+"/messages/sendVoice",p,{"user-agent":this.getUserAgent()})}};Bot.prototype.editText=function(e,t,n,r,i){var o={token:this.token,chatId:e,msgId:t,text:n};if(r){var a=this.getICQButtonList(r);if(a)o["inlineKeyboardMarkup"]=JSON.stringify(a)}if(i){if(!i.mode){o["format"]=JSON.stringify(i.range)}else{o["parseMode"]=i.mode}}return this.http.get(this.apiBaseUrl+"/messages/editText",o,{"user-agent":this.getUserAgent()})};Bot.prototype.deleteMessages=function(e,t){return this.http.get(this.apiBaseUrl+"/messages/deleteMessages",{token:this.token,chatId:e,msgId:t},{"user-agent":this.getUserAgent()})};Bot.prototype.answerCallbackQuery=function(e,t,n,r){var i={token:this.token,queryId:e,text:t};if(n)i["showAlert"]=n;if(r)i["url"]=r;return this.http.get(this.apiBaseUrl+"/messages/answerCallbackQuery",i,{"user-agent":this.getUserAgent()})};Bot.prototype.sendActions=function(e,t){return this.http.get(this.apiBaseUrl+"/chats/sendActions",{token:this.token,chatId:e,actions:t},{"user-agent":this.getUserAgent()})};Bot.prototype.getChatInfo=function(e){return this.http.get(this.apiBaseUrl+"/chats/getInfo",{token:this.token,chatId:e},{"user-agent":this.getUserAgent()})};Bot.prototype.getChatAdmins=function(e){return this.http.get(this.apiBaseUrl+"/chats/getAdmins",{token:this.token,chatId:e},{"user-agent":this.getUserAgent()})};Bot.prototype.getFileInfo=function(e){return this.http.get(this.apiBaseUrl+"/files/getInfo",{token:this.token,fileId:e},{"user-agent":this.getUserAgent()})};Bot.prototype.pinMessage=function(e,t){return this.http.get(this.apiBaseUrl+"/chats/pinMessage",{token:this.token,chatId:e,msgId:t},{"user-agent":this.getUserAgent()})};Bot.prototype.unpinMessage=function(e,t){return this.http.get(this.apiBaseUrl+"/chats/unpinMessage",{token:this.token,chatId:e,msgId:t},{"user-agent":this.getUserAgent()})};Bot.prototype.setTitle=function(e,t){return this.http.get(this.apiBaseUrl+"/chats/setTitle",{token:this.token,chatId:e,title:t},{"user-agent":this.getUserAgent()})};Bot.prototype.setAbout=function(e,t){return this.http.get(this.apiBaseUrl+"/chats/setAbout",{token:this.token,chatId:e,about:t},{"user-agent":this.getUserAgent()})};Bot.prototype.setRules=function(e,t){return this.http.get(this.apiBaseUrl+"/chats/setRules",{token:this.token,chatId:e,rules:t},{"user-agent":this.getUserAgent()})};Bot.prototype.setAvatar=function(e,t){var n=new i.FormDataICQ;n.append("token",this.token);n.append("chatId",e);n.appendFile("image",t);return this.http.post(this.apiBaseUrl+"/chats/avatar/set",n,{"user-agent":this.getUserAgent()})};Bot.prototype.getMembers=function(e,t){var n={token:this.token,chatId:e};if(t)n["cursor"]=t;return this.http.get(this.apiBaseUrl+"/chats/getMembers",n,{"user-agent":this.getUserAgent()})};Bot.prototype.deleteMembers=function(e,t){var n={token:this.token,chatId:e,members:JSON.stringify(t)};return this.http.get(this.apiBaseUrl+"/chats/members/delete",n,{"user-agent":this.getUserAgent()})};Bot.prototype.getBlockedUsers=function(e){return this.http.get(this.apiBaseUrl+"/chats/getBlockedUsers",{token:this.token,chatId:e},{"user-agent":this.getUserAgent()})};Bot.prototype.getPendingUsers=function(e){return this.http.get(this.apiBaseUrl+"/chats/getPendingUsers",{token:this.token,chatId:e},{"user-agent":this.getUserAgent()})};Bot.prototype.blockUser=function(e,t,n){var r={token:this.token,chatId:e,userId:t};if(n)r["delLastMessages"]=true;return this.http.get(this.apiBaseUrl+"/chats/blockUser",r,{"user-agent":this.getUserAgent()})};Bot.prototype.unblockUser=function(e,t){var n={token:this.token,chatId:e,userId:t};return this.http.get(this.apiBaseUrl+"/chats/unblockUser",n,{"user-agent":this.getUserAgent()})};Bot.prototype.resolvePending=function(e,t,n,r){var i={token:this.token,chatId:e};if(t)i["approve"]=true;if(r)i["everyone"]=true;if(n)i["userId"]=n;if(r==!!n)throw new Error("Должен быть указан один из двух параметров: userId или everyone. Эти параметры не могут быть указаны одновременно.");return this.http.get(this.apiBaseUrl+"/chats/resolvePending",i,{"user-agent":this.getUserAgent()})};return Bot}();t.Bot=l},232:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.DispatcherMessage=void 0;var n=function(){function DispatcherMessage(e){this.bot=e;this.handlers=[]}DispatcherMessage.prototype.getBot=function(){return this.bot};DispatcherMessage.prototype.getHandlers=function(){return this.handlers};DispatcherMessage.prototype.addHandler=function(e){if(this.handlers.findIndex((function(t){return t===e}))>=0)return;this.handlers.push(e)};DispatcherMessage.prototype.removeHandler=function(e){if(this.handlers.indexOf(e)!=-1){this.handlers=this.handlers.filter((function(t){return t!==e}))}};DispatcherMessage.prototype.dispatch=function(e){var t=this;try{for(var n=0,r=this.handlers.filter((function(n){return n.check(e,t)}));n<r.length;n++){var i=r[n];i.handle(e,this)}}catch(e){console.error("Caught '"+e+"' exception, stopping dispatching.");this.bot.stop()}};return DispatcherMessage}();t.DispatcherMessage=n},973:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.FormDataICQ=void 0;var r=n(747);var i=function(){function FormDataICQ(){this.data=[];this.files=[];this.razdel="----WebKitFormBoundary"+(Math.random()*Math.pow(10,18)).toString(16)}FormDataICQ.prototype.getBoundary=function(){return this.razdel};FormDataICQ.prototype.append=function(e,t){this.data.push({name:e,value:t})};FormDataICQ.prototype.appendFile=function(e,t){if(!r.existsSync(t))throw"File not exist "+t;this.files.push({name:e,filename:t})};FormDataICQ.prototype.toString=function(){var e="";for(var t=0,n=this.files;t<n.length;t++){var i=n[t];e+="--"+this.razdel+"\r\n";var o=i.filename.split(/(\/|\\)/g);var a=i.filename.split(".");var s=a[a.length-1];e+='Content-Disposition: form-data; name="'+i.name+'"; filename="'+o[o.length-1]+'"\r\n';if(/(jpg|jpeg|png|gif)/i.test(s)){e+='Content-Type: "image/'+s+'"\r\n\r\n'}else if(/(txt|html|css|cmd|htm|json)/i.test(s)){e+='Content-Type: "text/'+s+'"\r\n\r\n'}else{e+='Content-Type: "application/octet-stream"\r\n\r\n'}e+=r.readFileSync(i.filename,"latin1")}for(var l=0,u=this.data;l<u.length;l++){var i=u[l];if(e)e+="\r\n";e+="--"+this.razdel+"\r\n";e+='Content-Disposition: form-data; name="'+i.name+'"\r\n\r\n';e+=Buffer.from(i.value.toString(),"utf8").toString("latin1")}e+="\r\n--"+this.razdel+"--";return e};return FormDataICQ}();t.FormDataICQ=i},119:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.ICQButton=void 0;var n=function(){function ICQButton(e,t,n){if(n===void 0){n=null}this.text=e;this.callbackData=t;this.url=n}ICQButton.prototype.getQueryStructure=function(){if(this.url){return{text:this.text,url:this.url}}else{return{text:this.text,callbackData:this.callbackData}}};return ICQButton}();t.ICQButton=n},46:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.ICQEvent=void 0;var r=n(268);var i=function(){function ICQEvent(e){this.type=e.type;this.data=e.payload;if(this.type==r.EventType.NEW_MESSAGE||this.type==r.EventType.EDITED_MESSAGE||this.type==r.EventType.PINNED_MESSAGE){this.text=this.data.text;this.messageAuthor=this.data.from}if(this.data&&this.data.chat){this.fromChatId=this.data.chat.chatId}}return ICQEvent}();t.ICQEvent=i},366:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.ICQHttpClient=void 0;var r=n(835);var i=n(211);var o=function(){function ICQHttpClient(){}ICQHttpClient.prototype.get=function(e,t,n){return new Promise((function(o,a){var s="?";for(var l in t){if(Array.isArray(t[l])){for(var u=0,p=t[l];u<p.length;u++){var c=p[u];s+=encodeURIComponent(l)+"="+encodeURIComponent(c)+"&"}}else{s+=encodeURIComponent(l)+"="+encodeURIComponent(t[l])+"&"}}s=s.slice(0,-1);console.log(s);var d=new r.URL(e);var f=i.request({host:d.hostname,port:d.port,path:""+d.pathname+s,method:"GET",headers:{"user-agent":n["user-agent"]}},(function(e){e.setEncoding("utf8");var t="";e.on("data",(function(e){t+=e}));e.on("end",(function(e){try{o(JSON.parse(t.toString()))}catch(e){console.log(e.message)}}))}));f.on("error",(function(e){a(e)}));f.end()}))};ICQHttpClient.prototype.post=function(e,t,n){return new Promise((function(o,a){var s=new r.URL(e);var l=t.toString();var u=i.request({host:s.hostname,path:s.pathname,port:s.port,method:"POST",headers:{"Content-Type":"multipart/form-data; boundary="+t.getBoundary(),"user-agent":n["user-agent"]}},(function(e){e.setEncoding("utf8");var t="";e.on("data",(function(e){t+=e}));e.on("end",(function(){o(JSON.parse(t.toString()))}))}));u.on("error",(function(e){a(e)}));u.write(l,"latin1");u.end()}))};return ICQHttpClient}();t.ICQHttpClient=o},190:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return extendStatics(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=t===null?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:true});t.SkipDuplicateMessageHandler=void 0;var i=n(200);var o=function(e){r(SkipDuplicateMessageHandler,e);function SkipDuplicateMessageHandler(t){var n=e.call(this,null,null)||this;n.cache=t;if(!n.cache)n.cache={};return n}SkipDuplicateMessageHandler.prototype.check=function(t,n){if(e.prototype.check.call(this,t,n)){for(var r in this.cache){if(r&&r==t.data.msgId&&this.cache[r]==t.text){throw new Error("Caught StopDispatching id'"+r+"' exception, stopping dispatching.")}}this.cache[t.data.msgId]=t.text}return true};return SkipDuplicateMessageHandler}(i.MessageHandler);t.SkipDuplicateMessageHandler=o},123:(e,t,n)=>{var r;r={value:true};var i=n(863);var o=n(200);var a=n(539);var s=n(119);var l=function(){function ICQ(){}ICQ.Button=s.ICQButton;ICQ.Bot=i.Bot;ICQ.Filter=a.Filter;ICQ.Handler={HelpCommand:o.HelpCommandHandler,Message:o.MessageHandler,NewChatMembers:o.NewChatMembersHandler,LeftChatMembers:o.LeftChatMembersHandler,PinnedMessage:o.PinnedMessageHandler,UnPinnedMessage:o.UnPinnedMessageHandler,EditedMessage:o.EditedMessageHandler,DeletedMessage:o.DeletedMessageHandler,Command:o.CommandHandler,StartCommand:o.StartCommandHandler,FeedbackCommand:o.FeedbackCommandHandler,UnknownCommand:o.UnknownCommandHandler,All:o.DefaultHandler,BotButtonCommand:o.BotButtonCommandHandler};return ICQ}();t.Z=l},566:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.PayLoadFileType=t.PartsType=void 0;var n;(function(e){e["FILE"]="file";e["STICKER"]="sticker";e["MENTION"]="mention";e["VOICE"]="voice";e["FORWARD"]="forward";e["REPLY"]="reply"})(n=t.PartsType||(t.PartsType={}));var r;(function(e){e["IMAGE"]="image";e["VIDEO"]="video";e["AUDIO"]="audio"})(r=t.PayLoadFileType||(t.PayLoadFileType={}))},268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.EventType=void 0;var n;(function(e){e["NEW_MESSAGE"]="newMessage";e["EDITED_MESSAGE"]="editedMessage";e["DELETED_MESSAGE"]="deletedMessage";e["PINNED_MESSAGE"]="pinnedMessage";e["UNPINNED_MESSAGE"]="unpinnedMessage";e["NEW_CHAT_MEMBERS"]="newChatMembers";e["LEFT_CHAT_MEMBERS"]="leftChatMembers";e["CHANGED_CHAT_INFO"]="changedChatInfo";e["CALLBACK_QUERY"]="callbackQuery"})(n=t.EventType||(t.EventType={}))},539:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return extendStatics(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=t===null?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:true});t.Filter=t.FilterComposite=t.TypeFilterOperation=t.URLFilter=t.ReplyFilter=t.ForwardFilter=t.MentionFilter=t.StickerFilter=t.AudioFilter=t.VideoFilter=t.ImageFilter=t.FileFilter=t.SenderFilter=t.RegexpFilter=t.CommandFilter=t.MessageFilter=void 0;var i=n(566);var o=function(){function MessageFilter(){}MessageFilter.prototype.filter=function(e){return e.data["text"]&&e["text"].length>0};return MessageFilter}();t.MessageFilter=o;var a=function(e){r(CommandFilter,e);function CommandFilter(){var t=e!==null&&e.apply(this,arguments)||this;t.COMMAND_PREFIXES=["/","."];return t}CommandFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&this.COMMAND_PREFIXES.findIndex((function(e){return e===t.data.text.trim()[0]}))>=0};return CommandFilter}(o);t.CommandFilter=a;var s=function(e){r(RegexpFilter,e);function RegexpFilter(t){var n=e.call(this)||this;n.pattern=t;return n}RegexpFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&this.pattern.test(t.data["text"])};return RegexpFilter}(o);t.RegexpFilter=s;var l=function(e){r(SenderFilter,e);function SenderFilter(t){var n=e.call(this)||this;n.user_id=t;return n}SenderFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&t.data["from"]&&t.data["from"]["userId"]==this.user_id};return SenderFilter}(o);t.SenderFilter=l;var u=function(e){r(FileFilter,e);function FileFilter(){return e!==null&&e.apply(this,arguments)||this}FileFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&t.data["parts"]&&t.data["parts"].findIndex((function(e){return e&&e.type==i.PartsType.FILE}))>=0};return FileFilter}(o);t.FileFilter=u;var p=function(e){r(ImageFilter,e);function ImageFilter(){return e!==null&&e.apply(this,arguments)||this}ImageFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&t.data["parts"].findIndex((function(e){return e&&e["payload"]&&e.payload["type"]&&e.payload.type==i.PayLoadFileType.IMAGE}))>=0};return ImageFilter}(u);t.ImageFilter=p;var c=function(e){r(VideoFilter,e);function VideoFilter(){return e!==null&&e.apply(this,arguments)||this}VideoFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&t.data["parts"].findIndex((function(e){return e&&e["payload"]&&e.payload["type"]&&e.payload.type==i.PayLoadFileType.VIDEO}))>=0};return VideoFilter}(u);t.VideoFilter=c;var d=function(e){r(AudioFilter,e);function AudioFilter(){return e!==null&&e.apply(this,arguments)||this}AudioFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&t.data["parts"].findIndex((function(e){return e&&e["payload"]&&e.payload["type"]&&e.payload.type==i.PayLoadFileType.AUDIO}))>=0};return AudioFilter}(u);t.AudioFilter=d;var f=function(e){r(StickerFilter,e);function StickerFilter(){return e!==null&&e.apply(this,arguments)||this}StickerFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&t.data["parts"]&&t.data["parts"].findIndex((function(e){return e&&e.type==i.PartsType.STICKER}))>=0};return StickerFilter}(o);t.StickerFilter=f;var h=function(e){r(MentionFilter,e);function MentionFilter(t){var n=e.call(this)||this;n.userId=t;return n}MentionFilter.prototype.filter=function(t){var n=this;return e.prototype.filter.call(this,t)&&t.data["parts"]&&t.data["parts"].findIndex((function(e){return e&&e.type==i.PartsType.MENTION&&(!n.userId||e.payload.userId==n.userId)}))>=0};return MentionFilter}(o);t.MentionFilter=h;var g=function(e){r(ForwardFilter,e);function ForwardFilter(){return e!==null&&e.apply(this,arguments)||this}ForwardFilter.prototype.filter=function(e){return e.data["parts"]&&e.data.parts.findIndex((function(e){return e&&e.type==i.PartsType.FORWARD}))>=0};return ForwardFilter}(o);t.ForwardFilter=g;var m=function(e){r(ReplyFilter,e);function ReplyFilter(){return e!==null&&e.apply(this,arguments)||this}ReplyFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&t.data["parts"]&&t.data.parts.findIndex((function(e){return e&&e.type==i.PartsType.REPLY}))>=0};return ReplyFilter}(o);t.ReplyFilter=m;var y=function(e){r(URLFilter,e);function URLFilter(){return e.call(this,/^\s*https?:\/\/\S+\s*$/i)||this}URLFilter.prototype.filter=function(t){return e.prototype.filter.call(this,t)&&!(new u).filter(t)};return URLFilter}(s);t.URLFilter=y;var v;(function(e){e[e["and"]=1]="and";e[e["or"]=2]="or";e[e["not"]=3]="not"})(v=t.TypeFilterOperation||(t.TypeFilterOperation={}));var _=function(){function FilterComposite(e,t,n){this.type=e;this.leftFilter=t;this.rightFilter=n}FilterComposite.and=function(e,t){return new FilterComposite(v.and,e,t)};FilterComposite.or=function(e,t){return new FilterComposite(v.or,e,t)};FilterComposite.not=function(e){return new FilterComposite(v.not,e)};FilterComposite.prototype.filter=function(e){switch(this.type){case v.and:return this.leftFilter.filter(e)&&this.rightFilter.filter(e);case v.or:return this.leftFilter.filter(e)||this.rightFilter.filter(e);case v.not:return!this.leftFilter.filter(e)}throw"Not type filter"};return FilterComposite}();t.FilterComposite=_;var C=function(){function Filter(){}Filter.message=new o;Filter.command=new a;Filter.file=new u;Filter.image=new p;Filter.video=new c;Filter.audio=new d;Filter.media=_.or(_.or(Filter.image,Filter.video),Filter.audio);Filter.data=_.and(Filter.file,_.not(Filter.media));Filter.sticker=new f;Filter.url=new y;Filter.text=_.and(Filter.message,_.not(_.or(_.or(_.or(Filter.command,Filter.sticker),Filter.file),Filter.url)));Filter.regexp=s;Filter.mention=h;Filter.forward=new g;Filter.reply=new m;Filter.sender=l;return Filter}();t.Filter=C},200:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return extendStatics(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=t===null?Object.create(t):(__.prototype=t.prototype,new __)}}();var i=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};var o=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function verb(e){return function(t){return step([e,t])}}function step(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};Object.defineProperty(t,"__esModule",{value:true});t.BotButtonCommandHandler=t.UnknownCommandHandler=t.FeedbackCommandHandler=t.StartCommandHandler=t.HelpCommandHandler=t.CommandHandler=t.DeletedMessageHandler=t.EditedMessageHandler=t.MessageHandler=t.UnPinnedMessageHandler=t.PinnedMessageHandler=t.LeftChatMembersHandler=t.NewChatMembersHandler=t.DefaultHandler=t.HandlerBase=void 0;var a=n(539);var s=n(268);var l=n(190);var u=function(){function HandlerBase(e,t){this.filters=e;this.callback=t}HandlerBase.prototype.check=function(e,t){return!this.filters||this.filters.filter(e)};HandlerBase.prototype.handle=function(e,t){if(this.callback){this.callback(t.getBot(),e)}};return HandlerBase}();t.HandlerBase=u;var p=function(e){r(DefaultHandler,e);function DefaultHandler(t){if(t===void 0){t=null}return e.call(this,null,t)||this}DefaultHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&!this.any(t,n)};DefaultHandler.prototype.any=function(e,t){for(var n=0,r=t.getHandlers();n<r.length;n++){var i=r[n];if(i!=this&&!(i instanceof l.SkipDuplicateMessageHandler)){if(i.check(e,t))return true}}return false};return DefaultHandler}(u);t.DefaultHandler=p;var c=function(e){r(NewChatMembersHandler,e);function NewChatMembersHandler(){return e!==null&&e.apply(this,arguments)||this}NewChatMembersHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&t.type==s.EventType.NEW_CHAT_MEMBERS};return NewChatMembersHandler}(u);t.NewChatMembersHandler=c;var d=function(e){r(LeftChatMembersHandler,e);function LeftChatMembersHandler(){return e!==null&&e.apply(this,arguments)||this}LeftChatMembersHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&t.type==s.EventType.LEFT_CHAT_MEMBERS};return LeftChatMembersHandler}(u);t.LeftChatMembersHandler=d;var f=function(e){r(PinnedMessageHandler,e);function PinnedMessageHandler(){return e!==null&&e.apply(this,arguments)||this}PinnedMessageHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&t.type==s.EventType.PINNED_MESSAGE};return PinnedMessageHandler}(u);t.PinnedMessageHandler=f;var h=function(e){r(UnPinnedMessageHandler,e);function UnPinnedMessageHandler(){return e!==null&&e.apply(this,arguments)||this}UnPinnedMessageHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t=t,n=n)&&t.type==s.EventType.UNPINNED_MESSAGE};return UnPinnedMessageHandler}(u);t.UnPinnedMessageHandler=h;var g=function(e){r(MessageHandler,e);function MessageHandler(){return e!==null&&e.apply(this,arguments)||this}MessageHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&t.type==s.EventType.NEW_MESSAGE};return MessageHandler}(u);t.MessageHandler=g;var m=function(e){r(EditedMessageHandler,e);function EditedMessageHandler(){return e!==null&&e.apply(this,arguments)||this}EditedMessageHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&t.type==s.EventType.EDITED_MESSAGE};return EditedMessageHandler}(u);t.EditedMessageHandler=m;var y=function(e){r(DeletedMessageHandler,e);function DeletedMessageHandler(){return e!==null&&e.apply(this,arguments)||this}DeletedMessageHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&t.type==s.EventType.DELETED_MESSAGE};return DeletedMessageHandler}(u);t.DeletedMessageHandler=y;var v=function(e){r(CommandHandler,e);function CommandHandler(t,n,r){if(t===void 0){t=null}if(n===void 0){n=null}if(r===void 0){r=null}var i=e.call(this,n,r)||this;i.filters=n?n:a.Filter.command;i.callback=r;i.command=t;return i}CommandHandler.prototype.check=function(t,n){if(e.prototype.check.call(this,t,n)){if(!this.command)return true;var r=t.data.text.split(" ")[0].toLowerCase().replace(/^(.|\/)/,"");if(Array.isArray(this.command))return this.command.findIndex((function(e){return e.toLowerCase()==r}))>=0;return this.command==r}return false};CommandHandler.prototype.any=function(e,t){for(var n=0,r=t.getHandlers();n<r.length;n++){var i=r[n];if(i!=this&&i instanceof CommandHandler){if(i.check(e,t))return true}}return false};return CommandHandler}(g);t.CommandHandler=v;var _=function(e){r(HelpCommandHandler,e);function HelpCommandHandler(t,n){return e.call(this,"help",t,n)||this}return HelpCommandHandler}(v);t.HelpCommandHandler=_;var C=function(e){r(StartCommandHandler,e);function StartCommandHandler(t,n){return e.call(this,"start",t,n)||this}return StartCommandHandler}(v);t.StartCommandHandler=C;var F=function(e){r(FeedbackCommandHandler,e);function FeedbackCommandHandler(t,n,r,i,o,a){if(n===void 0){n="Feedback from {source}: {message}"}if(r===void 0){r="Got it!"}if(i===void 0){i=null}if(o===void 0){o="feedback"}if(a===void 0){a=null}var s=e.call(this,o,a)||this;s.callback=s.message_cb;s.target=t;s.message=n;s.reply=r;s.error_reply=i;return s}FeedbackCommandHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)};FeedbackCommandHandler.prototype.message_cb=function(e,t){return i(this,void 0,void 0,(function(){var n,r,i,a,s,a;return o(this,(function(o){switch(o.label){case 0:n=t.data["chat"]["chatId"];r=t.data["text"].split(" ");r.shift();i=r.join(" ").trim();if(!i)return[3,4];return[4,e.sendText(this.target,this.message.replace(/\{source\}/i,n).replace(/\{message\}/i,i))];case 1:a=o.sent();if(!a.ok)console.log("Не удалось отправить запрос sendText");if(!(this.reply!=""))return[3,3];return[4,e.sendText(n,this.reply)];case 2:s=o.sent();if(!s.ok)console.log("Не удалось отправить запрос sendText");o.label=3;case 3:return[3,6];case 4:if(!(this.error_reply!=""))return[3,6];return[4,e.sendText(n,this.error_reply)];case 5:a=o.sent();if(!a.ok)console.log("Не удалось отправить запрос sendText");o.label=6;case 6:return[2]}}))}))};return FeedbackCommandHandler}(v);t.FeedbackCommandHandler=F;var I=function(e){r(UnknownCommandHandler,e);function UnknownCommandHandler(t,n){return e.call(this,null,t,n)||this}UnknownCommandHandler.prototype.check=function(t,n){var r=this;return e.prototype.check.call(this,t,n)&&n.handlers.findIndex((function(e){return e!=r&&e.check(t,n)}))==-1};UnknownCommandHandler.prototype.handle=function(t,n){e.prototype.handle.call(this,t,n);throw new Error("UnknownCommandHandler")};return UnknownCommandHandler}(v);t.UnknownCommandHandler=I;var M=function(e){r(BotButtonCommandHandler,e);function BotButtonCommandHandler(){return e!==null&&e.apply(this,arguments)||this}BotButtonCommandHandler.prototype.check=function(t,n){return e.prototype.check.call(this,t,n)&&t.type==s.EventType.CALLBACK_QUERY};return BotButtonCommandHandler}(u);t.BotButtonCommandHandler=M},747:e=>{e.exports=require("fs")},211:e=>{e.exports=require("https")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},835:e=>{e.exports=require("url")}};var t={};function __nccwpck_require__(n){var r=t[n];if(r!==undefined){return r.exports}var i=t[n]={exports:{}};var o=true;try{e[n].call(i.exports,i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[n]}return i.exports}(()=>{__nccwpck_require__.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;__nccwpck_require__.d(t,{a:t});return t}})();(()=>{__nccwpck_require__.d=(e,t)=>{for(var n in t){if(__nccwpck_require__.o(t,n)&&!__nccwpck_require__.o(e,n)){Object.defineProperty(e,n,{enumerable:true,get:t[n]})}}}})();(()=>{__nccwpck_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})();(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var n={};(()=>{__nccwpck_require__.r(n);__nccwpck_require__.d(n,{run:()=>run});var e=__nccwpck_require__(186);var t=__nccwpck_require__.n(e);var r=__nccwpck_require__(747);var i=__nccwpck_require__.n(r);var o=__nccwpck_require__(123);const a="token";const s="to";const l="message";const u="file";const run=async(t=e.getInput,n=e.setFailed)=>{try{const e=t(a);const n=new o.Z.Bot(e);const r=t(s);const p=t(l);if(p){n.sendText(r,p)}const c=t(u);if(c){if(!i().existsSync(c)){throw new Error(`File ${c} doesn't exist`)}n.sendFile(r,Buffer.from(c).toString("base64"),c)}}catch(e){n(e.message)}};run()})();module.exports=n})();