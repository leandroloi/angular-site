/**
 * Created by leandroloi on 16/04/16.
 */
// create the controller and inject Angular's $scope

angular.module('mainController', [])
    .controller('mainController', function($scope){
        $scope.mymessage = 'Everyone come and see how good I look!';
    });