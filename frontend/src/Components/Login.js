import React, { useContext , useState} from 'react'
import AuthContext from '../Context/AuthContext'
const Login = () => {
  let {loginUser}=useContext(AuthContext);
  let [username,setUsername]=useState([]);
  let [password,setPassword]=useState([]);
  return (
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Username</label>
    <input type="username" onChange={(e)=>{
       setUsername(e.target.value);
    }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>{
       setPassword(e.target.value);
    }} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={(e)=>{
    e.preventDefault();
    console.log(username);
    console.log(password);
    loginUser(username,password);
  }} class="btn btn-primary">Submit</button>
</form>
  )
}

export default Login