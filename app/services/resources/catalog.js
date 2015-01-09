'use strict';

angular.module('adsApp')
    .factory('catalog', ['resource',
        function (resource) {

            var user = 'user/',
                ads = 'ads',
                userAds = user + ads + '/';

            return {
                getAll: function (type) {
                    return resource.use(type).query().$promise;
                },
                get: function (type, id) {
                    return resource.use(type).get(id).$promise;
                },
                getCatalog: function (adsParams) {
                    return resource.use(ads).get(adsParams).$promise;
                },
                getUserCatalog: function (adsParams) {
                    return resource.use(userAds).get(adsParams).$promise;
                },
                createAd: function (ad) {
                    return resource.use(userAds).post(ad).$promise;
                },
                changeAdStatus: function (status) {
                    return resource.use(userAds + status).put().$promise;
                },
                editAd: function (ad) {
                    return resource.use(userAds).put(ad).$promise;
                },
                deleteAd: function (id) {
                    return resource.use(userAds + id).delete().$promise;
                }
            }
        }
    ]
);