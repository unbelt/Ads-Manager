'use strict';

angular.module('adsApp')
    .controller('AppController', ['$scope', '$location', 'account', 'config', 'cookieStorage', 'notify',
        function ($scope, $location, account, config, cookieStorage, notify) {

            $scope.account = account;
            $scope.config = config;

            $scope.logout = function () {
                $rootScope.loading = true;

                account.logout().then(function () {
                    cookieStorage.setCurrentUser(undefined);
                    $location.path('/');
                    notify.message('Logout successful.');
                }, function (error) {
                    notify.message('Logout failed!', error);
                }).finally(function () {
                    $rootScope.loading = false;
                })
            };

            $scope.getActiveMenu = function (path) {
                if ($location.path().substr(0, path.length) == path) {
                    return 'active';
                } else {
                    return '';
                }
            };
        }
    ]
);