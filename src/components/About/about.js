

const About = () => {
    return <div className="">
        <div className="header-wrapper">
            <div className="bg-truck min-h-10">
                <div className="flex justify-center content-center">
                    <span className="text-white text-9xl py-36">ABOUT US</span>
                </div>
            </div>
        </div>
        <div className="flex mx-36 mt-10">
            <div className="text-blue-900 font-bold text-7xl flex-grow-1 p-20">VYOK TRANSPORT LLC</div>
            <div className="flow-grow-3 text-xl p-20"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                vehicula velit, vel ultricies justo. Nullam euismod, velit vel
                sollicitudin tincidunt, nisl velit bibendum sapien, vel luctus velit
                justo non nulla. Nam euismod velit vel nisl tincidunt, vel aliquet
                lectus tincidunt. Nam euismod velit vel nisl tincidunt, vel aliquet
                lectus tincidunt.
            </div>
        </div>
        <div className="grid grid-cols-3 mb-20 mx-48 p-10 gap-24">
            <div className="border-2 grid cols 1 p-5 justify-center text-center gap-10">
                <img 
                    src="https://cdn.discordapp.com/attachments/980257313103421461/1117190406006910996/image.png" 
                    alt='doni' 
                    className="mt-5 shadow-xl border-4 border-double justify-self-center w-3/4"
                />
                <h3 className="title">One</h3>
                <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                vehicula velit, vel ultricies justo. 
                </p>
            </div>
            <div className="border-2 grid cols 1 p-5 justify-center text-center gap-10 ">
                <img 
                    src="https://cdn.discordapp.com/attachments/980257313103421461/1117191172293664778/image.png" 
                    alt='doni' 
                    className="mt-5 shadow-xl border-4 border-double justify-self-center w-3/4"
                />
                <h3 className="title">Two</h3>
                <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                vehicula velit, vel ultricies justo. 
                </p>
            </div>
            <div className="border-2 grid cols 1 p-5 justify-center text-center gap-10">
            
                <img 
                    src="https://cdn.discordapp.com/attachments/980257313103421461/1117191386802958387/freemason.jpg" 
                    alt='doni' 
                    className="mt-5 shadow-xl border-4 border-double justify-self-center w-3/4"
                />
                <h3 className="title">Two</h3>
                <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                vehicula velit, vel ultricies justo. 
                </p>
            </div>
        </div>
        <div className="navbar-bg text-white p-20">
                <div className=" flex gap-32 mx-32">
                    <div className="flex-basis-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                        vehicula velit, vel ultricies justo. Nullam euismod, velit vel
                        sollicitudin tincidunt, nisl velit bibendum sapien, vel luctus velit
                        justo non nulla. Nam euismod velit vel nisl tincidunt, vel aliquet
                        lectus tincidunt. Nam euismod velit vel nisl tincidunt, vel aliquet
                        lectus tincidunt.
                    </div>
                    <div className="flex-basis-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                        vehicula velit, vel ultricies justo. Nullam euismod, velit vel
                        sollicitudin tincidunt, nisl velit bibendum sapien, vel luctus velit
                        justo non nulla. Nam euismod velit vel nisl tincidunt, vel aliquet
                        lectus tincidunt. Nam euismod velit vel nisl tincidunt, vel aliquet
                        lectus tincidunt.   
                    </div>
                </div>
            </div>
    </div>
}

export default About;
