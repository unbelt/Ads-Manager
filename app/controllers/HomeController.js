'use strict';

angular.module('adsApp')
    .controller('HomeController', ['$scope', '$rootScope', '$location', 'config', 'catalog',
        function ($scope, $rootScope, $location, config, catalog) {

            $rootScope.pageTitle = 'Home';

            var getCatalog = function (category, town, startingPage, pageSize) {
                $rootScope.loading = true;

                var cat = category || '',
                    t = town || '',
                    page = startingPage || 1,
                    ads = pageSize || 2;

                catalog.getCatalog(cat, t, page, ads).then(function (catalog) {
                    $scope.catalog = catalog;
                    $scope.pages = new Array(catalog.numPages);
                    $scope.currentPage = startingPage;
                }).finally(function () {
                    $rootScope.loading = false;
                });
            };

            $scope.getCatalog = getCatalog;
            getCatalog();

            catalog.getAll('categories').then(function (categories) {
                $scope.categories = categories;
            });
            catalog.getAll('towns').then(function (towns) {
                $scope.towns = towns;
            });


        }
    ]
);