import React from 'react';
import Input from './Input';
function Form({ onSubmit }) {
    return (
        <form className = "myFavoriteForm form" onSubmit = { onSubmit }>
            <Input type="text" name="firstName" placeholder="Name"/>
            <Input type="text" className="form-control" name="lastname" placeholder="Lastname"/>
            <Input type="email" className="form-control" name="email" placeholder="Email"/>       
            <Input type="password" className="form-control" name="password" placeholder="Write your password"/>
            <button type="submit" className="btn btn-default btn-primary btn-block">Registration</button>
        </form>
    );
}

export default Form;