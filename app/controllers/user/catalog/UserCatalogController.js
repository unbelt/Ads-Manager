'use strict';

angular.module('adsApp')
    .controller('UserCatalogController', ['$scope', '$rootScope', '$location', 'catalog',
        function ($scope, $rootScope, $location, catalog) {
            $rootScope.pageTitle = 'My Ads';

            var adsParams = {
                'status': '',
                'startPage': 1,
                'pageSize': 2
            };

            $scope.adsParams = adsParams;

            catalog.getAll('categories').then(function (categories) {
                $scope.categories = categories;
            });

            catalog.getAll('towns').then(function (towns) {
                $scope.towns = towns;
            });

            $scope.getUserCatalog = function () {
                $rootScope.loading = true;

                catalog.getUserCatalog(adsParams).then(function (catalog) {
                    $scope.catalog = catalog;
                    $scope.pages = new Array(catalog.numPages);
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

            $scope.$on('statusChanged', function (event, selectedStatus) {
                adsParams.status = selectedStatus;
                adsParams.startPage = 1;
                $scope.getUserCatalog();
            });

            $scope.changeAdStatus = function (id, status) {
                if (status) {
                    status = 'publishAgain'
                } else {
                    status = 'deactivate'
                }

                catalog.changeAdStatus(id, status).then(function () {
                    $scope.getUserCatalog();
                });
            };

            $scope.adClicked = function (adId, action) {
                catalog.getAll('user/ads/' + adId).then(function (ad) {
                    $rootScope.ad = ad;
                    $rootScope.pageTitle = action + ' Ad';
                });
            };

            $scope.editAd = function (ad) {
                ad.changeImage = true;
                catalog.editAd(ad.id, ad);
            };

            $scope.deleteAd = function (adId) {
                catalog.deleteAd(adId).then(function () {
                    $location.path('/my-ads');
                    $scope.getUserCatalog();
                });
            }
        }
    ]
);