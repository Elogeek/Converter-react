import "./Converter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";

export const Converter = function() {
    /**
     * For to have it easier to manage the fields to convert
     */
    const [entry, setEntry] = useState(1);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [unit, setUnit] = useState(0);

    const [result, setResult] = useState("");

    /**
     * For to have it easier to manage units of measure and liter
     */
    const values = [
        {
            id: 0,
            name: "valeurs",
            base: 1,
        },
        {
            id: 1,
            name: "deci",
            base: 0.1,
        },
        {
            id: 2,
            name: "centi",
            base: 0.01,
        },
        {
            id: 3,
            name: "mili",
            base: 0.001,
        },
    ];

    /**
     * For to have it easier to manage units of measure and liter
     */
    const units = [
        {
            id: 0,
            title: "unitées",
        },
        {
            id: 1,
            title: "mètre",
        },
        {
            id: 2,
            title: "litre"
        }
    ];

    /**
     * Check and manage action click btn convert
     * @param e
     */
    function handleClickConvert(e) {
        let res = (values[to].base / values[from].base) * entry;
        setResult(res.toString());
    }

    return(
        <div className="ConverterInput">
            <form>

                <div>
                    <label htmlFor="input-amount">Montant</label>
                    <input type="number" name="input-amount" value={entry} onChange={e => setEntry(parseInt(e.target.value))}/>
                </div>

                <div>
                    {/* Field for amount to be converted */}
                    <label htmlFor="input-amount-device">Chossissez votre unité :</label>
                    <select
                        name="input-amount-device"
                        id="input-amount-device"
                        onChange={e => setFrom(parseInt(e.target.value))}>
                        {values.map(converter => <option key={converter.id} value={converter.id}>{converter.name}</option>)}
                    </select>
                    <select
                        name="input-convert"
                        id="input-convert"
                        readonly="true"
                        onChange={e => setUnit(parseInt(e.target.value))}>
                        {units.map(unit => <option key={unit.id} value={unit.id}>{unit.title}</option>)}
                    </select>
                </div>

                <div>
                    <button type="button"><FontAwesomeIcon icon={faEquals}/></button>
                </div>

                <div>
                    {/* Field for choosing conversion units */}
                    <label htmlFor="input-convert">Convertir l'unité en : </label>
                    <select onChange={e => setTo(parseInt(e.target.value))}>
                        {values.map(converter => <option key={converter.id} value={converter.id}>{converter.name}</option>)}
                    </select>
                </div>

                {/* Displays the result of the conversion */}
                <div className="result">
                     <span id="green">
                         Le résultat est : {result.toString() + " " + (values[to].id !== 0 ? values[to].name: "") + units[unit].title } !
                     </span>
                </div>

                <div>
                    <button type="submit" onClick={handleClickConvert}>Convertir</button>
                    {/* Refresh the page */}
                    <button type="submit"
                       onClick={
                            ()=> {
                                setEntry(0);
                                setFrom(0);
                                setTo(0);
                                setResult("");
                                setUnit(0);
                            }
                        }>Reset
                    </button>
                </div>

            </form>
        </div>
    );
};

