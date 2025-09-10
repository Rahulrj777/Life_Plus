import service4 from "../../images/banner/banner4.png";
import highlight1 from "../../images/icon/highlight1.png";
import highlight2 from "../../images/icon/highlight2.png";
import highlight3 from "../../images/icon/highlight3.png";
import highlight4 from "../../images/icon/highlight4.png";

import simg7 from "../../images/serviceimg/simg7.jpeg";
import simg25 from "../../images/serviceimg/simg25.webp";
import simg26 from "../../images/serviceimg/simg26.jpg";
import simg27 from "../../images/serviceimg/simg27.jpg";
import simg28 from "../../images/serviceimg/simg28.jpg";
import simg29 from "../../images/serviceimg/simg29.svg";

import Service_bottom from "../Service/Service_down";

import { useState } from "react";
import { Users, Stethoscope } from "lucide-react";

const services = [
  {
    icon: <Users className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Out Patients",
    content: (
      <div className="space-y-3 text-gray-600 text-[14px] md:text-[16px]">
        At Life Plus Ayush Vaidhyasala, we ensure a comfortable outpatient
        experience. Book appointments in advance via phone, email, or in person.
        Check in at reception upon arrival. Our staff keeps you informed of any
        delays and is always ready to address your questions or concerns.{" "}
      </div>
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

const Service3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="h-[20vh] md:h-[70vh]">
          <img
            src={service4}
            className="w-full h-full object-cover"
            alt="none"
          />
        </div>
      </section>

      {/* ----------- benefits ------------ */}

      <section
        className=" w-[95%] md:w-[99%] mx-auto   -mt-[0rem] md:-mt-[4rem] pb-2 font-[poppins]"
        data-aos="fade-up"
      >
        <div className="">
          <div className="flex items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10 w-full   pb-6 md:pb-6  px-6 md:px-9 rounded-md md:rounded-3xl">
              <div>
                <div className="h-full bg-[#aabc9b]   drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl">
                  <div className="bg-[#aabc9b] rounded-t-4xl p-4 -mt-6">
                    <img
                      src={highlight1}
                      className="w-9 md:w-12 object-cover"
                      alt="none"
                    />
                  </div>

                  <div className="flex flex-col items-center md:gap-y-1">
                    <h3 className="font-semibold text-[11px] md:text-[14px] text-white">
                      Personalized Siddha Treatments
                    </h3>
                    <p className="font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50">
                      Tailored therapies based on your unique dosha and health
                      needs.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" h-full bg-[#aabc9b]  drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl">
                  <div className="bg-[#aabc9b] rounded-t-4xl p-4 -mt-6">
                    <img
                      src={highlight2}
                      className="w-9 md:w-12 object-cover"
                      alt="none"
                    />
                  </div>

                  <div className="flex flex-col items-center md:gap-y-1">
                    <h3 className="font-semibold text-[11px] md:text-[14px] text-white">
                      Pain & Stress Relief
                    </h3>
                    <p className="font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50">
                      Effective Varmam and Thokkanam therapies for pain,
                      tension, and stress relief.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-full bg-[#aabc9b]  drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl">
                  <div className="bg-[#aabc9b] rounded-t-4xl p-4 -mt-6">
                    <img
                      src={highlight3}
                      className="w-9 md:w-12 object-cover"
                      alt="none"
                    />
                  </div>

                  <div className="flex flex-col items-center md:gap-y-1">
                    <h3 className="font-semibold text-[11px] md:text-[14px] text-white">
                      Rejuvenation & Anti-Aging
                    </h3>
                    <p className="font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50">
                      Kayakalpa Chikitsa for rejuvenating the body and slowing
                      down the aging process.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-full bg-[#aabc9b] drop-shadow-sm flex flex-col items-center pb-4 md:pb-8 px-4  rounded-xl">
                  <div className="bg-[#aabc9b] rounded-t-4xl p-4 -mt-6">
                    <img
                      src={highlight4}
                      className="w-9 md:w-12 object-cover"
                      alt="none"
                    />
                  </div>

                  <div className="flex flex-col items-center md:gap-y-1">
                    <h3 className="font-semibold text-[11px] md:text-[14px] text-white">
                      Stress & Anxiety Relief
                    </h3>
                    <p className="font-[roboto] text-[9px] md:text-[12px] text-center text-gray-50">
                      Targeted therapies to calm the mind, ease stress, and
                      enhance relaxation.
                    </p>
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

      <section className="py-10 md:py-20 font-[poppins] bg-gradient-to-t to-white from-green-50/40">
        <div className="w-full mx-auto">
          <div className="px-15 md:px-0 w-full md:w-[85%] mx-auto space-y-26">
            <div className="flex justify-center items-center w-full">
              <div>
                <div className="flex flex-col justify-center items-center gap-y-2 w-full md:w-[80%] mx-auto mb-20">
                  <h1 className="font-[poppins] text-[16px] md:text-[32px] font-bold mx-auto text-center">
                    Naturopathy Therapies
                  </h1>

                  <p className="text-[10px] md:text-[12px] font-[roboto] text-gray-500 text-justify md:text-center w-[90%] mx-auto mt-2 md:mt-0">
                    Embrace the power of nature to restore your health and
                    vitality. Naturopathy focuses on drugless, holistic healing
                    by stimulating the body’s self-healing abilities through
                    natural elements like earth, water, sunlight, diet, and
                    lifestyle.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-24 w-full">
                  <div className="group bg-[#f5f6f6] flex flex-col gap-y-2 w-full md:gap-y-4 rounded-md pb-2 md:pb-3 drop-shadow-lg h-full transition-all duration-300 hover:scale-105">
                    <div className="relative h-28 md:h-36 w-full">
                      <img
                        src={simg7}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="none"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4">
                      <h3 className="font-bold text-[14px] md:text-[18px] font-[Merriweather]">
                        Hydrotherapy
                      </h3>
                      <p className="font-[roboto] text-[11px] md:text-[13px]">
                        Includes hip bath, foot bath, jet spray, and steam for
                        circulation improvement and detoxification.
                      </p>
                    </div>
                  </div>

                  <div className="group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="relative h-28 md:h-36 w-full">
                      <img
                        src={simg25}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="none"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4">
                      <h3 className="font-bold text-[14px] md:text-[18px] font-[Merriweather]">
                        Mud Therapy
                      </h3>
                      <p className="font-[roboto] text-[11px] md:text-[13px]">
                        Local and full-body applications that cool, detoxify,
                        and rejuvenate the body’s organs.
                      </p>
                    </div>
                  </div>

                  <div className="group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="relative h-28 md:h-36 w-full">
                      <img
                        src={simg26}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="none"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4">
                      <h3 className="font-bold text-[14px] md:text-[18px] font-[Merriweather]">
                        Plantain Leaf Bath
                      </h3>
                      <p className="font-[roboto] text-[11px] md:text-[13px]">
                        Traditional treatment to cool the body and soothe skin
                        inflammation naturally.
                      </p>
                    </div>
                  </div>

                  <div className="group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="relative h-28 md:h-36 w-full">
                      <img
                        src={simg27}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="none"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4">
                      <h3 className="font-bold text-[14px] md:text-[18px] font-[Merriweather]">
                        Acupuncture
                      </h3>
                      <p className="font-[roboto] text-[11px] md:text-[13px]">
                        Stimulates points to relieve pain, improve organ
                        function, and balance energy flow in the body.
                      </p>
                    </div>
                  </div>

                  <div className="group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="relative h-28 md:h-36 w-full">
                      <img
                        src={simg28}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="none"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4">
                      <h3 className="font-bold text-[14px] md:text-[18px] font-[Merriweather]">
                        Diet & Fasting Therapy
                      </h3>
                      <p className="font-[roboto] text-[11px] md:text-[13px]">
                        Custom diet plans, therapeutic fasting, and lifestyle
                        counseling for better health.
                      </p>
                    </div>
                  </div>

                  <div className="group bg-[#f5f6f6] rounded-md pb-2 md:pb-3 h-full drop-shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="relative h-28 md:h-36 w-full">
                      <img
                        src={simg29}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="none"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-y-1 md:gap-y-2 py-1 md:py-3 px-4">
                      <h3 className="font-bold text-[14px] md:text-[18px] font-[Merriweather]">
                        Yoga & Pranayama
                      </h3>
                      <p className="font-[roboto] text-[11px] md:text-[13px]">
                        Guided sessions to improve flexibility, mindfulness, and
                        achieve inner peace and calm.
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
  );
};

export default Service3;
