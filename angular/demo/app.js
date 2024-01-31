var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'pages/first.html',
controller : 'FirstController'
})
 
.when('/second', {
templateUrl : 'pages/second.html',
controller : 'SecondController'
})
 
.when('/third', {
templateUrl : 'pages/third.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from FirstController';
    });
     
    app.controller('SecondController', function($scope) {
    $scope.message = 'Hello from SecondController';
    });
     
    app.controller('ThirdController', function($scope) {
    $scope.message = 'Hello from ThirdController';
    });