var module = angular.module("appModule",[])

module.controller("mController",function($scope){
   $scope.name= "JAY"
   $scope.rollno= "C012"



});

module.run(function($rootScope){
    $rootScope.collegeName = "MukeshPatel"
    $rootScope.fees = function(){
        alert("fees is 500000")
    }
    $rootScope.color="red"

    $rootScope.setColor = function(){

    }

})

module.controller("JsonController",function($scope){
   $scope.branches = ["Mumbai","Navi Mumbai","Jaipur"]

  $scope.jsonBranch = [
  {"branchId":"001","branchName":"Mumbai"},
  {"branchId":"002","branchName":"Navi Mumbai"},
  {"branchId":"003","branchName":"Jaipur"}
  ]
}).directive("menu", function () {
             return {
               template: "<select><option ng-repeat='item in branches'>{{item}}</option></select>"
             };
           });
