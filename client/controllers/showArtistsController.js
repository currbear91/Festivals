
myApp.controller('showArtistsController',['$scope','$routeParams', 'artistFactory','userFactory', function($scope, $routeParams, artistFactory, userFactory){
	
	var event_id = $routeParams._id;

	var index = function(){
				// console.log("********************")
		artistFactory.eventIndex(event_id, function(returnedData){
			$scope.event = returnedData
		})
	}	
	index();

	$scope.addArtist= function(artist){
		userFactory.addArtist(artist, function(confirm){
			console.log("********************");
			console.log(confirm);
			index();
		})
	}

}])