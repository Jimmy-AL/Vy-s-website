import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
    return <div className=" navbar-bg px-10 ">
        <div className=" grid grid-cols-7 gap-3 sticky top-0 justify-center text-center text-white align-middle text-2xl ">
            <img 
                src="https://yt3.googleusercontent.com/ytc/AGIKgqP5y8GpLFFHiPhThQwiO7acODXICYJm47s4rX8T=s900-c-k-c0x00ffffff-no-rj" 
                alt="vyok logo" 
                className="max-h-24 my-2 justify-self-center" 
            ></img>
            <span className="hover:transition-all hover:font-bold hover:bg-sky-900 self-center p-9">
                <a href="/">HOME</a>
            </span>
            <span className="hover:transition-all hover:font-bold hover:bg-sky-900 self-center p-9">
                <a href="/services">SERVICES</a>
            </span>
            <span className="hover:transition-all hover:font-bold hover:bg-sky-900 self-center p-9">
                <a href="/about">ABOUT US</a>
            </span>
            <span className="hover:transition-all hover:font-bold hover:bg-sky-900 self-center p-9">
                <a href="/contact">CONTACT</a>
            </span>
        </div>
    </div>
}

export default Navbar;