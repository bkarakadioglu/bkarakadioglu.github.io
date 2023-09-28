import styles from "./App.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPhone, faBookOpen, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import pdf from "./assets/CVBatuhanKarakadioglu.pdf"
import "./App.css"


const App = () => {
    const logoColor = useRef("rgb(238, 238, 238)");
    const logoSize = useRef("6x");
    const cardsRef = useRef([]);
    const navigate = useNavigate();

    const mousePosFn = (e) => {
      for(const card of cardsRef.current) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }
    
    const handleGithubClick = () =>{
        window.open("https://github.com/bkarakadioglu", "_blank");
    }

    const handleLinkedinClick = () =>{
        window.open("https://www.linkedin.com/in/batuhan-karakad%C4%B1o%C4%9Flu-363b87190/", "_blank")
    }

    const handleCvClick = () =>{
        window.open(pdf)
    }


    return (
      <>
      <div className={styles.container} >
        <div className={styles.mist}/>
        
        <h1 className={styles.welcome}> Hi! I'm <span className={styles.batuhan}>Batuhan</span></h1>
        <h2 className={styles.welcome}> Welcome to my website </h2>
        <div id={styles.cards} onMouseMove={mousePosFn}>
          <div className={styles.card} ref={(element) => cardsRef.current.push(element)}  onClick={() => navigate("/education")}>
            <div className={styles["card-content"]}>
              <FontAwesomeIcon size={logoSize.current} color={logoColor.current} icon={faBookOpen}/>
              <h3 className={styles["card-title"]}>Education</h3>  
            </div>
          </div>
          <div className={styles.card} ref={(element) => cardsRef.current.push(element)}  onClick={() => navigate("/projects")}>
            <div className={styles["card-content"]}>
                <FontAwesomeIcon size={logoSize.current} color={logoColor.current} icon={faCode} />
                <h3 className={styles["card-title"]}>Projects</h3>  
            </div>
          </div>
          <div className={styles.card} ref={(element) => cardsRef.current.push(element)} onClick={handleCvClick}>
            <div className={styles["card-content"]}>
                <FontAwesomeIcon size={logoSize.current} color={logoColor.current} icon={faUser} />
                <h3 className={styles["card-title"]}>CV</h3> 
            </div>
          </div>
          <div className={styles.card} ref={(element) => cardsRef.current.push(element)} onClick={handleGithubClick}>
            <div className={styles["card-content"]}>
                <FontAwesomeIcon size={logoSize.current} color={logoColor.current} icon={faGithub} />
                <h3 className={styles["card-title"]}>GitHub</h3> 
            </div>
          </div>
          <div className={styles.card} ref={(element) => cardsRef.current.push(element)} onClick={handleLinkedinClick}>
            <div className={styles["card-content"]}>
              <FontAwesomeIcon size={logoSize.current} color={logoColor.current} icon={faLinkedin} />
              <h3 className={styles["card-title"]}>LinkedIn</h3>  
            </div>
          </div>
          <div className={styles.card} ref={(element) => cardsRef.current.push(element)}>
            <div className={`${styles["card-content"]} ${styles["contact"]} `}>
              <h3 className={styles["card-title"]}>Contact</h3>  
              <div className={styles.contacts}>
                <FontAwesomeIcon color={logoColor.current} icon={faPhone} />
                <p>+905074487886</p>
              </div>
              <div className={styles.contacts}>
                <FontAwesomeIcon color={logoColor.current} icon={faEnvelope} />
                <p>batuhankarakadioglu@gmail.com</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
    );
  };
  
  export default App;