(function() {
    'use strict';

    var dependencies = ['ui.router'];

    angular.module('portfolio', dependencies)
        .config(setupRoutes);

    setupRoutes.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];

    function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<portfolio-app></portfolio-app>'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

})();
