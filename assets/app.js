var app = angular.module('eggfrenzy', ['ngTouch']);

app.controller('eggsCtrl', ['$scope',
    function ($scope) {
        //        status = 0 完好, status = 2 选中
        $scope.eggsdata = [{
            status: 1,
            src: '/assets/img/good-egg.png',
            stars: 0,
            visable: 1,
            title: '壹'
        }, {
            status: 0,
            src: '/assets/img/good-egg.png',
            stars: 0,
            visable: 0,
            title: '贰'
        }, {
            status: 0,
            src: '/assets/img/good-egg.png',
            stars: 0,
            visable: 0,
            title: '叁'
        }];

        $scope.eggTouch = function ($index) {
            if ($scope.eggsdata[$index].status === 0) {
                for (i = 0; i <= 2; i++) {
                    $scope.eggsdata[i].status = 0;
                }
                $scope.eggsdata[$index].status = 2;
            } else {
                $scope.eggsdata[$index].src = '/assets/img/broken-egg.png';
                $scope.eggsdata[$index].stars = 1;
            }

        };
        $scope.swipeleft = function ($index) {
            if ($index < 2) {
                $scope.eggsdata[$index].visable = 0;
                $scope.eggsdata[$index + 1].visable = 1;
            }
        };
        $scope.swiperight = function ($index) {
            if ($index > 0) {
                $scope.eggsdata[$index].visable = 0;
                $scope.eggsdata[$index - 1].visable = 1;
            }
        }
  }]).directive('eggFrenzy', function () {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'eggs.html',
    }
});