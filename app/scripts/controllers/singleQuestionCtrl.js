'use strict';

angular.module('medicalApp')
    .controller('singleQuestionCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
        $http.get('json/single' + $stateParams.questionID + '.json').success(function(response) {
            $scope.questionData = response.question;
            console.log($scope.questionData);
        });
    }]);
