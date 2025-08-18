import simg7 from "../../images/serviceimg/simg7.jpeg"  
import simg13 from "../../images/serviceimg/simg13.jpg"
import simg14 from "../../images/serviceimg/simg14.jpg"
import simg16 from "../../images/serviceimg/simg16.jpeg"
import simg17 from "../../images/serviceimg/simg17.jpg"
import simg18 from "../../images/serviceimg/simg18.webp"
import simg19 from "../../images/serviceimg/simg19.jpg"
import simg20 from "../../images/serviceimg/simg20.webp"
import simg21 from "../../images/serviceimg/simg21.jpg"
import simg22 from "../../images/serviceimg/simg22.jpeg"

import Service_top from "../Service/Service_top";
import Service_bottom from "../Service/Service_down";

const Service3 = () => {
  return (
    <>
    <Service_top/>
    <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-yellow-50/50 from-white'>
        <div className='w-full  mx-auto '>
            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>
                <div className='flex justify-center items-center w-full '>
                    <div>
                        <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-14 md:mb-20'>
                            <h1 className='font-[poppins] text-[16px] md:text-[32px] font-bold mx-auto text-center'>Ayurveda Panchakarma & Wellness Therapies</h1>
                            <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>Discover the ancient secrets of holistic well-being through authentic Panchakarma treatments and personalized Ayurvedic therapies. Rooted in centuries-old wisdom, our therapies aim to detoxify, rejuvenate, and restore balance to your body, mind, and spirit</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24 w-full'>
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg13} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Abhyangam </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Abhyangam is a full-body herbal oil massage that detoxifies, relieves stress, and enhances circulation for overall health.</p>
                                </div>

                            </div>
                    
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg14} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Nasyam </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Nasyam is the nasal administration of medicated oils, providing relief from sinus issues, migraines, and enhancing mental clarity.</p>
                                </div>

                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    {/* <img src={simg15} className='absolute inset-0 w-full h-full object-cover' alt='none' /> */}
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Vamanam </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Vamanam is a therapeutic emesis treatment that helps detoxify the body and balances Kapha-related disorders for improved health</p>
                                </div>

                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg16} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Virechanam </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Virechanam is a purgation therapy that cleanses Pitta, detoxifies the body, and restores balance for better health and vitality</p>
                                </div>

                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg17} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Vasti </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Vasti is a therapeutic herbal enema treatment that balances Vata, detoxifies the body, and promotes overall wellness</p>
                                </div>

                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg18} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' >
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Rakta Mokshanam </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Bloodletting therapy for skin diseases and blood purification, promoting clear skin and wellness.</p>
                                </div>

                            </div>


                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg19} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4' >
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Shirodhara </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Medicated oil poured on the forehead to relax the mind, balance the nervous system, and reduce stress.</p>
                                </div>

                            </div>
                        
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg20} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Navarakizhi </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Rice bolus massage to nourish, strengthen, and improve muscle tone, boosting vitality and overall health.</p>
                                </div>

                            </div>
                        
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg21} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Thalapothichil </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Herbal paste applied to the scalp to relieve stress, insomnia, and mental fatigue, promoting clarity.</p>
                                </div>

                            </div>
                        
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg22} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Podikizhi </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Herbal powder pouch massage to relieve pain, stiffness, and muscle tension, aiding in recovery and relaxation.</p>
                                </div>

                            </div>
                        
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden' >
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg7} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Herbal Steam Bath </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Detoxifies by opening body channels, removing toxins, improving circulation, and boosting well-being.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Service_bottom/>
    </>
  )
}

export default Service3