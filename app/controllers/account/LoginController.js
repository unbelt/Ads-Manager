'use strict';

angular.module('adsApp')
    .controller('LoginController', ['$scope', '$rootScope', '$location', 'cookieStorage', 'account', 'notify',
        function ($scope, $rootScope, $location, cookieStorage, account, notify) {

            $rootScope.pageTitle = 'Login';

            $scope.login = function (user, loginForm) {
                if (loginForm.$valid) {
                    $rootScope.loading = true;

                    account.login(user).then(function (user) {
                        cookieStorage.setCurrentUser(user);
                        $location.path($rootScope.savedLocation || '/');
                    }, function (error) {
                        notify.message('Login failed!', error);
                    }).finally(function () {
                        $rootScope.loading = false;
                    });
                } else {
                    notify.message('Username and password are required fields!');
                }
            }
        }
    ]
);