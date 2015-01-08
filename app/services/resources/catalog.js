'use strict';

angular.module('adsApp')
    .factory('catalog', ['$http', '$q', 'config', 'authorization', 'notify',
        function ($http, $q, config, authorization, notify) {

            return {
                getAll: function (resource) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.get(config.app.api + resource, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                        })
                        .error(function () {
                            notify.message(resource + ' failed to load!');
                        });

                    return deferred.promise;
                },
                getCatalog: function (adsParams) {
                    var deferred = $q.defer();

                    $http.get(config.app.api +
                        'ads?categoryId=' + adsParams.categoryId +
                        '&townId=' + adsParams.townId +
                        '&startPage=' + adsParams.startPage +
                        '&pageSize=' + adsParams.pageSize
                    )
                        .success(function (response) {
                            deferred.resolve(response);
                        })
                        .error(function () {
                            notify.message('Advertisements failed to load!');
                        });

                    return deferred.promise;
                },
                getUserCatalog: function (adsParams) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    console.log(headers);

                    $http.get(config.app.api +
                        'user/ads?status=' + adsParams.status +
                        '&StartPage=' + adsParams.startPage +
                        '&PageSize=' + adsParams.pageSize,
                        {headers: headers}
                    )
                        .success(function (response) {
                            deferred.resolve(response);
                        })
                        .error(function () {
                            notify.message('User advertisements failed to load!');
                        });

                    return deferred.promise;
                },
                createAd: function (ad) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.post(config.app.api + 'user/ads', ad, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            notify.message('Advertisement submitted for approval. Once approved, it will be published.');
                        })
                        .error(function () {
                            notify.message('Advertisement failed to submit!');
                        });

                    return deferred.promise;
                },
                changeAdStatus: function (id, status) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(config.app.api + 'user/ads/' + status + '/' + id, {}, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            notify.message('Your advertisement now is ' + status);
                        })
                        .error(function () {
                            notify.message('Error changing the status of your advertisement!');
                        });

                    return deferred.promise;
                },
                editAd: function (id, ad) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(config.app.api + 'user/ads/' + id, ad, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            notify.message('Advertisement edited. Don\'t forget to submit it for publishing.');
                        })
                        .error(function () {
                            notify.message('Advertisement failed to edited!');
                        });

                    return deferred.promise;
                },
                deleteAd: function (id) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.delete(config.app.api + 'user/ads/' + id, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            notify.message('Advertisement deleted successfully!');
                        })
                        .error(function () {
                            notify.message('Advertisement failed to delete!');
                        });

                    return deferred.promise;
                }
            }
        }
    ]
);