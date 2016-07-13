/**
 * Created by vinci on 7/12/2016.
 */
app.controller('bookshelfController',['$scope','books',function($scope,books){
    books.success(function(data){
        $scope.myBooks = data;
    });
}]);

