/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "92ab746f5498c41fc7be10ac24e6ac19"
  },
  {
    "url": "assets/css/0.styles.0da10382.css",
    "revision": "501a93b9b3505e21ceccc3340ee75dbe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e8a8831c.js",
    "revision": "da3b2afdeb0d835e627f9244296a997e"
  },
  {
    "url": "assets/js/10.5bfd5340.js",
    "revision": "321f18248a4467b86951946530e0e3b9"
  },
  {
    "url": "assets/js/11.61983d84.js",
    "revision": "6e232e371a44279c823a499565b8b79a"
  },
  {
    "url": "assets/js/12.05c2fbb5.js",
    "revision": "bf4ccecee2808d7baec8850a85a45d1f"
  },
  {
    "url": "assets/js/13.055f7ef0.js",
    "revision": "391a6ed6123d987f0e5ee30e407eb88a"
  },
  {
    "url": "assets/js/14.b5308c17.js",
    "revision": "f133c8dab4ba62f9363e600267d8a701"
  },
  {
    "url": "assets/js/15.5fd21bc7.js",
    "revision": "7d93146a66e0ee0d2616c3c9c1e5f21b"
  },
  {
    "url": "assets/js/16.6f53edfd.js",
    "revision": "5a2f27d4e5d96f008fd109632c2d0216"
  },
  {
    "url": "assets/js/17.7d777ab5.js",
    "revision": "2fab3216e28dbe4b0371325510342a4f"
  },
  {
    "url": "assets/js/18.e676ab4a.js",
    "revision": "5f9317553d6629db7f0bc2d3d5931bc6"
  },
  {
    "url": "assets/js/19.5d8b9af5.js",
    "revision": "d2750555619bb6f5650391d7f33ff5ac"
  },
  {
    "url": "assets/js/2.cf7b150b.js",
    "revision": "05183dc9a8ef590cd4e5a9322b62f45b"
  },
  {
    "url": "assets/js/20.cdcc4be3.js",
    "revision": "66f298928dc17f8b9ed22871e0256a8d"
  },
  {
    "url": "assets/js/21.69333edc.js",
    "revision": "b300103634afa43a9781c41a0e0f7a8f"
  },
  {
    "url": "assets/js/22.289b20fc.js",
    "revision": "c3cf859df1d9779f79b8a380bc005be1"
  },
  {
    "url": "assets/js/23.af2243ab.js",
    "revision": "0978e26bfd4a871798102c5fe5d14882"
  },
  {
    "url": "assets/js/24.5264e266.js",
    "revision": "bbc1389fc4685de584843a1cfd2c35ae"
  },
  {
    "url": "assets/js/25.3a241bd7.js",
    "revision": "39c82c81fb84f66d1b29b6eba031cc52"
  },
  {
    "url": "assets/js/26.a8691d1d.js",
    "revision": "05bc46204bafd64515b5248cf4ed4527"
  },
  {
    "url": "assets/js/27.d2137ba1.js",
    "revision": "e39abe4a496a26d5a2e3125894a2b34a"
  },
  {
    "url": "assets/js/28.115bba81.js",
    "revision": "d6acba5e656ec8df6d511e56883bdeca"
  },
  {
    "url": "assets/js/29.1d632362.js",
    "revision": "20f5cdd8e7236098e0c9f6368a8e160b"
  },
  {
    "url": "assets/js/3.1bda5a3b.js",
    "revision": "884ef23af810b4aec6798d03d07cc5b2"
  },
  {
    "url": "assets/js/30.68fc4e99.js",
    "revision": "ebdb3f4392185830ef6f236e5b311a42"
  },
  {
    "url": "assets/js/31.cf57c181.js",
    "revision": "194aff7a7a10f9ab2498b478ad587a78"
  },
  {
    "url": "assets/js/32.d584855c.js",
    "revision": "609739463856cacddc46239b13045fa4"
  },
  {
    "url": "assets/js/33.d6baa954.js",
    "revision": "727f75a47830f05dad2829fd01f8687b"
  },
  {
    "url": "assets/js/34.1bdf9473.js",
    "revision": "ded73d7f1256f1e2b8eac37f8904ffe0"
  },
  {
    "url": "assets/js/35.74b458c7.js",
    "revision": "0f5587f9223d51b4d56467725e7b0cb3"
  },
  {
    "url": "assets/js/36.bb466b42.js",
    "revision": "8baabd7358ecfcd1a4d384347f939295"
  },
  {
    "url": "assets/js/37.8ea52228.js",
    "revision": "5ea4311dbca76bea136872135801aecf"
  },
  {
    "url": "assets/js/38.77bcdb07.js",
    "revision": "7720294bbae120897cda53a93d4dfb88"
  },
  {
    "url": "assets/js/39.d2733e8f.js",
    "revision": "81c02b3eabb91c524b46e24cbb183043"
  },
  {
    "url": "assets/js/4.9e01a26f.js",
    "revision": "fa30b8e928be0f2a7728312cf17b88ea"
  },
  {
    "url": "assets/js/40.8947dd9b.js",
    "revision": "32243cebabdef615afdc0e925dea3b4f"
  },
  {
    "url": "assets/js/41.7df73213.js",
    "revision": "27bb47b75890e2752448be3017f29902"
  },
  {
    "url": "assets/js/42.46eb11e0.js",
    "revision": "5dedcfe545e2111ba02a58fd828bbb4d"
  },
  {
    "url": "assets/js/43.0fb62f26.js",
    "revision": "9cc4d146a02608d5f2dccab57bdbd1f2"
  },
  {
    "url": "assets/js/44.b5912468.js",
    "revision": "813611abf4306843e226b77aacf6a8b0"
  },
  {
    "url": "assets/js/45.e6b98f2d.js",
    "revision": "5ebab86e7e2118dfcd1cd43d3a0153e8"
  },
  {
    "url": "assets/js/46.fd080f0c.js",
    "revision": "4d64ccc085388d8c788b600e1ba11c5c"
  },
  {
    "url": "assets/js/47.52fee2ff.js",
    "revision": "0c8f3e3bfa19e6e53233a57cf1cdf0a6"
  },
  {
    "url": "assets/js/48.69723db4.js",
    "revision": "408d2290feecca96a95a257cc83a26ef"
  },
  {
    "url": "assets/js/49.4619a2e4.js",
    "revision": "e15dc8f0ff742cdd0a415d1241ae12a1"
  },
  {
    "url": "assets/js/5.24725efe.js",
    "revision": "5276c8eb1b63c437da02ee03502f190f"
  },
  {
    "url": "assets/js/50.ebba33df.js",
    "revision": "a18f4feb7aec739e504faf1d991e0f20"
  },
  {
    "url": "assets/js/51.6471de29.js",
    "revision": "8adb437e55cc15073e50a8a4086feb0f"
  },
  {
    "url": "assets/js/52.6d4da793.js",
    "revision": "54fd2f7a8b5147ace5fe7161a1f17b4a"
  },
  {
    "url": "assets/js/53.3a6bfe5f.js",
    "revision": "4bd25b5d0309b4924f414ddc56f2cf9d"
  },
  {
    "url": "assets/js/54.6ccf73f4.js",
    "revision": "6d6347befd26ebff2ef2917ba227ed05"
  },
  {
    "url": "assets/js/55.dc1c410d.js",
    "revision": "63d78c31a8c58d88fd3aad5871464ad5"
  },
  {
    "url": "assets/js/56.a258bf7a.js",
    "revision": "54c2f199e4156abbdbf1fb668600eee2"
  },
  {
    "url": "assets/js/57.43b5d146.js",
    "revision": "4079aad7542fd8e8ee934cf5812bf1c3"
  },
  {
    "url": "assets/js/58.77a885a9.js",
    "revision": "3f1b8e2f0bba9a96074bf4d60a233d98"
  },
  {
    "url": "assets/js/59.96bc7373.js",
    "revision": "fa63fb5a2c447f36e1e4321873991d06"
  },
  {
    "url": "assets/js/6.67c595f8.js",
    "revision": "d4a2a4ecdf8790e18ce36439014ca4b5"
  },
  {
    "url": "assets/js/60.ad251b34.js",
    "revision": "adcca462c434192ccb795bcf0cab99c6"
  },
  {
    "url": "assets/js/7.3f39289d.js",
    "revision": "2add072f945a962f027ecfa3ef92fe7a"
  },
  {
    "url": "assets/js/app.55bf3d13.js",
    "revision": "6a33a28dfca4bc2b170ee8937a5d5959"
  },
  {
    "url": "assets/js/vendors~docsearch.4dff5a50.js",
    "revision": "1ac5cbda5c4f33b996115d3f3a739c5d"
  },
  {
    "url": "back/dataprocessing/frist.html",
    "revision": "42ce5e2b644651f6aebd285c9e4379e5"
  },
  {
    "url": "back/first.html",
    "revision": "16487ca76eaf550cb96f44bfb8fba68b"
  },
  {
    "url": "back/JAVA/frist.html",
    "revision": "2e021ba5854d43c6c4e13dbda8295c96"
  },
  {
    "url": "database/coursenotes/databaseoperations.html",
    "revision": "9a96e5f929f43f3f0270aa912bfb38e2"
  },
  {
    "url": "database/coursenotes/dataoperations.html",
    "revision": "7d7e3903621d71c8a2ac09e6d9b89336"
  },
  {
    "url": "database/coursenotes/gettingstarted.html",
    "revision": "8c4288f12ceb41109a67c8a8e47df0f3"
  },
  {
    "url": "database/coursenotes/indexes.html",
    "revision": "51f388337bac8be593ed594d3d55edf8"
  },
  {
    "url": "database/coursenotes/multitableoperations.html",
    "revision": "a5cc0281aa4b0a484206c595ef25aa11"
  },
  {
    "url": "database/coursenotes/transactions.html",
    "revision": "e5e628a580c974fe88a8264382181ed5"
  },
  {
    "url": "database/coursenotes/views.html",
    "revision": "1854180004ada99f4a753f667fd45550"
  },
  {
    "url": "frist.html",
    "revision": "657ccbd7f34e29a3bf6ed878b6cbd998"
  },
  {
    "url": "front/base.html",
    "revision": "c4848506d9053ea85e3009f6932c154e"
  },
  {
    "url": "front/base/CSS/frist.html",
    "revision": "3f1670d49e6844d81f625423ffe1296e"
  },
  {
    "url": "front/base/CSS/second.html",
    "revision": "e6e7c72d1f59fd588e95986930bf6e8c"
  },
  {
    "url": "front/base/HTML/frist.html",
    "revision": "6261245459dcf8a01d2aa0f5934d08d4"
  },
  {
    "url": "front/base/HTML/second.html",
    "revision": "527bdfbca97f60d985cad89db58a7e04"
  },
  {
    "url": "front/base/Javascript/frist.html",
    "revision": "b78652492ed0116bb35499b94d27fbf2"
  },
  {
    "url": "index.html",
    "revision": "62028dcec40f095ed9e33205e45fc6d6"
  },
  {
    "url": "note.png",
    "revision": "3cc525a4afdc782f9fd73589c6620286"
  },
  {
    "url": "zh/back/first.html",
    "revision": "dac3c44c1a801d70d0c9eb0428bcb7e2"
  },
  {
    "url": "zh/back/JAVA/frist.html",
    "revision": "c905bed708f9b7e0cf4ab229b60d3628"
  },
  {
    "url": "zh/back/数据处理/frist.html",
    "revision": "81f583a4f515129bf5134effa97788d0"
  },
  {
    "url": "zh/database/课程笔记/sql笔记.html",
    "revision": "a0b7c5afe12f7ebf19b040f29a786798"
  },
  {
    "url": "zh/database/课程笔记/事务.html",
    "revision": "c20484d33b7de72620b502270ef91b5f"
  },
  {
    "url": "zh/database/课程笔记/入门.html",
    "revision": "968b524f80ef81296b622b459ece64a4"
  },
  {
    "url": "zh/database/课程笔记/多表操作.html",
    "revision": "61b94713333eba3f97a5da11a84762c5"
  },
  {
    "url": "zh/database/课程笔记/数据库、数据表基操.html",
    "revision": "12595ba088625ae8ca1396c48a361214"
  },
  {
    "url": "zh/database/课程笔记/数据操作.html",
    "revision": "97e3f26460490af5d7a81aa861095b24"
  },
  {
    "url": "zh/database/课程笔记/视图.html",
    "revision": "a5447c1d82ef50419de6405c93b0d057"
  },
  {
    "url": "zh/database/课程笔记/索引.html",
    "revision": "2615686485d6d3fb08b431b0e59d1484"
  },
  {
    "url": "zh/frist.html",
    "revision": "51c685a3a707b7cd7aa905b4205ada1f"
  },
  {
    "url": "zh/front/base.html",
    "revision": "d17b0137ef44573e42ae3b0e36162107"
  },
  {
    "url": "zh/front/base/CSS/frist.html",
    "revision": "99319733328f7c2defb4c24349c76329"
  },
  {
    "url": "zh/front/base/CSS/second.html",
    "revision": "c13798c006e1b71746e4d5e10c7d3044"
  },
  {
    "url": "zh/front/base/HTML/frist.html",
    "revision": "94cd169b957c934e8c8ab5a5070d9173"
  },
  {
    "url": "zh/front/base/HTML/second.html",
    "revision": "5c48cb2aa90a8569f8f0cc7a97ec4156"
  },
  {
    "url": "zh/front/base/Javascript/frist.html",
    "revision": "9fdfbe590abeeb21de634f94e5934b2f"
  },
  {
    "url": "zh/index.html",
    "revision": "fe9a9ad86f7eada1361bfcc908baab0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
