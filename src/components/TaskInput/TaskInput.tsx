import {FC, useState} from "react";

interface ITaskInput {
  add: any
}

export const TaskInput: FC<ITaskInput> = ({add}) => {
  const [input, setInput] = useState('')

  const addTask = () => {
    if(input) {
      add(input)
      setInput('')
    }
  }

  return (
    <div className="task-input">
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}