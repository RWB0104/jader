if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-e739d0df"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/jader/_next/static/chunks/133-f71be6ff0193391d.js",revision:"f71be6ff0193391d"},{url:"/jader/_next/static/chunks/149-bac582b636401b1d.js",revision:"bac582b636401b1d"},{url:"/jader/_next/static/chunks/233-a01b4ff0c84fcf78.js",revision:"a01b4ff0c84fcf78"},{url:"/jader/_next/static/chunks/281-d84998f457928003.js",revision:"d84998f457928003"},{url:"/jader/_next/static/chunks/291-a4da56def2ca18db.js",revision:"a4da56def2ca18db"},{url:"/jader/_next/static/chunks/306-5b88cb4656e20a01.js",revision:"5b88cb4656e20a01"},{url:"/jader/_next/static/chunks/309-c2375bd2c74bdb99.js",revision:"c2375bd2c74bdb99"},{url:"/jader/_next/static/chunks/384-dc063f287a0fc066.js",revision:"dc063f287a0fc066"},{url:"/jader/_next/static/chunks/43-414c300a60ef06c8.js",revision:"414c300a60ef06c8"},{url:"/jader/_next/static/chunks/466.e3b66ed6dc657e2a.js",revision:"e3b66ed6dc657e2a"},{url:"/jader/_next/static/chunks/47-881d44c5a93128e6.js",revision:"881d44c5a93128e6"},{url:"/jader/_next/static/chunks/479-edb8cd54a0a770b6.js",revision:"edb8cd54a0a770b6"},{url:"/jader/_next/static/chunks/640-45c09ca339e2e42a.js",revision:"45c09ca339e2e42a"},{url:"/jader/_next/static/chunks/693-5df620e96c2f916c.js",revision:"5df620e96c2f916c"},{url:"/jader/_next/static/chunks/812-62741cf2501efe0d.js",revision:"62741cf2501efe0d"},{url:"/jader/_next/static/chunks/813-08bf651809d7c81f.js",revision:"08bf651809d7c81f"},{url:"/jader/_next/static/chunks/853-f8bea01270a9b4c6.js",revision:"f8bea01270a9b4c6"},{url:"/jader/_next/static/chunks/891-b829efa500642c8d.js",revision:"b829efa500642c8d"},{url:"/jader/_next/static/chunks/901-0c2b2a25c32aeb76.js",revision:"0c2b2a25c32aeb76"},{url:"/jader/_next/static/chunks/907-fe787a412fbec3ad.js",revision:"fe787a412fbec3ad"},{url:"/jader/_next/static/chunks/955-a771c0638de795f3.js",revision:"a771c0638de795f3"},{url:"/jader/_next/static/chunks/ffcab572-058b5edf36578d84.js",revision:"058b5edf36578d84"},{url:"/jader/_next/static/chunks/framework-d0ce2332a86a4420.js",revision:"d0ce2332a86a4420"},{url:"/jader/_next/static/chunks/main-d64ba8d27c6321dc.js",revision:"d64ba8d27c6321dc"},{url:"/jader/_next/static/chunks/pages/404-85fdb459d763badd.js",revision:"85fdb459d763badd"},{url:"/jader/_next/static/chunks/pages/_app-54eb64b089f90a62.js",revision:"54eb64b089f90a62"},{url:"/jader/_next/static/chunks/pages/_error-4fa0df1d85f7f008.js",revision:"4fa0df1d85f7f008"},{url:"/jader/_next/static/chunks/pages/about-c9f03f9615458af9.js",revision:"c9f03f9615458af9"},{url:"/jader/_next/static/chunks/pages/admin/log-52acc80b96c11ced.js",revision:"52acc80b96c11ced"},{url:"/jader/_next/static/chunks/pages/calendar-60fc24a6491199df.js",revision:"60fc24a6491199df"},{url:"/jader/_next/static/chunks/pages/comment-c6073792fde5cc3a.js",revision:"c6073792fde5cc3a"},{url:"/jader/_next/static/chunks/pages/form-828a3aebf8986632.js",revision:"828a3aebf8986632"},{url:"/jader/_next/static/chunks/pages/form/homeworking-4a8defd6f8056a88.js",revision:"4a8defd6f8056a88"},{url:"/jader/_next/static/chunks/pages/form/overtime-3c4446a34db337c3.js",revision:"3c4446a34db337c3"},{url:"/jader/_next/static/chunks/pages/form/vacation-771831f511b6ec04.js",revision:"771831f511b6ec04"},{url:"/jader/_next/static/chunks/pages/form/worktime-6f135b2ba266d7c6.js",revision:"6f135b2ba266d7c6"},{url:"/jader/_next/static/chunks/pages/home-60abb171ac54e125.js",revision:"60abb171ac54e125"},{url:"/jader/_next/static/chunks/pages/index-ef515b706aa01e45.js",revision:"ef515b706aa01e45"},{url:"/jader/_next/static/chunks/pages/logout-f7f1710b6d8ddefc.js",revision:"f7f1710b6d8ddefc"},{url:"/jader/_next/static/chunks/pages/mypage-16ab7701d50e2357.js",revision:"16ab7701d50e2357"},{url:"/jader/_next/static/chunks/pages/notice-b890e1e6fdaa2de0.js",revision:"b890e1e6fdaa2de0"},{url:"/jader/_next/static/chunks/pages/schedule-8a4e4bb87657ee16.js",revision:"8a4e4bb87657ee16"},{url:"/jader/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/jader/_next/static/chunks/webpack-9fc295f1a887f4f2.js",revision:"9fc295f1a887f4f2"},{url:"/jader/_next/static/css/5eb740241368d487.css",revision:"5eb740241368d487"},{url:"/jader/_next/static/css/72c3b5f3e0ff6c76.css",revision:"72c3b5f3e0ff6c76"},{url:"/jader/_next/static/css/ad573b7165d2ac29.css",revision:"ad573b7165d2ac29"},{url:"/jader/_next/static/kiLGTCU5_57Cxq_a5IWKA/_buildManifest.js",revision:"da52746dcf723b6d2d89c4af4a9a7380"},{url:"/jader/_next/static/kiLGTCU5_57Cxq_a5IWKA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/jader/assets/icon/icon-192x192.png",revision:"0f77e573c0b1079843b753f190a15d34"},{url:"/jader/assets/icon/icon-256x256.png",revision:"e98a2a02023a7939e8dfb23e094f279b"},{url:"/jader/assets/icon/icon-384x384.png",revision:"314db84465a0bdc5242cfb8b370db1fc"},{url:"/jader/assets/icon/icon-512x512.png",revision:"ed97ed66541522ce2bffa7fee88944e5"},{url:"/jader/assets/images/google.png",revision:"e1c33342d5bcb0852fd908aa4dae9e67"},{url:"/jader/assets/images/jadehr.png",revision:"fe3dac8b5731774ad0a646f0dfbcfa87"},{url:"/jader/assets/images/jader.png",revision:"dfb9ca0ed0d482e9f88133e5d8789e7b"},{url:"/jader/assets/images/jader_transparent.png",revision:"1f254cacddabbcfbe476b82b5e4892b5"},{url:"/jader/assets/images/jader_transparent_logo.png",revision:"056b2644bdb071c082aad9dcba5bf506"},{url:"/jader/assets/images/rsquare.png",revision:"5a33e86812fe7106018118af38e163ea"},{url:"/jader/assets/video/banner.mp4",revision:"379e3485d0811d9e5f6f12a0d56fcd21"},{url:"/jader/favicon.ico",revision:"5253e360cad887e8bc91bb53e6fb6d15"},{url:"/jader/manifest.json",revision:"33bf6dfc0e9c7924da1c640c017a2aa2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/jader",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
