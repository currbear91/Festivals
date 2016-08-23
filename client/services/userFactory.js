console.log("FRONT USERS FACTORY")

myApp.factory('userFactory', ['$http', function($http){

	var users = [];
	var user = [];

	function UsersFactory(){

		var _this = this


		this.index = function(callback){
			$http.get('/users').then(function(returned_data){
				user = returned_data.data
				callback(user)
			})
		}

		this.create = function(newUser, callback){
			$http.post('/users/create', newUser).then(function(returned_data){
				console.log(user)
				if (typeof(callback) == 'function'){
          			callback(returned_data.data);
        		}
			})
		}

	}
	return new UsersFactory();
}])