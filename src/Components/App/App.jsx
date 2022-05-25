import logo from '../../assets/logo.png';
import './App.css';
import {Converter} from "../Converter/Converter";

function App() {

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Converter/>
    </div>
    );
}

export default App;
