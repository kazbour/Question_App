
  angular.module('rangular', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'question-index.html',
                controller: 'QuestionIndexCtrl'
            })
            .when('/questions/:id', {
                templateUrl: 'question-show.html',
                controller: 'QuestionShowCtrl'
            });
            
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })

      .config([
      "$httpProvider", function($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      }
    ]);