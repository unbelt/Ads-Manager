'use strict';

angular.module('adsApp').controller('AdminDeleteCategoryController', ['$scope', '$rootScope', '$routeParams', '$location', 'catalog', 'notify',
    function ($scope, $rootScope, $routeParams, $location, catalog, notify) {
        $rootScope.pageTitle = 'Delete Category';


        $scope.deleteCategory = function () {
            $rootScope.loading = true;

            catalog.remove($routeParams.id).then(function () {
                $location.path('/admin/categories/list');
                notify.message('Deleting category successful.')
            }, function (error) {
                notify.message('Deleting category failed!', error)
            }).finally(function () {
                $rootScope.loading = false;
            })
        }
    }
]);