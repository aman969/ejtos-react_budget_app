import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';
const Currency=() =>{
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };
    return(
    
        <select className="form-select alert alert-success"  id="currencySelect" onChange={changeCurrency}>
            <option defaultValue>Currency (£ Pound)</option>
            <option value="$" name="dollar"> $ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Ruppee</option>
        </select>
    
    );
};

export default Currency;