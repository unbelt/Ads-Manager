'use strict';

angular.module('adsApp')
    .controller('AppController', ['$scope', '$location', 'account', 'config', 'cookieStorage', 'notify',
        function ($scope, $location, account, config, cookieStorage, notify) {

            $scope.account = account;
            $scope.config = config;

            $scope.logout = function () {
                account.logout().then(function () {
                    cookieStorage.setCurrentUser(undefined);
                    $location.path('/');
                    notify.message('Logout successful.');
                }, function (error) {
                    notify.message('Logout failed!', error);
                });
            };
        }
    ]
);