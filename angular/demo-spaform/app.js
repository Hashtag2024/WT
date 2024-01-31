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
