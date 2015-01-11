'use strict';

angular.module('adsApp')
    .controller('AdminEditUserController', ['$scope', '$rootScope', '$routeParams', 'account', 'catalog', 'notify',
        function ($scope, $rootScope, $routeParams, account, catalog, notify) {

            $rootScope.pageTitle = 'Edit User Profile';

        }
    ]
);