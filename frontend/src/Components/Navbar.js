import React, { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext';
const Navbar = () => {
    const navigate=useNavigate();
  
    const {authTokens,logoutUser}=useContext(AuthContext);
  return (
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          {authTokens===null?<button style={{marginRight:'10px'}}onClick={()=>navigate('/login/')}className="btn btn-danger">Login</button>:<button style={{marginRight:'10px'}} onClick={()=>{ logoutUser() }}className="btn btn-primary">Logout</button>}
          
          <button onClick={()=>navigate('/register/')}className="btn btn-success">Sign-Up</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar