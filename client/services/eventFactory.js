console.log("FRONT FACTORY")

myApp.factory('eventFactory', ['$http', function($http){

	var events = [];

	function EventsFactory(){

		var _this = this

		this.index = function(callback){
			$http.get('/events').then(function(returned_data){
				event = returned_data.data
				callback(event);
			})
		}

		this.addEvent = function(newEvent, callback){
			console.log("^^^^^^", newEvent);
			$http.post('/events', newEvent).then(function(returned_data){
				event = returned_data.data
				console.log("********************")
				console.log(event)
				event_id = event._id;
				callback('/admin/stage/'+event_id);
			})
		}


	}
	return new EventsFactory();
}])