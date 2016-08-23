var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/homeDash.html'
	})
	.when('/bumbershoot', {
		templateUrl : 'partials/bumbershoot.html'
	})
	.when('/admin', {
		templateUrl : 'partials/admin.html'
	})
	.when('/admin/stage', {
		templateUrl: 'partials/stage.html'
	})
	.when('/login', {
		templateUrl : 'partials/login.html'
	})
	.when('/create', {
		templateUrl : 'partials/registration.html'
	})
	.otherwise({
		redierctTo : '/'
	})
})
