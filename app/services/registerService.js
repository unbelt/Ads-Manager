'use strict';

adsApp.factory('registerService', function registerService(config) {

    return {
        register: function () {
            console.log('register');
        }
    }
});