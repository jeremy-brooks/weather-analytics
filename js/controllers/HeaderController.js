app.controller('HeaderController', ['$scope', 'indexConfigLoader', function ($scope, indexConfigLoader) {
    indexConfigLoader.success(function (data) {
        $scope.pageTitle = data.pageTitle;
        $scope.pageDescription = data.pageDescription;
        $scope.me = data.me;

    });
}]);