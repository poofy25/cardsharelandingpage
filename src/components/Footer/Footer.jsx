import styles from "./footer.module.css"

import instagramIcon from '/src/assets/svgs/instagram.svg'
import facebookIcon from '/src/assets/svgs/facebook.svg'
import tiktokIcon from '/src/assets/svgs/tiktok.svg'



function Footer() {
    return ( 
        <footer className={styles.footer}>
            <section className={styles.linksSection}>
                <div>
                    <p>Magazin</p>
                    <a href='#cumpara'>Basic</a>
                    <a href='#seturi'>Seturi</a>
                    <a href='#personalizeaza'>Personalizează</a>
                </div>
                <div>
                    <p>Companie</p>
                    <a>Despre companie</a>
                </div>
                <div>
                    <p>Connecteazăte</p>
                    <a><img src={instagramIcon}/>Instagram</a>
                    <a><img src={facebookIcon}/>Facebook</a>
                    <a><img src={tiktokIcon}/>TikTok</a>
                </div>
            </section>
            <section className={styles.infoSection}>
                <p>© 2023 CardShare</p>
            </section>

        </footer>
     );
}

export default Footer;