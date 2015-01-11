'use strict';

angular.module('adsApp')
    .factory('account', ['resource', 'cookieStorage',
        function (resource, cookieStorage) {
            var user = 'user/',
                login = user + 'login/',
                register = user + 'register/',
                logout = user + 'logout/',
                profile = user + 'profile/',
                changePassword = user + 'ChangePassword/';

            var users = 'users';

            return {
                get: function (api, params) {
                    return resource.use(api).get(params).$promise;
                },
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
                },
                isAdmin: function () {
                    if (cookieStorage.getCurrentUser()) {
                        return cookieStorage.getCurrentUser().isAdmin;
                    }
                }
            }
        }
    ]
);