var app = angular.module('eggfrenzy', ['ngTouch']);

app.controller('eggsCtrl', ['$scope', '$http',

    function ($scope, $http) {
        //        status = 0 完好, status = 2 选中
        $scope.eggsdata = [{
            status: 0,
            src: '/assets/img/good-egg.png',
            stars: 0,
        }, {
            status: 0,
            src: '/assets/img/good-egg.png',
            stars: 0,
        }, {
            status: 0,
            src: '/assets/img/good-egg.png',
            stars: 0,
        }];
        //        get award level and peopleNumber
        $http.get('data.json').success(function (data) {
            $scope.rockResult = [{
                "award": ""
            }, {
                "award": ""
            }, {
                "award": ""
            }];
            $scope.rockResult[parseInt(2 * Math.random())] = data;
            $scope.peopleNumber = data.peopleNumber;
        })

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
    }]).directive('eggFrenzy', function () {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'eggs.html',
    }
});