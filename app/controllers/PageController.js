'use strict';

app.controller('PageController', ['$scope', '$location', 'config', 'identity', 'auth',
    function ($scope, $location, config, identity, auth) {

        if(identity.isAuthenticated()) {
            auth.getUserProfile().then(function (val) {
                $scope.currentUser = val;
            });
        }

        $scope.isAuthenticated = identity.isAuthenticated();

        $scope.logout = function () {
            auth.logout().then(function () {
                console.log('Successful logout!'); // TODO: Build notification system
                $location.path('/');
            })
        };

        $scope.app = config.app;
        $scope.author = config.author;
    }
]);