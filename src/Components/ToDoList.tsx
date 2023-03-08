import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ToDoList.css';

function ToDoList({ items, deleteFunction, completeFunction, completed, showCompleted, filter }: any) {

    const renderItems = () => {
        return showCompleted == false ? items.map((item: string, index: any) => {
            return (
                <div className='listItem' key={index} hidden={filter != '' && !(new RegExp(`${filter}(.*)`, 'gm').test(item)) ? true : false }>
                    <input
                    type='checkbox'
                    className='form-check-input'
                    onClick={() => completeFunction(index)}
                    checked={false}
                    readOnly={true}
                    />
                    <span 
                    className='todo-list-item-text'
                    >
                        {item}
                    </span>
                    <div 
                    className='trashBtn icon-float-right'
                    onClick={() => deleteFunction(index)}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                </div>
            );
            
        }) :
        completed.map((item: string, index: any) => {
            return (
                <div className='listItem' key={index} hidden={filter != '' && !(new RegExp(`${filter}(.*)`, 'gm').test(item)) ? true : false }>
                    <input
                    type='checkbox'
                    className='form-check-input'
                    checked={true}
                    disabled={true}
                    />
                    <span 
                    className='todo-list-item-text'
                    >
                        {item}
                    </span>
                </div>
            );
        });
    };

    return (
        <div>{renderItems()}</div>
    );
}

export default ToDoList;