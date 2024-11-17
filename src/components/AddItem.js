import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/shoppingListSlice';

const AddItem = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addItem(text));
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type='submit'>Add Item</button>
        </form>
    )
}

export default AddItem