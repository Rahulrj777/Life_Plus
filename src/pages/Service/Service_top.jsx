import highlight1 from "../../images/icon/highlight1.png";
import highlight2 from "../../images/icon/highlight2.png";
import highlight3 from "../../images/icon/highlight3.png";
import highlight4 from "../../images/icon/highlight4.png";

const Service_top = () => {
  return (
    <>
      <section className="bg-white">
        <div className="h-[50vh] md:h-[70vh]">
          <img
            src={service1}
            className="w-full h-full object-cover"
            alt="none"
          />
        </div>
      </section>

      {/* ----------- benefits ------------ */}

      <section
        className=" w-[95%] md:w-[99%] mx-auto   -mt-[2rem] md:-mt-[4rem] pb-2 font-[poppins]"
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
    </>
  );
};

export default Service_top;
