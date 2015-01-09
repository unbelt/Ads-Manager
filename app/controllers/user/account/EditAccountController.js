'use strict';

angular.module('adsApp')
    .controller('EditAccountController', ['$scope', '$rootScope', 'account', 'catalog', 'notify',
        function ($scope, $rootScope, account, catalog, notify) {

            $rootScope.pageTitle = 'Edit User Profile';
            $rootScope.loading = true;

            account.getUserProfile().then(function (user) {
                $scope.user = user;
            }, function (error) {
                notify.message('Loading user profile failed!', error);
            });

            catalog.getAll('towns').then(function (towns) {
                $scope.towns = towns;
            }, function (error) {
                console.log('Loading towns failed!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });

            $scope.editAccount = function (user) {
                $rootScope.loading = true;

                account.editUserProfile(user).then(function () {
                    notify.message('User profile successfully updated.');
                }, function (error) {
                    notify.message('User profile failed to update!', error);
                }).finally(function () {
                    $rootScope.loading = false;
                });
            };

            $scope.changePassword = function (password) {
                $rootScope.loading = true;

                account.editUserPassword(password).then(function () {
                    notify.message('User password successfully updated.');
                }, function (error) {
                    notify.message('User password failed to change!', error);
                }).finally(function () {
                    $rootScope.loading = false;
                });
            }
        }
    ]
);