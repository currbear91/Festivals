var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/homeDash.html'
	})
	.when('/event', {
		templateUrl : 'partials/eventModal.html'
	})
	.when('/admin', {
		templateUrl : 'partials/admin.html'
	})
	.when('/admin/event', {
		templateUrl : 'partials/event.html'
	})
	.when('/admin/stage/:_id', {
		templateUrl: 'partials/stage.html'
	})
	.when('/admin/artist/:_id', {
		templateUrl: 'partials/artist.html'
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
