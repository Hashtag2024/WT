var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })
    .when('/form', {
      templateUrl: 'templates/form.html',
      controller: 'FormController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('LoginController', function($scope, $location) {
  $scope.login = function() {
    // Here you can implement login logic
    // For simplicity, let's just redirect to the form page
    $location.path('/form');
  };
});

app.controller('FormController', function($scope) {
  // Controller for the form
  $scope.student = {}; // Initialize an empty object to hold form data

  $scope.submitForm = function() {
    // Here you can handle form submission logic
    console.log('Form submitted:', $scope.student);
    // You can perform actions like sending data to a server
  };
});


//creating module object
var myApp = angular.module("myApp", ["ngRoute", "ngResource"]);
//create configuration with module object it provides route details
myApp.config(function ($routeProvider) {
$routeProvider.when("/Route1", {
templateUrl: "Students.html",
controller: "StudentsController",
});
$routeProvider.when("/Route2", {
templateUrl: "Courses.html",
controller: "CoursesController",
});
});
//Controller for Students.html
myApp.controller("LoginController", function ($scope) {
$scope.Sname = "Scott";
$scope.Course = "AngularJS";
});
//Controller for Courses.html
myApp.controller("FormController", function ($scope) {
$scope.Courses = ["AngularJS", "PHP", "jQuery", "JSP", "ASP"];
});