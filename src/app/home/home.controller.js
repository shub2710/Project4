(function() {
  'use strict';

  angular
    .module('formioApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope,$http,$filter,$moment) {

$scope.test = "helloooo"
$scope.eventName =""
$scope.eventStartDate = ""
$scope.eventEndDate = ""

$scope.eventsArr = []

$http.get("https://api.jsonbin.io/b/5b362994efaed72daeed5ecd/latest")
.then(function(response) {
   $scope.eventsArr = response.data
    console.log( response.data)
});

$scope.addEvent  = function(){
  if( $scope.eventName.length < 1 || $scope.eventEndDate.length < 1 || $scope.eventStartDate.length < 1){
    alert("Details Are missing, add the missing details")
  }else{
 $scope.addEventData = {
   "title" : $scope.eventName,
   "start" : $filter("date")($scope.eventStartDate, 'yyyy-MM-dd'),
   "end" : $filter("date")($scope.eventEndDate, 'yyyy-MM-dd') ,
   "id" : $scope.guidGenerator(),
   "notifyDate" : moment($scope.eventStartDate).subtract(1, 'months')
  }
 console.log($scope.addEventData)
 $scope.eventsArr.push($scope.addEventData)
 $http.put("https://api.jsonbin.io/b/5b362994efaed72daeed5ecd",$scope.eventsArr)
 .then(function(response) {
   alert("SUCCESS")
     console.log( response.data)
 });
 console.log($scope.addEventData)
  }
}

$scope.guidGenerator = function() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
  }
})();
