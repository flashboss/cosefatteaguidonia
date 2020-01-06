
window._currentDevice = 'desktop';
window.Parameters = window.Parameters || {
	AjaxContainer: 'div.dmBody',
	WrappingContainer: 'div.dmOuter',
	HomeUrl: 'https://www.cosefatteaguidonia.it/',
	AccountUUID: 'c54fdd8d12594f1da818ac25cdad8f37',
	SystemID: 'US_DIRECT_PRODUCTION',
	SiteAlias: '65a57fdf',
	SiteId: '1609154',
	SiteType: atob('RFVEQU9ORQ=='),
	ExternalUid: '16826973',
	IsSiteMultilingual: false,
	InitialPostAlias: '',
	InitialDynamicItem: '',
	InitialPageAlias: 'home',
	InitialEncodedPageAlias: 'aG9tZQ==',
	CurrentPageUrl: '',
	IsCurrentHomePage: true,
	AllowAjax: true,
	AfterAjaxCommand: null,
	HomeLinkText: 'Back To Home',
	UseGalleryModule: false,
	CurrentThemeName: 'Layout Theme',
	ThemeVersion: '920',
	DefaultPageAlias: '',
	RemoveDID: true,
	WidgetStyleID: null,
	IsHeaderFixed: false,
	IsHeaderSkinny: false,
	IsBfs: true,
	LayoutParams: {
		_navigationAnimationStyle: 'slide',
		_manifestId: 10600,
		_device: 'desktop'
	},
	StorePageAlias: 'null',
	StorePath: '',
	StoreId: 'null',
	StoreVersion: 0,
	StoreBaseUrl: '',
	StoreCleanUrl: true,
	StoreDisableScrolling: true,
	NotificationSubDomain: 'cosefatteaguidonia',
	HasCustomDomain: true,
	showCookieNotification: true,
	cookiesNotificationMarkup: ' <div>Utilizziamo i cookie per garantire la miglior esperienza possibile sul nostro sito Web. Per maggiori informazioni, passare alla pagina della privacy.<\/div> \n',
	translatedPageUrl: '',
	isFastMigrationSite: false,
	sidebarPosition: 'LEFT',
	currentLanguage: 'it',
	NavItems: 'W3sidGl0bGUiOiJIb21lIiwiYWxpYXMiOiJob21lIiwicGF0aCI6Ii8iLCJpbk5hdmlnYXRpb24iOmZhbHNlLCJzdWJOYXYiOltdfSx7InRpdGxlIjoiQ29udGFjdCIsImFsaWFzIjoiI0NvbnRhY3RVcyIsInBhdGgiOiIvI0NvbnRhY3RVcyIsImluTmF2aWdhdGlvbiI6dHJ1ZSwic3ViTmF2IjpbXX1d',
	errors: {
		general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
		password: 'Incorrect name/password combination',
		tryAgain: 'Try again'
	},
	NavigationAreaParams: {
		ShowBackToHomeOnInnerPages: true,
		NavbarSize: 5,
		NavbarLiveHomePage: 'https://www.cosefatteaguidonia.it/',
		BlockContainerSelector: '.dmBody',
		NavbarSelector: '#dmNav:has(a)',
		SubNavbarSelector: '#subnav_main'
	},
	hasCustomCode: false,
	planID: 1220
};

window.Parameters.LayoutID = {};
window.Parameters.LayoutID[window._currentDevice] = 23;
window.Parameters.LayoutVariationID = {};
window.Parameters.LayoutVariationID[window._currentDevice] = 5;


function toHash(str) {
	var hash = 5381, i = str.length;
	while (i) {
		hash = hash * 33 ^ str.charCodeAt(--i)
	}
	return hash >>> 0
}

var cacheKey = '3~MODERN~2042774276~65a57fdf~1576703469000~1576703458000~home~~false~desktop~1576703469000';
var hashedCacheKey = cacheKey ? toHash(cacheKey) : '';

(function (global) {
	const cacheKey = global.cacheKey;
	const isOffline = 'onLine' in navigator && navigator.onLine === false;
	const hasServiceWorkerSupport = 'serviceWorker' in navigator;
	if (isOffline) {
		console.log('offline mode');
	}
	if (!hasServiceWorkerSupport) {
		console.log('service worker is not supported');
	}
	if (hasServiceWorkerSupport && !isOffline) {
		window.addEventListener('load', function () {
			const serviceWorkerPath = '/runtime-service-worker.js?v=2';
			navigator.serviceWorker
				.register(serviceWorkerPath, { scope: './' })
				.then(
					function (registration) {
						// Registration was successful
						console.log('ServiceWorker registration successful with scope: ', registration.scope);
					},
					function (err) {
						// registration failed :(
						console.log('ServiceWorker registration failed: ', err);
					}
				)
				.catch(function (err) {
					console.log(err);
				});
		});

		// helper function to refresh the page
		var refreshPage = (function () {
			var refreshing;
			return function () {
				if (refreshing) return;
				// prevent multiple refreshes
				var refreshkey = 'refreshed' + location.href;
				var prevRefresh = localStorage.getItem(refreshkey);
				if (prevRefresh) {
					localStorage.removeItem(refreshkey);
					if (Date.now() - prevRefresh < 30000) {
						return; // dont go into a refresh loop
					}
				}
				refreshing = true;
				localStorage.setItem(refreshkey, Date.now());
				console.log('refereshing page');
				window.location.reload();
			};
		})();

		// checks the updated cache key
		function checkCacheKey() {
			var baseUrl = '/_dm/s/rt/actions/cacheKey';
			const uri = location.pathname;
			var cacheKeyUrl =
				baseUrl + (baseUrl.indexOf('?') > -1 ? '&' : '?') + 'skip_sw_cache&uri=' + encodeURIComponent(uri);
			return fetch(cacheKeyUrl)
				.then(function (resp) {
					return resp && resp.json ? resp.json() : {};
				})
				.then(function (cacheObj) {
					if (cacheObj && cacheObj.value) {
						if (cacheObj.value !== cacheKey) {
							// stale version
							return { newKey: cacheObj.value };
						}
					}
				})
				.catch(function (err) {
					return {};
				});
		}

		function messageServiceWorker(data) {
			return new Promise(function (resolve, reject) {
				if (navigator.serviceWorker.controller) {
					var worker = navigator.serviceWorker.controller;
					var messageChannel = new MessageChannel();
					messageChannel.port1.onmessage = replyHandler;
					worker.postMessage(data, [messageChannel.port2]);
					function replyHandler(event) {
						resolve(event.data);
					}
				} else {
					resolve();
				}
			});
		}
	}
})(window);
window.SystemID = 'US_DIRECT_PRODUCTION';

if (!window.requestIdleCallback) {
	window.requestIdleCallback = function (fn) {
		setTimeout(fn, 0);
	}
}

function loadCSS(link) {
	try {
		var urlParams = new URLSearchParams(window.location.search);
		var noCSS = !!urlParams.get('nocss');
		var cssTimeout = urlParams.get('cssTimeout') || 0;

		if (noCSS) {
			return;
		}
		requestIdleCallback(function () {
			window.setTimeout(function () {
				link.onload = null;
				link.rel = 'stylesheet';
				link.type = 'text/css'
			}, parseInt(cssTimeout, 10));
		});
	} catch (e) {/* Never fail - this is just a tool for measurements */ }
}
(function (n) { "use strict"; if (!n.l) { n.l = function () { } } var o = loadCSS.t = {}; o.o = function () { var l; try { l = n.document.createElement("link").relList.supports("preload") } catch (e) { l = false } return function () { return l } }(); o.i = function (e) { var l = e.media || "all"; function enableStylesheet() { if (e.addEventListener) { e.removeEventListener("load", enableStylesheet) } else if (e.attachEvent) { e.detachEvent("onload", enableStylesheet) } e.setAttribute("onload", null); e.media = l } if (e.addEventListener) { e.addEventListener("load", enableStylesheet) } else if (e.attachEvent) { e.attachEvent("onload", enableStylesheet) } setTimeout(function () { e.rel = "stylesheet"; e.media = "only x" }); setTimeout(enableStylesheet, 3e3) }; o.s = function () { if (o.o()) { return } var e = n.document.getElementsByTagName("link"); for (var l = 0; l < e.length; l++) { var t = e[l]; if (t.rel === "preload" && t.getAttribute("as") === "style" && !t.getAttribute("data-loadcss")) { t.setAttribute("data-loadcss", true); o.i(t) } } }; if (!o.o()) { o.s(); var e = n.setInterval(o.s, 500); if (n.addEventListener) { n.addEventListener("load", function () { o.s(); n.clearInterval(e) }) } else if (n.attachEvent) { n.attachEvent("onload", function () { o.s(); n.clearInterval(e) }) } } if (typeof exports !== "undefined") { exports.l = loadCSS } else { n.l = loadCSS } })(typeof global !== "undefined" ? global : this);