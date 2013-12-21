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