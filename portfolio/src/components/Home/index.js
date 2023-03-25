import { Container } from "../Container"
import { Footer } from "../Layout/Footer"
import { Header } from "../Layout/Header"
import { Hero } from "../Sections/Hero"
import { About } from "../Sections/About"

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Footer />
        </>
    )
}