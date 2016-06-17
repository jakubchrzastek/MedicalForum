'use strict';

angular.module('medicalApp')
    .controller('allQuestionCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
        $http.get('json/question.json').success(function(response) {
            $scope.allQuestionData = response.question;
        });

        $scope.limit = 2;
        $scope.limitShow = 4;
        $scope.moreActivites = 4;

        $scope.updateFind = function(findOnPage) {
            $scope.findOnPage = findOnPage;
        };

        $scope.openModal = function(id) {
            $scope.modalUser = id;
            $('#myModal').toggleClass('modalShow');
        };


        var windowElement = angular.element($window);

        function onResize() {
            var width = windowElement.width();

            if (width > 1100) {
                $scope.limitShow = 4;
                $scope.moreActivites = 5;
            } else if (width > 850) {
                $scope.limitShow = 3;
                $scope.moreActivites =  6;
            } else if (width > 680) {
                $scope.limitShow = 2
                $scope.moreActivites = 7;
            } else {
                $scope.limitShow = 1;
                $scope.moreActivites = 8;
            }

           $scope.$applyAsync();
        }

        windowElement.on('resize', onResize);
        $scope.$on('$changeSize', function() {
            windowElement.off('resize', onResize);
        });

    }]);
