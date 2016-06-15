'use strict';

angular.module('medicalApp')
    .directive('comment', [function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/_comment.html',
            link: function($scope, $element, $attrs) {

            }
        }
    }]);
