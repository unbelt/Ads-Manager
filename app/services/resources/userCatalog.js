'use strict';

app.factory('userCatalog', ['$http', '$q', 'config', 'authorization',
    function ($http, $q, config, authorization) {

        var adsApi = config.api + 'user/ads';

        return {
            getCatalog: function () {
                var deferred = $q.defer();

                $http.get(adsApi, authorization.getAuthorizationHeader())
                    .success(function () {
                        deferred.resolve();
                    }, function(response) {
                        deferred.reject(response);
                    });
                    //.error(function () {
                    //    console.log('Cannot get the data');
                    //});

                return deferred.promise;
            },
            createAd: function (ad) {
                var deferred = $q.defer();
                var headers = authorization.getAuthorizationHeader();

                $http.post(adsApi, ad, headers)
                    .success(function () {
                        console.log('Success');
                    })
                    .error(function () {
                        console.log('Error');
                    })
            },
            editAd: function () {
                
            }
        }
    }
]);