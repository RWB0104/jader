if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/jader/_next/static/chunks/132-1c7b151dfd0cef11.js",revision:"1c7b151dfd0cef11"},{url:"/jader/_next/static/chunks/135-bc727ebaf0082588.js",revision:"bc727ebaf0082588"},{url:"/jader/_next/static/chunks/163-deed4b4cb5d6dc78.js",revision:"deed4b4cb5d6dc78"},{url:"/jader/_next/static/chunks/227-091cee023f0f7d1e.js",revision:"091cee023f0f7d1e"},{url:"/jader/_next/static/chunks/246.c512f226bbc6e992.js",revision:"c512f226bbc6e992"},{url:"/jader/_next/static/chunks/260-1eaa48bb3999a30a.js",revision:"1eaa48bb3999a30a"},{url:"/jader/_next/static/chunks/273-f9b51e59cac0a6da.js",revision:"f9b51e59cac0a6da"},{url:"/jader/_next/static/chunks/437-0bcbd6a3a1b7b974.js",revision:"0bcbd6a3a1b7b974"},{url:"/jader/_next/static/chunks/536-cb1eb0f195230274.js",revision:"cb1eb0f195230274"},{url:"/jader/_next/static/chunks/57-1bd9304e1179affa.js",revision:"1bd9304e1179affa"},{url:"/jader/_next/static/chunks/580-19d2012a6bfdcbc8.js",revision:"19d2012a6bfdcbc8"},{url:"/jader/_next/static/chunks/633-af2f22e240689f0e.js",revision:"af2f22e240689f0e"},{url:"/jader/_next/static/chunks/664-e432d276bc67604d.js",revision:"e432d276bc67604d"},{url:"/jader/_next/static/chunks/743-64d408e1c3222e5c.js",revision:"64d408e1c3222e5c"},{url:"/jader/_next/static/chunks/836-66188d35f7c0cf77.js",revision:"66188d35f7c0cf77"},{url:"/jader/_next/static/chunks/849-ee4c602e8ec11b21.js",revision:"ee4c602e8ec11b21"},{url:"/jader/_next/static/chunks/893-27eea731ab1b7b99.js",revision:"27eea731ab1b7b99"},{url:"/jader/_next/static/chunks/ea88be26-724f615b8feda31e.js",revision:"724f615b8feda31e"},{url:"/jader/_next/static/chunks/framework-7eda0b6eb712f2fd.js",revision:"7eda0b6eb712f2fd"},{url:"/jader/_next/static/chunks/main-ed48ace433100219.js",revision:"ed48ace433100219"},{url:"/jader/_next/static/chunks/pages/404-35611a61c62b6ae3.js",revision:"35611a61c62b6ae3"},{url:"/jader/_next/static/chunks/pages/_app-b1821017c3858d10.js",revision:"b1821017c3858d10"},{url:"/jader/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/jader/_next/static/chunks/pages/about-a6e09f6c9bdf192f.js",revision:"a6e09f6c9bdf192f"},{url:"/jader/_next/static/chunks/pages/calendar-f6aed1f8244df4a7.js",revision:"f6aed1f8244df4a7"},{url:"/jader/_next/static/chunks/pages/form-ac4ad4b84e9321ec.js",revision:"ac4ad4b84e9321ec"},{url:"/jader/_next/static/chunks/pages/form/homeworking-b73823e4e5bbdaa3.js",revision:"b73823e4e5bbdaa3"},{url:"/jader/_next/static/chunks/pages/form/overtime-b5e0feb09f0e4bf8.js",revision:"b5e0feb09f0e4bf8"},{url:"/jader/_next/static/chunks/pages/form/vacation-540b7c1837b0c9de.js",revision:"540b7c1837b0c9de"},{url:"/jader/_next/static/chunks/pages/form/worktime-afce09d4f145c077.js",revision:"afce09d4f145c077"},{url:"/jader/_next/static/chunks/pages/home-b7b3983fe45020b6.js",revision:"b7b3983fe45020b6"},{url:"/jader/_next/static/chunks/pages/index-ddc78d68063c7f35.js",revision:"ddc78d68063c7f35"},{url:"/jader/_next/static/chunks/pages/logout-e0a3302f0b4189c1.js",revision:"e0a3302f0b4189c1"},{url:"/jader/_next/static/chunks/pages/mypage-4204c481d4d094eb.js",revision:"4204c481d4d094eb"},{url:"/jader/_next/static/chunks/pages/notice-5aa686152cfb0e0b.js",revision:"5aa686152cfb0e0b"},{url:"/jader/_next/static/chunks/pages/schedule-4d5547ba70a276fc.js",revision:"4d5547ba70a276fc"},{url:"/jader/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/jader/_next/static/chunks/webpack-5329b02d3352c7d5.js",revision:"5329b02d3352c7d5"},{url:"/jader/_next/static/css/5eb740241368d487.css",revision:"5eb740241368d487"},{url:"/jader/_next/static/css/72c3b5f3e0ff6c76.css",revision:"72c3b5f3e0ff6c76"},{url:"/jader/_next/static/css/ad573b7165d2ac29.css",revision:"ad573b7165d2ac29"},{url:"/jader/_next/static/omxBg2ZDYc2wY8DKTueQx/_buildManifest.js",revision:"31151d8e102f44aea215d913054d6844"},{url:"/jader/_next/static/omxBg2ZDYc2wY8DKTueQx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/jader/assets/icon/icon-192x192.png",revision:"0f77e573c0b1079843b753f190a15d34"},{url:"/jader/assets/icon/icon-256x256.png",revision:"e98a2a02023a7939e8dfb23e094f279b"},{url:"/jader/assets/icon/icon-384x384.png",revision:"314db84465a0bdc5242cfb8b370db1fc"},{url:"/jader/assets/icon/icon-512x512.png",revision:"ed97ed66541522ce2bffa7fee88944e5"},{url:"/jader/assets/images/google.png",revision:"e1c33342d5bcb0852fd908aa4dae9e67"},{url:"/jader/assets/images/jadehr.png",revision:"fe3dac8b5731774ad0a646f0dfbcfa87"},{url:"/jader/assets/images/jader.png",revision:"dfb9ca0ed0d482e9f88133e5d8789e7b"},{url:"/jader/assets/images/jader_transparent.png",revision:"1f254cacddabbcfbe476b82b5e4892b5"},{url:"/jader/assets/images/jader_transparent_logo.png",revision:"056b2644bdb071c082aad9dcba5bf506"},{url:"/jader/assets/images/rsquare.png",revision:"5a33e86812fe7106018118af38e163ea"},{url:"/jader/assets/video/banner.mp4",revision:"379e3485d0811d9e5f6f12a0d56fcd21"},{url:"/jader/favicon.ico",revision:"5253e360cad887e8bc91bb53e6fb6d15"},{url:"/jader/manifest.json",revision:"33bf6dfc0e9c7924da1c640c017a2aa2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/jader",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
