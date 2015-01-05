'use strict';

angular.module('adsApp')
    .factory('catalog', ['$resource', '$http', '$q', 'config', function ($resource, $http, $q, config) {
        return {
            getAll: function (resource) {
                var deferred = $q.defer();

                $http.get(config.app.api + resource)
                    .success(function (response) {
                        deferred.resolve(response);
                    }, function () {
                        console.log('fail');
                    });

                return deferred.promise;
            },
            getCatalog: function (categoryId, townId, startPage, pageSize) {
                var deferred = $q.defer();

                $http.get(config.app.api + 'ads?categoryId=' + categoryId + '&townId=' + townId + '&startPage=' + startPage + '&pageSize=' + pageSize)
                    .success(function (response) {
                        deferred.resolve(response);
                    }, function () {
                        console.log('fail');
                    });

                return deferred.promise;
            }
        }
    }]
);