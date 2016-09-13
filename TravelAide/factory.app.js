angular.module('thingsToDo')
    .factory('thingsToDoFactory',['$http',safeFac])

function safeFac($http) {
  	return {
  		getsafeData:function(city){
           return $http.get("http://terminal2.expedia.com/x/activities/search?location="+city+"&apikey=6HO9akEcG7vXjAJou53Ew8KLycghVIK5")
        }
    }
}