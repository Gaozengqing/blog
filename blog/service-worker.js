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
    "revision": "537d8cdaa2736376d12ae7ee825f6ef5"
  },
  {
    "url": "assets/css/0.styles.86229549.css",
    "revision": "6c6e055a16edfc13e958eb5f1dae1c14"
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
    "url": "assets/js/24.588f552f.js",
    "revision": "b441f3a26fe0044de14775bc2354b673"
  },
  {
    "url": "assets/js/25.4522f3a7.js",
    "revision": "c0602178b675619296fbcd1371c57091"
  },
  {
    "url": "assets/js/26.6cdbb216.js",
    "revision": "6dd3cc328d427803ef116abf7a7c9ea1"
  },
  {
    "url": "assets/js/27.d2137ba1.js",
    "revision": "e39abe4a496a26d5a2e3125894a2b34a"
  },
  {
    "url": "assets/js/28.da06b5d1.js",
    "revision": "53cd0aef16bb4cb367d8550f024bc281"
  },
  {
    "url": "assets/js/29.e4202f72.js",
    "revision": "c3a7dd8b89ddb2c034804a6b25bec24b"
  },
  {
    "url": "assets/js/3.1bda5a3b.js",
    "revision": "884ef23af810b4aec6798d03d07cc5b2"
  },
  {
    "url": "assets/js/30.16ce7af7.js",
    "revision": "48d73c6184b89e20fc7c6b89bc95c559"
  },
  {
    "url": "assets/js/31.0886b7ee.js",
    "revision": "c5237d7ae6059dcd66112f1cf3213c16"
  },
  {
    "url": "assets/js/32.ac7ef8ec.js",
    "revision": "4c0b4afc62bfc491f3418daab502f328"
  },
  {
    "url": "assets/js/33.e9201557.js",
    "revision": "a4ea15903dd46505b6bb2069728f75c3"
  },
  {
    "url": "assets/js/34.57dc5ba5.js",
    "revision": "66cdaa5b2f3851ed8f0183e9ce1fafd8"
  },
  {
    "url": "assets/js/35.d8a2cb5d.js",
    "revision": "aec4551b189a83f279c6d744618d3e15"
  },
  {
    "url": "assets/js/36.1c982d8a.js",
    "revision": "e251876cc2e61cfed933f7fb939a6464"
  },
  {
    "url": "assets/js/37.cf4359ce.js",
    "revision": "3d3b985b266e375f482f14c2ce31e688"
  },
  {
    "url": "assets/js/38.8631c89b.js",
    "revision": "b6f92691afcc597e4d24e7dfa987d606"
  },
  {
    "url": "assets/js/39.d7679381.js",
    "revision": "725e2364d2786d4653ada97b4dd8efc3"
  },
  {
    "url": "assets/js/4.9e01a26f.js",
    "revision": "fa30b8e928be0f2a7728312cf17b88ea"
  },
  {
    "url": "assets/js/40.4b310e42.js",
    "revision": "dcfec022711b2db95594cf2d615cee3f"
  },
  {
    "url": "assets/js/41.a5fbdafd.js",
    "revision": "6e7f4b7304977ccf2a23bfc14f16f62b"
  },
  {
    "url": "assets/js/42.f6b5d4df.js",
    "revision": "0f41a2ea83c940c7649d28e82c40f3ae"
  },
  {
    "url": "assets/js/43.222df8b3.js",
    "revision": "f837d46413e604a5d8598c6f8a828971"
  },
  {
    "url": "assets/js/44.9b46d5ac.js",
    "revision": "c5572f74653ae1bc196e9dfd0ee7dfd3"
  },
  {
    "url": "assets/js/45.fcefdf0b.js",
    "revision": "c8eeffbec73568c97c8f21c7b320f190"
  },
  {
    "url": "assets/js/46.28e7b3cb.js",
    "revision": "ef8337befd5ec373578046a4a5254019"
  },
  {
    "url": "assets/js/47.efcb8fb7.js",
    "revision": "47a2924bc4287cccf909a3798b2e07fd"
  },
  {
    "url": "assets/js/48.580164b2.js",
    "revision": "69dd48acfcf769746eae0e8295ffd90b"
  },
  {
    "url": "assets/js/49.a24614cf.js",
    "revision": "50236dc704e1a8165597e54718b7d438"
  },
  {
    "url": "assets/js/5.24725efe.js",
    "revision": "5276c8eb1b63c437da02ee03502f190f"
  },
  {
    "url": "assets/js/50.f6a5e2e3.js",
    "revision": "00eacfda7d779b05956d4cc11050d969"
  },
  {
    "url": "assets/js/51.a4056af7.js",
    "revision": "155b2fa7d78ceabda4961a985d39fff6"
  },
  {
    "url": "assets/js/52.ce027b31.js",
    "revision": "f6583c7b3f7ae5219ea7e99c056c3faa"
  },
  {
    "url": "assets/js/53.a1e62627.js",
    "revision": "3c63c8ab8ddeb41bf11f16edce03b968"
  },
  {
    "url": "assets/js/54.e4bf60bb.js",
    "revision": "bf89ead5a94983ba01152909e18ad03b"
  },
  {
    "url": "assets/js/55.d25a581b.js",
    "revision": "650ff2e52eae7a327e275374b4410d93"
  },
  {
    "url": "assets/js/56.99dff7de.js",
    "revision": "6791672318702a2246d2f9afdde2ebae"
  },
  {
    "url": "assets/js/57.3a7e915a.js",
    "revision": "63bdf2a48f0cbbd9ecaa9e30fba8489b"
  },
  {
    "url": "assets/js/58.d3d6fbc9.js",
    "revision": "8eb5384dd0ed39376d11ec0ca7663168"
  },
  {
    "url": "assets/js/59.8ff818f2.js",
    "revision": "03c2c5735db45aca2c64e2f0003218e5"
  },
  {
    "url": "assets/js/6.67c595f8.js",
    "revision": "d4a2a4ecdf8790e18ce36439014ca4b5"
  },
  {
    "url": "assets/js/60.6c71888b.js",
    "revision": "9bef0bcbec5e11c9a5a3ecffe7d717f2"
  },
  {
    "url": "assets/js/61.30b321ca.js",
    "revision": "5517a4bbd117d10e2c259927db338d85"
  },
  {
    "url": "assets/js/7.3f39289d.js",
    "revision": "2add072f945a962f027ecfa3ef92fe7a"
  },
  {
    "url": "assets/js/app.a84a5bc4.js",
    "revision": "6c307ce83dd6d82d7d4820b6309f4c75"
  },
  {
    "url": "assets/js/vendors~docsearch.4dff5a50.js",
    "revision": "1ac5cbda5c4f33b996115d3f3a739c5d"
  },
  {
    "url": "back/dataprocessing/frist.html",
    "revision": "6e4ade31573153bddc5504f89c7718aa"
  },
  {
    "url": "back/first.html",
    "revision": "2ff3f163e7dce6890372305e148c2a1c"
  },
  {
    "url": "back/JAVA/frist.html",
    "revision": "4ad87292789c5029b2dc76cab68ee0bc"
  },
  {
    "url": "database/coursenotes/databaseoperations.html",
    "revision": "4b070bca731cc99377298d9762f6ce8b"
  },
  {
    "url": "database/coursenotes/dataoperations.html",
    "revision": "34b2a6d22cb39bd71a35569ebfd03831"
  },
  {
    "url": "database/coursenotes/gettingstarted.html",
    "revision": "ffc053feca92ae92d546d8d329fdcaaf"
  },
  {
    "url": "database/coursenotes/indexes.html",
    "revision": "fe110a89135f338c45a6896500d9577d"
  },
  {
    "url": "database/coursenotes/multitableoperations.html",
    "revision": "a9bcc521f3a6163fa373e509a220cf6e"
  },
  {
    "url": "database/coursenotes/transactions.html",
    "revision": "ffbd1763f8bdbb785f29de1a125347ee"
  },
  {
    "url": "database/coursenotes/views.html",
    "revision": "2c1f6588d907d5e1a3602d8f129c5c3d"
  },
  {
    "url": "foo.html",
    "revision": "e95df14ad2ae238aac2b682466d5517a"
  },
  {
    "url": "frist.html",
    "revision": "8c239461b0de2ee207da0280ad21f46a"
  },
  {
    "url": "front/base.html",
    "revision": "17000ed3ce953b8e958962ae851037e0"
  },
  {
    "url": "front/base/CSS/frist.html",
    "revision": "6c8d7e8c2aa46343c72fc59e8ec5d15e"
  },
  {
    "url": "front/base/CSS/second.html",
    "revision": "bbd731ffadbeb4be3796969103894393"
  },
  {
    "url": "front/base/HTML/frist.html",
    "revision": "567c4f840d13ed48868598b50b9a244b"
  },
  {
    "url": "front/base/HTML/second.html",
    "revision": "7e0bddbaf9c8295144515baed3d9d098"
  },
  {
    "url": "front/base/Javascript/frist.html",
    "revision": "e547a10bab45225f6995660c2d6c8356"
  },
  {
    "url": "index.html",
    "revision": "b703f532e8e99493c33fa06a207ec942"
  },
  {
    "url": "note.png",
    "revision": "3cc525a4afdc782f9fd73589c6620286"
  },
  {
    "url": "zh/back/first.html",
    "revision": "b856b2dbc6700e4961c4c728e2f8b3a2"
  },
  {
    "url": "zh/back/JAVA/frist.html",
    "revision": "bc2c323d610a06c37eed80689c3f86aa"
  },
  {
    "url": "zh/back/数据处理/frist.html",
    "revision": "ffabb5a3e01025bd098bc5b8e9c691df"
  },
  {
    "url": "zh/database/课程笔记/sql笔记.html",
    "revision": "9e2b22226b9a13a5e6a4d8d62870dee3"
  },
  {
    "url": "zh/database/课程笔记/事务.html",
    "revision": "539ff072a9c4a8135db0a83e0d8ab9ee"
  },
  {
    "url": "zh/database/课程笔记/入门.html",
    "revision": "9368adbcdf784a712464e74e9794f06f"
  },
  {
    "url": "zh/database/课程笔记/多表操作.html",
    "revision": "0a5b82613e3622430fe0e3ac8ac9b8d4"
  },
  {
    "url": "zh/database/课程笔记/数据库、数据表基操.html",
    "revision": "cd843bec2ef49769988b83921be90e86"
  },
  {
    "url": "zh/database/课程笔记/数据操作.html",
    "revision": "a1c6ba09f09a62aacacb8905a955f633"
  },
  {
    "url": "zh/database/课程笔记/视图.html",
    "revision": "72e3c9aa092d377472125ac5d215fced"
  },
  {
    "url": "zh/database/课程笔记/索引.html",
    "revision": "5b798bdbad731ca1d8f3ef6285186016"
  },
  {
    "url": "zh/foo.html",
    "revision": "9f1fbb7fd628955257fd5590bd9a4a8d"
  },
  {
    "url": "zh/front/base.html",
    "revision": "db8a0c331587bc6bab6a2b7d26b99b8a"
  },
  {
    "url": "zh/front/base/CSS/frist.html",
    "revision": "34f7dded0806e2c58a8ca88ee50c7f27"
  },
  {
    "url": "zh/front/base/CSS/second.html",
    "revision": "84e4ad4ab5121343faacf09dbb991bda"
  },
  {
    "url": "zh/front/base/HTML/frist.html",
    "revision": "ba3fe474cbe9001e7606c6807ecc7ebf"
  },
  {
    "url": "zh/front/base/HTML/second.html",
    "revision": "694f8bdde572ab2a6d88ea40364e24d3"
  },
  {
    "url": "zh/front/base/Javascript/frist.html",
    "revision": "75585450e3b94efc62e8264df41ce027"
  },
  {
    "url": "zh/index.html",
    "revision": "b7ccbf6995403c69cc30e00601fd1ece"
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
