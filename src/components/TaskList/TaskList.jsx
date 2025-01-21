import React from "react"
import AcceptTask from "./AcceptTask"
import CompletedTask from "./CompletedTask"
import NewTask from "./NewTask"
import FailedTask from "./FailedTask"

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex gap-8 items-start justify-start p-6 mx-auto max-w-7xl h-[400px] rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.completed) {
          return <CompletedTask key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList

