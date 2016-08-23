
myApp.controller('usersController',['$scope', 'userFactory', function($scope, userFactory){
	var users = ''

	var index = function(){
				// console.log("********************")
			userFactory.index(function(returnedData){
				$scope.users = returnedData
			})
		}
	index();

	$scope.create= function(){
		userFactory.create($scope.newUser, function(newUser){
			console.log("********************")
			$scope.newUser = newUser;
			console.log(newUser)
		})
			$scope.newUser = {}
	}

}])