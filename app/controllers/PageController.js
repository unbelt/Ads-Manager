'use strict';

adsApp.controller('PageController',
    function PageController($scope) {
        var author = {
            name: 'unbelt',
            url: 'https://github.com/unbelt',
            'repository': 'https://github.com/unbelt/Ads-Manager'
        };

        var adsApp = {
            name: 'Ads',
            fullName: 'Ads Manager'
        };

        $scope.author = author;
        $scope.adsApp = adsApp;
    }
);