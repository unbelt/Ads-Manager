'use strict';

adsApp.controller('HomeController',
    function HomeController($scope, $rootScope, adsDataService) {
        $rootScope.pageTitle = 'Home';

        $scope.categories = adsDataService.getAll('categories');
        $scope.towns = adsDataService.getAll('towns');
    }
);