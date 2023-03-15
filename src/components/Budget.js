import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses,currency } = useContext(AppContext);
    const [newbudget, setNewbudget]=useState(budget);
    const totalExpenses= expenses.reduce((total,item) =>{
        return (total +=item.cost);
    },0);
    const updateBudget=(event) => {
        if (event.target.value>20000){
            alert("The value cannot exceed"+currency +"20000");
        }
        else if(event.target.value<totalExpenses){
            alert("you can not reduce budget value less than spending");
        }
        else{
            setNewbudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" 
                   required  
                   value={newbudget}
                   max="20000"
                   step="10"
                   style={{ marginLeft: '1rem', width: '100px'}}
                   onChange={updateBudget}/>
        </div>
    );
};
export default Budget;