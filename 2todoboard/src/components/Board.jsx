import React from 'react'

const Board = ({task, index, tasklist, setTasklist}) => {
    const handleDelete = () => {
      let removeIndex = tasklist.indexOf(task);
    tasklist.splice(removeIndex,1);
    setTasklist((currentTasks => currentTasks.filter(
        todo => index === removeIndex
    )))  
    }
    
  return (
    <>
    <div className='max-w-xl flex flex-col items-center justify-start border text-center text-lg pt-3 pb-3 px-4 md:px-6'>
      <p>{task}</p>
      <button onClick={handleDelete}
      className='bg-red-500 text-white rounded-lg py-1 px-2'
      >Delete</button>
    </div>
    </>
  )
}

export default Board
