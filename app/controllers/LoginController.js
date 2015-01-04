'use strict';

adsApp.controller('LoginController',
    function LoginController($scope, $rootScope, loginService) {
        $rootScope.pageTitle = 'Login';

        $scope.login = function () {
            loginService.login();
        }
    }
);