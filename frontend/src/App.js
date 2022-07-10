import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        console.log('Hi')
      }} style={{backgroundColor:'blue',color:'white',padding:'10px',border:'none',borderRadius:'10px',cursor:'pointer'}}>
        login
      </button>
    </div>
  );
}

export default App;
