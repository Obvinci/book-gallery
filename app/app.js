/**
 * Created by vinci on 7/12/2016.
 */
var app = angular.module('bookApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/books',{
            controller: 'bookshelfController',
            templateUrl: 'views/bookshelf.html'
        })
        .when('/books/:bookId',{
            controller:'bookController',
            templateUrl:'views/book.html'
        })
        .when('/books/:bookId/chapters/:chapterId',{
            controller:'chapterController',
            templateUrl:'views/chapter.html'
        })
        .otherwise({
            redirectTo: '/books'
        });
});