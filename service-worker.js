"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-atlas-graphics/index.html","70abf4750420c687790a129b70468caa"],["/react-atlas-graphics/static/css/main.dd29aac8.css","1fcd4be97b4f68660cff367544e3864e"],["/react-atlas-graphics/static/js/main.d61849fd.js","25b76acb4647f2a5bf483ad268595ba5"],["/react-atlas-graphics/static/media/band_label.3dd2c3b4.svg","3dd2c3b456b39330ec77260d4dce09fd"],["/react-atlas-graphics/static/media/bluepath-01.23a60f8e.svg","23a60f8eab58f9801c3c1d7aa677c8cf"],["/react-atlas-graphics/static/media/bluepath_interior.8ff323f1.svg","8ff323f14f565660e682df3a25480862"],["/react-atlas-graphics/static/media/gap_label.964bfdd6.svg","964bfdd643bfac3c9abf4e201411eb2c"],["/react-atlas-graphics/static/media/graph-01.1b514e45.svg","1b514e45ee77f58e8ddea68c11cd835d"],["/react-atlas-graphics/static/media/graph_back-01.27349afe.svg","27349afee6243b9bd9acece12692a182"],["/react-atlas-graphics/static/media/greenpath.afbe8891.svg","afbe8891e2f2b2fd5cb61856ad06aa4e"],["/react-atlas-graphics/static/media/greenpath_interior.b2c7005d.svg","b2c7005d73729cbbec4ff838d25dadb5"],["/react-atlas-graphics/static/media/labels.0d46173c.svg","0d46173c76a38b4176a676d51f698a1e"],["/react-atlas-graphics/static/media/mask-01.59ee6229.svg","59ee62291bdd8b777aed3e8629d8562d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/react-atlas-graphics/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});