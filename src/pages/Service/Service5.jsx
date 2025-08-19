import React from 'react'
import Service_top from '../Service/Service_top'
import Service_bottom from '../Service/Service_down'

import simg34 from '../../images/serviceimg/simg34.png';

const Service5 = () => {
  return (
    <>
      <Service_top />

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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 w-full'>

              <div className='group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden'>
                <div className='relative h-40 md:h-60 w-full'>
                  <img src={simg34} className='absolute inset-0 w-full h-full object-cover' alt='Physiotherapy' />
                </div>

                <div className='flex flex-col items-start gap-y-2 py-2 md:py-4 px-4'>
                  <h3 className='font-bold text-[16px] md:text-[20px] font-[Merriweather]'>
                    Personalized Physiotherapy Care
                  </h3>
                  <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-600'>
                    Our Physiotherapy services include customized rehabilitation programs, advanced manual therapy, 
                    electrotherapy, pain management, and post-surgical recovery support. 
                    Every treatment is designed to suit your specific condition and health goals, 
                    ensuring faster recovery and long-term well-being.
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
