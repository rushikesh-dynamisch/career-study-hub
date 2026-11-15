import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Practicejs from './components/Practicejs';
// import Practicetype from './components/Practicetype';
import NewTsClass from './components/NewTsClass.tsx';
function App() {
//  useEffect(()=>{
//   Practicetype();
//  },[]);
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to reactjs</h1>
       <Practicejs />
      <NewTsClass />
      </header>
    </div>
  );
}
 
export default App;
