import styles from "./shopCustom.module.css"

import shopCustom1 from '/src/assets/images/shopCustom1.png'
import shopCustom2 from '/src/assets/images/shopCustom2.png'
import shopCustom3 from '/src/assets/images/shopCustom3.png'



function ShopCustom() {
    return ( 
        <section className={styles.shopCustomSection}>
            <div className={styles.shopCustomWrapper}>
                

                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <h1>Începeți să personalizați astăzi.</h1>
                    <p>De la 100$/pachet. Reduceri în vrac disponibile. Comanda minimă de 5 pachete.</p>
                    <img src={shopCustom1}/>
                </article>
                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <h1>Rețeaua ta. Cardul tău. Calea ta.</h1>
                    <p>De la 55$/card. Reduceri în vrac disponibile. Comanda minimă de 5 carduri.</p>
                    <img src={shopCustom2}/>
                </article>
                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <h1>Atat de subtire. Deci personalizat.</h1>
                    <p>De la 55$/subțire. Reduceri în vrac disponibile. Comanda minimă de 5 subtiri.</p>
                    <img src={shopCustom3}/>
                </article>
            </div>
        </section>
     );
}

export default ShopCustom;