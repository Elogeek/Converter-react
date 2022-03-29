import logo from '../../assets/logo.png';
import './App.css';
import {Converter} from "../Converter/Converter";
import {useState} from "react";

function App() {

    const unitsList = [
        {id:1, unitStart: "1m", unitConverter: "10dm"},
        {id:2, unitStart: "1dm", unitConverter: "10cm"},
        {id:3, unitStart: "1cm", unitConverter: "10mm"},
        {id:4, unitStart: "1m", unitConverter: "100cm"},
        {id:5, unitStart: "1m", unitConverter: "1000mm"},
    ];

    const [units, setUnits] = useState([...unitsList]);
    const [converter, setConverter] = useState(0);

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Converter units={units} setConverter={setConverter}/>
    </div>
    );
}

export default App;
