 angular.module('rangular')
.controller('QuestionIndexCtrl', ['$scope', '$http', 'Question', function ($scope, $http, Question) {
     
    $http.get('api/questions')
      .success(function (data) {
        console.log(data);
        $scope.questions = data
        //$scope.questions = Question.all();
      })
      .error(function (data) {
        console.log("error: " + data);
      })

      $scope.Post = function() {
        $http.post('api/questions', {question: {content: $scope.question}})        
        .success(function(data) {
          $scope.questions.push(data);
          //clear out formfield
          $scope.question = "";
        })
        .error(function (data) {
          console.log("error: " + data);
        });
      };

                  
}])

.controller('QuestionShowCtrl', ['$scope', '$http', '$routeParams', 'Question', function ($scope, $http, $routeParams, Question) {

    $http.get('/api/questions/' + $routeParams.id)
      .success(function (data) {
        console.log(data);
        $scope.question = data
      })
      .error(function (data) {
        console.log("error: " + data);
      })

    $scope.destroy = function() {
      $scope.question.$remove()
      };
}]);



