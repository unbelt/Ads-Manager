'use strict';

angular.module('adsApp')
    .controller('RegisterController', ['$scope', '$rootScope', '$location', 'auth', 'catalog',
        function ($scope, $rootScope, $location, auth, catalog) {

            $rootScope.pageTitle = 'Register';

            $scope.user = {townId: null};
            catalog.getAll('towns').then(function (towns) {
                $scope.towns = towns;
            });

            $scope.register = function (user) {
                auth.register(user).then(function () {
                    auth.login(user.username, user.password);
                    $location.path('/');
                }, function (error) {
                    $rootScope.message(error)
                });
            }
        }
    ]
);