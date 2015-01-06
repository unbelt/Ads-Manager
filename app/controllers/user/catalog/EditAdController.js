'use strict';

angular.module('adsApp')
    .controller('EditAdController', ['$scope', '$rootScope', 'catalog',
        function ($scope, $rootScope, catalog) {
            $rootScope.pageTitle = 'Edit Ad';

            $scope.editAd = function (ad) {
                console.log(ad);
            }
        }
    ]
);