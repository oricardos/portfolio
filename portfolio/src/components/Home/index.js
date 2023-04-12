import { Footer } from "../Layout/Footer"
import { Header } from "../Layout/Header"
import { Hero } from "../Sections/Hero"
import { About } from "../Sections/About"
import { Skills } from "../Sections/Skills"

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Footer />
        </>
    )
}