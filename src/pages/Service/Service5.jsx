import service5 from '../../images/banner/banner5.png'
import highlight1 from '../../images/icon/highlight1.png'
import highlight2 from '../../images/icon/highlight2.png'
import highlight3 from '../../images/icon/highlight3.png'
import highlight4 from '../../images/icon/highlight4.png'

import Service_bottom from '../Service/Service_down'

import simg34 from '../../images/serviceimg/simg34.png';

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

const Service5 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className='bg-white'>
          <div className="h-[50vh] md:h-[70vh]">
              <img
              src={service5}
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

      <section className='py-10 md:py-20 font-[poppins] bg-gradient-to-t to-white from-green-50/40'>
        <div className='w-full mx-auto'>

          <div className='px-5 md:px-0 w-full md:w-[85%] mx-auto space-y-12'>

            {/* Title & Description */}
            <div className='flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-10'>
              <h1 className='font-[poppins] text-[16px] md:text-[32px] font-bold mx-auto text-center'>
                Physiotherapy
              </h1>

              <p className='text-[12px] md:text-[14px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0'>
                At Life Plus Ayush Vaidhyasala, our Physiotherapy Department is committed to providing world-class care for both in-patients and out-patients. 
                With personalized treatment plans, patient education, guided home exercise programs, and evidence-based techniques, 
                we ensure that every individual receives holistic and effective rehabilitation. 
                Our team combines expertise in human anatomy and physiology with compassion to help patients restore mobility, 
                reduce pain, and achieve a better quality of life.
              </p>
            </div>

            {/* Card */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 w-full'>

              <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                <div className='relative h-40 md:h-60 w-full'>
                  <img src={simg34} className='absolute inset-0 w-full h-full object-cover' alt='Physiotherapy' />
                </div>

                <div className='flex flex-col items-start gap-y-2 py-2 md:py-4 px-4'>
                  <h3 className='font-bold text-[16px] md:text-[20px] font-[Merriweather]'>
                    Physiotherapy
                  </h3>
                  <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-600'>
                    The Physiotherapy Department at Life Plus Ayush vaidhyasala is dedicated to delivering both in-patient and out-patient services with the highest standards of care and quality. Our approach focuses on thorough assessments and personalized treatment plans that integrate education, ongoing support, tailored home exercise programs, and professional guidance. By applying our deep scientific knowledge of human anatomy and physiology, we ensure the delivery of effective and holistic patient care.
                  </p>
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

export default Service5
