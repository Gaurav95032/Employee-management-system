import React from "react"
import Header from "../other/Header"
import TaskNumbers from "../other/TaskNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className="min-h-screen">
      <Header data={data} handleLogout={handleLogout} />
      <TaskNumbers data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard

