(function() {
    'use strict';

    angular.module('portfolio')
        .directive('portfolioHero', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: './hero/hero.directive.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var vm = this;

    }

})();
