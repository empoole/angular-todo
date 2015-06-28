//Utility functions

//Generate a "unique" id for elements
function generateId() {
	return Math.floor(Math.random() * 10000000000000001).toString();
}

//Clear the task name and task description input fields
function clearInputs() {
	$("#add-task-name").val("");
	$("#add-task-desc").val("");
}