import besiktaslogo from "../../assets/besiktas-logo.png";
import styles from "./Besiktas.module.css"
import { useState } from "react";
const Besiktas = () => {
    const [selectedNumber, setSelectedNumber] = useState(16);

    const handleNumberChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setSelectedNumber(newValue);
    };

    const faderLogos = [];

    for (let i = 0; i < selectedNumber; i++) {
        faderLogos.push(<img src={besiktaslogo} className={styles["logo-fader"]} key={i}/>)        
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.selector}>
                <input
                    className={styles.input}
                    type="number"
                    value={selectedNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div className={styles.logos}>
                <img src={besiktaslogo} className={styles["logo-front"]}/>
                <div className={styles["logo-faders"]}>
                    {faderLogos}
                </div>
            </div>
        </div>
        </>
    );
};

export default Besiktas;