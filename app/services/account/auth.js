'use strict';

app.factory('auth', ['$http', '$q', 'identity', 'authorization', 'config', function ($http, $q, identity, authorization, config) {
    var usersApi = config.app.api + 'user/';

    return {
        register: function (user) {
            var deferred = $q.defer();

            $http.post(usersApi + 'register', user)
                .success(function () {
                    deferred.resolve();
                }, function (response) {
                    deferred.reject(response);
                })
                .error(function () {
                    console.log('Error registering');
                });

            return deferred.promise;
        },
        login: function (user) {
            var deferred = $q.defer();

            user['grant_type'] = 'password';
            $http.post(usersApi + 'login', 'username=' + user.username + '&password=' + user.password + '&grant_type=password', {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                .success(function (response) {
                    if (response["access_token"]) {
                        identity.setCurrentUser(response);
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                })
                .error(function () {
                    console.log('Login failed');
                });

            return deferred.promise;
        },
        logout: function () {
            var deferred = $q.defer();
            var headers = authorization.getAuthorizationHeader();

            $http.post(usersApi + 'logout', {}, {headers: headers})
                .success(function () {
                    identity.setCurrentUser(undefined);
                    deferred.resolve();
                })
                .error(function () {
                    console.log('Logout failed');
                });

            return deferred.promise;
        },
        getUserProfile: function () {
            var deferred = $q.defer();
            var headers = authorization.getAuthorizationHeader();

            $http.get(usersApi + 'profile', {headers: headers})
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (response) {
                    console.log(response);
                });

            return deferred.promise;
        },
        editUserProfile: function (user) {
            var deferred = $q.defer();
            var headers = authorization.getAuthorizationHeader();

            $http.put(usersApi + 'profile', user,{headers: headers})
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (response) {
                    console.log(response);
                });

            return deferred.promise;

        },
        isAuthenticated: function () {
            if (identity.isAuthenticated()) {
                return true;
            }
            else {
                return $q.reject('not authorized');
            }
        }
    }
}]);