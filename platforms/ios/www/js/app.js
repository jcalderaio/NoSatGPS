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



            ////you can delete starting from here
            //var sql = window.SQL;   //This invokes the spatiasql.js. You may have to keep this in here.
            //$rootScope.db = new sql.Database();   //Use $rootScope to make global variables. "db" is now a variable of $rootScope
            //var sqlstr = "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)";
            //
            //try {
            //    $rootScope.db.run(sqlstr);   //Whenever you use a function of db, you must call $rootScope first because it is owned by $rootScopt
            //} catch (err) {
            //    console.log("error at db.run initial:  "+err);
            //}
            ////to here. Do NOT delete anything else in this app


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

