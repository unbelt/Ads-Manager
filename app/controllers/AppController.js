'use strict';

angular.module('adsApp')
    .controller('AppController', ['$scope', '$rootScope', '$location', 'account', 'config', 'cookieStorage', 'notify',
        function ($scope, $rootScope, $location, account, config, cookieStorage, notify) {

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

            $rootScope.$on('$routeChangeStart', function (event, next) {

                if (!next.guestAccess) {
                    if (account.isAuthenticated() && next.allowGuest) {
                        notify.message('You are already logged in!');
                        $location.path('/');
                    }
                    else if (!account.isAuthenticated() && !next.allowGuest) {
                        notify.message('Please login for full access!');
                        $rootScope.savedLocation = $location.url();
                        $location.path('/login');
                    }
                }
            });
        }
    ]
);