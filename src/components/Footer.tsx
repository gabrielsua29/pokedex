import { Link } from 'react-router-dom';
import PokemonPic from "../assets/pikachu.png"
import ItemsPic from "../assets/pokeball.png"
import GuessPokemonPic from "../assets/guessPokemonIcon.png"
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
        <Link to="/guess-the-pokemon" className={styles.footerLink}>
            <img src={GuessPokemonPic} alt="Who's That Pokemon?" className={styles.footerIcon}/>
            Who's That Pokemon?
        </Link>
    </footer>
  )
}

export default Footer;
