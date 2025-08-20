import service2 from '../../images/banner/banner2.png'
import highlight1 from '../../images/icon/highlight1.png'
import highlight2 from '../../images/icon/highlight2.png'
import highlight3 from '../../images/icon/highlight3.png'
import highlight4 from '../../images/icon/highlight4.png'

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

import Service_bottom from "../Service/Service_down";

import { useState } from 'react';
import { Users, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-10 h-10 text-blue-500 mr-3" />,
    title: "Out Patients",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          {/* <span className="text-green-500 font-bold">•</span> */}
          <p>
            At Life Plus Ayush Vaidhyasala, the Outpatient Department is
            committed to creating a supportive and comfortable experience for
            every patient.
          </p>
        </div>

        <div className="flex items-start gap-2">
          {/* <span className="text-green-500 font-bold">•</span> */}
          <p>
            Our Reception Team works diligently to manage appointments
            efficiently, whether booked over the phone, by email, or in
            person. For smoother service and timely care, we recommend
            scheduling consultations in advance.
          </p>
        </div>

        <div className="flex items-start gap-2">
          {/* <span className="text-green-500 font-bold">•</span> */}
          <p>
            When you arrive, please check in at the reception desk to confirm
            your appointment time. If there are any delays, our staff will
            keep you informed. We encourage you to share any questions or concerns with us, as our
            team is always ready to assist you.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-green-600 mr-3" />,
    title: "Consultation",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <p>
            Our consultants will assess your condition. To ensure you receive
            the best possible care, please prepare a short summary of your
            medical history along with details of any medications you are
            currently using. You may also find it helpful to note down any
            questions you would like to ask.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <p>
            Life Plus Ayush Vaidhyasala offers specialized expertise and
            extensive experience in managing the following conditions:
          </p>
        </div>

        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>Skin Diseases like Eczema, Psoriasis, Urticaria, Lichen planus, etc.</li>
          <li>Respiratory diseases like Asthma</li>
          <li>Osteoarthritis, Rheumatoid Arthritis, Cervical Spondylosis, Lumbar Spondylosis, Lesthesis, Hemiplegia, Paraplegia</li>
          <li>Diabetes mellitus</li>
          <li>Hypertension</li>
          <li>Hyperlipidemia</li>
          <li>Obesity</li>
        </ul>
      </div>
    ),
  },
];

const Service2 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <section className='bg-white'>
        <div className="h-[50vh] md:h-[70vh]">
            <img
            src={service2}
            className="w-full h-full object-cover"
            alt="none"
            />
        </div>
    </section>

    {/* ----------- benefits ------------ */}

    <section className=' w-[95%] md:w-[99%] mx-auto   -mt-[2rem] md:-mt-[4rem] pb-2 font-[poppins]' data-aos='fade-up'>
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

    <section className="py-10 md:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="w-full px-5 md:w-[85%] mx-auto">
        <h2 className="text-[20px] md:text-[32px] font-bold text-[#2c7f4c] mb-10 text-center">
          Our Services
        </h2>

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-4 cursor-pointer transition-all duration-300"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">{service.icon}
                <h3 className="text-[18px] md:text-[22px] font-semibold text-gray-800">{service.title}</h3>
              </div>
              <span className="text-green-500 font-bold">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-4 text-[14px] md:text-[16px] text-gray-600">
                {service.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

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

export default Service2