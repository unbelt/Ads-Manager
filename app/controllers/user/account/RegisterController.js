'use strict';

app.controller('RegisterController', ['$scope', '$rootScope', '$location', 'auth',
    function ($scope, $rootScope, $location, auth) {

        $rootScope.pageTitle = 'Register';

        $scope.register = function (user) {

            auth.register(user).then(function () {
                console.log('Registration successful!'); // TODO: Build notification system
                $location.path('/');
            });
        }
    }
]);