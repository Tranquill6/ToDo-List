import React from 'react';
import './ToDoCounter.css';

type Props = {
    itemCount: number
}

function ToDoCounter({itemCount, showCompleted}: any) {
    return (
        <h6 className='todo-count'>You have {itemCount} items {showCompleted ? 'completed' : 'added'}</h6>
    );
}

export default ToDoCounter;