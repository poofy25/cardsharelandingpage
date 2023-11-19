import styles from "./how.module.css"
import how1Image from '/src/assets/images/how1.png'
import how2Image from '/src/assets/images/how2.png'
import how3Image from '/src/assets/images/how3.png'




function HowSection() {
    return ( 
        <section className={styles.howSection}>
           <article>
                <div>1</div>
                <img src={how1Image}/>
                <h3>Setează profilul CardShare</h3>
                <p>Personalizează aspectul cardului tău de vizită digital. Adaugă toate informațiile tale de contact.</p>
           </article> 
           <article>
                <div>2</div>
                <img src={how2Image}/>
                <h3>Activează dispozitivul </h3>
                <p>Configurarea dispozitivului CardShare este simplă, astfel încât să poți realiza conexiuni mai rapid ca niciodată.</p>
           </article> 
           <article>
                <div>3</div>
                <img src={how3Image}/>
                <h3>Gata să creezi conexiuni!</h3>
                <p>Cu o singură atingere, vei putea transfera profilul CardShare. Începe să  te conectezi cu stil!</p>
           </article> 
        </section>
     );
}

export default HowSection;