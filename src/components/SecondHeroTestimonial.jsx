import React from 'react'
import heroTestimonialImage2 from "../resources/images/heroTestimonialImage2.png";
import { motion } from 'framer-motion';
import lineVector from "../resources/images/lineVector.svg"
import Container from './helpers/Container'

const SecondHeroTestimonial = (props) => {
    return (
        <section className='flex flex-col  items-center '>
            <Container>
                <div className='w-full display flex md:flex-row  sm:gap-1 flex-col items-center justify-between mt-[5rem]'>

                    <div className='md:w-[60%]  md:mr-[6rem] '>
                        <div className='flex flex-col gap-12'>

                            <div>
                                <p className='font-inter font-[700] text-[32px] '>Joseph's Experience</p>
                                <button className='rounded-md text-[13px] font-[500] font-inter  border-2 border-[#F55C00] text-[#F55C00] py-1 px-2'>VENDOR</button>
                            </div>
                            <p className=' text-[18px]'>
                                I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
                            </p>
                            <motion.div
                                onClick={props.handleClick}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='cursor-pointer'>
                                <p className='text-[18px]  '>SHARE YOUR OWN STORY!</p>
                                <img src={lineVector} alt="line" />
                            </motion.div>
                        </div>

                    </div>
                    <div className='md:mt-0 mt-10 '>
                        <div className='overflow-hidden flex items-center relative w-full'>
                            <span className='absolute m-auto w-[631px] h-[631px] top-[2px] rounded-full bg-[#F55C00] opacity-5'>
                            </span>
                            <img className='relative md:w-[80%] m-auto' src={heroTestimonialImage2} alt="hero section" />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default SecondHeroTestimonial