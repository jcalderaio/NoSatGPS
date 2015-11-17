angular.module('NoSatGPS.routes')

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('welcome', {
                url: '/welcome',
                templateUrl: 'templates/welcome.html',
                controller: 'WelcomeController',
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController',
            })

            .state('forgot', {
                url: '/forgot',
                templateUrl: 'templates/forgotPassword.html',
                controller: 'ForgotPasswordController',
            })

            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: 'RegisterController',
            })

            // setup an abstract state for the menu
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppController'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
                    }
                }
            })

            .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings.html',
                        controller: 'SettingsController'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/welcome');
    });