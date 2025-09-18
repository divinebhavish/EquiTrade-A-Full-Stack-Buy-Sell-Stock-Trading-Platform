import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/landing.png' alt='Hero Banner' className='mb-5' />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online Platform to invest is stocks, derivatives, mututal funds and more</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"15%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;