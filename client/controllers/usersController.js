console.log("********************")
console.log("USERS CONTROLLER FRONT")
console.log("********************")

console.log("HERE AT MY CONTROLLER FRONT")

myApp.controller('usersController', function($scope, userFactory){

	var users = ''

	// var index = function(){
	// 		userFactory.index(function(returnedData){
	// 			$scope.users = returnedData
	// 		})
	// 	}
	// index();

	$scope.addUser= function(){
		userFactory.addUser($scope.newUser, function(newUser){
			$scope.newUser = newUser;
			console.log(newUser)
		})
			$scope.newUser = {}
	}

})