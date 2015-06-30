// JavaScript Document
	// create the module and name it trans
	var trans = angular.module('trans', ['ngRoute','ui.bootstrap']);

	// configure our routes
	trans.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/home.html'

			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});


	trans.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	trans.controller('contactController', function($scope) {
            $scope.submitForm = function() {
				if ($scope.userForm.$valid) {
					alert('our form is amazing');
				}
			};
	});

trans.controller('itemController',function($scope,$http){
    $scope.countries = [];
    $http.get('js/countriesList.json').success(function(data){
        $scope.countries=data;
        console.log($scope.countries);
    });
});
    trans.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
     var newWidth = 2000 + slides.length + 1;
        slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});
