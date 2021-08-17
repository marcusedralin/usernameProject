import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css'

const AddUser = props => {
    const [ usernameInput, setUsernameInput ] = useState('');
    const [ usernameInputAge, setUsernameInputAge ] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();
        if (usernameInput.trim().length === 0 || usernameInputAge.trim().length === 0) {
            return
        }
        if (usernameInputAge < 1) return;
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

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={usernameInput} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" value={usernameInputAge} onChange={usernameAgeChangeHandler}/>
                <Button className={styles.button} type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser
