import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css'

const AddUser = props => {
    const [ usernameInput, setUsernameInput ] = useState('');
    const [ usernameInputAge, setUsernameInputAge ] = useState('');
    const [ error, setError ] = useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        if (usernameInput.trim().length === 0 || usernameInputAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name (non-empty values).'
            })
            return;
        }
        if (+usernameInputAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age.'
            });
        return;
        }
        props.onAddUser(usernameInput, usernameInputAge);
        setUsernameInput('');
        setUsernameInputAge('');
    }

    const usernameChangeHandler = (event) => {
        setUsernameInput(event.target.value);
    };

    const usernameAgeChangeHandler = (event) => {
        setUsernameInputAge (event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && (
                <ErrorModal 
                    onConfirm={errorHandler} 
                    title={error.title} 
                    message={error.message} 
                />
             )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={usernameInput} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" value={usernameInputAge} onChange={usernameAgeChangeHandler}/>
                    <Button className={styles.button} type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser
