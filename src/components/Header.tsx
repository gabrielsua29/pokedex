import React from "react";
import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
    placeholder: string;
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({ placeholder, query, setQuery }: HeaderProps) => {
    return(
        <header className={styles.header}>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <input className={styles.input} type="text" placeholder={placeholder} value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            </div>
            
        </header> 
    )
}

export default Header;