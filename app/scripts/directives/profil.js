'use strict';

angular.module('medicalApp')
    .directive('profil', [function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/_profil.html',
            scope: {
                userid: '='
            },
            link: function($scope, $element, $attrs) {
                // $scope.userdata = undefined;

                // function init(userid) {
                //     $scope.userdata = undefined;

                //     $http.get('data/users/' + userid + '.json').success(function(response) {
                //         $scope.userdata = response;
                //     });


                // }

                // $scope.$watch('userid', function(new) {
                //     init(new);
                // });

            }
        }
    }]);
