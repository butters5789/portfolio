(function() {
    'use strict';

    angular.module('portfolio')
        .directive('portfolioApp', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: './layout/layout.directive.html',
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
