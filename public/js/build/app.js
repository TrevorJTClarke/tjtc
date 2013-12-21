var TC = angular.module('TJTC', []);
TC.controller('MainCtrl',

    ['$rootScope', '$scope', 'Data',

    function ($rootScope, $scope, Data) {
        $scope.commit = "Loading latest commit...";

        //Start main data functions
        Data.getLatestCommit().then(function(res){
            $scope.commit = res.data;
        });

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

            getLatestCommit: function () {
                var dfd = $q.defer();
                var url = "https://api.github.com/users/trevorjtclarke/tjtc/commits";

                $http.get( url ).then(function (res) {
                    console.log(res);
                    dfd.resolve(res);
                });

                return dfd.promise;
            }
        }; 
    }

]);