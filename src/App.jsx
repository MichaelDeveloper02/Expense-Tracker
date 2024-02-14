import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import InComeExpenses from './components/transactions/InComeExpenses'
import ExpenseChart from './components/ExpenseChart'

function App(){
  return(
    <GlobalProvider>
      <div className='bg-zinc-900 text-white h-screen  flex justify-center items-center' >
        <div className='container mx-auto w-3/6'> {/* el tiene w-2/6*/}
          <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
            <div>
              <h1 className='text-4xl font-bold'>Expense Tracker</h1>
              <InComeExpenses/>
              <Balance/>
              <TransactionForm/>
            </div>
            <div className='flex flex-col flex-1'>
              <ExpenseChart/>
              <TransactionList/>

            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}
export default App
