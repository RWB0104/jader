if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),d={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/jader/_next/static/Mb6ZrAwo8y7npoNVRojQz/_buildManifest.js",revision:"a96c9cea3aa4d0a557dd5a22caa1a60d"},{url:"/jader/_next/static/Mb6ZrAwo8y7npoNVRojQz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/jader/_next/static/chunks/19-6bc00ac9c4d09ebf.js",revision:"6bc00ac9c4d09ebf"},{url:"/jader/_next/static/chunks/353-f516ebd34b163eae.js",revision:"f516ebd34b163eae"},{url:"/jader/_next/static/chunks/515-10201f58a8b3b61b.js",revision:"10201f58a8b3b61b"},{url:"/jader/_next/static/chunks/80-6beceb1f5d3620e1.js",revision:"6beceb1f5d3620e1"},{url:"/jader/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/jader/_next/static/chunks/main-ed48ace433100219.js",revision:"ed48ace433100219"},{url:"/jader/_next/static/chunks/pages/_app-b1c5b4347e783617.js",revision:"b1c5b4347e783617"},{url:"/jader/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/jader/_next/static/chunks/pages/about-5465df4b99efed71.js",revision:"5465df4b99efed71"},{url:"/jader/_next/static/chunks/pages/calendar-7c95e7759d033971.js",revision:"7c95e7759d033971"},{url:"/jader/_next/static/chunks/pages/form/homeworking-0775304be697bed7.js",revision:"0775304be697bed7"},{url:"/jader/_next/static/chunks/pages/form/overtime-7a2f74a92b78353a.js",revision:"7a2f74a92b78353a"},{url:"/jader/_next/static/chunks/pages/form/worktime-5829370df1436d57.js",revision:"5829370df1436d57"},{url:"/jader/_next/static/chunks/pages/index-c7a1d28e9b1e08d1.js",revision:"c7a1d28e9b1e08d1"},{url:"/jader/_next/static/chunks/pages/login-2a3901828bb9a984.js",revision:"2a3901828bb9a984"},{url:"/jader/_next/static/chunks/pages/login/callback-5c240d56474d7997.js",revision:"5c240d56474d7997"},{url:"/jader/_next/static/chunks/pages/logout-386545edf08b6574.js",revision:"386545edf08b6574"},{url:"/jader/_next/static/chunks/pages/mypage-d84d2904c623511f.js",revision:"d84d2904c623511f"},{url:"/jader/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/jader/_next/static/chunks/webpack-5dfb61ef188bf32f.js",revision:"5dfb61ef188bf32f"},{url:"/jader/_next/static/css/79e9c6c41c4a9f11.css",revision:"79e9c6c41c4a9f11"},{url:"/jader/assets/images/google.png",revision:"e1c33342d5bcb0852fd908aa4dae9e67"},{url:"/jader/assets/images/jadehr.png",revision:"fe3dac8b5731774ad0a646f0dfbcfa87"},{url:"/jader/assets/images/jader.png",revision:"dfb9ca0ed0d482e9f88133e5d8789e7b"},{url:"/jader/assets/images/jader_transparent.png",revision:"1f254cacddabbcfbe476b82b5e4892b5"},{url:"/jader/assets/images/rsquare.png",revision:"5a33e86812fe7106018118af38e163ea"},{url:"/jader/favicon.ico",revision:"5253e360cad887e8bc91bb53e6fb6d15"},{url:"/jader/icon-192x192.png",revision:"0f77e573c0b1079843b753f190a15d34"},{url:"/jader/icon-256x256.png",revision:"e98a2a02023a7939e8dfb23e094f279b"},{url:"/jader/icon-384x384.png",revision:"314db84465a0bdc5242cfb8b370db1fc"},{url:"/jader/icon-512x512.png",revision:"ed97ed66541522ce2bffa7fee88944e5"},{url:"/jader/manifest.json",revision:"36bfff75d995b7c096bc3307310b2daf"},{url:"/jader/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/jader",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
