import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { waitFor } from '../utils/utils'
import { fetchItem } from '../api/fetchItem'
import { ItemDetails } from '../types/types'
import LoadingScreen from '../components/LoadingScreen'
import styles from "./item.module.css"
import PokeballImg from "../assets/pokeball.png"

const Item = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [item, setItem] = useState<ItemDetails>()
    
    useEffect(() => {
        async function getItem() {
            setIsLoading(true)
            await waitFor(500)
            const fetchedItem = await fetchItem(name as string)
            setItem(fetchedItem)
            setIsLoading(false)
        }
        getItem()
    }, [name])

    if (isLoading || !item) {
        return <LoadingScreen />
    }

    return (
        <>
            <div className={styles.background}>
                <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                    <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
                    Go Back
                </button>
                <div className={styles.item}>
                    <main className={styles.itemInfo}>
                        <div className={styles.itemTitle}>{name?.toUpperCase()}</div>
                        <div className={styles.itemId}>Item ID: {item.id}</div>
                        <div>
                            <img className={styles.itemInfoImg} src={item.imgSrc} alt={name} />
                        </div>
                        <div>Cost: {item.cost}</div>
                        {item.fling_power && <div>Fling Power: {item.fling_power}</div>}
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Item;