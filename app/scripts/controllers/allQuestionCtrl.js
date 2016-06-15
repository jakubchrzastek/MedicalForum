'use strict';

angular.module('medicalApp')
    .controller('allQuestionCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('json/question.json').success(function(response) {
            $scope.allQuestionData = response.question;
            console.log($scope.allQuestionData);
        });

        $scope.limit = 2;
        $scope.toggle = true;

    }]);
