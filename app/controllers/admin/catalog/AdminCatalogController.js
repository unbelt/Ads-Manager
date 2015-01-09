'use strict';

angular.module('adsApp').controller('AdminCatalogController', ['$scope', '$rootScope', 'adminCatalog', 'notify',
    function ($scope, $rootScope, adminCatalog, notify) {

        $rootScope.pageTitle = 'Ads';
        $rootScope.loading = true;

        var adsParams = {
            'Status': '',
            'CategoryId': 1,
            'TownId': 1,
            'SortBy': 'Title',
            'StartPage': 1,
            'PageSize': 2
        };

        $scope.adsParams = adsParams;

        adminCatalog.getAds(adsParams).then(function (catalog) {
            $scope.catalog = catalog;
        }, function (error) {
            notify.message('Loading catalog failed!', error)
        }).finally(function () {
            $rootScope.loading = false;
        });
    }
]);