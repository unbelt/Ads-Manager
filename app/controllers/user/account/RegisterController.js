'use strict';

angular.module('adsApp')
    .controller('RegisterController', ['$scope', '$rootScope', '$location', 'account', 'catalog', 'cookieStorage', 'notify',
        function ($scope, $rootScope, $location, account, catalog, cookieStorage, notify) {

            $rootScope.pageTitle = 'Register';
            $scope.user = {townId: null};

            catalog.getAll('towns').then(function (towns) {
                $scope.towns = towns;
            }, function (error) {
                notify.message('Towns filed to load!', error);
            });

            $scope.register = function (user, registerForm) {
                if (registerForm.$valid) {
                    $rootScope.loading = true;

                    account.register(user).then(function (response) {
                        account.login({username: user.username, password: user.password});
                        cookieStorage.setCurrentUser(response);
                        notify.message('User account created.');
                        $location.path('/');
                    }, function (error) {
                        notify.message('Registration failed!', error);
                    }).finally(function () {
                        $rootScope.loading = false;
                    });
                } else {
                    notify.message('Please sign up all fields!');
                }
            }
        }
    ]
);