var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutController'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('HomeController', function($scope) {
  $scope.message = "Welcome to our SPA!";
});

app.controller('AboutController', function($scope) {
  $scope.aboutInfo = "We are a company dedicated to providing solutions.";
});

app.controller('ContactController', function($scope) {
  $scope.contact = {
    email: "info@example.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country"
  };
});
