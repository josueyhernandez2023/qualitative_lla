(function () {
	var s = { ac: "mBA9wdsD", vid: "6YtVB1J4", surl: "https://binkiesproductionweu.servicebus.windows.net/binkiesproductionp2weu/messages", sauth: "SharedAccessSignature sr=https%3a%2f%2fbinkiesproductionweu.servicebus.windows.net%2fbinkiesproductionp2weu%2fmessages&sig=A6zt02ZPMLTBDeLKjtBivG2RoJS0nhMxIon%2bQ2ZNZYA%3d&se=1736986075&skn=Send" };
	var errors = new Set();
	window.addEventListener("error", function (e) {
		var isPlayerError = e.filename.startsWith("https://engage-content.binkies3d.com/players");
		var isIntegrationError = e.filename.startsWith("https://engage-content.binkies3d.com/integrations") || e.filename.startsWith("https://embed.binkies3d.com");
		if (isPlayerError || isIntegrationError) {
			try {
				var errorMessage = e.error && e.error.stack ? e.error.stack : e.message + ":" + e.filename + ": " + e.lineno + ":" + e.colno;
				if (errors.has(errorMessage)) return;
				errors.add(errorMessage);
				var message = {
					accessKey: s.ac,
					messageType: "Error",
					viewId: s.vid,
					source: isPlayerError ? "player" : "integration",
					href: window.location.href,
					message: errorMessage,
					userAgent: navigator.userAgent
				}
				var req = new XMLHttpRequest();
				req.withCredentials = true;
				req.open("POST", s.surl, true);
				req.setRequestHeader("Content-type", "application/atom+xml;type=entry;charset=utf-8");
				req.setRequestHeader("Authorization", s.sauth);
				req.send(JSON.stringify(message));
			} catch (e) { }
		}
	});
})();
(function () {
    var regex = /biv=([0-9a-zA-Z]*)/;
    var match = regex.exec(location.search);

    if (match != null)
    {
        var script = document.createElement('script');script.crossOrigin="anonymous";script.async=true;
        script.src = 'https://embed.binkies3d.com/integrations/mBA9wdsD/0ygoh7va/' + match[1] + '/script.js';
        document.head.appendChild(script);
    }
    else {
        !function(t){"use strict";var n=function(){};n.main=function(){var t={IntegrationUrlPath:"https://engage-content.binkies3d.com/integrations/mBA9wdsD/0ygoh7va/bdd8909",IntegrationId:"0ygoh7va",IntegrationVersion:"bdd8909",AccessKey:"mBA9wdsD",IsLive:!0};window.BinkiesSettings={ViewSettings:e.ViewSettings,IntegrationSettings:t,Supports3D:e.Supports3D};var n=window.document.createElement("script");n.crossOrigin="anonymous";n.async=true;n.src=t.IntegrationUrlPath+"/integration_static.js",window.document.head.appendChild(n)};var e=function(){};e.Supports3D=function(t,n){null==n&&(n=!1),t(!0,"",null)},e.ViewSettings={ViewId:"6YtVB1J4",StatsUrl:"https://binkiesproductionweu.servicebus.windows.net/binkiesproductionp2weu/messages",StatsToken:"SharedAccessSignature sr=https%3a%2f%2fbinkiesproductionweu.servicebus.windows.net%2fbinkiesproductionp2weu%2fmessages&sig=A6zt02ZPMLTBDeLKjtBivG2RoJS0nhMxIon%2bQ2ZNZYA%3d&se=1736986075&skn=Send",PlayerPath:"https://engage-content.binkies3d.com/players/prod/98q3458g",BrowserSupportsBrotli:true,BrowserSupportsGzip:true},n.main()}();
    }
})()