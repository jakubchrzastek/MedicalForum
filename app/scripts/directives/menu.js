'use strict';

angular.module('medicalApp')
    .directive('menu', [function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/_menu.html',
            scope: {
                findOnPage: '=find'
            },
            link: function($scope, $element, $attrs) {
                $scope.type = $attrs.type;
                
                $scope.goBack = function() {
                    window.history.back();

                };

            }
        }
    }]);
