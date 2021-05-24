import logo from './logo.svg';
import './App.css';
import Numbers from './Keyboard/Buttons/Numbers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-block">
         <Numbers />
        </div>
    
      </header>
    </div>
  );
}

export default App;
