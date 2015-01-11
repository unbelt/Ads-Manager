'use strict';

angular.module('adsApp').controller('AdminCreateCategoryController', ['$scope', '$rootScope', '$location', 'catalog', 'notify',
    function ($scope, $rootScope, $location, catalog, notify) {
        $rootScope.pageTitle = 'Create Category';

        $scope.createCategory = function (categoryName) {
            $rootScope.loading = true;

            catalog.create(categoryName).then(function () {
                $location.path('/admin/categories/list');
                notify.message('Creating category successful.')
            }, function (error) {
                notify.message('Creating category failed!', error)
            }).finally(function () {
                $rootScope.loading = false;
            })
        }
    }
]);