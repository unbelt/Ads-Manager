'use strict';

angular.module('adsApp').controller('AdminEditTownController', ['$scope', '$rootScope', '$routeParams', '$location', 'catalog', 'notify',
    function ($scope, $rootScope, $routeParams, $location, catalog, notify) {
        $rootScope.pageTitle = 'Edit Town';

        catalog.get('admin/town/' + $routeParams.id).then(function (town) {
            $scope.town = town;
        }, function (error) {
            notify.message('Cannot get town!', error)
        });

        $scope.editTown = function (townName) {
            $rootScope.loading = true;

            catalog.edit(townName).then(function () {
                $location.path('/admin/towns/list');
                notify.message('Editing town successful.')
            }, function (error) {
                notify.message('Editing town failed!', error)
            }).finally(function () {
                $rootScope.loading = false;
            })
        }
    }
]);