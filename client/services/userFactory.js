console.log("FRONT USERS FACTORY")

myApp.factory('userFactory', ['$http', function($http){

	var users = [];
	var user = [];
	
	


	function UsersFactory(){

		var _this = this
		var sessionId;

		var getSessionId = function(){
			console.log('dododododododo');
			$http.get('/userssession').then(function(returned_data){
				console.log("I have the sessionid: ", returned_data);
				sessionId = returned_data.data;
				// return sessionId;
			});
		};
		

		this.index = function(callback){
			$http.get('/users').then(function(returned_data){
				user = returned_data.data
				callback(user)
			})
		}

		this.create = function(newUser, callback){
			$http.post('/users/create', newUser).then(function(returned_data){
				console.log(user)
				getSessionId();
				if (typeof(callback) == 'function'){
          			callback(returned_data.data);
        		}
			})
		}

		this.addArtist = function(artist, callback){
			$http.put('/users/addArtist', artist).then(function(confirm){
				callback(confirm);
			})
		}

		this.login = function(User, callback){
			// console.log("^&*^&*^&*^&*")
			$http.post('/users', User).then(function(returned_data){
				console.log("JUST LOGGED IN HERE: ", returned_data);
				getSessionId();
			})
		}
		this.show = function(callback){
			console.log("IN THE USERFACTORY show FUNCTION sessionId: ");
			$http.get('/users/show').then(function(returned_data){
				console.log("*%*%&^*&^%*&^%", returned_data);
				callback(returned_data);
			})
		}
	}
	return new UsersFactory();
}])