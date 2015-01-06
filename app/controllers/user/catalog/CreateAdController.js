'use strict';

angular.module('adsApp')
    .controller('CreateAdController', ['$scope', '$rootScope', '$location', 'catalog',
        function ($scope, $rootScope, $location, catalog) {
            $rootScope.pageTitle = 'Publish New Ad';

            $scope.ad = {townId: null, categoryId: null};

            $scope.fileSelected = function (fileInputField) {

                delete $scope.ad.imageDataUrl;
                var file = fileInputField.files[0];

                if (file.type.match(/image\/.*/)) {
                    var reader = new FileReader();

                    reader.onload = function () {
                        $scope.ad.imageDataUrl = reader.result;

                        var imageBox = angular.element(document.querySelector('.image-box'));
                        imageBox.html('<img src="' + reader.result + '" />');
                    };

                    reader.readAsDataURL(file);
                } else {
                    imageBox.text("<p>File type not supported!</p>");
                }
            };

            $scope.createAd = function (ad) {

                catalog.createAd(ad).then(function () {
                    console.log('Created');
                    $location.path('/');
                });
            };
        }
    ]
);