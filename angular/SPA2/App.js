//creating module object
var app = angular.module("myApp", ["ngRoute"]);
//create configuration with module object it provides route details
app.config(function ($routeProvider) {
$routeProvider.when("/Route1", {
templateUrl: "Student.html",
controller: "StudentsController",
});
$routeProvider.when("/Route2", {
templateUrl: "Course.html",
controller: "CoursesController",
});
});
//Controller for Students.html
app.controller("StudentsController", function ($scope) {
$scope.Sname = "Scott";
$scope.Course = "AngularJS";
});
//Controller for Courses.html
app.controller("CoursesController", function ($scope) {
$scope.Courses = ["AngularJS", "PHP", "jQuery", "JSP", "ASP"];
});