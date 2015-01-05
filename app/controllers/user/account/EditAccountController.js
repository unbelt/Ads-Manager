'use strict';

app.controller('EditAccountController', ['$scope', '$rootScope', 'auth',
    function ($scope, $rootScope, auth) {

        $rootScope.pageTitle = 'Edit User Profile';

        $scope.editAccount = function () {

            var editForm = angular.element(window.document)[0].editAccountForm;

            var user = {
                name: editForm.name.value,
                email: editForm.email.value,
                phoneNumber: editForm.phoneNumber.value,
                townId: editForm.townId.value
            };

            auth.editUserProfile(user).then(function (res) {
                console.log(res);
            });
        };

        $scope.changePassword = function (user) {

            auth.editUserPassword(user).then(function (res) {
                console.log(res);
            });
        }
    }
]);