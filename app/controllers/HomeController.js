'use strict';

app.controller('HomeController', ['$scope', '$rootScope',  'catalog',
    function ($scope, $rootScope, catalog) {

        $rootScope.pageTitle = 'Home';

        var categories = catalog.getAll('categories').query();
        var towns = catalog.getAll('towns').query();

        catalog.getAll('ads').get(function (data) {
            $scope.catalog = data.ads;
        });

        $scope.categories = categories;
        $scope.towns = towns;

        $scope.getCategory = function (id) {
            return id ? categories[id - 1].name : '[Uncategorized]';
        };

        $scope.getTown = function (id) {
            return id ? towns[id - 1].name : '[Homeless]'
        };
    }
]);