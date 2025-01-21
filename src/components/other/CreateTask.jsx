import React from "react"
import { useState } from "react"

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("")
  const [taskDescription, setTaskDescription] = useState("")

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    const newTaskData = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    }
    const data = JSON.parse(localStorage.getItem("employee") || "[]")
    data.forEach((elem) => {
      if (assignTo === elem.firstname) {
        elem.tasks.push(newTaskData)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
      }
    })
    localStorage.setItem("employee", JSON.stringify(data))
    setNewTask(newTaskData)

    setTaskTitle("")
    setTaskDate("")
    setAssignTo("")
    setCategory("")
    setTaskDescription("")
  }

  return (
    <div className="flex items-center justify-center w-full h-[350px] bg-gray-50 p-28">
      <form
        onSubmit={submitHandler}
        className="flex flex-row items-start justify-start gap-[50px] p-8 border-red-500 border-2 rounded-lg shadow-lg bg-white"
      >
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start gap-3 text-red-500">
            <label htmlFor="taskTitle" className="text-red-600 text-[20px] font-semibold">
              Task title :{" "}
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              id="taskTitle"
              className="outline-none border-red-400 border-2 rounded-lg px-3 py-2 w-[300px] text-black focus:border-red-600 transition-colors duration-300"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 text-red-500">
            <label htmlFor="taskDate" className="text-red-600 text-[20px] font-semibold">
              Date :{" "}
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              id="taskDate"
              className="outline-none border-red-400 border-2 text-black rounded-lg px-3 py-2 w-[300px] focus:border-red-600 transition-colors duration-300"
              type="date"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 text-red-500">
            <label htmlFor="assignTo" className="text-red-600 text-[20px] font-semibold">
              Assign to :{" "}
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              id="assignTo"
              className="outline-none border-red-400 border-2 text-black rounded-lg px-3 py-2 w-[300px] focus:border-red-600 transition-colors duration-300"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 text-red-500">
            <label htmlFor="category" className="text-red-600 text-[20px] font-semibold">
              Category :{" "}
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="outline-none border-red-400 border-2 text-black rounded-lg px-3 py-2 w-[300px] focus:border-red-600 transition-colors duration-300"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[50px] text-red-500">
          <div className="flex flex-col items-start justify-start gap-3 text-red-500">
            <label htmlFor="description" className="text-red-600 text-[20px] font-semibold">
              Description :{" "}
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              id="description"
              className="outline-none border-red-400 border-2 rounded-lg text-black px-3 py-2 w-[300px] h-[100px] resize-none focus:border-red-600 transition-colors duration-300"
            />
          </div>
          <button
            type="submit"
            className="text-white w-[300px] h-[40px] bg-red-500 mt-3 py-1 font-bold rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md"
          >
            Create task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask

