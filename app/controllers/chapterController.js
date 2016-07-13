/**
 * Created by vinci on 7/12/2016.
 */
app.controller('chapterController',['$scope','books','$routeParams',function($scope,books,$routeParams){
    books.success(function(data){
        $scope.book = data[$routeParams.bookId];
        $scope.chapter = $scope.book.chapters[$routeParams.chapterId];
        // if there is no more chapters left, go back to the bookshelf view
        if($routeParams.chapterId >= $scope.book.chapters.length - 1){
            $scope.nextChapterIndex = "#";
        }
    });
    $scope.currentBookIndex = parseInt($routeParams.bookId);
    $scope.currentChapterIndex = parseInt($routeParams.chapterId);
    $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
    $scope.preChapterIndex = $scope.currentChapterIndex - 1;
}]);