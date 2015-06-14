var app = angular.module('weatherAnalysisApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/compare/', {
            controller: 'CompareController',
            templateUrl: 'views/compare.html'
        })
        .when('/mjo/', {
            controller: 'MjoController',
            templateUrl: 'views/mjo.html'
        })
        .otherwise({
            redirectTo: '/home/'
        });
});