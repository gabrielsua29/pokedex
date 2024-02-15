import { Link } from 'react-router-dom';
import PokemonPic from "../assets/pikachu.png"
import ItemsPic from "../assets/pokeball.png"
import LocationPic from "../assets/pointer.png"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Link to="/pokemons" className={styles.footerLink}>
            <img src={PokemonPic} alt="Pokeball" className={styles.footerIcon}/>
            Pokemons
        </Link>
        <Link to="/items" className={styles.footerLink}>
            <img src={ItemsPic} alt="Items" className={styles.footerIcon}/>
            Items
        </Link>
        <Link to="/location" className={styles.footerLink} onClick={(e) => e.preventDefault()}>
            <img src={LocationPic} alt="Mapa" className={styles.footerIcon}/>
            Mapa
        </Link>
    </footer>
  )
}

export default Footer;
