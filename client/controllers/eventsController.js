console.log("HERE AT MY CONTROLLER FRONT")

myApp.controller('eventsController', ['$scope', '$location','$routeParams', 'eventFactory', function($scope, $location, $routeParams, eventFactory){

	var index = function(){
			eventFactory.index(function(returnedData){
				$scope.events = returnedData
			})
		}
	index();

	var show = function(){
		event_id = $routeParams._id;
		eventFactory.show(event_id, function(returnedData){
			$scope.event = returnedData;
			$scope.newEvent = returnedData;
		})
	}
	show();

	$scope.addEvent= function(){
		console.log("#######", $scope.newEvent);
		eventFactory.addEvent($scope.newEvent, function(url){
			$location.url(url);
		})	
	}
	$scope.update = function(){
		console.log($scope.newEvent);
		$scope.newEvent._id = $routeParams._id;
		eventFactory.update($scope.newEvent, function(url){
			$location.url(url);
		})
	}

}])