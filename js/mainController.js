app.controller('MainController', ['$scope', function($scope) {
	$scope.tasks = [
		{
			name : "Write app",
			desc : "Write your angular todo app",
			complete : false,
			id : generateId()
		},
		{
			name : "Style app",
			desc : "Style the app with Bootstrap",
			complete : false,
			id : generateId()
		}
	]
	
	//Add a new task
	$scope.addTask = function() {
		var taskName = $("#add-task-name").val(),
			taskDesc = $("#add-task-desc").val();

		var newTask = {
			name : taskName,
			desc : taskDesc,
			complete : false,
			id : generateId()
		}

		$scope.tasks.push(newTask);
	}

	//Remove the given task
	$scope.removeTask = function(task) {
		//Loop through the $scope.tasks array
		for(var i = 0; i < $scope.tasks.length; i++) {
			//Find the task to remove by its id and splice it from the array
			if ($scope.tasks[i].id === task.id) {
				$scope.tasks.splice(i, 1);
			}
		}
	}
}]);