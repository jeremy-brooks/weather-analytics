app.factory('mjoPlotsLoader', ['$http', function ($http) {
    return $http.get('http://localhost:63342/weather-analytics/data/mjoPlots.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);