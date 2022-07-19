import React from 'react'
import { useState, useEffect } from 'react'
const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const register = async () => {
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(password2);
        console.log(first);
        console.log(second);
        const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username:username,
                email:email,
                password:password,
                password2:password2,
                first:first,
                second:second
            })

        });

        console.log(response);
    }
    return (
        <div>
            <div style={{ marginTop: '15vh' }} className="form-floating mb-3">
                <input type="email" class="form-control" onChange={(e) => {
                    setUsername(e.target.value);
                }} id="floatingInput" placeholder="john doe" />
                <label for="floatingInput">Username:</label>
            </div>

            <div style={{ marginTop: '5vh' }} className="form-floating mb-3">
                <input type="email" class="form-control" onChange={(e) => {
                    setEmail(e.target.value);
                }} id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" class="form-control" onChange={(e) => {
                    setPassword(e.target.value);
                }} id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div style={{ marginTop: '5vh' }} className="form-floating">
                <input type="password" class="form-control" onChange={(e) => {
                    setPassword2(e.target.value);
                }} id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Re-Type Password</label>
            </div>
            <div style={{ marginTop: '5vh' }} className="form-floating mb-3">
                <input type="email" class="form-control" onChange={(e) => {
                    setFirst(e.target.value);
                }} id="floatingInput" placeholder="john" />
                <label for="floatingInput">First Name</label>
            </div>
            <div style={{ marginTop: '5vh' }} className="form-floating mb-3">
                <input type="email" class="form-control" onChange={(e) => {
                    setSecond(e.target.value);
                }} id="floatingInput" placeholder="doe" />
                <label for="floatingInput">Last Name</label>
            </div>


            <div style={{ margin: '50px', marginLeft: '100px' }}>
                <button type="button" className="btn btn-success" onClick={register}>Sign-In</button>
                <button style={{ marginLeft: '30px' }} type="button" className="btn btn-danger">Login</button>
            </div>
        </div>
    )
}

export default Form