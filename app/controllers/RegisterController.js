'use strict';

adsApp.controller('RegisterController',
    function RegisterController($scope, $rootScope, authService) {
        $rootScope.pageTitle = 'Register';

        $scope.register = function () {
            authService.register();
        }
    }
);