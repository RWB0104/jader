if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let f={};const r=e=>s(e,c),t={module:{uri:c},exports:f,require:r};a[c]=Promise.all(d.map((e=>t[e]||r(e)))).then((e=>(i(...e),f)))}}define(["./workbox-18bd7a74"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/jader/_next/app-build-manifest.json",revision:"77fc7c3a6aa7524a48a0e060d70e7365"},{url:"/jader/_next/static/Grl09aT7UqHS48GsOuKvh/_buildManifest.js",revision:"a0c2353f868211df7bcee89a0ca6711f"},{url:"/jader/_next/static/Grl09aT7UqHS48GsOuKvh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/jader/_next/static/chunks/1040-7ed36609697ea627.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/1101-1e8f04473a0a196d.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/1511-a8b575db7982170c.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/1687-f835daf76b74e882.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/301b156a-7f12f913bdab0982.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/3028-deec61af204fc831.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/3119-3780020f254a1107.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/3244-4c7500615c79da50.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/326-ca00153ae9a1ffc5.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/3536-574f676b8bf058fe.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/3577-2539b38f556017a9.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/4017-cc808b4fb1b12fd9.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/4766.8006731a0dbd65ca.js",revision:"8006731a0dbd65ca"},{url:"/jader/_next/static/chunks/4786-e0da09a320d3cb98.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/5001-e158231278b6b30d.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/5173-5e1a61aaf0b1dc20.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/5624-b9b174c34e22d529.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/5641-d49710d677d8b6df.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/5748-e9b101404ae4caf1.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/6051-15b597dd283297a5.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/6565-6d9b3345888a1707.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/6615-59040b3339e5cc22.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/7257-17180ec2bdc790f7.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/7316-b0b16d961c0f939e.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/7604-4ed3180456d7182c.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/7e1dae41-2b9e7b804130624e.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/8072-8c2226d136c719f6.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/8802-734af8026ce5fcd7.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/9104-bc83f5a1845e0d50.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/9420-697ab7536ddb5372.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/9497-b1dff45a74f8404a.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/9813-dc2d6bbcf358bfc9.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/9831-0b543726e3f31a7b.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/9982-058a5790aeb2ef56.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/about/page-838772dde3080fd9.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/admin/log/page-b97c4e12452a4318.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/calendar/page-e7fc2859ba1222ba.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/comment/page-03277e4030113ac5.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/form/homeworking/page-9c0393fe6fc4ce34.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/form/overtime/page-4bb89b153a0914a0.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/form/page-e638a178349457a2.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/form/vacation/page-2a45615c377df908.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/form/worktime/page-69396548a3538a8e.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/home/page-37c1bb7f7fab3c55.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/layout-95faa98a74f4963e.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/logout/page-529146e961ae3da6.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/mypage/page-8a6d25d2b23d7b41.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/not-found-9259a8ad2326c383.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/notice/page-c53927359f4981ad.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/page-4cab68110397cd59.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/app/schedule/page-70b61a3b3207fb2c.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/framework-09ffcaf41b15f910.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/main-a08646bbc74871ec.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/main-app-feb2f264aa6376c7.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/pages/_app-8fa3cd755b19c49d.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/pages/_error-1bf1443e04ee2b91.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/jader/_next/static/chunks/webpack-6dfa728afabad3c2.js",revision:"Grl09aT7UqHS48GsOuKvh"},{url:"/jader/_next/static/css/2ec566dc6df177a2.css",revision:"2ec566dc6df177a2"},{url:"/jader/_next/static/css/38aecb2f80fd7035.css",revision:"38aecb2f80fd7035"},{url:"/jader/_next/static/css/4624ddbdfcf9b5bf.css",revision:"4624ddbdfcf9b5bf"},{url:"/jader/_next/static/css/5c5b14f8e0122284.css",revision:"5c5b14f8e0122284"},{url:"/jader/_next/static/css/84656d7b3e8afd8e.css",revision:"84656d7b3e8afd8e"},{url:"/jader/_next/static/css/9511b7467b867ba3.css",revision:"9511b7467b867ba3"},{url:"/jader/_next/static/css/9627676fad88c517.css",revision:"9627676fad88c517"},{url:"/jader/_next/static/css/9b562f313ef83e58.css",revision:"9b562f313ef83e58"},{url:"/jader/_next/static/css/acd04a0b0258816c.css",revision:"acd04a0b0258816c"},{url:"/jader/_next/static/css/b946d6d3e35a45d3.css",revision:"b946d6d3e35a45d3"},{url:"/jader/_next/static/media/01dff4c4ac63a0d3-s.woff2",revision:"4253823e253080c6e5e3387173dd2cb0"},{url:"/jader/_next/static/media/04daeef78f46eb85-s.woff2",revision:"c11694aa9f35392af7513c295a163bc7"},{url:"/jader/_next/static/media/0639b0dfb9b4f4ba-s.woff2",revision:"9600028749cb1538d1cf50468e5fc016"},{url:"/jader/_next/static/media/06eda078e4b64efd-s.woff2",revision:"2c8a2f6881b8a1071fabae3c6dfeee6a"},{url:"/jader/_next/static/media/07fbd97b4d67da99-s.woff2",revision:"e17e6ecd8dbf872bd11f6f950406ebd7"},{url:"/jader/_next/static/media/0deff3f0700f03cc-s.woff2",revision:"7909d1a0ab9b6bb9b65faec71a76d34a"},{url:"/jader/_next/static/media/0fef1a063a793ebf-s.woff2",revision:"e2a2a918b52628e6a9056b27e2d218bf"},{url:"/jader/_next/static/media/10b25f7840b4bc42-s.woff2",revision:"aecd7233bcabe32826590ec94d061483"},{url:"/jader/_next/static/media/1589adf678307552-s.woff2",revision:"ad78bee7c72f09cd006c729936e5c654"},{url:"/jader/_next/static/media/171ed914f8915f61-s.woff2",revision:"fc921cd139b0f7438e31ac03e7220d11"},{url:"/jader/_next/static/media/190cde0e85380b12-s.woff2",revision:"dbe7f40a7f9a49f07636c09dab98f0d8"},{url:"/jader/_next/static/media/192dda636ff5febe-s.woff2",revision:"54af29f0d42f26daf30b97063fbf3412"},{url:"/jader/_next/static/media/1af90c063d4c21f1-s.woff2",revision:"36882b48dc0f6f99b291cd17d1e915eb"},{url:"/jader/_next/static/media/1fb58fba2ed52687-s.woff2",revision:"b673d9c4d442684c71a52ace6143d48c"},{url:"/jader/_next/static/media/231f77fab9cf003b-s.woff2",revision:"89b7de729e0e5772c25f70ae7826346f"},{url:"/jader/_next/static/media/23819467d97353aa-s.woff2",revision:"ed25efe8499ccd2d8ae4c73655877ea3"},{url:"/jader/_next/static/media/264ad191907e74e4-s.woff2",revision:"cfce063afc3cbb2d969e6d399bc68a5e"},{url:"/jader/_next/static/media/299c58d589315bf4-s.woff2",revision:"e7df1018686ed0e9832cfc332ad366fd"},{url:"/jader/_next/static/media/2a28c294ba0ddb8d-s.woff2",revision:"9332add8d536b16fcfcda5e65701817f"},{url:"/jader/_next/static/media/2dde13cba929cceb-s.woff2",revision:"0fb5befe47282dd8bde854d73cbd3df6"},{url:"/jader/_next/static/media/2e911975412467c6-s.woff2",revision:"0b2e641770163bfee8b010605b05043a"},{url:"/jader/_next/static/media/2f0c9b3865466e05-s.woff2",revision:"00bb8c0dbaedd4fa18b12a2e730e74d3"},{url:"/jader/_next/static/media/3120dc655b257ccf-s.woff2",revision:"16799712ad877ca35f0baa06ea278ca8"},{url:"/jader/_next/static/media/318ee22ada9a3682-s.woff2",revision:"da21a7a332571cf56059b4be74713783"},{url:"/jader/_next/static/media/36350854f5f459a5-s.woff2",revision:"c90d62831a3b373a22937ec714335e82"},{url:"/jader/_next/static/media/3751b46f0cc8ffc0-s.woff2",revision:"3c4cd13fa2dcd3352a4da43eed2af5f9"},{url:"/jader/_next/static/media/397de44f21f0df04-s.woff2",revision:"d5522d122baa6aaf8aa44aefa3d42a56"},{url:"/jader/_next/static/media/3cc480f26447d3f4-s.woff2",revision:"350c93a99276e50d1b6d568281d4141e"},{url:"/jader/_next/static/media/3cf5232c9acac826-s.woff2",revision:"9671d8596cb3a3d8590bf1da3947b113"},{url:"/jader/_next/static/media/3e83c8b9781da49f-s.woff2",revision:"7302aa16bfef882c238b41468f8c38a9"},{url:"/jader/_next/static/media/3f1a3cf85d453eef-s.woff2",revision:"dd30d7a0f46788bed584f688b124eae6"},{url:"/jader/_next/static/media/3f20ce63bb57fcbe-s.woff2",revision:"4d7e106a509d07bf61cac7183412655d"},{url:"/jader/_next/static/media/4267f749fe0ff01f-s.woff2",revision:"8dac5d0dc35e42a4b932a3c6c072caf6"},{url:"/jader/_next/static/media/42a41d6f90ca27b1-s.woff2",revision:"a6f28de823b53b716d0147021723e825"},{url:"/jader/_next/static/media/435448e75fa5ee63-s.woff2",revision:"5cf994f6fc1b0b8477ccd6643e5abf3e"},{url:"/jader/_next/static/media/4867f17d87d5a353-s.woff2",revision:"c70f5549d8d824a94cb7e84613d66aef"},{url:"/jader/_next/static/media/52aae37d66f9b18b-s.woff2",revision:"54f9253251bf051abfa3bea0e7f98b21"},{url:"/jader/_next/static/media/533328ec97ab7470-s.woff2",revision:"9cf4221b978348813fff71c1def65918"},{url:"/jader/_next/static/media/5362087f295c19ad-s.woff2",revision:"34cfa265c930be4e16b2f4fb61c30a51"},{url:"/jader/_next/static/media/549188ce5b0213e0-s.woff2",revision:"752bd89956b13cb0f0891b15e98abbe3"},{url:"/jader/_next/static/media/5a6c334e80fffaf8-s.woff2",revision:"7e12f8c84977dee8c79a78b4da54780d"},{url:"/jader/_next/static/media/5f38b0ba98bac2ba-s.woff2",revision:"50c6abc679e44a0572a72c264fff96ac"},{url:"/jader/_next/static/media/60bca3914338dd03-s.woff2",revision:"312d64447adf168e47fb28714858359b"},{url:"/jader/_next/static/media/62a35b1059471fc5-s.woff2",revision:"7b5076724c7275b1c566854135b9f314"},{url:"/jader/_next/static/media/6331f0071f2f74e3-s.woff2",revision:"290009c0bf919032d358095bb344c80c"},{url:"/jader/_next/static/media/66b1b6a666a06934-s.p.woff2",revision:"4b0017ae26879d57976972a266357081"},{url:"/jader/_next/static/media/685416660c3bee4f-s.woff2",revision:"6a291b934fdd83aa924fda208ab20b1d"},{url:"/jader/_next/static/media/694d2933e1c713ce-s.woff2",revision:"ba7c07ab6cd20e0c99a9fce952aec68a"},{url:"/jader/_next/static/media/6ad7d62b0f7d63e4-s.woff2",revision:"fe10334546bcb1793471281348fc3c76"},{url:"/jader/_next/static/media/6dae081418abfe5c-s.woff2",revision:"0d8799e158eaeeb1fe2d3d6a11a76fb1"},{url:"/jader/_next/static/media/70764ebfc7208e24-s.woff2",revision:"49c06fba3cd0639fdb816f916a44590c"},{url:"/jader/_next/static/media/71494b83ddc040bf-s.woff2",revision:"102a9214de488d7d1b164c1c373f3173"},{url:"/jader/_next/static/media/7280640b557fde6e-s.woff2",revision:"baf670e3fe6560817d76e09b4203a60b"},{url:"/jader/_next/static/media/76742baf8508dabc-s.woff2",revision:"0c240b19c2152d486785dc88432fcd42"},{url:"/jader/_next/static/media/77ea56196ff8ff63-s.woff2",revision:"aecd7e10da92c045e68c42f3b6f8a4bd"},{url:"/jader/_next/static/media/784ccdfee4132171-s.woff2",revision:"1b13d1b9e634c285de131aa4ca5bc319"},{url:"/jader/_next/static/media/7915bf8d07af2be8-s.woff2",revision:"04e75799354be28a40f8310f93c3e2d6"},{url:"/jader/_next/static/media/7a3e742a14a198c6-s.woff2",revision:"73e3e1b6e1d6b2467ef47e720a6952a7"},{url:"/jader/_next/static/media/7dc855ce711afbdf-s.woff2",revision:"c83100e375d6da735fa6a67841ac3de9"},{url:"/jader/_next/static/media/810a12ab927d6ddf-s.woff2",revision:"f8812bdc4d37ea390552e4f1539d315f"},{url:"/jader/_next/static/media/8307bb9269b9d5f5-s.woff2",revision:"b4b193a20aaeaa5c49a52057e2117991"},{url:"/jader/_next/static/media/8356bc88c9aceb8c-s.woff2",revision:"f42d36a42e8482a90aca3b127b8ad5ad"},{url:"/jader/_next/static/media/83febaafa344ce92-s.woff2",revision:"4c20b50eb0997b4d9151b2f0ed47a56b"},{url:"/jader/_next/static/media/859a0dca9e0c6ce2-s.woff2",revision:"85bd2fdb4818301ee7e95dee4a7b3810"},{url:"/jader/_next/static/media/870cdc01bb73440a-s.woff2",revision:"8c4bedb8e336f2baf4dad2cfb7088a58"},{url:"/jader/_next/static/media/87e36b9f82dba8bb-s.woff2",revision:"054ff022400ab739db96c3c27843a909"},{url:"/jader/_next/static/media/893138dcb91f6663-s.woff2",revision:"6320026e4456a21c07f8a17705106076"},{url:"/jader/_next/static/media/89ab80d3cd33729f-s.woff2",revision:"6c79f9e5a7e1adc456af4d69078688b9"},{url:"/jader/_next/static/media/8d0031a6efb26892-s.woff2",revision:"6ecbf2f959ea5b9322b2cc3d00a6ed93"},{url:"/jader/_next/static/media/915abe235506c32b-s.woff2",revision:"ef93453be99f9f0d7f68266cb5e8c880"},{url:"/jader/_next/static/media/92fd8d7711d4e44f-s.woff2",revision:"2fef9d9a4f1bcf1ea6d1b9441626af99"},{url:"/jader/_next/static/media/938473a671f41906-s.woff2",revision:"3fed72d8f2c12e6393cd86cc9d0842f7"},{url:"/jader/_next/static/media/96ff03a0d37ca0cc-s.woff2",revision:"7c809f6a3ff8645bcaeb20e11ea42247"},{url:"/jader/_next/static/media/9a1f7ba304aeeecf-s.woff2",revision:"7aec3edf1326878b1674bcb93dd4a483"},{url:"/jader/_next/static/media/9afba82686c22962-s.woff2",revision:"057eaf74fdb721cc4b9f9d53147c628c"},{url:"/jader/_next/static/media/9c10920ae9aa448b-s.woff2",revision:"cb96560d8287031c7bd1e78fec38e55c"},{url:"/jader/_next/static/media/9dfbb05d946afcd6-s.woff2",revision:"289314d0b294f4fdf8f9c6a87a0152d5"},{url:"/jader/_next/static/media/9fbec714bdb25d9c-s.woff2",revision:"3f0d1658a97c6d8a5b028866f4cab627"},{url:"/jader/_next/static/media/a0ade0cbbb99f32c-s.woff2",revision:"933552228444e96f4badbaedba693195"},{url:"/jader/_next/static/media/a15f2fce4b98b461-s.p.woff2",revision:"3f0d038cee19fede70f342b6fdf2ef9a"},{url:"/jader/_next/static/media/a621347f664b2a4d-s.woff2",revision:"75a20e9e0de33b664d1f72157f4e4660"},{url:"/jader/_next/static/media/a78bba587d6a308c-s.woff2",revision:"853daac0ebb2ef205ae0dd8b48e566c5"},{url:"/jader/_next/static/media/aa40919727fba93d-s.woff2",revision:"144cc1fe7045a7e3a1c644c9319bd292"},{url:"/jader/_next/static/media/aa70556e250acb94-s.woff2",revision:"3465ee57a0f68cc9931b99a5afc9445d"},{url:"/jader/_next/static/media/aa7db2ad41bd25ba-s.woff2",revision:"0f044695cec44ab72605c2751344c05d"},{url:"/jader/_next/static/media/accb5b304442de50-s.woff2",revision:"912db6004cd71579283aff90418232a7"},{url:"/jader/_next/static/media/ae696edaac47af9c-s.woff2",revision:"3ab29966cd55d0fa15f94560fd4b6831"},{url:"/jader/_next/static/media/b02bac4e4cf559dc-s.woff2",revision:"15cec44fb754939fc5c0dfb013cfc9ee"},{url:"/jader/_next/static/media/b0b84cae34b4bea2-s.woff2",revision:"75276d9247c4e43ee0581303388688af"},{url:"/jader/_next/static/media/b2f0ba1cb1abb8d4-s.woff2",revision:"cc57580f80c430ec1aa7b10c3f0ff292"},{url:"/jader/_next/static/media/b3781132b3be7073-s.woff2",revision:"0fdf9f981eccb8b587435ce8716c6fa1"},{url:"/jader/_next/static/media/b485136457214f4b-s.woff2",revision:"58f4a58e1cb5b5ce86cfd87b7e0dff2f"},{url:"/jader/_next/static/media/b737e516a2777308-s.woff2",revision:"d00bab6eb12013a51febfaad3d58861d"},{url:"/jader/_next/static/media/b84676a33e32a8e0-s.woff2",revision:"55f0826e2b89ecf2bf59cb7b5c437dfd"},{url:"/jader/_next/static/media/b90f702fec14e0c6-s.woff2",revision:"77b0cf4739ee982e200276098e2f2da2"},{url:"/jader/_next/static/media/b9f11b1a528ed956-s.woff2",revision:"064ea53272683f26ee6ac0d88b0b0593"},{url:"/jader/_next/static/media/ba003e23a28450e7-s.woff2",revision:"a949cce22621d0167d579a66c57e39e5"},{url:"/jader/_next/static/media/bc726254f52404d2-s.woff2",revision:"2c6fe6b33528a651273af446fd22fd64"},{url:"/jader/_next/static/media/c5e14d45967bbb5e-s.woff2",revision:"59d649b59d66e9f62ffff666e66f87c1"},{url:"/jader/_next/static/media/c6a0b5670846dd2a-s.woff2",revision:"5f201603c49f13023dd6db3dd49ebf68"},{url:"/jader/_next/static/media/c7b0e98f802564b1-s.woff2",revision:"4bb2f1169dc3a1f8668f735b739556d6"},{url:"/jader/_next/static/media/c89ab73a8890fbed-s.woff2",revision:"18df29aab1148c6950afda9b0637c372"},{url:"/jader/_next/static/media/c970d8e7b7fb9a06-s.woff2",revision:"fb73e76d8a557beb66a6d505da3db22c"},{url:"/jader/_next/static/media/cc5d58d5ea94fcc4-s.woff2",revision:"a193ca92ce492d08089777c3479a361e"},{url:"/jader/_next/static/media/cd769f5a1ca2d9c5-s.woff2",revision:"3506cae512ac8790a3df9dd8532c9017"},{url:"/jader/_next/static/media/cf70e2a08f1f5f62-s.woff2",revision:"cfaad1817c13b671d589202d93a99794"},{url:"/jader/_next/static/media/d0a0342ed691a7f5-s.woff2",revision:"17b4d3d80943f8e66bdd57997feee93e"},{url:"/jader/_next/static/media/d2621c18918d28b8-s.woff2",revision:"bf4f0bda7c5a122906d6fd8f649b847f"},{url:"/jader/_next/static/media/d3310f2e2e8765f6-s.woff2",revision:"1ba88f2b984d7b68501db0fcb3955bce"},{url:"/jader/_next/static/media/da99ae30fc536f3e-s.woff2",revision:"0f3a7d69d9691b1f21395e4328ecd214"},{url:"/jader/_next/static/media/dc5da0fdb1198adf-s.woff2",revision:"06b434d326269209bfb7ef8ca86f7847"},{url:"/jader/_next/static/media/ddb9467c20b2b7b6-s.woff2",revision:"14b27e0b64250a87d7485b533f5f2237"},{url:"/jader/_next/static/media/de1e43093eb6402c-s.woff2",revision:"15e96601a4a7e5e418e906b6e669496a"},{url:"/jader/_next/static/media/e0bde08f1e7fbc72-s.woff2",revision:"ae55304bf8c95c4a2db81defdaf650c7"},{url:"/jader/_next/static/media/e44859446483d1d3-s.woff2",revision:"e8baf93f42898b588584b0fccc63a8dd"},{url:"/jader/_next/static/media/e8ac59c94b6ffc73-s.woff2",revision:"ffc900bf02d8b856bd545eddb8d33418"},{url:"/jader/_next/static/media/e8e0bbb6d4247975-s.woff2",revision:"bbdee6382dea249ab8f9a861561a1b54"},{url:"/jader/_next/static/media/eba57749f42875c2-s.woff2",revision:"c48222af62c238b5a7d42141c74ab366"},{url:"/jader/_next/static/media/ec4239bdac76e7e0-s.woff2",revision:"75381314347ce311e4fa4315b785ca99"},{url:"/jader/_next/static/media/ee5a0461435f8e6c-s.woff2",revision:"ae9605f310b3ff6be24d3d50fba3d7aa"},{url:"/jader/_next/static/media/efd3c9f7dc8b4500-s.woff2",revision:"23561bd2c1f58775df95f3de52123296"},{url:"/jader/_next/static/media/f0e13183b93fe06c-s.woff2",revision:"1f9db9645be0de8a5de0eceda8aeb414"},{url:"/jader/_next/static/media/f14d9587d346a399-s.woff2",revision:"1504045a563478666e0196e921ba03f3"},{url:"/jader/_next/static/media/f238ce09368a915e-s.woff2",revision:"601037b19f77b31208cf7b6155582ab7"},{url:"/jader/_next/static/media/f82c48d71abb058e-s.woff2",revision:"f44458c1b67d9d6cfb680b4f2a84b177"},{url:"/jader/_next/static/media/fa2619592b6250cb-s.woff2",revision:"0b3c080ca3ccfdc1f7b5e7fd8abe65c5"},{url:"/jader/_next/static/media/fbf4122f4eb4fa62-s.woff2",revision:"b7b63732caf95e3db07ef6229ca79f5c"},{url:"/jader/assets/icon/icon-192x192.png",revision:"0f77e573c0b1079843b753f190a15d34"},{url:"/jader/assets/icon/icon-256x256.png",revision:"e98a2a02023a7939e8dfb23e094f279b"},{url:"/jader/assets/icon/icon-384x384.png",revision:"314db84465a0bdc5242cfb8b370db1fc"},{url:"/jader/assets/icon/icon-512x512.png",revision:"ed97ed66541522ce2bffa7fee88944e5"},{url:"/jader/assets/images/google.png",revision:"e1c33342d5bcb0852fd908aa4dae9e67"},{url:"/jader/assets/images/jadehr.png",revision:"fe3dac8b5731774ad0a646f0dfbcfa87"},{url:"/jader/assets/images/jader.png",revision:"dfb9ca0ed0d482e9f88133e5d8789e7b"},{url:"/jader/assets/images/jader_transparent.png",revision:"1f254cacddabbcfbe476b82b5e4892b5"},{url:"/jader/assets/images/jader_transparent_logo.png",revision:"056b2644bdb071c082aad9dcba5bf506"},{url:"/jader/assets/images/rsquare.png",revision:"5a33e86812fe7106018118af38e163ea"},{url:"/jader/assets/video/banner.mp4",revision:"379e3485d0811d9e5f6f12a0d56fcd21"},{url:"/jader/favicon.ico",revision:"5253e360cad887e8bc91bb53e6fb6d15"},{url:"/jader/manifest.json",revision:"33bf6dfc0e9c7924da1c640c017a2aa2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/jader",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:d})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
