'use strict';

adsApp.controller('HomeController',
    function HomeController($scope, $rootScope, catalogDataService) {
        $rootScope.pageTitle = 'Home';

        $scope.categories = catalogDataService.getAll('categories');
        $scope.towns = catalogDataService.getAll('towns');
    }
);