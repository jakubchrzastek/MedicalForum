'use strict';

angular.module('medicalApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('allquestion', {
                url: '/allquestion',
                templateUrl: 'html/allquestion.html',
                controller: 'allQuestionCtrl'
            })
            .state('singlequestion', {
            	url: '/question',
            	templateUrl: 'html/singlequestion.html',
            	controller: 'singleQuestionCtrl'
            });

        $urlRouterProvider.otherwise('/allquestion');
    });

