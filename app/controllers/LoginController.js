'use strict';

adsApp.controller('LoginController',
    function LoginController($scope, $rootScope, authService) {
        $rootScope.pageTitle = 'Login';

        $scope.login = function () {
            authService.login();
        }
    }
);