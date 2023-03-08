import React from 'react';
import './ToDoListAdditional.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function ToDoListAdditional({showCompleted, toggleCompletionFunction, setFilterFunction} : any) {
    return (
        showCompleted == false ?
        <div className='ToDo-container2'>
            <Button
            type='button'
            variant='light'
            className='todo-completed-toggle'
            onClick={toggleCompletionFunction}
            >
                Show Completed
            </Button>
            <InputGroup>
                <Form.Control
                    type='text'
                    name='todo-filter-1'
                    id='todo-filter-1'
                    placeholder='Enter at least two characters...'
                    onChange={setFilterFunction}
                />
            </InputGroup>
        </div>
        : 
        <div className='ToDo-container2'>
            <Button
            type='button'
            variant='light'
            className='todo-list-toggle'
            onClick={toggleCompletionFunction}
            >
                Show To-Do
            </Button>
            <InputGroup>
                <Form.Control
                    type='text'
                    name='todo-filter-1'
                    id='todo-filter-1'
                    placeholder='Enter at least two characters...'
                    onChange={setFilterFunction}
                />
            </InputGroup>
        </div>
    );
}

export default ToDoListAdditional;