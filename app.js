(function() {
	angular.module('myApp', ['ngNewRouter', 'myApp.home', 'myApp.detail'])
		.controller('AppController', ['$router', AppController]);

	AppController.$routeConfig = [
		{
			path: '/',
			component: 'home'
		},
		{
			path: '/detail/:id',
			component: 'detail'
		}
	];

	function AppController($router) {

	}
})();
