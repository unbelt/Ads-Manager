'use strict';

angular.module('adsApp').controller('DeleteAdController', ['$scope', '$rootScope', '$routeParams', '$location', 'catalog', 'account', 'notify',
    function ($scope, $rootScope, $routeParams, $location, catalog, account, notify) {

        $rootScope.pageTitle =  'Delete Ad';
        $rootScope.loading = true;

        var api = 'user/ads/',
            page = api;

        if(account.isAdmin()) {
            api = 'admin/ads/';
            page = 'admin/';
        }

        catalog.get(api + $routeParams.id).then(function (ad) {
            $scope.ad = ad;
        }, function (error) {
            notify.message('Advertisement failed to load!', error);
        }).finally(function () {
            $rootScope.loading = false;
        });

        $scope.deleteAd = function (id) {
            $rootScope.loading = true;

            catalog.deleteAd(id).then(function () {
                $location.path(page);
                notify.message('Advertisement deleted successfully!');
            }, function (error) {
                notify.message('Advertisement failed to delete!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        }
    }
]);