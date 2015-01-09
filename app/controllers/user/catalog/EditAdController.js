'use strict';

angular.module('adsApp').controller('EditAdController', ['$scope', '$rootScope', '$location', 'catalog', 'notify',
    function ($scope, $rootScope, $location, catalog, notify) {
        $rootScope.pageTitle = 'Edit Ad';

        catalog.get('user/ads/' + $rootScope.editAdId).then(function (ad) {
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
                $location.path('/user/ads');
                notify.message('Advertisement edited. Don\'t forget to submit it for publishing.');
            }, function (error) {
                notify.message('Advertisements failed to edit!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        };
    }
]);