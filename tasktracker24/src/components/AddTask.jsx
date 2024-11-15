import React, { useState } from 'react'

const AddTask = () => {
    const [addModal, setAddModal] =useState(false)
  return (
    <div>
      <button className='bg-blue-500 text-white uppercase text-sm font-semibold py-1
      mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70 '
      type='button'
      onClick={() => setAddModal(true)}
      >New</button>
      {addModal ? (
        <>
        <div>
            <h3 className='overflow-x-hidden
            overflow-y-auto fixed inset-0 z-100 '>
                Add New Tasj</h3>
        </div>
        </>
      ): null}
    </div>
  )
}

export default AddTask
