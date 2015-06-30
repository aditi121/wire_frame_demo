
var app = angular.module('MyApp', ['ngRoute','ui.bootstrap','ngResource']);


// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'

        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/product.html',
            controller  : 'productController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
    .when('/readMore', {
        templateUrl : 'pages/readMore.html',
            controller  : 'readMoreController'
    });
});
app.controller('readMoreController',function($scope,$http){
    $scope.readDetails = [];
    $http.get('js/product.json.js').success(function(data){
        $scope.readDetails=data;
        console.log($scope.readDetails);
    });
});

app.controller('itemController',function($scope,$http){
    $scope.empDetail = [];
    $http.get('js/empList.json').success(function(data){
        $scope.empDetail=data;
        console.log($scope.empDetail);
    });
});
app.controller('productController', function($scope,$http) {
    $scope.products = [];
    $http.get('js/product.json.js').success(function(data){
        $scope.products=data;
    });
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

app.controller('CarouselDemoCtrl', function ($scope) {
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



app.controller('myController',['$scope', 'translationService',
    function ($scope, translationService){

        //Run translation if selected language changes
        $scope.translate = function(){
            translationService.getTranslation($scope, $scope.selectedLanguage);
        };

        //Init
        $scope.selectedLanguage = 'en';
        $scope.translate();

    }]);