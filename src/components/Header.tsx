import React from "react";
import styles from './header.module.css';

type HeaderProps = {
    placeholder: string;
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({ placeholder, query, setQuery }: HeaderProps) => {
    return(
        <header className={styles.header}>
            <input className={styles.input} type="text" placeholder={placeholder} value={query}
            onChange={(e) => setQuery(e.target.value)}/>
        </header> 
    )
}

export default Header;