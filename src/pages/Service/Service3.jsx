import simg30 from "../../images/serviceimg/simg30.png"
import simg31 from "../../images/serviceimg/simg31.webp"
import simg32 from "../../images/serviceimg/simg32.webp"
import simg33 from "../../images/serviceimg/simg33.jpg"

import Service_top from "../Service/Service_top";
import Service_bottom from "../Service/Service_down";

const Service4 = () => {
  return (
    <>
    <Service_top/>
    <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-white from-green-50/40'>
        <div className='w-full  mx-auto '>
            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>
                <div className='flex justify-center items-center w-full '>
                    <div>
                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto  mb-16 md:mb-20'>
                            <h1 className='font-[poppins] text-[16px] md:text-[32px] font-bold mx-auto text-center'>Lifestyle & Holistic Wellness</h1>
                            <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>Achieve balance in body, mind, and soul through an integrated approach to health. Lifestyle & Holistic Wellness focuses on mindful living, combining modern science with ancient wisdom to promote long-term well-being and inner harmony.</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16  gap-y-16 md:gap-y-24 w-full'>
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg30} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Preventive Checkups & Wellness </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Proactive care to maintain long-term health and well-being.</p>
                                </div>
                            </div>
                        
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg31} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Detox & Immunity Boost </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Cleansing and strengthening your body’s natural defense system.</p>
                                </div>
                            </div>
                        
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg32} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Stress & Mind-Body Care </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Holistic methods to calm the mind and enhance inner harmony.</p>
                                </div>
                            </div>
                        
                            <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105'>  
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg33} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>
                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>Diet & Lifestyle Plans</h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>
                                        Tailored plans based on your unique body type (prakriti) for overall wellness.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Service_bottom />
    </>
  )
}

export default Service4