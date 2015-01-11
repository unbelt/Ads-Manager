'use strict';

angular.module('adsApp').controller('AdminDeleteTownController', ['$scope', '$rootScope', '$location', 'catalog', 'notify',
    function ($scope, $rootScope, $location, catalog, notify) {
        $rootScope.pageTitle = 'Delete Town';

        $scope.deleteTown = function (townName) {
            $rootScope.loading = true;

            catalog.remove(townName).then(function () {
                $location.path('/admin/towns/list');
                notify.message('Deleting town successful.')
            }, function (error) {
                notify.message('Deleting town failed!', error)
            }).finally(function () {
                $rootScope.loading = false;
            })
        }
    }
]);