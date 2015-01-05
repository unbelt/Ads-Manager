'use strict';

angular.module('adsApp')
    .controller('CreateAdController', ['$scope', '$rootScope', 'userCatalog',
        function ($scope, $rootScope, userCatalog) {
            $rootScope.pageTitle = 'Publish New Ad';

            $scope.createAd = function (ad) {
                //userCatalog.createAd(ad).then(function () {
                console.log(ad);
                //})
            }
        }
    ]
);