myApp.controller('adminDashboardController', ['$scope', '$location', 'eventFactory', 'userFactory', 'artistFactory', function($scope, $location, eventFactory, userFactory, artistFactory){

	var index = function(){
			eventFactory.index(function(returnedData){
				$scope.events = returnedData
				for(var i=0; i<$scope.events.length; i++){
					$scope.events[i].start = moment($scope.events[i].start).format('MMMM Do YYYY');
				};
			})
		}
	index();

	$scope.updateEvent = function(){
		console.log("#######", $scope.newEvent);
		eventFactory.update($scope.newEvent, function(event){
			$scope.event(event);
		})	
	}
	$scope.delete = function(event){
		event_id = event._id;
		eventFactory.delete(event_id, function(confirm){
			console.log(confirm);
			index();
		})
	}

}])