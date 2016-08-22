console.log("FRONT FACTORY")

myApp.factory('eventFactory', ['$http', function($http){

	var events = [];

	function EventsFactory(){

		var _this = this

		this.addEvent = function(newEvent, callback){
			$http.post('/events', newEvent).then(function(returned_data){
				event = returned_data.data
				console.log("********************")
				console.log(event)
				callback(event)
			})
		}

	}
	return new EventsFactory();
}])