'use strict';

/**
 use to handle customer
*/

		var prudentInsuranceApp = angular.module('prudentInsurance', ['ngRoute']);

		prudentInsuranceApp.config(function ($routeProvider){
			$routeProvider
			.when('/home',
				{
					controller: 'MainController',
					templateUrl: 'partials/home.html'
				})
			.when('/about', 
				{	
					controller: 'MainController',
					templateUrl: 'partials/about.html'
				})
			.when('/contact', 
				{	
					controller: 'MainController',
					templateUrl: 'partials/contact.html'
				})
			.otherwise({ redirectTo: '/home'});
		});


		prudentInsuranceApp.controller('MainController', function ($scope){

			
		});