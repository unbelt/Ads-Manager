'use strict';

(function () {

    // Page preloader
    var preloader = document.createElement('div');
    preloader.setAttribute('style', 'opacity: 1; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: #fff; z-index: 99;');
    document.body.appendChild(preloader);

    setTimeout(function () {
        var interval = setInterval(function () {
            preloader.style.opacity -= 0.03;
            if (preloader.style.opacity < 0) {
                clearInterval(interval);
                preloader.className = 'hide';
            }
        }, 10);

        // target _blank to all external links
        var links = document.getElementsByTagName('a');

        [].forEach.call(links, function (link) {

            if (link.getAttribute('href').indexOf('#') === -1) {
                link.setAttribute('target', '_blank');
            }
        });

    }, 150);
}());