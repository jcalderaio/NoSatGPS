angular.module('NoSatGPS.controllers')

    .controller('HomeController', function($scope, $state, $rootScope, $ionicNavBarDelegate) {

        $scope.setNavTitle = function(title) {
            $ionicNavBarDelegate.title(title);
        };

        if (!$rootScope.isLoggedIn) {
            $state.go('welcome');
        }

        function loadBinaryFile(path,success) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", path, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function() {
                var data = new Uint8Array(xhr.response);
                var arr = new Array();
                for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                success(arr.join(""));
            };
            xhr.send();
        }

        loadBinaryFile('../www/db/CISE_Building_FifthFloor.sqlite', function(data){
            var db = new SQL.Database(data);

            $scope.clickHandler = function(model) {

                console.log(model);

                try {
                    db.run(model);// Run the query without returning anything
                    console.log('The db.run test successfully read from file')
                } catch (err) {
                    console.log("error at db.run initial:  " + err);
                }

                console.log('I am about to print the SQL output');

                var res = db.exec(model);

                $scope.value = JSON.stringify(res);
            }
        });
    });