import React, {FC} from 'react'
import {ITasks} from "../../store/store";

interface ITaskProps {
  task: ITasks
  doneTask: any
  deleteTask: any
}

const Task: FC<ITaskProps> = ({task, doneTask, deleteTask}) => {

  const Button = () => {
    return(
      <div className="action-btn">
        {!task.state ?
          <p onClick={doneTask}>✔️</p>
          :
          <p onClick={deleteTask}>❌</p>}
      </div>
    )
  }

  const className = 'task ' + (task.state ? 'task-done' : '')

  return(
    <div className={className}>
      <p>{task.title}</p>
      <Button/>
    </div>
  )
}

export default Task;