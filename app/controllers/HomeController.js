'use strict';

angular.module('adsApp').controller('HomeController', ['$scope', '$rootScope', 'catalog', 'notify',
    function ($scope, $rootScope, catalog, notify) {

        $rootScope.pageTitle = 'Home';

        var adsParams = {
            'startPage': 1,
            'pageSize': 2,
            'categoryId': '',
            'townId': ''
        };

        $scope.adsParams = adsParams;

        $scope.getCatalog = function () {
            $rootScope.loading = true;

            catalog.getCatalog(adsParams).then(function (catalog) {
                $scope.catalog = catalog;
                $scope.pages = new Array(catalog.numPages);
            }, function (error) {
                notify.message('Catalog filed to load!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        };
        $scope.getCatalog();

        $scope.changePage = function (page) {
            if (page < 1) {
                page = 1;
            }
            else if (page > $scope.pages.length) {
                page = $scope.pages.length;
            }

            adsParams.startPage = page;
            $scope.getCatalog();
        };

        $scope.$on('categoryChanged', function (event, selectedCategory) {
            adsParams.categoryId = selectedCategory;
            adsParams.startPage = 1;
            $scope.getCatalog();
        });

        $scope.$on('townChanged', function (event, selectedTown) {
            adsParams.townId = selectedTown;
            adsParams.startPage = 1;
            $scope.getCatalog();
        });
    }
]);