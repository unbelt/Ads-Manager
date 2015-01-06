'use strict';

angular.module('adsApp')
    .factory('auth', ['$http', '$q', '$rootScope', 'identity', 'authorization', 'config',
        function ($http, $q, $rootScope, identity, authorization, config) {
            var usersApi = config.app.api + 'user/';

            return {
                register: function (user) {
                    var deferred = $q.defer();

                    $http.post(usersApi + 'register', user)
                        .success(function (response) {
                            deferred.resolve(response);
                            $rootScope.message = 'User account created.';
                        })
                        .error(function () {
                            $rootScope.message = 'Registration failed! Please sign up all fields!';
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
                            $rootScope.message = 'Invalid login!';
                        });

                    return deferred.promise;
                },
                logout: function () {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.post(usersApi + 'logout', {}, {headers: headers})
                        .success(function () {
                            identity.setCurrentUser(undefined);
                            deferred.resolve(true);
                            $rootScope.message = 'You have logged out successfully.';
                        })
                        .error(function () {
                            $rootScope.message = 'Logout failed! Please try again!';
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
                        .error(function () {
                            $rootScope.message = 'Cannot load user profile!';
                        });

                    return deferred.promise;
                },
                editUserProfile: function (user) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(usersApi + 'profile', user, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            $rootScope.message = 'User profile successfully updated.';
                        })
                        .error(function () {
                            $rootScope.message = 'User profile failed to update!';
                        });

                    return deferred.promise;

                },
                editUserPassword: function (user) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(usersApi + '/ChangePassword', user, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            $rootScope.message = 'User password successfully updated.';
                        })
                        .error(function () {
                            $rootScope.message = 'User password failed to updated!';
                        });

                    return deferred.promise;
                },
                isAuthenticated: function () {
                    if (identity.isAuthenticated()) {
                        return true;
                    }
                    else {
                        return $q.reject($rootScope.message = 'not authorized');
                    }
                }
            }
        }
    ]
);