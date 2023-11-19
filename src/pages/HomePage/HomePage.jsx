import styles from "./homePage.module.css"



import HeroSection from "./components/HeroSection/HeroSection";
import AdvantagesSection from "./components/AdvantagesSection/Advantages";
import HowSection from "./components/HowSection/How";
import PromotingSection from "./components/PromotingSection/Promoting";
import ShopBasics from "./components/ShopSection/ShopBasics";
import ShopPacks from "./components/ShopPacks/ShopPacks";
import ShopCustom from "./components/ShopCustom/ShopCustom";

function HomePage() {
    return ( 
        <div className={styles.homePage}>
            <HeroSection/>
            <AdvantagesSection/>

            <div  className={styles.header}><h1>Cum lucrează?</h1></div>

            <HowSection/>
            <PromotingSection/>
            
            <div id='cumpara' className={styles.header}><h1>Magazin de bază.</h1></div>

            <ShopBasics/>

            <div id='seturi' className={styles.header}><h1>Pachete de magazin. Cumpărați mai mult, economisiți mai mult.</h1></div>

            <ShopPacks/>

            <div id='personalizeaza' className={styles.header}><h1>Magazin de comandă.</h1></div>

            <ShopCustom/>
          
        </div>
     );
}

export default HomePage;