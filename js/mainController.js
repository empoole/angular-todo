app.controller('MainController', ['$scope', function($scope) {
	$scope.tasks = [
		{
			name : "Write app",
			desc : "Write your angular todo app",
			complete : false,
			id : "task1"
		},
		{
			name : "Style app",
			desc : "Style the app with Bootstrap",
			complete : false,
			id : "task2"
		}
	]
	$scope.addTask = function() {
		
	}
}]);