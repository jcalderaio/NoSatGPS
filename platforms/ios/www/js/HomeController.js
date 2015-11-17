angular.module('NoSatGPS.controllers')

    .controller('HomeController', function($scope, $state, $rootScope, $ionicNavBarDelegate) {

        $scope.setNavTitle = function(title) {
            $ionicNavBarDelegate.title(title);
        };

        if (!$rootScope.isLoggedIn) {
            $state.go('welcome');
        }
    });