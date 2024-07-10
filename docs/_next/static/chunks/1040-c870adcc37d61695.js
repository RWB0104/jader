"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1040],{49935:function(t,e,D){D.d(e,{De:function(){return i},PS:function(){return r},PZ:function(){return u},qe:function(){return n}});let i={id:"palette",mode:"light"};function u(t,e,D){return new Promise("undefined"==typeof indexedDB?()=>{}:(i,u)=>{let n=indexedDB.open(t);n.onerror=t=>{console.error(t),u(Error("IndexDB Error"))},n.onsuccess=t=>{let n=t.target;if(null===n){console.error(t),u(Error("IndexDB is null"));return}let{result:r}=n,l=r.transaction(e,"readwrite").objectStore(e);l.put(D),r.close(),i(!0)},n.onupgradeneeded=t=>{let e=t.target;if(null===e){console.error(t),u(Error("IndexDB is null"));return}let{result:D}=e;D.createObjectStore("token",{keyPath:"id"}),D.createObjectStore("parameter",{keyPath:"id"})}})}function n(t,e,D){return new Promise("undefined"==typeof indexedDB?()=>{}:(i,u)=>{let n=indexedDB.open(t);n.onerror=t=>{console.error(t),u(Error("IndexDB Error"))},n.onsuccess=t=>{let n=t.target;if(null===n){console.error(t),u(Error("IndexDB is null"));return}let{result:r}=n,l=r.transaction(e).objectStore(e),o=l.get(D);r.close(),o.onerror=t=>{console.error(t),u(Error("IndexDB Error"))},o.onsuccess=()=>{i(o.result)}},n.onupgradeneeded=t=>{let e=t.target;if(null===e){console.error(t),u(Error("IndexDB is null"));return}let{result:D}=e;D.createObjectStore("token",{keyPath:"id"}),D.createObjectStore("parameter",{keyPath:"id"})}})}function r(t,e){return new Promise("undefined"==typeof indexedDB?()=>{}:(D,i)=>{let u=indexedDB.open(t);u.onerror=t=>{console.error(t),i(Error("IndexDB Error"))},u.onsuccess=t=>{let u=t.target;if(null===u){console.error(t),i(Error("IndexDB is null"));return}let{result:n}=u,r=n.transaction(e,"readwrite").objectStore(e),l=r.clear();n.close(),l.onerror=t=>{console.error(t),i(Error("IndexDB Error"))},l.onsuccess=()=>{D()}},u.onupgradeneeded=t=>{let e=t.target;if(null===e){console.error(t),i(Error("IndexDB is null"));return}let{result:D}=e;D.createObjectStore("token",{keyPath:"id"}),D.createObjectStore("parameter",{keyPath:"id"})}})}},80562:function(t,e,D){function i(t){var e,D;let i;return{day:{text:u((i=t||0===t?"object"==typeof t?t:new Date(t):new Date).getDate()),value:i.getDate()},epoch:i.getTime(),hour:{text:u(i.getHours()),value:i.getHours()},minute:{text:u(i.getMinutes()),value:i.getMinutes()},month:{text:u(i.getMonth()+1),value:i.getMonth()+1},second:{text:u(i.getSeconds()),value:i.getSeconds()},weekday:{text:(e=i.getDay(),e===0+(D=0)?"일":e===1+D?"월":e===2+D?"화":e===3+D?"수":e===4+D?"목":e===5+D?"금":e===6+D?"토":""),value:i.getDay()},year:i.getFullYear()}}function u(t){return t<10?"0".concat(t):t.toString()}async function n(t){let{JSEncrypt:e}=await D.e(4766).then(D.bind(D,74766)),i=new e;return i.setPublicKey("-----BEGIN RSA PUBLIC KEY-----\n	MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5AG4o8FsdfCTAU0QhOy1\n	uWgnE7oNq+JKrr8AOayTg6r78v5Lc0lNsn1x5NOvJr1HvRTqbbNWBlV2Jky2+FG6\n	AsnBnSp6iOqxoRJShFH0KISXMZaV2dHywW7lV2ygaercxcVFbXNU4+oEbhD4lqze\n	sWsTJj0APpT2Psrw/wM0VxIZKWOR0htKIXz2c4CVbRA6+i7KYLIphmqcA4tm9ZbZ\n	T8ExzI+FXsvPCdsQrE5TJinlulrVPu8F73J3Lgak+HNL5kDSlmY1z38nTlDFp2s5\n	81cRpAOuDb01sxjjnHnxtn9veTphBHsYVOOV8aiyOXlwxENiz9VPo5RcLS6o8dZF\n	ZCmcFal+SZQGw2FUa+wAL0zDs3FyRB2HPy9EOjCcDGcCVNEpfa+XnOgIeP74Zr2S\n	yTsOBTYVXBJpN96o2sFGDf1gaV0FV3wMXdjNMM9xzCfebK0uTLl2Q7/B9sROIrql\n	G1zBici5eSGeiuqrWEUialrqVNHL8Ak9Kkt2eaOJXNoPx/f/REk7BB+cqhRt68BZ\n	Rmj19HSJo7kZM0VS3JLiIBzSPJP1MIt0oCdnjivxpK/sGKqCTdW3NoMd5JsXs3f7\n	1EWc0Cd7co1GfOsMGFSlEPcSfLvdeIMIKBpdeOjPr1/t7nDmOrFjSh+a13BUpY+7\n	zDaS5Ixa8oN3VS1EI8ZplvUCAwEAAQ==\n	-----END RSA PUBLIC KEY-----"),i.encrypt(t)||void 0}function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,D="string"==typeof t?parseInt(t,10):t,i=10**e;return Math.ceil(D*i)/i}function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,D=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return o(t,e,D)-o(9)}function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,D=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(3600*t+60*e+D)*1e3}function c(t){return 2020===t||2021===t?{code:2040,name:"재택근무제"}:2040===t?{code:2021,name:"선택근무제(IT)"}:{code:9900,name:"선택불가"}}D.d(e,{FP:function(){return o},HI:function(){return n},K0:function(){return i},WK:function(){return l},WL:function(){return r},bV:function(){return c}}),D(60895)},60895:function(t,e,D){D.d(e,{Iv:function(){return u},Sz:function(){return i}});let i={dateTimeDelete:/^([01][0-9]|2[0-3]):$/,dateTimeWrite:/^([01][0-9]|2[0-3])([0-5])$/,endTime:/^(1[7-9]:[0-5][0-9])|(2[0-1]:[0-5][0-9])|(22:[0-2][0-9])$/,hh:/^([01][0-9]|2[0-3])$/,hh2:/^([01][0-9]|2[0-3]):$/,hhmm:/^([01][0-9]|2[0-3]):([0-5][0-9])$/,holiday:/.*(sat|sun).*/,num:/^[0-9]$/,startTime:/^(06:3[1-9])|(06:[4-5][0-9])|(0[7-9]:[0-5][0-9])|(10:[0-5][0-9])|(11:00)$/,yyyymmdd:/(\d\d\d\d)(\d\d)(\d\d)/,yyyymmddDash:/(\d\d\d\d)-(\d\d)-(\d\d)/},u=[{content:[{article:["현재 JADER 사용 시 408 에러가 뜨고 있습니다.","해당 오류는 서비스의 주체인 JADE에 API 요청 시, 10초 이상 응답을 주지 않아 타임아웃이 발생하는 오류입니다.","JADE에서 직접 하면 잘 되는데, 동일한 API를 사용해도 이러한 응답차이가 발생하는 이유를 끝내 찾아내지 못 했었습니다...","때문에 현재 JADER 코드에 10초의 타임아웃 설정을 주어 최대한 응답을 기다리는 수동적인 대응에 그치고 있습니다.","","이 현상은, 제가 재직 당시 사용할 때에도 종종 발생했던 오류로, 보통 10분 ~ 수 시간 이내에 정상화 됩니다.","불편하시겠지만, 정상화 전까지 JADE를 직접 사용해주시고, 오후에 다시 시도해주세요.","","JADER는 필요한 정보를 JADE 페이지에서 크롤링하는 것이 최선이라 판단하여, 이와 같은 구조로 구현되었습니다.","위 구조로 인해, 페이지 코드의 변경에 극히 취약한 구조를 가지고 있습니다.","최악의 경우, JADE 페이지가 변경되어, 의도하지 않은 정보를 크롤링해 발생한 문제일 가능성이 있습니다.","위 경우, 직접 코드 수정이 필요하지만, JADE에 접속할 수 없는 제 상황 상 대응이 불가능합니다.","","최악의 상황이 아니길 바랍니다."],subtitle:"\uD83D\uDEA8 408 장애 관련 안내"}],timestamp:1720578774643,title:"\uD83D\uDEA8 408 장애 관련 공지"},{content:[{article:["2024-06-19 20시를 기준으로 SSL 인증서 갱신을 완료했습니다.","현재 인증서는 일자에 맞춰 자동으로 갱신되고 있으나, 갱신 이후 인프라 서비스가 재기동하기 전까지 반영되지 않음을 확인했습니다.","적절한 구조 개선으로 SSL 반영 문제를 개선했음을 알립니다.","","또한, JADER 개발자는 현재 RSQUARE에 속하지 않은 관계로, 실 서비스 접근이 불가능하여 서비스 안정성 여부를 확인하기 어려운 상황입니다.","불편사항 혹은 제안사항이 있으시다면, 주저하지말고 아래의 정보로 연락주십시오. 하단 푸터의 이메일 버튼을 눌러 간편하게 메일을 작성할 수도 있습니다.","혹은 낙서장 페이지의 댓글을 통해서도 연락이 가능합니다.","","psj2716@gmail.com"],subtitle:"\uD83D\uDE91 SSL 인증서 갱신"}],timestamp:1718774034533,title:"\uD83D\uDE91 SSL 인증서 갱신 안내"},{content:[{article:["API 서버의 SSL 인증서가 만료된 후 갱신되는 과정에서, 웹서버가 인증서를 정상적으로 반영해주지 않아 API 서버에 문제가 발생하고 있었습니다.","근래 API 서버를 확인에 소홀하여, 오늘 우연히 프로젝트 구축 중 알게되었습니다.","SSL 인증서 갱신하여 정상적으로 복구했습니다.","이용에 불편을 드려 죄송합니다.","","아, 서비스는 언젠가 내리긴 할건데, 아직 노션 정리도 귀찮아서 못 하고 있고..","일단 마음이 변하기 전까지 서비스는 유지하고자 합니다."],subtitle:"\uD83D\uDE91 SSL 인증서 갱신"}],timestamp:1708604254107,title:"\uD83D\uDE91 SSL 인증서 만료로 인한 오류 안내"},{content:[{article:["JADER 서비스가 종료됩니다.","JADER는 사내 시스템이 아닌 개인 프로젝트를 통해 시작된 것으로, 서비스의 운영 및 관리 주체가 저에게 속해있는 상황입니다.","일신 상의 사유로 인하여, 더 이상 JADE와의 연동 및 유지관리를 보증할 수 없습니다.","이로인해, 기능 추가 및 유지보수, 트러블슈팅 등 유지관리 소요 발생 시 이를 대응할 방법이 전무한 상황입니다.","","위와 같은 사유로, JADER 서비스를 종료합니다.","종료 예정일은 [22일(월) 23:59]입니다.","","JADER를 운영한 경험은, 사내 구성원으로써, 개발자로써 얻을 수 있는 매우 값진 경험이였습니다.","그 동안 JADER를 사용해주신 여러분들께 진심으로 감사의 말씀을 드립니다.","","","JADER 개발자, 박성진 드림"],subtitle:"\uD83D\uDC4B Curtain Call"}],timestamp:1705391427095,title:"\uD83D\uDEA8\uD83D\uDEA8\uD83D\uDEA8 JADER 서비스 종료 안내 \uD83D\uDEA8\uD83D\uDEA8\uD83D\uDEA8"},{content:[{article:["현재 일부 기능의 사용이 어려워 확인한 결과, JADE에 기능 장애가 있는 것 같습니다.","연초로 인해 관련 DB 작업을 하는 것으로 추측됩니다. (관련하여 공지는 확인되지 않습니다.)","이러한 영향으로 연차 신청 등, JADE가 복구될때까지 일부 기능의 사용이 불가능할 수 있습니다."],subtitle:"\uD83D\uDE91 JADE 장애로 인한 서비스 이용 장애 안내"}],timestamp:1704290656781,title:"JADE 장애 안내"},{content:[{article:["트래픽이 몰릴 경우, SocketTimeout으로 인한 현상이 발생하는데, 간혹 너무 심하게 발생하여 사용에 지장을 주는 것 같습니다.","JADE 서버 통신 타임아웃을 5초 -> 10초로 개선했습니다."],subtitle:"\uD83D\uDD28 타임아웃 시간 개선"},{article:["링크 오류로 인해 잘못된 파비콘이 보여지는 현상을 개선했습니다."],subtitle:"\uD83D\uDD28 파비콘 오류 개선"}],timestamp:1704187951765,title:"서비스 개선"},{content:[{article:["금일 오전, 알 수 없는 이유로 인터넷 연결이 불안정안 현상이 있었습니다.","이를 해결하는 과정에서 서버 및 공유기의 연결정보 유실로 인해 API 호출이 불가능한 현상이 발생했습니다.","금일 12시 기준 복구 완료했으며, 이용에 불편을 드려 죄송합니다."],subtitle:"\uD83D\uDE91 인터넷 연결 오류로 인한 서비스 장애 안내"}],timestamp:1700018558055,title:"서비스 장애 안내"},{content:[{article:["특정 계정에서 For input string 오류가 뜨는 현상을 발견했습니다.","알 수 없는 이유로 JADE에서 보여주는 신청서 상태가 공백인 경우가 있는 듯 합니다.","특정 계정만의 문제로, 직접적인 디버깅이 불가능한 관계로, 해당 케이스를 대비하기 위해 신청서의 상태를 추가했습니다.",'위와 같은 케이스의 경우, "알 수 없음"이라는 상태로 표기됩니다.'],subtitle:"\uD83D\uDC1B 신청 내역 확인 API 버그 개선"}],timestamp:1697467522700,title:"API 버그 개선"},{content:[{article:["일부 페이지들의 자잘한 레이아웃을 개선했습니다."],subtitle:"\uD83D\uDD28 일부 페이지 레이아웃 개선"},{article:["신청 내역 확인 시, 일부 계정(제 계정)의 특정 신청 내역이 알 수 없는 이유로 인해 시간 정보가 제대로 나오지 않아 500 에러가 발생하는 것을 확인했습니다.","시간 정보가 없을 경우의 처리 로직을 추가하여 버그를 개선했습니다."],subtitle:"\uD83D\uDC1B 신청 내역 확인 API 버그 개선"}],timestamp:1697393938989,title:"API 버그 개선"},{content:[{article:["출퇴근, 재택 신청서와 달리 연장근무 신청은 과거를 대상으로도 신청이 가능합니다.","JADER에선 과거의 날짜는 신청할 수 없어서, JADE와 기능이 완전 일치하지 않았습니다.","이제 과거의 연장근무도 신청할 수 있습니다."],subtitle:"\uD83D\uDD28 과거 날짜의 연장근무 신청이 가능합니다."},{article:["공지용 모달을 만들었습니다.","추석 연휴를 곰식이가 축하해주고 있어요!"],subtitle:"✨ 신규 기능!"}],timestamp:1695809796928,title:"연장근무 신청서 개선 및 편의성 패치"},{content:[{article:["저는 최신 버전을 사용하는 걸 좋아합니다. 하지만 안타깝게도 JADER는 개발된지 적지 않은 시간이 흘렀습니다.","JADER 이후 여러 개인 프로젝트를 진행하면서, Next.js 13을 사용하게 됐는데 많은 변경점이 있었습니다.","디펜던시 최신화 및 기타 자잘한 사항도 적용할 겸, 업그레이드를 적용했습니다.","내부 로직 및 프로젝트 구조의 변경이므로, 사용자 단계에서 체감할만한 변경점은 아쉽게도 없습니다. 혹시 사용성 문제가 발견된다면 알려주세요.","취해서 술김에 업그레이드 한 건 절대 아닙니다."],subtitle:"\uD83C\uDF7B v2.0.0 업그레이드를 적용했습니다."}],timestamp:1694708925012,title:"JADER v2.0.0 업그레이드"},{content:[{article:["새로 추가한 근무가능일자 버튼에 버그가 발견되어 수정했습니다.","캘린더에 표시되는 다른 월의 날짜까지 선택되는 버그가 있어, 현재 월만 선택되도록 수정했습니다."],subtitle:"\uD83D\uDC1B 근무가능일자 클릭 시, 다른 월의 날짜도 선택되는 버그를 개선했습니다."}],timestamp:1692870057923,title:"근무가능일자 버그 개선"},{content:[{article:["간헐적으로 JADER의 인증이 정상적으로 되지 않아, 서비스 사용이 불가능해지는 문제가 관측되고 있습니다.","이 경우, 토큰을 제거하기 이전까지 어떠한 작업도 할 수 없는데, 문제는 유저 정보를 읽어올 수 없어, 로그아웃도 불가능했습니다.","원인은 관측되지 않았으나, 해당 현상 발생 시 비교적 쉽게 빠져나갈 수 있도록 로그아웃 버튼을 헤더에도 추가했습니다."],subtitle:"\uD83D\uDD28 로그아웃 버튼을 헤더 외부에 추가했습니다."},{article:["이제 캘린더에서 근무가능일자를 한 번에 선택할 수 있습니다.","좌측 상단에 새로 생긴 체크 아이콘 버튼을 클릭하여 선택이 가능합니다.","재택은 선택되지 않으므로, 근무일만 빠르게 선택하여 일정을 등록할 수 있을겁니다."],subtitle:"\uD83D\uDD28 캘린더에 근무가능일 선택 기능을 추가했습니다."}],timestamp:1692809082980,title:"편의 기능 추가"},{content:[{article:["재택근무는 특별한 사유가 없는 한, 출/퇴근을 신청하지 않습니다.","하지만 이러한 구분이 따로 없어, 재택근무라 찍지 않았음애도 출/퇴근시간이 빨간색으로 표시됩니다.","의미없이 혼동만 주는 것 같아, 재택근무의 시간 표시를 제거했습니다.","단, 재택임에도 출/퇴근시간이 하나라도 등록된 경우, 기존과 같이 표시됩니다."],subtitle:"\uD83D\uDD28 캘린더에서 출/퇴근이 찍히지 않은 재택근무의 시간 표시 제거"},{article:["아래의 공지사항 패치로 인해 JADER의 업데이트의 접근성이 상대적으로 감소하는 문제가 발생했습니다.","이를 해결하기 위한 방안으로, 사이드바에 정보 표시 기능을 추가했습니다.","적용된 사항은 아래와 같습니다.","- 7일 내 업데이트된 공지사항 갯수 표시","- 가장 최근 20개의 신청서 목록 중, 진행 중/반려된 신청서 갯수 표시","- 신규 기능 표시","이를 통해 좀 더 간략한 정보를 더욱 빠르게 확인할 수 있을 것입니다."],subtitle:"\uD83D\uDD28 사이드바에 정보 표시 기능을 추가했습니다."},{article:["사용자가 JADER의 기능에 좀 더 집중할 수 있도록, 홈의 최상단에 위치했던 공지사항 박스를 최하단으로 내렸습니다."],subtitle:"\uD83D\uDD28 홈의 공지사항 컴포넌트를 최하단으로 내렸습니다."}],timestamp:1692720610356,title:"사용자 편의 UI/UX 개선"},{content:[{article:["오랜만의 업데이트네요. 요즘은 다른 거 만들고 있기도 하고, 무엇보다 쓸만한 건 다 넣은 거 같아서 개발할 건덕지가 없는 것 같습니다.","그런 의미에서, JADER에 대한 다양한 의견을 수용하기 위한 창구로 낙서장 페이지를 새로 추가했습니다.","있었으면 좋겠다고 생각했던 기능이나 버그, 기타 다양한 의견을 작성할 수 있도록 구현했습니다.","꼭 위와 같은 주제가 아닌, 그냥 가벼운 내용 쓰셔도 상관 없습니다."],subtitle:"✨ 낙서장 페이지를 추가했어요."}],timestamp:1692635360632,title:"낙서장 기능 추가"},{content:[{article:["로그 페이지의 레이아웃을 개선했습니다."],subtitle:"\uD83D\uDD28 로그 페이지 개선"}],timestamp:1688848181143,title:"관리자 페이지 개선"},{content:[{article:["사용자가 약간 더 늘어남에 따라, 주먹구구식으로 관리하는 것보다, 요청의 오류 현황을 한 눈에 확인하는 것이 필요하다고 느꼈습니다.","이전부터 관리자 페이지를 만드려다가, 딱히 넣을만한게 없어서 패스했는데, 이번 기회에 다시 살려보고자 합니다."],subtitle:"✨ 관리자 페이지 추가"}],timestamp:1688668740708,title:"관리자 페이지 추가"},{content:[{article:["JADER에선 신청서 일괄 등록을 위해, 원하는 신청서를 리스트에 등록하는 과정이 필요합니다.","한 번에 너무 많은 리스트를 신청할 경우, 과도한 동작으로 인해 예기치 않은 문제가 발생할 수 있습니다.","앞으로 신청서의 일괄 신청은 한 번에 최대 10개로 제한됩니다. 만약, 10개를 넘어선 일괄 신청이 필요할 경우, 두 번에 나눠 신청해야합니다.","주기적으로 가장 빈번히 사용하는 신청서는 재택으로 예상되며, 사내 규정 상 달에 약 8번 정도가 가능합니다.","때문에 10개를 넘는 신청서를 일괄 등록할 케이스는 극히 드물 것이라 판단, 이와 같이 제한됨을 알려드립니다.","10개를 넘는 신청서를 주기적으로 추가해야할 케이스가 있을 경우, 제게 알려주세요."],subtitle:"\uD83D\uDD28 신청서 리스트 제한 추가"},{article:["둘러보기 컴포넌트의 UI(특히 모바일)을 개선했습니다."],subtitle:"\uD83D\uDD28 둘러보기 UI 개선"},{article:["최근에 추가된 기능 중, 진행 중 상태의 신청서를 일괄 선택/해제하는 기능이 있습니다","해당 버튼은 진행 중 상태인 신청서가 하나 이상 있어야 활성화됩니다.","정상적으로 비/활성화되지 않는 버그를 개선했습니다."],subtitle:"\uD83D\uDC1B 신청서 일괄 선택/해제 버튼 비활성화 버그 개선"}],timestamp:1688402353461,title:"기능 개선 및 버그 수정"},{content:[{article:["둘러보기 페이지의 어색한 UI 일부를 개선했습니다."],subtitle:"\uD83D\uDD28 둘러보기 페이지 UI 개선"},{article:["둘러보기에 JADER의 기능을 소개하는 컴포넌트를 추가했습니다.","JADER가 제공하는 서비스의 간략한 내용을 확인할 수 있습니다."],subtitle:"✨ 둘러보기의 기능 소개 추가"}],timestamp:1688061767111,title:"둘러보기 페이지 개선"},{content:[{article:['JADER에선 신청서를 선택하여 일괄 삭제가 가능합니다. 안타깝게도, 지금까진 삭제하고 싶은 신청서를 "일일히" 체크해줘야하는 매우 고되고 고통스러운 단순반복 작업을 수행해야만 했습니다.',"이러한 중노동에서 여러분들을 해방시켜주기 위해, 신청서를 일괄 선택/해제하는 버튼을 추가했습니다. 이제 삭제해야할 신청서가 1개가 됐든, 100개가 됐든 신경쓰지말고 한 번에 삭제하세요!","","본 서비스는 일괄 선택으로 인해 발생하는 무고한 신청서의 삭제 피해에 대해 책임지지 않습니다."],subtitle:"\uD83D\uDD28 신청서 일괄 선택/해제 기능 추가"}],timestamp:1687886659543,title:"신청서 일괄 선택/해제 기능 추가"},{content:[{article:["근무 시간 상세 정보에 경고를 추가했습니다.","연차도 그렇고, 근무 시간 계산에 있어서 예측되거나 예측 불가능한 요소가 산재해있습니다.","각 근무시간 별 산정 기준 및 안내 문구를 추가했습니다.","또한, 간편 신청의 간략한 설명을 추가했습니다. 사용자 관점에서 보니, 너무 덩그러니 달력만 있더라구요."],subtitle:"\uD83D\uDD28 일부 기능의 안내 문구 추가"}],timestamp:1687492595e3,title:"기능 UX 향상"},{content:[{article:["간편 신청 하단의 리스트에서 삭제를 누를 경우, 캘린더에 반영되지 않는 버그를 수정했습니다."],subtitle:"\uD83D\uDC1B 간편 신청 달력 버그 개선"}],timestamp:1687455586201,title:"간편 신청 버그 개선"},{content:[{article:["서있으면 앉고싶고, 앉으면 눕고 싶습니다. 우리 모두가 그렇습니다.","신청서를 하나하나 등록하여 일괄로 신청하는 건 편하지만, 그냥 날짜만 선택해서 일괄로 신청하는 건 극락입니다.","간편 신청 기능이 지원되는 신청서는 아래와 같습니다."," ✨ 출퇴근시각 등록 요청 (09:30 ~ 18:30)"," ✨ 연장근무 신청 (09:30 ~ 익일 02:00)"," ✨ 재택근무 변경/취소 신청","휴가 신청서의 경우, 타 신청서와 달리 기간이라는 개념이 존재하여 현재의 신청서와 크게 다르지 않다고 판단하여, 추가하지 않았습니다.","이제 진짜 손가락만 까딱해서 신청서를 등록해보세요."],subtitle:"✨ 간편 신청서 기능 추가"},{article:["출/퇴근을 찍을 때, 새로고침 이전까지 근무 상세 시간이 연산되지 않는 소소한 버그를 수정했습니다.","또한, 일부 연산 과정에서 발생한 버그를 수정하여 정확한 값이 표현되도록 개선했습니다."],subtitle:"\uD83D\uDC1B 근무 상세 시간 버그 개선"}],timestamp:1687370241725,title:"간편 신청 기능 추가 및 버그 개선"},{content:[{article:["기존의 근무 시간 정보 데이터는 비효율적인 데이터 객체를 사용하고 있었습니다.","이번 업데이트로 근무 시간 표현에 특화된 데이터 객체로 교체하여, 연산 간 발생하던 오류를 제거했습니다."],subtitle:"\uD83D\uDD28 근무 시간 정보 데이터 개선"}],timestamp:1686944450961,title:"근무 시간 상세 정보 기능 개선"},{content:[{article:["근무 시간을 잘못 분배하다보면, 월말에 원치않는 야근을 하게 됩니다.","유연근무제를 더욱 유연하게 쓸 수 있도록, 오늘 기준의 권장 근무시간 표현을 추가했습니다. 또한 총 근무시간과의 차이를 계산해, 내가 얼만큼 더 유연해질 수 있는지도 직관적으로 확인할 수 있습니다.","연차 누락되는 근무시간은 JADE에 시간이 입력되기 전까지 반영되지 않는다는 점, 꼭 참고해주세요!"],subtitle:"\uD83D\uDD28 근무 시간 정보 편의 기능 추가"}],timestamp:1686765057198,title:"근무 시간 상세 정보 기능 추가"},{content:[{article:["요즘들어, JADE 요청 시 소켓 커넥션 에러가 간헐적으로 관측되고 있습니다.","기존 3초였던 API 대기 시간을 5초로 늘렸습니다. 적절한 값인진 확실하지 않지만, 우선 늘려놓고 추이를 지켜보고자 합니다."],subtitle:"\uD83D\uDD28 JADE API 요청 대기시간 추가"},{article:["뭔가 채워놓곤 싶은데, 아이디어가 없던 둘러보기 컨텐츠를 추가했습니다.","둘러보기 페이지를 통해 JADER의 개발 동기, 기능과 같은 다양한 정보를 확인해보세요.","해당 페이지엔 개발자 본인의 애니메이션 연습을 위한 실험적인 시도가 일부 포함되어 있음을 안내드립니다."],subtitle:"✨ 둘러보기 컨텐츠 추가"},{article:["신청서에서 간헐적으로 24시간 처리를 제대로 하지 못하는 버그를 개선했습니다."],subtitle:"\uD83D\uDC1B 신청서 시간 버그 개선"}],timestamp:1686071371705,title:"컨텐츠 추가 및 버그 수정"},{content:[{article:["연차 신청서의 사유 입력 시, 정규식이 제대로 기입되지 않음을 확인했습니다.","테스트 코드 같은데... 이걸 왜 안 뺐을까요?"],subtitle:"\uD83D\uDC1B 연차 신청서 사유 버그 대응"}],timestamp:1685037336691,title:"연차 신청서 사유 이슈 대응"},{content:[{article:["사용자가 서비스의 흐름을 잃어버리지 않도록, 이제 JADER에서 토스트 메시지를 보실 수 있습니다.","출/퇴근, 신청서 등록 등 다양한 상호작용에서 메시지가 출력됩니다.","UX에 도움이 됐으면 좋겠네요."],subtitle:"✨ 토스트 컴포넌트를 추가했습니다."}],timestamp:1684773173428,title:"토스트 기능 추가"},{content:[{article:["있어도 그만, 없어도 그만인 구색 맞추기의 또다른 일환으로 상호작용 박스를 추가했습니다.","이제 페이지 하단에서 빠르게 상단으로 올라갈 수 있습니다.","이게 다냐구요? 음... 아직은요."],subtitle:"✨ 상호작용 박스 컴포넌트를 추가했습니다."},{article:["페이지 구색 맞추기의 일환으로 푸터 컴포넌트를 추가했습니다.","짜는데 1시간, 뭐 넣을지 고민하는데 하루 걸린건 안 비밀."],subtitle:"✨ 푸터 컴포넌트를 추가했습니다."}],timestamp:1684690314812,title:"JADER 기능 추가"},{content:[{article:["예전부터 쓰면서 느꼈습니다. 신청서 큐 등록 버튼이 너무 아래에 있다고. 특히 모바일처럼 화면을 전부 못 보는 환경에서 문제가 심각해지는데, 신청서 하나를 큐에 등록하고 다른 날짜를 추가하려면 20년도 잡코인 그래프처럼 위아래로 왔다갔다 해야했습니다.","재택 같이 내용 변화 없이 날짜만 바꿀 경우 피로감이 더더욱 심할 것 같아, 큐 등록 버튼을 최상단에도 추가했습니다.","플로팅 버튼같이 좀 더 좋은 방법이 있을 것 같긴 하지만, 일단은 이 정도 해놓고 추이를 지켜보고자 해요."],subtitle:"\uD83D\uDD28 신청서 큐 등록 버튼을 최상단에도 추가했습니다."},{article:["예전에 여기서 언급했는지 모르겠는데, 사실 신청서 쪽에 버그가 있었습니다. 출/퇴근시간 등록 요청서와 같이 출/퇴근을 입력받는 폼에서 퇴근 시간이 출근 시간보다 빨라도 별다른 오류 없이 넘어가는 현상이였습니다.","JADE 검증 API를 태웠으니, 알아서 잡아줄거라 생각했지만 그건 크나큰 경기도 오산이였습니다.","그래도 이젠 검증 로직을 추가했으니, 출근하기도 전에 퇴근한다는 그런 어처구니 없는 신청서는 더 이상 나오지 않을겁니다."],subtitle:"\uD83D\uDC1B 신청서의 출/퇴근 시간의 검증 로직을 보완했습니다."}],timestamp:1684526947228,title:"JADER 신청서 코드 개선 및 버그 수정"},{content:[{article:["우연히 누군가가 JADE 연차 시간 관련 정보의 정책이나 내용이 마음에 안 든다는 불평을 듣게 되었습니다.","연차 시간 정보를 눈에 잘 띄는 곳에 두면, 적어도 JADER는 불편하지 않겠죠..?"],subtitle:"\uD83D\uDD28 홈 화면에서 연차 관련 정보가 표시됩니다."}],timestamp:1684431470017,title:"JADER 연차 시간 정보 추가"},{content:[{article:["기존의 공지사항은 시간을 표시해주지만, 최신 여부를 확인하기 위해선 직접 일일히 시간차를 계산해야 했습니다.","7일 이내 작성된 공지사항은 주황색 원으로 최신 데이터임을 표현해줍니다."],subtitle:"\uD83D\uDD28 최신 공지사항 표시가 추가됩니다."},{article:["일정 컴포넌트의 미흡한 UI를 개선했습니다."],subtitle:"\uD83D\uDC84 일정 컴포넌트의 디자인을 개선했습니다."}],timestamp:1684170572040,title:"JADER 기능 및 디자인 개선"},{content:[{article:["기존의 공지사항은 너무 쓸데없이 길게 자리를 차지하고 있었습니다.","최근 공지사항 3개 정도만 보여주어 시스템의 최신 업데이트만 확인할 수 있으면서, 원할 경우 전용 페이지로 이동할 수 있게끔 유도했습니다.","어차피 이거 제대로 안 보는 거 다 알고 있습니다."],subtitle:"\uD83D\uDD28 공지사항 개선"},{article:["JADE의 휴가현황 기능을 활용하여 자신이 속한 팀의 연차, 생일 등의 정보를 확인할 수 있습니다.","딱히 유용해보이진 않지만, 주말에 하다가 심심해서 그냥 넣어봤습니다.","재택까지 보여주면 완벽할 것 같은데, 시스템 상의 한계로 어쩔 수 없네요. 타 팀의 정보 또한 확인이 불가능합니다.","아직 여러 개선점이 보이긴 하는데, 새벽 4시라 너무 피곤해서 다음에 할래요. 내일 출근도 해야하는데"],subtitle:"✨ 일정 기능이 추가됐습니다."}],timestamp:1684091947086,title:"JADER 일정 기능 추가 및 코드 개선"},{content:[{article:["출/퇴근을 등록하고 캘린더를 확인하면, 정보가 제때 반영되지 않아 새로고침을 해줘야하는 현상을 수정했습니다."],subtitle:"\uD83D\uDC1B 출/퇴근 시 근태 현황 정보가 갱신됩니다."},{article:["JADE가 05.11 22:00을 기준으로 업데이트 됐습니다.","이로 인해, 근태현황 등록 시 등록은 이루어지나 예외가 뜨는 현상을 개선했습니다.","놀래라."],subtitle:"\uD83D\uDC1B 근태현황 등록 시 예외가 발생하는 현상이 개선됩니다."}],timestamp:1683829949665,title:"JADER 버그 수정 및 개선"},{content:[{article:["새벽까지 야근을 잘 안 하다보니, 최근에서야 알게 됐습니다. 연장근무 신청 시 익일 신청이 제대로 되고 있지 않다는 사실을요."],subtitle:"\uD83D\uDC1B 연장근무 신청 시, 익일 타입이 제대로 지정되지 않는 버그를 수정했습니다."},{article:["모바일 화면은 그 특유의 좁아터진 화면 때문에 의도적인 정보의 누락을 야기하곤 합니다.","모바일에서 재택근무를 표현하고자, 주황색 원으로 표시하도록 바꿔줬었는데 이게 생각보다 나쁘지 않은 것 같습니다.","그래서 데스크탑 버전에다가도 적용했습니다. 이런게 역수출이죠."],subtitle:"\uD83D\uDD28 데스크탑 버전의 캘린더가 재택근무를 좀 더 직관적으로 보여줍니다."},{article:["내겐 너무나도 당연한 것들이, 타인에겐 그렇지 않은 경우가 왕왕 있습니다. 이를테면 개발자와 사용자처럼 말이죠.","최대한 사용자의 시각으로 바라보려고 하지만, 사용자 이전에 개발자로써 개발 과정에서 이미 내제된 정보를 배제할 순 없었던 모양입니다.","캘린더의 정보들은 직관적이라고 생각했지만, 빨간색 시간이 뭐냐는 질문을 받고 생각을 고쳐먹었습니다"],subtitle:"\uD83D\uDD28 캘린더에 범례가 추가됩니다."}],timestamp:1683484222272,title:"JADER 버그 수정 및 개선"},{content:[{article:["살짝 당황스런 버그였습니다. 다른 시간은 잘 되는데, 09:00을 등록할 때만 생기는 버그??","대한민국의 시계는 세계 기준보다 9시간 빠른 탓에, 09:00의 밀리초는 0이 됩니다.","우리 똑똑한 자바스크립트는 조건식에 0을 집어넣으면 false로 인식해주는 덕분에 의도하지 않은 분기로 처리되어 발생하는 버그였습니다.","불행 중 다행히, 프론트의 후처리 과정에서 발생한 것으로, 엉뚱한 시간이 등록되진 않은 것 같군요..."],subtitle:"\uD83D\uDC1B 캘린더의 일정 등록 시 09:00을 등록하면 발생하는 버그를 수정했습니다."}],timestamp:1683135616402,title:"JADER 버그 수정 및 검증로직 개선"},{content:[{article:['법인카드 정책 변경으로 저녁식대/교통비 신청이 훨씬 수월해졌습니다"만", 여전히 귀찮은 건 사실입니다.',"생각해보니, 캘린더의 출퇴근 기록을 활용하면 이런 내역을 한 눈에 볼 수 있을 것만 같네요?"],subtitle:"\uD83D\uDD28 캘린더가 저녁식대, 교통비 제공 가능한 날짜를 더 직관적으로 보여줍니다."}],timestamp:1682616453662,title:"JADER 캘린더 부가기능 추가"},{content:[{article:["전 제 사진을 보는 걸 정말 싫어합니다. 여러분들도 그런가요?"],subtitle:"\uD83D\uDD28 헤더 계정 카드의 UI가 프로필 사진에서 텍스트 기반으로 변경됩니다."},{article:["행복한 연차 사용! 이젠 얼마나 남았는지 직접 보면서 사용하세요!","물론 본다고 3일 깎일거 하루 깎이는 건 아니지만요."],subtitle:"\uD83D\uDD28 연차 신청 페이지에서 남은 연차를 보여드립니다."}],timestamp:1682531575031,title:"JADER 시스템 기능추가 및 개선"},{content:[{article:["뚜.... 뚜.... 뚜.... 띵!\uD83D\uDD14"],subtitle:"\uD83D\uDD28 출퇴근 시간 등록에서 현재 시각을 알려드립니다."},{article:["근데 어차피 23시 고정이잖아...?"],subtitle:"\uD83D\uDD28 출퇴근 시간 등록에서 교통비 나오는 시간을 표시해줍니다."},{article:["때때로 데이터를 별도로 가공하는 작업은 예기치 못할 사이드 이펙트를 유발하곤 합니다. 특히 이딴거 만드는 주니어 개발자라면 더더욱 말이죠.","기존의 근무 시간 상세 정보는 재택 포함/미포함 두 가지로 나눠 표현하고 있었습니다. 초기 목적은 JADE의 근무 시간 정보를 그대로 표현해주면서, 재택 시간을 별도로 계산한 정보를 다시 한 번 표현해 줌으로써 신뢰성을 주고자 했다네요.","하지만 곧 재택 미포함 컴포넌트는 아무도 눈여겨보지 않는다는 걸 깨달았습니다."],subtitle:"\uD83D\uDD25 근무 시간 상세 정보의 재택 미포함된 타임 테이블이 제거됩니다."},{article:["대부분의 직장인은 적게 일하고, 많이 일하길 바랍니다. 하지만 안타깝게도 근무 시간 상세 정보는 언제나 우리에게 눈치없이 최대 근무시간만을 기준으로 더 많은 노오력, 더 많은 근무일수를 요구했습니다.","이제 트렌트를 따라가고자 합니다."],subtitle:"\uD83D\uDD28 근무 시간 상세 정보에서 최소 근무에 대한 추가적인 정보를 제공해줍니다."},{article:["바쁜 현대인은 시간 따위로 날짜 같은거 일일히 역계산하고 그럴 시간이 없습니다. 이거 만든 개발자놈은 그거 조금 계산하는 코드 좀 치기 어려웠던 걸까요??","어려웠는지 귀찮았는지 모르겠지만, 아무튼 이젠 된다고 하네요!"],subtitle:"\uD83D\uDD28 근무 시간 상세 정보에서 최소 근무시간을 달성하기 위한 일자를 보여줍니다."}],timestamp:1682445704970,title:"JADER 시스템 기능추가 및 개선"}]}}]);