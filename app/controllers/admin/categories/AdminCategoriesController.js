'use strict';

angular.module('adsApp').controller('AdminCategoriesController', ['$scope', '$rootScope', 'catalog', 'config', 'notify',
    function ($scope, $rootScope, catalog, config, notify) {
        $rootScope.pageTitle = 'Categories';

        var usersConfig = config.users;

        var categoriesParams = {
            startPage: usersConfig.startPage,
            pageSize: usersConfig.pageSize
        };

        $scope.getCategories = function () {
            $rootScope.loading = true;
            catalog.get('admin/categories', categoriesParams).then(function (categories) {
                $scope.categories = categories;
            }, function (error) {
                notify.message('Users filed to load!', error);
            }).finally(function () {
                $rootScope.loading = false;
            });
        };
        $scope.getCategories();
    }
]);