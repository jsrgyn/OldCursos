angular.module('dragons', [])
.controller('Dragon', function($scope, $http) {
    $http.get('https://dragons-api.herokuapp.com/api/dragons').
    //$http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});