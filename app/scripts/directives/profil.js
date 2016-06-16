'use strict';

angular.module('medicalApp')
    .directive('profil', ['$http', function($http) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/_profil.html',
            link: function($scope, $element, $attrs) {

            }
        }
    }]);
