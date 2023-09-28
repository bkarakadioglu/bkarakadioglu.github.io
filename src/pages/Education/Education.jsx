import styles from "./Education.module.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faHome} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Education = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleRadioChange = (event) => {
        console.log(event);
        if (selectedOption === event.target.value) {
            setSelectedOption(null);
        } else {
            setSelectedOption(event.target.value);
        }
    };
    
    return (
        <>
        <FontAwesomeIcon icon={faHome} className={styles.backBtn} onClick={() => navigate("/")}/>
        <FontAwesomeIcon icon={faCircleArrowRight} className={styles.projectsButton} onClick={() => navigate("/projects")}/>

        <section className={styles.accordion}>
            <div className={styles.tab}>
                <input type="radio" name="accordion" id="0" className={styles.tabCheckbox} value="option0" checked={selectedOption === 'option0'} onClick={handleRadioChange}/>
                <label htmlFor="0" className={styles.tab__label}>BORNOVA ANADOLU LİSESİ</label>
                <div className={styles.tab__content}>
                    <p>2015 - 2019</p>
                </div>
            </div>
            <div className={styles.tab}>
                <input type="radio" name="accordion" id="1" className={styles.tabCheckbox} value="option1" checked={selectedOption === 'option1'} onClick={handleRadioChange}/>
                <label htmlFor="1" className={styles.tab__label}>SABANCI UNIVERSITY</label>
                <div className={styles.tab__content}>
                    <p>Sep 2019 - Jun 2023</p>
                    <p>3.62/4 GPA</p>
                    <p>Computer Science and Engineering</p>
                    <p>Bachelor of Science</p>
                    <p>3rd Best School in Turkey according to Times Higer Education</p>
                    <p>6th Best School in Turkey according to QS</p>
                </div>
            </div>
            <div className={styles.tab}>
                <input type="radio" name="accordion" id="2" className={styles.tabCheckbox} value="option2" checked={selectedOption === 'option2'} onClick={handleRadioChange}/>
                <label htmlFor="2" className={styles.tab__label}>UNIVERZA V MARIBORU</label>
                <div className={styles.tab__content}>
                    <p>Sep 2020 - Feb 2021</p>
                    <p>Erasmus+ Exchange Program</p>
                </div>
            </div>
            <div className={styles.tab}>
                <input type="radio" name="accordion" id="3" className={styles.tabCheckbox} value="option3" checked={selectedOption === 'option3'} onClick={handleRadioChange}/>
                <label htmlFor="3" className={styles.tab__label}>EXAM SCORES</label>
                <div className={styles.tab__content}>
                    <p>IELTS Academic 8.0/9 (C1 Level English)</p>
                    <p>YKS 2019 Sayısal 3207. </p>
                </div>
            </div>
        </section>
        </>
    );
};

export default Education;