'use strict';

angular.module('adsApp')
    .factory('catalog', ['resource', 'account',
        function (resource, account) {

            var api = account.isAdmin() ? 'admin/' : 'user/',
                ads = 'ads',
                userAds = api + ads + '/',
                users = api + 'users/',
                categories = api + 'categories/',
                towns = api + 'towns/';

            return {
                getAll: function (type) {
                    return resource.use(type).query().$promise;
                },
                get: function (type) {
                    return resource.use(type).get().$promise;
                },
                getCatalog: function (adsParams, user) {
                    return resource.use(user + ads).get(adsParams).$promise;
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