
var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'Home.html',
controller : 'HomeController'
})
 
.when('/About', {
templateUrl : 'About.html',
controller : 'AboutController'
})
 
.when('/Contact', {
templateUrl : 'Contact.html',
controller : 'ContactController'
})
 
.otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
    $scope.message = 'Everyone come to HOME page and see how good I look!';
    });
     
    app.controller('AboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    });
     
    app.controller('ContactController', function($scope) {
    $scope.message = 'Contact us! This is just a demo.';
});