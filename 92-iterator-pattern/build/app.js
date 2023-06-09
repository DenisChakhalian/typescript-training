"use strict";
class Task {
    constructor(priority) {
        this.priority = priority;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => a.priority > b.priority ? 1
            : a.priority < b.priority ? -1
                : 0);
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
    count() {
        return this.tasks.length;
    }
    getIterator() {
        return new PriorityTaskIterator(this);
    }
}
class PriorityTaskIterator {
    constructor(taskList) {
        this.position = 0;
        taskList.sortByPriority();
        this.taskList = taskList;
    }
    current() {
        return this.taskList.getTasks()[this.position];
    }
    next() {
        this.position += 1;
        return this.taskList.getTasks()[this.position];
    }
    prev() {
        this.position -= 1;
        return this.taskList.getTasks()[this.position];
    }
    index() {
        return this.position;
    }
}
const taskList = new TaskList();
taskList.addTask(new Task(5));
taskList.addTask(new Task(6));
taskList.addTask(new Task(4));
const iterator = taskList.getIterator();
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.index());
