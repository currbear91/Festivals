console.log("FRONT FACTORY")

myApp.factory('eventFactory', ['$http', function($http){

	var events = [];
	var event;

	function EventsFactory(){

		var _this = this

		this.index = function(callback){
			$http.get('/events').then(function(returned_data){
				events = returned_data.data
				for(var i=0; i<events.length; i++){
					events[i].test = true;
					events[i].startDate = moment(events[i].startDate).format('MMMM Do YYYY');
				};
				callback(events);
			})
		}
		this.show = function(event_id, callback){
			$http.get('/events/'+event_id).then(function(returned_data){
				console.log("*********", returned_data);
				event = returned_data.data;
				event.startDate = moment(event.startDate).format('l');
				event.endDate = moment(event.endDate).format('l');
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
		this.update = function(newEvent, callback){
			event_id = newEvent._id;
			console.log("^^^^^", event_id)
			$http.put('/events/'+event_id, newEvent).then(function(confirm){
				console.log(confirm);
				callback('/admin');
			})
		}
		this.delete = function(_id, callback){
			$http.delete('/events/'+_id).then(function(confirm){
				callback(confirm);
			})
		}
	}
	return new EventsFactory();
}])