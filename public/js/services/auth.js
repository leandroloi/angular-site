/**
 * Created by leandroloi on 16/04/16.
 */
angular.module('authService',[])

    //very simple service
    .factory('auth', function($http){

        return {
            login: function (loginData) {
              return $http.post('/api/login', loginData)
            },
            create : function(user){
                return $http.post('/api/register', user);
            }

        }

    });