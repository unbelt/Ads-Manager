'use strict';

angular.module('adsApp')
    .controller('UserCatalogController', ['$scope', '$rootScope', 'catalog',
        function ($scope, $rootScope, catalog) {
            $rootScope.pageTitle = 'My Ads';

            var getUserCatalog = function (status, startingPage, pageSize) {
                $rootScope.loading = true;

                status = status || '';
                startingPage = startingPage || 1;
                pageSize = pageSize || 5;

                catalog.getUserCatalog(status, startingPage, pageSize).then(function (catalog) {
                    $scope.userCatalog = catalog;
                    $scope.pages = new Array(catalog.numPages);
                    $scope.currentPage = startingPage;
                }).finally(function () {
                    $rootScope.loading = false;
                });
            };
            getUserCatalog();

            $scope.changeAdStatus = function (id, status) {
                if (status) {
                    status = 'publishAgain'
                } else {
                    status = 'deactivate'
                }

                catalog.changeAdStatus(id, status).then(function () {
                    getUserCatalog();
                });
            }
        }
    ]
);