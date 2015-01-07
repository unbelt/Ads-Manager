'use strict';

angular.module('adsApp')
    .controller('LoginController', ['$scope', '$rootScope', '$location', 'identity', 'auth',
        function ($scope, $rootScope, $location, identity, auth) {

            $rootScope.pageTitle = 'Login';
            $scope.identity = identity;

            $scope.login = function (user, loginForm) {
                if (loginForm.$valid) {
                    auth.login(user).then(function (success) {
                        if (success) {
                            console.log('Successful login!');
                            $location.path('/');
                        }
                    });
                }
                else {
                    $rootScope.message = 'Username and password are required fields!';
                }
            }
        }
    ]
);