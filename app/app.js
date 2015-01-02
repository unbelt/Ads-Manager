'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.html'
            })
            .otherwise({redirectTo: '/home'});
    }
);