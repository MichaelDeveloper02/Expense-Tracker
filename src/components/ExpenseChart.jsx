import React from 'react'
import {VictoryPie, VictoryLabel} from "victory"
import { UseGlobalState } from '../context/GlobalState'

function ExpenseChart() {

  const {transactions} = UseGlobalState()
  const total = transactions.reduce((acc, transaction)=>(acc+=transaction.amount),0)

  const totalIncome = transactions.filter(transaction=>transaction.amount > 0).reduce((acc, transaction)=>(acc+=transaction.amount),0)

  const totalExpense = transactions.filter(transaction=>transaction.amount < 0).reduce((acc, transaction)=>(acc+=transaction.amount),0) * -1

  const totalExpensesPorcentage = Math.round(totalExpense / totalIncome * 100);

  const totalIncomePorcentage = 100 - totalExpensesPorcentage;
  return (
    <VictoryPie
    colorScale={["#e74c3c", "#2ecc71"]}
    data={[
      { x: "Expenses", y: totalExpensesPorcentage },
      { x: "Incomes", y: totalIncomePorcentage },
    ]}
    animate={{
        duration: 200
    }}

    labels={({datum})=> `${datum.y}%`}
    labelComponent={<VictoryLabel angle={45} style={{fill:"white"}}/>}
    />
    )
}

export default ExpenseChart