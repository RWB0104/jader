if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-e739d0df"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/jader/_next/static/chunks/129-892bc0b48b224a0b.js",revision:"892bc0b48b224a0b"},{url:"/jader/_next/static/chunks/149-3d2646bdb5bf7726.js",revision:"3d2646bdb5bf7726"},{url:"/jader/_next/static/chunks/384-2117469078db3f4e.js",revision:"2117469078db3f4e"},{url:"/jader/_next/static/chunks/447-0d4734e046f9faac.js",revision:"0d4734e046f9faac"},{url:"/jader/_next/static/chunks/466.4a951dc057743c7e.js",revision:"4a951dc057743c7e"},{url:"/jader/_next/static/chunks/47-7dd9d0df1cd60385.js",revision:"7dd9d0df1cd60385"},{url:"/jader/_next/static/chunks/479-35aa76393e7408f1.js",revision:"35aa76393e7408f1"},{url:"/jader/_next/static/chunks/49-3088fe1acd7ff9ea.js",revision:"3088fe1acd7ff9ea"},{url:"/jader/_next/static/chunks/693-395a0ad5630ac073.js",revision:"395a0ad5630ac073"},{url:"/jader/_next/static/chunks/812-4390953e93587cf4.js",revision:"4390953e93587cf4"},{url:"/jader/_next/static/chunks/813-13db55443a1e7bdc.js",revision:"13db55443a1e7bdc"},{url:"/jader/_next/static/chunks/853-9e084af1f41c8715.js",revision:"9e084af1f41c8715"},{url:"/jader/_next/static/chunks/891-a409cf646f1813fb.js",revision:"a409cf646f1813fb"},{url:"/jader/_next/static/chunks/901-62af9e5079cc99db.js",revision:"62af9e5079cc99db"},{url:"/jader/_next/static/chunks/907-db0e872e6b6bd505.js",revision:"db0e872e6b6bd505"},{url:"/jader/_next/static/chunks/950-b6eb9f4cadcbbfc7.js",revision:"b6eb9f4cadcbbfc7"},{url:"/jader/_next/static/chunks/955-c7c59409ea0365f5.js",revision:"c7c59409ea0365f5"},{url:"/jader/_next/static/chunks/ffcab572-2548e1c89a2bf1e0.js",revision:"2548e1c89a2bf1e0"},{url:"/jader/_next/static/chunks/framework-899b97ce0f56e8da.js",revision:"899b97ce0f56e8da"},{url:"/jader/_next/static/chunks/main-cfb21b9247e8aef8.js",revision:"cfb21b9247e8aef8"},{url:"/jader/_next/static/chunks/pages/404-fe48fa48e1c9af92.js",revision:"fe48fa48e1c9af92"},{url:"/jader/_next/static/chunks/pages/_app-ad327b0e76db2d00.js",revision:"ad327b0e76db2d00"},{url:"/jader/_next/static/chunks/pages/_error-e8d9332b27d19144.js",revision:"e8d9332b27d19144"},{url:"/jader/_next/static/chunks/pages/about-276b33524b8d8a2b.js",revision:"276b33524b8d8a2b"},{url:"/jader/_next/static/chunks/pages/calendar-fb8c1590be64fde1.js",revision:"fb8c1590be64fde1"},{url:"/jader/_next/static/chunks/pages/form-4cfd59bd9b9600e9.js",revision:"4cfd59bd9b9600e9"},{url:"/jader/_next/static/chunks/pages/form/homeworking-ef242f5e76a155cc.js",revision:"ef242f5e76a155cc"},{url:"/jader/_next/static/chunks/pages/form/overtime-d71345d5b1bba983.js",revision:"d71345d5b1bba983"},{url:"/jader/_next/static/chunks/pages/form/vacation-f85e582dfa55a877.js",revision:"f85e582dfa55a877"},{url:"/jader/_next/static/chunks/pages/form/worktime-adb2ab4bc9fec41d.js",revision:"adb2ab4bc9fec41d"},{url:"/jader/_next/static/chunks/pages/home-71447eaadc3cb918.js",revision:"71447eaadc3cb918"},{url:"/jader/_next/static/chunks/pages/index-d03509c77cdd87af.js",revision:"d03509c77cdd87af"},{url:"/jader/_next/static/chunks/pages/logout-bf7932e45f646484.js",revision:"bf7932e45f646484"},{url:"/jader/_next/static/chunks/pages/mypage-9d588f92dbf7522a.js",revision:"9d588f92dbf7522a"},{url:"/jader/_next/static/chunks/pages/notice-5c3ea5e78cda8cec.js",revision:"5c3ea5e78cda8cec"},{url:"/jader/_next/static/chunks/pages/schedule-169ee1239cbb46e1.js",revision:"169ee1239cbb46e1"},{url:"/jader/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/jader/_next/static/chunks/webpack-56f9f8f451ba4def.js",revision:"56f9f8f451ba4def"},{url:"/jader/_next/static/css/5eb740241368d487.css",revision:"5eb740241368d487"},{url:"/jader/_next/static/css/72c3b5f3e0ff6c76.css",revision:"72c3b5f3e0ff6c76"},{url:"/jader/_next/static/css/ad573b7165d2ac29.css",revision:"ad573b7165d2ac29"},{url:"/jader/_next/static/uhM2UAtbgx7jIcpU_kGRc/_buildManifest.js",revision:"1d0051b92a7afd8223c045ad55c204ca"},{url:"/jader/_next/static/uhM2UAtbgx7jIcpU_kGRc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/jader/assets/icon/icon-192x192.png",revision:"0f77e573c0b1079843b753f190a15d34"},{url:"/jader/assets/icon/icon-256x256.png",revision:"e98a2a02023a7939e8dfb23e094f279b"},{url:"/jader/assets/icon/icon-384x384.png",revision:"314db84465a0bdc5242cfb8b370db1fc"},{url:"/jader/assets/icon/icon-512x512.png",revision:"ed97ed66541522ce2bffa7fee88944e5"},{url:"/jader/assets/images/google.png",revision:"e1c33342d5bcb0852fd908aa4dae9e67"},{url:"/jader/assets/images/jadehr.png",revision:"fe3dac8b5731774ad0a646f0dfbcfa87"},{url:"/jader/assets/images/jader.png",revision:"dfb9ca0ed0d482e9f88133e5d8789e7b"},{url:"/jader/assets/images/jader_transparent.png",revision:"1f254cacddabbcfbe476b82b5e4892b5"},{url:"/jader/assets/images/jader_transparent_logo.png",revision:"056b2644bdb071c082aad9dcba5bf506"},{url:"/jader/assets/images/rsquare.png",revision:"5a33e86812fe7106018118af38e163ea"},{url:"/jader/assets/video/banner.mp4",revision:"379e3485d0811d9e5f6f12a0d56fcd21"},{url:"/jader/favicon.ico",revision:"5253e360cad887e8bc91bb53e6fb6d15"},{url:"/jader/manifest.json",revision:"33bf6dfc0e9c7924da1c640c017a2aa2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/jader",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
