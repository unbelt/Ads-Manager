'use strict';

angular.module('adsApp')
    .factory('account', ['resource', '$http', '$q', 'cookieStorage', 'authorization', 'config', 'notify',
        function (resource, $http, $q, cookieStorage, authorization, config, notify) {
            var user = 'user/',
                login = user + 'login/',
                register = user + 'register/',
                logout = user + 'logout/',
                profile = user + 'profile/',
                changePassword = user + 'ChangePassword/';

            return {
                register: function (user) {
                    return resource.use(register).post(user).$promise;
                },
                login: function (user) {
                    return resource.use(login).post(user).$promise;
                },
                logout: function () {
                    return resource.use(logout).post().$promise;
                },
                getUserProfile: function () {
                    return resource.use(profile).get().$promise;
                },
                editUserProfile: function (user) {
                    return resource.use(profile).put(user).$promise;
                },
                editUserPassword: function (password) {
                    return resource.use(changePassword).put(password).$promise;
                },
                getCurrentUser: function () {
                    return cookieStorage.getCurrentUser();
                },
                isAuthenticated: function () {
                    return !!cookieStorage.getCurrentUser();
                }
            }
        }
    ]
);