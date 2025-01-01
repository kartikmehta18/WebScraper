import React from 'react'
import { HoverEffect } from "../components/Card";
import '../index.css'
const Templatepage = () => {
    const projects = [
        {
            img: "image.png",
            title: "Builder website",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "https://thewebmax.org/consza/",
        },
        {
            img: "image.png",
            title: "Netflix",
            description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            link: "https://netflix.com",
        },
        {
            img: "image.png",
            title: "Google",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            link: "https://google.com",
        },
        {
            img: "image.png",
            title: "Meta",
            description:
                "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
            link: "https://meta.com",
        },
        {
            img: "image.png",
            title: "Amazon",
            description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
            link: "https://amazon.com",
        },
        {
            img: "image.png",
            title: "Microsoft",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            link: "https://microsoft.com",
        },

    ];
    return (
        <>
            <div className='text-whiter '>

                <div className='text-white text-center text-4xl font-bold mt-2'>
                    <h1>Template Page</h1>
                </div>
                <div>
                    <a href="/template">
                        <button className="bg-white/10 border border-white/45 h-8 w-24 rounded-sm  text-white fixed right-4  shadow-lg z-50 -mt-8 hover:rotate-3 transition-all hover:scale-90">Back </button>
                    </a>
                </div>
                <div className='text-white/50 text-center text-2xl font-bold mt-2'>
                    <h2>launching soon</h2>
                </div>

                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>
                {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute w-full md:top-[70%] top-[100%]">
                        <img
                            src="circle.png"
                            alt="Circle"
                            className="w-full object-contain"
                            style={{ transform: 'scale(1.5)', position: 'relative' }}
                        />
                    </div>
                </div> */}
            </div>
        </>
    )

}

export default Templatepage
