/**
 * Created by vinci on 7/12/2016.
 */
app.controller('bookController',['$scope','books','$routeParams',function($scope,books,$routeParams){
    books.success(function(data){
        $scope.book = data[$routeParams.bookId];
    });
    $scope.currentBookIndex = parseInt($routeParams.bookId);
}]);