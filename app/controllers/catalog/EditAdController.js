'use strict';

angular.module('adsApp').controller('EditAdController', ['$scope', '$rootScope', '$routeParams', '$location', 'catalog', 'account', 'notify',
    function ($scope, $rootScope, $routeParams, $location, catalog, account, notify) {

        $rootScope.pageTitle = 'Edit Ad';
        $rootScope.loading = true;

        var api = 'user/ads/',
            page = api;

        if (account.isAdmin()) {
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

        $scope.editAd = function (ad) {
            ad.changeImage = true;
            $rootScope.loading = true;

            catalog.editAd(ad).then(function () {
                $location.path(page);
                notify.message('Advertisement edited. Don\'t forget to submit it for publishing.');
            }, function (error) {
                notify.message('Advertisements failed to edit!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        };
    }
]);