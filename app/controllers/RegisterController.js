'use strict';

adsApp.controller('RegisterController',
    function RegisterController($scope, $rootScope, registerService) {
        $rootScope.pageTitle = 'Register';

        $scope.register = function () {
            registerService.register();
        }
    }
);