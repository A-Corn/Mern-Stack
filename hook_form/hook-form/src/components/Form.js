import { useState } from 'react';

const Form = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
            <label> First Name: </label>
            <input type="text" 
            value={firstName}
            onChange={(e) => {
                setFirstName(e.target.value)
            }}
            />
            <br></br>

            <label> Last Name: </label>
            <input type="text" 
            value={lastName}
            onChange={(e) => {
                setLastName(e.target.value)
            }}
            />
            <br></br>

            <label> Email: </label>
            <input type="text" 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            />
            <br></br>

            <label> Password: </label>
            <input type="password" 
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            />
            <br></br>

            <label> Confirm Password: </label>
            <input type="password" 
            value={confirmPassword}
            onChange={(e) => {
                setConfirmPassword(e.target.value)
            }}
            />
            <br></br>
            <button on> Submit </button>
        </form>

        <h2> Your Form Data! </h2>
        <p> First Name: {firstName}</p>
        <p> Last Name: {lastName}</p>
        <p> Email: {email}</p>
        <p> Password: {password}</p>
        <p> Confirm Password: {confirmPassword}</p>
        </div>


    )
}

export default Form;