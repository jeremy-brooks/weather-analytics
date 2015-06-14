app.factory('indexConfigLoader', ['$http', function ($http) {
    return $http.get('http://localhost:63342/weather-analytics/data/home.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);