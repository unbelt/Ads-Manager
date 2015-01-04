'use strict';

adsApp.factory('loginService', function loginService(config) {

    return {
        login: function () {
            console.log('login');
        }
    }
});