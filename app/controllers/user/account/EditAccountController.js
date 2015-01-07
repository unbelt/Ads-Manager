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

            $scope.editAccount = function () {
                var editForm = angular.element(window.document)[0].editAccountForm;

                var user = {
                    name: editForm.name.value,
                    email: editForm.email.value,
                    phoneNumber: editForm.phoneNumber.value,
                    townId: editForm.townId.value
                };

                auth.editUserProfile(user);
            };

            $scope.changePassword = function (user) {
                auth.editUserPassword(user);
            }
        }
    ]
);