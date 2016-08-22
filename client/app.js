var myApp = angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/homeDash.html'
	})
	// .when('/products', {
	// 	templateUrl : 'partials/product.html'
	// })
	// .when('/orders', {
	// 	templateUrl : 'partials/orders.html'
	// })
	// .when('/customers', {
	// 	templateUrl : 'partials/customers.html'
	// })
	.otherwise({
		redierctTo : '/'
	})
})
