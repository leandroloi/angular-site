/**
 * Created by leandroloi on 16/04/16.
 */

angular.module('loginController', [])
    .controller('loginController', function($scope, auth){
        $scope.UserData = {};

        //$scope.createUser = function() {
        //    if (!$.isEmptyObject($scope.formData)) {
        //
        //        // call the create function from our service (returns a promise object)
        //        User.create($scope.formData)
        //
        //            // if successful creation, call our get function to get all the new todos
        //            .success(function(data) {
        //                $scope.formData = {}; // clear the form so our user is ready to enter another
        //                $scope.todos = data; // assign our new list of todos
        //            })
        //            .error(function(data) {
        //                console.log('Error on delete: ' + data);
        //            });
        //
        //
        //    }
        //};

        $scope.login = function(){

        // call the create function from our service (returns a promise object)
            userData = {};
            userData.email = $scope.email;
            userData.password = $scope.password;

            auth.login(userData)

            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.loginData = data; // assign our new list of todos
            })
            .error(function(data) {
                console.log('Error on delete: ' + data);
            });

        };
    });