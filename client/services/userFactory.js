console.log("FRONT USERS FACTORY")

myApp.factory('userFactory', ['$http', function($http){

	var users = [];

	function UsersFactory(){

		var _this = this

		this.addEvent = function(newEvent, callback){
			$http.post('/users').then(function(returned_data){
				event = returned_data.data
				console.log("********************")
				console.log(event)
				callback(event)
			})
		}

	}
	return new UsersFactory();
}])