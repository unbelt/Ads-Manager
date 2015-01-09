'use strict';

angular.module('adsApp').controller('DeleteAdController', ['$scope', '$rootScope', '$location', 'catalog', 'account', 'notify',
    function ($scope, $rootScope, $location, catalog, account, notify) {

        $rootScope.pageTitle =  'Delete Ad';

        catalog.get('user/ads/' + $rootScope.deleteAdId).then(function (ad) {
            $scope.ad = ad;
        }, function (error) {
            notify.message('Advertisement failed to load!', error);
        }).finally(function () {
            $rootScope.loading = false;
        });

        $scope.deleteAd = function (id) {
            $rootScope.loading = true;

            catalog.deleteAd(id).then(function () {
                $location.path('/user/ads');
                notify.message('Advertisement deleted successfully!');
            }, function (error) {
                notify.message('Advertisement failed to delete!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        }
    }
]);