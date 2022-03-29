import "./Converter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';

export const Converter = function({units,setConverter}) {

    /**
     * Check action click convert
     * @param e
     */
    function handleClickConvert(e) {
        units
            .filter(unit => units === 0 || units === units)
            .map(units => console.log("here result test : " + units.unitStart + " vaut " + units.unitConverter));
    }

    /**
     * Refresh the page of the site web
     * @param e
     */
    function handleClick(e) {
        units.map(unit => unit.unitStart === 0);
        setConverter(true);
    }

    return(
        <div className="ConverterInput">
            <form>

                <div>
                    <label htmlFor="input-amount">Montant</label>
                    <input type="number" name="input-amount" min="0"/>
                </div>

                <div>
                    <label htmlFor="input-amount-device">Chossissez votre unité :</label>
                    <select
                        name="input-amount-device"
                        id="input-amount-device"
                        onChange={(e) => setConverter(e.target.value)}
                    >
                        <option value="m">mètre</option>

                    </select>
                </div>

                <div>
                    <button type="button"><FontAwesomeIcon icon={faArrowRightArrowLeft}/></button>
                </div>

                <div>
                    <label htmlFor="input-convert">Convertir l'unité en :</label>
                    <select
                        name="input-convert"
                        id="input-convert"
                        readonly="true"
                        onChange={(e) => setConverter(e.target.value)}>
                    >
                        <option value="m">mètre</option>
                        <option value="dm">décimètre</option>
                        <option value="cm">centimètre</option>
                        <option value="mm">millimètre</option>
                    </select>
                </div>

                <div className="result">
                    Le résultat est : {units.unitStart} vaut {units.unitConverter} !
                </div>

                <div>
                    <button type="submit" onClick={handleClickConvert}>Convertir</button>
                    <button type="submit" onClick={handleClick}>Reset</button>
                </div>

            </form>
        </div>
    );
};