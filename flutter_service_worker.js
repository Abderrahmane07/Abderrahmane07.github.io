'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d87e198fd07bd5c857879cbda8c1aef0",
".git/config": "74e75f660b530011a097953f6fad23ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "429391dcd91edb28fe11871f3a918ac1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7175deb9468f9c54150b2dd379cd13b0",
".git/logs/refs/heads/main": "3a73114c9bb488a6581c82b837d5f22d",
".git/logs/refs/remotes/origin/main": "e11f6a597f4584831716ee5d7119229f",
".git/objects/01/8977e8fc6ad45da19baad3dca6ad4779e765be": "68f8970bfbcc0ef3e4f63bc8e6849987",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/daf39e9006e4dcc099835500185bd61c94cf77": "eafe590cc932d9c4c3c9646eabff3cc9",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/2a444989c9cce9fe651a837160612a923c877d": "cd4595ee7fd7136a8aea2fc6391f55fb",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/2b057c654e7762748cb93d1b73e2fe031ec1e2": "e3455dc62752e1871dcf5e777f2435ad",
".git/objects/2b/a29fa03389ae42832244284e9ca9d989b489ad": "b624a8fe038e6a1ca8433c52d247d6ed",
".git/objects/2b/d36fc33ca3dc1e8b3a084b274d770da4b9c372": "a42792ff4fca7c585e321736549e15c2",
".git/objects/35/d94fc2857bc0a593b1787f86c68c4a3351e764": "2c2e7f1e38f6544011f47eea419de4fa",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/a6b65af309f081eb71cb4fc1bda4faa982eeed": "427827e78cd53be9e5b6309743035d8a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/4a9f61c7cd6bd8790414fd1180ffb1eae9006e": "3ffe9c83c6397ef1ac8f78e96b92a2b4",
".git/objects/52/013636cd350a5138720ac064d526b48460eb8c": "8325d660a62a8a7b8a6f7fb8533c7658",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/c501122772c5e769e266055e431f921766803f": "4c18ee18f804dac0fb51435ecbb45d49",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/c69de47be6e990194f3c40844f7bff8c469958": "622c898fcc4b9bd0dc232fa1768637c6",
".git/objects/5f/6edcff5ace475e898b3ced363beb79873a738e": "1238eba12697e8dd0deb639f31b107da",
".git/objects/6b/2337478f813af88bd0ca10469d859c7a46531f": "e75c6bdf85caabeb7d5fed46a30c7953",
".git/objects/6d/490dabfd624ac66c07341592bc54ece3a121d5": "4bf277d51cf2bc32d04f55d4492f0802",
".git/objects/6d/6c07379424a95d94123447737b3adb53de7d8d": "022c66ac32e70dc1b183831bb66d4fde",
".git/objects/70/549cc59eeee1b39ed14d1c8d5dc47dbc0d61a4": "5adbd375fa8161854f1e816db4a04e39",
".git/objects/7a/486409b1ba2212f1c4a9ac40a96f1b418d5aab": "314a14ccd0587a303e8902ed9bf1cc3c",
".git/objects/7d/707215466f793ee9a54e7e22cd4b9dda417b12": "91f2732f31f7a77b914486ca9e41048b",
".git/objects/80/3ff08746d09a7bb779e0d11f86bb03e69efd2f": "264aa709a8c9b7535510f3b35dbef3ae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/90/841c5f66d2b0430a33cae87fec6f788f73b6e4": "6d3c6ee4dbd02cca9be7b73d16944fcb",
".git/objects/95/0142e59c0ef447057c977e79034bc06a5d7721": "98d93710040730d3bc8de04d93839039",
".git/objects/96/cc904a281f09294651b639154ec13b215f519d": "f87ce3b49057d06417efb2f7924cded3",
".git/objects/a4/65b911c73365a3fc4717a8924311507eef5517": "1b6f378a4695ed36e6922277a4dd7bfa",
".git/objects/a4/f1cb61930344783ff5035354fa80c92be0570f": "862a827766d64be27ad6f1fd2d9f3d6b",
".git/objects/a5/84979197d2a3b823298f6867a6c42fa0ca8776": "7336556bac91cb620d2bafeda06b350f",
".git/objects/a6/6ea6e682e83c6272f1ddd7340b2d340eb97bf2": "3472c5b332c68e9ecb586d8df2e251d2",
".git/objects/a6/7fb0200013b542007bc14f1a37d5a7072fbfd8": "ddc1e20715f8b8a0d027d87085355eab",
".git/objects/b5/102857bf77f5c482511c488421fe00d696ce84": "9d9ea7a5571728916754ebad125c6311",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ed10e4952a1d43886737d8a6648f427f168728": "50707abca247808079227d8f7ba1353c",
".git/objects/c4/be5c0b3e19ca40958a7a0ed9f26ac59d5a3cde": "0fc74435af09bbca731c32ac311be320",
".git/objects/c7/86ee563a507cbb8996eb87088f663cfd0779b1": "6472a8819bc496a12cf897e233fb6d2f",
".git/objects/c9/9dcf989d45d9c93d36e844940f7bf5199843d7": "9cd97625b4431cf5d644d5b825b033a9",
".git/objects/d0/09b5b1bb7c848dccd775648502385fd82b5211": "67fc902d86b6d64ebcdd8ee0160e1624",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/db549d2c0fef8ca163b943de1db068b09d832c": "7fe014ab8707d6d105f9b65a4735792b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/b4aea33db3d83805f9b38d614f455b33fa996b": "cc6c0ff5ebf91126eb9d57868957e29d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ef4c8f7134907e6e88179b2ecceb4c511a27a2": "90a89e41d3b7da40bcc31213019488e9",
".git/objects/f5/9e4f358c7974b4ff7c70caa8039070c342eb3a": "ad76728e6d4b9ca332c81bd3c9115f4a",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "907a0b1d99a8f6eb3278371fadcec831",
".git/refs/remotes/origin/main": "907a0b1d99a8f6eb3278371fadcec831",
"assets/AssetManifest.bin": "df6bf8d645981e81357676aa805a06e7",
"assets/AssetManifest.bin.json": "8e1399d4c4201af85e417a484e2dcfa0",
"assets/AssetManifest.json": "f393bb8037fc8a3d76133d2d789f1d6c",
"assets/assets/images/icons/about_icon.png": "37ec6fae8f95c6e2220bd99e7c287657",
"assets/assets/images/icons/calendar_icon.png": "4706f8ac25f3ae85a24166c492cfe7e2",
"assets/assets/images/icons/fullscreen_icon.png": "237c448cb245de48e439528d32e7a51a",
"assets/assets/images/icons/github_icon.png": "11e0ea62b01d40be1c6231f2fde0ad06",
"assets/assets/images/icons/linkedin_icon.png": "02bff898877bd500613a0f9e123e6bfe",
"assets/assets/images/icons/mail_icon.png": "87281dd69ee0b60e8f9504aa97bd4d82",
"assets/assets/images/icons/pdf_icon.png": "a394e0453f0666ecd35d8653f37deed0",
"assets/assets/images/icons/projects_icon.png": "a8c7c899619bedbc013982cca0cb3139",
"assets/assets/images/icons/roadmap_icon.png": "0a014e6b11473e81b8656791a0b25e56",
"assets/assets/images/Photo.png": "df124aaf86f2fd2029ff9f1e3d377fef",
"assets/assets/images/windows_bg.jpg": "6d3b8b1daf750230f28d065fd22f4fd7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "439f1357c8afeab0966ec4b20ce01f88",
"assets/NOTICES": "dd14ea4a522de575f3c9398361f26807",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f60682739e4da71b9487b8f4831e5dd",
"/": "2f60682739e4da71b9487b8f4831e5dd",
"main.dart.js": "7079433a5dde9882e37845fcece14999",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
