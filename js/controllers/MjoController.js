app.controller('MjoController', ['$scope', 'mjoPlotsLoader', function ($scope, mjoPlotsLoader) {
    mjoPlotsLoader.success(function (data) {
        $scope.plots = data.plots;
    });
}]);