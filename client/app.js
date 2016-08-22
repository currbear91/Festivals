var myApp = angular.module('myApp', ['ngRoute'])

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
	// .when('/customers', {
	// 	templateUrl : 'partials/customers.html'
	// })
	.otherwise({
		redierctTo : '/'
	})
})
