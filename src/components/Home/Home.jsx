"use client"
import { useState, useEffect } from "react";
import InitialContent from "@/components/InitialContent/InitialContent";
import About from "@/components/About/About";
import Loading from "@/utils/loading/Loading";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <section>
            <InitialContent />
            <About />
        </section>
    )
}
