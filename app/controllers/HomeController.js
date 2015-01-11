'use strict';

angular.module('adsApp').controller('HomeController', ['$scope', '$rootScope', '$location', 'catalog', 'account', 'config', 'notify',
    function ($scope, $rootScope, $location, catalog, account, config, notify) {

        $rootScope.pageTitle = 'Home';

        var adsParams = {
            'startPage': config.catalog.startPage,
            'pageSize': config.catalog.pageSize,
            'categoryId': '',
            'townId': ''
        };
        var adsStatus = {
            activate: 'PublishAgain',
            deactivate: 'Deactivate'
        };

        var user = '';

        if (account.isAdmin()) {
            $rootScope.pageTitle = 'Ads';
            adsParams.status = '';
            adsParams.sotrBy = 'Title';
            user = 'admin/';
        } else if ($location.path() == '/user/ads') {
            $rootScope.pageTitle = 'My Ads';
            user = 'user/';
        }

        $scope.adsParams = adsParams;
        $scope.adsStatus = adsStatus;
        $scope.dateFormat = config.catalog.dateFormat;

        $scope.getCatalog = function () {
            $rootScope.loading = true;

            catalog.getCatalog(adsParams, user).then(function (catalog) {
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

        $scope.changeAdStatus = function (id, status) {
            catalog.changeAdStatus(status + '/' + id).then(function () {
                $scope.getCatalog();
                notify.message('Advertisement is now ' + status);
            }, function (error) {
                notify.message('Changing advertisement status failed!', error);
            });
        };

        // Ads filtering
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

        $scope.$on('statusChanged', function (event, selectedStatus) {
            adsParams.status = selectedStatus;
            adsParams.startPage = 1;
            $scope.getCatalog();
        });
    }
]);