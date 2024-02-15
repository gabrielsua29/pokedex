import React from "react";
import styles from './header.module.css';
import SearchIcon from "../assets/buscar.png";

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({ query, setQuery }: HeaderProps) => {
    return(
        <header className={styles.header}>
            <input className={styles.input} type="text" placeholder="Search a Pokemon" value={query}
            onChange={(e) => setQuery(e.target.value)}/>
        </header> 
    )
}

export default Header;