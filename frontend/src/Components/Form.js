import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [first_name, setFirst] = useState("");
    
    const [last_name, setSecond] = useState("");
    const register = async () => {
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(password2);
        console.log(first_name);
        console.log(last_name);          
        const response=await fetch('https://socioauth-login.herokuapp.com/api/register/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email, 
                password,
                password2,
                first_name,
                last_name
            })

        })
        console.log(response);
        if(response.status===201)
           navigate("/auth");

        
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