import React, { useState } from 'react'
import { UseGlobalState } from '../../context/GlobalState';

function TransactionForm() {

  const {addTransaction} = UseGlobalState()
  const [description, setDescription] =  useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e)=>{
    e.preventDefault()
    addTransaction({
      id:window.crypto.randomUUID(),
      description, 
      amount: +amount
    })
    setAmount(0);
    setDescription("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' type="text" placeholder='Enter a Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
      {/* <input type="number" step="0.01" placeholder='00.00' onChange={(e)=>{setAmount(e.target.value)}} /> */}
      <input  className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' type="text" value={amount} placeholder='00.00' onChange={(e)=>{setAmount(e.target.value)}} />
      <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
        Add Transaction
      </button>
    </form>
  )
}

export default TransactionForm