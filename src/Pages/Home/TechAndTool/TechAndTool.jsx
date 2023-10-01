import React from 'react';
import SectionHead from '../../../components/SectionHead';
import program from "../../../assets/icons/program.png" 
import { Link } from 'react-router-dom';
import { IoArrowForwardSharp } from 'react-icons/io5';

const TechAndTool = () => {
    return (
        <section className='my-28 text-center'>
            <SectionHead title="Empower Your Digital Journey with Ena Ema Technologies: Explore Our Dynamic Service Portfolio" description="Welcome to Ena Ema Technologies, your gateway to a world of digital possibilities. Discover our carefully crafted service offerings designed to elevate your online presence and make your digital dreams a reality. Explore our solutions below." />


            <div className='overflow-hidden'>
                <div className='my-14 bg-primary bg-opacity-10 rounded-2xl px-7 py-5 lg:w-1/2 mx-auto flex items-center gap-5' data-aos="flip-up"
                    data-aos-duration="3000">

                    <div>
                        <img src={program} alt="program" className='w-28' />
                    </div>

                    <div className='text-left'>
                        <h1 className='text-lg font-semibold text-primary my-1'>Harnessing Cutting-Edge Technology for Excellence</h1>
                        <p className='text-sm font-medium'>Empower Your Systems with Advanced Programmers and Emerging Technology for Peak Performance.</p>
                    </div>

                </div>

            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 text-left px-3 relative'>

                <div className='shadow-2xl px-4 py-12 rounded-lg hover:shadow-2xl hover:shadow-secondary transition-all duration-500 h-[350px] relative bottom-6'>
                    <h1 className='brandFont py-2 text-2xl font-extrabold text-primary'>Web Presence Solution</h1>
                    <p className='py-2 font-medium'>Elevate your online presence with our Web Presence Solution. We create unique, fully customized websites that capture your brand's essence and engage your audience.</p>

                    <Link to='/advanced-web-application-solution-for-enterprise'>
                        <button className='btn btn-outline btn-wide mt-6'>
                            <h2>Request a Quote</h2>
                            <IoArrowForwardSharp className='h-7 w-6' />
                        </button>
                    </Link>



                </div>


                <div className='shadow-2xl px-4 py-12 rounded-lg hover:shadow-2xl hover:shadow-secondary transition-all duration-500 h-[350px] relative bottom-6'>
                    <h1 className='brandFont py-2 text-2xl font-extrabold text-primary'>E-commerce Solution</h1>
                    <p className='py-2 font-medium'>Take your business online with our E-commerce Solution. We build secure and user-friendly e-commerce websites that empower you to sell your products or services to a global audience.</p>

                    <Link to='/advanced-web-application-solution-for-enterprise'>
                        <button className='btn btn-outline btn-wide mt-6'>
                            <h2>Request a Quote</h2>
                            <IoArrowForwardSharp className='h-7 w-6' />
                        </button>
                    </Link>


                </div>


                <div className='shadow-2xl px-4 py-12 rounded-lg hover:shadow-2xl hover:shadow-secondary transition-all duration-500 h-[350px] relative bottom-6'>
                    <h1 className='brandFont py-2 text-2xl font-extrabold text-primary'>Advanced Web Solution</h1>
                    <p className='py-2 font-medium'>For complex web application needs, turn to our Advanced Web Application Solution. We develop sophisticated applications with real-time features, user dashboards.</p>

                    <Link to='/advanced-web-application-solution-for-enterprise'>
                        <button className='btn btn-outline btn-wide mt-6'>
                            <h2>Request a Quote</h2>
                            <IoArrowForwardSharp className='h-7 w-6' />
                        </button>
                    </Link>



                </div>

            </div>

        </section>
    );
};

export default TechAndTool;