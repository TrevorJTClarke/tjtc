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