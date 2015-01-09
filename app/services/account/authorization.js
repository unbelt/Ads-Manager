'use strict';

angular.module('adsApp')
    .factory('authorization', ['cookieStorage', function (cookieStorage) {
        return {
            getAuthorizationHeader: function () {
                if(cookieStorage.getCurrentUser()) {
                    return {
                        'Authorization': 'Bearer ' + cookieStorage.getCurrentUser()['access_token']
                    }
                }
            }
        }
    }]
);