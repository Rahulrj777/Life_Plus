import service1 from '../../images/banner/banner1.png'
import highlight1 from '../../images/icon/highlight1.png'
import highlight2 from '../../images/icon/highlight2.png'
import highlight3 from '../../images/icon/highlight3.png'
import highlight4 from '../../images/icon/highlight4.png'

import simg1 from "../../images/serviceimg/simg1.avif"
import simg2 from "../../images/serviceimg/simg2.jpeg"
import simg3 from "../../images/serviceimg/simg3.jpg"
import simg4 from "../../images/serviceimg/simg4.webp"
import simg6 from "../../images/serviceimg/simg6.jpeg"
import simg7 from "../../images/serviceimg/simg7.jpeg"  
import simg9 from "../../images/serviceimg/simg9.jpg"  
import simg10 from "../../images/serviceimg/simg10.webp"

import Service_bottom from "../Service/Service_down";

import ss1 from "../../images/banner/ss1.jpeg"
import ss from '../../images/banner/ss.jpeg'

import { useState } from 'react';
import { Users, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Out Patients",
    content: (
      <div className="space-y-3 text-gray-600 text-[14px] md:text-[16px]">
        At Life Plus Ayush Vaidhyasala, we ensure a comfortable outpatient experience. Book appointments in advance via phone, email, or in person. Check in at reception upon arrival. Our staff keeps you informed of any delays and is always ready to address your questions or concerns.      </div>
    ),
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-green-600 mb-4" />,
    title: "Consultation",
    content: (
      <div className="space-y-3 text-gray-600 text-[14px] md:text-[16px]">
        <p>
          Our consultants will assess your condition. To ensure you receive the
          best possible care, please prepare a short summary of your medical
          history along with details of any medications you are currently using.
          You may also find it helpful to note down any questions you would like
          to ask.
        </p>
      </div>
    ),
  },
];

const Service1 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <section className='bg-white'>
        <div className="h-[20vh] md:h-[70vh]">
            <img
            src={service1}
            className="w-full h-full object-cover"
            alt="none"
            />
        </div>
    </section>

    {/* ----------- benefits ------------ */}

    <section className=' w-[95%] md:w-[99%] mx-auto -mt-[0rem] md:-mt-[4rem] pb-2 font-[poppins]' data-aos='fade-up'>
        <div className=''>
            <div className='flex items-center justify-center '>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10 w-full   pb-6 md:pb-6  px-6 md:px-9 rounded-md md:rounded-3xl'>
                    <div>
                        <div className='h-full bg-[#aabc9b]   drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                <img src={highlight1} className='w-9 md:w-12 object-cover' alt='none' />
                            </div>

                            <div className='flex flex-col items-center md:gap-y-1'>
                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Personalized Siddha Treatments</h3>
                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Tailored therapies based on your unique dosha and health needs.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=' h-full bg-[#aabc9b]  drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                <img src={highlight2} className='w-9 md:w-12 object-cover' alt='none' />
                            </div>

                            <div className='flex flex-col items-center md:gap-y-1'>
                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Pain & Stress Relief</h3>
                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Effective Varmam and Thokkanam therapies for pain, tension, and stress relief.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='h-full bg-[#aabc9b]  drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                <img src={highlight3} className='w-9 md:w-12 object-cover' alt='none' />
                            </div>

                            <div className='flex flex-col items-center md:gap-y-1'>
                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Rejuvenation & Anti-Aging</h3>
                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Kayakalpa Chikitsa for rejuvenating the body and slowing down the aging process.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='h-full bg-[#aabc9b] drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl'>
                            <div className='bg-[#aabc9b] rounded-t-4xl p-4 -mt-6'>
                                <img src={highlight4} className='w-9 md:w-12 object-cover' alt='none' />
                            </div>

                            <div className='flex flex-col items-center md:gap-y-1'>
                                <h3 className='font-semibold text-[11px] md:text-[14px] text-white'>Stress & Anxiety Relief</h3>
                                <p className='font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50'>Targeted therapies to calm the mind, ease stress, and enhance relaxation.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    {/* ----------- services ------------ */}

    <section className="py-12 md:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="w-full px-5 md:w-[85%] mx-auto">
        <h2 className="text-[20px] md:text-[32px] font-bold text-[#2c7f4c] mb-12 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-[18px] md:text-[22px] font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <div>{service.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* --------------content---------------- */}

    <section className='py-10 md:py-0 font-[poppins] bg-gradient-to-t to-white from-yellow-50/50 mb-10'>
        <div className='w-full  mx-auto '>
            <div className='px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26'>
                <div className='flex justify-center items-center w-full '>
                    <div>
                        <div className='flex flex-col justify-center items-center  md:gap-y-2 w-full md:w-[80%] mx-auto mb-14 md:mb-20'>
                            <h1 className='font-[poppins]   text-[16px] md:text-[32px] font-bold mx-auto text-center'>Siddha External Therapies</h1>
                            <p className='text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>
                                Siddha medicine is a traditional healing system that originated in South India. It focuses on balancing the body's energies and promoting overall well-being through natural remedies, herbal treatments, and lifestyle practices.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-24 w-full'>
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg1} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Herbal and mineral </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Discover the power of herbal and mineral remedies, blending nature’s healing touch with ancient wisdom for your well-being</p>
                                </div>
                            </div>

                            <div className="group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                                <div className="relative h-28 md:h-36 w-full"> 
                                    <img src={simg2} alt="Varmam therapy" className="absolute inset-0 w-full h-full object-contain" />
                                </div>

                                <div className="flex flex-col items-start gap-y-1 md:gap-y-2 py-3 md:py-4 px-4">
                                    <h3 className="font-bold text-[14px] md:text-[18px] font-[Merriweather]"> Varmam therapy </h3> 
                                    <p className="font-[roboto] text-[11px] md:text-[13px]"> Varmam therapy effectively treats pain, nerve imbalances, paralysis, and joint issues, promoting healing and restoring vitality </p> 
                                </div> 
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg3} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>
                                <div className='flex flex-col items-start gap-y-1  md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Thokkanam </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Traditional Siddha therapeutic massage offers effective pain relief and treats musculoskeletal issues, promoting overall wellness.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg4} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Kattu </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Effective in treating wounds, fractures, muscle spasms, sprains, joint dislocations, and for pain management.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    {/* <img src={simg5} className='absolute inset-0 w-full h-full object-cover' alt='none' /> */}
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Pattru  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Poultice is used for treating skin conditions such as eczema, boils, and abscesses; musculoskeletal conditions like arthritis, sprains, and injuries; as well as other conditions including sinusitis, wounds, and hemorrhoids.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg6} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Ottradam  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>It is helpful in treating inflammation, disc bulge, toothache, muscle cramps, body pain, asthma, and anorectal diseases.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg7} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Steam  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Local steaming is useful for reducing inflammation, fluid accumulation, and muscle spasms, while whole-body steam is a cleansing and relaxing procedure.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    {/* <img src={simg8} className='absolute inset-0 w-full h-full object-cover' alt='none' /> */}
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Varthi  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Helps in treating chronic ulcers and fistulas.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg9} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Kaaram  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Applying various medical formulations to remove warts, corns, and skin tags.</p>
                                </div>
                            </div>
                            
                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    <img src={simg10} className='absolute inset-0 w-full h-full object-cover' alt='none' />
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Leech Therapy  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Helps improve circulation, reduce inflammation, promote wound healing, and treat varicose veins.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    {/* <img src={simg11} className='absolute inset-0 w-full h-full object-cover' alt='none' /> */}
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Karanool  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Useful in treating ano-rectal diseases.</p>
                                </div>
                            </div>

                            <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                                <div className='relative h-28 md:h-36 w-full'>
                                    {/* <img src={simg12} className='absolute inset-0 w-full h-full object-cover' alt='none' /> */}
                                </div>

                                <div className='flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4'>
                                    <h3 className='font-bold text-[14px] md:text-[18px] font-[Merriweather]'> Suttigai  </h3>
                                    <p className='font-[roboto] text-[11px] md:text-[13px]'>Used to treat warts, corns, chronic pain, and to stop bleeding.</p>
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

export default Service1