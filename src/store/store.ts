//import {ITasks} from "../App";
import {action, computed, makeObservable, observable} from "mobx";

export interface ITasks {
  id: number
  title: string
  state: boolean
}

class TodoStore {

  constructor() {
    makeObservable(this, {
      tasks: observable,
      flag: observable,
      activeTasks: computed,
      filteredTasks: computed,
      addTask: action,
      doneTask: action,
      deleteTask: action,
      filterDoneTasks: action,
      filterUnfilledTasks: action,
      showAllTasks: action,
      changeFilter: action
    })
  }

  tasks: ITasks[] = [
    {id: 0, title: 'Test task', state: false},
    {id: 1, title: 'Test task', state: true},
    {id: 2, title: 'Test task', state: false}
  ]

  flag: 'done' | 'unfilled' | 'all' = 'all'

  setTask(payload: any) {
    this.tasks = payload
  }

  get activeTasks() {
    return this.tasks.filter(task => !task.state).length
  }

  get filteredTasks() {
    switch (this.flag) {
      case "all":
        return this.tasks.slice().sort((a, b) => a.state === b.state ? 0 : a.state ? 1 : -1)
      case "done":
        return this.tasks.filter(task => task.state)
      case "unfilled":
        return this.tasks.filter(task => !task.state)
      default:
        return this.tasks.slice().sort((a, b) => a.state === b.state ? 0 : a.state ? 1 : -1)
    }
  }

  addTask(task: string) {
    let tasks = this.tasks
    tasks.push({
      id: tasks.length || 0,
      title: task,
      state: false
    })
    this.setTask(tasks)
  }

  doneTask(id: number) {
    let tasks = this.tasks
    const index = tasks.map(task => task.id).indexOf(id)
    tasks[index].state = true
    this.setTask(tasks)
  }

  deleteTask(id: number) {
    this.setTask(this.tasks.filter(item => item.id !== id))
  }

  filterDoneTasks() {
    console.log(this.flag)
    this.flag = 'done'
  }

  filterUnfilledTasks() {
    this.flag = 'unfilled'
  }

  showAllTasks() {
    this.flag = 'all'
  }

  changeFilter(flag: 'done' | 'unfilled' | 'all') {
    console.log(flag)

    this.flag = flag
  }


}

export default new TodoStore();


