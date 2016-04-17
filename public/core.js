/**
 * Created by leandroloi on 16/04/16.
 */
// core.js

// create the module and name it angularSite
var angularSite = angular.module('angularSite', ['ngRoute', 'mainController', 'aboutController', 'contactController',
    'loginController', 'authService']);

//angularSite.config(function($routeProvider, $locationProvide) {
angularSite.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'

        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        .when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        }


    );

    run(function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.loggedInUser == null) {
                // no logged user, redirect to /login
                if (next.templateUrl === "pages/login.html") {
                } else {
                    $location.path("/login");
                }
            }
        });
    });

}]);


