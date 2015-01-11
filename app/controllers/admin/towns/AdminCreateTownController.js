'use strict';

angular.module('adsApp').controller('AdminCreateTownController', ['$scope', '$rootScope', '$location', 'catalog', 'notify',
    function ($scope, $rootScope, $location, catalog, notify) {
        $rootScope.pageTitle = 'Create Town';

        $scope.createTown = function (townName) {
            $rootScope.loading = true;

            catalog.create(townName).then(function () {
                $location.path('/admin/towns/list');
                notify.message('Creating town successful.')
            }, function (error) {
                notify.message('Creating town failed!', error)
            }).finally(function () {
                $rootScope.loading = false;
            })
        }
    }
]);