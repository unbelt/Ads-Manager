'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController'
            })
            .when('/login', {
                templateUrl: 'app/views/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'app/views/register.html',
                controller: 'RegisterController'
            })
            .when('/my-ads', {
                templateUrl: 'app/views/user/catalog/show.html',
                controller: 'CatalogController'
            })
            .when('/create-ad', {
                templateUrl: 'app/views/user/catalog/create.html',
                controller: 'CreateAdController'
            })
            .when('/edit-ad', {
                templateUrl: 'app/views/user/catalog/edit.html',
                controller: 'EditAdController'
            })
            .when('/delete-ad', {
                templateUrl: 'app/views/user/catalog/delete.html',
                controller: 'DeleteAdController'
            })
            .when('/edit-profile', {
                templateUrl: 'app/views/user/edit.html',
                controller: 'EditUserController'
            }) // *************************************************** Admin Area
            .otherwise({redirectTo: '/home'});
    }
);