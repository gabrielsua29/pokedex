import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { waitFor } from "../utils/utils";
import { fetchItems } from "../api/fetchItems";
import { Item } from "../types/types";
import LoadingScreen from "../components/LoadingScreen";
import { Link } from "react-router-dom";
import styles from "./showlist.module.css";
import Header from "../components/Header";

const Items = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState<Item[]>([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchAllItems = async () => {
            setIsLoading(true)
            await waitFor(500)
            const allItems = await fetchItems()
            setItems(allItems)
            setIsLoading(false)
        }
        fetchAllItems()
    },[])

    if (isLoading || !items) {
        return <LoadingScreen />
    }
    
    const filteredItems = items?.slice(0, 20).filter((item) => {
        return item.name.toLowerCase().match(query.toLowerCase());
    });

    return(
        <>
            <Header placeholder="Search an item" query={query} setQuery={setQuery} />
            <main>
                <nav>
                    {filteredItems?.slice(0, 20).map((item) => (
                        <Link
                            key={item.id}
                            className={styles.listItem}
                            to={`/items/${item.name.toLowerCase()}`}
                        >
                            <img className={styles.listItemImg} src={item.imgSrc} alt={item.name} />
                            <div className={styles.listItemText}>
                                <span>{item.name}</span>
                                <span>{item.id}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </main>
            <br/><br/><br/><br/>
            <Footer />
        </>
    )
}

export default Items;