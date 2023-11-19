import styles from "./shopBasics.module.css"

import shopBasic1 from '/src/assets/images/shopBasic1.png'
import shopBasic2 from '/src/assets/images/shopBasic2.png'
import shopBasic3 from '/src/assets/images/shopBasic3.png'



function ShopBasics() {
    return ( 
        <section  className={styles.shopBasicsSection}>
            <div className={styles.shopBasicsWrapper}>
                

                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <div>$60</div>
                    <h1>Network cu Metal.</h1>
                    <p>Cel mai durabil mod de conectare.</p>
                    <img src={shopBasic1}/>
                </article>
                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <div>$20</div>
                    <h1>Ultima ta carte de vizită.</h1>
                    <p>Cu două moduri de a partaja, atingeți și codul QR, remarcați când sunteți în rețea.</p>
                    <img src={shopBasic2}/>
                </article>
                <article>
                    <h2><span style={{color:'black',textShadow:'none'}}>Card</span>Share</h2>
                    <div>$30</div>
                    <h1>Poartă. Atinge. Conecteazăte.</h1>
                    <p>O modalitate hands free de a vă conecta în stil.</p>
                    <img src={shopBasic3}/>
                </article>
            </div>
        </section>
     );
}

export default ShopBasics;