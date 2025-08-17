// ==UserScript==
// @name         YouTube-YTMusic-Nonstop
// @namespace    https://github.com/nvbangg
// @version      1.0
// @description  Prevent YouTube/YouTube Music from pausing playback
// @author       nvbangg (https://github.com/nvbangg)
// @copyright    Copyright (c) 2025 Nguyễn Văn Bằng (nvbangg, github.com/nvbangg)
// @homepage     https://github.com/nvbangg/nvbangg-tools
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // Force page to always appear visible
    Object.defineProperties(document, {
        hidden: { value: false },
        visibilityState: { value: 'visible' }
    });

    // Block visibilitychange events
    addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);

    // Keep _lact (last activity) fresh
    const keepActive = () => { if ('_lact' in window) setInterval(() => window._lact = Date.now(), 300000); };
    (function wait() { '_lact' in window ? keepActive() : setTimeout(wait, 1000); })();
})();