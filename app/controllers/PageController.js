'use strict';

adsApp.controller('PageController',
    function PageController($scope, config, catalogDataService) {
        $scope.author = config.author;
        $scope.app = config.app;

        catalogDataService.getAll('ads').get(function (data) {
            $scope.catalog = data.ads;
        });
        $scope.categories = catalogDataService.getAll('categories').query();
        $scope.towns = catalogDataService.getAll('towns').query();
    }
);