angular.module('ngView', [], function($routeProvider, $locationProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/about.html',
    controller: AboutCntl
  });
  $routeProvider.when('/char/new', {
    templateUrl: '/char.html',
    controller: CharCntl
  });
  $routeProvider.when('/char/:charName', {
    templateUrl: '/char.html',
    controller: CharCntl
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});

function MainCntl($scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
  // This array acts as the array of characters you'd normally get from the database
  $scope.chars = [
    {name:'Glaurung', age:25, race:"Orc", peuple:"Nomade", sexe:"Mâle", taille:"2m04", poids:"140kg", yeux:"Bleus", cheveux:"Chauve", peau:"Verte"},
    {name:'Nayak', age:14},
    {name:'Meloe', age:34}
  ];
  // The array of attributes in Archipel
  $scope.attributs_physiques = ["Force", "Endurance", "Agilité", "Dexterité", "Métabolisme", "Réflexes"];
  $scope.attributs_mentaux = ["Entendement", "Inventivité", "Mémoire", "Volonté", "Perception", "Charisme"];
}

function AboutCntl($scope, $routeParams) {
  $scope.name = "AboutCntl";
  $scope.params = $routeParams;
}

function CharCntl($scope, $routeParams) {
  $scope.name = "CharCntl";
  $scope.params = $routeParams;
  if ($routeParams.charName != 'new') {
    var myCharName = $routeParams.charName;
    var myChar;
    for (var i = $scope.chars.length - 1; i >= 0; i--) {
    	if ($scope.chars[i].name == myCharName) {
    		myChar = $scope.chars[i];
    		break;
    	}
    };
    $scope.myChar = myChar;
  }
  $('.attr').tooltip();
  $('#force').tooltip();
  $('#Force').tooltip();
}