import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import Board from './components/Board';

function App() {
  const [tasklist, setTasklist] = useState([]);

  return (
    <>
      <div className='flex flex-col items-center justify-center py-8 gap-4'>
        <h1 className='text-xl font-semibold'>To do List</h1>
        <Input tasklist={tasklist} setTasklist={setTasklist} />
      </div>
      <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 '>
        {tasklist.map((task, index) =>
        <Board
        key={index}
        index={index}
        task={task}
        tasklist={tasklist}
        setTasklist={setTasklist}
         />
        )}
      </div>

    </>
  )
}

export default App
