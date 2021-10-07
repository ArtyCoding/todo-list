import Task from "./components/Task/Task";
import store from './store/store'
import { observer } from 'mobx-react'
import {TaskInput} from "./components/TaskInput/TaskInput";
import {FilterButton} from "./components/FilterButton/FilterButton";

function App() {
  const {filteredTasks, activeTasks} = store

  return (
    <div className="App">
      <h1 className="top">Active tasks: {activeTasks}</h1>
      <div className="button-container">
        <FilterButton text={"Done"} action={() => store.changeFilter('done')}/>
        <FilterButton text={"Active"} action={() => store.changeFilter('unfilled')}/>
        <FilterButton text={"All"} action={() => store.changeFilter('all')}/>
      </div>
      {filteredTasks?.map(task => (
        <Task
          doneTask={() => store.doneTask(task.id)}
          deleteTask={() => store.deleteTask(task.id)}
          task={task}
          key={task.id}
        />
      ))}
      <TaskInput add={(task: string) => store.addTask(task)}/>
    </div>
  );
}

export default observer(App);
