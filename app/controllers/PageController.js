'use strict';

app.controller('PageController',
    function PageController($scope, config, catalog, identity, auth) {

        var categories = catalog.getAll('categories').query();
        var towns = catalog.getAll('towns').query();

        catalog.getAll('ads').get(function (data) {
            $scope.catalog = data.ads;
        });

        $scope.currentUser = identity.getCurrentUser();
        $scope.isAuthenticated = identity.isAuthenticated();

        $scope.logout = function() {
            auth.logout().then(function() {
                console.log('Successful logout!'); // TODO: Build notification system
                $location.path('/');
            })
        };

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