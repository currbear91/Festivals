console.log("Artist FACTORY")

myApp.factory('artistFactory', ['$http', function($http){

	var artists = [];

	function ArtistFactory(){

		var _this = this

		this.index = function(callback){
			$http.get('/artists').then(function(returned_data){
				artists = returned_data.data
				callback(artists)
			})
		}

		this.create = function(newArtist, callback){
			$http.post('/artists', newArtist).then(function(returned_data){
				artist = returned_data.data
				console.log("********************")
				console.log(artist)
				callback(artist)
			})
		}


	}
	return new ArtistFactory();
}])