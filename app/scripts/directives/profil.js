'use strict';

angular.module('medicalApp')
    .directive('profil', ['$http', function($http) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/_profil.html',
            scope: {
                userid: '='
            },
            link: function($scope, $element, $attrs) {

            	 $scope.doctorData = undefined;

                function init(id) {
                    $http.get('json/doctor' + id + '.json').success(function(response) {
                        $scope.doctorData = response.user;
                    });
                }

                $scope.$watch('userid', function(a, b) {
                    init(a); //wartosc po zmianie
                })

                $scope.closeModal = function() {
                    $('#myModal').removeClass('modalShow');
                }
            }
        }
    }]);
