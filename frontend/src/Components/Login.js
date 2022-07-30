import React, { useContext , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext'
const Login = () => {
  let {authTokens,loginUser}=useContext(AuthContext);
  let [username,setUsername]=useState([]);
  let [password,setPassword]=useState([]);
  const navigate=useNavigate();
  const discordLogin=async(e)=>{
        e.preventDefault();
        console.log("hI");
        let data=await fetch('http://127.0.0.1:8000/api/discord/');
        let parsedData=await data.json();
        console.log(parsedData.url);
        window.location.href=parsedData.url;

  }
  return (
    <div style={{position:'absolute',top:'25%',left:'25%',backgroundColor:'white',borderRadius:'10px',padding:'20px',width:'50vw'}}>
    <form >
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
  <div>
  <button onClick={discordLogin}  style={{backgroundColor:'#6E85D2',border:'none',borderRadius:'5px',color:'white'}}><i className="fa-brands fa-discord mx-2"></i>Login With Discord</button>
  </div>
  <button type="submit" onClick={(e)=>{
    e.preventDefault();
    console.log(username);
    console.log(password);
    loginUser(username,password);
  }} class="btn btn-secondary my-2">Submit</button>
</form>
</div>
  )
}

export default Login