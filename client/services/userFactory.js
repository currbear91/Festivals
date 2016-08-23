console.log("FRONT USERS FACTORY")

myApp.factory('userFactory', ['$http', function($http){

	var users = [];

	function UsersFactory(){

		var _this = this

		this.addUser = function(newUser, callback){
			$http.post('/users/create').then(function(returned_data){
				user = returned_data.data
				console.log("********************")
				console.log(user)
				callback(user)
			})
		}

	}
	return new UsersFactory();
}])