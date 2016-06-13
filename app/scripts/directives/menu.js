'use strict';

angular.module('medicalApp')
    .directive('menu', [function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/_menu.html',
            scope: {
                content: '='
            }
        }

    }]);
