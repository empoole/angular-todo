app.controller('MainController', ['$scope', function($scope) {
	//Array to hold task objects
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
		//Task name and description values from form inputs
			var taskName = $("#add-task-name").val(),
				taskDesc = $("#add-task-desc").val();

		//Only add new task if the name field is filled
		if (taskName.length > 0) {
			
			//Create new task
			var newTask = {
				name : taskName,
				desc : taskDesc,
				complete : false,
				id : generateId()
			}

			//Clear the form inputs
			clearInputs();
			
			//Add new task to $scope.tasks array
			$scope.tasks.push(newTask);
		}
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

	//Mark a task as complete
	$scope.completeTask = function(task) {
		var $taskId = $("#" + task.id),
			$removeBtn = $("#" + task.id + " .btn");

		if (task.complete) {
			task.complete = false;
			$taskId.removeClass("bg-green");
			$removeBtn.removeClass("btn-success");
			$removeBtn.addClass("btn-danger");
		} else {
			task.complete = true;
			$taskId.addClass("bg-green");
			$removeBtn.removeClass("btn-danger");
			$removeBtn.addClass("btn-success");
		}
	}
}]);