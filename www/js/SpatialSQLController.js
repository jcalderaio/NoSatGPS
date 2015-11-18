angular.module('NoSatGPS.controllers')

    .controller('SpatialSQLController', function($scope) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../www/db/CISE_Building_FifthFLoor.sqlite', true);
        xhr.responseType = 'arraybuffer';
        $scope.value = '';
        $scope.model = '';

        xhr.onload = function(e) {

            var uInt8Array = new Uint8Array(this.response);

            var db = new SQL.Database(uInt8Array);

            $scope.clickHandler = function(model) {

                console.log(model);

                try {
                    db.run(model);// Run the query without returning anything
                    console.log('The db.run test successfully read from file')
                } catch (err) {
                    console.log("error at db.run initial:  " + err);
                }

                console.log('I am about to print the SQL output');

                $scope.value = angular.toJson(db.exec(model));
            }
        };

        xhr.send();
    });