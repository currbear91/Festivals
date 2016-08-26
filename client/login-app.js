var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap'])

.config(function($routeProvider){
	$routeProvider
	.when('/login.html', {
		templateUrl :'partials/loginPartial.html'
	})
	.when('/registration', {
		templateUrl : 'partials/registration.html'
	})
	.otherwise({
		redierctTo : '/login.html'
	})
})
