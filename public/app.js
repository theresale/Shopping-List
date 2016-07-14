"use strict";

var app = angular.module('myApp', []);
app.controller('toBuyCtrl', function($scope, $http, sendID) {
    $scope.toBuyList = [];

    $scope.toBuyItems = [];

    $scope.toBuyAdd = function() {
        $scope.toBuyList.push({toBuyText:$scope.toBuyInput, done:false});
        $scope.toBuyItems.push($scope.toBuyInput);
        $scope.toBuyInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.toBuyList;
        $scope.toBuyList = [];
        $scope.toBuyItems = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) {
                $scope.toBuyItems.push(x.toBuyText);
                $scope.toBuyList.push(x);
            }
        });
    };

    $scope.saveList = function() {
        $http({
            method: "PUT",
            url: "/users",
            data: {item: $scope.toBuyItems, id: sendID.userID}
        }).then(function successCallback(data) {
            console.log("");
        },
        function errorCallback(error) {
            console.log(error);
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
        function errorCallback(error) {
            console.log("Registration failed, please try again.");
        });
    };
});

app.controller('loginCtrl', function($scope, $http, sendID) {
    $scope.verifyUser = function() {
        $http({
            method: "GET",
            url: "/users",
            params: {username: $scope.username, password: $scope.password}
        }).then(function successCallback(data) {
            sendID.userID = data.data;
            console.log(sendID.userID);
            console.log(data.data);
        },
        function errorCallback(error) {
            console.log(error);
        });
    };
});

app.service('sendID', function(){
    this.userID = 0;

});


