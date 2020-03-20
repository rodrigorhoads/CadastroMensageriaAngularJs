var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {

    $routeProvider.when('/Mensageria',{
        templateUrl: 'Templates/Mensageria/Index.html',
        controller:'MensageriaController'
    });

    $routeProvider.when('/MensageriaTemplate', {
        templateUrl: 'Templates/MensageriaTemplate/Index.html',
        controller:'MensageriaTemplateController'
    });

    $routeProvider.otherwise({
        redirectTo: '/Home'
    });
});

app.controller('mainController', function ($scope,$http) {


});