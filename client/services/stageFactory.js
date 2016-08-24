console.log("Stage FACTORY")

myApp.factory('stageFactory', ['$http', function($http){

	var stages = [];

	function StageFactory(){

		var _this = this

		this.index = function(callback){
			$http.get('/stages').then(function(returned_data){
				stages = returned_data.data
				callback(stages)
			})
		}

		this.create = function(newStage, callback){
			$http.post('/stages', newStage).then(function(returned_data){
				stage = returned_data.data
				console.log("********************")
				console.log(stage)
				callback(stage)
			})
		}


	}
	return new StageFactory();
}])