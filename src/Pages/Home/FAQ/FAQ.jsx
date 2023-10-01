import React from 'react';
import SectionHead from '../../../components/SectionHead';

const FAQ = () => {
    return (
        <section className='my-20 text-center'>
            <SectionHead title="Uncover the Answers, Your Guide to Outsourcing Software Development Solutions" description="Beyond the Ordinary: Dive into Our Services and Solutions Tailored Exclusively for Your Business Success." />

            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-3  gap-6 my-10 overflow-hidden'>
                <div className='space-y-5' data-aos="fade-left"
                    data-aos-duration="3000">
                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            What type of websites do you specialize in building?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>We specialize in building custom websites, with a focus on functional React applications. Whether you need a personal blog, an e-commerce site, or a corporate web presence, I can tailor my services to meet your specific needs.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            What information do you need from me to get started?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>To get started, I'll need a clear project brief outlining your requirements, any design preferences, and the content you want to include on the website. The more details you provide, the better I can tailor the project to your vision.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            Can you help with domain registration and hosting setup?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Yes, we can assist you in selecting a domain name and setting up hosting if needed. Please let me know if you require these services, and I can provide guidance and recommendations.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            How do you managing the entire development process?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Our development process typically involves design mockups, development, testing, and client feedback. I'll keep you informed at every stage and make necessary adjustments based on your input.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        Do you provide ongoing maintenance support for websites?
                        </div>
                        <div className="collapse-content">
                        <p className='mt-2 font-medium'>Yes, we offer ongoing maintenance and support services to ensure your website stays up to date and secure. We can discuss the specifics based on your needs.</p>
                        </div>
                    </div> 

                </div>

                <div className='space-y-5' data-aos="flip-right"
                    data-aos-duration="3000">




                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            Can you optimize my website for search engines (SEO)?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>YES, we can optimize your website for search engines to improve its visibility. SEO services can be included as part of the project or added separately.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        What is the expected turnaround time for my project?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>The turnaround time depends on the complexity of the project and the package you choose. Typically, basic packages may take 5-10 days, standard packages 15-25 days, and premium packages 30+ days.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        How many revisions I can request for my website ?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Each website package includes unlimited number of revisions. Please check our package details for the revisions.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        What information do I need to provide for content upload?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>For content upload, you'll need to provide text, images, videos, and any other content you want to include on your website. I'll handle the formatting and integration.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        How do I get started with your services?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>To get started, simply send us an email to discuss your website requirement and select the package that suits your needs, provide us with your website details, and we'll begin working on your custom website right away.</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default FAQ;