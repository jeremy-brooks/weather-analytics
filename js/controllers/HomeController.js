app.controller('HomeController', ['$scope', 'indexConfigLoader', function ($scope, indexConfigLoader) {
    indexConfigLoader.success(function (data) {
        $scope.sections = data.sections;
        $scope.overviewTitle = data.overviewTitle;
        $scope.tropicalWeatherOverview = data.tropicalWeatherOverview;
    });
}]);