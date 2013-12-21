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

                $http.get( url ).then(function (err, res) {
                    console.log(res);
                    dfd.resolve(res);
                });

                return dfd.promise;
            }
        }; 
    }

]);