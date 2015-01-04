'use strict';

adsApp.controller('HomeController',
    function HomeController($scope, $rootScope, catalogDataService) {
        $rootScope.pageTitle = 'Home';

        catalogDataService.getAll('ads').get(function (data) {
            $scope.catalog = data.ads;
        });
        $scope.categories = catalogDataService.getAll('categories').query();
        $scope.towns = catalogDataService.getAll('towns').query();
    }
);