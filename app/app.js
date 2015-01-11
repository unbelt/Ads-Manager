'use strict';

angular.module('adsApp', ['ngRoute', 'ngCookies', 'ngResource'])
    .constant('config', {
        app: {
            name: 'Ads',
            title: 'Ads Manager',
            api: 'http://localhost:1337/api/'
            //api: 'http://softuni-ads.azurewebsites.net/api/'
        },
        catalog: {
            dateFormat: 'd-MMM-yyyy',
            startPage: 1,
            pageSize: 2
        },
        users: {
            sortBy: 'UserName',
            startPage: 1,
            pageSize: 10
        },
        categories: {
            startPage: 1,
            pageSize: 10
        },
        towns: {
            startPage: 1,
            pageSize: 10
        },
        author: {
            name: 'Flyer',
            website: 'http://webgrounder.com/',
            gitHub: 'https://github.com/unbelt/Ads-Manager'
        }
    })
    .config(function ($routeProvider) {
        // ********************************* User Area
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController',
                guestAccess: true
            })
            .when('/login', {
                templateUrl: 'app/views/account/login.html',
                controller: 'LoginController',
                allowGuest: true
            })
            .when('/register', {
                templateUrl: 'app/views/account/register.html',
                controller: 'RegisterController',
                allowGuest: true
            })
            .when('/user/profile', {
                templateUrl: 'app/views/account/editAccount.html',
                controller: 'EditAccountController'
            })
            .when('/user/ads', {
                templateUrl: 'app/views/catalog/showCatalog.html',
                controller: 'HomeController'
            })
            .when('/user/ads/publish', {
                templateUrl: 'app/views/catalog/createAd.html',
                controller: 'CreateAdController'
            })
            .when('/user/ads/edit/:id', {
                templateUrl: 'app/views/catalog/editAd.html',
                controller: 'EditAdController'
            })
            .when('/user/ads/delete/:id', {
                templateUrl: 'app/views/catalog/deleteAd.html',
                controller: 'DeleteAdController'
            })
            .otherwise({redirectTo: '/'});

        // ********************************* Admin Area
        $routeProvider
            // ************* Catalog
            .when('/admin', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController'
            })
            .when('/admin/ads/edit/:id', {
                templateUrl: 'app/views/catalog/editAd.html',
                controller: 'EditAdController'
            })
            .when('/admin/ads/delete/:id', {
                templateUrl: 'app/views/catalog/deleteAd.html',
                controller: 'DeleteAdController'
            })

            // ************* Users
            .when('/admin/users/list', {
                templateUrl: 'app/views/admin/users/showUsers.html',
                controller: 'AdminUsersController'
            })
            .when('/admin/users/edit/:id', {
                templateUrl: 'app/views/admin/users/editUser.html',
                controller: 'AdminEditUserController'
            })
            .when('/admin/users/delete/:id', {
                templateUrl: 'app/views/admin/users/deleteUser.html',
                controller: 'AdminDeleteUserController'
            })

            // ************* Categories
            .when('/admin/categories/list', {
                templateUrl: 'app/views/admin/categories/showCategories.html',
                controller: 'AdminCategoriesController'
            })
            .when('/admin/categories/create', {
                templateUrl: 'app/views/admin/categories/createCategory.html',
                controller: 'AdminCreateCategoryController'
            })
            .when('/admin/categories/edit/:id', {
                templateUrl: 'app/views/admin/categories/editCategory.html',
                controller: 'AdminEditCategoryController'
            })
            .when('/admin/categories/delete/:id', {
                templateUrl: 'app/views/admin/categories/deleteCategory.html',
                controller: 'AdminDeleteCategoryController'
            })

            // ************* Towns
            .when('/admin/towns/list', {
                templateUrl: 'app/views/admin/towns/showTowns.html',
                controller: 'AdminTownsController'
            })
            .when('/admin/towns/create', {
                templateUrl: 'app/views/admin/towns/createTown.html',
                controller: 'AdminCreateTownController'
            })
            .when('/admin/towns/edit/:id', {
                templateUrl: 'app/views/admin/towns/editTown.html',
                controller: 'AdminTownCategoryController'
            })
            .when('/admin/towns/delete/:id', {
                templateUrl: 'app/views/admin/towns/deleteTown.html',
                controller: 'AdminDeleteTownController'
            });
    }
);