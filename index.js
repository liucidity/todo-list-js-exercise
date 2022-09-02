// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // Print the state of a task to the console in a nice readable way
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function () {
      this.complete = true;
    }

  }
  return task;
};



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take out the crap from the litter box"); // task 0;
const task2 = newTask("Do Laundry", 'fold em up'); // task 1
const tasks = [task1, task2];

console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed
