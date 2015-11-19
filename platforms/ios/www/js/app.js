angular.module('NoSatGPS.controllers', []);
angular.module('NoSatGPS.routes', []);

angular.module('NoSatGPS', [ 'ionic', 'NoSatGPS.routes', 'NoSatGPS.controllers'] )

    .run(function($ionicPlatform, $rootScope) {    //you have to "pass in" $rootScope to any controller, etc that you want to access it from
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .run(function ($state, $rootScope) {
        Parse.initialize('LqvgxiQNacPneMjUhYJUrEAjZ7dkzLf2mCRq1FPY', '9r6qrhT5waicRbK6fG9jyxMgUotLySDgYdN5eUTo');
        var currentUser = Parse.User.current();
        $rootScope.user = null;
        $rootScope.isLoggedIn = false;

        if (currentUser) {
            $rootScope.user = currentUser;
            $rootScope.isLoggedIn = true;
            $state.go('app.home');
        }
    });

