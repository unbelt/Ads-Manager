'use strict';

angular.module('adsApp')
    .controller('CreateAdController', ['$scope', '$rootScope', '$location', 'catalog',
        function ($scope, $rootScope, $location, catalog) {
            $rootScope.pageTitle = 'Publish New Ad';

            $scope.ad = {townId: null, categoryId: null};

            catalog.getAll('categories').then(function (categories) {
                $scope.categories = categories;
            });

            catalog.getAll('towns').then(function (towns) {
                $scope.towns = towns;
            });

            $scope.createAd = function (ad) {
                catalog.createAd(ad).then(function () {
                    $location.path('/my-ads');
                });
            };
        }
    ]
);