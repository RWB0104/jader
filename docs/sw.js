if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/jader/_next/static/chunks/102-eb92ff899501f5c7.js",revision:"eb92ff899501f5c7"},{url:"/jader/_next/static/chunks/127-dd8419df8713548d.js",revision:"dd8419df8713548d"},{url:"/jader/_next/static/chunks/246.c512f226bbc6e992.js",revision:"c512f226bbc6e992"},{url:"/jader/_next/static/chunks/260-1eaa48bb3999a30a.js",revision:"1eaa48bb3999a30a"},{url:"/jader/_next/static/chunks/338-9096ecfbb5a014f4.js",revision:"9096ecfbb5a014f4"},{url:"/jader/_next/static/chunks/355-b2b092594fed79e0.js",revision:"b2b092594fed79e0"},{url:"/jader/_next/static/chunks/432-a678f4c7d997e6b8.js",revision:"a678f4c7d997e6b8"},{url:"/jader/_next/static/chunks/438-3a397ddcc4df6afc.js",revision:"3a397ddcc4df6afc"},{url:"/jader/_next/static/chunks/536-cb1eb0f195230274.js",revision:"cb1eb0f195230274"},{url:"/jader/_next/static/chunks/55-517d747f520daef1.js",revision:"517d747f520daef1"},{url:"/jader/_next/static/chunks/595-71801fc56e1777e7.js",revision:"71801fc56e1777e7"},{url:"/jader/_next/static/chunks/60-fe5b82b2edac4b74.js",revision:"fe5b82b2edac4b74"},{url:"/jader/_next/static/chunks/633-af2f22e240689f0e.js",revision:"af2f22e240689f0e"},{url:"/jader/_next/static/chunks/664-8a0c5995ce53209d.js",revision:"8a0c5995ce53209d"},{url:"/jader/_next/static/chunks/928-519ab8c8e3f11f7f.js",revision:"519ab8c8e3f11f7f"},{url:"/jader/_next/static/chunks/957-b9598212bb573470.js",revision:"b9598212bb573470"},{url:"/jader/_next/static/chunks/ea88be26-724f615b8feda31e.js",revision:"724f615b8feda31e"},{url:"/jader/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/jader/_next/static/chunks/main-ed48ace433100219.js",revision:"ed48ace433100219"},{url:"/jader/_next/static/chunks/pages/_app-84f9182e25aa752e.js",revision:"84f9182e25aa752e"},{url:"/jader/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/jader/_next/static/chunks/pages/about-5f2fec0e7cfb7a20.js",revision:"5f2fec0e7cfb7a20"},{url:"/jader/_next/static/chunks/pages/calendar-9dbddb7927ee8cc0.js",revision:"9dbddb7927ee8cc0"},{url:"/jader/_next/static/chunks/pages/form-4155a211759ad96e.js",revision:"4155a211759ad96e"},{url:"/jader/_next/static/chunks/pages/form/homeworking-63228c5b1690fcd7.js",revision:"63228c5b1690fcd7"},{url:"/jader/_next/static/chunks/pages/form/overtime-d947370165bc312f.js",revision:"d947370165bc312f"},{url:"/jader/_next/static/chunks/pages/form/vacation-0284a63567770d9d.js",revision:"0284a63567770d9d"},{url:"/jader/_next/static/chunks/pages/form/worktime-a292ab869b80c013.js",revision:"a292ab869b80c013"},{url:"/jader/_next/static/chunks/pages/home-70605889b46e45d2.js",revision:"70605889b46e45d2"},{url:"/jader/_next/static/chunks/pages/index-09e6eff2b3dbc5fe.js",revision:"09e6eff2b3dbc5fe"},{url:"/jader/_next/static/chunks/pages/logout-9bc579101e2af905.js",revision:"9bc579101e2af905"},{url:"/jader/_next/static/chunks/pages/mypage-8ee57d0c81adf607.js",revision:"8ee57d0c81adf607"},{url:"/jader/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/jader/_next/static/chunks/webpack-a92e4a00d6287c2a.js",revision:"a92e4a00d6287c2a"},{url:"/jader/_next/static/css/2af7ee0e7302fc23.css",revision:"2af7ee0e7302fc23"},{url:"/jader/_next/static/css/413fee53a253d029.css",revision:"413fee53a253d029"},{url:"/jader/_next/static/mHxod6lE63cxTLKywy1sK/_buildManifest.js",revision:"18f7c6c11b9e9462a5580346bfa1ae96"},{url:"/jader/_next/static/mHxod6lE63cxTLKywy1sK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/jader/assets/icon/icon-192x192.png",revision:"0f77e573c0b1079843b753f190a15d34"},{url:"/jader/assets/icon/icon-256x256.png",revision:"e98a2a02023a7939e8dfb23e094f279b"},{url:"/jader/assets/icon/icon-384x384.png",revision:"314db84465a0bdc5242cfb8b370db1fc"},{url:"/jader/assets/icon/icon-512x512.png",revision:"ed97ed66541522ce2bffa7fee88944e5"},{url:"/jader/assets/images/google.png",revision:"e1c33342d5bcb0852fd908aa4dae9e67"},{url:"/jader/assets/images/jadehr.png",revision:"fe3dac8b5731774ad0a646f0dfbcfa87"},{url:"/jader/assets/images/jader.png",revision:"dfb9ca0ed0d482e9f88133e5d8789e7b"},{url:"/jader/assets/images/jader_transparent.png",revision:"1f254cacddabbcfbe476b82b5e4892b5"},{url:"/jader/assets/images/jader_transparent_logo.png",revision:"056b2644bdb071c082aad9dcba5bf506"},{url:"/jader/assets/images/rsquare.png",revision:"5a33e86812fe7106018118af38e163ea"},{url:"/jader/favicon.ico",revision:"5253e360cad887e8bc91bb53e6fb6d15"},{url:"/jader/manifest.json",revision:"cd4db0947cd7c485c1ae78f61fc33451"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/jader",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
