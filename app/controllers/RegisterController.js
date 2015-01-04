'use strict';

app.controller('RegisterController',
    function RegisterController($scope, $rootScope, $location, auth) {
        $rootScope.pageTitle = 'Register';

        $scope.register = function (user) {

            auth.register(user).then(function () {
                console.log('Registration successful!'); // TODO: Build notification system
                $location.path('/');
            });
        }
    }
);