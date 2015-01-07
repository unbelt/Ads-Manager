'use strict';

angular.module('adsApp')
    .controller('AppController', ['$scope', '$location', 'auth', 'config',
        function ($scope, $location, auth, config) {

            $scope.auth = auth;
            $scope.config = config;

            $scope.logout = function () {
                auth.logout().then(function () {
                    $location.path('/');
                })
            };

            $scope.getActiveMenu = function (path) {
                if ($location.path().substr(0, path.length) == path) {
                    return 'active'
                } else {
                    return ''
                }
            };
        }
    ]
);