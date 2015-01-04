'use strict';

adsApp.controller('PageController',
    function PageController($scope, config, catalogService) {

        var categories = catalogService.getAll('categories').query();
        var towns = catalogService.getAll('towns').query();

        catalogService.getAll('ads').get(function (data) {
            $scope.catalog = data.ads;
        });

        $scope.app = config.app;
        $scope.author = config.author;
        $scope.categories = categories;
        $scope.towns = towns;

        $scope.getCategory = function (id) {
            return id ? categories[id - 1].name : '[Uncategorized]';
        };

        $scope.getTown = function (id) {
            return id ? towns[id - 1].name : '[Homeless]'
        };
    }
);