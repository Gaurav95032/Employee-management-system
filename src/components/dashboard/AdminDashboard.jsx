import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({ handleLogout, data }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header handleLogout={handleLogout} />
      <main className="flex-grow">
        <CreateTask />
        <AllTask data={data} />
      </main>
    </div>
  )
}



export default AdminDashboard