
myApp.controller('artistsController', ['$scope','$routeParams', 'artistFactory', 'stageFactory', 'eventFactory', function($scope, $routeParams, artistFactory, stageFactory, eventFactory){
	$scope.event_id = $routeParams._id;

	var index = function(){
			artistFactory.index(function(returnedData){
				$scope.artists = returnedData;
			})
		}
	index();

	$scope.addArtist = function(){
		$scope.newArtist.event_id = $scope.event_id;
		artistFactory.create($scope.newArtist, function(newArtist){
			$scope.newArtist = newArtist;
			console.log(newArtist);
		})
			$scope.newArtist = {};
	}

}])