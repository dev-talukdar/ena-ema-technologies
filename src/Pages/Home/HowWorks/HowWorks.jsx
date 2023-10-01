import React from 'react';   
import { Link } from 'react-router-dom';
import { IoArrowForwardOutline } from 'react-icons/io5';
import SectionHead from '../../../components/SectionHead';
const HowWorks = () => {
    return (
<div className="hero my-16" style={{backgroundImage: `url( https://www.khejurbd.net/ena-ema/banner/bannerBgTOp.webp) `}}> 
  <div className="hero-content text-center">
    <div className="my-6">
<SectionHead title="How Ena Ema Technologies Works" description="Elevate your core competencies with Ena Ema Technologies, where Agile Excellence meets tailored web outsourcing models. We cultivate quality, fostering your success in the digital landscape through unmatched expertise and innovation."/>

      <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center overflow-hidden'>

<div className='bg-white px-3 py-4 rounded-xl hover:shadow-md hover:shadow-primary h-fit text-left' data-aos="fade-left"
     data-aos-duration="3000">
<img src='https://www.khejurbd.net/ena-ema/banner/teamwork.png' alt="Team Augmentation" className='w-12'/>
<p className='brandFont my-4 font-semibold text-secondary opacity-70 text-lg'>Talent Boost</p>
<p className='font-medium'>Enhance Your Web Presence with Skilled Professionals: Access top-tier talent through Team Augmentation at Ena Ema Technologies. Our experts seamlessly integrate with your workforce to elevate your project's success.</p>

<div className='mt-6 mb-4 flex justify-start'>
<Link to="/contact" className=' text-primary btn btn-outline inline-flex gap-4 items-center uppercase'>Get a free consultation <IoArrowForwardOutline className='w-6 h-6'/></Link> 
</div>
</div>

<div className='bg-white px-3 py-4 rounded-xl hover:shadow-md hover:shadow-primary h-fit text-left' data-aos="fade-up"
     data-aos-duration="3000">
<img src='https://www.khejurbd.net/ena-ema/banner/metadata.png' alt="Project Development" className='w-12'/>
<p className='brandFont my-4 font-semibold text-secondary opacity-70 text-lg'>Project Development</p>
<p className='font-medium'>Crafting Digital Excellence: At Ena Ema Technologies, we specialize in delivering tailored Project Development services. Let us turn your vision into a reality with custom web solutions for your business.</p>

<div className='mt-6 mb-4 flex justify-start'>
<Link to="/contact" className=' text-primary btn btn-outline inline-flex gap-4 items-center uppercase'>Get a free consultation <IoArrowForwardOutline className='w-6 h-6'/></Link> 
</div>
</div>

<div className='bg-white px-3 py-4 rounded-xl hover:shadow-md hover:shadow-primary h-fit text-left' data-aos="fade-right"
     data-aos-duration="3000">
<img src='https://www.khejurbd.net/ena-ema/banner/technical-support.png' alt="workIcon3" className='w-12'/>
<p className='brandFont my-4 font-semibold text-secondary opacity-70 text-lg'>MVP Services</p>
<p className='font-medium'>Turn Ideas into Reality with MVP Services: Partner with Ena Ema Technologies to transform your concept into a market-ready Minimum Viable Product. We accelerate your journey from idea to impact.</p>

<div className='mt-6 mb-4 flex justify-start'>
<Link to="/contact" className=' text-primary btn btn-outline inline-flex gap-4 items-center uppercase'>Get a free consultation <IoArrowForwardOutline className='w-6 h-6'/></Link> 
</div>
</div>


</div> 

    </div>  
    
     
  </div>
  
</div>
    );
};

export default HowWorks;