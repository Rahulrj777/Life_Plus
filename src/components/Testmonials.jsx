import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import doctor from "../images/doctor.jpg"; // Ensure the path is correct

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Book Keeper",
        image: doctor,
        rating: 4,
        review: "Mollis vulputate penatibus leo pellentesque faucibus posuere consectetuer in gravida litora tincidunt."
    },
    {
        id: 2,
        name: "John Doe",
        role: "Nutritionist",
        image: doctor,
        rating: 5,
        review: "Excellent guidance and support throughout my journey."
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Therapist",
        image: doctor,
        rating: 4,
        review: "Highly professional and dedicated to holistic health."
    }
];

const Testimonials = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-[#f9f3eb] drop-shadow-sm px-6 py-14 relative overflow-hidden">

                    <div className="bg-white absolute w-fit -top-1 right-0 pt-5 pr-5 pl-7 pb-7 rounded-bl-full">
                        <FaQuoteRight className="text-[24px] text-[#9dd246]" />
                    </div>

                    <div className="flex flex-col gap-y-6 items-center justify-center">

                        {/* Profile Image */}
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img src={testimonial.image} className="w-full h-full object-cover" alt={testimonial.name} />
                        </div>

                        <div className="flex flex-col items-center gap-y-2">
                            <h3 className="text-[18px] font-semibold font-[Merriweather] text-gray-900">
                                {testimonial.name}
                            </h3>
                            <p className="text-[12px] text-[#9dd246] text-center">
                                {testimonial.role}
                            </p>

                            {/* Star Rating */}
                            <div className="flex items-center justify-center gap-x-3 my-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-[22px] ${i < testimonial.rating ? "text-yellow-500" : "text-gray-200"}`}
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-[13px] text-gray-500 text-center">
                                {testimonial.review}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
