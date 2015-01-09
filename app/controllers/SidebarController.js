'use strict';

angular.module('adsApp').controller('SidebarController', ['$scope', '$rootScope', 'catalog', 'notify',
    function ($scope, $rootScope, catalog, notify) {

        $scope.adsStates = {
            'All': null,
            'Rejected': 3,
            'Published': 2,
            'Waiting Approval': 1,
            'Inactive': '0'
        };

        catalog.getAll('categories').then(function (categories) {
            $scope.categories = categories;
        }, function (error) {
            notify.message('Categories filed to load! ' + error.statusText)
        });

        catalog.getAll('towns').then(function (towns) {
            $scope.towns = towns;
        }, function (error) {
            notify.message('Towns filed to load! ' + error.statusText)
        });

        $scope.categoryClicked = function (clickedCategory) {
            $scope.selectedCategory = clickedCategory;
            $rootScope.$broadcast('categoryChanged', clickedCategory || '');
        };

        $scope.townClicked = function (clickedTown) {
            $scope.selectedTown = clickedTown;
            $rootScope.$broadcast('townChanged', clickedTown || '');
        };

        $scope.statusClicked = function (clickedStatus) {
            $rootScope.loading = true;
            $scope.selectedStatus = clickedStatus;
            $rootScope.$broadcast('statusChanged', clickedStatus || '');
        }
    }
]);