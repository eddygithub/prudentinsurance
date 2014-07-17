'use strict';

/**
 use to handle customer
*/

		var prudentInsuranceApp = angular.module('prudentInsurance', ['ui.router']);

		prudentInsuranceApp.config(function ($stateProvider, $urlRouterProvider){

			$urlRouterProvider.otherwise("/home");

			$stateProvider
			.state('home',
				{
					url: '/home',
					controller: 'MainController',
					templateUrl: 'partials/home.html'
				})
			.state('about', 
				{	
					url: '/about',
					controller: 'MainController',
					templateUrl: 'partials/about.html'
				})
			.state('contact', 
				{
					url: '/contact',	
					controller: 'MainController',
					templateUrl: 'partials/contact.html'
				})
		});


		prudentInsuranceApp.controller('MainController', function ($scope){
			$scope.open = function() {
			  $scope.showModal = true;
			};

			$scope.ok = function() {
			  $scope.showModal = false;
			};

			$scope.cancel = function() {
			  $scope.showModal = false;
			};
		});