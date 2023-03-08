import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ToDoList from './ToDoList';
import ToDoCounter from './ToDoCounter';
import './ToDo.css';
import ToDoListAdditional from './ToDoListAdditionals';

function ToDo() {
    let [input, setInput] = useState<string>('');
    let [items, setItems] = useState<string[]>([]);
    let [completed, setCompleted] = useState<string[]>([]);
    let [showCompleted, setShowCompleted] = useState<boolean>(false);
    let [filter, setFilter] = useState<string>('');

    // whenever the user changes the input box, update state
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    // adds an item to the state and resets the input box
    const handleAddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        let newItems = items;
        newItems.push(input);
        setInput('');
        setItems(newItems);
    };

    // deletes an item from state using its index
    const handleDeleteItem = (index: number) => {
        let newItems = items.filter((ele: string, ind: number) => {
            return ind != index;
        })
        setItems(newItems);
    };

    //moves an item to completed when checked off
    const handleCompletedItem = (index: number) => {
        let newCompleted = completed;
        newCompleted.push(items[index]);
        let newItems = items.filter((ele: string, ind: number) => {
            return ind != index;
        })
        setItems(newItems);
        setCompleted(newCompleted);
    };

    const handleCompletionToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.className.includes('todo-completed-toggle')) {
            setShowCompleted(true);
        } else {
            setShowCompleted(false);
        }
    };

    const handleSetFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value != '') {
            setFilter(event.target.value);
        } else {
            setFilter('');
        }
    };

    return (
        <div>
            <div className='ToDo-container'>
                <header className='ToDo-header'>To-Do List</header>
                <ToDoCounter itemCount={showCompleted ? completed.length : items.length} showCompleted={showCompleted} />
                <InputGroup className='mb-3'>
                    <Form.Control
                        type='text'
                        name='todo-input'
                        value={input}
                        id='todo-input'
                        disabled={showCompleted}
                        placeholder='Enter a new item here...'
                        onChange={handleInput}
                    />
                    <Button 
                    variant='primary'
                    id='todo-add-btn'
                    className='todo-btn'
                    disabled={!input}
                    onClick={handleAddItem}
                    >
                        +
                    </Button>
                </InputGroup>
                <ToDoList items={items} deleteFunction={handleDeleteItem} completeFunction={handleCompletedItem} completed={completed} showCompleted={showCompleted} filter={filter} />
            </div>
            <ToDoListAdditional showCompleted={showCompleted} toggleCompletionFunction={handleCompletionToggle} setFilterFunction={handleSetFilter} />
        </div>
    );
}

export default ToDo;