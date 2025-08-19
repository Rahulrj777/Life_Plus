import simg7 from '../../images/serviceimg/simg7.jpeg';
import simg25 from '../../images/serviceimg/simg25.webp';
import simg26 from '../../images/serviceimg/simg26.jpg';
import simg27 from '../../images/serviceimg/simg27.jpg';
import simg28 from '../../images/serviceimg/simg28.jpg';
import simg29 from '../../images/serviceimg/simg29.svg';
import simg34 from '../../images/serviceimg/simg34.png';


import Service_top from "../Service/Service_top";
import Service_bottom from "../Service/Service_down";

const Service3 = () => {
  return (
    <>
    <Service_top/>
    <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-white from-green-50/40'>
        <div className='w-full mx-auto'>

            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>

            <div className='flex justify-center items-center w-full'>

                <div>

                <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-20'>

                    <h1 className='font-[poppins] text-[16px] md:text-[32px] font-bold mx-auto text-center'>
                    Naturopathy Therapies
                    </h1>

                    <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>
                    Embrace the power of nature to restore your health and vitality. Naturopathy focuses on drugless, holistic healing by stimulating the body’s self-healing abilities through natural elements like earth, water, sunlight, diet, and lifestyle.
                    </p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-24 w-full'>

                    <div className='group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md pb-2 md:pb-3 drop-shadow-lg h-full transition-all duration-300 hover:scale-105'>

                    <div className='relative h-28 md:h-36 w-full'>
                        <img src={simg7} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                    </div>

                    <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                        <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>
                        Hydrotherapy
                        </h3>
                        <p className='font-[roboto] text-[11px] md:text-[13px]'>
                        Includes hip bath, foot bath, jet spray, and steam for circulation improvement and detoxification.
                        </p>
                    </div>

                    </div>

                    <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>

                    <div className='relative h-28 md:h-36 w-full'>
                        <img src={simg25} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                    </div>

                    <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                        <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>
                        Mud Therapy
                        </h3>
                        <p className='font-[roboto] text-[11px] md:text-[13px]'>
                        Local and full-body applications that cool, detoxify, and rejuvenate the body’s organs.
                        </p>
                    </div>

                    </div>

                    <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>

                    <div className='relative h-28 md:h-36 w-full'>
                        <img src={simg26} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                    </div>

                    <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                        <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>
                        Plantain Leaf Bath
                        </h3>
                        <p className='font-[roboto] text-[11px] md:text-[13px]'>
                        Traditional treatment to cool the body and soothe skin inflammation naturally.
                        </p>
                    </div>

                    </div>

                    <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>

                    <div className='relative h-28 md:h-36 w-full'>
                        <img src={simg27} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                    </div>

                    <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                        <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>
                        Acupuncture
                        </h3>
                        <p className='font-[roboto] text-[11px] md:text-[13px]'>
                        Stimulates points to relieve pain, improve organ function, and balance energy flow in the body.
                        </p>
                    </div>

                    </div>

                    <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>

                    <div className='relative h-28 md:h-36 w-full'>
                        <img src={simg28} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                    </div>

                    <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                        <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>
                        Diet & Fasting Therapy
                        </h3>
                        <p className='font-[roboto] text-[11px] md:text-[13px]'>
                        Custom diet plans, therapeutic fasting, and lifestyle counseling for better health.
                        </p>
                    </div>

                    </div>

                    <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>

                    <div className='relative h-28 md:h-36 w-full'>
                        <img src={simg29} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                    </div>

                    <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                        <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>
                        Yoga & Pranayama
                        </h3>
                        <p className='font-[roboto] text-[11px] md:text-[13px]'>
                        Guided sessions to improve flexibility, mindfulness, and achieve inner peace and calm.
                        </p>
                    </div>

                    </div>

                    <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>

                    <div className='relative h-28 md:h-36 w-full'>
                        <img src={simg34} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                    </div>

                    <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                        <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'>
                        Physiotherapy
                        </h3>
                        <p className='font-[roboto] text-[11px] md:text-[13px]'>
                        The Physiotherapy Department at Life Plus Ayush vaidhyasala is dedicated to delivering both in-patient and out-patient services with the highest standards of care and quality. Our approach focuses on thorough assessments and personalized treatment plans that integrate education, ongoing support, tailored home exercise programs, and professional guidance. By applying our deep scientific knowledge of human anatomy and physiology, we ensure the delivery of effective and holistic patient care.
                        </p>
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