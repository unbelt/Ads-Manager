'use strict';

angular.module('adsApp').controller('SidebarController', ['$scope', '$rootScope', 'catalog',
    function ($scope, $rootScope, catalog) {

        $scope.adsStates = {
            'All': null,
            'Rejected': 3,
            'Published': 2,
            'Waiting Approval': 1,
            'Inactive': '0'
        };

        catalog.getAll('categories').then(function (categories) {
            $scope.categories = categories;
        });

        catalog.getAll('towns').then(function (towns) {
            $scope.towns = towns;
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
            $scope.selectedStatus = clickedStatus;
            $rootScope.$broadcast('statusChanged', clickedStatus || '');
        }
    }
]);