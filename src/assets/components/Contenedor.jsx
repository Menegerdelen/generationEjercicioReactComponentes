
import { Aside } from "./Aside.jsx"
import { Footer } from "./Footer.jsx"
import { Principal } from "./Principal.jsx"
import { OtroPost } from "./OtroPost.jsx"




export const Contenedor = () => {
    return (
        <div className="container">
            <header className="header">
                Cristian
            </header>

            <Principal/>

            <Aside/>

            <OtroPost/>

            <Footer/>
        </div>

    )
}
