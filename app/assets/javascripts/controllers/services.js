angular.module('rangular')
  .factory('Question', [function() {

    var questions = [
      { id:1, content: "What is the meaning of life?" },
      { id:2, content: "Who are we? Where did we come from? Where are we going?" },
      { id:3, content: "Where is my mind?" }
    ]

    return {
      all: function() {
        return questions
      }
    }

  }]);