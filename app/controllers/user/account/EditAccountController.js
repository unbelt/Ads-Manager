'use strict';

angular.module('adsApp')
    .controller('EditAccountController', ['$scope', '$rootScope', 'auth', 'catalog',
        function ($scope, $rootScope, auth, catalog) {

            $rootScope.pageTitle = 'Edit User Profile';

            catalog.getAll('towns').then(function (towns) {
                $scope.towns = towns;
            });

            auth.getUserProfile().then(function (user) {
                $scope.user = user;
            });

            $scope.editAccount = function (user) {
                auth.editUserProfile(user);
            };

            $scope.changePassword = function (user) {
                auth.editUserPassword(user);
            }
        }
    ]
);