app.controller('CompareController', ['$scope', 'mjoPlotsLoader', function ($scope, mjoPlotsLoader) {
    mjoPlotsLoader.success(function (data) {
        $scope.thumbs = data.plots;
    });
}]);