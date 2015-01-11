angular.module('adsApp').controller('AdminDeleteUserController', ['$scope', '$rootScope', '$routeParams', 'catalog', 'notify',
    function ($scope, $rootScope, $routeParams, catalog, notify) {

        $rootScope.pageTitle = 'Delete User';

        catalog.deleteUser('admin/users/' + $routeParams.id).then(function (res) {
            console.log(res);
        }, function (error) {
            notify.message('Deleting user filed', error);
            console.log(error);
        });
    }
]);