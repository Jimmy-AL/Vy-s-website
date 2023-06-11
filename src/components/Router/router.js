import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home/home"
import { Services } from "../Services/services";
import About from "../About/about";
import { Contact } from "../Contact/contact";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="services" element={<Services />}/>
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;