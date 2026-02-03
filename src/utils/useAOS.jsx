'use client'
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function useAOS(config = {}) {

    const defaultConfig ={
        duration: 700,
        easing: 'ease-out-quad',
        once: false,
        offset: 50,
    }

    useEffect(()=>{
        AOS.init({
            ...defaultConfig,
            ...config,
        })

        const refreshAOS = ()   => AOS.refresh()
        document.addEventListener('scroll', refreshAOS)

        return() => {
            document.removeEventListener('scroll', refreshAOS)
        }
    }, [config])
}
