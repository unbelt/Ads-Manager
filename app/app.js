'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.html'
            })
            .when('/login', {
                templateUrl: 'app/views/login.html'
            })
            .when('/register', {
                templateUrl: 'app/views/register.html'
            })
            .when('/my-ads', {
                templateUrl: 'app/views/user/catalog/show.html'
            })
            .when('/create-ad', {
                templateUrl: 'app/views/user/catalog/create.html'
            })
            .when('/edit-ad', {
                templateUrl: 'app/views/user/catalog/edit.html'
            })
            .when('/delete-ad', {
                templateUrl: 'app/views/user/catalog/delete.html'
            })
            .when('/edit-profile', {
                templateUrl: 'app/views/user/edit.html'
            }) // *************************************************** Admin Area
            .otherwise({redirectTo: '/home'});
    }
);