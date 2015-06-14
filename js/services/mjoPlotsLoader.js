app.factory('mjoPlotsLoader', ['$http', function ($http) {
    return $http.get('/weather-analytics/data/mjoPlots.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);