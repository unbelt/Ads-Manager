'use strict';

angular.module('adsApp').controller('AdminTownsController', ['$scope', '$rootScope', 'catalog', 'config', 'notify',
    function ($scope, $rootScope, catalog, config, notify) {

        $rootScope.pageTitle = 'Towns';

        var usersConfig = config.users;

        var townsParams = {
            startPage: usersConfig.startPage,
            pageSize: usersConfig.pageSize
        };

        $scope.getTowns = function () {
            $rootScope.loading = true;
            catalog.get('admin/towns', townsParams).then(function (towns) {
                $scope.towns = towns;
            }, function (error) {
                notify.message('Users filed to load!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        };
        $scope.getTowns();
    }
]);