import React from 'react'
import { UseGlobalState } from '../../context/GlobalState'

export function TransactionItem({transaction}) {
    const {deleteTransaction} = UseGlobalState() 
  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center' key={transaction.id}>
        <p >{transaction.description}</p>
        <div>
            <span>${transaction.amount}</span>
            <button onClick={()=> deleteTransaction(transaction.id)}>
                X
            </button>
        </div>
       
    </li>
  )
}

export default TransactionItem