'use client'
import { useState, useEffect } from "react"
import Loading from "@/utils/loading/Loading"
import styles from './PageLoader.module.css'

export default function PageLoader({children}) {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const handleLoad = () =>{
            setTimeout(()=> setIsLoading(false), 200)
        }

        if(document.readyState === 'complete'){
            handleLoad()
        } else{
            window.addEventListener('load', handleLoad)
            return ()=> window.removeEventListener('load', handleLoad)
        }
    }, [])

    if(isLoading) {
        return  (
            <div className={styles.loadingContainer}>
                <Loading />
            </div>
        )
    }

    return <>{children}</>
}
