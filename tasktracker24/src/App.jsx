import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'

function App() {
  const [addModal, setAddModal] = useState(false)

  return (
   <>
   <h1 className='text-2xl font-bold py-4 pl-6'>
    Task Tracker
   </h1>
   <p className='text-xl pl-6'>Hi there!</p>
   <div className='flex flex-row items-center'>
   <p className='text-xl pl-6'> Click </p>
     <AddTask /> 
    <p className='text-xl my-2'> add a new task</p>
   </div>
   </>
  )
}

export default App
