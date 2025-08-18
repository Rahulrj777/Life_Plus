import { Users, Stethoscope } from "lucide-react";

import midBanner from '../../images/banner/mid_banner.jpg'

import highlight1 from '../../images/icon/highlight1.png'
import highlight2 from '../../images/icon/highlight2.png'
import highlight3 from '../../images/icon/highlight3.png'
import highlight4 from '../../images/icon/highlight4.png'

const Service_top = () => {
  return (
    <>
    <section className='bg-white'>
        <div className="relative h-[50vh] md:h-[70vh]">
            <img
            src={midBanner}
            className="w-full h-full object-cover"
            alt="none"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full text-center">
                <div
                    className='w-[80%] md:w-[55%] mx-auto flex flex-col gap-3'
                    data-aos='fade-up'
                    data-aos-duration='2000'
                >
                    <h2 className="text-[#0d6c1d] text-[13px] md:text-[3rem] font-bold">
                    We’re Here to Help You Heal Naturally
                    </h2>
                    <p className='tracking-tight text-[10px] md:text-[18px] text-gray-700'>
                    Take the first step toward holistic wellness. Whether you're curious about our services or ready to make an appointment, our team is here for you every step of the way.
                    </p>
                </div>
            </div>
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

    {/* ----------- Special Services -------------- */}

    <section className="py-10 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="w-full px-5 md:w-[85%] mx-auto">
            <h2 className="text-[20px] md:text-[32px] font-bold text-[#2c7f4c] mb-10 text-center">
            Our Services
            </h2>

            {/* Out Patients */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-blue-500 mr-3" />
                <h3 className="text-[18px] md:text-[22px] font-semibold text-gray-800">
                Out Patients
                </h3>
            </div>
            <div className="space-y-3 text-[14px] md:text-[16px] text-gray-600">
                <p>
                At Life Plus Ayush Vaidhyasala, the Outpatient Department is
                committed to creating a supportive and comfortable experience for
                every patient.
                </p>
                <p>
                Our Reception Team works diligently to manage appointments
                efficiently, whether booked over the phone, by email, or in
                person. For smoother service and timely care, we recommend
                scheduling consultations in advance.
                </p>
                <p>
                When you arrive, please check in at the reception desk to confirm
                your appointment time. If there are any delays, our staff will
                keep you informed. We encourage you to share any questions or
                concerns with us, as our team is always ready to assist you.
                </p>
            </div>
            </div>

            {/* Consultation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <Stethoscope className="w-10 h-10 text-green-600 mr-3" />
                <h3 className="text-[18px] md:text-[22px] font-semibold text-gray-800">
                Consultation
                </h3>
            </div>
            <div className="space-y-3 text-[14px] md:text-[16px] text-gray-600">
                <p>
                Our consultants will assess your condition. To ensure you receive
                the best possible care, please prepare a short summary of your
                medical history along with details of any medications you are
                currently using. You may also find it helpful to note down any
                questions you would like to ask.
                </p>
                <p>
                Life Plus Ayush Vaidhyasala offers specialized expertise and
                extensive experience in managing the following conditions:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                <li>
                    Skin Diseases like Eczema, Psoriasis, Urticaria, Lichen planus,
                    etc.
                </li>
                <li>Respiratory diseases like Asthma</li>
                <li>
                    Osteoarthritis, Rheumatoid Arthritis, Cervical Spondylosis,
                    Lumbar Spondylosis, Lesthesis, Hemiplegia, Paraplegia
                </li>
                <li>Diabetes mellitus</li>
                <li>Hypertension</li>
                <li>Hyperlipidemia</li>
                <li>Obesity</li>
                </ul>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service_top