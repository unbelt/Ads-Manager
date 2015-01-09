'use strict';

angular.module('adsApp', ['ngRoute', 'ngCookies', 'ngResource'])
    .constant('config', {
        app: {
            name: 'Ads',
            title: 'Ads Manager',
            //api: 'http://localhost:1337/api/'
            api: 'http://softuni-ads.azurewebsites.net/api/'
        },
        author: {
            name: 'Flyer',
            website: 'http://webgrounder.com/',
            gitHub: 'https://github.com/unbelt/Ads-Manager'
        }
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController',
                guestAccess: true
            })
            .when('/login', {
                templateUrl: 'app/views/user/account/login.html',
                controller: 'LoginController',
                allowGuest: true
            })
            .when('/register', {
                templateUrl: 'app/views/user/account/register.html',
                controller: 'RegisterController',
                allowGuest: true
            })
            .when('/user/profile', {
                templateUrl: 'app/views/user/account/editAccount.html',
                controller: 'EditAccountController'
            })
            .when('/user/ads', {
                templateUrl: 'app/views/user/catalog/showCatalog.html',
                controller: 'CatalogController'
            })
            .when('/user/ads/publish', {
                templateUrl: 'app/views/user/catalog/createAd.html',
                controller: 'CreateAdController'
            })
            .when('/user/ads/edit', {
                templateUrl: 'app/views/user/catalog/editAd.html',
                controller: 'EditAdController'
            })
            .when('/user/ads/delete', {
                templateUrl: 'app/views/user/catalog/deleteAd.html',
                controller: 'DeleteAdController'
            })
            .otherwise({redirectTo: '/home'});
        // *************************************************** Admin Area
        $routeProvider
            .when('/admin/home', {
                templateUrl: 'app/views/admin/catalog/showCatalog.html',
                controller: 'AdminCatalogController'
            });
    }
);