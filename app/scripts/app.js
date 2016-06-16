'use strict';

angular.module('medicalApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('allquestion', {
                url: '/',
                templateUrl: 'html/allquestion.html',
                controller: 'allQuestionCtrl'
            })
            .state('singlequestion', {
            	url: '/question/:questionID',
            	templateUrl: 'html/singlequestion.html',
            	controller: 'singleQuestionCtrl'
            })
            .state('profil',{
                url: '/profil',
                templateUrl: 'html/_profil.html'
            });

        $urlRouterProvider.otherwise('/');
    });

