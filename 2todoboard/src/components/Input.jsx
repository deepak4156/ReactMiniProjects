import React, { useState } from 'react'

const Input = ({tasklist, setTasklist}) => {

  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasklist([...tasklist, input]);
    setInput("");
  }
  return (
    <div className='flex flex-row items-center gap-3'>
      <form action="">
        <input type="text"
        className='border rounded-lg px-1.5 py-2.5 text-lg mr-2'
        placeholder='Add a task'
        value={input}
        onChange={(e) => setInput(e.target.value)} />

        <button
        className='bg-violet-700 text-white py-1.5 px-3.5 rounded-lg font-semibold hover:opacity-70'
        onClick={handleAddTask}>Add</button>
      </form>
    </div>
  )
}

export default Input
