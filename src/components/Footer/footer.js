import { PhoneIcon, InboxIcon, MapPinIcon } from '@heroicons/react/20/solid'

export const Footer = () => {
    return <footer className="footer-colour px-20 text-white static-bottom">
            <div className=" grid grid-cols-3 mx-20 gap-20 justify-start ">
                <img 
                    src="https://yt3.googleusercontent.com/ytc/AGIKgqP5y8GpLFFHiPhThQwiO7acODXICYJm47s4rX8T=s900-c-k-c0x00ffffff-no-rj" 
                    alt="vyok logo" 
                    className=" max-h-24  justify-self-start self-center" 
                >
                </img>
                <div className="flex justify-center justify-self-start">
                    <ul className="list-none text-3xl font-bold">
                        <li className="my-10">
                            <a href="/">HOME</a>
                        </li>
                        <li className="mb-10">
                            <a href="about">ABOUT US</a>
                        </li>
                        <li className="mb-10">
                            <a href="contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center justify-self-start">
                    <ul className="list-none text-xl justify-center">
                        <li className="m-10 flex justify-start">
                            <PhoneIcon className='h-10 mr-3'></PhoneIcon>
                            <span>123-456-7890</span>
                        </li>
                        <li className="m-10 flex justify-start">
                            <InboxIcon className='h-10 mr-3'></InboxIcon>
                            <span> Placeholder@gmail.com </span>
                        </li>
                        <li className="m-10 flex justify-start">
                            <MapPinIcon className='h-10 mr-3'></MapPinIcon>
                            <span>Placeholder Address</span>
                        </li>
                    </ul>
                </div>
            </div>

    </footer>
}