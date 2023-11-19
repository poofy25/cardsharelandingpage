import styles from "./advantages.module.css"
import personIcon from "/src/assets/icons/personIcon.svg"
import appleIcon from "/src/assets/icons/appleIcon.svg"
import androidIcon from "/src/assets/icons/androidIcon.svg"
import coloredWebIcon from "/src/assets/icons/coloredWebIcon.svg"
import infinityIcon from "/src/assets/icons/infinityIcon.svg"


function AdvantagesSection() {
    return ( 
        <section className={styles.advantagesSection}>
            <div>
                <img src={personIcon}/>
                <p><span style={{color:'#0066CC'}}>Doar o persoană are nevoie de Cardshare,</span> și oricine se poate conecta.</p>
            </div>
            <div>
                <img src={appleIcon}/>
                <img src={androidIcon}/>
                <p>Lucrează pe toate <span style={{color:'#BC60FF'}}>toate tipurile</span> de telefoane. iPhone și Android.</p>
            </div>
            <div>
                <img src={coloredWebIcon}/>
                <p><span style={{color:'#FF0053'}}>Nu este necesară nicio aplicație</span> pentru a partaja contactul. Se deschide în browser.</p>
            </div>
            <div>
                <img src={infinityIcon}/>
                <p><span style={{color:'#FF9F0F'}}>Conceput pentru a rezista o viață.</span> Actualizează informațiile pe măsură ce acestea se schimbă.</p>
            </div>
            
        </section>
     );
}

export default AdvantagesSection;