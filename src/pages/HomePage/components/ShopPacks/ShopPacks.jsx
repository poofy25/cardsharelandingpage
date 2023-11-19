import styles from "./shopPacks.module.css"

import shopPacks1 from '/src/assets/images/shopPacks1.png'
import shopPacks2 from '/src/assets/images/shopPacks2.png'
import shopPacks3 from '/src/assets/images/shopPacks3.png'



function ShopPacks() {
    return ( 
        <section className={styles.shopPacksSection}>
            <div className={styles.shopPacksWrapper}>
                

                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <div>$60</div>
                    <h1>Găsește-ți combinația perfectă.</h1>
                    <p>Combinați și potriviți culorile. Cumpărați trei. Ia una gratis.</p>
                    <img src={shopPacks1}/>
                </article>
                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <div>$50</div>
                    <h1>Ajutor, nu mă pot decide. Încearcă pe toate trei.</h1>
                    <p>Obțineți toate trei la 50$ și economisiți 12%</p>
                    <img src={shopPacks2}/>
                </article>
                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <div>$75</div>
                    <h1>Creșteți-vă echipa.</h1>
                    <p>Obțineți un pachet de 5 la 75$ și economisiți 25%</p>
                    <img src={shopPacks3}/>
                </article>
            </div>
        </section>
     );
}

export default ShopPacks;