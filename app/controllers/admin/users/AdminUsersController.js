'use strict';

angular.module('adsApp').controller('AdminUsersController', ['$scope', '$rootScope', 'account', 'config', 'notify',
    function ($scope, $rootScope, account, config, notify) {
        $rootScope.pageTitle = 'Users';

        var usersConfig = config.users;

        var usersParams = {
            sortBy: usersConfig.sortBy,
            startPage: usersConfig.startPage,
            pageSize: usersConfig.pageSize
        };

        $scope.getUsers = function () {
            $rootScope.loading = true;
            account.get('admin/users', usersParams).then(function (users) {
                $scope.users = users;
            }, function (error) {
                notify.message('Users filed to load!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        };
        $scope.getUsers();
    }
]);