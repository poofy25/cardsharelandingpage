import styles from "./promoting.module.css"

import article2Image1 from '/src/assets/images/promotingArticle2.1.png'
import article2Image2 from '/src/assets/images/promotingArticle2.2.png'
import article2Image3 from '/src/assets/images/promotingArticle2.3.png'
import article3Image from '/src/assets/images/promotingArticle3.png'
import phoneImage from "/src/assets/images/phoneImage.png"



function PromotingSection() {
    return ( 
        <section className={styles.promotingSection}>
            <article className={styles.article1}>

                <h1><span style={{color:'white',textShadow:'none'}}>Card</span>Share</h1>
                <h3><span style={{color:'#f7f7f7'}}>Gratis pe viață</span> cu o singură achiziție a unui dispozitiv CardShare</h3>
                <img src={phoneImage}/>
                <div className={styles.article1Wrapper}>
                    <p><span style={{color:'#f7f7f7'}}>Un loc elegant</span> pentru a vă împărtăși toate informațiile de contact.</p>
                    <p><span style={{color:'#f7f7f7'}}>Personalizați aspectul</span> profilului dvs. cu diferite teme de culoare.</p>
                    <p>Spuneți la revedere introducerii numerelor de telefon cu <span style={{color:'#f7f7f7'}}>descărcarea de contact direct.</span></p>
                </div>

            </article>




            <article className={styles.article2}>
                <h2>Un card. <br/> O viață plină de conexiuni.</h2>
                <img src={article2Image1} style={{borderBottomLeftRadius:'24px'}}/>
                <img src={article2Image2}/>
                <img src={article2Image3} style={{borderBottomRightRadius:'24px'}}/>
            </article>  



            <article className={styles.article3}>
                <h3>Distribuie informațiile tale de contact, rețelele sociale, website-ul!</h3>    
                <img src={article3Image}/>
            </article>   
        </section>
     );
}

export default PromotingSection;