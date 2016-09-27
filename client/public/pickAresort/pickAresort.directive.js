(function() {
    'use strict';

    angular.module('portfolio')
        .directive('portfolioPickaresort', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: './pickAresort/pickAresort.directive.html',
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
