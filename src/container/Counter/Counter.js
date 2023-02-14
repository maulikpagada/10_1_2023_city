import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement,increment } from '../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch()

    const counterdata = useSelector(state => state.count)

    const handleincrement = () => {
        dispatch(increment())
    }

    const handledecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <button onClick={() => handleincrement()}>+</button>
            <p>{counterdata.count}</p>
            <button onClick={() => handledecrement()}>-</button>
        </div>
    );
}

export default Counter;