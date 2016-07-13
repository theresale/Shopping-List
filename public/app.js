"use strict";

var app = angular.module('myApp', []);
app.controller('toBuyCtrl', function($scope) {
    $scope.toBuyList = [{toBuyText:'Clean House', done:false}];

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
});

app.controller('registerCtrl', function($scope) {
    $scope.registrationList = [{username:'theresa', password:'devcodecamp'}];

    $scope.addRegistrants = function() {
        $scope.registrationList.push({username:$scope.newUsername, password:$scope.newPassword});
        $scope.newUsername = "";
        $scope.newPassword = "";
        console.log($scope.registrationList);
    };
});

app.controller('loginCtrl', function($scope) {

    $scope.verifyUser = function() {
        $scope.registrationList.push({username:$scope.newUsername, password:$scope.newPassword});
        $scope.newUsername = "";
        $scope.newPassword = "";
        console.log($scope.registrationList);
    };
});