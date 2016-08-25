console.log("HERE AT MY CONTROLLER FRONT")

myApp.controller('addEventController', ['$scope', '$location','$routeParams', 'eventFactory', function($scope, $location, $routeParams, eventFactory){

	$scope.addEvent= function(){
		console.log("#######", $scope.newEvent);
		eventFactory.addEvent($scope.newEvent, function(url){
			$location.url(url);
		})	
	}

}])