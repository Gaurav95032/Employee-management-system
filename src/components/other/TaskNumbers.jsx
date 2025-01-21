import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='screen p-10 flex gap-5'>
        <div className='screen w-[40%] h-[100px] flex flex-col bg-red-500 text-white p-4 rounded-lg '>
            <h2 className='text-3xl font-bold'>{data.taskNumbers.newTask}</h2>
            <h1 className='text-2xl font-bold'>New tasks</h1>
        </div>
        <div className='screen w-[40%] h-[100px] flex flex-col bg-blue-500 text-white p-4 rounded-lg '>
            <h2 className='text-3xl font-bold'>{data.taskNumbers.completed}</h2>
            <h1 className='text-2xl font-bold'>Completed tasks</h1>
        </div>
        <div className='screen w-[40%] h-[100px] flex flex-col bg-green-500 text-white p-4 rounded-lg '>
            <h2 className='text-3xl font-bold'>{data.taskNumbers.active}</h2>
            <h1 className='text-2xl font-bold'>Active tasks</h1>
        </div>
        <div className='screen w-[40%] h-[100px] flex flex-col bg-yellow-500 text-white p-4 rounded-lg '>
            <h2 className='text-3xl font-bold'>{data.taskNumbers.failed}</h2>
            <h1 className='text-2xl font-bold'>Failed tasks</h1>
        </div>
    </div>
  )
}

export default TaskNumbers