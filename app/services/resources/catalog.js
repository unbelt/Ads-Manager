'use strict';

angular.module('adsApp')
    .factory('catalog', ['$resource', '$http', '$q', '$rootScope', 'config', 'authorization',
        function ($resource, $http, $q, $rootScope, config, authorization) {
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

                    $http.get(config.app.api +
                    'ads?categoryId=' + categoryId +
                    '&townId=' + townId +
                    '&startPage=' + startPage +
                    '&pageSize=' + pageSize
                    )
                        .success(function (response) {
                            deferred.resolve(response);
                        }, function () {
                            console.log('fail');
                        });

                    return deferred.promise;
                },
                getUserCatalog: function (status, startPage, pageSize) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.get(config.app.api +
                        'user/ads?status=' + status +
                        '&StartPage=' + startPage +
                        '&PageSize=' + pageSize,
                        {headers: headers}
                    )
                        .success(function (response) {
                            deferred.resolve(response);
                        }, function () {
                            console.log('fail');
                        });

                    return deferred.promise;
                },
                createAd: function (ad) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.post(config.app.api + 'user/ads', ad, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                        }, function () {
                            console.log('Failed');
                        });

                    return deferred.promise;
                },
                changeAdStatus: function (id, status) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(config.app.api + 'user/ads/' + status +'/' + id, {}, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            $rootScope.message = 'success';
                        }, function () {
                            $rootScope.message = 'error';
                        });

                    return deferred.promise;
                },
                editAd: function (id, ad) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(config.app.api + 'user/ads/' + id, ad, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            console.log(response);
                        }, function () {
                            console.log('Fail');
                        });

                    return deferred.promise;
                },
                deleteAd: function (id) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http(config.app.api + 'user/ads' + id, {}, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response)
                        }, function () {
                            console.log('Failed');
                        });

                    return deferred.promise;
                }
            }
        }
    ]
);