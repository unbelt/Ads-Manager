'use strict';

angular.module('adsApp')
    .controller('CreateAdController', ['$scope', '$rootScope', '$location', 'catalog', 'notify',
        function ($scope, $rootScope, $location, catalog, notify) {

            $rootScope.pageTitle = 'Publish New Ad';
            $scope.ad = {townId: null, categoryId: null};

            $scope.createAd = function (ad) {
                $rootScope.loading = true;

                catalog.createAd(ad).then(function () {
                    $location.path('/my-ads');
                }, function (error) {
                    notify.message('Advertisement failed to submit! ' + error.statusText);
                }).finally(function () {
                    $rootScope.loading = false;
                    notify.message('Advertisement submitted for approval. Once approved, it will be published.');
                });
            };
        }
    ]
);