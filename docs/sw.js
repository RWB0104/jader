if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/jader/_next/static/QUulSuMgb160KyvCGA_OH/_buildManifest.js",revision:"00e5e0d457e9626e90ee790612ee63db"},{url:"/jader/_next/static/QUulSuMgb160KyvCGA_OH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/jader/_next/static/chunks/154-d4d8c4a9bcbc8896.js",revision:"d4d8c4a9bcbc8896"},{url:"/jader/_next/static/chunks/246.c512f226bbc6e992.js",revision:"c512f226bbc6e992"},{url:"/jader/_next/static/chunks/249-d28e59838fdf7f28.js",revision:"d28e59838fdf7f28"},{url:"/jader/_next/static/chunks/293-9288474dac25c047.js",revision:"9288474dac25c047"},{url:"/jader/_next/static/chunks/335-9e0bd869f8d57518.js",revision:"9e0bd869f8d57518"},{url:"/jader/_next/static/chunks/338-fce2c37f9d2aef96.js",revision:"fce2c37f9d2aef96"},{url:"/jader/_next/static/chunks/444-09c242a46813120c.js",revision:"09c242a46813120c"},{url:"/jader/_next/static/chunks/536-292b26d70bac48c9.js",revision:"292b26d70bac48c9"},{url:"/jader/_next/static/chunks/691-774241899315f56f.js",revision:"774241899315f56f"},{url:"/jader/_next/static/chunks/719-f025dbf7ce60bf2e.js",revision:"f025dbf7ce60bf2e"},{url:"/jader/_next/static/chunks/742-8e8e2b19cfd3fd7c.js",revision:"8e8e2b19cfd3fd7c"},{url:"/jader/_next/static/chunks/89-8eb1ce8a9ca798b6.js",revision:"8eb1ce8a9ca798b6"},{url:"/jader/_next/static/chunks/ea88be26-724f615b8feda31e.js",revision:"724f615b8feda31e"},{url:"/jader/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/jader/_next/static/chunks/main-ed48ace433100219.js",revision:"ed48ace433100219"},{url:"/jader/_next/static/chunks/pages/_app-4a6269c7909542a4.js",revision:"4a6269c7909542a4"},{url:"/jader/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/jader/_next/static/chunks/pages/about-8c734ac3232b20e9.js",revision:"8c734ac3232b20e9"},{url:"/jader/_next/static/chunks/pages/calendar-86764bd7cdec5bbe.js",revision:"86764bd7cdec5bbe"},{url:"/jader/_next/static/chunks/pages/form/homeworking-76b074f66e63deb3.js",revision:"76b074f66e63deb3"},{url:"/jader/_next/static/chunks/pages/form/overtime-d1cfa2fd004fc84e.js",revision:"d1cfa2fd004fc84e"},{url:"/jader/_next/static/chunks/pages/form/worktime-d00c8abd7aca3aa9.js",revision:"d00c8abd7aca3aa9"},{url:"/jader/_next/static/chunks/pages/index-5b53531b939efb90.js",revision:"5b53531b939efb90"},{url:"/jader/_next/static/chunks/pages/login-3a51833fd238ec85.js",revision:"3a51833fd238ec85"},{url:"/jader/_next/static/chunks/pages/logout-1d0c8a1926459940.js",revision:"1d0c8a1926459940"},{url:"/jader/_next/static/chunks/pages/mypage-2017cf4c22779603.js",revision:"2017cf4c22779603"},{url:"/jader/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/jader/_next/static/chunks/webpack-4a2c4f1a44442d49.js",revision:"4a2c4f1a44442d49"},{url:"/jader/_next/static/css/2af7ee0e7302fc23.css",revision:"2af7ee0e7302fc23"},{url:"/jader/_next/static/css/413fee53a253d029.css",revision:"413fee53a253d029"},{url:"/jader/assets/icon/icon-192x192.png",revision:"0f77e573c0b1079843b753f190a15d34"},{url:"/jader/assets/icon/icon-256x256.png",revision:"e98a2a02023a7939e8dfb23e094f279b"},{url:"/jader/assets/icon/icon-384x384.png",revision:"314db84465a0bdc5242cfb8b370db1fc"},{url:"/jader/assets/icon/icon-512x512.png",revision:"ed97ed66541522ce2bffa7fee88944e5"},{url:"/jader/assets/images/google.png",revision:"e1c33342d5bcb0852fd908aa4dae9e67"},{url:"/jader/assets/images/jadehr.png",revision:"fe3dac8b5731774ad0a646f0dfbcfa87"},{url:"/jader/assets/images/jader.png",revision:"dfb9ca0ed0d482e9f88133e5d8789e7b"},{url:"/jader/assets/images/jader_transparent.png",revision:"1f254cacddabbcfbe476b82b5e4892b5"},{url:"/jader/assets/images/jader_transparent_logo.png",revision:"056b2644bdb071c082aad9dcba5bf506"},{url:"/jader/assets/images/rsquare.png",revision:"5a33e86812fe7106018118af38e163ea"},{url:"/jader/favicon.ico",revision:"5253e360cad887e8bc91bb53e6fb6d15"},{url:"/jader/manifest.json",revision:"cd4db0947cd7c485c1ae78f61fc33451"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/jader",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
