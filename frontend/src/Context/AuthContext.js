import { createContext, useState, useEffect, Children } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Login from '../Components/Login';
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const loginUser = async (username, password) => {
        const response = await fetch("https://socioauth-login.herokuapp.com/api/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        });
        const data = await response.json();
    
        if (response.status === 200) {
          setAuthTokens(data);
          setUser(jwt_decode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
          navigate("/auth");
        } else {
          alert("Something went wrong!");
        }
      };
    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/');
    }
    // let updateToken = async () => {
    //     let response = await fetch('https://socioauth-login.herokuapp.com/api/token/refresh/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ 'refresh': authTokens?.refresh })

    //     })
    //     let data = await response.json();
    //     console.log(data);
    //     if (response.status === 200) {
    //         setAuthTokens(data);
    //         setUser(jwt_decode(data.acess))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //     }
    //     else {
    //         logoutUser();
    //     }
    //     if (loading) {
    //         setLoading(false);
    //     }
    // }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,

    }

  
    useEffect(() => {
        if (authTokens) {
          setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
      }, [authTokens, loading]);


    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}