import styles from "./heroSection.module.css"
import heroImg from "/src/assets/images/heroSection.png"
import arrowRight from '/src/assets/icons/arrowRight.svg'

function HeroSection() {
    return ( 
        <section className={styles.heroSection}>
            <img src={heroImg}/>
            <p>ECONOMISEȘTE PÂNĂ LA 25%</p>
            <h1>Black Friday a venit devreme</h1>
            <p>Alege un set și economisește</p>
            <a href='#cumpara'>Explorează Ofertele<img src={arrowRight}/></a>
        </section>
     );
}

export default HeroSection;