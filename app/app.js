'use strict';

angular.module('adsApp', ['ngRoute', 'ngResource', 'ngCookies'])
    .constant('config', {
        app: {
            name: 'Ads',
            title: 'Ads Manager',
            api: 'http://localhost:1337/api/'
            //api: 'http://softuni-ads.azurewebsites.net/api/'
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
                controller: 'HomeController'
            })
            .when('/login', {
                templateUrl: 'app/views/user/account/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'app/views/user/account/register.html',
                controller: 'RegisterController'
            })
            .when('/edit-profile', {
                templateUrl: 'app/views/user/account/editAccount.html',
                controller: 'EditAccountController'
            })
            .when('/my-ads', {
                templateUrl: 'app/views/user/catalog/showCatalog.html',
                controller: 'UserCatalogController'
            })
            .when('/create-ad', {
                templateUrl: 'app/views/user/catalog/createAd.html',
                controller: 'CreateAdController'
            })
            .when('/edit-ad', {
                templateUrl: 'app/views/user/catalog/editAd.html',
                controller: 'UserCatalogController'
            })
            .when('/delete-ad', {
                templateUrl: 'app/views/user/catalog/deleteAd.html',
                controller: 'UserCatalogController'
            })
             // *************************************************** Admin Area
            .otherwise({redirectTo: '/home'});
    }
);