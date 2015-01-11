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
                get: function (api, params) {
                    return resource.use(api).get(params).$promise;
                },
                create: function (obj) {
                    console.log(obj);
                },
                edit: function (id) {
                    console.log(id);
                },
                deleteUser: function (api, id) {
                    return resource.use(api).delete(id).$promise;
                },
                getAll: function (type) {
                    return resource.use(type).query().$promise;
                },
                getCatalog: function (adsParams, user) {
                    return resource.use(user + ads).get(adsParams).$promise;
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