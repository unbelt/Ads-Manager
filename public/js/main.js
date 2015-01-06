'use strict';

(function () {

    // Page preloader
    var preloader = document.createElement('div'),
        spinner = document.createElement('span');
    preloader.id = 'preloader';
    spinner.className = 'spinner';
    preloader.appendChild(spinner);

    document.body.appendChild(preloader);

    setTimeout(function () {
        preloader = document.getElementById('preloader');
        preloader.style.opacity = 1;

        var refreshIntervalId = setInterval(function () {
            preloader.style.opacity -= 0.03;
            if (preloader.style.opacity < 0) {
                clearInterval(refreshIntervalId);
                preloader.removeAttribute('style');
                preloader.className = 'hide';
            }
        }, 10);

    }, 150);

    // target _blank to all external links
    var links = document.getElementsByTagName('a');

    [].forEach.call(links, function (link) {
        if (link.getAttribute('href').indexOf('#') === -1) {
            link.setAttribute('target', '_blank');
        }
    });

}());