app.factory('mjoPlotsLoader', ['$http', function ($http) {
    return $http.get('/ann/data/mjoPlots.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);