import styles from "./Projects.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import tpibs1 from "../../assets/tpibs1.png";
import tpibs2 from "../../assets/tpibs2.png";
import tpibs3 from "../../assets/tpibs3.png";
import patchmngr1 from "../../assets/patchmngr1.png"
import patchmngr2 from "../../assets/patchmngr2.png";
import patchmngr3 from "../../assets/patchmngr3.png";
import { faReact, faNode, faJs, faHtml5, faCss3, faGithub, faJava, faLinux, faJira, faDocker, faInstagram, faAndroid, faApple, faPython, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowLeft, faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";


const Projects = () => {
    const navigate = useNavigate();
    const cardsRef = useRef([]);

    const mousePosFn = (e) => {
        for(const card of cardsRef.current) {
          const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
      
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        };
    }
    
    return (
        <>
        <FontAwesomeIcon icon={faHome} className={styles.backBtn} onClick={() => navigate("/")}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.educationButton} onClick={() => navigate("/education")}/>

        <div className={styles.container}>
            <div className={styles.project}>
                <h1 className={styles.tpibmsTitle}>Turkish Players Incentive Bonus System</h1>
                <div id={styles.cards} onMouseMove={mousePosFn}>
                    <div className={`${styles.card} ${styles.firstCard}`} ref={(element) => cardsRef.current.push(element)}>
                        <div className={styles["card-content"]}>
                            <img src={tpibs1} alt=""/>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.secondCard}`} ref={(element) => cardsRef.current.push(element)}>
                        <div className={styles["card-content"]}>
                            <img src={tpibs2} alt=""/>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.thirdCard}`} ref={(element) => cardsRef.current.push(element)}>
                        <div className={styles["card-content"]}>
                            <img src={tpibs3} alt=""/>
                        </div>
                    </div>
                </div>
                <ul className={styles.list}>
                    <li>
                        Provides statistics of Turkish players in Super Lig
                    </li>
                    <li>
                        Calculates a performance score for each player
                    </li>
                    <li>Login Register and Commenting System</li>
                    <li>HTML CSS JavaScript React MongoDB NodeJS</li>
                </ul>
                <div className={styles.clickableLogo}>
                    <FontAwesomeIcon icon={faLink} className={styles.icons} onClick={() => window.open( "https://cs308team40.netlify.app/", "_blank")}/>
                    <FontAwesomeIcon icon={faGithub} className={styles.icons} onClick={() => window.open( "https://github.com/SU-CS308-22FA/Team-40", "_blank")}/>
                </div>
                <div className={styles.unclickableLogos}>
                    <FontAwesomeIcon icon={faReact} className={styles.icons}/>
                    <FontAwesomeIcon icon={faNode} className={styles.icons}/>
                    <FontAwesomeIcon icon={faJs} className={styles.icons}/>
                    <FontAwesomeIcon icon={faHtml5} className={styles.icons}/>
                    <FontAwesomeIcon icon={faCss3} className={styles.icons}/>
                </div>

            </div>
            <hr className={styles.divider}/>
            <div className={styles.project}>
                <h1 className={styles.projectTitle}>Patch Manager</h1>
                <div>
                    <img src={patchmngr1} alt="" className={styles.i1}/>
                    <img src={patchmngr2} alt="" className={styles.i2}/>
                    <img src={patchmngr3} alt="" className={styles.i3}/>
                </div>
                <ul className={styles.list}>
                    <li>Coded when I was an intern at Orion Innovation</li>
                    <li>Automates product patches in the Linux server</li>
                    <li>Uses JIRA Api</li>
                    <li>Java Linux</li>
                </ul>
                <div className={styles.clickableLogo}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icons} onClick={() => window.open( "https://github.com/OrionInnovationTRTech/patchManager", "_blank")}/>
                </div>
                <div className={styles.unclickableLogos}>
                    <FontAwesomeIcon icon={faJava} className={styles.icons}/>
                    <FontAwesomeIcon icon={faLinux} className={styles.icons}/>
                    <FontAwesomeIcon icon={faJira} className={styles.icons}/>
                </div>
            </div>
            <hr className={styles.divider}></hr>
            <div className={styles.project}>
                <h1 className={styles.projectTitle}>Sucial</h1>
                <ul className={styles.list}>
                    <li>Instagram Clone</li>
                    <li>Flutter Dart Firebase</li>
                </ul>
                <div className={styles.clickableLogo}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icons} onClick={() => window.open( "https://github.com/bkarakadioglu/cs310_project", "_blank")}/>
                </div>
                <div className={styles.unclickableLogos}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.icons}/>
                    <FontAwesomeIcon icon={faAndroid} className={styles.icons}/>
                    <FontAwesomeIcon icon={faApple} className={styles.icons}/>

                </div>
            </div>
            <hr className={styles.divider}></hr>
            <div className={styles.project}>
                <h1 className={styles.projectTitle}>Books Backend</h1>
                <ul className={styles.list}>
                    <li>Restful Api</li>
                    <li>Does basic CRUD operations</li>
                    <li>MongoDB Express Docker</li>
                </ul>
                <div className={styles.clickableLogo}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icons} onClick={() => window.open( "https://github.com/bkarakadioglu/books-backend", "_blank")}/>
                </div>
                <div className={styles.unclickableLogos}>
                    <FontAwesomeIcon icon={faJs} className={styles.icons}/>
                    <FontAwesomeIcon icon={faDocker} className={styles.icons}/>
                </div>
            </div>
            <hr className={styles.divider}></hr>
            <div className={styles.project}>
                <h1 className={styles.projectTitle}>Kapasite5 Bot</h1>
                <ul className={styles.list}>
                    <li>Telegram Bot</li>
                    <li>Notifies when someone dropped a course </li>
                    <li>Useful for add drop periods in university</li>
                    <li>Python</li>
                </ul>
                <div className={styles.clickableLogo}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icons} onClick={() => window.open( "https://github.com/bkarakadioglu/kapasite5Bot", "_blank")}/>
                </div>
                <div className={styles.unclickableLogos}>
                    <FontAwesomeIcon icon={faPython} className={styles.icons}/>
                    <FontAwesomeIcon icon={faTelegram} className={styles.icons}/>
                </div>
            </div>

        </div>        
        </>
    );
};

export default Projects;