var TC = angular.module('TJTC', []);
TC.controller('MainCtrl',

    ['$rootScope', '$scope', 'Data',

    function ($rootScope, $scope, Data) {
        // $scope.commit = "Loading latest commit...";

        //Start main data functions
        // Data.get().then(function(res){
        //     $scope.commit = res.data;
        // });

        //
}]);
/**
 * Data Service
 */
TC.factory('Data', 

    ['$http', '$q',

    function ($http, $q) {

        //
        return {

            get: function () {
                var dfd = $q.defer();
                var url = "";

                $http.get( url ).then(function (err, res) {
                    console.log(res);
                    dfd.resolve(res);
                });

                return dfd.promise;
            }
        }; 
    }

]);