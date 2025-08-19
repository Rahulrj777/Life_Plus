import { Users, Stethoscope } from "lucide-react";

import speacil1 from '../../images/icon/Back Pain.png'
import speacil2 from '../../images/icon/knee_pain.png'
import speacil3 from '../../images/icon/spine_disorders.png'
import speacil4 from '../../images/icon/heel.png'
import speacil5 from '../../images/icon/Psoriasis.png'
import speacil6 from '../../images/icon/hair_loss.png'
import speacil7 from '../../images/icon/alopecia.png'
import speacil8 from '../../images/icon/Diabetic_Foot.png'
import speacil9 from '../../images/icon/asthma.png'
import speacil10 from '../../images/icon/cold.png'
import speacil11 from '../../images/icon/Migraine_Treatment.png'

import bottombanner from '../../images/banner/special.png'

import BestServices from '../../components/BestServices'


const Sevice_down = () => {
  return (
    <>

    <section className='py-10 md:py-20 font-[poppins] bg-slate-100'>
        <div className='w-full px-4 md:w-[80%] mx-auto'>

            <div className='flex flex-col md:flex-row gap-y-14 items-center justify-center '>

                <div className='w-full md:w-[50%] mx-auto'>
                    <div className='flex flex-col gap-y-1 justify-center items-start  mb-8 md:mb-12'>
                        <p className='text-[10px]  md:text-[12px] font-semibold text-[#a64c4f]'>Specialized in</p>
                        <h2 className='font-[roboto] text-gray-600   font-semibold text-[13px] md:text-[18px] text-start  '>We specialize in holistic Siddha and Ayurvedic treatments, focusing on pain relief, rejuvenation, detox, and restoring balance to the body and mind naturally. </h2>
                    </div>

                    <div>
                        <div>
                            <img src={bottombanner} className='w-full object-cover rounded-md md:rounded-xl shadow-2xl drop-shadow-lg' alt='none' />
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[50%] mx-auto'>
                    <div className='flex items-center justify-center w-full md:ml-14'>
                        <div className='grid grid-cols-3 md:grid-cols-4  md:gap-x-14  gap-y-6 md:gap-y-14 w-full'>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4 transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil1} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Back Pain</span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg]  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil2} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Knee Pain </span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg]  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil3} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Spine Disorders </span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg]  shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil4} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Heel Pain </span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil5} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'> Psoriasis </span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil6} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Hair Fall </span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil7} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Alopecia Areata</span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil8} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Diet Therapy</span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil9} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Asthma</span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil10} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Sinusitis</span>
                            </div>

                            <div className='flex flex-col items-center gap-y-2'>
                                <div className='bg-white rounded-md md:rounded-xl flex flex-col justify-center drop-shadow-md p-3 md:p-4  transition-transform duration-700 transform hover:rotate-y-[180deg] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_90px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]'>
                                    <img src={speacil11} className='w-10 md:w-12 object-cover  ' alt='none' />
                                </div>
                                <span className='font-[roboto] text-[10px] md:text-[12px]'>Migraine </span>
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

    {/* ------------------ Popular Ayurveda Therapies ----------- */}

    <section className='py-10 md:py-20 bg-slate-100 font-[poppins]'>
        <div className='w-full px-4 md:w-[90%] mx-auto'>
            <div className='flex flex-col items-center gap-y-3 mb-8 md:mb-12' data-aos='fade-up' data-aos-duration='2000' data-aos-delay='50'>
                <h3 className='font-bold text-[16px] md:text-[32px] font-[Merriweather] '>Popular Ayurveda Therapies</h3>
                <p className='text-[10px] md:text-[12px] text-gray-600 text-center'>Embrace the wisdom of nature with Ayurveda, a holistic approach to wellness that promotes balance and supports your journey to optimal health.</p>
            </div>
            <div data-aos='fade-up' data-aos-duratoin='1000'>
                <BestServices />
            </div>
        </div>
    </section >
    </>
  )
}

export default Sevice_down