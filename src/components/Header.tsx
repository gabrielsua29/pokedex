import React, { useState } from "react";
import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type HeaderProps = {
    placeholder: string;
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({ placeholder, query, setQuery }: HeaderProps) => {

    const [user, setUser] = useState("")
    console.log(user)

    return(
        <header className={styles.header}>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faSearch} />
                <input className={styles.input} type="text" placeholder={placeholder} value={query}
                onChange={(e) => setQuery(e.target.value)}/>
                {user.length <= 0 &&
                    <div className={styles.userContainer}>
                        <Link to={"/login"} className={styles.loginLink}>
                            Login
                            <FontAwesomeIcon className={styles.loginIcon} icon={faSignInAlt}/>
                        </Link>
                    </div>
                }
            </div>
        </header> 
    )
}

export default Header;