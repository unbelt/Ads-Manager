'use strict';

angular.module('adsApp').controller('AdminEditCategoryController', ['$scope', '$rootScope', '$routeParams', '$location', 'catalog', 'notify',
    function ($scope, $rootScope, $routeParams, $location, catalog, notify) {
        $rootScope.pageTitle = 'Edit Category';

        catalog.get('admin/categories/' + $routeParams.id).then(function (category) {
            $scope.category = category;
        }, function (error) {
            notify.message('Cannot get category!', error)
        });

        $scope.editCategory = function () {
            $rootScope.loading = true;

            catalog.edit($routeParams.id).then(function () {
                $location.path('/admin/categories/list');
                notify.message('Editing category successful.')
            }, function (error) {
                notify.message('Editing category failed!', error)
            }).finally(function () {
                $rootScope.loading = false;
            })
        }
    }
]);