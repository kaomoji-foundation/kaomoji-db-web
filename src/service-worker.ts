/// <reference lib="WebWorker" />
import { skipWaiting, clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);
skipWaiting();
clientsClaim();

