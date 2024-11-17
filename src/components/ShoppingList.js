import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/shoppingListSlice';

const ShoppingList = () => {
    const items = useSelector((state) => state.ShoppingList);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Shopping list</h4>
            <ul>
                {items?.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => dispatch(removeItem(index))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList