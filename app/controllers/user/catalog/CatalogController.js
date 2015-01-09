'use strict';

angular.module('adsApp')
    .controller('CatalogController', ['$scope', '$rootScope', '$location', 'catalog', 'notify',
        function ($scope, $rootScope, $location, catalog, notify) {

            $rootScope.pageTitle = 'My Ads';

            var adsParams = {
                'status': '',
                'startPage': 1,
                'pageSize': 2
            };
            var adsStatus = {
                activate: 'PublishAgain',
                deactivate: 'Deactivate'
            };
            $scope.adsParams = adsParams;
            $scope.adsStatus = adsStatus;

            $scope.getUserCatalog = function () {
                $rootScope.loading = true;

                catalog.getUserCatalog(adsParams).then(function (catalog) {
                    $scope.catalog = catalog;
                    $scope.pages = new Array(catalog.numPages);
                }, function (error) {
                    notify.message('User advertisements failed to load!', error);
                }).finally(function () {
                    $rootScope.loading = false;
                });
            };
            $scope.getUserCatalog();

            $scope.changePage = function (page) {
                if (page < 1) {
                    page = 1;
                }
                else if (page > $scope.pages.length) {
                    page = $scope.pages.length;
                }

                adsParams.startPage = page;
                $scope.getUserCatalog();
            };

            // User ads filtering
            $scope.$on('statusChanged', function (event, selectedStatus) {
                adsParams.status = selectedStatus;
                adsParams.startPage = 1;
                $scope.getUserCatalog();
            });

            $scope.changeAdStatus = function (id, status) {
                catalog.changeAdStatus(status + '/' + id).then(function () {
                    $scope.getUserCatalog();
                    notify.message('Your advertisement is now ' + status);
                }, function (error) {
                    notify.message('Changing advertisement status failed!', error);
                });
            };

            $scope.editAdClicked = function (id) {
                $rootScope.loading = true;
                $rootScope.editAdId = id;
            };

            $scope.deleteAdClicked = function (id) {
                $rootScope.loading = true;
                $rootScope.deleteAdId = id;
            };
        }
    ]
);