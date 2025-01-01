import React from 'react'
// import Card from '../../components/Card'

const Templatepage = () => {
    return (
        <>
            <div className='text-white '>
               
                <div className='text-white text-center text-4xl font-bold mt-2'>
                    <h1>Template Page</h1>
                </div>

                {/* <Card className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <i class="fa fa-lock"></i>
                    <h2>Enhanced Security</h2>
                    <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                    <button>Learn more</button>
                </Card> */}

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute w-full md:top-[70%] top-[85%]">
                        <img
                            src="circle.png"
                            alt="Circle"
                            className="w-full object-contain"
                            style={{ transform: 'scale(1.5)', position: 'relative' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Templatepage
