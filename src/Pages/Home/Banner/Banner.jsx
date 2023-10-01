import React from 'react'; 
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className='my-16 px-2'>
<div className='w-full flex flex-col lg:flex-row items-start justify-between gap-11 overflow-hidden'>

<div data-aos="fade-left"
     data-aos-duration="3000">
   <h1 className='brandFont font-extrabold text-3xl uppercase'>Ena Ema Technologies Your Trusted Partner We turn your ideas .... into a Digital Realities</h1> 
   <p className='my-10 brandFont'>Unlock the potential of your business with Ena Ema Technologies, your trusted partner for premium web solutions. Our expertise in full-stack web development empowers you to stand out in the digital landscape. We create customized web experiences that perfectly align with your unique goals and requirements.</p>
   
<Link to="/contact" className='btn btn-outline '>
Request a Quote
</Link>


</div>

<div className="divider lg:divider-horizontal opacity-60"></div> 

<div className='w-full' data-aos="fade-right"
     data-aos-duration="3000">
    <img src='https://www.khejurbd.net/ena-ema/banner/Banner1_Mesa%20de%20trabajo%201.webp' alt="Hero Image" className='w-full'/>
</div>

</div>            
        </section>
    );
};

export default Banner;