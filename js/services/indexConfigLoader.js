app.factory('indexConfigLoader', ['$http', function ($http) {
    return $http.get('/ann/weather-analytics/data/home.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);