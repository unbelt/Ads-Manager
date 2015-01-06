'use strict';

angular.module('adsApp')
    .controller('DeleteAdController', ['$scope', '$rootScope', 'catalog',
        function ($scope, $rootScope, catalog) {
            $rootScope.pageTitle = 'Delete Ad';

            $scope.deleteAd = function (id) {
                catalog.deleteAd(id).then(function () {
                    console.log('Deleted');
                })
            }
        }
    ]
);