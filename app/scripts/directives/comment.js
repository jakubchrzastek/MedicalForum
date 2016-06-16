'use strict';

angular.module('medicalApp')
    .directive('comment', ['$http', function($http) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/_comment.html',
            scope: {
                userid: '=user'
            },
            link: function($scope, $element, $attrs) {

                function init(userid) {

                    $http.get('json/doctor' + userid + '.json').success(function(response) {
                        $scope.doctorData = response.user;
                        console.log($scope.doctorData);
                    });
                }

                $scope.$watch('userid', function(newid) {
                    init(newid);
                });

            }
        }
    }]);
