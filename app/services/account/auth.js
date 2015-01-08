'use strict';

angular.module('adsApp')
    .factory('auth', ['$http', '$q', 'identity', 'authorization', 'config', 'notify',
        function ($http, $q, identity, authorization, config, notify) {
            var usersApi = config.app.api + 'user/';

            return {
                register: function (user) {
                    var deferred = $q.defer();

                    $http.post(usersApi + 'register', user)
                        .success(function (response) {
                            deferred.resolve(response);
                            notify.message('User account created.');
                        })
                        .error(function () {
                            notify.message('Registration failed! Please sign up all fields!');
                        });

                    return deferred.promise;
                },
                login: function (user) {
                    var deferred = $q.defer();

                    user['grant_type'] = 'password';
                    $http.post(usersApi + 'login',
                        'username=' + user.username +
                        '&password=' + user.password +
                        '&grant_type=password',
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                        .success(function (response) {
                            if (response['access_token']) {
                                identity.setCurrentUser(response);
                                deferred.resolve(true);
                            }
                            else {
                                deferred.resolve(false);
                            }
                        })
                        .error(function () {
                            notify.message('Invalid login!');
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
                            notify.message('You have logged out successfully.');
                        })
                        .error(function () {
                            notify.message('Logout failed! Please try again!');
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
                            notify.message('Cannot load user profile!');
                        });

                    return deferred.promise;
                },
                editUserProfile: function (user) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(usersApi + 'profile', user, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            notify.message('User profile successfully updated.');
                        })
                        .error(function () {
                            notify.message('User profile failed to update!');
                        });

                    return deferred.promise;

                },
                editUserPassword: function (user) {
                    var deferred = $q.defer();
                    var headers = authorization.getAuthorizationHeader();

                    $http.put(usersApi + '/ChangePassword', user, {headers: headers})
                        .success(function (response) {
                            deferred.resolve(response);
                            notify.message('User password successfully updated.');
                        })
                        .error(function () {
                            notify.message('User password failed to change!');
                        });

                    return deferred.promise;
                },
                getCurrentUser: function () {
                    return identity.getCurrentUser();
                },
                isAuthenticated: function () {
                    return !!identity.getCurrentUser();
                }
            }
        }
    ]
);