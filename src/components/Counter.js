import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
        
    return (
        <div>
        <h1>Counter app</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter