// Service worker minimal : rend Signalo installable. Aucun cache, aucune donnée stockée.
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(){ /* passe directement au réseau */ });
