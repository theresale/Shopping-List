"use strict";

var app = angular.module('myApp', []);
app.controller('toBuyCtrl', function($scope, $http) {
    $scope.toBuyList = [{toBuyText:'Your First Item', done:false}];

    $scope.toBuyAdd = function() {
        $scope.toBuyList.push({toBuyText:$scope.toBuyInput, done:false});
        $scope.toBuyInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.toBuyList;
        $scope.toBuyList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.toBuyList.push(x);
        });
    };

    $scope.saveList = function() {
        $http({
            method: "PUT",
            url: "/users",
            data: {item: $scope.toBuyList}
        }).then(function successCallback(data) {
            console.log("");
        },
        function errorCallback(data) {
            console.log("");
        });
    };
});

app.controller('registerCtrl', function($scope, $http) {
    $scope.addRegistrants = function() {
        $http({
            method: "POST",
            url: "/users",
            data: {username: $scope.newUsername, password: $scope.newPassword}
        }).then(function successCallback(data) {
            console.log("Registration Successful!");
        },
        function errorCallback(data) {
            console.log("Registration failed, please try again.");
        });
    };
});

app.controller('loginCtrl', function($scope, $http) {
    $scope.verifyUser = function() {
        $http({
            method: "GET",
            url: "/users",
            params: {username: $scope.username, password: $scope.password}
        }).then(function successCallback(data) {
            console.log("");
        },
        function errorCallback(data) {
            console.log("");
        });
    };
});



