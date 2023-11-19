import styles from "./navbar.module.css"
import cartIcon from "/src/assets/icons/cartIcon.svg"

function Navbar() {
    return ( 
        <nav className={styles.navbar}>
            <a className={styles.homeBtn}>CardShare</a>
            <div className={styles.btnWrapper}>
                <a href='#cumpara'>Cumpară</a>
                <a href='#seturi'>Seturi</a>
                <a href='#personalizeaza'>Personalizează</a>
            </div>
            <a className={styles.cartBtn}>Coș
            <img src={cartIcon}/>
            </a>
            
        </nav>
     );
}

export default Navbar;